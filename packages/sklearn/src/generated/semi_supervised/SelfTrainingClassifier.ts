/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Self-training classifier.

  This [metaestimator](../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

  The classifier will continue iterating until either max\_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

  Read more in the [User Guide](../semi_supervised.html#self-training).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html)
 */
export class SelfTrainingClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      An estimator object implementing `fit` and `predict\_proba`. Invoking the `fit` method will fit a clone of the passed estimator, which will be stored in the `base\_estimator\_` attribute.
     */
    base_estimator?: any

    /**
      The decision threshold for use with `criterion='threshold'`. Should be in \[0, 1). When using the `'threshold'` criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.

      @defaultValue `0.75`
     */
    threshold?: number

    /**
      The selection criterion used to select which labels to add to the training set. If `'threshold'`, pseudo-labels with prediction probabilities above `threshold` are added to the dataset. If `'k\_best'`, the `k\_best` pseudo-labels with highest prediction probabilities are added to the dataset. When using the ‘threshold’ criterion, a [well calibrated classifier](../calibration.html#calibration) should be used.

      @defaultValue `'threshold'`
     */
    criterion?: 'threshold' | 'k_best'

    /**
      The amount of samples to add in each iteration. Only used when `criterion='k\_best'`.

      @defaultValue `10`
     */
    k_best?: number

    /**
      Maximum number of iterations allowed. Should be greater than or equal to 0. If it is `undefined`, the classifier will continue to predict labels until no new pseudo-labels are added, or all unlabeled samples have been labeled.

      @defaultValue `10`
     */
    max_iter?: number

    /**
      Enable verbose output.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `SelfTrainingClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SelfTrainingClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.semi_supervised import SelfTrainingClassifier
try: bridgeSelfTrainingClassifier
except NameError: bridgeSelfTrainingClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_SelfTrainingClassifier = {'base_estimator': ${
      this.opts['base_estimator'] ?? undefined
    }, 'threshold': ${this.opts['threshold'] ?? undefined}, 'criterion': ${
      this.opts['criterion'] ?? undefined
    }, 'k_best': ${this.opts['k_best'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_SelfTrainingClassifier = {k: v for k, v in ctor_SelfTrainingClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeSelfTrainingClassifier[${this.id}] = SelfTrainingClassifier(**ctor_SelfTrainingClassifier)`

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

    await this._py.ex`del bridgeSelfTrainingClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Call decision function of the `base\_estimator`.
   */
  async decision_function(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelfTrainingClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelfTrainingClassifier_decision_function = {k: v for k, v in pms_SelfTrainingClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_decision_function = bridgeSelfTrainingClassifier[${this.id}].decision_function(**pms_SelfTrainingClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_decision_function.tolist() if hasattr(res_SelfTrainingClassifier_decision_function, 'tolist') else res_SelfTrainingClassifier_decision_function`
  }

  /**
    Fit self-training classifier using `X`, `y` as training data.
   */
  async fit(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Array representing the labels. Unlabeled samples should have the label -1.
     */
    y?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SelfTrainingClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SelfTrainingClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_SelfTrainingClassifier_fit = {k: v for k, v in pms_SelfTrainingClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_fit = bridgeSelfTrainingClassifier[${this.id}].fit(**pms_SelfTrainingClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_fit.tolist() if hasattr(res_SelfTrainingClassifier_fit, 'tolist') else res_SelfTrainingClassifier_fit`
  }

  /**
    Predict the classes of `X`.
   */
  async predict(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_SelfTrainingClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelfTrainingClassifier_predict = {k: v for k, v in pms_SelfTrainingClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_predict = bridgeSelfTrainingClassifier[${this.id}].predict(**pms_SelfTrainingClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_predict.tolist() if hasattr(res_SelfTrainingClassifier_predict, 'tolist') else res_SelfTrainingClassifier_predict`
  }

  /**
    Predict log probability for each possible outcome.
   */
  async predict_log_proba(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelfTrainingClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelfTrainingClassifier_predict_log_proba = {k: v for k, v in pms_SelfTrainingClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_predict_log_proba = bridgeSelfTrainingClassifier[${this.id}].predict_log_proba(**pms_SelfTrainingClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_predict_log_proba.tolist() if hasattr(res_SelfTrainingClassifier_predict_log_proba, 'tolist') else res_SelfTrainingClassifier_predict_log_proba`
  }

  /**
    Predict probability for each possible outcome.
   */
  async predict_proba(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelfTrainingClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelfTrainingClassifier_predict_proba = {k: v for k, v in pms_SelfTrainingClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_predict_proba = bridgeSelfTrainingClassifier[${this.id}].predict_proba(**pms_SelfTrainingClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_predict_proba.tolist() if hasattr(res_SelfTrainingClassifier_predict_proba, 'tolist') else res_SelfTrainingClassifier_predict_proba`
  }

  /**
    Call score on the `base\_estimator`.
   */
  async score(opts: {
    /**
      Array representing the data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Array representing the labels.
     */
    y?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SelfTrainingClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_SelfTrainingClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_SelfTrainingClassifier_score = {k: v for k, v in pms_SelfTrainingClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelfTrainingClassifier_score = bridgeSelfTrainingClassifier[${this.id}].score(**pms_SelfTrainingClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_SelfTrainingClassifier_score.tolist() if hasattr(res_SelfTrainingClassifier_score, 'tolist') else res_SelfTrainingClassifier_score`
  }

  /**
    The fitted estimator.
   */
  get base_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing base_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_base_estimator_ = bridgeSelfTrainingClassifier[${this.id}].base_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_base_estimator_.tolist() if hasattr(attr_SelfTrainingClassifier_base_estimator_, 'tolist') else attr_SelfTrainingClassifier_base_estimator_`
    })()
  }

  /**
    Class labels for each output. (Taken from the trained `base\_estimator\_`).
   */
  get classes_(): Promise<NDArray | any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_classes_ = bridgeSelfTrainingClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_classes_.tolist() if hasattr(attr_SelfTrainingClassifier_classes_, 'tolist') else attr_SelfTrainingClassifier_classes_`
    })()
  }

  /**
    The labels used for the final fit of the classifier, including pseudo-labels added during fit.
   */
  get transduction_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing transduction_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_transduction_ = bridgeSelfTrainingClassifier[${this.id}].transduction_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_transduction_.tolist() if hasattr(attr_SelfTrainingClassifier_transduction_, 'tolist') else attr_SelfTrainingClassifier_transduction_`
    })()
  }

  /**
    The iteration in which each sample was labeled. When a sample has iteration 0, the sample was already labeled in the original dataset. When a sample has iteration -1, the sample was not labeled in any iteration.
   */
  get labeled_iter_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing labeled_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_labeled_iter_ = bridgeSelfTrainingClassifier[${this.id}].labeled_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_labeled_iter_.tolist() if hasattr(attr_SelfTrainingClassifier_labeled_iter_, 'tolist') else attr_SelfTrainingClassifier_labeled_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_n_features_in_ = bridgeSelfTrainingClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_n_features_in_.tolist() if hasattr(attr_SelfTrainingClassifier_n_features_in_, 'tolist') else attr_SelfTrainingClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_feature_names_in_ = bridgeSelfTrainingClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_feature_names_in_.tolist() if hasattr(attr_SelfTrainingClassifier_feature_names_in_, 'tolist') else attr_SelfTrainingClassifier_feature_names_in_`
    })()
  }

  /**
    The number of rounds of self-training, that is the number of times the base estimator is fitted on relabeled variants of the training set.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_n_iter_ = bridgeSelfTrainingClassifier[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_n_iter_.tolist() if hasattr(attr_SelfTrainingClassifier_n_iter_, 'tolist') else attr_SelfTrainingClassifier_n_iter_`
    })()
  }

  /**
    The reason that fitting was stopped.
   */
  get termination_condition_(): Promise<
    'max_iter' | 'no_change' | 'all_labeled'
  > {
    if (this._isDisposed) {
      throw new Error(
        'This SelfTrainingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelfTrainingClassifier must call init() before accessing termination_condition_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelfTrainingClassifier_termination_condition_ = bridgeSelfTrainingClassifier[${this.id}].termination_condition_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelfTrainingClassifier_termination_condition_.tolist() if hasattr(attr_SelfTrainingClassifier_termination_condition_, 'tolist') else attr_SelfTrainingClassifier_termination_condition_`
    })()
  }
}
