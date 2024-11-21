/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Maximum likelihood covariance estimator.

  Read more in the [User Guide](../covariance.html#covariance).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EmpiricalCovariance.html)
 */
export class EmpiricalCovariance {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Specifies if the estimated precision is stored.

      @defaultValue `true`
     */
    store_precision?: boolean

    /**
      If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data are centered before computation.

      @defaultValue `false`
     */
    assume_centered?: boolean
  }) {
    this.id = `EmpiricalCovariance${crypto.randomUUID().split('-')[0]}`
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
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'EmpiricalCovariance.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import EmpiricalCovariance
try: bridgeEmpiricalCovariance
except NameError: bridgeEmpiricalCovariance = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_EmpiricalCovariance = {'store_precision': ${this.opts['store_precision'] ?? undefined}, 'assume_centered': ${this.opts['assume_centered'] ?? undefined}}

ctor_EmpiricalCovariance = {k: v for k, v in ctor_EmpiricalCovariance.items() if v is not None}`

    await this._py
      .ex`bridgeEmpiricalCovariance[${this.id}] = EmpiricalCovariance(**ctor_EmpiricalCovariance)`

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

    await this._py.ex`del bridgeEmpiricalCovariance[${this.id}]`

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
      The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

      @defaultValue `'frobenius'`
     */
    norm?: 'frobenius' | 'spectral'

    /**
      If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

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
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before error_norm()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_error_norm = {'comp_cov': np.array(${opts['comp_cov'] ?? undefined}) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${opts['norm'] ?? undefined}, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${opts['squared'] ?? undefined}}

pms_EmpiricalCovariance_error_norm = {k: v for k, v in pms_EmpiricalCovariance_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_error_norm = bridgeEmpiricalCovariance[${this.id}].error_norm(**pms_EmpiricalCovariance_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_error_norm.tolist() if hasattr(res_EmpiricalCovariance_error_norm, 'tolist') else res_EmpiricalCovariance_error_norm`
  }

  /**
    Fit the maximum likelihood covariance estimator to X.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EmpiricalCovariance must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_EmpiricalCovariance_fit = {k: v for k, v in pms_EmpiricalCovariance_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_fit = bridgeEmpiricalCovariance[${this.id}].fit(**pms_EmpiricalCovariance_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_fit.tolist() if hasattr(res_EmpiricalCovariance_fit, 'tolist') else res_EmpiricalCovariance_fit`
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
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_EmpiricalCovariance_get_metadata_routing = {k: v for k, v in pms_EmpiricalCovariance_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_get_metadata_routing = bridgeEmpiricalCovariance[${this.id}].get_metadata_routing(**pms_EmpiricalCovariance_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_get_metadata_routing.tolist() if hasattr(res_EmpiricalCovariance_get_metadata_routing, 'tolist') else res_EmpiricalCovariance_get_metadata_routing`
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
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before get_precision()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_get_precision = {'precision_': np.array(${opts['precision_'] ?? undefined}) if ${opts['precision_'] !== undefined} else None}

pms_EmpiricalCovariance_get_precision = {k: v for k, v in pms_EmpiricalCovariance_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_get_precision = bridgeEmpiricalCovariance[${this.id}].get_precision(**pms_EmpiricalCovariance_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_get_precision.tolist() if hasattr(res_EmpiricalCovariance_get_precision, 'tolist') else res_EmpiricalCovariance_get_precision`
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
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before mahalanobis()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_mahalanobis = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_EmpiricalCovariance_mahalanobis = {k: v for k, v in pms_EmpiricalCovariance_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_mahalanobis = bridgeEmpiricalCovariance[${this.id}].mahalanobis(**pms_EmpiricalCovariance_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_mahalanobis.tolist() if hasattr(res_EmpiricalCovariance_mahalanobis, 'tolist') else res_EmpiricalCovariance_mahalanobis`
  }

  /**
    Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

    The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.
   */
  async score(opts: {
    /**
      Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).
     */
    X_test?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EmpiricalCovariance must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_score = {'X_test': np.array(${opts['X_test'] ?? undefined}) if ${opts['X_test'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_EmpiricalCovariance_score = {k: v for k, v in pms_EmpiricalCovariance_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_score = bridgeEmpiricalCovariance[${this.id}].score(**pms_EmpiricalCovariance_score)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_score.tolist() if hasattr(res_EmpiricalCovariance_score, 'tolist') else res_EmpiricalCovariance_score`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `X\_test` parameter in `score`.
     */
    X_test?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EmpiricalCovariance_set_score_request = {'X_test': ${opts['X_test'] ?? undefined}}

pms_EmpiricalCovariance_set_score_request = {k: v for k, v in pms_EmpiricalCovariance_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EmpiricalCovariance_set_score_request = bridgeEmpiricalCovariance[${this.id}].set_score_request(**pms_EmpiricalCovariance_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_EmpiricalCovariance_set_score_request.tolist() if hasattr(res_EmpiricalCovariance_set_score_request, 'tolist') else res_EmpiricalCovariance_set_score_request`
  }

  /**
    Estimated location, i.e. the estimated mean.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before accessing location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EmpiricalCovariance_location_ = bridgeEmpiricalCovariance[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_EmpiricalCovariance_location_.tolist() if hasattr(attr_EmpiricalCovariance_location_, 'tolist') else attr_EmpiricalCovariance_location_`
    })()
  }

  /**
    Estimated covariance matrix
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EmpiricalCovariance_covariance_ = bridgeEmpiricalCovariance[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_EmpiricalCovariance_covariance_.tolist() if hasattr(attr_EmpiricalCovariance_covariance_, 'tolist') else attr_EmpiricalCovariance_covariance_`
    })()
  }

  /**
    Estimated pseudo-inverse matrix. (stored only if store\_precision is `true`)
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before accessing precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EmpiricalCovariance_precision_ = bridgeEmpiricalCovariance[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_EmpiricalCovariance_precision_.tolist() if hasattr(attr_EmpiricalCovariance_precision_, 'tolist') else attr_EmpiricalCovariance_precision_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EmpiricalCovariance_n_features_in_ = bridgeEmpiricalCovariance[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_EmpiricalCovariance_n_features_in_.tolist() if hasattr(attr_EmpiricalCovariance_n_features_in_, 'tolist') else attr_EmpiricalCovariance_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EmpiricalCovariance instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EmpiricalCovariance must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EmpiricalCovariance_feature_names_in_ = bridgeEmpiricalCovariance[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_EmpiricalCovariance_feature_names_in_.tolist() if hasattr(attr_EmpiricalCovariance_feature_names_in_, 'tolist') else attr_EmpiricalCovariance_feature_names_in_`
    })()
  }
}
