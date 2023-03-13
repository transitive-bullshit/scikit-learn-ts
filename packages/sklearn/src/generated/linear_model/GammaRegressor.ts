/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Generalized Linear Model with a Gamma distribution.

  This regressor uses the ‘log’ link function.

  Read more in the [User Guide](../linear_model.html#generalized-linear-models).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.GammaRegressor.html)
 */
export class GammaRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor `X @ coef\_ + intercept\_`.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Algorithm to use in the optimization problem:

      @defaultValue `'lbfgs'`
     */
    solver?: 'lbfgs' | 'newton-cholesky'

    /**
      The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g\_j|, j \= 1, ..., d} <= tol` where `g\_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef\_` and `intercept\_`.

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

      @defaultValue `0`
     */
    verbose?: number
  }) {
    this.id = `GammaRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GammaRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import GammaRegressor
try: bridgeGammaRegressor
except NameError: bridgeGammaRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_GammaRegressor = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'solver': ${
      this.opts['solver'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }}

ctor_GammaRegressor = {k: v for k, v in ctor_GammaRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeGammaRegressor[${this.id}] = GammaRegressor(**ctor_GammaRegressor)`

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

    await this._py.ex`del bridgeGammaRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit a Generalized Linear Model.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GammaRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GammaRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_GammaRegressor_fit = {k: v for k, v in pms_GammaRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GammaRegressor_fit = bridgeGammaRegressor[${this.id}].fit(**pms_GammaRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GammaRegressor_fit.tolist() if hasattr(res_GammaRegressor_fit, 'tolist') else res_GammaRegressor_fit`
  }

  /**
    Predict using GLM with feature matrix X.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GammaRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_GammaRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GammaRegressor_predict = {k: v for k, v in pms_GammaRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GammaRegressor_predict = bridgeGammaRegressor[${this.id}].predict(**pms_GammaRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GammaRegressor_predict.tolist() if hasattr(res_GammaRegressor_predict, 'tolist') else res_GammaRegressor_predict`
  }

  /**
    Compute D^2, the percentage of deviance explained.

    D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

    D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      True values of target.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GammaRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_GammaRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_GammaRegressor_score = {k: v for k, v in pms_GammaRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GammaRegressor_score = bridgeGammaRegressor[${this.id}].score(**pms_GammaRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GammaRegressor_score.tolist() if hasattr(res_GammaRegressor_score, 'tolist') else res_GammaRegressor_score`
  }

  /**
    Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.
   */
  get coef_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GammaRegressor must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GammaRegressor_coef_ = bridgeGammaRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_GammaRegressor_coef_.tolist() if hasattr(attr_GammaRegressor_coef_, 'tolist') else attr_GammaRegressor_coef_`
    })()
  }

  /**
    Intercept (a.k.a. bias) added to linear predictor.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GammaRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GammaRegressor_intercept_ = bridgeGammaRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_GammaRegressor_intercept_.tolist() if hasattr(attr_GammaRegressor_intercept_, 'tolist') else attr_GammaRegressor_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GammaRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GammaRegressor_n_features_in_ = bridgeGammaRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GammaRegressor_n_features_in_.tolist() if hasattr(attr_GammaRegressor_n_features_in_, 'tolist') else attr_GammaRegressor_n_features_in_`
    })()
  }

  /**
    Actual number of iterations used in the solver.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GammaRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GammaRegressor_n_iter_ = bridgeGammaRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_GammaRegressor_n_iter_.tolist() if hasattr(attr_GammaRegressor_n_iter_, 'tolist') else attr_GammaRegressor_n_iter_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GammaRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GammaRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GammaRegressor_feature_names_in_ = bridgeGammaRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GammaRegressor_feature_names_in_.tolist() if hasattr(attr_GammaRegressor_feature_names_in_, 'tolist') else attr_GammaRegressor_feature_names_in_`
    })()
  }
}
