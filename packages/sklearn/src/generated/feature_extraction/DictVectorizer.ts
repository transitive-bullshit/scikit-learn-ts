/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transforms lists of feature-value mappings to vectors.

  This transformer turns lists of mappings (dict-like objects) of feature names to feature values into Numpy arrays or scipy.sparse matrices for use with scikit-learn estimators.

  When feature values are strings, this transformer will do a binary one-hot (aka one-of-K) coding: one boolean-valued feature is constructed for each of the possible string values that the feature can take on. For instance, a feature “f” that can take on the values “ham” and “spam” will become two features in the output, one signifying “f=ham”, the other “f=spam”.

  If a feature value is a sequence or set of strings, this transformer will iterate over the values and will count the occurrences of each string value.

  However, note that this transformer will only do a binary one-hot encoding when feature values are of type string. If categorical features are represented as numeric values such as int or iterables of strings, the DictVectorizer can be followed by OneHotEncoder to complete binary one-hot encoding.

  Features that do not occur in a sample (mapping) will have a zero value in the resulting array/matrix.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.DictVectorizer.html
 */
export class DictVectorizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: DictVectorizerOptions) {
    this.id = `DictVectorizer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DictVectorizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction import DictVectorizer
try: bridgeDictVectorizer
except NameError: bridgeDictVectorizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_DictVectorizer = {'dtype': ${
      this.opts['dtype'] ?? undefined
    }, 'separator': ${this.opts['separator'] ?? undefined}, 'sparse': ${
      this.opts['sparse'] ?? undefined
    }, 'sort': ${this.opts['sort'] ?? undefined}}

ctor_DictVectorizer = {k: v for k, v in ctor_DictVectorizer.items() if v is not None}`

    await this._py
      .ex`bridgeDictVectorizer[${this.id}] = DictVectorizer(**ctor_DictVectorizer)`

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

