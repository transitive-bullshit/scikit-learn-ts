/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Uniform interface for fast distance metric functions.

  The `DistanceMetric` class provides a convenient way to compute pairwise distances between samples. It supports various distance metrics, such as Euclidean distance, Manhattan distance, and more.

  The `pairwise` method can be used to compute pairwise distances between samples in the input arrays. It returns a distance matrix representing the distances between all pairs of samples.

  The [`get_metric`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.DistanceMetric.get_metric "sklearn.metrics.DistanceMetric.get_metric") method allows you to retrieve a specific metric using its string identifier.

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
      The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.
     */
    metric?: string

    /**
      The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.
     */
    dtype?: any

    /**
      Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.
     */
    kwargs?: any
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
    await this._py
      .ex`ctor_DistanceMetric = {'metric': ${this.opts['metric'] ?? undefined}, 'dtype': ${this.opts['dtype'] ?? undefined}, 'kwargs': ${this.opts['kwargs'] ?? undefined}}

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
    Get the given distance metric from the string identifier.

    See the docstring of DistanceMetric for a list of available metrics.
   */
  async get_metric(opts: {
    /**
      The string identifier or class name of the desired distance metric. See the documentation of the `DistanceMetric` class for a list of available metrics.
     */
    metric?: string

    /**
      The data type of the input on which the metric will be applied. This affects the precision of the computed distances. By default, it is set to `np.float64`.
     */
    dtype?: any

    /**
      Additional keyword arguments that will be passed to the requested metric. These arguments can be used to customize the behavior of the specific metric.
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
    await this._py
      .ex`pms_DistanceMetric_get_metric = {'metric': ${opts['metric'] ?? undefined}, 'dtype': ${opts['dtype'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_DistanceMetric_get_metric = {k: v for k, v in pms_DistanceMetric_get_metric.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DistanceMetric_get_metric = bridgeDistanceMetric[${this.id}].get_metric(**pms_DistanceMetric_get_metric)`

    // convert the result from python to node.js
    return this
      ._py`res_DistanceMetric_get_metric.tolist() if hasattr(res_DistanceMetric_get_metric, 'tolist') else res_DistanceMetric_get_metric`
  }

  /**
    An instance of the requested distance metric class.
   */
  get metric_obj(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DistanceMetric instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DistanceMetric must call init() before accessing metric_obj'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DistanceMetric_metric_obj = bridgeDistanceMetric[${this.id}].metric_obj`

      // convert the result from python to node.js
      return this
        ._py`attr_DistanceMetric_metric_obj.tolist() if hasattr(attr_DistanceMetric_metric_obj, 'tolist') else attr_DistanceMetric_metric_obj`
    })()
  }
}
