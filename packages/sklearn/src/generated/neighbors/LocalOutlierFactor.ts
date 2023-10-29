/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

  The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html)
 */
export class LocalOutlierFactor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries. If n\_neighbors is larger than the number of samples provided, all samples will be used.

      @defaultValue `20`
     */
    n_neighbors?: number

    /**
      Algorithm used to compute the nearest neighbors:

      @defaultValue `'auto'`
     */
    algorithm?: 'auto' | 'ball_tree' | 'kd_tree' | 'brute'

    /**
      Leaf is size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

      @defaultValue `30`
     */
    leaf_size?: number

    /**
      Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

      If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

      If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

      @defaultValue `'minkowski'`
     */
    metric?: string

    /**
      Parameter for the Minkowski metric from [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

      @defaultValue `2`
     */
    p?: number

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any

    /**
      The amount of contamination of the data set, i.e. the proportion of outliers in the data set. When fitting this is used to define the threshold on the scores of the samples.

      @defaultValue `'auto'`
     */
    contamination?: 'auto' | number

    /**
      By default, LocalOutlierFactor is only meant to be used for outlier detection (novelty=`false`). Set novelty to `true` if you want to use LocalOutlierFactor for novelty detection. In this case be aware that you should only use predict, decision\_function and score\_samples on new unseen data and not on the training set; and note that the results obtained this way may differ from the standard LOF results.

      @defaultValue `false`
     */
    novelty?: boolean

    /**
      The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `LocalOutlierFactor${crypto.randomUUID().split('-')[0]}`
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
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LocalOutlierFactor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import LocalOutlierFactor
try: bridgeLocalOutlierFactor
except NameError: bridgeLocalOutlierFactor = {}
`

    // set up constructor params
    await this._py.ex`ctor_LocalOutlierFactor = {'n_neighbors': ${
      this.opts['n_neighbors'] ?? undefined
    }, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'leaf_size': ${
      this.opts['leaf_size'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'p': ${
      this.opts['p'] ?? undefined
    }, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'contamination': ${
      this.opts['contamination'] ?? undefined
    }, 'novelty': ${this.opts['novelty'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_LocalOutlierFactor = {k: v for k, v in ctor_LocalOutlierFactor.items() if v is not None}`

    await this._py
      .ex`bridgeLocalOutlierFactor[${this.id}] = LocalOutlierFactor(**ctor_LocalOutlierFactor)`

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

    await this._py.ex`del bridgeLocalOutlierFactor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Shifted opposite of the Local Outlier Factor of X.

    Bigger is better, i.e. large values correspond to inliers.

    **Only available for novelty detection (when novelty is set to `true`).** The shift offset allows a zero threshold for being an outlier. The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point.
   */
  async decision_function(opts: {
    /**
      The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LocalOutlierFactor_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LocalOutlierFactor_decision_function = {k: v for k, v in pms_LocalOutlierFactor_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_decision_function = bridgeLocalOutlierFactor[${this.id}].decision_function(**pms_LocalOutlierFactor_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_decision_function.tolist() if hasattr(res_LocalOutlierFactor_decision_function, 'tolist') else res_LocalOutlierFactor_decision_function`
  }

  /**
    Fit the local outlier factor detector from the training dataset.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LocalOutlierFactor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LocalOutlierFactor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LocalOutlierFactor_fit = {k: v for k, v in pms_LocalOutlierFactor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_fit = bridgeLocalOutlierFactor[${this.id}].fit(**pms_LocalOutlierFactor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_fit.tolist() if hasattr(res_LocalOutlierFactor_fit, 'tolist') else res_LocalOutlierFactor_fit`
  }

  /**
    Fit the model to the training set X and return the labels.

    **Not available for novelty detection (when novelty is set to `true`).** Label is 1 for an inlier and -1 for an outlier according to the LOF score and the contamination parameter.
   */
  async fit_predict(opts: {
    /**
      The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before fit_predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_LocalOutlierFactor_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LocalOutlierFactor_fit_predict = {k: v for k, v in pms_LocalOutlierFactor_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_fit_predict = bridgeLocalOutlierFactor[${this.id}].fit_predict(**pms_LocalOutlierFactor_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_fit_predict.tolist() if hasattr(res_LocalOutlierFactor_fit_predict, 'tolist') else res_LocalOutlierFactor_fit_predict`
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
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LocalOutlierFactor_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_LocalOutlierFactor_get_metadata_routing = {k: v for k, v in pms_LocalOutlierFactor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_get_metadata_routing = bridgeLocalOutlierFactor[${this.id}].get_metadata_routing(**pms_LocalOutlierFactor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_get_metadata_routing.tolist() if hasattr(res_LocalOutlierFactor_get_metadata_routing, 'tolist') else res_LocalOutlierFactor_get_metadata_routing`
  }

  /**
    Find the K-neighbors of a point.

    Returns indices of and distances to the neighbors of each point.
   */
  async kneighbors(opts: {
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
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LocalOutlierFactor must call init() before kneighbors()')
    }

    // set up method params
    await this._py.ex`pms_LocalOutlierFactor_kneighbors = {'X': ${
      opts['X'] ?? undefined
    }, 'n_neighbors': ${opts['n_neighbors'] ?? undefined}, 'return_distance': ${
      opts['return_distance'] ?? undefined
    }}

pms_LocalOutlierFactor_kneighbors = {k: v for k, v in pms_LocalOutlierFactor_kneighbors.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_kneighbors = bridgeLocalOutlierFactor[${this.id}].kneighbors(**pms_LocalOutlierFactor_kneighbors)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_kneighbors.tolist() if hasattr(res_LocalOutlierFactor_kneighbors, 'tolist') else res_LocalOutlierFactor_kneighbors`
  }

  /**
    Compute the (weighted) graph of k-Neighbors for points in X.
   */
  async kneighbors_graph(opts: {
    /**
      The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n\_queries, n\_indexed). Otherwise the shape should be (n\_queries, n\_features).
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
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before kneighbors_graph()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LocalOutlierFactor_kneighbors_graph = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'n_neighbors': ${
      opts['n_neighbors'] ?? undefined
    }, 'mode': ${opts['mode'] ?? undefined}}

pms_LocalOutlierFactor_kneighbors_graph = {k: v for k, v in pms_LocalOutlierFactor_kneighbors_graph.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_kneighbors_graph = bridgeLocalOutlierFactor[${this.id}].kneighbors_graph(**pms_LocalOutlierFactor_kneighbors_graph)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_kneighbors_graph.tolist() if hasattr(res_LocalOutlierFactor_kneighbors_graph, 'tolist') else res_LocalOutlierFactor_kneighbors_graph`
  }

  /**
    Predict the labels (1 inlier, -1 outlier) of X according to LOF.

    **Only available for novelty detection (when novelty is set to `true`).** This method allows to generalize prediction to *new observations* (not in the training set). Note that the result of `clf.fit(X)` then `clf.predict(X)` with `novelty=True` may differ from the result obtained by `clf.fit\_predict(X)` with `novelty=False`.
   */
  async predict(opts: {
    /**
      The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LocalOutlierFactor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LocalOutlierFactor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LocalOutlierFactor_predict = {k: v for k, v in pms_LocalOutlierFactor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_predict = bridgeLocalOutlierFactor[${this.id}].predict(**pms_LocalOutlierFactor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_predict.tolist() if hasattr(res_LocalOutlierFactor_predict, 'tolist') else res_LocalOutlierFactor_predict`
  }

  /**
    Opposite of the Local Outlier Factor of X.

    It is the opposite as bigger is better, i.e. large values correspond to inliers.

    **Only available for novelty detection (when novelty is set to `true`).** The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point. Because of this, the scores obtained via `score\_samples` may differ from the standard LOF scores. The standard LOF scores for the training data is available via the `negative\_outlier\_factor\_` attribute.
   */
  async score_samples(opts: {
    /**
      The query sample or samples to compute the Local Outlier Factor w.r.t. the training samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py.ex`pms_LocalOutlierFactor_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LocalOutlierFactor_score_samples = {k: v for k, v in pms_LocalOutlierFactor_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocalOutlierFactor_score_samples = bridgeLocalOutlierFactor[${this.id}].score_samples(**pms_LocalOutlierFactor_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_LocalOutlierFactor_score_samples.tolist() if hasattr(res_LocalOutlierFactor_score_samples, 'tolist') else res_LocalOutlierFactor_score_samples`
  }

  /**
    The opposite LOF of the training samples. The higher, the more normal. Inliers tend to have a LOF score close to 1 (`negative\_outlier\_factor\_` close to -1), while outliers tend to have a larger LOF score.

    The local outlier factor (LOF) of a sample captures its supposed ‘degree of abnormality’. It is the average of the ratio of the local reachability density of a sample and those of its k-nearest neighbors.
   */
  get negative_outlier_factor_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing negative_outlier_factor_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_negative_outlier_factor_ = bridgeLocalOutlierFactor[${this.id}].negative_outlier_factor_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_negative_outlier_factor_.tolist() if hasattr(attr_LocalOutlierFactor_negative_outlier_factor_, 'tolist') else attr_LocalOutlierFactor_negative_outlier_factor_`
    })()
  }

  /**
    The actual number of neighbors used for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries.
   */
  get n_neighbors_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing n_neighbors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_n_neighbors_ = bridgeLocalOutlierFactor[${this.id}].n_neighbors_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_n_neighbors_.tolist() if hasattr(attr_LocalOutlierFactor_n_neighbors_, 'tolist') else attr_LocalOutlierFactor_n_neighbors_`
    })()
  }

  /**
    Offset used to obtain binary labels from the raw scores. Observations having a negative\_outlier\_factor smaller than `offset\_` are detected as abnormal. The offset is set to -1.5 (inliers score around -1), except when a contamination parameter different than “auto” is provided. In that case, the offset is defined in such a way we obtain the expected number of outliers in training.
   */
  get offset_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_offset_ = bridgeLocalOutlierFactor[${this.id}].offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_offset_.tolist() if hasattr(attr_LocalOutlierFactor_offset_, 'tolist') else attr_LocalOutlierFactor_offset_`
    })()
  }

  /**
    The effective metric used for the distance computation.
   */
  get effective_metric_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing effective_metric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_effective_metric_ = bridgeLocalOutlierFactor[${this.id}].effective_metric_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_effective_metric_.tolist() if hasattr(attr_LocalOutlierFactor_effective_metric_, 'tolist') else attr_LocalOutlierFactor_effective_metric_`
    })()
  }

  /**
    The effective additional keyword arguments for the metric function.
   */
  get effective_metric_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing effective_metric_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_effective_metric_params_ = bridgeLocalOutlierFactor[${this.id}].effective_metric_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_effective_metric_params_.tolist() if hasattr(attr_LocalOutlierFactor_effective_metric_params_, 'tolist') else attr_LocalOutlierFactor_effective_metric_params_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_n_features_in_ = bridgeLocalOutlierFactor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_n_features_in_.tolist() if hasattr(attr_LocalOutlierFactor_n_features_in_, 'tolist') else attr_LocalOutlierFactor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_feature_names_in_ = bridgeLocalOutlierFactor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_feature_names_in_.tolist() if hasattr(attr_LocalOutlierFactor_feature_names_in_, 'tolist') else attr_LocalOutlierFactor_feature_names_in_`
    })()
  }

  /**
    It is the number of samples in the fitted data.
   */
  get n_samples_fit_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocalOutlierFactor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocalOutlierFactor must call init() before accessing n_samples_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocalOutlierFactor_n_samples_fit_ = bridgeLocalOutlierFactor[${this.id}].n_samples_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocalOutlierFactor_n_samples_fit_.tolist() if hasattr(attr_LocalOutlierFactor_n_samples_fit_, 'tolist') else attr_LocalOutlierFactor_n_samples_fit_`
    })()
  }
}
