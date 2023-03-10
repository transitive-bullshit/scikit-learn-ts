/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Gaussian Naive Bayes (GaussianNB).

  Can perform online updates to model parameters via partial_fit. For details on algorithm used to update feature means and variance online, see Stanford CS tech report STAN-CS-79-773 by Chan, Golub, and LeVeque:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html
 */
export class GaussianNB {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GaussianNBOptions) {
    this.id = `GaussianNB${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GaussianNB.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.naive_bayes import GaussianNB
try: bridgeGaussianNB
except NameError: bridgeGaussianNB = {}
`

    // set up constructor params
    await this._py.ex`ctor_GaussianNB = {'priors': np.array(${
      this.opts['priors'] ?? undefined
    }) if ${this.opts['priors'] !== undefined} else None, 'var_smoothing': ${
      this.opts['var_smoothing'] ?? undefined
    }}

ctor_GaussianNB = {k: v for k, v in ctor_GaussianNB.items() if v is not None}`

    await this._py
      .ex`bridgeGaussianNB[${this.id}] = GaussianNB(**ctor_GaussianNB)`

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

    await this._py.ex`del bridgeGaussianNB[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Gaussian Naive Bayes according to X, y.
   */
  async fit(opts: GaussianNBFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_GaussianNB_fit = {k: v for k, v in pms_GaussianNB_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_fit = bridgeGaussianNB[${this.id}].fit(**pms_GaussianNB_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_fit.tolist() if hasattr(res_GaussianNB_fit, 'tolist') else res_GaussianNB_fit`
  }

  /**
    Incremental fit on a batch of samples.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once.

    This method has some performance and numerical stability overhead, hence it is better to call partial_fit on chunks of data that are as large as possible (as long as fitting in the memory budget) to hide the overhead.
   */
  async partial_fit(opts: GaussianNBPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_partial_fit = {'X': np.array(${
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

pms_GaussianNB_partial_fit = {k: v for k, v in pms_GaussianNB_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_partial_fit = bridgeGaussianNB[${this.id}].partial_fit(**pms_GaussianNB_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_partial_fit.tolist() if hasattr(res_GaussianNB_partial_fit, 'tolist') else res_GaussianNB_partial_fit`
  }

  /**
    Perform classification on an array of test vectors X.
   */
  async predict(opts: GaussianNBPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianNB_predict = {k: v for k, v in pms_GaussianNB_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_predict = bridgeGaussianNB[${this.id}].predict(**pms_GaussianNB_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_predict.tolist() if hasattr(res_GaussianNB_predict, 'tolist') else res_GaussianNB_predict`
  }

  /**
    Return joint log probability estimates for the test vector X.

    For each row x of X and class y, the joint log probability is given by log P(x, y) = log P(y) + log P(x|y), where log P(y) is the class prior probability and log P(x|y) is the class-conditional probability.
   */
  async predict_joint_log_proba(
    opts: GaussianNBPredictJointLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianNB must call init() before predict_joint_log_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_predict_joint_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianNB_predict_joint_log_proba = {k: v for k, v in pms_GaussianNB_predict_joint_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_predict_joint_log_proba = bridgeGaussianNB[${this.id}].predict_joint_log_proba(**pms_GaussianNB_predict_joint_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_predict_joint_log_proba.tolist() if hasattr(res_GaussianNB_predict_joint_log_proba, 'tolist') else res_GaussianNB_predict_joint_log_proba`
  }

  /**
    Return log-probability estimates for the test vector X.
   */
  async predict_log_proba(
    opts: GaussianNBPredictLogProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianNB_predict_log_proba = {k: v for k, v in pms_GaussianNB_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_predict_log_proba = bridgeGaussianNB[${this.id}].predict_log_proba(**pms_GaussianNB_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_predict_log_proba.tolist() if hasattr(res_GaussianNB_predict_log_proba, 'tolist') else res_GaussianNB_predict_log_proba`
  }

  /**
    Return probability estimates for the test vector X.
   */
  async predict_proba(
    opts: GaussianNBPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianNB_predict_proba = {k: v for k, v in pms_GaussianNB_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_predict_proba = bridgeGaussianNB[${this.id}].predict_proba(**pms_GaussianNB_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_predict_proba.tolist() if hasattr(res_GaussianNB_predict_proba, 'tolist') else res_GaussianNB_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: GaussianNBScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_GaussianNB_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_GaussianNB_score = {k: v for k, v in pms_GaussianNB_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianNB_score = bridgeGaussianNB[${this.id}].score(**pms_GaussianNB_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianNB_score.tolist() if hasattr(res_GaussianNB_score, 'tolist') else res_GaussianNB_score`
  }

  /**
    number of training samples observed in each class.
   */
  get class_count_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianNB must call init() before accessing class_count_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_class_count_ = bridgeGaussianNB[${this.id}].class_count_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_class_count_.tolist() if hasattr(attr_GaussianNB_class_count_, 'tolist') else attr_GaussianNB_class_count_`
    })()
  }

  /**
    probability of each class.
   */
  get class_prior_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianNB must call init() before accessing class_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_class_prior_ = bridgeGaussianNB[${this.id}].class_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_class_prior_.tolist() if hasattr(attr_GaussianNB_class_prior_, 'tolist') else attr_GaussianNB_class_prior_`
    })()
  }

  /**
    class labels known to the classifier.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_classes_ = bridgeGaussianNB[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_classes_.tolist() if hasattr(attr_GaussianNB_classes_, 'tolist') else attr_GaussianNB_classes_`
    })()
  }

  /**
    absolute additive value to variances.
   */
  get epsilon_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before accessing epsilon_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_epsilon_ = bridgeGaussianNB[${this.id}].epsilon_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_epsilon_.tolist() if hasattr(attr_GaussianNB_epsilon_, 'tolist') else attr_GaussianNB_epsilon_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianNB must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_n_features_in_ = bridgeGaussianNB[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_n_features_in_.tolist() if hasattr(attr_GaussianNB_n_features_in_, 'tolist') else attr_GaussianNB_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianNB must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_feature_names_in_ = bridgeGaussianNB[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_feature_names_in_.tolist() if hasattr(attr_GaussianNB_feature_names_in_, 'tolist') else attr_GaussianNB_feature_names_in_`
    })()
  }

  /**
    Variance of each feature per class.
   */
  get var_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before accessing var_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_var_ = bridgeGaussianNB[${this.id}].var_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_var_.tolist() if hasattr(attr_GaussianNB_var_, 'tolist') else attr_GaussianNB_var_`
    })()
  }

  /**
    mean of each feature per class.
   */
  get theta_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GaussianNB instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GaussianNB must call init() before accessing theta_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianNB_theta_ = bridgeGaussianNB[${this.id}].theta_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianNB_theta_.tolist() if hasattr(attr_GaussianNB_theta_, 'tolist') else attr_GaussianNB_theta_`
    })()
  }
}

export interface GaussianNBOptions {
  /**
    Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.
   */
  priors?: ArrayLike

  /**
    Portion of the largest variance of all features that is added to variances for calculation stability.

    @defaultValue `1e-9`
   */
  var_smoothing?: number
}

export interface GaussianNBFitOptions {
  /**
    Training vectors, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Weights applied to individual samples (1. for unweighted).
   */
  sample_weight?: ArrayLike
}

export interface GaussianNBPartialFitOptions {
  /**
    Training vectors, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike[]

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

export interface GaussianNBPredictOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface GaussianNBPredictJointLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface GaussianNBPredictLogProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface GaussianNBPredictProbaOptions {
  /**
    The input samples.
   */
  X?: ArrayLike[]
}

export interface GaussianNBScoreOptions {
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
