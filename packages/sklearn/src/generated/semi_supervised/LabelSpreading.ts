/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  LabelSpreading model for semi-supervised learning.

  This model is similar to the basic Label Propagation algorithm, but uses affinity matrix based on the normalized graph Laplacian and soft clamping across the labels.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#label-propagation).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelSpreading.html)
 */
export class LabelSpreading {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n_samples, n_features), and return a (n_samples, n_samples) shaped weight matrix.

      @defaultValue `'rbf'`
     */
    kernel?: 'knn' | 'rbf'

    /**
      Parameter for rbf kernel.

      @defaultValue `20`
     */
    gamma?: number

    /**
      Parameter for knn kernel which is a strictly positive integer.

      @defaultValue `7`
     */
    n_neighbors?: number

    /**
      Clamping factor. A value in (0, 1) that specifies the relative amount that an instance should adopt the information from its neighbors as opposed to its initial label. alpha=0 means keeping the initial label information; alpha=1 means replacing all initial information.

      @defaultValue `0.2`
     */
    alpha?: number

    /**
      Maximum number of iterations allowed.

      @defaultValue `30`
     */
    max_iter?: number

    /**
      Convergence tolerance: threshold to consider the system at steady state.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `LabelSpreading${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LabelSpreading.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.semi_supervised import LabelSpreading
try: bridgeLabelSpreading
except NameError: bridgeLabelSpreading = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LabelSpreading = {'kernel': ${this.opts['kernel'] ?? undefined}, 'gamma': ${this.opts['gamma'] ?? undefined}, 'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'alpha': ${this.opts['alpha'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_LabelSpreading = {k: v for k, v in ctor_LabelSpreading.items() if v is not None}`

    await this._py
      .ex`bridgeLabelSpreading[${this.id}] = LabelSpreading(**ctor_LabelSpreading)`

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

    await this._py.ex`del bridgeLabelSpreading[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit a semi-supervised label propagation model to X.

    The input samples (labeled and unlabeled) are provided by matrix X, and target labels are provided by matrix y. We conventionally apply the label -1 to unlabeled samples in matrix y in a semi-supervised classification.
   */
  async fit(opts: {
    /**
      Training data, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction_`.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelSpreading must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_LabelSpreading_fit = {k: v for k, v in pms_LabelSpreading_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_fit = bridgeLabelSpreading[${this.id}].fit(**pms_LabelSpreading_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_fit.tolist() if hasattr(res_LabelSpreading_fit, 'tolist') else res_LabelSpreading_fit`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LabelSpreading_get_metadata_routing = {k: v for k, v in pms_LabelSpreading_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_get_metadata_routing = bridgeLabelSpreading[${this.id}].get_metadata_routing(**pms_LabelSpreading_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_get_metadata_routing.tolist() if hasattr(res_LabelSpreading_get_metadata_routing, 'tolist') else res_LabelSpreading_get_metadata_routing`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelSpreading must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LabelSpreading_predict = {k: v for k, v in pms_LabelSpreading_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_predict = bridgeLabelSpreading[${this.id}].predict(**pms_LabelSpreading_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_predict.tolist() if hasattr(res_LabelSpreading_predict, 'tolist') else res_LabelSpreading_predict`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelSpreading must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LabelSpreading_predict_proba = {k: v for k, v in pms_LabelSpreading_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_predict_proba = bridgeLabelSpreading[${this.id}].predict_proba(**pms_LabelSpreading_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_predict_proba.tolist() if hasattr(res_LabelSpreading_predict_proba, 'tolist') else res_LabelSpreading_predict_proba`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelSpreading must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_LabelSpreading_score = {k: v for k, v in pms_LabelSpreading_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_score = bridgeLabelSpreading[${this.id}].score(**pms_LabelSpreading_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_score.tolist() if hasattr(res_LabelSpreading_score, 'tolist') else res_LabelSpreading_score`
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
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelSpreading_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LabelSpreading_set_score_request = {k: v for k, v in pms_LabelSpreading_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelSpreading_set_score_request = bridgeLabelSpreading[${this.id}].set_score_request(**pms_LabelSpreading_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelSpreading_set_score_request.tolist() if hasattr(res_LabelSpreading_set_score_request, 'tolist') else res_LabelSpreading_set_score_request`
  }

  /**
    Input array.
   */
  get X_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelSpreading must call init() before accessing X_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_X_ = bridgeLabelSpreading[${this.id}].X_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_X_.tolist() if hasattr(attr_LabelSpreading_X_, 'tolist') else attr_LabelSpreading_X_`
    })()
  }

  /**
    The distinct labels used in classifying instances.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_classes_ = bridgeLabelSpreading[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_classes_.tolist() if hasattr(attr_LabelSpreading_classes_, 'tolist') else attr_LabelSpreading_classes_`
    })()
  }

  /**
    Categorical distribution for each item.
   */
  get label_distributions_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing label_distributions_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_label_distributions_ = bridgeLabelSpreading[${this.id}].label_distributions_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_label_distributions_.tolist() if hasattr(attr_LabelSpreading_label_distributions_, 'tolist') else attr_LabelSpreading_label_distributions_`
    })()
  }

  /**
    Label assigned to each item during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get transduction_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing transduction_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_transduction_ = bridgeLabelSpreading[${this.id}].transduction_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_transduction_.tolist() if hasattr(attr_LabelSpreading_transduction_, 'tolist') else attr_LabelSpreading_transduction_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_n_features_in_ = bridgeLabelSpreading[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_n_features_in_.tolist() if hasattr(attr_LabelSpreading_n_features_in_, 'tolist') else attr_LabelSpreading_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_feature_names_in_ = bridgeLabelSpreading[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_feature_names_in_.tolist() if hasattr(attr_LabelSpreading_feature_names_in_, 'tolist') else attr_LabelSpreading_feature_names_in_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LabelSpreading instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelSpreading must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelSpreading_n_iter_ = bridgeLabelSpreading[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelSpreading_n_iter_.tolist() if hasattr(attr_LabelSpreading_n_iter_, 'tolist') else attr_LabelSpreading_n_iter_`
    })()
  }
}
