/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-task L1/L2 ElasticNet with built-in cross-validation.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  The optimization objective for MultiTaskElasticNet is:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNetCV.html
 */
export class MultiTaskElasticNetCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MultiTaskElasticNetCVOptions) {
    this.id = `MultiTaskElasticNetCV${crypto.randomUUID().split('-')[0]}`
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
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MultiTaskElasticNetCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import MultiTaskElasticNetCV
try: bridgeMultiTaskElasticNetCV
except NameError: bridgeMultiTaskElasticNetCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultiTaskElasticNetCV = {'l1_ratio': ${
      this.opts['l1_ratio'] ?? undefined
    }, 'eps': ${this.opts['eps'] ?? undefined}, 'n_alphas': ${
      this.opts['n_alphas'] ?? undefined
    }, 'alphas': ${this.opts['alphas'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_MultiTaskElasticNetCV = {k: v for k, v in ctor_MultiTaskElasticNetCV.items() if v is not None}`

    await this._py
      .ex`bridgeMultiTaskElasticNetCV[${this.id}] = MultiTaskElasticNetCV(**ctor_MultiTaskElasticNetCV)`

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

    await this._py.ex`del bridgeMultiTaskElasticNetCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit MultiTaskElasticNet model with coordinate descent.

    Fit is on grid of alphas and best alpha estimated by cross-validation.
   */
  async fit(opts: MultiTaskElasticNetCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNetCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskElasticNetCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MultiTaskElasticNetCV_fit = {k: v for k, v in pms_MultiTaskElasticNetCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNetCV_fit = bridgeMultiTaskElasticNetCV[${this.id}].fit(**pms_MultiTaskElasticNetCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNetCV_fit.tolist() if hasattr(res_MultiTaskElasticNetCV_fit, 'tolist') else res_MultiTaskElasticNetCV_fit`
  }

  /**
    Compute elastic net path with coordinate descent.

    The elastic net optimization function varies for mono and multi-outputs.

    For mono-output tasks it is:
   */
  async path(opts: MultiTaskElasticNetCVPathOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNetCV must call init() before path()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskElasticNetCV_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'l1_ratio': ${
      opts['l1_ratio'] ?? undefined
    }, 'eps': ${opts['eps'] ?? undefined}, 'n_alphas': ${
      opts['n_alphas'] ?? undefined
    }, 'alphas': np.array(${opts['alphas'] ?? undefined}) if ${
      opts['alphas'] !== undefined
    } else None, 'precompute': np.array(${
      opts['precompute'] ?? undefined
    }) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${
      opts['Xy'] ?? undefined
    }) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${
      opts['copy_X'] ?? undefined
    }, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${
      opts['coef_init'] !== undefined
    } else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${
      opts['return_n_iter'] ?? undefined
    }, 'positive': ${opts['positive'] ?? undefined}, 'check_input': ${
      opts['check_input'] ?? undefined
    }, 'params': ${opts['params'] ?? undefined}}

pms_MultiTaskElasticNetCV_path = {k: v for k, v in pms_MultiTaskElasticNetCV_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNetCV_path = bridgeMultiTaskElasticNetCV[${this.id}].path(**pms_MultiTaskElasticNetCV_path)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNetCV_path.tolist() if hasattr(res_MultiTaskElasticNetCV_path, 'tolist') else res_MultiTaskElasticNetCV_path`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: MultiTaskElasticNetCVPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNetCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskElasticNetCV_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_MultiTaskElasticNetCV_predict = {k: v for k, v in pms_MultiTaskElasticNetCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNetCV_predict = bridgeMultiTaskElasticNetCV[${this.id}].predict(**pms_MultiTaskElasticNetCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNetCV_predict.tolist() if hasattr(res_MultiTaskElasticNetCV_predict, 'tolist') else res_MultiTaskElasticNetCV_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: MultiTaskElasticNetCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskElasticNetCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskElasticNetCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultiTaskElasticNetCV_score = {k: v for k, v in pms_MultiTaskElasticNetCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskElasticNetCV_score = bridgeMultiTaskElasticNetCV[${this.id}].score(**pms_MultiTaskElasticNetCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskElasticNetCV_score.tolist() if hasattr(res_MultiTaskElasticNetCV_score, 'tolist') else res_MultiTaskElasticNetCV_score`
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_intercept_ = bridgeMultiTaskElasticNetCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_intercept_.tolist() if hasattr(attr_MultiTaskElasticNetCV_intercept_, 'tolist') else attr_MultiTaskElasticNetCV_intercept_`
    })()
  }

  /**
    Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_coef_ = bridgeMultiTaskElasticNetCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_coef_.tolist() if hasattr(attr_MultiTaskElasticNetCV_coef_, 'tolist') else attr_MultiTaskElasticNetCV_coef_`
    })()
  }

  /**
    The amount of penalization chosen by cross validation.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing alpha_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_alpha_ = bridgeMultiTaskElasticNetCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_alpha_.tolist() if hasattr(attr_MultiTaskElasticNetCV_alpha_, 'tolist') else attr_MultiTaskElasticNetCV_alpha_`
    })()
  }

  /**
    Mean square error for the test set on each fold, varying alpha.
   */
  get mse_path_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing mse_path_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_mse_path_ = bridgeMultiTaskElasticNetCV[${this.id}].mse_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_mse_path_.tolist() if hasattr(attr_MultiTaskElasticNetCV_mse_path_, 'tolist') else attr_MultiTaskElasticNetCV_mse_path_`
    })()
  }

  /**
    The grid of alphas used for fitting, for each l1\_ratio.
   */
  get alphas_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing alphas_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_alphas_ = bridgeMultiTaskElasticNetCV[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_alphas_.tolist() if hasattr(attr_MultiTaskElasticNetCV_alphas_, 'tolist') else attr_MultiTaskElasticNetCV_alphas_`
    })()
  }

  /**
    Best l1\_ratio obtained by cross-validation.
   */
  get l1_ratio_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing l1_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_l1_ratio_ = bridgeMultiTaskElasticNetCV[${this.id}].l1_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_l1_ratio_.tolist() if hasattr(attr_MultiTaskElasticNetCV_l1_ratio_, 'tolist') else attr_MultiTaskElasticNetCV_l1_ratio_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_n_iter_ = bridgeMultiTaskElasticNetCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_n_iter_.tolist() if hasattr(attr_MultiTaskElasticNetCV_n_iter_, 'tolist') else attr_MultiTaskElasticNetCV_n_iter_`
    })()
  }

  /**
    The dual gap at the end of the optimization for the optimal alpha.
   */
  get dual_gap_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing dual_gap_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_dual_gap_ = bridgeMultiTaskElasticNetCV[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_dual_gap_.tolist() if hasattr(attr_MultiTaskElasticNetCV_dual_gap_, 'tolist') else attr_MultiTaskElasticNetCV_dual_gap_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_n_features_in_ = bridgeMultiTaskElasticNetCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_n_features_in_.tolist() if hasattr(attr_MultiTaskElasticNetCV_n_features_in_, 'tolist') else attr_MultiTaskElasticNetCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiTaskElasticNetCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskElasticNetCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskElasticNetCV_feature_names_in_ = bridgeMultiTaskElasticNetCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskElasticNetCV_feature_names_in_.tolist() if hasattr(attr_MultiTaskElasticNetCV_feature_names_in_, 'tolist') else attr_MultiTaskElasticNetCV_feature_names_in_`
    })()
  }
}

export interface MultiTaskElasticNetCVOptions {
  /**
    The ElasticNet mixing parameter, with 0 < l1\_ratio <= 1. For l1\_ratio = 1 the penalty is an L1/L2 penalty. For l1\_ratio = 0 it is an L2 penalty. For `0 < l1\_ratio < 1`, the penalty is a combination of L1/L2 and L2. This parameter can be a list, in which case the different values are tested by cross-validation and the one giving the best prediction score is used. Note that a good choice of list of values for l1\_ratio is often to put more values close to 1 (i.e. Lasso) and less close to 0 (i.e. Ridge), as in `\[.1, .5, .7, .9, .95, .99, 1\]`.

    @defaultValue `0.5`
   */
  l1_ratio?: number

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
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    If `true`, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    Amount of verbosity.

    @defaultValue `0`
   */
  verbose?: boolean | number

  /**
    Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1\_ratio are given. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
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
}

export interface MultiTaskElasticNetCVFitOptions {
  /**
    Training data.
   */
  X?: NDArray[]

  /**
    Training target variable. Will be cast to X’s dtype if necessary.
   */
  y?: NDArray[]
}

export interface MultiTaskElasticNetCVPathOptions {
  /**
    Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike | SparseMatrix

  /**
    Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

    @defaultValue `0.5`
   */
  l1_ratio?: number

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
    If set to `false`, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

    @defaultValue `true`
   */
  check_input?: boolean

  /**
    Keyword arguments passed to the coordinate descent solver.
   */
  params?: any
}

export interface MultiTaskElasticNetCVPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface MultiTaskElasticNetCVScoreOptions {
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
}
