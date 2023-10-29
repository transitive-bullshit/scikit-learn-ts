/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Cluster data using hierarchical density-based clustering.

  HDBSCAN - Hierarchical Density-Based Spatial Clustering of Applications with Noise. Performs [`DBSCAN`](sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN") over varying epsilon values and integrates the result to find a clustering that gives the best stability over epsilon. This allows HDBSCAN to find clusters of varying densities (unlike [`DBSCAN`](sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN")), and be more robust to parameter selection. Read more in the [User Guide](../clustering.html#hdbscan).

  For an example of how to use HDBSCAN, as well as a comparison to [`DBSCAN`](sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN"), please see the [plotting demo](../../auto_examples/cluster/plot_hdbscan.html#sphx-glr-auto-examples-cluster-plot-hdbscan-py).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.HDBSCAN.html)
 */
export class HDBSCAN {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The minimum number of samples in a group for that group to be considered a cluster; groupings smaller than this size will be left as noise.

      @defaultValue `5`
     */
    min_cluster_size?: number

    /**
      The number of samples in a neighborhood for a point to be considered as a core point. This includes the point itself. When `undefined`, defaults to `min\_cluster\_size`.
     */
    min_samples?: number

    /**
      A distance threshold. Clusters below this value will be merged. See [\[5\]](#r6f313792b2b7-5) for more information.

      @defaultValue `0`
     */
    cluster_selection_epsilon?: number

    /**
      A limit to the size of clusters returned by the `"eom"` cluster selection algorithm. There is no limit when `max\_cluster\_size=None`. Has no effect if `cluster\_selection\_method="leaf"`.
     */
    max_cluster_size?: number

    /**
      The metric to use when calculating distance between instances in a feature array.

      @defaultValue `'euclidean'`
     */
    metric?: string

    /**
      Arguments passed to the distance metric.
     */
    metric_params?: any

    /**
      A distance scaling parameter as used in robust single linkage. See [\[3\]](#r6f313792b2b7-3) for more information.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Exactly which algorithm to use for computing core distances; By default this is set to `"auto"` which attempts to use a [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") tree if possible, otherwise it uses a [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") tree. Both `"KDTree"` and `"BallTree"` algorithms use the [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") estimator.

      If the `X` passed during `fit` is sparse or `metric` is invalid for both [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") and [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree"), then it resolves to use the `"brute"` algorithm.

      @defaultValue `'auto'`
     */
    algorithm?: 'auto' | 'brute' | 'kdtree' | 'balltree'

    /**
      Leaf size for trees responsible for fast nearest neighbour queries when a KDTree or a BallTree are used as core-distance algorithms. A large dataset size and small `leaf\_size` may induce excessive memory usage. If you are running out of memory consider increasing the `leaf\_size` parameter. Ignored for `algorithm="brute"`.

      @defaultValue `40`
     */
    leaf_size?: number

    /**
      Number of jobs to run in parallel to calculate distances. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      The method used to select clusters from the condensed tree. The standard approach for HDBSCAN\* is to use an Excess of Mass (`"eom"`) algorithm to find the most persistent clusters. Alternatively you can instead select the clusters at the leaves of the tree – this provides the most fine grained and homogeneous clusters.

      @defaultValue `'eom'`
     */
    cluster_selection_method?: 'eom' | 'leaf'

    /**
      By default HDBSCAN\* will not produce a single cluster, setting this to `true` will override this and allow single cluster results in the case that you feel this is a valid result for your dataset.

      @defaultValue `false`
     */
    allow_single_cluster?: boolean

    /**
      Which, if any, cluster centers to compute and store. The options are:
     */
    store_centers?: string

    /**
      If `copy=True` then any time an in-place modifications would be made that would overwrite data passed to [fit](../../glossary.html#term-fit), a copy will first be made, guaranteeing that the original data will be unchanged. Currently, it only applies when `metric="precomputed"`, when passing a dense array or a CSR sparse matrix and when `algorithm="brute"`.

      @defaultValue `false`
     */
    copy?: boolean
  }) {
    this.id = `HDBSCAN${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('HDBSCAN.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import HDBSCAN
try: bridgeHDBSCAN
except NameError: bridgeHDBSCAN = {}
`

    // set up constructor params
    await this._py.ex`ctor_HDBSCAN = {'min_cluster_size': ${
      this.opts['min_cluster_size'] ?? undefined
    }, 'min_samples': ${
      this.opts['min_samples'] ?? undefined
    }, 'cluster_selection_epsilon': ${
      this.opts['cluster_selection_epsilon'] ?? undefined
    }, 'max_cluster_size': ${
      this.opts['max_cluster_size'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'algorithm': ${
      this.opts['algorithm'] ?? undefined
    }, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'cluster_selection_method': ${
      this.opts['cluster_selection_method'] ?? undefined
    }, 'allow_single_cluster': ${
      this.opts['allow_single_cluster'] ?? undefined
    }, 'store_centers': ${this.opts['store_centers'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_HDBSCAN = {k: v for k, v in ctor_HDBSCAN.items() if v is not None}`

    await this._py.ex`bridgeHDBSCAN[${this.id}] = HDBSCAN(**ctor_HDBSCAN)`

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

    await this._py.ex`del bridgeHDBSCAN[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return clustering given by DBSCAN without border points.

    Return clustering that would be equivalent to running DBSCAN\* for a particular cut\_distance (or epsilon) DBSCAN\* can be thought of as DBSCAN without the border points. As such these results may differ slightly from `cluster.DBSCAN` due to the difference in implementation over the non-core points.

    This can also be thought of as a flat clustering derived from constant height cut through the single linkage tree.

    This represents the result of selecting a cut value for robust single linkage clustering. The `min\_cluster\_size` allows the flat clustering to declare noise points (and cluster smaller than `min\_cluster\_size`).
   */
  async dbscan_clustering(opts: {
    /**
      The mutual reachability distance cut value to use to generate a flat clustering.
     */
    cut_distance?: number

    /**
      Clusters smaller than this value with be called ‘noise’ and remain unclustered in the resulting flat clustering.

      @defaultValue `5`
     */
    min_cluster_size?: number
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before dbscan_clustering()')
    }

    // set up method params
    await this._py.ex`pms_HDBSCAN_dbscan_clustering = {'cut_distance': ${
      opts['cut_distance'] ?? undefined
    }, 'min_cluster_size': ${opts['min_cluster_size'] ?? undefined}}

pms_HDBSCAN_dbscan_clustering = {k: v for k, v in pms_HDBSCAN_dbscan_clustering.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HDBSCAN_dbscan_clustering = bridgeHDBSCAN[${this.id}].dbscan_clustering(**pms_HDBSCAN_dbscan_clustering)`

    // convert the result from python to node.js
    return this
      ._py`res_HDBSCAN_dbscan_clustering.tolist() if hasattr(res_HDBSCAN_dbscan_clustering, 'tolist') else res_HDBSCAN_dbscan_clustering`
  }

  /**
    Find clusters based on hierarchical density-based clustering.
   */
  async fit(opts: {
    /**
      A feature array, or array of distances between samples if `metric='precomputed'`.
     */
    X?: NDArray[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_HDBSCAN_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_HDBSCAN_fit = {k: v for k, v in pms_HDBSCAN_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HDBSCAN_fit = bridgeHDBSCAN[${this.id}].fit(**pms_HDBSCAN_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HDBSCAN_fit.tolist() if hasattr(res_HDBSCAN_fit, 'tolist') else res_HDBSCAN_fit`
  }

  /**
    Cluster X and return the associated cluster labels.
   */
  async fit_predict(opts: {
    /**
      A feature array, or array of distances between samples if `metric='precomputed'`.
     */
    X?: NDArray[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_HDBSCAN_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_HDBSCAN_fit_predict = {k: v for k, v in pms_HDBSCAN_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HDBSCAN_fit_predict = bridgeHDBSCAN[${this.id}].fit_predict(**pms_HDBSCAN_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HDBSCAN_fit_predict.tolist() if hasattr(res_HDBSCAN_fit_predict, 'tolist') else res_HDBSCAN_fit_predict`
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
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py.ex`pms_HDBSCAN_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_HDBSCAN_get_metadata_routing = {k: v for k, v in pms_HDBSCAN_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HDBSCAN_get_metadata_routing = bridgeHDBSCAN[${this.id}].get_metadata_routing(**pms_HDBSCAN_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_HDBSCAN_get_metadata_routing.tolist() if hasattr(res_HDBSCAN_get_metadata_routing, 'tolist') else res_HDBSCAN_get_metadata_routing`
  }

  /**
    Cluster labels for each point in the dataset given to [fit](../../glossary.html#term-fit). Outliers are labeled as follows:
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_labels_ = bridgeHDBSCAN[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_labels_.tolist() if hasattr(attr_HDBSCAN_labels_, 'tolist') else attr_HDBSCAN_labels_`
    })()
  }

  /**
    The strength with which each sample is a member of its assigned cluster.
   */
  get probabilities_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HDBSCAN must call init() before accessing probabilities_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_probabilities_ = bridgeHDBSCAN[${this.id}].probabilities_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_probabilities_.tolist() if hasattr(attr_HDBSCAN_probabilities_, 'tolist') else attr_HDBSCAN_probabilities_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HDBSCAN must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_n_features_in_ = bridgeHDBSCAN[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_n_features_in_.tolist() if hasattr(attr_HDBSCAN_n_features_in_, 'tolist') else attr_HDBSCAN_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HDBSCAN must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_feature_names_in_ = bridgeHDBSCAN[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_feature_names_in_.tolist() if hasattr(attr_HDBSCAN_feature_names_in_, 'tolist') else attr_HDBSCAN_feature_names_in_`
    })()
  }

  /**
    A collection containing the centroid of each cluster calculated under the standard euclidean metric. The centroids may fall “outside” their respective clusters if the clusters themselves are non-convex.

    Note that `n\_clusters` only counts non-outlier clusters. That is to say, the `\-1, \-2, \-3` labels for the outlier clusters are excluded.
   */
  get centroids_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before accessing centroids_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_centroids_ = bridgeHDBSCAN[${this.id}].centroids_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_centroids_.tolist() if hasattr(attr_HDBSCAN_centroids_, 'tolist') else attr_HDBSCAN_centroids_`
    })()
  }

  /**
    A collection containing the medoid of each cluster calculated under the whichever metric was passed to the `metric` parameter. The medoids are points in the original cluster which minimize the average distance to all other points in that cluster under the chosen metric. These can be thought of as the result of projecting the `metric`\-based centroid back onto the cluster.

    Note that `n\_clusters` only counts non-outlier clusters. That is to say, the `\-1, \-2, \-3` labels for the outlier clusters are excluded.
   */
  get medoids_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This HDBSCAN instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HDBSCAN must call init() before accessing medoids_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HDBSCAN_medoids_ = bridgeHDBSCAN[${this.id}].medoids_`

      // convert the result from python to node.js
      return this
        ._py`attr_HDBSCAN_medoids_.tolist() if hasattr(attr_HDBSCAN_medoids_, 'tolist') else attr_HDBSCAN_medoids_`
    })()
  }
}
