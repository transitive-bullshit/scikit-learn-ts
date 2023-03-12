/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Shuffle-Group(s)-Out cross-validation iterator

  Provides randomized train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

  For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

  The difference between LeavePGroupsOut and GroupShuffleSplit is that the former generates splits using all subsets of size `p` unique groups, whereas GroupShuffleSplit generates a user-determined number of random test splits, each with a user-determined fraction of unique groups.

  For example, a less computationally intensive alternative to `LeavePGroupsOut(p=10)` would be `GroupShuffleSplit(test\_size=10, n\_splits=100)`.

  Note: The parameters `test\_size` and `train\_size` refer to groups, and not to samples, as in ShuffleSplit.

  Read more in the [User Guide](../cross_validation.html#group-shuffle-split).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupShuffleSplit.html
 */
export class GroupShuffleSplit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GroupShuffleSplitOptions) {
    this.id = `GroupShuffleSplit${crypto.randomUUID().split('-')[0]}`
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
        'This GroupShuffleSplit instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GroupShuffleSplit.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import GroupShuffleSplit
try: bridgeGroupShuffleSplit
except NameError: bridgeGroupShuffleSplit = {}
`

    // set up constructor params
    await this._py.ex`ctor_GroupShuffleSplit = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'test_size': ${this.opts['test_size'] ?? undefined}, 'train_size': ${
      this.opts['train_size'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_GroupShuffleSplit = {k: v for k, v in ctor_GroupShuffleSplit.items() if v is not None}`

    await this._py
      .ex`bridgeGroupShuffleSplit[${this.id}] = GroupShuffleSplit(**ctor_GroupShuffleSplit)`

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

    await this._py.ex`del bridgeGroupShuffleSplit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(
    opts: GroupShuffleSplitGetNSplitsOptions
  ): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GroupShuffleSplit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GroupShuffleSplit must call init() before get_n_splits()'
      )
    }

    // set up method params
    await this._py.ex`pms_GroupShuffleSplit_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_GroupShuffleSplit_get_n_splits = {k: v for k, v in pms_GroupShuffleSplit_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupShuffleSplit_get_n_splits = bridgeGroupShuffleSplit[${this.id}].get_n_splits(**pms_GroupShuffleSplit_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupShuffleSplit_get_n_splits.tolist() if hasattr(res_GroupShuffleSplit_get_n_splits, 'tolist') else res_GroupShuffleSplit_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: GroupShuffleSplitSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GroupShuffleSplit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GroupShuffleSplit must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_GroupShuffleSplit_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_GroupShuffleSplit_split = {k: v for k, v in pms_GroupShuffleSplit_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GroupShuffleSplit_split = bridgeGroupShuffleSplit[${this.id}].split(**pms_GroupShuffleSplit_split)`

    // convert the result from python to node.js
    return this
      ._py`res_GroupShuffleSplit_split.tolist() if hasattr(res_GroupShuffleSplit_split, 'tolist') else res_GroupShuffleSplit_split`
  }
}

export interface GroupShuffleSplitOptions {
  /**
    Number of re-shuffling & splitting iterations.

    @defaultValue `5`
   */
  n_splits?: number

  /**
    If float, should be between 0.0 and 1.0 and represent the proportion of groups to include in the test split (rounded up). If int, represents the absolute number of test groups. If None, the value is set to the complement of the train size. The default will change in version 0.21. It will remain 0.2 only if `train\_size` is unspecified, otherwise it will complement the specified `train\_size`.

    @defaultValue `0.2`
   */
  test_size?: number

  /**
    If float, should be between 0.0 and 1.0 and represent the proportion of the groups to include in the train split. If int, represents the absolute number of train groups. If None, the value is automatically set to the complement of the test size.
   */
  train_size?: number

  /**
    Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface GroupShuffleSplitGetNSplitsOptions {
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

export interface GroupShuffleSplitSplitOptions {
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
