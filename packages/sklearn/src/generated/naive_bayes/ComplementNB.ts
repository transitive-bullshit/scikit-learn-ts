/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  The Complement Naive Bayes classifier described in Rennie et al. (2003).

  The Complement Naive Bayes classifier was designed to correct the “severe assumptions” made by the standard Multinomial Naive Bayes classifier. It is particularly suited for imbalanced data sets.

  Read more in the [User Guide](../naive_bayes.html#complement-naive-bayes).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.ComplementNB.html)
 */
export class ComplementNB {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ComplementNBOptions) {
    this.id = `ComplementNB${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ComplementNB.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.naive_bayes import ComplementNB
try: bridgeComplementNB
except NameError: bridgeComplementNB = {}
`

    // set up constructor params
    await this._py.ex`ctor_ComplementNB = {'alpha': np.array(${
      this.opts['alpha'] ?? undefined
    }) if ${this.opts['alpha'] !== undefined} else None, 'force_alpha': ${
      this.opts['force_alpha'] ?? undefined
    }, 'fit_prior': ${
      this.opts['fit_prior'] ?? undefined
    }, 'class_prior': np.array(${this.opts['class_prior'] ?? undefined}) if ${
      this.opts['class_prior'] !== undefined
    } else None, 'norm': ${this.opts['norm'] ?? undefined}}

ctor_ComplementNB = {k: v for k, v in ctor_ComplementNB.items() if v is not None}`

    await this._py
      .ex`bridgeComplementNB[${this.id}] = ComplementNB(**ctor_ComplementNB)`

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

    await this._py.ex`del bridgeComplementNB[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Naive Bayes classifier according to X, y.
   */
  async fit(opts: ComplementNBFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ComplementNB_fit = {k: v for k, v in pms_ComplementNB_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_fit = bridgeComplementNB[${this.id}].fit(**pms_ComplementNB_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_fit.tolist() if hasattr(res_ComplementNB_fit, 'tolist') else res_ComplementNB_fit`
  }

  /**
    Incremental fit on a batch of samples.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once.

    This method has some performance overhead hence it is better to call partial\_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.
   */
  async partial_fit(opts: ComplementNBPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_partial_fit = {'X': np.array(${
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

pms_ComplementNB_partial_fit = {k: v for k, v in pms_ComplementNB_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_partial_fit = bridgeComplementNB[${this.id}].partial_fit(**pms_ComplementNB_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_partial_fit.tolist() if hasattr(res_ComplementNB_partial_fit, 'tolist') else res_ComplementNB_partial_fit`
  }

  /**
    Perform classification on an array of test vectors X.
   */
  async predict(opts: ComplementNBPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ComplementNB_predict = {k: v for k, v in pms_ComplementNB_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_predict = bridgeComplementNB[${this.id}].predict(**pms_ComplementNB_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_predict.tolist() if hasattr(res_ComplementNB_predict, 'tolist') else res_ComplementNB_predict`
  }

  /**
    Return joint log probability estimates for the test vector X.

    For each row x of X and class y, the joint log probability is given by `log P(x, y) \= log P(y) + log P(x|y),` where `log P(y)` is the class prior probability and `log P(x|y)` is the class-conditional probability.
   */
  async predict_joint_log_proba(
    opts: ComplementNBPredictJointLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before predict_joint_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ComplementNB_predict_joint_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ComplementNB_predict_joint_log_proba = {k: v for k, v in pms_ComplementNB_predict_joint_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_predict_joint_log_proba = bridgeComplementNB[${this.id}].predict_joint_log_proba(**pms_ComplementNB_predict_joint_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_predict_joint_log_proba.tolist() if hasattr(res_ComplementNB_predict_joint_log_proba, 'tolist') else res_ComplementNB_predict_joint_log_proba`
  }

  /**
    Return log-probability estimates for the test vector X.
   */
  async predict_log_proba(
    opts: ComplementNBPredictLogProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ComplementNB_predict_log_proba = {k: v for k, v in pms_ComplementNB_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_predict_log_proba = bridgeComplementNB[${this.id}].predict_log_proba(**pms_ComplementNB_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_predict_log_proba.tolist() if hasattr(res_ComplementNB_predict_log_proba, 'tolist') else res_ComplementNB_predict_log_proba`
  }

  /**
    Return probability estimates for the test vector X.
   */
  async predict_proba(
    opts: ComplementNBPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_ComplementNB_predict_proba = {k: v for k, v in pms_ComplementNB_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_predict_proba = bridgeComplementNB[${this.id}].predict_proba(**pms_ComplementNB_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_predict_proba.tolist() if hasattr(res_ComplementNB_predict_proba, 'tolist') else res_ComplementNB_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: ComplementNBScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_ComplementNB_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_ComplementNB_score = {k: v for k, v in pms_ComplementNB_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ComplementNB_score = bridgeComplementNB[${this.id}].score(**pms_ComplementNB_score)`

    // convert the result from python to node.js
    return this
      ._py`res_ComplementNB_score.tolist() if hasattr(res_ComplementNB_score, 'tolist') else res_ComplementNB_score`
  }

  /**
    Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.
   */
  get class_count_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing class_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_class_count_ = bridgeComplementNB[${this.id}].class_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_class_count_.tolist() if hasattr(attr_ComplementNB_class_count_, 'tolist') else attr_ComplementNB_class_count_`
    })()
  }

  /**
    Smoothed empirical log probability for each class. Only used in edge case with a single class in the training set.
   */
  get class_log_prior_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing class_log_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_class_log_prior_ = bridgeComplementNB[${this.id}].class_log_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_class_log_prior_.tolist() if hasattr(attr_ComplementNB_class_log_prior_, 'tolist') else attr_ComplementNB_class_log_prior_`
    })()
  }

  /**
    Class labels known to the classifier
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ComplementNB must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_classes_ = bridgeComplementNB[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_classes_.tolist() if hasattr(attr_ComplementNB_classes_, 'tolist') else attr_ComplementNB_classes_`
    })()
  }

  /**
    Number of samples encountered for each feature during fitting. This value is weighted by the sample weight when provided.
   */
  get feature_all_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing feature_all_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_feature_all_ = bridgeComplementNB[${this.id}].feature_all_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_feature_all_.tolist() if hasattr(attr_ComplementNB_feature_all_, 'tolist') else attr_ComplementNB_feature_all_`
    })()
  }

  /**
    Number of samples encountered for each (class, feature) during fitting. This value is weighted by the sample weight when provided.
   */
  get feature_count_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing feature_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_feature_count_ = bridgeComplementNB[${this.id}].feature_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_feature_count_.tolist() if hasattr(attr_ComplementNB_feature_count_, 'tolist') else attr_ComplementNB_feature_count_`
    })()
  }

  /**
    Empirical weights for class complements.
   */
  get feature_log_prob_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing feature_log_prob_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_feature_log_prob_ = bridgeComplementNB[${this.id}].feature_log_prob_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_feature_log_prob_.tolist() if hasattr(attr_ComplementNB_feature_log_prob_, 'tolist') else attr_ComplementNB_feature_log_prob_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_n_features_in_ = bridgeComplementNB[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_n_features_in_.tolist() if hasattr(attr_ComplementNB_n_features_in_, 'tolist') else attr_ComplementNB_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ComplementNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ComplementNB must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ComplementNB_feature_names_in_ = bridgeComplementNB[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ComplementNB_feature_names_in_.tolist() if hasattr(attr_ComplementNB_feature_names_in_, 'tolist') else attr_ComplementNB_feature_names_in_`
    })()
  }
}

export interface ComplementNBOptions {
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
    Only used in edge case with a single class in the training set.

    @defaultValue `true`
   */
  fit_prior?: boolean

  /**
    Prior probabilities of the classes. Not used.
   */
  class_prior?: ArrayLike

  /**
    Whether or not a second normalization of the weights is performed. The default behavior mirrors the implementations found in Mahout and Weka, which do not follow the full algorithm described in Table 9 of the paper.

    @defaultValue `false`
   */
  norm?: boolean
}

export interface ComplementNBFitOptions {
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
}

export interface ComplementNBPartialFitOptions {
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
}

export interface ComplementNBPredictOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface ComplementNBPredictJointLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface ComplementNBPredictLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface ComplementNBPredictProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface ComplementNBScoreOptions {
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
