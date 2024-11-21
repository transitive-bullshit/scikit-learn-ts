import type * as types from './types'
import { formatSource } from './formatter'
import { indentComment } from './utils'

// const optionsSuffix = 'Options'

const tsImports = `
import crypto from 'node:crypto'

import {
  PythonBridge,
  NDArray,
  ArrayLike,
  SparseMatrix
} from '@/sklearn/types'
`

export async function generateDefinition(
  pyDocDefinition: types.PyDocDefinition
): Promise<string> {
  if (pyDocDefinition.type === 'function') {
    return generateFunction(pyDocDefinition)
  } else {
    return generateClass(pyDocDefinition)
  }
}

export async function generateFunction(
  _pyDocFunction: types.PyDocFunction
): Promise<string> {
  // TODO
  throw new Error('Not yet implemented')
}

export async function generateClass(
  pyDocClass: types.PyDocClass
): Promise<string> {
  const pyBridgeName = `bridge${pyDocClass.name}`

  const pyImports = `
import numpy as np
from ${pyDocClass.namespace} import ${pyDocClass.name}
try: ${pyBridgeName}
except NameError: ${pyBridgeName} = {}
`

  //   const optionsTypeDeclaration = `
  // export interface ${pyDocClass.name}${optionsSuffix} ${genPyDocParamsType(
  //     pyDocClass.params
  //   )}
  // `

  // const methodNamesToPascalCase = pyDocClass.methods.reduce(
  //   (acc, method) => ({
  //     ...acc,
  //     [method.name]: pascalCase(method.name)
  //   }),
  //   {} as Record<string, string>
  // )

  function genPyDocParamType(
    param: types.PyDocParam,
    opts: { indent?: number } = {}
  ) {
    const pre = indentComment(
      [
        param.desc,
        param.type.default !== undefined && param.type.default !== null
          ? `@defaultValue \`${
              typeof param.type.default === 'string'
                ? "'" + param.type.default + "'"
                : param.type.default
            }\``
          : ''
      ],
      opts
    )
    const dec = `${param.name}?: ${param.type.type || 'any'}`
    return `${pre}\n${dec}`
  }

  function genPyDocParamsType(
    params: types.PyDocParam[],
    opts: { indent?: number } = {}
  ) {
    const types = params.map((param) => genPyDocParamType(param, opts))

    return `{
${types.join('\n\n')}
}`
  }

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

      const dec = `async ${method.name}(opts: ${genPyDocParamsType(
        method.params,
        { indent: 6 }
      )}): Promise<${method.returns?.type?.type || 'any'}> {
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
          return this._py\`${pyResIdentifier}.tolist() if hasattr(${pyResIdentifier}, 'tolist') else ${pyResIdentifier}\`
        }`
      return `${pre}\n${dec}`
    })
    .join('\n\n')

  const attribDeclarations = pyDocClass.attribs
    .map((attrib) => {
      const pre = attrib.desc ? indentComment(attrib.desc) : ''
      const pyResIdentifier = `attr_${pyDocClass.name}_${attrib.name}`

      // We use an IIFE here to get around the fact that getters can't be async functions
      const dec = `get ${attrib.name}(): Promise<${attrib.type.type || 'any'}> {
          if (this._isDisposed) {
            throw new Error('This ${
              pyDocClass.name
            } instance has already been disposed')
          }

          if (!this._isInitialized) {
            throw new Error('${
              pyDocClass.name
            } must call init() before accessing ${attrib.name}')
          }

          return (async () => {
            // invoke accessor
            await this._py.ex\`${pyResIdentifier} = ${pyBridgeName}[\${this.id}].${
              attrib.name
            }\`

            // convert the result from python to node.js
            return this._py\`${pyResIdentifier}.tolist() if hasattr(${pyResIdentifier}, 'tolist') else ${pyResIdentifier}\`
          })()
}`

      return `${pre}\n${dec}`
    })
    .join('\n\n')

  const pyConstructorParamsIdentifier = `ctor_${pyDocClass.name}`

  const preClass = indentComment(
    [pyDocClass.desc, `[Python Reference](${pyDocClass.url})`],
    {
      indent: 2
    }
  )

  const source = `
/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

${tsImports}

${preClass}
export class ${pyDocClass.name} {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ${genPyDocParamsType(pyDocClass.params, { indent: 6 })}) {
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

  ${attribDeclarations}
}
`

  return formatSource(source)
}
