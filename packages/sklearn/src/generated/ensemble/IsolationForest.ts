/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Isolation Forest Algorithm.

  Return the anomaly score of each sample using the IsolationForest algorithm

  The IsolationForest ‘isolates’ observations by randomly selecting a feature and then randomly selecting a split value between the maximum and minimum values of the selected feature.

  Since recursive partitioning can be represented by a tree structure, the number of splittings required to isolate a sample is equivalent to the path length from the root node to the terminating node.

  This path length, averaged over a forest of such random trees, is a measure of normality and our decision function.

  Random partitioning produces noticeably shorter paths for anomalies. Hence, when a forest of random trees collectively produce shorter path lengths for particular samples, they are highly likely to be anomalies.

  Read more in the [User Guide](../outlier_detection.html#isolation-forest).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html)
 */
export class IsolationForest {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of base estimators in the ensemble.

      @defaultValue `100`
     */
    n_estimators?: number

    /**
      If int, then draw `max\_samples` samples.

      @defaultValue `'auto'`
     */
    max_samples?: 'auto' | number | number

    /**
      The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Used when fitting to define the threshold on the scores of the samples.

      @defaultValue `'auto'`
     */
    contamination?: 'auto' | number

    /**
      The number of features to draw from X to train each base estimator.

      @defaultValue `1`
     */
    max_features?: number

    /**
      If `true`, individual trees are fit on random subsets of the training data sampled with replacement. If `false`, sampling without replacement is performed.

      @defaultValue `false`
     */
    bootstrap?: boolean

    /**
      The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.IsolationForest.fit "sklearn.ensemble.IsolationForest.fit") and [`predict`](#sklearn.ensemble.IsolationForest.predict "sklearn.ensemble.IsolationForest.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Controls the pseudo-randomness of the selection of the feature and split values for each branching step and each tree in the forest.

      Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Controls the verbosity of the tree building process.

      @defaultValue `0`
     */
    verbose?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new forest. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean
  }) {
    this.id = `IsolationForest${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('IsolationForest.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import IsolationForest
try: bridgeIsolationForest
except NameError: bridgeIsolationForest = {}
`

    // set up constructor params
    await this._py.ex`ctor_IsolationForest = {'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'max_samples': ${
      this.opts['max_samples'] ?? undefined
    }, 'contamination': ${
      this.opts['contamination'] ?? undefined
    }, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'bootstrap': ${this.opts['bootstrap'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}}

ctor_IsolationForest = {k: v for k, v in ctor_IsolationForest.items() if v is not None}`

    await this._py
      .ex`bridgeIsolationForest[${this.id}] = IsolationForest(**ctor_IsolationForest)`

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

    await this._py.ex`del bridgeIsolationForest[${this.id}]`

    this._isDisposed = true
  }

  /**
    Average anomaly score of X of the base classifiers.

    The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

    The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.
   */
  async decision_function(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_IsolationForest_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_IsolationForest_decision_function = {k: v for k, v in pms_IsolationForest_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsolationForest_decision_function = bridgeIsolationForest[${this.id}].decision_function(**pms_IsolationForest_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_IsolationForest_decision_function.tolist() if hasattr(res_IsolationForest_decision_function, 'tolist') else res_IsolationForest_decision_function`
  }

  /**
    Fit estimator.
   */
  async fit(opts: {
    /**
      The input samples. Use `dtype=np.float32` for maximum efficiency. Sparse matrices are also supported, use sparse `csc\_matrix` for maximum efficiency.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Sample weights. If `undefined`, then samples are equally weighted.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IsolationForest must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_IsolationForest_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_IsolationForest_fit = {k: v for k, v in pms_IsolationForest_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsolationForest_fit = bridgeIsolationForest[${this.id}].fit(**pms_IsolationForest_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_IsolationForest_fit.tolist() if hasattr(res_IsolationForest_fit, 'tolist') else res_IsolationForest_fit`
  }

  /**
    Perform fit on X and returns labels for X.

    Returns -1 for outliers and 1 for inliers.
   */
  async fit_predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IsolationForest must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_IsolationForest_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_IsolationForest_fit_predict = {k: v for k, v in pms_IsolationForest_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsolationForest_fit_predict = bridgeIsolationForest[${this.id}].fit_predict(**pms_IsolationForest_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_IsolationForest_fit_predict.tolist() if hasattr(res_IsolationForest_fit_predict, 'tolist') else res_IsolationForest_fit_predict`
  }

  /**
    Predict if a particular sample is an outlier or not.
   */
  async predict(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IsolationForest must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_IsolationForest_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_IsolationForest_predict = {k: v for k, v in pms_IsolationForest_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsolationForest_predict = bridgeIsolationForest[${this.id}].predict(**pms_IsolationForest_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_IsolationForest_predict.tolist() if hasattr(res_IsolationForest_predict, 'tolist') else res_IsolationForest_predict`
  }

  /**
    Opposite of the anomaly score defined in the original paper.

    The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

    The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.
   */
  async score_samples(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IsolationForest must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_IsolationForest_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_IsolationForest_score_samples = {k: v for k, v in pms_IsolationForest_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IsolationForest_score_samples = bridgeIsolationForest[${this.id}].score_samples(**pms_IsolationForest_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_IsolationForest_score_samples.tolist() if hasattr(res_IsolationForest_score_samples, 'tolist') else res_IsolationForest_score_samples`
  }

  /**
    The child estimator template used to create the collection of fitted sub-estimators.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_estimator_ = bridgeIsolationForest[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_estimator_.tolist() if hasattr(attr_IsolationForest_estimator_, 'tolist') else attr_IsolationForest_estimator_`
    })()
  }

  /**
    The collection of fitted sub-estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_estimators_ = bridgeIsolationForest[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_estimators_.tolist() if hasattr(attr_IsolationForest_estimators_, 'tolist') else attr_IsolationForest_estimators_`
    })()
  }

  /**
    The subset of drawn features for each base estimator.
   */
  get estimators_features_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing estimators_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_estimators_features_ = bridgeIsolationForest[${this.id}].estimators_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_estimators_features_.tolist() if hasattr(attr_IsolationForest_estimators_features_, 'tolist') else attr_IsolationForest_estimators_features_`
    })()
  }

  /**
    The actual number of samples.
   */
  get max_samples_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing max_samples_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_max_samples_ = bridgeIsolationForest[${this.id}].max_samples_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_max_samples_.tolist() if hasattr(attr_IsolationForest_max_samples_, 'tolist') else attr_IsolationForest_max_samples_`
    })()
  }

  /**
    Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. `offset\_` is defined as follows. When the contamination parameter is set to “auto”, the offset is equal to -0.5 as the scores of inliers are close to 0 and the scores of outliers are close to -1. When a contamination parameter different than “auto” is provided, the offset is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.
   */
  get offset_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_offset_ = bridgeIsolationForest[${this.id}].offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_offset_.tolist() if hasattr(attr_IsolationForest_offset_, 'tolist') else attr_IsolationForest_offset_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_n_features_in_ = bridgeIsolationForest[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_n_features_in_.tolist() if hasattr(attr_IsolationForest_n_features_in_, 'tolist') else attr_IsolationForest_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IsolationForest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IsolationForest must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IsolationForest_feature_names_in_ = bridgeIsolationForest[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IsolationForest_feature_names_in_.tolist() if hasattr(attr_IsolationForest_feature_names_in_, 'tolist') else attr_IsolationForest_feature_names_in_`
    })()
  }
}
