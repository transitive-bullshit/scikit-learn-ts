/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Epsilon-Support Vector Regression.

  The free parameters in the model are C and epsilon.

  The implementation is based on libsvm. The fit time complexity is more than quadratic with the number of samples which makes it hard to scale to datasets with more than a couple of 10000 samples. For large datasets consider using [`LinearSVR`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") or [`SGDRegressor`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor "sklearn.linear_model.SGDRegressor") instead, possibly after a [`Nystroem`](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](https://scikit-learn.org/stable/modules/generated/../kernel_approximation.html#kernel-approximation).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#svm-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html)
 */
export class SVR {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
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
      Tolerance for stopping criterion.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2. For an intuitive visualization of the effects of scaling the regularization parameter C, see [Scaling the regularization parameter for SVCs](https://scikit-learn.org/stable/modules/generated/../../auto_examples/svm/plot_svm_scale_c.html#sphx-glr-auto-examples-svm-plot-svm-scale-c-py).

      @defaultValue `1`
     */
    C?: number

    /**
      Epsilon in the epsilon-SVR model. It specifies the epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value. Must be non-negative.

      @defaultValue `0.1`
     */
    epsilon?: number

    /**
      Whether to use the shrinking heuristic. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#shrinking-svm).

      @defaultValue `true`
     */
    shrinking?: boolean

    /**
      Specify the size of the kernel cache (in MB).

      @defaultValue `200`
     */
    cache_size?: number

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
  }) {
    this.id = `SVR${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SVR instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SVR.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import SVR
try: bridgeSVR
except NameError: bridgeSVR = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_SVR = {'kernel': ${this.opts['kernel'] ?? undefined}, 'degree': ${this.opts['degree'] ?? undefined}, 'gamma': ${this.opts['gamma'] ?? undefined}, 'coef0': ${this.opts['coef0'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'C': ${this.opts['C'] ?? undefined}, 'epsilon': ${this.opts['epsilon'] ?? undefined}, 'shrinking': ${this.opts['shrinking'] ?? undefined}, 'cache_size': ${this.opts['cache_size'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}}

ctor_SVR = {k: v for k, v in ctor_SVR.items() if v is not None}`

    await this._py.ex`bridgeSVR[${this.id}] = SVR(**ctor_SVR)`

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

    await this._py.ex`del bridgeSVR[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the SVM model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features. For kernel=”precomputed”, the expected shape of X is (n_samples, n_samples).
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
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_SVR_fit = {k: v for k, v in pms_SVR_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_SVR_fit = bridgeSVR[${this.id}].fit(**pms_SVR_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_fit.tolist() if hasattr(res_SVR_fit, 'tolist') else res_SVR_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_SVR_get_metadata_routing = {k: v for k, v in pms_SVR_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVR_get_metadata_routing = bridgeSVR[${this.id}].get_metadata_routing(**pms_SVR_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_get_metadata_routing.tolist() if hasattr(res_SVR_get_metadata_routing, 'tolist') else res_SVR_get_metadata_routing`
  }

  /**
    Perform regression on samples in X.

    For an one-class model, +1 (inlier) or -1 (outlier) is returned.
   */
  async predict(opts: {
    /**
      For kernel=”precomputed”, the expected shape of X is (n_samples_test, n_samples_train).
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_SVR_predict = {k: v for k, v in pms_SVR_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVR_predict = bridgeSVR[${this.id}].predict(**pms_SVR_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_predict.tolist() if hasattr(res_SVR_predict, 'tolist') else res_SVR_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_SVR_score = {k: v for k, v in pms_SVR_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVR_score = bridgeSVR[${this.id}].score(**pms_SVR_score)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_score.tolist() if hasattr(res_SVR_score, 'tolist') else res_SVR_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before set_fit_request()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_SVR_set_fit_request = {k: v for k, v in pms_SVR_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVR_set_fit_request = bridgeSVR[${this.id}].set_fit_request(**pms_SVR_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_set_fit_request.tolist() if hasattr(res_SVR_set_fit_request, 'tolist') else res_SVR_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_SVR_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_SVR_set_score_request = {k: v for k, v in pms_SVR_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SVR_set_score_request = bridgeSVR[${this.id}].set_score_request(**pms_SVR_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_SVR_set_score_request.tolist() if hasattr(res_SVR_set_score_request, 'tolist') else res_SVR_set_score_request`
  }

  /**
    Coefficients of the support vector in the decision function.
   */
  get dual_coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing dual_coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVR_dual_coef_ = bridgeSVR[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_dual_coef_.tolist() if hasattr(attr_SVR_dual_coef_, 'tolist') else attr_SVR_dual_coef_`
    })()
  }

  /**
    0 if correctly fitted, 1 otherwise (will raise warning)
   */
  get fit_status_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing fit_status_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVR_fit_status_ = bridgeSVR[${this.id}].fit_status_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_fit_status_.tolist() if hasattr(attr_SVR_fit_status_, 'tolist') else attr_SVR_fit_status_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVR_intercept_ = bridgeSVR[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_intercept_.tolist() if hasattr(attr_SVR_intercept_, 'tolist') else attr_SVR_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVR_n_features_in_ = bridgeSVR[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_n_features_in_.tolist() if hasattr(attr_SVR_n_features_in_, 'tolist') else attr_SVR_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVR_feature_names_in_ = bridgeSVR[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_feature_names_in_.tolist() if hasattr(attr_SVR_feature_names_in_, 'tolist') else attr_SVR_feature_names_in_`
    })()
  }

  /**
    Number of iterations run by the optimization routine to fit the model.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVR_n_iter_ = bridgeSVR[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_n_iter_.tolist() if hasattr(attr_SVR_n_iter_, 'tolist') else attr_SVR_n_iter_`
    })()
  }

  /**
    Array dimensions of training vector `X`.
   */
  get shape_fit_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing shape_fit_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVR_shape_fit_ = bridgeSVR[${this.id}].shape_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_shape_fit_.tolist() if hasattr(attr_SVR_shape_fit_, 'tolist') else attr_SVR_shape_fit_`
    })()
  }

  /**
    Indices of support vectors.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_SVR_support_ = bridgeSVR[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_support_.tolist() if hasattr(attr_SVR_support_, 'tolist') else attr_SVR_support_`
    })()
  }

  /**
    Support vectors.
   */
  get support_vectors_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SVR must call init() before accessing support_vectors_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SVR_support_vectors_ = bridgeSVR[${this.id}].support_vectors_`

      // convert the result from python to node.js
      return this
        ._py`attr_SVR_support_vectors_.tolist() if hasattr(attr_SVR_support_vectors_, 'tolist') else attr_SVR_support_vectors_`
    })()
  }
}
