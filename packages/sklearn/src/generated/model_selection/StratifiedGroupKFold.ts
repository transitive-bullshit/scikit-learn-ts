/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stratified K-Folds iterator variant with non-overlapping groups.

  This cross-validation object is a variation of StratifiedKFold attempts to return stratified folds with non-overlapping groups. The folds are made by preserving the percentage of samples for each class.

  Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

  The difference between [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold") and [`StratifiedGroupKFold`](#sklearn.model_selection.StratifiedGroupKFold "sklearn.model_selection.StratifiedGroupKFold") is that the former attempts to create balanced folds such that the number of distinct groups is approximately the same in each fold, whereas StratifiedGroupKFold attempts to create folds which preserve the percentage of samples for each class as much as possible given the constraint of non-overlapping groups between splits.

  Read more in the [User Guide](../cross_validation.html#cross-validation).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedGroupKFold.html
 */
export class StratifiedGroupKFold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: StratifiedGroupKFoldOptions) {
    this.id = `StratifiedGroupKFold${crypto.randomUUID().split('-')[0]}`
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
        'This StratifiedGroupKFold instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'StratifiedGroupKFold.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import StratifiedGroupKFold
try: bridgeStratifiedGroupKFold
except NameError: bridgeStratifiedGroupKFold = {}
`

    // set up constructor params
    await this._py.ex`ctor_StratifiedGroupKFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_StratifiedGroupKFold = {k: v for k, v in ctor_StratifiedGroupKFold.items() if v is not None}`

    await this._py
      .ex`bridgeStratifiedGroupKFold[${this.id}] = StratifiedGroupKFold(**ctor_StratifiedGroupKFold)`

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

    await this._py.ex`del bridgeStratifiedGroupKFold[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(
    opts: StratifiedGroupKFoldGetNSplitsOptions
  ): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This StratifiedGroupKFold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StratifiedGroupKFold must call init() before get_n_splits()'
      )
    }

    // set up method params
    await this._py.ex`pms_StratifiedGroupKFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_StratifiedGroupKFold_get_n_splits = {k: v for k, v in pms_StratifiedGroupKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedGroupKFold_get_n_splits = bridgeStratifiedGroupKFold[${this.id}].get_n_splits(**pms_StratifiedGroupKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedGroupKFold_get_n_splits.tolist() if hasattr(res_StratifiedGroupKFold_get_n_splits, 'tolist') else res_StratifiedGroupKFold_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: StratifiedGroupKFoldSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StratifiedGroupKFold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StratifiedGroupKFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_StratifiedGroupKFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_StratifiedGroupKFold_split = {k: v for k, v in pms_StratifiedGroupKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedGroupKFold_split = bridgeStratifiedGroupKFold[${this.id}].split(**pms_StratifiedGroupKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedGroupKFold_split.tolist() if hasattr(res_StratifiedGroupKFold_split, 'tolist') else res_StratifiedGroupKFold_split`
  }
}

export interface StratifiedGroupKFoldOptions {
  /**
    Number of folds. Must be at least 2.

    @defaultValue `5`
   */
  n_splits?: number

  /**
    Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled. This implementation can only shuffle groups that have approximately the same y distribution, no global shuffle will be performed.

    @defaultValue `false`
   */
  shuffle?: boolean

  /**
    When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface StratifiedGroupKFoldGetNSplitsOptions {
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

export interface StratifiedGroupKFoldSplitOptions {
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
