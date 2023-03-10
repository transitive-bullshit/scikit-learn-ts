/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A Bagging regressor.

  A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

  This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [1]. If samples are drawn with replacement, then the method is known as Bagging [2]. When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [3]. Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [4].

  @see https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html
 */
export class BaggingRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: BaggingRegressorOptions) {
    this.id = `BaggingRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('BaggingRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import BaggingRegressor
try: bridgeBaggingRegressor
except NameError: bridgeBaggingRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_BaggingRegressor = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'max_samples': ${
      this.opts['max_samples'] ?? undefined
    }, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'bootstrap': ${
      this.opts['bootstrap'] ?? undefined
    }, 'bootstrap_features': ${
      this.opts['bootstrap_features'] ?? undefined
    }, 'oob_score': ${this.opts['oob_score'] ?? undefined}, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'base_estimator': ${
      this.opts['base_estimator'] ?? undefined
    }}

ctor_BaggingRegressor = {k: v for k, v in ctor_BaggingRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeBaggingRegressor[${this.id}] = BaggingRegressor(**ctor_BaggingRegressor)`

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

    await this._py.ex`del bridgeBaggingRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Build a Bagging ensemble of estimators from the training set (X, y).
   */
  async fit(opts: BaggingRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_BaggingRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BaggingRegressor_fit = {k: v for k, v in pms_BaggingRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingRegressor_fit = bridgeBaggingRegressor[${this.id}].fit(**pms_BaggingRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingRegressor_fit.tolist() if hasattr(res_BaggingRegressor_fit, 'tolist') else res_BaggingRegressor_fit`
  }

  /**
    Predict regression target for X.

    The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.
   */
  async predict(opts: BaggingRegressorPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_BaggingRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BaggingRegressor_predict = {k: v for k, v in pms_BaggingRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingRegressor_predict = bridgeBaggingRegressor[${this.id}].predict(**pms_BaggingRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingRegressor_predict.tolist() if hasattr(res_BaggingRegressor_predict, 'tolist') else res_BaggingRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \(R^2\) is defined as \((1 - \frac{u}{v})\), where \(u\) is the residual sum of squares ((y_true - y_pred)** 2).sum() and \(v\) is the total sum of squares ((y_true - y_true.mean()) ** 2).sum(). The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a \(R^2\) score of 0.0.
   */
  async score(opts: BaggingRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_BaggingRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BaggingRegressor_score = {k: v for k, v in pms_BaggingRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingRegressor_score = bridgeBaggingRegressor[${this.id}].score(**pms_BaggingRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingRegressor_score.tolist() if hasattr(res_BaggingRegressor_score, 'tolist') else res_BaggingRegressor_score`
  }

  /**
    The base estimator from which the ensemble is grown.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_estimator_ = bridgeBaggingRegressor[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_estimator_.tolist() if hasattr(attr_BaggingRegressor_estimator_, 'tolist') else attr_BaggingRegressor_estimator_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_n_features_in_ = bridgeBaggingRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_n_features_in_.tolist() if hasattr(attr_BaggingRegressor_n_features_in_, 'tolist') else attr_BaggingRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_feature_names_in_ = bridgeBaggingRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_feature_names_in_.tolist() if hasattr(attr_BaggingRegressor_feature_names_in_, 'tolist') else attr_BaggingRegressor_feature_names_in_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_estimators_ = bridgeBaggingRegressor[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_estimators_.tolist() if hasattr(attr_BaggingRegressor_estimators_, 'tolist') else attr_BaggingRegressor_estimators_`
    })()
  }

  /**
    The subset of drawn features for each base estimator.
   */
  get estimators_features_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing estimators_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_estimators_features_ = bridgeBaggingRegressor[${this.id}].estimators_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_estimators_features_.tolist() if hasattr(attr_BaggingRegressor_estimators_features_, 'tolist') else attr_BaggingRegressor_estimators_features_`
    })()
  }

  /**
    Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when oob_score is True.
   */
  get oob_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing oob_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_oob_score_ = bridgeBaggingRegressor[${this.id}].oob_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_oob_score_.tolist() if hasattr(attr_BaggingRegressor_oob_score_, 'tolist') else attr_BaggingRegressor_oob_score_`
    })()
  }

  /**
    Prediction computed with out-of-bag estimate on the training set. If n_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, oob_prediction_ might contain NaN. This attribute exists only when oob_score is True.
   */
  get oob_prediction_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingRegressor must call init() before accessing oob_prediction_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingRegressor_oob_prediction_ = bridgeBaggingRegressor[${this.id}].oob_prediction_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingRegressor_oob_prediction_.tolist() if hasattr(attr_BaggingRegressor_oob_prediction_, 'tolist') else attr_BaggingRegressor_oob_prediction_`
    })()
  }
}

export interface BaggingRegressorOptions {
  /**
    The base estimator to fit on random subsets of the dataset. If None, then the base estimator is a DecisionTreeRegressor.
   */
  estimator?: any

  /**
    The number of base estimators in the ensemble.

    @defaultValue `10`
   */
  n_estimators?: number

  /**
    The number of samples to draw from X to train each base estimator (with replacement by default, see bootstrap for more details).

    @defaultValue `1`
   */
  max_samples?: number

  /**
    The number of features to draw from X to train each base estimator ( without replacement by default, see bootstrap_features for more details).

    @defaultValue `1`
   */
  max_features?: number

  /**
    Whether samples are drawn with replacement. If False, sampling without replacement is performed.

    @defaultValue `true`
   */
  bootstrap?: boolean

  /**
    Whether features are drawn with replacement.

    @defaultValue `false`
   */
  bootstrap_features?: boolean

  /**
    Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=True.

    @defaultValue `false`
   */
  oob_score?: boolean

  /**
    When set to True, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See the Glossary.

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    The number of jobs to run in parallel for both fit and predict. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number

  /**
    Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a random_state attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    Controls the verbosity when fitting and predicting.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Use estimator instead.

    @defaultValue `'deprecated'`
   */
  base_estimator?: any
}

export interface BaggingRegressorFitOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values (class labels in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Sample weights. If None, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.
   */
  sample_weight?: ArrayLike
}

export interface BaggingRegressorPredictOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface BaggingRegressorScoreOptions {
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
