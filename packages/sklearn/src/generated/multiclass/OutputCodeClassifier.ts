/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  (Error-Correcting) Output-Code multiclass strategy.

  Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < `code\_size` < 1) or for making the model more robust to errors (`code\_size` > 1). See the documentation for more details.

  Read more in the [User Guide](../multiclass.html#ecoc).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html)
 */
export class OutputCodeClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      An estimator object implementing [fit](../../glossary.html#term-fit) and one of [decision\_function](../../glossary.html#term-decision_function) or [predict\_proba](../../glossary.html#term-predict_proba).
     */
    estimator?: any

    /**
      Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.

      @defaultValue `1.5`
     */
    code_size?: number

    /**
      The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      The number of jobs to use for the computation: the multiclass problems are computed in parallel.

      `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number
  }) {
    this.id = `OutputCodeClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'OutputCodeClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multiclass import OutputCodeClassifier
try: bridgeOutputCodeClassifier
except NameError: bridgeOutputCodeClassifier = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_OutputCodeClassifier = {'estimator': ${this.opts['estimator'] ?? undefined}, 'code_size': ${this.opts['code_size'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_OutputCodeClassifier = {k: v for k, v in ctor_OutputCodeClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeOutputCodeClassifier[${this.id}] = OutputCodeClassifier(**ctor_OutputCodeClassifier)`

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

    await this._py.ex`del bridgeOutputCodeClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit underlying estimators.
   */
  async fit(opts: {
    /**
      Data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Multi-class targets.
     */
    y?: ArrayLike

    /**
      Parameters passed to the `estimator.fit` method of each sub-estimator.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_OutputCodeClassifier_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_OutputCodeClassifier_fit = {k: v for k, v in pms_OutputCodeClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_fit = bridgeOutputCodeClassifier[${this.id}].fit(**pms_OutputCodeClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_fit.tolist() if hasattr(res_OutputCodeClassifier_fit, 'tolist') else res_OutputCodeClassifier_fit`
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
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OutputCodeClassifier_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_OutputCodeClassifier_get_metadata_routing = {k: v for k, v in pms_OutputCodeClassifier_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_get_metadata_routing = bridgeOutputCodeClassifier[${this.id}].get_metadata_routing(**pms_OutputCodeClassifier_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_get_metadata_routing.tolist() if hasattr(res_OutputCodeClassifier_get_metadata_routing, 'tolist') else res_OutputCodeClassifier_get_metadata_routing`
  }

  /**
    Predict multi-class targets using underlying estimators.
   */
  async predict(opts: {
    /**
      Data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_OutputCodeClassifier_predict = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OutputCodeClassifier_predict = {k: v for k, v in pms_OutputCodeClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_predict = bridgeOutputCodeClassifier[${this.id}].predict(**pms_OutputCodeClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_predict.tolist() if hasattr(res_OutputCodeClassifier_predict, 'tolist') else res_OutputCodeClassifier_predict`
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
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('OutputCodeClassifier must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_OutputCodeClassifier_score = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None}

pms_OutputCodeClassifier_score = {k: v for k, v in pms_OutputCodeClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_score = bridgeOutputCodeClassifier[${this.id}].score(**pms_OutputCodeClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_score.tolist() if hasattr(res_OutputCodeClassifier_score, 'tolist') else res_OutputCodeClassifier_score`
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
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OutputCodeClassifier_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_OutputCodeClassifier_set_score_request = {k: v for k, v in pms_OutputCodeClassifier_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OutputCodeClassifier_set_score_request = bridgeOutputCodeClassifier[${this.id}].set_score_request(**pms_OutputCodeClassifier_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_OutputCodeClassifier_set_score_request.tolist() if hasattr(res_OutputCodeClassifier_set_score_request, 'tolist') else res_OutputCodeClassifier_set_score_request`
  }

  /**
    Estimators used for predictions.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_estimators_ = bridgeOutputCodeClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_estimators_.tolist() if hasattr(attr_OutputCodeClassifier_estimators_, 'tolist') else attr_OutputCodeClassifier_estimators_`
    })()
  }

  /**
    Array containing labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_classes_ = bridgeOutputCodeClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_classes_.tolist() if hasattr(attr_OutputCodeClassifier_classes_, 'tolist') else attr_OutputCodeClassifier_classes_`
    })()
  }

  /**
    Binary array containing the code of each class.
   */
  get code_book_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing code_book_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_code_book_ = bridgeOutputCodeClassifier[${this.id}].code_book_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_code_book_.tolist() if hasattr(attr_OutputCodeClassifier_code_book_, 'tolist') else attr_OutputCodeClassifier_code_book_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_n_features_in_ = bridgeOutputCodeClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_n_features_in_.tolist() if hasattr(attr_OutputCodeClassifier_n_features_in_, 'tolist') else attr_OutputCodeClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This OutputCodeClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'OutputCodeClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OutputCodeClassifier_feature_names_in_ = bridgeOutputCodeClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OutputCodeClassifier_feature_names_in_.tolist() if hasattr(attr_OutputCodeClassifier_feature_names_in_, 'tolist') else attr_OutputCodeClassifier_feature_names_in_`
    })()
  }
}
