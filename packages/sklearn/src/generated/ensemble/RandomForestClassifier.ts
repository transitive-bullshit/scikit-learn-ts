/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A random forest classifier.

  A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

  Read more in the [User Guide](../ensemble.html#forest).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html
 */
export class RandomForestClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RandomForestClassifierOptions) {
    this.id = `RandomForestClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RandomForestClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import RandomForestClassifier
try: bridgeRandomForestClassifier
except NameError: bridgeRandomForestClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_RandomForestClassifier = {'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'criterion': ${this.opts['criterion'] ?? undefined}, 'max_depth': ${
      this.opts['max_depth'] ?? undefined
    }, 'min_samples_split': ${
      this.opts['min_samples_split'] ?? undefined
    }, 'min_samples_leaf': ${
      this.opts['min_samples_leaf'] ?? undefined
    }, 'min_weight_fraction_leaf': ${
      this.opts['min_weight_fraction_leaf'] ?? undefined
    }, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'max_leaf_nodes': ${
      this.opts['max_leaf_nodes'] ?? undefined
    }, 'min_impurity_decrease': ${
      this.opts['min_impurity_decrease'] ?? undefined
    }, 'bootstrap': ${this.opts['bootstrap'] ?? undefined}, 'oob_score': ${
      this.opts['oob_score'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}, 'max_samples': ${
      this.opts['max_samples'] ?? undefined
    }}

ctor_RandomForestClassifier = {k: v for k, v in ctor_RandomForestClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeRandomForestClassifier[${this.id}] = RandomForestClassifier(**ctor_RandomForestClassifier)`

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

