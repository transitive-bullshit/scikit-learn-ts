/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Classifier implementing a vote among neighbors within a given radius.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html
 */
export class RadiusNeighborsClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RadiusNeighborsClassifierOptions) {
    this.id = `RadiusNeighborsClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RadiusNeighborsClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import RadiusNeighborsClassifier
try: bridgeRadiusNeighborsClassifier
except NameError: bridgeRadiusNeighborsClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_RadiusNeighborsClassifier = {'radius': ${
      this.opts['radius'] ?? undefined
    }, 'weights': ${this.opts['weights'] ?? undefined}, 'algorithm': ${
      this.opts['algorithm'] ?? undefined
    }, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'p': ${
      this.opts['p'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'outlier_label': ${
      this.opts['outlier_label'] ?? undefined
    }, 'metric_params': ${this.opts['metric_params'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_RadiusNeighborsClassifier = {k: v for k, v in ctor_RadiusNeighborsClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeRadiusNeighborsClassifier[${this.id}] = RadiusNeighborsClassifier(**ctor_RadiusNeighborsClassifier)`

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

    await this._py.ex`del bridgeRadiusNeighborsClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the radius neighbors classifier from the training dataset.
   */
  async fit(opts: RadiusNeighborsClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RadiusNeighborsClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_RadiusNeighborsClassifier_fit = {k: v for k, v in pms_RadiusNeighborsClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_fit = bridgeRadiusNeighborsClassifier[${this.id}].fit(**pms_RadiusNeighborsClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_fit.tolist() if hasattr(res_RadiusNeighborsClassifier_fit, 'tolist') else res_RadiusNeighborsClassifier_fit`
  }

  /**
    Predict the class labels for the provided data.
   */
  async predict(
    opts: RadiusNeighborsClassifierPredictOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RadiusNeighborsClassifier_predict = {k: v for k, v in pms_RadiusNeighborsClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_predict = bridgeRadiusNeighborsClassifier[${this.id}].predict(**pms_RadiusNeighborsClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_predict.tolist() if hasattr(res_RadiusNeighborsClassifier_predict, 'tolist') else res_RadiusNeighborsClassifier_predict`
  }

  /**
    Return probability estimates for the test data X.
   */
  async predict_proba(
    opts: RadiusNeighborsClassifierPredictProbaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RadiusNeighborsClassifier_predict_proba = {k: v for k, v in pms_RadiusNeighborsClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_predict_proba = bridgeRadiusNeighborsClassifier[${this.id}].predict_proba(**pms_RadiusNeighborsClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_predict_proba.tolist() if hasattr(res_RadiusNeighborsClassifier_predict_proba, 'tolist') else res_RadiusNeighborsClassifier_predict_proba`
  }

  /**
    Find the neighbors within a given radius of a point or points.

    Return the indices and distances of each point from the dataset lying in a ball with size radius around the points of the query array. Points lying on the boundary are included in the results.

    The result points are not necessarily sorted by distance to their query point.
   */
  async radius_neighbors(
    opts: RadiusNeighborsClassifierRadiusNeighborsOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before radius_neighbors()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsClassifier_radius_neighbors = {'X': ${
      opts['X'] ?? undefined
    }, 'radius': ${opts['radius'] ?? undefined}, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }, 'sort_results': ${opts['sort_results'] ?? undefined}}

pms_RadiusNeighborsClassifier_radius_neighbors = {k: v for k, v in pms_RadiusNeighborsClassifier_radius_neighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_radius_neighbors = bridgeRadiusNeighborsClassifier[${this.id}].radius_neighbors(**pms_RadiusNeighborsClassifier_radius_neighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_radius_neighbors.tolist() if hasattr(res_RadiusNeighborsClassifier_radius_neighbors, 'tolist') else res_RadiusNeighborsClassifier_radius_neighbors`
  }

  /**
    Compute the (weighted) graph of Neighbors for points in X.

    Neighborhoods are restricted the points at a distance lower than radius.
   */
  async radius_neighbors_graph(
    opts: RadiusNeighborsClassifierRadiusNeighborsGraphOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before radius_neighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RadiusNeighborsClassifier_radius_neighbors_graph = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'radius': ${
      opts['radius'] ?? undefined
    }, 'mode': ${opts['mode'] ?? undefined}, 'sort_results': ${
      opts['sort_results'] ?? undefined
    }}

pms_RadiusNeighborsClassifier_radius_neighbors_graph = {k: v for k, v in pms_RadiusNeighborsClassifier_radius_neighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_radius_neighbors_graph = bridgeRadiusNeighborsClassifier[${this.id}].radius_neighbors_graph(**pms_RadiusNeighborsClassifier_radius_neighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_radius_neighbors_graph.tolist() if hasattr(res_RadiusNeighborsClassifier_radius_neighbors_graph, 'tolist') else res_RadiusNeighborsClassifier_radius_neighbors_graph`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: RadiusNeighborsClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_RadiusNeighborsClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RadiusNeighborsClassifier_score = {k: v for k, v in pms_RadiusNeighborsClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RadiusNeighborsClassifier_score = bridgeRadiusNeighborsClassifier[${this.id}].score(**pms_RadiusNeighborsClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RadiusNeighborsClassifier_score.tolist() if hasattr(res_RadiusNeighborsClassifier_score, 'tolist') else res_RadiusNeighborsClassifier_score`
  }

  /**
    Class labels known to the classifier.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_classes_ = bridgeRadiusNeighborsClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_classes_.tolist() if hasattr(attr_RadiusNeighborsClassifier_classes_, 'tolist') else attr_RadiusNeighborsClassifier_classes_`
    })()
  }

  /**
    The distance metric used. It will be same as the metric parameter or a synonym of it, e.g. ‘euclidean’ if the metric parameter set to ‘minkowski’ and p parameter set to 2.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_effective_metric_ = bridgeRadiusNeighborsClassifier[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_effective_metric_.tolist() if hasattr(attr_RadiusNeighborsClassifier_effective_metric_, 'tolist') else attr_RadiusNeighborsClassifier_effective_metric_`
    })()
  }

  /**
    Additional keyword arguments for the metric function. For most metrics will be same with metric_params parameter, but may also contain the p parameter value if the effective_metric_ attribute is set to ‘minkowski’.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_effective_metric_params_ = bridgeRadiusNeighborsClassifier[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_effective_metric_params_.tolist() if hasattr(attr_RadiusNeighborsClassifier_effective_metric_params_, 'tolist') else attr_RadiusNeighborsClassifier_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_n_features_in_ = bridgeRadiusNeighborsClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_n_features_in_.tolist() if hasattr(attr_RadiusNeighborsClassifier_n_features_in_, 'tolist') else attr_RadiusNeighborsClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_feature_names_in_ = bridgeRadiusNeighborsClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_feature_names_in_.tolist() if hasattr(attr_RadiusNeighborsClassifier_feature_names_in_, 'tolist') else attr_RadiusNeighborsClassifier_feature_names_in_`
    })()
  }

  /**
    Number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_n_samples_fit_ = bridgeRadiusNeighborsClassifier[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_n_samples_fit_.tolist() if hasattr(attr_RadiusNeighborsClassifier_n_samples_fit_, 'tolist') else attr_RadiusNeighborsClassifier_n_samples_fit_`
    })()
  }

  /**
    Label which is given for outlier samples (samples with no neighbors on given radius).
   */
  get outlier_label_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing outlier_label_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_outlier_label_ = bridgeRadiusNeighborsClassifier[${this.id}].outlier_label_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_outlier_label_.tolist() if hasattr(attr_RadiusNeighborsClassifier_outlier_label_, 'tolist') else attr_RadiusNeighborsClassifier_outlier_label_`
    })()
  }

  /**
    False when y’s shape is (n_samples, ) or (n_samples, 1) during fit otherwise True.
   */
  get outputs_2d_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This RadiusNeighborsClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RadiusNeighborsClassifier must call init() before accessing outputs_2d_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RadiusNeighborsClassifier_outputs_2d_ = bridgeRadiusNeighborsClassifier[${this.id}].outputs_2d_`

      // convert the result from python to node.js
      return this
        ._py`attr_RadiusNeighborsClassifier_outputs_2d_.tolist() if hasattr(attr_RadiusNeighborsClassifier_outputs_2d_, 'tolist') else attr_RadiusNeighborsClassifier_outputs_2d_`
    })()
  }
}

