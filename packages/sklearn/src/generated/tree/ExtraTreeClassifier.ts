/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An extremely randomized tree classifier.

  Extra-trees differ from classic decision trees in the way they are built. When looking for the best split to separate the samples of a node into two groups, random splits are drawn for each of the `max\_features` randomly selected features and the best split among those is chosen. When `max\_features` is set 1, this amounts to building a totally random decision tree.

  Warning: Extra-trees should only be used within ensemble methods.

  Read more in the [User Guide](../tree.html#tree).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.tree.ExtraTreeClassifier.html
 */
export class ExtraTreeClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ExtraTreeClassifierOptions) {
    this.id = `ExtraTreeClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'ExtraTreeClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.tree import ExtraTreeClassifier
try: bridgeExtraTreeClassifier
except NameError: bridgeExtraTreeClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_ExtraTreeClassifier = {'criterion': ${
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
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}}

ctor_ExtraTreeClassifier = {k: v for k, v in ctor_ExtraTreeClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeExtraTreeClassifier[${this.id}] = ExtraTreeClassifier(**ctor_ExtraTreeClassifier)`

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

    await this._py.ex`del bridgeExtraTreeClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the index of the leaf that each sample is predicted as.
   */
  async apply(opts: ExtraTreeClassifierApplyOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeClassifier must call init() before apply()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_apply = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeClassifier_apply = {k: v for k, v in pms_ExtraTreeClassifier_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_apply = bridgeExtraTreeClassifier[${this.id}].apply(**pms_ExtraTreeClassifier_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_apply.tolist() if hasattr(res_ExtraTreeClassifier_apply, 'tolist') else res_ExtraTreeClassifier_apply`
  }

  /**
    Compute the pruning path during Minimal Cost-Complexity Pruning.

    See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.
   */
  async cost_complexity_pruning_path(
    opts: ExtraTreeClassifierCostComplexityPruningPathOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before cost_complexity_pruning_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ExtraTreeClassifier_cost_complexity_pruning_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ExtraTreeClassifier_cost_complexity_pruning_path = {k: v for k, v in pms_ExtraTreeClassifier_cost_complexity_pruning_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_cost_complexity_pruning_path = bridgeExtraTreeClassifier[${this.id}].cost_complexity_pruning_path(**pms_ExtraTreeClassifier_cost_complexity_pruning_path)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_cost_complexity_pruning_path.tolist() if hasattr(res_ExtraTreeClassifier_cost_complexity_pruning_path, 'tolist') else res_ExtraTreeClassifier_cost_complexity_pruning_path`
  }

  /**
    Return the decision path in the tree.
   */
  async decision_path(
    opts: ExtraTreeClassifierDecisionPathOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_decision_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeClassifier_decision_path = {k: v for k, v in pms_ExtraTreeClassifier_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_decision_path = bridgeExtraTreeClassifier[${this.id}].decision_path(**pms_ExtraTreeClassifier_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_decision_path.tolist() if hasattr(res_ExtraTreeClassifier_decision_path, 'tolist') else res_ExtraTreeClassifier_decision_path`
  }

  /**
    Build a decision tree classifier from the training set (X, y).
   */
  async fit(opts: ExtraTreeClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeClassifier_fit = {k: v for k, v in pms_ExtraTreeClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_fit = bridgeExtraTreeClassifier[${this.id}].fit(**pms_ExtraTreeClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_fit.tolist() if hasattr(res_ExtraTreeClassifier_fit, 'tolist') else res_ExtraTreeClassifier_fit`
  }

  /**
    Return the depth of the decision tree.

    The depth of a tree is the maximum distance between the root and any leaf.
   */
  async get_depth(opts: ExtraTreeClassifierGetDepthOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeClassifier must call init() before get_depth()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_get_depth = {}

pms_ExtraTreeClassifier_get_depth = {k: v for k, v in pms_ExtraTreeClassifier_get_depth.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_get_depth = bridgeExtraTreeClassifier[${this.id}].get_depth(**pms_ExtraTreeClassifier_get_depth)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_get_depth.tolist() if hasattr(res_ExtraTreeClassifier_get_depth, 'tolist') else res_ExtraTreeClassifier_get_depth`
  }

  /**
    Return the number of leaves of the decision tree.
   */
  async get_n_leaves(opts: ExtraTreeClassifierGetNLeavesOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before get_n_leaves()'
      )
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_get_n_leaves = {}

pms_ExtraTreeClassifier_get_n_leaves = {k: v for k, v in pms_ExtraTreeClassifier_get_n_leaves.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_get_n_leaves = bridgeExtraTreeClassifier[${this.id}].get_n_leaves(**pms_ExtraTreeClassifier_get_n_leaves)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_get_n_leaves.tolist() if hasattr(res_ExtraTreeClassifier_get_n_leaves, 'tolist') else res_ExtraTreeClassifier_get_n_leaves`
  }

  /**
    Predict class or regression value for X.

    For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.
   */
  async predict(opts: ExtraTreeClassifierPredictOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeClassifier_predict = {k: v for k, v in pms_ExtraTreeClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_predict = bridgeExtraTreeClassifier[${this.id}].predict(**pms_ExtraTreeClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_predict.tolist() if hasattr(res_ExtraTreeClassifier_predict, 'tolist') else res_ExtraTreeClassifier_predict`
  }

  /**
    Predict class log-probabilities of the input samples X.
   */
  async predict_log_proba(
    opts: ExtraTreeClassifierPredictLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ExtraTreeClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ExtraTreeClassifier_predict_log_proba = {k: v for k, v in pms_ExtraTreeClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_predict_log_proba = bridgeExtraTreeClassifier[${this.id}].predict_log_proba(**pms_ExtraTreeClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_predict_log_proba.tolist() if hasattr(res_ExtraTreeClassifier_predict_log_proba, 'tolist') else res_ExtraTreeClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities of the input samples X.

    The predicted class probability is the fraction of samples of the same class in a leaf.
   */
  async predict_proba(
    opts: ExtraTreeClassifierPredictProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'check_input': ${
      opts['check_input'] ?? undefined
    }}

pms_ExtraTreeClassifier_predict_proba = {k: v for k, v in pms_ExtraTreeClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_predict_proba = bridgeExtraTreeClassifier[${this.id}].predict_proba(**pms_ExtraTreeClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_predict_proba.tolist() if hasattr(res_ExtraTreeClassifier_predict_proba, 'tolist') else res_ExtraTreeClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: ExtraTreeClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ExtraTreeClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_ExtraTreeClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ExtraTreeClassifier_score = {k: v for k, v in pms_ExtraTreeClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ExtraTreeClassifier_score = bridgeExtraTreeClassifier[${this.id}].score(**pms_ExtraTreeClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_ExtraTreeClassifier_score.tolist() if hasattr(res_ExtraTreeClassifier_score, 'tolist') else res_ExtraTreeClassifier_score`
  }

  /**
    The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_classes_ = bridgeExtraTreeClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_classes_.tolist() if hasattr(attr_ExtraTreeClassifier_classes_, 'tolist') else attr_ExtraTreeClassifier_classes_`
    })()
  }

  /**
    The inferred value of max\_features.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_max_features_ = bridgeExtraTreeClassifier[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_max_features_.tolist() if hasattr(attr_ExtraTreeClassifier_max_features_, 'tolist') else attr_ExtraTreeClassifier_max_features_`
    })()
  }

  /**
    The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_n_classes_ = bridgeExtraTreeClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_n_classes_.tolist() if hasattr(attr_ExtraTreeClassifier_n_classes_, 'tolist') else attr_ExtraTreeClassifier_n_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_n_features_in_ = bridgeExtraTreeClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_n_features_in_.tolist() if hasattr(attr_ExtraTreeClassifier_n_features_in_, 'tolist') else attr_ExtraTreeClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_feature_names_in_ = bridgeExtraTreeClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_feature_names_in_.tolist() if hasattr(attr_ExtraTreeClassifier_feature_names_in_, 'tolist') else attr_ExtraTreeClassifier_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_n_outputs_ = bridgeExtraTreeClassifier[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_n_outputs_.tolist() if hasattr(attr_ExtraTreeClassifier_n_outputs_, 'tolist') else attr_ExtraTreeClassifier_n_outputs_`
    })()
  }

  /**
    The underlying Tree object. Please refer to `help(sklearn.tree.\_tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.
   */
  get tree_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ExtraTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ExtraTreeClassifier must call init() before accessing tree_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ExtraTreeClassifier_tree_ = bridgeExtraTreeClassifier[${this.id}].tree_`

      // convert the result from python to node.js
      return this
        ._py`attr_ExtraTreeClassifier_tree_.tolist() if hasattr(attr_ExtraTreeClassifier_tree_, 'tolist') else attr_ExtraTreeClassifier_tree_`
    })()
  }
}

export interface ExtraTreeClassifierOptions {
  /**
    The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation).

    @defaultValue `'gini'`
   */
  criterion?: 'gini' | 'entropy' | 'log_loss'

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

    @defaultValue `'sqrt'`
   */
  max_features?: number | 'sqrt'

  /**
    Used to pick randomly the `max\_features` used at each split. See [Glossary](../../glossary.html#term-random_state) for details.
   */
  random_state?: number

  /**
    Grow a tree with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.
   */
  max_leaf_nodes?: number

  /**
    A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

    The weighted impurity decrease equation is the following:

    @defaultValue `0`
   */
  min_impurity_decrease?: number

  /**
    Weights associated with classes in the form `{class\_label: weight}`. If None, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

    Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

    The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

    For multi-output, the weights of each column of y will be multiplied.

    Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.
   */
  class_weight?: any | 'balanced'

  /**
    Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

    @defaultValue `0`
   */
  ccp_alpha?: any
}

export interface ExtraTreeClassifierApplyOptions {
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

export interface ExtraTreeClassifierCostComplexityPruningPathOptions {
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

export interface ExtraTreeClassifierDecisionPathOptions {
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

export interface ExtraTreeClassifierFitOptions {
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

  /**
    Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface ExtraTreeClassifierGetDepthOptions {}

export interface ExtraTreeClassifierGetNLeavesOptions {}

export interface ExtraTreeClassifierPredictOptions {
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

export interface ExtraTreeClassifierPredictLogProbaOptions {
  /**
    The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface ExtraTreeClassifierPredictProbaOptions {
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

export interface ExtraTreeClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for `X`.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
