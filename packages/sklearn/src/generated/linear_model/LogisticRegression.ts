/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Logistic Regression (aka logit, MaxEnt) classifier.

  In the multiclass case, the training algorithm uses the one-vs-rest (OvR) scheme if the ‘multi_class’ option is set to ‘ovr’, and uses the cross-entropy loss if the ‘multi_class’ option is set to ‘multinomial’. (Currently the ‘multinomial’ option is supported only by the ‘lbfgs’, ‘sag’, ‘saga’ and ‘newton-cg’ solvers.)

  This class implements regularized logistic regression using the ‘liblinear’ library, ‘newton-cg’, ‘sag’, ‘saga’ and ‘lbfgs’ solvers. Note that regularization is applied by default. It can handle both dense and sparse input. Use C-ordered arrays or CSR matrices containing 64-bit floats for optimal performance; any other input format will be converted (and copied).

  The ‘newton-cg’, ‘sag’, and ‘lbfgs’ solvers support only L2 regularization with primal formulation, or no regularization. The ‘liblinear’ solver supports both L1 and L2 regularization, with a dual formulation only for the L2 penalty. The Elastic-Net regularization is only supported by the ‘saga’ solver.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html
 */
export class LogisticRegression {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LogisticRegressionOptions) {
    this.id = `LogisticRegression${crypto.randomUUID().split('-')[0]}`
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
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LogisticRegression.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import LogisticRegression
try: bridgeLogisticRegression
except NameError: bridgeLogisticRegression = {}
`

    // set up constructor params
    await this._py.ex`ctor_LogisticRegression = {'penalty': ${
      this.opts['penalty'] ?? undefined
    }, 'dual': ${this.opts['dual'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'C': ${this.opts['C'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'intercept_scaling': ${
      this.opts['intercept_scaling'] ?? undefined
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'solver': ${
      this.opts['solver'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'multi_class': ${
      this.opts['multi_class'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'l1_ratio': ${
      this.opts['l1_ratio'] ?? undefined
    }}

ctor_LogisticRegression = {k: v for k, v in ctor_LogisticRegression.items() if v is not None}`

    await this._py
      .ex`bridgeLogisticRegression[${this.id}] = LogisticRegression(**ctor_LogisticRegression)`

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

    await this._py.ex`del bridgeLogisticRegression[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(
    opts: LogisticRegressionDecisionFunctionOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegression_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LogisticRegression_decision_function = {k: v for k, v in pms_LogisticRegression_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_decision_function = bridgeLogisticRegression[${this.id}].decision_function(**pms_LogisticRegression_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_decision_function.tolist() if hasattr(res_LogisticRegression_decision_function, 'tolist') else res_LogisticRegression_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the coef_ member (back) to a numpy.ndarray. This is the default format of coef_ and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: LogisticRegressionDensifyOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegression must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_densify = {}

pms_LogisticRegression_densify = {k: v for k, v in pms_LogisticRegression_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_densify = bridgeLogisticRegression[${this.id}].densify(**pms_LogisticRegression_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_densify.tolist() if hasattr(res_LogisticRegression_densify, 'tolist') else res_LogisticRegression_densify`
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: LogisticRegressionFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegression must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LogisticRegression_fit = {k: v for k, v in pms_LogisticRegression_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_fit = bridgeLogisticRegression[${this.id}].fit(**pms_LogisticRegression_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_fit.tolist() if hasattr(res_LogisticRegression_fit, 'tolist') else res_LogisticRegression_fit`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(opts: LogisticRegressionPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegression must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LogisticRegression_predict = {k: v for k, v in pms_LogisticRegression_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_predict = bridgeLogisticRegression[${this.id}].predict(**pms_LogisticRegression_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_predict.tolist() if hasattr(res_LogisticRegression_predict, 'tolist') else res_LogisticRegression_predict`
  }

  /**
    Predict logarithm of probability estimates.

    The returned estimates for all classes are ordered by the label of classes.
   */
  async predict_log_proba(
    opts: LogisticRegressionPredictLogProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LogisticRegression_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LogisticRegression_predict_log_proba = {k: v for k, v in pms_LogisticRegression_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_predict_log_proba = bridgeLogisticRegression[${this.id}].predict_log_proba(**pms_LogisticRegression_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_predict_log_proba.tolist() if hasattr(res_LogisticRegression_predict_log_proba, 'tolist') else res_LogisticRegression_predict_log_proba`
  }

  /**
    Probability estimates.

    The returned estimates for all classes are ordered by the label of classes.

    For a multi_class problem, if multi_class is set to be “multinomial” the softmax function is used to find the predicted probability of each class. Else use a one-vs-rest approach, i.e calculate the probability of each class assuming it to be positive using the logistic function. and normalize these values across all the classes.
   */
  async predict_proba(
    opts: LogisticRegressionPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LogisticRegression_predict_proba = {k: v for k, v in pms_LogisticRegression_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_predict_proba = bridgeLogisticRegression[${this.id}].predict_proba(**pms_LogisticRegression_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_predict_proba.tolist() if hasattr(res_LogisticRegression_predict_proba, 'tolist') else res_LogisticRegression_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: LogisticRegressionScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegression must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LogisticRegression_score = {k: v for k, v in pms_LogisticRegression_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_score = bridgeLogisticRegression[${this.id}].score(**pms_LogisticRegression_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_score.tolist() if hasattr(res_LogisticRegression_score, 'tolist') else res_LogisticRegression_score`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the coef_ member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The intercept_ member is not converted.
   */
  async sparsify(opts: LogisticRegressionSparsifyOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LogisticRegression must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_LogisticRegression_sparsify = {}

pms_LogisticRegression_sparsify = {k: v for k, v in pms_LogisticRegression_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LogisticRegression_sparsify = bridgeLogisticRegression[${this.id}].sparsify(**pms_LogisticRegression_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_LogisticRegression_sparsify.tolist() if hasattr(res_LogisticRegression_sparsify, 'tolist') else res_LogisticRegression_sparsify`
  }

  /**
    A list of class labels known to the classifier.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_classes_ = bridgeLogisticRegression[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_classes_.tolist() if hasattr(attr_LogisticRegression_classes_, 'tolist') else attr_LogisticRegression_classes_`
    })()
  }

  /**
    Coefficient of the features in the decision function.

    coef_ is of shape (1, n_features) when the given problem is binary. In particular, when multi_class='multinomial', coef_ corresponds to outcome 1 (True) and -coef_ corresponds to outcome 0 (False).
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_coef_ = bridgeLogisticRegression[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_coef_.tolist() if hasattr(attr_LogisticRegression_coef_, 'tolist') else attr_LogisticRegression_coef_`
    })()
  }

  /**
    Intercept (a.k.a. bias) added to the decision function.

    If fit_intercept is set to False, the intercept is set to zero. intercept_ is of shape (1,) when the given problem is binary. In particular, when multi_class='multinomial', intercept_ corresponds to outcome 1 (True) and -intercept_ corresponds to outcome 0 (False).
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_intercept_ = bridgeLogisticRegression[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_intercept_.tolist() if hasattr(attr_LogisticRegression_intercept_, 'tolist') else attr_LogisticRegression_intercept_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_n_features_in_ = bridgeLogisticRegression[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_n_features_in_.tolist() if hasattr(attr_LogisticRegression_n_features_in_, 'tolist') else attr_LogisticRegression_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_feature_names_in_ = bridgeLogisticRegression[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_feature_names_in_.tolist() if hasattr(attr_LogisticRegression_feature_names_in_, 'tolist') else attr_LogisticRegression_feature_names_in_`
    })()
  }

  /**
    Actual number of iterations for all classes. If binary or multinomial, it returns only 1 element. For liblinear solver, only the maximum number of iteration across all classes is given.
   */
  get n_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LogisticRegression instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LogisticRegression must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LogisticRegression_n_iter_ = bridgeLogisticRegression[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LogisticRegression_n_iter_.tolist() if hasattr(attr_LogisticRegression_n_iter_, 'tolist') else attr_LogisticRegression_n_iter_`
    })()
  }
}

export interface LogisticRegressionOptions {
  /**
    Specify the norm of the penalty:

    @defaultValue `'l2'`
   */
  penalty?: 'l1' | 'l2' | 'elasticnet'

  /**
    Dual or primal formulation. Dual formulation is only implemented for l2 penalty with liblinear solver. Prefer dual=False when n_samples > n_features.

    @defaultValue `false`
   */
  dual?: boolean

  /**
    Tolerance for stopping criteria.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Inverse of regularization strength; must be a positive float. Like in support vector machines, smaller values specify stronger regularization.

    @defaultValue `1`
   */
  C?: number

  /**
    Specifies if a constant (a.k.a. bias or intercept) should be added to the decision function.

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    Useful only when the solver ‘liblinear’ is used and self.fit_intercept is set to True. In this case, x becomes [x, self.intercept_scaling], i.e. a “synthetic” feature with constant value equal to intercept_scaling is appended to the instance vector. The intercept becomes intercept_scaling * synthetic_feature_weight.

    Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept_scaling has to be increased.

    @defaultValue `1`
   */
  intercept_scaling?: number

  /**
    Weights associated with classes in the form {class_label: weight}. If not given, all classes are supposed to have weight one.

    The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as n_samples / (n_classes * np.bincount(y)).

    Note that these weights will be multiplied with sample_weight (passed through the fit method) if sample_weight is specified.
   */
  class_weight?: any | 'balanced'

  /**
    Used when solver == ‘sag’, ‘saga’ or ‘liblinear’ to shuffle the data. See Glossary for details.
   */
  random_state?: number

  /**
    Algorithm to use in the optimization problem. Default is ‘lbfgs’. To choose a solver, you might want to consider the following aspects:

    @defaultValue `'lbfgs'`
   */
  solver?:
    | 'lbfgs'
    | 'liblinear'
    | 'newton-cg'
    | 'newton-cholesky'
    | 'sag'
    | 'saga'

  /**
    Maximum number of iterations taken for the solvers to converge.

    @defaultValue `100`
   */
  max_iter?: number

  /**
    If the option chosen is ‘ovr’, then a binary problem is fit for each label. For ‘multinomial’ the loss minimised is the multinomial loss fit across the entire probability distribution, even when the data is binary. ‘multinomial’ is unavailable when solver=’liblinear’. ‘auto’ selects ‘ovr’ if the data is binary, or if solver=’liblinear’, and otherwise selects ‘multinomial’.

    @defaultValue `'auto'`
   */
  multi_class?: 'auto' | 'ovr' | 'multinomial'

  /**
    For the liblinear and lbfgs solvers set verbose to any positive number for verbosity.

    @defaultValue `0`
   */
  verbose?: number

  /**
    When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. Useless for liblinear solver. See the Glossary.

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    Number of CPU cores used when parallelizing over classes if multi_class=’ovr’”. This parameter is ignored when the solver is set to ‘liblinear’ regardless of whether ‘multi_class’ is specified or not. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number

  /**
    The Elastic-Net mixing parameter, with 0 <= l1_ratio <= 1. Only used if penalty='elasticnet'. Setting l1_ratio=0 is equivalent to using penalty='l2', while setting l1_ratio=1 is equivalent to using penalty='l1'. For 0 < l1_ratio <1, the penalty is a combination of L1 and L2.
   */
  l1_ratio?: number
}

export interface LogisticRegressionDecisionFunctionOptions {
  /**
    The data matrix for which we want to get the confidence scores.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface LogisticRegressionDensifyOptions {}

export interface LogisticRegressionFitOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target vector relative to X.
   */
  y?: ArrayLike

  /**
    Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.
   */
  sample_weight?: any
}

export interface LogisticRegressionPredictOptions {
  /**
    The data matrix for which we want to get the predictions.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface LogisticRegressionPredictLogProbaOptions {
  /**
    Vector to be scored, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike[]
}

export interface LogisticRegressionPredictProbaOptions {
  /**
    Vector to be scored, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike[]
}

export interface LogisticRegressionScoreOptions {
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

export interface LogisticRegressionSparsifyOptions {}