export interface RadiusNeighborsClassifierOptions {
  /**
    Range of parameter space to use by default for radius_neighbors queries.

    @defaultValue `1`
   */
  radius?: number

  /**
    Weight function used in prediction.  Possible values:

    @defaultValue `'uniform'`
   */
  weights?: 'uniform' | 'distance'

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
    Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used.

    @defaultValue `2`
   */
  p?: number

  /**
    Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of scipy.spatial.distance and the metrics listed in distance_metrics for valid metric values.

    If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a sparse graph, in which case only “nonzero” elements may be considered neighbors.

    If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

    @defaultValue `'minkowski'`
   */
  metric?: string

  /**
    Label for outlier samples (samples with no neighbors in given radius).
   */
  outlier_label?: 'most_frequent'

  /**
    Additional keyword arguments for the metric function.
   */
  metric_params?: any

  /**
    The number of parallel jobs to run for neighbors search. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number
}

export interface RadiusNeighborsClassifierFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike | SparseMatrix
}

export interface RadiusNeighborsClassifierPredictOptions {
  /**
    Test samples.
   */
  X?: any
}

export interface RadiusNeighborsClassifierPredictProbaOptions {
  /**
    Test samples.
   */
  X?: any
}

export interface RadiusNeighborsClassifierRadiusNeighborsOptions {
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

export interface RadiusNeighborsClassifierRadiusNeighborsGraphOptions {
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

export interface RadiusNeighborsClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}