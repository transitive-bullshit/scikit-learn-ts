/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  An AdaBoost classifier.

  An AdaBoost [\[1\]](#r33e4ec8c4ad5-1) classifier is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly classified instances are adjusted such that subsequent classifiers focus more on difficult cases.

  This class implements the algorithm based on [\[2\]](#r33e4ec8c4ad5-2).

  Read more in the [User Guide](../ensemble.html#adaboost).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html)
 */
export class AdaBoostClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The base estimator from which the boosted ensemble is built. Support for sample weighting is required, as well as proper `classes\_` and `n\_classes\_` attributes. If `undefined`, then the base estimator is [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier") initialized with `max\_depth=1`.
     */
    estimator?: any

    /**
      The maximum number of estimators at which boosting is terminated. In case of perfect fit, the learning procedure is stopped early. Values must be in the range `\[1, inf)`.

      @defaultValue `50`
     */
    n_estimators?: number

    /**
      Weight applied to each classifier at each boosting iteration. A higher learning rate increases the contribution of each classifier. There is a trade-off between the `learning\_rate` and `n\_estimators` parameters. Values must be in the range `(0.0, inf)`.

      @defaultValue `1`
     */
    learning_rate?: number

    /**
      If ‘SAMME.R’ then use the SAMME.R real boosting algorithm. `estimator` must support calculation of class probabilities. If ‘SAMME’ then use the SAMME discrete boosting algorithm. The SAMME.R algorithm typically converges faster than SAMME, achieving a lower test error with fewer boosting iterations.

      @defaultValue `'SAMME.R'`
     */
    algorithm?: 'SAMME' | 'SAMME.R'

    /**
      Controls the random seed given at each `estimator` at each boosting iteration. Thus, it is only used when `estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `AdaBoostClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'AdaBoostClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import AdaBoostClassifier
try: bridgeAdaBoostClassifier
except NameError: bridgeAdaBoostClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_AdaBoostClassifier = {'estimator': ${this.opts['estimator'] ?? undefined}, 'n_estimators': ${this.opts['n_estimators'] ?? undefined}, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_AdaBoostClassifier = {k: v for k, v in ctor_AdaBoostClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeAdaBoostClassifier[${this.id}] = AdaBoostClassifier(**ctor_AdaBoostClassifier)`

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

    await this._py.ex`del bridgeAdaBoostClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the decision function of `X`.
   */
  async decision_function(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_decision_function = {k: v for k, v in pms_AdaBoostClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_decision_function = bridgeAdaBoostClassifier[${this.id}].decision_function(**pms_AdaBoostClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_decision_function.tolist() if hasattr(res_AdaBoostClassifier_decision_function, 'tolist') else res_AdaBoostClassifier_decision_function`
  }

  /**
    Build a boosted classifier/regressor from the training set (X, y).
   */
  async fit(opts: {
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
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostClassifier_fit = {k: v for k, v in pms_AdaBoostClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_fit = bridgeAdaBoostClassifier[${this.id}].fit(**pms_AdaBoostClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_fit.tolist() if hasattr(res_AdaBoostClassifier_fit, 'tolist') else res_AdaBoostClassifier_fit`
  }

  /**
    Raise `NotImplementedError`.

    This estimator does not support metadata routing yet.
   */
  async get_metadata_routing(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdaBoostClassifier_get_metadata_routing = {}

pms_AdaBoostClassifier_get_metadata_routing = {k: v for k, v in pms_AdaBoostClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_get_metadata_routing = bridgeAdaBoostClassifier[${this.id}].get_metadata_routing(**pms_AdaBoostClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_get_metadata_routing.tolist() if hasattr(res_AdaBoostClassifier_get_metadata_routing, 'tolist') else res_AdaBoostClassifier_get_metadata_routing`
  }

  /**
    Predict classes for X.

    The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.
   */
  async predict(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_predict = {k: v for k, v in pms_AdaBoostClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_predict = bridgeAdaBoostClassifier[${this.id}].predict(**pms_AdaBoostClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_predict.tolist() if hasattr(res_AdaBoostClassifier_predict, 'tolist') else res_AdaBoostClassifier_predict`
  }

  /**
    Predict class log-probabilities for X.

    The predicted class log-probabilities of an input sample is computed as the weighted mean predicted class log-probabilities of the classifiers in the ensemble.
   */
  async predict_log_proba(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_predict_log_proba = {k: v for k, v in pms_AdaBoostClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_predict_log_proba = bridgeAdaBoostClassifier[${this.id}].predict_log_proba(**pms_AdaBoostClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_predict_log_proba.tolist() if hasattr(res_AdaBoostClassifier_predict_log_proba, 'tolist') else res_AdaBoostClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities for X.

    The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.
   */
  async predict_proba(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_predict_proba = {k: v for k, v in pms_AdaBoostClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_predict_proba = bridgeAdaBoostClassifier[${this.id}].predict_proba(**pms_AdaBoostClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_predict_proba.tolist() if hasattr(res_AdaBoostClassifier_predict_proba, 'tolist') else res_AdaBoostClassifier_predict_proba`
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
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdaBoostClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostClassifier_score = {k: v for k, v in pms_AdaBoostClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_score = bridgeAdaBoostClassifier[${this.id}].score(**pms_AdaBoostClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_score.tolist() if hasattr(res_AdaBoostClassifier_score, 'tolist') else res_AdaBoostClassifier_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_AdaBoostClassifier_set_fit_request = {k: v for k, v in pms_AdaBoostClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_set_fit_request = bridgeAdaBoostClassifier[${this.id}].set_fit_request(**pms_AdaBoostClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_set_fit_request.tolist() if hasattr(res_AdaBoostClassifier_set_fit_request, 'tolist') else res_AdaBoostClassifier_set_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_AdaBoostClassifier_set_score_request = {k: v for k, v in pms_AdaBoostClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_set_score_request = bridgeAdaBoostClassifier[${this.id}].set_score_request(**pms_AdaBoostClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_set_score_request.tolist() if hasattr(res_AdaBoostClassifier_set_score_request, 'tolist') else res_AdaBoostClassifier_set_score_request`
  }

  /**
    Compute decision function of `X` for each boosting iteration.

    This method allows monitoring (i.e. determine error on testing set) after each boosting iteration.
   */
  async staged_decision_function(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before staged_decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_staged_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_staged_decision_function = {k: v for k, v in pms_AdaBoostClassifier_staged_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_staged_decision_function = bridgeAdaBoostClassifier[${this.id}].staged_decision_function(**pms_AdaBoostClassifier_staged_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_staged_decision_function.tolist() if hasattr(res_AdaBoostClassifier_staged_decision_function, 'tolist') else res_AdaBoostClassifier_staged_decision_function`
  }

  /**
    Return staged predictions for X.

    The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

    This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.
   */
  async staged_predict(opts: {
    /**
      The input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before staged_predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_staged_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_staged_predict = {k: v for k, v in pms_AdaBoostClassifier_staged_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_staged_predict = bridgeAdaBoostClassifier[${this.id}].staged_predict(**pms_AdaBoostClassifier_staged_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_staged_predict.tolist() if hasattr(res_AdaBoostClassifier_staged_predict, 'tolist') else res_AdaBoostClassifier_staged_predict`
  }

  /**
    Predict class probabilities for X.

    The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

    This generator method yields the ensemble predicted class probabilities after each iteration of boosting and therefore allows monitoring, such as to determine the predicted class probabilities on a test set after each boost.
   */
  async staged_predict_proba(opts: {
    /**
      The training input samples. Sparse matrix can be CSC, CSR, COO, DOK, or LIL. COO, DOK, and LIL are converted to CSR.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before staged_predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_staged_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_AdaBoostClassifier_staged_predict_proba = {k: v for k, v in pms_AdaBoostClassifier_staged_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_staged_predict_proba = bridgeAdaBoostClassifier[${this.id}].staged_predict_proba(**pms_AdaBoostClassifier_staged_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_staged_predict_proba.tolist() if hasattr(res_AdaBoostClassifier_staged_predict_proba, 'tolist') else res_AdaBoostClassifier_staged_predict_proba`
  }

  /**
    Return staged scores for X, y.

    This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.
   */
  async staged_score(opts: {
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before staged_score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdaBoostClassifier_staged_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_AdaBoostClassifier_staged_score = {k: v for k, v in pms_AdaBoostClassifier_staged_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdaBoostClassifier_staged_score = bridgeAdaBoostClassifier[${this.id}].staged_score(**pms_AdaBoostClassifier_staged_score)`

    // convert the result from python to node.js
    return this
      ._py`res_AdaBoostClassifier_staged_score.tolist() if hasattr(res_AdaBoostClassifier_staged_score, 'tolist') else res_AdaBoostClassifier_staged_score`
  }

  /**
    The base estimator from which the ensemble is grown.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_estimator_ = bridgeAdaBoostClassifier[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_estimator_.tolist() if hasattr(attr_AdaBoostClassifier_estimator_, 'tolist') else attr_AdaBoostClassifier_estimator_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_estimators_ = bridgeAdaBoostClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_estimators_.tolist() if hasattr(attr_AdaBoostClassifier_estimators_, 'tolist') else attr_AdaBoostClassifier_estimators_`
    })()
  }

  /**
    The classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_classes_ = bridgeAdaBoostClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_classes_.tolist() if hasattr(attr_AdaBoostClassifier_classes_, 'tolist') else attr_AdaBoostClassifier_classes_`
    })()
  }

  /**
    The number of classes.
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_n_classes_ = bridgeAdaBoostClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_n_classes_.tolist() if hasattr(attr_AdaBoostClassifier_n_classes_, 'tolist') else attr_AdaBoostClassifier_n_classes_`
    })()
  }

  /**
    Weights for each estimator in the boosted ensemble.
   */
  get estimator_weights_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing estimator_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_estimator_weights_ = bridgeAdaBoostClassifier[${this.id}].estimator_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_estimator_weights_.tolist() if hasattr(attr_AdaBoostClassifier_estimator_weights_, 'tolist') else attr_AdaBoostClassifier_estimator_weights_`
    })()
  }

  /**
    Classification error for each estimator in the boosted ensemble.
   */
  get estimator_errors_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing estimator_errors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_estimator_errors_ = bridgeAdaBoostClassifier[${this.id}].estimator_errors_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_estimator_errors_.tolist() if hasattr(attr_AdaBoostClassifier_estimator_errors_, 'tolist') else attr_AdaBoostClassifier_estimator_errors_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_n_features_in_ = bridgeAdaBoostClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_n_features_in_.tolist() if hasattr(attr_AdaBoostClassifier_n_features_in_, 'tolist') else attr_AdaBoostClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdaBoostClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdaBoostClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdaBoostClassifier_feature_names_in_ = bridgeAdaBoostClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdaBoostClassifier_feature_names_in_.tolist() if hasattr(attr_AdaBoostClassifier_feature_names_in_, 'tolist') else attr_AdaBoostClassifier_feature_names_in_`
    })()
  }
}
