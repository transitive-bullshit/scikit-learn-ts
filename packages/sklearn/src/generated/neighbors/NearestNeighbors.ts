/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Unsupervised learner for implementing neighbor searches.

  Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html)
 */
export class NearestNeighbors {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.NearestNeighbors.kneighbors "sklearn.neighbors.NearestNeighbors.kneighbors") queries.

      @defaultValue `5`
     */
    n_neighbors?: number

    /**
      Range of parameter space to use by default for [`radius\_neighbors`](#sklearn.neighbors.NearestNeighbors.radius_neighbors "sklearn.neighbors.NearestNeighbors.radius_neighbors") queries.

      @defaultValue `1`
     */
    radius?: number

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
      Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

      If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

      If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

      @defaultValue `'minkowski'`
     */
    metric?: string

    /**
      Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

      @defaultValue `2`
     */
    p?: any

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any

    /**
      The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `NearestNeighbors${crypto.randomUUID().split('-')[0]}`
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
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('NearestNeighbors.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import NearestNeighbors
try: bridgeNearestNeighbors
except NameError: bridgeNearestNeighbors = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_NearestNeighbors = {'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'radius': ${this.opts['radius'] ?? undefined}, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'metric': ${this.opts['metric'] ?? undefined}, 'p': ${this.opts['p'] ?? undefined}, 'metric_params': ${this.opts['metric_params'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_NearestNeighbors = {k: v for k, v in ctor_NearestNeighbors.items() if v is not None}`

    await this._py
      .ex`bridgeNearestNeighbors[${this.id}] = NearestNeighbors(**ctor_NearestNeighbors)`

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

    await this._py.ex`del bridgeNearestNeighbors[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the nearest neighbors estimator from the training dataset.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('NearestNeighbors must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_NearestNeighbors_fit = {k: v for k, v in pms_NearestNeighbors_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_fit = bridgeNearestNeighbors[${this.id}].fit(**pms_NearestNeighbors_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_fit.tolist() if hasattr(res_NearestNeighbors_fit, 'tolist') else res_NearestNeighbors_fit`
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
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_NearestNeighbors_get_metadata_routing = {k: v for k, v in pms_NearestNeighbors_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_get_metadata_routing = bridgeNearestNeighbors[${this.id}].get_metadata_routing(**pms_NearestNeighbors_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_get_metadata_routing.tolist() if hasattr(res_NearestNeighbors_get_metadata_routing, 'tolist') else res_NearestNeighbors_get_metadata_routing`
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
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('NearestNeighbors must call init() before kneighbors()')
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_kneighbors = {'X': ${opts['X'] ?? undefined}, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'return_distance': ${opts['return_distance'] ?? undefined}}

pms_NearestNeighbors_kneighbors = {k: v for k, v in pms_NearestNeighbors_kneighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_kneighbors = bridgeNearestNeighbors[${this.id}].kneighbors(**pms_NearestNeighbors_kneighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_kneighbors.tolist() if hasattr(res_NearestNeighbors_kneighbors, 'tolist') else res_NearestNeighbors_kneighbors`
  }

  /**
    Compute the (weighted) graph of k-Neighbors for points in X.
   */
  async kneighbors_graph(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).
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
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before kneighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_kneighbors_graph = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'mode': ${opts['mode'] ?? undefined}}

pms_NearestNeighbors_kneighbors_graph = {k: v for k, v in pms_NearestNeighbors_kneighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_kneighbors_graph = bridgeNearestNeighbors[${this.id}].kneighbors_graph(**pms_NearestNeighbors_kneighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_kneighbors_graph.tolist() if hasattr(res_NearestNeighbors_kneighbors_graph, 'tolist') else res_NearestNeighbors_kneighbors_graph`
  }

  /**
    Find the neighbors within a given radius of a point or points.

    Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

    The result points are *not* necessarily sorted by distance to their query point.
   */
  async radius_neighbors(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.
     */
    X?: any

    /**
      Limiting distance of neighbors to return. The default is the value passed to the constructor.
     */
    radius?: number

    /**
      Whether or not to return the distances.

      @defaultValue `true`
     */
    return_distance?: boolean

    /**
      If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return\_distance=False`, setting `sort\_results=True` will result in an error.

      @defaultValue `false`
     */
    sort_results?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before radius_neighbors()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_radius_neighbors = {'X': ${opts['X'] ?? undefined}, 'radius': ${opts['radius'] ?? undefined}, 'return_distance': ${opts['return_distance'] ?? undefined}, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_NearestNeighbors_radius_neighbors = {k: v for k, v in pms_NearestNeighbors_radius_neighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_radius_neighbors = bridgeNearestNeighbors[${this.id}].radius_neighbors(**pms_NearestNeighbors_radius_neighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_radius_neighbors.tolist() if hasattr(res_NearestNeighbors_radius_neighbors, 'tolist') else res_NearestNeighbors_radius_neighbors`
  }

  /**
    Compute the (weighted) graph of Neighbors for points in X.

    Neighborhoods are restricted the points at a distance lower than radius.
   */
  async radius_neighbors_graph(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Radius of neighborhoods. The default is the value passed to the constructor.
     */
    radius?: number

    /**
      Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class.

      @defaultValue `'connectivity'`
     */
    mode?: 'connectivity' | 'distance'

    /**
      If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’.

      @defaultValue `false`
     */
    sort_results?: boolean
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before radius_neighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NearestNeighbors_radius_neighbors_graph = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'radius': ${opts['radius'] ?? undefined}, 'mode': ${opts['mode'] ?? undefined}, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_NearestNeighbors_radius_neighbors_graph = {k: v for k, v in pms_NearestNeighbors_radius_neighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestNeighbors_radius_neighbors_graph = bridgeNearestNeighbors[${this.id}].radius_neighbors_graph(**pms_NearestNeighbors_radius_neighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestNeighbors_radius_neighbors_graph.tolist() if hasattr(res_NearestNeighbors_radius_neighbors_graph, 'tolist') else res_NearestNeighbors_radius_neighbors_graph`
  }

  /**
    Metric used to compute distances to neighbors.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestNeighbors_effective_metric_ = bridgeNearestNeighbors[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestNeighbors_effective_metric_.tolist() if hasattr(attr_NearestNeighbors_effective_metric_, 'tolist') else attr_NearestNeighbors_effective_metric_`
    })()
  }

  /**
    Parameters for the metric used to compute distances to neighbors.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestNeighbors_effective_metric_params_ = bridgeNearestNeighbors[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestNeighbors_effective_metric_params_.tolist() if hasattr(attr_NearestNeighbors_effective_metric_params_, 'tolist') else attr_NearestNeighbors_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestNeighbors_n_features_in_ = bridgeNearestNeighbors[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestNeighbors_n_features_in_.tolist() if hasattr(attr_NearestNeighbors_n_features_in_, 'tolist') else attr_NearestNeighbors_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestNeighbors_feature_names_in_ = bridgeNearestNeighbors[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestNeighbors_feature_names_in_.tolist() if hasattr(attr_NearestNeighbors_feature_names_in_, 'tolist') else attr_NearestNeighbors_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This NearestNeighbors instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestNeighbors must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestNeighbors_n_samples_fit_ = bridgeNearestNeighbors[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestNeighbors_n_samples_fit_.tolist() if hasattr(attr_NearestNeighbors_n_samples_fit_, 'tolist') else attr_NearestNeighbors_n_samples_fit_`
    })()
  }
}
