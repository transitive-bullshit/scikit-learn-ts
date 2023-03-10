/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  (Error-Correcting) Output-Code multiclass strategy.

  Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted.  At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < code_size < 1) or for making the model more robust to errors (code_size > 1). See the documentation for more details.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html
 */
export class OutputCodeClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: OutputCodeClassifierOptions) {
    this.id = `OutputCodeClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OutputCodeClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multiclass import OutputCodeClassifier
try: bridgeOutputCodeClassifier
except NameError: bridgeOutputCodeClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_OutputCodeClassifier = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'code_size': ${this.opts['code_size'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_OutputCodeClassifier = {k: v for k, v in ctor_OutputCodeClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeOutputCodeClassifier[${this.id}] = OutputCodeClassifier(**ctor_OutputCodeClassifier)`

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

    await this._py.ex`del bridgeOutputCodeClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit underlying estimators.
   */
  async fit(opts: OutputCodeClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_OutputCodeClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_OutputCodeClassifier_fit = {k: v for k, v in pms_OutputCodeClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_fit = bridgeOutputCodeClassifier[${this.id}].fit(**pms_OutputCodeClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_fit.tolist() if hasattr(res_OutputCodeClassifier_fit, 'tolist') else res_OutputCodeClassifier_fit`
  }

  /**
    Predict multi-class targets using underlying estimators.
   */
  async predict(opts: OutputCodeClassifierPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_OutputCodeClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_OutputCodeClassifier_predict = {k: v for k, v in pms_OutputCodeClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_predict = bridgeOutputCodeClassifier[${this.id}].predict(**pms_OutputCodeClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_predict.tolist() if hasattr(res_OutputCodeClassifier_predict, 'tolist') else res_OutputCodeClassifier_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: OutputCodeClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_OutputCodeClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_OutputCodeClassifier_score = {k: v for k, v in pms_OutputCodeClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_score = bridgeOutputCodeClassifier[${this.id}].score(**pms_OutputCodeClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_score.tolist() if hasattr(res_OutputCodeClassifier_score, 'tolist') else res_OutputCodeClassifier_score`
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_estimators_ = bridgeOutputCodeClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_estimators_.tolist() if hasattr(attr_OutputCodeClassifier_estimators_, 'tolist') else attr_OutputCodeClassifier_estimators_`
    })()
  }

  /**
    Array containing labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_classes_ = bridgeOutputCodeClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_classes_.tolist() if hasattr(attr_OutputCodeClassifier_classes_, 'tolist') else attr_OutputCodeClassifier_classes_`
    })()
  }

  /**
    Binary array containing the code of each class.
   */
  get code_book_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing code_book_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_code_book_ = bridgeOutputCodeClassifier[${this.id}].code_book_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_code_book_.tolist() if hasattr(attr_OutputCodeClassifier_code_book_, 'tolist') else attr_OutputCodeClassifier_code_book_`
    })()
  }

  /**
    Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_n_features_in_ = bridgeOutputCodeClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_n_features_in_.tolist() if hasattr(attr_OutputCodeClassifier_n_features_in_, 'tolist') else attr_OutputCodeClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_feature_names_in_ = bridgeOutputCodeClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_feature_names_in_.tolist() if hasattr(attr_OutputCodeClassifier_feature_names_in_, 'tolist') else attr_OutputCodeClassifier_feature_names_in_`
    })()
  }
}

export interface OutputCodeClassifierOptions {
  /**
    An estimator object implementing fit and one of decision_function or predict_proba.
   */
  estimator?: any

  /**
    Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.

    @defaultValue `1.5`
   */
  code_size?: number

  /**
    The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    The number of jobs to use for the computation: the multiclass problems are computed in parallel.

    None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number
}

export interface OutputCodeClassifierFitOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Multi-class targets.
   */
  y?: ArrayLike
}

export interface OutputCodeClassifierPredictOptions {
  /**
    Data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface OutputCodeClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
