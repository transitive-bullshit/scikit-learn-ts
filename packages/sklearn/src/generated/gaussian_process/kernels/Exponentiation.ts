/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  The Exponentiation kernel takes one base kernel and a scalar parameter \\(p\\) and combines them via

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Exponentiation.html)
 */
export class Exponentiation {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The base kernel
     */
    kernel?: any

    /**
      The exponent for the base kernel
     */
    exponent?: number
  }) {
    this.id = `Exponentiation${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Exponentiation instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Exponentiation.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import Exponentiation
try: bridgeExponentiation
except NameError: bridgeExponentiation = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Exponentiation = {'kernel': ${this.opts['kernel'] ?? undefined}, 'exponent': ${this.opts['exponent'] ?? undefined}}

ctor_Exponentiation = {k: v for k, v in ctor_Exponentiation.items() if v is not None}`

    await this._py
      .ex`bridgeExponentiation[${this.id}] = Exponentiation(**ctor_Exponentiation)`

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

    await this._py.ex`del bridgeExponentiation[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: {
    /**
      Left argument of the returned kernel k(X, Y)
     */
    X?: ArrayLike[]

    /**
      Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.
     */
    Y?: ArrayLike[]

    /**
      Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

      @defaultValue `false`
     */
    eval_gradient?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Exponentiation instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Exponentiation must call init() before __call__()')
    }

    // set up method params
    await this._py
      .ex`pms_Exponentiation___call__ = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${opts['eval_gradient'] ?? undefined}}

pms_Exponentiation___call__ = {k: v for k, v in pms_Exponentiation___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Exponentiation___call__ = bridgeExponentiation[${this.id}].__call__(**pms_Exponentiation___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_Exponentiation___call__.tolist() if hasattr(res_Exponentiation___call__, 'tolist') else res_Exponentiation___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(opts: {
    /**
      The hyperparameters
     */
    theta?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Exponentiation instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Exponentiation must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_Exponentiation_clone_with_theta = {'theta': np.array(${opts['theta'] ?? undefined}) if ${opts['theta'] !== undefined} else None}

pms_Exponentiation_clone_with_theta = {k: v for k, v in pms_Exponentiation_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Exponentiation_clone_with_theta = bridgeExponentiation[${this.id}].clone_with_theta(**pms_Exponentiation_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_Exponentiation_clone_with_theta.tolist() if hasattr(res_Exponentiation_clone_with_theta, 'tolist') else res_Exponentiation_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: {
    /**
      Argument to the kernel.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Exponentiation instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Exponentiation must call init() before diag()')
    }

    // set up method params
    await this._py
      .ex`pms_Exponentiation_diag = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_Exponentiation_diag = {k: v for k, v in pms_Exponentiation_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Exponentiation_diag = bridgeExponentiation[${this.id}].diag(**pms_Exponentiation_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_Exponentiation_diag.tolist() if hasattr(res_Exponentiation_diag, 'tolist') else res_Exponentiation_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Exponentiation instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Exponentiation must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_Exponentiation_is_stationary = {}

pms_Exponentiation_is_stationary = {k: v for k, v in pms_Exponentiation_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Exponentiation_is_stationary = bridgeExponentiation[${this.id}].is_stationary(**pms_Exponentiation_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_Exponentiation_is_stationary.tolist() if hasattr(res_Exponentiation_is_stationary, 'tolist') else res_Exponentiation_is_stationary`
  }
}
