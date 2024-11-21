/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Passive Aggressive Regressor.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#passive-aggressive).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveRegressor.html)
 */
export class PassiveAggressiveRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Maximum step size (regularization). Defaults to 1.0.

      @defaultValue `1`
     */
    C?: number

    /**
      Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered. Defaults to `true`.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.linear_model.PassiveAggressiveRegressor.partial_fit "sklearn.linear_model.PassiveAggressiveRegressor.partial_fit") method.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous_loss - tol).

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs.

      @defaultValue `false`
     */
    early_stopping?: boolean

    /**
      The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is `true`.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      Number of iterations with no improvement to wait before early stopping.

      @defaultValue `5`
     */
    n_iter_no_change?: number

    /**
      Whether or not the training data should be shuffled after each epoch.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      The verbosity level.

      @defaultValue `0`
     */
    verbose?: number

    /**
      The loss function to be used: epsilon_insensitive: equivalent to PA-I in the reference paper. squared_epsilon_insensitive: equivalent to PA-II in the reference paper.

      @defaultValue `'epsilon_insensitive'`
     */
    loss?: string

    /**
      If the difference between the current prediction and the correct label is below this threshold, the model is not updated.

      @defaultValue `0.1`
     */
    epsilon?: number

    /**
      Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

      Repeatedly calling fit or partial_fit when warm_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled.

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      When set to `true`, computes the averaged SGD weights and stores the result in the `coef_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.

      @defaultValue `false`
     */
    average?: boolean | number
  }) {
    this.id = `PassiveAggressiveRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PassiveAggressiveRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import PassiveAggressiveRegressor
try: bridgePassiveAggressiveRegressor
except NameError: bridgePassiveAggressiveRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_PassiveAggressiveRegressor = {'C': ${this.opts['C'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'early_stopping': ${this.opts['early_stopping'] ?? undefined}, 'validation_fraction': ${this.opts['validation_fraction'] ?? undefined}, 'n_iter_no_change': ${this.opts['n_iter_no_change'] ?? undefined}, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'loss': ${this.opts['loss'] ?? undefined}, 'epsilon': ${this.opts['epsilon'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'average': ${this.opts['average'] ?? undefined}}

ctor_PassiveAggressiveRegressor = {k: v for k, v in ctor_PassiveAggressiveRegressor.items() if v is not None}`

    await this._py
      .ex`bridgePassiveAggressiveRegressor[${this.id}] = PassiveAggressiveRegressor(**ctor_PassiveAggressiveRegressor)`

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

    await this._py.ex`del bridgePassiveAggressiveRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef_` member (back) to a numpy.ndarray. This is the default format of `coef_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before densify()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveRegressor_densify = {}

pms_PassiveAggressiveRegressor_densify = {k: v for k, v in pms_PassiveAggressiveRegressor_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_densify = bridgePassiveAggressiveRegressor[${this.id}].densify(**pms_PassiveAggressiveRegressor_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_densify.tolist() if hasattr(res_PassiveAggressiveRegressor_densify, 'tolist') else res_PassiveAggressiveRegressor_densify`
  }

  /**
    Fit linear model with Passive Aggressive algorithm.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: any

    /**
      The initial coefficients to warm-start the optimization.
     */
    coef_init?: any

    /**
      The initial intercept to warm-start the optimization.
     */
    intercept_init?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'coef_init': ${opts['coef_init'] ?? undefined}, 'intercept_init': ${opts['intercept_init'] ?? undefined}}

