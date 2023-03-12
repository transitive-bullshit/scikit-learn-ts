/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Constant kernel.

  Can be used as part of a product-kernel where it scales the magnitude of the other factor (kernel) or as part of a sum-kernel, where it modifies the mean of the Gaussian process.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ConstantKernel.html
 */
export class ConstantKernel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ConstantKernelOptions) {
    this.id = `ConstantKernel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ConstantKernel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import ConstantKernel
try: bridgeConstantKernel
except NameError: bridgeConstantKernel = {}
`

    // set up constructor params
    await this._py.ex`ctor_ConstantKernel = {'constant_value': ${
      this.opts['constant_value'] ?? undefined
    }, 'constant_value_bounds': ${
      this.opts['constant_value_bounds'] ?? undefined
    }}

ctor_ConstantKernel = {k: v for k, v in ctor_ConstantKernel.items() if v is not None}`

    await this._py
      .ex`bridgeConstantKernel[${this.id}] = ConstantKernel(**ctor_ConstantKernel)`

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

    await this._py.ex`del bridgeConstantKernel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: ConstantKernelCallOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ConstantKernel must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_ConstantKernel___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_ConstantKernel___call__ = {k: v for k, v in pms_ConstantKernel___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConstantKernel___call__ = bridgeConstantKernel[${this.id}].__call__(**pms_ConstantKernel___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_ConstantKernel___call__.tolist() if hasattr(res_ConstantKernel___call__, 'tolist') else res_ConstantKernel___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(
    opts: ConstantKernelCloneWithThetaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConstantKernel must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ConstantKernel_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_ConstantKernel_clone_with_theta = {k: v for k, v in pms_ConstantKernel_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConstantKernel_clone_with_theta = bridgeConstantKernel[${this.id}].clone_with_theta(**pms_ConstantKernel_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_ConstantKernel_clone_with_theta.tolist() if hasattr(res_ConstantKernel_clone_with_theta, 'tolist') else res_ConstantKernel_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: ConstantKernelDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ConstantKernel must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_ConstantKernel_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ConstantKernel_diag = {k: v for k, v in pms_ConstantKernel_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConstantKernel_diag = bridgeConstantKernel[${this.id}].diag(**pms_ConstantKernel_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_ConstantKernel_diag.tolist() if hasattr(res_ConstantKernel_diag, 'tolist') else res_ConstantKernel_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: ConstantKernelIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ConstantKernel must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_ConstantKernel_is_stationary = {}

pms_ConstantKernel_is_stationary = {k: v for k, v in pms_ConstantKernel_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConstantKernel_is_stationary = bridgeConstantKernel[${this.id}].is_stationary(**pms_ConstantKernel_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_ConstantKernel_is_stationary.tolist() if hasattr(res_ConstantKernel_is_stationary, 'tolist') else res_ConstantKernel_is_stationary`
  }

  get hyperparameter_constant_value(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ConstantKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConstantKernel must call init() before accessing hyperparameter_constant_value'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ConstantKernel_hyperparameter_constant_value = bridgeConstantKernel[${this.id}].hyperparameter_constant_value`

      // convert the result from python to node.js
      return this
        ._py`attr_ConstantKernel_hyperparameter_constant_value.tolist() if hasattr(attr_ConstantKernel_hyperparameter_constant_value, 'tolist') else attr_ConstantKernel_hyperparameter_constant_value`
    })()
  }
}

export interface ConstantKernelOptions {
  /**
    The constant value which defines the covariance: k(x\_1, x\_2) = constant\_value

    @defaultValue `1`
   */
  constant_value?: number

  /**
    The lower and upper bound on `constant\_value`. If set to “fixed”, `constant\_value` cannot be changed during hyperparameter tuning.
   */
  constant_value_bounds?: 'fixed'
}

export interface ConstantKernelCallOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: ArrayLike[]

  /**
    Right argument of the returned kernel k(X, Y). If None, k(X, X) is evaluated instead.
   */
  Y?: ArrayLike[]

  /**
    Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is None.

    @defaultValue `false`
   */
  eval_gradient?: boolean
}

export interface ConstantKernelCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface ConstantKernelDiagOptions {
  /**
    Argument to the kernel.
   */
  X?: ArrayLike[]
}

export interface ConstantKernelIsStationaryOptions {}
