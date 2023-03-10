/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform features by scaling each feature to a given range.

  This estimator scales and translates each feature individually such that it is in the given range on the training set, e.g. between zero and one.

  The transformation is given by:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html
 */
export class MinMaxScaler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MinMaxScalerOptions) {
    this.id = `MinMaxScaler${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MinMaxScaler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import MinMaxScaler
try: bridgeMinMaxScaler
except NameError: bridgeMinMaxScaler = {}
`

    // set up constructor params
    await this._py.ex`ctor_MinMaxScaler = {'feature_range': ${
      this.opts['feature_range'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}, 'clip': ${
      this.opts['clip'] ?? undefined
    }}

ctor_MinMaxScaler = {k: v for k, v in ctor_MinMaxScaler.items() if v is not None}`

    await this._py
      .ex`bridgeMinMaxScaler[${this.id}] = MinMaxScaler(**ctor_MinMaxScaler)`

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

    await this._py.ex`del bridgeMinMaxScaler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the minimum and maximum to be used for later scaling.
   */
  async fit(opts: MinMaxScalerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MinMaxScaler_fit = {k: v for k, v in pms_MinMaxScaler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_fit = bridgeMinMaxScaler[${this.id}].fit(**pms_MinMaxScaler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_fit.tolist() if hasattr(res_MinMaxScaler_fit, 'tolist') else res_MinMaxScaler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(opts: MinMaxScalerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_MinMaxScaler_fit_transform = {k: v for k, v in pms_MinMaxScaler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_fit_transform = bridgeMinMaxScaler[${this.id}].fit_transform(**pms_MinMaxScaler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_fit_transform.tolist() if hasattr(res_MinMaxScaler_fit_transform, 'tolist') else res_MinMaxScaler_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: MinMaxScalerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MinMaxScaler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MinMaxScaler_get_feature_names_out = {k: v for k, v in pms_MinMaxScaler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_get_feature_names_out = bridgeMinMaxScaler[${this.id}].get_feature_names_out(**pms_MinMaxScaler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_get_feature_names_out.tolist() if hasattr(res_MinMaxScaler_get_feature_names_out, 'tolist') else res_MinMaxScaler_get_feature_names_out`
  }

  /**
    Undo the scaling of X according to feature_range.
   */
  async inverse_transform(
    opts: MinMaxScalerInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MinMaxScaler_inverse_transform = {k: v for k, v in pms_MinMaxScaler_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_inverse_transform = bridgeMinMaxScaler[${this.id}].inverse_transform(**pms_MinMaxScaler_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_inverse_transform.tolist() if hasattr(res_MinMaxScaler_inverse_transform, 'tolist') else res_MinMaxScaler_inverse_transform`
  }

  /**
    Online computation of min and max on X for later scaling.

    All of X is processed as a single batch. This is intended for cases when fit is not feasible due to very large number of n_samples or because X is read from a continuous stream.
   */
  async partial_fit(opts: MinMaxScalerPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MinMaxScaler_partial_fit = {k: v for k, v in pms_MinMaxScaler_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_partial_fit = bridgeMinMaxScaler[${this.id}].partial_fit(**pms_MinMaxScaler_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_partial_fit.tolist() if hasattr(res_MinMaxScaler_partial_fit, 'tolist') else res_MinMaxScaler_partial_fit`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: MinMaxScalerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MinMaxScaler_set_output = {k: v for k, v in pms_MinMaxScaler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_set_output = bridgeMinMaxScaler[${this.id}].set_output(**pms_MinMaxScaler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_set_output.tolist() if hasattr(res_MinMaxScaler_set_output, 'tolist') else res_MinMaxScaler_set_output`
  }

  /**
    Scale features of X according to feature_range.
   */
  async transform(opts: MinMaxScalerTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MinMaxScaler_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MinMaxScaler_transform = {k: v for k, v in pms_MinMaxScaler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinMaxScaler_transform = bridgeMinMaxScaler[${this.id}].transform(**pms_MinMaxScaler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MinMaxScaler_transform.tolist() if hasattr(res_MinMaxScaler_transform, 'tolist') else res_MinMaxScaler_transform`
  }

  /**
    Per feature adjustment for minimum. Equivalent to min - X.min(axis=0) * self.scale_
   */
  get min_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before accessing min_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_min_ = bridgeMinMaxScaler[${this.id}].min_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_min_.tolist() if hasattr(attr_MinMaxScaler_min_, 'tolist') else attr_MinMaxScaler_min_`
    })()
  }

  /**
    Per feature relative scaling of the data. Equivalent to (max - min) / (X.max(axis=0) - X.min(axis=0))
   */
  get scale_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinMaxScaler must call init() before accessing scale_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_scale_ = bridgeMinMaxScaler[${this.id}].scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_scale_.tolist() if hasattr(attr_MinMaxScaler_scale_, 'tolist') else attr_MinMaxScaler_scale_`
    })()
  }

  /**
    Per feature minimum seen in the data
   */
  get data_min_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing data_min_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_data_min_ = bridgeMinMaxScaler[${this.id}].data_min_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_data_min_.tolist() if hasattr(attr_MinMaxScaler_data_min_, 'tolist') else attr_MinMaxScaler_data_min_`
    })()
  }

  /**
    Per feature maximum seen in the data
   */
  get data_max_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing data_max_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_data_max_ = bridgeMinMaxScaler[${this.id}].data_max_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_data_max_.tolist() if hasattr(attr_MinMaxScaler_data_max_, 'tolist') else attr_MinMaxScaler_data_max_`
    })()
  }

  /**
    Per feature range (data_max_ - data_min_) seen in the data
   */
  get data_range_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing data_range_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_data_range_ = bridgeMinMaxScaler[${this.id}].data_range_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_data_range_.tolist() if hasattr(attr_MinMaxScaler_data_range_, 'tolist') else attr_MinMaxScaler_data_range_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_n_features_in_ = bridgeMinMaxScaler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_n_features_in_.tolist() if hasattr(attr_MinMaxScaler_n_features_in_, 'tolist') else attr_MinMaxScaler_n_features_in_`
    })()
  }

  /**
    The number of samples processed by the estimator. It will be reset on new calls to fit, but increments across partial_fit calls.
   */
  get n_samples_seen_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing n_samples_seen_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_n_samples_seen_ = bridgeMinMaxScaler[${this.id}].n_samples_seen_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_n_samples_seen_.tolist() if hasattr(attr_MinMaxScaler_n_samples_seen_, 'tolist') else attr_MinMaxScaler_n_samples_seen_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinMaxScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinMaxScaler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinMaxScaler_feature_names_in_ = bridgeMinMaxScaler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinMaxScaler_feature_names_in_.tolist() if hasattr(attr_MinMaxScaler_feature_names_in_, 'tolist') else attr_MinMaxScaler_feature_names_in_`
    })()
  }
}

export interface MinMaxScalerOptions {
  /**
    Desired range of transformed data.
   */
  feature_range?: any

  /**
    Set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array).

    @defaultValue `true`
   */
  copy?: boolean

  /**
    Set to True to clip transformed values of held-out data to provided feature range.

    @defaultValue `false`
   */
  clip?: boolean
}

export interface MinMaxScalerFitOptions {
  /**
    The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.
   */
  X?: ArrayLike[]

  /**
    Ignored.
   */
  y?: any
}

export interface MinMaxScalerFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface MinMaxScalerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface MinMaxScalerInverseTransformOptions {
  /**
    Input data that will be transformed. It cannot be sparse.
   */
  X?: ArrayLike[]
}

export interface MinMaxScalerPartialFitOptions {
  /**
    The data used to compute the mean and standard deviation used for later scaling along the features axis.
   */
  X?: ArrayLike[]

  /**
    Ignored.
   */
  y?: any
}

export interface MinMaxScalerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface MinMaxScalerTransformOptions {
  /**
    Input data that will be transformed.
   */
  X?: ArrayLike[]
}
