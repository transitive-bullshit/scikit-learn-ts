/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Warning class used if there is an error while fitting the estimator.

  This Warning is used in meta estimators GridSearchCV and RandomizedSearchCV and the cross-validation helper function cross_val_score to warn when there is an error while fitting the estimator.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.FitFailedWarning.html
 */
export class FitFailedWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: FitFailedWarningOptions) {
    this.id = `FitFailedWarning${crypto.randomUUID().split('-')[0]}`
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
        'This FitFailedWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('FitFailedWarning.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import FitFailedWarning
try: bridgeFitFailedWarning
except NameError: bridgeFitFailedWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_FitFailedWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_FitFailedWarning = {k: v for k, v in ctor_FitFailedWarning.items() if v is not None}`

    await this._py
      .ex`bridgeFitFailedWarning[${this.id}] = FitFailedWarning(**ctor_FitFailedWarning)`

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

    await this._py.ex`del bridgeFitFailedWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with_traceback(tb) – set self.__traceback__ to tb and return self.
   */
  async with_traceback(
    opts: FitFailedWarningWithTracebackOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FitFailedWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FitFailedWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_FitFailedWarning_with_traceback = {}

pms_FitFailedWarning_with_traceback = {k: v for k, v in pms_FitFailedWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FitFailedWarning_with_traceback = bridgeFitFailedWarning[${this.id}].with_traceback(**pms_FitFailedWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_FitFailedWarning_with_traceback.tolist() if hasattr(res_FitFailedWarning_with_traceback, 'tolist') else res_FitFailedWarning_with_traceback`
  }
}

export interface FitFailedWarningOptions {
  args?: any
}

export interface FitFailedWarningWithTracebackOptions {}
