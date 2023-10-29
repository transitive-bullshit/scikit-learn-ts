/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mean shift clustering using a flat kernel.

  Mean shift clustering aims to discover “blobs” in a smooth density of samples. It is a centroid-based algorithm, which works by updating candidates for centroids to be the mean of the points within a given region. These candidates are then filtered in a post-processing stage to eliminate near-duplicates to form the final set of centroids.

  Seeding is performed using a binning technique for scalability.

  Read more in the [User Guide](../clustering.html#mean-shift).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html)
 */
export class MeanShift {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Bandwidth used in the flat kernel.

      If not given, the bandwidth is estimated using sklearn.cluster.estimate\_bandwidth; see the documentation for that function for hints on scalability (see also the Notes, below).
     */
    bandwidth?: number

    /**
      Seeds used to initialize kernels. If not set, the seeds are calculated by clustering.get\_bin\_seeds with bandwidth as the grid size and default values for other parameters.
     */
    seeds?: ArrayLike[]

    /**
      If true, initial kernel locations are not locations of all points, but rather the location of the discretized version of points, where points are binned onto a grid whose coarseness corresponds to the bandwidth. Setting this option to `true` will speed up the algorithm because fewer seeds will be initialized. The default value is `false`. Ignored if seeds argument is not `undefined`.

      @defaultValue `false`
     */
    bin_seeding?: boolean

    /**
      To speed up the algorithm, accept only those bins with at least min\_bin\_freq points as seeds.

      @defaultValue `1`
     */
    min_bin_freq?: number

    /**
      If true, then all points are clustered, even those orphans that are not within any kernel. Orphans are assigned to the nearest kernel. If false, then orphans are given cluster label -1.

      @defaultValue `true`
     */
    cluster_all?: boolean

    /**
      The number of jobs to use for the computation. The following tasks benefit from the parallelization:
     */
    n_jobs?: number

    /**
      Maximum number of iterations, per seed point before the clustering operation terminates (for that seed point), if has not converged yet.

      @defaultValue `300`
     */
    max_iter?: number
  }) {
    this.id = `MeanShift${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MeanShift.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import MeanShift
try: bridgeMeanShift
except NameError: bridgeMeanShift = {}
`

    // set up constructor params
    await this._py.ex`ctor_MeanShift = {'bandwidth': ${
      this.opts['bandwidth'] ?? undefined
    }, 'seeds': np.array(${this.opts['seeds'] ?? undefined}) if ${
      this.opts['seeds'] !== undefined
    } else None, 'bin_seeding': ${
      this.opts['bin_seeding'] ?? undefined
    }, 'min_bin_freq': ${
      this.opts['min_bin_freq'] ?? undefined
    }, 'cluster_all': ${this.opts['cluster_all'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}}

ctor_MeanShift = {k: v for k, v in ctor_MeanShift.items() if v is not None}`

    await this._py.ex`bridgeMeanShift[${this.id}] = MeanShift(**ctor_MeanShift)`

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

    await this._py.ex`del bridgeMeanShift[${this.id}]`

    this._isDisposed = true
  }

  /**
    Perform clustering.
   */
  async fit(opts: {
    /**
      Samples to cluster.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MeanShift must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MeanShift_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MeanShift_fit = {k: v for k, v in pms_MeanShift_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MeanShift_fit = bridgeMeanShift[${this.id}].fit(**pms_MeanShift_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MeanShift_fit.tolist() if hasattr(res_MeanShift_fit, 'tolist') else res_MeanShift_fit`
  }

  /**
    Perform clustering on `X` and returns cluster labels.
   */
  async fit_predict(opts: {
    /**
      Input data.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MeanShift must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_MeanShift_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MeanShift_fit_predict = {k: v for k, v in pms_MeanShift_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MeanShift_fit_predict = bridgeMeanShift[${this.id}].fit_predict(**pms_MeanShift_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MeanShift_fit_predict.tolist() if hasattr(res_MeanShift_fit_predict, 'tolist') else res_MeanShift_fit_predict`
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
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MeanShift must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_MeanShift_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_MeanShift_get_metadata_routing = {k: v for k, v in pms_MeanShift_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MeanShift_get_metadata_routing = bridgeMeanShift[${this.id}].get_metadata_routing(**pms_MeanShift_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MeanShift_get_metadata_routing.tolist() if hasattr(res_MeanShift_get_metadata_routing, 'tolist') else res_MeanShift_get_metadata_routing`
  }

  /**
    Predict the closest cluster each sample in X belongs to.
   */
  async predict(opts: {
    /**
      New data to predict.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MeanShift must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MeanShift_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MeanShift_predict = {k: v for k, v in pms_MeanShift_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MeanShift_predict = bridgeMeanShift[${this.id}].predict(**pms_MeanShift_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MeanShift_predict.tolist() if hasattr(res_MeanShift_predict, 'tolist') else res_MeanShift_predict`
  }

  /**
    Coordinates of cluster centers.
   */
  get cluster_centers_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MeanShift must call init() before accessing cluster_centers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MeanShift_cluster_centers_ = bridgeMeanShift[${this.id}].cluster_centers_`

      // convert the result from python to node.js
      return this
        ._py`attr_MeanShift_cluster_centers_.tolist() if hasattr(attr_MeanShift_cluster_centers_, 'tolist') else attr_MeanShift_cluster_centers_`
    })()
  }

  /**
    Labels of each point.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MeanShift must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MeanShift_labels_ = bridgeMeanShift[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_MeanShift_labels_.tolist() if hasattr(attr_MeanShift_labels_, 'tolist') else attr_MeanShift_labels_`
    })()
  }

  /**
    Maximum number of iterations performed on each seed.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MeanShift must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MeanShift_n_iter_ = bridgeMeanShift[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MeanShift_n_iter_.tolist() if hasattr(attr_MeanShift_n_iter_, 'tolist') else attr_MeanShift_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MeanShift must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MeanShift_n_features_in_ = bridgeMeanShift[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MeanShift_n_features_in_.tolist() if hasattr(attr_MeanShift_n_features_in_, 'tolist') else attr_MeanShift_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MeanShift instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MeanShift must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MeanShift_feature_names_in_ = bridgeMeanShift[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MeanShift_feature_names_in_.tolist() if hasattr(attr_MeanShift_feature_names_in_, 'tolist') else attr_MeanShift_feature_names_in_`
    })()
  }
}
