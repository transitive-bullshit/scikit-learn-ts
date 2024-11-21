/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A multi-label model that arranges regressions into a chain.

  Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#regressorchain).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html)
 */
export class RegressorChain {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The base estimator from which the regressor chain is built.
     */
    base_estimator?: any

    /**
      If `undefined`, the order will be determined by the order of columns in the label matrix Y.:
     */
    order?: ArrayLike | 'random'

    /**
      Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are:
     */
    cv?: number

    /**
      If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base_estimator` at each chaining iteration. Thus, it is only used when `base_estimator` exposes a `random_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If `true`, chain progress is output as each model is completed.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `RegressorChain${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RegressorChain.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multioutput import RegressorChain
try: bridgeRegressorChain
except NameError: bridgeRegressorChain = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_RegressorChain = {'base_estimator': ${this.opts['base_estimator'] ?? undefined}, 'order': np.array(${this.opts['order'] ?? undefined}) if ${this.opts['order'] !== undefined} else None, 'cv': ${this.opts['cv'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_RegressorChain = {k: v for k, v in ctor_RegressorChain.items() if v is not None}`

    await this._py
      .ex`bridgeRegressorChain[${this.id}] = RegressorChain(**ctor_RegressorChain)`

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

    await this._py.ex`del bridgeRegressorChain[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to data matrix X and targets Y.
   */
  async fit(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The target values.
     */
    Y?: ArrayLike[]

    /**
      Parameters passed to the `fit` method at each step of the regressor chain.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_RegressorChain_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_RegressorChain_fit = {k: v for k, v in pms_RegressorChain_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_fit = bridgeRegressorChain[${this.id}].fit(**pms_RegressorChain_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_fit.tolist() if hasattr(res_RegressorChain_fit, 'tolist') else res_RegressorChain_fit`
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
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RegressorChain_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_RegressorChain_get_metadata_routing = {k: v for k, v in pms_RegressorChain_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_get_metadata_routing = bridgeRegressorChain[${this.id}].get_metadata_routing(**pms_RegressorChain_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_get_metadata_routing.tolist() if hasattr(res_RegressorChain_get_metadata_routing, 'tolist') else res_RegressorChain_get_metadata_routing`
  }

  /**
    Predict on the data matrix X using the ClassifierChain model.
   */
  async predict(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_RegressorChain_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_RegressorChain_predict = {k: v for k, v in pms_RegressorChain_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_predict = bridgeRegressorChain[${this.id}].predict(**pms_RegressorChain_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_predict.tolist() if hasattr(res_RegressorChain_predict, 'tolist') else res_RegressorChain_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: {
    /**
      Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator.
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
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_RegressorChain_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_RegressorChain_score = {k: v for k, v in pms_RegressorChain_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_score = bridgeRegressorChain[${this.id}].score(**pms_RegressorChain_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_score.tolist() if hasattr(res_RegressorChain_score, 'tolist') else res_RegressorChain_score`
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
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RegressorChain_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_RegressorChain_set_score_request = {k: v for k, v in pms_RegressorChain_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_set_score_request = bridgeRegressorChain[${this.id}].set_score_request(**pms_RegressorChain_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_set_score_request.tolist() if hasattr(res_RegressorChain_set_score_request, 'tolist') else res_RegressorChain_set_score_request`
  }

  /**
    A list of clones of base_estimator.
   */
  get estimators_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_estimators_ = bridgeRegressorChain[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_estimators_.tolist() if hasattr(attr_RegressorChain_estimators_, 'tolist') else attr_RegressorChain_estimators_`
    })()
  }

  /**
    The order of labels in the classifier chain.
   */
  get order_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before accessing order_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_order_ = bridgeRegressorChain[${this.id}].order_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_order_.tolist() if hasattr(attr_RegressorChain_order_, 'tolist') else attr_RegressorChain_order_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying `base_estimator` exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_n_features_in_ = bridgeRegressorChain[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_n_features_in_.tolist() if hasattr(attr_RegressorChain_n_features_in_, 'tolist') else attr_RegressorChain_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_feature_names_in_ = bridgeRegressorChain[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_feature_names_in_.tolist() if hasattr(attr_RegressorChain_feature_names_in_, 'tolist') else attr_RegressorChain_feature_names_in_`
    })()
  }
}
