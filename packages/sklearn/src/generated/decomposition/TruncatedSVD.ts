/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Dimensionality reduction using truncated SVD (aka LSA).

  This transformer performs linear dimensionality reduction by means of truncated singular value decomposition (SVD). Contrary to PCA, this estimator does not center the data before computing the singular value decomposition. This means it can work with sparse matrices efficiently.

  In particular, truncated SVD works on term count/tf-idf matrices as returned by the vectorizers in sklearn.feature_extraction.text. In that context, it is known as latent semantic analysis (LSA).

  This estimator supports two algorithms: a fast randomized SVD solver, and a “naive” algorithm that uses ARPACK as an eigensolver on X * X.T or X.T * X, whichever is more efficient.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html
 */
export class TruncatedSVD {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: TruncatedSVDOptions) {
    this.id = `TruncatedSVD${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TruncatedSVD.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import TruncatedSVD
try: bridgeTruncatedSVD
except NameError: bridgeTruncatedSVD = {}
`

    // set up constructor params
    await this._py.ex`ctor_TruncatedSVD = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'n_iter': ${
      this.opts['n_iter'] ?? undefined
    }, 'n_oversamples': ${
      this.opts['n_oversamples'] ?? undefined
    }, 'power_iteration_normalizer': ${
      this.opts['power_iteration_normalizer'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }}

ctor_TruncatedSVD = {k: v for k, v in ctor_TruncatedSVD.items() if v is not None}`

    await this._py
      .ex`bridgeTruncatedSVD[${this.id}] = TruncatedSVD(**ctor_TruncatedSVD)`

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

