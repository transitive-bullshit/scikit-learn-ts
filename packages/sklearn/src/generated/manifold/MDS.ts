/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multidimensional scaling.

  Read more in the [User Guide](../manifold.html#multidimensional-scaling).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.MDS.html)
 */
export class MDS {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of dimensions in which to immerse the dissimilarities.

      @defaultValue `2`
     */
    n_components?: number

    /**
      If `true`, perform metric MDS; otherwise, perform nonmetric MDS. When `false` (i.e. non-metric MDS), dissimilarities with 0 are considered as missing values.

      @defaultValue `true`
     */
    metric?: boolean

    /**
      Number of times the SMACOF algorithm will be run with different initializations. The final results will be the best output of the runs, determined by the run with the smallest final stress.

      @defaultValue `4`
     */
    n_init?: number

    /**
      Maximum number of iterations of the SMACOF algorithm for a single run.

      @defaultValue `300`
     */
    max_iter?: number

    /**
      Level of verbosity.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Relative tolerance with respect to stress at which to declare convergence. The value of `eps` should be tuned separately depending on whether or not `normalized\_stress` is being used.

      @defaultValue `0.001`
     */
    eps?: number

    /**
      The number of jobs to use for the computation. If multiple initializations are used (`n\_init`), each run of the algorithm is computed in parallel.

      `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Determines the random number generator used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Dissimilarity measure to use:

      @defaultValue `'euclidean'`
     */
    dissimilarity?: 'euclidean' | 'precomputed'

    /**
      Whether use and return normed stress value (Stress-1) instead of raw stress calculated by default. Only supported in non-metric MDS.
     */
    normalized_stress?: boolean
  }) {
    this.id = `MDS${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MDS instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MDS.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.manifold import MDS
try: bridgeMDS
except NameError: bridgeMDS = {}
`

    // set up constructor params
    await this._py.ex`ctor_MDS = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'n_init': ${
      this.opts['n_init'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'eps': ${this.opts['eps'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'dissimilarity': ${
      this.opts['dissimilarity'] ?? undefined
    }, 'normalized_stress': ${this.opts['normalized_stress'] ?? undefined}}

ctor_MDS = {k: v for k, v in ctor_MDS.items() if v is not None}`

    await this._py.ex`bridgeMDS[${this.id}] = MDS(**ctor_MDS)`

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

    await this._py.ex`del bridgeMDS[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the position of the points in the embedding space.
   */
  async fit(opts: {
    /**
      Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array.
     */
    init?: NDArray[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MDS_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'init': np.array(${opts['init'] ?? undefined}) if ${
      opts['init'] !== undefined
    } else None}

pms_MDS_fit = {k: v for k, v in pms_MDS_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_MDS_fit = bridgeMDS[${this.id}].fit(**pms_MDS_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MDS_fit.tolist() if hasattr(res_MDS_fit, 'tolist') else res_MDS_fit`
  }

  /**
    Fit the data from `X`, and returns the embedded coordinates.
   */
  async fit_transform(opts: {
    /**
      Input data. If `dissimilarity=='precomputed'`, the input should be the dissimilarity matrix.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Starting configuration of the embedding to initialize the SMACOF algorithm. By default, the algorithm is initialized with a randomly chosen array.
     */
    init?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_MDS_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'init': np.array(${opts['init'] ?? undefined}) if ${
      opts['init'] !== undefined
    } else None}

pms_MDS_fit_transform = {k: v for k, v in pms_MDS_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MDS_fit_transform = bridgeMDS[${this.id}].fit_transform(**pms_MDS_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MDS_fit_transform.tolist() if hasattr(res_MDS_fit_transform, 'tolist') else res_MDS_fit_transform`
  }

  /**
    Stores the position of the dataset in the embedding space.
   */
  get embedding_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before accessing embedding_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_MDS_embedding_ = bridgeMDS[${this.id}].embedding_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_embedding_.tolist() if hasattr(attr_MDS_embedding_, 'tolist') else attr_MDS_embedding_`
    })()
  }

  /**
    The final value of the stress (sum of squared distance of the disparities and the distances for all constrained points). If `normalized\_stress=True`, and `metric=False` returns Stress-1. A value of 0 indicates “perfect” fit, 0.025 excellent, 0.05 good, 0.1 fair, and 0.2 poor [\[1\]](#r77760563872b-1).
   */
  get stress_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before accessing stress_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_MDS_stress_ = bridgeMDS[${this.id}].stress_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_stress_.tolist() if hasattr(attr_MDS_stress_, 'tolist') else attr_MDS_stress_`
    })()
  }

  /**
    Pairwise dissimilarities between the points. Symmetric matrix that:
   */
  get dissimilarity_matrix_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MDS must call init() before accessing dissimilarity_matrix_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MDS_dissimilarity_matrix_ = bridgeMDS[${this.id}].dissimilarity_matrix_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_dissimilarity_matrix_.tolist() if hasattr(attr_MDS_dissimilarity_matrix_, 'tolist') else attr_MDS_dissimilarity_matrix_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MDS_n_features_in_ = bridgeMDS[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_n_features_in_.tolist() if hasattr(attr_MDS_n_features_in_, 'tolist') else attr_MDS_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MDS_feature_names_in_ = bridgeMDS[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_feature_names_in_.tolist() if hasattr(attr_MDS_feature_names_in_, 'tolist') else attr_MDS_feature_names_in_`
    })()
  }

  /**
    The number of iterations corresponding to the best stress.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MDS instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MDS must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_MDS_n_iter_ = bridgeMDS[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MDS_n_iter_.tolist() if hasattr(attr_MDS_n_iter_, 'tolist') else attr_MDS_n_iter_`
    })()
  }
}
