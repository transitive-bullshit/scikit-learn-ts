/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Exhaustive search over specified parameter values for an estimator.

  Important members are fit, predict.

  GridSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

  The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

  Read more in the [User Guide](../grid_search.html#grid-search).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
 */
export class GridSearchCV {
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
      Dictionary with parameters names (`str`) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.
     */
    param_grid?: any

    /**
      Strategy to evaluate the performance of the cross-validated model on the test set.

      If `scoring` represents a single score, one can use:
     */
    scoring?: string | any[] | any

    /**
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Refit an estimator using the best found parameters on the whole dataset.

      For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

      Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given `cv\_results\_`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.

      The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `GridSearchCV` instance.

      Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

      See `scoring` parameter to know more about multiple metric evaluation.

      See [Custom refit strategy of a grid search with cross-validation](../../auto_examples/model_selection/plot_grid_search_digits.html#sphx-glr-auto-examples-model-selection-plot-grid-search-digits-py) to see how to design a custom selection strategy using a callable via `refit`.

      @defaultValue `true`
     */
    refit?: boolean

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:
     */
    cv?: number

    /**
      Controls the verbosity: the higher, the more messages.
     */
    verbose?: number

    /**
      Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:

      @defaultValue `'2*n_jobs'`
     */
    pre_dispatch?: string

    /**
      Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error.
     */
    error_score?: 'raise'

    /**
      If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

      @defaultValue `false`
     */
    return_train_score?: boolean
  }) {
    this.id = `GridSearchCV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GridSearchCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import GridSearchCV
try: bridgeGridSearchCV
except NameError: bridgeGridSearchCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GridSearchCV = {'estimator': ${this.opts['estimator'] ?? undefined}, 'param_grid': ${this.opts['param_grid'] ?? undefined}, 'scoring': ${this.opts['scoring'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'refit': ${this.opts['refit'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'pre_dispatch': ${this.opts['pre_dispatch'] ?? undefined}, 'error_score': ${this.opts['error_score'] ?? undefined}, 'return_train_score': ${this.opts['return_train_score'] ?? undefined}}

ctor_GridSearchCV = {k: v for k, v in ctor_GridSearchCV.items() if v is not None}`

    await this._py
      .ex`bridgeGridSearchCV[${this.id}] = GridSearchCV(**ctor_GridSearchCV)`

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

    await this._py.ex`del bridgeGridSearchCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Call decision\_function on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `decision\_function`.
   */
  async decision_function(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_decision_function = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_decision_function = {k: v for k, v in pms_GridSearchCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_decision_function = bridgeGridSearchCV[${this.id}].decision_function(**pms_GridSearchCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_decision_function.tolist() if hasattr(res_GridSearchCV_decision_function, 'tolist') else res_GridSearchCV_decision_function`
  }

  /**
    Run fit with all sets of parameters.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For precomputed kernel or distance matrix, the expected shape of X is (n\_samples, n\_samples).
     */
    X?: ArrayLike[]

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike[]

    /**
      Parameters passed to the `fit` method of the estimator, the scorer, and the CV splitter.

      If a fit parameter is an array-like whose length is equal to `num\_samples` then it will be split across CV groups along with `X` and `y`. For example, the [sample\_weight](../../glossary.html#term-sample_weight) parameter is split because `len(sample\_weights) \= len(X)`.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_GridSearchCV_fit = {k: v for k, v in pms_GridSearchCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_fit = bridgeGridSearchCV[${this.id}].fit(**pms_GridSearchCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_fit.tolist() if hasattr(res_GridSearchCV_fit, 'tolist') else res_GridSearchCV_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GridSearchCV_get_metadata_routing = {k: v for k, v in pms_GridSearchCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_get_metadata_routing = bridgeGridSearchCV[${this.id}].get_metadata_routing(**pms_GridSearchCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_get_metadata_routing.tolist() if hasattr(res_GridSearchCV_get_metadata_routing, 'tolist') else res_GridSearchCV_get_metadata_routing`
  }

  /**
    Call inverse\_transform on the estimator with the best found params.

    Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.
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
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_inverse_transform = {'X': ${opts['X'] ?? undefined}, 'Xt': ${opts['Xt'] ?? undefined}}

pms_GridSearchCV_inverse_transform = {k: v for k, v in pms_GridSearchCV_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_inverse_transform = bridgeGridSearchCV[${this.id}].inverse_transform(**pms_GridSearchCV_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_inverse_transform.tolist() if hasattr(res_GridSearchCV_inverse_transform, 'tolist') else res_GridSearchCV_inverse_transform`
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
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_predict = {k: v for k, v in pms_GridSearchCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_predict = bridgeGridSearchCV[${this.id}].predict(**pms_GridSearchCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_predict.tolist() if hasattr(res_GridSearchCV_predict, 'tolist') else res_GridSearchCV_predict`
  }

  /**
    Call predict\_log\_proba on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.
   */
  async predict_log_proba(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_predict_log_proba = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_predict_log_proba = {k: v for k, v in pms_GridSearchCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_predict_log_proba = bridgeGridSearchCV[${this.id}].predict_log_proba(**pms_GridSearchCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_predict_log_proba.tolist() if hasattr(res_GridSearchCV_predict_log_proba, 'tolist') else res_GridSearchCV_predict_log_proba`
  }

  /**
    Call predict\_proba on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `predict\_proba`.
   */
  async predict_proba(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_predict_proba = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_predict_proba = {k: v for k, v in pms_GridSearchCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_predict_proba = bridgeGridSearchCV[${this.id}].predict_proba(**pms_GridSearchCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_predict_proba.tolist() if hasattr(res_GridSearchCV_predict_proba, 'tolist') else res_GridSearchCV_predict_proba`
  }

  /**
    Return the score on the given data, if the estimator has been refit.

    This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.
   */
  async score(opts: {
    /**
      Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
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
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_GridSearchCV_score = {k: v for k, v in pms_GridSearchCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_score = bridgeGridSearchCV[${this.id}].score(**pms_GridSearchCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_score.tolist() if hasattr(res_GridSearchCV_score, 'tolist') else res_GridSearchCV_score`
  }

  /**
    Call score\_samples on the estimator with the best found parameters.

    Only available if `refit=True` and the underlying estimator supports `score\_samples`.
   */
  async score_samples(opts: {
    /**
      Data to predict on. Must fulfill input requirements of the underlying estimator.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before score_samples()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_score_samples = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_score_samples = {k: v for k, v in pms_GridSearchCV_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_score_samples = bridgeGridSearchCV[${this.id}].score_samples(**pms_GridSearchCV_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_score_samples.tolist() if hasattr(res_GridSearchCV_score_samples, 'tolist') else res_GridSearchCV_score_samples`
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
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_GridSearchCV_transform = {'X': ${opts['X'] ?? undefined}}

pms_GridSearchCV_transform = {k: v for k, v in pms_GridSearchCV_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GridSearchCV_transform = bridgeGridSearchCV[${this.id}].transform(**pms_GridSearchCV_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GridSearchCV_transform.tolist() if hasattr(res_GridSearchCV_transform, 'tolist') else res_GridSearchCV_transform`
  }

  /**
    A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

    For instance the below given table
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_cv_results_ = bridgeGridSearchCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_cv_results_.tolist() if hasattr(attr_GridSearchCV_cv_results_, 'tolist') else attr_GridSearchCV_cv_results_`
    })()
  }

  /**
    Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

    See `refit` parameter for more information on allowed values.
   */
  get best_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing best_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_best_estimator_ = bridgeGridSearchCV[${this.id}].best_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_best_estimator_.tolist() if hasattr(attr_GridSearchCV_best_estimator_, 'tolist') else attr_GridSearchCV_best_estimator_`
    })()
  }

  /**
    Mean cross-validated score of the best\_estimator

    For multi-metric evaluation, this is present only if `refit` is specified.

    This attribute is not available if `refit` is a function.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_best_score_ = bridgeGridSearchCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_best_score_.tolist() if hasattr(attr_GridSearchCV_best_score_, 'tolist') else attr_GridSearchCV_best_score_`
    })()
  }

  /**
    Parameter setting that gave the best results on the hold out data.

    For multi-metric evaluation, this is present only if `refit` is specified.
   */
  get best_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing best_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_best_params_ = bridgeGridSearchCV[${this.id}].best_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_best_params_.tolist() if hasattr(attr_GridSearchCV_best_params_, 'tolist') else attr_GridSearchCV_best_params_`
    })()
  }

  /**
    The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

    The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

    For multi-metric evaluation, this is present only if `refit` is specified.
   */
  get best_index_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing best_index_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_best_index_ = bridgeGridSearchCV[${this.id}].best_index_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_best_index_.tolist() if hasattr(attr_GridSearchCV_best_index_, 'tolist') else attr_GridSearchCV_best_index_`
    })()
  }

  /**
    Scorer function used on the held out data to choose the best parameters for the model.

    For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.
   */
  get scorer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GridSearchCV must call init() before accessing scorer_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_scorer_ = bridgeGridSearchCV[${this.id}].scorer_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_scorer_.tolist() if hasattr(attr_GridSearchCV_scorer_, 'tolist') else attr_GridSearchCV_scorer_`
    })()
  }

  /**
    The number of cross-validation splits (folds/iterations).
   */
  get n_splits_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing n_splits_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_n_splits_ = bridgeGridSearchCV[${this.id}].n_splits_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_n_splits_.tolist() if hasattr(attr_GridSearchCV_n_splits_, 'tolist') else attr_GridSearchCV_n_splits_`
    })()
  }

  /**
    Seconds used for refitting the best model on the whole dataset.

    This is present only if `refit` is not `false`.
   */
  get refit_time_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing refit_time_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_refit_time_ = bridgeGridSearchCV[${this.id}].refit_time_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_refit_time_.tolist() if hasattr(attr_GridSearchCV_refit_time_, 'tolist') else attr_GridSearchCV_refit_time_`
    })()
  }

  /**
    Whether or not the scorers compute several metrics.
   */
  get multimetric_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing multimetric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_multimetric_ = bridgeGridSearchCV[${this.id}].multimetric_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_multimetric_.tolist() if hasattr(attr_GridSearchCV_multimetric_, 'tolist') else attr_GridSearchCV_multimetric_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GridSearchCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GridSearchCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GridSearchCV_feature_names_in_ = bridgeGridSearchCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GridSearchCV_feature_names_in_.tolist() if hasattr(attr_GridSearchCV_feature_names_in_, 'tolist') else attr_GridSearchCV_feature_names_in_`
    })()
  }
}
