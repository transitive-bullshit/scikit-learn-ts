/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Lasso model fit with Lars using BIC or AIC for model selection.

  The optimization objective for Lasso is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsIC.html)
 */
export class LassoLarsIC {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LassoLarsICOptions) {
    this.id = `LassoLarsIC${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LassoLarsIC.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LassoLarsIC
try: bridgeLassoLarsIC
except NameError: bridgeLassoLarsIC = {}
`

    // set up constructor params
    await this._py.ex`ctor_LassoLarsIC = {'criterion': ${
      this.opts['criterion'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'normalize': ${
      this.opts['normalize'] ?? undefined
    }, 'precompute': ${this.opts['precompute'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'eps': ${this.opts['eps'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'positive': ${this.opts['positive'] ?? undefined}, 'noise_variance': ${
      this.opts['noise_variance'] ?? undefined
    }}

ctor_LassoLarsIC = {k: v for k, v in ctor_LassoLarsIC.items() if v is not None}`

    await this._py
      .ex`bridgeLassoLarsIC[${this.id}] = LassoLarsIC(**ctor_LassoLarsIC)`

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

    await this._py.ex`del bridgeLassoLarsIC[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: LassoLarsICFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsIC_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'copy_X': ${
      opts['copy_X'] ?? undefined
    }}

pms_LassoLarsIC_fit = {k: v for k, v in pms_LassoLarsIC_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsIC_fit = bridgeLassoLarsIC[${this.id}].fit(**pms_LassoLarsIC_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsIC_fit.tolist() if hasattr(res_LassoLarsIC_fit, 'tolist') else res_LassoLarsIC_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: LassoLarsICPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsIC_predict = {'X': ${opts['X'] ?? undefined}}

pms_LassoLarsIC_predict = {k: v for k, v in pms_LassoLarsIC_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsIC_predict = bridgeLassoLarsIC[${this.id}].predict(**pms_LassoLarsIC_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsIC_predict.tolist() if hasattr(res_LassoLarsIC_predict, 'tolist') else res_LassoLarsIC_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: LassoLarsICScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LassoLarsIC_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LassoLarsIC_score = {k: v for k, v in pms_LassoLarsIC_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LassoLarsIC_score = bridgeLassoLarsIC[${this.id}].score(**pms_LassoLarsIC_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LassoLarsIC_score.tolist() if hasattr(res_LassoLarsIC_score, 'tolist') else res_LassoLarsIC_score`
  }

  /**
    parameter vector (w in the formulation formula)
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_coef_ = bridgeLassoLarsIC[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_coef_.tolist() if hasattr(attr_LassoLarsIC_coef_, 'tolist') else attr_LassoLarsIC_coef_`
    })()
  }

  /**
    independent term in decision function.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsIC must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_intercept_ = bridgeLassoLarsIC[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_intercept_.tolist() if hasattr(attr_LassoLarsIC_intercept_, 'tolist') else attr_LassoLarsIC_intercept_`
    })()
  }

  /**
    the alpha parameter chosen by the information criterion
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_alpha_ = bridgeLassoLarsIC[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_alpha_.tolist() if hasattr(attr_LassoLarsIC_alpha_, 'tolist') else attr_LassoLarsIC_alpha_`
    })()
  }

  /**
    Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If a list, it will be of length `n\_targets`.
   */
  get alphas_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before accessing alphas_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_alphas_ = bridgeLassoLarsIC[${this.id}].alphas_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_alphas_.tolist() if hasattr(attr_LassoLarsIC_alphas_, 'tolist') else attr_LassoLarsIC_alphas_`
    })()
  }

  /**
    number of iterations run by lars\_path to find the grid of alphas.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LassoLarsIC must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_n_iter_ = bridgeLassoLarsIC[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_n_iter_.tolist() if hasattr(attr_LassoLarsIC_n_iter_, 'tolist') else attr_LassoLarsIC_n_iter_`
    })()
  }

  /**
    The value of the information criteria (‘aic’, ‘bic’) across all alphas. The alpha which has the smallest information criterion is chosen, as specified in [\[1\]](#rde9cc43d0d41-1).
   */
  get criterion_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsIC must call init() before accessing criterion_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_criterion_ = bridgeLassoLarsIC[${this.id}].criterion_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_criterion_.tolist() if hasattr(attr_LassoLarsIC_criterion_, 'tolist') else attr_LassoLarsIC_criterion_`
    })()
  }

  /**
    The estimated noise variance from the data used to compute the criterion.
   */
  get noise_variance_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsIC must call init() before accessing noise_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_noise_variance_ = bridgeLassoLarsIC[${this.id}].noise_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_noise_variance_.tolist() if hasattr(attr_LassoLarsIC_noise_variance_, 'tolist') else attr_LassoLarsIC_noise_variance_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsIC must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_n_features_in_ = bridgeLassoLarsIC[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_n_features_in_.tolist() if hasattr(attr_LassoLarsIC_n_features_in_, 'tolist') else attr_LassoLarsIC_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LassoLarsIC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LassoLarsIC must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LassoLarsIC_feature_names_in_ = bridgeLassoLarsIC[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LassoLarsIC_feature_names_in_.tolist() if hasattr(attr_LassoLarsIC_feature_names_in_, 'tolist') else attr_LassoLarsIC_feature_names_in_`
    })()
  }
}

export interface LassoLarsICOptions {
  /**
    The type of criterion to use.

    @defaultValue `'aic'`
   */
  criterion?: 'aic' | 'bic'

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
    This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

    @defaultValue `false`
   */
  normalize?: boolean

  /**
    Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

    @defaultValue `'auto'`
   */
  precompute?: boolean | 'auto' | ArrayLike

  /**
    Maximum number of iterations to perform. Can be used for early stopping.

    @defaultValue `500`
   */
  max_iter?: number

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
    Restrict coefficients to be >= 0. Be aware that you might want to remove fit\_intercept which is set `true` by default. Under the positive restriction the model coefficients do not converge to the ordinary-least-squares solution for small values of alpha. Only coefficients up to the smallest alpha value (`alphas\_\[alphas\_ > 0.\].min()` when fit\_path=`true`) reached by the stepwise Lars-Lasso algorithm are typically in congruence with the solution of the coordinate descent Lasso estimator. As a consequence using LassoLarsIC only makes sense for problems where a sparse solution is expected and/or reached.

    @defaultValue `false`
   */
  positive?: boolean

  /**
    The estimated noise variance of the data. If `undefined`, an unbiased estimate is computed by an OLS model. However, it is only possible in the case where `n\_samples > n\_features + fit\_intercept`.
   */
  noise_variance?: number
}

export interface LassoLarsICFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values. Will be cast to X’s dtype if necessary.
   */
  y?: ArrayLike

  /**
    If provided, this parameter will override the choice of copy\_X made at instance creation. If `true`, X will be copied; else, it may be overwritten.
   */
  copy_X?: boolean
}

export interface LassoLarsICPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface LassoLarsICScoreOptions {
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
