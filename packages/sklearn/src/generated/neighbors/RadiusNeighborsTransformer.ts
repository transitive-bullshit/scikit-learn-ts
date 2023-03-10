/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform X into a (weighted) graph of neighbors nearer than a radius.

  The transformed data is a sparse graph as returned by radius_neighbors_graph.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsTransformer.html
 */
export class RadiusNeighborsTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RadiusNeighborsTransformerOptions) {
    this.id = `RadiusNeighborsTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RadiusNeighborsTransformer.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import RadiusNeighborsTransformer
try: bridgeRadiusNeighborsTransformer
except NameError: bridgeRadiusNeighborsTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_RadiusNeighborsTransformer = {'mode': ${
      this.opts['mode'] ?? undefined
    }, 'radius': ${this.opts['radius'] ?? undefined}, 'algorithm': ${
      this.opts['algorithm'] ?? undefined
    }, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'p': ${this.opts['p'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_RadiusNeighborsTransformer = {k: v for k, v in ctor_RadiusNeighborsTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeRadiusNeighborsTransformer[${this.id}] = RadiusNeighborsTransformer(**ctor_RadiusNeighborsTransformer)`

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

    await this._py.ex`del bridgeRadiusNeighborsTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the radius neighbors transformer from the training dataset.
   */
  async fit(opts: RadiusNeighborsTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_RadiusNeighborsTransformer_fit = {k: v for k, v in pms_RadiusNeighborsTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_fit = bridgeRadiusNeighborsTransformer[${this.id}].fit(**pms_RadiusNeighborsTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_fit.tolist() if hasattr(res_RadiusNeighborsTransformer_fit, 'tolist') else res_RadiusNeighborsTransformer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: RadiusNeighborsTransformerFitTransformOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_RadiusNeighborsTransformer_fit_transform = {k: v for k, v in pms_RadiusNeighborsTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_fit_transform = bridgeRadiusNeighborsTransformer[${this.id}].fit_transform(**pms_RadiusNeighborsTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_fit_transform.tolist() if hasattr(res_RadiusNeighborsTransformer_fit_transform, 'tolist') else res_RadiusNeighborsTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: RadiusNeighborsTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_RadiusNeighborsTransformer_get_feature_names_out = {k: v for k, v in pms_RadiusNeighborsTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_get_feature_names_out = bridgeRadiusNeighborsTransformer[${this.id}].get_feature_names_out(**pms_RadiusNeighborsTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_get_feature_names_out.tolist() if hasattr(res_RadiusNeighborsTransformer_get_feature_names_out, 'tolist') else res_RadiusNeighborsTransformer_get_feature_names_out`
  }

  /**
    Find the neighbors within a given radius of a point or points.

    Return the indices and distances of each point from the dataset lying in a ball with size radius around the points of the query array. Points lying on the boundary are included in the results.

    The result points are not necessarily sorted by distance to their query point.
   */
  async radius_neighbors(
    opts: RadiusNeighborsTransformerRadiusNeighborsOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before radius_neighbors()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsTransformer_radius_neighbors = {'X': ${
      opts['X'] ?? undefined
    }, 'radius': ${opts['radius'] ?? undefined}, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_RadiusNeighborsTransformer_radius_neighbors = {k: v for k, v in pms_RadiusNeighborsTransformer_radius_neighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_radius_neighbors = bridgeRadiusNeighborsTransformer[${this.id}].radius_neighbors(**pms_RadiusNeighborsTransformer_radius_neighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_radius_neighbors.tolist() if hasattr(res_RadiusNeighborsTransformer_radius_neighbors, 'tolist') else res_RadiusNeighborsTransformer_radius_neighbors`
  }

  /**
    Compute the (weighted) graph of Neighbors for points in X.

    Neighborhoods are restricted the points at a distance lower than radius.
   */
  async radius_neighbors_graph(
    opts: RadiusNeighborsTransformerRadiusNeighborsGraphOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before radius_neighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsTransformer_radius_neighbors_graph = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'radius': ${
      opts['radius'] ?? undefined
    }, 'mode': ${opts['mode'] ?? undefined}, 'sort_results': ${
      opts['sort_results'] ?? undefined
    }}

pms_RadiusNeighborsTransformer_radius_neighbors_graph = {k: v for k, v in pms_RadiusNeighborsTransformer_radius_neighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_radius_neighbors_graph = bridgeRadiusNeighborsTransformer[${this.id}].radius_neighbors_graph(**pms_RadiusNeighborsTransformer_radius_neighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_radius_neighbors_graph.tolist() if hasattr(res_RadiusNeighborsTransformer_radius_neighbors_graph, 'tolist') else res_RadiusNeighborsTransformer_radius_neighbors_graph`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(
    opts: RadiusNeighborsTransformerSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_RadiusNeighborsTransformer_set_output = {k: v for k, v in pms_RadiusNeighborsTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_set_output = bridgeRadiusNeighborsTransformer[${this.id}].set_output(**pms_RadiusNeighborsTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_set_output.tolist() if hasattr(res_RadiusNeighborsTransformer_set_output, 'tolist') else res_RadiusNeighborsTransformer_set_output`
  }

  /**
    Compute the (weighted) graph of Neighbors for points in X.
   */
  async transform(
    opts: RadiusNeighborsTransformerTransformOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RadiusNeighborsTransformer_transform = {k: v for k, v in pms_RadiusNeighborsTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsTransformer_transform = bridgeRadiusNeighborsTransformer[${this.id}].transform(**pms_RadiusNeighborsTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsTransformer_transform.tolist() if hasattr(res_RadiusNeighborsTransformer_transform, 'tolist') else res_RadiusNeighborsTransformer_transform`
  }

  /**
    The distance metric used. It will be same as the metric parameter or a synonym of it, e.g. ‘euclidean’ if the metric parameter set to ‘minkowski’ and p parameter set to 2.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsTransformer_effective_metric_ = bridgeRadiusNeighborsTransformer[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsTransformer_effective_metric_.tolist() if hasattr(attr_RadiusNeighborsTransformer_effective_metric_, 'tolist') else attr_RadiusNeighborsTransformer_effective_metric_`
    })()
  }

  /**
    Additional keyword arguments for the metric function. For most metrics will be same with metric_params parameter, but may also contain the p parameter value if the effective_metric_ attribute is set to ‘minkowski’.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsTransformer_effective_metric_params_ = bridgeRadiusNeighborsTransformer[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsTransformer_effective_metric_params_.tolist() if hasattr(attr_RadiusNeighborsTransformer_effective_metric_params_, 'tolist') else attr_RadiusNeighborsTransformer_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsTransformer_n_features_in_ = bridgeRadiusNeighborsTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsTransformer_n_features_in_.tolist() if hasattr(attr_RadiusNeighborsTransformer_n_features_in_, 'tolist') else attr_RadiusNeighborsTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsTransformer_feature_names_in_ = bridgeRadiusNeighborsTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsTransformer_feature_names_in_.tolist() if hasattr(attr_RadiusNeighborsTransformer_feature_names_in_, 'tolist') else attr_RadiusNeighborsTransformer_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsTransformer must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsTransformer_n_samples_fit_ = bridgeRadiusNeighborsTransformer[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsTransformer_n_samples_fit_.tolist() if hasattr(attr_RadiusNeighborsTransformer_n_samples_fit_, 'tolist') else attr_RadiusNeighborsTransformer_n_samples_fit_`
    })()
  }
}

export interface RadiusNeighborsTransformerOptions {
  /**
    Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.

    @defaultValue `'distance'`
   */
  mode?: 'distance' | 'connectivity'

  /**
    Radius of neighborhood in the transformed sparse graph.

    @defaultValue `1`
   */
  radius?: number

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

export interface RadiusNeighborsTransformerFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface RadiusNeighborsTransformerFitTransformOptions {
  /**
    Training set.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface RadiusNeighborsTransformerGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface RadiusNeighborsTransformerRadiusNeighborsOptions {
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
    If True, the distances and indices will be sorted by increasing distances before being returned. If False, the results may not be sorted. If return_distance=False, setting sort_results=True will result in an error.

    @defaultValue `false`
   */
  sort_results?: boolean
}

export interface RadiusNeighborsTransformerRadiusNeighborsGraphOptions {
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
    If True, in each row of the result, the non-zero entries will be sorted by increasing distances. If False, the non-zero entries may not be sorted. Only used with mode=’distance’.

    @defaultValue `false`
   */
  sort_results?: boolean
}

export interface RadiusNeighborsTransformerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface RadiusNeighborsTransformerTransformOptions {
  /**
    Sample data.
   */
  X?: ArrayLike[]
}
