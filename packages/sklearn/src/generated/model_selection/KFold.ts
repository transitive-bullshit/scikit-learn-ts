/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  K-Folds cross-validator

  Provides train/test indices to split data in train/test sets. Split dataset into k consecutive folds (without shuffling by default).

  Each fold is then used once as a validation while the k - 1 remaining folds form the training set.

  Read more in the [User Guide](../cross_validation.html#k-fold).

  For visualisation of cross-validation behaviour and comparison between common scikit-learn split methods refer to [Visualizing cross-validation behavior in scikit-learn](../../auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py)

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html)
 */
export class KFold {
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
      Whether to shuffle the data before splitting into batches. Note that the samples within each split will not be shuffled.

      @defaultValue `false`
     */
    shuffle?: boolean

    /**
      When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `KFold${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KFold instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KFold.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import KFold
try: bridgeKFold
except NameError: bridgeKFold = {}
`

    // set up constructor params
    await this._py.ex`ctor_KFold = {'n_splits': ${
      this.opts['n_splits'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_KFold = {k: v for k, v in ctor_KFold.items() if v is not None}`

    await this._py.ex`bridgeKFold[${this.id}] = KFold(**ctor_KFold)`

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

    await this._py.ex`del bridgeKFold[${this.id}]`

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
      throw new Error('This KFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KFold must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py.ex`pms_KFold_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_KFold_get_metadata_routing = {k: v for k, v in pms_KFold_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KFold_get_metadata_routing = bridgeKFold[${this.id}].get_metadata_routing(**pms_KFold_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KFold_get_metadata_routing.tolist() if hasattr(res_KFold_get_metadata_routing, 'tolist') else res_KFold_get_metadata_routing`
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
      throw new Error('This KFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KFold must call init() before get_n_splits()')
    }

    // set up method params
    await this._py.ex`pms_KFold_get_n_splits = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': ${opts['groups'] ?? undefined}}

pms_KFold_get_n_splits = {k: v for k, v in pms_KFold_get_n_splits.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KFold_get_n_splits = bridgeKFold[${this.id}].get_n_splits(**pms_KFold_get_n_splits)`

    // convert the result from python to node.js
    return this
      ._py`res_KFold_get_n_splits.tolist() if hasattr(res_KFold_get_n_splits, 'tolist') else res_KFold_get_n_splits`
  }

  /**
    Generate indices to split data into training and test set.
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
      throw new Error('This KFold instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KFold must call init() before split()')
    }

    // set up method params
    await this._py.ex`pms_KFold_split = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_KFold_split = {k: v for k, v in pms_KFold_split.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KFold_split = bridgeKFold[${this.id}].split(**pms_KFold_split)`

    // convert the result from python to node.js
    return this
      ._py`res_KFold_split.tolist() if hasattr(res_KFold_split, 'tolist') else res_KFold_split`
  }
}
