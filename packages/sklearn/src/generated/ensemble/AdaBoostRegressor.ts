/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An AdaBoost regressor.

  An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

  This class implements the algorithm known as AdaBoost.R2 \[2\].

  Read more in the [User Guide](../ensemble.html#adaboost).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html
 */
export class AdaBoostRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: AdaBoostRegressorOptions) {
    this.id = `AdaBoostRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('AdaBoostRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import AdaBoostRegressor
try: bridgeAdaBoostRegressor
except NameError: bridgeAdaBoostRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_AdaBoostRegressor = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'loss': ${
      this.opts['loss'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'base_estimator': ${this.opts['base_estimator'] ?? undefined}}

ctor_AdaBoostRegressor = {k: v for k, v in ctor_AdaBoostRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeAdaBoostRegressor[${this.id}] = AdaBoostRegressor(**ctor_AdaBoostRegressor)`

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

    await this._py.ex`del bridgeAdaBoostRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Build a boosted classifier/regressor from the training set (X, y).
   */
  async fit(opts: AdaBoostRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_AdaBoostRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostRegressor_fit = {k: v for k, v in pms_AdaBoostRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostRegressor_fit = bridgeAdaBoostRegressor[${this.id}].fit(**pms_AdaBoostRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostRegressor_fit.tolist() if hasattr(res_AdaBoostRegressor_fit, 'tolist') else res_AdaBoostRegressor_fit`
  }

  /**
    Predict regression value for X.

    The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.
   */
  async predict(opts: AdaBoostRegressorPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_AdaBoostRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_AdaBoostRegressor_predict = {k: v for k, v in pms_AdaBoostRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostRegressor_predict = bridgeAdaBoostRegressor[${this.id}].predict(**pms_AdaBoostRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostRegressor_predict.tolist() if hasattr(res_AdaBoostRegressor_predict, 'tolist') else res_AdaBoostRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: AdaBoostRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_AdaBoostRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostRegressor_score = {k: v for k, v in pms_AdaBoostRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostRegressor_score = bridgeAdaBoostRegressor[${this.id}].score(**pms_AdaBoostRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostRegressor_score.tolist() if hasattr(res_AdaBoostRegressor_score, 'tolist') else res_AdaBoostRegressor_score`
  }

  /**
    Return staged predictions for X.

    The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

    This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.
   */
  async staged_predict(
    opts: AdaBoostRegressorStagedPredictOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before staged_predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdaBoostRegressor_staged_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_AdaBoostRegressor_staged_predict = {k: v for k, v in pms_AdaBoostRegressor_staged_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostRegressor_staged_predict = bridgeAdaBoostRegressor[${this.id}].staged_predict(**pms_AdaBoostRegressor_staged_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostRegressor_staged_predict.tolist() if hasattr(res_AdaBoostRegressor_staged_predict, 'tolist') else res_AdaBoostRegressor_staged_predict`
  }

  /**
    Return staged scores for X, y.

    This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.
   */
  async staged_score(
    opts: AdaBoostRegressorStagedScoreOptions
  ): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before staged_score()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdaBoostRegressor_staged_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostRegressor_staged_score = {k: v for k, v in pms_AdaBoostRegressor_staged_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostRegressor_staged_score = bridgeAdaBoostRegressor[${this.id}].staged_score(**pms_AdaBoostRegressor_staged_score)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostRegressor_staged_score.tolist() if hasattr(res_AdaBoostRegressor_staged_score, 'tolist') else res_AdaBoostRegressor_staged_score`
  }

  /**
    The base estimator from which the ensemble is grown.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_estimator_ = bridgeAdaBoostRegressor[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_estimator_.tolist() if hasattr(attr_AdaBoostRegressor_estimator_, 'tolist') else attr_AdaBoostRegressor_estimator_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_estimators_ = bridgeAdaBoostRegressor[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_estimators_.tolist() if hasattr(attr_AdaBoostRegressor_estimators_, 'tolist') else attr_AdaBoostRegressor_estimators_`
    })()
  }

  /**
    Weights for each estimator in the boosted ensemble.
   */
  get estimator_weights_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing estimator_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_estimator_weights_ = bridgeAdaBoostRegressor[${this.id}].estimator_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_estimator_weights_.tolist() if hasattr(attr_AdaBoostRegressor_estimator_weights_, 'tolist') else attr_AdaBoostRegressor_estimator_weights_`
    })()
  }

  /**
    Regression error for each estimator in the boosted ensemble.
   */
  get estimator_errors_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing estimator_errors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_estimator_errors_ = bridgeAdaBoostRegressor[${this.id}].estimator_errors_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_estimator_errors_.tolist() if hasattr(attr_AdaBoostRegressor_estimator_errors_, 'tolist') else attr_AdaBoostRegressor_estimator_errors_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_n_features_in_ = bridgeAdaBoostRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_n_features_in_.tolist() if hasattr(attr_AdaBoostRegressor_n_features_in_, 'tolist') else attr_AdaBoostRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostRegressor_feature_names_in_ = bridgeAdaBoostRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostRegressor_feature_names_in_.tolist() if hasattr(attr_AdaBoostRegressor_feature_names_in_, 'tolist') else attr_AdaBoostRegressor_feature_names_in_`
    })()
  }
}

export interface AdaBoostRegressorOptions {
  /**
    The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`.
   */
  estimator?: any

  /**
    The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`.

    @defaultValue `50`
   */
  n_estimators?: number

  /**
    Weight applied to each regressor at each boosting iteration. A higher learning rate increases the contribution of each regressor. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.

    @defaultValue `1`
   */
  learning_rate?: number

  /**
    The loss function to use when updating the weights after each boosting iteration.

    @defaultValue `'linear'`
   */
  loss?: 'linear' | 'square' | 'exponential'

  /**
    Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. In addition, it controls the bootstrap of the weights used to train the `estimator` at each boosting iteration. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    The base estimator from which the boosted ensemble is built. If `undefined`, then the base estimator is [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor") initialized with `max\_depth=3`.
   */
  base_estimator?: any
}

export interface AdaBoostRegressorFitOptions {
  /**
    The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values.
   */
  y?: ArrayLike

  /**
    Sample weights. If `undefined`, the sample weights are initialized to 1 / n\_samples.
   */
  sample_weight?: ArrayLike
}

export interface AdaBoostRegressorPredictOptions {
  /**
    The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface AdaBoostRegressorScoreOptions {
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
}

export interface AdaBoostRegressorStagedPredictOptions {
  /**
    The training input samples.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface AdaBoostRegressorStagedScoreOptions {
  /**
    The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
