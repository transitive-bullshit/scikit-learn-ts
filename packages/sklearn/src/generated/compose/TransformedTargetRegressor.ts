/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Meta-estimator to regress on a transformed target.

  Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

  The computation during [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html)
 */
export class TransformedTargetRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Regressor object such as derived from [`RegressorMixin`](sklearn.base.RegressorMixin.html#sklearn.base.RegressorMixin "sklearn.base.RegressorMixin"). This regressor will automatically be cloned each time prior to fitting. If `regressor is None`, [`LinearRegression`](sklearn.linear_model.LinearRegression.html#sklearn.linear_model.LinearRegression "sklearn.linear_model.LinearRegression") is created and used.
     */
    regressor?: any

    /**
      Estimator object such as derived from [`TransformerMixin`](sklearn.base.TransformerMixin.html#sklearn.base.TransformerMixin "sklearn.base.TransformerMixin"). Cannot be set at the same time as `func` and `inverse\_func`. If `transformer is None` as well as `func` and `inverse\_func`, the transformer will be an identity transformer. Note that the transformer will be cloned during fitting. Also, the transformer is restricting `y` to be a numpy array.
     */
    transformer?: any

    /**
      Function to apply to `y` before passing to [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit"). Cannot be set at the same time as `transformer`. If `func is None`, the function used will be the identity function. If `func` is set, `inverse\_func` also needs to be provided. The function needs to return a 2-dimensional array.
     */
    func?: any

    /**
      Function to apply to the prediction of the regressor. Cannot be set at the same time as `transformer`. The inverse function is used to return predictions to the same space of the original training labels. If `inverse\_func` is set, `func` also needs to be provided. The inverse function needs to return a 2-dimensional array.
     */
    inverse_func?: any

    /**
      Whether to check that `transform` followed by `inverse\_transform` or `func` followed by `inverse\_func` leads to the original targets.

      @defaultValue `true`
     */
    check_inverse?: boolean
  }) {
    this.id = `TransformedTargetRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'TransformedTargetRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.compose import TransformedTargetRegressor
try: bridgeTransformedTargetRegressor
except NameError: bridgeTransformedTargetRegressor = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TransformedTargetRegressor = {'regressor': ${this.opts['regressor'] ?? undefined}, 'transformer': ${this.opts['transformer'] ?? undefined}, 'func': ${this.opts['func'] ?? undefined}, 'inverse_func': ${this.opts['inverse_func'] ?? undefined}, 'check_inverse': ${this.opts['check_inverse'] ?? undefined}}

ctor_TransformedTargetRegressor = {k: v for k, v in ctor_TransformedTargetRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeTransformedTargetRegressor[${this.id}] = TransformedTargetRegressor(**ctor_TransformedTargetRegressor)`

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

    await this._py.ex`del bridgeTransformedTargetRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Parameters passed to the `fit` method of the underlying regressor.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TransformedTargetRegressor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_TransformedTargetRegressor_fit = {k: v for k, v in pms_TransformedTargetRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TransformedTargetRegressor_fit = bridgeTransformedTargetRegressor[${this.id}].fit(**pms_TransformedTargetRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TransformedTargetRegressor_fit.tolist() if hasattr(res_TransformedTargetRegressor_fit, 'tolist') else res_TransformedTargetRegressor_fit`
  }

  /**
    Raise `NotImplementedError`.

    This estimator does not support metadata routing yet.
   */
  async get_metadata_routing(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_TransformedTargetRegressor_get_metadata_routing = {}

pms_TransformedTargetRegressor_get_metadata_routing = {k: v for k, v in pms_TransformedTargetRegressor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TransformedTargetRegressor_get_metadata_routing = bridgeTransformedTargetRegressor[${this.id}].get_metadata_routing(**pms_TransformedTargetRegressor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TransformedTargetRegressor_get_metadata_routing.tolist() if hasattr(res_TransformedTargetRegressor_get_metadata_routing, 'tolist') else res_TransformedTargetRegressor_get_metadata_routing`
  }

  /**
    Predict using the base regressor, applying inverse.

    The regressor is used to predict and the `inverse\_func` or `inverse\_transform` is applied before returning the prediction.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Parameters passed to the `predict` method of the underlying regressor.
     */
    predict_params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TransformedTargetRegressor_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'predict_params': ${opts['predict_params'] ?? undefined}}

pms_TransformedTargetRegressor_predict = {k: v for k, v in pms_TransformedTargetRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TransformedTargetRegressor_predict = bridgeTransformedTargetRegressor[${this.id}].predict(**pms_TransformedTargetRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_TransformedTargetRegressor_predict.tolist() if hasattr(res_TransformedTargetRegressor_predict, 'tolist') else res_TransformedTargetRegressor_predict`
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
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TransformedTargetRegressor_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_TransformedTargetRegressor_score = {k: v for k, v in pms_TransformedTargetRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TransformedTargetRegressor_score = bridgeTransformedTargetRegressor[${this.id}].score(**pms_TransformedTargetRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_TransformedTargetRegressor_score.tolist() if hasattr(res_TransformedTargetRegressor_score, 'tolist') else res_TransformedTargetRegressor_score`
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
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TransformedTargetRegressor_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_TransformedTargetRegressor_set_score_request = {k: v for k, v in pms_TransformedTargetRegressor_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TransformedTargetRegressor_set_score_request = bridgeTransformedTargetRegressor[${this.id}].set_score_request(**pms_TransformedTargetRegressor_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_TransformedTargetRegressor_set_score_request.tolist() if hasattr(res_TransformedTargetRegressor_set_score_request, 'tolist') else res_TransformedTargetRegressor_set_score_request`
  }

  /**
    Fitted regressor.
   */
  get regressor_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before accessing regressor_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TransformedTargetRegressor_regressor_ = bridgeTransformedTargetRegressor[${this.id}].regressor_`

      // convert the result from python to node.js
      return this
        ._py`attr_TransformedTargetRegressor_regressor_.tolist() if hasattr(attr_TransformedTargetRegressor_regressor_, 'tolist') else attr_TransformedTargetRegressor_regressor_`
    })()
  }

  /**
    Transformer used in [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") and [`predict`](#sklearn.compose.TransformedTargetRegressor.predict "sklearn.compose.TransformedTargetRegressor.predict").
   */
  get transformer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before accessing transformer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TransformedTargetRegressor_transformer_ = bridgeTransformedTargetRegressor[${this.id}].transformer_`

      // convert the result from python to node.js
      return this
        ._py`attr_TransformedTargetRegressor_transformer_.tolist() if hasattr(attr_TransformedTargetRegressor_transformer_, 'tolist') else attr_TransformedTargetRegressor_transformer_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TransformedTargetRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TransformedTargetRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TransformedTargetRegressor_feature_names_in_ = bridgeTransformedTargetRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TransformedTargetRegressor_feature_names_in_.tolist() if hasattr(attr_TransformedTargetRegressor_feature_names_in_, 'tolist') else attr_TransformedTargetRegressor_feature_names_in_`
    })()
  }
}
