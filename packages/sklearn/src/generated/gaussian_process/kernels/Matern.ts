/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Matern kernel.

  The class of Matern kernels is a generalization of the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF"). It has an additional parameter \\(\\nu\\) which controls the smoothness of the resulting function. The smaller \\(\\nu\\), the less smooth the approximated function is. As \\(\\nu\\rightarrow\\infty\\), the kernel becomes equivalent to the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF") kernel. When \\(\\nu = 1/2\\), the Matérn kernel becomes identical to the absolute exponential kernel. Important intermediate values are \\(\\nu=1.5\\) (once differentiable functions) and \\(\\nu=2.5\\) (twice differentiable functions).

  The kernel is given by:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Matern.html)
 */
export class Matern {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

      @defaultValue `1`
     */
    length_scale?: number | NDArray

    /**
      The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.
     */
    length_scale_bounds?: 'fixed'

    /**
      The parameter nu controlling the smoothness of the learned function. The smaller nu, the less smooth the approximated function is. For nu=inf, the kernel becomes equivalent to the RBF kernel and for nu=0.5 to the absolute exponential kernel. Important intermediate values are nu=1.5 (once differentiable functions) and nu=2.5 (twice differentiable functions). Note that values of nu not in \[0.5, 1.5, 2.5, inf\] incur a considerably higher computational cost (appr. 10 times higher) since they require to evaluate the modified Bessel function. Furthermore, in contrast to l, nu is kept fixed to its initial value and not optimized.

      @defaultValue `1.5`
     */
    nu?: number
  }) {
    this.id = `Matern${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Matern instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Matern.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import Matern
try: bridgeMatern
except NameError: bridgeMatern = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Matern = {'length_scale': np.array(${this.opts['length_scale'] ?? undefined}) if ${this.opts['length_scale'] !== undefined} else None, 'length_scale_bounds': ${this.opts['length_scale_bounds'] ?? undefined}, 'nu': ${this.opts['nu'] ?? undefined}}

ctor_Matern = {k: v for k, v in ctor_Matern.items() if v is not None}`

    await this._py.ex`bridgeMatern[${this.id}] = Matern(**ctor_Matern)`

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

    await this._py.ex`del bridgeMatern[${this.id}]`

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
      throw new Error('This Matern instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Matern must call init() before __call__()')
    }

    // set up method params
    await this._py
      .ex`pms_Matern___call__ = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'eval_gradient': ${opts['eval_gradient'] ?? undefined}}

pms_Matern___call__ = {k: v for k, v in pms_Matern___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Matern___call__ = bridgeMatern[${this.id}].__call__(**pms_Matern___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_Matern___call__.tolist() if hasattr(res_Matern___call__, 'tolist') else res_Matern___call__`
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
      throw new Error('This Matern instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Matern must call init() before clone_with_theta()')
    }

    // set up method params
    await this._py
      .ex`pms_Matern_clone_with_theta = {'theta': np.array(${opts['theta'] ?? undefined}) if ${opts['theta'] !== undefined} else None}

pms_Matern_clone_with_theta = {k: v for k, v in pms_Matern_clone_with_theta.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Matern_clone_with_theta = bridgeMatern[${this.id}].clone_with_theta(**pms_Matern_clone_with_theta)`

    // convert the result from python to node.js
    return this
      ._py`res_Matern_clone_with_theta.tolist() if hasattr(res_Matern_clone_with_theta, 'tolist') else res_Matern_clone_with_theta`
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
      throw new Error('This Matern instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Matern must call init() before diag()')
    }

    // set up method params
    await this._py
      .ex`pms_Matern_diag = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_Matern_diag = {k: v for k, v in pms_Matern_diag.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Matern_diag = bridgeMatern[${this.id}].diag(**pms_Matern_diag)`

    // convert the result from python to node.js
    return this
      ._py`res_Matern_diag.tolist() if hasattr(res_Matern_diag, 'tolist') else res_Matern_diag`
  }

  /**
    Returns whether the kernel is stationary.
   */
  async is_stationary(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Matern instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Matern must call init() before is_stationary()')
    }

    // set up method params
    await this._py.ex`pms_Matern_is_stationary = {}

pms_Matern_is_stationary = {k: v for k, v in pms_Matern_is_stationary.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Matern_is_stationary = bridgeMatern[${this.id}].is_stationary(**pms_Matern_is_stationary)`

    // convert the result from python to node.js
    return this
      ._py`res_Matern_is_stationary.tolist() if hasattr(res_Matern_is_stationary, 'tolist') else res_Matern_is_stationary`
  }
}
