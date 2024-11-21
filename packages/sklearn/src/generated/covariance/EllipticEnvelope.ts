/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An object for detecting outliers in a Gaussian distributed dataset.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../outlier_detection.html#outlier-detection).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html)
 */
export class EllipticEnvelope {
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
      If `true`, the support of robust location and covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.

      @defaultValue `false`
     */
    assume_centered?: boolean

    /**
      The proportion of points to be included in the support of the raw MCD estimate. If `undefined`, the minimum value of support_fraction will be used within the algorithm: `(n_samples + n_features + 1) / 2 \* n_samples`. Range is (0, 1).
     */
    support_fraction?: number

    /**
      The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Range is (0, 0.5\].

      @defaultValue `0.1`
     */
    contamination?: number

    /**
      Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `EllipticEnvelope${crypto.randomUUID().split('-')[0]}`
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
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('EllipticEnvelope.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import EllipticEnvelope
try: bridgeEllipticEnvelope
except NameError: bridgeEllipticEnvelope = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_EllipticEnvelope = {'store_precision': ${this.opts['store_precision'] ?? undefined}, 'assume_centered': ${this.opts['assume_centered'] ?? undefined}, 'support_fraction': ${this.opts['support_fraction'] ?? undefined}, 'contamination': ${this.opts['contamination'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_EllipticEnvelope = {k: v for k, v in ctor_EllipticEnvelope.items() if v is not None}`

    await this._py
      .ex`bridgeEllipticEnvelope[${this.id}] = EllipticEnvelope(**ctor_EllipticEnvelope)`

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

    await this._py.ex`del bridgeEllipticEnvelope[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply a correction to raw Minimum Covariance Determinant estimates.

    Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](https://scikit-learn.org/stable/modules/generated/#rbb2ba44703ed-rvd).
   */
  async correct_covariance(opts: {
    /**
      The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.
     */
    data?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before correct_covariance()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_correct_covariance = {'data': np.array(${opts['data'] ?? undefined}) if ${opts['data'] !== undefined} else None}

pms_EllipticEnvelope_correct_covariance = {k: v for k, v in pms_EllipticEnvelope_correct_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_correct_covariance = bridgeEllipticEnvelope[${this.id}].correct_covariance(**pms_EllipticEnvelope_correct_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_correct_covariance.tolist() if hasattr(res_EllipticEnvelope_correct_covariance, 'tolist') else res_EllipticEnvelope_correct_covariance`
  }

  /**
    Compute the decision function of the given observations.
   */
  async decision_function(opts: {
    /**
      The data matrix.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_EllipticEnvelope_decision_function = {k: v for k, v in pms_EllipticEnvelope_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_decision_function = bridgeEllipticEnvelope[${this.id}].decision_function(**pms_EllipticEnvelope_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_decision_function.tolist() if hasattr(res_EllipticEnvelope_decision_function, 'tolist') else res_EllipticEnvelope_decision_function`
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
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before error_norm()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_error_norm = {'comp_cov': np.array(${opts['comp_cov'] ?? undefined}) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${opts['norm'] ?? undefined}, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${opts['squared'] ?? undefined}}

pms_EllipticEnvelope_error_norm = {k: v for k, v in pms_EllipticEnvelope_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_error_norm = bridgeEllipticEnvelope[${this.id}].error_norm(**pms_EllipticEnvelope_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_error_norm.tolist() if hasattr(res_EllipticEnvelope_error_norm, 'tolist') else res_EllipticEnvelope_error_norm`
  }

  /**
    Fit the EllipticEnvelope model.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_EllipticEnvelope_fit = {k: v for k, v in pms_EllipticEnvelope_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_fit = bridgeEllipticEnvelope[${this.id}].fit(**pms_EllipticEnvelope_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_fit.tolist() if hasattr(res_EllipticEnvelope_fit, 'tolist') else res_EllipticEnvelope_fit`
  }

  /**
    Perform fit on X and returns labels for X.

    Returns -1 for outliers and 1 for inliers.
   */
  async fit_predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Arguments to be passed to `fit`.
     */
    kwargs?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before fit_predict()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_fit_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_EllipticEnvelope_fit_predict = {k: v for k, v in pms_EllipticEnvelope_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_fit_predict = bridgeEllipticEnvelope[${this.id}].fit_predict(**pms_EllipticEnvelope_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_fit_predict.tolist() if hasattr(res_EllipticEnvelope_fit_predict, 'tolist') else res_EllipticEnvelope_fit_predict`
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
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_EllipticEnvelope_get_metadata_routing = {k: v for k, v in pms_EllipticEnvelope_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_get_metadata_routing = bridgeEllipticEnvelope[${this.id}].get_metadata_routing(**pms_EllipticEnvelope_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_get_metadata_routing.tolist() if hasattr(res_EllipticEnvelope_get_metadata_routing, 'tolist') else res_EllipticEnvelope_get_metadata_routing`
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
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before get_precision()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_get_precision = {'precision_': np.array(${opts['precision_'] ?? undefined}) if ${opts['precision_'] !== undefined} else None}

pms_EllipticEnvelope_get_precision = {k: v for k, v in pms_EllipticEnvelope_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_get_precision = bridgeEllipticEnvelope[${this.id}].get_precision(**pms_EllipticEnvelope_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_get_precision.tolist() if hasattr(res_EllipticEnvelope_get_precision, 'tolist') else res_EllipticEnvelope_get_precision`
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
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before mahalanobis()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_mahalanobis = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_EllipticEnvelope_mahalanobis = {k: v for k, v in pms_EllipticEnvelope_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_mahalanobis = bridgeEllipticEnvelope[${this.id}].mahalanobis(**pms_EllipticEnvelope_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_mahalanobis.tolist() if hasattr(res_EllipticEnvelope_mahalanobis, 'tolist') else res_EllipticEnvelope_mahalanobis`
  }

  /**
    Predict labels (1 inlier, -1 outlier) of X according to fitted model.
   */
  async predict(opts: {
    /**
      The data matrix.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_EllipticEnvelope_predict = {k: v for k, v in pms_EllipticEnvelope_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_predict = bridgeEllipticEnvelope[${this.id}].predict(**pms_EllipticEnvelope_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_predict.tolist() if hasattr(res_EllipticEnvelope_predict, 'tolist') else res_EllipticEnvelope_predict`
  }

  /**
    Re-weight raw Minimum Covariance Determinant estimates.

    Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](https://scikit-learn.org/stable/modules/generated/#rd2c89e63f1c9-rvdriessen).
   */
  async reweight_covariance(opts: {
    /**
      The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.
     */
    data?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before reweight_covariance()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_reweight_covariance = {'data': np.array(${opts['data'] ?? undefined}) if ${opts['data'] !== undefined} else None}

pms_EllipticEnvelope_reweight_covariance = {k: v for k, v in pms_EllipticEnvelope_reweight_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_reweight_covariance = bridgeEllipticEnvelope[${this.id}].reweight_covariance(**pms_EllipticEnvelope_reweight_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_reweight_covariance.tolist() if hasattr(res_EllipticEnvelope_reweight_covariance, 'tolist') else res_EllipticEnvelope_reweight_covariance`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike[]

    /**
      True labels for X.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('EllipticEnvelope must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_EllipticEnvelope_score = {k: v for k, v in pms_EllipticEnvelope_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_score = bridgeEllipticEnvelope[${this.id}].score(**pms_EllipticEnvelope_score)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_score.tolist() if hasattr(res_EllipticEnvelope_score, 'tolist') else res_EllipticEnvelope_score`
  }

  /**
    Compute the negative Mahalanobis distances.
   */
  async score_samples(opts: {
    /**
      The data matrix.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before score_samples()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_score_samples = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_EllipticEnvelope_score_samples = {k: v for k, v in pms_EllipticEnvelope_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_score_samples = bridgeEllipticEnvelope[${this.id}].score_samples(**pms_EllipticEnvelope_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_score_samples.tolist() if hasattr(res_EllipticEnvelope_score_samples, 'tolist') else res_EllipticEnvelope_score_samples`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_EllipticEnvelope_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_EllipticEnvelope_set_score_request = {k: v for k, v in pms_EllipticEnvelope_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EllipticEnvelope_set_score_request = bridgeEllipticEnvelope[${this.id}].set_score_request(**pms_EllipticEnvelope_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_EllipticEnvelope_set_score_request.tolist() if hasattr(res_EllipticEnvelope_set_score_request, 'tolist') else res_EllipticEnvelope_set_score_request`
  }

  /**
    Estimated robust location.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_location_ = bridgeEllipticEnvelope[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_location_.tolist() if hasattr(attr_EllipticEnvelope_location_, 'tolist') else attr_EllipticEnvelope_location_`
    })()
  }

  /**
    Estimated robust covariance matrix.
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_covariance_ = bridgeEllipticEnvelope[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_covariance_.tolist() if hasattr(attr_EllipticEnvelope_covariance_, 'tolist') else attr_EllipticEnvelope_covariance_`
    })()
  }

  /**
    Estimated pseudo inverse matrix. (stored only if store_precision is `true`)
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_precision_ = bridgeEllipticEnvelope[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_precision_.tolist() if hasattr(attr_EllipticEnvelope_precision_, 'tolist') else attr_EllipticEnvelope_precision_`
    })()
  }

  /**
    A mask of the observations that have been used to compute the robust estimates of location and shape.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing support_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_support_ = bridgeEllipticEnvelope[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_support_.tolist() if hasattr(attr_EllipticEnvelope_support_, 'tolist') else attr_EllipticEnvelope_support_`
    })()
  }

  /**
    Offset used to define the decision function from the raw scores. We have the relation: `decision_function \= score_samples \- offset_`. The offset depends on the contamination parameter and is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.
   */
  get offset_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_offset_ = bridgeEllipticEnvelope[${this.id}].offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_offset_.tolist() if hasattr(attr_EllipticEnvelope_offset_, 'tolist') else attr_EllipticEnvelope_offset_`
    })()
  }

  /**
    The raw robust estimated location before correction and re-weighting.
   */
  get raw_location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing raw_location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_raw_location_ = bridgeEllipticEnvelope[${this.id}].raw_location_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_raw_location_.tolist() if hasattr(attr_EllipticEnvelope_raw_location_, 'tolist') else attr_EllipticEnvelope_raw_location_`
    })()
  }

  /**
    The raw robust estimated covariance before correction and re-weighting.
   */
  get raw_covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing raw_covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_raw_covariance_ = bridgeEllipticEnvelope[${this.id}].raw_covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_raw_covariance_.tolist() if hasattr(attr_EllipticEnvelope_raw_covariance_, 'tolist') else attr_EllipticEnvelope_raw_covariance_`
    })()
  }

  /**
    A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.
   */
  get raw_support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing raw_support_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_raw_support_ = bridgeEllipticEnvelope[${this.id}].raw_support_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_raw_support_.tolist() if hasattr(attr_EllipticEnvelope_raw_support_, 'tolist') else attr_EllipticEnvelope_raw_support_`
    })()
  }

  /**
    Mahalanobis distances of the training set (on which [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.covariance.EllipticEnvelope.fit "sklearn.covariance.EllipticEnvelope.fit") is called) observations.
   */
  get dist_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing dist_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_dist_ = bridgeEllipticEnvelope[${this.id}].dist_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_dist_.tolist() if hasattr(attr_EllipticEnvelope_dist_, 'tolist') else attr_EllipticEnvelope_dist_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_n_features_in_ = bridgeEllipticEnvelope[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_n_features_in_.tolist() if hasattr(attr_EllipticEnvelope_n_features_in_, 'tolist') else attr_EllipticEnvelope_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This EllipticEnvelope instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EllipticEnvelope must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_EllipticEnvelope_feature_names_in_ = bridgeEllipticEnvelope[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_EllipticEnvelope_feature_names_in_.tolist() if hasattr(attr_EllipticEnvelope_feature_names_in_, 'tolist') else attr_EllipticEnvelope_feature_names_in_`
    })()
  }
}
