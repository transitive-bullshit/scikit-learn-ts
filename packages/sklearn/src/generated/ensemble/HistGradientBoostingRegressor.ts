/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Histogram-based Gradient Boosting Regression Tree.

  This estimator is much faster than [`GradientBoostingRegressor`](sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n\_samples >= 10 000).

  This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

  This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

  Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html)
 */
export class HistGradientBoostingRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The loss function to use in the boosting process. Note that the “squared error” and “poisson” losses actually implement “half least squares loss” and “half poisson deviance” to simplify the computation of the gradient. Furthermore, “poisson” loss internally uses a log-link and requires `y >= 0`. “quantile” uses the pinball loss.

      @defaultValue `'squared_error'`
     */
    loss?: 'squared_error' | 'absolute_error' | 'poisson' | 'quantile'

    /**
      If loss is “quantile”, this parameter specifies which quantile to be estimated and must be between 0 and 1.
     */
    quantile?: number

    /**
      The learning rate, also known as *shrinkage*. This is used as a multiplicative factor for the leaves values. Use `1` for no shrinkage.

      @defaultValue `0.1`
     */
    learning_rate?: number

    /**
      The maximum number of iterations of the boosting process, i.e. the maximum number of trees.

      @defaultValue `100`
     */
    max_iter?: number

    /**
      The maximum number of leaves for each tree. Must be strictly greater than 1. If `undefined`, there is no maximum limit.

      @defaultValue `31`
     */
    max_leaf_nodes?: number

    /**
      The maximum depth of each tree. The depth of a tree is the number of edges to go from the root to the deepest leaf. Depth isn’t constrained by default.
     */
    max_depth?: number

    /**
      The minimum number of samples per leaf. For small datasets with less than a few hundred samples, it is recommended to lower this value since only very shallow trees would be built.

      @defaultValue `20`
     */
    min_samples_leaf?: number

    /**
      The L2 regularization parameter. Use `0` for no regularization (default).

      @defaultValue `0`
     */
    l2_regularization?: number

    /**
      The maximum number of bins to use for non-missing values. Before training, each feature of the input array `X` is binned into integer-valued bins, which allows for a much faster training stage. Features with a small number of unique values may use less than `max\_bins` bins. In addition to the `max\_bins` bins, one more bin is always reserved for missing values. Must be no larger than 255.

      @defaultValue `255`
     */
    max_bins?: number

    /**
      Indicates the categorical features.
     */
    categorical_features?: number

    /**
      Monotonic constraint to enforce on each feature are specified using the following integer values:
     */
    monotonic_cst?: any[] | any

    /**
      Specify interaction constraints, the sets of features which can interact with each other in child node splits.

      Each item specifies the set of feature indices that are allowed to interact with each other. If there are more features than specified in these constraints, they are treated as if they were specified as an additional set.

      The strings “pairwise” and “no\_interactions” are shorthands for allowing only pairwise or no interactions, respectively.

      For instance, with 5 features in total, `interaction\_cst=\[{0, 1}\]` is equivalent to `interaction\_cst=\[{0, 1}, {2, 3, 4}\]`, and specifies that each branch of a tree will either only split on features 0 and 1 or only split on features 2, 3 and 4.
     */
    interaction_cst?: 'pairwise' | 'no_interaction'

    /**
      When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble. For results to be valid, the estimator should be re-trained on the same data only. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      If ‘auto’, early stopping is enabled if the sample size is larger than 10000. If `true`, early stopping is enabled, otherwise early stopping is disabled.

      @defaultValue `'auto'`
     */
    early_stopping?: 'auto' | boolean

    /**
      Scoring parameter to use for early stopping. It can be a single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)). If `undefined`, the estimator’s default scorer is used. If `scoring='loss'`, early stopping is checked w.r.t the loss value. Only used if early stopping is performed.

      @defaultValue `'loss'`
     */
    scoring?: string

    /**
      Proportion (or absolute size) of training data to set aside as validation data for early stopping. If `undefined`, early stopping is done on the training data. Only used if early stopping is performed.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      Used to determine when to “early stop”. The fitting process is stopped when none of the last `n\_iter\_no\_change` scores are better than the `n\_iter\_no\_change \- 1` -th-to-last one, up to some tolerance. Only used if early stopping is performed.

      @defaultValue `10`
     */
    n_iter_no_change?: number

    /**
      The absolute tolerance to use when comparing scores during early stopping. The higher the tolerance, the more likely we are to early stop: higher tolerance means that it will be harder for subsequent iterations to be considered an improvement upon the reference score.

      @defaultValue `1e-7`
     */
    tol?: number

    /**
      The verbosity level. If not zero, print some information about the fitting process.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Pseudo-random number generator to control the subsampling in the binning process, and the train/validation data split if early stopping is enabled. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `HistGradientBoostingRegressor${
      crypto.randomUUID().split('-')[0]
    }`
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
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'HistGradientBoostingRegressor.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import HistGradientBoostingRegressor
try: bridgeHistGradientBoostingRegressor
except NameError: bridgeHistGradientBoostingRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_HistGradientBoostingRegressor = {'loss': ${
      this.opts['loss'] ?? undefined
    }, 'quantile': ${this.opts['quantile'] ?? undefined}, 'learning_rate': ${
      this.opts['learning_rate'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'max_leaf_nodes': ${
      this.opts['max_leaf_nodes'] ?? undefined
    }, 'max_depth': ${
      this.opts['max_depth'] ?? undefined
    }, 'min_samples_leaf': ${
      this.opts['min_samples_leaf'] ?? undefined
    }, 'l2_regularization': ${
      this.opts['l2_regularization'] ?? undefined
    }, 'max_bins': ${
      this.opts['max_bins'] ?? undefined
    }, 'categorical_features': np.array(${
      this.opts['categorical_features'] ?? undefined
    }) if ${
      this.opts['categorical_features'] !== undefined
    } else None, 'monotonic_cst': np.array(${
      this.opts['monotonic_cst'] ?? undefined
    }) if ${
      this.opts['monotonic_cst'] !== undefined
    } else None, 'interaction_cst': ${
      this.opts['interaction_cst'] ?? undefined
    }, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'scoring': ${
      this.opts['scoring'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_HistGradientBoostingRegressor = {k: v for k, v in ctor_HistGradientBoostingRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeHistGradientBoostingRegressor[${this.id}] = HistGradientBoostingRegressor(**ctor_HistGradientBoostingRegressor)`

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

    await this._py.ex`del bridgeHistGradientBoostingRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the gradient boosting model.
   */
  async fit(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Weights of training data.
     */
    sample_weight?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_HistGradientBoostingRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_HistGradientBoostingRegressor_fit = {k: v for k, v in pms_HistGradientBoostingRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HistGradientBoostingRegressor_fit = bridgeHistGradientBoostingRegressor[${this.id}].fit(**pms_HistGradientBoostingRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_HistGradientBoostingRegressor_fit.tolist() if hasattr(res_HistGradientBoostingRegressor_fit, 'tolist') else res_HistGradientBoostingRegressor_fit`
  }

  /**
    Predict values for X.
   */
  async predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_HistGradientBoostingRegressor_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_HistGradientBoostingRegressor_predict = {k: v for k, v in pms_HistGradientBoostingRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HistGradientBoostingRegressor_predict = bridgeHistGradientBoostingRegressor[${this.id}].predict(**pms_HistGradientBoostingRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HistGradientBoostingRegressor_predict.tolist() if hasattr(res_HistGradientBoostingRegressor_predict, 'tolist') else res_HistGradientBoostingRegressor_predict`
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
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HistGradientBoostingRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_HistGradientBoostingRegressor_score = {k: v for k, v in pms_HistGradientBoostingRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HistGradientBoostingRegressor_score = bridgeHistGradientBoostingRegressor[${this.id}].score(**pms_HistGradientBoostingRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_HistGradientBoostingRegressor_score.tolist() if hasattr(res_HistGradientBoostingRegressor_score, 'tolist') else res_HistGradientBoostingRegressor_score`
  }

  /**
    Predict regression target for each iteration.

    This method allows monitoring (i.e. determine error on testing set) after each stage.
   */
  async staged_predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before staged_predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_HistGradientBoostingRegressor_staged_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_HistGradientBoostingRegressor_staged_predict = {k: v for k, v in pms_HistGradientBoostingRegressor_staged_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_HistGradientBoostingRegressor_staged_predict = bridgeHistGradientBoostingRegressor[${this.id}].staged_predict(**pms_HistGradientBoostingRegressor_staged_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_HistGradientBoostingRegressor_staged_predict.tolist() if hasattr(res_HistGradientBoostingRegressor_staged_predict, 'tolist') else res_HistGradientBoostingRegressor_staged_predict`
  }

  /**
    Indicates whether early stopping is used during training.
   */
  get do_early_stopping_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing do_early_stopping_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_do_early_stopping_ = bridgeHistGradientBoostingRegressor[${this.id}].do_early_stopping_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_do_early_stopping_.tolist() if hasattr(attr_HistGradientBoostingRegressor_do_early_stopping_, 'tolist') else attr_HistGradientBoostingRegressor_do_early_stopping_`
    })()
  }

  /**
    The number of tree that are built at each iteration. For regressors, this is always 1.
   */
  get n_trees_per_iteration_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing n_trees_per_iteration_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_n_trees_per_iteration_ = bridgeHistGradientBoostingRegressor[${this.id}].n_trees_per_iteration_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_n_trees_per_iteration_.tolist() if hasattr(attr_HistGradientBoostingRegressor_n_trees_per_iteration_, 'tolist') else attr_HistGradientBoostingRegressor_n_trees_per_iteration_`
    })()
  }

  /**
    The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.
   */
  get train_score_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing train_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_train_score_ = bridgeHistGradientBoostingRegressor[${this.id}].train_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_train_score_.tolist() if hasattr(attr_HistGradientBoostingRegressor_train_score_, 'tolist') else attr_HistGradientBoostingRegressor_train_score_`
    })()
  }

  /**
    The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.
   */
  get validation_score_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing validation_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_validation_score_ = bridgeHistGradientBoostingRegressor[${this.id}].validation_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_validation_score_.tolist() if hasattr(attr_HistGradientBoostingRegressor_validation_score_, 'tolist') else attr_HistGradientBoostingRegressor_validation_score_`
    })()
  }

  /**
    Boolean mask for the categorical features. `undefined` if there are no categorical features.
   */
  get is_categorical_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing is_categorical_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_is_categorical_ = bridgeHistGradientBoostingRegressor[${this.id}].is_categorical_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_is_categorical_.tolist() if hasattr(attr_HistGradientBoostingRegressor_is_categorical_, 'tolist') else attr_HistGradientBoostingRegressor_is_categorical_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_n_features_in_ = bridgeHistGradientBoostingRegressor[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_n_features_in_.tolist() if hasattr(attr_HistGradientBoostingRegressor_n_features_in_, 'tolist') else attr_HistGradientBoostingRegressor_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This HistGradientBoostingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'HistGradientBoostingRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_HistGradientBoostingRegressor_feature_names_in_ = bridgeHistGradientBoostingRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_HistGradientBoostingRegressor_feature_names_in_.tolist() if hasattr(attr_HistGradientBoostingRegressor_feature_names_in_, 'tolist') else attr_HistGradientBoostingRegressor_feature_names_in_`
    })()
  }
}
