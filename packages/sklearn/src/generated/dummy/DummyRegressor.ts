/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Regressor that makes predictions using simple rules.

  This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

  Read more in the [User Guide](../model_evaluation.html#dummy-estimators).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html
 */
export class DummyRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: DummyRegressorOptions) {
    this.id = `DummyRegressor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DummyRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.dummy import DummyRegressor
try: bridgeDummyRegressor
except NameError: bridgeDummyRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_DummyRegressor = {'strategy': ${
      this.opts['strategy'] ?? undefined
    }, 'constant': np.array(${this.opts['constant'] ?? undefined}) if ${
      this.opts['constant'] !== undefined
    } else None, 'quantile': ${this.opts['quantile'] ?? undefined}}

ctor_DummyRegressor = {k: v for k, v in ctor_DummyRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeDummyRegressor[${this.id}] = DummyRegressor(**ctor_DummyRegressor)`

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

    await this._py.ex`del bridgeDummyRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the random regressor.
   */
  async fit(opts: DummyRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_DummyRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_DummyRegressor_fit = {k: v for k, v in pms_DummyRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyRegressor_fit = bridgeDummyRegressor[${this.id}].fit(**pms_DummyRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyRegressor_fit.tolist() if hasattr(res_DummyRegressor_fit, 'tolist') else res_DummyRegressor_fit`
  }

  /**
    Perform classification on test vectors X.
   */
  async predict(opts: DummyRegressorPredictOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_DummyRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'return_std': ${
      opts['return_std'] ?? undefined
    }}

pms_DummyRegressor_predict = {k: v for k, v in pms_DummyRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyRegressor_predict = bridgeDummyRegressor[${this.id}].predict(**pms_DummyRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyRegressor_predict.tolist() if hasattr(res_DummyRegressor_predict, 'tolist') else res_DummyRegressor_predict`
  }

  /**
    Return the coefficient of determination R^2 of the prediction.

    The coefficient R^2 is defined as `(1 \- u/v)`, where `u` is the residual sum of squares `((y\_true \- y\_pred) \*\* 2).sum()` and `v` is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.
   */
  async score(opts: DummyRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DummyRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_DummyRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_DummyRegressor_score = {k: v for k, v in pms_DummyRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DummyRegressor_score = bridgeDummyRegressor[${this.id}].score(**pms_DummyRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_DummyRegressor_score.tolist() if hasattr(res_DummyRegressor_score, 'tolist') else res_DummyRegressor_score`
  }

  /**
    Mean or median or quantile of the training targets or constant value given by the user.
   */
  get constant_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyRegressor must call init() before accessing constant_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyRegressor_constant_ = bridgeDummyRegressor[${this.id}].constant_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyRegressor_constant_.tolist() if hasattr(attr_DummyRegressor_constant_, 'tolist') else attr_DummyRegressor_constant_`
    })()
  }

  /**
    Number of outputs.
   */
  get n_outputs_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This DummyRegressor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DummyRegressor must call init() before accessing n_outputs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DummyRegressor_n_outputs_ = bridgeDummyRegressor[${this.id}].n_outputs_`

      // convert the result from python to node.js
      return this
        ._py`attr_DummyRegressor_n_outputs_.tolist() if hasattr(attr_DummyRegressor_n_outputs_, 'tolist') else attr_DummyRegressor_n_outputs_`
    })()
  }
}

export interface DummyRegressorOptions {
  /**
    Strategy to use to generate predictions.

    @defaultValue `'mean'`
   */
  strategy?: 'mean' | 'median' | 'quantile' | 'constant'

  /**
    The explicit constant as predicted by the “constant” strategy. This parameter is useful only for the “constant” strategy.
   */
  constant?: number | ArrayLike

  /**
    The quantile to predict using the “quantile” strategy. A quantile of 0.5 corresponds to the median, while 0.0 to the minimum and 1.0 to the maximum.
   */
  quantile?: number
}

export interface DummyRegressorFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}

export interface DummyRegressorPredictOptions {
  /**
    Test data.
   */
  X?: ArrayLike[]

  /**
    Whether to return the standard deviation of posterior prediction. All zeros in this case.

    @defaultValue `false`
   */
  return_std?: boolean
}

export interface DummyRegressorScoreOptions {
  /**
    Test samples. Passing None as test samples gives the same result as passing real test samples, since `DummyRegressor` operates independently of the sampled observations.
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
