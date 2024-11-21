/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Prediction voting regressor for unfitted estimators.

  A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../ensemble.html#voting-regressor).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)
 */
export class VotingRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Invoking the `fit` method on the `VotingRegressor` will fit clones of those original estimators that will be stored in the class attribute `self.estimators_`. An estimator can be set to `'drop'` using [`set_params`](https://scikit-learn.org/stable/modules/generated/#sklearn.ensemble.VotingRegressor.set_params "sklearn.ensemble.VotingRegressor.set_params").
     */
    estimators?: any

    /**
      Sequence of weights (`float` or `int`) to weight the occurrences of predicted values before averaging. Uses uniform weights if `undefined`.
     */
    weights?: ArrayLike

    /**
      The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      If `true`, the time elapsed while fitting will be printed as it is completed.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `VotingRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('VotingRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import VotingRegressor
try: bridgeVotingRegressor
except NameError: bridgeVotingRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_VotingRegressor = {'estimators': ${this.opts['estimators'] ?? undefined}, 'weights': np.array(${this.opts['weights'] ?? undefined}) if ${this.opts['weights'] !== undefined} else None, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_VotingRegressor = {k: v for k, v in ctor_VotingRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeVotingRegressor[${this.id}] = VotingRegressor(**ctor_VotingRegressor)`

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

    await this._py.ex`del bridgeVotingRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the estimators.
   */
  async fit(opts: {
    /**
      Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters to pass to the underlying estimators.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_VotingRegressor_fit = {k: v for k, v in pms_VotingRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_fit = bridgeVotingRegressor[${this.id}].fit(**pms_VotingRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_fit.tolist() if hasattr(res_VotingRegressor_fit, 'tolist') else res_VotingRegressor_fit`
  }

  /**
    Return class labels or probabilities for each estimator.

    Return predictions for X for each estimator.
   */
  async fit_transform(opts: {
    /**
      Input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: NDArray

    /**
      Additional fit parameters.
     */
    fit_params?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_VotingRegressor_fit_transform = {k: v for k, v in pms_VotingRegressor_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_fit_transform = bridgeVotingRegressor[${this.id}].fit_transform(**pms_VotingRegressor_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_fit_transform.tolist() if hasattr(res_VotingRegressor_fit_transform, 'tolist') else res_VotingRegressor_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Not used, present here for API consistency by convention.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_VotingRegressor_get_feature_names_out = {k: v for k, v in pms_VotingRegressor_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_get_feature_names_out = bridgeVotingRegressor[${this.id}].get_feature_names_out(**pms_VotingRegressor_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_get_feature_names_out.tolist() if hasattr(res_VotingRegressor_get_feature_names_out, 'tolist') else res_VotingRegressor_get_feature_names_out`
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
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_VotingRegressor_get_metadata_routing = {k: v for k, v in pms_VotingRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_get_metadata_routing = bridgeVotingRegressor[${this.id}].get_metadata_routing(**pms_VotingRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_get_metadata_routing.tolist() if hasattr(res_VotingRegressor_get_metadata_routing, 'tolist') else res_VotingRegressor_get_metadata_routing`
  }

  /**
    Predict regression target for X.

    The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.
   */
  async predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VotingRegressor_predict = {k: v for k, v in pms_VotingRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_predict = bridgeVotingRegressor[${this.id}].predict(**pms_VotingRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_predict.tolist() if hasattr(res_VotingRegressor_predict, 'tolist') else res_VotingRegressor_predict`
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
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_VotingRegressor_score = {k: v for k, v in pms_VotingRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_score = bridgeVotingRegressor[${this.id}].score(**pms_VotingRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_score.tolist() if hasattr(res_VotingRegressor_score, 'tolist') else res_VotingRegressor_score`
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
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_VotingRegressor_set_fit_request = {k: v for k, v in pms_VotingRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_set_fit_request = bridgeVotingRegressor[${this.id}].set_fit_request(**pms_VotingRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_set_fit_request.tolist() if hasattr(res_VotingRegressor_set_fit_request, 'tolist') else res_VotingRegressor_set_fit_request`
  }

  /**
    Set output container.

    See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_VotingRegressor_set_output = {k: v for k, v in pms_VotingRegressor_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_set_output = bridgeVotingRegressor[${this.id}].set_output(**pms_VotingRegressor_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_set_output.tolist() if hasattr(res_VotingRegressor_set_output, 'tolist') else res_VotingRegressor_set_output`
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
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_VotingRegressor_set_score_request = {k: v for k, v in pms_VotingRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_set_score_request = bridgeVotingRegressor[${this.id}].set_score_request(**pms_VotingRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_set_score_request.tolist() if hasattr(res_VotingRegressor_set_score_request, 'tolist') else res_VotingRegressor_set_score_request`
  }

  /**
    Return predictions for X for each estimator.
   */
  async transform(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('VotingRegressor must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_VotingRegressor_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VotingRegressor_transform = {k: v for k, v in pms_VotingRegressor_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VotingRegressor_transform = bridgeVotingRegressor[${this.id}].transform(**pms_VotingRegressor_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VotingRegressor_transform.tolist() if hasattr(res_VotingRegressor_transform, 'tolist') else res_VotingRegressor_transform`
  }

  /**
    The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingRegressor_estimators_ = bridgeVotingRegressor[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingRegressor_estimators_.tolist() if hasattr(attr_VotingRegressor_estimators_, 'tolist') else attr_VotingRegressor_estimators_`
    })()
  }

  /**
    Attribute to access any fitted sub-estimators by name.
   */
  get named_estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before accessing named_estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingRegressor_named_estimators_ = bridgeVotingRegressor[${this.id}].named_estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingRegressor_named_estimators_.tolist() if hasattr(attr_VotingRegressor_named_estimators_, 'tolist') else attr_VotingRegressor_named_estimators_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This VotingRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'VotingRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VotingRegressor_feature_names_in_ = bridgeVotingRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_VotingRegressor_feature_names_in_.tolist() if hasattr(attr_VotingRegressor_feature_names_in_, 'tolist') else attr_VotingRegressor_feature_names_in_`
    })()
  }
}
