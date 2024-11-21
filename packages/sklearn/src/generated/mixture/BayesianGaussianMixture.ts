/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Variational Bayesian estimation of a Gaussian mixture.

  This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

  This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)
 */
export class BayesianGaussianMixture {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of mixture components. Depending on the data and the value of the `weight\_concentration\_prior` the model can decide to not use all the components by setting some component `weights\_` to values very close to zero. The number of effective components is therefore smaller than n\_components.

      @defaultValue `1`
     */
    n_components?: number

    /**
      String describing the type of covariance parameters to use. Must be one of:

      @defaultValue `'full'`
     */
    covariance_type?: 'full' | 'tied' | 'diag' | 'spherical'

    /**
      The convergence threshold. EM iterations will stop when the lower bound average gain on the likelihood (of the training data with respect to the model) is below this threshold.

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
      The number of initializations to perform. The result with the highest lower bound value on the likelihood is kept.

      @defaultValue `1`
     */
    n_init?: number

    /**
      The method used to initialize the weights, the means and the covariances. String must be one of:

      @defaultValue `'kmeans'`
     */
    init_params?: 'kmeans' | 'k-means++' | 'random' | 'random_from_data'

    /**
      String describing the type of the weight concentration prior.

      @defaultValue `'dirichlet_process'`
     */
    weight_concentration_prior_type?:
      | 'dirichlet_process'
      | 'dirichlet_distribution'

    /**
      The dirichlet concentration of each component on the weight distribution (Dirichlet). This is commonly called gamma in the literature. The higher concentration puts more mass in the center and will lead to more components being active, while a lower concentration parameter will lead to more mass at the edge of the mixture weights simplex. The value of the parameter must be greater than 0. If it is `undefined`, it’s set to `1. / n\_components`.
     */
    weight_concentration_prior?: number

    /**
      The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. The value of the parameter must be greater than 0. If it is `undefined`, it is set to 1.
     */
    mean_precision_prior?: number

    /**
      The prior on the mean distribution (Gaussian). If it is `undefined`, it is set to the mean of X.
     */
    mean_prior?: ArrayLike

    /**
      The prior of the number of degrees of freedom on the covariance distributions (Wishart). If it is `undefined`, it’s set to `n\_features`.
     */
    degrees_of_freedom_prior?: number

    /**
      The prior on the covariance distribution (Wishart). If it is `undefined`, the emiprical covariance prior is initialized using the covariance of X. The shape depends on `covariance\_type`:
     */
    covariance_prior?: number | ArrayLike

