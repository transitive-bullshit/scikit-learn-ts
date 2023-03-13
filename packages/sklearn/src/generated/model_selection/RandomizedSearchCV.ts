/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Randomized search on hyper parameters.

  RandomizedSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

  The parameters of the estimator used to apply these methods are optimized by cross-validated search over parameter settings.

  In contrast to GridSearchCV, not all parameter values are tried out, but rather a fixed number of parameter settings is sampled from the specified distributions. The number of parameter settings that are tried is given by n\_iter.

  If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

  Read more in the [User Guide](../grid_search.html#randomized-parameter-search).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)
 */
export class RandomizedSearchCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      An object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.
     */
    estimator?: any

    /**
      Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.
     */
    param_distributions?: any

    /**
      Number of parameter settings that are sampled. n\_iter trades off runtime vs quality of the solution.

      @defaultValue `10`
     */
    n_iter?: number

    /**
      Strategy to evaluate the performance of the cross-validated model on the test set.

      If `scoring` represents a single score, one can use:
     */
    scoring?: string | any[] | any

    /**
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Refit an estimator using the best found parameters on the whole dataset.

      For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

      Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given the `cv\_results`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.

      The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `RandomizedSearchCV` instance.

      Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

      See `scoring` parameter to know more about multiple metric evaluation.

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
      Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

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
    this.id = `RandomizedSearchCV${crypto.randomUUID().split('-')[0]}`
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
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'RandomizedSearchCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import RandomizedSearchCV
try: bridgeRandomizedSearchCV
except NameError: bridgeRandomizedSearchCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_RandomizedSearchCV = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'param_distributions': ${
      this.opts['param_distributions'] ?? undefined
    }, 'n_iter': ${this.opts['n_iter'] ?? undefined}, 'scoring': ${
      this.opts['scoring'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'refit': ${
      this.opts['refit'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'pre_dispatch': ${
      this.opts['pre_dispatch'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'error_score': ${
      this.opts['error_score'] ?? undefined
    }, 'return_train_score': ${this.opts['return_train_score'] ?? undefined}}

ctor_RandomizedSearchCV = {k: v for k, v in ctor_RandomizedSearchCV.items() if v is not None}`

    await this._py
      .ex`bridgeRandomizedSearchCV[${this.id}] = RandomizedSearchCV(**ctor_RandomizedSearchCV)`

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

    await this._py.ex`del bridgeRandomizedSearchCV[${this.id}]`

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
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_decision_function = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_decision_function = {k: v for k, v in pms_RandomizedSearchCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_decision_function = bridgeRandomizedSearchCV[${this.id}].decision_function(**pms_RandomizedSearchCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_decision_function.tolist() if hasattr(res_RandomizedSearchCV_decision_function, 'tolist') else res_RandomizedSearchCV_decision_function`
  }

  /**
    Run fit with all sets of parameters.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike[]

    /**
      Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).
     */
    groups?: ArrayLike

    /**
      Parameters passed to the `fit` method of the estimator.

      If a fit parameter is an array-like whose length is equal to `num\_samples` then it will be split across CV groups along with `X` and `y`. For example, the [sample\_weight](../../glossary.html#term-sample_weight) parameter is split because `len(sample\_weights) \= len(X)`.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomizedSearchCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RandomizedSearchCV_fit = {k: v for k, v in pms_RandomizedSearchCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_fit = bridgeRandomizedSearchCV[${this.id}].fit(**pms_RandomizedSearchCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_fit.tolist() if hasattr(res_RandomizedSearchCV_fit, 'tolist') else res_RandomizedSearchCV_fit`
  }

  /**
    Call inverse\_transform on the estimator with the best found params.

    Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.
   */
  async inverse_transform(opts: {
    /**
      Must fulfill the input assumptions of the underlying estimator.
     */
    Xt?: any
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_inverse_transform = {'Xt': ${
      opts['Xt'] ?? undefined
    }}

pms_RandomizedSearchCV_inverse_transform = {k: v for k, v in pms_RandomizedSearchCV_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_inverse_transform = bridgeRandomizedSearchCV[${this.id}].inverse_transform(**pms_RandomizedSearchCV_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_inverse_transform.tolist() if hasattr(res_RandomizedSearchCV_inverse_transform, 'tolist') else res_RandomizedSearchCV_inverse_transform`
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
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomizedSearchCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_predict = {k: v for k, v in pms_RandomizedSearchCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_predict = bridgeRandomizedSearchCV[${this.id}].predict(**pms_RandomizedSearchCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_predict.tolist() if hasattr(res_RandomizedSearchCV_predict, 'tolist') else res_RandomizedSearchCV_predict`
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
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_predict_log_proba = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_predict_log_proba = {k: v for k, v in pms_RandomizedSearchCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_predict_log_proba = bridgeRandomizedSearchCV[${this.id}].predict_log_proba(**pms_RandomizedSearchCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_predict_log_proba.tolist() if hasattr(res_RandomizedSearchCV_predict_log_proba, 'tolist') else res_RandomizedSearchCV_predict_log_proba`
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
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_predict_proba = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_predict_proba = {k: v for k, v in pms_RandomizedSearchCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_predict_proba = bridgeRandomizedSearchCV[${this.id}].predict_proba(**pms_RandomizedSearchCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_predict_proba.tolist() if hasattr(res_RandomizedSearchCV_predict_proba, 'tolist') else res_RandomizedSearchCV_predict_proba`
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomizedSearchCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_RandomizedSearchCV_score = {k: v for k, v in pms_RandomizedSearchCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_score = bridgeRandomizedSearchCV[${this.id}].score(**pms_RandomizedSearchCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_score.tolist() if hasattr(res_RandomizedSearchCV_score, 'tolist') else res_RandomizedSearchCV_score`
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
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_score_samples = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_score_samples = {k: v for k, v in pms_RandomizedSearchCV_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_score_samples = bridgeRandomizedSearchCV[${this.id}].score_samples(**pms_RandomizedSearchCV_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_score_samples.tolist() if hasattr(res_RandomizedSearchCV_score_samples, 'tolist') else res_RandomizedSearchCV_score_samples`
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
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('RandomizedSearchCV must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_RandomizedSearchCV_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RandomizedSearchCV_transform = {k: v for k, v in pms_RandomizedSearchCV_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RandomizedSearchCV_transform = bridgeRandomizedSearchCV[${this.id}].transform(**pms_RandomizedSearchCV_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RandomizedSearchCV_transform.tolist() if hasattr(res_RandomizedSearchCV_transform, 'tolist') else res_RandomizedSearchCV_transform`
  }

  /**
    A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

    For instance the below given table
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_cv_results_ = bridgeRandomizedSearchCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_cv_results_.tolist() if hasattr(attr_RandomizedSearchCV_cv_results_, 'tolist') else attr_RandomizedSearchCV_cv_results_`
    })()
  }

  /**
    Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

    For multi-metric evaluation, this attribute is present only if `refit` is specified.

    See `refit` parameter for more information on allowed values.
   */
  get best_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing best_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_best_estimator_ = bridgeRandomizedSearchCV[${this.id}].best_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_best_estimator_.tolist() if hasattr(attr_RandomizedSearchCV_best_estimator_, 'tolist') else attr_RandomizedSearchCV_best_estimator_`
    })()
  }

  /**
    Mean cross-validated score of the best\_estimator.

    For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

    This attribute is not available if `refit` is a function.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_best_score_ = bridgeRandomizedSearchCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_best_score_.tolist() if hasattr(attr_RandomizedSearchCV_best_score_, 'tolist') else attr_RandomizedSearchCV_best_score_`
    })()
  }

  /**
    Parameter setting that gave the best results on the hold out data.

    For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.
   */
  get best_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing best_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_best_params_ = bridgeRandomizedSearchCV[${this.id}].best_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_best_params_.tolist() if hasattr(attr_RandomizedSearchCV_best_params_, 'tolist') else attr_RandomizedSearchCV_best_params_`
    })()
  }

  /**
    The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

    The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

    For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.
   */
  get best_index_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing best_index_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_best_index_ = bridgeRandomizedSearchCV[${this.id}].best_index_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_best_index_.tolist() if hasattr(attr_RandomizedSearchCV_best_index_, 'tolist') else attr_RandomizedSearchCV_best_index_`
    })()
  }

  /**
    Scorer function used on the held out data to choose the best parameters for the model.

    For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.
   */
  get scorer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing scorer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_scorer_ = bridgeRandomizedSearchCV[${this.id}].scorer_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_scorer_.tolist() if hasattr(attr_RandomizedSearchCV_scorer_, 'tolist') else attr_RandomizedSearchCV_scorer_`
    })()
  }

  /**
    The number of cross-validation splits (folds/iterations).
   */
  get n_splits_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing n_splits_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_n_splits_ = bridgeRandomizedSearchCV[${this.id}].n_splits_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_n_splits_.tolist() if hasattr(attr_RandomizedSearchCV_n_splits_, 'tolist') else attr_RandomizedSearchCV_n_splits_`
    })()
  }

  /**
    Seconds used for refitting the best model on the whole dataset.

    This is present only if `refit` is not `false`.
   */
  get refit_time_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing refit_time_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_refit_time_ = bridgeRandomizedSearchCV[${this.id}].refit_time_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_refit_time_.tolist() if hasattr(attr_RandomizedSearchCV_refit_time_, 'tolist') else attr_RandomizedSearchCV_refit_time_`
    })()
  }

  /**
    Whether or not the scorers compute several metrics.
   */
  get multimetric_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing multimetric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_multimetric_ = bridgeRandomizedSearchCV[${this.id}].multimetric_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_multimetric_.tolist() if hasattr(attr_RandomizedSearchCV_multimetric_, 'tolist') else attr_RandomizedSearchCV_multimetric_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This RandomizedSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'RandomizedSearchCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RandomizedSearchCV_feature_names_in_ = bridgeRandomizedSearchCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RandomizedSearchCV_feature_names_in_.tolist() if hasattr(attr_RandomizedSearchCV_feature_names_in_, 'tolist') else attr_RandomizedSearchCV_feature_names_in_`
    })()
  }
}
