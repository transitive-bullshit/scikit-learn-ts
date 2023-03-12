/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Warning used to notify implicit data conversions happening in the code.

  This warning occurs when some input data needs to be converted or interpreted in a way that may not match the user’s expectations.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataConversionWarning.html)
 */
export class DataConversionWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: DataConversionWarningOptions) {
    this.id = `DataConversionWarning${crypto.randomUUID().split('-')[0]}`
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
        'This DataConversionWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DataConversionWarning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import DataConversionWarning
try: bridgeDataConversionWarning
except NameError: bridgeDataConversionWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_DataConversionWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_DataConversionWarning = {k: v for k, v in ctor_DataConversionWarning.items() if v is not None}`

    await this._py
      .ex`bridgeDataConversionWarning[${this.id}] = DataConversionWarning(**ctor_DataConversionWarning)`

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

    await this._py.ex`del bridgeDataConversionWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
   */
  async with_traceback(
    opts: DataConversionWarningWithTracebackOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DataConversionWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DataConversionWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_DataConversionWarning_with_traceback = {}

pms_DataConversionWarning_with_traceback = {k: v for k, v in pms_DataConversionWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DataConversionWarning_with_traceback = bridgeDataConversionWarning[${this.id}].with_traceback(**pms_DataConversionWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_DataConversionWarning_with_traceback.tolist() if hasattr(res_DataConversionWarning_with_traceback, 'tolist') else res_DataConversionWarning_with_traceback`
  }
}

export interface DataConversionWarningOptions {
  args?: any
}

export interface DataConversionWarningWithTracebackOptions {}
