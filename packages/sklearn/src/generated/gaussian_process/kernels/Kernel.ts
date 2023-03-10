/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Base class for all kernels.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Kernel.html
 */
export class Kernel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KernelOptions) {
    this.id = `Kernel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Kernel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Kernel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import Kernel
try: bridgeKernel
except NameError: bridgeKernel = {}
`

    // set up constructor params
    await this._py.ex`ctor_Kernel = {}

ctor_Kernel = {k: v for k, v in ctor_Kernel.items() if v is not None}`

    await this._py.ex`bridgeKernel[${this.id}] = Kernel(**ctor_Kernel)`

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

    await this._py.ex`del bridgeKernel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Evaluate the kernel.
   */
  async __call__(opts: KernelCallOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Kernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Kernel must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_Kernel___call__ = {}

pms_Kernel___call__ = {k: v for k, v in pms_Kernel___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Kernel___call__ = bridgeKernel[${this.id}].__call__(**pms_Kernel___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_Kernel___call__.tolist() if hasattr(res_Kernel___call__, 'tolist') else res_Kernel___call__`
  }

  /**
    Returns a clone of self with given hyperparameters theta.
   */
  async clone_with_theta(opts: KernelCloneWithThetaOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Kernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Kernel must call init() before clone_with_theta()')
    }

    // set up method params
    await this._py.ex`pms_Kernel_clone_with_theta = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None}

pms_Kernel_clone_with_theta = {k: v for k, v in pms_Kernel_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Kernel_clone_with_theta = bridgeKernel[${this.id}].clone_with_theta(**pms_Kernel_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_Kernel_clone_with_theta.tolist() if hasattr(res_Kernel_clone_with_theta, 'tolist') else res_Kernel_clone_with_theta`
  }

  /**
    Returns the diagonal of the kernel k(X, X).

    The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.
   */
  async diag(opts: KernelDiagOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Kernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Kernel must call init() before diag()')
    }

    // set up method params
    await this._py.ex`pms_Kernel_diag = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Kernel_diag = {k: v for k, v in pms_Kernel_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Kernel_diag = bridgeKernel[${this.id}].diag(**pms_Kernel_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_Kernel_diag.tolist() if hasattr(res_Kernel_diag, 'tolist') else res_Kernel_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: KernelIsStationaryOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Kernel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Kernel must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_Kernel_is_stationary = {}

pms_Kernel_is_stationary = {k: v for k, v in pms_Kernel_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Kernel_is_stationary = bridgeKernel[${this.id}].is_stationary(**pms_Kernel_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_Kernel_is_stationary.tolist() if hasattr(res_Kernel_is_stationary, 'tolist') else res_Kernel_is_stationary`
  }
}

export interface KernelOptions {}

export interface KernelCallOptions {}

export interface KernelCloneWithThetaOptions {
  /**
    The hyperparameters
   */
  theta?: NDArray
}

export interface KernelDiagOptions {
  /**
    Left argument of the returned kernel k(X, Y)
   */
  X?: ArrayLike
}

export interface KernelIsStationaryOptions {}