    await this._py.ex`del bridgeDictVectorizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn a list of feature name -> indices mappings.
   */
  async fit(opts: DictVectorizerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DictVectorizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_DictVectorizer_fit = {k: v for k, v in pms_DictVectorizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_fit = bridgeDictVectorizer[${this.id}].fit(**pms_DictVectorizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_fit.tolist() if hasattr(res_DictVectorizer_fit, 'tolist') else res_DictVectorizer_fit`
  }

  /**
    Learn a list of feature name -> indices mappings and transform X.

    Like fit(X) followed by transform(X), but does not require materializing X in memory.
   */
  async fit_transform(
    opts: DictVectorizerFitTransformOptions
  ): Promise<SparseMatrix> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DictVectorizer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_fit_transform = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_DictVectorizer_fit_transform = {k: v for k, v in pms_DictVectorizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_fit_transform = bridgeDictVectorizer[${this.id}].fit_transform(**pms_DictVectorizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_fit_transform.tolist() if hasattr(res_DictVectorizer_fit_transform, 'tolist') else res_DictVectorizer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: DictVectorizerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictVectorizer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DictVectorizer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_DictVectorizer_get_feature_names_out = {k: v for k, v in pms_DictVectorizer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_get_feature_names_out = bridgeDictVectorizer[${this.id}].get_feature_names_out(**pms_DictVectorizer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_get_feature_names_out.tolist() if hasattr(res_DictVectorizer_get_feature_names_out, 'tolist') else res_DictVectorizer_get_feature_names_out`
  }

  /**
    Transform array or sparse matrix X back to feature mappings.

    X must have been produced by this DictVectorizer’s transform or fit_transform method; it may only have passed through transformers that preserve the number of features and their order.

    In the case of one-hot/one-of-K coding, the constructed feature names and values are returned rather than the original ones.
   */
  async inverse_transform(
    opts: DictVectorizerInverseTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictVectorizer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'dict_type': ${
      opts['dict_type'] ?? undefined
    }}

pms_DictVectorizer_inverse_transform = {k: v for k, v in pms_DictVectorizer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_inverse_transform = bridgeDictVectorizer[${this.id}].inverse_transform(**pms_DictVectorizer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_inverse_transform.tolist() if hasattr(res_DictVectorizer_inverse_transform, 'tolist') else res_DictVectorizer_inverse_transform`
  }

  /**
    Restrict the features to those in support using feature selection.

    This function modifies the estimator in-place.
   */
  async restrict(opts: DictVectorizerRestrictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DictVectorizer must call init() before restrict()')
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_restrict = {'support': ${
      opts['support'] ?? undefined
    }, 'indices': ${opts['indices'] ?? undefined}}

pms_DictVectorizer_restrict = {k: v for k, v in pms_DictVectorizer_restrict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_restrict = bridgeDictVectorizer[${this.id}].restrict(**pms_DictVectorizer_restrict)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_restrict.tolist() if hasattr(res_DictVectorizer_restrict, 'tolist') else res_DictVectorizer_restrict`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: DictVectorizerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DictVectorizer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_DictVectorizer_set_output = {k: v for k, v in pms_DictVectorizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_set_output = bridgeDictVectorizer[${this.id}].set_output(**pms_DictVectorizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_set_output.tolist() if hasattr(res_DictVectorizer_set_output, 'tolist') else res_DictVectorizer_set_output`
  }

  /**
    Transform feature->value dicts to array or sparse matrix.

    Named features not encountered during fit or fit_transform will be silently ignored.
   */
  async transform(opts: DictVectorizerTransformOptions): Promise<SparseMatrix> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DictVectorizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_DictVectorizer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_DictVectorizer_transform = {k: v for k, v in pms_DictVectorizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictVectorizer_transform = bridgeDictVectorizer[${this.id}].transform(**pms_DictVectorizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_DictVectorizer_transform.tolist() if hasattr(res_DictVectorizer_transform, 'tolist') else res_DictVectorizer_transform`
  }

  /**
    A dictionary mapping feature names to feature indices.
   */
  get vocabulary_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictVectorizer must call init() before accessing vocabulary_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictVectorizer_vocabulary_ = bridgeDictVectorizer[${this.id}].vocabulary_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictVectorizer_vocabulary_.tolist() if hasattr(attr_DictVectorizer_vocabulary_, 'tolist') else attr_DictVectorizer_vocabulary_`
    })()
  }

  /**
    A list of length n_features containing the feature names (e.g., “f=ham” and “f=spam”).
   */
  get feature_names_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This DictVectorizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictVectorizer must call init() before accessing feature_names_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictVectorizer_feature_names_ = bridgeDictVectorizer[${this.id}].feature_names_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictVectorizer_feature_names_.tolist() if hasattr(attr_DictVectorizer_feature_names_, 'tolist') else attr_DictVectorizer_feature_names_`
    })()
  }
}

export interface DictVectorizerOptions {
  /**
    The type of feature values. Passed to Numpy array/scipy.sparse matrix constructors as the dtype argument.
   */
  dtype?: any

  /**
    Separator string used when constructing new features for one-hot coding.

    @defaultValue `'='`
   */
  separator?: string

  /**
    Whether transform should produce scipy.sparse matrices.

    @defaultValue `true`
   */
  sparse?: boolean

  /**
    Whether feature_names_ and vocabulary_ should be sorted when fitting.

    @defaultValue `true`
   */
  sort?: boolean
}

export interface DictVectorizerFitOptions {
  /**
    Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).
   */
  X?: any

  /**
    Ignored parameter.
   */
  y?: any
}

export interface DictVectorizerFitTransformOptions {
  /**
    Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).
   */
  X?: any

  /**
    Ignored parameter.
   */
  y?: any
}

export interface DictVectorizerGetFeatureNamesOutOptions {
  /**
    Not used, present here for API consistency by convention.
   */
  input_features?: any
}

export interface DictVectorizerInverseTransformOptions {
  /**
    Sample matrix.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Constructor for feature mappings. Must conform to the collections.Mapping API.
   */
  dict_type?: any
}

export interface DictVectorizerRestrictOptions {
  /**
    Boolean mask or list of indices (as returned by the get_support member of feature selectors).
   */
  support?: ArrayLike

  /**
    Whether support is a list of indices.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface DictVectorizerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface DictVectorizerTransformOptions {
  /**
    Dict(s) or Mapping(s) from feature names (arbitrary Python objects) to feature values (strings or convertible to dtype).
   */
  X?: any[]
}