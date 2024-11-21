/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Generalized Linear Model with a Tweedie distribution.

  This estimator can be used to model different GLMs depending on the `power` parameter, which determines the underlying distribution.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#generalized-linear-models).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TweedieRegressor.html)
 */
export class TweedieRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The power determines the underlying target distribution according to the following table:

      @defaultValue `0`
     */
    power?: number

    /**
      Constant that multiplies the L2 penalty term and determines the regularization strength. `alpha \= 0` is equivalent to unpenalized GLMs. In this case, the design matrix `X` must have full column rank (no collinearities). Values of `alpha` must be in the range `\[0.0, inf)`.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Specifies if a constant (a.k.a. bias or intercept) should be added to the linear predictor (`X @ coef + intercept`).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The link function of the GLM, i.e. mapping from linear predictor `X @ coeff + intercept` to prediction `y_pred`. Option ‘auto’ sets the link depending on the chosen `power` parameter as follows:

      @defaultValue `'auto'`
     */
    link?: 'auto' | 'identity' | 'log'

    /**
      Algorithm to use in the optimization problem:

      @defaultValue `'lbfgs'`
     */
    solver?: 'lbfgs' | 'newton-cholesky'

    /**
      The maximal number of iterations for the solver. Values must be in the range `\[1, inf)`.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      Stopping criterion. For the lbfgs solver, the iteration will stop when `max{|g_j|, j \= 1, ..., d} <= tol` where `g_j` is the j-th component of the gradient (derivative) of the objective function. Values must be in the range `(0.0, inf)`.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      If set to `true`, reuse the solution of the previous call to `fit` as initialization for `coef_` and `intercept_` .

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      For the lbfgs solver set verbose to any positive number for verbosity. Values must be in the range `\[0, inf)`.

      @defaultValue `0`
     */
    verbose?: number
  }) {
    this.id = `TweedieRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TweedieRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import TweedieRegressor
try: bridgeTweedieRegressor
except NameError: bridgeTweedieRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TweedieRegressor = {'power': ${this.opts['power'] ?? undefined}, 'alpha': ${this.opts['alpha'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'link': ${this.opts['link'] ?? undefined}, 'solver': ${this.opts['solver'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_TweedieRegressor = {k: v for k, v in ctor_TweedieRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeTweedieRegressor[${this.id}] = TweedieRegressor(**ctor_TweedieRegressor)`

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

    await this._py.ex`del bridgeTweedieRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit a Generalized Linear Model.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TweedieRegressor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_TweedieRegressor_fit = {k: v for k, v in pms_TweedieRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_fit = bridgeTweedieRegressor[${this.id}].fit(**pms_TweedieRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_fit.tolist() if hasattr(res_TweedieRegressor_fit, 'tolist') else res_TweedieRegressor_fit`
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
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_TweedieRegressor_get_metadata_routing = {k: v for k, v in pms_TweedieRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_get_metadata_routing = bridgeTweedieRegressor[${this.id}].get_metadata_routing(**pms_TweedieRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_get_metadata_routing.tolist() if hasattr(res_TweedieRegressor_get_metadata_routing, 'tolist') else res_TweedieRegressor_get_metadata_routing`
  }

  /**
    Predict using GLM with feature matrix X.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TweedieRegressor must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TweedieRegressor_predict = {k: v for k, v in pms_TweedieRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_predict = bridgeTweedieRegressor[${this.id}].predict(**pms_TweedieRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_predict.tolist() if hasattr(res_TweedieRegressor_predict, 'tolist') else res_TweedieRegressor_predict`
  }

  /**
    Compute D^2, the percentage of deviance explained.

    D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#regression-metrics).

    D^2 is defined as \\(D^2 = 1-\\frac{D(y_{true},y_{pred})}{D_{null}}\\), \\(D_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      True values of target.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TweedieRegressor must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_TweedieRegressor_score = {k: v for k, v in pms_TweedieRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_score = bridgeTweedieRegressor[${this.id}].score(**pms_TweedieRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_score.tolist() if hasattr(res_TweedieRegressor_score, 'tolist') else res_TweedieRegressor_score`
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
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_TweedieRegressor_set_fit_request = {k: v for k, v in pms_TweedieRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_set_fit_request = bridgeTweedieRegressor[${this.id}].set_fit_request(**pms_TweedieRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_set_fit_request.tolist() if hasattr(res_TweedieRegressor_set_fit_request, 'tolist') else res_TweedieRegressor_set_fit_request`
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
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TweedieRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_TweedieRegressor_set_score_request = {k: v for k, v in pms_TweedieRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TweedieRegressor_set_score_request = bridgeTweedieRegressor[${this.id}].set_score_request(**pms_TweedieRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_TweedieRegressor_set_score_request.tolist() if hasattr(res_TweedieRegressor_set_score_request, 'tolist') else res_TweedieRegressor_set_score_request`
  }

  /**
    Estimated coefficients for the linear predictor (`X @ coef_ + intercept_`) in the GLM.
   */
  get coef_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TweedieRegressor_coef_ = bridgeTweedieRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_TweedieRegressor_coef_.tolist() if hasattr(attr_TweedieRegressor_coef_, 'tolist') else attr_TweedieRegressor_coef_`
    })()
  }

  /**
    Intercept (a.k.a. bias) added to linear predictor.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TweedieRegressor_intercept_ = bridgeTweedieRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_TweedieRegressor_intercept_.tolist() if hasattr(attr_TweedieRegressor_intercept_, 'tolist') else attr_TweedieRegressor_intercept_`
    })()
  }

  /**
    Actual number of iterations used in the solver.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TweedieRegressor_n_iter_ = bridgeTweedieRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_TweedieRegressor_n_iter_.tolist() if hasattr(attr_TweedieRegressor_n_iter_, 'tolist') else attr_TweedieRegressor_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TweedieRegressor_n_features_in_ = bridgeTweedieRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TweedieRegressor_n_features_in_.tolist() if hasattr(attr_TweedieRegressor_n_features_in_, 'tolist') else attr_TweedieRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TweedieRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TweedieRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TweedieRegressor_feature_names_in_ = bridgeTweedieRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TweedieRegressor_feature_names_in_.tolist() if hasattr(attr_TweedieRegressor_feature_names_in_, 'tolist') else attr_TweedieRegressor_feature_names_in_`
    })()
  }
}
