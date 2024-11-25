/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Quadratic Discriminant Analysis.

  A classifier with a quadratic decision boundary, generated by fitting class conditional densities to the data and using Bayes’ rule.

  The model fits a Gaussian density to each class.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.QuadraticDiscriminantAnalysis.html)
 */
export class QuadraticDiscriminantAnalysis {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Class priors. By default, the class proportions are inferred from the training data.
     */
    priors?: ArrayLike

    /**
      Regularizes the per-class covariance estimates by transforming S2 as `S2 \= (1 \- reg_param) \* S2 + reg_param \* np.eye(n_features)`, where S2 corresponds to the `scaling_` attribute of a given class.

      @defaultValue `0`
     */
    reg_param?: number

    /**
      If `true`, the class covariance matrices are explicitly computed and stored in the `self.covariance_` attribute.

      @defaultValue `false`
     */
    store_covariance?: boolean

    /**
      Absolute threshold for a singular value to be considered significant, used to estimate the rank of `Xk` where `Xk` is the centered matrix of samples in class k. This parameter does not affect the predictions. It only controls a warning that is raised when features are considered to be colinear.

      @defaultValue `0.0001`
     */
    tol?: number
  }) {
    this.id = `QuadraticDiscriminantAnalysis${crypto.randomUUID().split('-')[0]}`
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
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'QuadraticDiscriminantAnalysis.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
try: bridgeQuadraticDiscriminantAnalysis
except NameError: bridgeQuadraticDiscriminantAnalysis = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_QuadraticDiscriminantAnalysis = {'priors': np.array(${this.opts['priors'] ?? undefined}) if ${this.opts['priors'] !== undefined} else None, 'reg_param': ${this.opts['reg_param'] ?? undefined}, 'store_covariance': ${this.opts['store_covariance'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}}

ctor_QuadraticDiscriminantAnalysis = {k: v for k, v in ctor_QuadraticDiscriminantAnalysis.items() if v is not None}`

    await this._py
      .ex`bridgeQuadraticDiscriminantAnalysis[${this.id}] = QuadraticDiscriminantAnalysis(**ctor_QuadraticDiscriminantAnalysis)`

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

    await this._py.ex`del bridgeQuadraticDiscriminantAnalysis[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply decision function to an array of samples.

    The decision function is equal (up to a constant factor) to the log-posterior of the model, i.e. `log p(y \= k | x)`. In a binary classification setting this instead corresponds to the difference `log p(y \= 1 | x) \- log p(y \= 0 | x)`. See [Mathematical formulation of the LDA and QDA classifiers](https://scikit-learn.org/stable/modules/generated/../lda_qda.html#lda-qda-math).
   */
  async decision_function(opts: {
    /**
      Array of samples (test vectors).
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_decision_function = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_decision_function = bridgeQuadraticDiscriminantAnalysis[${this.id}].decision_function(**pms_QuadraticDiscriminantAnalysis_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_decision_function.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_decision_function, 'tolist') else res_QuadraticDiscriminantAnalysis_decision_function`
  }

  /**
    Fit the model according to the given training data and parameters.
   */
  async fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Target values (integers).
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_fit = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_fit = bridgeQuadraticDiscriminantAnalysis[${this.id}].fit(**pms_QuadraticDiscriminantAnalysis_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_fit.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_fit, 'tolist') else res_QuadraticDiscriminantAnalysis_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_QuadraticDiscriminantAnalysis_get_metadata_routing = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_get_metadata_routing = bridgeQuadraticDiscriminantAnalysis[${this.id}].get_metadata_routing(**pms_QuadraticDiscriminantAnalysis_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_get_metadata_routing.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_get_metadata_routing, 'tolist') else res_QuadraticDiscriminantAnalysis_get_metadata_routing`
  }

  /**
    Perform classification on an array of test vectors X.

    The predicted class C for each sample in X is returned.
   */
  async predict(opts: {
    /**
      Vector to be scored, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before predict()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_predict = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_predict = bridgeQuadraticDiscriminantAnalysis[${this.id}].predict(**pms_QuadraticDiscriminantAnalysis_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_predict.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_predict, 'tolist') else res_QuadraticDiscriminantAnalysis_predict`
  }

  /**
    Return log of posterior probabilities of classification.
   */
  async predict_log_proba(opts: {
    /**
      Array of samples/test vectors.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_predict_log_proba = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_predict_log_proba = bridgeQuadraticDiscriminantAnalysis[${this.id}].predict_log_proba(**pms_QuadraticDiscriminantAnalysis_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_predict_log_proba.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_predict_log_proba, 'tolist') else res_QuadraticDiscriminantAnalysis_predict_log_proba`
  }

  /**
    Return posterior probabilities of classification.
   */
  async predict_proba(opts: {
    /**
      Array of samples/test vectors.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_predict_proba = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_predict_proba = bridgeQuadraticDiscriminantAnalysis[${this.id}].predict_proba(**pms_QuadraticDiscriminantAnalysis_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_predict_proba.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_predict_proba, 'tolist') else res_QuadraticDiscriminantAnalysis_predict_proba`
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
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before score()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_QuadraticDiscriminantAnalysis_score = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_score = bridgeQuadraticDiscriminantAnalysis[${this.id}].score(**pms_QuadraticDiscriminantAnalysis_score)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_score.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_score, 'tolist') else res_QuadraticDiscriminantAnalysis_score`
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
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuadraticDiscriminantAnalysis_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_QuadraticDiscriminantAnalysis_set_score_request = {k: v for k, v in pms_QuadraticDiscriminantAnalysis_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuadraticDiscriminantAnalysis_set_score_request = bridgeQuadraticDiscriminantAnalysis[${this.id}].set_score_request(**pms_QuadraticDiscriminantAnalysis_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_QuadraticDiscriminantAnalysis_set_score_request.tolist() if hasattr(res_QuadraticDiscriminantAnalysis_set_score_request, 'tolist') else res_QuadraticDiscriminantAnalysis_set_score_request`
  }

  /**
    For each class, gives the covariance matrix estimated using the samples of that class. The estimations are unbiased. Only present if `store_covariance` is `true`.
   */
  get covariance_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_covariance_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_covariance_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_covariance_, 'tolist') else attr_QuadraticDiscriminantAnalysis_covariance_`
    })()
  }

  /**
    Class-wise means.
   */
  get means_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing means_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_means_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].means_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_means_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_means_, 'tolist') else attr_QuadraticDiscriminantAnalysis_means_`
    })()
  }

  /**
    Class priors (sum to 1).
   */
  get priors_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing priors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_priors_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].priors_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_priors_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_priors_, 'tolist') else attr_QuadraticDiscriminantAnalysis_priors_`
    })()
  }

  /**
    For each class k an array of shape (n_features, n_k), where `n_k \= min(n_features, number of elements in class k)` It is the rotation of the Gaussian distribution, i.e. its principal axis. It corresponds to `V`, the matrix of eigenvectors coming from the SVD of `Xk \= U S Vt` where `Xk` is the centered matrix of samples from class k.
   */
  get rotations_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing rotations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_rotations_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].rotations_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_rotations_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_rotations_, 'tolist') else attr_QuadraticDiscriminantAnalysis_rotations_`
    })()
  }

  /**
    For each class, contains the scaling of the Gaussian distributions along its principal axes, i.e. the variance in the rotated coordinate system. It corresponds to `S^2 / (n_samples \- 1)`, where `S` is the diagonal matrix of singular values from the SVD of `Xk`, where `Xk` is the centered matrix of samples from class k.
   */
  get scalings_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing scalings_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_scalings_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].scalings_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_scalings_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_scalings_, 'tolist') else attr_QuadraticDiscriminantAnalysis_scalings_`
    })()
  }

  /**
    Unique class labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_classes_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_classes_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_classes_, 'tolist') else attr_QuadraticDiscriminantAnalysis_classes_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_n_features_in_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_n_features_in_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_n_features_in_, 'tolist') else attr_QuadraticDiscriminantAnalysis_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuadraticDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuadraticDiscriminantAnalysis must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuadraticDiscriminantAnalysis_feature_names_in_ = bridgeQuadraticDiscriminantAnalysis[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuadraticDiscriminantAnalysis_feature_names_in_.tolist() if hasattr(attr_QuadraticDiscriminantAnalysis_feature_names_in_, 'tolist') else attr_QuadraticDiscriminantAnalysis_feature_names_in_`
    })()
  }
}
