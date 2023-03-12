/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-layer Perceptron regressor.

  This model optimizes the squared error using LBFGS or stochastic gradient descent.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html)
 */
export class MLPRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MLPRegressorOptions) {
    this.id = `MLPRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MLPRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neural_network import MLPRegressor
try: bridgeMLPRegressor
except NameError: bridgeMLPRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_MLPRegressor = {'hidden_layer_sizes': np.array(${
      this.opts['hidden_layer_sizes'] ?? undefined
    }) if ${
      this.opts['hidden_layer_sizes'] !== undefined
    } else None, 'activation': ${
      this.opts['activation'] ?? undefined
    }, 'solver': ${this.opts['solver'] ?? undefined}, 'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'batch_size': ${
      this.opts['batch_size'] ?? undefined
    }, 'learning_rate': ${
      this.opts['learning_rate'] ?? undefined
    }, 'learning_rate_init': ${
      this.opts['learning_rate_init'] ?? undefined
    }, 'power_t': ${this.opts['power_t'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'momentum': ${
      this.opts['momentum'] ?? undefined
    }, 'nesterovs_momentum': ${
      this.opts['nesterovs_momentum'] ?? undefined
    }, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'beta_1': ${this.opts['beta_1'] ?? undefined}, 'beta_2': ${
      this.opts['beta_2'] ?? undefined
    }, 'epsilon': ${this.opts['epsilon'] ?? undefined}, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'max_fun': ${this.opts['max_fun'] ?? undefined}}

ctor_MLPRegressor = {k: v for k, v in ctor_MLPRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeMLPRegressor[${this.id}] = MLPRegressor(**ctor_MLPRegressor)`

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

