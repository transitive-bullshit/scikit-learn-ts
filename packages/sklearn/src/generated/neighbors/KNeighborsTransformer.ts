/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform X into a (weighted) graph of k nearest neighbors.

  The transformed data is a sparse graph as returned by kneighbors_graph.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsTransformer.html
 */
export class KNeighborsTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KNeighborsTransformerOptions) {
    this.id = `KNeighborsTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'KNeighborsTransformer.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import KNeighborsTransformer
try: bridgeKNeighborsTransformer
except NameError: bridgeKNeighborsTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_KNeighborsTransformer = {'mode': ${
      this.opts['mode'] ?? undefined
    }, 'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'algorithm': ${
      this.opts['algorithm'] ?? undefined
    }, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'p': ${this.opts['p'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_KNeighborsTransformer = {k: v for k, v in ctor_KNeighborsTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeKNeighborsTransformer[${this.id}] = KNeighborsTransformer(**ctor_KNeighborsTransformer)`

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

    await this._py.ex`del bridgeKNeighborsTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the k-nearest neighbors transformer from the training dataset.
   */
  async fit(opts: KNeighborsTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KNeighborsTransformer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KNeighborsTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_KNeighborsTransformer_fit = {k: v for k, v in pms_KNeighborsTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_fit = bridgeKNeighborsTransformer[${this.id}].fit(**pms_KNeighborsTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_fit.tolist() if hasattr(res_KNeighborsTransformer_fit, 'tolist') else res_KNeighborsTransformer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: KNeighborsTransformerFitTransformOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_KNeighborsTransformer_fit_transform = {k: v for k, v in pms_KNeighborsTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_fit_transform = bridgeKNeighborsTransformer[${this.id}].fit_transform(**pms_KNeighborsTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_fit_transform.tolist() if hasattr(res_KNeighborsTransformer_fit_transform, 'tolist') else res_KNeighborsTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: KNeighborsTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_KNeighborsTransformer_get_feature_names_out = {k: v for k, v in pms_KNeighborsTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_get_feature_names_out = bridgeKNeighborsTransformer[${this.id}].get_feature_names_out(**pms_KNeighborsTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_get_feature_names_out.tolist() if hasattr(res_KNeighborsTransformer_get_feature_names_out, 'tolist') else res_KNeighborsTransformer_get_feature_names_out`
  }

  /**
    Find the K-neighbors of a point.

    Returns indices of and distances to the neighbors of each point.
   */
  async kneighbors(
    opts: KNeighborsTransformerKneighborsOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before kneighbors()'
      )
    }

    // set up method params
    await this._py.ex`pms_KNeighborsTransformer_kneighbors = {'X': ${
      opts['X'] ?? undefined
    }, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }}

pms_KNeighborsTransformer_kneighbors = {k: v for k, v in pms_KNeighborsTransformer_kneighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_kneighbors = bridgeKNeighborsTransformer[${this.id}].kneighbors(**pms_KNeighborsTransformer_kneighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_kneighbors.tolist() if hasattr(res_KNeighborsTransformer_kneighbors, 'tolist') else res_KNeighborsTransformer_kneighbors`
  }

  /**
    Compute the (weighted) graph of k-Neighbors for points in X.
   */
  async kneighbors_graph(
    opts: KNeighborsTransformerKneighborsGraphOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before kneighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNeighborsTransformer_kneighbors_graph = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'n_neighbors': ${
      opts['n_neighbors'] ?? undefined
    }, 'mode': ${opts['mode'] ?? undefined}}

