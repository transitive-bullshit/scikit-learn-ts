/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Spectral Co-Clustering algorithm (Dhillon, 2001).

  Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

  The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

  Supports sparse matrices, as long as they are nonnegative.

  Read more in the [User Guide](../biclustering.html#spectral-coclustering).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html
 */
export class SpectralCoclustering {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SpectralCoclusteringOptions) {
    this.id = `SpectralCoclustering${crypto.randomUUID().split('-')[0]}`
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
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SpectralCoclustering.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import SpectralCoclustering
try: bridgeSpectralCoclustering
except NameError: bridgeSpectralCoclustering = {}
`

    // set up constructor params
    await this._py.ex`ctor_SpectralCoclustering = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'svd_method': ${this.opts['svd_method'] ?? undefined}, 'n_svd_vecs': ${
      this.opts['n_svd_vecs'] ?? undefined
    }, 'mini_batch': ${
      this.opts['mini_batch'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'n_init': ${
      this.opts['n_init'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_SpectralCoclustering = {k: v for k, v in ctor_SpectralCoclustering.items() if v is not None}`

    await this._py
      .ex`bridgeSpectralCoclustering[${this.id}] = SpectralCoclustering(**ctor_SpectralCoclustering)`

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

    await this._py.ex`del bridgeSpectralCoclustering[${this.id}]`

    this._isDisposed = true
  }

  /**
    Create a biclustering for X.
   */
  async fit(opts: SpectralCoclusteringFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SpectralCoclustering must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SpectralCoclustering_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralCoclustering_fit = {k: v for k, v in pms_SpectralCoclustering_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralCoclustering_fit = bridgeSpectralCoclustering[${this.id}].fit(**pms_SpectralCoclustering_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralCoclustering_fit.tolist() if hasattr(res_SpectralCoclustering_fit, 'tolist') else res_SpectralCoclustering_fit`
  }

  /**
    Row and column indices of the `i`’th bicluster.

    Only works if `rows\_` and `columns\_` attributes exist.
   */
  async get_indices(
    opts: SpectralCoclusteringGetIndicesOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before get_indices()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralCoclustering_get_indices = {'i': ${
      opts['i'] ?? undefined
    }}

pms_SpectralCoclustering_get_indices = {k: v for k, v in pms_SpectralCoclustering_get_indices.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralCoclustering_get_indices = bridgeSpectralCoclustering[${this.id}].get_indices(**pms_SpectralCoclustering_get_indices)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralCoclustering_get_indices.tolist() if hasattr(res_SpectralCoclustering_get_indices, 'tolist') else res_SpectralCoclustering_get_indices`
  }

  /**
    Shape of the `i`’th bicluster.
   */
  async get_shape(opts: SpectralCoclusteringGetShapeOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before get_shape()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralCoclustering_get_shape = {'i': ${
      opts['i'] ?? undefined
    }}

pms_SpectralCoclustering_get_shape = {k: v for k, v in pms_SpectralCoclustering_get_shape.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralCoclustering_get_shape = bridgeSpectralCoclustering[${this.id}].get_shape(**pms_SpectralCoclustering_get_shape)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralCoclustering_get_shape.tolist() if hasattr(res_SpectralCoclustering_get_shape, 'tolist') else res_SpectralCoclustering_get_shape`
  }

  /**
    Return the submatrix corresponding to bicluster `i`.
   */
  async get_submatrix(
    opts: SpectralCoclusteringGetSubmatrixOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before get_submatrix()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralCoclustering_get_submatrix = {'i': ${
      opts['i'] ?? undefined
    }, 'data': np.array(${opts['data'] ?? undefined}) if ${
      opts['data'] !== undefined
    } else None}

pms_SpectralCoclustering_get_submatrix = {k: v for k, v in pms_SpectralCoclustering_get_submatrix.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralCoclustering_get_submatrix = bridgeSpectralCoclustering[${this.id}].get_submatrix(**pms_SpectralCoclustering_get_submatrix)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralCoclustering_get_submatrix.tolist() if hasattr(res_SpectralCoclustering_get_submatrix, 'tolist') else res_SpectralCoclustering_get_submatrix`
  }

  /**
    Results of the clustering. `rows\[i, r\]` is True if cluster `i` contains row `r`. Available only after calling `fit`.
   */
  get rows_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing rows_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_rows_ = bridgeSpectralCoclustering[${this.id}].rows_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_rows_.tolist() if hasattr(attr_SpectralCoclustering_rows_, 'tolist') else attr_SpectralCoclustering_rows_`
    })()
  }

  /**
    Results of the clustering, like `rows`.
   */
  get columns_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing columns_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_columns_ = bridgeSpectralCoclustering[${this.id}].columns_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_columns_.tolist() if hasattr(attr_SpectralCoclustering_columns_, 'tolist') else attr_SpectralCoclustering_columns_`
    })()
  }

  /**
    The bicluster label of each row.
   */
  get row_labels_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing row_labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_row_labels_ = bridgeSpectralCoclustering[${this.id}].row_labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_row_labels_.tolist() if hasattr(attr_SpectralCoclustering_row_labels_, 'tolist') else attr_SpectralCoclustering_row_labels_`
    })()
  }

  /**
    The bicluster label of each column.
   */
  get column_labels_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing column_labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_column_labels_ = bridgeSpectralCoclustering[${this.id}].column_labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_column_labels_.tolist() if hasattr(attr_SpectralCoclustering_column_labels_, 'tolist') else attr_SpectralCoclustering_column_labels_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_n_features_in_ = bridgeSpectralCoclustering[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_n_features_in_.tolist() if hasattr(attr_SpectralCoclustering_n_features_in_, 'tolist') else attr_SpectralCoclustering_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralCoclustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralCoclustering must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralCoclustering_feature_names_in_ = bridgeSpectralCoclustering[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralCoclustering_feature_names_in_.tolist() if hasattr(attr_SpectralCoclustering_feature_names_in_, 'tolist') else attr_SpectralCoclustering_feature_names_in_`
    })()
  }
}

export interface SpectralCoclusteringOptions {
  /**
    The number of biclusters to find.

    @defaultValue `3`
   */
  n_clusters?: number

  /**
    Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, use [`sklearn.utils.extmath.randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, use [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.10.1)"), which is more accurate, but possibly slower in some cases.

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
  init?: NDArray[]

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

export interface SpectralCoclusteringFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface SpectralCoclusteringGetIndicesOptions {
  /**
    The index of the cluster.
   */
  i?: number
}

export interface SpectralCoclusteringGetShapeOptions {
  /**
    The index of the cluster.
   */
  i?: number
}

export interface SpectralCoclusteringGetSubmatrixOptions {
  /**
    The index of the cluster.
   */
  i?: number

  /**
    The data.
   */
  data?: ArrayLike[]
}
