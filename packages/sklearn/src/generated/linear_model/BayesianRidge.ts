/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Bayesian ridge regression.

  Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

  Read more in the [User Guide](../linear_model.html#bayesian-regression).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html
 */
export class BayesianRidge {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: BayesianRidgeOptions) {
    this.id = `BayesianRidge${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('BayesianRidge.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import BayesianRidge
try: bridgeBayesianRidge
except NameError: bridgeBayesianRidge = {}
`

    // set up constructor params
    await this._py.ex`ctor_BayesianRidge = {'n_iter': ${
      this.opts['n_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'alpha_1': ${
      this.opts['alpha_1'] ?? undefined
    }, 'alpha_2': ${this.opts['alpha_2'] ?? undefined}, 'lambda_1': ${
      this.opts['lambda_1'] ?? undefined
    }, 'lambda_2': ${this.opts['lambda_2'] ?? undefined}, 'alpha_init': ${
      this.opts['alpha_init'] ?? undefined
    }, 'lambda_init': ${
      this.opts['lambda_init'] ?? undefined
    }, 'compute_score': ${
      this.opts['compute_score'] ?? undefined
    }, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_BayesianRidge = {k: v for k, v in ctor_BayesianRidge.items() if v is not None}`

    await this._py
      .ex`bridgeBayesianRidge[${this.id}] = BayesianRidge(**ctor_BayesianRidge)`

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

    await this._py.ex`del bridgeBayesianRidge[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model.
   */
  async fit(opts: BayesianRidgeFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_BayesianRidge_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BayesianRidge_fit = {k: v for k, v in pms_BayesianRidge_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianRidge_fit = bridgeBayesianRidge[${this.id}].fit(**pms_BayesianRidge_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianRidge_fit.tolist() if hasattr(res_BayesianRidge_fit, 'tolist') else res_BayesianRidge_fit`
  }

  /**
    Predict using the linear model.

    In addition to the mean of the predictive distribution, also its standard deviation can be returned.
   */
  async predict(opts: BayesianRidgePredictOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_BayesianRidge_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'return_std': ${
      opts['return_std'] ?? undefined
    }}

pms_BayesianRidge_predict = {k: v for k, v in pms_BayesianRidge_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianRidge_predict = bridgeBayesianRidge[${this.id}].predict(**pms_BayesianRidge_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianRidge_predict.tolist() if hasattr(res_BayesianRidge_predict, 'tolist') else res_BayesianRidge_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: BayesianRidgeScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_BayesianRidge_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BayesianRidge_score = {k: v for k, v in pms_BayesianRidge_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianRidge_score = bridgeBayesianRidge[${this.id}].score(**pms_BayesianRidge_score)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianRidge_score.tolist() if hasattr(res_BayesianRidge_score, 'tolist') else res_BayesianRidge_score`
  }

  /**
    Coefficients of the regression model (mean of distribution)
   */
  get coef_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_coef_ = bridgeBayesianRidge[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_coef_.tolist() if hasattr(attr_BayesianRidge_coef_, 'tolist') else attr_BayesianRidge_coef_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianRidge must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_intercept_ = bridgeBayesianRidge[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_intercept_.tolist() if hasattr(attr_BayesianRidge_intercept_, 'tolist') else attr_BayesianRidge_intercept_`
    })()
  }

  /**
    Estimated precision of the noise.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing alpha_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_alpha_ = bridgeBayesianRidge[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_alpha_.tolist() if hasattr(attr_BayesianRidge_alpha_, 'tolist') else attr_BayesianRidge_alpha_`
    })()
  }

  /**
    Estimated precision of the weights.
   */
  get lambda_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing lambda_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_lambda_ = bridgeBayesianRidge[${this.id}].lambda_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_lambda_.tolist() if hasattr(attr_BayesianRidge_lambda_, 'tolist') else attr_BayesianRidge_lambda_`
    })()
  }

  /**
    Estimated variance-covariance matrix of the weights
   */
  get sigma_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing sigma_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_sigma_ = bridgeBayesianRidge[${this.id}].sigma_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_sigma_.tolist() if hasattr(attr_BayesianRidge_sigma_, 'tolist') else attr_BayesianRidge_sigma_`
    })()
  }

  /**
    If computed\_score is True, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.
   */
  get scores_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing scores_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_scores_ = bridgeBayesianRidge[${this.id}].scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_scores_.tolist() if hasattr(attr_BayesianRidge_scores_, 'tolist') else attr_BayesianRidge_scores_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BayesianRidge must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_n_iter_ = bridgeBayesianRidge[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_n_iter_.tolist() if hasattr(attr_BayesianRidge_n_iter_, 'tolist') else attr_BayesianRidge_n_iter_`
    })()
  }

  /**
    If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.
   */
  get X_offset_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianRidge must call init() before accessing X_offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_X_offset_ = bridgeBayesianRidge[${this.id}].X_offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_X_offset_.tolist() if hasattr(attr_BayesianRidge_X_offset_, 'tolist') else attr_BayesianRidge_X_offset_`
    })()
  }

  /**
    Set to np.ones(n\_features).
   */
  get X_scale_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianRidge must call init() before accessing X_scale_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_X_scale_ = bridgeBayesianRidge[${this.id}].X_scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_X_scale_.tolist() if hasattr(attr_BayesianRidge_X_scale_, 'tolist') else attr_BayesianRidge_X_scale_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianRidge must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_n_features_in_ = bridgeBayesianRidge[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_n_features_in_.tolist() if hasattr(attr_BayesianRidge_n_features_in_, 'tolist') else attr_BayesianRidge_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This BayesianRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianRidge must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianRidge_feature_names_in_ = bridgeBayesianRidge[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianRidge_feature_names_in_.tolist() if hasattr(attr_BayesianRidge_feature_names_in_, 'tolist') else attr_BayesianRidge_feature_names_in_`
    })()
  }
}

export interface BayesianRidgeOptions {
  /**
    Maximum number of iterations. Should be greater than or equal to 1.

    @defaultValue `300`
   */
  n_iter?: number

  /**
    Stop the algorithm if w has converged.

    @defaultValue `0.001`
   */
  tol?: number

  /**
    Hyper-parameter : shape parameter for the Gamma distribution prior over the alpha parameter.

    @defaultValue `0.000001`
   */
  alpha_1?: number

  /**
    Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the alpha parameter.

    @defaultValue `0.000001`
   */
  alpha_2?: number

  /**
    Hyper-parameter : shape parameter for the Gamma distribution prior over the lambda parameter.

    @defaultValue `0.000001`
   */
  lambda_1?: number

  /**
    Hyper-parameter : inverse scale parameter (rate parameter) for the Gamma distribution prior over the lambda parameter.

    @defaultValue `0.000001`
   */
  lambda_2?: number

  /**
    Initial value for alpha (precision of the noise). If not set, alpha\_init is 1/Var(y).
   */
  alpha_init?: number

  /**
    Initial value for lambda (precision of the weights). If not set, lambda\_init is 1.
   */
  lambda_init?: number

  /**
    If True, compute the log marginal likelihood at each iteration of the optimization.

    @defaultValue `false`
   */
  compute_score?: boolean

  /**
    Whether to calculate the intercept for this model. The intercept is not treated as a probabilistic parameter and thus has no associated variance. If set to False, no intercept will be used in calculations (i.e. data is expected to be centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    If True, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    Verbose mode when fitting the model.

    @defaultValue `false`
   */
  verbose?: boolean
}

export interface BayesianRidgeFitOptions {
  /**
    Training data.
   */
  X?: NDArray[]

  /**
    Target values. Will be cast to X’s dtype if necessary.
   */
  y?: NDArray

  /**
    Individual weights for each sample.
   */
  sample_weight?: NDArray
}

export interface BayesianRidgePredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Whether to return the standard deviation of posterior prediction.

    @defaultValue `false`
   */
  return_std?: boolean
}

export interface BayesianRidgeScoreOptions {
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
