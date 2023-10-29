/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear Support Vector Regression.

  Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

  The main differences between [`LinearSVR`](#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") and [`SVR`](sklearn.svm.SVR.html#sklearn.svm.SVR "sklearn.svm.SVR") lie in the loss function used by default, and in the handling of intercept regularization between those two implementations.

  This class supports both dense and sparse input.

  Read more in the [User Guide](../svm.html#svm-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)
 */
export class LinearSVR {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.

      @defaultValue `0`
     */
    epsilon?: number

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
      Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.

      @defaultValue `'epsilon_insensitive'`
     */
    loss?: 'epsilon_insensitive' | 'squared_epsilon_insensitive'

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
      Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features. `dual="auto"` will choose the value of the parameter automatically, based on the values of `n\_samples`, `n\_features` and `loss`. If `n\_samples` < `n\_features` and optimizer supports chosen `loss`, then dual will be set to `true`, otherwise it will be set to `false`.

      @defaultValue `true`
     */
    dual?: 'auto' | boolean

    /**
      Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      The maximum number of iterations to be run.

      @defaultValue `1000`
     */
    max_iter?: number
  }) {
    this.id = `LinearSVR${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LinearSVR.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import LinearSVR
try: bridgeLinearSVR
except NameError: bridgeLinearSVR = {}
`

    // set up constructor params
    await this._py.ex`ctor_LinearSVR = {'epsilon': ${
      this.opts['epsilon'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'C': ${
      this.opts['C'] ?? undefined
    }, 'loss': ${this.opts['loss'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'intercept_scaling': ${
      this.opts['intercept_scaling'] ?? undefined
    }, 'dual': ${this.opts['dual'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }}

ctor_LinearSVR = {k: v for k, v in ctor_LinearSVR.items() if v is not None}`

    await this._py.ex`bridgeLinearSVR[${this.id}] = LinearSVR(**ctor_LinearSVR)`

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

    await this._py.ex`del bridgeLinearSVR[${this.id}]`

    this._isDisposed = true
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVR_fit = {k: v for k, v in pms_LinearSVR_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_fit = bridgeLinearSVR[${this.id}].fit(**pms_LinearSVR_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_fit.tolist() if hasattr(res_LinearSVR_fit, 'tolist') else res_LinearSVR_fit`
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVR must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_LinearSVR_get_metadata_routing = {k: v for k, v in pms_LinearSVR_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_get_metadata_routing = bridgeLinearSVR[${this.id}].get_metadata_routing(**pms_LinearSVR_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_get_metadata_routing.tolist() if hasattr(res_LinearSVR_get_metadata_routing, 'tolist') else res_LinearSVR_get_metadata_routing`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_predict = {'X': ${opts['X'] ?? undefined}}

pms_LinearSVR_predict = {k: v for k, v in pms_LinearSVR_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_predict = bridgeLinearSVR[${this.id}].predict(**pms_LinearSVR_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_predict.tolist() if hasattr(res_LinearSVR_predict, 'tolist') else res_LinearSVR_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
     */
    X?: ArrayLike[]

    /**
      True values for `X`.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVR_score = {k: v for k, v in pms_LinearSVR_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_score = bridgeLinearSVR[${this.id}].score(**pms_LinearSVR_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_score.tolist() if hasattr(res_LinearSVR_score, 'tolist') else res_LinearSVR_score`
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before set_fit_request()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_LinearSVR_set_fit_request = {k: v for k, v in pms_LinearSVR_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_set_fit_request = bridgeLinearSVR[${this.id}].set_fit_request(**pms_LinearSVR_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_set_fit_request.tolist() if hasattr(res_LinearSVR_set_fit_request, 'tolist') else res_LinearSVR_set_fit_request`
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before set_score_request()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_LinearSVR_set_score_request = {k: v for k, v in pms_LinearSVR_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_set_score_request = bridgeLinearSVR[${this.id}].set_score_request(**pms_LinearSVR_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_set_score_request.tolist() if hasattr(res_LinearSVR_set_score_request, 'tolist') else res_LinearSVR_set_score_request`
  }

  /**
    Weights assigned to the features (coefficients in the primal problem).

    `coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_coef_ = bridgeLinearSVR[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_coef_.tolist() if hasattr(attr_LinearSVR_coef_, 'tolist') else attr_LinearSVR_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_intercept_ = bridgeLinearSVR[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_intercept_.tolist() if hasattr(attr_LinearSVR_intercept_, 'tolist') else attr_LinearSVR_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVR must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_n_features_in_ = bridgeLinearSVR[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_n_features_in_.tolist() if hasattr(attr_LinearSVR_n_features_in_, 'tolist') else attr_LinearSVR_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVR must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_feature_names_in_ = bridgeLinearSVR[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_feature_names_in_.tolist() if hasattr(attr_LinearSVR_feature_names_in_, 'tolist') else attr_LinearSVR_feature_names_in_`
    })()
  }

  /**
    Maximum number of iterations run across all classes.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_n_iter_ = bridgeLinearSVR[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_n_iter_.tolist() if hasattr(attr_LinearSVR_n_iter_, 'tolist') else attr_LinearSVR_n_iter_`
    })()
  }
}
