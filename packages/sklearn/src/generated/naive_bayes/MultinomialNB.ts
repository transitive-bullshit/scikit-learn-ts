/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Naive Bayes classifier for multinomial models.

  The multinomial Naive Bayes classifier is suitable for classification with discrete features (e.g., word counts for text classification). The multinomial distribution normally requires integer feature counts. However, in practice, fractional counts such as tf-idf may also work.

  Read more in the [User Guide](../naive_bayes.html#multinomial-naive-bayes).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.MultinomialNB.html)
 */
export class MultinomialNB {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

      @defaultValue `1`
     */
    alpha?: number | ArrayLike

    /**
      If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

      @defaultValue `false`
     */
    force_alpha?: boolean

    /**
      Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

      @defaultValue `true`
     */
    fit_prior?: boolean

    /**
      Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.
     */
    class_prior?: ArrayLike
  }) {
    this.id = `MultinomialNB${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MultinomialNB.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.naive_bayes import MultinomialNB
try: bridgeMultinomialNB
except NameError: bridgeMultinomialNB = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultinomialNB = {'alpha': np.array(${
      this.opts['alpha'] ?? undefined
    }) if ${this.opts['alpha'] !== undefined} else None, 'force_alpha': ${
      this.opts['force_alpha'] ?? undefined
    }, 'fit_prior': ${
      this.opts['fit_prior'] ?? undefined
    }, 'class_prior': np.array(${this.opts['class_prior'] ?? undefined}) if ${
      this.opts['class_prior'] !== undefined
    } else None}

ctor_MultinomialNB = {k: v for k, v in ctor_MultinomialNB.items() if v is not None}`

    await this._py
      .ex`bridgeMultinomialNB[${this.id}] = MultinomialNB(**ctor_MultinomialNB)`

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

    await this._py.ex`del bridgeMultinomialNB[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Naive Bayes classifier according to X, y.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Weights applied to individual samples (1. for unweighted).
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultinomialNB must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultinomialNB_fit = {k: v for k, v in pms_MultinomialNB_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_fit = bridgeMultinomialNB[${this.id}].fit(**pms_MultinomialNB_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_fit.tolist() if hasattr(res_MultinomialNB_fit, 'tolist') else res_MultinomialNB_fit`
  }

  /**
    Incremental fit on a batch of samples.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once.

    This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.
   */
  async partial_fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      List of all the classes that can possibly appear in the y vector.

      Must be provided at the first call to partial\_fit, can be omitted in subsequent calls.
     */
    classes?: ArrayLike

    /**
      Weights applied to individual samples (1. for unweighted).
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultinomialNB must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': np.array(${
      opts['classes'] ?? undefined
    }) if ${
      opts['classes'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultinomialNB_partial_fit = {k: v for k, v in pms_MultinomialNB_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_partial_fit = bridgeMultinomialNB[${this.id}].partial_fit(**pms_MultinomialNB_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_partial_fit.tolist() if hasattr(res_MultinomialNB_partial_fit, 'tolist') else res_MultinomialNB_partial_fit`
  }

  /**
    Perform classification on an array of test vectors X.
   */
  async predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultinomialNB must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultinomialNB_predict = {k: v for k, v in pms_MultinomialNB_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_predict = bridgeMultinomialNB[${this.id}].predict(**pms_MultinomialNB_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_predict.tolist() if hasattr(res_MultinomialNB_predict, 'tolist') else res_MultinomialNB_predict`
  }

  /**
    Return joint log probability estimates for the test vector X.

    For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.
   */
  async predict_joint_log_proba(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before predict_joint_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultinomialNB_predict_joint_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultinomialNB_predict_joint_log_proba = {k: v for k, v in pms_MultinomialNB_predict_joint_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_predict_joint_log_proba = bridgeMultinomialNB[${this.id}].predict_joint_log_proba(**pms_MultinomialNB_predict_joint_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_predict_joint_log_proba.tolist() if hasattr(res_MultinomialNB_predict_joint_log_proba, 'tolist') else res_MultinomialNB_predict_joint_log_proba`
  }

  /**
    Return log-probability estimates for the test vector X.
   */
  async predict_log_proba(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultinomialNB_predict_log_proba = {k: v for k, v in pms_MultinomialNB_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_predict_log_proba = bridgeMultinomialNB[${this.id}].predict_log_proba(**pms_MultinomialNB_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_predict_log_proba.tolist() if hasattr(res_MultinomialNB_predict_log_proba, 'tolist') else res_MultinomialNB_predict_log_proba`
  }

  /**
    Return probability estimates for the test vector X.
   */
  async predict_proba(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultinomialNB must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultinomialNB_predict_proba = {k: v for k, v in pms_MultinomialNB_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_predict_proba = bridgeMultinomialNB[${this.id}].predict_proba(**pms_MultinomialNB_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_predict_proba.tolist() if hasattr(res_MultinomialNB_predict_proba, 'tolist') else res_MultinomialNB_predict_proba`
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
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultinomialNB must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MultinomialNB_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultinomialNB_score = {k: v for k, v in pms_MultinomialNB_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultinomialNB_score = bridgeMultinomialNB[${this.id}].score(**pms_MultinomialNB_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultinomialNB_score.tolist() if hasattr(res_MultinomialNB_score, 'tolist') else res_MultinomialNB_score`
  }

  /**
    Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.
   */
  get class_count_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing class_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_class_count_ = bridgeMultinomialNB[${this.id}].class_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_class_count_.tolist() if hasattr(attr_MultinomialNB_class_count_, 'tolist') else attr_MultinomialNB_class_count_`
    })()
  }

  /**
    Smoothed empirical log probability for each class.
   */
  get class_log_prior_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing class_log_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_class_log_prior_ = bridgeMultinomialNB[${this.id}].class_log_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_class_log_prior_.tolist() if hasattr(attr_MultinomialNB_class_log_prior_, 'tolist') else attr_MultinomialNB_class_log_prior_`
    })()
  }

  /**
    Class labels known to the classifier
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_classes_ = bridgeMultinomialNB[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_classes_.tolist() if hasattr(attr_MultinomialNB_classes_, 'tolist') else attr_MultinomialNB_classes_`
    })()
  }

  /**
    Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.
   */
  get feature_count_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing feature_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_feature_count_ = bridgeMultinomialNB[${this.id}].feature_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_feature_count_.tolist() if hasattr(attr_MultinomialNB_feature_count_, 'tolist') else attr_MultinomialNB_feature_count_`
    })()
  }

  /**
    Empirical log probability of features given a class, `P(x\_i|y)`.
   */
  get feature_log_prob_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing feature_log_prob_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_feature_log_prob_ = bridgeMultinomialNB[${this.id}].feature_log_prob_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_feature_log_prob_.tolist() if hasattr(attr_MultinomialNB_feature_log_prob_, 'tolist') else attr_MultinomialNB_feature_log_prob_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_n_features_in_ = bridgeMultinomialNB[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_n_features_in_.tolist() if hasattr(attr_MultinomialNB_n_features_in_, 'tolist') else attr_MultinomialNB_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultinomialNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultinomialNB must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultinomialNB_feature_names_in_ = bridgeMultinomialNB[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultinomialNB_feature_names_in_.tolist() if hasattr(attr_MultinomialNB_feature_names_in_, 'tolist') else attr_MultinomialNB_feature_names_in_`
    })()
  }
}
