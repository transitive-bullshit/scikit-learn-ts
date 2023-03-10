/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Normalize samples individually to unit norm.

  Each sample (i.e. each row of the data matrix) with at least one non zero component is rescaled independently of other samples so that its norm (l1, l2 or inf) equals one.

  This transformer is able to work both with dense numpy arrays and scipy.sparse matrix (use CSR format if you want to avoid the burden of a copy / conversion).

  Scaling inputs to unit norms is a common operation for text classification or clustering for instance. For instance the dot product of two l2-normalized TF-IDF vectors is the cosine similarity of the vectors and is the base similarity metric for the Vector Space Model commonly used by the Information Retrieval community.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Normalizer.html
 */
export class Normalizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NormalizerOptions) {
    this.id = `Normalizer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Normalizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import Normalizer
try: bridgeNormalizer
except NameError: bridgeNormalizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_Normalizer = {'norm': ${
      this.opts['norm'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}}

ctor_Normalizer = {k: v for k, v in ctor_Normalizer.items() if v is not None}`

    await this._py
      .ex`bridgeNormalizer[${this.id}] = Normalizer(**ctor_Normalizer)`

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

    await this._py.ex`del bridgeNormalizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: NormalizerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Normalizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Normalizer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_Normalizer_fit = {k: v for k, v in pms_Normalizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Normalizer_fit = bridgeNormalizer[${this.id}].fit(**pms_Normalizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Normalizer_fit.tolist() if hasattr(res_Normalizer_fit, 'tolist') else res_Normalizer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(opts: NormalizerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Normalizer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_Normalizer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_Normalizer_fit_transform = {k: v for k, v in pms_Normalizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Normalizer_fit_transform = bridgeNormalizer[${this.id}].fit_transform(**pms_Normalizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Normalizer_fit_transform.tolist() if hasattr(res_Normalizer_fit_transform, 'tolist') else res_Normalizer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: NormalizerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Normalizer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_Normalizer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_Normalizer_get_feature_names_out = {k: v for k, v in pms_Normalizer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Normalizer_get_feature_names_out = bridgeNormalizer[${this.id}].get_feature_names_out(**pms_Normalizer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Normalizer_get_feature_names_out.tolist() if hasattr(res_Normalizer_get_feature_names_out, 'tolist') else res_Normalizer_get_feature_names_out`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: NormalizerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Normalizer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_Normalizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_Normalizer_set_output = {k: v for k, v in pms_Normalizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Normalizer_set_output = bridgeNormalizer[${this.id}].set_output(**pms_Normalizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Normalizer_set_output.tolist() if hasattr(res_Normalizer_set_output, 'tolist') else res_Normalizer_set_output`
  }

  /**
    Scale each non zero row of X to unit norm.
   */
  async transform(
    opts: NormalizerTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Normalizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_Normalizer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_Normalizer_transform = {k: v for k, v in pms_Normalizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Normalizer_transform = bridgeNormalizer[${this.id}].transform(**pms_Normalizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Normalizer_transform.tolist() if hasattr(res_Normalizer_transform, 'tolist') else res_Normalizer_transform`
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Normalizer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Normalizer_n_features_in_ = bridgeNormalizer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Normalizer_n_features_in_.tolist() if hasattr(attr_Normalizer_n_features_in_, 'tolist') else attr_Normalizer_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Normalizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Normalizer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Normalizer_feature_names_in_ = bridgeNormalizer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Normalizer_feature_names_in_.tolist() if hasattr(attr_Normalizer_feature_names_in_, 'tolist') else attr_Normalizer_feature_names_in_`
    })()
  }
}

export interface NormalizerOptions {
  /**
    The norm to use to normalize each non zero sample. If norm=’max’ is used, values will be rescaled by the maximum of the absolute values.

    @defaultValue `'l2'`
   */
  norm?: 'l1' | 'l2' | 'max'

  /**
    Set to False to perform inplace row normalization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).

    @defaultValue `true`
   */
  copy?: boolean
}

export interface NormalizerFitOptions {
  /**
    The data to estimate the normalization parameters.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface NormalizerFitTransformOptions {
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

export interface NormalizerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface NormalizerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface NormalizerTransformOptions {
  /**
    The data to normalize, row by row. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Copy the input X or not.
   */
  copy?: boolean
}
