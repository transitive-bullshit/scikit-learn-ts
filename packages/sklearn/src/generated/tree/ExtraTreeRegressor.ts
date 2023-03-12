/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An extremely randomized tree regressor.

  Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

  Warning: Extra-trees should only be used within ensemble methods.

  Read more in the [User Guide](../tree.html#tree).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeRegressor.html
 */
export class ExtraTreeRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ExtraTreeRegressorOptions) {
    this.id = `ExtraTreeRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'ExtraTreeRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.tree import ExtraTreeRegressor
try: bridgeExtraTreeRegressor
except NameError: bridgeExtraTreeRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_ExtraTreeRegressor = {'criterion': ${
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
    }, 'min_impurity_decrease': ${
      this.opts['min_impurity_decrease'] ?? undefined
    }, 'max_leaf_nodes': ${
      this.opts['max_leaf_nodes'] ?? undefined
    }, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}}

ctor_ExtraTreeRegressor = {k: v for k, v in ctor_ExtraTreeRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeExtraTreeRegressor[${this.id}] = ExtraTreeRegressor(**ctor_ExtraTreeRegressor)`

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

    await this._py.ex`del bridgeExtraTreeRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the index of the leaf that each sample is predicted as.
   */
  async apply(opts: ExtraTreeRegressorApplyOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeRegressor must call init() before apply()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_apply = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeRegressor_apply = {k: v for k, v in pms_ExtraTreeRegressor_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_apply = bridgeExtraTreeRegressor[${this.id}].apply(**pms_ExtraTreeRegressor_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_apply.tolist() if hasattr(res_ExtraTreeRegressor_apply, 'tolist') else res_ExtraTreeRegressor_apply`
  }

  /**
    Compute the pruning path during Minimal Cost-Complexity Pruning.

    See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.
   */
  async cost_complexity_pruning_path(
    opts: ExtraTreeRegressorCostComplexityPruningPathOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before cost_complexity_pruning_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ExtraTreeRegressor_cost_complexity_pruning_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ExtraTreeRegressor_cost_complexity_pruning_path = {k: v for k, v in pms_ExtraTreeRegressor_cost_complexity_pruning_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_cost_complexity_pruning_path = bridgeExtraTreeRegressor[${this.id}].cost_complexity_pruning_path(**pms_ExtraTreeRegressor_cost_complexity_pruning_path)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_cost_complexity_pruning_path.tolist() if hasattr(res_ExtraTreeRegressor_cost_complexity_pruning_path, 'tolist') else res_ExtraTreeRegressor_cost_complexity_pruning_path`
  }

  /**
    Return the decision path in the tree.
   */
  async decision_path(
    opts: ExtraTreeRegressorDecisionPathOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_decision_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeRegressor_decision_path = {k: v for k, v in pms_ExtraTreeRegressor_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_decision_path = bridgeExtraTreeRegressor[${this.id}].decision_path(**pms_ExtraTreeRegressor_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_decision_path.tolist() if hasattr(res_ExtraTreeRegressor_decision_path, 'tolist') else res_ExtraTreeRegressor_decision_path`
  }

  /**
    Build a decision tree regressor from the training set (X, y).
   */
  async fit(opts: ExtraTreeRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeRegressor_fit = {k: v for k, v in pms_ExtraTreeRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_fit = bridgeExtraTreeRegressor[${this.id}].fit(**pms_ExtraTreeRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_fit.tolist() if hasattr(res_ExtraTreeRegressor_fit, 'tolist') else res_ExtraTreeRegressor_fit`
  }

  /**
    Return the depth of the decision tree.

    The depth of a tree is the maximum distance between the root and any leaf.
   */
  async get_depth(opts: ExtraTreeRegressorGetDepthOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeRegressor must call init() before get_depth()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_get_depth = {}

pms_ExtraTreeRegressor_get_depth = {k: v for k, v in pms_ExtraTreeRegressor_get_depth.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_get_depth = bridgeExtraTreeRegressor[${this.id}].get_depth(**pms_ExtraTreeRegressor_get_depth)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_get_depth.tolist() if hasattr(res_ExtraTreeRegressor_get_depth, 'tolist') else res_ExtraTreeRegressor_get_depth`
  }

  /**
    Return the number of leaves of the decision tree.
   */
  async get_n_leaves(opts: ExtraTreeRegressorGetNLeavesOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before get_n_leaves()'
      )
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_get_n_leaves = {}

pms_ExtraTreeRegressor_get_n_leaves = {k: v for k, v in pms_ExtraTreeRegressor_get_n_leaves.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_get_n_leaves = bridgeExtraTreeRegressor[${this.id}].get_n_leaves(**pms_ExtraTreeRegressor_get_n_leaves)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_get_n_leaves.tolist() if hasattr(res_ExtraTreeRegressor_get_n_leaves, 'tolist') else res_ExtraTreeRegressor_get_n_leaves`
  }

  /**
    Predict class or regression value for X.

    For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.
   */
  async predict(opts: ExtraTreeRegressorPredictOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeRegressor_predict = {k: v for k, v in pms_ExtraTreeRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_predict = bridgeExtraTreeRegressor[${this.id}].predict(**pms_ExtraTreeRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_predict.tolist() if hasattr(res_ExtraTreeRegressor_predict, 'tolist') else res_ExtraTreeRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: ExtraTreeRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ExtraTreeRegressor_score = {k: v for k, v in pms_ExtraTreeRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeRegressor_score = bridgeExtraTreeRegressor[${this.id}].score(**pms_ExtraTreeRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeRegressor_score.tolist() if hasattr(res_ExtraTreeRegressor_score, 'tolist') else res_ExtraTreeRegressor_score`
  }

  /**
    The inferred value of max\_features.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeRegressor_max_features_ = bridgeExtraTreeRegressor[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeRegressor_max_features_.tolist() if hasattr(attr_ExtraTreeRegressor_max_features_, 'tolist') else attr_ExtraTreeRegressor_max_features_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeRegressor_n_features_in_ = bridgeExtraTreeRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeRegressor_n_features_in_.tolist() if hasattr(attr_ExtraTreeRegressor_n_features_in_, 'tolist') else attr_ExtraTreeRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeRegressor_feature_names_in_ = bridgeExtraTreeRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeRegressor_feature_names_in_.tolist() if hasattr(attr_ExtraTreeRegressor_feature_names_in_, 'tolist') else attr_ExtraTreeRegressor_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeRegressor_n_outputs_ = bridgeExtraTreeRegressor[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeRegressor_n_outputs_.tolist() if hasattr(attr_ExtraTreeRegressor_n_outputs_, 'tolist') else attr_ExtraTreeRegressor_n_outputs_`
    })()
  }

  /**
    The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.
   */
  get tree_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeRegressor must call init() before accessing tree_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeRegressor_tree_ = bridgeExtraTreeRegressor[${this.id}].tree_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeRegressor_tree_.tolist() if hasattr(attr_ExtraTreeRegressor_tree_, 'tolist') else attr_ExtraTreeRegressor_tree_`
    })()
  }
}

export interface ExtraTreeRegressorOptions {
  /**
    The function to measure the quality of a split. Supported criteria are “squared\_error” for the mean squared error, which is equal to variance reduction as feature selection criterion and minimizes the L2 loss using the mean of each terminal node, “friedman\_mse”, which uses mean squared error with Friedman’s improvement score for potential splits, “absolute\_error” for the mean absolute error, which minimizes the L1 loss using the median of each terminal node, and “poisson” which uses reduction in Poisson deviance to find splits.

    @defaultValue `'squared_error'`
   */
  criterion?: 'squared_error' | 'friedman_mse' | 'absolute_error' | 'poisson'

  /**
    The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

    @defaultValue `'random'`
   */
  splitter?: 'random' | 'best'

  /**
    The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples.
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

    @defaultValue `1`
   */
  max_features?: number | 'sqrt'

  /**
    Used to pick randomly the `max\_features` used at each split. See [Glossary](../../glossary.html#term-random_state) for details.
   */
  random_state?: number

  /**
    A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

    The weighted impurity decrease equation is the following:

    @defaultValue `0`
   */
  min_impurity_decrease?: number

  /**
    Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.
   */
  max_leaf_nodes?: number

  /**
    Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

    @defaultValue `0`
   */
  ccp_alpha?: any
}

export interface ExtraTreeRegressorApplyOptions {
  /**
    The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface ExtraTreeRegressorCostComplexityPruningPathOptions {
  /**
    The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values (class labels) as integers or strings.
   */
  y?: ArrayLike

  /**
    Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.
   */
  sample_weight?: ArrayLike
}

export interface ExtraTreeRegressorDecisionPathOptions {
  /**
    The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface ExtraTreeRegressorFitOptions {
  /**
    The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values (real numbers). Use `dtype=np.float64` and `order='C'` for maximum efficiency.
   */
  y?: ArrayLike

  /**
    Sample weights. If None, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node.
   */
  sample_weight?: ArrayLike

  /**
    Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface ExtraTreeRegressorGetDepthOptions {}

export interface ExtraTreeRegressorGetNLeavesOptions {}

export interface ExtraTreeRegressorPredictOptions {
  /**
    The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface ExtraTreeRegressorScoreOptions {
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
}
