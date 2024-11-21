/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  K-fold iterator variant with non-overlapping groups.

  Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

  The folds are approximately balanced in the sense that the number of samples is approximately the same in each test fold.

  Read more in the [User Guide](../cross_validation.html#group-k-fold).

  For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html)
 */
export class GroupKFold {
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
  }) {
    this.id = `GroupKFold${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GroupKFold.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import GroupKFold
try: bridgeGroupKFold
except NameError: bridgeGroupKFold = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GroupKFold = {'n_splits': ${this.opts['n_splits'] ?? undefined}}

ctor_GroupKFold = {k: v for k, v in ctor_GroupKFold.items() if v is not None}`

    await this._py
      .ex`bridgeGroupKFold[${this.id}] = GroupKFold(**ctor_GroupKFold)`

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

    await this._py.ex`del bridgeGroupKFold[${this.id}]`

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
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GroupKFold must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GroupKFold_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GroupKFold_get_metadata_routing = {k: v for k, v in pms_GroupKFold_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_get_metadata_routing = bridgeGroupKFold[${this.id}].get_metadata_routing(**pms_GroupKFold_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_get_metadata_routing.tolist() if hasattr(res_GroupKFold_get_metadata_routing, 'tolist') else res_GroupKFold_get_metadata_routing`
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
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GroupKFold must call init() before get_n_splits()')
    }

    // set up method params
    await this._py
      .ex`pms_GroupKFold_get_n_splits = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_GroupKFold_get_n_splits = {k: v for k, v in pms_GroupKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_get_n_splits = bridgeGroupKFold[${this.id}].get_n_splits(**pms_GroupKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_get_n_splits.tolist() if hasattr(res_GroupKFold_get_n_splits, 'tolist') else res_GroupKFold_get_n_splits`
  }

  /**
    Request metadata passed to the `split` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_split_request(opts: {
    /**
      Metadata routing for `groups` parameter in `split`.
     */
    groups?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GroupKFold must call init() before set_split_request()')
    }

    // set up method params
    await this._py
      .ex`pms_GroupKFold_set_split_request = {'groups': ${opts['groups'] ?? undefined}}

pms_GroupKFold_set_split_request = {k: v for k, v in pms_GroupKFold_set_split_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_set_split_request = bridgeGroupKFold[${this.id}].set_split_request(**pms_GroupKFold_set_split_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_set_split_request.tolist() if hasattr(res_GroupKFold_set_split_request, 'tolist') else res_GroupKFold_set_split_request`
  }

  /**
    Generate indices to split data into training and test set.
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
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GroupKFold must call init() before split()')
    }

    // set up method params
    await this._py
      .ex`pms_GroupKFold_split = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_GroupKFold_split = {k: v for k, v in pms_GroupKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_split = bridgeGroupKFold[${this.id}].split(**pms_GroupKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_split.tolist() if hasattr(res_GroupKFold_split, 'tolist') else res_GroupKFold_split`
  }
}