    /**
      Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. See [the Glossary](../../glossary.html#term-warm_start).

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
    this.id = `BayesianGaussianMixture${crypto.randomUUID().split('-')[0]}`
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
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'BayesianGaussianMixture.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.mixture import BayesianGaussianMixture
try: bridgeBayesianGaussianMixture
except NameError: bridgeBayesianGaussianMixture = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_BayesianGaussianMixture = {'n_components': ${this.opts['n_components'] ?? undefined}, 'covariance_type': ${this.opts['covariance_type'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'reg_covar': ${this.opts['reg_covar'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'n_init': ${this.opts['n_init'] ?? undefined}, 'init_params': ${this.opts['init_params'] ?? undefined}, 'weight_concentration_prior_type': ${this.opts['weight_concentration_prior_type'] ?? undefined}, 'weight_concentration_prior': ${this.opts['weight_concentration_prior'] ?? undefined}, 'mean_precision_prior': ${this.opts['mean_precision_prior'] ?? undefined}, 'mean_prior': ${this.opts['mean_prior'] ?? undefined}, 'degrees_of_freedom_prior': ${this.opts['degrees_of_freedom_prior'] ?? undefined}, 'covariance_prior': ${this.opts['covariance_prior'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'verbose_interval': ${this.opts['verbose_interval'] ?? undefined}}

ctor_BayesianGaussianMixture = {k: v for k, v in ctor_BayesianGaussianMixture.items() if v is not None}`

    await this._py
      .ex`bridgeBayesianGaussianMixture[${this.id}] = BayesianGaussianMixture(**ctor_BayesianGaussianMixture)`

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

    await this._py.ex`del bridgeBayesianGaussianMixture[${this.id}]`

    this._isDisposed = true
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BayesianGaussianMixture must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_BayesianGaussianMixture_fit = {k: v for k, v in pms_BayesianGaussianMixture_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_fit = bridgeBayesianGaussianMixture[${this.id}].fit(**pms_BayesianGaussianMixture_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_fit.tolist() if hasattr(res_BayesianGaussianMixture_fit, 'tolist') else res_BayesianGaussianMixture_fit`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before fit_predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_fit_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_BayesianGaussianMixture_fit_predict = {k: v for k, v in pms_BayesianGaussianMixture_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_fit_predict = bridgeBayesianGaussianMixture[${this.id}].fit_predict(**pms_BayesianGaussianMixture_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_fit_predict.tolist() if hasattr(res_BayesianGaussianMixture_fit_predict, 'tolist') else res_BayesianGaussianMixture_fit_predict`
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
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_BayesianGaussianMixture_get_metadata_routing = {k: v for k, v in pms_BayesianGaussianMixture_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_get_metadata_routing = bridgeBayesianGaussianMixture[${this.id}].get_metadata_routing(**pms_BayesianGaussianMixture_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_get_metadata_routing.tolist() if hasattr(res_BayesianGaussianMixture_get_metadata_routing, 'tolist') else res_BayesianGaussianMixture_get_metadata_routing`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_BayesianGaussianMixture_predict = {k: v for k, v in pms_BayesianGaussianMixture_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_predict = bridgeBayesianGaussianMixture[${this.id}].predict(**pms_BayesianGaussianMixture_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_predict.tolist() if hasattr(res_BayesianGaussianMixture_predict, 'tolist') else res_BayesianGaussianMixture_predict`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_BayesianGaussianMixture_predict_proba = {k: v for k, v in pms_BayesianGaussianMixture_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_predict_proba = bridgeBayesianGaussianMixture[${this.id}].predict_proba(**pms_BayesianGaussianMixture_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_predict_proba.tolist() if hasattr(res_BayesianGaussianMixture_predict_proba, 'tolist') else res_BayesianGaussianMixture_predict_proba`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before sample()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_sample = {'n_samples': ${opts['n_samples'] ?? undefined}}

pms_BayesianGaussianMixture_sample = {k: v for k, v in pms_BayesianGaussianMixture_sample.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_sample = bridgeBayesianGaussianMixture[${this.id}].sample(**pms_BayesianGaussianMixture_sample)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_sample.tolist() if hasattr(res_BayesianGaussianMixture_sample, 'tolist') else res_BayesianGaussianMixture_sample`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BayesianGaussianMixture must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_BayesianGaussianMixture_score = {k: v for k, v in pms_BayesianGaussianMixture_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_score = bridgeBayesianGaussianMixture[${this.id}].score(**pms_BayesianGaussianMixture_score)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_score.tolist() if hasattr(res_BayesianGaussianMixture_score, 'tolist') else res_BayesianGaussianMixture_score`
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
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BayesianGaussianMixture_score_samples = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_BayesianGaussianMixture_score_samples = {k: v for k, v in pms_BayesianGaussianMixture_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BayesianGaussianMixture_score_samples = bridgeBayesianGaussianMixture[${this.id}].score_samples(**pms_BayesianGaussianMixture_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_BayesianGaussianMixture_score_samples.tolist() if hasattr(res_BayesianGaussianMixture_score_samples, 'tolist') else res_BayesianGaussianMixture_score_samples`
  }

  /**
    The weights of each mixture components.
   */
  get weights_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_weights_ = bridgeBayesianGaussianMixture[${this.id}].weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_weights_.tolist() if hasattr(attr_BayesianGaussianMixture_weights_, 'tolist') else attr_BayesianGaussianMixture_weights_`
    })()
  }

  /**
    The mean of each mixture component.
   */
  get means_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing means_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_means_ = bridgeBayesianGaussianMixture[${this.id}].means_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_means_.tolist() if hasattr(attr_BayesianGaussianMixture_means_, 'tolist') else attr_BayesianGaussianMixture_means_`
    })()
  }

  /**
    The covariance of each mixture component. The shape depends on `covariance\_type`:
   */
  get covariances_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing covariances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_covariances_ = bridgeBayesianGaussianMixture[${this.id}].covariances_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_covariances_.tolist() if hasattr(attr_BayesianGaussianMixture_covariances_, 'tolist') else attr_BayesianGaussianMixture_covariances_`
    })()
  }

  /**
    The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:
   */
  get precisions_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing precisions_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_precisions_ = bridgeBayesianGaussianMixture[${this.id}].precisions_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_precisions_.tolist() if hasattr(attr_BayesianGaussianMixture_precisions_, 'tolist') else attr_BayesianGaussianMixture_precisions_`
    })()
  }

  /**
    The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:
   */
  get precisions_cholesky_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing precisions_cholesky_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_precisions_cholesky_ = bridgeBayesianGaussianMixture[${this.id}].precisions_cholesky_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_precisions_cholesky_.tolist() if hasattr(attr_BayesianGaussianMixture_precisions_cholesky_, 'tolist') else attr_BayesianGaussianMixture_precisions_cholesky_`
    })()
  }

  /**
    True when convergence of the best fit of inference was reached, `false` otherwise.
   */
  get converged_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing converged_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_converged_ = bridgeBayesianGaussianMixture[${this.id}].converged_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_converged_.tolist() if hasattr(attr_BayesianGaussianMixture_converged_, 'tolist') else attr_BayesianGaussianMixture_converged_`
    })()
  }

  /**
    Number of step used by the best fit of inference to reach the convergence.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_n_iter_ = bridgeBayesianGaussianMixture[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_n_iter_.tolist() if hasattr(attr_BayesianGaussianMixture_n_iter_, 'tolist') else attr_BayesianGaussianMixture_n_iter_`
    })()
  }

  /**
    Lower bound value on the model evidence (of the training data) of the best fit of inference.
   */
  get lower_bound_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing lower_bound_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_lower_bound_ = bridgeBayesianGaussianMixture[${this.id}].lower_bound_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_lower_bound_.tolist() if hasattr(attr_BayesianGaussianMixture_lower_bound_, 'tolist') else attr_BayesianGaussianMixture_lower_bound_`
    })()
  }

  /**
    The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight\_concentration\_prior\_type`:
   */
  get weight_concentration_prior_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing weight_concentration_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_weight_concentration_prior_ = bridgeBayesianGaussianMixture[${this.id}].weight_concentration_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_weight_concentration_prior_.tolist() if hasattr(attr_BayesianGaussianMixture_weight_concentration_prior_, 'tolist') else attr_BayesianGaussianMixture_weight_concentration_prior_`
    })()
  }

  /**
    The dirichlet concentration of each component on the weight distribution (Dirichlet).
   */
  get weight_concentration_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing weight_concentration_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_weight_concentration_ = bridgeBayesianGaussianMixture[${this.id}].weight_concentration_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_weight_concentration_.tolist() if hasattr(attr_BayesianGaussianMixture_weight_concentration_, 'tolist') else attr_BayesianGaussianMixture_weight_concentration_`
    })()
  }

  /**
    The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. If mean\_precision\_prior is set to `undefined`, `mean\_precision\_prior\_` is set to 1.
   */
  get mean_precision_prior_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing mean_precision_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_mean_precision_prior_ = bridgeBayesianGaussianMixture[${this.id}].mean_precision_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_mean_precision_prior_.tolist() if hasattr(attr_BayesianGaussianMixture_mean_precision_prior_, 'tolist') else attr_BayesianGaussianMixture_mean_precision_prior_`
    })()
  }

  /**
    The precision of each components on the mean distribution (Gaussian).
   */
  get mean_precision_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing mean_precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_mean_precision_ = bridgeBayesianGaussianMixture[${this.id}].mean_precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_mean_precision_.tolist() if hasattr(attr_BayesianGaussianMixture_mean_precision_, 'tolist') else attr_BayesianGaussianMixture_mean_precision_`
    })()
  }

  /**
    The prior on the mean distribution (Gaussian).
   */
  get mean_prior_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing mean_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_mean_prior_ = bridgeBayesianGaussianMixture[${this.id}].mean_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_mean_prior_.tolist() if hasattr(attr_BayesianGaussianMixture_mean_prior_, 'tolist') else attr_BayesianGaussianMixture_mean_prior_`
    })()
  }

  /**
    The prior of the number of degrees of freedom on the covariance distributions (Wishart).
   */
  get degrees_of_freedom_prior_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing degrees_of_freedom_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_degrees_of_freedom_prior_ = bridgeBayesianGaussianMixture[${this.id}].degrees_of_freedom_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_degrees_of_freedom_prior_.tolist() if hasattr(attr_BayesianGaussianMixture_degrees_of_freedom_prior_, 'tolist') else attr_BayesianGaussianMixture_degrees_of_freedom_prior_`
    })()
  }

  /**
    The number of degrees of freedom of each components in the model.
   */
  get degrees_of_freedom_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing degrees_of_freedom_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_degrees_of_freedom_ = bridgeBayesianGaussianMixture[${this.id}].degrees_of_freedom_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_degrees_of_freedom_.tolist() if hasattr(attr_BayesianGaussianMixture_degrees_of_freedom_, 'tolist') else attr_BayesianGaussianMixture_degrees_of_freedom_`
    })()
  }

  /**
    The prior on the covariance distribution (Wishart). The shape depends on `covariance\_type`:
   */
  get covariance_prior_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing covariance_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_covariance_prior_ = bridgeBayesianGaussianMixture[${this.id}].covariance_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_covariance_prior_.tolist() if hasattr(attr_BayesianGaussianMixture_covariance_prior_, 'tolist') else attr_BayesianGaussianMixture_covariance_prior_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_n_features_in_ = bridgeBayesianGaussianMixture[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_n_features_in_.tolist() if hasattr(attr_BayesianGaussianMixture_n_features_in_, 'tolist') else attr_BayesianGaussianMixture_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BayesianGaussianMixture instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BayesianGaussianMixture must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BayesianGaussianMixture_feature_names_in_ = bridgeBayesianGaussianMixture[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BayesianGaussianMixture_feature_names_in_.tolist() if hasattr(attr_BayesianGaussianMixture_feature_names_in_, 'tolist') else attr_BayesianGaussianMixture_feature_names_in_`
    })()
  }
}
