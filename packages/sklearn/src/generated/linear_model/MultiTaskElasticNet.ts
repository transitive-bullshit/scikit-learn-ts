/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer.

  The optimization objective for MultiTaskElasticNet is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNet.html)
 */
export class MultiTaskElasticNet {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Constant that multiplies the L1/L2 term. Defaults to 1.0.

      @defaultValue `1`
     */
    alpha?: number

    /**
      The ElasticNet mixing parameter, with 0 < l1_ratio <= 1. For l1_ratio = 1 the penalty is an L1/L2 penalty. For l1_ratio = 0 it is an L2 penalty. For `0 < l1_ratio < 1`, the penalty is a combination of L1/L2 and L2.

      @defaultValue `0.5`
     */
    l1_ratio?: number

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      The maximum number of iterations.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

      @defaultValue `'cyclic'`
     */
    selection?: 'cyclic' | 'random'
  }) {
    this.id = `MultiTaskElasticNet${crypto.randomUUID().split('-')[0]}`
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
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MultiTaskElasticNet.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import MultiTaskElasticNet
try: bridgeMultiTaskElasticNet
except NameError: bridgeMultiTaskElasticNet = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MultiTaskElasticNet = {'alpha': ${this.opts['alpha'] ?? undefined}, 'l1_ratio': ${this.opts['l1_ratio'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_MultiTaskElasticNet = {k: v for k, v in ctor_MultiTaskElasticNet.items() if v is not None}`

    await this._py
      .ex`bridgeMultiTaskElasticNet[${this.id}] = MultiTaskElasticNet(**ctor_MultiTaskElasticNet)`

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

    await this._py.ex`del bridgeMultiTaskElasticNet[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit MultiTaskElasticNet model with coordinate descent.
   */
  async fit(opts: {
    /**
      Data.
     */
    X?: NDArray[]

    /**
      Target. Will be cast to X’s dtype if necessary.
     */
    y?: NDArray[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNet must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_MultiTaskElasticNet_fit = {k: v for k, v in pms_MultiTaskElasticNet_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_fit = bridgeMultiTaskElasticNet[${this.id}].fit(**pms_MultiTaskElasticNet_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_fit.tolist() if hasattr(res_MultiTaskElasticNet_fit, 'tolist') else res_MultiTaskElasticNet_fit`
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
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_MultiTaskElasticNet_get_metadata_routing = {k: v for k, v in pms_MultiTaskElasticNet_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_get_metadata_routing = bridgeMultiTaskElasticNet[${this.id}].get_metadata_routing(**pms_MultiTaskElasticNet_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_get_metadata_routing.tolist() if hasattr(res_MultiTaskElasticNet_get_metadata_routing, 'tolist') else res_MultiTaskElasticNet_get_metadata_routing`
  }

  /**
    Compute elastic net path with coordinate descent.

    The elastic net optimization function varies for mono and multi-outputs.

    For mono-output tasks it is:
   */
  async path(opts: {
    /**
      Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike | SparseMatrix

    /**
      Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1_ratio=1` corresponds to the Lasso.

      @defaultValue `0.5`
     */
    l1_ratio?: number

    /**
      Length of the path. `eps=1e-3` means that `alpha_min / alpha_max \= 1e-3`.

      @defaultValue `0.001`
     */
    eps?: number

    /**
      Number of alphas along the regularization path.

      @defaultValue `100`
     */
    n_alphas?: number

    /**
      List of alphas where to compute the models. If `undefined` alphas are set automatically.
     */
    alphas?: ArrayLike

    /**
      Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

      @defaultValue `'auto'`
     */
    precompute?: 'auto' | boolean | ArrayLike[]

    /**
      Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.
     */
    Xy?: ArrayLike

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      The initial values of the coefficients.
     */
    coef_init?: ArrayLike

    /**
      Amount of verbosity.

      @defaultValue `false`
     */
    verbose?: boolean | number

    /**
      Whether to return the number of iterations or not.

      @defaultValue `false`
     */
    return_n_iter?: boolean

    /**
      If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

      @defaultValue `false`
     */
    positive?: boolean

    /**
      If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

      @defaultValue `true`
     */
    check_input?: boolean

    /**
      Keyword arguments passed to the coordinate descent solver.
     */
    params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNet must call init() before path()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_path = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'l1_ratio': ${opts['l1_ratio'] ?? undefined}, 'eps': ${opts['eps'] ?? undefined}, 'n_alphas': ${opts['n_alphas'] ?? undefined}, 'alphas': ${opts['alphas'] ?? undefined}, 'precompute': np.array(${opts['precompute'] ?? undefined}) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${opts['Xy'] ?? undefined}) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${opts['copy_X'] ?? undefined}, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${opts['coef_init'] !== undefined} else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${opts['return_n_iter'] ?? undefined}, 'positive': ${opts['positive'] ?? undefined}, 'check_input': ${opts['check_input'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_MultiTaskElasticNet_path = {k: v for k, v in pms_MultiTaskElasticNet_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_path = bridgeMultiTaskElasticNet[${this.id}].path(**pms_MultiTaskElasticNet_path)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_path.tolist() if hasattr(res_MultiTaskElasticNet_path, 'tolist') else res_MultiTaskElasticNet_path`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNet must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_predict = {'X': ${opts['X'] ?? undefined}}

pms_MultiTaskElasticNet_predict = {k: v for k, v in pms_MultiTaskElasticNet_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_predict = bridgeMultiTaskElasticNet[${this.id}].predict(**pms_MultiTaskElasticNet_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_predict.tolist() if hasattr(res_MultiTaskElasticNet_predict, 'tolist') else res_MultiTaskElasticNet_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNet must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_MultiTaskElasticNet_score = {k: v for k, v in pms_MultiTaskElasticNet_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_score = bridgeMultiTaskElasticNet[${this.id}].score(**pms_MultiTaskElasticNet_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_score.tolist() if hasattr(res_MultiTaskElasticNet_score, 'tolist') else res_MultiTaskElasticNet_score`
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
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_set_fit_request = {'check_input': ${opts['check_input'] ?? undefined}, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiTaskElasticNet_set_fit_request = {k: v for k, v in pms_MultiTaskElasticNet_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_set_fit_request = bridgeMultiTaskElasticNet[${this.id}].set_fit_request(**pms_MultiTaskElasticNet_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_set_fit_request.tolist() if hasattr(res_MultiTaskElasticNet_set_fit_request, 'tolist') else res_MultiTaskElasticNet_set_fit_request`
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
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskElasticNet_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiTaskElasticNet_set_score_request = {k: v for k, v in pms_MultiTaskElasticNet_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNet_set_score_request = bridgeMultiTaskElasticNet[${this.id}].set_score_request(**pms_MultiTaskElasticNet_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNet_set_score_request.tolist() if hasattr(res_MultiTaskElasticNet_set_score_request, 'tolist') else res_MultiTaskElasticNet_set_score_request`
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_intercept_ = bridgeMultiTaskElasticNet[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_intercept_.tolist() if hasattr(attr_MultiTaskElasticNet_intercept_, 'tolist') else attr_MultiTaskElasticNet_intercept_`
    })()
  }

  /**
    Parameter vector (W in the cost function formula). If a 1D y is passed in at fit (non multi-task usage), `coef_` is then a 1D array. Note that `coef_` stores the transpose of `W`, `W.T`.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_coef_ = bridgeMultiTaskElasticNet[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_coef_.tolist() if hasattr(attr_MultiTaskElasticNet_coef_, 'tolist') else attr_MultiTaskElasticNet_coef_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_n_iter_ = bridgeMultiTaskElasticNet[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_n_iter_.tolist() if hasattr(attr_MultiTaskElasticNet_n_iter_, 'tolist') else attr_MultiTaskElasticNet_n_iter_`
    })()
  }

  /**
    The dual gaps at the end of the optimization.
   */
  get dual_gap_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing dual_gap_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_dual_gap_ = bridgeMultiTaskElasticNet[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_dual_gap_.tolist() if hasattr(attr_MultiTaskElasticNet_dual_gap_, 'tolist') else attr_MultiTaskElasticNet_dual_gap_`
    })()
  }

  /**
    The tolerance scaled scaled by the variance of the target `y`.
   */
  get eps_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing eps_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_eps_ = bridgeMultiTaskElasticNet[${this.id}].eps_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_eps_.tolist() if hasattr(attr_MultiTaskElasticNet_eps_, 'tolist') else attr_MultiTaskElasticNet_eps_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_n_features_in_ = bridgeMultiTaskElasticNet[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_n_features_in_.tolist() if hasattr(attr_MultiTaskElasticNet_n_features_in_, 'tolist') else attr_MultiTaskElasticNet_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNet instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNet must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNet_feature_names_in_ = bridgeMultiTaskElasticNet[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNet_feature_names_in_.tolist() if hasattr(attr_MultiTaskElasticNet_feature_names_in_, 'tolist') else attr_MultiTaskElasticNet_feature_names_in_`
    })()
  }
}
