/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Custom warning to notify potential issues with data dimensionality.

  For example, in random projection, this warning is raised when the number of components, which quantifies the dimensionality of the target projection space, is higher than the number of features, which quantifies the dimensionality of the original source space, to imply that the dimensionality of the problem will not be reduced.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataDimensionalityWarning.html)
 */
export class DataDimensionalityWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: { args?: any }) {
    this.id = `DataDimensionalityWarning${crypto.randomUUID().split('-')[0]}`
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

    This instance is not usable until the `Promise` returned by `init()` resolves.
   */
  async init(py: PythonBridge): Promise<void> {
    if (this._isDisposed) {
      throw new Error(
        'This DataDimensionalityWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DataDimensionalityWarning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import DataDimensionalityWarning
try: bridgeDataDimensionalityWarning
except NameError: bridgeDataDimensionalityWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_DataDimensionalityWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_DataDimensionalityWarning = {k: v for k, v in ctor_DataDimensionalityWarning.items() if v is not None}`

    await this._py
      .ex`bridgeDataDimensionalityWarning[${this.id}] = DataDimensionalityWarning(**ctor_DataDimensionalityWarning)`

    this._isInitialized = true
  }

  /**
    Disposes of the underlying Python resources.

    Once `dispose()` is called, the instance is no longer usable.
   */
  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex`del bridgeDataDimensionalityWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
   */
  async with_traceback(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DataDimensionalityWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DataDimensionalityWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_DataDimensionalityWarning_with_traceback = {}

pms_DataDimensionalityWarning_with_traceback = {k: v for k, v in pms_DataDimensionalityWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DataDimensionalityWarning_with_traceback = bridgeDataDimensionalityWarning[${this.id}].with_traceback(**pms_DataDimensionalityWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_DataDimensionalityWarning_with_traceback.tolist() if hasattr(res_DataDimensionalityWarning_with_traceback, 'tolist') else res_DataDimensionalityWarning_with_traceback`
  }
}
