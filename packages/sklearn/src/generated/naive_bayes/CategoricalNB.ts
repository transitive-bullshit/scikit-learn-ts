/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Naive Bayes classifier for categorical features.

  The categorical Naive Bayes classifier is suitable for classification with discrete features that are categorically distributed. The categories of each feature are drawn from a categorical distribution.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.CategoricalNB.html
 */
export class CategoricalNB {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: CategoricalNBOptions) {
    this.id = `CategoricalNB${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('CategoricalNB.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.naive_bayes import CategoricalNB
try: bridgeCategoricalNB
except NameError: bridgeCategoricalNB = {}
`

    // set up constructor params
    await this._py.ex`ctor_CategoricalNB = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'force_alpha': ${this.opts['force_alpha'] ?? undefined}, 'fit_prior': ${
      this.opts['fit_prior'] ?? undefined
    }, 'class_prior': np.array(${this.opts['class_prior'] ?? undefined}) if ${
      this.opts['class_prior'] !== undefined
    } else None, 'min_categories': np.array(${
      this.opts['min_categories'] ?? undefined
    }) if ${this.opts['min_categories'] !== undefined} else None}

ctor_CategoricalNB = {k: v for k, v in ctor_CategoricalNB.items() if v is not None}`

    await this._py
      .ex`bridgeCategoricalNB[${this.id}] = CategoricalNB(**ctor_CategoricalNB)`

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

