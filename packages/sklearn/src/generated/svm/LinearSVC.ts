/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear Support Vector Classification.

  Similar to SVC with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

  The main differences between [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") and [`SVC`](sklearn.svm.SVC.html#sklearn.svm.SVC "sklearn.svm.SVC") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

  This class supports both dense and sparse input and the multiclass support is handled according to a one-vs-the-rest scheme.

  Read more in the [User Guide](../svm.html#svm-classification).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html)
 */
export class LinearSVC {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Specifies the norm used in the penalization. The ‘l2’ penalty is the standard used in SVC. The ‘l1’ leads to `coef\_` vectors that are sparse.

      @defaultValue `'l2'`
     */
    penalty?: 'l1' | 'l2'

    /**
      Specifies the loss function. ‘hinge’ is the standard SVM loss (used e.g. by the SVC class) while ‘squared\_hinge’ is the square of the hinge loss. The combination of `penalty='l1'` and `loss='hinge'` is not supported.

      @defaultValue `'squared_hinge'`
     */
    loss?: 'hinge' | 'squared_hinge'

    /**
      Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features. `dual="auto"` will choose the value of the parameter automatically, based on the values of `n\_samples`, `n\_features`, `loss`, `multi\_class` and `penalty`. If `n\_samples` < `n\_features` and optimizer supports chosen `loss`, `multi\_class` and `penalty`, then dual will be set to `true`, otherwise it will be set to `false`.

      @defaultValue `true`
     */
    dual?: 'auto' | boolean

    /**
      Tolerance for stopping criteria.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.

      @defaultValue `1`
     */
    C?: number

    /**
      Determines the multi-class strategy if `y` contains more than two classes. `"ovr"` trains n\_classes one-vs-rest classifiers, while `"crammer\_singer"` optimizes a joint objective over all classes. While `crammer\_singer` is interesting from a theoretical perspective as it is consistent, it is seldom used in practice as it rarely leads to better accuracy and is more expensive to compute. If `"crammer\_singer"` is chosen, the options loss, penalty and dual will be ignored.

      @defaultValue `'ovr'`
     */
    multi_class?: 'ovr' | 'crammer_singer'

    /**
      Whether or not to fit an intercept. If set to `true`, the feature vector is extended to include an intercept term: `\[x\_1, ..., x\_n, 1\]`, where 1 corresponds to the intercept. If set to `false`, no intercept will be used in calculations (i.e. data is expected to be already centered).

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      When `fit\_intercept` is `true`, the instance vector x becomes `\[x\_1, ..., x\_n, intercept\_scaling\]`, i.e. a “synthetic” feature with a constant value equal to `intercept\_scaling` is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight. Note that liblinear internally penalizes the intercept, treating it like any other term in the feature vector. To reduce the impact of the regularization on the intercept, the `intercept\_scaling` parameter can be set to a value greater than 1; the higher the value of `intercept\_scaling`, the lower the impact of regularization on it. Then, the weights become `\[w\_x\_1, ..., w\_x\_n, w\_intercept\*intercept\_scaling\]`, where `w\_x\_1, ..., w\_x\_n` represent the feature weights and the intercept weight is scaled by `intercept\_scaling`. This scaling allows the intercept term to have a different regularization behavior compared to the other features.

      @defaultValue `1`
     */
    intercept_scaling?: number

    /**
      Set the parameter C of class i to `class\_weight\[i\]\*C` for SVC. If not given, all classes are supposed to have weight one. The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
     */
    class_weight?: any | 'balanced'

    /**
      Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Controls the pseudo random number generation for shuffling the data for the dual coordinate descent (if `dual=True`). When `dual=False` the underlying implementation of [`LinearSVC`](#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") is not random and `random\_state` has no effect on the results. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      The maximum number of iterations to be run.

      @defaultValue `1000`
     */
    max_iter?: number
  }) {
    this.id = `LinearSVC${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LinearSVC.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import LinearSVC
try: bridgeLinearSVC
except NameError: bridgeLinearSVC = {}
`

    // set up constructor params
    await this._py.ex`ctor_LinearSVC = {'penalty': ${
      this.opts['penalty'] ?? undefined
    }, 'loss': ${this.opts['loss'] ?? undefined}, 'dual': ${
      this.opts['dual'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'C': ${
      this.opts['C'] ?? undefined
    }, 'multi_class': ${
      this.opts['multi_class'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'intercept_scaling': ${
      this.opts['intercept_scaling'] ?? undefined
    }, 'class_weight': ${this.opts['class_weight'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }}

ctor_LinearSVC = {k: v for k, v in ctor_LinearSVC.items() if v is not None}`

    await this._py.ex`bridgeLinearSVC[${this.id}] = LinearSVC(**ctor_LinearSVC)`

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

    await this._py.ex`del bridgeLinearSVC[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(opts: {
    /**
      The data matrix for which we want to get the confidence scores.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearSVC_decision_function = {k: v for k, v in pms_LinearSVC_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_decision_function = bridgeLinearSVC[${this.id}].decision_function(**pms_LinearSVC_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_decision_function.tolist() if hasattr(res_LinearSVC_decision_function, 'tolist') else res_LinearSVC_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_densify = {}

pms_LinearSVC_densify = {k: v for k, v in pms_LinearSVC_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_densify = bridgeLinearSVC[${this.id}].densify(**pms_LinearSVC_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_densify.tolist() if hasattr(res_LinearSVC_densify, 'tolist') else res_LinearSVC_densify`
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target vector relative to X.
     */
    y?: ArrayLike

    /**
      Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVC_fit = {k: v for k, v in pms_LinearSVC_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_fit = bridgeLinearSVC[${this.id}].fit(**pms_LinearSVC_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_fit.tolist() if hasattr(res_LinearSVC_fit, 'tolist') else res_LinearSVC_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVC must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_LinearSVC_get_metadata_routing = {k: v for k, v in pms_LinearSVC_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_get_metadata_routing = bridgeLinearSVC[${this.id}].get_metadata_routing(**pms_LinearSVC_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_get_metadata_routing.tolist() if hasattr(res_LinearSVC_get_metadata_routing, 'tolist') else res_LinearSVC_get_metadata_routing`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(opts: {
    /**
      The data matrix for which we want to get the predictions.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearSVC_predict = {k: v for k, v in pms_LinearSVC_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_predict = bridgeLinearSVC[${this.id}].predict(**pms_LinearSVC_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_predict.tolist() if hasattr(res_LinearSVC_predict, 'tolist') else res_LinearSVC_predict`
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
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVC_score = {k: v for k, v in pms_LinearSVC_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_score = bridgeLinearSVC[${this.id}].score(**pms_LinearSVC_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_score.tolist() if hasattr(res_LinearSVC_score, 'tolist') else res_LinearSVC_score`
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
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before set_fit_request()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_LinearSVC_set_fit_request = {k: v for k, v in pms_LinearSVC_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_set_fit_request = bridgeLinearSVC[${this.id}].set_fit_request(**pms_LinearSVC_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_set_fit_request.tolist() if hasattr(res_LinearSVC_set_fit_request, 'tolist') else res_LinearSVC_set_fit_request`
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
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before set_score_request()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_LinearSVC_set_score_request = {k: v for k, v in pms_LinearSVC_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_set_score_request = bridgeLinearSVC[${this.id}].set_score_request(**pms_LinearSVC_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_set_score_request.tolist() if hasattr(res_LinearSVC_set_score_request, 'tolist') else res_LinearSVC_set_score_request`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVC_sparsify = {}

pms_LinearSVC_sparsify = {k: v for k, v in pms_LinearSVC_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVC_sparsify = bridgeLinearSVC[${this.id}].sparsify(**pms_LinearSVC_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVC_sparsify.tolist() if hasattr(res_LinearSVC_sparsify, 'tolist') else res_LinearSVC_sparsify`
  }

  /**
    Weights assigned to the features (coefficients in the primal problem).

    `coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.
   */
  get coef_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_coef_ = bridgeLinearSVC[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_coef_.tolist() if hasattr(attr_LinearSVC_coef_, 'tolist') else attr_LinearSVC_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_intercept_ = bridgeLinearSVC[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_intercept_.tolist() if hasattr(attr_LinearSVC_intercept_, 'tolist') else attr_LinearSVC_intercept_`
    })()
  }

  /**
    The unique classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_classes_ = bridgeLinearSVC[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_classes_.tolist() if hasattr(attr_LinearSVC_classes_, 'tolist') else attr_LinearSVC_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVC must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_n_features_in_ = bridgeLinearSVC[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_n_features_in_.tolist() if hasattr(attr_LinearSVC_n_features_in_, 'tolist') else attr_LinearSVC_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVC must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_feature_names_in_ = bridgeLinearSVC[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_feature_names_in_.tolist() if hasattr(attr_LinearSVC_feature_names_in_, 'tolist') else attr_LinearSVC_feature_names_in_`
    })()
  }

  /**
    Maximum number of iterations run across all classes.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVC instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVC must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVC_n_iter_ = bridgeLinearSVC[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVC_n_iter_.tolist() if hasattr(attr_LinearSVC_n_iter_, 'tolist') else attr_LinearSVC_n_iter_`
    })()
  }
}
