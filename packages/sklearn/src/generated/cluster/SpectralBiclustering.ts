/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Spectral biclustering (Kluger, 2003).

  Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

  Read more in the [User Guide](../biclustering.html#spectral-biclustering).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html)
 */
export class SpectralBiclustering {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SpectralBiclusteringOptions) {
    this.id = `SpectralBiclustering${crypto.randomUUID().split('-')[0]}`
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
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SpectralBiclustering.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import SpectralBiclustering
try: bridgeSpectralBiclustering
except NameError: bridgeSpectralBiclustering = {}
`

    // set up constructor params
    await this._py.ex`ctor_SpectralBiclustering = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'method': ${this.opts['method'] ?? undefined}, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'n_best': ${this.opts['n_best'] ?? undefined}, 'svd_method': ${
      this.opts['svd_method'] ?? undefined
    }, 'n_svd_vecs': ${this.opts['n_svd_vecs'] ?? undefined}, 'mini_batch': ${
      this.opts['mini_batch'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'n_init': ${
      this.opts['n_init'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_SpectralBiclustering = {k: v for k, v in ctor_SpectralBiclustering.items() if v is not None}`

    await this._py
      .ex`bridgeSpectralBiclustering[${this.id}] = SpectralBiclustering(**ctor_SpectralBiclustering)`

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

    await this._py.ex`del bridgeSpectralBiclustering[${this.id}]`

    this._isDisposed = true
  }

  /**
    Create a biclustering for X.
   */
  async fit(opts: SpectralBiclusteringFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SpectralBiclustering must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SpectralBiclustering_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralBiclustering_fit = {k: v for k, v in pms_SpectralBiclustering_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralBiclustering_fit = bridgeSpectralBiclustering[${this.id}].fit(**pms_SpectralBiclustering_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralBiclustering_fit.tolist() if hasattr(res_SpectralBiclustering_fit, 'tolist') else res_SpectralBiclustering_fit`
  }

  /**
    Row and column indices of the `i`’th bicluster.

    Only works if `rows\_` and `columns\_` attributes exist.
   */
  async get_indices(
    opts: SpectralBiclusteringGetIndicesOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before get_indices()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralBiclustering_get_indices = {'i': ${
      opts['i'] ?? undefined
    }}

pms_SpectralBiclustering_get_indices = {k: v for k, v in pms_SpectralBiclustering_get_indices.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralBiclustering_get_indices = bridgeSpectralBiclustering[${this.id}].get_indices(**pms_SpectralBiclustering_get_indices)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralBiclustering_get_indices.tolist() if hasattr(res_SpectralBiclustering_get_indices, 'tolist') else res_SpectralBiclustering_get_indices`
  }

  /**
    Shape of the `i`’th bicluster.
   */
  async get_shape(opts: SpectralBiclusteringGetShapeOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before get_shape()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralBiclustering_get_shape = {'i': ${
      opts['i'] ?? undefined
    }}

pms_SpectralBiclustering_get_shape = {k: v for k, v in pms_SpectralBiclustering_get_shape.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralBiclustering_get_shape = bridgeSpectralBiclustering[${this.id}].get_shape(**pms_SpectralBiclustering_get_shape)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralBiclustering_get_shape.tolist() if hasattr(res_SpectralBiclustering_get_shape, 'tolist') else res_SpectralBiclustering_get_shape`
  }

  /**
    Return the submatrix corresponding to bicluster `i`.
   */
  async get_submatrix(
    opts: SpectralBiclusteringGetSubmatrixOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before get_submatrix()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralBiclustering_get_submatrix = {'i': ${
      opts['i'] ?? undefined
    }, 'data': np.array(${opts['data'] ?? undefined}) if ${
      opts['data'] !== undefined
    } else None}

pms_SpectralBiclustering_get_submatrix = {k: v for k, v in pms_SpectralBiclustering_get_submatrix.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralBiclustering_get_submatrix = bridgeSpectralBiclustering[${this.id}].get_submatrix(**pms_SpectralBiclustering_get_submatrix)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralBiclustering_get_submatrix.tolist() if hasattr(res_SpectralBiclustering_get_submatrix, 'tolist') else res_SpectralBiclustering_get_submatrix`
  }

  /**
    Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.
   */
  get rows_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing rows_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_rows_ = bridgeSpectralBiclustering[${this.id}].rows_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_rows_.tolist() if hasattr(attr_SpectralBiclustering_rows_, 'tolist') else attr_SpectralBiclustering_rows_`
    })()
  }

  /**
    Results of the clustering, like `rows`.
   */
  get columns_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing columns_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_columns_ = bridgeSpectralBiclustering[${this.id}].columns_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_columns_.tolist() if hasattr(attr_SpectralBiclustering_columns_, 'tolist') else attr_SpectralBiclustering_columns_`
    })()
  }

  /**
    Row partition labels.
   */
  get row_labels_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing row_labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_row_labels_ = bridgeSpectralBiclustering[${this.id}].row_labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_row_labels_.tolist() if hasattr(attr_SpectralBiclustering_row_labels_, 'tolist') else attr_SpectralBiclustering_row_labels_`
    })()
  }

  /**
    Column partition labels.
   */
  get column_labels_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing column_labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_column_labels_ = bridgeSpectralBiclustering[${this.id}].column_labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_column_labels_.tolist() if hasattr(attr_SpectralBiclustering_column_labels_, 'tolist') else attr_SpectralBiclustering_column_labels_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_n_features_in_ = bridgeSpectralBiclustering[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_n_features_in_.tolist() if hasattr(attr_SpectralBiclustering_n_features_in_, 'tolist') else attr_SpectralBiclustering_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralBiclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralBiclustering must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralBiclustering_feature_names_in_ = bridgeSpectralBiclustering[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralBiclustering_feature_names_in_.tolist() if hasattr(attr_SpectralBiclustering_feature_names_in_, 'tolist') else attr_SpectralBiclustering_feature_names_in_`
    })()
  }
}

export interface SpectralBiclusteringOptions {
  /**
    The number of row and column clusters in the checkerboard structure.

    @defaultValue `3`
   */
  n_clusters?: number

  /**
    Method of normalizing and converting singular vectors into biclusters. May be one of ‘scale’, ‘bistochastic’, or ‘log’. The authors recommend using ‘log’. If the data is sparse, however, log normalization will not work, which is why the default is ‘bistochastic’.

    @defaultValue `'bistochastic'`
   */
  method?: 'bistochastic' | 'scale' | 'log'

  /**
    Number of singular vectors to check.

    @defaultValue `6`
   */
  n_components?: number

  /**
    Number of best singular vectors to which to project the data for clustering.

    @defaultValue `3`
   */
  n_best?: number

  /**
    Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, uses [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, uses `scipy.sparse.linalg.svds`, which is more accurate, but possibly slower in some cases.

    @defaultValue `'randomized'`
   */
  svd_method?: 'randomized' | 'arpack'

  /**
    Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized\`.
   */
  n_svd_vecs?: number

  /**
    Whether to use mini-batch k-means, which is faster but may get different results.

    @defaultValue `false`
   */
  mini_batch?: boolean

  /**
    Method for initialization of k-means algorithm; defaults to ‘k-means++’.

    @defaultValue `'k-means++'`
   */
  init?: 'k-means++' | 'random' | NDArray[]

  /**
    Number of random initializations that are tried with the k-means algorithm.

    If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.

    @defaultValue `10`
   */
  n_init?: number

  /**
    Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface SpectralBiclusteringFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface SpectralBiclusteringGetIndicesOptions {
  /**
    The index of the cluster.
   */
  i?: number
}

export interface SpectralBiclusteringGetShapeOptions {
  /**
    The index of the cluster.
   */
  i?: number
}

export interface SpectralBiclusteringGetSubmatrixOptions {
  /**
    The index of the cluster.
   */
  i?: number

  /**
    The data.
   */
  data?: ArrayLike[]
}
