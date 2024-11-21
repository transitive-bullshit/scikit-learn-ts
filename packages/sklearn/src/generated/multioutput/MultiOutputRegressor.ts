/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi target regression.

  This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html)
 */
export class MultiOutputRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      An estimator object implementing [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit) and [predict](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict).
     */
    estimator?: any

    /**
      The number of jobs to run in parallel. [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputRegressor.fit "sklearn.multioutput.MultiOutputRegressor.fit"), [`predict`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputRegressor.predict "sklearn.multioutput.MultiOutputRegressor.predict") and [`partial_fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.multioutput.MultiOutputRegressor.partial_fit "sklearn.multioutput.MultiOutputRegressor.partial_fit") (if supported by the passed estimator) will be parallelized for each target.

      When individual estimators are fast to train or predict, using `n_jobs > 1` can result in slower performance due to the parallelism overhead.

      `undefined` means `1` unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `MultiOutputRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MultiOutputRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multioutput import MultiOutputRegressor
try: bridgeMultiOutputRegressor
except NameError: bridgeMultiOutputRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MultiOutputRegressor = {'estimator': ${this.opts['estimator'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_MultiOutputRegressor = {k: v for k, v in ctor_MultiOutputRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeMultiOutputRegressor[${this.id}] = MultiOutputRegressor(**ctor_MultiOutputRegressor)`

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

    await this._py.ex`del bridgeMultiOutputRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to data, separately for each output variable.
   */
  async fit(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Multi-output targets. An indicator matrix turns on multilabel estimation.
     */
    y?: ArrayLike | SparseMatrix[]

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters passed to the `estimator.fit` method of each step.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputRegressor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_MultiOutputRegressor_fit = {k: v for k, v in pms_MultiOutputRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_fit = bridgeMultiOutputRegressor[${this.id}].fit(**pms_MultiOutputRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_fit.tolist() if hasattr(res_MultiOutputRegressor_fit, 'tolist') else res_MultiOutputRegressor_fit`
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
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_MultiOutputRegressor_get_metadata_routing = {k: v for k, v in pms_MultiOutputRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_get_metadata_routing = bridgeMultiOutputRegressor[${this.id}].get_metadata_routing(**pms_MultiOutputRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_get_metadata_routing.tolist() if hasattr(res_MultiOutputRegressor_get_metadata_routing, 'tolist') else res_MultiOutputRegressor_get_metadata_routing`
  }

  /**
    Incrementally fit the model to data, for each output variable.
   */
  async partial_fit(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Multi-output targets.
     */
    y?: ArrayLike | SparseMatrix[]

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters passed to the `estimator.partial_fit` method of each sub-estimator.

      Only available if `enable_metadata_routing=True`. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing).
     */
    partial_fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_partial_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'partial_fit_params': ${opts['partial_fit_params'] ?? undefined}}

pms_MultiOutputRegressor_partial_fit = {k: v for k, v in pms_MultiOutputRegressor_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_partial_fit = bridgeMultiOutputRegressor[${this.id}].partial_fit(**pms_MultiOutputRegressor_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_partial_fit.tolist() if hasattr(res_MultiOutputRegressor_partial_fit, 'tolist') else res_MultiOutputRegressor_partial_fit`
  }

  /**
    Predict multi-output variable using model for each target variable.
   */
  async predict(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputRegressor must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_MultiOutputRegressor_predict = {k: v for k, v in pms_MultiOutputRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_predict = bridgeMultiOutputRegressor[${this.id}].predict(**pms_MultiOutputRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_predict.tolist() if hasattr(res_MultiOutputRegressor_predict, 'tolist') else res_MultiOutputRegressor_predict`
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
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputRegressor must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_MultiOutputRegressor_score = {k: v for k, v in pms_MultiOutputRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_score = bridgeMultiOutputRegressor[${this.id}].score(**pms_MultiOutputRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_score.tolist() if hasattr(res_MultiOutputRegressor_score, 'tolist') else res_MultiOutputRegressor_score`
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
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiOutputRegressor_set_fit_request = {k: v for k, v in pms_MultiOutputRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_set_fit_request = bridgeMultiOutputRegressor[${this.id}].set_fit_request(**pms_MultiOutputRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_set_fit_request.tolist() if hasattr(res_MultiOutputRegressor_set_fit_request, 'tolist') else res_MultiOutputRegressor_set_fit_request`
  }

  /**
    Request metadata passed to the `partial_fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_partial_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `partial_fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before set_partial_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_set_partial_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiOutputRegressor_set_partial_fit_request = {k: v for k, v in pms_MultiOutputRegressor_set_partial_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_set_partial_fit_request = bridgeMultiOutputRegressor[${this.id}].set_partial_fit_request(**pms_MultiOutputRegressor_set_partial_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_set_partial_fit_request.tolist() if hasattr(res_MultiOutputRegressor_set_partial_fit_request, 'tolist') else res_MultiOutputRegressor_set_partial_fit_request`
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
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiOutputRegressor_set_score_request = {k: v for k, v in pms_MultiOutputRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputRegressor_set_score_request = bridgeMultiOutputRegressor[${this.id}].set_score_request(**pms_MultiOutputRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputRegressor_set_score_request.tolist() if hasattr(res_MultiOutputRegressor_set_score_request, 'tolist') else res_MultiOutputRegressor_set_score_request`
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputRegressor_estimators_ = bridgeMultiOutputRegressor[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputRegressor_estimators_.tolist() if hasattr(attr_MultiOutputRegressor_estimators_, 'tolist') else attr_MultiOutputRegressor_estimators_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputRegressor_n_features_in_ = bridgeMultiOutputRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputRegressor_n_features_in_.tolist() if hasattr(attr_MultiOutputRegressor_n_features_in_, 'tolist') else attr_MultiOutputRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputRegressor_feature_names_in_ = bridgeMultiOutputRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputRegressor_feature_names_in_.tolist() if hasattr(attr_MultiOutputRegressor_feature_names_in_, 'tolist') else attr_MultiOutputRegressor_feature_names_in_`
    })()
  }
}
