/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Binary classifier that manually sets the decision threshold.

  This classifier allows to change the default decision threshold used for converting posterior probability estimates (i.e. output of `predict_proba`) or decision scores (i.e. output of `decision_function`) into a class label.

  Here, the threshold is not optimized and is set to a constant value.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../classification_threshold.html#fixedthresholdclassifier).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.FixedThresholdClassifier.html)
 */
export class FixedThresholdClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The binary classifier, fitted or not, for which we want to optimize the decision threshold used during `predict`.
     */
    estimator?: any

    /**
      The decision threshold to use when converting posterior probability estimates (i.e. output of `predict_proba`) or decision scores (i.e. output of `decision_function`) into a class label. When `"auto"`, the threshold is set to 0.5 if `predict_proba` is used as `response_method`, otherwise it is set to 0 (i.e. the default threshold for `decision_function`).

      @defaultValue `'auto'`
     */
    threshold?: 'auto' | number

    /**
      The label of the positive class. Used to process the output of the `response_method` method. When `pos_label=None`, if `y_true` is in `{-1, 1}` or `{0, 1}`, `pos_label` is set to 1, otherwise an error will be raised.
     */
    pos_label?: number | boolean | string

    /**
      Methods by the classifier `estimator` corresponding to the decision function for which we want to find a threshold. It can be:

      @defaultValue `'auto'`
     */
    response_method?: 'auto' | 'decision_function' | 'predict_proba'
  }) {
    this.id = `FixedThresholdClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'FixedThresholdClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import FixedThresholdClassifier
try: bridgeFixedThresholdClassifier
except NameError: bridgeFixedThresholdClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_FixedThresholdClassifier = {'estimator': ${this.opts['estimator'] ?? undefined}, 'threshold': ${this.opts['threshold'] ?? undefined}, 'pos_label': ${this.opts['pos_label'] ?? undefined}, 'response_method': ${this.opts['response_method'] ?? undefined}}

ctor_FixedThresholdClassifier = {k: v for k, v in ctor_FixedThresholdClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeFixedThresholdClassifier[${this.id}] = FixedThresholdClassifier(**ctor_FixedThresholdClassifier)`

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

    await this._py.ex`del bridgeFixedThresholdClassifier[${this.id}]`

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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_FixedThresholdClassifier_decision_function = {k: v for k, v in pms_FixedThresholdClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_decision_function = bridgeFixedThresholdClassifier[${this.id}].decision_function(**pms_FixedThresholdClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_decision_function.tolist() if hasattr(res_FixedThresholdClassifier_decision_function, 'tolist') else res_FixedThresholdClassifier_decision_function`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('FixedThresholdClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_FixedThresholdClassifier_fit = {k: v for k, v in pms_FixedThresholdClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_fit = bridgeFixedThresholdClassifier[${this.id}].fit(**pms_FixedThresholdClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_fit.tolist() if hasattr(res_FixedThresholdClassifier_fit, 'tolist') else res_FixedThresholdClassifier_fit`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_FixedThresholdClassifier_get_metadata_routing = {k: v for k, v in pms_FixedThresholdClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_get_metadata_routing = bridgeFixedThresholdClassifier[${this.id}].get_metadata_routing(**pms_FixedThresholdClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_get_metadata_routing.tolist() if hasattr(res_FixedThresholdClassifier_get_metadata_routing, 'tolist') else res_FixedThresholdClassifier_get_metadata_routing`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_FixedThresholdClassifier_predict = {k: v for k, v in pms_FixedThresholdClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_predict = bridgeFixedThresholdClassifier[${this.id}].predict(**pms_FixedThresholdClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_predict.tolist() if hasattr(res_FixedThresholdClassifier_predict, 'tolist') else res_FixedThresholdClassifier_predict`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_FixedThresholdClassifier_predict_log_proba = {k: v for k, v in pms_FixedThresholdClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_predict_log_proba = bridgeFixedThresholdClassifier[${this.id}].predict_log_proba(**pms_FixedThresholdClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_predict_log_proba.tolist() if hasattr(res_FixedThresholdClassifier_predict_log_proba, 'tolist') else res_FixedThresholdClassifier_predict_log_proba`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_FixedThresholdClassifier_predict_proba = {k: v for k, v in pms_FixedThresholdClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_predict_proba = bridgeFixedThresholdClassifier[${this.id}].predict_proba(**pms_FixedThresholdClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_predict_proba.tolist() if hasattr(res_FixedThresholdClassifier_predict_proba, 'tolist') else res_FixedThresholdClassifier_predict_proba`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_FixedThresholdClassifier_score = {k: v for k, v in pms_FixedThresholdClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_score = bridgeFixedThresholdClassifier[${this.id}].score(**pms_FixedThresholdClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_score.tolist() if hasattr(res_FixedThresholdClassifier_score, 'tolist') else res_FixedThresholdClassifier_score`
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
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FixedThresholdClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_FixedThresholdClassifier_set_score_request = {k: v for k, v in pms_FixedThresholdClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FixedThresholdClassifier_set_score_request = bridgeFixedThresholdClassifier[${this.id}].set_score_request(**pms_FixedThresholdClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_FixedThresholdClassifier_set_score_request.tolist() if hasattr(res_FixedThresholdClassifier_set_score_request, 'tolist') else res_FixedThresholdClassifier_set_score_request`
  }

  /**
    The fitted classifier used when predicting.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FixedThresholdClassifier_estimator_ = bridgeFixedThresholdClassifier[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_FixedThresholdClassifier_estimator_.tolist() if hasattr(attr_FixedThresholdClassifier_estimator_, 'tolist') else attr_FixedThresholdClassifier_estimator_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FixedThresholdClassifier_n_features_in_ = bridgeFixedThresholdClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FixedThresholdClassifier_n_features_in_.tolist() if hasattr(attr_FixedThresholdClassifier_n_features_in_, 'tolist') else attr_FixedThresholdClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This FixedThresholdClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FixedThresholdClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FixedThresholdClassifier_feature_names_in_ = bridgeFixedThresholdClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FixedThresholdClassifier_feature_names_in_.tolist() if hasattr(attr_FixedThresholdClassifier_feature_names_in_, 'tolist') else attr_FixedThresholdClassifier_feature_names_in_`
    })()
  }
}
