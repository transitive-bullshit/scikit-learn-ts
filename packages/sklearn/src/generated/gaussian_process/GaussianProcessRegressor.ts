/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Gaussian process regression (GPR).

  The implementation is based on Algorithm 2.1 of [\[RW2006\]](#rf75674b0f418-rw2006).

  In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html)
 */
export class GaussianProcessRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel `ConstantKernel(1.0, constant\_value\_bounds="fixed") \* RBF(1.0, length\_scale\_bounds="fixed")` is used as default. Note that the kernel hyperparameters are optimized during fitting unless the bounds are marked as “fixed”.
     */
    kernel?: any

    /**
      Value added to the diagonal of the kernel matrix during fitting. This can prevent a potential numerical issue during fitting, by ensuring that the calculated values form a positive definite matrix. It can also be interpreted as the variance of additional Gaussian measurement noise on the training observations. Note that this is different from using a `WhiteKernel`. If an array is passed, it must have the same number of entries as the data used for fitting and is used as datapoint-dependent noise level. Allowing to specify the noise level directly as a parameter is mainly for convenience and for consistency with [`Ridge`](sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge "sklearn.linear_model.Ridge").

      @defaultValue `1e-10`
     */
    alpha?: number | NDArray

    /**
      Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:

      @defaultValue `'fmin_l_bfgs_b'`
     */
    optimizer?: 'fmin_l_bfgs_b'

    /**
      The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that `n\_restarts\_optimizer \== 0` implies that one run is performed.

      @defaultValue `0`
     */
    n_restarts_optimizer?: number

    /**
      Whether or not to normalize the target values `y` by removing the mean and scaling to unit-variance. This is recommended for cases where zero-mean, unit-variance priors are used. Note that, in this implementation, the normalisation is reversed before the GP predictions are reported.

      @defaultValue `false`
     */
    normalize_y?: boolean

    /**
      If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.

      @defaultValue `true`
     */
    copy_X_train?: boolean

    /**
      The number of dimensions of the target values. Used to decide the number of outputs when sampling from the prior distributions (i.e. calling [`sample\_y`](#sklearn.gaussian_process.GaussianProcessRegressor.sample_y "sklearn.gaussian_process.GaussianProcessRegressor.sample_y") before [`fit`](#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit")). This parameter is ignored once [`fit`](#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit") has been called.
     */
    n_targets?: number

    /**
      Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `GaussianProcessRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'GaussianProcessRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process import GaussianProcessRegressor
try: bridgeGaussianProcessRegressor
except NameError: bridgeGaussianProcessRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GaussianProcessRegressor = {'kernel': ${this.opts['kernel'] ?? undefined}, 'alpha': np.array(${this.opts['alpha'] ?? undefined}) if ${this.opts['alpha'] !== undefined} else None, 'optimizer': ${this.opts['optimizer'] ?? undefined}, 'n_restarts_optimizer': ${this.opts['n_restarts_optimizer'] ?? undefined}, 'normalize_y': ${this.opts['normalize_y'] ?? undefined}, 'copy_X_train': ${this.opts['copy_X_train'] ?? undefined}, 'n_targets': ${this.opts['n_targets'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_GaussianProcessRegressor = {k: v for k, v in ctor_GaussianProcessRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeGaussianProcessRegressor[${this.id}] = GaussianProcessRegressor(**ctor_GaussianProcessRegressor)`

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

    await this._py.ex`del bridgeGaussianProcessRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Gaussian process regression model.
   */
  async fit(opts: {
    /**
      Feature vectors or other representations of training data.
     */
    X?: ArrayLike[]

    /**
      Target values.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GaussianProcessRegressor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_GaussianProcessRegressor_fit = {k: v for k, v in pms_GaussianProcessRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_fit = bridgeGaussianProcessRegressor[${this.id}].fit(**pms_GaussianProcessRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_fit.tolist() if hasattr(res_GaussianProcessRegressor_fit, 'tolist') else res_GaussianProcessRegressor_fit`
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
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GaussianProcessRegressor_get_metadata_routing = {k: v for k, v in pms_GaussianProcessRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_get_metadata_routing = bridgeGaussianProcessRegressor[${this.id}].get_metadata_routing(**pms_GaussianProcessRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_get_metadata_routing.tolist() if hasattr(res_GaussianProcessRegressor_get_metadata_routing, 'tolist') else res_GaussianProcessRegressor_get_metadata_routing`
  }

  /**
    Return log-marginal likelihood of theta for training data.
   */
  async log_marginal_likelihood(opts: {
    /**
      Kernel hyperparameters for which the log-marginal likelihood is evaluated. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned.
     */
    theta?: any

    /**
      If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. If `true`, theta must not be `undefined`.

      @defaultValue `false`
     */
    eval_gradient?: boolean

    /**
      If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.

      @defaultValue `true`
     */
    clone_kernel?: boolean
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before log_marginal_likelihood()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_log_marginal_likelihood = {'theta': np.array(${opts['theta'] ?? undefined}) if ${opts['theta'] !== undefined} else None, 'eval_gradient': ${opts['eval_gradient'] ?? undefined}, 'clone_kernel': ${opts['clone_kernel'] ?? undefined}}

pms_GaussianProcessRegressor_log_marginal_likelihood = {k: v for k, v in pms_GaussianProcessRegressor_log_marginal_likelihood.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_log_marginal_likelihood = bridgeGaussianProcessRegressor[${this.id}].log_marginal_likelihood(**pms_GaussianProcessRegressor_log_marginal_likelihood)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_log_marginal_likelihood.tolist() if hasattr(res_GaussianProcessRegressor_log_marginal_likelihood, 'tolist') else res_GaussianProcessRegressor_log_marginal_likelihood`
  }

  /**
    Predict using the Gaussian process regression model.

    We can also predict based on an unfitted model by using the GP prior. In addition to the mean of the predictive distribution, optionally also returns its standard deviation (`return\_std=True`) or covariance (`return\_cov=True`). Note that at most one of the two can be requested.
   */
  async predict(opts: {
    /**
      Query points where the GP is evaluated.
     */
    X?: ArrayLike[]

    /**
      If `true`, the standard-deviation of the predictive distribution at the query points is returned along with the mean.

      @defaultValue `false`
     */
    return_std?: boolean

    /**
      If `true`, the covariance of the joint predictive distribution at the query points is returned along with the mean.

      @defaultValue `false`
     */
    return_cov?: boolean
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'return_std': ${opts['return_std'] ?? undefined}, 'return_cov': ${opts['return_cov'] ?? undefined}}

pms_GaussianProcessRegressor_predict = {k: v for k, v in pms_GaussianProcessRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_predict = bridgeGaussianProcessRegressor[${this.id}].predict(**pms_GaussianProcessRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_predict.tolist() if hasattr(res_GaussianProcessRegressor_predict, 'tolist') else res_GaussianProcessRegressor_predict`
  }

  /**
    Draw samples from Gaussian process and evaluate at X.
   */
  async sample_y(opts: {
    /**
      Query points where the GP is evaluated.
     */
    X?: ArrayLike[]

    /**
      Number of samples drawn from the Gaussian process per query point.

      @defaultValue `1`
     */
    n_samples?: number

    /**
      Determines random number generation to randomly draw samples. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

      @defaultValue `0`
     */
    random_state?: number
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before sample_y()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_sample_y = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'n_samples': ${opts['n_samples'] ?? undefined}, 'random_state': ${opts['random_state'] ?? undefined}}

pms_GaussianProcessRegressor_sample_y = {k: v for k, v in pms_GaussianProcessRegressor_sample_y.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_sample_y = bridgeGaussianProcessRegressor[${this.id}].sample_y(**pms_GaussianProcessRegressor_sample_y)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_sample_y.tolist() if hasattr(res_GaussianProcessRegressor_sample_y, 'tolist') else res_GaussianProcessRegressor_sample_y`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_GaussianProcessRegressor_score = {k: v for k, v in pms_GaussianProcessRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_score = bridgeGaussianProcessRegressor[${this.id}].score(**pms_GaussianProcessRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_score.tolist() if hasattr(res_GaussianProcessRegressor_score, 'tolist') else res_GaussianProcessRegressor_score`
  }

  /**
    Request metadata passed to the `predict` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_request(opts: {
    /**
      Metadata routing for `return\_cov` parameter in `predict`.
     */
    return_cov?: string | boolean

    /**
      Metadata routing for `return\_std` parameter in `predict`.
     */
    return_std?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before set_predict_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_set_predict_request = {'return_cov': ${opts['return_cov'] ?? undefined}, 'return_std': ${opts['return_std'] ?? undefined}}

pms_GaussianProcessRegressor_set_predict_request = {k: v for k, v in pms_GaussianProcessRegressor_set_predict_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_set_predict_request = bridgeGaussianProcessRegressor[${this.id}].set_predict_request(**pms_GaussianProcessRegressor_set_predict_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_set_predict_request.tolist() if hasattr(res_GaussianProcessRegressor_set_predict_request, 'tolist') else res_GaussianProcessRegressor_set_predict_request`
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
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_GaussianProcessRegressor_set_score_request = {k: v for k, v in pms_GaussianProcessRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessRegressor_set_score_request = bridgeGaussianProcessRegressor[${this.id}].set_score_request(**pms_GaussianProcessRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessRegressor_set_score_request.tolist() if hasattr(res_GaussianProcessRegressor_set_score_request, 'tolist') else res_GaussianProcessRegressor_set_score_request`
  }

  /**
    Feature vectors or other representations of training data (also required for prediction).
   */
  get X_train_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing X_train_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_X_train_ = bridgeGaussianProcessRegressor[${this.id}].X_train_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_X_train_.tolist() if hasattr(attr_GaussianProcessRegressor_X_train_, 'tolist') else attr_GaussianProcessRegressor_X_train_`
    })()
  }

  /**
    Target values in training data (also required for prediction).
   */
  get y_train_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing y_train_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_y_train_ = bridgeGaussianProcessRegressor[${this.id}].y_train_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_y_train_.tolist() if hasattr(attr_GaussianProcessRegressor_y_train_, 'tolist') else attr_GaussianProcessRegressor_y_train_`
    })()
  }

  /**
    The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.
   */
  get kernel_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing kernel_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_kernel_ = bridgeGaussianProcessRegressor[${this.id}].kernel_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_kernel_.tolist() if hasattr(attr_GaussianProcessRegressor_kernel_, 'tolist') else attr_GaussianProcessRegressor_kernel_`
    })()
  }

  /**
    Lower-triangular Cholesky decomposition of the kernel in `X\_train\_`.
   */
  get L_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing L_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_L_ = bridgeGaussianProcessRegressor[${this.id}].L_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_L_.tolist() if hasattr(attr_GaussianProcessRegressor_L_, 'tolist') else attr_GaussianProcessRegressor_L_`
    })()
  }

  /**
    Dual coefficients of training data points in kernel space.
   */
  get alpha_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing alpha_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_alpha_ = bridgeGaussianProcessRegressor[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_alpha_.tolist() if hasattr(attr_GaussianProcessRegressor_alpha_, 'tolist') else attr_GaussianProcessRegressor_alpha_`
    })()
  }

  /**
    The log-marginal-likelihood of `self.kernel\_.theta`.
   */
  get log_marginal_likelihood_value_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing log_marginal_likelihood_value_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_log_marginal_likelihood_value_ = bridgeGaussianProcessRegressor[${this.id}].log_marginal_likelihood_value_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_log_marginal_likelihood_value_.tolist() if hasattr(attr_GaussianProcessRegressor_log_marginal_likelihood_value_, 'tolist') else attr_GaussianProcessRegressor_log_marginal_likelihood_value_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_n_features_in_ = bridgeGaussianProcessRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_n_features_in_.tolist() if hasattr(attr_GaussianProcessRegressor_n_features_in_, 'tolist') else attr_GaussianProcessRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessRegressor_feature_names_in_ = bridgeGaussianProcessRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessRegressor_feature_names_in_.tolist() if hasattr(attr_GaussianProcessRegressor_feature_names_in_, 'tolist') else attr_GaussianProcessRegressor_feature_names_in_`
    })()
  }
}
