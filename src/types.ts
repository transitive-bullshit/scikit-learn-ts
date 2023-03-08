export type PyDocDefinitionType = 'function' | 'class'

export interface PyDocDefinitionBase {
  type: PyDocDefinitionType
  namespace: string
  name: string
  desc?: string
  url: string
  params: PyDocParam[]
}

export interface PyDocFunction extends PyDocDefinitionBase {
  type: 'function'
  returns: PyDocReturn
}

export interface PyDocClass extends PyDocDefinitionBase {
  type: 'class'
  attribs: PyDocAttrib[]
  methods: PyDocMethod[]
}

export type PyDocDefinition = PyDocFunction | PyDocClass

export interface PyDocParam {
  name: string
  desc?: string
  type: PyDocType
}

export type PyDocType = {
  type: any
  raw: string
  default?: any
  isNDArray?: boolean
}

export interface PyDocAttrib extends PyDocParam {}
export interface PyDocReturn extends PyDocParam {}

export interface PyDocMethod {
  name: string
  desc?: string
  params: PyDocParam[]
  returns: PyDocReturn
}
