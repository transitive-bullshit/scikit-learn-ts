/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Warning raised when an estimator is unpickled with a inconsistent version.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.InconsistentVersionWarning.html)
 */
export class InconsistentVersionWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Estimator name.
     */
    estimator_name?: string

    /**
      Current scikit-learn version.
     */
    current_sklearn_version?: string

    /**
      Original scikit-learn version.
     */
    original_sklearn_version?: string
  }) {
    this.id = `InconsistentVersionWarning${crypto.randomUUID().split('-')[0]}`
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
        'This InconsistentVersionWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'InconsistentVersionWarning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import InconsistentVersionWarning
try: bridgeInconsistentVersionWarning
except NameError: bridgeInconsistentVersionWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_InconsistentVersionWarning = {'estimator_name': ${
      this.opts['estimator_name'] ?? undefined
    }, 'current_sklearn_version': ${
      this.opts['current_sklearn_version'] ?? undefined
    }, 'original_sklearn_version': ${
      this.opts['original_sklearn_version'] ?? undefined
    }}

ctor_InconsistentVersionWarning = {k: v for k, v in ctor_InconsistentVersionWarning.items() if v is not None}`

    await this._py
      .ex`bridgeInconsistentVersionWarning[${this.id}] = InconsistentVersionWarning(**ctor_InconsistentVersionWarning)`

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

    await this._py.ex`del bridgeInconsistentVersionWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
   */
  async with_traceback(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This InconsistentVersionWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'InconsistentVersionWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_InconsistentVersionWarning_with_traceback = {}

pms_InconsistentVersionWarning_with_traceback = {k: v for k, v in pms_InconsistentVersionWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_InconsistentVersionWarning_with_traceback = bridgeInconsistentVersionWarning[${this.id}].with_traceback(**pms_InconsistentVersionWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_InconsistentVersionWarning_with_traceback.tolist() if hasattr(res_InconsistentVersionWarning_with_traceback, 'tolist') else res_InconsistentVersionWarning_with_traceback`
  }

  get args(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This InconsistentVersionWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'InconsistentVersionWarning must call init() before accessing args'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_InconsistentVersionWarning_args = bridgeInconsistentVersionWarning[${this.id}].args`

      // convert the result from python to node.js
      return this
        ._py`attr_InconsistentVersionWarning_args.tolist() if hasattr(attr_InconsistentVersionWarning_args, 'tolist') else attr_InconsistentVersionWarning_args`
    })()
  }
}
