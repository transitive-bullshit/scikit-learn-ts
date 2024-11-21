/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Probability calibration with isotonic regression or logistic regression.

  This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross_val_predict`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the prediction method implemented when `probabilities=True` for [`SVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") and [`NuSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html#sklearn.svm.NuSVC "sklearn.svm.NuSVC") estimators (see [User Guide](https://scikit-learn.org/stable/modules/generated/../svm.html#scores-probabilities) for details).

  Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

  The calibration is based on the [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../calibration.html#calibration). In order to learn more on the CalibratedClassifierCV class, see the following calibration examples: [Probability calibration of classifiers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration.html#sphx-glr-auto-examples-calibration-plot-calibration-py), [Probability Calibration curves](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py), and [Probability Calibration for 3-class classification](https://scikit-learn.org/stable/modules/generated/../../auto_examples/calibration/plot_calibration_multiclass.html#sphx-glr-auto-examples-calibration-plot-calibration-multiclass-py).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html)
 */
export class CalibratedClassifierCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The classifier whose output need to be calibrated to provide more accurate `predict_proba` outputs. The default classifier is a [`LinearSVC`](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC").
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
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors.

      Base estimator clones are fitted in parallel across cross-validation iterations. Therefore parallelism happens only when `cv != "prefit"`.

      See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Determines how the calibrator is fitted when `cv` is not `'prefit'`. Ignored if `cv='prefit'`.

      If `true`, the `estimator` is fitted using training data, and calibrated using testing data, for each `cv` fold. The final estimator is an ensemble of `n_cv` fitted classifier and calibrator pairs, where `n_cv` is the number of cross-validation folds. The output is the average predicted probabilities of all pairs.

      If `false`, `cv` is used to compute unbiased predictions, via [`cross_val_predict`](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. At prediction time, the classifier used is the `estimator` trained on all the data. Note that this method is also internally implemented in [`sklearn.svm`](https://scikit-learn.org/stable/modules/generated/../../api/sklearn.svm.html#module-sklearn.svm "sklearn.svm") estimators with the `probabilities=True` parameter.

      @defaultValue `true`
     */
    ensemble?: boolean
  }) {
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
    await this._py
      .ex`ctor_CalibratedClassifierCV = {'estimator': ${this.opts['estimator'] ?? undefined}, 'method': ${this.opts['method'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'ensemble': ${this.opts['ensemble'] ?? undefined}}

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
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted.
     */
    sample_weight?: ArrayLike

    /**
      Parameters to pass to the `fit` method of the underlying classifier.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('CalibratedClassifierCV must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_CalibratedClassifierCV_fit = {k: v for k, v in pms_CalibratedClassifierCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_fit = bridgeCalibratedClassifierCV[${this.id}].fit(**pms_CalibratedClassifierCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_fit.tolist() if hasattr(res_CalibratedClassifierCV_fit, 'tolist') else res_CalibratedClassifierCV_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_CalibratedClassifierCV_get_metadata_routing = {k: v for k, v in pms_CalibratedClassifierCV_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_get_metadata_routing = bridgeCalibratedClassifierCV[${this.id}].get_metadata_routing(**pms_CalibratedClassifierCV_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_get_metadata_routing.tolist() if hasattr(res_CalibratedClassifierCV_get_metadata_routing, 'tolist') else res_CalibratedClassifierCV_get_metadata_routing`
  }

  /**
    Predict the target of new samples.

    The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.
   */
  async predict(opts: {
    /**
      The samples, as accepted by `estimator.predict`.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
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
    await this._py
      .ex`pms_CalibratedClassifierCV_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

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
  async predict_proba(opts: {
    /**
      The samples, as accepted by `estimator.predict_proba`.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
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
      .ex`pms_CalibratedClassifierCV_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

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
  async score(opts: {
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('CalibratedClassifierCV must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_CalibratedClassifierCV_score = {k: v for k, v in pms_CalibratedClassifierCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_score = bridgeCalibratedClassifierCV[${this.id}].score(**pms_CalibratedClassifierCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_score.tolist() if hasattr(res_CalibratedClassifierCV_score, 'tolist') else res_CalibratedClassifierCV_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_CalibratedClassifierCV_set_fit_request = {k: v for k, v in pms_CalibratedClassifierCV_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_set_fit_request = bridgeCalibratedClassifierCV[${this.id}].set_fit_request(**pms_CalibratedClassifierCV_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_set_fit_request.tolist() if hasattr(res_CalibratedClassifierCV_set_fit_request, 'tolist') else res_CalibratedClassifierCV_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibratedClassifierCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibratedClassifierCV must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibratedClassifierCV_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_CalibratedClassifierCV_set_score_request = {k: v for k, v in pms_CalibratedClassifierCV_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibratedClassifierCV_set_score_request = bridgeCalibratedClassifierCV[${this.id}].set_score_request(**pms_CalibratedClassifierCV_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibratedClassifierCV_set_score_request.tolist() if hasattr(res_CalibratedClassifierCV_set_score_request, 'tolist') else res_CalibratedClassifierCV_set_score_request`
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
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
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
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
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
