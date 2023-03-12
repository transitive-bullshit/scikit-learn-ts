/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  T-distributed Stochastic Neighbor Embedding.

  t-SNE \[1\] is a tool to visualize high-dimensional data. It converts similarities between data points to joint probabilities and tries to minimize the Kullback-Leibler divergence between the joint probabilities of the low-dimensional embedding and the high-dimensional data. t-SNE has a cost function that is not convex, i.e. with different initializations we can get different results.

  It is highly recommended to use another dimensionality reduction method (e.g. PCA for dense data or TruncatedSVD for sparse data) to reduce the number of dimensions to a reasonable amount (e.g. 50) if the number of features is very high. This will suppress some noise and speed up the computation of pairwise distances between samples. For more tips see Laurens van der Maaten’s FAQ \[2\].

  Read more in the [User Guide](../manifold.html#t-sne).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html
 */
export class TSNE {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: TSNEOptions) {
    this.id = `TSNE${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This TSNE instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TSNE.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.manifold import TSNE
try: bridgeTSNE
except NameError: bridgeTSNE = {}
`

    // set up constructor params
    await this._py.ex`ctor_TSNE = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'perplexity': ${
      this.opts['perplexity'] ?? undefined
    }, 'early_exaggeration': ${
      this.opts['early_exaggeration'] ?? undefined
    }, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'n_iter': ${
      this.opts['n_iter'] ?? undefined
    }, 'n_iter_without_progress': ${
      this.opts['n_iter_without_progress'] ?? undefined
    }, 'min_grad_norm': ${this.opts['min_grad_norm'] ?? undefined}, 'metric': ${
      this.opts['metric'] ?? undefined
    }, 'metric_params': ${
      this.opts['metric_params'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'method': ${
      this.opts['method'] ?? undefined
    }, 'angle': ${this.opts['angle'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'square_distances': ${this.opts['square_distances'] ?? undefined}}

ctor_TSNE = {k: v for k, v in ctor_TSNE.items() if v is not None}`

    await this._py.ex`bridgeTSNE[${this.id}] = TSNE(**ctor_TSNE)`

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

    await this._py.ex`del bridgeTSNE[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit X into an embedded space.
   */
  async fit(opts: TSNEFitOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_TSNE_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_TSNE_fit = {k: v for k, v in pms_TSNE_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_TSNE_fit = bridgeTSNE[${this.id}].fit(**pms_TSNE_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TSNE_fit.tolist() if hasattr(res_TSNE_fit, 'tolist') else res_TSNE_fit`
  }

  /**
    Fit X into an embedded space and return that transformed output.
   */
  async fit_transform(opts: TSNEFitTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_TSNE_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_TSNE_fit_transform = {k: v for k, v in pms_TSNE_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TSNE_fit_transform = bridgeTSNE[${this.id}].fit_transform(**pms_TSNE_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TSNE_fit_transform.tolist() if hasattr(res_TSNE_fit_transform, 'tolist') else res_TSNE_fit_transform`
  }

  /**
    Stores the embedding vectors.
   */
  get embedding_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before accessing embedding_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TSNE_embedding_ = bridgeTSNE[${this.id}].embedding_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_embedding_.tolist() if hasattr(attr_TSNE_embedding_, 'tolist') else attr_TSNE_embedding_`
    })()
  }

  /**
    Kullback-Leibler divergence after optimization.
   */
  get kl_divergence_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before accessing kl_divergence_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TSNE_kl_divergence_ = bridgeTSNE[${this.id}].kl_divergence_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_kl_divergence_.tolist() if hasattr(attr_TSNE_kl_divergence_, 'tolist') else attr_TSNE_kl_divergence_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TSNE_n_features_in_ = bridgeTSNE[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_n_features_in_.tolist() if hasattr(attr_TSNE_n_features_in_, 'tolist') else attr_TSNE_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TSNE must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TSNE_feature_names_in_ = bridgeTSNE[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_feature_names_in_.tolist() if hasattr(attr_TSNE_feature_names_in_, 'tolist') else attr_TSNE_feature_names_in_`
    })()
  }

  /**
    Effective learning rate.
   */
  get learning_rate_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before accessing learning_rate_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TSNE_learning_rate_ = bridgeTSNE[${this.id}].learning_rate_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_learning_rate_.tolist() if hasattr(attr_TSNE_learning_rate_, 'tolist') else attr_TSNE_learning_rate_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TSNE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TSNE must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_TSNE_n_iter_ = bridgeTSNE[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_TSNE_n_iter_.tolist() if hasattr(attr_TSNE_n_iter_, 'tolist') else attr_TSNE_n_iter_`
    })()
  }
}

export interface TSNEOptions {
  /**
    Dimension of the embedded space.

    @defaultValue `2`
   */
  n_components?: number

