/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  RANSAC (RANdom SAmple Consensus) algorithm.

  RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#ransac-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html)
 */
export class RANSACRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Base estimator object which implements the following methods:
     */
    estimator?: any

    /**
      Minimum number of samples chosen randomly from original data. Treated as an absolute number of samples for `min_samples >= 1`, treated as a relative number `ceil(min_samples \* X.shape\[0\])` for `min_samples < 1`. This is typically chosen as the minimal number of samples necessary to estimate the given `estimator`. By default a [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") estimator is assumed and `min_samples` is chosen as `X.shape\[1\] + 1`. This parameter is highly dependent upon the model, so if a `estimator` other than [`LinearRegression`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is used, the user must provide a value.
     */
    min_samples?: number

    /**
      Maximum residual for a data sample to be classified as an inlier. By default the threshold is chosen as the MAD (median absolute deviation) of the target values `y`. Points whose residuals are strictly equal to the threshold are considered as inliers.
     */
    residual_threshold?: number

    /**
      This function is called with the randomly selected data before the model is fitted to it: `is_data_valid(X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped.
     */
    is_data_valid?: any

    /**
      This function is called with the estimated model and the randomly selected data: `is_model_valid(model, X, y)`. If its return value is `false` the current randomly chosen sub-sample is skipped. Rejecting samples with this function is computationally costlier than with `is_data_valid`. `is_model_valid` should therefore only be used if the estimated model is needed for making the rejection decision.
     */
    is_model_valid?: any

    /**
      Maximum number of iterations for random sample selection.

      @defaultValue `100`
     */
    max_trials?: number

    /**
      Maximum number of iterations that can be skipped due to finding zero inliers or invalid data defined by `is_data_valid` or invalid models defined by `is_model_valid`.
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
      String inputs, ‘absolute_error’ and ‘squared_error’ are supported which find the absolute error and squared error per sample respectively.

      If `loss` is a callable, then it should be a function that takes two arrays as inputs, the true and predicted value and returns a 1-D array with the i-th value of the array corresponding to the loss on `X\[i\]`.

      If the loss on a sample is greater than the `residual_threshold`, then this sample is classified as an outlier.

      @defaultValue `'absolute_error'`
     */
    loss?: string

    /**
      The generator used to initialize the centers. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
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
    await this._py
      .ex`ctor_RANSACRegressor = {'estimator': ${this.opts['estimator'] ?? undefined}, 'min_samples': ${this.opts['min_samples'] ?? undefined}, 'residual_threshold': ${this.opts['residual_threshold'] ?? undefined}, 'is_data_valid': ${this.opts['is_data_valid'] ?? undefined}, 'is_model_valid': ${this.opts['is_model_valid'] ?? undefined}, 'max_trials': ${this.opts['max_trials'] ?? undefined}, 'max_skips': ${this.opts['max_skips'] ?? undefined}, 'stop_n_inliers': ${this.opts['stop_n_inliers'] ?? undefined}, 'stop_score': ${this.opts['stop_score'] ?? undefined}, 'stop_probability': ${this.opts['stop_probability'] ?? undefined}, 'loss': ${this.opts['loss'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

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
      Individual weights for each sample raises error if sample_weight is passed and estimator fit method does not support it.
     */
    sample_weight?: ArrayLike

    /**
      Parameters routed to the `fit` method of the sub-estimator via the metadata routing API.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_RANSACRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_RANSACRegressor_fit = {k: v for k, v in pms_RANSACRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_fit = bridgeRANSACRegressor[${this.id}].fit(**pms_RANSACRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_fit.tolist() if hasattr(res_RANSACRegressor_fit, 'tolist') else res_RANSACRegressor_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RANSACRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_RANSACRegressor_get_metadata_routing = {k: v for k, v in pms_RANSACRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_get_metadata_routing = bridgeRANSACRegressor[${this.id}].get_metadata_routing(**pms_RANSACRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_get_metadata_routing.tolist() if hasattr(res_RANSACRegressor_get_metadata_routing, 'tolist') else res_RANSACRegressor_get_metadata_routing`
  }

  /**
    Predict using the estimated model.

    This is a wrapper for `estimator_.predict(X)`.
   */
  async predict(opts: {
    /**
      Input data.
     */
    X?: any[]

    /**
      Parameters routed to the `predict` method of the sub-estimator via the metadata routing API.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_RANSACRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

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

    This is a wrapper for `estimator_.score(X, y)`.
   */
  async score(opts: {
    /**
      Training data.
     */
    X?: any[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Parameters routed to the `score` method of the sub-estimator via the metadata routing API.
     */
    params?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RANSACRegressor must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_RANSACRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_RANSACRegressor_score = {k: v for k, v in pms_RANSACRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_score = bridgeRANSACRegressor[${this.id}].score(**pms_RANSACRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_score.tolist() if hasattr(res_RANSACRegressor_score, 'tolist') else res_RANSACRegressor_score`
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
      throw new Error('This RANSACRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RANSACRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RANSACRegressor_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_RANSACRegressor_set_fit_request = {k: v for k, v in pms_RANSACRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RANSACRegressor_set_fit_request = bridgeRANSACRegressor[${this.id}].set_fit_request(**pms_RANSACRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_RANSACRegressor_set_fit_request.tolist() if hasattr(res_RANSACRegressor_set_fit_request, 'tolist') else res_RANSACRegressor_set_fit_request`
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
    Number of random selection trials until one of the stop criteria is met. It is always `<= max_trials`.
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
    Boolean mask of inliers classified as `true`.
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
    Number of iterations skipped due to invalid data defined by `is_data_valid`.
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
    Number of iterations skipped due to an invalid model defined by `is_model_valid`.
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
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
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
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
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
