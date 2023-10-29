/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  PLS regression.

  PLSRegression is also known as PLS2 or PLS1, depending on the number of targets.

  Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSRegression.html)
 */
export class PLSRegression {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

      @defaultValue `2`
     */
    n_components?: number

    /**
      Whether to scale `X` and `Y`.

      @defaultValue `true`
     */
    scale?: boolean

    /**
      The maximum number of iterations of the power method when `algorithm='nipals'`. Ignored otherwise.

      @defaultValue `500`
     */
    max_iter?: number

    /**
      The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

      @defaultValue `0.000001`
     */
    tol?: number

    /**
      Whether to copy `X` and `Y` in [fit](../../glossary.html#term-fit) before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

      @defaultValue `true`
     */
    copy?: boolean
  }) {
    this.id = `PLSRegression${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PLSRegression.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cross_decomposition import PLSRegression
try: bridgePLSRegression
except NameError: bridgePLSRegression = {}
`

    // set up constructor params
    await this._py.ex`ctor_PLSRegression = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'scale': ${this.opts['scale'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_PLSRegression = {k: v for k, v in ctor_PLSRegression.items() if v is not None}`

    await this._py
      .ex`bridgePLSRegression[${this.id}] = PLSRegression(**ctor_PLSRegression)`

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

    await this._py.ex`del bridgePLSRegression[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit model to data.
   */
  async fit(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.
     */
    X?: ArrayLike[]

    /**
      Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.
     */
    Y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_PLSRegression_fit = {k: v for k, v in pms_PLSRegression_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_fit = bridgePLSRegression[${this.id}].fit(**pms_PLSRegression_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_fit.tolist() if hasattr(res_PLSRegression_fit, 'tolist') else res_PLSRegression_fit`
  }

  /**
    Learn and apply the dimension reduction on the train data.
   */
  async fit_transform(opts: {
    /**
      Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.
     */
    X?: ArrayLike[]

    /**
      Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.
     */
    y?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_PLSRegression_fit_transform = {k: v for k, v in pms_PLSRegression_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_fit_transform = bridgePLSRegression[${this.id}].fit_transform(**pms_PLSRegression_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_fit_transform.tolist() if hasattr(res_PLSRegression_fit_transform, 'tolist') else res_PLSRegression_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PLSRegression_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PLSRegression_get_feature_names_out = {k: v for k, v in pms_PLSRegression_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_get_feature_names_out = bridgePLSRegression[${this.id}].get_feature_names_out(**pms_PLSRegression_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_get_feature_names_out.tolist() if hasattr(res_PLSRegression_get_feature_names_out, 'tolist') else res_PLSRegression_get_feature_names_out`
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
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_PLSRegression_get_metadata_routing = {k: v for k, v in pms_PLSRegression_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_get_metadata_routing = bridgePLSRegression[${this.id}].get_metadata_routing(**pms_PLSRegression_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_get_metadata_routing.tolist() if hasattr(res_PLSRegression_get_metadata_routing, 'tolist') else res_PLSRegression_get_metadata_routing`
  }

  /**
    Transform data back to its original space.
   */
  async inverse_transform(opts: {
    /**
      New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.
     */
    X?: ArrayLike[]

    /**
      New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.
     */
    Y?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_PLSRegression_inverse_transform = {k: v for k, v in pms_PLSRegression_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_inverse_transform = bridgePLSRegression[${this.id}].inverse_transform(**pms_PLSRegression_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_inverse_transform.tolist() if hasattr(res_PLSRegression_inverse_transform, 'tolist') else res_PLSRegression_inverse_transform`
  }

  /**
    Predict targets of given samples.
   */
  async predict(opts: {
    /**
      Samples.
     */
    X?: ArrayLike[]

    /**
      Whether to copy `X` and `Y`, or perform in-place normalization.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_PLSRegression_predict = {k: v for k, v in pms_PLSRegression_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_predict = bridgePLSRegression[${this.id}].predict(**pms_PLSRegression_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_predict.tolist() if hasattr(res_PLSRegression_predict, 'tolist') else res_PLSRegression_predict`
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
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_PLSRegression_score = {k: v for k, v in pms_PLSRegression_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_score = bridgePLSRegression[${this.id}].score(**pms_PLSRegression_score)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_score.tolist() if hasattr(res_PLSRegression_score, 'tolist') else res_PLSRegression_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PLSRegression_set_output = {k: v for k, v in pms_PLSRegression_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_set_output = bridgePLSRegression[${this.id}].set_output(**pms_PLSRegression_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_set_output.tolist() if hasattr(res_PLSRegression_set_output, 'tolist') else res_PLSRegression_set_output`
  }

  /**
    Request metadata passed to the `predict` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_request(opts: {
    /**
      Metadata routing for `copy` parameter in `predict`.
     */
    copy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before set_predict_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_set_predict_request = {'copy': ${
      opts['copy'] ?? undefined
    }}

pms_PLSRegression_set_predict_request = {k: v for k, v in pms_PLSRegression_set_predict_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_set_predict_request = bridgePLSRegression[${this.id}].set_predict_request(**pms_PLSRegression_set_predict_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_set_predict_request.tolist() if hasattr(res_PLSRegression_set_predict_request, 'tolist') else res_PLSRegression_set_predict_request`
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
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before set_score_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_PLSRegression_set_score_request = {k: v for k, v in pms_PLSRegression_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_set_score_request = bridgePLSRegression[${this.id}].set_score_request(**pms_PLSRegression_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_set_score_request.tolist() if hasattr(res_PLSRegression_set_score_request, 'tolist') else res_PLSRegression_set_score_request`
  }

  /**
    Request metadata passed to the `transform` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_transform_request(opts: {
    /**
      Metadata routing for `copy` parameter in `transform`.
     */
    copy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before set_transform_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_set_transform_request = {'copy': ${
      opts['copy'] ?? undefined
    }}

pms_PLSRegression_set_transform_request = {k: v for k, v in pms_PLSRegression_set_transform_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_set_transform_request = bridgePLSRegression[${this.id}].set_transform_request(**pms_PLSRegression_set_transform_request)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_set_transform_request.tolist() if hasattr(res_PLSRegression_set_transform_request, 'tolist') else res_PLSRegression_set_transform_request`
  }

  /**
    Apply the dimension reduction.
   */
  async transform(opts: {
    /**
      Samples to transform.
     */
    X?: ArrayLike[]

    /**
      Target vectors.
     */
    Y?: ArrayLike[]

    /**
      Whether to copy `X` and `Y`, or perform in-place normalization.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PLSRegression_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_PLSRegression_transform = {k: v for k, v in pms_PLSRegression_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSRegression_transform = bridgePLSRegression[${this.id}].transform(**pms_PLSRegression_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSRegression_transform.tolist() if hasattr(res_PLSRegression_transform, 'tolist') else res_PLSRegression_transform`
  }

  /**
    The left singular vectors of the cross-covariance matrices of each iteration.
   */
  get x_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing x_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_x_weights_ = bridgePLSRegression[${this.id}].x_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_x_weights_.tolist() if hasattr(attr_PLSRegression_x_weights_, 'tolist') else attr_PLSRegression_x_weights_`
    })()
  }

  /**
    The right singular vectors of the cross-covariance matrices of each iteration.
   */
  get y_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing y_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_y_weights_ = bridgePLSRegression[${this.id}].y_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_y_weights_.tolist() if hasattr(attr_PLSRegression_y_weights_, 'tolist') else attr_PLSRegression_y_weights_`
    })()
  }

  /**
    The loadings of `X`.
   */
  get x_loadings_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing x_loadings_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_x_loadings_ = bridgePLSRegression[${this.id}].x_loadings_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_x_loadings_.tolist() if hasattr(attr_PLSRegression_x_loadings_, 'tolist') else attr_PLSRegression_x_loadings_`
    })()
  }

  /**
    The loadings of `Y`.
   */
  get y_loadings_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing y_loadings_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_y_loadings_ = bridgePLSRegression[${this.id}].y_loadings_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_y_loadings_.tolist() if hasattr(attr_PLSRegression_y_loadings_, 'tolist') else attr_PLSRegression_y_loadings_`
    })()
  }

  /**
    The transformed training samples.
   */
  get x_scores_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing x_scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_x_scores_ = bridgePLSRegression[${this.id}].x_scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_x_scores_.tolist() if hasattr(attr_PLSRegression_x_scores_, 'tolist') else attr_PLSRegression_x_scores_`
    })()
  }

  /**
    The transformed training targets.
   */
  get y_scores_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing y_scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_y_scores_ = bridgePLSRegression[${this.id}].y_scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_y_scores_.tolist() if hasattr(attr_PLSRegression_y_scores_, 'tolist') else attr_PLSRegression_y_scores_`
    })()
  }

  /**
    The projection matrix used to transform `X`.
   */
  get x_rotations_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing x_rotations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_x_rotations_ = bridgePLSRegression[${this.id}].x_rotations_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_x_rotations_.tolist() if hasattr(attr_PLSRegression_x_rotations_, 'tolist') else attr_PLSRegression_x_rotations_`
    })()
  }

  /**
    The projection matrix used to transform `Y`.
   */
  get y_rotations_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing y_rotations_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_y_rotations_ = bridgePLSRegression[${this.id}].y_rotations_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_y_rotations_.tolist() if hasattr(attr_PLSRegression_y_rotations_, 'tolist') else attr_PLSRegression_y_rotations_`
    })()
  }

  /**
    The coefficients of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_coef_ = bridgePLSRegression[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_coef_.tolist() if hasattr(attr_PLSRegression_coef_, 'tolist') else attr_PLSRegression_coef_`
    })()
  }

  /**
    The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_.T + intercept\_`.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_intercept_ = bridgePLSRegression[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_intercept_.tolist() if hasattr(attr_PLSRegression_intercept_, 'tolist') else attr_PLSRegression_intercept_`
    })()
  }

  /**
    Number of iterations of the power method, for each component.
   */
  get n_iter_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSRegression must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_n_iter_ = bridgePLSRegression[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_n_iter_.tolist() if hasattr(attr_PLSRegression_n_iter_, 'tolist') else attr_PLSRegression_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_n_features_in_ = bridgePLSRegression[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_n_features_in_.tolist() if hasattr(attr_PLSRegression_n_features_in_, 'tolist') else attr_PLSRegression_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PLSRegression instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSRegression must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSRegression_feature_names_in_ = bridgePLSRegression[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSRegression_feature_names_in_.tolist() if hasattr(attr_PLSRegression_feature_names_in_, 'tolist') else attr_PLSRegression_feature_names_in_`
    })()
  }
}
