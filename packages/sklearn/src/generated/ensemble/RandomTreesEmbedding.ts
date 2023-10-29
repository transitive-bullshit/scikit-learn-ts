/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An ensemble of totally random trees.

  An unsupervised transformation of a dataset to a high-dimensional sparse representation. A datapoint is coded according to which leaf of each tree it is sorted into. Using a one-hot encoding of the leaves, this leads to a binary coding with as many ones as there are trees in the forest.

  The dimensionality of the resulting representation is `n\_out <= n\_estimators \* max\_leaf\_nodes`. If `max\_leaf\_nodes \== None`, the number of leaf nodes is at most `n\_estimators \* 2 \*\* max\_depth`.

  Read more in the [User Guide](../ensemble.html#random-trees-embedding).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomTreesEmbedding.html)
 */
export class RandomTreesEmbedding {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of trees in the forest.

      @defaultValue `100`
     */
    n_estimators?: number

    /**
      The maximum depth of each tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.

      @defaultValue `5`
     */
    max_depth?: number

    /**
      The minimum number of samples required to split an internal node:

      @defaultValue `2`
     */
    min_samples_split?: number

    /**
      The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min\_samples\_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

      @defaultValue `1`
     */
    min_samples_leaf?: number

    /**
      The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided.

      @defaultValue `0`
     */
    min_weight_fraction_leaf?: number

    /**
      Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.
     */
    max_leaf_nodes?: number

    /**
      A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

      The weighted impurity decrease equation is the following:

      @defaultValue `0`
     */
    min_impurity_decrease?: number

    /**
      Whether or not to return a sparse CSR matrix, as default behavior, or to return a dense array compatible with dense pipeline operators.

      @defaultValue `true`
     */
    sparse_output?: boolean

    /**
      The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit"), [`transform`](#sklearn.ensemble.RandomTreesEmbedding.transform "sklearn.ensemble.RandomTreesEmbedding.transform"), [`decision\_path`](#sklearn.ensemble.RandomTreesEmbedding.decision_path "sklearn.ensemble.RandomTreesEmbedding.decision_path") and [`apply`](#sklearn.ensemble.RandomTreesEmbedding.apply "sklearn.ensemble.RandomTreesEmbedding.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Controls the generation of the random `y` used to fit the trees and the draw of the splits for each feature at the trees’ nodes. See [Glossary](../../glossary.html#term-random_state) for details.
     */
    random_state?: number

    /**
      Controls the verbosity when fitting and predicting.

      @defaultValue `0`
     */
    verbose?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [Glossary](../../glossary.html#term-warm_start) and [Fitting additional weak-learners](../ensemble.html#gradient-boosting-warm-start) for details.

      @defaultValue `false`
     */
    warm_start?: boolean
  }) {
    this.id = `RandomTreesEmbedding${crypto.randomUUID().split('-')[0]}`
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
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RandomTreesEmbedding.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import RandomTreesEmbedding
try: bridgeRandomTreesEmbedding
except NameError: bridgeRandomTreesEmbedding = {}
`

    // set up constructor params
    await this._py.ex`ctor_RandomTreesEmbedding = {'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'max_depth': ${
      this.opts['max_depth'] ?? undefined
    }, 'min_samples_split': ${
      this.opts['min_samples_split'] ?? undefined
    }, 'min_samples_leaf': ${
      this.opts['min_samples_leaf'] ?? undefined
    }, 'min_weight_fraction_leaf': ${
      this.opts['min_weight_fraction_leaf'] ?? undefined
    }, 'max_leaf_nodes': ${
      this.opts['max_leaf_nodes'] ?? undefined
    }, 'min_impurity_decrease': ${
      this.opts['min_impurity_decrease'] ?? undefined
    }, 'sparse_output': ${this.opts['sparse_output'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}}

ctor_RandomTreesEmbedding = {k: v for k, v in ctor_RandomTreesEmbedding.items() if v is not None}`

    await this._py
      .ex`bridgeRandomTreesEmbedding[${this.id}] = RandomTreesEmbedding(**ctor_RandomTreesEmbedding)`

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

    await this._py.ex`del bridgeRandomTreesEmbedding[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply trees in the forest to X, return leaf indices.
   */
  async apply(opts: {
    /**
      The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomTreesEmbedding must call init() before apply()')
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_apply = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomTreesEmbedding_apply = {k: v for k, v in pms_RandomTreesEmbedding_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_apply = bridgeRandomTreesEmbedding[${this.id}].apply(**pms_RandomTreesEmbedding_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_apply.tolist() if hasattr(res_RandomTreesEmbedding_apply, 'tolist') else res_RandomTreesEmbedding_apply`
  }

  /**
    Return the decision path in the forest.
   */
  async decision_path(opts: {
    /**
      The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_decision_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomTreesEmbedding_decision_path = {k: v for k, v in pms_RandomTreesEmbedding_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_decision_path = bridgeRandomTreesEmbedding[${this.id}].decision_path(**pms_RandomTreesEmbedding_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_decision_path.tolist() if hasattr(res_RandomTreesEmbedding_decision_path, 'tolist') else res_RandomTreesEmbedding_decision_path`
  }

  /**
    Fit estimator.
   */
  async fit(opts: {
    /**
      The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomTreesEmbedding must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_RandomTreesEmbedding_fit = {k: v for k, v in pms_RandomTreesEmbedding_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_fit = bridgeRandomTreesEmbedding[${this.id}].fit(**pms_RandomTreesEmbedding_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_fit.tolist() if hasattr(res_RandomTreesEmbedding_fit, 'tolist') else res_RandomTreesEmbedding_fit`
  }

  /**
    Fit estimator and transform dataset.
   */
  async fit_transform(opts: {
    /**
      Input data used to build forests. Use `dtype=np.float32` for maximum efficiency.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.
     */
    sample_weight?: ArrayLike
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_RandomTreesEmbedding_fit_transform = {k: v for k, v in pms_RandomTreesEmbedding_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_fit_transform = bridgeRandomTreesEmbedding[${this.id}].fit_transform(**pms_RandomTreesEmbedding_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_fit_transform.tolist() if hasattr(res_RandomTreesEmbedding_fit_transform, 'tolist') else res_RandomTreesEmbedding_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.ensemble.RandomTreesEmbedding.fit "sklearn.ensemble.RandomTreesEmbedding.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomTreesEmbedding_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_RandomTreesEmbedding_get_feature_names_out = {k: v for k, v in pms_RandomTreesEmbedding_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_get_feature_names_out = bridgeRandomTreesEmbedding[${this.id}].get_feature_names_out(**pms_RandomTreesEmbedding_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_get_feature_names_out.tolist() if hasattr(res_RandomTreesEmbedding_get_feature_names_out, 'tolist') else res_RandomTreesEmbedding_get_feature_names_out`
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
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomTreesEmbedding_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_RandomTreesEmbedding_get_metadata_routing = {k: v for k, v in pms_RandomTreesEmbedding_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_get_metadata_routing = bridgeRandomTreesEmbedding[${this.id}].get_metadata_routing(**pms_RandomTreesEmbedding_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_get_metadata_routing.tolist() if hasattr(res_RandomTreesEmbedding_get_metadata_routing, 'tolist') else res_RandomTreesEmbedding_get_metadata_routing`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomTreesEmbedding_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_RandomTreesEmbedding_set_fit_request = {k: v for k, v in pms_RandomTreesEmbedding_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_set_fit_request = bridgeRandomTreesEmbedding[${this.id}].set_fit_request(**pms_RandomTreesEmbedding_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_set_fit_request.tolist() if hasattr(res_RandomTreesEmbedding_set_fit_request, 'tolist') else res_RandomTreesEmbedding_set_fit_request`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_RandomTreesEmbedding_set_output = {k: v for k, v in pms_RandomTreesEmbedding_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_set_output = bridgeRandomTreesEmbedding[${this.id}].set_output(**pms_RandomTreesEmbedding_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_set_output.tolist() if hasattr(res_RandomTreesEmbedding_set_output, 'tolist') else res_RandomTreesEmbedding_set_output`
  }

  /**
    Transform dataset.
   */
  async transform(opts: {
    /**
      Input data to be transformed. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csr\_matrix` for maximum efficiency.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomTreesEmbedding_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomTreesEmbedding_transform = {k: v for k, v in pms_RandomTreesEmbedding_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomTreesEmbedding_transform = bridgeRandomTreesEmbedding[${this.id}].transform(**pms_RandomTreesEmbedding_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomTreesEmbedding_transform.tolist() if hasattr(res_RandomTreesEmbedding_transform, 'tolist') else res_RandomTreesEmbedding_transform`
  }

  /**
    The child estimator template used to create the collection of fitted sub-estimators.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_estimator_ = bridgeRandomTreesEmbedding[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_estimator_.tolist() if hasattr(attr_RandomTreesEmbedding_estimator_, 'tolist') else attr_RandomTreesEmbedding_estimator_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_estimators_ = bridgeRandomTreesEmbedding[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_estimators_.tolist() if hasattr(attr_RandomTreesEmbedding_estimators_, 'tolist') else attr_RandomTreesEmbedding_estimators_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_n_features_in_ = bridgeRandomTreesEmbedding[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_n_features_in_.tolist() if hasattr(attr_RandomTreesEmbedding_n_features_in_, 'tolist') else attr_RandomTreesEmbedding_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_feature_names_in_ = bridgeRandomTreesEmbedding[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_feature_names_in_.tolist() if hasattr(attr_RandomTreesEmbedding_feature_names_in_, 'tolist') else attr_RandomTreesEmbedding_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_n_outputs_ = bridgeRandomTreesEmbedding[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_n_outputs_.tolist() if hasattr(attr_RandomTreesEmbedding_n_outputs_, 'tolist') else attr_RandomTreesEmbedding_n_outputs_`
    })()
  }

  /**
    One-hot encoder used to create the sparse embedding.
   */
  get one_hot_encoder_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomTreesEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomTreesEmbedding must call init() before accessing one_hot_encoder_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomTreesEmbedding_one_hot_encoder_ = bridgeRandomTreesEmbedding[${this.id}].one_hot_encoder_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomTreesEmbedding_one_hot_encoder_.tolist() if hasattr(attr_RandomTreesEmbedding_one_hot_encoder_, 'tolist') else attr_RandomTreesEmbedding_one_hot_encoder_`
    })()
  }
}
