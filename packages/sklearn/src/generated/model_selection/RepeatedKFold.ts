/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Repeated K-Fold cross validator.

  Repeats K-Fold n times with different randomization in each repetition.

  Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html)
 */
export class RepeatedKFold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of folds. Must be at least 2.

      @defaultValue `5`
     */
    n_splits?: number

    /**
      Number of times cross-validator needs to be repeated.

      @defaultValue `10`
     */
    n_repeats?: number

    /**
      Controls the randomness of each repeated cross-validation instance. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `RepeatedKFold${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RepeatedKFold instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RepeatedKFold.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import RepeatedKFold
try: bridgeRepeatedKFold
except NameError: bridgeRepeatedKFold = {}
`

    // set up constructor params
    await this._py.ex`ctor_RepeatedKFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'n_repeats': ${this.opts['n_repeats'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_RepeatedKFold = {k: v for k, v in ctor_RepeatedKFold.items() if v is not None}`

    await this._py
      .ex`bridgeRepeatedKFold[${this.id}] = RepeatedKFold(**ctor_RepeatedKFold)`

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

    await this._py.ex`del bridgeRepeatedKFold[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
   */
  async get_n_splits(opts: {
    /**
      Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.
     */
    X?: any

    /**
      Always ignored, exists for compatibility. `np.zeros(n\_samples)` may be used as a placeholder.
     */
    y?: any

    /**
      Group labels for the samples used while splitting the dataset into train/test set.
     */
    groups?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RepeatedKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RepeatedKFold must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_RepeatedKFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_RepeatedKFold_get_n_splits = {k: v for k, v in pms_RepeatedKFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RepeatedKFold_get_n_splits = bridgeRepeatedKFold[${this.id}].get_n_splits(**pms_RepeatedKFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_RepeatedKFold_get_n_splits.tolist() if hasattr(res_RepeatedKFold_get_n_splits, 'tolist') else res_RepeatedKFold_get_n_splits`
  }

  /**
    Generates indices to split data into training and test set.
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
      throw new Error('This RepeatedKFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RepeatedKFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_RepeatedKFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_RepeatedKFold_split = {k: v for k, v in pms_RepeatedKFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RepeatedKFold_split = bridgeRepeatedKFold[${this.id}].split(**pms_RepeatedKFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_RepeatedKFold_split.tolist() if hasattr(res_RepeatedKFold_split, 'tolist') else res_RepeatedKFold_split`
  }
}
