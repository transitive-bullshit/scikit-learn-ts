/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Exception class to raise if estimator is used before fitting.

  This class inherits from both ValueError and AttributeError to help with exception handling and backward compatibility.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.NotFittedError.html
 */
export class NotFittedError {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NotFittedErrorOptions) {
    this.id = `NotFittedError${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This NotFittedError instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('NotFittedError.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import NotFittedError
try: bridgeNotFittedError
except NameError: bridgeNotFittedError = {}
`

    // set up constructor params
    await this._py.ex`ctor_NotFittedError = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_NotFittedError = {k: v for k, v in ctor_NotFittedError.items() if v is not None}`

    await this._py
      .ex`bridgeNotFittedError[${this.id}] = NotFittedError(**ctor_NotFittedError)`

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

    await this._py.ex`del bridgeNotFittedError[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with_traceback(tb) – set self.__traceback__ to tb and return self.
   */
  async with_traceback(opts: NotFittedErrorWithTracebackOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NotFittedError instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NotFittedError must call init() before with_traceback()')
    }

    // set up method params
    await this._py.ex`pms_NotFittedError_with_traceback = {}

pms_NotFittedError_with_traceback = {k: v for k, v in pms_NotFittedError_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NotFittedError_with_traceback = bridgeNotFittedError[${this.id}].with_traceback(**pms_NotFittedError_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_NotFittedError_with_traceback.tolist() if hasattr(res_NotFittedError_with_traceback, 'tolist') else res_NotFittedError_with_traceback`
  }
}

export interface NotFittedErrorOptions {
  args?: any
}

export interface NotFittedErrorWithTracebackOptions {}
