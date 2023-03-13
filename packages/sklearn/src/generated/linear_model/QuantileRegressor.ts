/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear regression model that predicts conditional quantiles.

  The linear [`QuantileRegressor`](#sklearn.linear_model.QuantileRegressor "sklearn.linear_model.QuantileRegressor") optimizes the pinball loss for a desired `quantile` and is robust to outliers.

  This model uses an L1 regularization like [`Lasso`](sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso "sklearn.linear_model.Lasso").

  Read more in the [User Guide](../linear_model.html#quantile-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html)
 */
export class QuantileRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The quantile that the model tries to predict. It must be strictly between 0 and 1. If 0.5 (default), the model predicts the 50% quantile, i.e. the median.

      @defaultValue `0.5`
     */
    quantile?: number

    /**
      Regularization constant that multiplies the L1 penalty term.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Whether or not to fit the intercept.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Method used by [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") to solve the linear programming formulation.

      From `scipy>=1.6.0`, it is recommended to use the highs methods because they are the fastest ones. Solvers “highs-ds”, “highs-ipm” and “highs” support sparse input data and, in fact, always convert to sparse csc.

      From `scipy>=1.11.0`, “interior-point” is not available anymore.

      @defaultValue `'interior-point'`
     */
    solver?:
      | 'highs-ds'
      | 'highs-ipm'
      | 'highs'
      | 'interior-point'
      | 'revised simplex'

    /**
      Additional parameters passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") as options. If `undefined` and if `solver='interior-point'`, then `{"lstsq": `true`}` is passed to [`scipy.optimize.linprog`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.linprog.html#scipy.optimize.linprog "(in SciPy v1.10.1)") for the sake of stability.
     */
    solver_options?: any
  }) {
    this.id = `QuantileRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('QuantileRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import QuantileRegressor
try: bridgeQuantileRegressor
except NameError: bridgeQuantileRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_QuantileRegressor = {'quantile': ${
      this.opts['quantile'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'solver': ${this.opts['solver'] ?? undefined}, 'solver_options': ${
      this.opts['solver_options'] ?? undefined
    }}

ctor_QuantileRegressor = {k: v for k, v in ctor_QuantileRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeQuantileRegressor[${this.id}] = QuantileRegressor(**ctor_QuantileRegressor)`

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

    await this._py.ex`del bridgeQuantileRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data.
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
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('QuantileRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_QuantileRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_QuantileRegressor_fit = {k: v for k, v in pms_QuantileRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileRegressor_fit = bridgeQuantileRegressor[${this.id}].fit(**pms_QuantileRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileRegressor_fit.tolist() if hasattr(res_QuantileRegressor_fit, 'tolist') else res_QuantileRegressor_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('QuantileRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_QuantileRegressor_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_QuantileRegressor_predict = {k: v for k, v in pms_QuantileRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileRegressor_predict = bridgeQuantileRegressor[${this.id}].predict(**pms_QuantileRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileRegressor_predict.tolist() if hasattr(res_QuantileRegressor_predict, 'tolist') else res_QuantileRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
     */
    X?: ArrayLike[]

    /**
      True values for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('QuantileRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_QuantileRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_QuantileRegressor_score = {k: v for k, v in pms_QuantileRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileRegressor_score = bridgeQuantileRegressor[${this.id}].score(**pms_QuantileRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileRegressor_score.tolist() if hasattr(res_QuantileRegressor_score, 'tolist') else res_QuantileRegressor_score`
  }

  /**
    Estimated coefficients for the features.
   */
  get coef_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileRegressor must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileRegressor_coef_ = bridgeQuantileRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileRegressor_coef_.tolist() if hasattr(attr_QuantileRegressor_coef_, 'tolist') else attr_QuantileRegressor_coef_`
    })()
  }

  /**
    The intercept of the model, aka bias term.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileRegressor_intercept_ = bridgeQuantileRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileRegressor_intercept_.tolist() if hasattr(attr_QuantileRegressor_intercept_, 'tolist') else attr_QuantileRegressor_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileRegressor_n_features_in_ = bridgeQuantileRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileRegressor_n_features_in_.tolist() if hasattr(attr_QuantileRegressor_n_features_in_, 'tolist') else attr_QuantileRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileRegressor_feature_names_in_ = bridgeQuantileRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileRegressor_feature_names_in_.tolist() if hasattr(attr_QuantileRegressor_feature_names_in_, 'tolist') else attr_QuantileRegressor_feature_names_in_`
    })()
  }

  /**
    The actual number of iterations performed by the solver.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileRegressor_n_iter_ = bridgeQuantileRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileRegressor_n_iter_.tolist() if hasattr(attr_QuantileRegressor_n_iter_, 'tolist') else attr_QuantileRegressor_n_iter_`
    })()
  }
}
