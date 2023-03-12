/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  One-vs-one multiclass strategy.

  This strategy consists in fitting one classifier per class pair. At prediction time, the class which received the most votes is selected. Since it requires to fit `n\_classes \* (n\_classes \- 1) / 2` classifiers, this method is usually slower than one-vs-the-rest, due to its O(n\_classes^2) complexity. However, this method may be advantageous for algorithms such as kernel algorithms which don’t scale well with `n\_samples`. This is because each individual learning problem only involves a small subset of the data whereas, with one-vs-the-rest, the complete dataset is used `n\_classes` times.

  Read more in the [User Guide](../multiclass.html#ovo-classification).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsOneClassifier.html
 */
export class OneVsOneClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OneVsOneClassifierOptions) {
    this.id = `OneVsOneClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OneVsOneClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multiclass import OneVsOneClassifier
try: bridgeOneVsOneClassifier
except NameError: bridgeOneVsOneClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_OneVsOneClassifier = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_OneVsOneClassifier = {k: v for k, v in ctor_OneVsOneClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeOneVsOneClassifier[${this.id}] = OneVsOneClassifier(**ctor_OneVsOneClassifier)`

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

    await this._py.ex`del bridgeOneVsOneClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Decision function for the OneVsOneClassifier.

    The decision values for the samples are computed by adding the normalized sum of pair-wise classification confidence levels to the votes in order to disambiguate between the decision values when the votes for all the classes are equal leading to a tie.
   */
  async decision_function(
    opts: OneVsOneClassifierDecisionFunctionOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OneVsOneClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneVsOneClassifier_decision_function = {k: v for k, v in pms_OneVsOneClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsOneClassifier_decision_function = bridgeOneVsOneClassifier[${this.id}].decision_function(**pms_OneVsOneClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsOneClassifier_decision_function.tolist() if hasattr(res_OneVsOneClassifier_decision_function, 'tolist') else res_OneVsOneClassifier_decision_function`
  }

  /**
    Fit underlying estimators.
   */
  async fit(opts: OneVsOneClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsOneClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_OneVsOneClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_OneVsOneClassifier_fit = {k: v for k, v in pms_OneVsOneClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsOneClassifier_fit = bridgeOneVsOneClassifier[${this.id}].fit(**pms_OneVsOneClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsOneClassifier_fit.tolist() if hasattr(res_OneVsOneClassifier_fit, 'tolist') else res_OneVsOneClassifier_fit`
  }

  /**
    Partially fit underlying estimators.

    Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration, where the first call should have an array of all target variables.
   */
  async partial_fit(opts: OneVsOneClassifierPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_OneVsOneClassifier_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': ${
      opts['classes'] ?? undefined
    }}

pms_OneVsOneClassifier_partial_fit = {k: v for k, v in pms_OneVsOneClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsOneClassifier_partial_fit = bridgeOneVsOneClassifier[${this.id}].partial_fit(**pms_OneVsOneClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsOneClassifier_partial_fit.tolist() if hasattr(res_OneVsOneClassifier_partial_fit, 'tolist') else res_OneVsOneClassifier_partial_fit`
  }

  /**
    Estimate the best class label for each sample in X.

    This is implemented as `argmax(decision\_function(X), axis=1)` which will return the label of the class with most votes by estimators predicting the outcome of a decision for each possible class pair.
   */
  async predict(opts: OneVsOneClassifierPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsOneClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_OneVsOneClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneVsOneClassifier_predict = {k: v for k, v in pms_OneVsOneClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsOneClassifier_predict = bridgeOneVsOneClassifier[${this.id}].predict(**pms_OneVsOneClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsOneClassifier_predict.tolist() if hasattr(res_OneVsOneClassifier_predict, 'tolist') else res_OneVsOneClassifier_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: OneVsOneClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsOneClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_OneVsOneClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_OneVsOneClassifier_score = {k: v for k, v in pms_OneVsOneClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsOneClassifier_score = bridgeOneVsOneClassifier[${this.id}].score(**pms_OneVsOneClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsOneClassifier_score.tolist() if hasattr(res_OneVsOneClassifier_score, 'tolist') else res_OneVsOneClassifier_score`
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsOneClassifier_estimators_ = bridgeOneVsOneClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsOneClassifier_estimators_.tolist() if hasattr(attr_OneVsOneClassifier_estimators_, 'tolist') else attr_OneVsOneClassifier_estimators_`
    })()
  }

  /**
    Array containing labels.
   */
  get classes_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsOneClassifier_classes_ = bridgeOneVsOneClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsOneClassifier_classes_.tolist() if hasattr(attr_OneVsOneClassifier_classes_, 'tolist') else attr_OneVsOneClassifier_classes_`
    })()
  }

  /**
    Indices of samples used when training the estimators. `None` when `estimator`’s `pairwise` tag is False.
   */
  get pairwise_indices_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before accessing pairwise_indices_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsOneClassifier_pairwise_indices_ = bridgeOneVsOneClassifier[${this.id}].pairwise_indices_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsOneClassifier_pairwise_indices_.tolist() if hasattr(attr_OneVsOneClassifier_pairwise_indices_, 'tolist') else attr_OneVsOneClassifier_pairwise_indices_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsOneClassifier_n_features_in_ = bridgeOneVsOneClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsOneClassifier_n_features_in_.tolist() if hasattr(attr_OneVsOneClassifier_n_features_in_, 'tolist') else attr_OneVsOneClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsOneClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsOneClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsOneClassifier_feature_names_in_ = bridgeOneVsOneClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsOneClassifier_feature_names_in_.tolist() if hasattr(attr_OneVsOneClassifier_feature_names_in_, 'tolist') else attr_OneVsOneClassifier_feature_names_in_`
    })()
  }
}

export interface OneVsOneClassifierOptions {
  /**
    A regressor or a classifier that implements [fit](../../glossary.html#term-fit). When a classifier is passed, [decision\_function](../../glossary.html#term-decision_function) will be used in priority and it will fallback to [predict\_proba](../../glossary.html#term-predict_proba) if it is not available. When a regressor is passed, [predict](../../glossary.html#term-predict) is used.
   */
  estimator?: any

  /**
    The number of jobs to use for the computation: the `n\_classes \* ( n\_classes \- 1) / 2` OVO problems are computed in parallel.

    `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface OneVsOneClassifierDecisionFunctionOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]
}

export interface OneVsOneClassifierFitOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Multi-class targets.
   */
  y?: ArrayLike
}

export interface OneVsOneClassifierPartialFitOptions {
  /**
    Data.
   */
  X?: any[]

  /**
    Multi-class targets.
   */
  y?: ArrayLike

  /**
    Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls.
   */
  classes?: any
}

export interface OneVsOneClassifierPredictOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface OneVsOneClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for `X`.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
