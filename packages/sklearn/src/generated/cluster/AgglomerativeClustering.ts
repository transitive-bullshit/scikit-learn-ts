/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Agglomerative Clustering.

  Recursively merges pair of clusters of sample data; uses linkage distance.

  Read more in the [User Guide](../clustering.html#hierarchical-clustering).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html
 */
export class AgglomerativeClustering {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: AgglomerativeClusteringOptions) {
    this.id = `AgglomerativeClustering${crypto.randomUUID().split('-')[0]}`
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
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'AgglomerativeClustering.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import AgglomerativeClustering
try: bridgeAgglomerativeClustering
except NameError: bridgeAgglomerativeClustering = {}
`

    // set up constructor params
    await this._py.ex`ctor_AgglomerativeClustering = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'affinity': ${this.opts['affinity'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'memory': ${this.opts['memory'] ?? undefined}, 'connectivity': ${
      this.opts['connectivity'] ?? undefined
    }, 'compute_full_tree': ${
      this.opts['compute_full_tree'] ?? undefined
    }, 'linkage': ${this.opts['linkage'] ?? undefined}, 'distance_threshold': ${
      this.opts['distance_threshold'] ?? undefined
    }, 'compute_distances': ${this.opts['compute_distances'] ?? undefined}}

ctor_AgglomerativeClustering = {k: v for k, v in ctor_AgglomerativeClustering.items() if v is not None}`

    await this._py
      .ex`bridgeAgglomerativeClustering[${this.id}] = AgglomerativeClustering(**ctor_AgglomerativeClustering)`

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

    await this._py.ex`del bridgeAgglomerativeClustering[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the hierarchical clustering from features, or distance matrix.
   */
  async fit(opts: AgglomerativeClusteringFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AgglomerativeClustering must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_AgglomerativeClustering_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_AgglomerativeClustering_fit = {k: v for k, v in pms_AgglomerativeClustering_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AgglomerativeClustering_fit = bridgeAgglomerativeClustering[${this.id}].fit(**pms_AgglomerativeClustering_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AgglomerativeClustering_fit.tolist() if hasattr(res_AgglomerativeClustering_fit, 'tolist') else res_AgglomerativeClustering_fit`
  }

  /**
    Fit and return the result of each sample’s clustering assignment.

    In addition to fitting, this method also return the result of the clustering assignment for each sample in the training set.
   */
  async fit_predict(
    opts: AgglomerativeClusteringFitPredictOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before fit_predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AgglomerativeClustering_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_AgglomerativeClustering_fit_predict = {k: v for k, v in pms_AgglomerativeClustering_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AgglomerativeClustering_fit_predict = bridgeAgglomerativeClustering[${this.id}].fit_predict(**pms_AgglomerativeClustering_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AgglomerativeClustering_fit_predict.tolist() if hasattr(res_AgglomerativeClustering_fit_predict, 'tolist') else res_AgglomerativeClustering_fit_predict`
  }

  /**
    The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.
   */
  get n_clusters_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing n_clusters_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_n_clusters_ = bridgeAgglomerativeClustering[${this.id}].n_clusters_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_n_clusters_.tolist() if hasattr(attr_AgglomerativeClustering_n_clusters_, 'tolist') else attr_AgglomerativeClustering_n_clusters_`
    })()
  }

  /**
    Cluster labels for each point.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_labels_ = bridgeAgglomerativeClustering[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_labels_.tolist() if hasattr(attr_AgglomerativeClustering_labels_, 'tolist') else attr_AgglomerativeClustering_labels_`
    })()
  }

  /**
    Number of leaves in the hierarchical tree.
   */
  get n_leaves_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing n_leaves_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_n_leaves_ = bridgeAgglomerativeClustering[${this.id}].n_leaves_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_n_leaves_.tolist() if hasattr(attr_AgglomerativeClustering_n_leaves_, 'tolist') else attr_AgglomerativeClustering_n_leaves_`
    })()
  }

  /**
    The estimated number of connected components in the graph.
   */
  get n_connected_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing n_connected_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_n_connected_components_ = bridgeAgglomerativeClustering[${this.id}].n_connected_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_n_connected_components_.tolist() if hasattr(attr_AgglomerativeClustering_n_connected_components_, 'tolist') else attr_AgglomerativeClustering_n_connected_components_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_n_features_in_ = bridgeAgglomerativeClustering[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_n_features_in_.tolist() if hasattr(attr_AgglomerativeClustering_n_features_in_, 'tolist') else attr_AgglomerativeClustering_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_feature_names_in_ = bridgeAgglomerativeClustering[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_feature_names_in_.tolist() if hasattr(attr_AgglomerativeClustering_feature_names_in_, 'tolist') else attr_AgglomerativeClustering_feature_names_in_`
    })()
  }

  /**
    The children of each non-leaf node. Values less than `n\_samples` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_samples` is a non-leaf node and has children `children\_\[i \- n\_samples\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_samples + i`.
   */
  get children_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing children_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_children_ = bridgeAgglomerativeClustering[${this.id}].children_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_children_.tolist() if hasattr(attr_AgglomerativeClustering_children_, 'tolist') else attr_AgglomerativeClustering_children_`
    })()
  }

  /**
    Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `True`.
   */
  get distances_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This AgglomerativeClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AgglomerativeClustering must call init() before accessing distances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AgglomerativeClustering_distances_ = bridgeAgglomerativeClustering[${this.id}].distances_`

      // convert the result from python to node.js
      return this
        ._py`attr_AgglomerativeClustering_distances_.tolist() if hasattr(attr_AgglomerativeClustering_distances_, 'tolist') else attr_AgglomerativeClustering_distances_`
    })()
  }
}

export interface AgglomerativeClusteringOptions {
  /**
    The number of clusters to find. It must be `None` if `distance\_threshold` is not `None`.

    @defaultValue `2`
   */
  n_clusters?: number

  /**
    The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix (instead of a similarity matrix) is needed as input for the fit method.

    @defaultValue `'euclidean'`
   */
  affinity?: string

  /**
    Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If set to `None` then “euclidean” is used. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method.
   */
  metric?: string

  /**
    Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.
   */
  memory?: string

  /**
    Connectivity matrix. Defines for each sample the neighboring samples following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `None`, i.e, the hierarchical clustering algorithm is unstructured.
   */
  connectivity?: ArrayLike

  /**
    Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of samples. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `True` if `distance\_threshold` is not `None`. By default `compute\_full\_tree` is “auto”, which is equivalent to `True` when `distance\_threshold` is not `None` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `False`.

    @defaultValue `'auto'`
   */
  compute_full_tree?: 'auto' | boolean

  /**
    Which linkage criterion to use. The linkage criterion determines which distance to use between sets of observation. The algorithm will merge the pairs of cluster that minimize this criterion.

    @defaultValue `'ward'`
   */
  linkage?: 'ward' | 'complete' | 'average' | 'single'

  /**
    The linkage distance threshold at or above which clusters will not be merged. If not `None`, `n\_clusters` must be `None` and `compute\_full\_tree` must be `True`.
   */
  distance_threshold?: number

  /**
    Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.

    @defaultValue `false`
   */
  compute_distances?: boolean
}

export interface AgglomerativeClusteringFitOptions {
  /**
    Training instances to cluster, or distances between instances if `metric='precomputed'`.
   */
  X?: ArrayLike

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface AgglomerativeClusteringFitPredictOptions {
  /**
    Training instances to cluster, or distances between instances if `affinity='precomputed'`.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}
