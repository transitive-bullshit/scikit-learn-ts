/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Gradient Boosting for classification.

  This algorithm builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage `n\_classes\_` regression trees are fit on the negative gradient of the loss function, e.g. binary or multiclass log loss. Binary classification is a special case where only a single regression tree is induced.

  [`HistGradientBoostingClassifier`](sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier "sklearn.ensemble.HistGradientBoostingClassifier") is a much faster variant of this algorithm for intermediate and large datasets (`n\_samples >= 10\_000`) and supports monotonic constraints.

  Read more in the [User Guide](../ensemble.html#gradient-boosting).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html)
 */
export class GradientBoostingClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The loss function to be optimized. ‘log\_loss’ refers to binomial and multinomial deviance, the same as used in logistic regression. It is a good choice for classification with probabilistic outputs. For loss ‘exponential’, gradient boosting recovers the AdaBoost algorithm.

      @defaultValue `'log_loss'`
     */
    loss?: 'log_loss' | 'exponential'

    /**
      Learning rate shrinks the contribution of each tree by `learning\_rate`. There is a trade-off between learning\_rate and n\_estimators. Values must be in the range `\[0.0, inf)`.

      @defaultValue `0.1`
     */
    learning_rate?: number

    /**
      The number of boosting stages to perform. Gradient boosting is fairly robust to over-fitting so a large number usually results in better performance. Values must be in the range `\[1, inf)`.

      @defaultValue `100`
     */
    n_estimators?: number

    /**
      The fraction of samples to be used for fitting the individual base learners. If smaller than 1.0 this results in Stochastic Gradient Boosting. `subsample` interacts with the parameter `n\_estimators`. Choosing `subsample < 1.0` leads to a reduction of variance and an increase in bias. Values must be in the range `(0.0, 1.0\]`.

      @defaultValue `1`
     */
    subsample?: number

    /**
      The function to measure the quality of a split. Supported criteria are ‘friedman\_mse’ for the mean squared error with improvement score by Friedman, ‘squared\_error’ for mean squared error. The default value of ‘friedman\_mse’ is generally the best as it can provide a better approximation in some cases.

      @defaultValue `'friedman_mse'`
     */
    criterion?: 'friedman_mse' | 'squared_error'

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
      The minimum weighted fraction of the sum total of weights (of all the input samples) required to be at a leaf node. Samples have equal weight when sample\_weight is not provided. Values must be in the range `\[0.0, 0.5\]`.

      @defaultValue `0`
     */
    min_weight_fraction_leaf?: number

    /**
      Maximum depth of the individual regression estimators. The maximum depth limits the number of nodes in the tree. Tune this parameter for best performance; the best value depends on the interaction of the input variables. If `undefined`, then nodes are expanded until all leaves are pure or until all leaves contain less than min\_samples\_split samples. If int, values must be in the range `\[1, inf)`.

      @defaultValue `3`
     */
    max_depth?: number

    /**
      A node will be split if this split induces a decrease of the impurity greater than or equal to this value. Values must be in the range `\[0.0, inf)`.

      The weighted impurity decrease equation is the following:

      @defaultValue `0`
     */
    min_impurity_decrease?: number

    /**
      An estimator object that is used to compute the initial predictions. `init` has to provide [fit](../../glossary.html#term-fit) and [predict\_proba](../../glossary.html#term-predict_proba). If ‘zero’, the initial raw predictions are set to zero. By default, a `DummyEstimator` predicting the classes priors is used.
     */
    init?: 'zero'

    /**
      Controls the random seed given to each Tree estimator at each boosting iteration. In addition, it controls the random permutation of the features at each split (see Notes for more details). It also controls the random splitting of the training data to obtain a validation set if `n\_iter\_no\_change` is not `undefined`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      The number of features to consider when looking for the best split:
     */
    max_features?: 'sqrt' | 'log2' | number | number

    /**
      Enable verbose output. If 1 then it prints progress and performance once in a while (the more trees the lower the frequency). If greater than 1 then it prints progress and performance for every tree. Values must be in the range `\[0, inf)`.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Grow trees with `max\_leaf\_nodes` in best-first fashion. Best nodes are defined as relative reduction in impurity. Values must be in the range `\[2, inf)`. If `undefined`, then unlimited number of leaf nodes.
     */
    max_leaf_nodes?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      The proportion of training data to set aside as validation set for early stopping. Values must be in the range `(0.0, 1.0)`. Only used if `n\_iter\_no\_change` is set to an integer.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      `n\_iter\_no\_change` is used to decide if early stopping will be used to terminate training when validation score is not improving. By default it is set to `undefined` to disable early stopping. If set to a number, it will set aside `validation\_fraction` size of the training data as validation and terminate training when validation score is not improving in all of the previous `n\_iter\_no\_change` numbers of iterations. The split is stratified. Values must be in the range `\[1, inf)`. See [Early stopping in Gradient Boosting](../../auto_examples/ensemble/plot_gradient_boosting_early_stopping.html#sphx-glr-auto-examples-ensemble-plot-gradient-boosting-early-stopping-py).
     */
    n_iter_no_change?: number

    /**
      Tolerance for the early stopping. When the loss is not improving by at least tol for `n\_iter\_no\_change` iterations (if set to a number), the training stops. Values must be in the range `\[0.0, inf)`.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Complexity parameter used for Minimal Cost-Complexity Pruning. The subtree with the largest cost complexity that is smaller than `ccp\_alpha` will be chosen. By default, no pruning is performed. Values must be in the range `\[0.0, inf)`. See [Minimal Cost-Complexity Pruning](../tree.html#minimal-cost-complexity-pruning) for details.

      @defaultValue `0`
     */
    ccp_alpha?: any
  }) {
    this.id = `GradientBoostingClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'GradientBoostingClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
try: bridgeGradientBoostingClassifier
except NameError: bridgeGradientBoostingClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GradientBoostingClassifier = {'loss': ${this.opts['loss'] ?? undefined}, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'n_estimators': ${this.opts['n_estimators'] ?? undefined}, 'subsample': ${this.opts['subsample'] ?? undefined}, 'criterion': ${this.opts['criterion'] ?? undefined}, 'min_samples_split': ${this.opts['min_samples_split'] ?? undefined}, 'min_samples_leaf': ${this.opts['min_samples_leaf'] ?? undefined}, 'min_weight_fraction_leaf': ${this.opts['min_weight_fraction_leaf'] ?? undefined}, 'max_depth': ${this.opts['max_depth'] ?? undefined}, 'min_impurity_decrease': ${this.opts['min_impurity_decrease'] ?? undefined}, 'init': ${this.opts['init'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'max_features': ${this.opts['max_features'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'max_leaf_nodes': ${this.opts['max_leaf_nodes'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'validation_fraction': ${this.opts['validation_fraction'] ?? undefined}, 'n_iter_no_change': ${this.opts['n_iter_no_change'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'ccp_alpha': ${this.opts['ccp_alpha'] ?? undefined}}

ctor_GradientBoostingClassifier = {k: v for k, v in ctor_GradientBoostingClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeGradientBoostingClassifier[${this.id}] = GradientBoostingClassifier(**ctor_GradientBoostingClassifier)`

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

    await this._py.ex`del bridgeGradientBoostingClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply trees in the ensemble to X, return leaf indices.
   */
  async apply(opts: {
    /**
      The input samples. Internally, its dtype will be converted to `dtype=np.float32`. If a sparse matrix is provided, it will be converted to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike[][]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before apply()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_apply = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_apply = {k: v for k, v in pms_GradientBoostingClassifier_apply.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_apply = bridgeGradientBoostingClassifier[${this.id}].apply(**pms_GradientBoostingClassifier_apply)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_apply.tolist() if hasattr(res_GradientBoostingClassifier_apply, 'tolist') else res_GradientBoostingClassifier_apply`
  }

  /**
    Compute the decision function of `X`.
   */
  async decision_function(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_decision_function = {k: v for k, v in pms_GradientBoostingClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_decision_function = bridgeGradientBoostingClassifier[${this.id}].decision_function(**pms_GradientBoostingClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_decision_function.tolist() if hasattr(res_GradientBoostingClassifier_decision_function, 'tolist') else res_GradientBoostingClassifier_decision_function`
  }

  /**
    Fit the gradient boosting model.
   */
  async fit(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values (strings or integers in classification, real numbers in regression) For classification, labels must correspond to classes.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. In the case of classification, splits are also ignored if they would result in any single class carrying a negative weight in either child node.
     */
    sample_weight?: ArrayLike

    /**
      The monitor is called after each iteration with the current iteration, a reference to the estimator and the local variables of `\_fit\_stages` as keyword arguments `callable(i, self, locals())`. If the callable returns `true` the fitting procedure is stopped. The monitor can be used for various things such as computing held-out estimates, early stopping, model introspect, and snapshotting.
     */
    monitor?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'monitor': ${opts['monitor'] ?? undefined}}

pms_GradientBoostingClassifier_fit = {k: v for k, v in pms_GradientBoostingClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_fit = bridgeGradientBoostingClassifier[${this.id}].fit(**pms_GradientBoostingClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_fit.tolist() if hasattr(res_GradientBoostingClassifier_fit, 'tolist') else res_GradientBoostingClassifier_fit`
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
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GradientBoostingClassifier_get_metadata_routing = {k: v for k, v in pms_GradientBoostingClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_get_metadata_routing = bridgeGradientBoostingClassifier[${this.id}].get_metadata_routing(**pms_GradientBoostingClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_get_metadata_routing.tolist() if hasattr(res_GradientBoostingClassifier_get_metadata_routing, 'tolist') else res_GradientBoostingClassifier_get_metadata_routing`
  }

  /**
    Predict class for X.
   */
  async predict(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_predict = {k: v for k, v in pms_GradientBoostingClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_predict = bridgeGradientBoostingClassifier[${this.id}].predict(**pms_GradientBoostingClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_predict.tolist() if hasattr(res_GradientBoostingClassifier_predict, 'tolist') else res_GradientBoostingClassifier_predict`
  }

  /**
    Predict class log-probabilities for X.
   */
  async predict_log_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_predict_log_proba = {k: v for k, v in pms_GradientBoostingClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_predict_log_proba = bridgeGradientBoostingClassifier[${this.id}].predict_log_proba(**pms_GradientBoostingClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_predict_log_proba.tolist() if hasattr(res_GradientBoostingClassifier_predict_log_proba, 'tolist') else res_GradientBoostingClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities for X.
   */
  async predict_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_predict_proba = {k: v for k, v in pms_GradientBoostingClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_predict_proba = bridgeGradientBoostingClassifier[${this.id}].predict_proba(**pms_GradientBoostingClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_predict_proba.tolist() if hasattr(res_GradientBoostingClassifier_predict_proba, 'tolist') else res_GradientBoostingClassifier_predict_proba`
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
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_GradientBoostingClassifier_score = {k: v for k, v in pms_GradientBoostingClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_score = bridgeGradientBoostingClassifier[${this.id}].score(**pms_GradientBoostingClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_score.tolist() if hasattr(res_GradientBoostingClassifier_score, 'tolist') else res_GradientBoostingClassifier_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `monitor` parameter in `fit`.
     */
    monitor?: string | boolean

    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_set_fit_request = {'monitor': ${opts['monitor'] ?? undefined}, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_GradientBoostingClassifier_set_fit_request = {k: v for k, v in pms_GradientBoostingClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_set_fit_request = bridgeGradientBoostingClassifier[${this.id}].set_fit_request(**pms_GradientBoostingClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_set_fit_request.tolist() if hasattr(res_GradientBoostingClassifier_set_fit_request, 'tolist') else res_GradientBoostingClassifier_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_GradientBoostingClassifier_set_score_request = {k: v for k, v in pms_GradientBoostingClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_set_score_request = bridgeGradientBoostingClassifier[${this.id}].set_score_request(**pms_GradientBoostingClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_set_score_request.tolist() if hasattr(res_GradientBoostingClassifier_set_score_request, 'tolist') else res_GradientBoostingClassifier_set_score_request`
  }

  /**
    Compute decision function of `X` for each iteration.

    This method allows monitoring (i.e. determine error on testing set) after each stage.
   */
  async staged_decision_function(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before staged_decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_staged_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_staged_decision_function = {k: v for k, v in pms_GradientBoostingClassifier_staged_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_staged_decision_function = bridgeGradientBoostingClassifier[${this.id}].staged_decision_function(**pms_GradientBoostingClassifier_staged_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_staged_decision_function.tolist() if hasattr(res_GradientBoostingClassifier_staged_decision_function, 'tolist') else res_GradientBoostingClassifier_staged_decision_function`
  }

  /**
    Predict class at each stage for X.

    This method allows monitoring (i.e. determine error on testing set) after each stage.
   */
  async staged_predict(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before staged_predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_staged_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_staged_predict = {k: v for k, v in pms_GradientBoostingClassifier_staged_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_staged_predict = bridgeGradientBoostingClassifier[${this.id}].staged_predict(**pms_GradientBoostingClassifier_staged_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_staged_predict.tolist() if hasattr(res_GradientBoostingClassifier_staged_predict, 'tolist') else res_GradientBoostingClassifier_staged_predict`
  }

  /**
    Predict class probabilities at each stage for X.

    This method allows monitoring (i.e. determine error on testing set) after each stage.
   */
  async staged_predict_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before staged_predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GradientBoostingClassifier_staged_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GradientBoostingClassifier_staged_predict_proba = {k: v for k, v in pms_GradientBoostingClassifier_staged_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GradientBoostingClassifier_staged_predict_proba = bridgeGradientBoostingClassifier[${this.id}].staged_predict_proba(**pms_GradientBoostingClassifier_staged_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GradientBoostingClassifier_staged_predict_proba.tolist() if hasattr(res_GradientBoostingClassifier_staged_predict_proba, 'tolist') else res_GradientBoostingClassifier_staged_predict_proba`
  }

  /**
    The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.
   */
  get n_estimators_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing n_estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_n_estimators_ = bridgeGradientBoostingClassifier[${this.id}].n_estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_n_estimators_.tolist() if hasattr(attr_GradientBoostingClassifier_n_estimators_, 'tolist') else attr_GradientBoostingClassifier_n_estimators_`
    })()
  }

  /**
    The number of trees that are built at each iteration. For binary classifiers, this is always 1.
   */
  get n_trees_per_iteration_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing n_trees_per_iteration_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_n_trees_per_iteration_ = bridgeGradientBoostingClassifier[${this.id}].n_trees_per_iteration_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_n_trees_per_iteration_.tolist() if hasattr(attr_GradientBoostingClassifier_n_trees_per_iteration_, 'tolist') else attr_GradientBoostingClassifier_n_trees_per_iteration_`
    })()
  }

  /**
    The improvement in loss on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`.
   */
  get oob_improvement_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing oob_improvement_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_oob_improvement_ = bridgeGradientBoostingClassifier[${this.id}].oob_improvement_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_oob_improvement_.tolist() if hasattr(attr_GradientBoostingClassifier_oob_improvement_, 'tolist') else attr_GradientBoostingClassifier_oob_improvement_`
    })()
  }

  /**
    The full history of the loss values on the out-of-bag samples. Only available if `subsample < 1.0`.
   */
  get oob_scores_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing oob_scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_oob_scores_ = bridgeGradientBoostingClassifier[${this.id}].oob_scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_oob_scores_.tolist() if hasattr(attr_GradientBoostingClassifier_oob_scores_, 'tolist') else attr_GradientBoostingClassifier_oob_scores_`
    })()
  }

  /**
    The last value of the loss on the out-of-bag samples. It is the same as `oob\_scores\_\[-1\]`. Only available if `subsample < 1.0`.
   */
  get oob_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing oob_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_oob_score_ = bridgeGradientBoostingClassifier[${this.id}].oob_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_oob_score_.tolist() if hasattr(attr_GradientBoostingClassifier_oob_score_, 'tolist') else attr_GradientBoostingClassifier_oob_score_`
    })()
  }

  /**
    The i-th score `train\_score\_\[i\]` is the loss of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the loss on the training data.
   */
  get train_score_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing train_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_train_score_ = bridgeGradientBoostingClassifier[${this.id}].train_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_train_score_.tolist() if hasattr(attr_GradientBoostingClassifier_train_score_, 'tolist') else attr_GradientBoostingClassifier_train_score_`
    })()
  }

  /**
    The estimator that provides the initial predictions. Set via the `init` argument.
   */
  get init_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing init_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_init_ = bridgeGradientBoostingClassifier[${this.id}].init_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_init_.tolist() if hasattr(attr_GradientBoostingClassifier_init_, 'tolist') else attr_GradientBoostingClassifier_init_`
    })()
  }

  /**
    The collection of fitted sub-estimators. `n\_trees\_per\_iteration\_` is 1 for binary classification, otherwise `n\_classes`.
   */
  get estimators_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_estimators_ = bridgeGradientBoostingClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_estimators_.tolist() if hasattr(attr_GradientBoostingClassifier_estimators_, 'tolist') else attr_GradientBoostingClassifier_estimators_`
    })()
  }

  /**
    The classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_classes_ = bridgeGradientBoostingClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_classes_.tolist() if hasattr(attr_GradientBoostingClassifier_classes_, 'tolist') else attr_GradientBoostingClassifier_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_n_features_in_ = bridgeGradientBoostingClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_n_features_in_.tolist() if hasattr(attr_GradientBoostingClassifier_n_features_in_, 'tolist') else attr_GradientBoostingClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_feature_names_in_ = bridgeGradientBoostingClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_feature_names_in_.tolist() if hasattr(attr_GradientBoostingClassifier_feature_names_in_, 'tolist') else attr_GradientBoostingClassifier_feature_names_in_`
    })()
  }

  /**
    The number of classes.
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_n_classes_ = bridgeGradientBoostingClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_n_classes_.tolist() if hasattr(attr_GradientBoostingClassifier_n_classes_, 'tolist') else attr_GradientBoostingClassifier_n_classes_`
    })()
  }

  /**
    The inferred value of max\_features.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GradientBoostingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GradientBoostingClassifier must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GradientBoostingClassifier_max_features_ = bridgeGradientBoostingClassifier[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_GradientBoostingClassifier_max_features_.tolist() if hasattr(attr_GradientBoostingClassifier_max_features_, 'tolist') else attr_GradientBoostingClassifier_max_features_`
    })()
  }
}
