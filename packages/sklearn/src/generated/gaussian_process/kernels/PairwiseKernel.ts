/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Wrapper for kernels in sklearn.metrics.pairwise.

  A thin wrapper around the functionality of the kernels in sklearn.metrics.pairwise.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.PairwiseKernel.html
 */
export class PairwiseKernel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PairwiseKernelOptions) {
    this.id = `PairwiseKernel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PairwiseKernel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import PairwiseKernel
try: bridgePairwiseKernel
except NameError: bridgePairwiseKernel = {}
`

    // set up constructor params
    await this._py.ex`ctor_PairwiseKernel = {'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'gamma_bounds': ${this.opts['gamma_bounds'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'pairwise_kernels_kwargs': ${
      this.opts['pairwise_kernels_kwargs'] ?? undefined
    }}

ctor_PairwiseKernel = {k: v for k, v in ctor_PairwiseKernel.items() if v is not None}`

    await this._py
      .ex`bridgePairwiseKernel[${this.id}] = PairwiseKernel(**ctor_PairwiseKernel)`

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

    await this._py.ex`del bridgePairwiseKernel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.
   */
  async __call__(opts: PairwiseKernelCallOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PairwiseKernel must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_PairwiseKernel___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_PairwiseKernel___call__ = {k: v for k, v in pms_PairwiseKernel___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PairwiseKernel___call__ = bridgePairwiseKernel[${this.id}].__call__(**pms_PairwiseKernel___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_PairwiseKernel___call__.tolist() if hasattr(res_PairwiseKernel___call__, 'tolist') else res_PairwiseKernel___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(
    opts: PairwiseKernelCloneWithThetaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PairwiseKernel must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PairwiseKernel_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_PairwiseKernel_clone_with_theta = {k: v for k, v in pms_PairwiseKernel_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PairwiseKernel_clone_with_theta = bridgePairwiseKernel[${this.id}].clone_with_theta(**pms_PairwiseKernel_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_PairwiseKernel_clone_with_theta.tolist() if hasattr(res_PairwiseKernel_clone_with_theta, 'tolist') else res_PairwiseKernel_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: PairwiseKernelDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PairwiseKernel must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_PairwiseKernel_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PairwiseKernel_diag = {k: v for k, v in pms_PairwiseKernel_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PairwiseKernel_diag = bridgePairwiseKernel[${this.id}].diag(**pms_PairwiseKernel_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_PairwiseKernel_diag.tolist() if hasattr(res_PairwiseKernel_diag, 'tolist') else res_PairwiseKernel_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: PairwiseKernelIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PairwiseKernel must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_PairwiseKernel_is_stationary = {}

pms_PairwiseKernel_is_stationary = {k: v for k, v in pms_PairwiseKernel_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PairwiseKernel_is_stationary = bridgePairwiseKernel[${this.id}].is_stationary(**pms_PairwiseKernel_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_PairwiseKernel_is_stationary.tolist() if hasattr(res_PairwiseKernel_is_stationary, 'tolist') else res_PairwiseKernel_is_stationary`
  }

  get hyperparameter_gamma(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PairwiseKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PairwiseKernel must call init() before accessing hyperparameter_gamma'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PairwiseKernel_hyperparameter_gamma = bridgePairwiseKernel[${this.id}].hyperparameter_gamma`

      // convert the result from python to node.js
      return this
        ._py`attr_PairwiseKernel_hyperparameter_gamma.tolist() if hasattr(attr_PairwiseKernel_hyperparameter_gamma, 'tolist') else attr_PairwiseKernel_hyperparameter_gamma`
    })()
  }
}

export interface PairwiseKernelOptions {
  /**
    Parameter gamma of the pairwise kernel specified by metric. It should be positive.

    @defaultValue `1`
   */
  gamma?: number

  /**
    The lower and upper bound on ‘gamma’. If set to “fixed”, ‘gamma’ cannot be changed during hyperparameter tuning.
   */
  gamma_bounds?: 'fixed'

  /**
    The metric to use when calculating kernel between instances in a feature array. If metric is a string, it must be one of the metrics in pairwise.PAIRWISE\_KERNEL\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them.

    @defaultValue `'linear'`
   */
  metric?:
    | 'linear'
    | 'additive_chi2'
    | 'chi2'
    | 'poly'
    | 'polynomial'
    | 'rbf'
    | 'laplacian'
    | 'sigmoid'
    | 'cosine'

  /**
    All entries of this dict (if any) are passed as keyword arguments to the pairwise kernel function.
   */
  pairwise_kernels_kwargs?: any
}

export interface PairwiseKernelCallOptions {
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

export interface PairwiseKernelCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface PairwiseKernelDiagOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: NDArray[]
}

export interface PairwiseKernelIsStationaryOptions {}
