/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Binarize data (set feature values to 0 or 1) according to a threshold.

  Values greater than the threshold map to 1, while values less than or equal to the threshold map to 0. With the default threshold of 0, only positive values map to 1.

  Binarization is a common operation on text count data where the analyst can decide to only consider the presence or absence of a feature rather than a quantified number of occurrences for instance.

  It can also be used as a pre-processing step for estimators that consider boolean random variables (e.g. modelled using the Bernoulli distribution in a Bayesian setting).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Binarizer.html
 */
export class Binarizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: BinarizerOptions) {
    this.id = `Binarizer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Binarizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import Binarizer
try: bridgeBinarizer
except NameError: bridgeBinarizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_Binarizer = {'threshold': ${
      this.opts['threshold'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}}

ctor_Binarizer = {k: v for k, v in ctor_Binarizer.items() if v is not None}`

    await this._py.ex`bridgeBinarizer[${this.id}] = Binarizer(**ctor_Binarizer)`

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

    await this._py.ex`del bridgeBinarizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: BinarizerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Binarizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Binarizer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_Binarizer_fit = {k: v for k, v in pms_Binarizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Binarizer_fit = bridgeBinarizer[${this.id}].fit(**pms_Binarizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Binarizer_fit.tolist() if hasattr(res_Binarizer_fit, 'tolist') else res_Binarizer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(opts: BinarizerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Binarizer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_Binarizer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_Binarizer_fit_transform = {k: v for k, v in pms_Binarizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Binarizer_fit_transform = bridgeBinarizer[${this.id}].fit_transform(**pms_Binarizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Binarizer_fit_transform.tolist() if hasattr(res_Binarizer_fit_transform, 'tolist') else res_Binarizer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: BinarizerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Binarizer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_Binarizer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_Binarizer_get_feature_names_out = {k: v for k, v in pms_Binarizer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Binarizer_get_feature_names_out = bridgeBinarizer[${this.id}].get_feature_names_out(**pms_Binarizer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Binarizer_get_feature_names_out.tolist() if hasattr(res_Binarizer_get_feature_names_out, 'tolist') else res_Binarizer_get_feature_names_out`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: BinarizerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Binarizer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_Binarizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_Binarizer_set_output = {k: v for k, v in pms_Binarizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Binarizer_set_output = bridgeBinarizer[${this.id}].set_output(**pms_Binarizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Binarizer_set_output.tolist() if hasattr(res_Binarizer_set_output, 'tolist') else res_Binarizer_set_output`
  }

  /**
    Binarize each element of X.
   */
  async transform(
    opts: BinarizerTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Binarizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_Binarizer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_Binarizer_transform = {k: v for k, v in pms_Binarizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Binarizer_transform = bridgeBinarizer[${this.id}].transform(**pms_Binarizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Binarizer_transform.tolist() if hasattr(res_Binarizer_transform, 'tolist') else res_Binarizer_transform`
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Binarizer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Binarizer_n_features_in_ = bridgeBinarizer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Binarizer_n_features_in_.tolist() if hasattr(attr_Binarizer_n_features_in_, 'tolist') else attr_Binarizer_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Binarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Binarizer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Binarizer_feature_names_in_ = bridgeBinarizer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Binarizer_feature_names_in_.tolist() if hasattr(attr_Binarizer_feature_names_in_, 'tolist') else attr_Binarizer_feature_names_in_`
    })()
  }
}

export interface BinarizerOptions {
  /**
    Feature values below or equal to this are replaced by 0, above it by 1. Threshold may not be less than 0 for operations on sparse matrices.

    @defaultValue `0`
   */
  threshold?: number

  /**
    Set to False to perform inplace binarization and avoid a copy (if the input is already a numpy array or a scipy.sparse CSR matrix).

    @defaultValue `true`
   */
  copy?: boolean
}

export interface BinarizerFitOptions {
  /**
    The data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}

export interface BinarizerFitTransformOptions {
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

export interface BinarizerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface BinarizerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface BinarizerTransformOptions {
  /**
    The data to binarize, element by element. scipy.sparse matrices should be in CSR format to avoid an un-necessary copy.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Copy the input X or not.
   */
  copy?: boolean
}
