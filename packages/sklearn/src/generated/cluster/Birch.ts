/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Implements the BIRCH clustering algorithm.

  It is a memory-efficient, online-learning algorithm provided as an alternative to [`MiniBatchKMeans`](sklearn.cluster.MiniBatchKMeans.html#sklearn.cluster.MiniBatchKMeans "sklearn.cluster.MiniBatchKMeans"). It constructs a tree data structure with the cluster centroids being read off the leaf. These can be either the final cluster centroids or can be provided as input to another clustering algorithm such as [`AgglomerativeClustering`](sklearn.cluster.AgglomerativeClustering.html#sklearn.cluster.AgglomerativeClustering "sklearn.cluster.AgglomerativeClustering").

  Read more in the [User Guide](../clustering.html#birch).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html)
 */
export class Birch {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The radius of the subcluster obtained by merging a new sample and the closest subcluster should be lesser than the threshold. Otherwise a new subcluster is started. Setting this value to be very low promotes splitting and vice-versa.

      @defaultValue `0.5`
     */
    threshold?: number

    /**
      Maximum number of CF subclusters in each node. If a new samples enters such that the number of subclusters exceed the branching\_factor then that node is split into two nodes with the subclusters redistributed in each. The parent subcluster of that node is removed and two new subclusters are added as parents of the 2 split nodes.

      @defaultValue `50`
     */
    branching_factor?: number

    /**
      Number of clusters after the final clustering step, which treats the subclusters from the leaves as new samples.

      @defaultValue `3`
     */
    n_clusters?: number

    /**
      Whether or not to compute labels for each fit.

      @defaultValue `true`
     */
    compute_labels?: boolean

    /**
      Whether or not to make a copy of the given data. If set to `false`, the initial data will be overwritten.

      @defaultValue `true`
     */
    copy?: boolean
  }) {
    this.id = `Birch${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Birch instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Birch.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import Birch
try: bridgeBirch
except NameError: bridgeBirch = {}
`

    // set up constructor params
    await this._py.ex`ctor_Birch = {'threshold': ${
      this.opts['threshold'] ?? undefined
    }, 'branching_factor': ${
      this.opts['branching_factor'] ?? undefined
    }, 'n_clusters': ${
      this.opts['n_clusters'] ?? undefined
    }, 'compute_labels': ${this.opts['compute_labels'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_Birch = {k: v for k, v in ctor_Birch.items() if v is not None}`

    await this._py.ex`bridgeBirch[${this.id}] = Birch(**ctor_Birch)`

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

    await this._py.ex`del bridgeBirch[${this.id}]`

    this._isDisposed = true
  }

  /**
    Build a CF Tree for the input data.
   */
  async fit(opts: {
    /**
      Input data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Birch_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_Birch_fit = {k: v for k, v in pms_Birch_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_fit = bridgeBirch[${this.id}].fit(**pms_Birch_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_fit.tolist() if hasattr(res_Birch_fit, 'tolist') else res_Birch_fit`
  }

  /**
    Perform clustering on `X` and returns cluster labels.
   */
  async fit_predict(opts: {
    /**
      Input data.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_Birch_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_Birch_fit_predict = {k: v for k, v in pms_Birch_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_fit_predict = bridgeBirch[${this.id}].fit_predict(**pms_Birch_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_fit_predict.tolist() if hasattr(res_Birch_fit_predict, 'tolist') else res_Birch_fit_predict`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: {
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
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_Birch_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_Birch_fit_transform = {k: v for k, v in pms_Birch_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_fit_transform = bridgeBirch[${this.id}].fit_transform(**pms_Birch_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_fit_transform.tolist() if hasattr(res_Birch_fit_transform, 'tolist') else res_Birch_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.cluster.Birch.fit "sklearn.cluster.Birch.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_Birch_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_Birch_get_feature_names_out = {k: v for k, v in pms_Birch_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_get_feature_names_out = bridgeBirch[${this.id}].get_feature_names_out(**pms_Birch_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_get_feature_names_out.tolist() if hasattr(res_Birch_get_feature_names_out, 'tolist') else res_Birch_get_feature_names_out`
  }

  /**
    Online learning. Prevents rebuilding of CFTree from scratch.
   */
  async partial_fit(opts: {
    /**
      Input data. If X is not provided, only the global clustering step is done.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_Birch_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_Birch_partial_fit = {k: v for k, v in pms_Birch_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_partial_fit = bridgeBirch[${this.id}].partial_fit(**pms_Birch_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_partial_fit.tolist() if hasattr(res_Birch_partial_fit, 'tolist') else res_Birch_partial_fit`
  }

  /**
    Predict data using the `centroids\_` of subclusters.

    Avoid computation of the row norms of X.
   */
  async predict(opts: {
    /**
      Input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_Birch_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Birch_predict = {k: v for k, v in pms_Birch_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_predict = bridgeBirch[${this.id}].predict(**pms_Birch_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_predict.tolist() if hasattr(res_Birch_predict, 'tolist') else res_Birch_predict`
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
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_Birch_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_Birch_set_output = {k: v for k, v in pms_Birch_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_set_output = bridgeBirch[${this.id}].set_output(**pms_Birch_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_set_output.tolist() if hasattr(res_Birch_set_output, 'tolist') else res_Birch_set_output`
  }

  /**
    Transform X into subcluster centroids dimension.

    Each dimension represents the distance from the sample point to each cluster centroid.
   */
  async transform(opts: {
    /**
      Input data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_Birch_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Birch_transform = {k: v for k, v in pms_Birch_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Birch_transform = bridgeBirch[${this.id}].transform(**pms_Birch_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Birch_transform.tolist() if hasattr(res_Birch_transform, 'tolist') else res_Birch_transform`
  }

  /**
    Root of the CFTree.
   */
  get root_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before accessing root_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Birch_root_ = bridgeBirch[${this.id}].root_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_root_.tolist() if hasattr(attr_Birch_root_, 'tolist') else attr_Birch_root_`
    })()
  }

  /**
    Start pointer to all the leaves.
   */
  get dummy_leaf_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before accessing dummy_leaf_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Birch_dummy_leaf_ = bridgeBirch[${this.id}].dummy_leaf_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_dummy_leaf_.tolist() if hasattr(attr_Birch_dummy_leaf_, 'tolist') else attr_Birch_dummy_leaf_`
    })()
  }

  /**
    Centroids of all subclusters read directly from the leaves.
   */
  get subcluster_centers_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Birch must call init() before accessing subcluster_centers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Birch_subcluster_centers_ = bridgeBirch[${this.id}].subcluster_centers_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_subcluster_centers_.tolist() if hasattr(attr_Birch_subcluster_centers_, 'tolist') else attr_Birch_subcluster_centers_`
    })()
  }

  /**
    Labels assigned to the centroids of the subclusters after they are clustered globally.
   */
  get subcluster_labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Birch must call init() before accessing subcluster_labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Birch_subcluster_labels_ = bridgeBirch[${this.id}].subcluster_labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_subcluster_labels_.tolist() if hasattr(attr_Birch_subcluster_labels_, 'tolist') else attr_Birch_subcluster_labels_`
    })()
  }

  /**
    Array of labels assigned to the input data. if partial\_fit is used instead of fit, they are assigned to the last batch of data.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before accessing labels_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Birch_labels_ = bridgeBirch[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_labels_.tolist() if hasattr(attr_Birch_labels_, 'tolist') else attr_Birch_labels_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Birch must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Birch_n_features_in_ = bridgeBirch[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_n_features_in_.tolist() if hasattr(attr_Birch_n_features_in_, 'tolist') else attr_Birch_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Birch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Birch must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Birch_feature_names_in_ = bridgeBirch[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Birch_feature_names_in_.tolist() if hasattr(attr_Birch_feature_names_in_, 'tolist') else attr_Birch_feature_names_in_`
    })()
  }
}
