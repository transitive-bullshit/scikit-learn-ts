/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A multi-label model that arranges binary classifiers into a chain.

  Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

  For an example of how to use `ClassifierChain` and benefit from its ensemble, see [ClassifierChain on a yeast dataset](https://scikit-learn.org/stable/modules/generated/../../auto_examples/multioutput/plot_classifier_chain_yeast.html#sphx-glr-auto-examples-multioutput-plot-classifier-chain-yeast-py) example.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../multiclass.html#classifierchain).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html)
 */
export class ClassifierChain {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The base estimator from which the classifier chain is built.
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
      Prediction method to be used by estimators in the chain for the ‘prediction’ features of previous estimators in the chain.

      @defaultValue `'predict'`
     */
    chain_method?:
      | 'predict'
      | 'predict_proba'
      | 'predict_log_proba'
      | 'decision_function'

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
    this.id = `ClassifierChain${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ClassifierChain.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multioutput import ClassifierChain
try: bridgeClassifierChain
except NameError: bridgeClassifierChain = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_ClassifierChain = {'base_estimator': ${this.opts['base_estimator'] ?? undefined}, 'order': np.array(${this.opts['order'] ?? undefined}) if ${this.opts['order'] !== undefined} else None, 'cv': ${this.opts['cv'] ?? undefined}, 'chain_method': ${this.opts['chain_method'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_ClassifierChain = {k: v for k, v in ctor_ClassifierChain.items() if v is not None}`

    await this._py
      .ex`bridgeClassifierChain[${this.id}] = ClassifierChain(**ctor_ClassifierChain)`

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

    await this._py.ex`del bridgeClassifierChain[${this.id}]`

    this._isDisposed = true
  }

  /**
    Evaluate the decision_function of the models in the chain.
   */
  async decision_function(opts: {
    /**
      The input data.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_ClassifierChain_decision_function = {k: v for k, v in pms_ClassifierChain_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_decision_function = bridgeClassifierChain[${this.id}].decision_function(**pms_ClassifierChain_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_decision_function.tolist() if hasattr(res_ClassifierChain_decision_function, 'tolist') else res_ClassifierChain_decision_function`
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
      Parameters passed to the `fit` method of each step.

      Only available if `enable_metadata_routing=True`. See the [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing).
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ClassifierChain must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_ClassifierChain_fit = {k: v for k, v in pms_ClassifierChain_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_fit = bridgeClassifierChain[${this.id}].fit(**pms_ClassifierChain_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_fit.tolist() if hasattr(res_ClassifierChain_fit, 'tolist') else res_ClassifierChain_fit`
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
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_ClassifierChain_get_metadata_routing = {k: v for k, v in pms_ClassifierChain_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_get_metadata_routing = bridgeClassifierChain[${this.id}].get_metadata_routing(**pms_ClassifierChain_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_get_metadata_routing.tolist() if hasattr(res_ClassifierChain_get_metadata_routing, 'tolist') else res_ClassifierChain_get_metadata_routing`
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
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ClassifierChain must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_ClassifierChain_predict = {k: v for k, v in pms_ClassifierChain_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_predict = bridgeClassifierChain[${this.id}].predict(**pms_ClassifierChain_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_predict.tolist() if hasattr(res_ClassifierChain_predict, 'tolist') else res_ClassifierChain_predict`
  }

  /**
    Predict logarithm of probability estimates.
   */
  async predict_log_proba(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_predict_log_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_ClassifierChain_predict_log_proba = {k: v for k, v in pms_ClassifierChain_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_predict_log_proba = bridgeClassifierChain[${this.id}].predict_log_proba(**pms_ClassifierChain_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_predict_log_proba.tolist() if hasattr(res_ClassifierChain_predict_log_proba, 'tolist') else res_ClassifierChain_predict_log_proba`
  }

  /**
    Predict probability estimates.
   */
  async predict_proba(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ClassifierChain must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_ClassifierChain_predict_proba = {k: v for k, v in pms_ClassifierChain_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_predict_proba = bridgeClassifierChain[${this.id}].predict_proba(**pms_ClassifierChain_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_predict_proba.tolist() if hasattr(res_ClassifierChain_predict_proba, 'tolist') else res_ClassifierChain_predict_proba`
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
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('ClassifierChain must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_ClassifierChain_score = {k: v for k, v in pms_ClassifierChain_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_score = bridgeClassifierChain[${this.id}].score(**pms_ClassifierChain_score)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_score.tolist() if hasattr(res_ClassifierChain_score, 'tolist') else res_ClassifierChain_score`
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
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ClassifierChain_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_ClassifierChain_set_score_request = {k: v for k, v in pms_ClassifierChain_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ClassifierChain_set_score_request = bridgeClassifierChain[${this.id}].set_score_request(**pms_ClassifierChain_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_ClassifierChain_set_score_request.tolist() if hasattr(res_ClassifierChain_set_score_request, 'tolist') else res_ClassifierChain_set_score_request`
  }

  /**
    A list of arrays of length `len(estimators_)` containing the class labels for each estimator in the chain.
   */
  get classes_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_classes_ = bridgeClassifierChain[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_classes_.tolist() if hasattr(attr_ClassifierChain_classes_, 'tolist') else attr_ClassifierChain_classes_`
    })()
  }

  /**
    A list of clones of base_estimator.
   */
  get estimators_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_estimators_ = bridgeClassifierChain[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_estimators_.tolist() if hasattr(attr_ClassifierChain_estimators_, 'tolist') else attr_ClassifierChain_estimators_`
    })()
  }

  /**
    The order of labels in the classifier chain.
   */
  get order_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing order_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_order_ = bridgeClassifierChain[${this.id}].order_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_order_.tolist() if hasattr(attr_ClassifierChain_order_, 'tolist') else attr_ClassifierChain_order_`
    })()
  }

  /**
    Prediction method used by estimators in the chain for the prediction features.
   */
  get chain_method_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing chain_method_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_chain_method_ = bridgeClassifierChain[${this.id}].chain_method_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_chain_method_.tolist() if hasattr(attr_ClassifierChain_chain_method_, 'tolist') else attr_ClassifierChain_chain_method_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if the underlying `base_estimator` exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_n_features_in_ = bridgeClassifierChain[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_n_features_in_.tolist() if hasattr(attr_ClassifierChain_n_features_in_, 'tolist') else attr_ClassifierChain_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This ClassifierChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'ClassifierChain must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ClassifierChain_feature_names_in_ = bridgeClassifierChain[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_ClassifierChain_feature_names_in_.tolist() if hasattr(attr_ClassifierChain_feature_names_in_, 'tolist') else attr_ClassifierChain_feature_names_in_`
    })()
  }
}
