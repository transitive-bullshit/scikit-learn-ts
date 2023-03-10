/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Custom warning to capture convergence problems

  @see https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.ConvergenceWarning.html
 */
export class ConvergenceWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ConvergenceWarningOptions) {
    this.id = `ConvergenceWarning${crypto.randomUUID().split('-')[0]}`
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
        'This ConvergenceWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'ConvergenceWarning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import ConvergenceWarning
try: bridgeConvergenceWarning
except NameError: bridgeConvergenceWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_ConvergenceWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_ConvergenceWarning = {k: v for k, v in ctor_ConvergenceWarning.items() if v is not None}`

    await this._py
      .ex`bridgeConvergenceWarning[${this.id}] = ConvergenceWarning(**ctor_ConvergenceWarning)`

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

    await this._py.ex`del bridgeConvergenceWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with_traceback(tb) – set self.__traceback__ to tb and return self.
   */
  async with_traceback(
    opts: ConvergenceWarningWithTracebackOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConvergenceWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConvergenceWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_ConvergenceWarning_with_traceback = {}

pms_ConvergenceWarning_with_traceback = {k: v for k, v in pms_ConvergenceWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConvergenceWarning_with_traceback = bridgeConvergenceWarning[${this.id}].with_traceback(**pms_ConvergenceWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_ConvergenceWarning_with_traceback.tolist() if hasattr(res_ConvergenceWarning_with_traceback, 'tolist') else res_ConvergenceWarning_with_traceback`
  }
}

export interface ConvergenceWarningOptions {
  args?: any
}

export interface ConvergenceWarningWithTracebackOptions {}
