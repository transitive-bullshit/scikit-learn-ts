/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A sequence of data transformers with an optional final predictor.

  `Pipeline` allows you to sequentially apply a list of transformers to preprocess the data and, if desired, conclude the sequence with a final [predictor](../../glossary.html#term-predictor) for predictive modeling.

  Intermediate steps of the pipeline must be ‘transforms’, that is, they must implement `fit` and `transform` methods. The final [estimator](../../glossary.html#term-estimator) only needs to implement `fit`. The transformers in the pipeline can be cached using `memory` argument.

  The purpose of the pipeline is to assemble several steps that can be cross-validated together while setting different parameters. For this, it enables setting parameters of the various steps using their names and the parameter name separated by a `'\_\_'`, as in the example below. A step’s estimator may be replaced entirely by setting the parameter with its name to another estimator, or a transformer removed by setting it to `'passthrough'` or `undefined`.

  For an example use case of `Pipeline` combined with [`GridSearchCV`](sklearn.model_selection.GridSearchCV.html#sklearn.model_selection.GridSearchCV "sklearn.model_selection.GridSearchCV"), refer to [Selecting dimensionality reduction with Pipeline and GridSearchCV](../../auto_examples/compose/plot_compare_reduction.html#sphx-glr-auto-examples-compose-plot-compare-reduction-py). The example [Pipelining: chaining a PCA and a logistic regression](../../auto_examples/compose/plot_digits_pipe.html#sphx-glr-auto-examples-compose-plot-digits-pipe-py) shows how to grid search on a pipeline using `'\_\_'` as a separator in the parameter names.

  Read more in the [User Guide](../compose.html#pipeline).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html)
 */
export class Pipeline {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      List of (name of step, estimator) tuples that are to be chained in sequential order. To be compatible with the scikit-learn API, all steps must define `fit`. All non-last steps must also define `transform`. See [Combining Estimators](../compose.html#combining-estimators) for more details.
     */
    steps?: any

    /**
      Used to cache the fitted transformers of the pipeline. The last step will never be cached, even if it is a transformer. By default, no caching is performed. If a string is given, it is the path to the caching directory. Enabling caching triggers a clone of the transformers before fitting. Therefore, the transformer instance given to the pipeline cannot be inspected directly. Use the attribute `named\_steps` or `steps` to inspect estimators within the pipeline. Caching the transformers is advantageous when fitting is time consuming.
     */
    memory?: string

    /**
      If `true`, the time elapsed while fitting each step will be printed as it is completed.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `Pipeline${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Pipeline.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.pipeline import Pipeline
try: bridgePipeline
except NameError: bridgePipeline = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_Pipeline = {'steps': ${this.opts['steps'] ?? undefined}, 'memory': ${this.opts['memory'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_Pipeline = {k: v for k, v in ctor_Pipeline.items() if v is not None}`

    await this._py.ex`bridgePipeline[${this.id}] = Pipeline(**ctor_Pipeline)`

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

    await this._py.ex`del bridgePipeline[${this.id}]`

    this._isDisposed = true
  }

  /**
    Transform the data, and apply `decision\_function` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `decision\_function` method. Only valid if the final estimator implements `decision\_function`.
   */
  async decision_function(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before decision_function()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_decision_function = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_decision_function = {k: v for k, v in pms_Pipeline_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_decision_function = bridgePipeline[${this.id}].decision_function(**pms_Pipeline_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_decision_function.tolist() if hasattr(res_Pipeline_decision_function, 'tolist') else res_Pipeline_decision_function`
  }

  /**
    Fit the model.

    Fit all the transformers one after the other and sequentially transform the data. Finally, fit the transformed data using the final estimator.
   */
  async fit(opts: {
    /**
      Training data. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Training targets. Must fulfill label requirements for all steps of the pipeline.
     */
    y?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_fit = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_fit = {k: v for k, v in pms_Pipeline_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_fit = bridgePipeline[${this.id}].fit(**pms_Pipeline_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_fit.tolist() if hasattr(res_Pipeline_fit, 'tolist') else res_Pipeline_fit`
  }

  /**
    Transform the data, and apply `fit\_predict` with the final estimator.

    Call `fit\_transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `fit\_predict` method. Only valid if the final estimator implements `fit\_predict`.
   */
  async fit_predict(opts: {
    /**
      Training data. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Training targets. Must fulfill label requirements for all steps of the pipeline.
     */
    y?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before fit_predict()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_fit_predict = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_fit_predict = {k: v for k, v in pms_Pipeline_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_fit_predict = bridgePipeline[${this.id}].fit_predict(**pms_Pipeline_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_fit_predict.tolist() if hasattr(res_Pipeline_fit_predict, 'tolist') else res_Pipeline_fit_predict`
  }

  /**
    Fit the model and transform with the final estimator.

    Fit all the transformers one after the other and sequentially transform the data. Only valid if the final estimator either implements `fit\_transform` or `fit` and `transform`.
   */
  async fit_transform(opts: {
    /**
      Training data. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Training targets. Must fulfill label requirements for all steps of the pipeline.
     */
    y?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_fit_transform = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_fit_transform = {k: v for k, v in pms_Pipeline_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_fit_transform = bridgePipeline[${this.id}].fit_transform(**pms_Pipeline_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_fit_transform.tolist() if hasattr(res_Pipeline_fit_transform, 'tolist') else res_Pipeline_fit_transform`
  }

  /**
    Get output feature names for transformation.

    Transform input features using the pipeline.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Pipeline must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_Pipeline_get_feature_names_out = {k: v for k, v in pms_Pipeline_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_get_feature_names_out = bridgePipeline[${this.id}].get_feature_names_out(**pms_Pipeline_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_get_feature_names_out.tolist() if hasattr(res_Pipeline_get_feature_names_out, 'tolist') else res_Pipeline_get_feature_names_out`
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
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_Pipeline_get_metadata_routing = {k: v for k, v in pms_Pipeline_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_get_metadata_routing = bridgePipeline[${this.id}].get_metadata_routing(**pms_Pipeline_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_get_metadata_routing.tolist() if hasattr(res_Pipeline_get_metadata_routing, 'tolist') else res_Pipeline_get_metadata_routing`
  }

  /**
    Apply `inverse\_transform` for each step in a reverse order.

    All estimators in the pipeline must support `inverse\_transform`.
   */
  async inverse_transform(opts: {
    /**
      Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method.
     */
    X?: ArrayLike[]

    /**
      Data samples, where `n\_samples` is the number of samples and `n\_features` is the number of features. Must fulfill input requirements of last step of pipeline’s `inverse\_transform` method.
     */
    Xt?: ArrayLike[]

    /**
      Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before inverse_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'Xt': np.array(${opts['Xt'] ?? undefined}) if ${opts['Xt'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_inverse_transform = {k: v for k, v in pms_Pipeline_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_inverse_transform = bridgePipeline[${this.id}].inverse_transform(**pms_Pipeline_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_inverse_transform.tolist() if hasattr(res_Pipeline_inverse_transform, 'tolist') else res_Pipeline_inverse_transform`
  }

  /**
    Transform the data, and apply `predict` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict` method. Only valid if the final estimator implements `predict`.
   */
  async predict(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before predict()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_predict = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_predict = {k: v for k, v in pms_Pipeline_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_predict = bridgePipeline[${this.id}].predict(**pms_Pipeline_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_predict.tolist() if hasattr(res_Pipeline_predict, 'tolist') else res_Pipeline_predict`
  }

  /**
    Transform the data, and apply `predict\_log\_proba` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_log\_proba` method. Only valid if the final estimator implements `predict\_log\_proba`.
   */
  async predict_log_proba(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_predict_log_proba = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_predict_log_proba = {k: v for k, v in pms_Pipeline_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_predict_log_proba = bridgePipeline[${this.id}].predict_log_proba(**pms_Pipeline_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_predict_log_proba.tolist() if hasattr(res_Pipeline_predict_log_proba, 'tolist') else res_Pipeline_predict_log_proba`
  }

  /**
    Transform the data, and apply `predict\_proba` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `predict\_proba` method. Only valid if the final estimator implements `predict\_proba`.
   */
  async predict_proba(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      If `enable\_metadata\_routing=False` (default):
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before predict_proba()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_predict_proba = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_predict_proba = {k: v for k, v in pms_Pipeline_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_predict_proba = bridgePipeline[${this.id}].predict_proba(**pms_Pipeline_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_predict_proba.tolist() if hasattr(res_Pipeline_predict_proba, 'tolist') else res_Pipeline_predict_proba`
  }

  /**
    Transform the data, and apply `score` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score` method. Only valid if the final estimator implements `score`.
   */
  async score(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Targets used for scoring. Must fulfill label requirements for all steps of the pipeline.
     */
    y?: any

    /**
      If not `undefined`, this argument is passed as `sample\_weight` keyword argument to the `score` method of the final estimator.
     */
    sample_weight?: ArrayLike

    /**
      Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.
     */
    params?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before score()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_score = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'sample_weight': ${opts['sample_weight'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_score = {k: v for k, v in pms_Pipeline_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_score = bridgePipeline[${this.id}].score(**pms_Pipeline_score)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_score.tolist() if hasattr(res_Pipeline_score, 'tolist') else res_Pipeline_score`
  }

  /**
    Transform the data, and apply `score\_samples` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `score\_samples` method. Only valid if the final estimator implements `score\_samples`.
   */
  async score_samples(opts: {
    /**
      Data to predict on. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before score_samples()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_score_samples = {'X': ${opts['X'] ?? undefined}}

pms_Pipeline_score_samples = {k: v for k, v in pms_Pipeline_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_score_samples = bridgePipeline[${this.id}].score_samples(**pms_Pipeline_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_score_samples.tolist() if hasattr(res_Pipeline_score_samples, 'tolist') else res_Pipeline_score_samples`
  }

  /**
    Set the output container when `"transform"` and `"fit\_transform"` are called.

    Calling `set\_output` will set the output of all estimators in `steps`.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_Pipeline_set_output = {k: v for k, v in pms_Pipeline_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_set_output = bridgePipeline[${this.id}].set_output(**pms_Pipeline_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_set_output.tolist() if hasattr(res_Pipeline_set_output, 'tolist') else res_Pipeline_set_output`
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
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before set_score_request()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_set_score_request = {'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Pipeline_set_score_request = {k: v for k, v in pms_Pipeline_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_set_score_request = bridgePipeline[${this.id}].set_score_request(**pms_Pipeline_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_set_score_request.tolist() if hasattr(res_Pipeline_set_score_request, 'tolist') else res_Pipeline_set_score_request`
  }

  /**
    Transform the data, and apply `transform` with the final estimator.

    Call `transform` of each transformer in the pipeline. The transformed data are finally passed to the final estimator that calls `transform` method. Only valid if the final estimator implements `transform`.

    This also works where final estimator is `undefined` in which case all prior transformations are applied.
   */
  async transform(opts: {
    /**
      Data to transform. Must fulfill input requirements of first step of the pipeline.
     */
    X?: any

    /**
      Parameters requested and accepted by steps. Each step must have requested certain metadata for these parameters to be forwarded to them.
     */
    params?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Pipeline instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Pipeline must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_Pipeline_transform = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_Pipeline_transform = {k: v for k, v in pms_Pipeline_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Pipeline_transform = bridgePipeline[${this.id}].transform(**pms_Pipeline_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Pipeline_transform.tolist() if hasattr(res_Pipeline_transform, 'tolist') else res_Pipeline_transform`
  }
}
