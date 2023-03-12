/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Random permutation cross-validator

  Yields indices to split data into training and test sets.

  Note: contrary to other cross-validation strategies, random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

  Read more in the [User Guide](../cross_validation.html#shufflesplit).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html
 */
export class ShuffleSplit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ShuffleSplitOptions) {
    this.id = `ShuffleSplit${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ShuffleSplit instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ShuffleSplit.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import ShuffleSplit
try: bridgeShuffleSplit
except NameError: bridgeShuffleSplit = {}
`

    // set up constructor params
    await this._py.ex`ctor_ShuffleSplit = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'test_size': ${this.opts['test_size'] ?? undefined}, 'train_size': ${
      this.opts['train_size'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_ShuffleSplit = {k: v for k, v in ctor_ShuffleSplit.items() if v is not None}`

    await this._py
      .ex`bridgeShuffleSplit[${this.id}] = ShuffleSplit(**ctor_ShuffleSplit)`

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

    await this._py.ex`del bridgeShuffleSplit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: ShuffleSplitGetNSplitsOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ShuffleSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ShuffleSplit must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_ShuffleSplit_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_ShuffleSplit_get_n_splits = {k: v for k, v in pms_ShuffleSplit_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ShuffleSplit_get_n_splits = bridgeShuffleSplit[${this.id}].get_n_splits(**pms_ShuffleSplit_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_ShuffleSplit_get_n_splits.tolist() if hasattr(res_ShuffleSplit_get_n_splits, 'tolist') else res_ShuffleSplit_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: ShuffleSplitSplitOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ShuffleSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ShuffleSplit must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_ShuffleSplit_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_ShuffleSplit_split = {k: v for k, v in pms_ShuffleSplit_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ShuffleSplit_split = bridgeShuffleSplit[${this.id}].split(**pms_ShuffleSplit_split)`

    // convert the result from python to node.js
    return this
      ._py`res_ShuffleSplit_split.tolist() if hasattr(res_ShuffleSplit_split, 'tolist') else res_ShuffleSplit_split`
  }
}

export interface ShuffleSplitOptions {
  /**
    Number of re-shuffling & splitting iterations.

    @defaultValue `10`
   */
  n_splits?: number

  /**
    If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If None, the value is set to the complement of the train size. If `train\_size` is also None, it will be set to 0.1.
   */
  test_size?: number

  /**
    If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If None, the value is automatically set to the complement of the test size.
   */
  train_size?: number

  /**
    Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface ShuffleSplitGetNSplitsOptions {
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

export interface ShuffleSplitSplitOptions {
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
