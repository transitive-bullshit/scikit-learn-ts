/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-layer Perceptron classifier.

  This model optimizes the log-loss function using LBFGS or stochastic gradient descent.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html)
 */
export class MLPClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
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
      Size of minibatches for stochastic optimizers. If the solver is ‘lbfgs’, the classifier will not use minibatch. When set to “auto”, `batch\_size=min(200, n\_samples)`.

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
      Whether to use early stopping to terminate training when validation score is not improving. If set to true, it will automatically set aside 10% of training data as validation and terminate training when validation score is not improving by at least tol for `n\_iter\_no\_change` consecutive epochs. The split is stratified, except in a multilabel setting. If early stopping is `false`, then the training stops when the training loss does not improve by more than tol for n\_iter\_no\_change consecutive passes over the training set. Only effective when solver=’sgd’ or ‘adam’.

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
      Only used when solver=’lbfgs’. Maximum number of loss function calls. The solver iterates until convergence (determined by ‘tol’), number of iterations reaches max\_iter, or this number of loss function calls. Note that number of loss function calls will be greater than or equal to the number of iterations for the `MLPClassifier`.

      @defaultValue `15000`
     */
    max_fun?: number
  }) {
    this.id = `MLPClassifier${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MLPClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neural_network import MLPClassifier
try: bridgeMLPClassifier
except NameError: bridgeMLPClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_MLPClassifier = {'hidden_layer_sizes': np.array(${
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

ctor_MLPClassifier = {k: v for k, v in ctor_MLPClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeMLPClassifier[${this.id}] = MLPClassifier(**ctor_MLPClassifier)`

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

    await this._py.ex`del bridgeMLPClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to data matrix X and target(s) y.
   */
  async fit(opts: {
    /**
      The input data.
     */
    X?: NDArray | SparseMatrix[]

    /**
      The target values (class labels in classification, real numbers in regression).
     */
    y?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MLPClassifier_fit = {k: v for k, v in pms_MLPClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_fit = bridgeMLPClassifier[${this.id}].fit(**pms_MLPClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_fit.tolist() if hasattr(res_MLPClassifier_fit, 'tolist') else res_MLPClassifier_fit`
  }

  /**
    Update the model with a single iteration over the given data.
   */
  async partial_fit(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The target values.
     */
    y?: ArrayLike

    /**
      Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.
     */
    classes?: any[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': np.array(${
      opts['classes'] ?? undefined
    }) if ${opts['classes'] !== undefined} else None}

