/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  C-Support Vector Classification.

  The implementation is based on libsvm. The fit time scales at least quadratically with the number of samples and may be impractical beyond tens of thousands of samples. For large datasets consider using [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") or [`SGDClassifier`](sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") instead, possibly after a [`Nystroem`](sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](../kernel_approximation.html#kernel-approximation).

  The multiclass support is handled according to a one-vs-one scheme.

  For details on the precise mathematical formulation of the provided kernel functions and how `gamma`, `coef0` and `degree` affect each other, see the corresponding section in the narrative documentation: [Kernel functions](../svm.html#svm-kernels).

  Read more in the [User Guide](../svm.html#svm-classification).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html)
 */
export class SVC {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty.

      @defaultValue `1`
     */
    C?: number

    /**
      Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to pre-compute the kernel matrix from data matrices; that matrix should be an array of shape `(n\_samples, n\_samples)`. For an intuitive visualization of different kernel types see [Plot classification boundaries with different SVM Kernels](../../auto_examples/svm/plot_svm_kernels.html#sphx-glr-auto-examples-svm-plot-svm-kernels-py).

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
      Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

      @defaultValue `true`
     */
    shrinking?: boolean

    /**
      Whether to enable probability estimates. This must be enabled prior to calling `fit`, will slow down that method as it internally uses 5-fold cross-validation, and `predict\_proba` may be inconsistent with `predict`. Read more in the [User Guide](../svm.html#scores-probabilities).

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
      Set the parameter C of class i to class\_weight\[i\]\*C for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
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
      Whether to return a one-vs-rest (‘ovr’) decision function of shape (n\_samples, n\_classes) as all other classifiers, or the original one-vs-one (‘ovo’) decision function of libsvm which has shape (n\_samples, n\_classes \* (n\_classes - 1) / 2). However, note that internally, one-vs-one (‘ovo’) is always used as a multi-class strategy to train models; an ovr matrix is only constructed from the ovo matrix. The parameter is ignored for binary classification.

      @defaultValue `'ovr'`
     */
    decision_function_shape?: 'ovo' | 'ovr'

    /**
      If true, `decision\_function\_shape='ovr'`, and number of classes > 2, [predict](../../glossary.html#term-predict) will break ties according to the confidence values of [decision\_function](../../glossary.html#term-decision_function); otherwise the first class among the tied classes is returned. Please note that breaking ties comes at a relatively high computational cost compared to a simple predict.

      @defaultValue `false`
     */
    break_ties?: boolean

    /**
      Controls the pseudo random number generation for shuffling the data for probability estimates. Ignored when `probability` is `false`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `SVC${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SVC instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SVC.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import SVC
try: bridgeSVC
except NameError: bridgeSVC = {}
`

    // set up constructor params
    await this._py.ex`ctor_SVC = {'C': ${
      this.opts['C'] ?? undefined
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

ctor_SVC = {k: v for k, v in ctor_SVC.items() if v is not None}`

    await this._py.ex`bridgeSVC[${this.id}] = SVC(**ctor_SVC)`

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

    await this._py.ex`del bridgeSVC[${this.id}]`

    this._isDisposed = true
  }

  /**
    Evaluate the decision function for the samples in X.
   */
  async decision_function(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_SVC_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SVC_decision_function = {k: v for k, v in pms_SVC_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_decision_function = bridgeSVC[${this.id}].decision_function(**pms_SVC_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_decision_function.tolist() if hasattr(res_SVC_decision_function, 'tolist') else res_SVC_decision_function`
  }

  /**
    Fit the SVM model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n\_samples, n\_samples).
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
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SVC_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_SVC_fit = {k: v for k, v in pms_SVC_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_SVC_fit = bridgeSVC[${this.id}].fit(**pms_SVC_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_fit.tolist() if hasattr(res_SVC_fit, 'tolist') else res_SVC_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py.ex`pms_SVC_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_SVC_get_metadata_routing = {k: v for k, v in pms_SVC_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_get_metadata_routing = bridgeSVC[${this.id}].get_metadata_routing(**pms_SVC_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_get_metadata_routing.tolist() if hasattr(res_SVC_get_metadata_routing, 'tolist') else res_SVC_get_metadata_routing`
  }

  /**
    Perform classification on samples in X.

    For an one-class model, +1 or -1 is returned.
   */
  async predict(opts: {
    /**
      For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_SVC_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SVC_predict = {k: v for k, v in pms_SVC_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_predict = bridgeSVC[${this.id}].predict(**pms_SVC_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_predict.tolist() if hasattr(res_SVC_predict, 'tolist') else res_SVC_predict`
  }

  /**
    Compute log probabilities of possible outcomes for samples in X.

    The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.
   */
  async predict_log_proba(opts: {
    /**
      For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py.ex`pms_SVC_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SVC_predict_log_proba = {k: v for k, v in pms_SVC_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_predict_log_proba = bridgeSVC[${this.id}].predict_log_proba(**pms_SVC_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_predict_log_proba.tolist() if hasattr(res_SVC_predict_log_proba, 'tolist') else res_SVC_predict_log_proba`
  }

  /**
    Compute probabilities of possible outcomes for samples in X.

    The model needs to have probability information computed at training time: fit with attribute `probability` set to `true`.
   */
  async predict_proba(opts: {
    /**
      For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_SVC_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SVC_predict_proba = {k: v for k, v in pms_SVC_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_predict_proba = bridgeSVC[${this.id}].predict_proba(**pms_SVC_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_predict_proba.tolist() if hasattr(res_SVC_predict_proba, 'tolist') else res_SVC_predict_proba`
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
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_SVC_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_SVC_score = {k: v for k, v in pms_SVC_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_score = bridgeSVC[${this.id}].score(**pms_SVC_score)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_score.tolist() if hasattr(res_SVC_score, 'tolist') else res_SVC_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before set_fit_request()')
    }

    // set up method params
    await this._py.ex`pms_SVC_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_SVC_set_fit_request = {k: v for k, v in pms_SVC_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_set_fit_request = bridgeSVC[${this.id}].set_fit_request(**pms_SVC_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_set_fit_request.tolist() if hasattr(res_SVC_set_fit_request, 'tolist') else res_SVC_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before set_score_request()')
    }

    // set up method params
    await this._py.ex`pms_SVC_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_SVC_set_score_request = {k: v for k, v in pms_SVC_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVC_set_score_request = bridgeSVC[${this.id}].set_score_request(**pms_SVC_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_SVC_set_score_request.tolist() if hasattr(res_SVC_set_score_request, 'tolist') else res_SVC_set_score_request`
  }

  /**
    Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.
   */
  get class_weight_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing class_weight_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVC_class_weight_ = bridgeSVC[${this.id}].class_weight_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_class_weight_.tolist() if hasattr(attr_SVC_class_weight_, 'tolist') else attr_SVC_class_weight_`
    })()
  }

  /**
    The classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_classes_ = bridgeSVC[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_classes_.tolist() if hasattr(attr_SVC_classes_, 'tolist') else attr_SVC_classes_`
    })()
  }

  /**
    Dual coefficients of the support vector in the decision function (see [Mathematical formulation](../sgd.html#sgd-mathematical-formulation)), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the [multi-class section of the User Guide](../svm.html#svm-multi-class) for details.
   */
  get dual_coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing dual_coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_dual_coef_ = bridgeSVC[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_dual_coef_.tolist() if hasattr(attr_SVC_dual_coef_, 'tolist') else attr_SVC_dual_coef_`
    })()
  }

  /**
    0 if correctly fitted, 1 otherwise (will raise warning)
   */
  get fit_status_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing fit_status_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVC_fit_status_ = bridgeSVC[${this.id}].fit_status_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_fit_status_.tolist() if hasattr(attr_SVC_fit_status_, 'tolist') else attr_SVC_fit_status_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_intercept_ = bridgeSVC[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_intercept_.tolist() if hasattr(attr_SVC_intercept_, 'tolist') else attr_SVC_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVC_n_features_in_ = bridgeSVC[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_n_features_in_.tolist() if hasattr(attr_SVC_n_features_in_, 'tolist') else attr_SVC_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVC_feature_names_in_ = bridgeSVC[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_feature_names_in_.tolist() if hasattr(attr_SVC_feature_names_in_, 'tolist') else attr_SVC_feature_names_in_`
    })()
  }

  /**
    Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.
   */
  get n_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_n_iter_ = bridgeSVC[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_n_iter_.tolist() if hasattr(attr_SVC_n_iter_, 'tolist') else attr_SVC_n_iter_`
    })()
  }

  /**
    Indices of support vectors.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_support_ = bridgeSVC[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_support_.tolist() if hasattr(attr_SVC_support_, 'tolist') else attr_SVC_support_`
    })()
  }

  /**
    Support vectors. An empty array if kernel is precomputed.
   */
  get support_vectors_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing support_vectors_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVC_support_vectors_ = bridgeSVC[${this.id}].support_vectors_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_support_vectors_.tolist() if hasattr(attr_SVC_support_vectors_, 'tolist') else attr_SVC_support_vectors_`
    })()
  }

  /**
    Array dimensions of training vector `X`.
   */
  get shape_fit_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVC must call init() before accessing shape_fit_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVC_shape_fit_ = bridgeSVC[${this.id}].shape_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVC_shape_fit_.tolist() if hasattr(attr_SVC_shape_fit_, 'tolist') else attr_SVC_shape_fit_`
    })()
  }
}
