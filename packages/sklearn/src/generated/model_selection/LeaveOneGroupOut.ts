/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Leave One Group Out cross-validator

  Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided an array integers that encodes the group of each sample.

  For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html
 */
export class LeaveOneGroupOut {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LeaveOneGroupOutOptions) {
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
    await this._py.ex`ctor_LeaveOneGroupOut = {'X': ${
      this.opts['X'] ?? undefined
    }, 'y': ${this.opts['y'] ?? undefined}, 'groups': np.array(${
      this.opts['groups'] ?? undefined
    }) if ${this.opts['groups'] !== undefined} else None}

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
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: LeaveOneGroupOutGetNSplitsOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneGroupOut must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_LeaveOneGroupOut_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_LeaveOneGroupOut_get_n_splits = {k: v for k, v in pms_LeaveOneGroupOut_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_get_n_splits = bridgeLeaveOneGroupOut[${this.id}].get_n_splits(**pms_LeaveOneGroupOut_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_get_n_splits.tolist() if hasattr(res_LeaveOneGroupOut_get_n_splits, 'tolist') else res_LeaveOneGroupOut_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: LeaveOneGroupOutSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneGroupOut must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_LeaveOneGroupOut_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_LeaveOneGroupOut_split = {k: v for k, v in pms_LeaveOneGroupOut_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneGroupOut_split = bridgeLeaveOneGroupOut[${this.id}].split(**pms_LeaveOneGroupOut_split)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneGroupOut_split.tolist() if hasattr(res_LeaveOneGroupOut_split, 'tolist') else res_LeaveOneGroupOut_split`
  }

  /**
    Returns the number of splitting iterations in the cross-validator.
   */
  get n_splits(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LeaveOneGroupOut instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LeaveOneGroupOut must call init() before accessing n_splits'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LeaveOneGroupOut_n_splits = bridgeLeaveOneGroupOut[${this.id}].n_splits`

      // convert the result from python to node.js
      return this
        ._py`attr_LeaveOneGroupOut_n_splits.tolist() if hasattr(attr_LeaveOneGroupOut_n_splits, 'tolist') else attr_LeaveOneGroupOut_n_splits`
    })()
  }
}

export interface LeaveOneGroupOutOptions {
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
}

export interface LeaveOneGroupOutGetNSplitsOptions {
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
}

export interface LeaveOneGroupOutSplitOptions {
  /**
    Training data, where n_samples is the number of samples and n_features is the number of features.
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
}
