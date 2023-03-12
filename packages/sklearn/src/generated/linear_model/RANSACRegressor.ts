/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  RANSAC (RANdom SAmple Consensus) algorithm.

  RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

  Read more in the [User Guide](../linear_model.html#ransac-regression).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html
 */
export class RANSACRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RANSACRegressorOptions) {
    this.id = `RANSACRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RANSACRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import RANSACRegressor
try: bridgeRANSACRegressor
except NameError: bridgeRANSACRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_RANSACRegressor = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'min_samples': ${
      this.opts['min_samples'] ?? undefined
    }, 'residual_threshold': ${
      this.opts['residual_threshold'] ?? undefined
    }, 'is_data_valid': ${
      this.opts['is_data_valid'] ?? undefined
    }, 'is_model_valid': ${
      this.opts['is_model_valid'] ?? undefined
    }, 'max_trials': ${this.opts['max_trials'] ?? undefined}, 'max_skips': ${
      this.opts['max_skips'] ?? undefined
    }, 'stop_n_inliers': ${
      this.opts['stop_n_inliers'] ?? undefined
    }, 'stop_score': ${
      this.opts['stop_score'] ?? undefined
    }, 'stop_probability': ${
      this.opts['stop_probability'] ?? undefined
    }, 'loss': ${this.opts['loss'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'base_estimator': ${this.opts['base_estimator'] ?? undefined}}

ctor_RANSACRegressor = {k: v for k, v in ctor_RANSACRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeRANSACRegressor[${this.id}] = RANSACRegressor(**ctor_RANSACRegressor)`

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

