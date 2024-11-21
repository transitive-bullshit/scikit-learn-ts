/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stack of estimators with a final classifier.

  Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

  Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

  Read more in the [User Guide](../ensemble.html#stacking).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)
 */
export class StackingClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.

      The type of estimator is generally expected to be a classifier. However, one can pass a regressor for some use case (e.g. ordinal regression).
     */
    estimators?: any

    /**
      A classifier which will be used to combine the base estimators. The default classifier is a [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression").
     */
    final_estimator?: any

    /**
      Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are:
     */
    cv?: number | 'prefit'

    /**
      Methods called for each base estimator. It can be:

      @defaultValue `'auto'`
     */
    stack_method?: 'auto' | 'predict_proba' | 'decision_function' | 'predict'

    /**
      The number of jobs to run in parallel all `estimators` `fit`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details.
     */
    n_jobs?: number

    /**
      When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.

      @defaultValue `false`
     */
    passthrough?: boolean

    /**
      Verbosity level.

      @defaultValue `0`
     */
    verbose?: number
  }) {
    this.id = `StackingClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'StackingClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import StackingClassifier
try: bridgeStackingClassifier
except NameError: bridgeStackingClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_StackingClassifier = {'estimators': ${this.opts['estimators'] ?? undefined}, 'final_estimator': ${this.opts['final_estimator'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'stack_method': ${this.opts['stack_method'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'passthrough': ${this.opts['passthrough'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_StackingClassifier = {k: v for k, v in ctor_StackingClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeStackingClassifier[${this.id}] = StackingClassifier(**ctor_StackingClassifier)`

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

    await this._py.ex`del bridgeStackingClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Decision function for samples in `X` using the final estimator.
   */
  async decision_function(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_decision_function = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_StackingClassifier_decision_function = {k: v for k, v in pms_StackingClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_decision_function = bridgeStackingClassifier[${this.id}].decision_function(**pms_StackingClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_decision_function.tolist() if hasattr(res_StackingClassifier_decision_function, 'tolist') else res_StackingClassifier_decision_function`
  }

  /**
    Fit the estimators.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values. Note that `y` will be internally encoded in numerically increasing order or lexicographic order. If the order matter (e.g. for ordinal regression), one should numerically encode the target `y` before calling [fit](../../glossary.html#term-fit).
     */
    y?: ArrayLike

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_StackingClassifier_fit = {k: v for k, v in pms_StackingClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_fit = bridgeStackingClassifier[${this.id}].fit(**pms_StackingClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_fit.tolist() if hasattr(res_StackingClassifier_fit, 'tolist') else res_StackingClassifier_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: {
    /**
      Input samples.
     */
    X?: ArrayLike[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike

    /**
      Additional fit parameters.
     */
    fit_params?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_StackingClassifier_fit_transform = {k: v for k, v in pms_StackingClassifier_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_fit_transform = bridgeStackingClassifier[${this.id}].fit_transform(**pms_StackingClassifier_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_fit_transform.tolist() if hasattr(res_StackingClassifier_fit_transform, 'tolist') else res_StackingClassifier_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Input features. The input feature names are only used when `passthrough` is `true`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_StackingClassifier_get_feature_names_out = {k: v for k, v in pms_StackingClassifier_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_get_feature_names_out = bridgeStackingClassifier[${this.id}].get_feature_names_out(**pms_StackingClassifier_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_get_feature_names_out.tolist() if hasattr(res_StackingClassifier_get_feature_names_out, 'tolist') else res_StackingClassifier_get_feature_names_out`
  }

  /**
    Raise `NotImplementedError`.

    This estimator does not support metadata routing yet.
   */
  async get_metadata_routing(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_StackingClassifier_get_metadata_routing = {}

pms_StackingClassifier_get_metadata_routing = {k: v for k, v in pms_StackingClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_get_metadata_routing = bridgeStackingClassifier[${this.id}].get_metadata_routing(**pms_StackingClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_get_metadata_routing.tolist() if hasattr(res_StackingClassifier_get_metadata_routing, 'tolist') else res_StackingClassifier_get_metadata_routing`
  }

  /**
    Predict target for X.
   */
  async predict(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.
     */
    predict_params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'predict_params': ${opts['predict_params'] ?? undefined}}

pms_StackingClassifier_predict = {k: v for k, v in pms_StackingClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_predict = bridgeStackingClassifier[${this.id}].predict(**pms_StackingClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_predict.tolist() if hasattr(res_StackingClassifier_predict, 'tolist') else res_StackingClassifier_predict`
  }

  /**
    Predict class probabilities for `X` using the final estimator.
   */
  async predict_proba(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[] | any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_predict_proba = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_StackingClassifier_predict_proba = {k: v for k, v in pms_StackingClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_predict_proba = bridgeStackingClassifier[${this.id}].predict_proba(**pms_StackingClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_predict_proba.tolist() if hasattr(res_StackingClassifier_predict_proba, 'tolist') else res_StackingClassifier_predict_proba`
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
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_StackingClassifier_score = {k: v for k, v in pms_StackingClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_score = bridgeStackingClassifier[${this.id}].score(**pms_StackingClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_score.tolist() if hasattr(res_StackingClassifier_score, 'tolist') else res_StackingClassifier_score`
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
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_set_fit_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_StackingClassifier_set_fit_request = {k: v for k, v in pms_StackingClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_set_fit_request = bridgeStackingClassifier[${this.id}].set_fit_request(**pms_StackingClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_set_fit_request.tolist() if hasattr(res_StackingClassifier_set_fit_request, 'tolist') else res_StackingClassifier_set_fit_request`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingClassifier must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_StackingClassifier_set_output = {k: v for k, v in pms_StackingClassifier_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_set_output = bridgeStackingClassifier[${this.id}].set_output(**pms_StackingClassifier_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_set_output.tolist() if hasattr(res_StackingClassifier_set_output, 'tolist') else res_StackingClassifier_set_output`
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
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_StackingClassifier_set_score_request = {k: v for k, v in pms_StackingClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_set_score_request = bridgeStackingClassifier[${this.id}].set_score_request(**pms_StackingClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_set_score_request.tolist() if hasattr(res_StackingClassifier_set_score_request, 'tolist') else res_StackingClassifier_set_score_request`
  }

  /**
    Return class labels or probabilities for X for each estimator.
   */
  async transform(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingClassifier must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_StackingClassifier_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_StackingClassifier_transform = {k: v for k, v in pms_StackingClassifier_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingClassifier_transform = bridgeStackingClassifier[${this.id}].transform(**pms_StackingClassifier_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingClassifier_transform.tolist() if hasattr(res_StackingClassifier_transform, 'tolist') else res_StackingClassifier_transform`
  }

  /**
    Class labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_classes_ = bridgeStackingClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_classes_.tolist() if hasattr(attr_StackingClassifier_classes_, 'tolist') else attr_StackingClassifier_classes_`
    })()
  }

  /**
    The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_estimators_ = bridgeStackingClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_estimators_.tolist() if hasattr(attr_StackingClassifier_estimators_, 'tolist') else attr_StackingClassifier_estimators_`
    })()
  }

  /**
    Attribute to access any fitted sub-estimators by name.
   */
  get named_estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing named_estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_named_estimators_ = bridgeStackingClassifier[${this.id}].named_estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_named_estimators_.tolist() if hasattr(attr_StackingClassifier_named_estimators_, 'tolist') else attr_StackingClassifier_named_estimators_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_feature_names_in_ = bridgeStackingClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_feature_names_in_.tolist() if hasattr(attr_StackingClassifier_feature_names_in_, 'tolist') else attr_StackingClassifier_feature_names_in_`
    })()
  }

  /**
    The classifier which predicts given the output of `estimators\_`.
   */
  get final_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing final_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_final_estimator_ = bridgeStackingClassifier[${this.id}].final_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_final_estimator_.tolist() if hasattr(attr_StackingClassifier_final_estimator_, 'tolist') else attr_StackingClassifier_final_estimator_`
    })()
  }

  /**
    The method used by each base estimator.
   */
  get stack_method_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingClassifier must call init() before accessing stack_method_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingClassifier_stack_method_ = bridgeStackingClassifier[${this.id}].stack_method_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingClassifier_stack_method_.tolist() if hasattr(attr_StackingClassifier_stack_method_, 'tolist') else attr_StackingClassifier_stack_method_`
    })()
  }
}
