/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Ridge regression with built-in cross-validation.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  By default, it performs efficient Leave-One-Out Cross-Validation.

  Read more in the [User Guide](../linear_model.html#ridge-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html)
 */
export class RidgeCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If using Leave-One-Out cross-validation, alphas must be strictly positive.
     */
    alphas?: ArrayLike

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      A string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)`. If `undefined`, the negative mean squared error if cv is ‘auto’ or `undefined` (i.e. when using leave-one-out cross-validation), and r2 score otherwise.
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
      Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

      @defaultValue `false`
     */
    store_cv_results?: boolean

    /**
      Flag indicating whether to optimize the alpha value (picked from the `alphas` parameter list) for each target separately (for multi-output settings: multiple prediction targets). When set to `true`, after fitting, the `alpha\_` attribute will contain a value for each target. When set to `false`, a single alpha is used for all targets.

      @defaultValue `false`
     */
    alpha_per_target?: boolean

    /**
      Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).
     */
    store_cv_values?: boolean
  }) {
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
    await this._py
      .ex`ctor_RidgeCV = {'alphas': np.array(${this.opts['alphas'] ?? undefined}) if ${this.opts['alphas'] !== undefined} else None, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'scoring': ${this.opts['scoring'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'gcv_mode': ${this.opts['gcv_mode'] ?? undefined}, 'store_cv_results': ${this.opts['store_cv_results'] ?? undefined}, 'alpha_per_target': ${this.opts['alpha_per_target'] ?? undefined}, 'store_cv_values': ${this.opts['store_cv_values'] ?? undefined}}

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
  async fit(opts: {
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

    /**
      Parameters to be passed to the underlying scorer.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_RidgeCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_RidgeCV_fit = {k: v for k, v in pms_RidgeCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_fit = bridgeRidgeCV[${this.id}].fit(**pms_RidgeCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_fit.tolist() if hasattr(res_RidgeCV_fit, 'tolist') else res_RidgeCV_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_RidgeCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_RidgeCV_get_metadata_routing = {k: v for k, v in pms_RidgeCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_get_metadata_routing = bridgeRidgeCV[${this.id}].get_metadata_routing(**pms_RidgeCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_get_metadata_routing.tolist() if hasattr(res_RidgeCV_get_metadata_routing, 'tolist') else res_RidgeCV_get_metadata_routing`
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
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_RidgeCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeCV_score = {k: v for k, v in pms_RidgeCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_score = bridgeRidgeCV[${this.id}].score(**pms_RidgeCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_score.tolist() if hasattr(res_RidgeCV_score, 'tolist') else res_RidgeCV_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_RidgeCV_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_RidgeCV_set_fit_request = {k: v for k, v in pms_RidgeCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_set_fit_request = bridgeRidgeCV[${this.id}].set_fit_request(**pms_RidgeCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_set_fit_request.tolist() if hasattr(res_RidgeCV_set_fit_request, 'tolist') else res_RidgeCV_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_RidgeCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_RidgeCV_set_score_request = {k: v for k, v in pms_RidgeCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeCV_set_score_request = bridgeRidgeCV[${this.id}].set_score_request(**pms_RidgeCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeCV_set_score_request.tolist() if hasattr(res_RidgeCV_set_score_request, 'tolist') else res_RidgeCV_set_score_request`
  }

  /**
    Cross-validation values for each alpha (only available if `store\_cv\_results=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.
   */
  get cv_results_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This RidgeCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeCV must call init() before accessing cv_results_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeCV_cv_results_ = bridgeRidgeCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeCV_cv_results_.tolist() if hasattr(attr_RidgeCV_cv_results_, 'tolist') else attr_RidgeCV_cv_results_`
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
    Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.
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
    Estimated regularization parameter, or, if `alpha\_per\_target=True`, the estimated regularization parameter for each target.
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
    Score of base estimator with best alpha, or, if `alpha\_per\_target=True`, a score for each target.
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
    Number of features seen during [fit](../../glossary.html#term-fit).
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
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
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
