/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  KDTree for fast generalized N-point problems

  Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html)
 */
export class KDTree {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      n\_samples is the number of points in the data set, and n\_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made.
     */
    X?: ArrayLike[]

    /**
      Number of points at which to switch to brute-force. Changing leaf\_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n\_samples / leaf\_size. For a specified `leaf\_size`, a leaf node is guaranteed to satisfy `leaf\_size <= n\_points <= 2 \* leaf\_size`, except in the case that `n\_samples < leaf\_size`.

      @defaultValue `40`
     */
    leaf_size?: any

    /**
      Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. kd\_tree.valid\_metrics gives a list of the metrics which are valid for KDTree. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information.

      @defaultValue `'minkowski'`
     */
    metric?: string
  }) {
    this.id = `KDTree${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KDTree instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KDTree.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import KDTree
try: bridgeKDTree
except NameError: bridgeKDTree = {}
`

    // set up constructor params
    await this._py.ex`ctor_KDTree = {'X': np.array(${
      this.opts['X'] ?? undefined
    }) if ${this.opts['X'] !== undefined} else None, 'leaf_size': ${
      this.opts['leaf_size'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}}

ctor_KDTree = {k: v for k, v in ctor_KDTree.items() if v is not None}`

    await this._py.ex`bridgeKDTree[${this.id}] = KDTree(**ctor_KDTree)`

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

    await this._py.ex`del bridgeKDTree[${this.id}]`

    this._isDisposed = true
  }

  /**
    Get data and node arrays.
   */
  async get_arrays(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before get_arrays()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_get_arrays = {}

pms_KDTree_get_arrays = {k: v for k, v in pms_KDTree_get_arrays.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_get_arrays = bridgeKDTree[${this.id}].get_arrays(**pms_KDTree_get_arrays)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_get_arrays.tolist() if hasattr(res_KDTree_get_arrays, 'tolist') else res_KDTree_get_arrays`
  }

  /**
    Get number of calls.
   */
  async get_n_calls(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before get_n_calls()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_get_n_calls = {}

pms_KDTree_get_n_calls = {k: v for k, v in pms_KDTree_get_n_calls.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_get_n_calls = bridgeKDTree[${this.id}].get_n_calls(**pms_KDTree_get_n_calls)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_get_n_calls.tolist() if hasattr(res_KDTree_get_n_calls, 'tolist') else res_KDTree_get_n_calls`
  }

  /**
    Get tree status.
   */
  async get_tree_stats(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before get_tree_stats()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_get_tree_stats = {}

pms_KDTree_get_tree_stats = {k: v for k, v in pms_KDTree_get_tree_stats.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_get_tree_stats = bridgeKDTree[${this.id}].get_tree_stats(**pms_KDTree_get_tree_stats)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_get_tree_stats.tolist() if hasattr(res_KDTree_get_tree_stats, 'tolist') else res_KDTree_get_tree_stats`
  }

  /**
    Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.
   */
  async kernel_density(opts: {
    /**
      An array of points to query. Last dimension should match dimension of training data.
     */
    X?: ArrayLike[]

    /**
      the bandwidth of the kernel
     */
    h?: number

    /**
      specify the kernel to use. Options are - ‘gaussian’ - ‘tophat’ - ‘epanechnikov’ - ‘exponential’ - ‘linear’ - ‘cosine’ Default is kernel = ‘gaussian’

      @defaultValue `'gaussian'`
     */
    kernel?: string

    /**
      Specify the desired absolute tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is zero (i.e. machine precision).

      @defaultValue `0`
     */
    atol?: number

    /**
      Specify the desired relative tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is `1e-8` (i.e. machine precision).

      @defaultValue `1e-8`
     */
    rtol?: number

    /**
      If `true`, use a breadth-first search. If `false` (default) use a depth-first search. Breadth-first is generally faster for compact kernels and/or high tolerances.

      @defaultValue `false`
     */
    breadth_first?: boolean

    /**
      Return the logarithm of the result. This can be more accurate than returning the result itself for narrow kernels.

      @defaultValue `false`
     */
    return_log?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before kernel_density()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_kernel_density = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'h': ${
      opts['h'] ?? undefined
    }, 'kernel': ${opts['kernel'] ?? undefined}, 'atol': ${
      opts['atol'] ?? undefined
    }, 'rtol': ${opts['rtol'] ?? undefined}, 'breadth_first': ${
      opts['breadth_first'] ?? undefined
    }, 'return_log': ${opts['return_log'] ?? undefined}}

pms_KDTree_kernel_density = {k: v for k, v in pms_KDTree_kernel_density.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_kernel_density = bridgeKDTree[${this.id}].kernel_density(**pms_KDTree_kernel_density)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_kernel_density.tolist() if hasattr(res_KDTree_kernel_density, 'tolist') else res_KDTree_kernel_density`
  }

  /**
    query the tree for the k nearest neighbors
   */
  async query(opts: {
    /**
      An array of points to query
     */
    X?: ArrayLike[]

    /**
      The number of nearest neighbors to return

      @defaultValue `1`
     */
    k?: number

    /**
      if `true`, return a tuple (d, i) of distances and indices if `false`, return array i

      @defaultValue `true`
     */
    return_distance?: boolean

    /**
      if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large.

      @defaultValue `false`
     */
    dualtree?: boolean

    /**
      if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner.

      @defaultValue `false`
     */
    breadth_first?: boolean

    /**
      if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order.

      @defaultValue `true`
     */
    sort_results?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before query()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_query = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'k': ${
      opts['k'] ?? undefined
    }, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }, 'dualtree': ${opts['dualtree'] ?? undefined}, 'breadth_first': ${
      opts['breadth_first'] ?? undefined
    }, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_KDTree_query = {k: v for k, v in pms_KDTree_query.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_query = bridgeKDTree[${this.id}].query(**pms_KDTree_query)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_query.tolist() if hasattr(res_KDTree_query, 'tolist') else res_KDTree_query`
  }

  /**
    query the tree for neighbors within a radius r
   */
  async query_radius(opts: {
    /**
      An array of points to query
     */
    X?: ArrayLike[]

    /**
      r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point.
     */
    r?: any

    /**
      if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return\_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return\_distance=`false`. Results are not sorted by default: see `sort\_results` keyword.

      @defaultValue `false`
     */
    return_distance?: boolean

    /**
      if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return\_distance==`true`, setting count\_only=`true` will result in an error.

      @defaultValue `false`
     */
    count_only?: boolean

    /**
      if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return\_distance == `false`, setting sort\_results = `true` will result in an error.

      @defaultValue `false`
     */
    sort_results?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before query_radius()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_query_radius = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'r': ${
      opts['r'] ?? undefined
    }, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }, 'count_only': ${opts['count_only'] ?? undefined}, 'sort_results': ${
      opts['sort_results'] ?? undefined
    }}

pms_KDTree_query_radius = {k: v for k, v in pms_KDTree_query_radius.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_query_radius = bridgeKDTree[${this.id}].query_radius(**pms_KDTree_query_radius)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_query_radius.tolist() if hasattr(res_KDTree_query_radius, 'tolist') else res_KDTree_query_radius`
  }

  /**
    Reset number of calls to 0.
   */
  async reset_n_calls(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before reset_n_calls()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_reset_n_calls = {}

pms_KDTree_reset_n_calls = {k: v for k, v in pms_KDTree_reset_n_calls.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_reset_n_calls = bridgeKDTree[${this.id}].reset_n_calls(**pms_KDTree_reset_n_calls)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_reset_n_calls.tolist() if hasattr(res_KDTree_reset_n_calls, 'tolist') else res_KDTree_reset_n_calls`
  }

  /**
    Compute the two-point correlation function
   */
  async two_point_correlation(opts: {
    /**
      An array of points to query. Last dimension should match dimension of training data.
     */
    X?: ArrayLike[]

    /**
      A one-dimensional array of distances
     */
    r?: ArrayLike

    /**
      If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N.

      @defaultValue `false`
     */
    dualtree?: boolean
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before two_point_correlation()')
    }

    // set up method params
    await this._py.ex`pms_KDTree_two_point_correlation = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'r': ${
      opts['r'] ?? undefined
    }, 'dualtree': ${opts['dualtree'] ?? undefined}}

pms_KDTree_two_point_correlation = {k: v for k, v in pms_KDTree_two_point_correlation.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KDTree_two_point_correlation = bridgeKDTree[${this.id}].two_point_correlation(**pms_KDTree_two_point_correlation)`

    // convert the result from python to node.js
    return this
      ._py`res_KDTree_two_point_correlation.tolist() if hasattr(res_KDTree_two_point_correlation, 'tolist') else res_KDTree_two_point_correlation`
  }

  /**
    The training data
   */
  get data(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KDTree instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KDTree must call init() before accessing data')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_KDTree_data = bridgeKDTree[${this.id}].data`

      // convert the result from python to node.js
      return this
        ._py`attr_KDTree_data.tolist() if hasattr(attr_KDTree_data, 'tolist') else attr_KDTree_data`
    })()
  }
}
