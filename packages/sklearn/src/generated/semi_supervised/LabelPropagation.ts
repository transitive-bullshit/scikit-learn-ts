/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Label Propagation classifier.

  Read more in the [User Guide](../semi_supervised.html#label-propagation).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)
 */
export class LabelPropagation {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.

      @defaultValue `'rbf'`
     */
    kernel?: 'knn' | 'rbf'

    /**
      Parameter for rbf kernel.

      @defaultValue `20`
     */
    gamma?: number

    /**
      Parameter for knn kernel which need to be strictly positive.

      @defaultValue `7`
     */
    n_neighbors?: number

    /**
      Change maximum number of iterations allowed.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      Convergence tolerance: threshold to consider the system at steady state.
     */
    tol?: number

    /**
      The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `LabelPropagation${crypto.randomUUID().split('-')[0]}`
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
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LabelPropagation.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.semi_supervised import LabelPropagation
try: bridgeLabelPropagation
except NameError: bridgeLabelPropagation = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LabelPropagation = {'kernel': ${this.opts['kernel'] ?? undefined}, 'gamma': ${this.opts['gamma'] ?? undefined}, 'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_LabelPropagation = {k: v for k, v in ctor_LabelPropagation.items() if v is not None}`

    await this._py
      .ex`bridgeLabelPropagation[${this.id}] = LabelPropagation(**ctor_LabelPropagation)`

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

    await this._py.ex`del bridgeLabelPropagation[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit a semi-supervised label propagation model to X.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction\_`.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LabelPropagation must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_LabelPropagation_fit = {k: v for k, v in pms_LabelPropagation_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_fit = bridgeLabelPropagation[${this.id}].fit(**pms_LabelPropagation_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_fit.tolist() if hasattr(res_LabelPropagation_fit, 'tolist') else res_LabelPropagation_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LabelPropagation_get_metadata_routing = {k: v for k, v in pms_LabelPropagation_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_get_metadata_routing = bridgeLabelPropagation[${this.id}].get_metadata_routing(**pms_LabelPropagation_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_get_metadata_routing.tolist() if hasattr(res_LabelPropagation_get_metadata_routing, 'tolist') else res_LabelPropagation_get_metadata_routing`
  }

  /**
    Perform inductive inference across the model.
   */
  async predict(opts: {
    /**
      The data matrix.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LabelPropagation must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LabelPropagation_predict = {k: v for k, v in pms_LabelPropagation_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_predict = bridgeLabelPropagation[${this.id}].predict(**pms_LabelPropagation_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_predict.tolist() if hasattr(res_LabelPropagation_predict, 'tolist') else res_LabelPropagation_predict`
  }

  /**
    Predict probability for each possible outcome.

    Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).
   */
  async predict_proba(opts: {
    /**
      The data matrix.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LabelPropagation_predict_proba = {k: v for k, v in pms_LabelPropagation_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_predict_proba = bridgeLabelPropagation[${this.id}].predict_proba(**pms_LabelPropagation_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_predict_proba.tolist() if hasattr(res_LabelPropagation_predict_proba, 'tolist') else res_LabelPropagation_predict_proba`
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
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LabelPropagation must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_LabelPropagation_score = {k: v for k, v in pms_LabelPropagation_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_score = bridgeLabelPropagation[${this.id}].score(**pms_LabelPropagation_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_score.tolist() if hasattr(res_LabelPropagation_score, 'tolist') else res_LabelPropagation_score`
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
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelPropagation_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LabelPropagation_set_score_request = {k: v for k, v in pms_LabelPropagation_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelPropagation_set_score_request = bridgeLabelPropagation[${this.id}].set_score_request(**pms_LabelPropagation_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelPropagation_set_score_request.tolist() if hasattr(res_LabelPropagation_set_score_request, 'tolist') else res_LabelPropagation_set_score_request`
  }

  /**
    Input array.
   */
  get X_(): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LabelPropagation must call init() before accessing X_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_X_ = bridgeLabelPropagation[${this.id}].X_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_X_.tolist() if hasattr(attr_LabelPropagation_X_, 'tolist') else attr_LabelPropagation_X_`
    })()
  }

  /**
    The distinct labels used in classifying instances.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_classes_ = bridgeLabelPropagation[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_classes_.tolist() if hasattr(attr_LabelPropagation_classes_, 'tolist') else attr_LabelPropagation_classes_`
    })()
  }

  /**
    Categorical distribution for each item.
   */
  get label_distributions_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing label_distributions_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_label_distributions_ = bridgeLabelPropagation[${this.id}].label_distributions_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_label_distributions_.tolist() if hasattr(attr_LabelPropagation_label_distributions_, 'tolist') else attr_LabelPropagation_label_distributions_`
    })()
  }

  /**
    Label assigned to each item during [fit](../../glossary.html#term-fit).
   */
  get transduction_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing transduction_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_transduction_ = bridgeLabelPropagation[${this.id}].transduction_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_transduction_.tolist() if hasattr(attr_LabelPropagation_transduction_, 'tolist') else attr_LabelPropagation_transduction_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_n_features_in_ = bridgeLabelPropagation[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_n_features_in_.tolist() if hasattr(attr_LabelPropagation_n_features_in_, 'tolist') else attr_LabelPropagation_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_feature_names_in_ = bridgeLabelPropagation[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_feature_names_in_.tolist() if hasattr(attr_LabelPropagation_feature_names_in_, 'tolist') else attr_LabelPropagation_feature_names_in_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LabelPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelPropagation must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelPropagation_n_iter_ = bridgeLabelPropagation[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelPropagation_n_iter_.tolist() if hasattr(attr_LabelPropagation_n_iter_, 'tolist') else attr_LabelPropagation_n_iter_`
    })()
  }
}
