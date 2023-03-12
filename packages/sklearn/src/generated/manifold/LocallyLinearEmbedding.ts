/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Locally Linear Embedding.

  Read more in the [User Guide](../manifold.html#locally-linear-embedding).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)
 */
export class LocallyLinearEmbedding {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LocallyLinearEmbeddingOptions) {
    this.id = `LocallyLinearEmbedding${crypto.randomUUID().split('-')[0]}`
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
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LocallyLinearEmbedding.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.manifold import LocallyLinearEmbedding
try: bridgeLocallyLinearEmbedding
except NameError: bridgeLocallyLinearEmbedding = {}
`

    // set up constructor params
    await this._py.ex`ctor_LocallyLinearEmbedding = {'n_neighbors': ${
      this.opts['n_neighbors'] ?? undefined
    }, 'n_components': ${this.opts['n_components'] ?? undefined}, 'reg': ${
      this.opts['reg'] ?? undefined
    }, 'eigen_solver': ${this.opts['eigen_solver'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'method': ${
      this.opts['method'] ?? undefined
    }, 'hessian_tol': ${
      this.opts['hessian_tol'] ?? undefined
    }, 'modified_tol': ${
      this.opts['modified_tol'] ?? undefined
    }, 'neighbors_algorithm': ${
      this.opts['neighbors_algorithm'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_LocallyLinearEmbedding = {k: v for k, v in ctor_LocallyLinearEmbedding.items() if v is not None}`

    await this._py
      .ex`bridgeLocallyLinearEmbedding[${this.id}] = LocallyLinearEmbedding(**ctor_LocallyLinearEmbedding)`

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

    await this._py.ex`del bridgeLocallyLinearEmbedding[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the embedding vectors for data X.
   */
  async fit(opts: LocallyLinearEmbeddingFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LocallyLinearEmbedding must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LocallyLinearEmbedding_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LocallyLinearEmbedding_fit = {k: v for k, v in pms_LocallyLinearEmbedding_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocallyLinearEmbedding_fit = bridgeLocallyLinearEmbedding[${this.id}].fit(**pms_LocallyLinearEmbedding_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LocallyLinearEmbedding_fit.tolist() if hasattr(res_LocallyLinearEmbedding_fit, 'tolist') else res_LocallyLinearEmbedding_fit`
  }

  /**
    Compute the embedding vectors for data X and transform X.
   */
  async fit_transform(
    opts: LocallyLinearEmbeddingFitTransformOptions
  ): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LocallyLinearEmbedding_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LocallyLinearEmbedding_fit_transform = {k: v for k, v in pms_LocallyLinearEmbedding_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocallyLinearEmbedding_fit_transform = bridgeLocallyLinearEmbedding[${this.id}].fit_transform(**pms_LocallyLinearEmbedding_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LocallyLinearEmbedding_fit_transform.tolist() if hasattr(res_LocallyLinearEmbedding_fit_transform, 'tolist') else res_LocallyLinearEmbedding_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: LocallyLinearEmbeddingGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LocallyLinearEmbedding_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_LocallyLinearEmbedding_get_feature_names_out = {k: v for k, v in pms_LocallyLinearEmbedding_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocallyLinearEmbedding_get_feature_names_out = bridgeLocallyLinearEmbedding[${this.id}].get_feature_names_out(**pms_LocallyLinearEmbedding_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_LocallyLinearEmbedding_get_feature_names_out.tolist() if hasattr(res_LocallyLinearEmbedding_get_feature_names_out, 'tolist') else res_LocallyLinearEmbedding_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: LocallyLinearEmbeddingSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_LocallyLinearEmbedding_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_LocallyLinearEmbedding_set_output = {k: v for k, v in pms_LocallyLinearEmbedding_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocallyLinearEmbedding_set_output = bridgeLocallyLinearEmbedding[${this.id}].set_output(**pms_LocallyLinearEmbedding_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_LocallyLinearEmbedding_set_output.tolist() if hasattr(res_LocallyLinearEmbedding_set_output, 'tolist') else res_LocallyLinearEmbedding_set_output`
  }

  /**
    Transform new points into embedding space.
   */
  async transform(
    opts: LocallyLinearEmbeddingTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_LocallyLinearEmbedding_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LocallyLinearEmbedding_transform = {k: v for k, v in pms_LocallyLinearEmbedding_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LocallyLinearEmbedding_transform = bridgeLocallyLinearEmbedding[${this.id}].transform(**pms_LocallyLinearEmbedding_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LocallyLinearEmbedding_transform.tolist() if hasattr(res_LocallyLinearEmbedding_transform, 'tolist') else res_LocallyLinearEmbedding_transform`
  }

  /**
    Stores the embedding vectors
   */
  get embedding_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before accessing embedding_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocallyLinearEmbedding_embedding_ = bridgeLocallyLinearEmbedding[${this.id}].embedding_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocallyLinearEmbedding_embedding_.tolist() if hasattr(attr_LocallyLinearEmbedding_embedding_, 'tolist') else attr_LocallyLinearEmbedding_embedding_`
    })()
  }

  /**
    Reconstruction error associated with `embedding\_`
   */
  get reconstruction_error_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before accessing reconstruction_error_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocallyLinearEmbedding_reconstruction_error_ = bridgeLocallyLinearEmbedding[${this.id}].reconstruction_error_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocallyLinearEmbedding_reconstruction_error_.tolist() if hasattr(attr_LocallyLinearEmbedding_reconstruction_error_, 'tolist') else attr_LocallyLinearEmbedding_reconstruction_error_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocallyLinearEmbedding_n_features_in_ = bridgeLocallyLinearEmbedding[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocallyLinearEmbedding_n_features_in_.tolist() if hasattr(attr_LocallyLinearEmbedding_n_features_in_, 'tolist') else attr_LocallyLinearEmbedding_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocallyLinearEmbedding_feature_names_in_ = bridgeLocallyLinearEmbedding[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocallyLinearEmbedding_feature_names_in_.tolist() if hasattr(attr_LocallyLinearEmbedding_feature_names_in_, 'tolist') else attr_LocallyLinearEmbedding_feature_names_in_`
    })()
  }

  /**
    Stores nearest neighbors instance, including BallTree or KDtree if applicable.
   */
  get nbrs_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LocallyLinearEmbedding instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LocallyLinearEmbedding must call init() before accessing nbrs_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LocallyLinearEmbedding_nbrs_ = bridgeLocallyLinearEmbedding[${this.id}].nbrs_`

      // convert the result from python to node.js
      return this
        ._py`attr_LocallyLinearEmbedding_nbrs_.tolist() if hasattr(attr_LocallyLinearEmbedding_nbrs_, 'tolist') else attr_LocallyLinearEmbedding_nbrs_`
    })()
  }
}

export interface LocallyLinearEmbeddingOptions {
  /**
    Number of neighbors to consider for each point.

    @defaultValue `5`
   */
  n_neighbors?: number

  /**
    Number of coordinates for the manifold.

    @defaultValue `2`
   */
  n_components?: number

  /**
    Regularization constant, multiplies the trace of the local covariance matrix of the distances.

    @defaultValue `0.001`
   */
  reg?: number

  /**
    The solver used to compute the eigenvectors. The available options are:

    @defaultValue `'auto'`
   */
  eigen_solver?: 'auto' | 'arpack' | 'dense'

  /**
    Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.

    @defaultValue `0.000001`
   */
  tol?: number

  /**
    Maximum number of iterations for the arpack solver. Not used if eigen\_solver==’dense’.

    @defaultValue `100`
   */
  max_iter?: number

  /**
    `standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](#r62e36dd1b056-1)

    @defaultValue `'standard'`
   */
  method?: 'standard' | 'hessian' | 'modified' | 'ltsa'

  /**
    Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.

    @defaultValue `0.0001`
   */
  hessian_tol?: number

  /**
    Tolerance for modified LLE method. Only used if `method \== 'modified'`.

    @defaultValue `1e-12`
   */
  modified_tol?: number

  /**
    Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.

    @defaultValue `'auto'`
   */
  neighbors_algorithm?: 'auto' | 'brute' | 'kd_tree' | 'ball_tree'

  /**
    Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface LocallyLinearEmbeddingFitOptions {
  /**
    Training set.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface LocallyLinearEmbeddingFitTransformOptions {
  /**
    Training set.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface LocallyLinearEmbeddingGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.manifold.LocallyLinearEmbedding.fit "sklearn.manifold.LocallyLinearEmbedding.fit").
   */
  input_features?: any
}

export interface LocallyLinearEmbeddingSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface LocallyLinearEmbeddingTransformOptions {
  /**
    Training set.
   */
  X?: ArrayLike[]
}