    await this._py.ex`del bridgeTruncatedSVD[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit model on training data X.
   */
  async fit(opts: TruncatedSVDFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TruncatedSVD must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_TruncatedSVD_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_TruncatedSVD_fit = {k: v for k, v in pms_TruncatedSVD_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_fit = bridgeTruncatedSVD[${this.id}].fit(**pms_TruncatedSVD_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_fit.tolist() if hasattr(res_TruncatedSVD_fit, 'tolist') else res_TruncatedSVD_fit`
  }

  /**
    Fit model to X and perform dimensionality reduction on X.
   */
  async fit_transform(
    opts: TruncatedSVDFitTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TruncatedSVD must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_TruncatedSVD_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_TruncatedSVD_fit_transform = {k: v for k, v in pms_TruncatedSVD_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_fit_transform = bridgeTruncatedSVD[${this.id}].fit_transform(**pms_TruncatedSVD_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_fit_transform.tolist() if hasattr(res_TruncatedSVD_fit_transform, 'tolist') else res_TruncatedSVD_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: TruncatedSVDGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TruncatedSVD_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_TruncatedSVD_get_feature_names_out = {k: v for k, v in pms_TruncatedSVD_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_get_feature_names_out = bridgeTruncatedSVD[${this.id}].get_feature_names_out(**pms_TruncatedSVD_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_get_feature_names_out.tolist() if hasattr(res_TruncatedSVD_get_feature_names_out, 'tolist') else res_TruncatedSVD_get_feature_names_out`
  }

  /**
    Transform X back to its original space.

    Returns an array X_original whose transform would be X.
   */
  async inverse_transform(
    opts: TruncatedSVDInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_TruncatedSVD_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_TruncatedSVD_inverse_transform = {k: v for k, v in pms_TruncatedSVD_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_inverse_transform = bridgeTruncatedSVD[${this.id}].inverse_transform(**pms_TruncatedSVD_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_inverse_transform.tolist() if hasattr(res_TruncatedSVD_inverse_transform, 'tolist') else res_TruncatedSVD_inverse_transform`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: TruncatedSVDSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TruncatedSVD must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_TruncatedSVD_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_TruncatedSVD_set_output = {k: v for k, v in pms_TruncatedSVD_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_set_output = bridgeTruncatedSVD[${this.id}].set_output(**pms_TruncatedSVD_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_set_output.tolist() if hasattr(res_TruncatedSVD_set_output, 'tolist') else res_TruncatedSVD_set_output`
  }

  /**
    Perform dimensionality reduction on X.
   */
  async transform(opts: TruncatedSVDTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TruncatedSVD must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_TruncatedSVD_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_TruncatedSVD_transform = {k: v for k, v in pms_TruncatedSVD_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TruncatedSVD_transform = bridgeTruncatedSVD[${this.id}].transform(**pms_TruncatedSVD_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TruncatedSVD_transform.tolist() if hasattr(res_TruncatedSVD_transform, 'tolist') else res_TruncatedSVD_transform`
  }

  /**
    The right singular vectors of the input data.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_components_ = bridgeTruncatedSVD[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_components_.tolist() if hasattr(attr_TruncatedSVD_components_, 'tolist') else attr_TruncatedSVD_components_`
    })()
  }

  /**
    The variance of the training samples transformed by a projection to each component.
   */
  get explained_variance_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing explained_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_explained_variance_ = bridgeTruncatedSVD[${this.id}].explained_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_explained_variance_.tolist() if hasattr(attr_TruncatedSVD_explained_variance_, 'tolist') else attr_TruncatedSVD_explained_variance_`
    })()
  }

  /**
    Percentage of variance explained by each of the selected components.
   */
  get explained_variance_ratio_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing explained_variance_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_explained_variance_ratio_ = bridgeTruncatedSVD[${this.id}].explained_variance_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_explained_variance_ratio_.tolist() if hasattr(attr_TruncatedSVD_explained_variance_ratio_, 'tolist') else attr_TruncatedSVD_explained_variance_ratio_`
    })()
  }

  /**
    The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the n_components variables in the lower-dimensional space.
   */
  get singular_values_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing singular_values_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_singular_values_ = bridgeTruncatedSVD[${this.id}].singular_values_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_singular_values_.tolist() if hasattr(attr_TruncatedSVD_singular_values_, 'tolist') else attr_TruncatedSVD_singular_values_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_n_features_in_ = bridgeTruncatedSVD[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_n_features_in_.tolist() if hasattr(attr_TruncatedSVD_n_features_in_, 'tolist') else attr_TruncatedSVD_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TruncatedSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TruncatedSVD must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TruncatedSVD_feature_names_in_ = bridgeTruncatedSVD[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TruncatedSVD_feature_names_in_.tolist() if hasattr(attr_TruncatedSVD_feature_names_in_, 'tolist') else attr_TruncatedSVD_feature_names_in_`
    })()
  }
}

export interface TruncatedSVDOptions {
  /**
    Desired dimensionality of output data. If algorithm=’arpack’, must be strictly less than the number of features. If algorithm=’randomized’, must be less than or equal to the number of features. The default value is useful for visualisation. For LSA, a value of 100 is recommended.

    @defaultValue `2`
   */
  n_components?: number

  /**
    SVD solver to use. Either “arpack” for the ARPACK wrapper in SciPy (scipy.sparse.linalg.svds), or “randomized” for the randomized algorithm due to Halko (2009).

    @defaultValue `'randomized'`
   */
  algorithm?: 'arpack' | 'randomized'

  /**
    Number of iterations for randomized SVD solver. Not used by ARPACK. The default is larger than the default in randomized_svd to handle sparse matrices that may have large slowly decaying spectrum.

    @defaultValue `5`
   */
  n_iter?: number

  /**
    Number of oversamples for randomized SVD solver. Not used by ARPACK. See randomized_svd for a complete description.

    @defaultValue `10`
   */
  n_oversamples?: number

  /**
    Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See randomized_svd for more details.

    @defaultValue `'auto'`
   */
  power_iteration_normalizer?: 'auto' | 'QR' | 'LU' | 'none'

  /**
    Used during randomized svd. Pass an int for reproducible results across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    Tolerance for ARPACK. 0 means machine precision. Ignored by randomized SVD solver.

    @defaultValue `0`
   */
  tol?: number
}

export interface TruncatedSVDFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface TruncatedSVDFitTransformOptions {
  /**
    Training data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface TruncatedSVDGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface TruncatedSVDInverseTransformOptions {
  /**
    New data.
   */
  X?: ArrayLike[]
}

export interface TruncatedSVDSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface TruncatedSVDTransformOptions {
  /**
    New data.
   */
  X?: ArrayLike | SparseMatrix[]
}
