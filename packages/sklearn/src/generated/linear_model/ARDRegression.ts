/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Bayesian ARD regression.

  Fit the weights of a regression model, using an ARD prior. The weights of the regression model are assumed to be in Gaussian distributions. Also estimate the parameters lambda (precisions of the distributions of the weights) and alpha (precision of the distribution of the noise). The estimation is done by an iterative procedures (Evidence Maximization)

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#bayesian-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ARDRegression.html)
 */
export class ARDRegression {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Maximum number of iterations.

      @defaultValue `300`
     */
    max_iter?: number

    /**
      Stop the algorithm if w has converged.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

      @defaultValue `0.000001`
     */
    alpha_1?: number

    /**
      Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

      @defaultValue `0.000001`
     */
    alpha_2?: number

    /**
      Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

      @defaultValue `0.000001`
     */
    lambda_1?: number

    /**
      Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

      @defaultValue `0.000001`
     */
    lambda_2?: number

    /**
      If `true`, compute the objective function at each step of the model.

      @defaultValue `false`
     */
    compute_score?: boolean

    /**
      Threshold for removing (pruning) weights with high precision from the computation.

      @defaultValue `10`
     */
    threshold_lambda?: number

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      Verbose mode when fitting the model.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `ARDRegression${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ARDRegression.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import ARDRegression
try: bridgeARDRegression
except NameError: bridgeARDRegression = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_ARDRegression = {'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'alpha_1': ${this.opts['alpha_1'] ?? undefined}, 'alpha_2': ${this.opts['alpha_2'] ?? undefined}, 'lambda_1': ${this.opts['lambda_1'] ?? undefined}, 'lambda_2': ${this.opts['lambda_2'] ?? undefined}, 'compute_score': ${this.opts['compute_score'] ?? undefined}, 'threshold_lambda': ${this.opts['threshold_lambda'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_ARDRegression = {k: v for k, v in ctor_ARDRegression.items() if v is not None}`

    await this._py
      .ex`bridgeARDRegression[${this.id}] = ARDRegression(**ctor_ARDRegression)`

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

    await this._py.ex`del bridgeARDRegression[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data and parameters.

    Iterative procedure to maximize the evidence
   */
  async fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Target values (integers). Will be cast to X’s dtype if necessary.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_ARDRegression_fit = {k: v for k, v in pms_ARDRegression_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_fit = bridgeARDRegression[${this.id}].fit(**pms_ARDRegression_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_fit.tolist() if hasattr(res_ARDRegression_fit, 'tolist') else res_ARDRegression_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_ARDRegression_get_metadata_routing = {k: v for k, v in pms_ARDRegression_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_get_metadata_routing = bridgeARDRegression[${this.id}].get_metadata_routing(**pms_ARDRegression_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_get_metadata_routing.tolist() if hasattr(res_ARDRegression_get_metadata_routing, 'tolist') else res_ARDRegression_get_metadata_routing`
  }

  /**
    Predict using the linear model.

    In addition to the mean of the predictive distribution, also its standard deviation can be returned.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Whether to return the standard deviation of posterior prediction.

      @defaultValue `false`
     */
    return_std?: boolean
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'return_std': ${opts['return_std'] ?? undefined}}

