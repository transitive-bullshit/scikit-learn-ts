/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Apply clustering to a projection of the normalized Laplacian.

  In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

  If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](#r5f6cbeb1558e-1), [\[2\]](#r5f6cbeb1558e-2).

  When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html)
 */
export class SpectralClustering {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The dimension of the projection subspace.

      @defaultValue `8`
     */
    n_clusters?: number

    /**
      The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems, but may also lead to instabilities. If `undefined`, then `'arpack'` is used. See [\[4\]](#r5f6cbeb1558e-4) for more details regarding `'lobpcg'`.
     */
    eigen_solver?: 'arpack' | 'lobpcg' | 'amg'

    /**
      Number of eigenvectors to use for the spectral embedding. If `undefined`, defaults to `n\_clusters`.
     */
    n_components?: number

    /**
      A pseudo random number generator used for the initialization of the lobpcg eigenvectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](../../glossary.html#term-random_state)).
     */
    random_state?: number

    /**
      Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n\_init consecutive runs in terms of inertia. Only used if `assign\_labels='kmeans'`.

      @defaultValue `10`
     */
    n_init?: number

    /**
      Kernel coefficient for rbf, poly, sigmoid, laplacian and chi2 kernels. Ignored for `affinity='nearest\_neighbors'`.

      @defaultValue `1`
     */
    gamma?: number

    /**
      ‘nearest\_neighbors’: construct the affinity matrix by computing a graph of nearest neighbors.

      @defaultValue `'rbf'`
     */
    affinity?: string

    /**
      Number of neighbors to use when constructing the affinity matrix using the nearest neighbors method. Ignored for `affinity='rbf'`.

      @defaultValue `10`
     */
    n_neighbors?: number

    /**
      Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

      @defaultValue `'auto'`
     */
    eigen_tol?: number

    /**
      The strategy for assigning labels in the embedding space. There are two ways to assign labels after the Laplacian embedding. k-means is a popular choice, but it can be sensitive to initialization. Discretization is another approach which is less sensitive to random initialization [\[3\]](#r5f6cbeb1558e-3). The cluster\_qr method [\[5\]](#r5f6cbeb1558e-5) directly extract clusters from eigenvectors in spectral clustering. In contrast to k-means and discretization, cluster\_qr has no tuning parameters and runs no iterations, yet may outperform k-means and discretization in terms of both quality and speed.

      @defaultValue `'kmeans'`
     */
    assign_labels?: 'kmeans' | 'discretize' | 'cluster_qr'

    /**
      Degree of the polynomial kernel. Ignored by other kernels.

      @defaultValue `3`
     */
    degree?: number

    /**
      Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

      @defaultValue `1`
     */
    coef0?: number

    /**
      Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.
     */
    kernel_params?: any

    /**
      The number of parallel jobs to run when `affinity='nearest\_neighbors'` or `affinity='precomputed\_nearest\_neighbors'`. The neighbors search will be done in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Verbosity mode.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
    this.id = `SpectralClustering${crypto.randomUUID().split('-')[0]}`
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
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SpectralClustering.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import SpectralClustering
try: bridgeSpectralClustering
except NameError: bridgeSpectralClustering = {}
`

    // set up constructor params
    await this._py.ex`ctor_SpectralClustering = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'eigen_solver': ${
      this.opts['eigen_solver'] ?? undefined
    }, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_init': ${
      this.opts['n_init'] ?? undefined
    }, 'gamma': ${this.opts['gamma'] ?? undefined}, 'affinity': ${
      this.opts['affinity'] ?? undefined
    }, 'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'eigen_tol': ${
      this.opts['eigen_tol'] ?? undefined
    }, 'assign_labels': ${this.opts['assign_labels'] ?? undefined}, 'degree': ${
      this.opts['degree'] ?? undefined
    }, 'coef0': ${this.opts['coef0'] ?? undefined}, 'kernel_params': ${
      this.opts['kernel_params'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }}

ctor_SpectralClustering = {k: v for k, v in ctor_SpectralClustering.items() if v is not None}`

    await this._py
      .ex`bridgeSpectralClustering[${this.id}] = SpectralClustering(**ctor_SpectralClustering)`

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

    await this._py.ex`del bridgeSpectralClustering[${this.id}]`

    this._isDisposed = true
  }

  /**
    Perform spectral clustering from features, or affinity matrix.
   */
  async fit(opts: {
    /**
      Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed\_nearest\_neighbors`. If a sparse matrix is provided in a format other than `csr\_matrix`, `csc\_matrix`, or `coo\_matrix`, it will be converted into a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SpectralClustering must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SpectralClustering_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralClustering_fit = {k: v for k, v in pms_SpectralClustering_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralClustering_fit = bridgeSpectralClustering[${this.id}].fit(**pms_SpectralClustering_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralClustering_fit.tolist() if hasattr(res_SpectralClustering_fit, 'tolist') else res_SpectralClustering_fit`
  }

  /**
    Perform spectral clustering on `X` and return cluster labels.
   */
  async fit_predict(opts: {
    /**
      Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed\_nearest\_neighbors`. If a sparse matrix is provided in a format other than `csr\_matrix`, `csc\_matrix`, or `coo\_matrix`, it will be converted into a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralClustering must call init() before fit_predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_SpectralClustering_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SpectralClustering_fit_predict = {k: v for k, v in pms_SpectralClustering_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SpectralClustering_fit_predict = bridgeSpectralClustering[${this.id}].fit_predict(**pms_SpectralClustering_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SpectralClustering_fit_predict.tolist() if hasattr(res_SpectralClustering_fit_predict, 'tolist') else res_SpectralClustering_fit_predict`
  }

  /**
    Affinity matrix used for clustering. Available only after calling `fit`.
   */
  get affinity_matrix_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralClustering must call init() before accessing affinity_matrix_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralClustering_affinity_matrix_ = bridgeSpectralClustering[${this.id}].affinity_matrix_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralClustering_affinity_matrix_.tolist() if hasattr(attr_SpectralClustering_affinity_matrix_, 'tolist') else attr_SpectralClustering_affinity_matrix_`
    })()
  }

  /**
    Labels of each point
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralClustering must call init() before accessing labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralClustering_labels_ = bridgeSpectralClustering[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralClustering_labels_.tolist() if hasattr(attr_SpectralClustering_labels_, 'tolist') else attr_SpectralClustering_labels_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralClustering must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralClustering_n_features_in_ = bridgeSpectralClustering[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralClustering_n_features_in_.tolist() if hasattr(attr_SpectralClustering_n_features_in_, 'tolist') else attr_SpectralClustering_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SpectralClustering instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SpectralClustering must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SpectralClustering_feature_names_in_ = bridgeSpectralClustering[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SpectralClustering_feature_names_in_.tolist() if hasattr(attr_SpectralClustering_feature_names_in_, 'tolist') else attr_SpectralClustering_feature_names_in_`
    })()
  }
}
