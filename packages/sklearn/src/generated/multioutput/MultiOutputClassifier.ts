/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi target classification.

  This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html)
 */
export class MultiOutputClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      An estimator object implementing [fit](../../glossary.html#term-fit) and [predict](../../glossary.html#term-predict). A [predict\_proba](../../glossary.html#term-predict_proba) method will be exposed only if `estimator` implements it.
     */
    estimator?: any

    /**
      The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputClassifier.fit "sklearn.multioutput.MultiOutputClassifier.fit"), [`predict`](#sklearn.multioutput.MultiOutputClassifier.predict "sklearn.multioutput.MultiOutputClassifier.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputClassifier.partial_fit "sklearn.multioutput.MultiOutputClassifier.partial_fit") (if supported by the passed estimator) will be parallelized for each target.

      When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.

      `undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all available processes / threads. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `MultiOutputClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MultiOutputClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multioutput import MultiOutputClassifier
try: bridgeMultiOutputClassifier
except NameError: bridgeMultiOutputClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultiOutputClassifier = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_MultiOutputClassifier = {k: v for k, v in ctor_MultiOutputClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeMultiOutputClassifier[${this.id}] = MultiOutputClassifier(**ctor_MultiOutputClassifier)`

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

    await this._py.ex`del bridgeMultiOutputClassifier[${this.id}]`

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
      Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying classifier supports sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters passed to the `estimator.fit` method of each step.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultiOutputClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_MultiOutputClassifier_fit = {k: v for k, v in pms_MultiOutputClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_fit = bridgeMultiOutputClassifier[${this.id}].fit(**pms_MultiOutputClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_fit.tolist() if hasattr(res_MultiOutputClassifier_fit, 'tolist') else res_MultiOutputClassifier_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputClassifier_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_MultiOutputClassifier_get_metadata_routing = {k: v for k, v in pms_MultiOutputClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_get_metadata_routing = bridgeMultiOutputClassifier[${this.id}].get_metadata_routing(**pms_MultiOutputClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_get_metadata_routing.tolist() if hasattr(res_MultiOutputClassifier_get_metadata_routing, 'tolist') else res_MultiOutputClassifier_get_metadata_routing`
  }

  /**
    Incrementally fit a separate model for each class output.
   */
  async partial_fit(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Multi-output targets.
     */
    y?: ArrayLike | SparseMatrix[]

    /**
      Each array is unique classes for one output in str/int. Can be obtained via `\[np.unique(y\[:, i\]) for i in range(y.shape\[1\])\]`, where `y` is the target matrix of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that `y` doesn’t need to contain all labels in `classes`.
     */
    classes?: any[]

    /**
      Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.
     */
    sample_weight?: ArrayLike

    /**
      Parameters passed to the `estimator.partial\_fit` method of each sub-estimator.

      Only available if `enable\_metadata\_routing=True`. See the [User Guide](../../metadata_routing.html#metadata-routing).
     */
    partial_fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_MultiOutputClassifier_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'classes': np.array(${
      opts['classes'] ?? undefined
    }) if ${
      opts['classes'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${
      opts['sample_weight'] !== undefined
    } else None, 'partial_fit_params': ${
      opts['partial_fit_params'] ?? undefined
    }}

pms_MultiOutputClassifier_partial_fit = {k: v for k, v in pms_MultiOutputClassifier_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_partial_fit = bridgeMultiOutputClassifier[${this.id}].partial_fit(**pms_MultiOutputClassifier_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_partial_fit.tolist() if hasattr(res_MultiOutputClassifier_partial_fit, 'tolist') else res_MultiOutputClassifier_partial_fit`
  }

  /**
    Predict multi-output variable using model for each target variable.
   */
  async predict(opts: {
    /**
      The input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MultiOutputClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultiOutputClassifier_predict = {k: v for k, v in pms_MultiOutputClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_predict = bridgeMultiOutputClassifier[${this.id}].predict(**pms_MultiOutputClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_predict.tolist() if hasattr(res_MultiOutputClassifier_predict, 'tolist') else res_MultiOutputClassifier_predict`
  }

  /**
    Return prediction probabilities for each class of each output.

    This method will raise a `ValueError` if any of the estimators do not have `predict\_proba`.
   */
  async predict_proba(opts: {
    /**
      The input data.
     */
    X?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MultiOutputClassifier_predict_proba = {k: v for k, v in pms_MultiOutputClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_predict_proba = bridgeMultiOutputClassifier[${this.id}].predict_proba(**pms_MultiOutputClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_predict_proba.tolist() if hasattr(res_MultiOutputClassifier_predict_proba, 'tolist') else res_MultiOutputClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.
   */
  async score(opts: {
    /**
      Test samples.
     */
    X?: ArrayLike[]

    /**
      True values for X.
     */
    y?: ArrayLike[]
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiOutputClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MultiOutputClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MultiOutputClassifier_score = {k: v for k, v in pms_MultiOutputClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_score = bridgeMultiOutputClassifier[${this.id}].score(**pms_MultiOutputClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_score.tolist() if hasattr(res_MultiOutputClassifier_score, 'tolist') else res_MultiOutputClassifier_score`
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
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputClassifier_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_MultiOutputClassifier_set_fit_request = {k: v for k, v in pms_MultiOutputClassifier_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_set_fit_request = bridgeMultiOutputClassifier[${this.id}].set_fit_request(**pms_MultiOutputClassifier_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_set_fit_request.tolist() if hasattr(res_MultiOutputClassifier_set_fit_request, 'tolist') else res_MultiOutputClassifier_set_fit_request`
  }

  /**
    Request metadata passed to the `partial\_fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_partial_fit_request(opts: {
    /**
      Metadata routing for `classes` parameter in `partial\_fit`.
     */
    classes?: string | boolean

    /**
      Metadata routing for `sample\_weight` parameter in `partial\_fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before set_partial_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiOutputClassifier_set_partial_fit_request = {'classes': ${
      opts['classes'] ?? undefined
    }, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_MultiOutputClassifier_set_partial_fit_request = {k: v for k, v in pms_MultiOutputClassifier_set_partial_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiOutputClassifier_set_partial_fit_request = bridgeMultiOutputClassifier[${this.id}].set_partial_fit_request(**pms_MultiOutputClassifier_set_partial_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiOutputClassifier_set_partial_fit_request.tolist() if hasattr(res_MultiOutputClassifier_set_partial_fit_request, 'tolist') else res_MultiOutputClassifier_set_partial_fit_request`
  }

  /**
    Class labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputClassifier_classes_ = bridgeMultiOutputClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputClassifier_classes_.tolist() if hasattr(attr_MultiOutputClassifier_classes_, 'tolist') else attr_MultiOutputClassifier_classes_`
    })()
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputClassifier_estimators_ = bridgeMultiOutputClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputClassifier_estimators_.tolist() if hasattr(attr_MultiOutputClassifier_estimators_, 'tolist') else attr_MultiOutputClassifier_estimators_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputClassifier_n_features_in_ = bridgeMultiOutputClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputClassifier_n_features_in_.tolist() if hasattr(attr_MultiOutputClassifier_n_features_in_, 'tolist') else attr_MultiOutputClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiOutputClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiOutputClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiOutputClassifier_feature_names_in_ = bridgeMultiOutputClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiOutputClassifier_feature_names_in_.tolist() if hasattr(attr_MultiOutputClassifier_feature_names_in_, 'tolist') else attr_MultiOutputClassifier_feature_names_in_`
    })()
  }
}
