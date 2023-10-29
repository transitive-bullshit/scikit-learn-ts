/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Isomap Embedding.

  Non-linear dimensionality reduction through Isometric Mapping

  Read more in the [User Guide](../manifold.html#isomap).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)
 */
export class Isomap {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of neighbors to consider for each point. If `n\_neighbors` is an int, then `radius` must be `undefined`.

      @defaultValue `5`
     */
    n_neighbors?: number

    /**
      Limiting distance of neighbors to return. If `radius` is a float, then `n\_neighbors` must be set to `undefined`.
     */
    radius?: number

    /**
      Number of coordinates for the manifold.

      @defaultValue `2`
     */
    n_components?: number

    /**
      ‘auto’ : Attempt to choose the most efficient solver for the given problem.

      ‘arpack’ : Use Arnoldi decomposition to find the eigenvalues and eigenvectors.

      ‘dense’ : Use a direct solver (i.e. LAPACK) for the eigenvalue decomposition.

      @defaultValue `'auto'`
     */
    eigen_solver?: 'auto' | 'arpack' | 'dense'

    /**
      Convergence tolerance passed to arpack or lobpcg. not used if eigen\_solver == ‘dense’.

      @defaultValue `0`
     */
    tol?: number

    /**
      Maximum number of iterations for the arpack solver. not used if eigen\_solver == ‘dense’.
     */
    max_iter?: number

    /**
      Method to use in finding shortest path.

      ‘auto’ : attempt to choose the best algorithm automatically.

      ‘FW’ : Floyd-Warshall algorithm.

      ‘D’ : Dijkstra’s algorithm.

      @defaultValue `'auto'`
     */
    path_method?: 'auto' | 'FW' | 'D'

    /**
      Algorithm to use for nearest neighbors search, passed to neighbors.NearestNeighbors instance.

      @defaultValue `'auto'`
     */
    neighbors_algorithm?: 'auto' | 'brute' | 'kd_tree' | 'ball_tree'

    /**
      The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [Glossary](../../glossary.html#term-sparse-graph).

      @defaultValue `'minkowski'`
     */
    metric?: any

    /**
      Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

      @defaultValue `2`
     */
    p?: number

    /**
      Additional keyword arguments for the metric function.
     */
    metric_params?: any
  }) {
    this.id = `Isomap${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Isomap instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Isomap.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.manifold import Isomap
try: bridgeIsomap
except NameError: bridgeIsomap = {}
`

    // set up constructor params
    await this._py.ex`ctor_Isomap = {'n_neighbors': ${
      this.opts['n_neighbors'] ?? undefined
    }, 'radius': ${this.opts['radius'] ?? undefined}, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'eigen_solver': ${this.opts['eigen_solver'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'path_method': ${
      this.opts['path_method'] ?? undefined
    }, 'neighbors_algorithm': ${
      this.opts['neighbors_algorithm'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'p': ${this.opts['p'] ?? undefined}, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }}

ctor_Isomap = {k: v for k, v in ctor_Isomap.items() if v is not None}`

    await this._py.ex`bridgeIsomap[${this.id}] = Isomap(**ctor_Isomap)`

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

    await this._py.ex`del bridgeIsomap[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the embedding vectors for data X.
   */
  async fit(opts: {
    /**
      Sample data, shape = (n\_samples, n\_features), in the form of a numpy array, sparse matrix, precomputed tree, or NearestNeighbors object.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_fit = {'X': ${opts['X'] ?? undefined}, 'y': ${
      opts['y'] ?? undefined
    }}

pms_Isomap_fit = {k: v for k, v in pms_Isomap_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_fit = bridgeIsomap[${this.id}].fit(**pms_Isomap_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_fit.tolist() if hasattr(res_Isomap_fit, 'tolist') else res_Isomap_fit`
  }

  /**
    Fit the model from data in X and transform X.
   */
  async fit_transform(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_fit_transform = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_Isomap_fit_transform = {k: v for k, v in pms_Isomap_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_fit_transform = bridgeIsomap[${this.id}].fit_transform(**pms_Isomap_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_fit_transform.tolist() if hasattr(res_Isomap_fit_transform, 'tolist') else res_Isomap_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_Isomap_get_feature_names_out = {k: v for k, v in pms_Isomap_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_get_feature_names_out = bridgeIsomap[${this.id}].get_feature_names_out(**pms_Isomap_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_get_feature_names_out.tolist() if hasattr(res_Isomap_get_feature_names_out, 'tolist') else res_Isomap_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_Isomap_get_metadata_routing = {k: v for k, v in pms_Isomap_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_get_metadata_routing = bridgeIsomap[${this.id}].get_metadata_routing(**pms_Isomap_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_get_metadata_routing.tolist() if hasattr(res_Isomap_get_metadata_routing, 'tolist') else res_Isomap_get_metadata_routing`
  }

  /**
    Compute the reconstruction error for the embedding.
   */
  async reconstruction_error(opts: {
    /**
      Reconstruction error.
     */
    reconstruction_error?: number
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before reconstruction_error()')
    }

    // set up method params
    await this._py
      .ex`pms_Isomap_reconstruction_error = {'reconstruction_error': ${
      opts['reconstruction_error'] ?? undefined
    }}

pms_Isomap_reconstruction_error = {k: v for k, v in pms_Isomap_reconstruction_error.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_reconstruction_error = bridgeIsomap[${this.id}].reconstruction_error(**pms_Isomap_reconstruction_error)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_reconstruction_error.tolist() if hasattr(res_Isomap_reconstruction_error, 'tolist') else res_Isomap_reconstruction_error`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_Isomap_set_output = {k: v for k, v in pms_Isomap_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_set_output = bridgeIsomap[${this.id}].set_output(**pms_Isomap_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_set_output.tolist() if hasattr(res_Isomap_set_output, 'tolist') else res_Isomap_set_output`
  }

  /**
    Transform X.

    This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n\_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.
   */
  async transform(opts: {
    /**
      If neighbors\_algorithm=’precomputed’, X is assumed to be a distance matrix or a sparse graph of shape (n\_queries, n\_samples\_fit).
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_Isomap_transform = {'X': ${opts['X'] ?? undefined}}

pms_Isomap_transform = {k: v for k, v in pms_Isomap_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Isomap_transform = bridgeIsomap[${this.id}].transform(**pms_Isomap_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Isomap_transform.tolist() if hasattr(res_Isomap_transform, 'tolist') else res_Isomap_transform`
  }

  /**
    Stores the embedding vectors.
   */
  get embedding_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before accessing embedding_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Isomap_embedding_ = bridgeIsomap[${this.id}].embedding_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_embedding_.tolist() if hasattr(attr_Isomap_embedding_, 'tolist') else attr_Isomap_embedding_`
    })()
  }

  /**
    [`KernelPCA`](sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.
   */
  get kernel_pca_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before accessing kernel_pca_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Isomap_kernel_pca_ = bridgeIsomap[${this.id}].kernel_pca_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_kernel_pca_.tolist() if hasattr(attr_Isomap_kernel_pca_, 'tolist') else attr_Isomap_kernel_pca_`
    })()
  }

  /**
    Stores nearest neighbors instance, including BallTree or KDtree if applicable.
   */
  get nbrs_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before accessing nbrs_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Isomap_nbrs_ = bridgeIsomap[${this.id}].nbrs_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_nbrs_.tolist() if hasattr(attr_Isomap_nbrs_, 'tolist') else attr_Isomap_nbrs_`
    })()
  }

  /**
    Stores the geodesic distance matrix of training data.
   */
  get dist_matrix_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before accessing dist_matrix_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Isomap_dist_matrix_ = bridgeIsomap[${this.id}].dist_matrix_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_dist_matrix_.tolist() if hasattr(attr_Isomap_dist_matrix_, 'tolist') else attr_Isomap_dist_matrix_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Isomap must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Isomap_n_features_in_ = bridgeIsomap[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_n_features_in_.tolist() if hasattr(attr_Isomap_n_features_in_, 'tolist') else attr_Isomap_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Isomap instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Isomap must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Isomap_feature_names_in_ = bridgeIsomap[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Isomap_feature_names_in_.tolist() if hasattr(attr_Isomap_feature_names_in_, 'tolist') else attr_Isomap_feature_names_in_`
    })()
  }
}
