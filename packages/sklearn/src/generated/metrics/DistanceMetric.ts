/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  DistanceMetric class

  This class provides a uniform interface to fast distance metric functions. The various metrics can be accessed via the [`get\_metric`](#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") class method and the metric string identifier (see below).

  Examples

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DistanceMetric.html)
 */
export class DistanceMetric {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      True distance.
     */
    dist?: any
  }) {
    this.id = `DistanceMetric${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DistanceMetric.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import DistanceMetric
try: bridgeDistanceMetric
except NameError: bridgeDistanceMetric = {}
`

    // set up constructor params
    await this._py.ex`ctor_DistanceMetric = {'dist': ${
      this.opts['dist'] ?? undefined
    }}

ctor_DistanceMetric = {k: v for k, v in ctor_DistanceMetric.items() if v is not None}`

    await this._py
      .ex`bridgeDistanceMetric[${this.id}] = DistanceMetric(**ctor_DistanceMetric)`

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

    await this._py.ex`del bridgeDistanceMetric[${this.id}]`

    this._isDisposed = true
  }

  /**
    Convert the true distance to the rank-preserving surrogate distance.

    The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.
   */
  async dist_to_rdist(opts: {
    /**
      True distance.
     */
    dist?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DistanceMetric must call init() before dist_to_rdist()')
    }

    // set up method params
    await this._py.ex`pms_DistanceMetric_dist_to_rdist = {'dist': ${
      opts['dist'] ?? undefined
    }}

pms_DistanceMetric_dist_to_rdist = {k: v for k, v in pms_DistanceMetric_dist_to_rdist.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DistanceMetric_dist_to_rdist = bridgeDistanceMetric[${this.id}].dist_to_rdist(**pms_DistanceMetric_dist_to_rdist)`

    // convert the result from python to node.js
    return this
      ._py`res_DistanceMetric_dist_to_rdist.tolist() if hasattr(res_DistanceMetric_dist_to_rdist, 'tolist') else res_DistanceMetric_dist_to_rdist`
  }

  /**
    Get the given distance metric from the string identifier.

    See the docstring of DistanceMetric for a list of available metrics.
   */
  async get_metric(opts: {
    /**
      The distance metric to use
     */
    metric?: string

    /**
      additional arguments will be passed to the requested metric
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DistanceMetric must call init() before get_metric()')
    }

    // set up method params
    await this._py.ex`pms_DistanceMetric_get_metric = {'metric': ${
      opts['metric'] ?? undefined
    }, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_DistanceMetric_get_metric = {k: v for k, v in pms_DistanceMetric_get_metric.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DistanceMetric_get_metric = bridgeDistanceMetric[${this.id}].get_metric(**pms_DistanceMetric_get_metric)`

    // convert the result from python to node.js
    return this
      ._py`res_DistanceMetric_get_metric.tolist() if hasattr(res_DistanceMetric_get_metric, 'tolist') else res_DistanceMetric_get_metric`
  }

  /**
    Compute the pairwise distances between X and Y

    This is a convenience routine for the sake of testing. For many metrics, the utilities in scipy.spatial.distance.cdist and scipy.spatial.distance.pdist will be faster.
   */
  async pairwise(opts: {
    /**
      Input data.
     */
    X?: NDArray | any[]

    /**
      Input data. If not specified, then Y=X.
     */
    Y?: NDArray | any[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DistanceMetric must call init() before pairwise()')
    }

    // set up method params
    await this._py.ex`pms_DistanceMetric_pairwise = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_DistanceMetric_pairwise = {k: v for k, v in pms_DistanceMetric_pairwise.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DistanceMetric_pairwise = bridgeDistanceMetric[${this.id}].pairwise(**pms_DistanceMetric_pairwise)`

    // convert the result from python to node.js
    return this
      ._py`res_DistanceMetric_pairwise.tolist() if hasattr(res_DistanceMetric_pairwise, 'tolist') else res_DistanceMetric_pairwise`
  }

  /**
    Convert the rank-preserving surrogate distance to the distance.

    The surrogate distance is any measure that yields the same rank as the distance, but is more efficient to compute. For example, the rank-preserving surrogate distance of the Euclidean metric is the squared-euclidean distance.
   */
  async rdist_to_dist(opts: {
    /**
      Surrogate distance.
     */
    rdist?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DistanceMetric must call init() before rdist_to_dist()')
    }

    // set up method params
    await this._py.ex`pms_DistanceMetric_rdist_to_dist = {'rdist': ${
      opts['rdist'] ?? undefined
    }}

pms_DistanceMetric_rdist_to_dist = {k: v for k, v in pms_DistanceMetric_rdist_to_dist.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DistanceMetric_rdist_to_dist = bridgeDistanceMetric[${this.id}].rdist_to_dist(**pms_DistanceMetric_rdist_to_dist)`

    // convert the result from python to node.js
    return this
      ._py`res_DistanceMetric_rdist_to_dist.tolist() if hasattr(res_DistanceMetric_rdist_to_dist, 'tolist') else res_DistanceMetric_rdist_to_dist`
  }
}
