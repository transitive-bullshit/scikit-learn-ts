/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Ridge classifier with built-in cross-validation.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  By default, it performs Leave-One-Out Cross-Validation. Currently, only the n\_features > n\_samples case is handled efficiently.

  Read more in the [User Guide](../linear_model.html#ridge-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifierCV.html)
 */
export class RidgeClassifierCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").
     */
    alphas?: ArrayLike

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`.
     */
    scoring?: string

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:
     */
    cv?: number

    /**
      Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
     */
    class_weight?: any | 'balanced'

    /**
      Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

      @defaultValue `false`
     */
    store_cv_values?: boolean
  }) {
    this.id = `RidgeClassifierCV${crypto.randomUUID().split('-')[0]}`
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
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RidgeClassifierCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import RidgeClassifierCV
try: bridgeRidgeClassifierCV
except NameError: bridgeRidgeClassifierCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_RidgeClassifierCV = {'alphas': np.array(${
      this.opts['alphas'] ?? undefined
    }) if ${this.opts['alphas'] !== undefined} else None, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'scoring': ${this.opts['scoring'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'store_cv_values': ${this.opts['store_cv_values'] ?? undefined}}

ctor_RidgeClassifierCV = {k: v for k, v in ctor_RidgeClassifierCV.items() if v is not None}`

    await this._py
      .ex`bridgeRidgeClassifierCV[${this.id}] = RidgeClassifierCV(**ctor_RidgeClassifierCV)`

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

    await this._py.ex`del bridgeRidgeClassifierCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(opts: {
    /**
      The data matrix for which we want to get the confidence scores.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RidgeClassifierCV_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RidgeClassifierCV_decision_function = {k: v for k, v in pms_RidgeClassifierCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifierCV_decision_function = bridgeRidgeClassifierCV[${this.id}].decision_function(**pms_RidgeClassifierCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifierCV_decision_function.tolist() if hasattr(res_RidgeClassifierCV_decision_function, 'tolist') else res_RidgeClassifierCV_decision_function`
  }

  /**
    Fit Ridge classifier with cv.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. When using GCV, will be cast to float64 if necessary.
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
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifierCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifierCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeClassifierCV_fit = {k: v for k, v in pms_RidgeClassifierCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifierCV_fit = bridgeRidgeClassifierCV[${this.id}].fit(**pms_RidgeClassifierCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifierCV_fit.tolist() if hasattr(res_RidgeClassifierCV_fit, 'tolist') else res_RidgeClassifierCV_fit`
  }

  /**
    Predict class labels for samples in `X`.
   */
  async predict(opts: {
    /**
      The data matrix for which we want to predict the targets.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifierCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifierCV_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RidgeClassifierCV_predict = {k: v for k, v in pms_RidgeClassifierCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifierCV_predict = bridgeRidgeClassifierCV[${this.id}].predict(**pms_RidgeClassifierCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifierCV_predict.tolist() if hasattr(res_RidgeClassifierCV_predict, 'tolist') else res_RidgeClassifierCV_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike[]

    /**
      True labels for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifierCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifierCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeClassifierCV_score = {k: v for k, v in pms_RidgeClassifierCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifierCV_score = bridgeRidgeClassifierCV[${this.id}].score(**pms_RidgeClassifierCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifierCV_score.tolist() if hasattr(res_RidgeClassifierCV_score, 'tolist') else res_RidgeClassifierCV_score`
  }

  /**
    Cross-validation values for each alpha (only if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.
   */
  get cv_values_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing cv_values_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_cv_values_ = bridgeRidgeClassifierCV[${this.id}].cv_values_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_cv_values_.tolist() if hasattr(attr_RidgeClassifierCV_cv_values_, 'tolist') else attr_RidgeClassifierCV_cv_values_`
    })()
  }

  /**
    Coefficient of the features in the decision function.

    `coef\_` is of shape (1, n\_features) when the given problem is binary.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_coef_ = bridgeRidgeClassifierCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_coef_.tolist() if hasattr(attr_RidgeClassifierCV_coef_, 'tolist') else attr_RidgeClassifierCV_coef_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_intercept_ = bridgeRidgeClassifierCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_intercept_.tolist() if hasattr(attr_RidgeClassifierCV_intercept_, 'tolist') else attr_RidgeClassifierCV_intercept_`
    })()
  }

  /**
    Estimated regularization parameter.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing alpha_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_alpha_ = bridgeRidgeClassifierCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_alpha_.tolist() if hasattr(attr_RidgeClassifierCV_alpha_, 'tolist') else attr_RidgeClassifierCV_alpha_`
    })()
  }

  /**
    Score of base estimator with best alpha.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_best_score_ = bridgeRidgeClassifierCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_best_score_.tolist() if hasattr(attr_RidgeClassifierCV_best_score_, 'tolist') else attr_RidgeClassifierCV_best_score_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_n_features_in_ = bridgeRidgeClassifierCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_n_features_in_.tolist() if hasattr(attr_RidgeClassifierCV_n_features_in_, 'tolist') else attr_RidgeClassifierCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RidgeClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifierCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifierCV_feature_names_in_ = bridgeRidgeClassifierCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifierCV_feature_names_in_.tolist() if hasattr(attr_RidgeClassifierCV_feature_names_in_, 'tolist') else attr_RidgeClassifierCV_feature_names_in_`
    })()
  }
}
