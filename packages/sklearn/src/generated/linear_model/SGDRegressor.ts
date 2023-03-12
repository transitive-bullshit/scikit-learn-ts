/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear model fitted by minimizing a regularized empirical loss with SGD.

  SGD stands for Stochastic Gradient Descent: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate).

  The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

  This implementation works with data represented as dense numpy arrays of floating point values for the features.

  Read more in the [User Guide](../sgd.html#sgd).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html
 */
export class SGDRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SGDRegressorOptions) {
    this.id = `SGDRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SGDRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import SGDRegressor
try: bridgeSGDRegressor
except NameError: bridgeSGDRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_SGDRegressor = {'loss': ${
      this.opts['loss'] ?? undefined
    }, 'penalty': ${this.opts['penalty'] ?? undefined}, 'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'l1_ratio': ${this.opts['l1_ratio'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'epsilon': ${this.opts['epsilon'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'eta0': ${
      this.opts['eta0'] ?? undefined
    }, 'power_t': ${this.opts['power_t'] ?? undefined}, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'average': ${
      this.opts['average'] ?? undefined
    }}

ctor_SGDRegressor = {k: v for k, v in ctor_SGDRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeSGDRegressor[${this.id}] = SGDRegressor(**ctor_SGDRegressor)`

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

    await this._py.ex`del bridgeSGDRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: SGDRegressorDensifyOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_densify = {}

pms_SGDRegressor_densify = {k: v for k, v in pms_SGDRegressor_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_densify = bridgeSGDRegressor[${this.id}].densify(**pms_SGDRegressor_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_densify.tolist() if hasattr(res_SGDRegressor_densify, 'tolist') else res_SGDRegressor_densify`
  }

  /**
    Fit linear model with Stochastic Gradient Descent.
   */
  async fit(opts: SGDRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${
      opts['coef_init'] !== undefined
    } else None, 'intercept_init': np.array(${
      opts['intercept_init'] ?? undefined
    }) if ${opts['intercept_init'] !== undefined} else None, 'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_SGDRegressor_fit = {k: v for k, v in pms_SGDRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_fit = bridgeSGDRegressor[${this.id}].fit(**pms_SGDRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_fit.tolist() if hasattr(res_SGDRegressor_fit, 'tolist') else res_SGDRegressor_fit`
  }

  /**
    Perform one epoch of stochastic gradient descent on given samples.

    Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence and early stopping should be handled by the user.
   */
  async partial_fit(opts: SGDRegressorPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_partial_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_SGDRegressor_partial_fit = {k: v for k, v in pms_SGDRegressor_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_partial_fit = bridgeSGDRegressor[${this.id}].partial_fit(**pms_SGDRegressor_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_partial_fit.tolist() if hasattr(res_SGDRegressor_partial_fit, 'tolist') else res_SGDRegressor_partial_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: SGDRegressorPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SGDRegressor_predict = {k: v for k, v in pms_SGDRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_predict = bridgeSGDRegressor[${this.id}].predict(**pms_SGDRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_predict.tolist() if hasattr(res_SGDRegressor_predict, 'tolist') else res_SGDRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: SGDRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_SGDRegressor_score = {k: v for k, v in pms_SGDRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_score = bridgeSGDRegressor[${this.id}].score(**pms_SGDRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_score.tolist() if hasattr(res_SGDRegressor_score, 'tolist') else res_SGDRegressor_score`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: SGDRegressorSparsifyOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_SGDRegressor_sparsify = {}

pms_SGDRegressor_sparsify = {k: v for k, v in pms_SGDRegressor_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDRegressor_sparsify = bridgeSGDRegressor[${this.id}].sparsify(**pms_SGDRegressor_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDRegressor_sparsify.tolist() if hasattr(res_SGDRegressor_sparsify, 'tolist') else res_SGDRegressor_sparsify`
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_coef_ = bridgeSGDRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_coef_.tolist() if hasattr(attr_SGDRegressor_coef_, 'tolist') else attr_SGDRegressor_coef_`
    })()
  }

  /**
    The intercept term.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_intercept_ = bridgeSGDRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_intercept_.tolist() if hasattr(attr_SGDRegressor_intercept_, 'tolist') else attr_SGDRegressor_intercept_`
    })()
  }

  /**
    The actual number of iterations before reaching the stopping criterion.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_n_iter_ = bridgeSGDRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_n_iter_.tolist() if hasattr(attr_SGDRegressor_n_iter_, 'tolist') else attr_SGDRegressor_n_iter_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDRegressor must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_t_ = bridgeSGDRegressor[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_t_.tolist() if hasattr(attr_SGDRegressor_t_, 'tolist') else attr_SGDRegressor_t_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_n_features_in_ = bridgeSGDRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_n_features_in_.tolist() if hasattr(attr_SGDRegressor_n_features_in_, 'tolist') else attr_SGDRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDRegressor_feature_names_in_ = bridgeSGDRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDRegressor_feature_names_in_.tolist() if hasattr(attr_SGDRegressor_feature_names_in_, 'tolist') else attr_SGDRegressor_feature_names_in_`
    })()
  }
}

export interface SGDRegressorOptions {
  /**
    The loss function to be used. The possible values are ‘squared\_error’, ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’

    The ‘squared\_error’ refers to the ordinary least squares fit. ‘huber’ modifies ‘squared\_error’ to focus less on getting outliers correct by switching from squared to linear loss past a distance of epsilon. ‘epsilon\_insensitive’ ignores errors less than epsilon and is linear past that; this is the loss function used in SVR. ‘squared\_epsilon\_insensitive’ is the same but becomes squared loss past a tolerance of epsilon.

    More details about the losses formulas can be found in the [User Guide](../sgd.html#sgd-mathematical-formulation).

    @defaultValue `'squared_error'`
   */
  loss?: string

  /**
    The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `None`.

    @defaultValue `'l2'`
   */
  penalty?: 'l2' | 'l1' | 'elasticnet'

  /**
    Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when set to `learning\_rate` is set to ‘optimal’.

    @defaultValue `0.0001`
   */
  alpha?: number

  /**
    The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’.

    @defaultValue `0.15`
   */
  l1_ratio?: number

  /**
    Whether the intercept should be estimated or not. If False, the data is assumed to be already centered.

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDRegressor.partial_fit "sklearn.linear_model.SGDRegressor.partial_fit") method.

    @defaultValue `1000`
   */
  max_iter?: number

  /**
    The stopping criterion. If it is not None, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.

    @defaultValue `0.001`
   */
  tol?: number

  /**
    Whether or not the training data should be shuffled after each epoch.

    @defaultValue `true`
   */
  shuffle?: boolean

  /**
    The verbosity level.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold.

    @defaultValue `0.1`
   */
  epsilon?: number

  /**
    Used for shuffling the data, when `shuffle` is set to `True`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    The learning rate schedule:

    @defaultValue `'invscaling'`
   */
  learning_rate?: string

  /**
    The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.01.

    @defaultValue `0.01`
   */
  eta0?: number

  /**
    The exponent for inverse scaling learning rate.

    @defaultValue `0.25`
   */
  power_t?: number

  /**
    Whether to use early stopping to terminate training when validation score is not improving. If set to True, it will automatically set aside a fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs.

    @defaultValue `false`
   */
  early_stopping?: boolean

  /**
    The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is True.

    @defaultValue `0.1`
   */
  validation_fraction?: number

  /**
    Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter.

    @defaultValue `5`
   */
  n_iter_no_change?: number

  /**
    When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

    Repeatedly calling fit or partial\_fit when warm\_start is True can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    When set to True, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples.

    @defaultValue `false`
   */
  average?: boolean | number
}

export interface SGDRegressorDensifyOptions {}

export interface SGDRegressorFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix

  /**
    Target values.
   */
  y?: NDArray

  /**
    The initial coefficients to warm-start the optimization.
   */
  coef_init?: NDArray

  /**
    The initial intercept to warm-start the optimization.
   */
  intercept_init?: NDArray

  /**
    Weights applied to individual samples (1. for unweighted).
   */
  sample_weight?: ArrayLike
}

export interface SGDRegressorPartialFitOptions {
  /**
    Subset of training data.
   */
  X?: ArrayLike | SparseMatrix

  /**
    Subset of target values.
   */
  y?: any[]

  /**
    Weights applied to individual samples. If not provided, uniform weights are assumed.
   */
  sample_weight?: ArrayLike
}

export interface SGDRegressorPredictOptions {
  /**
    Input data.
   */
  X?: ArrayLike | SparseMatrix
}

export interface SGDRegressorScoreOptions {
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

export interface SGDRegressorSparsifyOptions {}
