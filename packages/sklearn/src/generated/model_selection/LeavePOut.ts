/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Leave-P-Out cross-validator

  Provides train/test indices to split data in train/test sets. This results in testing on all distinct samples of size p, while the remaining n - p samples form the training set in each iteration.

  Note: `LeavePOut(p)` is NOT equivalent to `KFold(n\_splits=n\_samples // p)` which creates non-overlapping test sets.

  Due to the high number of iterations which grows combinatorically with the number of samples this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") or [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit").

  Read more in the [User Guide](../cross_validation.html#leave-p-out).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePOut.html
 */
export class LeavePOut {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LeavePOutOptions) {
    this.id = `LeavePOut${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LeavePOut instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LeavePOut.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import LeavePOut
try: bridgeLeavePOut
except NameError: bridgeLeavePOut = {}
`

    // set up constructor params
    await this._py.ex`ctor_LeavePOut = {'p': ${this.opts['p'] ?? undefined}}

ctor_LeavePOut = {k: v for k, v in ctor_LeavePOut.items() if v is not None}`

    await this._py.ex`bridgeLeavePOut[${this.id}] = LeavePOut(**ctor_LeavePOut)`

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

    await this._py.ex`del bridgeLeavePOut[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: LeavePOutGetNSplitsOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LeavePOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeavePOut must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_LeavePOut_get_n_splits = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'groups': ${opts['groups'] ?? undefined}}

pms_LeavePOut_get_n_splits = {k: v for k, v in pms_LeavePOut_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePOut_get_n_splits = bridgeLeavePOut[${this.id}].get_n_splits(**pms_LeavePOut_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePOut_get_n_splits.tolist() if hasattr(res_LeavePOut_get_n_splits, 'tolist') else res_LeavePOut_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: LeavePOutSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LeavePOut instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LeavePOut must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_LeavePOut_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_LeavePOut_split = {k: v for k, v in pms_LeavePOut_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LeavePOut_split = bridgeLeavePOut[${this.id}].split(**pms_LeavePOut_split)`

    // convert the result from python to node.js
    return this
      ._py`res_LeavePOut_split.tolist() if hasattr(res_LeavePOut_split, 'tolist') else res_LeavePOut_split`
  }
}

export interface LeavePOutOptions {
  /**
    Size of the test sets. Must be strictly less than the number of samples.
   */
  p?: number
}

export interface LeavePOutGetNSplitsOptions {
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

export interface LeavePOutSplitOptions {
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
