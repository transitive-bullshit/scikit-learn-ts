/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Rational Quadratic kernel.

  The RationalQuadratic kernel can be seen as a scale mixture (an infinite sum) of RBF kernels with different characteristic length scales. It is parameterized by a length scale parameter \\(l>0\\) and a scale mixture parameter \\(\\alpha>0\\). Only the isotropic variant where length\_scale \\(l\\) is a scalar is supported at the moment. The kernel is given by:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RationalQuadratic.html
 */
export class RationalQuadratic {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RationalQuadraticOptions) {
    this.id = `RationalQuadratic${crypto.randomUUID().split('-')[0]}`
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
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RationalQuadratic.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import RationalQuadratic
try: bridgeRationalQuadratic
except NameError: bridgeRationalQuadratic = {}
`

    // set up constructor params
    await this._py.ex`ctor_RationalQuadratic = {'length_scale': ${
      this.opts['length_scale'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'length_scale_bounds': ${
      this.opts['length_scale_bounds'] ?? undefined
    }, 'alpha_bounds': ${this.opts['alpha_bounds'] ?? undefined}}

ctor_RationalQuadratic = {k: v for k, v in ctor_RationalQuadratic.items() if v is not None}`

    await this._py
      .ex`bridgeRationalQuadratic[${this.id}] = RationalQuadratic(**ctor_RationalQuadratic)`

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

    await this._py.ex`del bridgeRationalQuadratic[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: RationalQuadraticCallOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RationalQuadratic must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_RationalQuadratic___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_RationalQuadratic___call__ = {k: v for k, v in pms_RationalQuadratic___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RationalQuadratic___call__ = bridgeRationalQuadratic[${this.id}].__call__(**pms_RationalQuadratic___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_RationalQuadratic___call__.tolist() if hasattr(res_RationalQuadratic___call__, 'tolist') else res_RationalQuadratic___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(
    opts: RationalQuadraticCloneWithThetaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RationalQuadratic must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RationalQuadratic_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_RationalQuadratic_clone_with_theta = {k: v for k, v in pms_RationalQuadratic_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RationalQuadratic_clone_with_theta = bridgeRationalQuadratic[${this.id}].clone_with_theta(**pms_RationalQuadratic_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_RationalQuadratic_clone_with_theta.tolist() if hasattr(res_RationalQuadratic_clone_with_theta, 'tolist') else res_RationalQuadratic_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: RationalQuadraticDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RationalQuadratic must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_RationalQuadratic_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RationalQuadratic_diag = {k: v for k, v in pms_RationalQuadratic_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RationalQuadratic_diag = bridgeRationalQuadratic[${this.id}].diag(**pms_RationalQuadratic_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_RationalQuadratic_diag.tolist() if hasattr(res_RationalQuadratic_diag, 'tolist') else res_RationalQuadratic_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(
    opts: RationalQuadraticIsStationaryOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RationalQuadratic must call init() before is_stationary()'
      )
    }

    // set up method params
    await this._py.ex`pms_RationalQuadratic_is_stationary = {}

pms_RationalQuadratic_is_stationary = {k: v for k, v in pms_RationalQuadratic_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RationalQuadratic_is_stationary = bridgeRationalQuadratic[${this.id}].is_stationary(**pms_RationalQuadratic_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_RationalQuadratic_is_stationary.tolist() if hasattr(res_RationalQuadratic_is_stationary, 'tolist') else res_RationalQuadratic_is_stationary`
  }

  get hyperparameter_alpha(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RationalQuadratic must call init() before accessing hyperparameter_alpha'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RationalQuadratic_hyperparameter_alpha = bridgeRationalQuadratic[${this.id}].hyperparameter_alpha`

      // convert the result from python to node.js
      return this
        ._py`attr_RationalQuadratic_hyperparameter_alpha.tolist() if hasattr(attr_RationalQuadratic_hyperparameter_alpha, 'tolist') else attr_RationalQuadratic_hyperparameter_alpha`
    })()
  }

  get hyperparameter_length_scale(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RationalQuadratic instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RationalQuadratic must call init() before accessing hyperparameter_length_scale'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RationalQuadratic_hyperparameter_length_scale = bridgeRationalQuadratic[${this.id}].hyperparameter_length_scale`

      // convert the result from python to node.js
      return this
        ._py`attr_RationalQuadratic_hyperparameter_length_scale.tolist() if hasattr(attr_RationalQuadratic_hyperparameter_length_scale, 'tolist') else attr_RationalQuadratic_hyperparameter_length_scale`
    })()
  }
}

export interface RationalQuadraticOptions {
  /**
    The length scale of the kernel.

    @defaultValue `1`
   */
  length_scale?: any

  /**
    Scale mixture parameter

    @defaultValue `1`
   */
  alpha?: any

  /**
    The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.
   */
  length_scale_bounds?: 'fixed'

  /**
    The lower and upper bound on ‘alpha’. If set to “fixed”, ‘alpha’ cannot be changed during hyperparameter tuning.
   */
  alpha_bounds?: 'fixed'
}

export interface RationalQuadraticCallOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: NDArray[]

  /**
    Right argument of the returned kernel k(X, Y). If None, k(X, X) if evaluated instead.
   */
  Y?: NDArray[]

  /**
    Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is None.

    @defaultValue `false`
   */
  eval_gradient?: boolean
}

export interface RationalQuadraticCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface RationalQuadraticDiagOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: NDArray[]
}

export interface RationalQuadraticIsStationaryOptions {}
