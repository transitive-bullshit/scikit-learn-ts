/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Soft Voting/Majority Rule classifier for unfitted estimators.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#voting-classifier).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html)
 */
export class VotingClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Invoking the `fit` method on the `VotingClassifier` will fit clones of those original estimators that will be stored in the class attribute `self.estimators_`. An estimator can be set to `'drop'` using [`set_params`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.VotingClassifier.set_params "sklearn.ensemble.VotingClassifier.set_params").
     */
    estimators?: any

    /**
      If ‘hard’, uses predicted class labels for majority rule voting. Else if ‘soft’, predicts the class label based on the argmax of the sums of the predicted probabilities, which is recommended for an ensemble of well-calibrated classifiers.

      @defaultValue `'hard'`
     */
    voting?: 'hard' | 'soft'

    /**
      Sequence of weights (`float` or `int`) to weight the occurrences of predicted class labels (`hard` voting) or class probabilities before averaging (`soft` voting). Uses uniform weights if `undefined`.
     */
    weights?: ArrayLike

    /**
      The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Affects shape of transform output only when voting=’soft’ If voting=’soft’ and flatten_transform=`true`, transform method returns matrix with shape (n_samples, n_classifiers \* n_classes). If flatten_transform=`false`, it returns (n_classifiers, n_samples, n_classes).

      @defaultValue `true`
     */
    flatten_transform?: boolean

    /**
      If `true`, the time elapsed while fitting will be printed as it is completed.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `VotingClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('VotingClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import VotingClassifier
try: bridgeVotingClassifier
except NameError: bridgeVotingClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_VotingClassifier = {'estimators': ${this.opts['estimators'] ?? undefined}, 'voting': ${this.opts['voting'] ?? undefined}, 'weights': np.array(${this.opts['weights'] ?? undefined}) if ${this.opts['weights'] !== undefined} else None, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'flatten_transform': ${this.opts['flatten_transform'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_VotingClassifier = {k: v for k, v in ctor_VotingClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeVotingClassifier[${this.id}] = VotingClassifier(**ctor_VotingClassifier)`

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

    await this._py.ex`del bridgeVotingClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the estimators.
   */
  async fit(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters to pass to the underlying estimators.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_VotingClassifier_fit = {k: v for k, v in pms_VotingClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_fit = bridgeVotingClassifier[${this.id}].fit(**pms_VotingClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_fit.tolist() if hasattr(res_VotingClassifier_fit, 'tolist') else res_VotingClassifier_fit`
  }

  /**
    Return class labels or probabilities for each estimator.

    Return predictions for X for each estimator.
   */
  async fit_transform(opts: {
    /**
      Input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: NDArray

    /**
      Additional fit parameters.
     */
    fit_params?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_VotingClassifier_fit_transform = {k: v for k, v in pms_VotingClassifier_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_fit_transform = bridgeVotingClassifier[${this.id}].fit_transform(**pms_VotingClassifier_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_fit_transform.tolist() if hasattr(res_VotingClassifier_fit_transform, 'tolist') else res_VotingClassifier_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Not used, present here for API consistency by convention.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_VotingClassifier_get_feature_names_out = {k: v for k, v in pms_VotingClassifier_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_get_feature_names_out = bridgeVotingClassifier[${this.id}].get_feature_names_out(**pms_VotingClassifier_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_get_feature_names_out.tolist() if hasattr(res_VotingClassifier_get_feature_names_out, 'tolist') else res_VotingClassifier_get_feature_names_out`
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
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_VotingClassifier_get_metadata_routing = {k: v for k, v in pms_VotingClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_get_metadata_routing = bridgeVotingClassifier[${this.id}].get_metadata_routing(**pms_VotingClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_get_metadata_routing.tolist() if hasattr(res_VotingClassifier_get_metadata_routing, 'tolist') else res_VotingClassifier_get_metadata_routing`
  }

  /**
    Predict class labels for X.
   */
  async predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VotingClassifier_predict = {k: v for k, v in pms_VotingClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_predict = bridgeVotingClassifier[${this.id}].predict(**pms_VotingClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_predict.tolist() if hasattr(res_VotingClassifier_predict, 'tolist') else res_VotingClassifier_predict`
  }

  /**
    Compute probabilities of possible outcomes for samples in X.
   */
  async predict_proba(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VotingClassifier_predict_proba = {k: v for k, v in pms_VotingClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_predict_proba = bridgeVotingClassifier[${this.id}].predict_proba(**pms_VotingClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_predict_proba.tolist() if hasattr(res_VotingClassifier_predict_proba, 'tolist') else res_VotingClassifier_predict_proba`
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
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_VotingClassifier_score = {k: v for k, v in pms_VotingClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_score = bridgeVotingClassifier[${this.id}].score(**pms_VotingClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_score.tolist() if hasattr(res_VotingClassifier_score, 'tolist') else res_VotingClassifier_score`
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
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_VotingClassifier_set_fit_request = {k: v for k, v in pms_VotingClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_set_fit_request = bridgeVotingClassifier[${this.id}].set_fit_request(**pms_VotingClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_set_fit_request.tolist() if hasattr(res_VotingClassifier_set_fit_request, 'tolist') else res_VotingClassifier_set_fit_request`
  }

  /**
    Set output container.

    See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_VotingClassifier_set_output = {k: v for k, v in pms_VotingClassifier_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_set_output = bridgeVotingClassifier[${this.id}].set_output(**pms_VotingClassifier_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_set_output.tolist() if hasattr(res_VotingClassifier_set_output, 'tolist') else res_VotingClassifier_set_output`
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
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_VotingClassifier_set_score_request = {k: v for k, v in pms_VotingClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_set_score_request = bridgeVotingClassifier[${this.id}].set_score_request(**pms_VotingClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_set_score_request.tolist() if hasattr(res_VotingClassifier_set_score_request, 'tolist') else res_VotingClassifier_set_score_request`
  }

  /**
    Return class labels or probabilities for X for each estimator.
   */
  async transform(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingClassifier_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VotingClassifier_transform = {k: v for k, v in pms_VotingClassifier_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingClassifier_transform = bridgeVotingClassifier[${this.id}].transform(**pms_VotingClassifier_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingClassifier_transform.tolist() if hasattr(res_VotingClassifier_transform, 'tolist') else res_VotingClassifier_transform`
  }

  /**
    The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingClassifier_estimators_ = bridgeVotingClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingClassifier_estimators_.tolist() if hasattr(attr_VotingClassifier_estimators_, 'tolist') else attr_VotingClassifier_estimators_`
    })()
  }

  /**
    Attribute to access any fitted sub-estimators by name.
   */
  get named_estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before accessing named_estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingClassifier_named_estimators_ = bridgeVotingClassifier[${this.id}].named_estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingClassifier_named_estimators_.tolist() if hasattr(attr_VotingClassifier_named_estimators_, 'tolist') else attr_VotingClassifier_named_estimators_`
    })()
  }

  /**
    Transformer used to encode the labels during fit and decode during prediction.
   */
  get le_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VotingClassifier must call init() before accessing le_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingClassifier_le_ = bridgeVotingClassifier[${this.id}].le_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingClassifier_le_.tolist() if hasattr(attr_VotingClassifier_le_, 'tolist') else attr_VotingClassifier_le_`
    })()
  }

  /**
    The classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingClassifier_classes_ = bridgeVotingClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingClassifier_classes_.tolist() if hasattr(attr_VotingClassifier_classes_, 'tolist') else attr_VotingClassifier_classes_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This VotingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingClassifier_feature_names_in_ = bridgeVotingClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingClassifier_feature_names_in_.tolist() if hasattr(attr_VotingClassifier_feature_names_in_, 'tolist') else attr_VotingClassifier_feature_names_in_`
    })()
  }
}
