/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Feature selector that removes all low-variance features.

  This feature selection algorithm looks only at the features (X), not the desired outputs (y), and can thus be used for unsupervised learning.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../feature_selection.html#variance-threshold).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.VarianceThreshold.html)
 */
export class VarianceThreshold {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Features with a training-set variance lower than this threshold will be removed. The default is to keep all features with non-zero variance, i.e. remove the features that have the same value in all samples.

      @defaultValue `0`
     */
    threshold?: number
  }) {
    this.id = `VarianceThreshold${crypto.randomUUID().split('-')[0]}`
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
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('VarianceThreshold.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import VarianceThreshold
try: bridgeVarianceThreshold
except NameError: bridgeVarianceThreshold = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_VarianceThreshold = {'threshold': ${this.opts['threshold'] ?? undefined}}

ctor_VarianceThreshold = {k: v for k, v in ctor_VarianceThreshold.items() if v is not None}`

    await this._py
      .ex`bridgeVarianceThreshold[${this.id}] = VarianceThreshold(**ctor_VarianceThreshold)`

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

    await this._py.ex`del bridgeVarianceThreshold[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn empirical variances from X.
   */
  async fit(opts: {
    /**
      Data from which to compute variances, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Ignored. This parameter exists only for compatibility with sklearn.pipeline.Pipeline.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VarianceThreshold must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_fit = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}}

pms_VarianceThreshold_fit = {k: v for k, v in pms_VarianceThreshold_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_fit = bridgeVarianceThreshold[${this.id}].fit(**pms_VarianceThreshold_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_fit.tolist() if hasattr(res_VarianceThreshold_fit, 'tolist') else res_VarianceThreshold_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.
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
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_VarianceThreshold_fit_transform = {k: v for k, v in pms_VarianceThreshold_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_fit_transform = bridgeVarianceThreshold[${this.id}].fit_transform(**pms_VarianceThreshold_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_fit_transform.tolist() if hasattr(res_VarianceThreshold_fit_transform, 'tolist') else res_VarianceThreshold_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_VarianceThreshold_get_feature_names_out = {k: v for k, v in pms_VarianceThreshold_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_get_feature_names_out = bridgeVarianceThreshold[${this.id}].get_feature_names_out(**pms_VarianceThreshold_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_get_feature_names_out.tolist() if hasattr(res_VarianceThreshold_get_feature_names_out, 'tolist') else res_VarianceThreshold_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_VarianceThreshold_get_metadata_routing = {k: v for k, v in pms_VarianceThreshold_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_get_metadata_routing = bridgeVarianceThreshold[${this.id}].get_metadata_routing(**pms_VarianceThreshold_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_get_metadata_routing.tolist() if hasattr(res_VarianceThreshold_get_metadata_routing, 'tolist') else res_VarianceThreshold_get_metadata_routing`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(opts: {
    /**
      If `true`, the return value will be an array of integers, rather than a boolean mask.

      @defaultValue `false`
     */
    indices?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VarianceThreshold must call init() before get_support()')
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_get_support = {'indices': ${opts['indices'] ?? undefined}}

pms_VarianceThreshold_get_support = {k: v for k, v in pms_VarianceThreshold_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_get_support = bridgeVarianceThreshold[${this.id}].get_support(**pms_VarianceThreshold_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_get_support.tolist() if hasattr(res_VarianceThreshold_get_support, 'tolist') else res_VarianceThreshold_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VarianceThreshold_inverse_transform = {k: v for k, v in pms_VarianceThreshold_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_inverse_transform = bridgeVarianceThreshold[${this.id}].inverse_transform(**pms_VarianceThreshold_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_inverse_transform.tolist() if hasattr(res_VarianceThreshold_inverse_transform, 'tolist') else res_VarianceThreshold_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VarianceThreshold must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_VarianceThreshold_set_output = {k: v for k, v in pms_VarianceThreshold_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_set_output = bridgeVarianceThreshold[${this.id}].set_output(**pms_VarianceThreshold_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_set_output.tolist() if hasattr(res_VarianceThreshold_set_output, 'tolist') else res_VarianceThreshold_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('VarianceThreshold must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_VarianceThreshold_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_VarianceThreshold_transform = {k: v for k, v in pms_VarianceThreshold_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_VarianceThreshold_transform = bridgeVarianceThreshold[${this.id}].transform(**pms_VarianceThreshold_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_VarianceThreshold_transform.tolist() if hasattr(res_VarianceThreshold_transform, 'tolist') else res_VarianceThreshold_transform`
  }

  /**
    Variances of individual features.
   */
  get variances_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before accessing variances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VarianceThreshold_variances_ = bridgeVarianceThreshold[${this.id}].variances_`

      // convert the result from python to node.js
      return this
        ._py`attr_VarianceThreshold_variances_.tolist() if hasattr(attr_VarianceThreshold_variances_, 'tolist') else attr_VarianceThreshold_variances_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VarianceThreshold_n_features_in_ = bridgeVarianceThreshold[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_VarianceThreshold_n_features_in_.tolist() if hasattr(attr_VarianceThreshold_n_features_in_, 'tolist') else attr_VarianceThreshold_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This VarianceThreshold instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'VarianceThreshold must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_VarianceThreshold_feature_names_in_ = bridgeVarianceThreshold[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_VarianceThreshold_feature_names_in_.tolist() if hasattr(attr_VarianceThreshold_feature_names_in_, 'tolist') else attr_VarianceThreshold_feature_names_in_`
    })()
  }
}
