/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Lasso model fit with Least Angle Regression a.k.a. Lars.

  It is a Linear Model trained with an L1 prior as regularizer.

  The optimization objective for Lasso is:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLars.html
 */
export class LassoLars {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LassoLarsOptions) {
    this.id = `LassoLars${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LassoLars.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LassoLars
try: bridgeLassoLars
except NameError: bridgeLassoLars = {}
`

    // set up constructor params
    await this._py.ex`ctor_LassoLars = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'normalize': ${
      this.opts['normalize'] ?? undefined
    }, 'precompute': ${this.opts['precompute'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'eps': ${this.opts['eps'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'fit_path': ${this.opts['fit_path'] ?? undefined}, 'positive': ${
      this.opts['positive'] ?? undefined
    }, 'jitter': ${this.opts['jitter'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_LassoLars = {k: v for k, v in ctor_LassoLars.items() if v is not None}`

    await this._py.ex`bridgeLassoLars[${this.id}] = LassoLars(**ctor_LassoLars)`

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

    await this._py.ex`del bridgeLassoLars[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: LassoLarsFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LassoLars_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'Xy': np.array(${
      opts['Xy'] ?? undefined
    }) if ${opts['Xy'] !== undefined} else None}

pms_LassoLars_fit = {k: v for k, v in pms_LassoLars_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLars_fit = bridgeLassoLars[${this.id}].fit(**pms_LassoLars_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLars_fit.tolist() if hasattr(res_LassoLars_fit, 'tolist') else res_LassoLars_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: LassoLarsPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LassoLars_predict = {'X': ${opts['X'] ?? undefined}}

pms_LassoLars_predict = {k: v for k, v in pms_LassoLars_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLars_predict = bridgeLassoLars[${this.id}].predict(**pms_LassoLars_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLars_predict.tolist() if hasattr(res_LassoLars_predict, 'tolist') else res_LassoLars_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: LassoLarsScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LassoLars_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LassoLars_score = {k: v for k, v in pms_LassoLars_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLars_score = bridgeLassoLars[${this.id}].score(**pms_LassoLars_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLars_score.tolist() if hasattr(res_LassoLars_score, 'tolist') else res_LassoLars_score`
  }

  /**
    Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.
   */
  get alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_alphas_ = bridgeLassoLars[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_alphas_.tolist() if hasattr(attr_LassoLars_alphas_, 'tolist') else attr_LassoLars_alphas_`
    })()
  }

  /**
    Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.
   */
  get active_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing active_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_active_ = bridgeLassoLars[${this.id}].active_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_active_.tolist() if hasattr(attr_LassoLars_active_, 'tolist') else attr_LassoLars_active_`
    })()
  }

  /**
    If a list is passed it’s expected to be one of n\_targets such arrays. The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `False`. If this is a list of array-like, the length of the outer list is `n\_targets`.
   */
  get coef_path_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing coef_path_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_coef_path_ = bridgeLassoLars[${this.id}].coef_path_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_coef_path_.tolist() if hasattr(attr_LassoLars_coef_path_, 'tolist') else attr_LassoLars_coef_path_`
    })()
  }

  /**
    Parameter vector (w in the formulation formula).
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_coef_ = bridgeLassoLars[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_coef_.tolist() if hasattr(attr_LassoLars_coef_, 'tolist') else attr_LassoLars_coef_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_intercept_ = bridgeLassoLars[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_intercept_.tolist() if hasattr(attr_LassoLars_intercept_, 'tolist') else attr_LassoLars_intercept_`
    })()
  }

  /**
    The number of iterations taken by lars\_path to find the grid of alphas for each target.
   */
  get n_iter_(): Promise<ArrayLike | number> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLars must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_n_iter_ = bridgeLassoLars[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_n_iter_.tolist() if hasattr(attr_LassoLars_n_iter_, 'tolist') else attr_LassoLars_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLars must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_n_features_in_ = bridgeLassoLars[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_n_features_in_.tolist() if hasattr(attr_LassoLars_n_features_in_, 'tolist') else attr_LassoLars_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoLars instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLars must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLars_feature_names_in_ = bridgeLassoLars[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLars_feature_names_in_.tolist() if hasattr(attr_LassoLars_feature_names_in_, 'tolist') else attr_LassoLars_feature_names_in_`
    })()
  }
}

export interface LassoLarsOptions {
  /**
    Constant that multiplies the penalty term. Defaults to 1.0. `alpha \= 0` is equivalent to an ordinary least square, solved by [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression"). For numerical reasons, using `alpha \= 0` with the LassoLars object is not advised and you should prefer the LinearRegression object.

    @defaultValue `1`
   */
  alpha?: number

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
    This parameter is ignored when `fit\_intercept` is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

    @defaultValue `false`
   */
  normalize?: boolean

  /**
    Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

    @defaultValue `'auto'`
   */
  precompute?: boolean | 'auto' | ArrayLike

  /**
    Maximum number of iterations to perform.

    @defaultValue `500`
   */
  max_iter?: number

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
    If `True` the full path is stored in the `coef\_path\_` attribute. If you compute the solution for a large problem or many targets, setting `fit\_path` to `False` will lead to a speedup, especially with a small alpha.

    @defaultValue `true`
   */
  fit_path?: boolean

  /**
    Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set True by default. Under the positive restriction the model coefficients will not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=True) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator.

    @defaultValue `false`
   */
  positive?: boolean

  /**
    Upper bound on a uniform noise parameter to be added to the `y` values, to satisfy the model’s assumption of one-at-a-time computations. Might help with stability.
   */
  jitter?: number

  /**
    Determines random number generation for jittering. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Ignored if `jitter` is None.
   */
  random_state?: number
}

export interface LassoLarsFitOptions {
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
}

export interface LassoLarsPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface LassoLarsScoreOptions {
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
