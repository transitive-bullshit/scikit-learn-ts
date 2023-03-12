/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Cross-validated Lasso, using the LARS algorithm.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  The optimization objective for Lasso is:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsCV.html
 */
export class LassoLarsCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LassoLarsCVOptions) {
    this.id = `LassoLarsCV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LassoLarsCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LassoLarsCV
try: bridgeLassoLarsCV
except NameError: bridgeLassoLarsCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_LassoLarsCV = {'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'normalize': ${this.opts['normalize'] ?? undefined}, 'precompute': ${
      this.opts['precompute'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'max_n_alphas': ${
      this.opts['max_n_alphas'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'eps': ${
      this.opts['eps'] ?? undefined
    }, 'copy_X': ${this.opts['copy_X'] ?? undefined}, 'positive': ${
      this.opts['positive'] ?? undefined
    }}

ctor_LassoLarsCV = {k: v for k, v in ctor_LassoLarsCV.items() if v is not None}`

    await this._py
      .ex`bridgeLassoLarsCV[${this.id}] = LassoLarsCV(**ctor_LassoLarsCV)`

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

    await this._py.ex`del bridgeLassoLarsCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: LassoLarsCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LassoLarsCV_fit = {k: v for k, v in pms_LassoLarsCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsCV_fit = bridgeLassoLarsCV[${this.id}].fit(**pms_LassoLarsCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsCV_fit.tolist() if hasattr(res_LassoLarsCV_fit, 'tolist') else res_LassoLarsCV_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: LassoLarsCVPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsCV_predict = {'X': ${opts['X'] ?? undefined}}

pms_LassoLarsCV_predict = {k: v for k, v in pms_LassoLarsCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsCV_predict = bridgeLassoLarsCV[${this.id}].predict(**pms_LassoLarsCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsCV_predict.tolist() if hasattr(res_LassoLarsCV_predict, 'tolist') else res_LassoLarsCV_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: LassoLarsCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LassoLarsCV_score = {k: v for k, v in pms_LassoLarsCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsCV_score = bridgeLassoLarsCV[${this.id}].score(**pms_LassoLarsCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsCV_score.tolist() if hasattr(res_LassoLarsCV_score, 'tolist') else res_LassoLarsCV_score`
  }

  /**
    parameter vector (w in the formulation formula)
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_coef_ = bridgeLassoLarsCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_coef_.tolist() if hasattr(attr_LassoLarsCV_coef_, 'tolist') else attr_LassoLarsCV_coef_`
    })()
  }

  /**
    independent term in decision function.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_intercept_ = bridgeLassoLarsCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_intercept_.tolist() if hasattr(attr_LassoLarsCV_intercept_, 'tolist') else attr_LassoLarsCV_intercept_`
    })()
  }

  /**
    the varying values of the coefficients along the path
   */
  get coef_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsCV must call init() before accessing coef_path_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_coef_path_ = bridgeLassoLarsCV[${this.id}].coef_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_coef_path_.tolist() if hasattr(attr_LassoLarsCV_coef_path_, 'tolist') else attr_LassoLarsCV_coef_path_`
    })()
  }

  /**
    the estimated regularization parameter alpha
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_alpha_ = bridgeLassoLarsCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_alpha_.tolist() if hasattr(attr_LassoLarsCV_alpha_, 'tolist') else attr_LassoLarsCV_alpha_`
    })()
  }

  /**
    the different values of alpha along the path
   */
  get alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_alphas_ = bridgeLassoLarsCV[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_alphas_.tolist() if hasattr(attr_LassoLarsCV_alphas_, 'tolist') else attr_LassoLarsCV_alphas_`
    })()
  }

  /**
    all the values of alpha along the path for the different folds
   */
  get cv_alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsCV must call init() before accessing cv_alphas_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_cv_alphas_ = bridgeLassoLarsCV[${this.id}].cv_alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_cv_alphas_.tolist() if hasattr(attr_LassoLarsCV_cv_alphas_, 'tolist') else attr_LassoLarsCV_cv_alphas_`
    })()
  }

  /**
    the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)
   */
  get mse_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing mse_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_mse_path_ = bridgeLassoLarsCV[${this.id}].mse_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_mse_path_.tolist() if hasattr(attr_LassoLarsCV_mse_path_, 'tolist') else attr_LassoLarsCV_mse_path_`
    })()
  }

  /**
    the number of iterations run by Lars with the optimal alpha.
   */
  get n_iter_(): Promise<ArrayLike | number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_n_iter_ = bridgeLassoLarsCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_n_iter_.tolist() if hasattr(attr_LassoLarsCV_n_iter_, 'tolist') else attr_LassoLarsCV_n_iter_`
    })()
  }

  /**
    Indices of active variables at the end of the path.
   */
  get active_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsCV must call init() before accessing active_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_active_ = bridgeLassoLarsCV[${this.id}].active_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_active_.tolist() if hasattr(attr_LassoLarsCV_active_, 'tolist') else attr_LassoLarsCV_active_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_n_features_in_ = bridgeLassoLarsCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_n_features_in_.tolist() if hasattr(attr_LassoLarsCV_n_features_in_, 'tolist') else attr_LassoLarsCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsCV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsCV_feature_names_in_ = bridgeLassoLarsCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsCV_feature_names_in_.tolist() if hasattr(attr_LassoLarsCV_feature_names_in_, 'tolist') else attr_LassoLarsCV_feature_names_in_`
    })()
  }
}

export interface LassoLarsCVOptions {
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
    This parameter is ignored when `fit\_intercept` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

    @defaultValue `false`
   */
  normalize?: boolean

  /**
    Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix cannot be passed as argument since we will use only subsets of X.

    @defaultValue `'auto'`
   */
  precompute?: boolean | 'auto'

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
    Number of CPUs to use during the cross validation. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Unlike the `tol` parameter in some iterative optimization-based algorithms, this parameter does not control the tolerance of the optimization.
   */
  eps?: number

  /**
    If True, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set True by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsCV only makes sense for problems where a sparse solution is expected and/or reached.

    @defaultValue `false`
   */
  positive?: boolean
}

export interface LassoLarsCVFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values.
   */
  y?: ArrayLike
}

export interface LassoLarsCVPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface LassoLarsCVScoreOptions {
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
