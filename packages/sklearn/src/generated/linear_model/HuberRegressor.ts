/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  L2-regularized linear regression model that is robust to outliers.

  The Huber Regressor optimizes the squared loss for the samples where `|(y \- Xw \- c) / sigma| < epsilon` and the absolute loss for the samples where `|(y \- Xw \- c) / sigma| > epsilon`, where the model coefficients `w`, the intercept `c` and the scale `sigma` are parameters to be optimized. The parameter sigma makes sure that if y is scaled up or down by a certain factor, one does not need to rescale epsilon to achieve the same robustness. Note that this does not take into account the fact that the different features of X may be of different scales.

  The Huber loss function has the advantage of not being heavily influenced by the outliers while not completely ignoring their effect.

  Read more in the [User Guide](../linear_model.html#huber-regression)

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.HuberRegressor.html)
 */
export class HuberRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The parameter epsilon controls the number of samples that should be classified as outliers. The smaller the epsilon, the more robust it is to outliers. Epsilon must be in the range `\[1, inf)`.

      @defaultValue `1.35`
     */
    epsilon?: number

    /**
      Maximum number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` should run for.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      Strength of the squared L2 regularization. Note that the penalty is equal to `alpha \* ||w||^2`. Must be in the range `\[0, inf)`.

      @defaultValue `0.0001`
     */
    alpha?: number

    /**
      This is useful if the stored attributes of a previously used model has to be reused. If set to `false`, then the coefficients will be rewritten for every call to fit. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      Whether or not to fit the intercept. This can be set to `false` if the data is already centered around the origin.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The iteration will stop when `max{|proj g\_i | i \= 1, ..., n}` <= `tol` where pg\_i is the i-th component of the projected gradient.

      @defaultValue `0.00001`
     */
    tol?: number
  }) {
    this.id = `HuberRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('HuberRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import HuberRegressor
try: bridgeHuberRegressor
except NameError: bridgeHuberRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_HuberRegressor = {'epsilon': ${
      this.opts['epsilon'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }}

ctor_HuberRegressor = {k: v for k, v in ctor_HuberRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeHuberRegressor[${this.id}] = HuberRegressor(**ctor_HuberRegressor)`

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

    await this._py.ex`del bridgeHuberRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Target vector relative to X.
     */
    y?: ArrayLike

    /**
      Weight given to each sample.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HuberRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_HuberRegressor_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_HuberRegressor_fit = {k: v for k, v in pms_HuberRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_fit = bridgeHuberRegressor[${this.id}].fit(**pms_HuberRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_fit.tolist() if hasattr(res_HuberRegressor_fit, 'tolist') else res_HuberRegressor_fit`
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
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_HuberRegressor_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_HuberRegressor_get_metadata_routing = {k: v for k, v in pms_HuberRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_get_metadata_routing = bridgeHuberRegressor[${this.id}].get_metadata_routing(**pms_HuberRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_get_metadata_routing.tolist() if hasattr(res_HuberRegressor_get_metadata_routing, 'tolist') else res_HuberRegressor_get_metadata_routing`
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
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HuberRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_HuberRegressor_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HuberRegressor_predict = {k: v for k, v in pms_HuberRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_predict = bridgeHuberRegressor[${this.id}].predict(**pms_HuberRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_predict.tolist() if hasattr(res_HuberRegressor_predict, 'tolist') else res_HuberRegressor_predict`
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
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HuberRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_HuberRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_HuberRegressor_score = {k: v for k, v in pms_HuberRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_score = bridgeHuberRegressor[${this.id}].score(**pms_HuberRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_score.tolist() if hasattr(res_HuberRegressor_score, 'tolist') else res_HuberRegressor_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_HuberRegressor_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_HuberRegressor_set_fit_request = {k: v for k, v in pms_HuberRegressor_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_set_fit_request = bridgeHuberRegressor[${this.id}].set_fit_request(**pms_HuberRegressor_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_set_fit_request.tolist() if hasattr(res_HuberRegressor_set_fit_request, 'tolist') else res_HuberRegressor_set_fit_request`
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
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HuberRegressor_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_HuberRegressor_set_score_request = {k: v for k, v in pms_HuberRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HuberRegressor_set_score_request = bridgeHuberRegressor[${this.id}].set_score_request(**pms_HuberRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_HuberRegressor_set_score_request.tolist() if hasattr(res_HuberRegressor_set_score_request, 'tolist') else res_HuberRegressor_set_score_request`
  }

  /**
    Features got by optimizing the L2-regularized Huber loss.
   */
  get coef_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HuberRegressor must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_coef_ = bridgeHuberRegressor[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_coef_.tolist() if hasattr(attr_HuberRegressor_coef_, 'tolist') else attr_HuberRegressor_coef_`
    })()
  }

  /**
    Bias.
   */
  get intercept_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_intercept_ = bridgeHuberRegressor[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_intercept_.tolist() if hasattr(attr_HuberRegressor_intercept_, 'tolist') else attr_HuberRegressor_intercept_`
    })()
  }

  /**
    The value by which `|y \- Xw \- c|` is scaled down.
   */
  get scale_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('HuberRegressor must call init() before accessing scale_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_scale_ = bridgeHuberRegressor[${this.id}].scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_scale_.tolist() if hasattr(attr_HuberRegressor_scale_, 'tolist') else attr_HuberRegressor_scale_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_n_features_in_ = bridgeHuberRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_n_features_in_.tolist() if hasattr(attr_HuberRegressor_n_features_in_, 'tolist') else attr_HuberRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_feature_names_in_ = bridgeHuberRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_feature_names_in_.tolist() if hasattr(attr_HuberRegressor_feature_names_in_, 'tolist') else attr_HuberRegressor_feature_names_in_`
    })()
  }

  /**
    Number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` has run for.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_n_iter_ = bridgeHuberRegressor[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_n_iter_.tolist() if hasattr(attr_HuberRegressor_n_iter_, 'tolist') else attr_HuberRegressor_n_iter_`
    })()
  }

  /**
    A boolean mask which is set to `true` where the samples are identified as outliers.
   */
  get outliers_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This HuberRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'HuberRegressor must call init() before accessing outliers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HuberRegressor_outliers_ = bridgeHuberRegressor[${this.id}].outliers_`

      // convert the result from python to node.js
      return this
        ._py`attr_HuberRegressor_outliers_.tolist() if hasattr(attr_HuberRegressor_outliers_, 'tolist') else attr_HuberRegressor_outliers_`
    })()
  }
}