pms_KNeighborsTransformer_kneighbors_graph = {k: v for k, v in pms_KNeighborsTransformer_kneighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_kneighbors_graph = bridgeKNeighborsTransformer[${this.id}].kneighbors_graph(**pms_KNeighborsTransformer_kneighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_kneighbors_graph.tolist() if hasattr(res_KNeighborsTransformer_kneighbors_graph, 'tolist') else res_KNeighborsTransformer_kneighbors_graph`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: KNeighborsTransformerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_KNeighborsTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_KNeighborsTransformer_set_output = {k: v for k, v in pms_KNeighborsTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_set_output = bridgeKNeighborsTransformer[${this.id}].set_output(**pms_KNeighborsTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_set_output.tolist() if hasattr(res_KNeighborsTransformer_set_output, 'tolist') else res_KNeighborsTransformer_set_output`
  }

  /**
    Compute the (weighted) graph of Neighbors for points in X.
   */
  async transform(
    opts: KNeighborsTransformerTransformOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_KNeighborsTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KNeighborsTransformer_transform = {k: v for k, v in pms_KNeighborsTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNeighborsTransformer_transform = bridgeKNeighborsTransformer[${this.id}].transform(**pms_KNeighborsTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KNeighborsTransformer_transform.tolist() if hasattr(res_KNeighborsTransformer_transform, 'tolist') else res_KNeighborsTransformer_transform`
  }

  /**
    The distance metric used. It will be same as the metric parameter or a synonym of it, e.g. ‘euclidean’ if the metric parameter set to ‘minkowski’ and p parameter set to 2.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsTransformer_effective_metric_ = bridgeKNeighborsTransformer[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsTransformer_effective_metric_.tolist() if hasattr(attr_KNeighborsTransformer_effective_metric_, 'tolist') else attr_KNeighborsTransformer_effective_metric_`
    })()
  }

  /**
    Additional keyword arguments for the metric function. For most metrics will be same with metric_params parameter, but may also contain the p parameter value if the effective_metric_ attribute is set to ‘minkowski’.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsTransformer_effective_metric_params_ = bridgeKNeighborsTransformer[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsTransformer_effective_metric_params_.tolist() if hasattr(attr_KNeighborsTransformer_effective_metric_params_, 'tolist') else attr_KNeighborsTransformer_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsTransformer_n_features_in_ = bridgeKNeighborsTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsTransformer_n_features_in_.tolist() if hasattr(attr_KNeighborsTransformer_n_features_in_, 'tolist') else attr_KNeighborsTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsTransformer_feature_names_in_ = bridgeKNeighborsTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsTransformer_feature_names_in_.tolist() if hasattr(attr_KNeighborsTransformer_feature_names_in_, 'tolist') else attr_KNeighborsTransformer_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This KNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNeighborsTransformer must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNeighborsTransformer_n_samples_fit_ = bridgeKNeighborsTransformer[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNeighborsTransformer_n_samples_fit_.tolist() if hasattr(attr_KNeighborsTransformer_n_samples_fit_, 'tolist') else attr_KNeighborsTransformer_n_samples_fit_`
    })()
  }
}

export interface KNeighborsTransformerOptions {
  /**
    Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.

    @defaultValue `'distance'`
   */
  mode?: 'distance' | 'connectivity'

  /**
    Number of neighbors for each sample in the transformed sparse graph. For compatibility reasons, as each sample is considered as its own neighbor, one extra neighbor will be computed when mode == ‘distance’. In this case, the sparse graph contains (n_neighbors + 1) neighbors.

    @defaultValue `5`
   */
  n_neighbors?: number

  /**
    Algorithm used to compute the nearest neighbors:

    @defaultValue `'auto'`
   */
  algorithm?: 'auto' | 'ball_tree' | 'kd_tree' | 'brute'

  /**
    Leaf size passed to BallTree or KDTree.  This can affect the speed of the construction and query, as well as the memory required to store the tree.  The optimal value depends on the nature of the problem.

    @defaultValue `30`
   */
  leaf_size?: number

  /**
    Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of scipy.spatial.distance and the metrics listed in distance_metrics for valid metric values.

    If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

    Distance matrices are not supported.

    @defaultValue `'minkowski'`
   */
  metric?: string

  /**
    Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise_distances. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used.

    @defaultValue `2`
   */
  p?: number

  /**
    Additional keyword arguments for the metric function.
   */
  metric_params?: any

  /**
    The number of parallel jobs to run for neighbors search. If -1, then the number of jobs is set to the number of CPU cores.
   */
  n_jobs?: number
}

export interface KNeighborsTransformerFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface KNeighborsTransformerFitTransformOptions {
  /**
    Training set.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface KNeighborsTransformerGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface KNeighborsTransformerKneighborsOptions {
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
}

export interface KNeighborsTransformerKneighborsGraphOptions {
  /**
    The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For metric='precomputed' the shape should be (n_queries, n_indexed). Otherwise the shape should be (n_queries, n_features).
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
}

export interface KNeighborsTransformerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface KNeighborsTransformerTransformOptions {
  /**
    Sample data.
   */
  X?: ArrayLike[]
}
