/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Kernel ridge regression.

  Kernel ridge regression (KRR) combines ridge regression (linear least squares with l2-norm regularization) with the kernel trick. It thus learns a linear function in the space induced by the respective kernel and the data. For non-linear kernels, this corresponds to a non-linear function in the original space.

  The form of the model learned by KRR is identical to support vector regression (SVR). However, different loss functions are used: KRR uses squared error loss while support vector regression uses epsilon-insensitive loss, both combined with l2 regularization. In contrast to SVR, fitting a KRR model can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than SVR, which learns a sparse model for epsilon > 0, at prediction-time.

  This estimator has built-in support for multi-variate regression (i.e., when y is a 2d-array of shape \[n\_samples, n\_targets\]).

  Read more in the [User Guide](../kernel_ridge.html#kernel-ridge).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.kernel_ridge.KernelRidge.html
 */
export class KernelRidge {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KernelRidgeOptions) {
    this.id = `KernelRidge${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KernelRidge.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_ridge import KernelRidge
try: bridgeKernelRidge
except NameError: bridgeKernelRidge = {}
`

    // set up constructor params
    await this._py.ex`ctor_KernelRidge = {'alpha': np.array(${
      this.opts['alpha'] ?? undefined
    }) if ${this.opts['alpha'] !== undefined} else None, 'kernel': ${
      this.opts['kernel'] ?? undefined
    }, 'gamma': ${this.opts['gamma'] ?? undefined}, 'degree': ${
      this.opts['degree'] ?? undefined
    }, 'coef0': ${this.opts['coef0'] ?? undefined}, 'kernel_params': ${
      this.opts['kernel_params'] ?? undefined
    }}

ctor_KernelRidge = {k: v for k, v in ctor_KernelRidge.items() if v is not None}`

    await this._py
      .ex`bridgeKernelRidge[${this.id}] = KernelRidge(**ctor_KernelRidge)`

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

    await this._py.ex`del bridgeKernelRidge[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Kernel Ridge regression model.
   */
  async fit(opts: KernelRidgeFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelRidge must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KernelRidge_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_KernelRidge_fit = {k: v for k, v in pms_KernelRidge_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelRidge_fit = bridgeKernelRidge[${this.id}].fit(**pms_KernelRidge_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelRidge_fit.tolist() if hasattr(res_KernelRidge_fit, 'tolist') else res_KernelRidge_fit`
  }

  /**
    Predict using the kernel ridge model.
   */
  async predict(opts: KernelRidgePredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelRidge must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_KernelRidge_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KernelRidge_predict = {k: v for k, v in pms_KernelRidge_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelRidge_predict = bridgeKernelRidge[${this.id}].predict(**pms_KernelRidge_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelRidge_predict.tolist() if hasattr(res_KernelRidge_predict, 'tolist') else res_KernelRidge_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: KernelRidgeScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelRidge must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_KernelRidge_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_KernelRidge_score = {k: v for k, v in pms_KernelRidge_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelRidge_score = bridgeKernelRidge[${this.id}].score(**pms_KernelRidge_score)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelRidge_score.tolist() if hasattr(res_KernelRidge_score, 'tolist') else res_KernelRidge_score`
  }

  /**
    Representation of weight vector(s) in kernel space
   */
  get dual_coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelRidge must call init() before accessing dual_coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelRidge_dual_coef_ = bridgeKernelRidge[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelRidge_dual_coef_.tolist() if hasattr(attr_KernelRidge_dual_coef_, 'tolist') else attr_KernelRidge_dual_coef_`
    })()
  }

  /**
    Training data, which is also required for prediction. If kernel == “precomputed” this is instead the precomputed training matrix, of shape (n\_samples, n\_samples).
   */
  get X_fit_(): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelRidge must call init() before accessing X_fit_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelRidge_X_fit_ = bridgeKernelRidge[${this.id}].X_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelRidge_X_fit_.tolist() if hasattr(attr_KernelRidge_X_fit_, 'tolist') else attr_KernelRidge_X_fit_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelRidge must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelRidge_n_features_in_ = bridgeKernelRidge[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelRidge_n_features_in_.tolist() if hasattr(attr_KernelRidge_n_features_in_, 'tolist') else attr_KernelRidge_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelRidge instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelRidge must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelRidge_feature_names_in_ = bridgeKernelRidge[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelRidge_feature_names_in_.tolist() if hasattr(attr_KernelRidge_feature_names_in_, 'tolist') else attr_KernelRidge_feature_names_in_`
    })()
  }
}

export interface KernelRidgeOptions {
  /**
    Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If an array is passed, penalties are assumed to be specific to the targets. Hence they must correspond in number. See [Ridge regression and classification](../linear_model.html#ridge-regression) for formula.

    @defaultValue `1`
   */
  alpha?: number | ArrayLike

  /**
    Kernel mapping used internally. This parameter is directly passed to `pairwise\_kernel`. If `kernel` is a string, it must be one of the metrics in `pairwise.PAIRWISE\_KERNEL\_FUNCTIONS` or “precomputed”. If `kernel` is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if `kernel` is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two rows from X as input and return the corresponding kernel value as a single number. This means that callables from [`sklearn.metrics.pairwise`](../classes.html#module-sklearn.metrics.pairwise "sklearn.metrics.pairwise") are not allowed, as they operate on matrices, not single samples. Use the string identifying the kernel instead.

    @defaultValue `'linear'`
   */
  kernel?: string

  /**
    Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels.
   */
  gamma?: number

  /**
    Degree of the polynomial kernel. Ignored by other kernels.

    @defaultValue `3`
   */
  degree?: number

  /**
    Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

    @defaultValue `1`
   */
  coef0?: number

  /**
    Additional parameters (keyword arguments) for kernel function passed as callable object.
   */
  kernel_params?: any
}

export interface KernelRidgeFitOptions {
  /**
    Training data. If kernel == “precomputed” this is instead a precomputed kernel matrix, of shape (n\_samples, n\_samples).
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Individual weights for each sample, ignored if `undefined` is passed.
   */
  sample_weight?: number | ArrayLike
}

export interface KernelRidgePredictOptions {
  /**
    Samples. If kernel == “precomputed” this is instead a precomputed kernel matrix, shape = \[n\_samples, n\_samples\_fitted\], where n\_samples\_fitted is the number of samples used in the fitting for this estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface KernelRidgeScoreOptions {
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