pms_MLPClassifier_partial_fit = {k: v for k, v in pms_MLPClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_partial_fit = bridgeMLPClassifier[${this.id}].partial_fit(**pms_MLPClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_partial_fit.tolist() if hasattr(res_MLPClassifier_partial_fit, 'tolist') else res_MLPClassifier_partial_fit`
  }

  /**
    Predict using the multi-layer perceptron classifier.
   */
  async predict(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MLPClassifier_predict = {k: v for k, v in pms_MLPClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_predict = bridgeMLPClassifier[${this.id}].predict(**pms_MLPClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_predict.tolist() if hasattr(res_MLPClassifier_predict, 'tolist') else res_MLPClassifier_predict`
  }

  /**
    Return the log of probability estimates.
   */
  async predict_log_proba(opts: {
    /**
      The input data.
     */
    X?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MLPClassifier_predict_log_proba = {k: v for k, v in pms_MLPClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_predict_log_proba = bridgeMLPClassifier[${this.id}].predict_log_proba(**pms_MLPClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_predict_log_proba.tolist() if hasattr(res_MLPClassifier_predict_log_proba, 'tolist') else res_MLPClassifier_predict_log_proba`
  }

  /**
    Probability estimates.
   */
  async predict_proba(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MLPClassifier_predict_proba = {k: v for k, v in pms_MLPClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_predict_proba = bridgeMLPClassifier[${this.id}].predict_proba(**pms_MLPClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_predict_proba.tolist() if hasattr(res_MLPClassifier_predict_proba, 'tolist') else res_MLPClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike[]

    /**
      True labels for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MLPClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MLPClassifier_score = {k: v for k, v in pms_MLPClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MLPClassifier_score = bridgeMLPClassifier[${this.id}].score(**pms_MLPClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MLPClassifier_score.tolist() if hasattr(res_MLPClassifier_score, 'tolist') else res_MLPClassifier_score`
  }

  /**
    Class labels for each output.
   */
  get classes_(): Promise<NDArray | any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_classes_ = bridgeMLPClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_classes_.tolist() if hasattr(attr_MLPClassifier_classes_, 'tolist') else attr_MLPClassifier_classes_`
    })()
  }

  /**
    The current loss computed with the loss function.
   */
  get loss_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before accessing loss_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_loss_ = bridgeMLPClassifier[${this.id}].loss_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_loss_.tolist() if hasattr(attr_MLPClassifier_loss_, 'tolist') else attr_MLPClassifier_loss_`
    })()
  }

  /**
    The minimum loss reached by the solver throughout fitting. If `early\_stopping=True`, this attribute is set ot `undefined`. Refer to the `best\_validation\_score\_` fitted attribute instead.
   */
  get best_loss_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing best_loss_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_best_loss_ = bridgeMLPClassifier[${this.id}].best_loss_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_best_loss_.tolist() if hasattr(attr_MLPClassifier_best_loss_, 'tolist') else attr_MLPClassifier_best_loss_`
    })()
  }

  /**
    The ith element in the list represents the loss at the ith iteration.
   */
  get loss_curve_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing loss_curve_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_loss_curve_ = bridgeMLPClassifier[${this.id}].loss_curve_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_loss_curve_.tolist() if hasattr(attr_MLPClassifier_loss_curve_, 'tolist') else attr_MLPClassifier_loss_curve_`
    })()
  }

  /**
    The score at each iteration on a held-out validation set. The score reported is the accuracy score. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.
   */
  get validation_scores_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing validation_scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_validation_scores_ = bridgeMLPClassifier[${this.id}].validation_scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_validation_scores_.tolist() if hasattr(attr_MLPClassifier_validation_scores_, 'tolist') else attr_MLPClassifier_validation_scores_`
    })()
  }

  /**
    The best validation score (i.e. accuracy score) that triggered the early stopping. Only available if `early\_stopping=True`, otherwise the attribute is set to `undefined`.
   */
  get best_validation_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing best_validation_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_best_validation_score_ = bridgeMLPClassifier[${this.id}].best_validation_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_best_validation_score_.tolist() if hasattr(attr_MLPClassifier_best_validation_score_, 'tolist') else attr_MLPClassifier_best_validation_score_`
    })()
  }

  /**
    The number of training samples seen by the solver during fitting.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_t_ = bridgeMLPClassifier[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_t_.tolist() if hasattr(attr_MLPClassifier_t_, 'tolist') else attr_MLPClassifier_t_`
    })()
  }

  /**
    The ith element in the list represents the weight matrix corresponding to layer i.
   */
  get coefs_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before accessing coefs_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_coefs_ = bridgeMLPClassifier[${this.id}].coefs_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_coefs_.tolist() if hasattr(attr_MLPClassifier_coefs_, 'tolist') else attr_MLPClassifier_coefs_`
    })()
  }

  /**
    The ith element in the list represents the bias vector corresponding to layer i + 1.
   */
  get intercepts_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing intercepts_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_intercepts_ = bridgeMLPClassifier[${this.id}].intercepts_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_intercepts_.tolist() if hasattr(attr_MLPClassifier_intercepts_, 'tolist') else attr_MLPClassifier_intercepts_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_n_features_in_ = bridgeMLPClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_n_features_in_.tolist() if hasattr(attr_MLPClassifier_n_features_in_, 'tolist') else attr_MLPClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_feature_names_in_ = bridgeMLPClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_feature_names_in_.tolist() if hasattr(attr_MLPClassifier_feature_names_in_, 'tolist') else attr_MLPClassifier_feature_names_in_`
    })()
  }

  /**
    The number of iterations the solver has run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MLPClassifier must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_n_iter_ = bridgeMLPClassifier[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_n_iter_.tolist() if hasattr(attr_MLPClassifier_n_iter_, 'tolist') else attr_MLPClassifier_n_iter_`
    })()
  }

  /**
    Number of layers.
   */
  get n_layers_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing n_layers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_n_layers_ = bridgeMLPClassifier[${this.id}].n_layers_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_n_layers_.tolist() if hasattr(attr_MLPClassifier_n_layers_, 'tolist') else attr_MLPClassifier_n_layers_`
    })()
  }

  /**
    Number of outputs.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_n_outputs_ = bridgeMLPClassifier[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_n_outputs_.tolist() if hasattr(attr_MLPClassifier_n_outputs_, 'tolist') else attr_MLPClassifier_n_outputs_`
    })()
  }

  /**
    Name of the output activation function.
   */
  get out_activation_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This MLPClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MLPClassifier must call init() before accessing out_activation_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MLPClassifier_out_activation_ = bridgeMLPClassifier[${this.id}].out_activation_`

      // convert the result from python to node.js
      return this
        ._py`attr_MLPClassifier_out_activation_.tolist() if hasattr(attr_MLPClassifier_out_activation_, 'tolist') else attr_MLPClassifier_out_activation_`
    })()
  }
}
