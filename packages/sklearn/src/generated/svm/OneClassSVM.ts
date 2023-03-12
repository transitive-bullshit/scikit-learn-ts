/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Unsupervised Outlier Detection.

  Estimate the support of a high-dimensional distribution.

  The implementation is based on libsvm.

  Read more in the [User Guide](../outlier_detection.html#outlier-detection).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html)
 */
export class OneClassSVM {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OneClassSVMOptions) {
    this.id = `OneClassSVM${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('OneClassSVM.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import OneClassSVM
try: bridgeOneClassSVM
except NameError: bridgeOneClassSVM = {}
`

    // set up constructor params
    await this._py.ex`ctor_OneClassSVM = {'kernel': ${
      this.opts['kernel'] ?? undefined
    }, 'degree': ${this.opts['degree'] ?? undefined}, 'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'coef0': ${this.opts['coef0'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'nu': ${this.opts['nu'] ?? undefined}, 'shrinking': ${
      this.opts['shrinking'] ?? undefined
    }, 'cache_size': ${this.opts['cache_size'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}}

ctor_OneClassSVM = {k: v for k, v in ctor_OneClassSVM.items() if v is not None}`

    await this._py
      .ex`bridgeOneClassSVM[${this.id}] = OneClassSVM(**ctor_OneClassSVM)`

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

    await this._py.ex`del bridgeOneClassSVM[${this.id}]`

    this._isDisposed = true
  }

  /**
    Signed distance to the separating hyperplane.

    Signed distance is positive for an inlier and negative for an outlier.
   */
  async decision_function(
    opts: OneClassSVMDecisionFunctionOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_OneClassSVM_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneClassSVM_decision_function = {k: v for k, v in pms_OneClassSVM_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneClassSVM_decision_function = bridgeOneClassSVM[${this.id}].decision_function(**pms_OneClassSVM_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_OneClassSVM_decision_function.tolist() if hasattr(res_OneClassSVM_decision_function, 'tolist') else res_OneClassSVM_decision_function`
  }

  /**
    Detect the soft boundary of the set of samples X.
   */
  async fit(opts: OneClassSVMFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_OneClassSVM_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_OneClassSVM_fit = {k: v for k, v in pms_OneClassSVM_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneClassSVM_fit = bridgeOneClassSVM[${this.id}].fit(**pms_OneClassSVM_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneClassSVM_fit.tolist() if hasattr(res_OneClassSVM_fit, 'tolist') else res_OneClassSVM_fit`
  }

  /**
    Perform fit on X and returns labels for X.

    Returns -1 for outliers and 1 for inliers.
   */
  async fit_predict(opts: OneClassSVMFitPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_OneClassSVM_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OneClassSVM_fit_predict = {k: v for k, v in pms_OneClassSVM_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneClassSVM_fit_predict = bridgeOneClassSVM[${this.id}].fit_predict(**pms_OneClassSVM_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OneClassSVM_fit_predict.tolist() if hasattr(res_OneClassSVM_fit_predict, 'tolist') else res_OneClassSVM_fit_predict`
  }

  /**
    Perform classification on samples in X.

    For a one-class model, +1 or -1 is returned.
   */
  async predict(opts: OneClassSVMPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_OneClassSVM_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneClassSVM_predict = {k: v for k, v in pms_OneClassSVM_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneClassSVM_predict = bridgeOneClassSVM[${this.id}].predict(**pms_OneClassSVM_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OneClassSVM_predict.tolist() if hasattr(res_OneClassSVM_predict, 'tolist') else res_OneClassSVM_predict`
  }

  /**
    Raw scoring function of the samples.
   */
  async score_samples(opts: OneClassSVMScoreSamplesOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_OneClassSVM_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneClassSVM_score_samples = {k: v for k, v in pms_OneClassSVM_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneClassSVM_score_samples = bridgeOneClassSVM[${this.id}].score_samples(**pms_OneClassSVM_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_OneClassSVM_score_samples.tolist() if hasattr(res_OneClassSVM_score_samples, 'tolist') else res_OneClassSVM_score_samples`
  }

  /**
    Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.
   */
  get class_weight_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing class_weight_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_class_weight_ = bridgeOneClassSVM[${this.id}].class_weight_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_class_weight_.tolist() if hasattr(attr_OneClassSVM_class_weight_, 'tolist') else attr_OneClassSVM_class_weight_`
    })()
  }

  /**
    Coefficients of the support vectors in the decision function.
   */
  get dual_coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing dual_coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_dual_coef_ = bridgeOneClassSVM[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_dual_coef_.tolist() if hasattr(attr_OneClassSVM_dual_coef_, 'tolist') else attr_OneClassSVM_dual_coef_`
    })()
  }

  /**
    0 if correctly fitted, 1 otherwise (will raise warning)
   */
  get fit_status_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing fit_status_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_fit_status_ = bridgeOneClassSVM[${this.id}].fit_status_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_fit_status_.tolist() if hasattr(attr_OneClassSVM_fit_status_, 'tolist') else attr_OneClassSVM_fit_status_`
    })()
  }

  /**
    Constant in the decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_intercept_ = bridgeOneClassSVM[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_intercept_.tolist() if hasattr(attr_OneClassSVM_intercept_, 'tolist') else attr_OneClassSVM_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_n_features_in_ = bridgeOneClassSVM[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_n_features_in_.tolist() if hasattr(attr_OneClassSVM_n_features_in_, 'tolist') else attr_OneClassSVM_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_feature_names_in_ = bridgeOneClassSVM[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_feature_names_in_.tolist() if hasattr(attr_OneClassSVM_feature_names_in_, 'tolist') else attr_OneClassSVM_feature_names_in_`
    })()
  }

  /**
    Number of iterations run by the optimization routine to fit the model.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_n_iter_ = bridgeOneClassSVM[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_n_iter_.tolist() if hasattr(attr_OneClassSVM_n_iter_, 'tolist') else attr_OneClassSVM_n_iter_`
    })()
  }

  /**
    Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - `offset\_`. The offset is the opposite of `intercept\_` and is provided for consistency with other outlier detection algorithms.
   */
  get offset_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before accessing offset_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_offset_ = bridgeOneClassSVM[${this.id}].offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_offset_.tolist() if hasattr(attr_OneClassSVM_offset_, 'tolist') else attr_OneClassSVM_offset_`
    })()
  }

  /**
    Array dimensions of training vector `X`.
   */
  get shape_fit_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing shape_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_shape_fit_ = bridgeOneClassSVM[${this.id}].shape_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_shape_fit_.tolist() if hasattr(attr_OneClassSVM_shape_fit_, 'tolist') else attr_OneClassSVM_shape_fit_`
    })()
  }

  /**
    Indices of support vectors.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneClassSVM must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_support_ = bridgeOneClassSVM[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_support_.tolist() if hasattr(attr_OneClassSVM_support_, 'tolist') else attr_OneClassSVM_support_`
    })()
  }

  /**
    Support vectors.
   */
  get support_vectors_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneClassSVM must call init() before accessing support_vectors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneClassSVM_support_vectors_ = bridgeOneClassSVM[${this.id}].support_vectors_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneClassSVM_support_vectors_.tolist() if hasattr(attr_OneClassSVM_support_vectors_, 'tolist') else attr_OneClassSVM_support_vectors_`
    })()
  }
}

export interface OneClassSVMOptions {
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
    An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

    @defaultValue `0.5`
   */
  nu?: number

  /**
    Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

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
}

export interface OneClassSVMDecisionFunctionOptions {
  /**
    The data matrix.
   */
  X?: ArrayLike[]
}

export interface OneClassSVMFitOptions {
  /**
    Set of samples, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    Per-sample weights. Rescale C per sample. Higher weights force the classifier to put more emphasis on these points.
   */
  sample_weight?: ArrayLike
}

export interface OneClassSVMFitPredictOptions {
  /**
    The input samples.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface OneClassSVMPredictOptions {
  /**
    For kernel=”precomputed”, the expected shape of X is (n\_samples\_test, n\_samples\_train).
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface OneClassSVMScoreSamplesOptions {
  /**
    The data matrix.
   */
  X?: ArrayLike[]
}
