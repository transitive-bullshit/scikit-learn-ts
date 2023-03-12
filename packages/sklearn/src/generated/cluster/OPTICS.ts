/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Estimate clustering structure from vector array.

  OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

  Clusters are then extracted using a DBSCAN-like method (cluster\_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](#r2c55e37003fe-1) (cluster\_method = ‘xi’).

  This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

  Read more in the [User Guide](../clustering.html#optics).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html
 */
export class OPTICS {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OPTICSOptions) {
    this.id = `OPTICS${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('OPTICS.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import OPTICS
try: bridgeOPTICS
except NameError: bridgeOPTICS = {}
`

    // set up constructor params
    await this._py.ex`ctor_OPTICS = {'min_samples': ${
      this.opts['min_samples'] ?? undefined
    }, 'max_eps': ${this.opts['max_eps'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'p': ${this.opts['p'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'cluster_method': ${this.opts['cluster_method'] ?? undefined}, 'eps': ${
      this.opts['eps'] ?? undefined
    }, 'xi': ${this.opts['xi'] ?? undefined}, 'predecessor_correction': ${
      this.opts['predecessor_correction'] ?? undefined
    }, 'min_cluster_size': ${
      this.opts['min_cluster_size'] ?? undefined
    }, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'leaf_size': ${
      this.opts['leaf_size'] ?? undefined
    }, 'memory': ${this.opts['memory'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_OPTICS = {k: v for k, v in ctor_OPTICS.items() if v is not None}`

    await this._py.ex`bridgeOPTICS[${this.id}] = OPTICS(**ctor_OPTICS)`

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

    await this._py.ex`del bridgeOPTICS[${this.id}]`

    this._isDisposed = true
  }

  /**
    Perform OPTICS clustering.

    Extracts an ordered list of points and reachability distances, and performs initial clustering using `max\_eps` distance specified at OPTICS object instantiation.
   */
  async fit(opts: OPTICSFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_OPTICS_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OPTICS_fit = {k: v for k, v in pms_OPTICS_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OPTICS_fit = bridgeOPTICS[${this.id}].fit(**pms_OPTICS_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OPTICS_fit.tolist() if hasattr(res_OPTICS_fit, 'tolist') else res_OPTICS_fit`
  }

  /**
    Perform clustering on `X` and returns cluster labels.
   */
  async fit_predict(opts: OPTICSFitPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_OPTICS_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OPTICS_fit_predict = {k: v for k, v in pms_OPTICS_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OPTICS_fit_predict = bridgeOPTICS[${this.id}].fit_predict(**pms_OPTICS_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OPTICS_fit_predict.tolist() if hasattr(res_OPTICS_fit_predict, 'tolist') else res_OPTICS_fit_predict`
  }

  /**
    Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster\_hierarchy\_` are labeled as -1.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_OPTICS_labels_ = bridgeOPTICS[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_labels_.tolist() if hasattr(attr_OPTICS_labels_, 'tolist') else attr_OPTICS_labels_`
    })()
  }

  /**
    Reachability distances per sample, indexed by object order. Use `clust.reachability\_\[clust.ordering\_\]` to access in cluster order.
   */
  get reachability_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before accessing reachability_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_reachability_ = bridgeOPTICS[${this.id}].reachability_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_reachability_.tolist() if hasattr(attr_OPTICS_reachability_, 'tolist') else attr_OPTICS_reachability_`
    })()
  }

  /**
    The cluster ordered list of sample indices.
   */
  get ordering_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before accessing ordering_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_ordering_ = bridgeOPTICS[${this.id}].ordering_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_ordering_.tolist() if hasattr(attr_OPTICS_ordering_, 'tolist') else attr_OPTICS_ordering_`
    })()
  }

  /**
    Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core\_distances\_\[clust.ordering\_\]` to access in cluster order.
   */
  get core_distances_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OPTICS must call init() before accessing core_distances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_core_distances_ = bridgeOPTICS[${this.id}].core_distances_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_core_distances_.tolist() if hasattr(attr_OPTICS_core_distances_, 'tolist') else attr_OPTICS_core_distances_`
    })()
  }

  /**
    Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.
   */
  get predecessor_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before accessing predecessor_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_predecessor_ = bridgeOPTICS[${this.id}].predecessor_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_predecessor_.tolist() if hasattr(attr_OPTICS_predecessor_, 'tolist') else attr_OPTICS_predecessor_`
    })()
  }

  /**
    The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels\_` does not reflect the hierarchy, usually `len(cluster\_hierarchy\_) > np.unique(optics.labels\_)`. Please also note that these indices are of the `ordering\_`, i.e. `X\[ordering\_\]\[start:end + 1\]` form a cluster. Only available when `cluster\_method='xi'`.
   */
  get cluster_hierarchy_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OPTICS must call init() before accessing cluster_hierarchy_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_cluster_hierarchy_ = bridgeOPTICS[${this.id}].cluster_hierarchy_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_cluster_hierarchy_.tolist() if hasattr(attr_OPTICS_cluster_hierarchy_, 'tolist') else attr_OPTICS_cluster_hierarchy_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OPTICS must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_n_features_in_ = bridgeOPTICS[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_n_features_in_.tolist() if hasattr(attr_OPTICS_n_features_in_, 'tolist') else attr_OPTICS_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OPTICS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OPTICS must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OPTICS_feature_names_in_ = bridgeOPTICS[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OPTICS_feature_names_in_.tolist() if hasattr(attr_OPTICS_feature_names_in_, 'tolist') else attr_OPTICS_feature_names_in_`
    })()
  }
}

export interface OPTICSOptions {
  /**
    The number of samples in a neighborhood for a point to be considered as a core point. Also, up and down steep regions can’t have more than `min\_samples` consecutive non-steep points. Expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2).

    @defaultValue `5`
   */
  min_samples?: any

  /**
    The maximum distance between two samples for one to be considered as in the neighborhood of the other. Default value of `np.inf` will identify clusters across all scales; reducing `max\_eps` will result in shorter run times.
   */
  max_eps?: number

  /**
    Metric to use for distance computation. Any metric from scikit-learn or scipy.spatial.distance can be used.

    If metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays as input and return one value indicating the distance between them. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. If metric is “precomputed”, `X` is assumed to be a distance matrix and must be square.

    Valid values for metric are:

    @defaultValue `'minkowski'`
   */
  metric?: string

  /**
    Parameter for the Minkowski metric from [`pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

    @defaultValue `2`
   */
  p?: number

  /**
    Additional keyword arguments for the metric function.
   */
  metric_params?: any

  /**
    The extraction method used to extract clusters using the calculated reachability and ordering. Possible values are “xi” and “dbscan”.

    @defaultValue `'xi'`
   */
  cluster_method?: string

  /**
    The maximum distance between two samples for one to be considered as in the neighborhood of the other. By default it assumes the same value as `max\_eps`. Used only when `cluster\_method='dbscan'`.
   */
  eps?: number

  /**
    Determines the minimum steepness on the reachability plot that constitutes a cluster boundary. For example, an upwards point in the reachability plot is defined by the ratio from one point to its successor being at most 1-xi. Used only when `cluster\_method='xi'`.

    @defaultValue `0.05`
   */
  xi?: any

  /**
    Correct clusters according to the predecessors calculated by OPTICS [\[2\]](#r2c55e37003fe-2). This parameter has minimal effect on most datasets. Used only when `cluster\_method='xi'`.

    @defaultValue `true`
   */
  predecessor_correction?: boolean

  /**
    Minimum number of samples in an OPTICS cluster, expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2). If `None`, the value of `min\_samples` is used instead. Used only when `cluster\_method='xi'`.
   */
  min_cluster_size?: any

  /**
    Algorithm used to compute the nearest neighbors:

    @defaultValue `'auto'`
   */
  algorithm?: 'auto' | 'ball_tree' | 'kd_tree' | 'brute'

  /**
    Leaf size passed to `BallTree` or `KDTree`. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

    @defaultValue `30`
   */
  leaf_size?: number

  /**
    Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.
   */
  memory?: string

  /**
    The number of parallel jobs to run for neighbors search. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface OPTICSFitOptions {
  /**
    A feature array, or array of distances between samples if metric=’precomputed’. If a sparse matrix is provided, it will be converted into CSR format.
   */
  X?: any

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface OPTICSFitPredictOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
