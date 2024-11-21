/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  DummyClassifier makes predictions that ignore the input features.

  This classifier serves as a simple baseline to compare against other more complex classifiers.

  The specific behavior of the baseline is selected with the `strategy` parameter.

  All strategies make predictions that ignore the input feature values passed as the `X` argument to `fit` and `predict`. The predictions, however, typically depend on values observed in the `y` parameter passed to `fit`.

  Note that the “stratified” and “uniform” strategies lead to non-deterministic predictions that can be rendered deterministic by setting the `random_state` parameter if needed. The other strategies are naturally deterministic and, once fit, always return the same constant prediction for any value of `X`.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#dummy-estimators).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyClassifier.html)
 */
export class DummyClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Strategy to use to generate predictions.

      @defaultValue `'prior'`
     */
    strategy?: 'most_frequent' | 'prior' | 'stratified' | 'uniform' | 'constant'

    /**
      Controls the randomness to generate the predictions when `strategy='stratified'` or `strategy='uniform'`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.
     */
    constant?: number | string | ArrayLike
  }) {
    this.id = `DummyClassifier${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DummyClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.dummy import DummyClassifier
try: bridgeDummyClassifier
except NameError: bridgeDummyClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_DummyClassifier = {'strategy': ${this.opts['strategy'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'constant': np.array(${this.opts['constant'] ?? undefined}) if ${this.opts['constant'] !== undefined} else None}

ctor_DummyClassifier = {k: v for k, v in ctor_DummyClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeDummyClassifier[${this.id}] = DummyClassifier(**ctor_DummyClassifier)`

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

    await this._py.ex`del bridgeDummyClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the baseline classifier.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

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
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DummyClassifier_fit = {k: v for k, v in pms_DummyClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_fit = bridgeDummyClassifier[${this.id}].fit(**pms_DummyClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_fit.tolist() if hasattr(res_DummyClassifier_fit, 'tolist') else res_DummyClassifier_fit`
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
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_DummyClassifier_get_metadata_routing = {k: v for k, v in pms_DummyClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_get_metadata_routing = bridgeDummyClassifier[${this.id}].get_metadata_routing(**pms_DummyClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_get_metadata_routing.tolist() if hasattr(res_DummyClassifier_get_metadata_routing, 'tolist') else res_DummyClassifier_get_metadata_routing`
  }

  /**
    Perform classification on test vectors X.
   */
  async predict(opts: {
    /**
      Test data.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_DummyClassifier_predict = {k: v for k, v in pms_DummyClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_predict = bridgeDummyClassifier[${this.id}].predict(**pms_DummyClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_predict.tolist() if hasattr(res_DummyClassifier_predict, 'tolist') else res_DummyClassifier_predict`
  }

  /**
    Return log probability estimates for the test vectors X.
   */
  async predict_log_proba(opts: {
    /**
      Training data.
     */
    X?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_predict_log_proba = {'X': ${opts['X'] ?? undefined}}

pms_DummyClassifier_predict_log_proba = {k: v for k, v in pms_DummyClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_predict_log_proba = bridgeDummyClassifier[${this.id}].predict_log_proba(**pms_DummyClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_predict_log_proba.tolist() if hasattr(res_DummyClassifier_predict_log_proba, 'tolist') else res_DummyClassifier_predict_log_proba`
  }

  /**
    Return probability estimates for the test vectors X.
   */
  async predict_proba(opts: {
    /**
      Test data.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyClassifier must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_DummyClassifier_predict_proba = {k: v for k, v in pms_DummyClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_predict_proba = bridgeDummyClassifier[${this.id}].predict_proba(**pms_DummyClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_predict_proba.tolist() if hasattr(res_DummyClassifier_predict_proba, 'tolist') else res_DummyClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
    /**
      Test samples. Passing `undefined` as test samples gives the same result as passing real test samples, since DummyClassifier operates independently of the sampled observations.
     */
    X?: ArrayLike[]

    /**
      True labels for X.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DummyClassifier_score = {k: v for k, v in pms_DummyClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_score = bridgeDummyClassifier[${this.id}].score(**pms_DummyClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_score.tolist() if hasattr(res_DummyClassifier_score, 'tolist') else res_DummyClassifier_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_DummyClassifier_set_fit_request = {k: v for k, v in pms_DummyClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_set_fit_request = bridgeDummyClassifier[${this.id}].set_fit_request(**pms_DummyClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_set_fit_request.tolist() if hasattr(res_DummyClassifier_set_fit_request, 'tolist') else res_DummyClassifier_set_fit_request`
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
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DummyClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_DummyClassifier_set_score_request = {k: v for k, v in pms_DummyClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyClassifier_set_score_request = bridgeDummyClassifier[${this.id}].set_score_request(**pms_DummyClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyClassifier_set_score_request.tolist() if hasattr(res_DummyClassifier_set_score_request, 'tolist') else res_DummyClassifier_set_score_request`
  }

  /**
    Unique class labels observed in `y`. For multi-output classification problems, this attribute is a list of arrays as each output has an independent set of possible classes.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_classes_ = bridgeDummyClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_classes_.tolist() if hasattr(attr_DummyClassifier_classes_, 'tolist') else attr_DummyClassifier_classes_`
    })()
  }

  /**
    Number of label for each output.
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_n_classes_ = bridgeDummyClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_n_classes_.tolist() if hasattr(attr_DummyClassifier_n_classes_, 'tolist') else attr_DummyClassifier_n_classes_`
    })()
  }

  /**
    Frequency of each class observed in `y`. For multioutput classification problems, this is computed independently for each output.
   */
  get class_prior_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing class_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_class_prior_ = bridgeDummyClassifier[${this.id}].class_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_class_prior_.tolist() if hasattr(attr_DummyClassifier_class_prior_, 'tolist') else attr_DummyClassifier_class_prior_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_n_features_in_ = bridgeDummyClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_n_features_in_.tolist() if hasattr(attr_DummyClassifier_n_features_in_, 'tolist') else attr_DummyClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_feature_names_in_ = bridgeDummyClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_feature_names_in_.tolist() if hasattr(attr_DummyClassifier_feature_names_in_, 'tolist') else attr_DummyClassifier_feature_names_in_`
    })()
  }

  /**
    Number of outputs.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_n_outputs_ = bridgeDummyClassifier[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_n_outputs_.tolist() if hasattr(attr_DummyClassifier_n_outputs_, 'tolist') else attr_DummyClassifier_n_outputs_`
    })()
  }

  /**
    True if the array returned from predict is to be in sparse CSC format. Is automatically set to `true` if the input `y` is passed in sparse format.
   */
  get sparse_output_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error('This DummyClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyClassifier must call init() before accessing sparse_output_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyClassifier_sparse_output_ = bridgeDummyClassifier[${this.id}].sparse_output_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyClassifier_sparse_output_.tolist() if hasattr(attr_DummyClassifier_sparse_output_, 'tolist') else attr_DummyClassifier_sparse_output_`
    })()
  }
}
