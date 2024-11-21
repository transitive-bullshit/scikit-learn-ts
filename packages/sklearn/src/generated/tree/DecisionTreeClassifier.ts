/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A decision tree classifier.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../tree.html#tree).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html)
 */
export class DecisionTreeClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](https://scikit-learn.org/stable/modules/generated/../tree.html#tree-mathematical-formulation).

      @defaultValue `'gini'`
     */
    criterion?: 'gini' | 'entropy' | 'log_loss'

    /**
      The strategy used to choose the split at each node. Supported strategies are “best” to choose the best split and “random” to choose the best random split.

      @defaultValue `'best'`
     */
    splitter?: 'best' | 'random'

    /**
      The maximum depth of the tree. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.
     */
    max_depth?: number

    /**
      The minimum number of samples required to split an internal node:

      @defaultValue `2`
     */
    min_samples_split?: number

    /**
      The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least `min_samples_leaf` training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression.

      @defaultValue `1`
     */
    min_samples_leaf?: number

    /**
      The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample_weight is not provided.

      @defaultValue `0`
     */
    min_weight_fraction_leaf?: number

    /**
      The number of features to consider when looking for the best split:
     */
    max_features?: number | 'sqrt' | 'log2'

    /**
      Controls the randomness of the estimator. The features are always randomly permuted at each split, even if `splitter` is set to `"best"`. When `max_features < n_features`, the algorithm will select `max_features` at random at each split before finding the best split among them. But the best found split may vary across different runs, even if `max_features=n_features`. That is the case, if the improvement of the criterion is identical for several splits and one split has to be selected at random. To obtain a deterministic behaviour during fitting, `random_state` has to be fixed to an integer. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details.
     */
    random_state?: number

    /**
      Grow a tree with `max_leaf_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. If `undefined` then unlimited number of leaf nodes.
     */
    max_leaf_nodes?: number

    /**
      A node will be split if this split induces a decrease of the impurity greater than or equal to this value.

      The weighted impurity decrease equation is the following:

      @defaultValue `0`
     */
    min_impurity_decrease?: number

    /**
      Weights associated with classes in the form `{class_label: weight}`. If `undefined`, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

      Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n_samples / (n_classes \* np.bincount(y))`

      For multi-output, the weights of each column of y will be multiplied.

      Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.
     */
    class_weight?: any | 'balanced'

    /**
      Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](https://scikit-learn.org/stable/modules/generated/../tree.html#minimal-cost-complexity-pruning) for details.

      @defaultValue `0`
     */
    ccp_alpha?: any

    /**
      1: monotonic increase
     */
    monotonic_cst?: any[]
  }) {
    this.id = `DecisionTreeClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DecisionTreeClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.tree import DecisionTreeClassifier
try: bridgeDecisionTreeClassifier
except NameError: bridgeDecisionTreeClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_DecisionTreeClassifier = {'criterion': ${this.opts['criterion'] ?? undefined}, 'splitter': ${this.opts['splitter'] ?? undefined}, 'max_depth': ${this.opts['max_depth'] ?? undefined}, 'min_samples_split': ${this.opts['min_samples_split'] ?? undefined}, 'min_samples_leaf': ${this.opts['min_samples_leaf'] ?? undefined}, 'min_weight_fraction_leaf': ${this.opts['min_weight_fraction_leaf'] ?? undefined}, 'max_features': ${this.opts['max_features'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'max_leaf_nodes': ${this.opts['max_leaf_nodes'] ?? undefined}, 'min_impurity_decrease': ${this.opts['min_impurity_decrease'] ?? undefined}, 'class_weight': ${this.opts['class_weight'] ?? undefined}, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}, 'monotonic_cst': np.array(${this.opts['monotonic_cst'] ?? undefined}) if ${this.opts['monotonic_cst'] !== undefined} else None}

ctor_DecisionTreeClassifier = {k: v for k, v in ctor_DecisionTreeClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeDecisionTreeClassifier[${this.id}] = DecisionTreeClassifier(**ctor_DecisionTreeClassifier)`

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

    await this._py.ex`del bridgeDecisionTreeClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Return the index of the leaf that each sample is predicted as.
   */
  async apply(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`.
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
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeClassifier must call init() before apply()')
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_apply = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_apply = {k: v for k, v in pms_DecisionTreeClassifier_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_apply = bridgeDecisionTreeClassifier[${this.id}].apply(**pms_DecisionTreeClassifier_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_apply.tolist() if hasattr(res_DecisionTreeClassifier_apply, 'tolist') else res_DecisionTreeClassifier_apply`
  }

  /**
    Compute the pruning path during Minimal Cost-Complexity Pruning.

    See [Minimal Cost-Complexity Pruning](https://scikit-learn.org/stable/modules/generated/../tree.html#minimal-cost-complexity-pruning) for details on the pruning process.
   */
  async cost_complexity_pruning_path(opts: {
    /**
      The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc_matrix`.
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
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before cost_complexity_pruning_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_cost_complexity_pruning_path = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DecisionTreeClassifier_cost_complexity_pruning_path = {k: v for k, v in pms_DecisionTreeClassifier_cost_complexity_pruning_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_cost_complexity_pruning_path = bridgeDecisionTreeClassifier[${this.id}].cost_complexity_pruning_path(**pms_DecisionTreeClassifier_cost_complexity_pruning_path)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_cost_complexity_pruning_path.tolist() if hasattr(res_DecisionTreeClassifier_cost_complexity_pruning_path, 'tolist') else res_DecisionTreeClassifier_cost_complexity_pruning_path`
  }

  /**
    Return the decision path in the tree.
   */
  async decision_path(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`.
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
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_decision_path = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_decision_path = {k: v for k, v in pms_DecisionTreeClassifier_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_decision_path = bridgeDecisionTreeClassifier[${this.id}].decision_path(**pms_DecisionTreeClassifier_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_decision_path.tolist() if hasattr(res_DecisionTreeClassifier_decision_path, 'tolist') else res_DecisionTreeClassifier_decision_path`
  }

  /**
    Build a decision tree classifier from the training set (X, y).
   */
  async fit(opts: {
    /**
      The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc_matrix`.
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

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_fit = {k: v for k, v in pms_DecisionTreeClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_fit = bridgeDecisionTreeClassifier[${this.id}].fit(**pms_DecisionTreeClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_fit.tolist() if hasattr(res_DecisionTreeClassifier_fit, 'tolist') else res_DecisionTreeClassifier_fit`
  }

  /**
    Return the depth of the decision tree.

    The depth of a tree is the maximum distance between the root and any leaf.
   */
  async get_depth(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before get_depth()'
      )
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeClassifier_get_depth = {}

pms_DecisionTreeClassifier_get_depth = {k: v for k, v in pms_DecisionTreeClassifier_get_depth.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_get_depth = bridgeDecisionTreeClassifier[${this.id}].get_depth(**pms_DecisionTreeClassifier_get_depth)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_get_depth.tolist() if hasattr(res_DecisionTreeClassifier_get_depth, 'tolist') else res_DecisionTreeClassifier_get_depth`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_DecisionTreeClassifier_get_metadata_routing = {k: v for k, v in pms_DecisionTreeClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_get_metadata_routing = bridgeDecisionTreeClassifier[${this.id}].get_metadata_routing(**pms_DecisionTreeClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_get_metadata_routing.tolist() if hasattr(res_DecisionTreeClassifier_get_metadata_routing, 'tolist') else res_DecisionTreeClassifier_get_metadata_routing`
  }

  /**
    Return the number of leaves of the decision tree.
   */
  async get_n_leaves(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before get_n_leaves()'
      )
    }

    // set up method params
    await this._py.ex`pms_DecisionTreeClassifier_get_n_leaves = {}

pms_DecisionTreeClassifier_get_n_leaves = {k: v for k, v in pms_DecisionTreeClassifier_get_n_leaves.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_get_n_leaves = bridgeDecisionTreeClassifier[${this.id}].get_n_leaves(**pms_DecisionTreeClassifier_get_n_leaves)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_get_n_leaves.tolist() if hasattr(res_DecisionTreeClassifier_get_n_leaves, 'tolist') else res_DecisionTreeClassifier_get_n_leaves`
  }

  /**
    Predict class or regression value for X.

    For a classification model, the predicted class for each sample in X is returned. For a regression model, the predicted value based on X is returned.
   */
  async predict(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`.
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
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_predict = {k: v for k, v in pms_DecisionTreeClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_predict = bridgeDecisionTreeClassifier[${this.id}].predict(**pms_DecisionTreeClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_predict.tolist() if hasattr(res_DecisionTreeClassifier_predict, 'tolist') else res_DecisionTreeClassifier_predict`
  }

  /**
    Predict class log-probabilities of the input samples X.
   */
  async predict_log_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_DecisionTreeClassifier_predict_log_proba = {k: v for k, v in pms_DecisionTreeClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_predict_log_proba = bridgeDecisionTreeClassifier[${this.id}].predict_log_proba(**pms_DecisionTreeClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_predict_log_proba.tolist() if hasattr(res_DecisionTreeClassifier_predict_log_proba, 'tolist') else res_DecisionTreeClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities of the input samples X.

    The predicted class probability is the fraction of samples of the same class in a leaf.
   */
  async predict_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_predict_proba = {k: v for k, v in pms_DecisionTreeClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_predict_proba = bridgeDecisionTreeClassifier[${this.id}].predict_proba(**pms_DecisionTreeClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_predict_proba.tolist() if hasattr(res_DecisionTreeClassifier_predict_proba, 'tolist') else res_DecisionTreeClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionTreeClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_DecisionTreeClassifier_score = {k: v for k, v in pms_DecisionTreeClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_score = bridgeDecisionTreeClassifier[${this.id}].score(**pms_DecisionTreeClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_score.tolist() if hasattr(res_DecisionTreeClassifier_score, 'tolist') else res_DecisionTreeClassifier_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `check_input` parameter in `fit`.
     */
    check_input?: string | boolean

    /**
      Metadata routing for `sample_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_set_fit_request = {'check_input': ${opts['check_input'] ?? undefined}, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_DecisionTreeClassifier_set_fit_request = {k: v for k, v in pms_DecisionTreeClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_set_fit_request = bridgeDecisionTreeClassifier[${this.id}].set_fit_request(**pms_DecisionTreeClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_set_fit_request.tolist() if hasattr(res_DecisionTreeClassifier_set_fit_request, 'tolist') else res_DecisionTreeClassifier_set_fit_request`
  }

  /**
    Request metadata passed to the `predict_proba` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_proba_request(opts: {
    /**
      Metadata routing for `check_input` parameter in `predict_proba`.
     */
    check_input?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before set_predict_proba_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_set_predict_proba_request = {'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_set_predict_proba_request = {k: v for k, v in pms_DecisionTreeClassifier_set_predict_proba_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_set_predict_proba_request = bridgeDecisionTreeClassifier[${this.id}].set_predict_proba_request(**pms_DecisionTreeClassifier_set_predict_proba_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_set_predict_proba_request.tolist() if hasattr(res_DecisionTreeClassifier_set_predict_proba_request, 'tolist') else res_DecisionTreeClassifier_set_predict_proba_request`
  }

  /**
    Request metadata passed to the `predict` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_request(opts: {
    /**
      Metadata routing for `check_input` parameter in `predict`.
     */
    check_input?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before set_predict_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_set_predict_request = {'check_input': ${opts['check_input'] ?? undefined}}

pms_DecisionTreeClassifier_set_predict_request = {k: v for k, v in pms_DecisionTreeClassifier_set_predict_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_set_predict_request = bridgeDecisionTreeClassifier[${this.id}].set_predict_request(**pms_DecisionTreeClassifier_set_predict_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_set_predict_request.tolist() if hasattr(res_DecisionTreeClassifier_set_predict_request, 'tolist') else res_DecisionTreeClassifier_set_predict_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionTreeClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_DecisionTreeClassifier_set_score_request = {k: v for k, v in pms_DecisionTreeClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionTreeClassifier_set_score_request = bridgeDecisionTreeClassifier[${this.id}].set_score_request(**pms_DecisionTreeClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionTreeClassifier_set_score_request.tolist() if hasattr(res_DecisionTreeClassifier_set_score_request, 'tolist') else res_DecisionTreeClassifier_set_score_request`
  }

  /**
    The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_classes_ = bridgeDecisionTreeClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_classes_.tolist() if hasattr(attr_DecisionTreeClassifier_classes_, 'tolist') else attr_DecisionTreeClassifier_classes_`
    })()
  }

  /**
    The inferred value of max_features.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_max_features_ = bridgeDecisionTreeClassifier[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_max_features_.tolist() if hasattr(attr_DecisionTreeClassifier_max_features_, 'tolist') else attr_DecisionTreeClassifier_max_features_`
    })()
  }

  /**
    The number of classes (for single output problems), or a list containing the number of classes for each output (for multi-output problems).
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_n_classes_ = bridgeDecisionTreeClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_n_classes_.tolist() if hasattr(attr_DecisionTreeClassifier_n_classes_, 'tolist') else attr_DecisionTreeClassifier_n_classes_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_n_features_in_ = bridgeDecisionTreeClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_n_features_in_.tolist() if hasattr(attr_DecisionTreeClassifier_n_features_in_, 'tolist') else attr_DecisionTreeClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_feature_names_in_ = bridgeDecisionTreeClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_feature_names_in_.tolist() if hasattr(attr_DecisionTreeClassifier_feature_names_in_, 'tolist') else attr_DecisionTreeClassifier_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_n_outputs_ = bridgeDecisionTreeClassifier[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_n_outputs_.tolist() if hasattr(attr_DecisionTreeClassifier_n_outputs_, 'tolist') else attr_DecisionTreeClassifier_n_outputs_`
    })()
  }

  /**
    The underlying Tree object. Please refer to `help(sklearn.tree._tree.Tree)` for attributes of Tree object and [Understanding the decision tree structure](https://scikit-learn.org/stable/modules/generated/../../auto_examples/tree/plot_unveil_tree_structure.html#sphx-glr-auto-examples-tree-plot-unveil-tree-structure-py) for basic usage of these attributes.
   */
  get tree_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionTreeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionTreeClassifier must call init() before accessing tree_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionTreeClassifier_tree_ = bridgeDecisionTreeClassifier[${this.id}].tree_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionTreeClassifier_tree_.tolist() if hasattr(attr_DecisionTreeClassifier_tree_, 'tolist') else attr_DecisionTreeClassifier_tree_`
    })()
  }
}
