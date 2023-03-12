/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Spectral embedding for non-linear dimensionality reduction.

  Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

  Note : Laplacian Eigenmaps is the actual algorithm implemented here.

  Read more in the [User Guide](../manifold.html#spectral-embedding).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html
 */
export class SpectralEmbedding {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SpectralEmbeddingOptions) {
    this.id = `SpectralEmbedding${crypto.randomUUID().split('-')[0]}`
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
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SpectralEmbedding.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.manifold import SpectralEmbedding
try: bridgeSpectralEmbedding
except NameError: bridgeSpectralEmbedding = {}
`

    // set up constructor params
    await this._py.ex`ctor_SpectralEmbedding = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'affinity': ${this.opts['affinity'] ?? undefined}, 'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'eigen_solver': ${
      this.opts['eigen_solver'] ?? undefined
    }, 'eigen_tol': ${this.opts['eigen_tol'] ?? undefined}, 'n_neighbors': ${
      this.opts['n_neighbors'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_SpectralEmbedding = {k: v for k, v in ctor_SpectralEmbedding.items() if v is not None}`

    await this._py
      .ex`bridgeSpectralEmbedding[${this.id}] = SpectralEmbedding(**ctor_SpectralEmbedding)`

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

    await this._py.ex`del bridgeSpectralEmbedding[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model from data in X.
   */
  async fit(opts: SpectralEmbeddingFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SpectralEmbedding must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SpectralEmbedding_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralEmbedding_fit = {k: v for k, v in pms_SpectralEmbedding_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralEmbedding_fit = bridgeSpectralEmbedding[${this.id}].fit(**pms_SpectralEmbedding_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralEmbedding_fit.tolist() if hasattr(res_SpectralEmbedding_fit, 'tolist') else res_SpectralEmbedding_fit`
  }

  /**
    Fit the model from data in X and transform X.
   */
  async fit_transform(
    opts: SpectralEmbeddingFitTransformOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralEmbedding_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralEmbedding_fit_transform = {k: v for k, v in pms_SpectralEmbedding_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralEmbedding_fit_transform = bridgeSpectralEmbedding[${this.id}].fit_transform(**pms_SpectralEmbedding_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralEmbedding_fit_transform.tolist() if hasattr(res_SpectralEmbedding_fit_transform, 'tolist') else res_SpectralEmbedding_fit_transform`
  }

  /**
    Spectral embedding of the training matrix.
   */
  get embedding_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before accessing embedding_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralEmbedding_embedding_ = bridgeSpectralEmbedding[${this.id}].embedding_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralEmbedding_embedding_.tolist() if hasattr(attr_SpectralEmbedding_embedding_, 'tolist') else attr_SpectralEmbedding_embedding_`
    })()
  }

  /**
    Affinity\_matrix constructed from samples or precomputed.
   */
  get affinity_matrix_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before accessing affinity_matrix_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralEmbedding_affinity_matrix_ = bridgeSpectralEmbedding[${this.id}].affinity_matrix_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralEmbedding_affinity_matrix_.tolist() if hasattr(attr_SpectralEmbedding_affinity_matrix_, 'tolist') else attr_SpectralEmbedding_affinity_matrix_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralEmbedding_n_features_in_ = bridgeSpectralEmbedding[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralEmbedding_n_features_in_.tolist() if hasattr(attr_SpectralEmbedding_n_features_in_, 'tolist') else attr_SpectralEmbedding_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralEmbedding_feature_names_in_ = bridgeSpectralEmbedding[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralEmbedding_feature_names_in_.tolist() if hasattr(attr_SpectralEmbedding_feature_names_in_, 'tolist') else attr_SpectralEmbedding_feature_names_in_`
    })()
  }

  /**
    Number of nearest neighbors effectively used.
   */
  get n_neighbors_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralEmbedding must call init() before accessing n_neighbors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralEmbedding_n_neighbors_ = bridgeSpectralEmbedding[${this.id}].n_neighbors_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralEmbedding_n_neighbors_.tolist() if hasattr(attr_SpectralEmbedding_n_neighbors_, 'tolist') else attr_SpectralEmbedding_n_neighbors_`
    })()
  }
}

export interface SpectralEmbeddingOptions {
  /**
    The dimension of the projected subspace.

    @defaultValue `2`
   */
  n_components?: number

  /**
    ‘nearest\_neighbors’ : construct the affinity matrix by computing a graph of nearest neighbors.

    @defaultValue `'nearest_neighbors'`
   */
  affinity?:
    | 'nearest_neighbors'
    | 'rbf'
    | 'precomputed'
    | 'precomputed_nearest_neighbors'

  /**
    Kernel coefficient for rbf kernel. If None, gamma will be set to 1/n\_features.
   */
  gamma?: number

  /**
    A pseudo random number generator used for the initialization of the lobpcg eigen vectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](../../glossary.html#term-random_state)).
   */
  random_state?: number

  /**
    The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems. If None, then `'arpack'` is used.
   */
  eigen_solver?: 'arpack' | 'lobpcg' | 'amg'

  /**
    Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

    @defaultValue `'auto'`
   */
  eigen_tol?: number

  /**
    Number of nearest neighbors for nearest\_neighbors graph building. If None, n\_neighbors will be set to max(n\_samples/10, 1).
   */
  n_neighbors?: number

  /**
    The number of parallel jobs to run. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface SpectralEmbeddingFitOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

    If affinity is “precomputed” X : {array-like, sparse matrix}, shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface SpectralEmbeddingFitTransformOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

    If affinity is “precomputed” X : {array-like, sparse matrix} of shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
