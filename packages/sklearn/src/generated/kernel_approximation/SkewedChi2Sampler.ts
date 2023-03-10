/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Approximate feature map for “skewed chi-squared” kernel.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.SkewedChi2Sampler.html
 */
export class SkewedChi2Sampler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SkewedChi2SamplerOptions) {
    this.id = `SkewedChi2Sampler${crypto.randomUUID().split('-')[0]}`
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
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SkewedChi2Sampler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import SkewedChi2Sampler
try: bridgeSkewedChi2Sampler
except NameError: bridgeSkewedChi2Sampler = {}
`

    // set up constructor params
    await this._py.ex`ctor_SkewedChi2Sampler = {'skewedness': ${
      this.opts['skewedness'] ?? undefined
    }, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_SkewedChi2Sampler = {k: v for k, v in ctor_SkewedChi2Sampler.items() if v is not None}`

    await this._py
      .ex`bridgeSkewedChi2Sampler[${this.id}] = SkewedChi2Sampler(**ctor_SkewedChi2Sampler)`

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

    await this._py.ex`del bridgeSkewedChi2Sampler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model with X.

    Samples random projection according to n_features.
   */
  async fit(opts: SkewedChi2SamplerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SkewedChi2Sampler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SkewedChi2Sampler_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_SkewedChi2Sampler_fit = {k: v for k, v in pms_SkewedChi2Sampler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SkewedChi2Sampler_fit = bridgeSkewedChi2Sampler[${this.id}].fit(**pms_SkewedChi2Sampler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SkewedChi2Sampler_fit.tolist() if hasattr(res_SkewedChi2Sampler_fit, 'tolist') else res_SkewedChi2Sampler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(
    opts: SkewedChi2SamplerFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SkewedChi2Sampler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SkewedChi2Sampler_fit_transform = {k: v for k, v in pms_SkewedChi2Sampler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SkewedChi2Sampler_fit_transform = bridgeSkewedChi2Sampler[${this.id}].fit_transform(**pms_SkewedChi2Sampler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SkewedChi2Sampler_fit_transform.tolist() if hasattr(res_SkewedChi2Sampler_fit_transform, 'tolist') else res_SkewedChi2Sampler_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: SkewedChi2SamplerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SkewedChi2Sampler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SkewedChi2Sampler_get_feature_names_out = {k: v for k, v in pms_SkewedChi2Sampler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SkewedChi2Sampler_get_feature_names_out = bridgeSkewedChi2Sampler[${this.id}].get_feature_names_out(**pms_SkewedChi2Sampler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SkewedChi2Sampler_get_feature_names_out.tolist() if hasattr(res_SkewedChi2Sampler_get_feature_names_out, 'tolist') else res_SkewedChi2Sampler_get_feature_names_out`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: SkewedChi2SamplerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SkewedChi2Sampler must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SkewedChi2Sampler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SkewedChi2Sampler_set_output = {k: v for k, v in pms_SkewedChi2Sampler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SkewedChi2Sampler_set_output = bridgeSkewedChi2Sampler[${this.id}].set_output(**pms_SkewedChi2Sampler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SkewedChi2Sampler_set_output.tolist() if hasattr(res_SkewedChi2Sampler_set_output, 'tolist') else res_SkewedChi2Sampler_set_output`
  }

  /**
    Apply the approximate feature map to X.
   */
  async transform(opts: SkewedChi2SamplerTransformOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SkewedChi2Sampler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SkewedChi2Sampler_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SkewedChi2Sampler_transform = {k: v for k, v in pms_SkewedChi2Sampler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SkewedChi2Sampler_transform = bridgeSkewedChi2Sampler[${this.id}].transform(**pms_SkewedChi2Sampler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SkewedChi2Sampler_transform.tolist() if hasattr(res_SkewedChi2Sampler_transform, 'tolist') else res_SkewedChi2Sampler_transform`
  }

  /**
    Weight array, sampled from a secant hyperbolic distribution, which will be used to linearly transform the log of the data.
   */
  get random_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before accessing random_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SkewedChi2Sampler_random_weights_ = bridgeSkewedChi2Sampler[${this.id}].random_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_SkewedChi2Sampler_random_weights_.tolist() if hasattr(attr_SkewedChi2Sampler_random_weights_, 'tolist') else attr_SkewedChi2Sampler_random_weights_`
    })()
  }

  /**
    Bias term, which will be added to the data. It is uniformly distributed between 0 and 2*pi.
   */
  get random_offset_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before accessing random_offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SkewedChi2Sampler_random_offset_ = bridgeSkewedChi2Sampler[${this.id}].random_offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_SkewedChi2Sampler_random_offset_.tolist() if hasattr(attr_SkewedChi2Sampler_random_offset_, 'tolist') else attr_SkewedChi2Sampler_random_offset_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SkewedChi2Sampler_n_features_in_ = bridgeSkewedChi2Sampler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SkewedChi2Sampler_n_features_in_.tolist() if hasattr(attr_SkewedChi2Sampler_n_features_in_, 'tolist') else attr_SkewedChi2Sampler_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SkewedChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SkewedChi2Sampler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SkewedChi2Sampler_feature_names_in_ = bridgeSkewedChi2Sampler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SkewedChi2Sampler_feature_names_in_.tolist() if hasattr(attr_SkewedChi2Sampler_feature_names_in_, 'tolist') else attr_SkewedChi2Sampler_feature_names_in_`
    })()
  }
}

export interface SkewedChi2SamplerOptions {
  /**
    “skewedness” parameter of the kernel. Needs to be cross-validated.

    @defaultValue `1`
   */
  skewedness?: number

  /**
    Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.

    @defaultValue `100`
   */
  n_components?: number

  /**
    Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See Glossary.
   */
  random_state?: number
}

export interface SkewedChi2SamplerFitOptions {
  /**
    Training data, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike
}

export interface SkewedChi2SamplerFitTransformOptions {
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

export interface SkewedChi2SamplerGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface SkewedChi2SamplerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface SkewedChi2SamplerTransformOptions {
  /**
    New data, where n_samples is the number of samples and n_features is the number of features. All values of X must be strictly greater than “-skewedness”.
   */
  X?: ArrayLike
}
