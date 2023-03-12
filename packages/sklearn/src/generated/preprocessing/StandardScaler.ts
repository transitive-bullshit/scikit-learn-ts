/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Standardize features by removing the mean and scaling to unit variance.

  The standard score of a sample `x` is calculated as:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html
 */
export class StandardScaler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: StandardScalerOptions) {
    this.id = `StandardScaler${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('StandardScaler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import StandardScaler
try: bridgeStandardScaler
except NameError: bridgeStandardScaler = {}
`

    // set up constructor params
    await this._py.ex`ctor_StandardScaler = {'copy': ${
      this.opts['copy'] ?? undefined
    }, 'with_mean': ${this.opts['with_mean'] ?? undefined}, 'with_std': ${
      this.opts['with_std'] ?? undefined
    }}

ctor_StandardScaler = {k: v for k, v in ctor_StandardScaler.items() if v is not None}`

    await this._py
      .ex`bridgeStandardScaler[${this.id}] = StandardScaler(**ctor_StandardScaler)`

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

    await this._py.ex`del bridgeStandardScaler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the mean and std to be used for later scaling.
   */
  async fit(opts: StandardScalerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_StandardScaler_fit = {k: v for k, v in pms_StandardScaler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_fit = bridgeStandardScaler[${this.id}].fit(**pms_StandardScaler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_fit.tolist() if hasattr(res_StandardScaler_fit, 'tolist') else res_StandardScaler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: StandardScalerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_StandardScaler_fit_transform = {k: v for k, v in pms_StandardScaler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_fit_transform = bridgeStandardScaler[${this.id}].fit_transform(**pms_StandardScaler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_fit_transform.tolist() if hasattr(res_StandardScaler_fit_transform, 'tolist') else res_StandardScaler_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: StandardScalerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'StandardScaler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StandardScaler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_StandardScaler_get_feature_names_out = {k: v for k, v in pms_StandardScaler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_get_feature_names_out = bridgeStandardScaler[${this.id}].get_feature_names_out(**pms_StandardScaler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_get_feature_names_out.tolist() if hasattr(res_StandardScaler_get_feature_names_out, 'tolist') else res_StandardScaler_get_feature_names_out`
  }

  /**
    Scale back the data to the original representation.
   */
  async inverse_transform(
    opts: StandardScalerInverseTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'StandardScaler must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_StandardScaler_inverse_transform = {k: v for k, v in pms_StandardScaler_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_inverse_transform = bridgeStandardScaler[${this.id}].inverse_transform(**pms_StandardScaler_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_inverse_transform.tolist() if hasattr(res_StandardScaler_inverse_transform, 'tolist') else res_StandardScaler_inverse_transform`
  }

  /**
    Online computation of mean and std on X for later scaling.

    All of X is processed as a single batch. This is intended for cases when [`fit`](#sklearn.preprocessing.StandardScaler.fit "sklearn.preprocessing.StandardScaler.fit") is not feasible due to very large number of `n\_samples` or because X is read from a continuous stream.

    The algorithm for incremental mean and std is given in Equation 1.5a,b in Chan, Tony F., Gene H. Golub, and Randall J. LeVeque. “Algorithms for computing the sample variance: Analysis and recommendations.” The American Statistician 37.3 (1983): 242-247:
   */
  async partial_fit(opts: StandardScalerPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_StandardScaler_partial_fit = {k: v for k, v in pms_StandardScaler_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_partial_fit = bridgeStandardScaler[${this.id}].partial_fit(**pms_StandardScaler_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_partial_fit.tolist() if hasattr(res_StandardScaler_partial_fit, 'tolist') else res_StandardScaler_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: StandardScalerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_StandardScaler_set_output = {k: v for k, v in pms_StandardScaler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_set_output = bridgeStandardScaler[${this.id}].set_output(**pms_StandardScaler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_set_output.tolist() if hasattr(res_StandardScaler_set_output, 'tolist') else res_StandardScaler_set_output`
  }

  /**
    Perform standardization by centering and scaling.
   */
  async transform(
    opts: StandardScalerTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_StandardScaler_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_StandardScaler_transform = {k: v for k, v in pms_StandardScaler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StandardScaler_transform = bridgeStandardScaler[${this.id}].transform(**pms_StandardScaler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StandardScaler_transform.tolist() if hasattr(res_StandardScaler_transform, 'tolist') else res_StandardScaler_transform`
  }

  /**
    Per feature relative scaling of the data to achieve zero mean and unit variance. Generally this is calculated using `np.sqrt(var\_)`. If a variance is zero, we can’t achieve unit variance, and the data is left as-is, giving a scaling factor of 1. `scale\_` is equal to `undefined` when `with\_std=False`.
   */
  get scale_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before accessing scale_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_scale_ = bridgeStandardScaler[${this.id}].scale_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_scale_.tolist() if hasattr(attr_StandardScaler_scale_, 'tolist') else attr_StandardScaler_scale_`
    })()
  }

  /**
    The mean value for each feature in the training set. Equal to `undefined` when `with\_mean=False`.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_mean_ = bridgeStandardScaler[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_mean_.tolist() if hasattr(attr_StandardScaler_mean_, 'tolist') else attr_StandardScaler_mean_`
    })()
  }

  /**
    The variance for each feature in the training set. Used to compute `scale\_`. Equal to `undefined` when `with\_std=False`.
   */
  get var_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('StandardScaler must call init() before accessing var_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_var_ = bridgeStandardScaler[${this.id}].var_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_var_.tolist() if hasattr(attr_StandardScaler_var_, 'tolist') else attr_StandardScaler_var_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'StandardScaler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_n_features_in_ = bridgeStandardScaler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_n_features_in_.tolist() if hasattr(attr_StandardScaler_n_features_in_, 'tolist') else attr_StandardScaler_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'StandardScaler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_feature_names_in_ = bridgeStandardScaler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_feature_names_in_.tolist() if hasattr(attr_StandardScaler_feature_names_in_, 'tolist') else attr_StandardScaler_feature_names_in_`
    })()
  }

  /**
    The number of samples processed by the estimator for each feature. If there are no missing samples, the `n\_samples\_seen` will be an integer, otherwise it will be an array of dtype int. If `sample\_weights` are used it will be a float (if no missing data) or an array of dtype float that sums the weights seen so far. Will be reset on new calls to fit, but increments across `partial\_fit` calls.
   */
  get n_samples_seen_(): Promise<number | NDArray> {
    if (this._isDisposed) {
      throw new Error('This StandardScaler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'StandardScaler must call init() before accessing n_samples_seen_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StandardScaler_n_samples_seen_ = bridgeStandardScaler[${this.id}].n_samples_seen_`

      // convert the result from python to node.js
      return this
        ._py`attr_StandardScaler_n_samples_seen_.tolist() if hasattr(attr_StandardScaler_n_samples_seen_, 'tolist') else attr_StandardScaler_n_samples_seen_`
    })()
  }
}

export interface StandardScalerOptions {
  /**
    If `false`, try to avoid a copy and do inplace scaling instead. This is not guaranteed to always work inplace; e.g. if the data is not a NumPy array or scipy.sparse CSR matrix, a copy may still be returned.

    @defaultValue `true`
   */
  copy?: boolean

  /**
    If `true`, center the data before scaling. This does not work (and will raise an exception) when attempted on sparse matrices, because centering them entails building a dense matrix which in common use cases is likely to be too large to fit in memory.

    @defaultValue `true`
   */
  with_mean?: boolean

  /**
    If `true`, scale the data to unit variance (or equivalently, unit standard deviation).

    @defaultValue `true`
   */
  with_std?: boolean
}

export interface StandardScalerFitOptions {
  /**
    The data used to compute the mean and standard deviation used for later scaling along the features axis.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any

  /**
    Individual weights for each sample.
   */
  sample_weight?: ArrayLike
}

export interface StandardScalerFitTransformOptions {
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
}

export interface StandardScalerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface StandardScalerInverseTransformOptions {
  /**
    The data used to scale along the features axis.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Copy the input X or not.
   */
  copy?: boolean
}

export interface StandardScalerPartialFitOptions {
  /**
    The data used to compute the mean and standard deviation used for later scaling along the features axis.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any

  /**
    Individual weights for each sample.
   */
  sample_weight?: ArrayLike
}

export interface StandardScalerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface StandardScalerTransformOptions {
  /**
    The data used to scale along the features axis.
   */
  X?: SparseMatrix[]

  /**
    Copy the input X or not.
   */
  copy?: boolean
}
