/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Cross-validated Orthogonal Matching Pursuit model (OMP).

  See glossary entry for cross-validation estimator.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuitCV.html
 */
export class OrthogonalMatchingPursuitCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OrthogonalMatchingPursuitCVOptions) {
    this.id = `OrthogonalMatchingPursuitCV${crypto.randomUUID().split('-')[0]}`
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
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OrthogonalMatchingPursuitCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import OrthogonalMatchingPursuitCV
try: bridgeOrthogonalMatchingPursuitCV
except NameError: bridgeOrthogonalMatchingPursuitCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_OrthogonalMatchingPursuitCV = {'copy': ${
      this.opts['copy'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'normalize': ${this.opts['normalize'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_OrthogonalMatchingPursuitCV = {k: v for k, v in ctor_OrthogonalMatchingPursuitCV.items() if v is not None}`

    await this._py
      .ex`bridgeOrthogonalMatchingPursuitCV[${this.id}] = OrthogonalMatchingPursuitCV(**ctor_OrthogonalMatchingPursuitCV)`

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

    await this._py.ex`del bridgeOrthogonalMatchingPursuitCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: OrthogonalMatchingPursuitCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_OrthogonalMatchingPursuitCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_OrthogonalMatchingPursuitCV_fit = {k: v for k, v in pms_OrthogonalMatchingPursuitCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuitCV_fit = bridgeOrthogonalMatchingPursuitCV[${this.id}].fit(**pms_OrthogonalMatchingPursuitCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuitCV_fit.tolist() if hasattr(res_OrthogonalMatchingPursuitCV_fit, 'tolist') else res_OrthogonalMatchingPursuitCV_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: OrthogonalMatchingPursuitCVPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_OrthogonalMatchingPursuitCV_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_OrthogonalMatchingPursuitCV_predict = {k: v for k, v in pms_OrthogonalMatchingPursuitCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuitCV_predict = bridgeOrthogonalMatchingPursuitCV[${this.id}].predict(**pms_OrthogonalMatchingPursuitCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuitCV_predict.tolist() if hasattr(res_OrthogonalMatchingPursuitCV_predict, 'tolist') else res_OrthogonalMatchingPursuitCV_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \(R^2\) is defined as \((1 - \frac{u}{v})\), where \(u\) is the residual sum of squares ((y_true - y_pred)** 2).sum() and \(v\) is the total sum of squares ((y_true - y_true.mean()) ** 2).sum(). The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a \(R^2\) score of 0.0.
   */
  async score(opts: OrthogonalMatchingPursuitCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_OrthogonalMatchingPursuitCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_OrthogonalMatchingPursuitCV_score = {k: v for k, v in pms_OrthogonalMatchingPursuitCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuitCV_score = bridgeOrthogonalMatchingPursuitCV[${this.id}].score(**pms_OrthogonalMatchingPursuitCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuitCV_score.tolist() if hasattr(res_OrthogonalMatchingPursuitCV_score, 'tolist') else res_OrthogonalMatchingPursuitCV_score`
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_intercept_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_intercept_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_intercept_, 'tolist') else attr_OrthogonalMatchingPursuitCV_intercept_`
    })()
  }

  /**
    Parameter vector (w in the problem formulation).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_coef_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_coef_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_coef_, 'tolist') else attr_OrthogonalMatchingPursuitCV_coef_`
    })()
  }

  /**
    Estimated number of non-zero coefficients giving the best mean squared error over the cross-validation folds.
   */
  get n_nonzero_coefs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing n_nonzero_coefs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_n_nonzero_coefs_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].n_nonzero_coefs_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_n_nonzero_coefs_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_n_nonzero_coefs_, 'tolist') else attr_OrthogonalMatchingPursuitCV_n_nonzero_coefs_`
    })()
  }

  /**
    Number of active features across every target for the model refit with the best hyperparameters got by cross-validating across all folds.
   */
  get n_iter_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_n_iter_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_n_iter_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_n_iter_, 'tolist') else attr_OrthogonalMatchingPursuitCV_n_iter_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_n_features_in_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_n_features_in_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_n_features_in_, 'tolist') else attr_OrthogonalMatchingPursuitCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuitCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuitCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuitCV_feature_names_in_ = bridgeOrthogonalMatchingPursuitCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuitCV_feature_names_in_.tolist() if hasattr(attr_OrthogonalMatchingPursuitCV_feature_names_in_, 'tolist') else attr_OrthogonalMatchingPursuitCV_feature_names_in_`
    })()
  }
}

export interface OrthogonalMatchingPursuitCVOptions {
  /**
    Whether the design matrix X must be copied by the algorithm. A false value is only helpful if X is already Fortran-ordered, otherwise a copy is made anyway.

    @defaultValue `true`
   */
  copy?: boolean

  /**
    Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    This parameter is ignored when fit_intercept is set to False. If True, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use StandardScaler before calling fit on an estimator with normalize=False.

    @defaultValue `false`
   */
  normalize?: boolean

  /**
    Maximum numbers of iterations to perform, therefore maximum features to include. 10% of n_features but at least 5 if available.
   */
  max_iter?: number

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    Number of CPUs to use during the cross validation. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number

  /**
    Sets the verbosity amount.

    @defaultValue `false`
   */
  verbose?: boolean | number
}

export interface OrthogonalMatchingPursuitCVFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values. Will be cast to X’s dtype if necessary.
   */
  y?: ArrayLike
}

export interface OrthogonalMatchingPursuitCVPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface OrthogonalMatchingPursuitCVScoreOptions {
  /**
    Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.
   */
  X?: ArrayLike[]

  /**
    True values for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
