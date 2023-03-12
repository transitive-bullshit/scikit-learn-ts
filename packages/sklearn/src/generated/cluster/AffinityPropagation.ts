/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Perform Affinity Propagation Clustering of data.

  Read more in the [User Guide](../clustering.html#affinity-propagation).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html
 */
export class AffinityPropagation {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: AffinityPropagationOptions) {
    this.id = `AffinityPropagation${crypto.randomUUID().split('-')[0]}`
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
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'AffinityPropagation.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cluster import AffinityPropagation
try: bridgeAffinityPropagation
except NameError: bridgeAffinityPropagation = {}
`

    // set up constructor params
    await this._py.ex`ctor_AffinityPropagation = {'damping': ${
      this.opts['damping'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'convergence_iter': ${
      this.opts['convergence_iter'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}, 'preference': np.array(${
      this.opts['preference'] ?? undefined
    }) if ${this.opts['preference'] !== undefined} else None, 'affinity': ${
      this.opts['affinity'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_AffinityPropagation = {k: v for k, v in ctor_AffinityPropagation.items() if v is not None}`

    await this._py
      .ex`bridgeAffinityPropagation[${this.id}] = AffinityPropagation(**ctor_AffinityPropagation)`

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

    await this._py.ex`del bridgeAffinityPropagation[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the clustering from features, or affinity matrix.
   */
  async fit(opts: AffinityPropagationFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AffinityPropagation must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_AffinityPropagation_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_AffinityPropagation_fit = {k: v for k, v in pms_AffinityPropagation_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AffinityPropagation_fit = bridgeAffinityPropagation[${this.id}].fit(**pms_AffinityPropagation_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AffinityPropagation_fit.tolist() if hasattr(res_AffinityPropagation_fit, 'tolist') else res_AffinityPropagation_fit`
  }

  /**
    Fit clustering from features/affinity matrix; return cluster labels.
   */
  async fit_predict(
    opts: AffinityPropagationFitPredictOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before fit_predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_AffinityPropagation_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_AffinityPropagation_fit_predict = {k: v for k, v in pms_AffinityPropagation_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AffinityPropagation_fit_predict = bridgeAffinityPropagation[${this.id}].fit_predict(**pms_AffinityPropagation_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AffinityPropagation_fit_predict.tolist() if hasattr(res_AffinityPropagation_fit_predict, 'tolist') else res_AffinityPropagation_fit_predict`
  }

  /**
    Predict the closest cluster each sample in X belongs to.
   */
  async predict(opts: AffinityPropagationPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AffinityPropagation must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_AffinityPropagation_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_AffinityPropagation_predict = {k: v for k, v in pms_AffinityPropagation_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AffinityPropagation_predict = bridgeAffinityPropagation[${this.id}].predict(**pms_AffinityPropagation_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_AffinityPropagation_predict.tolist() if hasattr(res_AffinityPropagation_predict, 'tolist') else res_AffinityPropagation_predict`
  }

  /**
    Indices of cluster centers.
   */
  get cluster_centers_indices_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing cluster_centers_indices_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_cluster_centers_indices_ = bridgeAffinityPropagation[${this.id}].cluster_centers_indices_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_cluster_centers_indices_.tolist() if hasattr(attr_AffinityPropagation_cluster_centers_indices_, 'tolist') else attr_AffinityPropagation_cluster_centers_indices_`
    })()
  }

  /**
    Cluster centers (if affinity != `precomputed`).
   */
  get cluster_centers_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing cluster_centers_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_cluster_centers_ = bridgeAffinityPropagation[${this.id}].cluster_centers_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_cluster_centers_.tolist() if hasattr(attr_AffinityPropagation_cluster_centers_, 'tolist') else attr_AffinityPropagation_cluster_centers_`
    })()
  }

  /**
    Labels of each point.
   */
  get labels_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing labels_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_labels_ = bridgeAffinityPropagation[${this.id}].labels_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_labels_.tolist() if hasattr(attr_AffinityPropagation_labels_, 'tolist') else attr_AffinityPropagation_labels_`
    })()
  }

  /**
    Stores the affinity matrix used in `fit`.
   */
  get affinity_matrix_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing affinity_matrix_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_affinity_matrix_ = bridgeAffinityPropagation[${this.id}].affinity_matrix_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_affinity_matrix_.tolist() if hasattr(attr_AffinityPropagation_affinity_matrix_, 'tolist') else attr_AffinityPropagation_affinity_matrix_`
    })()
  }

  /**
    Number of iterations taken to converge.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_n_iter_ = bridgeAffinityPropagation[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_n_iter_.tolist() if hasattr(attr_AffinityPropagation_n_iter_, 'tolist') else attr_AffinityPropagation_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_n_features_in_ = bridgeAffinityPropagation[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_n_features_in_.tolist() if hasattr(attr_AffinityPropagation_n_features_in_, 'tolist') else attr_AffinityPropagation_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AffinityPropagation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AffinityPropagation must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AffinityPropagation_feature_names_in_ = bridgeAffinityPropagation[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AffinityPropagation_feature_names_in_.tolist() if hasattr(attr_AffinityPropagation_feature_names_in_, 'tolist') else attr_AffinityPropagation_feature_names_in_`
    })()
  }
}

export interface AffinityPropagationOptions {
  /**
    Damping factor in the range `\[0.5, 1.0)` is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).

    @defaultValue `0.5`
   */
  damping?: number

  /**
    Maximum number of iterations.

    @defaultValue `200`
   */
  max_iter?: number

  /**
    Number of iterations with no change in the number of estimated clusters that stops the convergence.

    @defaultValue `15`
   */
  convergence_iter?: number

  /**
    Make a copy of input data.

    @defaultValue `true`
   */
  copy?: boolean

  /**
    Preferences for each point - points with larger values of preferences are more likely to be chosen as exemplars. The number of exemplars, ie of clusters, is influenced by the input preferences value. If the preferences are not passed as arguments, they will be set to the median of the input similarities.
   */
  preference?: ArrayLike | number

  /**
    Which affinity to use. At the moment ‘precomputed’ and `euclidean` are supported. ‘euclidean’ uses the negative squared euclidean distance between points.

    @defaultValue `'euclidean'`
   */
  affinity?: 'euclidean' | 'precomputed'

  /**
    Whether to be verbose.

    @defaultValue `false`
   */
  verbose?: boolean

  /**
    Pseudo-random number generator to control the starting state. Use an int for reproducible results across function calls. See the [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface AffinityPropagationFitOptions {
  /**
    Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface AffinityPropagationFitPredictOptions {
  /**
    Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface AffinityPropagationPredictOptions {
  /**
    New data to predict. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`.
   */
  X?: ArrayLike | SparseMatrix[]
}
