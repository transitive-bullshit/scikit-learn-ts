/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Leave-One-Out cross-validator

  Provides train/test indices to split data in train/test sets. Each sample is used once as a test set (singleton) while the remaining samples form the training set.

  Note: `LeaveOneOut()` is equivalent to `KFold(n\_splits=n)` and `LeavePOut(p=1)` where `n` is the number of samples.

  Due to the high number of test sets (which is the same as the number of samples) this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") or [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold").

  Read more in the [User Guide](../cross_validation.html#leave-one-out).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneOut.html
 */
export class LeaveOneOut {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LeaveOneOutOptions) {
    this.id = `LeaveOneOut${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LeaveOneOut instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LeaveOneOut.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import LeaveOneOut
try: bridgeLeaveOneOut
except NameError: bridgeLeaveOneOut = {}
`

    // set up constructor params
    await this._py.ex`ctor_LeaveOneOut = {'X': np.array(${
      this.opts['X'] ?? undefined
    }) if ${this.opts['X'] !== undefined} else None, 'y': ${
      this.opts['y'] ?? undefined
    }, 'groups': ${this.opts['groups'] ?? undefined}}

ctor_LeaveOneOut = {k: v for k, v in ctor_LeaveOneOut.items() if v is not None}`

    await this._py
      .ex`bridgeLeaveOneOut[${this.id}] = LeaveOneOut(**ctor_LeaveOneOut)`

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

    await this._py.ex`del bridgeLeaveOneOut[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: LeaveOneOutGetNSplitsOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LeaveOneOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneOut must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_LeaveOneOut_get_n_splits = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'groups': ${opts['groups'] ?? undefined}}

pms_LeaveOneOut_get_n_splits = {k: v for k, v in pms_LeaveOneOut_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneOut_get_n_splits = bridgeLeaveOneOut[${this.id}].get_n_splits(**pms_LeaveOneOut_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneOut_get_n_splits.tolist() if hasattr(res_LeaveOneOut_get_n_splits, 'tolist') else res_LeaveOneOut_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: LeaveOneOutSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LeaveOneOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneOut must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_LeaveOneOut_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_LeaveOneOut_split = {k: v for k, v in pms_LeaveOneOut_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeaveOneOut_split = bridgeLeaveOneOut[${this.id}].split(**pms_LeaveOneOut_split)`

    // convert the result from python to node.js
    return this
      ._py`res_LeaveOneOut_split.tolist() if hasattr(res_LeaveOneOut_split, 'tolist') else res_LeaveOneOut_split`
  }

  /**
    Returns the number of splitting iterations in the cross-validator.
   */
  get n_splits(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LeaveOneOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeaveOneOut must call init() before accessing n_splits')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LeaveOneOut_n_splits = bridgeLeaveOneOut[${this.id}].n_splits`

      // convert the result from python to node.js
      return this
        ._py`attr_LeaveOneOut_n_splits.tolist() if hasattr(attr_LeaveOneOut_n_splits, 'tolist') else attr_LeaveOneOut_n_splits`
    })()
  }
}

export interface LeaveOneOutOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike[]

  /**
    Always ignored, exists for compatibility.
   */
  y?: any

  /**
    Always ignored, exists for compatibility.
   */
  groups?: any
}

export interface LeaveOneOutGetNSplitsOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike[]

  /**
    Always ignored, exists for compatibility.
   */
  y?: any

  /**
    Always ignored, exists for compatibility.
   */
  groups?: any
}

export interface LeaveOneOutSplitOptions {
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
}
