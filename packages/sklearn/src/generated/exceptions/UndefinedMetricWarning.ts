/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Warning used when the metric is invalid

  @see https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.UndefinedMetricWarning.html
 */
export class UndefinedMetricWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: UndefinedMetricWarningOptions) {
    this.id = `UndefinedMetricWarning${crypto.randomUUID().split('-')[0]}`
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
        'This UndefinedMetricWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'UndefinedMetricWarning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import UndefinedMetricWarning
try: bridgeUndefinedMetricWarning
except NameError: bridgeUndefinedMetricWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_UndefinedMetricWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_UndefinedMetricWarning = {k: v for k, v in ctor_UndefinedMetricWarning.items() if v is not None}`

    await this._py
      .ex`bridgeUndefinedMetricWarning[${this.id}] = UndefinedMetricWarning(**ctor_UndefinedMetricWarning)`

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

    await this._py.ex`del bridgeUndefinedMetricWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
   */
  async with_traceback(
    opts: UndefinedMetricWarningWithTracebackOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This UndefinedMetricWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'UndefinedMetricWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_UndefinedMetricWarning_with_traceback = {}

pms_UndefinedMetricWarning_with_traceback = {k: v for k, v in pms_UndefinedMetricWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_UndefinedMetricWarning_with_traceback = bridgeUndefinedMetricWarning[${this.id}].with_traceback(**pms_UndefinedMetricWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_UndefinedMetricWarning_with_traceback.tolist() if hasattr(res_UndefinedMetricWarning_with_traceback, 'tolist') else res_UndefinedMetricWarning_with_traceback`
  }
}

export interface UndefinedMetricWarningOptions {
  args?: any
}

export interface UndefinedMetricWarningWithTracebackOptions {}
