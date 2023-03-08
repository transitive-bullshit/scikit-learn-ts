import indentString from 'indent-string'
import prettier from 'prettier'

import * as types from './types'

const optionsSuffix = 'Options'

// TODO: initialize PythonBridge properly
// TODO: handle positional arguments vs keyword arguments
// TODO: handle params
// TODO: handle ndarray inputs
// TODO: handle ndarray return types => tolist
// TODO: pass params to python constructor
// TODO: handle attributes

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

  const pyImports = `
import numpy as np
from ${pyDocClass.namespace} import ${pyDocClass.name}
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
  const methodParamsTypeDeclarations = pyDocClass.methods
    .map(
      (method) => `
export interface ${pyDocClass.name}${method.name}${optionsSuffix} {
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

  const methodDeclarations = pyDocClass.methods
    .map((method) => {
      const pre = method.desc ? indentComment(method.desc) : ''
      const dec = `async ${method.name}(opts: ${pyDocClass.name}${
        method.name
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

          const res = await this._py\`\${this.id}.${method.name}()\`
          return res
        }`
      return `${pre}\n${dec}`
    })
    .join('\n\n')

  const source = `
// NOTE: This file is auto-generated. Do not edit it directly.

${tsImports}

export class ${pyDocClass.name} {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false
  
  _params = ${JSON.stringify(pyDocClass.params)}

  constructor(opts?: ${pyDocClass.name}${optionsSuffix}) {
    this.id = \`${pyDocClass.name}\${crypto.randomUUID()}\`
    this.opts = opts || {}
  }

  async init() {
    if (this._isDisposed) {
      throw new Error('This ${
        pyDocClass.name
      } instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    const params = \`\${Object.keys(this.opts).map((key) => {
      const value = this.opts[key]
      const param = this._params.find((param) => param.name === key)

      if (!param) {
        throw new Error(\`Unknown param \${key}\`)
      }

      if (param.type === null) {
        throw new Error(\`Unsupported param \${key}\`)
      }

      if (param.type.type?.toLowerCase().includes('ndarray')) {
        return \`\${key}=np.array(\${value})\`
      }

      return \`\${key}=\${value}\`
    }).join(', ')}\`

    await this._py.ex\`${pyImports}\`
    await this._py.ex\`\${this.id} = ${pyDocClass.name}(\${params})\`

    this._isInitialized = true
  }

  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex\`del \${this.id}\`

    this._isDisposed = true
  }

  ${methodDeclarations}
}

${optionsTypeDeclaration}

${methodParamsTypeDeclarations}
`
  // return source

  const formatted = prettier.format(source, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
    useTabs: false,
    tabWidth: 2,
    bracketSpacing: true,
    arrowParens: 'always',
    trailingComma: 'all'
  })

  return formatted
}
