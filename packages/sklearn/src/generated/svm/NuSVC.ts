/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Nu-Support Vector Classification.

  Similar to SVC but uses a parameter to control the number of support vectors.

  The implementation is based on libsvm.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html
 */
export class NuSVC {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NuSVCOptions) {
    this.id = `NuSVC${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('NuSVC.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import NuSVC
try: bridgeNuSVC
except NameError: bridgeNuSVC = {}
`

    // set up constructor params
    await this._py.ex`ctor_NuSVC = {'nu': ${
      this.opts['nu'] ?? undefined
    }, 'kernel': ${this.opts['kernel'] ?? undefined}, 'degree': ${
      this.opts['degree'] ?? undefined
    }, 'gamma': ${this.opts['gamma'] ?? undefined}, 'coef0': ${
      this.opts['coef0'] ?? undefined
    }, 'shrinking': ${this.opts['shrinking'] ?? undefined}, 'probability': ${
      this.opts['probability'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'cache_size': ${
      this.opts['cache_size'] ?? undefined
    }, 'class_weight': ${this.opts['class_weight'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'decision_function_shape': ${
      this.opts['decision_function_shape'] ?? undefined
    }, 'break_ties': ${this.opts['break_ties'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_NuSVC = {k: v for k, v in ctor_NuSVC.items() if v is not None}`

    await this._py.ex`bridgeNuSVC[${this.id}] = NuSVC(**ctor_NuSVC)`

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

    await this._py.ex`del bridgeNuSVC[${this.id}]`

    this._isDisposed = true
  }

  /**
    Evaluate the decision function for the samples in X.
   */
  async decision_function(
    opts: NuSVCDecisionFunctionOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NuSVC_decision_function = {k: v for k, v in pms_NuSVC_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_decision_function = bridgeNuSVC[${this.id}].decision_function(**pms_NuSVC_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_decision_function.tolist() if hasattr(res_NuSVC_decision_function, 'tolist') else res_NuSVC_decision_function`
  }

  /**
    Fit the SVM model according to the given training data.
   */
  async fit(opts: NuSVCFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_NuSVC_fit = {k: v for k, v in pms_NuSVC_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_fit = bridgeNuSVC[${this.id}].fit(**pms_NuSVC_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_fit.tolist() if hasattr(res_NuSVC_fit, 'tolist') else res_NuSVC_fit`
  }

  /**
    Perform classification on samples in X.

    For an one-class model, +1 or -1 is returned.
   */
  async predict(opts: NuSVCPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NuSVC_predict = {k: v for k, v in pms_NuSVC_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_predict = bridgeNuSVC[${this.id}].predict(**pms_NuSVC_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_predict.tolist() if hasattr(res_NuSVC_predict, 'tolist') else res_NuSVC_predict`
  }

  /**
    Compute log probabilities of possible outcomes for samples in X.

    The model need to have probability information computed at training time: fit with attribute probability set to True.
   */
  async predict_log_proba(
    opts: NuSVCPredictLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NuSVC_predict_log_proba = {k: v for k, v in pms_NuSVC_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_predict_log_proba = bridgeNuSVC[${this.id}].predict_log_proba(**pms_NuSVC_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_predict_log_proba.tolist() if hasattr(res_NuSVC_predict_log_proba, 'tolist') else res_NuSVC_predict_log_proba`
  }

  /**
    Compute probabilities of possible outcomes for samples in X.

    The model need to have probability information computed at training time: fit with attribute probability set to True.
   */
  async predict_proba(opts: NuSVCPredictProbaOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NuSVC_predict_proba = {k: v for k, v in pms_NuSVC_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_predict_proba = bridgeNuSVC[${this.id}].predict_proba(**pms_NuSVC_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_predict_proba.tolist() if hasattr(res_NuSVC_predict_proba, 'tolist') else res_NuSVC_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: NuSVCScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_NuSVC_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_NuSVC_score = {k: v for k, v in pms_NuSVC_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NuSVC_score = bridgeNuSVC[${this.id}].score(**pms_NuSVC_score)`

    // convert the result from python to node.js
    return this
      ._py`res_NuSVC_score.tolist() if hasattr(res_NuSVC_score, 'tolist') else res_NuSVC_score`
  }

  /**
    Multipliers of parameter C of each class. Computed based on the class_weight parameter.
   */
  get class_weight_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing class_weight_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_class_weight_ = bridgeNuSVC[${this.id}].class_weight_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_class_weight_.tolist() if hasattr(attr_NuSVC_class_weight_, 'tolist') else attr_NuSVC_class_weight_`
    })()
  }

  /**
    The unique classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_NuSVC_classes_ = bridgeNuSVC[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_classes_.tolist() if hasattr(attr_NuSVC_classes_, 'tolist') else attr_NuSVC_classes_`
    })()
  }

  /**
    Dual coefficients of the support vector in the decision function (see Mathematical formulation), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the multi-class section of the User Guide for details.
   */
  get dual_coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing dual_coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_dual_coef_ = bridgeNuSVC[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_dual_coef_.tolist() if hasattr(attr_NuSVC_dual_coef_, 'tolist') else attr_NuSVC_dual_coef_`
    })()
  }

  /**
    0 if correctly fitted, 1 if the algorithm did not converge.
   */
  get fit_status_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing fit_status_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_fit_status_ = bridgeNuSVC[${this.id}].fit_status_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_fit_status_.tolist() if hasattr(attr_NuSVC_fit_status_, 'tolist') else attr_NuSVC_fit_status_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_intercept_ = bridgeNuSVC[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_intercept_.tolist() if hasattr(attr_NuSVC_intercept_, 'tolist') else attr_NuSVC_intercept_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_n_features_in_ = bridgeNuSVC[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_n_features_in_.tolist() if hasattr(attr_NuSVC_n_features_in_, 'tolist') else attr_NuSVC_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NuSVC must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_feature_names_in_ = bridgeNuSVC[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_feature_names_in_.tolist() if hasattr(attr_NuSVC_feature_names_in_, 'tolist') else attr_NuSVC_feature_names_in_`
    })()
  }

  /**
    Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.
   */
  get n_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_NuSVC_n_iter_ = bridgeNuSVC[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_n_iter_.tolist() if hasattr(attr_NuSVC_n_iter_, 'tolist') else attr_NuSVC_n_iter_`
    })()
  }

  /**
    Indices of support vectors.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_NuSVC_support_ = bridgeNuSVC[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_support_.tolist() if hasattr(attr_NuSVC_support_, 'tolist') else attr_NuSVC_support_`
    })()
  }

  /**
    Support vectors.
   */
  get support_vectors_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NuSVC must call init() before accessing support_vectors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_support_vectors_ = bridgeNuSVC[${this.id}].support_vectors_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_support_vectors_.tolist() if hasattr(attr_NuSVC_support_vectors_, 'tolist') else attr_NuSVC_support_vectors_`
    })()
  }

  /**
    Array dimensions of training vector X.
   */
  get shape_fit_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This NuSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NuSVC must call init() before accessing shape_fit_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NuSVC_shape_fit_ = bridgeNuSVC[${this.id}].shape_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_NuSVC_shape_fit_.tolist() if hasattr(attr_NuSVC_shape_fit_, 'tolist') else attr_NuSVC_shape_fit_`
    })()
  }
}