  /**
    The perplexity is related to the number of nearest neighbors that is used in other manifold learning algorithms. Larger datasets usually require a larger perplexity. Consider selecting a value between 5 and 50. Different values can result in significantly different results. The perplexity must be less than the number of samples.

    @defaultValue `30`
   */
  perplexity?: number

  /**
    Controls how tight natural clusters in the original space are in the embedded space and how much space will be between them. For larger values, the space between natural clusters will be larger in the embedded space. Again, the choice of this parameter is not very critical. If the cost function increases during initial optimization, the early exaggeration factor or the learning rate might be too high.

    @defaultValue `12`
   */
  early_exaggeration?: number

  /**
    The learning rate for t-SNE is usually in the range \[10.0, 1000.0\]. If the learning rate is too high, the data may look like a ‘ball’ with any point approximately equidistant from its nearest neighbours. If the learning rate is too low, most points may look compressed in a dense cloud with few outliers. If the cost function gets stuck in a bad local minimum increasing the learning rate may help. Note that many other t-SNE implementations (bhtsne, FIt-SNE, openTSNE, etc.) use a definition of learning\_rate that is 4 times smaller than ours. So our learning\_rate=200 corresponds to learning\_rate=800 in those other implementations. The ‘auto’ option sets the learning\_rate to `max(N / early\_exaggeration / 4, 50)` where N is the sample size, following \[4\] and \[5\].

    @defaultValue `'auto'`
   */
  learning_rate?: number | 'auto'

  /**
    Maximum number of iterations for the optimization. Should be at least 250.

    @defaultValue `1000`
   */
  n_iter?: number

  /**
    Maximum number of iterations without progress before we abort the optimization, used after 250 initial iterations with early exaggeration. Note that progress is only checked every 50 iterations so this value is rounded to the next multiple of 50.

    @defaultValue `300`
   */
  n_iter_without_progress?: number

  /**
    If the gradient norm is below this threshold, the optimization will be stopped.

    @defaultValue `1e-7`
   */
  min_grad_norm?: number

  /**
    The metric to use when calculating distance between instances in a feature array. If metric is a string, it must be one of the options allowed by scipy.spatial.distance.pdist for its metric parameter, or a metric listed in pairwise.PAIRWISE\_DISTANCE\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a distance matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them. The default is “euclidean” which is interpreted as squared euclidean distance.

    @defaultValue `'euclidean'`
   */
  metric?: string

  /**
    Additional keyword arguments for the metric function.
   */
  metric_params?: any

  /**
    Initialization of embedding. PCA initialization cannot be used with precomputed distances and is usually more globally stable than random initialization.

    @defaultValue `'pca'`
   */
  init?: 'random' | 'pca' | NDArray[]

  /**
    Verbosity level.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Determines the random number generator. Pass an int for reproducible results across multiple function calls. Note that different initializations might result in different local minima of the cost function. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    By default the gradient calculation algorithm uses Barnes-Hut approximation running in O(NlogN) time. method=’exact’ will run on the slower, but exact, algorithm in O(N^2) time. The exact algorithm should be used when nearest-neighbor errors need to be better than 3%. However, the exact method cannot scale to millions of examples.

    @defaultValue `'barnes_hut'`
   */
  method?: 'barnes_hut' | 'exact'

  /**
    Only used if method=’barnes\_hut’ This is the trade-off between speed and accuracy for Barnes-Hut T-SNE. ‘angle’ is the angular size (referred to as theta in \[3\]) of a distant node as measured from a point. If this size is below ‘angle’ then it is used as a summary node of all points contained within it. This method is not very sensitive to changes in this parameter in the range of 0.2 - 0.8. Angle less than 0.2 has quickly increasing computation time and angle greater 0.8 has quickly increasing error.

    @defaultValue `0.5`
   */
  angle?: number

  /**
    The number of parallel jobs to run for neighbors search. This parameter has no impact when `metric="precomputed"` or (`metric="euclidean"` and `method="exact"`). `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    This parameter has no effect since distance values are always squared since 1.1.

    @defaultValue `'deprecated'`
   */
  square_distances?: boolean
}

export interface TSNEFitOptions {
  /**
    If the metric is ‘precomputed’ X must be a square distance matrix. Otherwise it contains a sample per row. If the method is ‘exact’, X may be a sparse matrix of type ‘csr’, ‘csc’ or ‘coo’. If the method is ‘barnes\_hut’ and the metric is ‘precomputed’, X may be a precomputed sparse graph.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}

export interface TSNEFitTransformOptions {
  /**
    If the metric is ‘precomputed’ X must be a square distance matrix. Otherwise it contains a sample per row. If the method is ‘exact’, X may be a sparse matrix of type ‘csr’, ‘csc’ or ‘coo’. If the method is ‘barnes\_hut’ and the metric is ‘precomputed’, X may be a precomputed sparse graph.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Ignored.
   */
  y?: any
}
