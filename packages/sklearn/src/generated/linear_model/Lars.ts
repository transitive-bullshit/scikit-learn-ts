/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Least Angle Regression model a.k.a. LAR.

  Read more in the [User Guide](../linear_model.html#least-angle-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lars.html)
 */
export class Lars {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Sets the verbosity amount.

      @defaultValue `false`
     */
    verbose?: boolean | number

    /**
      Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

      @defaultValue `'auto'`
     */
    precompute?: boolean | 'auto' | ArrayLike

    /**
      Target number of non-zero coefficients. Use `np.inf` for no limit.

      @defaultValue `500`
     */
    n_nonzero_coefs?: number

    /**
      The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.
     */
    eps?: number

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      If `true` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `false` will lead to a speedup, especially with a small alpha.

      @defaultValue `true`
     */
    fit_path?: boolean

    /**
      Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability.
     */
    jitter?: number

    /**
      Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Ignored if `jitter` is `undefined`.
     */
    random_state?: number
  }) {
    this.id = `Lars${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Lars instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Lars.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import Lars
try: bridgeLars
except NameError: bridgeLars = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Lars = {'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'precompute': ${this.opts['precompute'] ?? undefined}, 'n_nonzero_coefs': ${this.opts['n_nonzero_coefs'] ?? undefined}, 'eps': ${this.opts['eps'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'fit_path': ${this.opts['fit_path'] ?? undefined}, 'jitter': ${this.opts['jitter'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_Lars = {k: v for k, v in ctor_Lars.items() if v is not None}`

    await this._py.ex`bridgeLars[${this.id}] = Lars(**ctor_Lars)`

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

    await this._py.ex`del bridgeLars[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.
     */
    Xy?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_Lars_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'Xy': np.array(${opts['Xy'] ?? undefined}) if ${opts['Xy'] !== undefined} else None}

pms_Lars_fit = {k: v for k, v in pms_Lars_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_Lars_fit = bridgeLars[${this.id}].fit(**pms_Lars_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_fit.tolist() if hasattr(res_Lars_fit, 'tolist') else res_Lars_fit`
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
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_Lars_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_Lars_get_metadata_routing = {k: v for k, v in pms_Lars_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lars_get_metadata_routing = bridgeLars[${this.id}].get_metadata_routing(**pms_Lars_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_get_metadata_routing.tolist() if hasattr(res_Lars_get_metadata_routing, 'tolist') else res_Lars_get_metadata_routing`
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
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_Lars_predict = {'X': ${opts['X'] ?? undefined}}

pms_Lars_predict = {k: v for k, v in pms_Lars_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lars_predict = bridgeLars[${this.id}].predict(**pms_Lars_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_predict.tolist() if hasattr(res_Lars_predict, 'tolist') else res_Lars_predict`
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
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_Lars_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_Lars_score = {k: v for k, v in pms_Lars_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lars_score = bridgeLars[${this.id}].score(**pms_Lars_score)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_score.tolist() if hasattr(res_Lars_score, 'tolist') else res_Lars_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `Xy` parameter in `fit`.
     */
    Xy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Lars_set_fit_request = {'Xy': ${opts['Xy'] ?? undefined}}

pms_Lars_set_fit_request = {k: v for k, v in pms_Lars_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lars_set_fit_request = bridgeLars[${this.id}].set_fit_request(**pms_Lars_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_set_fit_request.tolist() if hasattr(res_Lars_set_fit_request, 'tolist') else res_Lars_set_fit_request`
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
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Lars_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Lars_set_score_request = {k: v for k, v in pms_Lars_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Lars_set_score_request = bridgeLars[${this.id}].set_score_request(**pms_Lars_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Lars_set_score_request.tolist() if hasattr(res_Lars_set_score_request, 'tolist') else res_Lars_set_score_request`
  }

  /**
    Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.
   */
  get alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lars_alphas_ = bridgeLars[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_alphas_.tolist() if hasattr(attr_Lars_alphas_, 'tolist') else attr_Lars_alphas_`
    })()
  }

  /**
    Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.
   */
  get active_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing active_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lars_active_ = bridgeLars[${this.id}].active_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_active_.tolist() if hasattr(attr_Lars_active_, 'tolist') else attr_Lars_active_`
    })()
  }

  /**
    The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.
   */
  get coef_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing coef_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lars_coef_path_ = bridgeLars[${this.id}].coef_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_coef_path_.tolist() if hasattr(attr_Lars_coef_path_, 'tolist') else attr_Lars_coef_path_`
    })()
  }

  /**
    Parameter vector (w in the formulation formula).
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lars_coef_ = bridgeLars[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_coef_.tolist() if hasattr(attr_Lars_coef_, 'tolist') else attr_Lars_coef_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lars_intercept_ = bridgeLars[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_intercept_.tolist() if hasattr(attr_Lars_intercept_, 'tolist') else attr_Lars_intercept_`
    })()
  }

  /**
    The number of iterations taken by lars\_path to find the grid of alphas for each target.
   */
  get n_iter_(): Promise<ArrayLike | number> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Lars_n_iter_ = bridgeLars[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_n_iter_.tolist() if hasattr(attr_Lars_n_iter_, 'tolist') else attr_Lars_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Lars must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lars_n_features_in_ = bridgeLars[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_n_features_in_.tolist() if hasattr(attr_Lars_n_features_in_, 'tolist') else attr_Lars_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Lars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Lars must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Lars_feature_names_in_ = bridgeLars[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Lars_feature_names_in_.tolist() if hasattr(attr_Lars_feature_names_in_, 'tolist') else attr_Lars_feature_names_in_`
    })()
  }
}
