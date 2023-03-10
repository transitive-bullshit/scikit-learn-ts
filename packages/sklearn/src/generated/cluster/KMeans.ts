/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  K-Means clustering.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html
 */
export class KMeans {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KMeansOptions) {
    this.id = `KMeans${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KMeans instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KMeans.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import KMeans
try: bridgeKMeans
except NameError: bridgeKMeans = {}
`

    // set up constructor params
    await this._py.ex`ctor_KMeans = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'n_init': ${this.opts['n_init'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'copy_x': ${
      this.opts['copy_x'] ?? undefined
    }, 'algorithm': ${this.opts['algorithm'] ?? undefined}}

ctor_KMeans = {k: v for k, v in ctor_KMeans.items() if v is not None}`

    await this._py.ex`bridgeKMeans[${this.id}] = KMeans(**ctor_KMeans)`

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

    await this._py.ex`del bridgeKMeans[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute k-means clustering.
   */
  async fit(opts: KMeansFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_KMeans_fit = {k: v for k, v in pms_KMeans_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_fit = bridgeKMeans[${this.id}].fit(**pms_KMeans_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_fit.tolist() if hasattr(res_KMeans_fit, 'tolist') else res_KMeans_fit`
  }

  /**
    Compute cluster centers and predict cluster index for each sample.

    Convenience method; equivalent to calling fit(X) followed by predict(X).
   */
  async fit_predict(opts: KMeansFitPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_KMeans_fit_predict = {k: v for k, v in pms_KMeans_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_fit_predict = bridgeKMeans[${this.id}].fit_predict(**pms_KMeans_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_fit_predict.tolist() if hasattr(res_KMeans_fit_predict, 'tolist') else res_KMeans_fit_predict`
  }

  /**
    Compute clustering and transform X to cluster-distance space.

    Equivalent to fit(X).transform(X), but more efficiently implemented.
   */
  async fit_transform(opts: KMeansFitTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_KMeans_fit_transform = {k: v for k, v in pms_KMeans_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_fit_transform = bridgeKMeans[${this.id}].fit_transform(**pms_KMeans_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_fit_transform.tolist() if hasattr(res_KMeans_fit_transform, 'tolist') else res_KMeans_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: KMeansGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_KMeans_get_feature_names_out = {k: v for k, v in pms_KMeans_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_get_feature_names_out = bridgeKMeans[${this.id}].get_feature_names_out(**pms_KMeans_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_get_feature_names_out.tolist() if hasattr(res_KMeans_get_feature_names_out, 'tolist') else res_KMeans_get_feature_names_out`
  }

  /**
    Predict the closest cluster each sample in X belongs to.

    In the vector quantization literature, cluster_centers_ is called the code book and each value returned by predict is the index of the closest code in the code book.
   */
  async predict(opts: KMeansPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_KMeans_predict = {k: v for k, v in pms_KMeans_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_predict = bridgeKMeans[${this.id}].predict(**pms_KMeans_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_predict.tolist() if hasattr(res_KMeans_predict, 'tolist') else res_KMeans_predict`
  }

  /**
    Opposite of the value of X on the K-means objective.
   */
  async score(opts: KMeansScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_KMeans_score = {k: v for k, v in pms_KMeans_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_score = bridgeKMeans[${this.id}].score(**pms_KMeans_score)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_score.tolist() if hasattr(res_KMeans_score, 'tolist') else res_KMeans_score`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: KMeansSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_KMeans_set_output = {k: v for k, v in pms_KMeans_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_set_output = bridgeKMeans[${this.id}].set_output(**pms_KMeans_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_set_output.tolist() if hasattr(res_KMeans_set_output, 'tolist') else res_KMeans_set_output`
  }

  /**
    Transform X to a cluster-distance space.

    In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by transform will typically be dense.
   */
  async transform(opts: KMeansTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KMeans_transform = {k: v for k, v in pms_KMeans_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_transform = bridgeKMeans[${this.id}].transform(**pms_KMeans_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_transform.tolist() if hasattr(res_KMeans_transform, 'tolist') else res_KMeans_transform`
  }

  /**
    Coordinates of cluster centers. If the algorithm stops before fully converging (see tol and max_iter), these will not be consistent with labels_.
   */
  get cluster_centers_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KMeans must call init() before accessing cluster_centers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KMeans_cluster_centers_ = bridgeKMeans[${this.id}].cluster_centers_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_cluster_centers_.tolist() if hasattr(attr_KMeans_cluster_centers_, 'tolist') else attr_KMeans_cluster_centers_`
    })()
  }

  /**
    Labels of each point
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_KMeans_labels_ = bridgeKMeans[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_labels_.tolist() if hasattr(attr_KMeans_labels_, 'tolist') else attr_KMeans_labels_`
    })()
  }

  /**
    Sum of squared distances of samples to their closest cluster center, weighted by the sample weights if provided.
   */
  get inertia_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before accessing inertia_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KMeans_inertia_ = bridgeKMeans[${this.id}].inertia_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_inertia_.tolist() if hasattr(attr_KMeans_inertia_, 'tolist') else attr_KMeans_inertia_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_KMeans_n_iter_ = bridgeKMeans[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_n_iter_.tolist() if hasattr(attr_KMeans_n_iter_, 'tolist') else attr_KMeans_n_iter_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KMeans_n_features_in_ = bridgeKMeans[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_n_features_in_.tolist() if hasattr(attr_KMeans_n_features_in_, 'tolist') else attr_KMeans_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KMeans must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KMeans_feature_names_in_ = bridgeKMeans[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KMeans_feature_names_in_.tolist() if hasattr(attr_KMeans_feature_names_in_, 'tolist') else attr_KMeans_feature_names_in_`
    })()
  }
}

export interface KMeansOptions {
  /**
    The number of clusters to form as well as the number of centroids to generate.

    @defaultValue `8`
   */
  n_clusters?: number

  /**
    Method for initialization:

    ‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.

    ‘random’: choose n_clusters observations (rows) at random from data for the initial centroids.

    If an array is passed, it should be of shape (n_clusters, n_features) and gives the initial centers.

    If a callable is passed, it should take arguments X, n_clusters and a random state and return an initialization.

    @defaultValue `'k-means++'`
   */
  init?: 'k-means++' | 'random' | ArrayLike[]

  /**
    Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of n_init consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see Clustering sparse data with k-means).

    When n_init='auto', the number of runs depends on the value of init: 10 if using init='random', 1 if using init='k-means++'.

    @defaultValue `10`
   */
  n_init?: 'auto' | number

  /**
    Maximum number of iterations of the k-means algorithm for a single run.

    @defaultValue `300`
   */
  max_iter?: number

  /**
    Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Verbosity mode.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See Glossary.
   */
  random_state?: number

  /**
    When pre-computing distances it is more numerically accurate to center the data first. If copy_x is True (default), then the original data is not modified. If False, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy_x is False. If the original data is sparse, but not in CSR format, a copy will be made even if copy_x is False.

    @defaultValue `true`
   */
  copy_x?: boolean

  /**
    K-means algorithm to use. The classical EM-style algorithm is "lloyd". The "elkan" variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape (n_samples, n_clusters).

    "auto" and "full" are deprecated and they will be removed in Scikit-Learn 1.3. They are both aliases for "lloyd".

    @defaultValue `'lloyd'`
   */
  algorithm?: 'lloyd' | 'elkan' | 'auto' | 'full'
}

export interface KMeansFitOptions {
  /**
    Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface KMeansFitPredictOptions {
  /**
    New data to transform.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface KMeansFitTransformOptions {
  /**
    New data to transform.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface KMeansGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface KMeansPredictOptions {
  /**
    New data to predict.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface KMeansScoreOptions {
  /**
    New data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface KMeansSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface KMeansTransformOptions {
  /**
    New data to transform.
   */
  X?: ArrayLike | SparseMatrix[]
}
