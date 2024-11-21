/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Classifier implementing the k-nearest neighbors vote.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#classification).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html)
 */
export class KNeighborsClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of neighbors to use by default for [`kneighbors`](https://scikit-learn.org/stable/modules/generated/#sklearn.neighbors.KNeighborsClassifier.kneighbors "sklearn.neighbors.KNeighborsClassifier.kneighbors") queries.

      @defaultValue `5`
     */
    n_neighbors?: number

    /**
      Weight function used in prediction. Possible values:

      @defaultValue `'uniform'`
     */
    weights?: 'uniform' | 'distance'

    /**
      Algorithm used to compute the nearest neighbors:

      @defaultValue `'auto'`
     */
    algorithm?: 'auto' | 'ball_tree' | 'kd_tree' | 'brute'

    /**
      Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

      @defaultValue `30`
     */
    leaf_size?: number

    /**
      Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used. This parameter is expected to be positive.

      @defaultValue `2`
     */
    p?: number

    /**
      Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance_metrics`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

      If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

      If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

      @defaultValue `'minkowski'`
     */
    metric?: string

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any

    /**
      The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. Doesn’t affect [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.neighbors.KNeighborsClassifier.fit "sklearn.neighbors.KNeighborsClassifier.fit") method.
     */
    n_jobs?: number
  }) {
    this.id = `KNeighborsClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'KNeighborsClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
try: bridgeKNeighborsClassifier
except NameError: bridgeKNeighborsClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_KNeighborsClassifier = {'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'weights': ${this.opts['weights'] ?? undefined}, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'p': ${this.opts['p'] ?? undefined}, 'metric': ${this.opts['metric'] ?? undefined}, 'metric_params': ${this.opts['metric_params'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_KNeighborsClassifier = {k: v for k, v in ctor_KNeighborsClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeKNeighborsClassifier[${this.id}] = KNeighborsClassifier(**ctor_KNeighborsClassifier)`

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

    await this._py.ex`del bridgeKNeighborsClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the k-nearest neighbors classifier from the training dataset.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KNeighborsClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_KNeighborsClassifier_fit = {k: v for k, v in pms_KNeighborsClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_fit = bridgeKNeighborsClassifier[${this.id}].fit(**pms_KNeighborsClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_fit.tolist() if hasattr(res_KNeighborsClassifier_fit, 'tolist') else res_KNeighborsClassifier_fit`
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
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_KNeighborsClassifier_get_metadata_routing = {k: v for k, v in pms_KNeighborsClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_get_metadata_routing = bridgeKNeighborsClassifier[${this.id}].get_metadata_routing(**pms_KNeighborsClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_get_metadata_routing.tolist() if hasattr(res_KNeighborsClassifier_get_metadata_routing, 'tolist') else res_KNeighborsClassifier_get_metadata_routing`
  }

  /**
    Find the K-neighbors of a point.

    Returns indices of and distances to the neighbors of each point.
   */
  async kneighbors(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Number of neighbors required for each sample. The default is the value passed to the constructor.
     */
    n_neighbors?: number

    /**
      Whether or not to return the distances.

      @defaultValue `true`
     */
    return_distance?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before kneighbors()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_kneighbors = {'X': ${opts['X'] ?? undefined}, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'return_distance': ${opts['return_distance'] ?? undefined}}

pms_KNeighborsClassifier_kneighbors = {k: v for k, v in pms_KNeighborsClassifier_kneighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_kneighbors = bridgeKNeighborsClassifier[${this.id}].kneighbors(**pms_KNeighborsClassifier_kneighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_kneighbors.tolist() if hasattr(res_KNeighborsClassifier_kneighbors, 'tolist') else res_KNeighborsClassifier_kneighbors`
  }

  /**
    Compute the (weighted) graph of k-Neighbors for points in X.
   */
  async kneighbors_graph(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n_queries, n_indexed). Otherwise the shape should be (n_queries, n_features).
     */
    X?: any

    /**
      Number of neighbors for each sample. The default is the value passed to the constructor.
     */
    n_neighbors?: number

    /**
      Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

      @defaultValue `'connectivity'`
     */
    mode?: 'connectivity' | 'distance'
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before kneighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_kneighbors_graph = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'mode': ${opts['mode'] ?? undefined}}

pms_KNeighborsClassifier_kneighbors_graph = {k: v for k, v in pms_KNeighborsClassifier_kneighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_kneighbors_graph = bridgeKNeighborsClassifier[${this.id}].kneighbors_graph(**pms_KNeighborsClassifier_kneighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_kneighbors_graph.tolist() if hasattr(res_KNeighborsClassifier_kneighbors_graph, 'tolist') else res_KNeighborsClassifier_kneighbors_graph`
  }

  /**
    Predict the class labels for the provided data.
   */
  async predict(opts: {
    /**
      Test samples.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KNeighborsClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_KNeighborsClassifier_predict = {k: v for k, v in pms_KNeighborsClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_predict = bridgeKNeighborsClassifier[${this.id}].predict(**pms_KNeighborsClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_predict.tolist() if hasattr(res_KNeighborsClassifier_predict, 'tolist') else res_KNeighborsClassifier_predict`
  }

  /**
    Return probability estimates for the test data X.
   */
  async predict_proba(opts: {
    /**
      Test samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_KNeighborsClassifier_predict_proba = {k: v for k, v in pms_KNeighborsClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_predict_proba = bridgeKNeighborsClassifier[${this.id}].predict_proba(**pms_KNeighborsClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_predict_proba.tolist() if hasattr(res_KNeighborsClassifier_predict_proba, 'tolist') else res_KNeighborsClassifier_predict_proba`
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
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KNeighborsClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_KNeighborsClassifier_score = {k: v for k, v in pms_KNeighborsClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_score = bridgeKNeighborsClassifier[${this.id}].score(**pms_KNeighborsClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_score.tolist() if hasattr(res_KNeighborsClassifier_score, 'tolist') else res_KNeighborsClassifier_score`
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
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_KNeighborsClassifier_set_score_request = {k: v for k, v in pms_KNeighborsClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsClassifier_set_score_request = bridgeKNeighborsClassifier[${this.id}].set_score_request(**pms_KNeighborsClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsClassifier_set_score_request.tolist() if hasattr(res_KNeighborsClassifier_set_score_request, 'tolist') else res_KNeighborsClassifier_set_score_request`
  }

  /**
    Class labels known to the classifier
   */
  get classes_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_classes_ = bridgeKNeighborsClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_classes_.tolist() if hasattr(attr_KNeighborsClassifier_classes_, 'tolist') else attr_KNeighborsClassifier_classes_`
    })()
  }

  /**
    The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_effective_metric_ = bridgeKNeighborsClassifier[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_effective_metric_.tolist() if hasattr(attr_KNeighborsClassifier_effective_metric_, 'tolist') else attr_KNeighborsClassifier_effective_metric_`
    })()
  }

  /**
    Additional keyword arguments for the metric function. For most metrics will be same with `metric_params` parameter, but may also contain the `p` parameter value if the `effective_metric_` attribute is set to ‘minkowski’.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_effective_metric_params_ = bridgeKNeighborsClassifier[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_effective_metric_params_.tolist() if hasattr(attr_KNeighborsClassifier_effective_metric_params_, 'tolist') else attr_KNeighborsClassifier_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_n_features_in_ = bridgeKNeighborsClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_n_features_in_.tolist() if hasattr(attr_KNeighborsClassifier_n_features_in_, 'tolist') else attr_KNeighborsClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_feature_names_in_ = bridgeKNeighborsClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_feature_names_in_.tolist() if hasattr(attr_KNeighborsClassifier_feature_names_in_, 'tolist') else attr_KNeighborsClassifier_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_n_samples_fit_ = bridgeKNeighborsClassifier[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_n_samples_fit_.tolist() if hasattr(attr_KNeighborsClassifier_n_samples_fit_, 'tolist') else attr_KNeighborsClassifier_n_samples_fit_`
    })()
  }

  /**
    False when `y`’s shape is (n_samples, ) or (n_samples, 1) during fit otherwise `true`.
   */
  get outputs_2d_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsClassifier must call init() before accessing outputs_2d_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsClassifier_outputs_2d_ = bridgeKNeighborsClassifier[${this.id}].outputs_2d_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsClassifier_outputs_2d_.tolist() if hasattr(attr_KNeighborsClassifier_outputs_2d_, 'tolist') else attr_KNeighborsClassifier_outputs_2d_`
    })()
  }
}
