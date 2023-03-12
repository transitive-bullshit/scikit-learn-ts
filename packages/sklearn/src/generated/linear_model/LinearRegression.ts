/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Ordinary least squares Linear Regression.

  LinearRegression fits a linear model with coefficients w = (w1, …, wp) to minimize the residual sum of squares between the observed targets in the dataset, and the targets predicted by the linear approximation.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html)
 */
export class LinearRegression {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LinearRegressionOptions) {
    this.id = `LinearRegression${crypto.randomUUID().split('-')[0]}`
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
        'This LinearRegression instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LinearRegression.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LinearRegression
try: bridgeLinearRegression
except NameError: bridgeLinearRegression = {}
`

    // set up constructor params
    await this._py.ex`ctor_LinearRegression = {'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'positive': ${this.opts['positive'] ?? undefined}}

ctor_LinearRegression = {k: v for k, v in ctor_LinearRegression.items() if v is not None}`

    await this._py
      .ex`bridgeLinearRegression[${this.id}] = LinearRegression(**ctor_LinearRegression)`

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

    await this._py.ex`del bridgeLinearRegression[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit linear model.
   */
  async fit(opts: LinearRegressionFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LinearRegression must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LinearRegression_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearRegression_fit = {k: v for k, v in pms_LinearRegression_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearRegression_fit = bridgeLinearRegression[${this.id}].fit(**pms_LinearRegression_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearRegression_fit.tolist() if hasattr(res_LinearRegression_fit, 'tolist') else res_LinearRegression_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: LinearRegressionPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LinearRegression must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LinearRegression_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_LinearRegression_predict = {k: v for k, v in pms_LinearRegression_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearRegression_predict = bridgeLinearRegression[${this.id}].predict(**pms_LinearRegression_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearRegression_predict.tolist() if hasattr(res_LinearRegression_predict, 'tolist') else res_LinearRegression_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: LinearRegressionScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LinearRegression must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LinearRegression_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearRegression_score = {k: v for k, v in pms_LinearRegression_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearRegression_score = bridgeLinearRegression[${this.id}].score(**pms_LinearRegression_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearRegression_score.tolist() if hasattr(res_LinearRegression_score, 'tolist') else res_LinearRegression_score`
  }

  /**
    Estimated coefficients for the linear regression problem. If multiple targets are passed during the fit (y 2D), this is a 2D array of shape (n\_targets, n\_features), while if only one target is passed, this is a 1D array of length n\_features.
   */
  get coef_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_coef_ = bridgeLinearRegression[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_coef_.tolist() if hasattr(attr_LinearRegression_coef_, 'tolist') else attr_LinearRegression_coef_`
    })()
  }

  /**
    Rank of matrix `X`. Only available when `X` is dense.
   */
  get rank_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing rank_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_rank_ = bridgeLinearRegression[${this.id}].rank_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_rank_.tolist() if hasattr(attr_LinearRegression_rank_, 'tolist') else attr_LinearRegression_rank_`
    })()
  }

  /**
    Singular values of `X`. Only available when `X` is dense.
   */
  get singular_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing singular_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_singular_ = bridgeLinearRegression[${this.id}].singular_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_singular_.tolist() if hasattr(attr_LinearRegression_singular_, 'tolist') else attr_LinearRegression_singular_`
    })()
  }

  /**
    Independent term in the linear model. Set to 0.0 if `fit\_intercept \= False`.
   */
  get intercept_(): Promise<number | any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_intercept_ = bridgeLinearRegression[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_intercept_.tolist() if hasattr(attr_LinearRegression_intercept_, 'tolist') else attr_LinearRegression_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_n_features_in_ = bridgeLinearRegression[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_n_features_in_.tolist() if hasattr(attr_LinearRegression_n_features_in_, 'tolist') else attr_LinearRegression_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearRegression must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearRegression_feature_names_in_ = bridgeLinearRegression[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearRegression_feature_names_in_.tolist() if hasattr(attr_LinearRegression_feature_names_in_, 'tolist') else attr_LinearRegression_feature_names_in_`
    })()
  }
}

export interface LinearRegressionOptions {
  /**
    Whether to calculate the intercept for this model. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    If `true`, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    The number of jobs to use for the computation. This will only provide speedup in case of sufficiently large problems, that is if firstly `n\_targets > 1` and secondly `X` is sparse or if `positive` is set to `true`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    When set to `true`, forces the coefficients to be positive. This option is only supported for dense arrays.

    @defaultValue `false`
   */
  positive?: boolean
}

export interface LinearRegressionFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values. Will be cast to X’s dtype if necessary.
   */
  y?: ArrayLike

  /**
    Individual weights for each sample.
   */
  sample_weight?: ArrayLike
}

export interface LinearRegressionPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface LinearRegressionScoreOptions {
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
}
