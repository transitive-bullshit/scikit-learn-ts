/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Perform DBSCAN clustering from vector array or distance matrix.

  DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

  This implementation has a worst case memory complexity of \\(O({n}^2)\\), which can occur when the `eps` param is large and `min\_samples` is low, while the original DBSCAN only uses linear memory. For further details, see the Notes below.

  Read more in the [User Guide](../clustering.html#dbscan).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)
 */
export class DBSCAN {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The maximum distance between two samples for one to be considered as in the neighborhood of the other. This is not a maximum bound on the distances of points within a cluster. This is the most important DBSCAN parameter to choose appropriately for your data set and distance function.

      @defaultValue `0.5`
     */
    eps?: number

    /**
      The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself. If `min\_samples` is set to a higher value, DBSCAN will find denser clusters, whereas if it is set to a lower value, the found clusters will be more sparse.

      @defaultValue `5`
     */
    min_samples?: number

    /**
      The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors for DBSCAN.

      @defaultValue `'euclidean'`
     */
    metric?: any

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any

    /**
      The algorithm to be used by the NearestNeighbors module to compute pointwise distances and find nearest neighbors. See NearestNeighbors module documentation for details.

      @defaultValue `'auto'`
     */
    algorithm?: 'auto' | 'ball_tree' | 'kd_tree' | 'brute'

    /**
      Leaf size passed to BallTree or cKDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

      @defaultValue `30`
     */
    leaf_size?: number

    /**
      The power of the Minkowski metric to be used to calculate distance between points. If `undefined`, then `p=2` (equivalent to the Euclidean distance).
     */
    p?: number

    /**
      The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `DBSCAN${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DBSCAN.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import DBSCAN
try: bridgeDBSCAN
except NameError: bridgeDBSCAN = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_DBSCAN = {'eps': ${this.opts['eps'] ?? undefined}, 'min_samples': ${this.opts['min_samples'] ?? undefined}, 'metric': ${this.opts['metric'] ?? undefined}, 'metric_params': ${this.opts['metric_params'] ?? undefined}, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'p': ${this.opts['p'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_DBSCAN = {k: v for k, v in ctor_DBSCAN.items() if v is not None}`

    await this._py.ex`bridgeDBSCAN[${this.id}] = DBSCAN(**ctor_DBSCAN)`

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

    await this._py.ex`del bridgeDBSCAN[${this.id}]`

    this._isDisposed = true
  }

  /**
    Perform DBSCAN clustering from features, or distance matrix.
   */
  async fit(opts: {
    /**
      Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
     */
    X?: any

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_DBSCAN_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DBSCAN_fit = {k: v for k, v in pms_DBSCAN_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DBSCAN_fit = bridgeDBSCAN[${this.id}].fit(**pms_DBSCAN_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DBSCAN_fit.tolist() if hasattr(res_DBSCAN_fit, 'tolist') else res_DBSCAN_fit`
  }

  /**
    Compute clusters from a data or distance matrix and predict labels.
   */
  async fit_predict(opts: {
    /**
      Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
     */
    X?: any

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1.
     */
    sample_weight?: ArrayLike
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before fit_predict()')
    }

    // set up method params
    await this._py
      .ex`pms_DBSCAN_fit_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DBSCAN_fit_predict = {k: v for k, v in pms_DBSCAN_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DBSCAN_fit_predict = bridgeDBSCAN[${this.id}].fit_predict(**pms_DBSCAN_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_DBSCAN_fit_predict.tolist() if hasattr(res_DBSCAN_fit_predict, 'tolist') else res_DBSCAN_fit_predict`
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
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_DBSCAN_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_DBSCAN_get_metadata_routing = {k: v for k, v in pms_DBSCAN_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DBSCAN_get_metadata_routing = bridgeDBSCAN[${this.id}].get_metadata_routing(**pms_DBSCAN_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_DBSCAN_get_metadata_routing.tolist() if hasattr(res_DBSCAN_get_metadata_routing, 'tolist') else res_DBSCAN_get_metadata_routing`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_DBSCAN_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_DBSCAN_set_fit_request = {k: v for k, v in pms_DBSCAN_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DBSCAN_set_fit_request = bridgeDBSCAN[${this.id}].set_fit_request(**pms_DBSCAN_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DBSCAN_set_fit_request.tolist() if hasattr(res_DBSCAN_set_fit_request, 'tolist') else res_DBSCAN_set_fit_request`
  }

  /**
    Indices of core samples.
   */
  get core_sample_indices_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DBSCAN must call init() before accessing core_sample_indices_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DBSCAN_core_sample_indices_ = bridgeDBSCAN[${this.id}].core_sample_indices_`

      // convert the result from python to node.js
      return this
        ._py`attr_DBSCAN_core_sample_indices_.tolist() if hasattr(attr_DBSCAN_core_sample_indices_, 'tolist') else attr_DBSCAN_core_sample_indices_`
    })()
  }

  /**
    Copy of each core sample found by training.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DBSCAN_components_ = bridgeDBSCAN[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_DBSCAN_components_.tolist() if hasattr(attr_DBSCAN_components_, 'tolist') else attr_DBSCAN_components_`
    })()
  }

  /**
    Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_DBSCAN_labels_ = bridgeDBSCAN[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_DBSCAN_labels_.tolist() if hasattr(attr_DBSCAN_labels_, 'tolist') else attr_DBSCAN_labels_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DBSCAN must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DBSCAN_n_features_in_ = bridgeDBSCAN[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DBSCAN_n_features_in_.tolist() if hasattr(attr_DBSCAN_n_features_in_, 'tolist') else attr_DBSCAN_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This DBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DBSCAN must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DBSCAN_feature_names_in_ = bridgeDBSCAN[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DBSCAN_feature_names_in_.tolist() if hasattr(attr_DBSCAN_feature_names_in_, 'tolist') else attr_DBSCAN_feature_names_in_`
    })()
  }
}
