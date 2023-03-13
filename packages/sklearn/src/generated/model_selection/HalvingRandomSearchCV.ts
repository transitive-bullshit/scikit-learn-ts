/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Randomized search on hyper parameters.

  The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

  The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n\_candidates`.

  Read more in the [User guide](../grid_search.html#successive-halving-user-guide).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)
 */
export class HalvingRandomSearchCV {
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
      Dictionary with parameters names (string) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly.
     */
    param_distributions?: any

    /**
      The number of candidate parameters to sample, at the first iteration. Using ‘exhaust’ will sample enough candidates so that the last iteration uses as many resources as possible, based on `min\_resources`, `max\_resources` and `factor`. In this case, `min\_resources` cannot be ‘exhaust’.

      @defaultValue `'exhaust'`
     */
    n_candidates?: number

    /**
      The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

      @defaultValue `3`
     */
    factor?: number

    /**
      Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n\_iterations’ or ‘n\_estimators’ for a gradient boosting estimator. In this case `max\_resources` cannot be ‘auto’ and must be set explicitly.

      @defaultValue `'n_samples'`
     */
    resource?: 'n_samples' | string

    /**
      The maximum number of resources that any candidate is allowed to use for a given iteration. By default, this is set `n\_samples` when `resource='n\_samples'` (default), else an error is raised.

      @defaultValue `'auto'`
     */
    max_resources?: number

    /**
      The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

      @defaultValue `'smallest'`
     */
    min_resources?: 'exhaust' | 'smallest' | number

    /**
      This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](../grid_search.html#aggressive-elimination) for more details.

      @defaultValue `false`
     */
    aggressive_elimination?: boolean

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:

      @defaultValue `5`
     */
    cv?: number

    /**
      A single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.
     */
    scoring?: string

    /**
      If `true`, refit an estimator using the best found parameters on the whole dataset.

      The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingRandomSearchCV` instance.

      @defaultValue `true`
     */
    refit?: boolean

    /**
      Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.
     */
    error_score?: 'raise'

    /**
      If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

      @defaultValue `false`
     */
    return_train_score?: boolean

    /**
      Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Also used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Controls the verbosity: the higher, the more messages.
     */
    verbose?: number
  }) {
    this.id = `HalvingRandomSearchCV${crypto.randomUUID().split('-')[0]}`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'HalvingRandomSearchCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import HalvingRandomSearchCV
try: bridgeHalvingRandomSearchCV
except NameError: bridgeHalvingRandomSearchCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_HalvingRandomSearchCV = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'param_distributions': ${
      this.opts['param_distributions'] ?? undefined
    }, 'n_candidates': ${this.opts['n_candidates'] ?? undefined}, 'factor': ${
      this.opts['factor'] ?? undefined
    }, 'resource': ${this.opts['resource'] ?? undefined}, 'max_resources': ${
      this.opts['max_resources'] ?? undefined
    }, 'min_resources': ${
      this.opts['min_resources'] ?? undefined
    }, 'aggressive_elimination': ${
      this.opts['aggressive_elimination'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'scoring': ${
      this.opts['scoring'] ?? undefined
    }, 'refit': ${this.opts['refit'] ?? undefined}, 'error_score': ${
      this.opts['error_score'] ?? undefined
    }, 'return_train_score': ${
      this.opts['return_train_score'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_HalvingRandomSearchCV = {k: v for k, v in ctor_HalvingRandomSearchCV.items() if v is not None}`

    await this._py
      .ex`bridgeHalvingRandomSearchCV[${this.id}] = HalvingRandomSearchCV(**ctor_HalvingRandomSearchCV)`

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

    await this._py.ex`del bridgeHalvingRandomSearchCV[${this.id}]`

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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_decision_function = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_decision_function = {k: v for k, v in pms_HalvingRandomSearchCV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_decision_function = bridgeHalvingRandomSearchCV[${this.id}].decision_function(**pms_HalvingRandomSearchCV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_decision_function.tolist() if hasattr(res_HalvingRandomSearchCV_decision_function, 'tolist') else res_HalvingRandomSearchCV_decision_function`
  }

  /**
    Run fit with all sets of parameters.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike

    /**
      Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).
     */
    groups?: ArrayLike

    /**
      Parameters passed to the `fit` method of the estimator.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingRandomSearchCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_HalvingRandomSearchCV_fit = {k: v for k, v in pms_HalvingRandomSearchCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_fit = bridgeHalvingRandomSearchCV[${this.id}].fit(**pms_HalvingRandomSearchCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_fit.tolist() if hasattr(res_HalvingRandomSearchCV_fit, 'tolist') else res_HalvingRandomSearchCV_fit`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_inverse_transform = {'Xt': ${
      opts['Xt'] ?? undefined
    }}

pms_HalvingRandomSearchCV_inverse_transform = {k: v for k, v in pms_HalvingRandomSearchCV_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_inverse_transform = bridgeHalvingRandomSearchCV[${this.id}].inverse_transform(**pms_HalvingRandomSearchCV_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_inverse_transform.tolist() if hasattr(res_HalvingRandomSearchCV_inverse_transform, 'tolist') else res_HalvingRandomSearchCV_inverse_transform`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingRandomSearchCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_predict = {k: v for k, v in pms_HalvingRandomSearchCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_predict = bridgeHalvingRandomSearchCV[${this.id}].predict(**pms_HalvingRandomSearchCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_predict.tolist() if hasattr(res_HalvingRandomSearchCV_predict, 'tolist') else res_HalvingRandomSearchCV_predict`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_predict_log_proba = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_predict_log_proba = {k: v for k, v in pms_HalvingRandomSearchCV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_predict_log_proba = bridgeHalvingRandomSearchCV[${this.id}].predict_log_proba(**pms_HalvingRandomSearchCV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_predict_log_proba.tolist() if hasattr(res_HalvingRandomSearchCV_predict_log_proba, 'tolist') else res_HalvingRandomSearchCV_predict_log_proba`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_predict_proba = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_predict_proba = {k: v for k, v in pms_HalvingRandomSearchCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_predict_proba = bridgeHalvingRandomSearchCV[${this.id}].predict_proba(**pms_HalvingRandomSearchCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_predict_proba.tolist() if hasattr(res_HalvingRandomSearchCV_predict_proba, 'tolist') else res_HalvingRandomSearchCV_predict_proba`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('HalvingRandomSearchCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_HalvingRandomSearchCV_score = {k: v for k, v in pms_HalvingRandomSearchCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_score = bridgeHalvingRandomSearchCV[${this.id}].score(**pms_HalvingRandomSearchCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_score.tolist() if hasattr(res_HalvingRandomSearchCV_score, 'tolist') else res_HalvingRandomSearchCV_score`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_score_samples = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_score_samples = {k: v for k, v in pms_HalvingRandomSearchCV_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_score_samples = bridgeHalvingRandomSearchCV[${this.id}].score_samples(**pms_HalvingRandomSearchCV_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_score_samples.tolist() if hasattr(res_HalvingRandomSearchCV_score_samples, 'tolist') else res_HalvingRandomSearchCV_score_samples`
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
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_HalvingRandomSearchCV_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HalvingRandomSearchCV_transform = {k: v for k, v in pms_HalvingRandomSearchCV_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HalvingRandomSearchCV_transform = bridgeHalvingRandomSearchCV[${this.id}].transform(**pms_HalvingRandomSearchCV_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_HalvingRandomSearchCV_transform.tolist() if hasattr(res_HalvingRandomSearchCV_transform, 'tolist') else res_HalvingRandomSearchCV_transform`
  }

  /**
    The amount of resources used at each iteration.
   */
  get n_resources_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_resources_ = bridgeHalvingRandomSearchCV[${this.id}].n_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_resources_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_resources_, 'tolist') else attr_HalvingRandomSearchCV_n_resources_`
    })()
  }

  /**
    The number of candidate parameters that were evaluated at each iteration.
   */
  get n_candidates_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_candidates_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_candidates_ = bridgeHalvingRandomSearchCV[${this.id}].n_candidates_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_candidates_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_candidates_, 'tolist') else attr_HalvingRandomSearchCV_n_candidates_`
    })()
  }

  /**
    The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`
   */
  get n_remaining_candidates_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_remaining_candidates_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_remaining_candidates_ = bridgeHalvingRandomSearchCV[${this.id}].n_remaining_candidates_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_remaining_candidates_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_remaining_candidates_, 'tolist') else attr_HalvingRandomSearchCV_n_remaining_candidates_`
    })()
  }

  /**
    The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.
   */
  get max_resources_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing max_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_max_resources_ = bridgeHalvingRandomSearchCV[${this.id}].max_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_max_resources_.tolist() if hasattr(attr_HalvingRandomSearchCV_max_resources_, 'tolist') else attr_HalvingRandomSearchCV_max_resources_`
    })()
  }

  /**
    The amount of resources that are allocated for each candidate at the first iteration.
   */
  get min_resources_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing min_resources_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_min_resources_ = bridgeHalvingRandomSearchCV[${this.id}].min_resources_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_min_resources_.tolist() if hasattr(attr_HalvingRandomSearchCV_min_resources_, 'tolist') else attr_HalvingRandomSearchCV_min_resources_`
    })()
  }

  /**
    The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.
   */
  get n_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_iterations_ = bridgeHalvingRandomSearchCV[${this.id}].n_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_iterations_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_iterations_, 'tolist') else attr_HalvingRandomSearchCV_n_iterations_`
    })()
  }

  /**
    The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.
   */
  get n_possible_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_possible_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_possible_iterations_ = bridgeHalvingRandomSearchCV[${this.id}].n_possible_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_possible_iterations_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_possible_iterations_, 'tolist') else attr_HalvingRandomSearchCV_n_possible_iterations_`
    })()
  }

  /**
    The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.
   */
  get n_required_iterations_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_required_iterations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_required_iterations_ = bridgeHalvingRandomSearchCV[${this.id}].n_required_iterations_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_required_iterations_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_required_iterations_, 'tolist') else attr_HalvingRandomSearchCV_n_required_iterations_`
    })()
  }

  /**
    A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](../grid_search.html#successive-halving-cv-results) for details.
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_cv_results_ = bridgeHalvingRandomSearchCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_cv_results_.tolist() if hasattr(attr_HalvingRandomSearchCV_cv_results_, 'tolist') else attr_HalvingRandomSearchCV_cv_results_`
    })()
  }

  /**
    Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.
   */
  get best_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing best_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_best_estimator_ = bridgeHalvingRandomSearchCV[${this.id}].best_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_best_estimator_.tolist() if hasattr(attr_HalvingRandomSearchCV_best_estimator_, 'tolist') else attr_HalvingRandomSearchCV_best_estimator_`
    })()
  }

  /**
    Mean cross-validated score of the best\_estimator.
   */
  get best_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing best_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_best_score_ = bridgeHalvingRandomSearchCV[${this.id}].best_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_best_score_.tolist() if hasattr(attr_HalvingRandomSearchCV_best_score_, 'tolist') else attr_HalvingRandomSearchCV_best_score_`
    })()
  }

  /**
    Parameter setting that gave the best results on the hold out data.
   */
  get best_params_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing best_params_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_best_params_ = bridgeHalvingRandomSearchCV[${this.id}].best_params_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_best_params_.tolist() if hasattr(attr_HalvingRandomSearchCV_best_params_, 'tolist') else attr_HalvingRandomSearchCV_best_params_`
    })()
  }

  /**
    The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

    The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).
   */
  get best_index_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing best_index_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_best_index_ = bridgeHalvingRandomSearchCV[${this.id}].best_index_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_best_index_.tolist() if hasattr(attr_HalvingRandomSearchCV_best_index_, 'tolist') else attr_HalvingRandomSearchCV_best_index_`
    })()
  }

  /**
    Scorer function used on the held out data to choose the best parameters for the model.
   */
  get scorer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing scorer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_scorer_ = bridgeHalvingRandomSearchCV[${this.id}].scorer_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_scorer_.tolist() if hasattr(attr_HalvingRandomSearchCV_scorer_, 'tolist') else attr_HalvingRandomSearchCV_scorer_`
    })()
  }

  /**
    The number of cross-validation splits (folds/iterations).
   */
  get n_splits_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing n_splits_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_n_splits_ = bridgeHalvingRandomSearchCV[${this.id}].n_splits_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_n_splits_.tolist() if hasattr(attr_HalvingRandomSearchCV_n_splits_, 'tolist') else attr_HalvingRandomSearchCV_n_splits_`
    })()
  }

  /**
    Seconds used for refitting the best model on the whole dataset.

    This is present only if `refit` is not `false`.
   */
  get refit_time_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing refit_time_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_refit_time_ = bridgeHalvingRandomSearchCV[${this.id}].refit_time_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_refit_time_.tolist() if hasattr(attr_HalvingRandomSearchCV_refit_time_, 'tolist') else attr_HalvingRandomSearchCV_refit_time_`
    })()
  }

  /**
    Whether or not the scorers compute several metrics.
   */
  get multimetric_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing multimetric_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_multimetric_ = bridgeHalvingRandomSearchCV[${this.id}].multimetric_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_multimetric_.tolist() if hasattr(attr_HalvingRandomSearchCV_multimetric_, 'tolist') else attr_HalvingRandomSearchCV_multimetric_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HalvingRandomSearchCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HalvingRandomSearchCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HalvingRandomSearchCV_feature_names_in_ = bridgeHalvingRandomSearchCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HalvingRandomSearchCV_feature_names_in_.tolist() if hasattr(attr_HalvingRandomSearchCV_feature_names_in_, 'tolist') else attr_HalvingRandomSearchCV_feature_names_in_`
    })()
  }
}
