/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Regression based on neighbors within a fixed radius.

  The target is predicted by local interpolation of the targets associated of the nearest neighbors in the training set.

  Read more in the [User Guide](../neighbors.html#regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsRegressor.html)
 */
export class RadiusNeighborsRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Range of parameter space to use by default for [`radius\_neighbors`](#sklearn.neighbors.RadiusNeighborsRegressor.radius_neighbors "sklearn.neighbors.RadiusNeighborsRegressor.radius_neighbors") queries.

      @defaultValue `1`
     */
    radius?: number

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
      Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

      @defaultValue `2`
     */
    p?: number

    /**
      Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

      If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

      If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

      @defaultValue `'minkowski'`
     */
    metric?: string

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any

    /**
      The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `RadiusNeighborsRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RadiusNeighborsRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import RadiusNeighborsRegressor
try: bridgeRadiusNeighborsRegressor
except NameError: bridgeRadiusNeighborsRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_RadiusNeighborsRegressor = {'radius': ${
      this.opts['radius'] ?? undefined
    }, 'weights': ${this.opts['weights'] ?? undefined}, 'algorithm': ${
      this.opts['algorithm'] ?? undefined
    }, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'p': ${
      this.opts['p'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_RadiusNeighborsRegressor = {k: v for k, v in ctor_RadiusNeighborsRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeRadiusNeighborsRegressor[${this.id}] = RadiusNeighborsRegressor(**ctor_RadiusNeighborsRegressor)`

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

    await this._py.ex`del bridgeRadiusNeighborsRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the radius neighbors regressor from the training dataset.
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
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RadiusNeighborsRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_RadiusNeighborsRegressor_fit = {k: v for k, v in pms_RadiusNeighborsRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsRegressor_fit = bridgeRadiusNeighborsRegressor[${this.id}].fit(**pms_RadiusNeighborsRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsRegressor_fit.tolist() if hasattr(res_RadiusNeighborsRegressor_fit, 'tolist') else res_RadiusNeighborsRegressor_fit`
  }

  /**
    Predict the target for the provided data.
   */
  async predict(opts: {
    /**
      Test samples.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RadiusNeighborsRegressor_predict = {k: v for k, v in pms_RadiusNeighborsRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsRegressor_predict = bridgeRadiusNeighborsRegressor[${this.id}].predict(**pms_RadiusNeighborsRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsRegressor_predict.tolist() if hasattr(res_RadiusNeighborsRegressor_predict, 'tolist') else res_RadiusNeighborsRegressor_predict`
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
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before radius_neighbors()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsRegressor_radius_neighbors = {'X': ${
      opts['X'] ?? undefined
    }, 'radius': ${opts['radius'] ?? undefined}, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_RadiusNeighborsRegressor_radius_neighbors = {k: v for k, v in pms_RadiusNeighborsRegressor_radius_neighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsRegressor_radius_neighbors = bridgeRadiusNeighborsRegressor[${this.id}].radius_neighbors(**pms_RadiusNeighborsRegressor_radius_neighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsRegressor_radius_neighbors.tolist() if hasattr(res_RadiusNeighborsRegressor_radius_neighbors, 'tolist') else res_RadiusNeighborsRegressor_radius_neighbors`
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
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before radius_neighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsRegressor_radius_neighbors_graph = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'radius': ${
      opts['radius'] ?? undefined
    }, 'mode': ${opts['mode'] ?? undefined}, 'sort_results': ${
      opts['sort_results'] ?? undefined
    }}

pms_RadiusNeighborsRegressor_radius_neighbors_graph = {k: v for k, v in pms_RadiusNeighborsRegressor_radius_neighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsRegressor_radius_neighbors_graph = bridgeRadiusNeighborsRegressor[${this.id}].radius_neighbors_graph(**pms_RadiusNeighborsRegressor_radius_neighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsRegressor_radius_neighbors_graph.tolist() if hasattr(res_RadiusNeighborsRegressor_radius_neighbors_graph, 'tolist') else res_RadiusNeighborsRegressor_radius_neighbors_graph`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
     */
    X?: ArrayLike[]

    /**
      True values for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RadiusNeighborsRegressor_score = {k: v for k, v in pms_RadiusNeighborsRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsRegressor_score = bridgeRadiusNeighborsRegressor[${this.id}].score(**pms_RadiusNeighborsRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsRegressor_score.tolist() if hasattr(res_RadiusNeighborsRegressor_score, 'tolist') else res_RadiusNeighborsRegressor_score`
  }

  /**
    The distance metric to use. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsRegressor_effective_metric_ = bridgeRadiusNeighborsRegressor[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsRegressor_effective_metric_.tolist() if hasattr(attr_RadiusNeighborsRegressor_effective_metric_, 'tolist') else attr_RadiusNeighborsRegressor_effective_metric_`
    })()
  }

  /**
    Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsRegressor_effective_metric_params_ = bridgeRadiusNeighborsRegressor[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsRegressor_effective_metric_params_.tolist() if hasattr(attr_RadiusNeighborsRegressor_effective_metric_params_, 'tolist') else attr_RadiusNeighborsRegressor_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsRegressor_n_features_in_ = bridgeRadiusNeighborsRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsRegressor_n_features_in_.tolist() if hasattr(attr_RadiusNeighborsRegressor_n_features_in_, 'tolist') else attr_RadiusNeighborsRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsRegressor_feature_names_in_ = bridgeRadiusNeighborsRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsRegressor_feature_names_in_.tolist() if hasattr(attr_RadiusNeighborsRegressor_feature_names_in_, 'tolist') else attr_RadiusNeighborsRegressor_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsRegressor must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsRegressor_n_samples_fit_ = bridgeRadiusNeighborsRegressor[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsRegressor_n_samples_fit_.tolist() if hasattr(attr_RadiusNeighborsRegressor_n_samples_fit_, 'tolist') else attr_RadiusNeighborsRegressor_n_samples_fit_`
    })()
  }
}
