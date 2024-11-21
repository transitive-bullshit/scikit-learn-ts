/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear Model trained with L1 prior as regularizer (aka the Lasso).

  The optimization objective for Lasso is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html)
 */
export class Lasso {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Constant that multiplies the L1 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.

      When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Lasso` object is not advised. Instead, you should use the [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Whether to calculate the intercept for this model. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Whether to use a precomputed Gram matrix to speed up calculations. The Gram matrix can also be passed as argument. For sparse input this option is always `false` to preserve sparsity.

      @defaultValue `false`
     */
    precompute?: boolean | ArrayLike[]

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
      The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`, see Notes below.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      When set to `true`, forces the coefficients to be positive.

      @defaultValue `false`
     */
    positive?: boolean

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
    this.id = `Lasso${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Lasso.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import Lasso
try: bridgeLasso
except NameError: bridgeLasso = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Lasso = {'alpha': ${this.opts['alpha'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'precompute': np.array(${this.opts['precompute'] ?? undefined}) if ${this.opts['precompute'] !== undefined} else None, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'positive': ${this.opts['positive'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_Lasso = {k: v for k, v in ctor_Lasso.items() if v is not None}`

    await this._py.ex`bridgeLasso[${this.id}] = Lasso(**ctor_Lasso)`

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

    await this._py.ex`del bridgeLasso[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit model with coordinate descent.
   */
  async fit(opts: {
    /**
      Data.

      Note that large sparse matrices and arrays requiring `int64` indices are not accepted.
     */
    X?: SparseMatrix

    /**
      Target. Will be cast to X’s dtype if necessary.
     */
    y?: NDArray

    /**
      Sample weights. Internally, the `sample_weight` vector will be rescaled to sum to `n_samples`.
     */
    sample_weight?: number | ArrayLike

    /**
      Allow to bypass several input checking. Don’t use this parameter unless you know what you do.

      @defaultValue `true`
     */
    check_input?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_fit = {'X': ${opts['X'] ?? undefined}, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'check_input': ${opts['check_input'] ?? undefined}}

pms_Lasso_fit = {k: v for k, v in pms_Lasso_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_fit = bridgeLasso[${this.id}].fit(**pms_Lasso_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_fit.tolist() if hasattr(res_Lasso_fit, 'tolist') else res_Lasso_fit`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_Lasso_get_metadata_routing = {k: v for k, v in pms_Lasso_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_get_metadata_routing = bridgeLasso[${this.id}].get_metadata_routing(**pms_Lasso_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_get_metadata_routing.tolist() if hasattr(res_Lasso_get_metadata_routing, 'tolist') else res_Lasso_get_metadata_routing`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before path()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_path = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'l1_ratio': ${opts['l1_ratio'] ?? undefined}, 'eps': ${opts['eps'] ?? undefined}, 'n_alphas': ${opts['n_alphas'] ?? undefined}, 'alphas': ${opts['alphas'] ?? undefined}, 'precompute': np.array(${opts['precompute'] ?? undefined}) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${opts['Xy'] ?? undefined}) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${opts['copy_X'] ?? undefined}, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${opts['coef_init'] !== undefined} else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${opts['return_n_iter'] ?? undefined}, 'positive': ${opts['positive'] ?? undefined}, 'check_input': ${opts['check_input'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Lasso_path = {k: v for k, v in pms_Lasso_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_path = bridgeLasso[${this.id}].path(**pms_Lasso_path)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_path.tolist() if hasattr(res_Lasso_path, 'tolist') else res_Lasso_path`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_Lasso_predict = {'X': ${opts['X'] ?? undefined}}

pms_Lasso_predict = {k: v for k, v in pms_Lasso_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_predict = bridgeLasso[${this.id}].predict(**pms_Lasso_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_predict.tolist() if hasattr(res_Lasso_predict, 'tolist') else res_Lasso_predict`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_Lasso_score = {k: v for k, v in pms_Lasso_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_score = bridgeLasso[${this.id}].score(**pms_Lasso_score)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_score.tolist() if hasattr(res_Lasso_score, 'tolist') else res_Lasso_score`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_set_fit_request = {'check_input': ${opts['check_input'] ?? undefined}, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Lasso_set_fit_request = {k: v for k, v in pms_Lasso_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_set_fit_request = bridgeLasso[${this.id}].set_fit_request(**pms_Lasso_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_set_fit_request.tolist() if hasattr(res_Lasso_set_fit_request, 'tolist') else res_Lasso_set_fit_request`
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
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Lasso_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Lasso_set_score_request = {k: v for k, v in pms_Lasso_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lasso_set_score_request = bridgeLasso[${this.id}].set_score_request(**pms_Lasso_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Lasso_set_score_request.tolist() if hasattr(res_Lasso_set_score_request, 'tolist') else res_Lasso_set_score_request`
  }

  /**
    Parameter vector (w in the cost function formula).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lasso_coef_ = bridgeLasso[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_coef_.tolist() if hasattr(attr_Lasso_coef_, 'tolist') else attr_Lasso_coef_`
    })()
  }

  /**
    Given param alpha, the dual gaps at the end of the optimization, same shape as each observation of y.
   */
  get dual_gap_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before accessing dual_gap_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lasso_dual_gap_ = bridgeLasso[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_dual_gap_.tolist() if hasattr(attr_Lasso_dual_gap_, 'tolist') else attr_Lasso_dual_gap_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lasso_intercept_ = bridgeLasso[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_intercept_.tolist() if hasattr(attr_Lasso_intercept_, 'tolist') else attr_Lasso_intercept_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lasso_n_iter_ = bridgeLasso[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_n_iter_.tolist() if hasattr(attr_Lasso_n_iter_, 'tolist') else attr_Lasso_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lasso must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lasso_n_features_in_ = bridgeLasso[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_n_features_in_.tolist() if hasattr(attr_Lasso_n_features_in_, 'tolist') else attr_Lasso_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Lasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Lasso must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lasso_feature_names_in_ = bridgeLasso[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lasso_feature_names_in_.tolist() if hasattr(attr_Lasso_feature_names_in_, 'tolist') else attr_Lasso_feature_names_in_`
    })()
  }
}
