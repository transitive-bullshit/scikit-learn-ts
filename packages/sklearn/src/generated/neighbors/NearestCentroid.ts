/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Nearest centroid classifier.

  Each class is represented by its centroid, with test samples classified to the class with the nearest centroid.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestCentroid.html
 */
export class NearestCentroid {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NearestCentroidOptions) {
    this.id = `NearestCentroid${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('NearestCentroid.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import NearestCentroid
try: bridgeNearestCentroid
except NameError: bridgeNearestCentroid = {}
`

    // set up constructor params
    await this._py.ex`ctor_NearestCentroid = {'metric': ${
      this.opts['metric'] ?? undefined
    }, 'shrink_threshold': ${this.opts['shrink_threshold'] ?? undefined}}

ctor_NearestCentroid = {k: v for k, v in ctor_NearestCentroid.items() if v is not None}`

    await this._py
      .ex`bridgeNearestCentroid[${this.id}] = NearestCentroid(**ctor_NearestCentroid)`

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

    await this._py.ex`del bridgeNearestCentroid[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the NearestCentroid model according to the given training data.
   */
  async fit(opts: NearestCentroidFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NearestCentroid must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_NearestCentroid_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_NearestCentroid_fit = {k: v for k, v in pms_NearestCentroid_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestCentroid_fit = bridgeNearestCentroid[${this.id}].fit(**pms_NearestCentroid_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestCentroid_fit.tolist() if hasattr(res_NearestCentroid_fit, 'tolist') else res_NearestCentroid_fit`
  }

  /**
    Perform classification on an array of test vectors X.

    The predicted class C for each sample in X is returned.
   */
  async predict(opts: NearestCentroidPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NearestCentroid must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_NearestCentroid_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NearestCentroid_predict = {k: v for k, v in pms_NearestCentroid_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestCentroid_predict = bridgeNearestCentroid[${this.id}].predict(**pms_NearestCentroid_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestCentroid_predict.tolist() if hasattr(res_NearestCentroid_predict, 'tolist') else res_NearestCentroid_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: NearestCentroidScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NearestCentroid must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_NearestCentroid_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_NearestCentroid_score = {k: v for k, v in pms_NearestCentroid_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NearestCentroid_score = bridgeNearestCentroid[${this.id}].score(**pms_NearestCentroid_score)`

    // convert the result from python to node.js
    return this
      ._py`res_NearestCentroid_score.tolist() if hasattr(res_NearestCentroid_score, 'tolist') else res_NearestCentroid_score`
  }

  /**
    Centroid of each class.
   */
  get centroids_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestCentroid must call init() before accessing centroids_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestCentroid_centroids_ = bridgeNearestCentroid[${this.id}].centroids_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestCentroid_centroids_.tolist() if hasattr(attr_NearestCentroid_centroids_, 'tolist') else attr_NearestCentroid_centroids_`
    })()
  }

  /**
    The unique classes labels.
   */
  get classes_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestCentroid must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestCentroid_classes_ = bridgeNearestCentroid[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestCentroid_classes_.tolist() if hasattr(attr_NearestCentroid_classes_, 'tolist') else attr_NearestCentroid_classes_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestCentroid must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestCentroid_n_features_in_ = bridgeNearestCentroid[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestCentroid_n_features_in_.tolist() if hasattr(attr_NearestCentroid_n_features_in_, 'tolist') else attr_NearestCentroid_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NearestCentroid instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NearestCentroid must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NearestCentroid_feature_names_in_ = bridgeNearestCentroid[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NearestCentroid_feature_names_in_.tolist() if hasattr(attr_NearestCentroid_feature_names_in_, 'tolist') else attr_NearestCentroid_feature_names_in_`
    })()
  }
}

export interface NearestCentroidOptions {
  /**
    Metric to use for distance computation. See the documentation of scipy.spatial.distance and the metrics listed in distance_metrics for valid metric values. Note that “wminkowski”, “seuclidean” and “mahalanobis” are not supported.

    The centroids for the samples corresponding to each class is the point from which the sum of the distances (according to the metric) of all samples that belong to that particular class are minimized. If the "manhattan" metric is provided, this centroid is the median and for all other metrics, the centroid is now set to be the mean.

    @defaultValue `'euclidean'`
   */
  metric?: string

  /**
    Threshold for shrinking centroids to remove features.
   */
  shrink_threshold?: number
}

export interface NearestCentroidFitOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features. Note that centroid shrinking cannot be used with sparse matrices.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike
}

export interface NearestCentroidPredictOptions {
  /**
    Test samples.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface NearestCentroidScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
