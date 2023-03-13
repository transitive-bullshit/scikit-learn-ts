/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Predefined split cross-validator

  Provides train/test indices to split data into train/test sets using a predefined scheme specified by the user with the `test\_fold` parameter.

  Read more in the [User Guide](../cross_validation.html#predefined-split).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.PredefinedSplit.html)
 */
export class PredefinedSplit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The entry `test\_fold\[i\]` represents the index of the test set that sample `i` belongs to. It is possible to exclude sample `i` from any test set (i.e. include sample `i` in every training set) by setting `test\_fold\[i\]` equal to -1.
     */
    test_fold?: ArrayLike
  }) {
    this.id = `PredefinedSplit${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PredefinedSplit instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PredefinedSplit.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import PredefinedSplit
try: bridgePredefinedSplit
except NameError: bridgePredefinedSplit = {}
`

    // set up constructor params
    await this._py.ex`ctor_PredefinedSplit = {'test_fold': np.array(${
      this.opts['test_fold'] ?? undefined
    }) if ${this.opts['test_fold'] !== undefined} else None}

ctor_PredefinedSplit = {k: v for k, v in ctor_PredefinedSplit.items() if v is not None}`

    await this._py
      .ex`bridgePredefinedSplit[${this.id}] = PredefinedSplit(**ctor_PredefinedSplit)`

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

    await this._py.ex`del bridgePredefinedSplit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Returns the number of splitting iterations in the cross-validator
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
      Always ignored, exists for compatibility.
     */
    groups?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PredefinedSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PredefinedSplit must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_PredefinedSplit_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_PredefinedSplit_get_n_splits = {k: v for k, v in pms_PredefinedSplit_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PredefinedSplit_get_n_splits = bridgePredefinedSplit[${this.id}].get_n_splits(**pms_PredefinedSplit_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_PredefinedSplit_get_n_splits.tolist() if hasattr(res_PredefinedSplit_get_n_splits, 'tolist') else res_PredefinedSplit_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: {
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
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PredefinedSplit instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PredefinedSplit must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_PredefinedSplit_split = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_PredefinedSplit_split = {k: v for k, v in pms_PredefinedSplit_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PredefinedSplit_split = bridgePredefinedSplit[${this.id}].split(**pms_PredefinedSplit_split)`

    // convert the result from python to node.js
    return this
      ._py`res_PredefinedSplit_split.tolist() if hasattr(res_PredefinedSplit_split, 'tolist') else res_PredefinedSplit_split`
  }
}
