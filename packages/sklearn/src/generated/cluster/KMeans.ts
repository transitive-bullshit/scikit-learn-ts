/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  K-Means clustering.

  Read more in the [User Guide](../clustering.html#k-means).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)
 */
export class KMeans {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of clusters to form as well as the number of centroids to generate.

      @defaultValue `8`
     */
    n_clusters?: number

    /**
      Method for initialization:

      @defaultValue `'k-means++'`
     */
    init?: 'k-means++' | 'random' | ArrayLike[]

    /**
      Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of `n\_init` consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see [Clustering sparse data with k-means](../../auto_examples/text/plot_document_clustering.html#kmeans-sparse-high-dim)).

      When `n\_init='auto'`, the number of runs depends on the value of init: 10 if using `init='random'` or `init` is a callable; 1 if using `init='k-means++'` or `init` is an array-like.

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
      Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      When pre-computing distances it is more numerically accurate to center the data first. If copy\_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy\_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy\_x is `false`.

      @defaultValue `true`
     */
    copy_x?: boolean

    /**
      K-means algorithm to use. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n\_samples, n\_clusters)`.

      `"auto"` and `"full"` are deprecated and they will be removed in Scikit-Learn 1.3. They are both aliases for `"lloyd"`.

      @defaultValue `'lloyd'`
     */
    algorithm?: 'lloyd' | 'elkan' | 'auto' | 'full'
  }) {
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
  async fit(opts: {
    /**
      Training instances to cluster. It must be noted that the data will be converted to C ordering, which will cause a memory copy if the given data is not C-contiguous. If a sparse matrix is passed, a copy will be made if it’s not in CSR format.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      The weights for each observation in X. If `undefined`, all observations are assigned equal weight. `sample\_weight` is not used during initialization if `init` is a callable or a user provided array.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
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
  async fit_predict(opts: {
    /**
      New data to transform.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      The weights for each observation in X. If `undefined`, all observations are assigned equal weight.
     */
    sample_weight?: ArrayLike
  }): Promise<NDArray> {
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
  async fit_transform(opts: {
    /**
      New data to transform.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      The weights for each observation in X. If `undefined`, all observations are assigned equal weight.
     */
    sample_weight?: ArrayLike
  }): Promise<NDArray[]> {
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

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
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
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before get_metadata_routing()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_KMeans_get_metadata_routing = {k: v for k, v in pms_KMeans_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_get_metadata_routing = bridgeKMeans[${this.id}].get_metadata_routing(**pms_KMeans_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_get_metadata_routing.tolist() if hasattr(res_KMeans_get_metadata_routing, 'tolist') else res_KMeans_get_metadata_routing`
  }

  /**
    Predict the closest cluster each sample in X belongs to.

    In the vector quantization literature, `cluster\_centers\_` is called the code book and each value returned by `predict` is the index of the closest code in the code book.
   */
  async predict(opts: {
    /**
      New data to predict.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The weights for each observation in X. If `undefined`, all observations are assigned equal weight.
     */
    sample_weight?: ArrayLike
  }): Promise<NDArray> {
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
  async score(opts: {
    /**
      New data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      The weights for each observation in X. If `undefined`, all observations are assigned equal weight.
     */
    sample_weight?: ArrayLike
  }): Promise<number> {
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
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before set_fit_request()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_KMeans_set_fit_request = {k: v for k, v in pms_KMeans_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_set_fit_request = bridgeKMeans[${this.id}].set_fit_request(**pms_KMeans_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_set_fit_request.tolist() if hasattr(res_KMeans_set_fit_request, 'tolist') else res_KMeans_set_fit_request`
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
    Request metadata passed to the `predict` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_predict_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `predict`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before set_predict_request()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_set_predict_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_KMeans_set_predict_request = {k: v for k, v in pms_KMeans_set_predict_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_set_predict_request = bridgeKMeans[${this.id}].set_predict_request(**pms_KMeans_set_predict_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_set_predict_request.tolist() if hasattr(res_KMeans_set_predict_request, 'tolist') else res_KMeans_set_predict_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KMeans instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KMeans must call init() before set_score_request()')
    }

    // set up method params
    await this._py.ex`pms_KMeans_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_KMeans_set_score_request = {k: v for k, v in pms_KMeans_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KMeans_set_score_request = bridgeKMeans[${this.id}].set_score_request(**pms_KMeans_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KMeans_set_score_request.tolist() if hasattr(res_KMeans_set_score_request, 'tolist') else res_KMeans_set_score_request`
  }

  /**
    Transform X to a cluster-distance space.

    In the new space, each dimension is the distance to the cluster centers. Note that even if X is sparse, the array returned by `transform` will typically be dense.
   */
  async transform(opts: {
    /**
      New data to transform.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
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
    Coordinates of cluster centers. If the algorithm stops before fully converging (see `tol` and `max\_iter`), these will not be consistent with `labels\_`.
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
    Number of features seen during [fit](../../glossary.html#term-fit).
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
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
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
