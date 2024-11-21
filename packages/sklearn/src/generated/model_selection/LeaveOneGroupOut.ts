/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Leave One Group Out cross-validator.

  Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided as an array of integers that encodes the group of each sample.

  For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

  Read more in the [User Guide](../cross_validation.html#leave-one-group-out).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html)
 */
export class LeaveOneGroupOut {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }) {
    this.id = `LeaveOneGroupOut${crypto.randomUUID().split('-')[0]}`
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
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LeaveOneGroupOut.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import LeaveOneGroupOut
try: bridgeLeaveOneGroupOut
except NameError: bridgeLeaveOneGroupOut = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LeaveOneGroupOut = {'routing': ${this.opts['routing'] ?? undefined}}

ctor_LeaveOneGroupOut = {k: v for k, v in ctor_LeaveOneGroupOut.items() if v is not None}`

    await this._py
      .ex`bridgeLeaveOneGroupOut[${this.id}] = LeaveOneGroupOut(**ctor_LeaveOneGroupOut)`

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

    await this._py.ex`del bridgeLeaveOneGroupOut[${this.id}]`

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
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LeaveOneGroupOut must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LeaveOneGroupOut_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LeaveOneGroupOut_get_metadata_routing = {k: v for k, v in pms_LeaveOneGroupOut_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_get_metadata_routing = bridgeLeaveOneGroupOut[${this.id}].get_metadata_routing(**pms_LeaveOneGroupOut_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_get_metadata_routing.tolist() if hasattr(res_LeaveOneGroupOut_get_metadata_routing, 'tolist') else res_LeaveOneGroupOut_get_metadata_routing`
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
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneGroupOut must call init() before get_n_splits()')
    }

    // set up method params
    await this._py
      .ex`pms_LeaveOneGroupOut_get_n_splits = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_LeaveOneGroupOut_get_n_splits = {k: v for k, v in pms_LeaveOneGroupOut_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_get_n_splits = bridgeLeaveOneGroupOut[${this.id}].get_n_splits(**pms_LeaveOneGroupOut_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_get_n_splits.tolist() if hasattr(res_LeaveOneGroupOut_get_n_splits, 'tolist') else res_LeaveOneGroupOut_get_n_splits`
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
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LeaveOneGroupOut must call init() before set_split_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LeaveOneGroupOut_set_split_request = {'groups': ${opts['groups'] ?? undefined}}

pms_LeaveOneGroupOut_set_split_request = {k: v for k, v in pms_LeaveOneGroupOut_set_split_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_set_split_request = bridgeLeaveOneGroupOut[${this.id}].set_split_request(**pms_LeaveOneGroupOut_set_split_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_set_split_request.tolist() if hasattr(res_LeaveOneGroupOut_set_split_request, 'tolist') else res_LeaveOneGroupOut_set_split_request`
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
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneGroupOut must call init() before split()')
    }

    // set up method params
    await this._py
      .ex`pms_LeaveOneGroupOut_split = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${opts['groups'] !== undefined} else None}

pms_LeaveOneGroupOut_split = {k: v for k, v in pms_LeaveOneGroupOut_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_split = bridgeLeaveOneGroupOut[${this.id}].split(**pms_LeaveOneGroupOut_split)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_split.tolist() if hasattr(res_LeaveOneGroupOut_split, 'tolist') else res_LeaveOneGroupOut_split`
  }
}
