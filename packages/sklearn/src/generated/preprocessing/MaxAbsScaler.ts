/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Scale each feature by its maximum absolute value.

  This estimator scales and translates each feature individually such that the maximal absolute value of each feature in the training set will be 1.0. It does not shift/center the data, and thus does not destroy any sparsity.

  This scaler can also be applied to sparse CSR or CSC matrices.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MaxAbsScaler.html
 */
export class MaxAbsScaler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MaxAbsScalerOptions) {
    this.id = `MaxAbsScaler${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MaxAbsScaler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import MaxAbsScaler
try: bridgeMaxAbsScaler
except NameError: bridgeMaxAbsScaler = {}
`

    // set up constructor params
    await this._py.ex`ctor_MaxAbsScaler = {'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_MaxAbsScaler = {k: v for k, v in ctor_MaxAbsScaler.items() if v is not None}`

    await this._py
      .ex`bridgeMaxAbsScaler[${this.id}] = MaxAbsScaler(**ctor_MaxAbsScaler)`

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

    await this._py.ex`del bridgeMaxAbsScaler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the maximum absolute value to be used for later scaling.
   */
  async fit(opts: MaxAbsScalerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MaxAbsScaler_fit = {k: v for k, v in pms_MaxAbsScaler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_fit = bridgeMaxAbsScaler[${this.id}].fit(**pms_MaxAbsScaler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_fit.tolist() if hasattr(res_MaxAbsScaler_fit, 'tolist') else res_MaxAbsScaler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: MaxAbsScalerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_MaxAbsScaler_fit_transform = {k: v for k, v in pms_MaxAbsScaler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_fit_transform = bridgeMaxAbsScaler[${this.id}].fit_transform(**pms_MaxAbsScaler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_fit_transform.tolist() if hasattr(res_MaxAbsScaler_fit_transform, 'tolist') else res_MaxAbsScaler_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: MaxAbsScalerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MaxAbsScaler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MaxAbsScaler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MaxAbsScaler_get_feature_names_out = {k: v for k, v in pms_MaxAbsScaler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_get_feature_names_out = bridgeMaxAbsScaler[${this.id}].get_feature_names_out(**pms_MaxAbsScaler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_get_feature_names_out.tolist() if hasattr(res_MaxAbsScaler_get_feature_names_out, 'tolist') else res_MaxAbsScaler_get_feature_names_out`
  }

  /**
    Scale back the data to the original representation.
   */
  async inverse_transform(
    opts: MaxAbsScalerInverseTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MaxAbsScaler must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MaxAbsScaler_inverse_transform = {k: v for k, v in pms_MaxAbsScaler_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_inverse_transform = bridgeMaxAbsScaler[${this.id}].inverse_transform(**pms_MaxAbsScaler_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_inverse_transform.tolist() if hasattr(res_MaxAbsScaler_inverse_transform, 'tolist') else res_MaxAbsScaler_inverse_transform`
  }

  /**
    Online computation of max absolute value of X for later scaling.

    All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.MaxAbsScaler.fit "sklearn.preprocessing.MaxAbsScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.
   */
  async partial_fit(opts: MaxAbsScalerPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MaxAbsScaler_partial_fit = {k: v for k, v in pms_MaxAbsScaler_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_partial_fit = bridgeMaxAbsScaler[${this.id}].partial_fit(**pms_MaxAbsScaler_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_partial_fit.tolist() if hasattr(res_MaxAbsScaler_partial_fit, 'tolist') else res_MaxAbsScaler_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: MaxAbsScalerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MaxAbsScaler_set_output = {k: v for k, v in pms_MaxAbsScaler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_set_output = bridgeMaxAbsScaler[${this.id}].set_output(**pms_MaxAbsScaler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_set_output.tolist() if hasattr(res_MaxAbsScaler_set_output, 'tolist') else res_MaxAbsScaler_set_output`
  }

  /**
    Scale the data.
   */
  async transform(
    opts: MaxAbsScalerTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MaxAbsScaler_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MaxAbsScaler_transform = {k: v for k, v in pms_MaxAbsScaler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MaxAbsScaler_transform = bridgeMaxAbsScaler[${this.id}].transform(**pms_MaxAbsScaler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MaxAbsScaler_transform.tolist() if hasattr(res_MaxAbsScaler_transform, 'tolist') else res_MaxAbsScaler_transform`
  }

  /**
    Per feature relative scaling of the data.
   */
  get scale_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before accessing scale_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MaxAbsScaler_scale_ = bridgeMaxAbsScaler[${this.id}].scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_MaxAbsScaler_scale_.tolist() if hasattr(attr_MaxAbsScaler_scale_, 'tolist') else attr_MaxAbsScaler_scale_`
    })()
  }

  /**
    Per feature maximum absolute value.
   */
  get max_abs_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MaxAbsScaler must call init() before accessing max_abs_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MaxAbsScaler_max_abs_ = bridgeMaxAbsScaler[${this.id}].max_abs_`

      // convert the result from python to node.js
      return this
        ._py`attr_MaxAbsScaler_max_abs_.tolist() if hasattr(attr_MaxAbsScaler_max_abs_, 'tolist') else attr_MaxAbsScaler_max_abs_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MaxAbsScaler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MaxAbsScaler_n_features_in_ = bridgeMaxAbsScaler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MaxAbsScaler_n_features_in_.tolist() if hasattr(attr_MaxAbsScaler_n_features_in_, 'tolist') else attr_MaxAbsScaler_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MaxAbsScaler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MaxAbsScaler_feature_names_in_ = bridgeMaxAbsScaler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MaxAbsScaler_feature_names_in_.tolist() if hasattr(attr_MaxAbsScaler_feature_names_in_, 'tolist') else attr_MaxAbsScaler_feature_names_in_`
    })()
  }

  /**
    The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.
   */
  get n_samples_seen_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MaxAbsScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MaxAbsScaler must call init() before accessing n_samples_seen_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MaxAbsScaler_n_samples_seen_ = bridgeMaxAbsScaler[${this.id}].n_samples_seen_`

      // convert the result from python to node.js
      return this
        ._py`attr_MaxAbsScaler_n_samples_seen_.tolist() if hasattr(attr_MaxAbsScaler_n_samples_seen_, 'tolist') else attr_MaxAbsScaler_n_samples_seen_`
    })()
  }
}

export interface MaxAbsScalerOptions {
  /**
    Set to False to perform inplace scaling and avoid a copy (if the input is already a numpy array).

    @defaultValue `true`
   */
  copy?: boolean
}

export interface MaxAbsScalerFitOptions {
  /**
    The data used to compute the per-feature minimum and maximum used for later scaling along the features axis.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}

export interface MaxAbsScalerFitTransformOptions {
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

export interface MaxAbsScalerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface MaxAbsScalerInverseTransformOptions {
  /**
    The data that should be transformed back.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface MaxAbsScalerPartialFitOptions {
  /**
    The data used to compute the mean and standard deviation used for later scaling along the features axis.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}

export interface MaxAbsScalerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface MaxAbsScalerTransformOptions {
  /**
    The data that should be scaled.
   */
  X?: ArrayLike | SparseMatrix[]
}
