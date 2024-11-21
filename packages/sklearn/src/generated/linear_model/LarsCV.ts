/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Cross-validated Least Angle Regression model.

  See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#least-angle-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LarsCV.html)
 */
export class LarsCV {
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
      Maximum number of iterations to perform.

      @defaultValue `500`
     */
    max_iter?: number

    /**
      Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

      @defaultValue `'auto'`
     */
    precompute?: boolean | 'auto' | ArrayLike

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:
     */
    cv?: number

    /**
      The maximum number of points on the path used to compute the residuals in the cross-validation.

      @defaultValue `1000`
     */
    max_n_alphas?: number

    /**
      Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.
     */
    eps?: number

    /**
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean
  }) {
    this.id = `LarsCV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LarsCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LarsCV
try: bridgeLarsCV
except NameError: bridgeLarsCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LarsCV = {'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'precompute': ${this.opts['precompute'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'max_n_alphas': ${this.opts['max_n_alphas'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'eps': ${this.opts['eps'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}}

ctor_LarsCV = {k: v for k, v in ctor_LarsCV.items() if v is not None}`

    await this._py.ex`bridgeLarsCV[${this.id}] = LarsCV(**ctor_LarsCV)`

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

    await this._py.ex`del bridgeLarsCV[${this.id}]`

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
      Parameters to be passed to the CV splitter.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LarsCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_LarsCV_fit = {k: v for k, v in pms_LarsCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_fit = bridgeLarsCV[${this.id}].fit(**pms_LarsCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_fit.tolist() if hasattr(res_LarsCV_fit, 'tolist') else res_LarsCV_fit`
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
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_LarsCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LarsCV_get_metadata_routing = {k: v for k, v in pms_LarsCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_get_metadata_routing = bridgeLarsCV[${this.id}].get_metadata_routing(**pms_LarsCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_get_metadata_routing.tolist() if hasattr(res_LarsCV_get_metadata_routing, 'tolist') else res_LarsCV_get_metadata_routing`
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
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LarsCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_LarsCV_predict = {k: v for k, v in pms_LarsCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_predict = bridgeLarsCV[${this.id}].predict(**pms_LarsCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_predict.tolist() if hasattr(res_LarsCV_predict, 'tolist') else res_LarsCV_predict`
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
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_LarsCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_LarsCV_score = {k: v for k, v in pms_LarsCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_score = bridgeLarsCV[${this.id}].score(**pms_LarsCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_score.tolist() if hasattr(res_LarsCV_score, 'tolist') else res_LarsCV_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `Xy` parameter in `fit`.
     */
    Xy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_LarsCV_set_fit_request = {'Xy': ${opts['Xy'] ?? undefined}}

pms_LarsCV_set_fit_request = {k: v for k, v in pms_LarsCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_set_fit_request = bridgeLarsCV[${this.id}].set_fit_request(**pms_LarsCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_set_fit_request.tolist() if hasattr(res_LarsCV_set_fit_request, 'tolist') else res_LarsCV_set_fit_request`
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
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_LarsCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LarsCV_set_score_request = {k: v for k, v in pms_LarsCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LarsCV_set_score_request = bridgeLarsCV[${this.id}].set_score_request(**pms_LarsCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LarsCV_set_score_request.tolist() if hasattr(res_LarsCV_set_score_request, 'tolist') else res_LarsCV_set_score_request`
  }

  /**
    Indices of active variables at the end of the path. If this is a list of lists, the outer list length is `n_targets`.
   */
  get active_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing active_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LarsCV_active_ = bridgeLarsCV[${this.id}].active_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_active_.tolist() if hasattr(attr_LarsCV_active_, 'tolist') else attr_LarsCV_active_`
    })()
  }

  /**
    parameter vector (w in the formulation formula)
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LarsCV_coef_ = bridgeLarsCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_coef_.tolist() if hasattr(attr_LarsCV_coef_, 'tolist') else attr_LarsCV_coef_`
    })()
  }

  /**
    independent term in decision function
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_intercept_ = bridgeLarsCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_intercept_.tolist() if hasattr(attr_LarsCV_intercept_, 'tolist') else attr_LarsCV_intercept_`
    })()
  }

  /**
    the varying values of the coefficients along the path
   */
  get coef_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing coef_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_coef_path_ = bridgeLarsCV[${this.id}].coef_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_coef_path_.tolist() if hasattr(attr_LarsCV_coef_path_, 'tolist') else attr_LarsCV_coef_path_`
    })()
  }

  /**
    the estimated regularization parameter alpha
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LarsCV_alpha_ = bridgeLarsCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_alpha_.tolist() if hasattr(attr_LarsCV_alpha_, 'tolist') else attr_LarsCV_alpha_`
    })()
  }

  /**
    the different values of alpha along the path
   */
  get alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LarsCV_alphas_ = bridgeLarsCV[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_alphas_.tolist() if hasattr(attr_LarsCV_alphas_, 'tolist') else attr_LarsCV_alphas_`
    })()
  }

  /**
    all the values of alpha along the path for the different folds
   */
  get cv_alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing cv_alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_cv_alphas_ = bridgeLarsCV[${this.id}].cv_alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_cv_alphas_.tolist() if hasattr(attr_LarsCV_cv_alphas_, 'tolist') else attr_LarsCV_cv_alphas_`
    })()
  }

  /**
    the mean square error on left-out for each fold along the path (alpha values given by `cv_alphas`)
   */
  get mse_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing mse_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_mse_path_ = bridgeLarsCV[${this.id}].mse_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_mse_path_.tolist() if hasattr(attr_LarsCV_mse_path_, 'tolist') else attr_LarsCV_mse_path_`
    })()
  }

  /**
    the number of iterations run by Lars with the optimal alpha.
   */
  get n_iter_(): Promise<ArrayLike | number> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LarsCV_n_iter_ = bridgeLarsCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_n_iter_.tolist() if hasattr(attr_LarsCV_n_iter_, 'tolist') else attr_LarsCV_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LarsCV must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_n_features_in_ = bridgeLarsCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_n_features_in_.tolist() if hasattr(attr_LarsCV_n_features_in_, 'tolist') else attr_LarsCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LarsCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LarsCV_feature_names_in_ = bridgeLarsCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LarsCV_feature_names_in_.tolist() if hasattr(attr_LarsCV_feature_names_in_, 'tolist') else attr_LarsCV_feature_names_in_`
    })()
  }
}
