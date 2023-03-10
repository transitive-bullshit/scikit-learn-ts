/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Ridge regression with built-in cross-validation.

  See glossary entry for cross-validation estimator.

  By default, it performs efficient Leave-One-Out Cross-Validation.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html
 */
export class RidgeCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RidgeCVOptions) {
    this.id = `RidgeCV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RidgeCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import RidgeCV
try: bridgeRidgeCV
except NameError: bridgeRidgeCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_RidgeCV = {'alphas': np.array(${
      this.opts['alphas'] ?? undefined
    }) if ${this.opts['alphas'] !== undefined} else None, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'scoring': ${this.opts['scoring'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'gcv_mode': ${this.opts['gcv_mode'] ?? undefined}, 'store_cv_values': ${
      this.opts['store_cv_values'] ?? undefined
    }, 'alpha_per_target': ${this.opts['alpha_per_target'] ?? undefined}}

ctor_RidgeCV = {k: v for k, v in ctor_RidgeCV.items() if v is not None}`

    await this._py.ex`bridgeRidgeCV[${this.id}] = RidgeCV(**ctor_RidgeCV)`

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

    await this._py.ex`del bridgeRidgeCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Ridge regression model with cv.
   */
  async fit(opts: RidgeCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RidgeCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeCV_fit = {k: v for k, v in pms_RidgeCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_fit = bridgeRidgeCV[${this.id}].fit(**pms_RidgeCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_fit.tolist() if hasattr(res_RidgeCV_fit, 'tolist') else res_RidgeCV_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: RidgeCVPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RidgeCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_RidgeCV_predict = {k: v for k, v in pms_RidgeCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_predict = bridgeRidgeCV[${this.id}].predict(**pms_RidgeCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_predict.tolist() if hasattr(res_RidgeCV_predict, 'tolist') else res_RidgeCV_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \(R^2\) is defined as \((1 - \frac{u}{v})\), where \(u\) is the residual sum of squares ((y_true - y_pred)** 2).sum() and \(v\) is the total sum of squares ((y_true - y_true.mean()) ** 2).sum(). The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a \(R^2\) score of 0.0.
   */
  async score(opts: RidgeCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RidgeCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeCV_score = {k: v for k, v in pms_RidgeCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_score = bridgeRidgeCV[${this.id}].score(**pms_RidgeCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_score.tolist() if hasattr(res_RidgeCV_score, 'tolist') else res_RidgeCV_score`
  }

  /**
    Cross-validation values for each alpha (only available if store_cv_values=True and cv=None). After fit() has been called, this attribute will contain the mean squared errors if scoring is None otherwise it will contain standardized per point prediction values.
   */
  get cv_values_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing cv_values_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_cv_values_ = bridgeRidgeCV[${this.id}].cv_values_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_cv_values_.tolist() if hasattr(attr_RidgeCV_cv_values_, 'tolist') else attr_RidgeCV_cv_values_`
    })()
  }

  /**
    Weight vector(s).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RidgeCV_coef_ = bridgeRidgeCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_coef_.tolist() if hasattr(attr_RidgeCV_coef_, 'tolist') else attr_RidgeCV_coef_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if fit_intercept = False.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_intercept_ = bridgeRidgeCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_intercept_.tolist() if hasattr(attr_RidgeCV_intercept_, 'tolist') else attr_RidgeCV_intercept_`
    })()
  }

  /**
    Estimated regularization parameter, or, if alpha_per_target=True, the estimated regularization parameter for each target.
   */
  get alpha_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RidgeCV_alpha_ = bridgeRidgeCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_alpha_.tolist() if hasattr(attr_RidgeCV_alpha_, 'tolist') else attr_RidgeCV_alpha_`
    })()
  }

  /**
    Score of base estimator with best alpha, or, if alpha_per_target=True, a score for each target.
   */
  get best_score_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing best_score_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_best_score_ = bridgeRidgeCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_best_score_.tolist() if hasattr(attr_RidgeCV_best_score_, 'tolist') else attr_RidgeCV_best_score_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_n_features_in_ = bridgeRidgeCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_n_features_in_.tolist() if hasattr(attr_RidgeCV_n_features_in_, 'tolist') else attr_RidgeCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_feature_names_in_ = bridgeRidgeCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_feature_names_in_.tolist() if hasattr(attr_RidgeCV_feature_names_in_, 'tolist') else attr_RidgeCV_feature_names_in_`
    })()
  }
}

export interface RidgeCVOptions {
  /**
    Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to 1 / (2C) in other linear models such as LogisticRegression or LinearSVC. If using Leave-One-Out cross-validation, alphas must be positive.
   */
  alphas?: ArrayLike

  /**
    Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    A string (see model evaluation documentation) or a scorer callable object / function with signature scorer(estimator, X, y). If None, the negative mean squared error if cv is ‘auto’ or None (i.e. when using leave-one-out cross-validation), and r2 score otherwise.
   */
  scoring?: string

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    Flag indicating which strategy to use when performing Leave-One-Out Cross-Validation. Options are:

    @defaultValue `'auto'`
   */
  gcv_mode?: 'auto' | 'svd' | 'eigen'

  /**
    Flag indicating if the cross-validation values corresponding to each alpha should be stored in the cv_values_ attribute (see below). This flag is only compatible with cv=None (i.e. using Leave-One-Out Cross-Validation).

    @defaultValue `false`
   */
  store_cv_values?: boolean

  /**
    Flag indicating whether to optimize the alpha value (picked from the alphas parameter list) for each target separately (for multi-output settings: multiple prediction targets). When set to True, after fitting, the alpha_ attribute will contain a value for each target. When set to False, a single alpha is used for all targets.

    @defaultValue `false`
   */
  alpha_per_target?: boolean
}

export interface RidgeCVFitOptions {
  /**
    Training data. If using GCV, will be cast to float64 if necessary.
   */
  X?: NDArray[]

  /**
    Target values. Will be cast to X’s dtype if necessary.
   */
  y?: NDArray

  /**
    Individual weights for each sample. If given a float, every sample will have the same weight.
   */
  sample_weight?: number | NDArray
}

export interface RidgeCVPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface RidgeCVScoreOptions {
  /**
    Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.
   */
  X?: ArrayLike[]

  /**
    True values for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
