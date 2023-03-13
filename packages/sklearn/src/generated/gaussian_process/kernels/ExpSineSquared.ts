/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Exp-Sine-Squared kernel (aka periodic kernel).

  The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html)
 */
export class ExpSineSquared {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The length scale of the kernel.

      @defaultValue `1`
     */
    length_scale?: any

    /**
      The periodicity of the kernel.

      @defaultValue `1`
     */
    periodicity?: any

    /**
      The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.
     */
    length_scale_bounds?: 'fixed'

    /**
      The lower and upper bound on ‘periodicity’. If set to “fixed”, ‘periodicity’ cannot be changed during hyperparameter tuning.
     */
    periodicity_bounds?: 'fixed'
  }) {
    this.id = `ExpSineSquared${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ExpSineSquared.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import ExpSineSquared
try: bridgeExpSineSquared
except NameError: bridgeExpSineSquared = {}
`

    // set up constructor params
    await this._py.ex`ctor_ExpSineSquared = {'length_scale': ${
      this.opts['length_scale'] ?? undefined
    }, 'periodicity': ${
      this.opts['periodicity'] ?? undefined
    }, 'length_scale_bounds': ${
      this.opts['length_scale_bounds'] ?? undefined
    }, 'periodicity_bounds': ${this.opts['periodicity_bounds'] ?? undefined}}

ctor_ExpSineSquared = {k: v for k, v in ctor_ExpSineSquared.items() if v is not None}`

    await this._py
      .ex`bridgeExpSineSquared[${this.id}] = ExpSineSquared(**ctor_ExpSineSquared)`

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

    await this._py.ex`del bridgeExpSineSquared[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: {
    /**
      Left argument of the returned kernel k(X, Y)
     */
    X?: NDArray[]

    /**
      Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.
     */
    Y?: NDArray[]

    /**
      Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

      @defaultValue `false`
     */
    eval_gradient?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ExpSineSquared must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_ExpSineSquared___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_ExpSineSquared___call__ = {k: v for k, v in pms_ExpSineSquared___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExpSineSquared___call__ = bridgeExpSineSquared[${this.id}].__call__(**pms_ExpSineSquared___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_ExpSineSquared___call__.tolist() if hasattr(res_ExpSineSquared___call__, 'tolist') else res_ExpSineSquared___call__`
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
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExpSineSquared must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ExpSineSquared_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_ExpSineSquared_clone_with_theta = {k: v for k, v in pms_ExpSineSquared_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExpSineSquared_clone_with_theta = bridgeExpSineSquared[${this.id}].clone_with_theta(**pms_ExpSineSquared_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_ExpSineSquared_clone_with_theta.tolist() if hasattr(res_ExpSineSquared_clone_with_theta, 'tolist') else res_ExpSineSquared_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: {
    /**
      Left argument of the returned kernel k(X, Y)
     */
    X?: NDArray[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ExpSineSquared must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_ExpSineSquared_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ExpSineSquared_diag = {k: v for k, v in pms_ExpSineSquared_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExpSineSquared_diag = bridgeExpSineSquared[${this.id}].diag(**pms_ExpSineSquared_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_ExpSineSquared_diag.tolist() if hasattr(res_ExpSineSquared_diag, 'tolist') else res_ExpSineSquared_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ExpSineSquared must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_ExpSineSquared_is_stationary = {}

pms_ExpSineSquared_is_stationary = {k: v for k, v in pms_ExpSineSquared_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExpSineSquared_is_stationary = bridgeExpSineSquared[${this.id}].is_stationary(**pms_ExpSineSquared_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_ExpSineSquared_is_stationary.tolist() if hasattr(res_ExpSineSquared_is_stationary, 'tolist') else res_ExpSineSquared_is_stationary`
  }

  get hyperparameter_periodicity(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ExpSineSquared instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExpSineSquared must call init() before accessing hyperparameter_periodicity'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExpSineSquared_hyperparameter_periodicity = bridgeExpSineSquared[${this.id}].hyperparameter_periodicity`

      // convert the result from python to node.js
      return this
        ._py`attr_ExpSineSquared_hyperparameter_periodicity.tolist() if hasattr(attr_ExpSineSquared_hyperparameter_periodicity, 'tolist') else attr_ExpSineSquared_hyperparameter_periodicity`
    })()
  }
}