    await this._py.ex`del bridgeRANSACRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit estimator using RANSAC algorithm.
   */
  async fit(opts: RANSACRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RANSACRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RANSACRegressor_fit = {k: v for k, v in pms_RANSACRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_fit = bridgeRANSACRegressor[${this.id}].fit(**pms_RANSACRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_fit.tolist() if hasattr(res_RANSACRegressor_fit, 'tolist') else res_RANSACRegressor_fit`
  }

  /**
    Predict using the estimated model.

    This is a wrapper for `estimator\_.predict(X)`.
   */
  async predict(opts: RANSACRegressorPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RANSACRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RANSACRegressor_predict = {k: v for k, v in pms_RANSACRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_predict = bridgeRANSACRegressor[${this.id}].predict(**pms_RANSACRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_predict.tolist() if hasattr(res_RANSACRegressor_predict, 'tolist') else res_RANSACRegressor_predict`
  }

  /**
    Return the score of the prediction.

    This is a wrapper for `estimator\_.score(X, y)`.
   */
  async score(opts: RANSACRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RANSACRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_RANSACRegressor_score = {k: v for k, v in pms_RANSACRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_score = bridgeRANSACRegressor[${this.id}].score(**pms_RANSACRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_score.tolist() if hasattr(res_RANSACRegressor_score, 'tolist') else res_RANSACRegressor_score`
  }

  /**
    Best fitted model (copy of the `estimator` object).
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_estimator_ = bridgeRANSACRegressor[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_estimator_.tolist() if hasattr(attr_RANSACRegressor_estimator_, 'tolist') else attr_RANSACRegressor_estimator_`
    })()
  }

  /**
    Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.
   */
  get n_trials_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing n_trials_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_n_trials_ = bridgeRANSACRegressor[${this.id}].n_trials_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_n_trials_.tolist() if hasattr(attr_RANSACRegressor_n_trials_, 'tolist') else attr_RANSACRegressor_n_trials_`
    })()
  }

  /**
    Boolean mask of inliers classified as `True`.
   */
  get inlier_mask_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing inlier_mask_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_inlier_mask_ = bridgeRANSACRegressor[${this.id}].inlier_mask_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_inlier_mask_.tolist() if hasattr(attr_RANSACRegressor_inlier_mask_, 'tolist') else attr_RANSACRegressor_inlier_mask_`
    })()
  }

  /**
    Number of iterations skipped due to finding zero inliers.
   */
  get n_skips_no_inliers_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing n_skips_no_inliers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_n_skips_no_inliers_ = bridgeRANSACRegressor[${this.id}].n_skips_no_inliers_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_n_skips_no_inliers_.tolist() if hasattr(attr_RANSACRegressor_n_skips_no_inliers_, 'tolist') else attr_RANSACRegressor_n_skips_no_inliers_`
    })()
  }

  /**
    Number of iterations skipped due to invalid data defined by `is\_data\_valid`.
   */
  get n_skips_invalid_data_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing n_skips_invalid_data_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_n_skips_invalid_data_ = bridgeRANSACRegressor[${this.id}].n_skips_invalid_data_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_n_skips_invalid_data_.tolist() if hasattr(attr_RANSACRegressor_n_skips_invalid_data_, 'tolist') else attr_RANSACRegressor_n_skips_invalid_data_`
    })()
  }

  /**
    Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.
   */
  get n_skips_invalid_model_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing n_skips_invalid_model_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_n_skips_invalid_model_ = bridgeRANSACRegressor[${this.id}].n_skips_invalid_model_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_n_skips_invalid_model_.tolist() if hasattr(attr_RANSACRegressor_n_skips_invalid_model_, 'tolist') else attr_RANSACRegressor_n_skips_invalid_model_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_n_features_in_ = bridgeRANSACRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_n_features_in_.tolist() if hasattr(attr_RANSACRegressor_n_features_in_, 'tolist') else attr_RANSACRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RANSACRegressor_feature_names_in_ = bridgeRANSACRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RANSACRegressor_feature_names_in_.tolist() if hasattr(attr_RANSACRegressor_feature_names_in_, 'tolist') else attr_RANSACRegressor_feature_names_in_`
    })()
  }
}

export interface RANSACRegressorOptions {
  /**
    Base estimator object which implements the following methods:
   */
  estimator?: any

  /**
    Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min\_samples >= 1`, treated as a relative number `ceil(min\_samples \* X.shape\[0\])` for `min\_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a `sklearn.linear\_model.LinearRegression()` estimator is assumed and `min\_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than `linear\_model.LinearRegression` is used, the user must provide a value.
   */
  min_samples?: number

  /**
    Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers.
   */
  residual_threshold?: number

  /**
    This function is called with the randomly selected data before the model is fitted to it: `is\_data\_valid(X, y)`. If its return value is False the current randomly chosen sub-sample is skipped.
   */
  is_data_valid?: any

  /**
    This function is called with the estimated model and the randomly selected data: `is\_model\_valid(model, X, y)`. If its return value is False the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is\_data\_valid`. `is\_model\_valid` should therefore only be used if the estimated model is needed for making the rejection decision.
   */
  is_model_valid?: any

  /**
    Maximum number of iterations for random sample selection.

    @defaultValue `100`
   */
  max_trials?: number

  /**
    Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is\_data\_valid` or invalid models defined by `is\_model\_valid`.
   */
  max_skips?: number

  /**
    Stop iteration if at least this number of inliers are found.
   */
  stop_n_inliers?: number

  /**
    Stop iteration if score is greater equal than this threshold.
   */
  stop_score?: number

  /**
    RANSAC iteration stops if at least one outlier-free set of the training data is sampled in RANSAC. This requires to generate at least N samples (iterations):

    @defaultValue `0.99`
   */
  stop_probability?: number

  /**
    String inputs, ‘absolute\_error’ and ‘squared\_error’ are supported which find the absolute error and squared error per sample respectively.

    If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.

    If the loss on a sample is greater than the `residual\_threshold`, then this sample is classified as an outlier.

    @defaultValue `'absolute_error'`
   */
  loss?: string

  /**
    The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    Use `estimator` instead.

    @defaultValue `'deprecated'`
   */
  base_estimator?: any
}

export interface RANSACRegressorFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Individual weights for each sample raises error if sample\_weight is passed and estimator fit method does not support it.
   */
  sample_weight?: ArrayLike
}

export interface RANSACRegressorPredictOptions {
  /**
    Input data.
   */
  X?: any[]
}

export interface RANSACRegressorScoreOptions {
  /**
    Training data.
   */
  X?: any[]

  /**
    Target values.
   */
  y?: ArrayLike
}
