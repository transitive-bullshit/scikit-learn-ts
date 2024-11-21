/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Scale features using statistics that are robust to outliers.

  This Scaler removes the median and scales the data according to the quantile range (defaults to IQR: Interquartile Range). The IQR is the range between the 1st quartile (25th quantile) and the 3rd quartile (75th quantile).

  Centering and scaling happen independently on each feature by computing the relevant statistics on the samples in the training set. Median and interquartile range are then stored to be used on later data using the [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") method.

  Standardization of a dataset is a common preprocessing for many machine learning estimators. Typically this is done by removing the mean and scaling to unit variance. However, outliers can often influence the sample mean / variance in a negative way. In such cases, using the median and the interquartile range often give better results. For an example visualization and comparison to other scalers, refer to [Compare RobustScaler with other scalers](../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-robust-scaler-section).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html)
 */
export class RobustScaler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      If `true`, center the data before scaling. This will cause [`transform`](#sklearn.preprocessing.RobustScaler.transform "sklearn.preprocessing.RobustScaler.transform") to raise an exception when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

      @defaultValue `true`
     */
    with_centering?: boolean

    /**
      If `true`, scale the data to interquartile range.

      @defaultValue `true`
     */
    with_scaling?: boolean

    /**
      Quantile range used to calculate `scale\_`. By default this is equal to the IQR, i.e., `q\_min` is the first quantile and `q\_max` is the third quantile.
     */
    quantile_range?: any

    /**
      If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

      @defaultValue `true`
     */
    copy?: boolean

    /**
      If `true`, scale data so that normally distributed features have a variance of 1. In general, if the difference between the x-values of `q\_max` and `q\_min` for a standard normal distribution is greater than 1, the dataset will be scaled down. If less than 1, the dataset will be scaled up.

      @defaultValue `false`
     */
    unit_variance?: boolean
  }) {
    this.id = `RobustScaler${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RobustScaler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import RobustScaler
try: bridgeRobustScaler
except NameError: bridgeRobustScaler = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_RobustScaler = {'with_centering': ${this.opts['with_centering'] ?? undefined}, 'with_scaling': ${this.opts['with_scaling'] ?? undefined}, 'quantile_range': ${this.opts['quantile_range'] ?? undefined}, 'copy': ${this.opts['copy'] ?? undefined}, 'unit_variance': ${this.opts['unit_variance'] ?? undefined}}

ctor_RobustScaler = {k: v for k, v in ctor_RobustScaler.items() if v is not None}`

    await this._py
      .ex`bridgeRobustScaler[${this.id}] = RobustScaler(**ctor_RobustScaler)`

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

    await this._py.ex`del bridgeRobustScaler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the median and quantiles to be used for scaling.
   */
  async fit(opts: {
    /**
      The data used to compute the median and quantiles used for later scaling along the features axis.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_RobustScaler_fit = {k: v for k, v in pms_RobustScaler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_fit = bridgeRobustScaler[${this.id}].fit(**pms_RobustScaler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_fit.tolist() if hasattr(res_RobustScaler_fit, 'tolist') else res_RobustScaler_fit`
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
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_RobustScaler_fit_transform = {k: v for k, v in pms_RobustScaler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_fit_transform = bridgeRobustScaler[${this.id}].fit_transform(**pms_RobustScaler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_fit_transform.tolist() if hasattr(res_RobustScaler_fit_transform, 'tolist') else res_RobustScaler_fit_transform`
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
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RobustScaler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_RobustScaler_get_feature_names_out = {k: v for k, v in pms_RobustScaler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_get_feature_names_out = bridgeRobustScaler[${this.id}].get_feature_names_out(**pms_RobustScaler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_get_feature_names_out.tolist() if hasattr(res_RobustScaler_get_feature_names_out, 'tolist') else res_RobustScaler_get_feature_names_out`
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
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RobustScaler must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_RobustScaler_get_metadata_routing = {k: v for k, v in pms_RobustScaler_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_get_metadata_routing = bridgeRobustScaler[${this.id}].get_metadata_routing(**pms_RobustScaler_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_get_metadata_routing.tolist() if hasattr(res_RobustScaler_get_metadata_routing, 'tolist') else res_RobustScaler_get_metadata_routing`
  }

  /**
    Scale back the data to the original representation.
   */
  async inverse_transform(opts: {
    /**
      The rescaled data to be transformed back.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RobustScaler must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_RobustScaler_inverse_transform = {k: v for k, v in pms_RobustScaler_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_inverse_transform = bridgeRobustScaler[${this.id}].inverse_transform(**pms_RobustScaler_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_inverse_transform.tolist() if hasattr(res_RobustScaler_inverse_transform, 'tolist') else res_RobustScaler_inverse_transform`
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
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_RobustScaler_set_output = {k: v for k, v in pms_RobustScaler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_set_output = bridgeRobustScaler[${this.id}].set_output(**pms_RobustScaler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_set_output.tolist() if hasattr(res_RobustScaler_set_output, 'tolist') else res_RobustScaler_set_output`
  }

  /**
    Center and scale the data.
   */
  async transform(opts: {
    /**
      The data used to scale along the specified axis.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_RobustScaler_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_RobustScaler_transform = {k: v for k, v in pms_RobustScaler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RobustScaler_transform = bridgeRobustScaler[${this.id}].transform(**pms_RobustScaler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RobustScaler_transform.tolist() if hasattr(res_RobustScaler_transform, 'tolist') else res_RobustScaler_transform`
  }

  /**
    The median value for each feature in the training set.
   */
  get center_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before accessing center_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RobustScaler_center_ = bridgeRobustScaler[${this.id}].center_`

      // convert the result from python to node.js
      return this
        ._py`attr_RobustScaler_center_.tolist() if hasattr(attr_RobustScaler_center_, 'tolist') else attr_RobustScaler_center_`
    })()
  }

  /**
    The (scaled) interquartile range for each feature in the training set.
   */
  get scale_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RobustScaler must call init() before accessing scale_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RobustScaler_scale_ = bridgeRobustScaler[${this.id}].scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_RobustScaler_scale_.tolist() if hasattr(attr_RobustScaler_scale_, 'tolist') else attr_RobustScaler_scale_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RobustScaler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RobustScaler_n_features_in_ = bridgeRobustScaler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RobustScaler_n_features_in_.tolist() if hasattr(attr_RobustScaler_n_features_in_, 'tolist') else attr_RobustScaler_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RobustScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RobustScaler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RobustScaler_feature_names_in_ = bridgeRobustScaler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RobustScaler_feature_names_in_.tolist() if hasattr(attr_RobustScaler_feature_names_in_, 'tolist') else attr_RobustScaler_feature_names_in_`
    })()
  }
}
