/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Logistic Regression CV (aka logit, MaxEnt) classifier.

  See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

  This class implements logistic regression using liblinear, newton-cg, sag or lbfgs optimizer. The newton-cg, sag and lbfgs solvers support only L2 regularization with primal formulation. The liblinear solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. Elastic-Net penalty is only supported by the saga solver.

  For the grid of `Cs` values and `l1_ratios` values, the best hyperparameter is selected by the cross-validator [`StratifiedKFold`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold"), but it can be changed using the [cv](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cv) parameter. The ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers can warm-start the coefficients (see [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start)).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#logistic-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegressionCV.html)
 */
export class LogisticRegressionCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Each of the values in Cs describes the inverse of regularization strength. If Cs is as an int, then a grid of Cs values are chosen in a logarithmic scale between 1e-4 and 1e4. Like in support vector machines, smaller values specify stronger regularization.

      @defaultValue `10`
     */
    Cs?: number

    /**
      Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The default cross-validation generator used is Stratified K-Folds. If an integer is provided, then it is the number of folds used. See the module [`sklearn.model_selection`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.model_selection.html#module-sklearn.model_selection "sklearn.model_selection") module for the list of possible cross-validation objects.
     */
    cv?: number

    /**
      Dual (constrained) or primal (regularized, see also [this equation](https://scikit-learn.org/stable/modules/generated/../linear_model.html#regularized-logistic-loss)) formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=`false` when n_samples > n_features.

      @defaultValue `false`
     */
    dual?: boolean

    /**
      Specify the norm of the penalty:

      @defaultValue `'l2'`
     */
    penalty?: 'l1' | 'l2' | 'elasticnet'

    /**
      A string (see model evaluation documentation) or a scorer callable object / function with signature `scorer(estimator, X, y)`. For a list of scoring functions that can be used, look at [`sklearn.metrics`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.metrics.html#module-sklearn.metrics "sklearn.metrics"). The default scoring option used is ‘accuracy’.
     */
    scoring?: string

    /**
      Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:

      @defaultValue `'lbfgs'`
     */
    solver?:
      | 'lbfgs'
      | 'liblinear'
      | 'newton-cg'
      | 'newton-cholesky'
      | 'sag'
      | 'saga'

    /**
      Tolerance for stopping criteria.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Maximum number of iterations of the optimization algorithm.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      Weights associated with classes in the form `{class_label: weight}`. If not given, all classes are supposed to have weight one.

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n_samples / (n_classes \* np.bincount(y))`.

      Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.
     */
    class_weight?: any | 'balanced'

    /**
      Number of CPU cores used during the cross-validation loop. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      For the ‘liblinear’, ‘sag’ and ‘lbfgs’ solvers set verbose to any positive number for verbosity.

      @defaultValue `0`
     */
    verbose?: number

    /**
      If set to `true`, the scores are averaged across all folds, and the coefs and the C that corresponds to the best score is taken, and a final refit is done using these parameters. Otherwise the coefs, intercepts and C that correspond to the best scores across folds are averaged.

      @defaultValue `true`
     */
    refit?: boolean

    /**
      Useful only when the solver ‘liblinear’ is used and self.fit_intercept is set to `true`. In this case, x becomes \[x, self.intercept_scaling\], i.e. a “synthetic” feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes `intercept_scaling \* synthetic_feature_weight`.

      Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.

      @defaultValue `1`
     */
    intercept_scaling?: number

    /**
      If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, *even when the data is binary*. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.

      @defaultValue `'auto'`
     */
    multi_class?: 'ovr' | 'multinomial'

    /**
      Used when `solver='sag'`, ‘saga’ or ‘liblinear’ to shuffle the data. Note that this only applies to the solver and not the cross-validation generator. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state) for details.
     */
    random_state?: number

    /**
      The list of Elastic-Net mixing parameter, with `0 <= l1_ratio <= 1`. Only used if `penalty='elasticnet'`. A value of 0 is equivalent to using `penalty='l2'`, while 1 is equivalent to using `penalty='l1'`. For `0 < l1_ratio <1`, the penalty is a combination of L1 and L2.
     */
    l1_ratios?: any
  }) {
    this.id = `LogisticRegressionCV${crypto.randomUUID().split('-')[0]}`
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
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LogisticRegressionCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LogisticRegressionCV
try: bridgeLogisticRegressionCV
except NameError: bridgeLogisticRegressionCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LogisticRegressionCV = {'Cs': ${this.opts['Cs'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'dual': ${this.opts['dual'] ?? undefined}, 'penalty': ${this.opts['penalty'] ?? undefined}, 'scoring': ${this.opts['scoring'] ?? undefined}, 'solver': ${this.opts['solver'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'class_weight': ${this.opts['class_weight'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'refit': ${this.opts['refit'] ?? undefined}, 'intercept_scaling': ${this.opts['intercept_scaling'] ?? undefined}, 'multi_class': ${this.opts['multi_class'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'l1_ratios': ${this.opts['l1_ratios'] ?? undefined}}

ctor_LogisticRegressionCV = {k: v for k, v in ctor_LogisticRegressionCV.items() if v is not None}`

    await this._py
      .ex`bridgeLogisticRegressionCV[${this.id}] = LogisticRegressionCV(**ctor_LogisticRegressionCV)`

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

    await this._py.ex`del bridgeLogisticRegressionCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(opts: {
    /**
      The data matrix for which we want to get the confidence scores.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LogisticRegressionCV_decision_function = {k: v for k, v in pms_LogisticRegressionCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_decision_function = bridgeLogisticRegressionCV[${this.id}].decision_function(**pms_LogisticRegressionCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_decision_function.tolist() if hasattr(res_LogisticRegressionCV_decision_function, 'tolist') else res_LogisticRegressionCV_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef_` member (back) to a numpy.ndarray. This is the default format of `coef_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegressionCV must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegressionCV_densify = {}

pms_LogisticRegressionCV_densify = {k: v for k, v in pms_LogisticRegressionCV_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_densify = bridgeLogisticRegressionCV[${this.id}].densify(**pms_LogisticRegressionCV_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_densify.tolist() if hasattr(res_LogisticRegressionCV_densify, 'tolist') else res_LogisticRegressionCV_densify`
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target vector relative to X.
     */
    y?: ArrayLike

    /**
      Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.
     */
    sample_weight?: any

    /**
      Parameters to pass to the underlying splitter and scorer.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegressionCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_LogisticRegressionCV_fit = {k: v for k, v in pms_LogisticRegressionCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_fit = bridgeLogisticRegressionCV[${this.id}].fit(**pms_LogisticRegressionCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_fit.tolist() if hasattr(res_LogisticRegressionCV_fit, 'tolist') else res_LogisticRegressionCV_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LogisticRegressionCV_get_metadata_routing = {k: v for k, v in pms_LogisticRegressionCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_get_metadata_routing = bridgeLogisticRegressionCV[${this.id}].get_metadata_routing(**pms_LogisticRegressionCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_get_metadata_routing.tolist() if hasattr(res_LogisticRegressionCV_get_metadata_routing, 'tolist') else res_LogisticRegressionCV_get_metadata_routing`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(opts: {
    /**
      The data matrix for which we want to get the predictions.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegressionCV must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LogisticRegressionCV_predict = {k: v for k, v in pms_LogisticRegressionCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_predict = bridgeLogisticRegressionCV[${this.id}].predict(**pms_LogisticRegressionCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_predict.tolist() if hasattr(res_LogisticRegressionCV_predict, 'tolist') else res_LogisticRegressionCV_predict`
  }

  /**
    Predict logarithm of probability estimates.

    The returned estimates for all classes are ordered by the label of classes.
   */
  async predict_log_proba(opts: {
    /**
      Vector to be scored, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LogisticRegressionCV_predict_log_proba = {k: v for k, v in pms_LogisticRegressionCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_predict_log_proba = bridgeLogisticRegressionCV[${this.id}].predict_log_proba(**pms_LogisticRegressionCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_predict_log_proba.tolist() if hasattr(res_LogisticRegressionCV_predict_log_proba, 'tolist') else res_LogisticRegressionCV_predict_log_proba`
  }

  /**
    Probability estimates.

    The returned estimates for all classes are ordered by the label of classes.

    For a multi_class problem, if multi_class is set to be “multinomial” the softmax function is used to find the predicted probability of each class. Else use a one-vs-rest approach, i.e. calculate the probability of each class assuming it to be positive using the logistic function and normalize these values across all the classes.
   */
  async predict_proba(opts: {
    /**
      Vector to be scored, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_LogisticRegressionCV_predict_proba = {k: v for k, v in pms_LogisticRegressionCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_predict_proba = bridgeLogisticRegressionCV[${this.id}].predict_proba(**pms_LogisticRegressionCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_predict_proba.tolist() if hasattr(res_LogisticRegressionCV_predict_proba, 'tolist') else res_LogisticRegressionCV_predict_proba`
  }

  /**
    Score using the `scoring` option on the given test data and labels.
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike[]

    /**
      True labels for X.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters to pass to the `score` method of the underlying scorer.
     */
    score_params?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegressionCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'score_params': ${opts['score_params'] ?? undefined}}

pms_LogisticRegressionCV_score = {k: v for k, v in pms_LogisticRegressionCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_score = bridgeLogisticRegressionCV[${this.id}].score(**pms_LogisticRegressionCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_score.tolist() if hasattr(res_LogisticRegressionCV_score, 'tolist') else res_LogisticRegressionCV_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LogisticRegressionCV_set_fit_request = {k: v for k, v in pms_LogisticRegressionCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_set_fit_request = bridgeLogisticRegressionCV[${this.id}].set_fit_request(**pms_LogisticRegressionCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_set_fit_request.tolist() if hasattr(res_LogisticRegressionCV_set_fit_request, 'tolist') else res_LogisticRegressionCV_set_fit_request`
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
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegressionCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LogisticRegressionCV_set_score_request = {k: v for k, v in pms_LogisticRegressionCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_set_score_request = bridgeLogisticRegressionCV[${this.id}].set_score_request(**pms_LogisticRegressionCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_set_score_request.tolist() if hasattr(res_LogisticRegressionCV_set_score_request, 'tolist') else res_LogisticRegressionCV_set_score_request`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegressionCV must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegressionCV_sparsify = {}

pms_LogisticRegressionCV_sparsify = {k: v for k, v in pms_LogisticRegressionCV_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegressionCV_sparsify = bridgeLogisticRegressionCV[${this.id}].sparsify(**pms_LogisticRegressionCV_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegressionCV_sparsify.tolist() if hasattr(res_LogisticRegressionCV_sparsify, 'tolist') else res_LogisticRegressionCV_sparsify`
  }

  /**
    A list of class labels known to the classifier.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_classes_ = bridgeLogisticRegressionCV[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_classes_.tolist() if hasattr(attr_LogisticRegressionCV_classes_, 'tolist') else attr_LogisticRegressionCV_classes_`
    })()
  }

  /**
    Coefficient of the features in the decision function.

    `coef_` is of shape (1, n_features) when the given problem is binary.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_coef_ = bridgeLogisticRegressionCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_coef_.tolist() if hasattr(attr_LogisticRegressionCV_coef_, 'tolist') else attr_LogisticRegressionCV_coef_`
    })()
  }

  /**
    Intercept (a.k.a. bias) added to the decision function.

    If `fit_intercept` is set to `false`, the intercept is set to zero. `intercept_` is of shape(1,) when the problem is binary.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_intercept_ = bridgeLogisticRegressionCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_intercept_.tolist() if hasattr(attr_LogisticRegressionCV_intercept_, 'tolist') else attr_LogisticRegressionCV_intercept_`
    })()
  }

  /**
    Array of C i.e. inverse of regularization parameter values used for cross-validation.
   */
  get Cs_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing Cs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_Cs_ = bridgeLogisticRegressionCV[${this.id}].Cs_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_Cs_.tolist() if hasattr(attr_LogisticRegressionCV_Cs_, 'tolist') else attr_LogisticRegressionCV_Cs_`
    })()
  }

  /**
    Array of l1_ratios used for cross-validation. If no l1_ratio is used (i.e. penalty is not ‘elasticnet’), this is set to `\[`undefined`\]`
   */
  get l1_ratios_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing l1_ratios_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_l1_ratios_ = bridgeLogisticRegressionCV[${this.id}].l1_ratios_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_l1_ratios_.tolist() if hasattr(attr_LogisticRegressionCV_l1_ratios_, 'tolist') else attr_LogisticRegressionCV_l1_ratios_`
    })()
  }

  /**
    dict with classes as the keys, and the path of coefficients obtained during cross-validating across each fold and then across each Cs after doing an OvR for the corresponding class as values. If the ‘multi_class’ option is set to ‘multinomial’, then the coefs_paths are the coefficients corresponding to each class. Each dict value has shape `(n_folds, n_cs, n_features)` or `(n_folds, n_cs, n_features + 1)` depending on whether the intercept is fit or not. If `penalty='elasticnet'`, the shape is `(n_folds, n_cs, n_l1_ratios_, n_features)` or `(n_folds, n_cs, n_l1_ratios_, n_features + 1)`.
   */
  get coefs_paths_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing coefs_paths_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_coefs_paths_ = bridgeLogisticRegressionCV[${this.id}].coefs_paths_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_coefs_paths_.tolist() if hasattr(attr_LogisticRegressionCV_coefs_paths_, 'tolist') else attr_LogisticRegressionCV_coefs_paths_`
    })()
  }

  /**
    dict with classes as the keys, and the values as the grid of scores obtained during cross-validating each fold, after doing an OvR for the corresponding class. If the ‘multi_class’ option given is ‘multinomial’ then the same scores are repeated across all classes, since this is the multinomial class. Each dict value has shape `(n_folds, n_cs)` or `(n_folds, n_cs, n_l1_ratios)` if `penalty='elasticnet'`.
   */
  get scores_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_scores_ = bridgeLogisticRegressionCV[${this.id}].scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_scores_.tolist() if hasattr(attr_LogisticRegressionCV_scores_, 'tolist') else attr_LogisticRegressionCV_scores_`
    })()
  }

  /**
    Array of C that maps to the best scores across every class. If refit is set to `false`, then for each class, the best C is the average of the C’s that correspond to the best scores for each fold. `C_` is of shape(n_classes,) when the problem is binary.
   */
  get C_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing C_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_C_ = bridgeLogisticRegressionCV[${this.id}].C_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_C_.tolist() if hasattr(attr_LogisticRegressionCV_C_, 'tolist') else attr_LogisticRegressionCV_C_`
    })()
  }

  /**
    Array of l1_ratio that maps to the best scores across every class. If refit is set to `false`, then for each class, the best l1_ratio is the average of the l1_ratio’s that correspond to the best scores for each fold. `l1_ratio_` is of shape(n_classes,) when the problem is binary.
   */
  get l1_ratio_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing l1_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_l1_ratio_ = bridgeLogisticRegressionCV[${this.id}].l1_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_l1_ratio_.tolist() if hasattr(attr_LogisticRegressionCV_l1_ratio_, 'tolist') else attr_LogisticRegressionCV_l1_ratio_`
    })()
  }

  /**
    Actual number of iterations for all classes, folds and Cs. In the binary or multinomial cases, the first dimension is equal to 1. If `penalty='elasticnet'`, the shape is `(n_classes, n_folds, n_cs, n_l1_ratios)` or `(1, n_folds, n_cs, n_l1_ratios)`.
   */
  get n_iter_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_n_iter_ = bridgeLogisticRegressionCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_n_iter_.tolist() if hasattr(attr_LogisticRegressionCV_n_iter_, 'tolist') else attr_LogisticRegressionCV_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_n_features_in_ = bridgeLogisticRegressionCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_n_features_in_.tolist() if hasattr(attr_LogisticRegressionCV_n_features_in_, 'tolist') else attr_LogisticRegressionCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegressionCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegressionCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegressionCV_feature_names_in_ = bridgeLogisticRegressionCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegressionCV_feature_names_in_.tolist() if hasattr(attr_LogisticRegressionCV_feature_names_in_, 'tolist') else attr_LogisticRegressionCV_feature_names_in_`
    })()
  }
}
