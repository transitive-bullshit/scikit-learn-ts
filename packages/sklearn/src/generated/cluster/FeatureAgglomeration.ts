/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Agglomerate features.

  Recursively merges pair of clusters of features.

  Read more in the [User Guide](../clustering.html#hierarchical-clustering).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.FeatureAgglomeration.html)
 */
export class FeatureAgglomeration {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: FeatureAgglomerationOptions) {
    this.id = `FeatureAgglomeration${crypto.randomUUID().split('-')[0]}`
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
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'FeatureAgglomeration.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import FeatureAgglomeration
try: bridgeFeatureAgglomeration
except NameError: bridgeFeatureAgglomeration = {}
`

    // set up constructor params
    await this._py.ex`ctor_FeatureAgglomeration = {'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'affinity': ${this.opts['affinity'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'memory': ${this.opts['memory'] ?? undefined}, 'connectivity': ${
      this.opts['connectivity'] ?? undefined
    }, 'compute_full_tree': ${
      this.opts['compute_full_tree'] ?? undefined
    }, 'linkage': ${this.opts['linkage'] ?? undefined}, 'pooling_func': ${
      this.opts['pooling_func'] ?? undefined
    }, 'distance_threshold': ${
      this.opts['distance_threshold'] ?? undefined
    }, 'compute_distances': ${this.opts['compute_distances'] ?? undefined}}

ctor_FeatureAgglomeration = {k: v for k, v in ctor_FeatureAgglomeration.items() if v is not None}`

    await this._py
      .ex`bridgeFeatureAgglomeration[${this.id}] = FeatureAgglomeration(**ctor_FeatureAgglomeration)`

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

    await this._py.ex`del bridgeFeatureAgglomeration[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the hierarchical clustering on the data.
   */
  async fit(opts: FeatureAgglomerationFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('FeatureAgglomeration must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_FeatureAgglomeration_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FeatureAgglomeration_fit = {k: v for k, v in pms_FeatureAgglomeration_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_fit = bridgeFeatureAgglomeration[${this.id}].fit(**pms_FeatureAgglomeration_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_fit.tolist() if hasattr(res_FeatureAgglomeration_fit, 'tolist') else res_FeatureAgglomeration_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: FeatureAgglomerationFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_FeatureAgglomeration_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_FeatureAgglomeration_fit_transform = {k: v for k, v in pms_FeatureAgglomeration_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_fit_transform = bridgeFeatureAgglomeration[${this.id}].fit_transform(**pms_FeatureAgglomeration_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_fit_transform.tolist() if hasattr(res_FeatureAgglomeration_fit_transform, 'tolist') else res_FeatureAgglomeration_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: FeatureAgglomerationGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FeatureAgglomeration_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_FeatureAgglomeration_get_feature_names_out = {k: v for k, v in pms_FeatureAgglomeration_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_get_feature_names_out = bridgeFeatureAgglomeration[${this.id}].get_feature_names_out(**pms_FeatureAgglomeration_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_get_feature_names_out.tolist() if hasattr(res_FeatureAgglomeration_get_feature_names_out, 'tolist') else res_FeatureAgglomeration_get_feature_names_out`
  }

  /**
    Inverse the transformation and return a vector of size `n\_features`.
   */
  async inverse_transform(
    opts: FeatureAgglomerationInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FeatureAgglomeration_inverse_transform = {'Xred': np.array(${
      opts['Xred'] ?? undefined
    }) if ${opts['Xred'] !== undefined} else None}

pms_FeatureAgglomeration_inverse_transform = {k: v for k, v in pms_FeatureAgglomeration_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_inverse_transform = bridgeFeatureAgglomeration[${this.id}].inverse_transform(**pms_FeatureAgglomeration_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_inverse_transform.tolist() if hasattr(res_FeatureAgglomeration_inverse_transform, 'tolist') else res_FeatureAgglomeration_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: FeatureAgglomerationSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_FeatureAgglomeration_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_FeatureAgglomeration_set_output = {k: v for k, v in pms_FeatureAgglomeration_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_set_output = bridgeFeatureAgglomeration[${this.id}].set_output(**pms_FeatureAgglomeration_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_set_output.tolist() if hasattr(res_FeatureAgglomeration_set_output, 'tolist') else res_FeatureAgglomeration_set_output`
  }

  /**
    Transform a new matrix using the built clustering.
   */
  async transform(
    opts: FeatureAgglomerationTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_FeatureAgglomeration_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_FeatureAgglomeration_transform = {k: v for k, v in pms_FeatureAgglomeration_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureAgglomeration_transform = bridgeFeatureAgglomeration[${this.id}].transform(**pms_FeatureAgglomeration_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureAgglomeration_transform.tolist() if hasattr(res_FeatureAgglomeration_transform, 'tolist') else res_FeatureAgglomeration_transform`
  }

  /**
    The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.
   */
  get n_clusters_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing n_clusters_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_n_clusters_ = bridgeFeatureAgglomeration[${this.id}].n_clusters_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_n_clusters_.tolist() if hasattr(attr_FeatureAgglomeration_n_clusters_, 'tolist') else attr_FeatureAgglomeration_n_clusters_`
    })()
  }

  /**
    Cluster labels for each feature.
   */
  get labels_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_labels_ = bridgeFeatureAgglomeration[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_labels_.tolist() if hasattr(attr_FeatureAgglomeration_labels_, 'tolist') else attr_FeatureAgglomeration_labels_`
    })()
  }

  /**
    Number of leaves in the hierarchical tree.
   */
  get n_leaves_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing n_leaves_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_n_leaves_ = bridgeFeatureAgglomeration[${this.id}].n_leaves_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_n_leaves_.tolist() if hasattr(attr_FeatureAgglomeration_n_leaves_, 'tolist') else attr_FeatureAgglomeration_n_leaves_`
    })()
  }

  /**
    The estimated number of connected components in the graph.
   */
  get n_connected_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing n_connected_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_n_connected_components_ = bridgeFeatureAgglomeration[${this.id}].n_connected_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_n_connected_components_.tolist() if hasattr(attr_FeatureAgglomeration_n_connected_components_, 'tolist') else attr_FeatureAgglomeration_n_connected_components_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_n_features_in_ = bridgeFeatureAgglomeration[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_n_features_in_.tolist() if hasattr(attr_FeatureAgglomeration_n_features_in_, 'tolist') else attr_FeatureAgglomeration_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_feature_names_in_ = bridgeFeatureAgglomeration[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_feature_names_in_.tolist() if hasattr(attr_FeatureAgglomeration_feature_names_in_, 'tolist') else attr_FeatureAgglomeration_feature_names_in_`
    })()
  }

  /**
    The children of each non-leaf node. Values less than `n\_features` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_features` is a non-leaf node and has children `children\_\[i \- n\_features\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_features + i`.
   */
  get children_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing children_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_children_ = bridgeFeatureAgglomeration[${this.id}].children_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_children_.tolist() if hasattr(attr_FeatureAgglomeration_children_, 'tolist') else attr_FeatureAgglomeration_children_`
    })()
  }

  /**
    Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.
   */
  get distances_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This FeatureAgglomeration instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureAgglomeration must call init() before accessing distances_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureAgglomeration_distances_ = bridgeFeatureAgglomeration[${this.id}].distances_`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureAgglomeration_distances_.tolist() if hasattr(attr_FeatureAgglomeration_distances_, 'tolist') else attr_FeatureAgglomeration_distances_`
    })()
  }
}

export interface FeatureAgglomerationOptions {
  /**
    The number of clusters to find. It must be `undefined` if `distance\_threshold` is not `undefined`.

    @defaultValue `2`
   */
  n_clusters?: number

  /**
    The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix (instead of a similarity matrix) is needed as input for the fit method.

    @defaultValue `'euclidean'`
   */
  affinity?: string

  /**
    Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If set to `undefined` then “euclidean” is used. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method.
   */
  metric?: string

  /**
    Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.
   */
  memory?: string

  /**
    Connectivity matrix. Defines for each feature the neighboring features following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured.
   */
  connectivity?: ArrayLike

  /**
    Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of features. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance\_threshold` is not `undefined`. By default `compute\_full\_tree` is “auto”, which is equivalent to `true` when `distance\_threshold` is not `undefined` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `false`.

    @defaultValue `'auto'`
   */
  compute_full_tree?: 'auto' | boolean

  /**
    Which linkage criterion to use. The linkage criterion determines which distance to use between sets of features. The algorithm will merge the pairs of cluster that minimize this criterion.

    @defaultValue `'ward'`
   */
  linkage?: 'ward' | 'complete' | 'average' | 'single'

  /**
    This combines the values of agglomerated features into a single value, and should accept an array of shape \[M, N\] and the keyword argument `axis=1`, and reduce it to an array of size \[M\].
   */
  pooling_func?: any

  /**
    The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n\_clusters` must be `undefined` and `compute\_full\_tree` must be `true`.
   */
  distance_threshold?: number

  /**
    Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.

    @defaultValue `false`
   */
  compute_distances?: boolean
}

export interface FeatureAgglomerationFitOptions {
  /**
    The data.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface FeatureAgglomerationFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (`undefined` for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface FeatureAgglomerationGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.FeatureAgglomeration.fit "sklearn.cluster.FeatureAgglomeration.fit").
   */
  input_features?: any
}

export interface FeatureAgglomerationInverseTransformOptions {
  /**
    The values to be assigned to each cluster of samples.
   */
  Xred?: ArrayLike[]
}

export interface FeatureAgglomerationSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface FeatureAgglomerationTransformOptions {
  /**
    A M by N array of M observations in N dimensions or a length M array of M one-dimensional observations.
   */
  X?: ArrayLike[]
}