    await this._py.ex`del bridgeMLPRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to data matrix X and target(s) y.
   */
  async fit(opts: MLPRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MLPRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MLPRegressor_fit = {k: v for k, v in pms_MLPRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPRegressor_fit = bridgeMLPRegressor[${this.id}].fit(**pms_MLPRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPRegressor_fit.tolist() if hasattr(res_MLPRegressor_fit, 'tolist') else res_MLPRegressor_fit`
  }

  /**
    Update the model with a single iteration over the given data.
   */
  async partial_fit(opts: MLPRegressorPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MLPRegressor_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MLPRegressor_partial_fit = {k: v for k, v in pms_MLPRegressor_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPRegressor_partial_fit = bridgeMLPRegressor[${this.id}].partial_fit(**pms_MLPRegressor_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPRegressor_partial_fit.tolist() if hasattr(res_MLPRegressor_partial_fit, 'tolist') else res_MLPRegressor_partial_fit`
  }

  /**
    Predict using the multi-layer perceptron model.
   */
  async predict(opts: MLPRegressorPredictOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MLPRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MLPRegressor_predict = {k: v for k, v in pms_MLPRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPRegressor_predict = bridgeMLPRegressor[${this.id}].predict(**pms_MLPRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPRegressor_predict.tolist() if hasattr(res_MLPRegressor_predict, 'tolist') else res_MLPRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: MLPRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MLPRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MLPRegressor_score = {k: v for k, v in pms_MLPRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPRegressor_score = bridgeMLPRegressor[${this.id}].score(**pms_MLPRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPRegressor_score.tolist() if hasattr(res_MLPRegressor_score, 'tolist') else res_MLPRegressor_score`
  }

  /**
    The current loss computed with the loss function.
   */
  get loss_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before accessing loss_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_loss_ = bridgeMLPRegressor[${this.id}].loss_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_loss_.tolist() if hasattr(attr_MLPRegressor_loss_, 'tolist') else attr_MLPRegressor_loss_`
    })()
  }

  /**
    The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set to `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead. Only accessible when solver=’sgd’ or ‘adam’.
   */
  get best_loss_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing best_loss_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_best_loss_ = bridgeMLPRegressor[${this.id}].best_loss_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_best_loss_.tolist() if hasattr(attr_MLPRegressor_best_loss_, 'tolist') else attr_MLPRegressor_best_loss_`
    })()
  }

  /**
    Loss value evaluated at the end of each training step. The ith element in the list represents the loss at the ith iteration. Only accessible when solver=’sgd’ or ‘adam’.
   */
  get loss_curve_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing loss_curve_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_loss_curve_ = bridgeMLPRegressor[${this.id}].loss_curve_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_loss_curve_.tolist() if hasattr(attr_MLPRegressor_loss_curve_, 'tolist') else attr_MLPRegressor_loss_curve_`
    })()
  }

  /**
    The score at each iteration on a held-out validation set. The score reported is the R2 score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.
   */
  get validation_scores_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing validation_scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_validation_scores_ = bridgeMLPRegressor[${this.id}].validation_scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_validation_scores_.tolist() if hasattr(attr_MLPRegressor_validation_scores_, 'tolist') else attr_MLPRegressor_validation_scores_`
    })()
  }

  /**
    The best validation score (i.e. R2 score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`. Only accessible when solver=’sgd’ or ‘adam’.
   */
  get best_validation_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing best_validation_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_best_validation_score_ = bridgeMLPRegressor[${this.id}].best_validation_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_best_validation_score_.tolist() if hasattr(attr_MLPRegressor_best_validation_score_, 'tolist') else attr_MLPRegressor_best_validation_score_`
    })()
  }

  /**
    The number of training samples seen by the solver during fitting. Mathematically equals `n\_iters \* X.shape\[0\]`, it means `time\_step` and it is used by optimizer’s learning rate scheduler.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_t_ = bridgeMLPRegressor[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_t_.tolist() if hasattr(attr_MLPRegressor_t_, 'tolist') else attr_MLPRegressor_t_`
    })()
  }

  /**
    The ith element in the list represents the weight matrix corresponding to layer i.
   */
  get coefs_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before accessing coefs_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_coefs_ = bridgeMLPRegressor[${this.id}].coefs_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_coefs_.tolist() if hasattr(attr_MLPRegressor_coefs_, 'tolist') else attr_MLPRegressor_coefs_`
    })()
  }

  /**
    The ith element in the list represents the bias vector corresponding to layer i + 1.
   */
  get intercepts_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing intercepts_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_intercepts_ = bridgeMLPRegressor[${this.id}].intercepts_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_intercepts_.tolist() if hasattr(attr_MLPRegressor_intercepts_, 'tolist') else attr_MLPRegressor_intercepts_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_n_features_in_ = bridgeMLPRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_n_features_in_.tolist() if hasattr(attr_MLPRegressor_n_features_in_, 'tolist') else attr_MLPRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_feature_names_in_ = bridgeMLPRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_feature_names_in_.tolist() if hasattr(attr_MLPRegressor_feature_names_in_, 'tolist') else attr_MLPRegressor_feature_names_in_`
    })()
  }

  /**
    The number of iterations the solver has run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPRegressor must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_n_iter_ = bridgeMLPRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_n_iter_.tolist() if hasattr(attr_MLPRegressor_n_iter_, 'tolist') else attr_MLPRegressor_n_iter_`
    })()
  }

  /**
    Number of layers.
   */
  get n_layers_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing n_layers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_n_layers_ = bridgeMLPRegressor[${this.id}].n_layers_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_n_layers_.tolist() if hasattr(attr_MLPRegressor_n_layers_, 'tolist') else attr_MLPRegressor_n_layers_`
    })()
  }

  /**
    Number of outputs.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_n_outputs_ = bridgeMLPRegressor[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_n_outputs_.tolist() if hasattr(attr_MLPRegressor_n_outputs_, 'tolist') else attr_MLPRegressor_n_outputs_`
    })()
  }

  /**
    Name of the output activation function.
   */
  get out_activation_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This MLPRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPRegressor must call init() before accessing out_activation_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPRegressor_out_activation_ = bridgeMLPRegressor[${this.id}].out_activation_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPRegressor_out_activation_.tolist() if hasattr(attr_MLPRegressor_out_activation_, 'tolist') else attr_MLPRegressor_out_activation_`
    })()
  }
}

export interface MLPRegressorOptions {
  /**
    The ith element represents the number of neurons in the ith hidden layer.
   */
  hidden_layer_sizes?: any

  /**
    Activation function for the hidden layer.

    @defaultValue `'relu'`
   */
  activation?: 'identity' | 'logistic' | 'tanh' | 'relu'

  /**
    The solver for weight optimization.

    @defaultValue `'adam'`
   */
  solver?: 'lbfgs' | 'sgd' | 'adam'

  /**
    Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.

    @defaultValue `0.0001`
   */
  alpha?: number

  /**
    Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the regressor will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.

    @defaultValue `'auto'`
   */
  batch_size?: number

  /**
    Learning rate schedule for weight updates.

    @defaultValue `'constant'`
   */
  learning_rate?: 'constant' | 'invscaling' | 'adaptive'

  /**
    The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=’sgd’ or ‘adam’.

    @defaultValue `0.001`
   */
  learning_rate_init?: number

  /**
    The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning\_rate is set to ‘invscaling’. Only used when solver=’sgd’.

    @defaultValue `0.5`
   */
  power_t?: number

  /**
    Maximum number of iterations. The solver iterates until convergence (determined by ‘tol’) or this number of iterations. For stochastic solvers (‘sgd’, ‘adam’), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.

    @defaultValue `200`
   */
  max_iter?: number

  /**
    Whether to shuffle samples in each iteration. Only used when solver=’sgd’ or ‘adam’.

    @defaultValue `true`
   */
  shuffle?: boolean

  /**
    Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=’sgd’ or ‘adam’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    Tolerance for the optimization. When the loss or score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive iterations, unless `learning\_rate` is set to ‘adaptive’, convergence is considered to be reached and training stops.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Whether to print progress messages to stdout.

    @defaultValue `false`
   */
  verbose?: boolean

  /**
    When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=’sgd’.

    @defaultValue `0.9`
   */
  momentum?: number

  /**
    Whether to use Nesterov’s momentum. Only used when solver=’sgd’ and momentum > 0.

    @defaultValue `true`
   */
  nesterovs_momentum?: boolean

  /**
    Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside `validation\_fraction` of training data as validation and terminate training when validation score is not improving by at least `tol` for `n\_iter\_no\_change` consecutive epochs. Only effective when solver=’sgd’ or ‘adam’.

    @defaultValue `false`
   */
  early_stopping?: boolean

  /**
    The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

    @defaultValue `0.1`
   */
  validation_fraction?: number

  /**
    Exponential decay rate for estimates of first moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

    @defaultValue `0.9`
   */
  beta_1?: number

  /**
    Exponential decay rate for estimates of second moment vector in adam, should be in \[0, 1). Only used when solver=’adam’.

    @defaultValue `0.999`
   */
  beta_2?: number

  /**
    Value for numerical stability in adam. Only used when solver=’adam’.

    @defaultValue `1e-8`
   */
  epsilon?: number

  /**
    Maximum number of epochs to not meet `tol` improvement. Only effective when solver=’sgd’ or ‘adam’.

    @defaultValue `10`
   */
  n_iter_no_change?: number

  /**
    Only used when solver=’lbfgs’. Maximum number of function calls. The solver iterates until convergence (determined by `tol`), number of iterations reaches max\_iter, or this number of function calls. Note that number of function calls will be greater than or equal to the number of iterations for the MLPRegressor.

    @defaultValue `15000`
   */
  max_fun?: number
}

export interface MLPRegressorFitOptions {
  /**
    The input data.
   */
  X?: NDArray | SparseMatrix[]

  /**
    The target values (class labels in classification, real numbers in regression).
   */
  y?: NDArray
}

export interface MLPRegressorPartialFitOptions {
  /**
    The input data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values.
   */
  y?: NDArray
}

export interface MLPRegressorPredictOptions {
  /**
    The input data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface MLPRegressorScoreOptions {
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
