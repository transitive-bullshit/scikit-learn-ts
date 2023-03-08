import camelCase from 'camelcase'
import indentString from 'indent-string'

import * as types from './types'
import { formatSource } from './formatter'

const optionsSuffix = 'Options'

function indentComment(...lines: string[]): string {
  const content = lines.filter((line) => line?.trim().length > 0).join('\n\n')
  if (!content) {
    return ''
  }

  return `/**\n${indentString(content, 4)}\n   */`
}

export async function generateClass(
  pyDocClass: types.PyDocClass
): Promise<string> {
  const tsImports = `
import crypto from 'node:crypto'

import {
  PythonBridge, 
  NDArray, 
  ArrayLike, 
  SparseMatrix
} from '../types'
`

  const pyBridgeName = `bridge${pyDocClass.name}`

  const pyImports = `
import numpy as np
from ${pyDocClass.namespace} import ${pyDocClass.name}
try: ${pyBridgeName}
except NameError: ${pyBridgeName} = {}
`

  const optionsTypeDeclaration = `
export interface ${pyDocClass.name}${optionsSuffix} {
  ${pyDocClass.params
    .map((param) => {
      const pre = indentComment(
        param.desc,
        param.type.default !== undefined && param.type.default !== null
          ? `@defaultValue \`${
              typeof param.type.default === 'string'
                ? "'" + param.type.default + "'"
                : param.type.default
            }\``
          : ''
      )

      const dec = `${param.name}?: ${param.type.type || 'any'}`
      return `${pre}\n${dec}`
    })
    .join('\n\n')}
}
`
  const methodNamesToPascalCase = pyDocClass.methods.reduce(
    (acc, method) => ({
      ...acc,
      [method.name]: camelCase(method.name, {
        pascalCase: true,
        preserveConsecutiveUppercase: true,
        locale: 'en-US'
      })
    }),
    {} as Record<string, string>
  )

  const methodParamsTypeDeclarations = pyDocClass.methods
    .map(
      (method) => `
export interface ${pyDocClass.name}${
        methodNamesToPascalCase[method.name]
      }${optionsSuffix} {
  ${method.params
    .map((param) => {
      const pre = indentComment(
        param.desc,
        param.type.default !== undefined && param.type.default !== null
          ? `@defaultValue \`${
              typeof param.type.default === 'string'
                ? "'" + param.type.default + "'"
                : param.type.default
            }\``
          : ''
      )
      const dec = `${param.name}?: ${param.type.type || 'any'}`
      return `${pre}\n${dec}`
    })
    .join('\n\n')}
}
`
    )
    .join('\n\n\n')

  const generateParamsInitSnippet = (
    params: types.PyDocParam[],
    {
      pyIdentifier = 'pms',
      optsIdentifier = 'opts'
    }: {
      pyIdentifier?: string
      optsIdentifier?: string
    } = {}
  ) => {
    return `await this._py.ex\`${pyIdentifier} = {${params
      .map((param) => {
        if (param.type.isNDArray) {
          // NOTE: even though we reference the value of the ndarray twice here, it should only get transferred to python land once since the second reference evaluates to a boolean
          return `'${param.name}': np.array(\${${optsIdentifier}['${param.name}'] ?? undefined}) if \${${optsIdentifier}['${param.name}'] !== undefined} else None`
        }

        return `'${param.name}': \${${optsIdentifier}['${param.name}'] ?? undefined}`
      })
      .join(
        ', '
      )}}\n\n${pyIdentifier} = {k: v for k, v in ${pyIdentifier}.items() if v is not None}\`
    `
  }

  const methodDeclarations = pyDocClass.methods
    .map((method) => {
      const pre = method.desc ? indentComment(method.desc) : ''
      const pyParamsIdentifier = `pms_${pyDocClass.name}_${method.name}`
      const pyResIdentifier = `res_${pyDocClass.name}_${method.name}`

      const dec = `async ${method.name}(opts: ${pyDocClass.name}${
        methodNamesToPascalCase[method.name]
      }${optionsSuffix}): Promise<${method.return?.type?.type || 'any'}> {
          if (this._isDisposed) {
            throw new Error('This ${
              pyDocClass.name
            } instance has already been disposed')
          }

          if (!this._isInitialized) {
            throw new Error('${pyDocClass.name} must call init() before ${
        method.name
      }()')
          }

          // set up method params
          ${generateParamsInitSnippet(method.params, {
            pyIdentifier: pyParamsIdentifier
          })}

          // invoke method
          await this._py.ex\`${pyResIdentifier} = ${pyBridgeName}[\${this.id}].${
        method.name
      }(**${pyParamsIdentifier})\`

          // convert the result from python to node.js
          const res = await this._py\`${pyResIdentifier}.tolist() if hasattr(${pyResIdentifier}, 'tolist') else ${pyResIdentifier}\`

          return res
        }`
      return `${pre}\n${dec}`
    })
    .join('\n\n')

  const pyConstructorParamsIdentifier = `ctor_${pyDocClass.name}`

  const source = `
/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

${tsImports}

export class ${pyDocClass.name} {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false
  
  constructor(opts?: ${pyDocClass.name}${optionsSuffix}) {
    this.id = \`${pyDocClass.name}\${crypto.randomUUID().split('-')[0]}\`
    this.opts = opts || {}
  }

  get py(): PythonBridge {
    return this._py
  }

  set py(pythonBridge: PythonBridge) {
    this._py = pythonBridge
  }

  /**
    Initializes the underlying Python resources.

    This instance is not usable until the \`Promise\` returned by \`init()\` resolves.
   */
  async init(py: PythonBridge): Promise<void> {
    if (this._isDisposed) {
      throw new Error('This ${
        pyDocClass.name
      } instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('${
        pyDocClass.name
      }.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex\`${pyImports}\`

    // set up constructor params
    ${generateParamsInitSnippet(pyDocClass.params, {
      pyIdentifier: pyConstructorParamsIdentifier,
      optsIdentifier: 'this.opts'
    })}

    await this._py.ex\`${pyBridgeName}[\${this.id}] = ${
    pyDocClass.name
  }(**${pyConstructorParamsIdentifier})\`

    this._isInitialized = true
  }

  /**
    Disposes of the underlying Python resources.

    Once \`dispose()\` is called, the instance is no longer usable.
   */
  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex\`del ${pyBridgeName}[\${this.id}]\`

    this._isDisposed = true
  }

  ${methodDeclarations}
}

${optionsTypeDeclaration}

${methodParamsTypeDeclarations}
`

  return formatSource(source)
}
