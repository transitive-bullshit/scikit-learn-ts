/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform features using quantiles information.

  This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

  The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html
 */
export class QuantileTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: QuantileTransformerOptions) {
    this.id = `QuantileTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'QuantileTransformer.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import QuantileTransformer
try: bridgeQuantileTransformer
except NameError: bridgeQuantileTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_QuantileTransformer = {'n_quantiles': ${
      this.opts['n_quantiles'] ?? undefined
    }, 'output_distribution': ${
      this.opts['output_distribution'] ?? undefined
    }, 'ignore_implicit_zeros': ${
      this.opts['ignore_implicit_zeros'] ?? undefined
    }, 'subsample': ${this.opts['subsample'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}}

ctor_QuantileTransformer = {k: v for k, v in ctor_QuantileTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeQuantileTransformer[${this.id}] = QuantileTransformer(**ctor_QuantileTransformer)`

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

    await this._py.ex`del bridgeQuantileTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the quantiles used for transforming.
   */
  async fit(opts: QuantileTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('QuantileTransformer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_QuantileTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_QuantileTransformer_fit = {k: v for k, v in pms_QuantileTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_fit = bridgeQuantileTransformer[${this.id}].fit(**pms_QuantileTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_fit.tolist() if hasattr(res_QuantileTransformer_fit, 'tolist') else res_QuantileTransformer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: QuantileTransformerFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_QuantileTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_QuantileTransformer_fit_transform = {k: v for k, v in pms_QuantileTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_fit_transform = bridgeQuantileTransformer[${this.id}].fit_transform(**pms_QuantileTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_fit_transform.tolist() if hasattr(res_QuantileTransformer_fit_transform, 'tolist') else res_QuantileTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: QuantileTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuantileTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_QuantileTransformer_get_feature_names_out = {k: v for k, v in pms_QuantileTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_get_feature_names_out = bridgeQuantileTransformer[${this.id}].get_feature_names_out(**pms_QuantileTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_get_feature_names_out.tolist() if hasattr(res_QuantileTransformer_get_feature_names_out, 'tolist') else res_QuantileTransformer_get_feature_names_out`
  }

  /**
    Back-projection to the original space.
   */
  async inverse_transform(
    opts: QuantileTransformerInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_QuantileTransformer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_QuantileTransformer_inverse_transform = {k: v for k, v in pms_QuantileTransformer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_inverse_transform = bridgeQuantileTransformer[${this.id}].inverse_transform(**pms_QuantileTransformer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_inverse_transform.tolist() if hasattr(res_QuantileTransformer_inverse_transform, 'tolist') else res_QuantileTransformer_inverse_transform`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: QuantileTransformerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_QuantileTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_QuantileTransformer_set_output = {k: v for k, v in pms_QuantileTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_set_output = bridgeQuantileTransformer[${this.id}].set_output(**pms_QuantileTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_set_output.tolist() if hasattr(res_QuantileTransformer_set_output, 'tolist') else res_QuantileTransformer_set_output`
  }

  /**
    Feature-wise transformation of the data.
   */
  async transform(
    opts: QuantileTransformerTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('QuantileTransformer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_QuantileTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_QuantileTransformer_transform = {k: v for k, v in pms_QuantileTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_QuantileTransformer_transform = bridgeQuantileTransformer[${this.id}].transform(**pms_QuantileTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_QuantileTransformer_transform.tolist() if hasattr(res_QuantileTransformer_transform, 'tolist') else res_QuantileTransformer_transform`
  }

  /**
    The actual number of quantiles used to discretize the cumulative distribution function.
   */
  get n_quantiles_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before accessing n_quantiles_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileTransformer_n_quantiles_ = bridgeQuantileTransformer[${this.id}].n_quantiles_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileTransformer_n_quantiles_.tolist() if hasattr(attr_QuantileTransformer_n_quantiles_, 'tolist') else attr_QuantileTransformer_n_quantiles_`
    })()
  }

  /**
    The values corresponding the quantiles of reference.
   */
  get quantiles_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before accessing quantiles_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileTransformer_quantiles_ = bridgeQuantileTransformer[${this.id}].quantiles_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileTransformer_quantiles_.tolist() if hasattr(attr_QuantileTransformer_quantiles_, 'tolist') else attr_QuantileTransformer_quantiles_`
    })()
  }

  /**
    Quantiles of references.
   */
  get references_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before accessing references_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileTransformer_references_ = bridgeQuantileTransformer[${this.id}].references_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileTransformer_references_.tolist() if hasattr(attr_QuantileTransformer_references_, 'tolist') else attr_QuantileTransformer_references_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileTransformer_n_features_in_ = bridgeQuantileTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileTransformer_n_features_in_.tolist() if hasattr(attr_QuantileTransformer_n_features_in_, 'tolist') else attr_QuantileTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This QuantileTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'QuantileTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_QuantileTransformer_feature_names_in_ = bridgeQuantileTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_QuantileTransformer_feature_names_in_.tolist() if hasattr(attr_QuantileTransformer_feature_names_in_, 'tolist') else attr_QuantileTransformer_feature_names_in_`
    })()
  }
}

export interface QuantileTransformerOptions {
  /**
    Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n_quantiles is larger than the number of samples, n_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.

    @defaultValue `1000`
   */
  n_quantiles?: number

  /**
    Marginal distribution for the transformed data. The choices are ‘uniform’ (default) or ‘normal’.

    @defaultValue `'uniform'`
   */
  output_distribution?: 'uniform' | 'normal'

  /**
    Only applies to sparse matrices. If True, the sparse entries of the matrix are discarded to compute the quantile statistics. If False, these entries are treated as zeros.

    @defaultValue `false`
   */
  ignore_implicit_zeros?: boolean

  /**
    Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices.

    @defaultValue `10`
   */
  subsample?: number

  /**
    Determines random number generation for subsampling and smoothing noise. Please see subsample for more details. Pass an int for reproducible results across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    Set to False to perform inplace transformation and avoid a copy (if the input is already a numpy array).

    @defaultValue `true`
   */
  copy?: boolean
}

export interface QuantileTransformerFitOptions {
  /**
    The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse csc_matrix. Additionally, the sparse matrix needs to be nonnegative if ignore_implicit_zeros is False.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}

export interface QuantileTransformerFitTransformOptions {
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

export interface QuantileTransformerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface QuantileTransformerInverseTransformOptions {
  /**
    The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse csc_matrix. Additionally, the sparse matrix needs to be nonnegative if ignore_implicit_zeros is False.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface QuantileTransformerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface QuantileTransformerTransformOptions {
  /**
    The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse csc_matrix. Additionally, the sparse matrix needs to be nonnegative if ignore_implicit_zeros is False.
   */
  X?: ArrayLike | SparseMatrix[]
}
