/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Probability calibration with isotonic regression or logistic regression.

  This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the method implemented when `probabilities=True` for [`sklearn.svm`](../classes.html#module-sklearn.svm "sklearn.svm") estimators.

  Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

  The calibration is based on the [decision\_function](../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict\_proba](../../glossary.html#term-predict_proba).

  Read more in the [User Guide](../calibration.html#calibration).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html
 */
export class CalibratedClassifierCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: CalibratedClassifierCVOptions) {
    this.id = `CalibratedClassifierCV${crypto.randomUUID().split('-')[0]}`
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
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'CalibratedClassifierCV.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.calibration import CalibratedClassifierCV
try: bridgeCalibratedClassifierCV
except NameError: bridgeCalibratedClassifierCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_CalibratedClassifierCV = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'method': ${this.opts['method'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'ensemble': ${
      this.opts['ensemble'] ?? undefined
    }, 'base_estimator': ${this.opts['base_estimator'] ?? undefined}}

ctor_CalibratedClassifierCV = {k: v for k, v in ctor_CalibratedClassifierCV.items() if v is not None}`

    await this._py
      .ex`bridgeCalibratedClassifierCV[${this.id}] = CalibratedClassifierCV(**ctor_CalibratedClassifierCV)`

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

    await this._py.ex`del bridgeCalibratedClassifierCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the calibrated model.
   */
  async fit(opts: CalibratedClassifierCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('CalibratedClassifierCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_CalibratedClassifierCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_CalibratedClassifierCV_fit = {k: v for k, v in pms_CalibratedClassifierCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_fit = bridgeCalibratedClassifierCV[${this.id}].fit(**pms_CalibratedClassifierCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_fit.tolist() if hasattr(res_CalibratedClassifierCV_fit, 'tolist') else res_CalibratedClassifierCV_fit`
  }

  /**
    Predict the target of new samples.

    The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.
   */
  async predict(opts: CalibratedClassifierCVPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_CalibratedClassifierCV_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CalibratedClassifierCV_predict = {k: v for k, v in pms_CalibratedClassifierCV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_predict = bridgeCalibratedClassifierCV[${this.id}].predict(**pms_CalibratedClassifierCV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_predict.tolist() if hasattr(res_CalibratedClassifierCV_predict, 'tolist') else res_CalibratedClassifierCV_predict`
  }

  /**
    Calibrated probabilities of classification.

    This function returns calibrated probabilities of classification according to each class on an array of test vectors X.
   */
  async predict_proba(
    opts: CalibratedClassifierCVPredictProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CalibratedClassifierCV_predict_proba = {k: v for k, v in pms_CalibratedClassifierCV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_predict_proba = bridgeCalibratedClassifierCV[${this.id}].predict_proba(**pms_CalibratedClassifierCV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_predict_proba.tolist() if hasattr(res_CalibratedClassifierCV_predict_proba, 'tolist') else res_CalibratedClassifierCV_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: CalibratedClassifierCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('CalibratedClassifierCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_CalibratedClassifierCV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_CalibratedClassifierCV_score = {k: v for k, v in pms_CalibratedClassifierCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_score = bridgeCalibratedClassifierCV[${this.id}].score(**pms_CalibratedClassifierCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_score.tolist() if hasattr(res_CalibratedClassifierCV_score, 'tolist') else res_CalibratedClassifierCV_score`
  }

  /**
    The class labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibratedClassifierCV_classes_ = bridgeCalibratedClassifierCV[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibratedClassifierCV_classes_.tolist() if hasattr(attr_CalibratedClassifierCV_classes_, 'tolist') else attr_CalibratedClassifierCV_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibratedClassifierCV_n_features_in_ = bridgeCalibratedClassifierCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibratedClassifierCV_n_features_in_.tolist() if hasattr(attr_CalibratedClassifierCV_n_features_in_, 'tolist') else attr_CalibratedClassifierCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibratedClassifierCV_feature_names_in_ = bridgeCalibratedClassifierCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibratedClassifierCV_feature_names_in_.tolist() if hasattr(attr_CalibratedClassifierCV_feature_names_in_, 'tolist') else attr_CalibratedClassifierCV_feature_names_in_`
    })()
  }

  /**
    The list of classifier and calibrator pairs.
   */
  get calibrated_classifiers_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before accessing calibrated_classifiers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibratedClassifierCV_calibrated_classifiers_ = bridgeCalibratedClassifierCV[${this.id}].calibrated_classifiers_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibratedClassifierCV_calibrated_classifiers_.tolist() if hasattr(attr_CalibratedClassifierCV_calibrated_classifiers_, 'tolist') else attr_CalibratedClassifierCV_calibrated_classifiers_`
    })()
  }
}

export interface CalibratedClassifierCVOptions {
  /**
    The classifier whose output need to be calibrated to provide more accurate `predict\_proba` outputs. The default classifier is a [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").
   */
  estimator?: any

  /**
    The method to use for calibration. Can be ‘sigmoid’ which corresponds to Platt’s method (i.e. a logistic regression model) or ‘isotonic’ which is a non-parametric approach. It is not advised to use isotonic calibration with too few calibration samples `(<<1000)` since it tends to overfit.

    @defaultValue `'sigmoid'`
   */
  method?: 'sigmoid' | 'isotonic'

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number | 'prefit'

  /**
    Number of jobs to run in parallel. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors.

    Base estimator clones are fitted in parallel across cross-validation iterations. Therefore parallelism happens only when `cv != "prefit"`.

    See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Determines how the calibrator is fitted when `cv` is not `'prefit'`. Ignored if `cv='prefit'`.

    If `True`, the `estimator` is fitted using training data, and calibrated using testing data, for each `cv` fold. The final estimator is an ensemble of `n\_cv` fitted classifier and calibrator pairs, where `n\_cv` is the number of cross-validation folds. The output is the average predicted probabilities of all pairs.

    If `False`, `cv` is used to compute unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. At prediction time, the classifier used is the `estimator` trained on all the data. Note that this method is also internally implemented in [`sklearn.svm`](../classes.html#module-sklearn.svm "sklearn.svm") estimators with the `probabilities=True` parameter.

    @defaultValue `true`
   */
  ensemble?: boolean

  /**
    This parameter is deprecated. Use `estimator` instead.
   */
  base_estimator?: any
}

export interface CalibratedClassifierCVFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Sample weights. If None, then samples are equally weighted.
   */
  sample_weight?: ArrayLike

  /**
    Parameters to pass to the `fit` method of the underlying classifier.
   */
  fit_params?: any
}

export interface CalibratedClassifierCVPredictOptions {
  /**
    The samples, as accepted by `estimator.predict`.
   */
  X?: ArrayLike[]
}

export interface CalibratedClassifierCVPredictProbaOptions {
  /**
    The samples, as accepted by `estimator.predict\_proba`.
   */
  X?: ArrayLike[]
}

export interface CalibratedClassifierCVScoreOptions {
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
