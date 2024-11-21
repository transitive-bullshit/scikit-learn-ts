/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Lasso linear model with iterative fitting along a regularization path.

  See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

  The best model is selected by cross-validation.

  The optimization objective for Lasso is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html)
 */
export class LassoCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
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
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

      @defaultValue `'auto'`
     */
    precompute?: 'auto' | boolean | ArrayLike[]

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
      If `true`, X will be copied; else, it may be overwritten.

      @defaultValue `true`
     */
    copy_X?: boolean

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:
     */
    cv?: number

    /**
      Amount of verbosity.

      @defaultValue `false`
     */
    verbose?: boolean | number

    /**
      Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      If positive, restrict regression coefficients to be positive.

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
    this.id = `LassoCV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LassoCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LassoCV
try: bridgeLassoCV
except NameError: bridgeLassoCV = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LassoCV = {'eps': ${this.opts['eps'] ?? undefined}, 'n_alphas': ${this.opts['n_alphas'] ?? undefined}, 'alphas': ${this.opts['alphas'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'precompute': np.array(${this.opts['precompute'] ?? undefined}) if ${this.opts['precompute'] !== undefined} else None, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'positive': ${this.opts['positive'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_LassoCV = {k: v for k, v in ctor_LassoCV.items() if v is not None}`

    await this._py.ex`bridgeLassoCV[${this.id}] = LassoCV(**ctor_LassoCV)`

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

    await this._py.ex`del bridgeLassoCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Lasso model with coordinate descent.

    Fit is on grid of alphas and best alpha estimated by cross-validation.
   */
  async fit(opts: {
    /**
      Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If y is mono-output, X can be sparse. Note that large sparse matrices and arrays requiring `int64` indices are not accepted.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights used for fitting and evaluation of the weighted mean squared error of each cv-fold. Note that the cross validated MSE that is finally used to find the best model is the unweighted mean over the (weighted) MSEs of each test fold.
     */
    sample_weight?: number | ArrayLike

    /**
      Parameters to be passed to the CV splitter.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_LassoCV_fit = {k: v for k, v in pms_LassoCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_fit = bridgeLassoCV[${this.id}].fit(**pms_LassoCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_fit.tolist() if hasattr(res_LassoCV_fit, 'tolist') else res_LassoCV_fit`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LassoCV_get_metadata_routing = {k: v for k, v in pms_LassoCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_get_metadata_routing = bridgeLassoCV[${this.id}].get_metadata_routing(**pms_LassoCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_get_metadata_routing.tolist() if hasattr(res_LassoCV_get_metadata_routing, 'tolist') else res_LassoCV_get_metadata_routing`
  }

  /**
    Compute Lasso path with coordinate descent.

    The Lasso optimization function varies for mono and multi-outputs.

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
      Keyword arguments passed to the coordinate descent solver.
     */
    params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before path()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_path = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'eps': ${opts['eps'] ?? undefined}, 'n_alphas': ${opts['n_alphas'] ?? undefined}, 'alphas': ${opts['alphas'] ?? undefined}, 'precompute': np.array(${opts['precompute'] ?? undefined}) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${opts['Xy'] ?? undefined}) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${opts['copy_X'] ?? undefined}, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${opts['coef_init'] !== undefined} else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${opts['return_n_iter'] ?? undefined}, 'positive': ${opts['positive'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_LassoCV_path = {k: v for k, v in pms_LassoCV_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_path = bridgeLassoCV[${this.id}].path(**pms_LassoCV_path)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_path.tolist() if hasattr(res_LassoCV_path, 'tolist') else res_LassoCV_path`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LassoCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_LassoCV_predict = {k: v for k, v in pms_LassoCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_predict = bridgeLassoCV[${this.id}].predict(**pms_LassoCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_predict.tolist() if hasattr(res_LassoCV_predict, 'tolist') else res_LassoCV_predict`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_LassoCV_score = {k: v for k, v in pms_LassoCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_score = bridgeLassoCV[${this.id}].score(**pms_LassoCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_score.tolist() if hasattr(res_LassoCV_score, 'tolist') else res_LassoCV_score`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LassoCV_set_fit_request = {k: v for k, v in pms_LassoCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_set_fit_request = bridgeLassoCV[${this.id}].set_fit_request(**pms_LassoCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_set_fit_request.tolist() if hasattr(res_LassoCV_set_fit_request, 'tolist') else res_LassoCV_set_fit_request`
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
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_LassoCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_LassoCV_set_score_request = {k: v for k, v in pms_LassoCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoCV_set_score_request = bridgeLassoCV[${this.id}].set_score_request(**pms_LassoCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoCV_set_score_request.tolist() if hasattr(res_LassoCV_set_score_request, 'tolist') else res_LassoCV_set_score_request`
  }

  /**
    The amount of penalization chosen by cross validation.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LassoCV_alpha_ = bridgeLassoCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_alpha_.tolist() if hasattr(attr_LassoCV_alpha_, 'tolist') else attr_LassoCV_alpha_`
    })()
  }

  /**
    Parameter vector (w in the cost function formula).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_LassoCV_coef_ = bridgeLassoCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_coef_.tolist() if hasattr(attr_LassoCV_coef_, 'tolist') else attr_LassoCV_coef_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_intercept_ = bridgeLassoCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_intercept_.tolist() if hasattr(attr_LassoCV_intercept_, 'tolist') else attr_LassoCV_intercept_`
    })()
  }

  /**
    Mean square error for the test set on each fold, varying alpha.
   */
  get mse_path_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing mse_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_mse_path_ = bridgeLassoCV[${this.id}].mse_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_mse_path_.tolist() if hasattr(attr_LassoCV_mse_path_, 'tolist') else attr_LassoCV_mse_path_`
    })()
  }

  /**
    The grid of alphas used for fitting.
   */
  get alphas_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_alphas_ = bridgeLassoCV[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_alphas_.tolist() if hasattr(attr_LassoCV_alphas_, 'tolist') else attr_LassoCV_alphas_`
    })()
  }

  /**
    The dual gap at the end of the optimization for the optimal alpha (`alpha_`).
   */
  get dual_gap_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing dual_gap_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_dual_gap_ = bridgeLassoCV[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_dual_gap_.tolist() if hasattr(attr_LassoCV_dual_gap_, 'tolist') else attr_LassoCV_dual_gap_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoCV must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_n_iter_ = bridgeLassoCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_n_iter_.tolist() if hasattr(attr_LassoCV_n_iter_, 'tolist') else attr_LassoCV_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_n_features_in_ = bridgeLassoCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_n_features_in_.tolist() if hasattr(attr_LassoCV_n_features_in_, 'tolist') else attr_LassoCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoCV_feature_names_in_ = bridgeLassoCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoCV_feature_names_in_.tolist() if hasattr(attr_LassoCV_feature_names_in_, 'tolist') else attr_LassoCV_feature_names_in_`
    })()
  }
}
