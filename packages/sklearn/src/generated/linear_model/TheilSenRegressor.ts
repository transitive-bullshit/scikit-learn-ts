/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Theil-Sen Estimator: robust multivariate regression model.

  The algorithm calculates least square solutions on subsets with size n\_subsamples of the samples in X. Any value of n\_subsamples between the number of features and samples leads to an estimator with a compromise between robustness and efficiency. Since the number of least square solutions is “n\_samples choose n\_subsamples”, it can be extremely large and can therefore be limited with max\_subpopulation. If this limit is reached, the subsets are chosen randomly. In a final step, the spatial median (or L1 median) is calculated of all least square solutions.

  Read more in the [User Guide](../linear_model.html#theil-sen-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TheilSenRegressor.html)
 */
export class TheilSenRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      Instead of computing with a set of cardinality ‘n choose k’, where n is the number of samples and k is the number of subsamples (at least number of features), consider only a stochastic subpopulation of a given maximal size if ‘n choose k’ is larger than max\_subpopulation. For other than small problem sizes this parameter will determine memory usage and runtime if n\_subsamples is not changed. Note that the data type should be int but floats such as 1e4 can be accepted too.

      @defaultValue `10000`
     */
    max_subpopulation?: number

    /**
      Number of samples to calculate the parameters. This is at least the number of features (plus 1 if fit\_intercept=`true`) and the number of samples as a maximum. A lower number leads to a higher breakdown point and a low efficiency while a high number leads to a low breakdown point and a high efficiency. If `undefined`, take the minimum number of subsamples leading to maximal robustness. If n\_subsamples is set to n\_samples, Theil-Sen is identical to least squares.
     */
    n_subsamples?: number

    /**
      Maximum number of iterations for the calculation of spatial median.

      @defaultValue `300`
     */
    max_iter?: number

    /**
      Tolerance when calculating spatial median.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      A random number generator instance to define the state of the random permutations generator. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Verbose mode when fitting the model.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `TheilSenRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TheilSenRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import TheilSenRegressor
try: bridgeTheilSenRegressor
except NameError: bridgeTheilSenRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_TheilSenRegressor = {'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'max_subpopulation': ${
      this.opts['max_subpopulation'] ?? undefined
    }, 'n_subsamples': ${this.opts['n_subsamples'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }}

ctor_TheilSenRegressor = {k: v for k, v in ctor_TheilSenRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeTheilSenRegressor[${this.id}] = TheilSenRegressor(**ctor_TheilSenRegressor)`

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

    await this._py.ex`del bridgeTheilSenRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit linear model.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: NDArray[]

    /**
      Target values.
     */
    y?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TheilSenRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_TheilSenRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_TheilSenRegressor_fit = {k: v for k, v in pms_TheilSenRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TheilSenRegressor_fit = bridgeTheilSenRegressor[${this.id}].fit(**pms_TheilSenRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TheilSenRegressor_fit.tolist() if hasattr(res_TheilSenRegressor_fit, 'tolist') else res_TheilSenRegressor_fit`
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
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TheilSenRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_TheilSenRegressor_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_TheilSenRegressor_predict = {k: v for k, v in pms_TheilSenRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TheilSenRegressor_predict = bridgeTheilSenRegressor[${this.id}].predict(**pms_TheilSenRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_TheilSenRegressor_predict.tolist() if hasattr(res_TheilSenRegressor_predict, 'tolist') else res_TheilSenRegressor_predict`
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
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TheilSenRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_TheilSenRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_TheilSenRegressor_score = {k: v for k, v in pms_TheilSenRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TheilSenRegressor_score = bridgeTheilSenRegressor[${this.id}].score(**pms_TheilSenRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_TheilSenRegressor_score.tolist() if hasattr(res_TheilSenRegressor_score, 'tolist') else res_TheilSenRegressor_score`
  }

  /**
    Coefficients of the regression model (median of distribution).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_coef_ = bridgeTheilSenRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_coef_.tolist() if hasattr(attr_TheilSenRegressor_coef_, 'tolist') else attr_TheilSenRegressor_coef_`
    })()
  }

  /**
    Estimated intercept of regression model.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_intercept_ = bridgeTheilSenRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_intercept_.tolist() if hasattr(attr_TheilSenRegressor_intercept_, 'tolist') else attr_TheilSenRegressor_intercept_`
    })()
  }

  /**
    Approximated breakdown point.
   */
  get breakdown_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing breakdown_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_breakdown_ = bridgeTheilSenRegressor[${this.id}].breakdown_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_breakdown_.tolist() if hasattr(attr_TheilSenRegressor_breakdown_, 'tolist') else attr_TheilSenRegressor_breakdown_`
    })()
  }

  /**
    Number of iterations needed for the spatial median.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_n_iter_ = bridgeTheilSenRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_n_iter_.tolist() if hasattr(attr_TheilSenRegressor_n_iter_, 'tolist') else attr_TheilSenRegressor_n_iter_`
    })()
  }

  /**
    Number of combinations taken into account from ‘n choose k’, where n is the number of samples and k is the number of subsamples.
   */
  get n_subpopulation_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing n_subpopulation_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_n_subpopulation_ = bridgeTheilSenRegressor[${this.id}].n_subpopulation_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_n_subpopulation_.tolist() if hasattr(attr_TheilSenRegressor_n_subpopulation_, 'tolist') else attr_TheilSenRegressor_n_subpopulation_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_n_features_in_ = bridgeTheilSenRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_n_features_in_.tolist() if hasattr(attr_TheilSenRegressor_n_features_in_, 'tolist') else attr_TheilSenRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TheilSenRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TheilSenRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TheilSenRegressor_feature_names_in_ = bridgeTheilSenRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TheilSenRegressor_feature_names_in_.tolist() if hasattr(attr_TheilSenRegressor_feature_names_in_, 'tolist') else attr_TheilSenRegressor_feature_names_in_`
    })()
  }
}
