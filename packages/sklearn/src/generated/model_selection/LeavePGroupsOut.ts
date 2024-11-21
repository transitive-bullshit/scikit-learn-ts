/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Leave P Group(s) Out cross-validator.

  Provides train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

  For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

  The difference between LeavePGroupsOut and LeaveOneGroupOut is that the former builds the test sets with all the samples assigned to `p` different values of the groups while the latter uses samples all assigned the same groups.

  Read more in the [User Guide](../cross_validation.html#leave-p-groups-out).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePGroupsOut.html)
 */
export class LeavePGroupsOut {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of groups (`p`) to leave out in the test split.
     */
    n_groups?: number
  }) {
    this.id = `LeavePGroupsOut${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LeavePGroupsOut instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LeavePGroupsOut.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import LeavePGroupsOut
try: bridgeLeavePGroupsOut
except NameError: bridgeLeavePGroupsOut = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LeavePGroupsOut = {'n_groups': ${this.opts['n_groups'] ?? undefined}}

ctor_LeavePGroupsOut = {k: v for k, v in ctor_LeavePGroupsOut.items() if v is not None}`

    await this._py
      .ex`bridgeLeavePGroupsOut[${this.id}] = LeavePGroupsOut(**ctor_LeavePGroupsOut)`

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

    await this._py.ex`del bridgeLeavePGroupsOut[${this.id}]`

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
      throw new Error('This LeavePGroupsOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LeavePGroupsOut must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LeavePGroupsOut_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LeavePGroupsOut_get_metadata_routing = {k: v for k, v in pms_LeavePGroupsOut_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePGroupsOut_get_metadata_routing = bridgeLeavePGroupsOut[${this.id}].get_metadata_routing(**pms_LeavePGroupsOut_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePGroupsOut_get_metadata_routing.tolist() if hasattr(res_LeavePGroupsOut_get_metadata_routing, 'tolist') else res_LeavePGroupsOut_get_metadata_routing`
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
      Group labels for the samples used while splitting the dataset into train/test set. This ‘groups’ parameter must always be specified to calculate the number of splits, though the other parameters can be omitted.
     */
    groups?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LeavePGroupsOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeavePGroupsOut must call init() before get_n_splits()')
    }

    // set up method params
    await this._py
      .ex`pms_LeavePGroupsOut_get_n_splits = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_LeavePGroupsOut_get_n_splits = {k: v for k, v in pms_LeavePGroupsOut_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePGroupsOut_get_n_splits = bridgeLeavePGroupsOut[${this.id}].get_n_splits(**pms_LeavePGroupsOut_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePGroupsOut_get_n_splits.tolist() if hasattr(res_LeavePGroupsOut_get_n_splits, 'tolist') else res_LeavePGroupsOut_get_n_splits`
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
      throw new Error('This LeavePGroupsOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LeavePGroupsOut must call init() before set_split_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LeavePGroupsOut_set_split_request = {'groups': ${opts['groups'] ?? undefined}}

pms_LeavePGroupsOut_set_split_request = {k: v for k, v in pms_LeavePGroupsOut_set_split_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePGroupsOut_set_split_request = bridgeLeavePGroupsOut[${this.id}].set_split_request(**pms_LeavePGroupsOut_set_split_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePGroupsOut_set_split_request.tolist() if hasattr(res_LeavePGroupsOut_set_split_request, 'tolist') else res_LeavePGroupsOut_set_split_request`
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
      throw new Error('This LeavePGroupsOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeavePGroupsOut must call init() before split()')
    }

    // set up method params
    await this._py
      .ex`pms_LeavePGroupsOut_split = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_LeavePGroupsOut_split = {k: v for k, v in pms_LeavePGroupsOut_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePGroupsOut_split = bridgeLeavePGroupsOut[${this.id}].split(**pms_LeavePGroupsOut_split)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePGroupsOut_split.tolist() if hasattr(res_LeavePGroupsOut_split, 'tolist') else res_LeavePGroupsOut_split`
  }
}
