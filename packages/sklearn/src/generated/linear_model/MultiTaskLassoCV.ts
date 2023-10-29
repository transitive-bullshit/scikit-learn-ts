/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  The optimization objective for MultiTaskLasso is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLassoCV.html)
 */
export class MultiTaskLassoCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

      @defaultValue `0.001`
     */
    eps?: number

    /**
      Number of alphas along the regularization path.

      @defaultValue `100`
     */
    n_alphas?: number

    /**
      List of alphas where to compute the models. If not provided, set automatically.
     */
    alphas?: ArrayLike

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

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
      Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1\_ratio are given. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

      @defaultValue `'cyclic'`
     */
    selection?: 'cyclic' | 'random'
  }) {
    this.id = `MultiTaskLassoCV${crypto.randomUUID().split('-')[0]}`
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
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MultiTaskLassoCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import MultiTaskLassoCV
try: bridgeMultiTaskLassoCV
except NameError: bridgeMultiTaskLassoCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultiTaskLassoCV = {'eps': ${
      this.opts['eps'] ?? undefined
    }, 'n_alphas': ${this.opts['n_alphas'] ?? undefined}, 'alphas': ${
      this.opts['alphas'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_MultiTaskLassoCV = {k: v for k, v in ctor_MultiTaskLassoCV.items() if v is not None}`

    await this._py
      .ex`bridgeMultiTaskLassoCV[${this.id}] = MultiTaskLassoCV(**ctor_MultiTaskLassoCV)`

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

    await this._py.ex`del bridgeMultiTaskLassoCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit MultiTaskLasso model with coordinate descent.

    Fit is on grid of alphas and best alpha estimated by cross-validation.
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
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLassoCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLassoCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MultiTaskLassoCV_fit = {k: v for k, v in pms_MultiTaskLassoCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_fit = bridgeMultiTaskLassoCV[${this.id}].fit(**pms_MultiTaskLassoCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_fit.tolist() if hasattr(res_MultiTaskLassoCV_fit, 'tolist') else res_MultiTaskLassoCV_fit`
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
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLassoCV_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_MultiTaskLassoCV_get_metadata_routing = {k: v for k, v in pms_MultiTaskLassoCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_get_metadata_routing = bridgeMultiTaskLassoCV[${this.id}].get_metadata_routing(**pms_MultiTaskLassoCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_get_metadata_routing.tolist() if hasattr(res_MultiTaskLassoCV_get_metadata_routing, 'tolist') else res_MultiTaskLassoCV_get_metadata_routing`
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
      Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

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
    alphas?: NDArray

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
    coef_init?: NDArray

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
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLassoCV must call init() before path()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLassoCV_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'eps': ${
      opts['eps'] ?? undefined
    }, 'n_alphas': ${opts['n_alphas'] ?? undefined}, 'alphas': np.array(${
      opts['alphas'] ?? undefined
    }) if ${opts['alphas'] !== undefined} else None, 'precompute': np.array(${
      opts['precompute'] ?? undefined
    }) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${
      opts['Xy'] ?? undefined
    }) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${
      opts['copy_X'] ?? undefined
    }, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${
      opts['coef_init'] !== undefined
    } else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${
      opts['return_n_iter'] ?? undefined
    }, 'positive': ${opts['positive'] ?? undefined}, 'params': ${
      opts['params'] ?? undefined
    }}

pms_MultiTaskLassoCV_path = {k: v for k, v in pms_MultiTaskLassoCV_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_path = bridgeMultiTaskLassoCV[${this.id}].path(**pms_MultiTaskLassoCV_path)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_path.tolist() if hasattr(res_MultiTaskLassoCV_path, 'tolist') else res_MultiTaskLassoCV_path`
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
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLassoCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLassoCV_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_MultiTaskLassoCV_predict = {k: v for k, v in pms_MultiTaskLassoCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_predict = bridgeMultiTaskLassoCV[${this.id}].predict(**pms_MultiTaskLassoCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_predict.tolist() if hasattr(res_MultiTaskLassoCV_predict, 'tolist') else res_MultiTaskLassoCV_predict`
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
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLassoCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLassoCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultiTaskLassoCV_score = {k: v for k, v in pms_MultiTaskLassoCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_score = bridgeMultiTaskLassoCV[${this.id}].score(**pms_MultiTaskLassoCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_score.tolist() if hasattr(res_MultiTaskLassoCV_score, 'tolist') else res_MultiTaskLassoCV_score`
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
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskLassoCV_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_MultiTaskLassoCV_set_fit_request = {k: v for k, v in pms_MultiTaskLassoCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_set_fit_request = bridgeMultiTaskLassoCV[${this.id}].set_fit_request(**pms_MultiTaskLassoCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_set_fit_request.tolist() if hasattr(res_MultiTaskLassoCV_set_fit_request, 'tolist') else res_MultiTaskLassoCV_set_fit_request`
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
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiTaskLassoCV_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_MultiTaskLassoCV_set_score_request = {k: v for k, v in pms_MultiTaskLassoCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLassoCV_set_score_request = bridgeMultiTaskLassoCV[${this.id}].set_score_request(**pms_MultiTaskLassoCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLassoCV_set_score_request.tolist() if hasattr(res_MultiTaskLassoCV_set_score_request, 'tolist') else res_MultiTaskLassoCV_set_score_request`
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_intercept_ = bridgeMultiTaskLassoCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_intercept_.tolist() if hasattr(attr_MultiTaskLassoCV_intercept_, 'tolist') else attr_MultiTaskLassoCV_intercept_`
    })()
  }

  /**
    Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_coef_ = bridgeMultiTaskLassoCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_coef_.tolist() if hasattr(attr_MultiTaskLassoCV_coef_, 'tolist') else attr_MultiTaskLassoCV_coef_`
    })()
  }

  /**
    The amount of penalization chosen by cross validation.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing alpha_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_alpha_ = bridgeMultiTaskLassoCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_alpha_.tolist() if hasattr(attr_MultiTaskLassoCV_alpha_, 'tolist') else attr_MultiTaskLassoCV_alpha_`
    })()
  }

  /**
    Mean square error for the test set on each fold, varying alpha.
   */
  get mse_path_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing mse_path_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_mse_path_ = bridgeMultiTaskLassoCV[${this.id}].mse_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_mse_path_.tolist() if hasattr(attr_MultiTaskLassoCV_mse_path_, 'tolist') else attr_MultiTaskLassoCV_mse_path_`
    })()
  }

  /**
    The grid of alphas used for fitting.
   */
  get alphas_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing alphas_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_alphas_ = bridgeMultiTaskLassoCV[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_alphas_.tolist() if hasattr(attr_MultiTaskLassoCV_alphas_, 'tolist') else attr_MultiTaskLassoCV_alphas_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_n_iter_ = bridgeMultiTaskLassoCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_n_iter_.tolist() if hasattr(attr_MultiTaskLassoCV_n_iter_, 'tolist') else attr_MultiTaskLassoCV_n_iter_`
    })()
  }

  /**
    The dual gap at the end of the optimization for the optimal alpha.
   */
  get dual_gap_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing dual_gap_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_dual_gap_ = bridgeMultiTaskLassoCV[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_dual_gap_.tolist() if hasattr(attr_MultiTaskLassoCV_dual_gap_, 'tolist') else attr_MultiTaskLassoCV_dual_gap_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_n_features_in_ = bridgeMultiTaskLassoCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_n_features_in_.tolist() if hasattr(attr_MultiTaskLassoCV_n_features_in_, 'tolist') else attr_MultiTaskLassoCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLassoCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLassoCV_feature_names_in_ = bridgeMultiTaskLassoCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLassoCV_feature_names_in_.tolist() if hasattr(attr_MultiTaskLassoCV_feature_names_in_, 'tolist') else attr_MultiTaskLassoCV_feature_names_in_`
    })()
  }
}
