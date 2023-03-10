/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Isotonic regression model.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.isotonic.IsotonicRegression.html
 */
export class IsotonicRegression {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: IsotonicRegressionOptions) {
    this.id = `IsotonicRegression${crypto.randomUUID().split('-')[0]}`
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
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'IsotonicRegression.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.isotonic import IsotonicRegression
try: bridgeIsotonicRegression
except NameError: bridgeIsotonicRegression = {}
`

    // set up constructor params
    await this._py.ex`ctor_IsotonicRegression = {'y_min': ${
      this.opts['y_min'] ?? undefined
    }, 'y_max': ${this.opts['y_max'] ?? undefined}, 'increasing': ${
      this.opts['increasing'] ?? undefined
    }, 'out_of_bounds': ${this.opts['out_of_bounds'] ?? undefined}}

ctor_IsotonicRegression = {k: v for k, v in ctor_IsotonicRegression.items() if v is not None}`

    await this._py
      .ex`bridgeIsotonicRegression[${this.id}] = IsotonicRegression(**ctor_IsotonicRegression)`

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

    await this._py.ex`del bridgeIsotonicRegression[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model using X, y as training data.
   */
  async fit(opts: IsotonicRegressionFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_IsotonicRegression_fit = {k: v for k, v in pms_IsotonicRegression_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_fit = bridgeIsotonicRegression[${this.id}].fit(**pms_IsotonicRegression_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_fit.tolist() if hasattr(res_IsotonicRegression_fit, 'tolist') else res_IsotonicRegression_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: IsotonicRegressionFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_IsotonicRegression_fit_transform = {k: v for k, v in pms_IsotonicRegression_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_fit_transform = bridgeIsotonicRegression[${this.id}].fit_transform(**pms_IsotonicRegression_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_fit_transform.tolist() if hasattr(res_IsotonicRegression_fit_transform, 'tolist') else res_IsotonicRegression_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: IsotonicRegressionGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_IsotonicRegression_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_IsotonicRegression_get_feature_names_out = {k: v for k, v in pms_IsotonicRegression_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_get_feature_names_out = bridgeIsotonicRegression[${this.id}].get_feature_names_out(**pms_IsotonicRegression_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_get_feature_names_out.tolist() if hasattr(res_IsotonicRegression_get_feature_names_out, 'tolist') else res_IsotonicRegression_get_feature_names_out`
  }

  /**
    Predict new data by linear interpolation.
   */
  async predict(opts: IsotonicRegressionPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_predict = {'T': np.array(${
      opts['T'] ?? undefined
    }) if ${opts['T'] !== undefined} else None}

pms_IsotonicRegression_predict = {k: v for k, v in pms_IsotonicRegression_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_predict = bridgeIsotonicRegression[${this.id}].predict(**pms_IsotonicRegression_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_predict.tolist() if hasattr(res_IsotonicRegression_predict, 'tolist') else res_IsotonicRegression_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \(R^2\) is defined as \((1 - \frac{u}{v})\), where \(u\) is the residual sum of squares ((y_true - y_pred)** 2).sum() and \(v\) is the total sum of squares ((y_true - y_true.mean()) ** 2).sum(). The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a \(R^2\) score of 0.0.
   */
  async score(opts: IsotonicRegressionScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_IsotonicRegression_score = {k: v for k, v in pms_IsotonicRegression_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_score = bridgeIsotonicRegression[${this.id}].score(**pms_IsotonicRegression_score)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_score.tolist() if hasattr(res_IsotonicRegression_score, 'tolist') else res_IsotonicRegression_score`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: IsotonicRegressionSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_IsotonicRegression_set_output = {k: v for k, v in pms_IsotonicRegression_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_set_output = bridgeIsotonicRegression[${this.id}].set_output(**pms_IsotonicRegression_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_set_output.tolist() if hasattr(res_IsotonicRegression_set_output, 'tolist') else res_IsotonicRegression_set_output`
  }

  /**
    Transform new data by linear interpolation.
   */
  async transform(opts: IsotonicRegressionTransformOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_IsotonicRegression_transform = {'T': np.array(${
      opts['T'] ?? undefined
    }) if ${opts['T'] !== undefined} else None}

pms_IsotonicRegression_transform = {k: v for k, v in pms_IsotonicRegression_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsotonicRegression_transform = bridgeIsotonicRegression[${this.id}].transform(**pms_IsotonicRegression_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IsotonicRegression_transform.tolist() if hasattr(res_IsotonicRegression_transform, 'tolist') else res_IsotonicRegression_transform`
  }

  /**
    Minimum value of input array X_ for left bound.
   */
  get X_min_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before accessing X_min_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_X_min_ = bridgeIsotonicRegression[${this.id}].X_min_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_X_min_.tolist() if hasattr(attr_IsotonicRegression_X_min_, 'tolist') else attr_IsotonicRegression_X_min_`
    })()
  }

  /**
    Maximum value of input array X_ for right bound.
   */
  get X_max_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before accessing X_max_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_X_max_ = bridgeIsotonicRegression[${this.id}].X_max_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_X_max_.tolist() if hasattr(attr_IsotonicRegression_X_max_, 'tolist') else attr_IsotonicRegression_X_max_`
    })()
  }

  /**
    Unique ascending X values used to interpolate the y = f(X) monotonic function.
   */
  get X_thresholds_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before accessing X_thresholds_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_X_thresholds_ = bridgeIsotonicRegression[${this.id}].X_thresholds_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_X_thresholds_.tolist() if hasattr(attr_IsotonicRegression_X_thresholds_, 'tolist') else attr_IsotonicRegression_X_thresholds_`
    })()
  }

  /**
    De-duplicated y values suitable to interpolate the y = f(X) monotonic function.
   */
  get y_thresholds_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before accessing y_thresholds_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_y_thresholds_ = bridgeIsotonicRegression[${this.id}].y_thresholds_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_y_thresholds_.tolist() if hasattr(attr_IsotonicRegression_y_thresholds_, 'tolist') else attr_IsotonicRegression_y_thresholds_`
    })()
  }

  /**
    The stepwise interpolating function that covers the input domain X.
   */
  get f_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IsotonicRegression must call init() before accessing f_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_f_ = bridgeIsotonicRegression[${this.id}].f_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_f_.tolist() if hasattr(attr_IsotonicRegression_f_, 'tolist') else attr_IsotonicRegression_f_`
    })()
  }

  /**
    Inferred value for increasing.
   */
  get increasing_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This IsotonicRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsotonicRegression must call init() before accessing increasing_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsotonicRegression_increasing_ = bridgeIsotonicRegression[${this.id}].increasing_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsotonicRegression_increasing_.tolist() if hasattr(attr_IsotonicRegression_increasing_, 'tolist') else attr_IsotonicRegression_increasing_`
    })()
  }
}

