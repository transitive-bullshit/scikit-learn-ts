/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Gaussian Mixture.

  Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

  Read more in the [User Guide](../mixture.html#gmm).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)
 */
export class GaussianMixture {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of mixture components.

      @defaultValue `1`
     */
    n_components?: number

    /**
      String describing the type of covariance parameters to use. Must be one of:

      @defaultValue `'full'`
     */
    covariance_type?: 'full' | 'tied' | 'diag' | 'spherical'

    /**
      The convergence threshold. EM iterations will stop when the lower bound average gain is below this threshold.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.

      @defaultValue `0.000001`
     */
    reg_covar?: number

    /**
      The number of EM iterations to perform.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      The number of initializations to perform. The best results are kept.

      @defaultValue `1`
     */
    n_init?: number

    /**
      The method used to initialize the weights, the means and the precisions. String must be one of:

      @defaultValue `'kmeans'`
     */
    init_params?: 'kmeans' | 'k-means++' | 'random' | 'random_from_data'

    /**
      The user-provided initial weights. If it is `undefined`, weights are initialized using the `init\_params` method.
     */
    weights_init?: ArrayLike

    /**
      The user-provided initial means, If it is `undefined`, means are initialized using the `init\_params` method.
     */
    means_init?: ArrayLike[]

    /**
      The user-provided initial precisions (inverse of the covariance matrices). If it is `undefined`, precisions are initialized using the ‘init\_params’ method. The shape depends on ‘covariance\_type’:
     */
    precisions_init?: ArrayLike

    /**
      Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. In that case, ‘n\_init’ is ignored and only a single initialization occurs upon the first call. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Number of iteration done before the next print.

      @defaultValue `10`
     */
    verbose_interval?: number
  }) {
    this.id = `GaussianMixture${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GaussianMixture.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.mixture import GaussianMixture
try: bridgeGaussianMixture
except NameError: bridgeGaussianMixture = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GaussianMixture = {'n_components': ${this.opts['n_components'] ?? undefined}, 'covariance_type': ${this.opts['covariance_type'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'reg_covar': ${this.opts['reg_covar'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'n_init': ${this.opts['n_init'] ?? undefined}, 'init_params': ${this.opts['init_params'] ?? undefined}, 'weights_init': np.array(${this.opts['weights_init'] ?? undefined}) if ${this.opts['weights_init'] !== undefined} else None, 'means_init': np.array(${this.opts['means_init'] ?? undefined}) if ${this.opts['means_init'] !== undefined} else None, 'precisions_init': ${this.opts['precisions_init'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'verbose_interval': ${this.opts['verbose_interval'] ?? undefined}}

ctor_GaussianMixture = {k: v for k, v in ctor_GaussianMixture.items() if v is not None}`

    await this._py
      .ex`bridgeGaussianMixture[${this.id}] = GaussianMixture(**ctor_GaussianMixture)`

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

    await this._py.ex`del bridgeGaussianMixture[${this.id}]`

    this._isDisposed = true
  }

  /**
    Akaike information criterion for the current model on the input X.

    You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the AIC used.
   */
  async aic(opts: {
    /**
      The input samples.
     */
    X?: any[]
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before aic()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_aic = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GaussianMixture_aic = {k: v for k, v in pms_GaussianMixture_aic.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_aic = bridgeGaussianMixture[${this.id}].aic(**pms_GaussianMixture_aic)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_aic.tolist() if hasattr(res_GaussianMixture_aic, 'tolist') else res_GaussianMixture_aic`
  }

  /**
    Bayesian information criterion for the current model on the input X.

    You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the BIC used.
   */
  async bic(opts: {
    /**
      The input samples.
     */
    X?: any[]
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before bic()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_bic = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GaussianMixture_bic = {k: v for k, v in pms_GaussianMixture_bic.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_bic = bridgeGaussianMixture[${this.id}].bic(**pms_GaussianMixture_bic)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_bic.tolist() if hasattr(res_GaussianMixture_bic, 'tolist') else res_GaussianMixture_bic`
  }

  /**
    Estimate model parameters with the EM algorithm.

    The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.
   */
  async fit(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GaussianMixture_fit = {k: v for k, v in pms_GaussianMixture_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_fit = bridgeGaussianMixture[${this.id}].fit(**pms_GaussianMixture_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_fit.tolist() if hasattr(res_GaussianMixture_fit, 'tolist') else res_GaussianMixture_fit`
  }

  /**
    Estimate model parameters using X and predict the labels for X.

    The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.
   */
  async fit_predict(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before fit_predict()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_fit_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GaussianMixture_fit_predict = {k: v for k, v in pms_GaussianMixture_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_fit_predict = bridgeGaussianMixture[${this.id}].fit_predict(**pms_GaussianMixture_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_fit_predict.tolist() if hasattr(res_GaussianMixture_fit_predict, 'tolist') else res_GaussianMixture_fit_predict`
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
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GaussianMixture_get_metadata_routing = {k: v for k, v in pms_GaussianMixture_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_get_metadata_routing = bridgeGaussianMixture[${this.id}].get_metadata_routing(**pms_GaussianMixture_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_get_metadata_routing.tolist() if hasattr(res_GaussianMixture_get_metadata_routing, 'tolist') else res_GaussianMixture_get_metadata_routing`
  }

  /**
    Predict the labels for the data samples in X using trained model.
   */
  async predict(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GaussianMixture_predict = {k: v for k, v in pms_GaussianMixture_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_predict = bridgeGaussianMixture[${this.id}].predict(**pms_GaussianMixture_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_predict.tolist() if hasattr(res_GaussianMixture_predict, 'tolist') else res_GaussianMixture_predict`
  }

  /**
    Evaluate the components’ density for each sample.
   */
  async predict_proba(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GaussianMixture_predict_proba = {k: v for k, v in pms_GaussianMixture_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_predict_proba = bridgeGaussianMixture[${this.id}].predict_proba(**pms_GaussianMixture_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_predict_proba.tolist() if hasattr(res_GaussianMixture_predict_proba, 'tolist') else res_GaussianMixture_predict_proba`
  }

  /**
    Generate random samples from the fitted Gaussian distribution.
   */
  async sample(opts: {
    /**
      Number of samples to generate.

      @defaultValue `1`
     */
    n_samples?: number
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before sample()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_sample = {'n_samples': ${opts['n_samples'] ?? undefined}}

pms_GaussianMixture_sample = {k: v for k, v in pms_GaussianMixture_sample.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_sample = bridgeGaussianMixture[${this.id}].sample(**pms_GaussianMixture_sample)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_sample.tolist() if hasattr(res_GaussianMixture_sample, 'tolist') else res_GaussianMixture_sample`
  }

  /**
    Compute the per-sample average log-likelihood of the given data X.
   */
  async score(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GaussianMixture_score = {k: v for k, v in pms_GaussianMixture_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_score = bridgeGaussianMixture[${this.id}].score(**pms_GaussianMixture_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_score.tolist() if hasattr(res_GaussianMixture_score, 'tolist') else res_GaussianMixture_score`
  }

  /**
    Compute the log-likelihood of each sample.
   */
  async score_samples(opts: {
    /**
      List of n\_features-dimensional data points. Each row corresponds to a single data point.
     */
    X?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianMixture must call init() before score_samples()')
    }

    // set up method params
    await this._py
      .ex`pms_GaussianMixture_score_samples = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GaussianMixture_score_samples = {k: v for k, v in pms_GaussianMixture_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianMixture_score_samples = bridgeGaussianMixture[${this.id}].score_samples(**pms_GaussianMixture_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianMixture_score_samples.tolist() if hasattr(res_GaussianMixture_score_samples, 'tolist') else res_GaussianMixture_score_samples`
  }

  /**
    The weights of each mixture components.
   */
  get weights_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_weights_ = bridgeGaussianMixture[${this.id}].weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_weights_.tolist() if hasattr(attr_GaussianMixture_weights_, 'tolist') else attr_GaussianMixture_weights_`
    })()
  }

  /**
    The mean of each mixture component.
   */
  get means_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing means_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_means_ = bridgeGaussianMixture[${this.id}].means_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_means_.tolist() if hasattr(attr_GaussianMixture_means_, 'tolist') else attr_GaussianMixture_means_`
    })()
  }

  /**
    The covariance of each mixture component. The shape depends on `covariance\_type`:
   */
  get covariances_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing covariances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_covariances_ = bridgeGaussianMixture[${this.id}].covariances_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_covariances_.tolist() if hasattr(attr_GaussianMixture_covariances_, 'tolist') else attr_GaussianMixture_covariances_`
    })()
  }

  /**
    The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:
   */
  get precisions_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing precisions_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_precisions_ = bridgeGaussianMixture[${this.id}].precisions_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_precisions_.tolist() if hasattr(attr_GaussianMixture_precisions_, 'tolist') else attr_GaussianMixture_precisions_`
    })()
  }

  /**
    The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:
   */
  get precisions_cholesky_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing precisions_cholesky_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_precisions_cholesky_ = bridgeGaussianMixture[${this.id}].precisions_cholesky_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_precisions_cholesky_.tolist() if hasattr(attr_GaussianMixture_precisions_cholesky_, 'tolist') else attr_GaussianMixture_precisions_cholesky_`
    })()
  }

  /**
    True when convergence of the best fit of EM was reached, `false` otherwise.
   */
  get converged_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing converged_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_converged_ = bridgeGaussianMixture[${this.id}].converged_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_converged_.tolist() if hasattr(attr_GaussianMixture_converged_, 'tolist') else attr_GaussianMixture_converged_`
    })()
  }

  /**
    Number of step used by the best fit of EM to reach the convergence.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_n_iter_ = bridgeGaussianMixture[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_n_iter_.tolist() if hasattr(attr_GaussianMixture_n_iter_, 'tolist') else attr_GaussianMixture_n_iter_`
    })()
  }

  /**
    Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.
   */
  get lower_bound_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing lower_bound_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_lower_bound_ = bridgeGaussianMixture[${this.id}].lower_bound_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_lower_bound_.tolist() if hasattr(attr_GaussianMixture_lower_bound_, 'tolist') else attr_GaussianMixture_lower_bound_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_n_features_in_ = bridgeGaussianMixture[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_n_features_in_.tolist() if hasattr(attr_GaussianMixture_n_features_in_, 'tolist') else attr_GaussianMixture_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianMixture instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianMixture must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianMixture_feature_names_in_ = bridgeGaussianMixture[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianMixture_feature_names_in_.tolist() if hasattr(attr_GaussianMixture_feature_names_in_, 'tolist') else attr_GaussianMixture_feature_names_in_`
    })()
  }
}
