/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stratified ShuffleSplit cross-validator.

  Provides train/test indices to split data in train/test sets.

  This cross-validation object is a merge of [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") and [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit"), which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.

  Note: like the [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") strategy, stratified random splits do not guarantee that test sets across all folds will be mutually exclusive, and might include overlapping samples. However, this is still very likely for sizeable datasets.

  Read more in the [User Guide](../cross_validation.html#stratified-shuffle-split).

  For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html)
 */
export class StratifiedShuffleSplit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of re-shuffling & splitting iterations.

      @defaultValue `10`
     */
    n_splits?: number

    /**
      If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the test split. If int, represents the absolute number of test samples. If `undefined`, the value is set to the complement of the train size. If `train\_size` is also `undefined`, it will be set to 0.1.
     */
    test_size?: number

    /**
      If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to include in the train split. If int, represents the absolute number of train samples. If `undefined`, the value is automatically set to the complement of the test size.
     */
    train_size?: number

    /**
      Controls the randomness of the training and testing indices produced. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `StratifiedShuffleSplit${crypto.randomUUID().split('-')[0]}`
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
        'This StratifiedShuffleSplit instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'StratifiedShuffleSplit.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import StratifiedShuffleSplit
try: bridgeStratifiedShuffleSplit
except NameError: bridgeStratifiedShuffleSplit = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_StratifiedShuffleSplit = {'n_splits': ${this.opts['n_splits'] ?? undefined}, 'test_size': ${this.opts['test_size'] ?? undefined}, 'train_size': ${this.opts['train_size'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_StratifiedShuffleSplit = {k: v for k, v in ctor_StratifiedShuffleSplit.items() if v is not None}`

    await this._py
      .ex`bridgeStratifiedShuffleSplit[${this.id}] = StratifiedShuffleSplit(**ctor_StratifiedShuffleSplit)`

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

    await this._py.ex`del bridgeStratifiedShuffleSplit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StratifiedShuffleSplit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StratifiedShuffleSplit must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StratifiedShuffleSplit_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_StratifiedShuffleSplit_get_metadata_routing = {k: v for k, v in pms_StratifiedShuffleSplit_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedShuffleSplit_get_metadata_routing = bridgeStratifiedShuffleSplit[${this.id}].get_metadata_routing(**pms_StratifiedShuffleSplit_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedShuffleSplit_get_metadata_routing.tolist() if hasattr(res_StratifiedShuffleSplit_get_metadata_routing, 'tolist') else res_StratifiedShuffleSplit_get_metadata_routing`
  }

  /**
    Returns the number of splitting iterations in the cross-validator.
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
      throw new Error(
        'This StratifiedShuffleSplit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StratifiedShuffleSplit must call init() before get_n_splits()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StratifiedShuffleSplit_get_n_splits = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_StratifiedShuffleSplit_get_n_splits = {k: v for k, v in pms_StratifiedShuffleSplit_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedShuffleSplit_get_n_splits = bridgeStratifiedShuffleSplit[${this.id}].get_n_splits(**pms_StratifiedShuffleSplit_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedShuffleSplit_get_n_splits.tolist() if hasattr(res_StratifiedShuffleSplit_get_n_splits, 'tolist') else res_StratifiedShuffleSplit_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
   */
  async split(opts: {
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
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StratifiedShuffleSplit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StratifiedShuffleSplit must call init() before split()')
    }

    // set up method params
    await this._py
      .ex`pms_StratifiedShuffleSplit_split = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'groups': ${opts['groups'] ?? undefined}}

pms_StratifiedShuffleSplit_split = {k: v for k, v in pms_StratifiedShuffleSplit_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StratifiedShuffleSplit_split = bridgeStratifiedShuffleSplit[${this.id}].split(**pms_StratifiedShuffleSplit_split)`

    // convert the result from python to node.js
    return this
      ._py`res_StratifiedShuffleSplit_split.tolist() if hasattr(res_StratifiedShuffleSplit_split, 'tolist') else res_StratifiedShuffleSplit_split`
  }
}
