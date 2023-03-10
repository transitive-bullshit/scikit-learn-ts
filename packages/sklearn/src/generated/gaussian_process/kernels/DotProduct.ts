/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Dot-Product kernel.

  The DotProduct kernel is non-stationary and can be obtained from linear regression by putting \(N(0, 1)\) priors on the coefficients of \(x_d (d = 1, . . . , D)\) and a prior of \(N(0, \sigma_0^2)\) on the bias. The DotProduct kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter sigma_0 \(\sigma\) which controls the inhomogenity of the kernel. For \(\sigma_0^2 =0\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.DotProduct.html
 */
export class DotProduct {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: DotProductOptions) {
    this.id = `DotProduct${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DotProduct.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import DotProduct
try: bridgeDotProduct
except NameError: bridgeDotProduct = {}
`

    // set up constructor params
    await this._py.ex`ctor_DotProduct = {'sigma_0': ${
      this.opts['sigma_0'] ?? undefined
    }, 'sigma_0_bounds': ${this.opts['sigma_0_bounds'] ?? undefined}}

ctor_DotProduct = {k: v for k, v in ctor_DotProduct.items() if v is not None}`

    await this._py
      .ex`bridgeDotProduct[${this.id}] = DotProduct(**ctor_DotProduct)`

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

    await this._py.ex`del bridgeDotProduct[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: DotProductCallOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DotProduct must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_DotProduct___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_DotProduct___call__ = {k: v for k, v in pms_DotProduct___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DotProduct___call__ = bridgeDotProduct[${this.id}].__call__(**pms_DotProduct___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_DotProduct___call__.tolist() if hasattr(res_DotProduct___call__, 'tolist') else res_DotProduct___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(opts: DotProductCloneWithThetaOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DotProduct must call init() before clone_with_theta()')
    }

    // set up method params
    await this._py.ex`pms_DotProduct_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_DotProduct_clone_with_theta = {k: v for k, v in pms_DotProduct_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DotProduct_clone_with_theta = bridgeDotProduct[${this.id}].clone_with_theta(**pms_DotProduct_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_DotProduct_clone_with_theta.tolist() if hasattr(res_DotProduct_clone_with_theta, 'tolist') else res_DotProduct_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: DotProductDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DotProduct must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_DotProduct_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_DotProduct_diag = {k: v for k, v in pms_DotProduct_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DotProduct_diag = bridgeDotProduct[${this.id}].diag(**pms_DotProduct_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_DotProduct_diag.tolist() if hasattr(res_DotProduct_diag, 'tolist') else res_DotProduct_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: DotProductIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DotProduct must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_DotProduct_is_stationary = {}

pms_DotProduct_is_stationary = {k: v for k, v in pms_DotProduct_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DotProduct_is_stationary = bridgeDotProduct[${this.id}].is_stationary(**pms_DotProduct_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_DotProduct_is_stationary.tolist() if hasattr(res_DotProduct_is_stationary, 'tolist') else res_DotProduct_is_stationary`
  }

  get hyperparameter_sigma_0(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DotProduct instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DotProduct must call init() before accessing hyperparameter_sigma_0'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DotProduct_hyperparameter_sigma_0 = bridgeDotProduct[${this.id}].hyperparameter_sigma_0`

      // convert the result from python to node.js
      return this
        ._py`attr_DotProduct_hyperparameter_sigma_0.tolist() if hasattr(attr_DotProduct_hyperparameter_sigma_0, 'tolist') else attr_DotProduct_hyperparameter_sigma_0`
    })()
  }
}

export interface DotProductOptions {
  /**
    Parameter controlling the inhomogenity of the kernel. If sigma_0=0, the kernel is homogeneous.

    @defaultValue `1`
   */
  sigma_0?: any

  /**
    The lower and upper bound on ‘sigma_0’. If set to “fixed”, ‘sigma_0’ cannot be changed during hyperparameter tuning.
   */
  sigma_0_bounds?: 'fixed'
}

export interface DotProductCallOptions {
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

export interface DotProductCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface DotProductDiagOptions {
  /**
    Left argument of the returned kernel k(X, Y).
   */
  X?: NDArray[]
}

export interface DotProductIsStationaryOptions {}
