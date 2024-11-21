/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  The `Product` kernel takes two kernels \\(k_1\\) and \\(k_2\\) and combines them via

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Product.html)
 */
export class Product {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The first base-kernel of the product-kernel
     */
    k1?: any

    /**
      The second base-kernel of the product-kernel
     */
    k2?: any
  }) {
    this.id = `Product${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Product instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Product.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import Product
try: bridgeProduct
except NameError: bridgeProduct = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Product = {'k1': ${this.opts['k1'] ?? undefined}, 'k2': ${this.opts['k2'] ?? undefined}}

ctor_Product = {k: v for k, v in ctor_Product.items() if v is not None}`

    await this._py.ex`bridgeProduct[${this.id}] = Product(**ctor_Product)`

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

    await this._py.ex`del bridgeProduct[${this.id}]`

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
      throw new Error('This Product instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Product must call init() before __call__()')
    }

    // set up method params
    await this._py
      .ex`pms_Product___call__ = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${opts['eval_gradient'] ?? undefined}}

pms_Product___call__ = {k: v for k, v in pms_Product___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Product___call__ = bridgeProduct[${this.id}].__call__(**pms_Product___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_Product___call__.tolist() if hasattr(res_Product___call__, 'tolist') else res_Product___call__`
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
      throw new Error('This Product instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Product must call init() before clone_with_theta()')
    }

    // set up method params
    await this._py
      .ex`pms_Product_clone_with_theta = {'theta': np.array(${opts['theta'] ?? undefined}) if ${opts['theta'] !== undefined} else None}

pms_Product_clone_with_theta = {k: v for k, v in pms_Product_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Product_clone_with_theta = bridgeProduct[${this.id}].clone_with_theta(**pms_Product_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_Product_clone_with_theta.tolist() if hasattr(res_Product_clone_with_theta, 'tolist') else res_Product_clone_with_theta`
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
      throw new Error('This Product instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Product must call init() before diag()')
    }

    // set up method params
    await this._py
      .ex`pms_Product_diag = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_Product_diag = {k: v for k, v in pms_Product_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Product_diag = bridgeProduct[${this.id}].diag(**pms_Product_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_Product_diag.tolist() if hasattr(res_Product_diag, 'tolist') else res_Product_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Product instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Product must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_Product_is_stationary = {}

pms_Product_is_stationary = {k: v for k, v in pms_Product_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Product_is_stationary = bridgeProduct[${this.id}].is_stationary(**pms_Product_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_Product_is_stationary.tolist() if hasattr(res_Product_is_stationary, 'tolist') else res_Product_is_stationary`
  }
}
