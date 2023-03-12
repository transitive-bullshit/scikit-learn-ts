/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Kernel which is composed of a set of other kernels.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)
 */
export class CompoundKernel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: CompoundKernelOptions) {
    this.id = `CompoundKernel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This CompoundKernel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('CompoundKernel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import CompoundKernel
try: bridgeCompoundKernel
except NameError: bridgeCompoundKernel = {}
`

    // set up constructor params
    await this._py.ex`ctor_CompoundKernel = {'kernels': ${
      this.opts['kernels'] ?? undefined
    }}

ctor_CompoundKernel = {k: v for k, v in ctor_CompoundKernel.items() if v is not None}`

    await this._py
      .ex`bridgeCompoundKernel[${this.id}] = CompoundKernel(**ctor_CompoundKernel)`

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

    await this._py.ex`del bridgeCompoundKernel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the kernel k(X, Y) and optionally its gradient.

    Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.
   */
  async __call__(opts: CompoundKernelCallOptions): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error('This CompoundKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CompoundKernel must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_CompoundKernel___call__ = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }}

pms_CompoundKernel___call__ = {k: v for k, v in pms_CompoundKernel___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CompoundKernel___call__ = bridgeCompoundKernel[${this.id}].__call__(**pms_CompoundKernel___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_CompoundKernel___call__.tolist() if hasattr(res_CompoundKernel___call__, 'tolist') else res_CompoundKernel___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(
    opts: CompoundKernelCloneWithThetaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CompoundKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CompoundKernel must call init() before clone_with_theta()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CompoundKernel_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_CompoundKernel_clone_with_theta = {k: v for k, v in pms_CompoundKernel_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CompoundKernel_clone_with_theta = bridgeCompoundKernel[${this.id}].clone_with_theta(**pms_CompoundKernel_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_CompoundKernel_clone_with_theta.tolist() if hasattr(res_CompoundKernel_clone_with_theta, 'tolist') else res_CompoundKernel_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: CompoundKernelDiagOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CompoundKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CompoundKernel must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_CompoundKernel_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CompoundKernel_diag = {k: v for k, v in pms_CompoundKernel_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CompoundKernel_diag = bridgeCompoundKernel[${this.id}].diag(**pms_CompoundKernel_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_CompoundKernel_diag.tolist() if hasattr(res_CompoundKernel_diag, 'tolist') else res_CompoundKernel_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: CompoundKernelIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CompoundKernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CompoundKernel must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_CompoundKernel_is_stationary = {}

pms_CompoundKernel_is_stationary = {k: v for k, v in pms_CompoundKernel_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CompoundKernel_is_stationary = bridgeCompoundKernel[${this.id}].is_stationary(**pms_CompoundKernel_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_CompoundKernel_is_stationary.tolist() if hasattr(res_CompoundKernel_is_stationary, 'tolist') else res_CompoundKernel_is_stationary`
  }
}

export interface CompoundKernelOptions {
  /**
    The other kernels
   */
  kernels?: any
}

export interface CompoundKernelCallOptions {
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
}

export interface CompoundKernelCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface CompoundKernelDiagOptions {
  /**
    Argument to the kernel.
   */
  X?: ArrayLike[]
}

export interface CompoundKernelIsStationaryOptions {}
