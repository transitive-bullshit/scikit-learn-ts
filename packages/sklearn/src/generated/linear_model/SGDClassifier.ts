/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear classifiers (SVM, logistic regression, etc.) with SGD training.

  This estimator implements regularized linear models with stochastic gradient descent (SGD) learning: the gradient of the loss is estimated each sample at a time and the model is updated along the way with a decreasing strength schedule (aka learning rate). SGD allows minibatch (online/out-of-core) learning via the `partial\_fit` method. For best results using the default learning rate schedule, the data should have zero mean and unit variance.

  This implementation works with data represented as dense or sparse arrays of floating point values for the features. The model it fits can be controlled with the loss parameter; by default, it fits a linear support vector machine (SVM).

  The regularizer is a penalty added to the loss function that shrinks model parameters towards the zero vector using either the squared euclidean norm L2 or the absolute norm L1 or a combination of both (Elastic Net). If the parameter update crosses the 0.0 value because of the regularizer, the update is truncated to 0.0 to allow for learning sparse models and achieve online feature selection.

  Read more in the [User Guide](../sgd.html#sgd).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html)
 */
export class SGDClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The loss function to be used.

      @defaultValue `'hinge'`
     */
    loss?:
      | 'hinge'
      | 'log_loss'
      | 'log'
      | 'modified_huber'
      | 'squared_hinge'
      | 'perceptron'
      | 'squared_error'
      | 'huber'
      | 'epsilon_insensitive'
      | 'squared_epsilon_insensitive'

    /**
      The penalty (aka regularization term) to be used. Defaults to ‘l2’ which is the standard regularizer for linear SVM models. ‘l1’ and ‘elasticnet’ might bring sparsity to the model (feature selection) not achievable with ‘l2’. No penalty is added when set to `undefined`.

      @defaultValue `'l2'`
     */
    penalty?: 'l2' | 'l1' | 'elasticnet'

    /**
      Constant that multiplies the regularization term. The higher the value, the stronger the regularization. Also used to compute the learning rate when `learning\_rate` is set to ‘optimal’. Values must be in the range `\[0.0, inf)`.

      @defaultValue `0.0001`
     */
    alpha?: number

    /**
      The Elastic Net mixing parameter, with 0 <= l1\_ratio <= 1. l1\_ratio=0 corresponds to L2 penalty, l1\_ratio=1 to L1. Only used if `penalty` is ‘elasticnet’. Values must be in the range `\[0.0, 1.0\]`.

      @defaultValue `0.15`
     */
    l1_ratio?: number

    /**
      Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.SGDClassifier.partial_fit "sklearn.linear_model.SGDClassifier.partial_fit") method. Values must be in the range `\[1, inf)`.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The stopping criterion. If it is not `undefined`, training will stop when (loss > best\_loss - tol) for `n\_iter\_no\_change` consecutive epochs. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Values must be in the range `\[0.0, inf)`.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Whether or not the training data should be shuffled after each epoch.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      The verbosity level. Values must be in the range `\[0, inf)`.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Epsilon in the epsilon-insensitive loss functions; only if `loss` is ‘huber’, ‘epsilon\_insensitive’, or ‘squared\_epsilon\_insensitive’. For ‘huber’, determines the threshold at which it becomes less important to get the prediction exactly right. For epsilon-insensitive, any differences between the current prediction and the correct label are ignored if they are less than this threshold. Values must be in the range `\[0.0, inf)`.

      @defaultValue `0.1`
     */
    epsilon?: number

    /**
      The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Used for shuffling the data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state). Integer values must be in the range `\[0, 2\*\*32 \- 1\]`.
     */
    random_state?: number

    /**
      The learning rate schedule:

      @defaultValue `'optimal'`
     */
    learning_rate?: string

    /**
      The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’. Values must be in the range `(0.0, inf)`.

      @defaultValue `0`
     */
    eta0?: number

    /**
      The exponent for inverse scaling learning rate \[default 0.5\]. Values must be in the range `(-inf, inf)`.

      @defaultValue `0.5`
     */
    power_t?: number

    /**
      Whether to use early stopping to terminate training when validation score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score returned by the `score` method is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

      @defaultValue `false`
     */
    early_stopping?: boolean

    /**
      The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if `early\_stopping` is `true`. Values must be in the range `(0.0, 1.0)`.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      Number of iterations with no improvement to wait before stopping fitting. Convergence is checked against the training loss or the validation loss depending on the `early\_stopping` parameter. Integer values must be in the range `\[1, max\_iter)`.

      @defaultValue `5`
     */
    n_iter_no_change?: number

    /**
      Preset for the class\_weight fit parameter.

      Weights associated with classes. If not given, all classes are supposed to have weight one.

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
     */
    class_weight?: any | 'balanced'

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

      Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      When set to `true`, computes the averaged SGD weights across all updates and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches `average`. So `average=10` will begin averaging after seeing 10 samples. Integer values must be in the range `\[1, n\_samples\]`.

      @defaultValue `false`
     */
    average?: boolean | number
  }) {
    this.id = `SGDClassifier${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SGDClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import SGDClassifier
try: bridgeSGDClassifier
except NameError: bridgeSGDClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_SGDClassifier = {'loss': ${
      this.opts['loss'] ?? undefined
    }, 'penalty': ${this.opts['penalty'] ?? undefined}, 'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'l1_ratio': ${this.opts['l1_ratio'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'epsilon': ${this.opts['epsilon'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'eta0': ${
      this.opts['eta0'] ?? undefined
    }, 'power_t': ${this.opts['power_t'] ?? undefined}, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'average': ${
      this.opts['average'] ?? undefined
    }}

ctor_SGDClassifier = {k: v for k, v in ctor_SGDClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeSGDClassifier[${this.id}] = SGDClassifier(**ctor_SGDClassifier)`

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

    await this._py.ex`del bridgeSGDClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(opts: {
    /**
      The data matrix for which we want to get the confidence scores.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SGDClassifier_decision_function = {k: v for k, v in pms_SGDClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_decision_function = bridgeSGDClassifier[${this.id}].decision_function(**pms_SGDClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_decision_function.tolist() if hasattr(res_SGDClassifier_decision_function, 'tolist') else res_SGDClassifier_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_densify = {}

pms_SGDClassifier_densify = {k: v for k, v in pms_SGDClassifier_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_densify = bridgeSGDClassifier[${this.id}].densify(**pms_SGDClassifier_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_densify.tolist() if hasattr(res_SGDClassifier_densify, 'tolist') else res_SGDClassifier_densify`
  }

  /**
    Fit linear model with Stochastic Gradient Descent.
   */
  async fit(opts: {
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
    coef_init?: NDArray[]

    /**
      The initial intercept to warm-start the optimization.
     */
    intercept_init?: NDArray

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_fit = {'X': ${
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

pms_SGDClassifier_fit = {k: v for k, v in pms_SGDClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_fit = bridgeSGDClassifier[${this.id}].fit(**pms_SGDClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_fit.tolist() if hasattr(res_SGDClassifier_fit, 'tolist') else res_SGDClassifier_fit`
  }

  /**
    Perform one epoch of stochastic gradient descent on given samples.

    Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.
   */
  async partial_fit(opts: {
    /**
      Subset of the training data.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Subset of the target values.
     */
    y?: NDArray

    /**
      Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.
     */
    classes?: NDArray

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_partial_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'classes': np.array(${opts['classes'] ?? undefined}) if ${
      opts['classes'] !== undefined
    } else None, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_SGDClassifier_partial_fit = {k: v for k, v in pms_SGDClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_partial_fit = bridgeSGDClassifier[${this.id}].partial_fit(**pms_SGDClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_partial_fit.tolist() if hasattr(res_SGDClassifier_partial_fit, 'tolist') else res_SGDClassifier_partial_fit`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(opts: {
    /**
      The data matrix for which we want to get the predictions.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SGDClassifier_predict = {k: v for k, v in pms_SGDClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_predict = bridgeSGDClassifier[${this.id}].predict(**pms_SGDClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_predict.tolist() if hasattr(res_SGDClassifier_predict, 'tolist') else res_SGDClassifier_predict`
  }

  /**
    Log of probability estimates.

    This method is only available for log loss and modified Huber loss.

    When loss=”modified\_huber”, probability estimates may be hard zeros and ones, so taking the logarithm is not possible.

    See `predict\_proba` for details.
   */
  async predict_log_proba(opts: {
    /**
      Input data for prediction.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SGDClassifier_predict_log_proba = {k: v for k, v in pms_SGDClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_predict_log_proba = bridgeSGDClassifier[${this.id}].predict_log_proba(**pms_SGDClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_predict_log_proba.tolist() if hasattr(res_SGDClassifier_predict_log_proba, 'tolist') else res_SGDClassifier_predict_log_proba`
  }

  /**
    Probability estimates.

    This method is only available for log loss and modified Huber loss.

    Multiclass probability estimates are derived from binary (one-vs.-rest) estimates by simple normalization, as recommended by Zadrozny and Elkan.

    Binary probability estimates for loss=”modified\_huber” are given by (clip(decision\_function(X), -1, 1) + 1) / 2. For other loss functions it is necessary to perform proper probability calibration by wrapping the classifier with [`CalibratedClassifierCV`](sklearn.calibration.CalibratedClassifierCV.html#sklearn.calibration.CalibratedClassifierCV "sklearn.calibration.CalibratedClassifierCV") instead.
   */
  async predict_proba(opts: {
    /**
      Input data for prediction.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_predict_proba = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SGDClassifier_predict_proba = {k: v for k, v in pms_SGDClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_predict_proba = bridgeSGDClassifier[${this.id}].predict_proba(**pms_SGDClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_predict_proba.tolist() if hasattr(res_SGDClassifier_predict_proba, 'tolist') else res_SGDClassifier_predict_proba`
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
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_SGDClassifier_score = {k: v for k, v in pms_SGDClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_score = bridgeSGDClassifier[${this.id}].score(**pms_SGDClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_score.tolist() if hasattr(res_SGDClassifier_score, 'tolist') else res_SGDClassifier_score`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_SGDClassifier_sparsify = {}

pms_SGDClassifier_sparsify = {k: v for k, v in pms_SGDClassifier_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDClassifier_sparsify = bridgeSGDClassifier[${this.id}].sparsify(**pms_SGDClassifier_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDClassifier_sparsify.tolist() if hasattr(res_SGDClassifier_sparsify, 'tolist') else res_SGDClassifier_sparsify`
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_coef_ = bridgeSGDClassifier[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_coef_.tolist() if hasattr(attr_SGDClassifier_coef_, 'tolist') else attr_SGDClassifier_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_intercept_ = bridgeSGDClassifier[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_intercept_.tolist() if hasattr(attr_SGDClassifier_intercept_, 'tolist') else attr_SGDClassifier_intercept_`
    })()
  }

  /**
    The actual number of iterations before reaching the stopping criterion. For multiclass fits, it is the maximum over every binary fit.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_n_iter_ = bridgeSGDClassifier[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_n_iter_.tolist() if hasattr(attr_SGDClassifier_n_iter_, 'tolist') else attr_SGDClassifier_n_iter_`
    })()
  }

  get loss_function_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before accessing loss_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_loss_function_ = bridgeSGDClassifier[${this.id}].loss_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_loss_function_.tolist() if hasattr(attr_SGDClassifier_loss_function_, 'tolist') else attr_SGDClassifier_loss_function_`
    })()
  }

  get classes_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_classes_ = bridgeSGDClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_classes_.tolist() if hasattr(attr_SGDClassifier_classes_, 'tolist') else attr_SGDClassifier_classes_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDClassifier must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_t_ = bridgeSGDClassifier[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_t_.tolist() if hasattr(attr_SGDClassifier_t_, 'tolist') else attr_SGDClassifier_t_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_n_features_in_ = bridgeSGDClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_n_features_in_.tolist() if hasattr(attr_SGDClassifier_n_features_in_, 'tolist') else attr_SGDClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDClassifier_feature_names_in_ = bridgeSGDClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDClassifier_feature_names_in_.tolist() if hasattr(attr_SGDClassifier_feature_names_in_, 'tolist') else attr_SGDClassifier_feature_names_in_`
    })()
  }
}
