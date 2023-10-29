/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Repeated Stratified K-Fold cross validator.

  Repeats Stratified K-Fold n times with different randomization in each repetition.

  Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedStratifiedKFold.html)
 */
export class RepeatedStratifiedKFold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of folds. Must be at least 2.

      @defaultValue `5`
     */
    n_splits?: number

    /**
      Number of times cross-validator needs to be repeated.

      @defaultValue `10`
     */
    n_repeats?: number

    /**
      Controls the generation of the random states for each repetition. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `RepeatedStratifiedKFold${crypto.randomUUID().split('-')[0]}`
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
        'This RepeatedStratifiedKFold instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RepeatedStratifiedKFold.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import RepeatedStratifiedKFold
try: bridgeRepeatedStratifiedKFold
except NameError: bridgeRepeatedStratifiedKFold = {}
`

    // set up constructor params
    await this._py.ex`ctor_RepeatedStratifiedKFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'n_repeats': ${this.opts['n_repeats'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_RepeatedStratifiedKFold = {k: v for k, v in ctor_RepeatedStratifiedKFold.items() if v is not None}`

    await this._py
      .ex`bridgeRepeatedStratifiedKFold[${this.id}] = RepeatedStratifiedKFold(**ctor_RepeatedStratifiedKFold)`

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

    await this._py.ex`del bridgeRepeatedStratifiedKFold[${this.id}]`

    this._isDisposed = true
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
        'This RepeatedStratifiedKFold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RepeatedStratifiedKFold must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RepeatedStratifiedKFold_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_RepeatedStratifiedKFold_get_metadata_routing = {k: v for k, v in pms_RepeatedStratifiedKFold_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RepeatedStratifiedKFold_get_metadata_routing = bridgeRepeatedStratifiedKFold[${this.id}].get_metadata_routing(**pms_RepeatedStratifiedKFold_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RepeatedStratifiedKFold_get_metadata_routing.tolist() if hasattr(res_RepeatedStratifiedKFold_get_metadata_routing, 'tolist') else res_RepeatedStratifiedKFold_get_metadata_routing`
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: {
    /**
      Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.
     */
    X?: any

    /**
      Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.
     */
    y?: any

    /**
      Group labels for the samples used while splitting the dataset into train/test set.
     */
    groups?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RepeatedStratifiedKFold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RepeatedStratifiedKFold must call init() before get_n_splits()'
      )
    }

    // set up method params
    await this._py.ex`pms_RepeatedStratifiedKFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_RepeatedStratifiedKFold_get_n_splits = {k: v for k, v in pms_RepeatedStratifiedKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RepeatedStratifiedKFold_get_n_splits = bridgeRepeatedStratifiedKFold[${this.id}].get_n_splits(**pms_RepeatedStratifiedKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_RepeatedStratifiedKFold_get_n_splits.tolist() if hasattr(res_RepeatedStratifiedKFold_get_n_splits, 'tolist') else res_RepeatedStratifiedKFold_get_n_splits`
  }

  /**
    Generates indices to split data into training and test set.
   */
  async split(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      The target variable for supervised learning problems.
     */
    y?: ArrayLike

    /**
      Group labels for the samples used while splitting the dataset into train/test set.
     */
    groups?: ArrayLike
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RepeatedStratifiedKFold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RepeatedStratifiedKFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_RepeatedStratifiedKFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_RepeatedStratifiedKFold_split = {k: v for k, v in pms_RepeatedStratifiedKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RepeatedStratifiedKFold_split = bridgeRepeatedStratifiedKFold[${this.id}].split(**pms_RepeatedStratifiedKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_RepeatedStratifiedKFold_split.tolist() if hasattr(res_RepeatedStratifiedKFold_split, 'tolist') else res_RepeatedStratifiedKFold_split`
  }
}
