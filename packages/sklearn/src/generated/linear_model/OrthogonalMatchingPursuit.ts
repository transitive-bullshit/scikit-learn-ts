/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Orthogonal Matching Pursuit model (OMP).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../linear_model.html#omp).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuit.html)
 */
export class OrthogonalMatchingPursuit {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Desired number of non-zero entries in the solution. Ignored if `tol` is set. When `undefined` and `tol` is also `undefined`, this value is either set to 10% of `n_features` or 1, whichever is greater.
     */
    n_nonzero_coefs?: number

    /**
      Maximum squared norm of the residual. If not `undefined`, overrides n_nonzero_coefs.
     */
    tol?: number

    /**
      Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      Whether to use a precomputed Gram and Xy matrix to speed up calculations. Improves performance when [n_targets](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_targets) or [n_samples](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_samples) is very large. Note that if you already have such matrices, you can pass them directly to the fit method.

      @defaultValue `'auto'`
     */
    precompute?: 'auto' | boolean
  }) {
    this.id = `OrthogonalMatchingPursuit${crypto.randomUUID().split('-')[0]}`
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
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OrthogonalMatchingPursuit.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import OrthogonalMatchingPursuit
try: bridgeOrthogonalMatchingPursuit
except NameError: bridgeOrthogonalMatchingPursuit = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_OrthogonalMatchingPursuit = {'n_nonzero_coefs': ${this.opts['n_nonzero_coefs'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'precompute': ${this.opts['precompute'] ?? undefined}}

ctor_OrthogonalMatchingPursuit = {k: v for k, v in ctor_OrthogonalMatchingPursuit.items() if v is not None}`

    await this._py
      .ex`bridgeOrthogonalMatchingPursuit[${this.id}] = OrthogonalMatchingPursuit(**ctor_OrthogonalMatchingPursuit)`

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

    await this._py.ex`del bridgeOrthogonalMatchingPursuit[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

    /**
      Target values. Will be cast to X’s dtype if necessary.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OrthogonalMatchingPursuit must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_OrthogonalMatchingPursuit_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_OrthogonalMatchingPursuit_fit = {k: v for k, v in pms_OrthogonalMatchingPursuit_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuit_fit = bridgeOrthogonalMatchingPursuit[${this.id}].fit(**pms_OrthogonalMatchingPursuit_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuit_fit.tolist() if hasattr(res_OrthogonalMatchingPursuit_fit, 'tolist') else res_OrthogonalMatchingPursuit_fit`
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
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrthogonalMatchingPursuit_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_OrthogonalMatchingPursuit_get_metadata_routing = {k: v for k, v in pms_OrthogonalMatchingPursuit_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuit_get_metadata_routing = bridgeOrthogonalMatchingPursuit[${this.id}].get_metadata_routing(**pms_OrthogonalMatchingPursuit_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuit_get_metadata_routing.tolist() if hasattr(res_OrthogonalMatchingPursuit_get_metadata_routing, 'tolist') else res_OrthogonalMatchingPursuit_get_metadata_routing`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrthogonalMatchingPursuit_predict = {'X': ${opts['X'] ?? undefined}}

pms_OrthogonalMatchingPursuit_predict = {k: v for k, v in pms_OrthogonalMatchingPursuit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuit_predict = bridgeOrthogonalMatchingPursuit[${this.id}].predict(**pms_OrthogonalMatchingPursuit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuit_predict.tolist() if hasattr(res_OrthogonalMatchingPursuit_predict, 'tolist') else res_OrthogonalMatchingPursuit_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.
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
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrthogonalMatchingPursuit_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_OrthogonalMatchingPursuit_score = {k: v for k, v in pms_OrthogonalMatchingPursuit_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuit_score = bridgeOrthogonalMatchingPursuit[${this.id}].score(**pms_OrthogonalMatchingPursuit_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuit_score.tolist() if hasattr(res_OrthogonalMatchingPursuit_score, 'tolist') else res_OrthogonalMatchingPursuit_score`
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
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrthogonalMatchingPursuit_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_OrthogonalMatchingPursuit_set_score_request = {k: v for k, v in pms_OrthogonalMatchingPursuit_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrthogonalMatchingPursuit_set_score_request = bridgeOrthogonalMatchingPursuit[${this.id}].set_score_request(**pms_OrthogonalMatchingPursuit_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_OrthogonalMatchingPursuit_set_score_request.tolist() if hasattr(res_OrthogonalMatchingPursuit_set_score_request, 'tolist') else res_OrthogonalMatchingPursuit_set_score_request`
  }

  /**
    Parameter vector (w in the formula).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_coef_ = bridgeOrthogonalMatchingPursuit[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_coef_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_coef_, 'tolist') else attr_OrthogonalMatchingPursuit_coef_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_intercept_ = bridgeOrthogonalMatchingPursuit[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_intercept_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_intercept_, 'tolist') else attr_OrthogonalMatchingPursuit_intercept_`
    })()
  }

  /**
    Number of active features across every target.
   */
  get n_iter_(): Promise<number | ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_n_iter_ = bridgeOrthogonalMatchingPursuit[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_n_iter_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_n_iter_, 'tolist') else attr_OrthogonalMatchingPursuit_n_iter_`
    })()
  }

  /**
    The number of non-zero coefficients in the solution or `undefined` when `tol` is set. If `n_nonzero_coefs` is `undefined` and `tol` is `undefined` this value is either set to 10% of `n_features` or 1, whichever is greater.
   */
  get n_nonzero_coefs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing n_nonzero_coefs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_n_nonzero_coefs_ = bridgeOrthogonalMatchingPursuit[${this.id}].n_nonzero_coefs_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_n_nonzero_coefs_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_n_nonzero_coefs_, 'tolist') else attr_OrthogonalMatchingPursuit_n_nonzero_coefs_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_n_features_in_ = bridgeOrthogonalMatchingPursuit[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_n_features_in_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_n_features_in_, 'tolist') else attr_OrthogonalMatchingPursuit_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OrthogonalMatchingPursuit instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrthogonalMatchingPursuit must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrthogonalMatchingPursuit_feature_names_in_ = bridgeOrthogonalMatchingPursuit[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrthogonalMatchingPursuit_feature_names_in_.tolist() if hasattr(attr_OrthogonalMatchingPursuit_feature_names_in_, 'tolist') else attr_OrthogonalMatchingPursuit_feature_names_in_`
    })()
  }
}
