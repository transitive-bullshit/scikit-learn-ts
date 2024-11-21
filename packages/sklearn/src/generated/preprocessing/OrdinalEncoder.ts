/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Encode categorical features as an integer array.

  The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are converted to ordinal integers. This results in a single column of integers (0 to n\_categories - 1) per feature.

  Read more in the [User Guide](../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OrdinalEncoder.html)
 */
export class OrdinalEncoder {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Categories (unique values) per feature:

      @defaultValue `'auto'`
     */
    categories?: 'auto'

    /**
      Desired dtype of output.
     */
    dtype?: any

    /**
      When set to ‘error’ an error will be raised in case an unknown categorical feature is present during transform. When set to ‘use\_encoded\_value’, the encoded value of unknown categories will be set to the value given for the parameter `unknown\_value`. In [`inverse\_transform`](#sklearn.preprocessing.OrdinalEncoder.inverse_transform "sklearn.preprocessing.OrdinalEncoder.inverse_transform"), an unknown category will be denoted as `undefined`.

      @defaultValue `'error'`
     */
    handle_unknown?: 'error' | 'use_encoded_value'

    /**
      When the parameter handle\_unknown is set to ‘use\_encoded\_value’, this parameter is required and will set the encoded value of unknown categories. It has to be distinct from the values used to encode any of the categories in `fit`. If set to np.nan, the `dtype` parameter must be a float dtype.
     */
    unknown_value?: number

    /**
      Encoded value of missing categories. If set to `np.nan`, then the `dtype` parameter must be a float dtype.
     */
    encoded_missing_value?: number

    /**
      Specifies the minimum frequency below which a category will be considered infrequent.
     */
    min_frequency?: number

    /**
      Specifies an upper limit to the number of output categories for each input feature when considering infrequent categories. If there are infrequent categories, `max\_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.

      `max\_categories` do **not** take into account missing or unknown categories. Setting `unknown\_value` or `encoded\_missing\_value` to an integer will increase the number of unique integer codes by one each. This can result in up to `max\_categories + 2` integer codes.
     */
    max_categories?: number
  }) {
    this.id = `OrdinalEncoder${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('OrdinalEncoder.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import OrdinalEncoder
try: bridgeOrdinalEncoder
except NameError: bridgeOrdinalEncoder = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_OrdinalEncoder = {'categories': ${this.opts['categories'] ?? undefined}, 'dtype': ${this.opts['dtype'] ?? undefined}, 'handle_unknown': ${this.opts['handle_unknown'] ?? undefined}, 'unknown_value': ${this.opts['unknown_value'] ?? undefined}, 'encoded_missing_value': ${this.opts['encoded_missing_value'] ?? undefined}, 'min_frequency': ${this.opts['min_frequency'] ?? undefined}, 'max_categories': ${this.opts['max_categories'] ?? undefined}}

ctor_OrdinalEncoder = {k: v for k, v in ctor_OrdinalEncoder.items() if v is not None}`

    await this._py
      .ex`bridgeOrdinalEncoder[${this.id}] = OrdinalEncoder(**ctor_OrdinalEncoder)`

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

    await this._py.ex`del bridgeOrdinalEncoder[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the OrdinalEncoder to X.
   */
  async fit(opts: {
    /**
      The data to determine the categories of each feature.
     */
    X?: ArrayLike[]

    /**
      Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OrdinalEncoder must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OrdinalEncoder_fit = {k: v for k, v in pms_OrdinalEncoder_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_fit = bridgeOrdinalEncoder[${this.id}].fit(**pms_OrdinalEncoder_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_fit.tolist() if hasattr(res_OrdinalEncoder_fit, 'tolist') else res_OrdinalEncoder_fit`
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
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OrdinalEncoder must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_OrdinalEncoder_fit_transform = {k: v for k, v in pms_OrdinalEncoder_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_fit_transform = bridgeOrdinalEncoder[${this.id}].fit_transform(**pms_OrdinalEncoder_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_fit_transform.tolist() if hasattr(res_OrdinalEncoder_fit_transform, 'tolist') else res_OrdinalEncoder_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_OrdinalEncoder_get_feature_names_out = {k: v for k, v in pms_OrdinalEncoder_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_get_feature_names_out = bridgeOrdinalEncoder[${this.id}].get_feature_names_out(**pms_OrdinalEncoder_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_get_feature_names_out.tolist() if hasattr(res_OrdinalEncoder_get_feature_names_out, 'tolist') else res_OrdinalEncoder_get_feature_names_out`
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
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_OrdinalEncoder_get_metadata_routing = {k: v for k, v in pms_OrdinalEncoder_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_get_metadata_routing = bridgeOrdinalEncoder[${this.id}].get_metadata_routing(**pms_OrdinalEncoder_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_get_metadata_routing.tolist() if hasattr(res_OrdinalEncoder_get_metadata_routing, 'tolist') else res_OrdinalEncoder_get_metadata_routing`
  }

  /**
    Convert the data back to the original representation.
   */
  async inverse_transform(opts: {
    /**
      The transformed data.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OrdinalEncoder_inverse_transform = {k: v for k, v in pms_OrdinalEncoder_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_inverse_transform = bridgeOrdinalEncoder[${this.id}].inverse_transform(**pms_OrdinalEncoder_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_inverse_transform.tolist() if hasattr(res_OrdinalEncoder_inverse_transform, 'tolist') else res_OrdinalEncoder_inverse_transform`
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
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OrdinalEncoder must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_OrdinalEncoder_set_output = {k: v for k, v in pms_OrdinalEncoder_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_set_output = bridgeOrdinalEncoder[${this.id}].set_output(**pms_OrdinalEncoder_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_set_output.tolist() if hasattr(res_OrdinalEncoder_set_output, 'tolist') else res_OrdinalEncoder_set_output`
  }

  /**
    Transform X to ordinal codes.
   */
  async transform(opts: {
    /**
      The data to encode.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OrdinalEncoder must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_OrdinalEncoder_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OrdinalEncoder_transform = {k: v for k, v in pms_OrdinalEncoder_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OrdinalEncoder_transform = bridgeOrdinalEncoder[${this.id}].transform(**pms_OrdinalEncoder_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OrdinalEncoder_transform.tolist() if hasattr(res_OrdinalEncoder_transform, 'tolist') else res_OrdinalEncoder_transform`
  }

  /**
    The categories of each feature determined during `fit` (in order of the features in X and corresponding with the output of `transform`). This does not include categories that weren’t seen during `fit`.
   */
  get categories_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before accessing categories_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrdinalEncoder_categories_ = bridgeOrdinalEncoder[${this.id}].categories_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrdinalEncoder_categories_.tolist() if hasattr(attr_OrdinalEncoder_categories_, 'tolist') else attr_OrdinalEncoder_categories_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrdinalEncoder_n_features_in_ = bridgeOrdinalEncoder[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrdinalEncoder_n_features_in_.tolist() if hasattr(attr_OrdinalEncoder_n_features_in_, 'tolist') else attr_OrdinalEncoder_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OrdinalEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OrdinalEncoder must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OrdinalEncoder_feature_names_in_ = bridgeOrdinalEncoder[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OrdinalEncoder_feature_names_in_.tolist() if hasattr(attr_OrdinalEncoder_feature_names_in_, 'tolist') else attr_OrdinalEncoder_feature_names_in_`
    })()
  }
}
