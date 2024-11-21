/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear least squares with l2 regularization.

  Minimizes the objective function:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html)
 */
export class Ridge {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Constant that multiplies the L2 term, controlling regularization strength. `alpha` must be a non-negative float i.e. in `\[0, inf)`.

      When `alpha \= 0`, the objective is equivalent to ordinary least squares, solved by the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object. For numerical reasons, using `alpha \= 0` with the `Ridge` object is not advised. Instead, you should use the [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") object.

      If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Whether to fit the intercept for this model. If set to false, no intercept will be used in calculations (i.e. `X` and `y` are expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      Maximum number of iterations for conjugate gradient solver. For ‘sparse\_cg’ and ‘lsqr’ solvers, the default value is determined by scipy.sparse.linalg. For ‘sag’ solver, the default value is 1000. For ‘lbfgs’ solver, the default value is 15000.
     */
    max_iter?: number

    /**
      The precision of the solution (`coef\_`) is determined by `tol` which specifies a different convergence criterion for each solver:

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Solver to use in the computational routines:

      @defaultValue `'auto'`
     */
    solver?:
      | 'auto'
      | 'svd'
      | 'cholesky'
      | 'lsqr'
      | 'sparse_cg'
      | 'sag'
      | 'saga'
      | 'lbfgs'

    /**
      When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.

      @defaultValue `false`
     */
    positive?: boolean

    /**
      Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details.
     */
    random_state?: number
  }) {
    this.id = `Ridge${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Ridge instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Ridge.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import Ridge
try: bridgeRidge
except NameError: bridgeRidge = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Ridge = {'alpha': np.array(${this.opts['alpha'] ?? undefined}) if ${this.opts['alpha'] !== undefined} else None, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'solver': ${this.opts['solver'] ?? undefined}, 'positive': ${this.opts['positive'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_Ridge = {k: v for k, v in ctor_Ridge.items() if v is not None}`

    await this._py.ex`bridgeRidge[${this.id}] = Ridge(**ctor_Ridge)`

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

    await this._py.ex`del bridgeRidge[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Ridge regression model.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: NDArray | SparseMatrix[]

    /**
      Target values.
     */
    y?: NDArray

    /**
      Individual weights for each sample. If given a float, every sample will have the same weight.
     */
    sample_weight?: number | NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_Ridge_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_Ridge_fit = {k: v for k, v in pms_Ridge_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_fit = bridgeRidge[${this.id}].fit(**pms_Ridge_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_fit.tolist() if hasattr(res_Ridge_fit, 'tolist') else res_Ridge_fit`
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
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_Ridge_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_Ridge_get_metadata_routing = {k: v for k, v in pms_Ridge_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_get_metadata_routing = bridgeRidge[${this.id}].get_metadata_routing(**pms_Ridge_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_get_metadata_routing.tolist() if hasattr(res_Ridge_get_metadata_routing, 'tolist') else res_Ridge_get_metadata_routing`
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
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_Ridge_predict = {'X': ${opts['X'] ?? undefined}}

pms_Ridge_predict = {k: v for k, v in pms_Ridge_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_predict = bridgeRidge[${this.id}].predict(**pms_Ridge_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_predict.tolist() if hasattr(res_Ridge_predict, 'tolist') else res_Ridge_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
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
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_Ridge_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_Ridge_score = {k: v for k, v in pms_Ridge_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_score = bridgeRidge[${this.id}].score(**pms_Ridge_score)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_score.tolist() if hasattr(res_Ridge_score, 'tolist') else res_Ridge_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Ridge_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Ridge_set_fit_request = {k: v for k, v in pms_Ridge_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_set_fit_request = bridgeRidge[${this.id}].set_fit_request(**pms_Ridge_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_set_fit_request.tolist() if hasattr(res_Ridge_set_fit_request, 'tolist') else res_Ridge_set_fit_request`
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
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Ridge_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Ridge_set_score_request = {k: v for k, v in pms_Ridge_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Ridge_set_score_request = bridgeRidge[${this.id}].set_score_request(**pms_Ridge_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Ridge_set_score_request.tolist() if hasattr(res_Ridge_set_score_request, 'tolist') else res_Ridge_set_score_request`
  }

  /**
    Weight vector(s).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Ridge_coef_ = bridgeRidge[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_coef_.tolist() if hasattr(attr_Ridge_coef_, 'tolist') else attr_Ridge_coef_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Ridge_intercept_ = bridgeRidge[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_intercept_.tolist() if hasattr(attr_Ridge_intercept_, 'tolist') else attr_Ridge_intercept_`
    })()
  }

  /**
    Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.
   */
  get n_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Ridge_n_iter_ = bridgeRidge[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_n_iter_.tolist() if hasattr(attr_Ridge_n_iter_, 'tolist') else attr_Ridge_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Ridge_n_features_in_ = bridgeRidge[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_n_features_in_.tolist() if hasattr(attr_Ridge_n_features_in_, 'tolist') else attr_Ridge_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Ridge must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Ridge_feature_names_in_ = bridgeRidge[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_feature_names_in_.tolist() if hasattr(attr_Ridge_feature_names_in_, 'tolist') else attr_Ridge_feature_names_in_`
    })()
  }

  /**
    The solver that was used at fit time by the computational routines.
   */
  get solver_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This Ridge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Ridge must call init() before accessing solver_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Ridge_solver_ = bridgeRidge[${this.id}].solver_`

      // convert the result from python to node.js
      return this
        ._py`attr_Ridge_solver_.tolist() if hasattr(attr_Ridge_solver_, 'tolist') else attr_Ridge_solver_`
    })()
  }
}