    await this._py.ex`del bridgeCategoricalNB[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Naive Bayes classifier according to X, y.
   */
  async fit(opts: CategoricalNBFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CategoricalNB must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_CategoricalNB_fit = {k: v for k, v in pms_CategoricalNB_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_fit = bridgeCategoricalNB[${this.id}].fit(**pms_CategoricalNB_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_fit.tolist() if hasattr(res_CategoricalNB_fit, 'tolist') else res_CategoricalNB_fit`
  }

  /**
    Incremental fit on a batch of samples.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once.

    This method has some performance overhead hence it is better to call partial_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.
   */
  async partial_fit(opts: CategoricalNBPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CategoricalNB must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_partial_fit = {'X': np.array(${
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

pms_CategoricalNB_partial_fit = {k: v for k, v in pms_CategoricalNB_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_partial_fit = bridgeCategoricalNB[${this.id}].partial_fit(**pms_CategoricalNB_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_partial_fit.tolist() if hasattr(res_CategoricalNB_partial_fit, 'tolist') else res_CategoricalNB_partial_fit`
  }

  /**
    Perform classification on an array of test vectors X.
   */
  async predict(opts: CategoricalNBPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CategoricalNB must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CategoricalNB_predict = {k: v for k, v in pms_CategoricalNB_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_predict = bridgeCategoricalNB[${this.id}].predict(**pms_CategoricalNB_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_predict.tolist() if hasattr(res_CategoricalNB_predict, 'tolist') else res_CategoricalNB_predict`
  }

  /**
    Return joint log probability estimates for the test vector X.

    For each row x of X and class y, the joint log probability is given by log P(x, y) = log P(y) + log P(x|y), where log P(y) is the class prior probability and log P(x|y) is the class-conditional probability.
   */
  async predict_joint_log_proba(
    opts: CategoricalNBPredictJointLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before predict_joint_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CategoricalNB_predict_joint_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CategoricalNB_predict_joint_log_proba = {k: v for k, v in pms_CategoricalNB_predict_joint_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_predict_joint_log_proba = bridgeCategoricalNB[${this.id}].predict_joint_log_proba(**pms_CategoricalNB_predict_joint_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_predict_joint_log_proba.tolist() if hasattr(res_CategoricalNB_predict_joint_log_proba, 'tolist') else res_CategoricalNB_predict_joint_log_proba`
  }

  /**
    Return log-probability estimates for the test vector X.
   */
  async predict_log_proba(
    opts: CategoricalNBPredictLogProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CategoricalNB_predict_log_proba = {k: v for k, v in pms_CategoricalNB_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_predict_log_proba = bridgeCategoricalNB[${this.id}].predict_log_proba(**pms_CategoricalNB_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_predict_log_proba.tolist() if hasattr(res_CategoricalNB_predict_log_proba, 'tolist') else res_CategoricalNB_predict_log_proba`
  }

  /**
    Return probability estimates for the test vector X.
   */
  async predict_proba(
    opts: CategoricalNBPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CategoricalNB must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_CategoricalNB_predict_proba = {k: v for k, v in pms_CategoricalNB_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_predict_proba = bridgeCategoricalNB[${this.id}].predict_proba(**pms_CategoricalNB_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_predict_proba.tolist() if hasattr(res_CategoricalNB_predict_proba, 'tolist') else res_CategoricalNB_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: CategoricalNBScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CategoricalNB must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_CategoricalNB_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_CategoricalNB_score = {k: v for k, v in pms_CategoricalNB_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CategoricalNB_score = bridgeCategoricalNB[${this.id}].score(**pms_CategoricalNB_score)`

    // convert the result from python to node.js
    return this
      ._py`res_CategoricalNB_score.tolist() if hasattr(res_CategoricalNB_score, 'tolist') else res_CategoricalNB_score`
  }

  /**
    Holds arrays of shape (n_classes, n_categories of respective feature) for each feature. Each array provides the number of samples encountered for each class and category of the specific feature.
   */
  get category_count_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing category_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_category_count_ = bridgeCategoricalNB[${this.id}].category_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_category_count_.tolist() if hasattr(attr_CategoricalNB_category_count_, 'tolist') else attr_CategoricalNB_category_count_`
    })()
  }

  /**
    Number of samples encountered for each class during fitting. This value is weighted by the sample weight when provided.
   */
  get class_count_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing class_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_class_count_ = bridgeCategoricalNB[${this.id}].class_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_class_count_.tolist() if hasattr(attr_CategoricalNB_class_count_, 'tolist') else attr_CategoricalNB_class_count_`
    })()
  }

  /**
    Smoothed empirical log probability for each class.
   */
  get class_log_prior_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing class_log_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_class_log_prior_ = bridgeCategoricalNB[${this.id}].class_log_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_class_log_prior_.tolist() if hasattr(attr_CategoricalNB_class_log_prior_, 'tolist') else attr_CategoricalNB_class_log_prior_`
    })()
  }

  /**
    Class labels known to the classifier
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_classes_ = bridgeCategoricalNB[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_classes_.tolist() if hasattr(attr_CategoricalNB_classes_, 'tolist') else attr_CategoricalNB_classes_`
    })()
  }

  /**
    Holds arrays of shape (n_classes, n_categories of respective feature) for each feature. Each array provides the empirical log probability of categories given the respective feature and class, P(x_i|y).
   */
  get feature_log_prob_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing feature_log_prob_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_feature_log_prob_ = bridgeCategoricalNB[${this.id}].feature_log_prob_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_feature_log_prob_.tolist() if hasattr(attr_CategoricalNB_feature_log_prob_, 'tolist') else attr_CategoricalNB_feature_log_prob_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_n_features_in_ = bridgeCategoricalNB[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_n_features_in_.tolist() if hasattr(attr_CategoricalNB_n_features_in_, 'tolist') else attr_CategoricalNB_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_feature_names_in_ = bridgeCategoricalNB[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_feature_names_in_.tolist() if hasattr(attr_CategoricalNB_feature_names_in_, 'tolist') else attr_CategoricalNB_feature_names_in_`
    })()
  }

  /**
    Number of categories for each feature. This value is inferred from the data or set by the minimum number of categories.
   */
  get n_categories_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CategoricalNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'CategoricalNB must call init() before accessing n_categories_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CategoricalNB_n_categories_ = bridgeCategoricalNB[${this.id}].n_categories_`

      // convert the result from python to node.js
      return this
        ._py`attr_CategoricalNB_n_categories_.tolist() if hasattr(attr_CategoricalNB_n_categories_, 'tolist') else attr_CategoricalNB_n_categories_`
    })()
  }
}

export interface CategoricalNBOptions {
  /**
    Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force_alpha=True, for no smoothing).

    @defaultValue `1`
   */
  alpha?: number

  /**
    If False and alpha is less than 1e-10, it will set alpha to 1e-10. If True, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

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

  /**
    Minimum number of categories per feature.
   */
  min_categories?: number | ArrayLike
}

export interface CategoricalNBFitOptions {
  /**
    Training vectors, where n_samples is the number of samples and n_features is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder.
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

export interface CategoricalNBPartialFitOptions {
  /**
    Training vectors, where n_samples is the number of samples and n_features is the number of features. Here, each feature of X is assumed to be from a different categorical distribution. It is further assumed that all categories of each feature are represented by the numbers 0, …, n - 1, where n refers to the total number of categories for the given feature. This can, for instance, be achieved with the help of OrdinalEncoder.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    List of all the classes that can possibly appear in the y vector.

    Must be provided at the first call to partial_fit, can be omitted in subsequent calls.
   */
  classes?: ArrayLike

  /**
    Weights applied to individual samples (1. for unweighted).
   */
  sample_weight?: ArrayLike
}

export interface CategoricalNBPredictOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface CategoricalNBPredictJointLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface CategoricalNBPredictLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface CategoricalNBPredictProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface CategoricalNBScoreOptions {
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