export interface NuSVCOptions {
  /**
    An upper bound on the fraction of margin errors (see User Guide) and a lower bound of the fraction of support vectors. Should be in the interval (0, 1].

    @defaultValue `0.5`
   */
  nu?: number

  /**
    Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

    @defaultValue `'rbf'`
   */
  kernel?: 'linear' | 'poly' | 'rbf' | 'sigmoid' | 'precomputed'

  /**
    Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

    @defaultValue `3`
   */
  degree?: number

  /**
    Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

    @defaultValue `'scale'`
   */
  gamma?: 'scale' | 'auto' | number

  /**
    Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

    @defaultValue `0`
   */
  coef0?: number

  /**
    Whether to use the shrinking heuristic. See the User Guide.

    @defaultValue `true`
   */
  shrinking?: boolean

  /**
    @defaultValue `false`
   */
  probability?: boolean

  /**
    Tolerance for stopping criterion.

    @defaultValue `0.001`
   */
  tol?: number

  /**
    Specify the size of the kernel cache (in MB).

    @defaultValue `200`
   */
  cache_size?: number

  /**
    Set the parameter C of class i to class_weight[i]*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies as n_samples / (n_classes * np.bincount(y)).
   */
  class_weight?: any | 'balanced'

  /**
    Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

    @defaultValue `false`
   */
  verbose?: boolean

  /**
    Hard limit on iterations within solver, or -1 for no limit.

    @defaultValue `-1`
   */
  max_iter?: number

  /**
    Whether to return a one-vs-rest (‘ovr’) decision function of shape (n_samples, n_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n_samples, n_classes * (n_classes - 1) / 2). However, one-vs-one (‘ovo’) is always used as multi-class strategy. The parameter is ignored for binary classification.

    @defaultValue `'ovr'`
   */
  decision_function_shape?: 'ovo' | 'ovr'

  /**
    If true, decision_function_shape='ovr', and number of classes > 2, predict will break ties according to the confidence values of decision_function; otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.

    @defaultValue `false`
   */
  break_ties?: boolean

  /**
    Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when probability is False. Pass an int for reproducible output across multiple function calls. See Glossary.
   */
  random_state?: number
}

export interface NuSVCDecisionFunctionOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface NuSVCFitOptions {
  /**
    Training vectors, where n_samples is the number of samples and n_features is the number of features. For kernel=”precomputed”, the expected shape of X is (n_samples, n_samples).
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values (class labels in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.
   */
  sample_weight?: ArrayLike
}

export interface NuSVCPredictOptions {
  /**
    For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface NuSVCPredictLogProbaOptions {
  /**
    For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).
   */
  X?: ArrayLike[]
}

export interface NuSVCPredictProbaOptions {
  /**
    For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).
   */
  X?: ArrayLike[]
}

export interface NuSVCScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
