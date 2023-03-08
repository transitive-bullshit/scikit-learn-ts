export interface PyDocClass {
  namespace: string
  name: string
  desc?: string
  url: string
  params: PyDocParam[]
  attribs: PyDocAttrib[]
  methods: PyDocMethod[]
}

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
  return: PyDocReturn
}
