/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Search over specified parameter values with successive halving.

  The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

  Read more in the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-user-guide).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingGridSearchCV.html)
 */
export class HalvingGridSearchCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.
     */
    estimator?: any

    /**
      Dictionary with parameters names (string) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.
     */
    param_grid?: any

    /**
      The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

      @defaultValue `3`
     */
    factor?: number

    /**
      Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n_iterations’ or ‘n_estimators’ for a gradient boosting estimator. In this case `max_resources` cannot be ‘auto’ and must be set explicitly.

      @defaultValue `'n_samples'`
     */
    resource?: 'n_samples' | string

    /**
      The maximum amount of resource that any candidate is allowed to use for a given iteration. By default, this is set to `n_samples` when `resource='n_samples'` (default), else an error is raised.

      @defaultValue `'auto'`
     */
    max_resources?: number

    /**
      The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

      @defaultValue `'exhaust'`
     */
    min_resources?: 'exhaust' | 'smallest' | number

    /**
      This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](https://scikit-learn.org/stable/modules/generated/../grid_search.html#aggressive-elimination) for more details.

      @defaultValue `false`
     */
    aggressive_elimination?: boolean

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:

      @defaultValue `5`
     */
    cv?: number

    /**
      A single string (see [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.
     */
    scoring?: string

    /**
      If `true`, refit an estimator using the best found parameters on the whole dataset.

      The refitted estimator is made available at the `best_estimator_` attribute and permits using `predict` directly on this `HalvingGridSearchCV` instance.

      @defaultValue `true`
     */
    refit?: boolean

    /**
      Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.
     */
    error_score?: 'raise'

    /**
      If `false`, the `cv_results_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

      @defaultValue `false`
     */
    return_train_score?: boolean

    /**
      Pseudo random number generator state used for subsampling the dataset when `resources != 'n_samples'`. Ignored otherwise. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Controls the verbosity: the higher, the more messages.
     */
    verbose?: number
  }) {
    this.id = `HalvingGridSearchCV${crypto.randomUUID().split('-')[0]}`
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
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'HalvingGridSearchCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import HalvingGridSearchCV
try: bridgeHalvingGridSearchCV
except NameError: bridgeHalvingGridSearchCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_HalvingGridSearchCV = {'estimator': ${this.opts['estimator'] ?? undefined}, 'param_grid': ${this.opts['param_grid'] ?? undefined}, 'factor': ${this.opts['factor'] ?? undefined}, 'resource': ${this.opts['resource'] ?? undefined}, 'max_resources': ${this.opts['max_resources'] ?? undefined}, 'min_resources': ${this.opts['min_resources'] ?? undefined}, 'aggressive_elimination': ${this.opts['aggressive_elimination'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'scoring': ${this.opts['scoring'] ?? undefined}, 'refit': ${this.opts['refit'] ?? undefined}, 'error_score': ${this.opts['error_score'] ?? undefined}, 'return_train_score': ${this.opts['return_train_score'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_HalvingGridSearchCV = {k: v for k, v in ctor_HalvingGridSearchCV.items() if v is not None}`

    await this._py
      .ex`bridgeHalvingGridSearchCV[${this.id}] = HalvingGridSearchCV(**ctor_HalvingGridSearchCV)`

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

    await this._py.ex`del bridgeHalvingGridSearchCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Call decision_function on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `decision_function`.
   */
  async decision_function(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_decision_function = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_decision_function = {k: v for k, v in pms_HalvingGridSearchCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_decision_function = bridgeHalvingGridSearchCV[${this.id}].decision_function(**pms_HalvingGridSearchCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_decision_function.tolist() if hasattr(res_HalvingGridSearchCV_decision_function, 'tolist') else res_HalvingGridSearchCV_decision_function`
  }

  /**
    Run fit with all sets of parameters.
   */
  async fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike

    /**
      Parameters passed to the `fit` method of the estimator.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingGridSearchCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_fit = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_HalvingGridSearchCV_fit = {k: v for k, v in pms_HalvingGridSearchCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_fit = bridgeHalvingGridSearchCV[${this.id}].fit(**pms_HalvingGridSearchCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_fit.tolist() if hasattr(res_HalvingGridSearchCV_fit, 'tolist') else res_HalvingGridSearchCV_fit`
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
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_HalvingGridSearchCV_get_metadata_routing = {k: v for k, v in pms_HalvingGridSearchCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_get_metadata_routing = bridgeHalvingGridSearchCV[${this.id}].get_metadata_routing(**pms_HalvingGridSearchCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_get_metadata_routing.tolist() if hasattr(res_HalvingGridSearchCV_get_metadata_routing, 'tolist') else res_HalvingGridSearchCV_get_metadata_routing`
  }

  /**
    Call inverse_transform on the estimator with the best found params.

    Only available if the underlying estimator implements `inverse_transform` and `refit=True`.
   */
  async inverse_transform(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any

    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    Xt?: any
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_inverse_transform = {'X': ${opts['X'] ?? undefined}, 'Xt': ${opts['Xt'] ?? undefined}}

pms_HalvingGridSearchCV_inverse_transform = {k: v for k, v in pms_HalvingGridSearchCV_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_inverse_transform = bridgeHalvingGridSearchCV[${this.id}].inverse_transform(**pms_HalvingGridSearchCV_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_inverse_transform.tolist() if hasattr(res_HalvingGridSearchCV_inverse_transform, 'tolist') else res_HalvingGridSearchCV_inverse_transform`
  }

  /**
    Call predict on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `predict`.
   */
  async predict(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingGridSearchCV must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_predict = {k: v for k, v in pms_HalvingGridSearchCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_predict = bridgeHalvingGridSearchCV[${this.id}].predict(**pms_HalvingGridSearchCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_predict.tolist() if hasattr(res_HalvingGridSearchCV_predict, 'tolist') else res_HalvingGridSearchCV_predict`
  }

  /**
    Call predict_log_proba on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `predict_log_proba`.
   */
  async predict_log_proba(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_predict_log_proba = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_predict_log_proba = {k: v for k, v in pms_HalvingGridSearchCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_predict_log_proba = bridgeHalvingGridSearchCV[${this.id}].predict_log_proba(**pms_HalvingGridSearchCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_predict_log_proba.tolist() if hasattr(res_HalvingGridSearchCV_predict_log_proba, 'tolist') else res_HalvingGridSearchCV_predict_log_proba`
  }

  /**
    Call predict_proba on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `predict_proba`.
   */
  async predict_proba(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_predict_proba = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_predict_proba = {k: v for k, v in pms_HalvingGridSearchCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_predict_proba = bridgeHalvingGridSearchCV[${this.id}].predict_proba(**pms_HalvingGridSearchCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_predict_proba.tolist() if hasattr(res_HalvingGridSearchCV_predict_proba, 'tolist') else res_HalvingGridSearchCV_predict_proba`
  }

  /**
    Return the score on the given data, if the estimator has been refit.

    This uses the score defined by `scoring` where provided, and the `best_estimator_.score` method otherwise.
   */
  async score(opts: {
    /**
      Input data, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike[]

    /**
      Parameters to be passed to the underlying scorer(s).
     */
    params?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingGridSearchCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_HalvingGridSearchCV_score = {k: v for k, v in pms_HalvingGridSearchCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_score = bridgeHalvingGridSearchCV[${this.id}].score(**pms_HalvingGridSearchCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_score.tolist() if hasattr(res_HalvingGridSearchCV_score, 'tolist') else res_HalvingGridSearchCV_score`
  }

  /**
    Call score_samples on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `score_samples`.
   */
  async score_samples(opts: {
    /**
      Data to predict on. Must fulfill input requirements of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_score_samples = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_score_samples = {k: v for k, v in pms_HalvingGridSearchCV_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_score_samples = bridgeHalvingGridSearchCV[${this.id}].score_samples(**pms_HalvingGridSearchCV_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_score_samples.tolist() if hasattr(res_HalvingGridSearchCV_score_samples, 'tolist') else res_HalvingGridSearchCV_score_samples`
  }

  /**
    Call transform on the estimator with the best found parameters.

    Only available if the underlying estimator supports `transform` and `refit=True`.
   */
  async transform(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingGridSearchCV must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_HalvingGridSearchCV_transform = {'X': ${opts['X'] ?? undefined}}

pms_HalvingGridSearchCV_transform = {k: v for k, v in pms_HalvingGridSearchCV_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingGridSearchCV_transform = bridgeHalvingGridSearchCV[${this.id}].transform(**pms_HalvingGridSearchCV_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingGridSearchCV_transform.tolist() if hasattr(res_HalvingGridSearchCV_transform, 'tolist') else res_HalvingGridSearchCV_transform`
  }

  /**
    The amount of resources used at each iteration.
   */
  get n_resources_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_resources_ = bridgeHalvingGridSearchCV[${this.id}].n_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_resources_.tolist() if hasattr(attr_HalvingGridSearchCV_n_resources_, 'tolist') else attr_HalvingGridSearchCV_n_resources_`
    })()
  }

  /**
    The number of candidate parameters that were evaluated at each iteration.
   */
  get n_candidates_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_candidates_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_candidates_ = bridgeHalvingGridSearchCV[${this.id}].n_candidates_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_candidates_.tolist() if hasattr(attr_HalvingGridSearchCV_n_candidates_, 'tolist') else attr_HalvingGridSearchCV_n_candidates_`
    })()
  }

  /**
    The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n_candidates\[-1\] / factor)`
   */
  get n_remaining_candidates_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_remaining_candidates_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_remaining_candidates_ = bridgeHalvingGridSearchCV[${this.id}].n_remaining_candidates_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_remaining_candidates_.tolist() if hasattr(attr_HalvingGridSearchCV_n_remaining_candidates_, 'tolist') else attr_HalvingGridSearchCV_n_remaining_candidates_`
    })()
  }

  /**
    The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min_resources_`, the actual number of resources used at the last iteration may be smaller than `max_resources_`.
   */
  get max_resources_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing max_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_max_resources_ = bridgeHalvingGridSearchCV[${this.id}].max_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_max_resources_.tolist() if hasattr(attr_HalvingGridSearchCV_max_resources_, 'tolist') else attr_HalvingGridSearchCV_max_resources_`
    })()
  }

  /**
    The amount of resources that are allocated for each candidate at the first iteration.
   */
  get min_resources_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing min_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_min_resources_ = bridgeHalvingGridSearchCV[${this.id}].min_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_min_resources_.tolist() if hasattr(attr_HalvingGridSearchCV_min_resources_, 'tolist') else attr_HalvingGridSearchCV_min_resources_`
    })()
  }

  /**
    The actual number of iterations that were run. This is equal to `n_required_iterations_` if `aggressive_elimination` is `true`. Else, this is equal to `min(n_possible_iterations_, n_required_iterations_)`.
   */
  get n_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_iterations_ = bridgeHalvingGridSearchCV[${this.id}].n_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_iterations_.tolist() if hasattr(attr_HalvingGridSearchCV_n_iterations_, 'tolist') else attr_HalvingGridSearchCV_n_iterations_`
    })()
  }

  /**
    The number of iterations that are possible starting with `min_resources_` resources and without exceeding `max_resources_`.
   */
  get n_possible_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_possible_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_possible_iterations_ = bridgeHalvingGridSearchCV[${this.id}].n_possible_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_possible_iterations_.tolist() if hasattr(attr_HalvingGridSearchCV_n_possible_iterations_, 'tolist') else attr_HalvingGridSearchCV_n_possible_iterations_`
    })()
  }

  /**
    The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min_resources_` resources. This will be smaller than `n_possible_iterations_` when there isn’t enough resources.
   */
  get n_required_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_required_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_required_iterations_ = bridgeHalvingGridSearchCV[${this.id}].n_required_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_required_iterations_.tolist() if hasattr(attr_HalvingGridSearchCV_n_required_iterations_, 'tolist') else attr_HalvingGridSearchCV_n_required_iterations_`
    })()
  }

  /**
    A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-cv-results) for details.
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_cv_results_ = bridgeHalvingGridSearchCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_cv_results_.tolist() if hasattr(attr_HalvingGridSearchCV_cv_results_, 'tolist') else attr_HalvingGridSearchCV_cv_results_`
    })()
  }

  /**
    Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.
   */
  get best_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing best_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_best_estimator_ = bridgeHalvingGridSearchCV[${this.id}].best_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_best_estimator_.tolist() if hasattr(attr_HalvingGridSearchCV_best_estimator_, 'tolist') else attr_HalvingGridSearchCV_best_estimator_`
    })()
  }

  /**
    Mean cross-validated score of the best_estimator.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_best_score_ = bridgeHalvingGridSearchCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_best_score_.tolist() if hasattr(attr_HalvingGridSearchCV_best_score_, 'tolist') else attr_HalvingGridSearchCV_best_score_`
    })()
  }

  /**
    Parameter setting that gave the best results on the hold out data.
   */
  get best_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing best_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_best_params_ = bridgeHalvingGridSearchCV[${this.id}].best_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_best_params_.tolist() if hasattr(attr_HalvingGridSearchCV_best_params_, 'tolist') else attr_HalvingGridSearchCV_best_params_`
    })()
  }

  /**
    The index (of the `cv_results_` arrays) which corresponds to the best candidate parameter setting.

    The dict at `search.cv_results_\['params'\]\[search.best_index_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best_score_`).
   */
  get best_index_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing best_index_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_best_index_ = bridgeHalvingGridSearchCV[${this.id}].best_index_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_best_index_.tolist() if hasattr(attr_HalvingGridSearchCV_best_index_, 'tolist') else attr_HalvingGridSearchCV_best_index_`
    })()
  }

  /**
    Scorer function used on the held out data to choose the best parameters for the model.
   */
  get scorer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing scorer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_scorer_ = bridgeHalvingGridSearchCV[${this.id}].scorer_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_scorer_.tolist() if hasattr(attr_HalvingGridSearchCV_scorer_, 'tolist') else attr_HalvingGridSearchCV_scorer_`
    })()
  }

  /**
    The number of cross-validation splits (folds/iterations).
   */
  get n_splits_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing n_splits_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_n_splits_ = bridgeHalvingGridSearchCV[${this.id}].n_splits_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_n_splits_.tolist() if hasattr(attr_HalvingGridSearchCV_n_splits_, 'tolist') else attr_HalvingGridSearchCV_n_splits_`
    })()
  }

  /**
    Seconds used for refitting the best model on the whole dataset.

    This is present only if `refit` is not `false`.
   */
  get refit_time_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing refit_time_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_refit_time_ = bridgeHalvingGridSearchCV[${this.id}].refit_time_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_refit_time_.tolist() if hasattr(attr_HalvingGridSearchCV_refit_time_, 'tolist') else attr_HalvingGridSearchCV_refit_time_`
    })()
  }

  /**
    Whether or not the scorers compute several metrics.
   */
  get multimetric_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing multimetric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_multimetric_ = bridgeHalvingGridSearchCV[${this.id}].multimetric_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_multimetric_.tolist() if hasattr(attr_HalvingGridSearchCV_multimetric_, 'tolist') else attr_HalvingGridSearchCV_multimetric_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if `best_estimator_` is defined (see the documentation for the `refit` parameter for more details) and that `best_estimator_` exposes `feature_names_in_` when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingGridSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingGridSearchCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingGridSearchCV_feature_names_in_ = bridgeHalvingGridSearchCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingGridSearchCV_feature_names_in_.tolist() if hasattr(attr_HalvingGridSearchCV_feature_names_in_, 'tolist') else attr_HalvingGridSearchCV_feature_names_in_`
    })()
  }
}
