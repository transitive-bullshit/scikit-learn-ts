/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Radial basis function kernel (aka squared-exponential kernel).

  The RBF kernel is a stationary kernel. It is also known as the “squared exponential” kernel. It is parameterized by a length scale parameter \\(l>0\\), which can either be a scalar (isotropic variant of the kernel) or a vector with the same number of dimensions as the inputs X (anisotropic variant of the kernel). The kernel is given by:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html
 */
export class RBF {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RBFOptions) {
    this.id = `RBF${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RBF instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RBF.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import RBF
try: bridgeRBF
except NameError: bridgeRBF = {}
`

    // set up constructor params
    await this._py.ex`ctor_RBF = {'length_scale': np.array(${
      this.opts['length_scale'] ?? undefined
    }) if ${
      this.opts['length_scale'] !== undefined
    } else None, 'length_scale_bounds': ${
      this.opts['length_scale_bounds'] ?? undefined
    }}

ctor_RBF = {k: v for k, v in ctor_RBF.items() if v is not None}`

    await this._py.ex`bridgeRBF[${this.id}] = RBF(**ctor_RBF)`

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

    await this._py.ex`del bridgeRBF[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: RBFCallOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBF must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_RBF___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_RBF___call__ = {k: v for k, v in pms_RBF___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBF___call__ = bridgeRBF[${this.id}].__call__(**pms_RBF___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_RBF___call__.tolist() if hasattr(res_RBF___call__, 'tolist') else res_RBF___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(opts: RBFCloneWithThetaOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBF must call init() before clone_with_theta()')
    }

    // set up method params
    await this._py.ex`pms_RBF_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_RBF_clone_with_theta = {k: v for k, v in pms_RBF_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBF_clone_with_theta = bridgeRBF[${this.id}].clone_with_theta(**pms_RBF_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_RBF_clone_with_theta.tolist() if hasattr(res_RBF_clone_with_theta, 'tolist') else res_RBF_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: RBFDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBF must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_RBF_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RBF_diag = {k: v for k, v in pms_RBF_diag.items() if v is not None}`

    // invoke method
    await this._py.ex`res_RBF_diag = bridgeRBF[${this.id}].diag(**pms_RBF_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_RBF_diag.tolist() if hasattr(res_RBF_diag, 'tolist') else res_RBF_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: RBFIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBF must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_RBF_is_stationary = {}

pms_RBF_is_stationary = {k: v for k, v in pms_RBF_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBF_is_stationary = bridgeRBF[${this.id}].is_stationary(**pms_RBF_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_RBF_is_stationary.tolist() if hasattr(res_RBF_is_stationary, 'tolist') else res_RBF_is_stationary`
  }

  get anisotropic(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBF must call init() before accessing anisotropic')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBF_anisotropic = bridgeRBF[${this.id}].anisotropic`

      // convert the result from python to node.js
      return this
        ._py`attr_RBF_anisotropic.tolist() if hasattr(attr_RBF_anisotropic, 'tolist') else attr_RBF_anisotropic`
    })()
  }

  get hyperparameter_length_scale(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBF must call init() before accessing hyperparameter_length_scale'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBF_hyperparameter_length_scale = bridgeRBF[${this.id}].hyperparameter_length_scale`

      // convert the result from python to node.js
      return this
        ._py`attr_RBF_hyperparameter_length_scale.tolist() if hasattr(attr_RBF_hyperparameter_length_scale, 'tolist') else attr_RBF_hyperparameter_length_scale`
    })()
  }
}

export interface RBFOptions {
  /**
    The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

    @defaultValue `1`
   */
  length_scale?: number | NDArray

  /**
    The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.
   */
  length_scale_bounds?: 'fixed'
}

export interface RBFCallOptions {
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
}

export interface RBFCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface RBFDiagOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: NDArray[]
}

export interface RBFIsStationaryOptions {}
