/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A decision tree regressor.

  Read more in the [User Guide](../tree.html#tree).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeRegressor.html)
 */
export class DecisionTreeRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits.

      @defaultValue `'squared_error'`
     */
    criterion?: 'squared_error' | 'friedman_mse' | 'absolute_error' | 'poisson'

    /**
      The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

      @defaultValue `'best'`
     */
    splitter?: 'best' | 'random'

    /**
      The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.
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
      The number of features to consider when looking for the best split:
     */
    max_features?: number | 'auto' | 'sqrt' | 'log2'

    /**
      Controls the randomness of the estimator. The features are always randomly permuted at each split, even if `splitter` is set to `"best"`. When `max\_features < n\_features`, the algorithm will select `max\_features` at random at each split before finding the best split among them. But the best found split may vary across different runs, even if `max\_features=n\_features`. That is the case, if the improvement of the criterion is identical for several splits and one split has to be selected at random. To obtain a deterministic behaviour during fitting, `random\_state` has to be fixed to an integer. See [Glossary](../../glossary.html#term-random_state) for details.
     */
    random_state?: number

    /**
      Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.
     */
    max_leaf_nodes?: number

    /**
      A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

      The weighted impurity decrease equation is the following:

      @defaultValue `0`
     */
    min_impurity_decrease?: number

    /**
      Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

      @defaultValue `0`
     */
    ccp_alpha?: any
  }) {
    this.id = `DecisionTreeRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DecisionTreeRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.tree import DecisionTreeRegressor
try: bridgeDecisionTreeRegressor
except NameError: bridgeDecisionTreeRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_DecisionTreeRegressor = {'criterion': ${
      this.opts['criterion'] ?? undefined
    }, 'splitter': ${this.opts['splitter'] ?? undefined}, 'max_depth': ${
      this.opts['max_depth'] ?? undefined
    }, 'min_samples_split': ${
      this.opts['min_samples_split'] ?? undefined
    }, 'min_samples_leaf': ${
      this.opts['min_samples_leaf'] ?? undefined
    }, 'min_weight_fraction_leaf': ${
      this.opts['min_weight_fraction_leaf'] ?? undefined
    }, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'max_leaf_nodes': ${
      this.opts['max_leaf_nodes'] ?? undefined
    }, 'min_impurity_decrease': ${
      this.opts['min_impurity_decrease'] ?? undefined
    }, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}}

ctor_DecisionTreeRegressor = {k: v for k, v in ctor_DecisionTreeRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeDecisionTreeRegressor[${this.id}] = DecisionTreeRegressor(**ctor_DecisionTreeRegressor)`

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

    await this._py.ex`del bridgeDecisionTreeRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the index of the leaf that each sample is predicted as.
   */
  async apply(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeRegressor must call init() before apply()')
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_apply = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_DecisionTreeRegressor_apply = {k: v for k, v in pms_DecisionTreeRegressor_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_apply = bridgeDecisionTreeRegressor[${this.id}].apply(**pms_DecisionTreeRegressor_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_apply.tolist() if hasattr(res_DecisionTreeRegressor_apply, 'tolist') else res_DecisionTreeRegressor_apply`
  }

  /**
    Compute the pruning path during Minimal Cost-Complexity Pruning.

    See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.
   */
  async cost_complexity_pruning_path(opts: {
    /**
      The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The target values (class labels) as integers or strings.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before cost_complexity_pruning_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeRegressor_cost_complexity_pruning_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_DecisionTreeRegressor_cost_complexity_pruning_path = {k: v for k, v in pms_DecisionTreeRegressor_cost_complexity_pruning_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_cost_complexity_pruning_path = bridgeDecisionTreeRegressor[${this.id}].cost_complexity_pruning_path(**pms_DecisionTreeRegressor_cost_complexity_pruning_path)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_cost_complexity_pruning_path.tolist() if hasattr(res_DecisionTreeRegressor_cost_complexity_pruning_path, 'tolist') else res_DecisionTreeRegressor_cost_complexity_pruning_path`
  }

  /**
    Return the decision path in the tree.
   */
  async decision_path(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeRegressor_decision_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_DecisionTreeRegressor_decision_path = {k: v for k, v in pms_DecisionTreeRegressor_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_decision_path = bridgeDecisionTreeRegressor[${this.id}].decision_path(**pms_DecisionTreeRegressor_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_decision_path.tolist() if hasattr(res_DecisionTreeRegressor_decision_path, 'tolist') else res_DecisionTreeRegressor_decision_path`
  }

  /**
    Build a decision tree regressor from the training set (X, y).
   */
  async fit(opts: {
    /**
      The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node.
     */
    sample_weight?: ArrayLike

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_DecisionTreeRegressor_fit = {k: v for k, v in pms_DecisionTreeRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_fit = bridgeDecisionTreeRegressor[${this.id}].fit(**pms_DecisionTreeRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_fit.tolist() if hasattr(res_DecisionTreeRegressor_fit, 'tolist') else res_DecisionTreeRegressor_fit`
  }

  /**
    Return the depth of the decision tree.

    The depth of a tree is the maximum distance between the root and any leaf.
   */
  async get_depth(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before get_depth()'
      )
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_get_depth = {}

pms_DecisionTreeRegressor_get_depth = {k: v for k, v in pms_DecisionTreeRegressor_get_depth.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_get_depth = bridgeDecisionTreeRegressor[${this.id}].get_depth(**pms_DecisionTreeRegressor_get_depth)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_get_depth.tolist() if hasattr(res_DecisionTreeRegressor_get_depth, 'tolist') else res_DecisionTreeRegressor_get_depth`
  }

  /**
    Return the number of leaves of the decision tree.
   */
  async get_n_leaves(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before get_n_leaves()'
      )
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_get_n_leaves = {}

pms_DecisionTreeRegressor_get_n_leaves = {k: v for k, v in pms_DecisionTreeRegressor_get_n_leaves.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_get_n_leaves = bridgeDecisionTreeRegressor[${this.id}].get_n_leaves(**pms_DecisionTreeRegressor_get_n_leaves)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_get_n_leaves.tolist() if hasattr(res_DecisionTreeRegressor_get_n_leaves, 'tolist') else res_DecisionTreeRegressor_get_n_leaves`
  }

  /**
    Predict class or regression value for X.

    For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.
   */
  async predict(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_DecisionTreeRegressor_predict = {k: v for k, v in pms_DecisionTreeRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_predict = bridgeDecisionTreeRegressor[${this.id}].predict(**pms_DecisionTreeRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_predict.tolist() if hasattr(res_DecisionTreeRegressor_predict, 'tolist') else res_DecisionTreeRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
     */
    X?: ArrayLike[]

    /**
      True values for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_DecisionTreeRegressor_score = {k: v for k, v in pms_DecisionTreeRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeRegressor_score = bridgeDecisionTreeRegressor[${this.id}].score(**pms_DecisionTreeRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeRegressor_score.tolist() if hasattr(res_DecisionTreeRegressor_score, 'tolist') else res_DecisionTreeRegressor_score`
  }

  /**
    The inferred value of max\_features.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeRegressor_max_features_ = bridgeDecisionTreeRegressor[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeRegressor_max_features_.tolist() if hasattr(attr_DecisionTreeRegressor_max_features_, 'tolist') else attr_DecisionTreeRegressor_max_features_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeRegressor_n_features_in_ = bridgeDecisionTreeRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeRegressor_n_features_in_.tolist() if hasattr(attr_DecisionTreeRegressor_n_features_in_, 'tolist') else attr_DecisionTreeRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeRegressor_feature_names_in_ = bridgeDecisionTreeRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeRegressor_feature_names_in_.tolist() if hasattr(attr_DecisionTreeRegressor_feature_names_in_, 'tolist') else attr_DecisionTreeRegressor_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeRegressor_n_outputs_ = bridgeDecisionTreeRegressor[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeRegressor_n_outputs_.tolist() if hasattr(attr_DecisionTreeRegressor_n_outputs_, 'tolist') else attr_DecisionTreeRegressor_n_outputs_`
    })()
  }

  /**
    The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.
   */
  get tree_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeRegressor must call init() before accessing tree_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeRegressor_tree_ = bridgeDecisionTreeRegressor[${this.id}].tree_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeRegressor_tree_.tolist() if hasattr(attr_DecisionTreeRegressor_tree_, 'tolist') else attr_DecisionTreeRegressor_tree_`
    })()
  }
}
