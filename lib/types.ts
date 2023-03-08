export type { PythonBridge } from 'python-bridge'

export type ArrayLike =
  | number[]
  | any[]
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array
  | Uint8ClampedArray

export type NDArray = ArrayLike

export type SparseMatrix = any