pms_PassiveAggressiveRegressor_fit = {k: v for k, v in pms_PassiveAggressiveRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_fit = bridgePassiveAggressiveRegressor[${this.id}].fit(**pms_PassiveAggressiveRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_fit.tolist() if hasattr(res_PassiveAggressiveRegressor_fit, 'tolist') else res_PassiveAggressiveRegressor_fit`
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
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_PassiveAggressiveRegressor_get_metadata_routing = {k: v for k, v in pms_PassiveAggressiveRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_get_metadata_routing = bridgePassiveAggressiveRegressor[${this.id}].get_metadata_routing(**pms_PassiveAggressiveRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_get_metadata_routing.tolist() if hasattr(res_PassiveAggressiveRegressor_get_metadata_routing, 'tolist') else res_PassiveAggressiveRegressor_get_metadata_routing`
  }

  /**
    Fit linear model with Passive Aggressive algorithm.
   */
  async partial_fit(opts: {
    /**
      Subset of training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Subset of target values.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_partial_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_PassiveAggressiveRegressor_partial_fit = {k: v for k, v in pms_PassiveAggressiveRegressor_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_partial_fit = bridgePassiveAggressiveRegressor[${this.id}].partial_fit(**pms_PassiveAggressiveRegressor_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_partial_fit.tolist() if hasattr(res_PassiveAggressiveRegressor_partial_fit, 'tolist') else res_PassiveAggressiveRegressor_partial_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: {
    /**
      Input data.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_predict = {'X': ${opts['X'] ?? undefined}}

pms_PassiveAggressiveRegressor_predict = {k: v for k, v in pms_PassiveAggressiveRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_predict = bridgePassiveAggressiveRegressor[${this.id}].predict(**pms_PassiveAggressiveRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_predict.tolist() if hasattr(res_PassiveAggressiveRegressor_predict, 'tolist') else res_PassiveAggressiveRegressor_predict`
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
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_PassiveAggressiveRegressor_score = {k: v for k, v in pms_PassiveAggressiveRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_score = bridgePassiveAggressiveRegressor[${this.id}].score(**pms_PassiveAggressiveRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_score.tolist() if hasattr(res_PassiveAggressiveRegressor_score, 'tolist') else res_PassiveAggressiveRegressor_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `coef_init` parameter in `fit`.
     */
    coef_init?: string | boolean

    /**
      Metadata routing for `intercept_init` parameter in `fit`.
     */
    intercept_init?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_set_fit_request = {'coef_init': ${opts['coef_init'] ?? undefined}, 'intercept_init': ${opts['intercept_init'] ?? undefined}}

pms_PassiveAggressiveRegressor_set_fit_request = {k: v for k, v in pms_PassiveAggressiveRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_set_fit_request = bridgePassiveAggressiveRegressor[${this.id}].set_fit_request(**pms_PassiveAggressiveRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_set_fit_request.tolist() if hasattr(res_PassiveAggressiveRegressor_set_fit_request, 'tolist') else res_PassiveAggressiveRegressor_set_fit_request`
  }

  /**
    Request metadata passed to the `partial_fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_partial_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `partial_fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before set_partial_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_set_partial_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_PassiveAggressiveRegressor_set_partial_fit_request = {k: v for k, v in pms_PassiveAggressiveRegressor_set_partial_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_set_partial_fit_request = bridgePassiveAggressiveRegressor[${this.id}].set_partial_fit_request(**pms_PassiveAggressiveRegressor_set_partial_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_set_partial_fit_request.tolist() if hasattr(res_PassiveAggressiveRegressor_set_partial_fit_request, 'tolist') else res_PassiveAggressiveRegressor_set_partial_fit_request`
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
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_PassiveAggressiveRegressor_set_score_request = {k: v for k, v in pms_PassiveAggressiveRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_set_score_request = bridgePassiveAggressiveRegressor[${this.id}].set_score_request(**pms_PassiveAggressiveRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_set_score_request.tolist() if hasattr(res_PassiveAggressiveRegressor_set_score_request, 'tolist') else res_PassiveAggressiveRegressor_set_score_request`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before sparsify()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveRegressor_sparsify = {}

pms_PassiveAggressiveRegressor_sparsify = {k: v for k, v in pms_PassiveAggressiveRegressor_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveRegressor_sparsify = bridgePassiveAggressiveRegressor[${this.id}].sparsify(**pms_PassiveAggressiveRegressor_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveRegressor_sparsify.tolist() if hasattr(res_PassiveAggressiveRegressor_sparsify, 'tolist') else res_PassiveAggressiveRegressor_sparsify`
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_coef_ = bridgePassiveAggressiveRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_coef_.tolist() if hasattr(attr_PassiveAggressiveRegressor_coef_, 'tolist') else attr_PassiveAggressiveRegressor_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_intercept_ = bridgePassiveAggressiveRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_intercept_.tolist() if hasattr(attr_PassiveAggressiveRegressor_intercept_, 'tolist') else attr_PassiveAggressiveRegressor_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_n_features_in_ = bridgePassiveAggressiveRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_n_features_in_.tolist() if hasattr(attr_PassiveAggressiveRegressor_n_features_in_, 'tolist') else attr_PassiveAggressiveRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_feature_names_in_ = bridgePassiveAggressiveRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_feature_names_in_.tolist() if hasattr(attr_PassiveAggressiveRegressor_feature_names_in_, 'tolist') else attr_PassiveAggressiveRegressor_feature_names_in_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_n_iter_ = bridgePassiveAggressiveRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_n_iter_.tolist() if hasattr(attr_PassiveAggressiveRegressor_n_iter_, 'tolist') else attr_PassiveAggressiveRegressor_n_iter_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n_iter_ \* n_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveRegressor must call init() before accessing t_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveRegressor_t_ = bridgePassiveAggressiveRegressor[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveRegressor_t_.tolist() if hasattr(attr_PassiveAggressiveRegressor_t_, 'tolist') else attr_PassiveAggressiveRegressor_t_`
    })()
  }
}
