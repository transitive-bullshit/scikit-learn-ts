/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Classifier using Ridge regression.

  This classifier first converts the target values into `{-1, 1}` and then treats the problem as a regression task (multi-output regression in the multiclass case).

  Read more in the [User Guide](../linear_model.html#ridge-regression).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifier.html
 */
export class RidgeClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RidgeClassifierOptions) {
    this.id = `RidgeClassifier${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RidgeClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import RidgeClassifier
try: bridgeRidgeClassifier
except NameError: bridgeRidgeClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_RidgeClassifier = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'class_weight': ${this.opts['class_weight'] ?? undefined}, 'solver': ${
      this.opts['solver'] ?? undefined
    }, 'positive': ${this.opts['positive'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_RidgeClassifier = {k: v for k, v in ctor_RidgeClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeRidgeClassifier[${this.id}] = RidgeClassifier(**ctor_RidgeClassifier)`

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

    await this._py.ex`del bridgeRidgeClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(
    opts: RidgeClassifierDecisionFunctionOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RidgeClassifier_decision_function = {k: v for k, v in pms_RidgeClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifier_decision_function = bridgeRidgeClassifier[${this.id}].decision_function(**pms_RidgeClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifier_decision_function.tolist() if hasattr(res_RidgeClassifier_decision_function, 'tolist') else res_RidgeClassifier_decision_function`
  }

  /**
    Fit Ridge classifier model.
   */
  async fit(opts: RidgeClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeClassifier_fit = {k: v for k, v in pms_RidgeClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifier_fit = bridgeRidgeClassifier[${this.id}].fit(**pms_RidgeClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifier_fit.tolist() if hasattr(res_RidgeClassifier_fit, 'tolist') else res_RidgeClassifier_fit`
  }

  /**
    Predict class labels for samples in `X`.
   */
  async predict(opts: RidgeClassifierPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RidgeClassifier_predict = {k: v for k, v in pms_RidgeClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifier_predict = bridgeRidgeClassifier[${this.id}].predict(**pms_RidgeClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifier_predict.tolist() if hasattr(res_RidgeClassifier_predict, 'tolist') else res_RidgeClassifier_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: RidgeClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RidgeClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RidgeClassifier_score = {k: v for k, v in pms_RidgeClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RidgeClassifier_score = bridgeRidgeClassifier[${this.id}].score(**pms_RidgeClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RidgeClassifier_score.tolist() if hasattr(res_RidgeClassifier_score, 'tolist') else res_RidgeClassifier_score`
  }

  /**
    Coefficient of the features in the decision function.

    `coef\_` is of shape (1, n\_features) when the given problem is binary.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RidgeClassifier must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifier_coef_ = bridgeRidgeClassifier[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifier_coef_.tolist() if hasattr(attr_RidgeClassifier_coef_, 'tolist') else attr_RidgeClassifier_coef_`
    })()
  }

  /**
    Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.
   */
  get intercept_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifier must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifier_intercept_ = bridgeRidgeClassifier[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifier_intercept_.tolist() if hasattr(attr_RidgeClassifier_intercept_, 'tolist') else attr_RidgeClassifier_intercept_`
    })()
  }

  /**
    Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.
   */
  get n_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifier must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifier_n_iter_ = bridgeRidgeClassifier[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifier_n_iter_.tolist() if hasattr(attr_RidgeClassifier_n_iter_, 'tolist') else attr_RidgeClassifier_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifier_n_features_in_ = bridgeRidgeClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifier_n_features_in_.tolist() if hasattr(attr_RidgeClassifier_n_features_in_, 'tolist') else attr_RidgeClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RidgeClassifier instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RidgeClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RidgeClassifier_feature_names_in_ = bridgeRidgeClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RidgeClassifier_feature_names_in_.tolist() if hasattr(attr_RidgeClassifier_feature_names_in_, 'tolist') else attr_RidgeClassifier_feature_names_in_`
    })()
  }
}

export interface RidgeClassifierOptions {
  /**
    Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").

    @defaultValue `1`
   */
  alpha?: number

  /**
    Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (e.g. data is expected to be already centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    If `true`, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    Maximum number of iterations for conjugate gradient solver. The default value is determined by scipy.sparse.linalg.
   */
  max_iter?: number

  /**
    Precision of the solution. Note that `tol` has no effect for solvers ‘svd’ and ‘cholesky’.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

    The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
   */
  class_weight?: any | 'balanced'

  /**
    Solver to use in the computational routines:

    @defaultValue `'auto'`
   */
  solver?:
    | 'auto'
    | 'svd'
    | 'cholesky'
    | 'lsqr'
    | 'sparse_cg'
    | 'sag'
    | 'saga'
    | 'lbfgs'

  /**
    When set to `true`, forces the coefficients to be positive. Only ‘lbfgs’ solver is supported in this case.

    @defaultValue `false`
   */
  positive?: boolean

  /**
    Used when `solver` == ‘sag’ or ‘saga’ to shuffle the data. See [Glossary](../../glossary.html#term-random_state) for details.
   */
  random_state?: number
}

export interface RidgeClassifierDecisionFunctionOptions {
  /**
    The data matrix for which we want to get the confidence scores.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RidgeClassifierFitOptions {
  /**
    Training data.
   */
  X?: NDArray | SparseMatrix[]

  /**
    Target values.
   */
  y?: NDArray

  /**
    Individual weights for each sample. If given a float, every sample will have the same weight.
   */
  sample_weight?: number | NDArray
}

export interface RidgeClassifierPredictOptions {
  /**
    The data matrix for which we want to predict the targets.
   */
  X?: ArrayLike[]
}

export interface RidgeClassifierScoreOptions {
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
