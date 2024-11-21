/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Time Series cross-validator.

  Provides train/test indices to split time series data samples that are observed at fixed time intervals, in train/test sets. In each split, test indices must be higher than before, and thus shuffling in cross validator is inappropriate.

  This cross-validation object is a variation of [`KFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"). In the kth split, it returns first k folds as train set and the (k+1)th fold as test set.

  Note that unlike standard cross-validation methods, successive training sets are supersets of those that come before them.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../cross_validation.html#time-series-split).

  For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html)
 */
export class TimeSeriesSplit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of splits. Must be at least 2.

      @defaultValue `5`
     */
    n_splits?: number

    /**
      Maximum size for a single training set.
     */
    max_train_size?: number

    /**
      Used to limit the size of the test set. Defaults to `n_samples // (n_splits + 1)`, which is the maximum allowed value with `gap=0`.
     */
    test_size?: number

    /**
      Number of samples to exclude from the end of each train set before the test set.

      @defaultValue `0`
     */
    gap?: number
  }) {
    this.id = `TimeSeriesSplit${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This TimeSeriesSplit instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TimeSeriesSplit.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import TimeSeriesSplit
try: bridgeTimeSeriesSplit
except NameError: bridgeTimeSeriesSplit = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TimeSeriesSplit = {'n_splits': ${this.opts['n_splits'] ?? undefined}, 'max_train_size': ${this.opts['max_train_size'] ?? undefined}, 'test_size': ${this.opts['test_size'] ?? undefined}, 'gap': ${this.opts['gap'] ?? undefined}}

ctor_TimeSeriesSplit = {k: v for k, v in ctor_TimeSeriesSplit.items() if v is not None}`

    await this._py
      .ex`bridgeTimeSeriesSplit[${this.id}] = TimeSeriesSplit(**ctor_TimeSeriesSplit)`

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

    await this._py.ex`del bridgeTimeSeriesSplit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TimeSeriesSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TimeSeriesSplit must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TimeSeriesSplit_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_TimeSeriesSplit_get_metadata_routing = {k: v for k, v in pms_TimeSeriesSplit_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TimeSeriesSplit_get_metadata_routing = bridgeTimeSeriesSplit[${this.id}].get_metadata_routing(**pms_TimeSeriesSplit_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TimeSeriesSplit_get_metadata_routing.tolist() if hasattr(res_TimeSeriesSplit_get_metadata_routing, 'tolist') else res_TimeSeriesSplit_get_metadata_routing`
  }

  /**
    Returns the number of splitting iterations in the cross-validator.
   */
  async get_n_splits(opts: {
    /**
      Always ignored, exists for compatibility.
     */
    X?: any

    /**
      Always ignored, exists for compatibility.
     */
    y?: any

    /**
      Always ignored, exists for compatibility.
     */
    groups?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TimeSeriesSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TimeSeriesSplit must call init() before get_n_splits()')
    }

    // set up method params
    await this._py
      .ex`pms_TimeSeriesSplit_get_n_splits = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_TimeSeriesSplit_get_n_splits = {k: v for k, v in pms_TimeSeriesSplit_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TimeSeriesSplit_get_n_splits = bridgeTimeSeriesSplit[${this.id}].get_n_splits(**pms_TimeSeriesSplit_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_TimeSeriesSplit_get_n_splits.tolist() if hasattr(res_TimeSeriesSplit_get_n_splits, 'tolist') else res_TimeSeriesSplit_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: {
    /**
      Training data, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Always ignored, exists for compatibility.
     */
    y?: ArrayLike

    /**
      Always ignored, exists for compatibility.
     */
    groups?: ArrayLike
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TimeSeriesSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TimeSeriesSplit must call init() before split()')
    }

    // set up method params
    await this._py
      .ex`pms_TimeSeriesSplit_split = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_TimeSeriesSplit_split = {k: v for k, v in pms_TimeSeriesSplit_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TimeSeriesSplit_split = bridgeTimeSeriesSplit[${this.id}].split(**pms_TimeSeriesSplit_split)`

    // convert the result from python to node.js
    return this
      ._py`res_TimeSeriesSplit_split.tolist() if hasattr(res_TimeSeriesSplit_split, 'tolist') else res_TimeSeriesSplit_split`
  }
}
