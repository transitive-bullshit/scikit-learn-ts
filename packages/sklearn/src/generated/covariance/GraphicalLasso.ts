/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Sparse inverse covariance estimation with an l1-penalized estimator.

  For a usage example see [Visualizing the stock market structure](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_stock_market.html#sphx-glr-auto-examples-applications-plot-stock-market-py).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#sparse-inverse-covariance).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html)
 */
export class GraphicalLasso {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].

      @defaultValue `0.01`
     */
    alpha?: number

    /**
      The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.

      @defaultValue `'cd'`
     */
    mode?: 'cd' | 'lars'

    /**
      If covariance is “precomputed”, the input data in `fit` is assumed to be the covariance matrix. If `undefined`, the empirical covariance is estimated from the data `X`.
     */
    covariance?: 'precomputed'

    /**
      The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

      @defaultValue `0.0001`
     */
    enet_tol?: number

    /**
      The maximum number of iterations.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      If verbose is `true`, the objective function and dual gap are plotted at each iteration.

      @defaultValue `false`
     */
    verbose?: boolean

    /**
      The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Default is `np.finfo(np.float64).eps`.
     */
    eps?: number

    /**
      If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

      @defaultValue `false`
     */
    assume_centered?: boolean
  }) {
    this.id = `GraphicalLasso${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GraphicalLasso.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import GraphicalLasso
try: bridgeGraphicalLasso
except NameError: bridgeGraphicalLasso = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_GraphicalLasso = {'alpha': ${this.opts['alpha'] ?? undefined}, 'mode': ${this.opts['mode'] ?? undefined}, 'covariance': ${this.opts['covariance'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'enet_tol': ${this.opts['enet_tol'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'eps': ${this.opts['eps'] ?? undefined}, 'assume_centered': ${this.opts['assume_centered'] ?? undefined}}

ctor_GraphicalLasso = {k: v for k, v in ctor_GraphicalLasso.items() if v is not None}`

    await this._py
      .ex`bridgeGraphicalLasso[${this.id}] = GraphicalLasso(**ctor_GraphicalLasso)`

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

    await this._py.ex`del bridgeGraphicalLasso[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the Mean Squared Error between two covariance estimators.
   */
  async error_norm(opts: {
    /**
      The covariance to compare with.
     */
    comp_cov?: ArrayLike[]

    /**
      The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp_cov \- self.covariance_)`.

      @defaultValue `'frobenius'`
     */
    norm?: 'frobenius' | 'spectral'

    /**
      If `true` (default), the squared error norm is divided by n_features. If `false`, the squared error norm is not rescaled.

      @defaultValue `true`
     */
    scaling?: boolean

    /**
      Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

      @defaultValue `true`
     */
    squared?: boolean
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before error_norm()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_error_norm = {'comp_cov': np.array(${opts['comp_cov'] ?? undefined}) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${opts['norm'] ?? undefined}, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${opts['squared'] ?? undefined}}

pms_GraphicalLasso_error_norm = {k: v for k, v in pms_GraphicalLasso_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_error_norm = bridgeGraphicalLasso[${this.id}].error_norm(**pms_GraphicalLasso_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_error_norm.tolist() if hasattr(res_GraphicalLasso_error_norm, 'tolist') else res_GraphicalLasso_error_norm`
  }

  /**
    Fit the GraphicalLasso model to X.
   */
  async fit(opts: {
    /**
      Data from which to compute the covariance estimate.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GraphicalLasso_fit = {k: v for k, v in pms_GraphicalLasso_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_fit = bridgeGraphicalLasso[${this.id}].fit(**pms_GraphicalLasso_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_fit.tolist() if hasattr(res_GraphicalLasso_fit, 'tolist') else res_GraphicalLasso_fit`
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
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_GraphicalLasso_get_metadata_routing = {k: v for k, v in pms_GraphicalLasso_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_get_metadata_routing = bridgeGraphicalLasso[${this.id}].get_metadata_routing(**pms_GraphicalLasso_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_get_metadata_routing.tolist() if hasattr(res_GraphicalLasso_get_metadata_routing, 'tolist') else res_GraphicalLasso_get_metadata_routing`
  }

  /**
    Getter for the precision matrix.
   */
  async get_precision(opts: {
    /**
      The precision matrix associated to the current covariance object.
     */
    precision_?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before get_precision()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_get_precision = {'precision_': np.array(${opts['precision_'] ?? undefined}) if ${opts['precision_'] !== undefined} else None}

pms_GraphicalLasso_get_precision = {k: v for k, v in pms_GraphicalLasso_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_get_precision = bridgeGraphicalLasso[${this.id}].get_precision(**pms_GraphicalLasso_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_get_precision.tolist() if hasattr(res_GraphicalLasso_get_precision, 'tolist') else res_GraphicalLasso_get_precision`
  }

  /**
    Compute the squared Mahalanobis distances of given observations.
   */
  async mahalanobis(opts: {
    /**
      The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before mahalanobis()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_mahalanobis = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_GraphicalLasso_mahalanobis = {k: v for k, v in pms_GraphicalLasso_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_mahalanobis = bridgeGraphicalLasso[${this.id}].mahalanobis(**pms_GraphicalLasso_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_mahalanobis.tolist() if hasattr(res_GraphicalLasso_mahalanobis, 'tolist') else res_GraphicalLasso_mahalanobis`
  }

  /**
    Compute the log-likelihood of `X_test` under the estimated Gaussian model.

    The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location_` and `self.covariance_`.
   */
  async score(opts: {
    /**
      Test data of which we compute the likelihood, where `n_samples` is the number of samples and `n_features` is the number of features. `X_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).
     */
    X_test?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_score = {'X_test': np.array(${opts['X_test'] ?? undefined}) if ${opts['X_test'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GraphicalLasso_score = {k: v for k, v in pms_GraphicalLasso_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_score = bridgeGraphicalLasso[${this.id}].score(**pms_GraphicalLasso_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_score.tolist() if hasattr(res_GraphicalLasso_score, 'tolist') else res_GraphicalLasso_score`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `X_test` parameter in `score`.
     */
    X_test?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_set_score_request = {'X_test': ${opts['X_test'] ?? undefined}}

pms_GraphicalLasso_set_score_request = {k: v for k, v in pms_GraphicalLasso_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_set_score_request = bridgeGraphicalLasso[${this.id}].set_score_request(**pms_GraphicalLasso_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_set_score_request.tolist() if hasattr(res_GraphicalLasso_set_score_request, 'tolist') else res_GraphicalLasso_set_score_request`
  }

  /**
    Estimated location, i.e. the estimated mean.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_location_ = bridgeGraphicalLasso[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_location_.tolist() if hasattr(attr_GraphicalLasso_location_, 'tolist') else attr_GraphicalLasso_location_`
    })()
  }

  /**
    Estimated covariance matrix
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_covariance_ = bridgeGraphicalLasso[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_covariance_.tolist() if hasattr(attr_GraphicalLasso_covariance_, 'tolist') else attr_GraphicalLasso_covariance_`
    })()
  }

  /**
    Estimated pseudo inverse matrix.
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_precision_ = bridgeGraphicalLasso[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_precision_.tolist() if hasattr(attr_GraphicalLasso_precision_, 'tolist') else attr_GraphicalLasso_precision_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_n_iter_ = bridgeGraphicalLasso[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_n_iter_.tolist() if hasattr(attr_GraphicalLasso_n_iter_, 'tolist') else attr_GraphicalLasso_n_iter_`
    })()
  }

  /**
    The list of values of the objective function and the dual gap at each iteration. Returned only if return_costs is `true`.
   */
  get costs_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before accessing costs_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_costs_ = bridgeGraphicalLasso[${this.id}].costs_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_costs_.tolist() if hasattr(attr_GraphicalLasso_costs_, 'tolist') else attr_GraphicalLasso_costs_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_n_features_in_ = bridgeGraphicalLasso[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_n_features_in_.tolist() if hasattr(attr_GraphicalLasso_n_features_in_, 'tolist') else attr_GraphicalLasso_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_feature_names_in_ = bridgeGraphicalLasso[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_feature_names_in_.tolist() if hasattr(attr_GraphicalLasso_feature_names_in_, 'tolist') else attr_GraphicalLasso_feature_names_in_`
    })()
  }
}
