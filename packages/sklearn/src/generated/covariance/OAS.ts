/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Oracle Approximating Shrinkage Estimator.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#shrunk-covariance).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.OAS.html)
 */
export class OAS {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Specify if the estimated precision is stored.

      @defaultValue `true`
     */
    store_precision?: boolean

    /**
      If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.

      @defaultValue `false`
     */
    assume_centered?: boolean
  }) {
    this.id = `OAS${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('OAS.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import OAS
try: bridgeOAS
except NameError: bridgeOAS = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_OAS = {'store_precision': ${this.opts['store_precision'] ?? undefined}, 'assume_centered': ${this.opts['assume_centered'] ?? undefined}}

ctor_OAS = {k: v for k, v in ctor_OAS.items() if v is not None}`

    await this._py.ex`bridgeOAS[${this.id}] = OAS(**ctor_OAS)`

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

    await this._py.ex`del bridgeOAS[${this.id}]`

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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before error_norm()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_error_norm = {'comp_cov': np.array(${opts['comp_cov'] ?? undefined}) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${opts['norm'] ?? undefined}, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${opts['squared'] ?? undefined}}

pms_OAS_error_norm = {k: v for k, v in pms_OAS_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_error_norm = bridgeOAS[${this.id}].error_norm(**pms_OAS_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_error_norm.tolist() if hasattr(res_OAS_error_norm, 'tolist') else res_OAS_error_norm`
  }

  /**
    Fit the Oracle Approximating Shrinkage covariance model to X.
   */
  async fit(opts: {
    /**
      Training data, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OAS_fit = {k: v for k, v in pms_OAS_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_OAS_fit = bridgeOAS[${this.id}].fit(**pms_OAS_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_fit.tolist() if hasattr(res_OAS_fit, 'tolist') else res_OAS_fit`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_OAS_get_metadata_routing = {k: v for k, v in pms_OAS_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_get_metadata_routing = bridgeOAS[${this.id}].get_metadata_routing(**pms_OAS_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_get_metadata_routing.tolist() if hasattr(res_OAS_get_metadata_routing, 'tolist') else res_OAS_get_metadata_routing`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before get_precision()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_get_precision = {'precision_': np.array(${opts['precision_'] ?? undefined}) if ${opts['precision_'] !== undefined} else None}

pms_OAS_get_precision = {k: v for k, v in pms_OAS_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_get_precision = bridgeOAS[${this.id}].get_precision(**pms_OAS_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_get_precision.tolist() if hasattr(res_OAS_get_precision, 'tolist') else res_OAS_get_precision`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before mahalanobis()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_mahalanobis = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OAS_mahalanobis = {k: v for k, v in pms_OAS_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_mahalanobis = bridgeOAS[${this.id}].mahalanobis(**pms_OAS_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_mahalanobis.tolist() if hasattr(res_OAS_mahalanobis, 'tolist') else res_OAS_mahalanobis`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_score = {'X_test': np.array(${opts['X_test'] ?? undefined}) if ${opts['X_test'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OAS_score = {k: v for k, v in pms_OAS_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_score = bridgeOAS[${this.id}].score(**pms_OAS_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_score.tolist() if hasattr(res_OAS_score, 'tolist') else res_OAS_score`
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
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_OAS_set_score_request = {'X_test': ${opts['X_test'] ?? undefined}}

pms_OAS_set_score_request = {k: v for k, v in pms_OAS_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OAS_set_score_request = bridgeOAS[${this.id}].set_score_request(**pms_OAS_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_OAS_set_score_request.tolist() if hasattr(res_OAS_set_score_request, 'tolist') else res_OAS_set_score_request`
  }

  /**
    Estimated covariance matrix.
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing covariance_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OAS_covariance_ = bridgeOAS[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_covariance_.tolist() if hasattr(attr_OAS_covariance_, 'tolist') else attr_OAS_covariance_`
    })()
  }

  /**
    Estimated location, i.e. the estimated mean.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing location_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_OAS_location_ = bridgeOAS[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_location_.tolist() if hasattr(attr_OAS_location_, 'tolist') else attr_OAS_location_`
    })()
  }

  /**
    Estimated pseudo inverse matrix. (stored only if store_precision is `true`)
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing precision_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_OAS_precision_ = bridgeOAS[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_precision_.tolist() if hasattr(attr_OAS_precision_, 'tolist') else attr_OAS_precision_`
    })()
  }

  /**
    coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].
   */
  get shrinkage_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing shrinkage_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_OAS_shrinkage_ = bridgeOAS[${this.id}].shrinkage_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_shrinkage_.tolist() if hasattr(attr_OAS_shrinkage_, 'tolist') else attr_OAS_shrinkage_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OAS_n_features_in_ = bridgeOAS[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_n_features_in_.tolist() if hasattr(attr_OAS_n_features_in_, 'tolist') else attr_OAS_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OAS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OAS must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OAS_feature_names_in_ = bridgeOAS[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OAS_feature_names_in_.tolist() if hasattr(attr_OAS_feature_names_in_, 'tolist') else attr_OAS_feature_names_in_`
    })()
  }
}
