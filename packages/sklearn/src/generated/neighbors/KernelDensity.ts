/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Kernel Density Estimation.

  Read more in the [User Guide](../density.html#kernel-density).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KernelDensity.html)
 */
export class KernelDensity {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The bandwidth of the kernel. If bandwidth is a float, it defines the bandwidth of the kernel. If bandwidth is a string, one of the estimation methods is implemented.

      @defaultValue `1`
     */
    bandwidth?: number | 'scott' | 'silverman'

    /**
      The tree algorithm to use.

      @defaultValue `'auto'`
     */
    algorithm?: 'kd_tree' | 'ball_tree' | 'auto'

    /**
      The kernel to use.

      @defaultValue `'gaussian'`
     */
    kernel?:
      | 'gaussian'
      | 'tophat'
      | 'epanechnikov'
      | 'exponential'
      | 'linear'
      | 'cosine'

    /**
      Metric to use for distance computation. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

      Not all metrics are valid with all algorithms: refer to the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") and [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). Note that the normalization of the density output is correct only for the Euclidean distance metric.

      @defaultValue `'euclidean'`
     */
    metric?: string

    /**
      The desired absolute tolerance of the result. A larger tolerance will generally lead to faster execution.

      @defaultValue `0`
     */
    atol?: number

    /**
      The desired relative tolerance of the result. A larger tolerance will generally lead to faster execution.

      @defaultValue `0`
     */
    rtol?: number

    /**
      If true (default), use a breadth-first approach to the problem. Otherwise use a depth-first approach.

      @defaultValue `true`
     */
    breadth_first?: boolean

    /**
      Specify the leaf size of the underlying tree. See [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") for details.

      @defaultValue `40`
     */
    leaf_size?: number

    /**
      Additional parameters to be passed to the tree for use with the metric. For more information, see the documentation of [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree").
     */
    metric_params?: any
  }) {
    this.id = `KernelDensity${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KernelDensity.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import KernelDensity
try: bridgeKernelDensity
except NameError: bridgeKernelDensity = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_KernelDensity = {'bandwidth': ${this.opts['bandwidth'] ?? undefined}, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'kernel': ${this.opts['kernel'] ?? undefined}, 'metric': ${this.opts['metric'] ?? undefined}, 'atol': ${this.opts['atol'] ?? undefined}, 'rtol': ${this.opts['rtol'] ?? undefined}, 'breadth_first': ${this.opts['breadth_first'] ?? undefined}, 'leaf_size': ${this.opts['leaf_size'] ?? undefined}, 'metric_params': ${this.opts['metric_params'] ?? undefined}}

ctor_KernelDensity = {k: v for k, v in ctor_KernelDensity.items() if v is not None}`

    await this._py
      .ex`bridgeKernelDensity[${this.id}] = KernelDensity(**ctor_KernelDensity)`

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

    await this._py.ex`del bridgeKernelDensity[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the Kernel Density model on the data.
   */
  async fit(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]

    /**
      Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").
     */
    y?: any

    /**
      List of sample weights attached to the data X.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_KernelDensity_fit = {k: v for k, v in pms_KernelDensity_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_fit = bridgeKernelDensity[${this.id}].fit(**pms_KernelDensity_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_fit.tolist() if hasattr(res_KernelDensity_fit, 'tolist') else res_KernelDensity_fit`
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
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelDensity must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_KernelDensity_get_metadata_routing = {k: v for k, v in pms_KernelDensity_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_get_metadata_routing = bridgeKernelDensity[${this.id}].get_metadata_routing(**pms_KernelDensity_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_get_metadata_routing.tolist() if hasattr(res_KernelDensity_get_metadata_routing, 'tolist') else res_KernelDensity_get_metadata_routing`
  }

  /**
    Generate random samples from the model.

    Currently, this is implemented only for gaussian and tophat kernels.
   */
  async sample(opts: {
    /**
      Number of samples to generate.

      @defaultValue `1`
     */
    n_samples?: number

    /**
      Determines random number generation used to generate random samples. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before sample()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_sample = {'n_samples': ${opts['n_samples'] ?? undefined}, 'random_state': ${opts['random_state'] ?? undefined}}

pms_KernelDensity_sample = {k: v for k, v in pms_KernelDensity_sample.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_sample = bridgeKernelDensity[${this.id}].sample(**pms_KernelDensity_sample)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_sample.tolist() if hasattr(res_KernelDensity_sample, 'tolist') else res_KernelDensity_sample`
  }

  /**
    Compute the total log-likelihood under the model.
   */
  async score(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]

    /**
      Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_KernelDensity_score = {k: v for k, v in pms_KernelDensity_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_score = bridgeKernelDensity[${this.id}].score(**pms_KernelDensity_score)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_score.tolist() if hasattr(res_KernelDensity_score, 'tolist') else res_KernelDensity_score`
  }

  /**
    Compute the log-likelihood of each sample under the model.
   */
  async score_samples(opts: {
    /**
      An array of points to query. Last dimension should match dimension of training data (n\_features).
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before score_samples()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_score_samples = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_KernelDensity_score_samples = {k: v for k, v in pms_KernelDensity_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_score_samples = bridgeKernelDensity[${this.id}].score_samples(**pms_KernelDensity_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_score_samples.tolist() if hasattr(res_KernelDensity_score_samples, 'tolist') else res_KernelDensity_score_samples`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelDensity_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_KernelDensity_set_fit_request = {k: v for k, v in pms_KernelDensity_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelDensity_set_fit_request = bridgeKernelDensity[${this.id}].set_fit_request(**pms_KernelDensity_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelDensity_set_fit_request.tolist() if hasattr(res_KernelDensity_set_fit_request, 'tolist') else res_KernelDensity_set_fit_request`
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelDensity must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelDensity_n_features_in_ = bridgeKernelDensity[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelDensity_n_features_in_.tolist() if hasattr(attr_KernelDensity_n_features_in_, 'tolist') else attr_KernelDensity_n_features_in_`
    })()
  }

  /**
    The tree algorithm for fast generalized N-point problems.
   */
  get tree_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelDensity must call init() before accessing tree_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelDensity_tree_ = bridgeKernelDensity[${this.id}].tree_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelDensity_tree_.tolist() if hasattr(attr_KernelDensity_tree_, 'tolist') else attr_KernelDensity_tree_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelDensity must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelDensity_feature_names_in_ = bridgeKernelDensity[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelDensity_feature_names_in_.tolist() if hasattr(attr_KernelDensity_feature_names_in_, 'tolist') else attr_KernelDensity_feature_names_in_`
    })()
  }

  /**
    Value of the bandwidth, given directly by the bandwidth parameter or estimated using the ‘scott’ or ‘silverman’ method.
   */
  get bandwidth_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelDensity instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelDensity must call init() before accessing bandwidth_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelDensity_bandwidth_ = bridgeKernelDensity[${this.id}].bandwidth_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelDensity_bandwidth_.tolist() if hasattr(attr_KernelDensity_bandwidth_, 'tolist') else attr_KernelDensity_bandwidth_`
    })()
  }
}
