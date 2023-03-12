/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  One-vs-the-rest (OvR) multiclass strategy.

  Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n\_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

  OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

  Read more in the [User Guide](../multiclass.html#ovr-classification).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html
 */
export class OneVsRestClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OneVsRestClassifierOptions) {
    this.id = `OneVsRestClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OneVsRestClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multiclass import OneVsRestClassifier
try: bridgeOneVsRestClassifier
except NameError: bridgeOneVsRestClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_OneVsRestClassifier = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }}

ctor_OneVsRestClassifier = {k: v for k, v in ctor_OneVsRestClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeOneVsRestClassifier[${this.id}] = OneVsRestClassifier(**ctor_OneVsRestClassifier)`

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

    await this._py.ex`del bridgeOneVsRestClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Decision function for the OneVsRestClassifier.

    Return the distance of each sample from the decision boundary for each class. This can only be used with estimators which implement the `decision\_function` method.
   */
  async decision_function(
    opts: OneVsRestClassifierDecisionFunctionOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OneVsRestClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneVsRestClassifier_decision_function = {k: v for k, v in pms_OneVsRestClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_decision_function = bridgeOneVsRestClassifier[${this.id}].decision_function(**pms_OneVsRestClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_decision_function.tolist() if hasattr(res_OneVsRestClassifier_decision_function, 'tolist') else res_OneVsRestClassifier_decision_function`
  }

  /**
    Fit underlying estimators.
   */
  async fit(opts: OneVsRestClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsRestClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_OneVsRestClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_OneVsRestClassifier_fit = {k: v for k, v in pms_OneVsRestClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_fit = bridgeOneVsRestClassifier[${this.id}].fit(**pms_OneVsRestClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_fit.tolist() if hasattr(res_OneVsRestClassifier_fit, 'tolist') else res_OneVsRestClassifier_fit`
  }

  /**
    Partially fit underlying estimators.

    Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration.
   */
  async partial_fit(opts: OneVsRestClassifierPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_OneVsRestClassifier_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': ${
      opts['classes'] ?? undefined
    }}

pms_OneVsRestClassifier_partial_fit = {k: v for k, v in pms_OneVsRestClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_partial_fit = bridgeOneVsRestClassifier[${this.id}].partial_fit(**pms_OneVsRestClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_partial_fit.tolist() if hasattr(res_OneVsRestClassifier_partial_fit, 'tolist') else res_OneVsRestClassifier_partial_fit`
  }

  /**
    Predict multi-class targets using underlying estimators.
   */
  async predict(
    opts: OneVsRestClassifierPredictOptions
  ): Promise<ArrayLike | SparseMatrix> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsRestClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_OneVsRestClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneVsRestClassifier_predict = {k: v for k, v in pms_OneVsRestClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_predict = bridgeOneVsRestClassifier[${this.id}].predict(**pms_OneVsRestClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_predict.tolist() if hasattr(res_OneVsRestClassifier_predict, 'tolist') else res_OneVsRestClassifier_predict`
  }

  /**
    Probability estimates.

    The returned estimates for all classes are ordered by label of classes.

    Note that in the multilabel case, each sample can have any number of labels. This returns the marginal probability that the given sample has the label in question. For example, it is entirely consistent that two labels both have a 90% probability of applying to a given sample.

    In the single label multiclass case, the rows of the returned matrix sum to 1.
   */
  async predict_proba(
    opts: OneVsRestClassifierPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_OneVsRestClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OneVsRestClassifier_predict_proba = {k: v for k, v in pms_OneVsRestClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_predict_proba = bridgeOneVsRestClassifier[${this.id}].predict_proba(**pms_OneVsRestClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_predict_proba.tolist() if hasattr(res_OneVsRestClassifier_predict_proba, 'tolist') else res_OneVsRestClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: OneVsRestClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OneVsRestClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_OneVsRestClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_OneVsRestClassifier_score = {k: v for k, v in pms_OneVsRestClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneVsRestClassifier_score = bridgeOneVsRestClassifier[${this.id}].score(**pms_OneVsRestClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OneVsRestClassifier_score.tolist() if hasattr(res_OneVsRestClassifier_score, 'tolist') else res_OneVsRestClassifier_score`
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsRestClassifier_estimators_ = bridgeOneVsRestClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsRestClassifier_estimators_.tolist() if hasattr(attr_OneVsRestClassifier_estimators_, 'tolist') else attr_OneVsRestClassifier_estimators_`
    })()
  }

  /**
    Class labels.
   */
  get classes_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsRestClassifier_classes_ = bridgeOneVsRestClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsRestClassifier_classes_.tolist() if hasattr(attr_OneVsRestClassifier_classes_, 'tolist') else attr_OneVsRestClassifier_classes_`
    })()
  }

  /**
    Object used to transform multiclass labels to binary labels and vice-versa.
   */
  get label_binarizer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before accessing label_binarizer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsRestClassifier_label_binarizer_ = bridgeOneVsRestClassifier[${this.id}].label_binarizer_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsRestClassifier_label_binarizer_.tolist() if hasattr(attr_OneVsRestClassifier_label_binarizer_, 'tolist') else attr_OneVsRestClassifier_label_binarizer_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsRestClassifier_n_features_in_ = bridgeOneVsRestClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsRestClassifier_n_features_in_.tolist() if hasattr(attr_OneVsRestClassifier_n_features_in_, 'tolist') else attr_OneVsRestClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OneVsRestClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneVsRestClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneVsRestClassifier_feature_names_in_ = bridgeOneVsRestClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneVsRestClassifier_feature_names_in_.tolist() if hasattr(attr_OneVsRestClassifier_feature_names_in_, 'tolist') else attr_OneVsRestClassifier_feature_names_in_`
    })()
  }
}

export interface OneVsRestClassifierOptions {
  /**
    A regressor or a classifier that implements [fit](../../glossary.html#term-fit). When a classifier is passed, [decision\_function](../../glossary.html#term-decision_function) will be used in priority and it will fallback to [predict\_proba](../../glossary.html#term-predict_proba) if it is not available. When a regressor is passed, [predict](../../glossary.html#term-predict) is used.
   */
  estimator?: any

  /**
    The number of jobs to use for the computation: the `n\_classes` one-vs-rest problems are computed in parallel.

    `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    The verbosity level, if non zero, progress messages are printed. Below 50, the output is sent to stderr. Otherwise, the output is sent to stdout. The frequency of the messages increases with the verbosity level, reporting all iterations at 10. See [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.3.0.dev0)") for more details.

    @defaultValue `0`
   */
  verbose?: number
}

export interface OneVsRestClassifierDecisionFunctionOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]
}

export interface OneVsRestClassifierFitOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Multi-class targets. An indicator matrix turns on multilabel classification.
   */
  y?: ArrayLike | SparseMatrix
}

export interface OneVsRestClassifierPartialFitOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Multi-class targets. An indicator matrix turns on multilabel classification.
   */
  y?: ArrayLike | SparseMatrix

  /**
    Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls.
   */
  classes?: any
}

export interface OneVsRestClassifierPredictOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface OneVsRestClassifierPredictProbaOptions {
  /**
    Input data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface OneVsRestClassifierScoreOptions {
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
