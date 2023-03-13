/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Passive Aggressive Classifier.

  Read more in the [User Guide](../linear_model.html#passive-aggressive).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PassiveAggressiveClassifier.html)
 */
export class PassiveAggressiveClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Maximum step size (regularization). Defaults to 1.0.

      @defaultValue `1`
     */
    C?: number

    /**
      Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.PassiveAggressiveClassifier.partial_fit "sklearn.linear_model.PassiveAggressiveClassifier.partial_fit") method.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

      @defaultValue `false`
     */
    early_stopping?: boolean

    /**
      The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      Number of iterations with no improvement to wait before early stopping.

      @defaultValue `5`
     */
    n_iter_no_change?: number

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
      The loss function to be used: hinge: equivalent to PA-I in the reference paper. squared\_hinge: equivalent to PA-II in the reference paper.

      @defaultValue `'hinge'`
     */
    loss?: string

    /**
      The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

      Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled.

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      Preset for the class\_weight fit parameter.

      Weights associated with classes. If not given, all classes are supposed to have weight one.

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
     */
    class_weight?: any | 'balanced'

    /**
      When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So average=10 will begin averaging after seeing 10 samples.

      @defaultValue `false`
     */
    average?: boolean | number
  }) {
    this.id = `PassiveAggressiveClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PassiveAggressiveClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import PassiveAggressiveClassifier
try: bridgePassiveAggressiveClassifier
except NameError: bridgePassiveAggressiveClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_PassiveAggressiveClassifier = {'C': ${
      this.opts['C'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'loss': ${this.opts['loss'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'average': ${this.opts['average'] ?? undefined}}

ctor_PassiveAggressiveClassifier = {k: v for k, v in ctor_PassiveAggressiveClassifier.items() if v is not None}`

    await this._py
      .ex`bridgePassiveAggressiveClassifier[${this.id}] = PassiveAggressiveClassifier(**ctor_PassiveAggressiveClassifier)`

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

    await this._py.ex`del bridgePassiveAggressiveClassifier[${this.id}]`

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
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PassiveAggressiveClassifier_decision_function = {k: v for k, v in pms_PassiveAggressiveClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_decision_function = bridgePassiveAggressiveClassifier[${this.id}].decision_function(**pms_PassiveAggressiveClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_decision_function.tolist() if hasattr(res_PassiveAggressiveClassifier_decision_function, 'tolist') else res_PassiveAggressiveClassifier_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before densify()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveClassifier_densify = {}

pms_PassiveAggressiveClassifier_densify = {k: v for k, v in pms_PassiveAggressiveClassifier_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_densify = bridgePassiveAggressiveClassifier[${this.id}].densify(**pms_PassiveAggressiveClassifier_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_densify.tolist() if hasattr(res_PassiveAggressiveClassifier_densify, 'tolist') else res_PassiveAggressiveClassifier_densify`
  }

  /**
    Fit linear model with Passive Aggressive algorithm.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      The initial coefficients to warm-start the optimization.
     */
    coef_init?: NDArray[]

    /**
      The initial intercept to warm-start the optimization.
     */
    intercept_init?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'coef_init': np.array(${
      opts['coef_init'] ?? undefined
    }) if ${
      opts['coef_init'] !== undefined
    } else None, 'intercept_init': np.array(${
      opts['intercept_init'] ?? undefined
    }) if ${opts['intercept_init'] !== undefined} else None}

pms_PassiveAggressiveClassifier_fit = {k: v for k, v in pms_PassiveAggressiveClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_fit = bridgePassiveAggressiveClassifier[${this.id}].fit(**pms_PassiveAggressiveClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_fit.tolist() if hasattr(res_PassiveAggressiveClassifier_fit, 'tolist') else res_PassiveAggressiveClassifier_fit`
  }

  /**
    Fit linear model with Passive Aggressive algorithm.
   */
  async partial_fit(opts: {
    /**
      Subset of the training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Subset of the target values.
     */
    y?: ArrayLike

    /**
      Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.
     */
    classes?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveClassifier_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': np.array(${
      opts['classes'] ?? undefined
    }) if ${opts['classes'] !== undefined} else None}

pms_PassiveAggressiveClassifier_partial_fit = {k: v for k, v in pms_PassiveAggressiveClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_partial_fit = bridgePassiveAggressiveClassifier[${this.id}].partial_fit(**pms_PassiveAggressiveClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_partial_fit.tolist() if hasattr(res_PassiveAggressiveClassifier_partial_fit, 'tolist') else res_PassiveAggressiveClassifier_partial_fit`
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
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PassiveAggressiveClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PassiveAggressiveClassifier_predict = {k: v for k, v in pms_PassiveAggressiveClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_predict = bridgePassiveAggressiveClassifier[${this.id}].predict(**pms_PassiveAggressiveClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_predict.tolist() if hasattr(res_PassiveAggressiveClassifier_predict, 'tolist') else res_PassiveAggressiveClassifier_predict`
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
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_PassiveAggressiveClassifier_score = {k: v for k, v in pms_PassiveAggressiveClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_score = bridgePassiveAggressiveClassifier[${this.id}].score(**pms_PassiveAggressiveClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_score.tolist() if hasattr(res_PassiveAggressiveClassifier_score, 'tolist') else res_PassiveAggressiveClassifier_score`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before sparsify()'
      )
    }

    // set up method params
    await this._py.ex`pms_PassiveAggressiveClassifier_sparsify = {}

pms_PassiveAggressiveClassifier_sparsify = {k: v for k, v in pms_PassiveAggressiveClassifier_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PassiveAggressiveClassifier_sparsify = bridgePassiveAggressiveClassifier[${this.id}].sparsify(**pms_PassiveAggressiveClassifier_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_PassiveAggressiveClassifier_sparsify.tolist() if hasattr(res_PassiveAggressiveClassifier_sparsify, 'tolist') else res_PassiveAggressiveClassifier_sparsify`
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_coef_ = bridgePassiveAggressiveClassifier[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_coef_.tolist() if hasattr(attr_PassiveAggressiveClassifier_coef_, 'tolist') else attr_PassiveAggressiveClassifier_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_intercept_ = bridgePassiveAggressiveClassifier[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_intercept_.tolist() if hasattr(attr_PassiveAggressiveClassifier_intercept_, 'tolist') else attr_PassiveAggressiveClassifier_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_n_features_in_ = bridgePassiveAggressiveClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_n_features_in_.tolist() if hasattr(attr_PassiveAggressiveClassifier_n_features_in_, 'tolist') else attr_PassiveAggressiveClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_feature_names_in_ = bridgePassiveAggressiveClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_feature_names_in_.tolist() if hasattr(attr_PassiveAggressiveClassifier_feature_names_in_, 'tolist') else attr_PassiveAggressiveClassifier_feature_names_in_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_n_iter_ = bridgePassiveAggressiveClassifier[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_n_iter_.tolist() if hasattr(attr_PassiveAggressiveClassifier_n_iter_, 'tolist') else attr_PassiveAggressiveClassifier_n_iter_`
    })()
  }

  /**
    The unique classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_classes_ = bridgePassiveAggressiveClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_classes_.tolist() if hasattr(attr_PassiveAggressiveClassifier_classes_, 'tolist') else attr_PassiveAggressiveClassifier_classes_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing t_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_t_ = bridgePassiveAggressiveClassifier[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_t_.tolist() if hasattr(attr_PassiveAggressiveClassifier_t_, 'tolist') else attr_PassiveAggressiveClassifier_t_`
    })()
  }

  /**
    Loss function used by the algorithm.
   */
  get loss_function_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PassiveAggressiveClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PassiveAggressiveClassifier must call init() before accessing loss_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PassiveAggressiveClassifier_loss_function_ = bridgePassiveAggressiveClassifier[${this.id}].loss_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_PassiveAggressiveClassifier_loss_function_.tolist() if hasattr(attr_PassiveAggressiveClassifier_loss_function_, 'tolist') else attr_PassiveAggressiveClassifier_loss_function_`
    })()
  }
}
