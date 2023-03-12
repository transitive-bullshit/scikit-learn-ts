/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mini-Batch K-Means clustering.

  Read more in the [User Guide](../clustering.html#mini-batch-kmeans).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MiniBatchKMeans.html
 */
export class MiniBatchKMeans {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MiniBatchKMeansOptions) {
    this.id = `MiniBatchKMeans${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MiniBatchKMeans.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import MiniBatchKMeans
try: bridgeMiniBatchKMeans
except NameError: bridgeMiniBatchKMeans = {}
`

    // set up constructor params
    await this._py.ex`ctor_MiniBatchKMeans = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'batch_size': ${this.opts['batch_size'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'compute_labels': ${
      this.opts['compute_labels'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_no_improvement': ${
      this.opts['max_no_improvement'] ?? undefined
    }, 'init_size': ${this.opts['init_size'] ?? undefined}, 'n_init': ${
      this.opts['n_init'] ?? undefined
    }, 'reassignment_ratio': ${this.opts['reassignment_ratio'] ?? undefined}}

ctor_MiniBatchKMeans = {k: v for k, v in ctor_MiniBatchKMeans.items() if v is not None}`

    await this._py
      .ex`bridgeMiniBatchKMeans[${this.id}] = MiniBatchKMeans(**ctor_MiniBatchKMeans)`

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

    await this._py.ex`del bridgeMiniBatchKMeans[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the centroids on X by chunking it into mini-batches.
   */
  async fit(opts: MiniBatchKMeansFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_MiniBatchKMeans_fit = {k: v for k, v in pms_MiniBatchKMeans_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_fit = bridgeMiniBatchKMeans[${this.id}].fit(**pms_MiniBatchKMeans_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_fit.tolist() if hasattr(res_MiniBatchKMeans_fit, 'tolist') else res_MiniBatchKMeans_fit`
  }

  /**
    Compute cluster centers and predict cluster index for each sample.

    Convenience method; equivalent to calling fit(X) followed by predict(X).
   */
  async fit_predict(opts: MiniBatchKMeansFitPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_MiniBatchKMeans_fit_predict = {k: v for k, v in pms_MiniBatchKMeans_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_fit_predict = bridgeMiniBatchKMeans[${this.id}].fit_predict(**pms_MiniBatchKMeans_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_fit_predict.tolist() if hasattr(res_MiniBatchKMeans_fit_predict, 'tolist') else res_MiniBatchKMeans_fit_predict`
  }

  /**
    Compute clustering and transform X to cluster-distance space.

    Equivalent to fit(X).transform(X), but more efficiently implemented.
   */
  async fit_transform(
    opts: MiniBatchKMeansFitTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_MiniBatchKMeans_fit_transform = {k: v for k, v in pms_MiniBatchKMeans_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_fit_transform = bridgeMiniBatchKMeans[${this.id}].fit_transform(**pms_MiniBatchKMeans_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_fit_transform.tolist() if hasattr(res_MiniBatchKMeans_fit_transform, 'tolist') else res_MiniBatchKMeans_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: MiniBatchKMeansGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchKMeans_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MiniBatchKMeans_get_feature_names_out = {k: v for k, v in pms_MiniBatchKMeans_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_get_feature_names_out = bridgeMiniBatchKMeans[${this.id}].get_feature_names_out(**pms_MiniBatchKMeans_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_get_feature_names_out.tolist() if hasattr(res_MiniBatchKMeans_get_feature_names_out, 'tolist') else res_MiniBatchKMeans_get_feature_names_out`
  }

  /**
    Update k means estimate on a single mini-batch X.
   */
  async partial_fit(opts: MiniBatchKMeansPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_MiniBatchKMeans_partial_fit = {k: v for k, v in pms_MiniBatchKMeans_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_partial_fit = bridgeMiniBatchKMeans[${this.id}].partial_fit(**pms_MiniBatchKMeans_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_partial_fit.tolist() if hasattr(res_MiniBatchKMeans_partial_fit, 'tolist') else res_MiniBatchKMeans_partial_fit`
  }

  /**
    Predict the closest cluster each sample in X belongs to.

    In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.
   */
  async predict(opts: MiniBatchKMeansPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MiniBatchKMeans_predict = {k: v for k, v in pms_MiniBatchKMeans_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_predict = bridgeMiniBatchKMeans[${this.id}].predict(**pms_MiniBatchKMeans_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_predict.tolist() if hasattr(res_MiniBatchKMeans_predict, 'tolist') else res_MiniBatchKMeans_predict`
  }

  /**
    Opposite of the value of X on the K-means objective.
   */
  async score(opts: MiniBatchKMeansScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_MiniBatchKMeans_score = {k: v for k, v in pms_MiniBatchKMeans_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_score = bridgeMiniBatchKMeans[${this.id}].score(**pms_MiniBatchKMeans_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_score.tolist() if hasattr(res_MiniBatchKMeans_score, 'tolist') else res_MiniBatchKMeans_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: MiniBatchKMeansSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MiniBatchKMeans_set_output = {k: v for k, v in pms_MiniBatchKMeans_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_set_output = bridgeMiniBatchKMeans[${this.id}].set_output(**pms_MiniBatchKMeans_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_set_output.tolist() if hasattr(res_MiniBatchKMeans_set_output, 'tolist') else res_MiniBatchKMeans_set_output`
  }

  /**
    Transform X to a cluster-distance space.

    In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.
   */
  async transform(opts: MiniBatchKMeansTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchKMeans must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchKMeans_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MiniBatchKMeans_transform = {k: v for k, v in pms_MiniBatchKMeans_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchKMeans_transform = bridgeMiniBatchKMeans[${this.id}].transform(**pms_MiniBatchKMeans_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchKMeans_transform.tolist() if hasattr(res_MiniBatchKMeans_transform, 'tolist') else res_MiniBatchKMeans_transform`
  }

  /**
    Coordinates of cluster centers.
   */
  get cluster_centers_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing cluster_centers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_cluster_centers_ = bridgeMiniBatchKMeans[${this.id}].cluster_centers_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_cluster_centers_.tolist() if hasattr(attr_MiniBatchKMeans_cluster_centers_, 'tolist') else attr_MiniBatchKMeans_cluster_centers_`
    })()
  }

  /**
    Labels of each point (if compute\_labels is set to True).
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_labels_ = bridgeMiniBatchKMeans[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_labels_.tolist() if hasattr(attr_MiniBatchKMeans_labels_, 'tolist') else attr_MiniBatchKMeans_labels_`
    })()
  }

  /**
    The value of the inertia criterion associated with the chosen partition if compute\_labels is set to True. If compute\_labels is set to False, it’s an approximation of the inertia based on an exponentially weighted average of the batch inertiae. The inertia is defined as the sum of square distances of samples to their cluster center, weighted by the sample weights if provided.
   */
  get inertia_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing inertia_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_inertia_ = bridgeMiniBatchKMeans[${this.id}].inertia_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_inertia_.tolist() if hasattr(attr_MiniBatchKMeans_inertia_, 'tolist') else attr_MiniBatchKMeans_inertia_`
    })()
  }

  /**
    Number of iterations over the full dataset.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_n_iter_ = bridgeMiniBatchKMeans[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_n_iter_.tolist() if hasattr(attr_MiniBatchKMeans_n_iter_, 'tolist') else attr_MiniBatchKMeans_n_iter_`
    })()
  }

  /**
    Number of minibatches processed.
   */
  get n_steps_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing n_steps_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_n_steps_ = bridgeMiniBatchKMeans[${this.id}].n_steps_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_n_steps_.tolist() if hasattr(attr_MiniBatchKMeans_n_steps_, 'tolist') else attr_MiniBatchKMeans_n_steps_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_n_features_in_ = bridgeMiniBatchKMeans[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_n_features_in_.tolist() if hasattr(attr_MiniBatchKMeans_n_features_in_, 'tolist') else attr_MiniBatchKMeans_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchKMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchKMeans must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchKMeans_feature_names_in_ = bridgeMiniBatchKMeans[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchKMeans_feature_names_in_.tolist() if hasattr(attr_MiniBatchKMeans_feature_names_in_, 'tolist') else attr_MiniBatchKMeans_feature_names_in_`
    })()
  }
}

export interface MiniBatchKMeansOptions {
  /**
    The number of clusters to form as well as the number of centroids to generate.

    @defaultValue `8`
   */
  n_clusters?: number

  /**
    Method for initialization:

    ‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.

    ‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.

    If an array is passed, it should be of shape (n\_clusters, n\_features) and gives the initial centers.

    If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.

    @defaultValue `'k-means++'`
   */
  init?: 'k-means++' | 'random' | ArrayLike[]

  /**
    Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.

    @defaultValue `100`
   */
  max_iter?: number

  /**
    Size of the mini batches. For faster computations, you can set the `batch\_size` greater than 256 \* number of cores to enable parallelism on all cores.

    @defaultValue `1024`
   */
  batch_size?: number

  /**
    Verbosity mode.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Compute label assignment and inertia for the complete dataset once the minibatch optimization has converged in fit.

    @defaultValue `true`
   */
  compute_labels?: boolean

  /**
    Determines random number generation for centroid initialization and random reassignment. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    Control early stopping based on the relative center changes as measured by a smoothed, variance-normalized of the mean center squared position changes. This early stopping heuristics is closer to the one used for the batch variant of the algorithms but induces a slight computational and memory overhead over the inertia heuristic.

    To disable convergence detection based on normalized center change, set tol to 0.0 (default).

    @defaultValue `0`
   */
  tol?: number

  /**
    Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed inertia.

    To disable convergence detection based on inertia, set max\_no\_improvement to None.

    @defaultValue `10`
   */
  max_no_improvement?: number

  /**
    Number of samples to randomly sample for speeding up the initialization (sometimes at the expense of accuracy): the only algorithm is initialized by running a batch KMeans on a random subset of the data. This needs to be larger than n\_clusters.

    If `None`, the heuristic is `init\_size \= 3 \* batch\_size` if `3 \* batch\_size < n\_clusters`, else `init\_size \= 3 \* n\_clusters`.
   */
  init_size?: number

  /**
    Number of random initializations that are tried. In contrast to KMeans, the algorithm is only run once, using the best of the `n\_init` initializations as measured by inertia. Several runs are recommended for sparse high-dimensional problems (see [Clustering sparse data with k-means](../../auto_examples/text/plot_document_clustering.html#kmeans-sparse-high-dim)).

    When `n\_init='auto'`, the number of runs depends on the value of init: 3 if using `init='random'`, 1 if using `init='k-means++'`.

    @defaultValue `3`
   */
  n_init?: 'auto' | number

  /**
    Control the fraction of the maximum number of counts for a center to be reassigned. A higher value means that low count centers are more easily reassigned, which means that the model will take longer to converge, but should converge in a better clustering. However, too high a value may cause convergence issues, especially with a small batch size.

    @defaultValue `0.01`
   */
  reassignment_ratio?: number
}

export interface MiniBatchKMeansFitOptions {
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

export interface MiniBatchKMeansFitPredictOptions {
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

export interface MiniBatchKMeansFitTransformOptions {
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

export interface MiniBatchKMeansGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.MiniBatchKMeans.fit "sklearn.cluster.MiniBatchKMeans.fit").
   */
  input_features?: any
}

export interface MiniBatchKMeansPartialFitOptions {
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

export interface MiniBatchKMeansPredictOptions {
  /**
    New data to predict.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The weights for each observation in X. If None, all observations are assigned equal weight.
   */
  sample_weight?: ArrayLike
}

export interface MiniBatchKMeansScoreOptions {
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

export interface MiniBatchKMeansSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface MiniBatchKMeansTransformOptions {
  /**
    New data to transform.
   */
  X?: ArrayLike | SparseMatrix[]
}
