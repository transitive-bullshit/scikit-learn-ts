/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Classifier that post-tunes the decision threshold using cross-validation.

  This estimator post-tunes the decision threshold (cut-off point) that is used for converting posterior probability estimates (i.e. output of `predict_proba`) or decision scores (i.e. output of `decision_function`) into a class label. The tuning is done by optimizing a binary metric, potentially constrained by a another metric.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../classification_threshold.html#tunedthresholdclassifiercv).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TunedThresholdClassifierCV.html)
 */
export class TunedThresholdClassifierCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The classifier, fitted or not, for which we want to optimize the decision threshold used during `predict`.
     */
    estimator?: any

    /**
      The objective metric to be optimized. Can be one of:

      @defaultValue `'balanced_accuracy'`
     */
    scoring?: string

    /**
      Methods by the classifier `estimator` corresponding to the decision function for which we want to find a threshold. It can be:

      @defaultValue `'auto'`
     */
    response_method?: 'auto' | 'decision_function' | 'predict_proba'

    /**
      The number of decision threshold to use when discretizing the output of the classifier `method`. Pass an array-like to manually specify the thresholds to use.

      @defaultValue `100`
     */
    thresholds?: number | ArrayLike

    /**
      Determines the cross-validation splitting strategy to train classifier. Possible inputs for cv are:
     */
    cv?: number | 'prefit'

    /**
      Whether or not to refit the classifier on the entire training set once the decision threshold has been found. Note that forcing `refit=False` on cross-validation having more than a single split will raise an error. Similarly, `refit=True` in conjunction with `cv="prefit"` will raise an error.

      @defaultValue `true`
     */
    refit?: boolean

    /**
      The number of jobs to run in parallel. When `cv` represents a cross-validation strategy, the fitting and scoring on each data split is done in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Controls the randomness of cross-validation when `cv` is a float. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Whether to store all scores and thresholds computed during the cross-validation process.

      @defaultValue `false`
     */
    store_cv_results?: boolean
  }) {
    this.id = `TunedThresholdClassifierCV${crypto.randomUUID().split('-')[0]}`
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
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'TunedThresholdClassifierCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import TunedThresholdClassifierCV
try: bridgeTunedThresholdClassifierCV
except NameError: bridgeTunedThresholdClassifierCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TunedThresholdClassifierCV = {'estimator': ${this.opts['estimator'] ?? undefined}, 'scoring': ${this.opts['scoring'] ?? undefined}, 'response_method': ${this.opts['response_method'] ?? undefined}, 'thresholds': ${this.opts['thresholds'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'refit': ${this.opts['refit'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'store_cv_results': ${this.opts['store_cv_results'] ?? undefined}}

ctor_TunedThresholdClassifierCV = {k: v for k, v in ctor_TunedThresholdClassifierCV.items() if v is not None}`

    await this._py
      .ex`bridgeTunedThresholdClassifierCV[${this.id}] = TunedThresholdClassifierCV(**ctor_TunedThresholdClassifierCV)`

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

    await this._py.ex`del bridgeTunedThresholdClassifierCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Decision function for samples in `X` using the fitted estimator.
   */
  async decision_function(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TunedThresholdClassifierCV_decision_function = {k: v for k, v in pms_TunedThresholdClassifierCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_decision_function = bridgeTunedThresholdClassifierCV[${this.id}].decision_function(**pms_TunedThresholdClassifierCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_decision_function.tolist() if hasattr(res_TunedThresholdClassifierCV_decision_function, 'tolist') else res_TunedThresholdClassifierCV_decision_function`
  }

  /**
    Fit the classifier.
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
      Parameters to pass to the `fit` method of the underlying classifier.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_TunedThresholdClassifierCV_fit = {k: v for k, v in pms_TunedThresholdClassifierCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_fit = bridgeTunedThresholdClassifierCV[${this.id}].fit(**pms_TunedThresholdClassifierCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_fit.tolist() if hasattr(res_TunedThresholdClassifierCV_fit, 'tolist') else res_TunedThresholdClassifierCV_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_TunedThresholdClassifierCV_get_metadata_routing = {k: v for k, v in pms_TunedThresholdClassifierCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_get_metadata_routing = bridgeTunedThresholdClassifierCV[${this.id}].get_metadata_routing(**pms_TunedThresholdClassifierCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_get_metadata_routing.tolist() if hasattr(res_TunedThresholdClassifierCV_get_metadata_routing, 'tolist') else res_TunedThresholdClassifierCV_get_metadata_routing`
  }

  /**
    Predict the target of new samples.
   */
  async predict(opts: {
    /**
      The samples, as accepted by `estimator.predict`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TunedThresholdClassifierCV_predict = {k: v for k, v in pms_TunedThresholdClassifierCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_predict = bridgeTunedThresholdClassifierCV[${this.id}].predict(**pms_TunedThresholdClassifierCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_predict.tolist() if hasattr(res_TunedThresholdClassifierCV_predict, 'tolist') else res_TunedThresholdClassifierCV_predict`
  }

  /**
    Predict logarithm class probabilities for `X` using the fitted estimator.
   */
  async predict_log_proba(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TunedThresholdClassifierCV_predict_log_proba = {k: v for k, v in pms_TunedThresholdClassifierCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_predict_log_proba = bridgeTunedThresholdClassifierCV[${this.id}].predict_log_proba(**pms_TunedThresholdClassifierCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_predict_log_proba.tolist() if hasattr(res_TunedThresholdClassifierCV_predict_log_proba, 'tolist') else res_TunedThresholdClassifierCV_predict_log_proba`
  }

  /**
    Predict class probabilities for `X` using the fitted estimator.
   */
  async predict_proba(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TunedThresholdClassifierCV_predict_proba = {k: v for k, v in pms_TunedThresholdClassifierCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_predict_proba = bridgeTunedThresholdClassifierCV[${this.id}].predict_proba(**pms_TunedThresholdClassifierCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_predict_proba.tolist() if hasattr(res_TunedThresholdClassifierCV_predict_proba, 'tolist') else res_TunedThresholdClassifierCV_predict_proba`
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
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_TunedThresholdClassifierCV_score = {k: v for k, v in pms_TunedThresholdClassifierCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_score = bridgeTunedThresholdClassifierCV[${this.id}].score(**pms_TunedThresholdClassifierCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_score.tolist() if hasattr(res_TunedThresholdClassifierCV_score, 'tolist') else res_TunedThresholdClassifierCV_score`
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
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TunedThresholdClassifierCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_TunedThresholdClassifierCV_set_score_request = {k: v for k, v in pms_TunedThresholdClassifierCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TunedThresholdClassifierCV_set_score_request = bridgeTunedThresholdClassifierCV[${this.id}].set_score_request(**pms_TunedThresholdClassifierCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_TunedThresholdClassifierCV_set_score_request.tolist() if hasattr(res_TunedThresholdClassifierCV_set_score_request, 'tolist') else res_TunedThresholdClassifierCV_set_score_request`
  }

  /**
    The fitted classifier used when predicting.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_estimator_ = bridgeTunedThresholdClassifierCV[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_estimator_.tolist() if hasattr(attr_TunedThresholdClassifierCV_estimator_, 'tolist') else attr_TunedThresholdClassifierCV_estimator_`
    })()
  }

  /**
    The new decision threshold.
   */
  get best_threshold_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing best_threshold_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_best_threshold_ = bridgeTunedThresholdClassifierCV[${this.id}].best_threshold_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_best_threshold_.tolist() if hasattr(attr_TunedThresholdClassifierCV_best_threshold_, 'tolist') else attr_TunedThresholdClassifierCV_best_threshold_`
    })()
  }

  /**
    The optimal score of the objective metric, evaluated at `best_threshold_`.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_best_score_ = bridgeTunedThresholdClassifierCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_best_score_.tolist() if hasattr(attr_TunedThresholdClassifierCV_best_score_, 'tolist') else attr_TunedThresholdClassifierCV_best_score_`
    })()
  }

  /**
    A dictionary containing the scores and thresholds computed during the cross-validation process. Only exist if `store_cv_results=True`. The keys are `"thresholds"` and `"scores"`.
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_cv_results_ = bridgeTunedThresholdClassifierCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_cv_results_.tolist() if hasattr(attr_TunedThresholdClassifierCV_cv_results_, 'tolist') else attr_TunedThresholdClassifierCV_cv_results_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_n_features_in_ = bridgeTunedThresholdClassifierCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_n_features_in_.tolist() if hasattr(attr_TunedThresholdClassifierCV_n_features_in_, 'tolist') else attr_TunedThresholdClassifierCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TunedThresholdClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TunedThresholdClassifierCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TunedThresholdClassifierCV_feature_names_in_ = bridgeTunedThresholdClassifierCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TunedThresholdClassifierCV_feature_names_in_.tolist() if hasattr(attr_TunedThresholdClassifierCV_feature_names_in_, 'tolist') else attr_TunedThresholdClassifierCV_feature_names_in_`
    })()
  }
}
