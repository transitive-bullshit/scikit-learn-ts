/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stratified K-Folds cross-validator.

  Provides train/test indices to split data in train/test sets.

  This cross-validation object is a variation of KFold that returns stratified folds. The folds are made by preserving the percentage of samples for each class.

  Read more in the [User Guide](../cross_validation.html#stratified-k-fold).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html)
 */
export class StratifiedKFold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: StratifiedKFoldOptions) {
    this.id = `StratifiedKFold${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This StratifiedKFold instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('StratifiedKFold.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import StratifiedKFold
try: bridgeStratifiedKFold
except NameError: bridgeStratifiedKFold = {}
`

    // set up constructor params
    await this._py.ex`ctor_StratifiedKFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_StratifiedKFold = {k: v for k, v in ctor_StratifiedKFold.items() if v is not None}`

    await this._py
      .ex`bridgeStratifiedKFold[${this.id}] = StratifiedKFold(**ctor_StratifiedKFold)`

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

    await this._py.ex`del bridgeStratifiedKFold[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: StratifiedKFoldGetNSplitsOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This StratifiedKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StratifiedKFold must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_StratifiedKFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_StratifiedKFold_get_n_splits = {k: v for k, v in pms_StratifiedKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedKFold_get_n_splits = bridgeStratifiedKFold[${this.id}].get_n_splits(**pms_StratifiedKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedKFold_get_n_splits.tolist() if hasattr(res_StratifiedKFold_get_n_splits, 'tolist') else res_StratifiedKFold_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: StratifiedKFoldSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This StratifiedKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StratifiedKFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_StratifiedKFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': ${
      opts['groups'] ?? undefined
    }}

pms_StratifiedKFold_split = {k: v for k, v in pms_StratifiedKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedKFold_split = bridgeStratifiedKFold[${this.id}].split(**pms_StratifiedKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedKFold_split.tolist() if hasattr(res_StratifiedKFold_split, 'tolist') else res_StratifiedKFold_split`
  }
}

export interface StratifiedKFoldOptions {
  /**
    Number of folds. Must be at least 2.

    @defaultValue `5`
   */
  n_splits?: number

  /**
    Whether to shuffle each class’s samples before splitting into batches. Note that the samples within each split will not be shuffled.

    @defaultValue `false`
   */
  shuffle?: boolean

  /**
    When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold for each class. Otherwise, leave `random\_state` as `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface StratifiedKFoldGetNSplitsOptions {
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

export interface StratifiedKFoldSplitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

    Note that providing `y` is sufficient to generate the splits and hence `np.zeros(n\_samples)` may be used as a placeholder for `X` instead of actual training data.
   */
  X?: ArrayLike[]

  /**
    The target variable for supervised learning problems. Stratification is done based on the y labels.
   */
  y?: ArrayLike

  /**
    Always ignored, exists for compatibility.
   */
  groups?: any
}