    await this._py.ex`del bridgeRandomForestClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply trees in the forest to X, return leaf indices.
   */
  async apply(opts: RandomForestClassifierApplyOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomForestClassifier must call init() before apply()')
    }

    // set up method params
    await this._py.ex`pms_RandomForestClassifier_apply = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomForestClassifier_apply = {k: v for k, v in pms_RandomForestClassifier_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_apply = bridgeRandomForestClassifier[${this.id}].apply(**pms_RandomForestClassifier_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_apply.tolist() if hasattr(res_RandomForestClassifier_apply, 'tolist') else res_RandomForestClassifier_apply`
  }

  /**
    Return the decision path in the forest.
   */
  async decision_path(
    opts: RandomForestClassifierDecisionPathOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before decision_path()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomForestClassifier_decision_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomForestClassifier_decision_path = {k: v for k, v in pms_RandomForestClassifier_decision_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_decision_path = bridgeRandomForestClassifier[${this.id}].decision_path(**pms_RandomForestClassifier_decision_path)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_decision_path.tolist() if hasattr(res_RandomForestClassifier_decision_path, 'tolist') else res_RandomForestClassifier_decision_path`
  }

  /**
    Build a forest of trees from the training set (X, y).
   */
  async fit(opts: RandomForestClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomForestClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RandomForestClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RandomForestClassifier_fit = {k: v for k, v in pms_RandomForestClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_fit = bridgeRandomForestClassifier[${this.id}].fit(**pms_RandomForestClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_fit.tolist() if hasattr(res_RandomForestClassifier_fit, 'tolist') else res_RandomForestClassifier_fit`
  }

  /**
    Predict class for X.

    The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.
   */
  async predict(opts: RandomForestClassifierPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomForestClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomForestClassifier_predict = {k: v for k, v in pms_RandomForestClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_predict = bridgeRandomForestClassifier[${this.id}].predict(**pms_RandomForestClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_predict.tolist() if hasattr(res_RandomForestClassifier_predict, 'tolist') else res_RandomForestClassifier_predict`
  }

  /**
    Predict class log-probabilities for X.

    The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.
   */
  async predict_log_proba(
    opts: RandomForestClassifierPredictLogProbaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomForestClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomForestClassifier_predict_log_proba = {k: v for k, v in pms_RandomForestClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_predict_log_proba = bridgeRandomForestClassifier[${this.id}].predict_log_proba(**pms_RandomForestClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_predict_log_proba.tolist() if hasattr(res_RandomForestClassifier_predict_log_proba, 'tolist') else res_RandomForestClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities for X.

    The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.
   */
  async predict_proba(
    opts: RandomForestClassifierPredictProbaOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RandomForestClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RandomForestClassifier_predict_proba = {k: v for k, v in pms_RandomForestClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_predict_proba = bridgeRandomForestClassifier[${this.id}].predict_proba(**pms_RandomForestClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_predict_proba.tolist() if hasattr(res_RandomForestClassifier_predict_proba, 'tolist') else res_RandomForestClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: RandomForestClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomForestClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RandomForestClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RandomForestClassifier_score = {k: v for k, v in pms_RandomForestClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomForestClassifier_score = bridgeRandomForestClassifier[${this.id}].score(**pms_RandomForestClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomForestClassifier_score.tolist() if hasattr(res_RandomForestClassifier_score, 'tolist') else res_RandomForestClassifier_score`
  }

  /**
    The child estimator template used to create the collection of fitted sub-estimators.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_estimator_ = bridgeRandomForestClassifier[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_estimator_.tolist() if hasattr(attr_RandomForestClassifier_estimator_, 'tolist') else attr_RandomForestClassifier_estimator_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_estimators_ = bridgeRandomForestClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_estimators_.tolist() if hasattr(attr_RandomForestClassifier_estimators_, 'tolist') else attr_RandomForestClassifier_estimators_`
    })()
  }

  /**
    The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_classes_ = bridgeRandomForestClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_classes_.tolist() if hasattr(attr_RandomForestClassifier_classes_, 'tolist') else attr_RandomForestClassifier_classes_`
    })()
  }

  /**
    The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).
   */
  get n_classes_(): Promise<number | any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_n_classes_ = bridgeRandomForestClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_n_classes_.tolist() if hasattr(attr_RandomForestClassifier_n_classes_, 'tolist') else attr_RandomForestClassifier_n_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_n_features_in_ = bridgeRandomForestClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_n_features_in_.tolist() if hasattr(attr_RandomForestClassifier_n_features_in_, 'tolist') else attr_RandomForestClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_feature_names_in_ = bridgeRandomForestClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_feature_names_in_.tolist() if hasattr(attr_RandomForestClassifier_feature_names_in_, 'tolist') else attr_RandomForestClassifier_feature_names_in_`
    })()
  }

  /**
    The number of outputs when `fit` is performed.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_n_outputs_ = bridgeRandomForestClassifier[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_n_outputs_.tolist() if hasattr(attr_RandomForestClassifier_n_outputs_, 'tolist') else attr_RandomForestClassifier_n_outputs_`
    })()
  }

  /**
    Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.
   */
  get oob_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing oob_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_oob_score_ = bridgeRandomForestClassifier[${this.id}].oob_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_oob_score_.tolist() if hasattr(attr_RandomForestClassifier_oob_score_, 'tolist') else attr_RandomForestClassifier_oob_score_`
    })()
  }

  /**
    Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.
   */
  get oob_decision_function_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomForestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomForestClassifier must call init() before accessing oob_decision_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomForestClassifier_oob_decision_function_ = bridgeRandomForestClassifier[${this.id}].oob_decision_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomForestClassifier_oob_decision_function_.tolist() if hasattr(attr_RandomForestClassifier_oob_decision_function_, 'tolist') else attr_RandomForestClassifier_oob_decision_function_`
    })()
  }
}

export interface RandomForestClassifierOptions {
  /**
    The number of trees in the forest.

    @defaultValue `100`
   */
  n_estimators?: number

  /**
    The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “log\_loss” and “entropy” both for the Shannon information gain, see [Mathematical formulation](../tree.html#tree-mathematical-formulation). Note: This parameter is tree-specific.

    @defaultValue `'gini'`
   */
  criterion?: 'gini' | 'entropy' | 'log_loss'

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

    @defaultValue `'sqrt'`
   */
  max_features?: 'sqrt' | 'log2' | number | number

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
    Whether bootstrap samples are used when building trees. If `false`, the whole dataset is used to build each tree.

    @defaultValue `true`
   */
  bootstrap?: boolean

  /**
    Whether to use out-of-bag samples to estimate the generalization score. Only available if bootstrap=`true`.

    @defaultValue `false`
   */
  oob_score?: boolean

  /**
    The number of jobs to run in parallel. [`fit`](#sklearn.ensemble.RandomForestClassifier.fit "sklearn.ensemble.RandomForestClassifier.fit"), [`predict`](#sklearn.ensemble.RandomForestClassifier.predict "sklearn.ensemble.RandomForestClassifier.predict"), [`decision\_path`](#sklearn.ensemble.RandomForestClassifier.decision_path "sklearn.ensemble.RandomForestClassifier.decision_path") and [`apply`](#sklearn.ensemble.RandomForestClassifier.apply "sklearn.ensemble.RandomForestClassifier.apply") are all parallelized over the trees. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Controls both the randomness of the bootstrapping of the samples used when building trees (if `bootstrap=True`) and the sampling of the features to consider when looking for the best split at each node (if `max\_features < n\_features`). See [Glossary](../../glossary.html#term-random_state) for details.
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

  /**
    Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one. For multi-output problems, a list of dicts can be provided in the same order as the columns of y.

    Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be \[{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}\] instead of \[{1:1}, {2:5}, {3:1}, {4:1}\].

    The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`

    The “balanced\_subsample” mode is the same as “balanced” except that weights are computed based on the bootstrap sample for every tree grown.

    For multi-output, the weights of each column of y will be multiplied.

    Note that these weights will be multiplied with sample\_weight (passed through the fit method) if sample\_weight is specified.
   */
  class_weight?: 'balanced' | 'balanced_subsample' | any

  /**
    Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

    @defaultValue `0`
   */
  ccp_alpha?: any

  /**
    If bootstrap is `true`, the number of samples to draw from X to train each base estimator.
   */
  max_samples?: number
}

export interface RandomForestClassifierApplyOptions {
  /**
    The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RandomForestClassifierDecisionPathOptions {
  /**
    The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RandomForestClassifierFitOptions {
  /**
    The training input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csc\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values (class labels in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.
   */
  sample_weight?: ArrayLike
}

export interface RandomForestClassifierPredictOptions {
  /**
    The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RandomForestClassifierPredictLogProbaOptions {
  /**
    The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RandomForestClassifierPredictProbaOptions {
  /**
    The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RandomForestClassifierScoreOptions {
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