pms_ARDRegression_predict = {k: v for k, v in pms_ARDRegression_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_predict = bridgeARDRegression[${this.id}].predict(**pms_ARDRegression_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_predict.tolist() if hasattr(res_ARDRegression_predict, 'tolist') else res_ARDRegression_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.
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
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_ARDRegression_score = {k: v for k, v in pms_ARDRegression_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_score = bridgeARDRegression[${this.id}].score(**pms_ARDRegression_score)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_score.tolist() if hasattr(res_ARDRegression_score, 'tolist') else res_ARDRegression_score`
  }

  /**
    Request metadata passed to the `predict` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_request(opts: {
    /**
      Metadata routing for `return_std` parameter in `predict`.
     */
    return_std?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before set_predict_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_set_predict_request = {'return_std': ${opts['return_std'] ?? undefined}}

pms_ARDRegression_set_predict_request = {k: v for k, v in pms_ARDRegression_set_predict_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_set_predict_request = bridgeARDRegression[${this.id}].set_predict_request(**pms_ARDRegression_set_predict_request)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_set_predict_request.tolist() if hasattr(res_ARDRegression_set_predict_request, 'tolist') else res_ARDRegression_set_predict_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ARDRegression_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_ARDRegression_set_score_request = {k: v for k, v in pms_ARDRegression_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ARDRegression_set_score_request = bridgeARDRegression[${this.id}].set_score_request(**pms_ARDRegression_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_ARDRegression_set_score_request.tolist() if hasattr(res_ARDRegression_set_score_request, 'tolist') else res_ARDRegression_set_score_request`
  }

  /**
    Coefficients of the regression model (mean of distribution)
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_coef_ = bridgeARDRegression[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_coef_.tolist() if hasattr(attr_ARDRegression_coef_, 'tolist') else attr_ARDRegression_coef_`
    })()
  }

  /**
    estimated precision of the noise.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_alpha_ = bridgeARDRegression[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_alpha_.tolist() if hasattr(attr_ARDRegression_alpha_, 'tolist') else attr_ARDRegression_alpha_`
    })()
  }

  /**
    estimated precisions of the weights.
   */
  get lambda_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing lambda_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_lambda_ = bridgeARDRegression[${this.id}].lambda_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_lambda_.tolist() if hasattr(attr_ARDRegression_lambda_, 'tolist') else attr_ARDRegression_lambda_`
    })()
  }

  /**
    estimated variance-covariance matrix of the weights
   */
  get sigma_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing sigma_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_sigma_ = bridgeARDRegression[${this.id}].sigma_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_sigma_.tolist() if hasattr(attr_ARDRegression_sigma_, 'tolist') else attr_ARDRegression_sigma_`
    })()
  }

  /**
    if computed, value of the objective function (to be maximized)
   */
  get scores_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing scores_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_scores_ = bridgeARDRegression[${this.id}].scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_scores_.tolist() if hasattr(attr_ARDRegression_scores_, 'tolist') else attr_ARDRegression_scores_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ARDRegression must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_n_iter_ = bridgeARDRegression[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_n_iter_.tolist() if hasattr(attr_ARDRegression_n_iter_, 'tolist') else attr_ARDRegression_n_iter_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if `fit_intercept \= False`.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_intercept_ = bridgeARDRegression[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_intercept_.tolist() if hasattr(attr_ARDRegression_intercept_, 'tolist') else attr_ARDRegression_intercept_`
    })()
  }

  /**
    If `fit_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n_features) otherwise.
   */
  get X_offset_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before accessing X_offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_X_offset_ = bridgeARDRegression[${this.id}].X_offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_X_offset_.tolist() if hasattr(attr_ARDRegression_X_offset_, 'tolist') else attr_ARDRegression_X_offset_`
    })()
  }

  /**
    Set to np.ones(n_features).
   */
  get X_scale_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before accessing X_scale_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_X_scale_ = bridgeARDRegression[${this.id}].X_scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_X_scale_.tolist() if hasattr(attr_ARDRegression_X_scale_, 'tolist') else attr_ARDRegression_X_scale_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_n_features_in_ = bridgeARDRegression[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_n_features_in_.tolist() if hasattr(attr_ARDRegression_n_features_in_, 'tolist') else attr_ARDRegression_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ARDRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ARDRegression must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ARDRegression_feature_names_in_ = bridgeARDRegression[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ARDRegression_feature_names_in_.tolist() if hasattr(attr_ARDRegression_feature_names_in_, 'tolist') else attr_ARDRegression_feature_names_in_`
    })()
  }
}