export interface IsotonicRegressionOptions {
  /**
    Lower bound on the lowest predicted value (the minimum value may still be higher). If not set, defaults to -inf.
   */
  y_min?: number

  /**
    Upper bound on the highest predicted value (the maximum may still be lower). If not set, defaults to +inf.
   */
  y_max?: number

  /**
    Determines whether the predictions should be constrained to increase or decrease with X. ‘auto’ will decide based on the Spearman correlation estimate’s sign.

    @defaultValue `true`
   */
  increasing?: boolean | 'auto'

  /**
    Handles how X values outside of the training domain are handled during prediction.

    @defaultValue `'nan'`
   */
  out_of_bounds?: 'nan' | 'clip' | 'raise'
}

export interface IsotonicRegressionFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | number

  /**
    Training target.
   */
  y?: ArrayLike

  /**
    Weights. If set to None, all weights will be set to 1 (equal weights).
   */
  sample_weight?: ArrayLike
}

export interface IsotonicRegressionFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface IsotonicRegressionGetFeatureNamesOutOptions {
  /**
    Ignored.
   */
  input_features?: any
}

export interface IsotonicRegressionPredictOptions {
  /**
    Data to transform.
   */
  T?: ArrayLike | number
}

export interface IsotonicRegressionScoreOptions {
  /**
    Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape (n_samples, n_samples_fitted), where n_samples_fitted is the number of samples used in the fitting for the estimator.
   */
  X?: ArrayLike[]

  /**
    True values for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}

export interface IsotonicRegressionSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface IsotonicRegressionTransformOptions {
  /**
    Data to transform.
   */
  T?: ArrayLike | number
}
