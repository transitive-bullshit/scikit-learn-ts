/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Approximate feature map for additive chi2 kernel.

  Uses sampling the fourier transform of the kernel characteristic at regular intervals.

  Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately.  Each entry in the original space is transformed into 2*sample_steps-1 features, where sample_steps is a parameter of the method. Typical values of sample_steps include 1, 2 and 3.

  Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html
 */
export class AdditiveChi2Sampler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: AdditiveChi2SamplerOptions) {
    this.id = `AdditiveChi2Sampler${crypto.randomUUID().split('-')[0]}`
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
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'AdditiveChi2Sampler.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import AdditiveChi2Sampler
try: bridgeAdditiveChi2Sampler
except NameError: bridgeAdditiveChi2Sampler = {}
`

    // set up constructor params
    await this._py.ex`ctor_AdditiveChi2Sampler = {'sample_steps': ${
      this.opts['sample_steps'] ?? undefined
    }, 'sample_interval': ${this.opts['sample_interval'] ?? undefined}}

ctor_AdditiveChi2Sampler = {k: v for k, v in ctor_AdditiveChi2Sampler.items() if v is not None}`

    await this._py
      .ex`bridgeAdditiveChi2Sampler[${this.id}] = AdditiveChi2Sampler(**ctor_AdditiveChi2Sampler)`

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

    await this._py.ex`del bridgeAdditiveChi2Sampler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Set the parameters.
   */
  async fit(opts: AdditiveChi2SamplerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdditiveChi2Sampler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_AdditiveChi2Sampler_fit = {k: v for k, v in pms_AdditiveChi2Sampler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_fit = bridgeAdditiveChi2Sampler[${this.id}].fit(**pms_AdditiveChi2Sampler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_fit.tolist() if hasattr(res_AdditiveChi2Sampler_fit, 'tolist') else res_AdditiveChi2Sampler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: AdditiveChi2SamplerFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_AdditiveChi2Sampler_fit_transform = {k: v for k, v in pms_AdditiveChi2Sampler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_fit_transform = bridgeAdditiveChi2Sampler[${this.id}].fit_transform(**pms_AdditiveChi2Sampler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_fit_transform.tolist() if hasattr(res_AdditiveChi2Sampler_fit_transform, 'tolist') else res_AdditiveChi2Sampler_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: AdditiveChi2SamplerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdditiveChi2Sampler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_AdditiveChi2Sampler_get_feature_names_out = {k: v for k, v in pms_AdditiveChi2Sampler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_get_feature_names_out = bridgeAdditiveChi2Sampler[${this.id}].get_feature_names_out(**pms_AdditiveChi2Sampler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_get_feature_names_out.tolist() if hasattr(res_AdditiveChi2Sampler_get_feature_names_out, 'tolist') else res_AdditiveChi2Sampler_get_feature_names_out`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: AdditiveChi2SamplerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_AdditiveChi2Sampler_set_output = {k: v for k, v in pms_AdditiveChi2Sampler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_set_output = bridgeAdditiveChi2Sampler[${this.id}].set_output(**pms_AdditiveChi2Sampler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_set_output.tolist() if hasattr(res_AdditiveChi2Sampler_set_output, 'tolist') else res_AdditiveChi2Sampler_set_output`
  }

  /**
    Apply approximate feature map to X.
   */
  async transform(
    opts: AdditiveChi2SamplerTransformOptions
  ): Promise<NDArray | SparseMatrix> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdditiveChi2Sampler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_AdditiveChi2Sampler_transform = {k: v for k, v in pms_AdditiveChi2Sampler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_transform = bridgeAdditiveChi2Sampler[${this.id}].transform(**pms_AdditiveChi2Sampler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_transform.tolist() if hasattr(res_AdditiveChi2Sampler_transform, 'tolist') else res_AdditiveChi2Sampler_transform`
  }

  /**
    Stored sampling interval. Specified as a parameter if sample_steps not in {1,2,3}.
   */
  get sample_interval_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing sample_interval_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_sample_interval_ = bridgeAdditiveChi2Sampler[${this.id}].sample_interval_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_sample_interval_.tolist() if hasattr(attr_AdditiveChi2Sampler_sample_interval_, 'tolist') else attr_AdditiveChi2Sampler_sample_interval_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_n_features_in_ = bridgeAdditiveChi2Sampler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_n_features_in_.tolist() if hasattr(attr_AdditiveChi2Sampler_n_features_in_, 'tolist') else attr_AdditiveChi2Sampler_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_feature_names_in_ = bridgeAdditiveChi2Sampler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_feature_names_in_.tolist() if hasattr(attr_AdditiveChi2Sampler_feature_names_in_, 'tolist') else attr_AdditiveChi2Sampler_feature_names_in_`
    })()
  }
}

export interface AdditiveChi2SamplerOptions {
  /**
    Gives the number of (complex) sampling points.

    @defaultValue `2`
   */
  sample_steps?: number

  /**
    Sampling interval. Must be specified when sample_steps not in {1,2,3}.
   */
  sample_interval?: number
}

export interface AdditiveChi2SamplerFitOptions {
  /**
    Training data, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike
}

export interface AdditiveChi2SamplerFitTransformOptions {
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

export interface AdditiveChi2SamplerGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface AdditiveChi2SamplerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface AdditiveChi2SamplerTransformOptions {
  /**
    Training data, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix
}
