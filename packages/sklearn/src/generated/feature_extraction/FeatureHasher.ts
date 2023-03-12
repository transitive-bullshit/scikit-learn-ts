/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Implements feature hashing, aka the hashing trick.

  This class turns sequences of symbolic feature names (strings) into scipy.sparse matrices, using a hash function to compute the matrix column corresponding to a name. The hash function employed is the signed 32-bit version of Murmurhash3.

  Feature names of type byte string are used as-is. Unicode strings are converted to UTF-8 first, but no Unicode normalization is done. Feature values must be (finite) numbers.

  This class is a low-memory alternative to DictVectorizer and CountVectorizer, intended for large-scale (online) learning and situations where memory is tight, e.g. when running prediction code on embedded devices.

  Read more in the [User Guide](../feature_extraction.html#feature-hashing).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.FeatureHasher.html
 */
export class FeatureHasher {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: FeatureHasherOptions) {
    this.id = `FeatureHasher${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This FeatureHasher instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('FeatureHasher.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction import FeatureHasher
try: bridgeFeatureHasher
except NameError: bridgeFeatureHasher = {}
`

    // set up constructor params
    await this._py.ex`ctor_FeatureHasher = {'n_features': ${
      this.opts['n_features'] ?? undefined
    }, 'input_type': ${this.opts['input_type'] ?? undefined}, 'dtype': ${
      this.opts['dtype'] ?? undefined
    }, 'alternate_sign': ${this.opts['alternate_sign'] ?? undefined}}

ctor_FeatureHasher = {k: v for k, v in ctor_FeatureHasher.items() if v is not None}`

    await this._py
      .ex`bridgeFeatureHasher[${this.id}] = FeatureHasher(**ctor_FeatureHasher)`

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

    await this._py.ex`del bridgeFeatureHasher[${this.id}]`

    this._isDisposed = true
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: FeatureHasherFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureHasher instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureHasher must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_FeatureHasher_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_FeatureHasher_fit = {k: v for k, v in pms_FeatureHasher_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureHasher_fit = bridgeFeatureHasher[${this.id}].fit(**pms_FeatureHasher_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureHasher_fit.tolist() if hasattr(res_FeatureHasher_fit, 'tolist') else res_FeatureHasher_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: FeatureHasherFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This FeatureHasher instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureHasher must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_FeatureHasher_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_FeatureHasher_fit_transform = {k: v for k, v in pms_FeatureHasher_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureHasher_fit_transform = bridgeFeatureHasher[${this.id}].fit_transform(**pms_FeatureHasher_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureHasher_fit_transform.tolist() if hasattr(res_FeatureHasher_fit_transform, 'tolist') else res_FeatureHasher_fit_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: FeatureHasherSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureHasher instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureHasher must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_FeatureHasher_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_FeatureHasher_set_output = {k: v for k, v in pms_FeatureHasher_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureHasher_set_output = bridgeFeatureHasher[${this.id}].set_output(**pms_FeatureHasher_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureHasher_set_output.tolist() if hasattr(res_FeatureHasher_set_output, 'tolist') else res_FeatureHasher_set_output`
  }

  /**
    Transform a sequence of instances to a scipy.sparse matrix.
   */
  async transform(
    opts: FeatureHasherTransformOptions
  ): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This FeatureHasher instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureHasher must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_FeatureHasher_transform = {'raw_X': ${
      opts['raw_X'] ?? undefined
    }}

pms_FeatureHasher_transform = {k: v for k, v in pms_FeatureHasher_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureHasher_transform = bridgeFeatureHasher[${this.id}].transform(**pms_FeatureHasher_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureHasher_transform.tolist() if hasattr(res_FeatureHasher_transform, 'tolist') else res_FeatureHasher_transform`
  }
}

export interface FeatureHasherOptions {
  /**
    The number of features (columns) in the output matrices. Small numbers of features are likely to cause hash collisions, but large numbers will cause larger coefficient dimensions in linear learners.

    @defaultValue `2`
   */
  n_features?: number

  /**
    Choose a string from {‘dict’, ‘pair’, ‘string’}. Either “dict” (the default) to accept dictionaries over (feature\_name, value); “pair” to accept pairs of (feature\_name, value); or “string” to accept single strings. feature\_name should be a string, while value should be a number. In the case of “string”, a value of 1 is implied. The feature\_name is hashed to find the appropriate column for the feature. The value’s sign might be flipped in the output (but see non\_negative, below).

    @defaultValue `'dict'`
   */
  input_type?: string

  /**
    The type of feature values. Passed to scipy.sparse matrix constructors as the dtype argument. Do not set this to bool, np.boolean or any unsigned integer type.
   */
  dtype?: any

  /**
    When True, an alternating sign is added to the features as to approximately conserve the inner product in the hashed space even for small n\_features. This approach is similar to sparse random projection.

    @defaultValue `true`
   */
  alternate_sign?: boolean
}

export interface FeatureHasherFitOptions {
  /**
    Not used, present here for API consistency by convention.
   */
  X?: any

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface FeatureHasherFitTransformOptions {
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

export interface FeatureHasherSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface FeatureHasherTransformOptions {
  /**
    Samples. Each sample must be iterable an (e.g., a list or tuple) containing/generating feature names (and optionally values, see the input\_type constructor argument) which will be hashed. raw\_X need not support the len function, so it can be the result of a generator; n\_samples is determined on the fly.
   */
  raw_X?: any
}
