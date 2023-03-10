/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  K-fold iterator variant with non-overlapping groups.

  Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

  The folds are approximately balanced in the sense that the number of distinct groups is approximately the same in each fold.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html
 */
export class GroupKFold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GroupKFoldOptions) {
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
    await this._py.ex`ctor_GroupKFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }}

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
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: GroupKFoldGetNSplitsOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GroupKFold must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_GroupKFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_GroupKFold_get_n_splits = {k: v for k, v in pms_GroupKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_get_n_splits = bridgeGroupKFold[${this.id}].get_n_splits(**pms_GroupKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_get_n_splits.tolist() if hasattr(res_GroupKFold_get_n_splits, 'tolist') else res_GroupKFold_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: GroupKFoldSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GroupKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GroupKFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_GroupKFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_GroupKFold_split = {k: v for k, v in pms_GroupKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupKFold_split = bridgeGroupKFold[${this.id}].split(**pms_GroupKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupKFold_split.tolist() if hasattr(res_GroupKFold_split, 'tolist') else res_GroupKFold_split`
  }
}

export interface GroupKFoldOptions {
  /**
    Number of folds. Must be at least 2.

    @defaultValue `5`
   */
  n_splits?: number
}

export interface GroupKFoldGetNSplitsOptions {
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
}

export interface GroupKFoldSplitOptions {
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