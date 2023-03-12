/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Latent Dirichlet Allocation with online variational Bayes algorithm.

  The implementation is based on [\[1\]](#re25e5648fc37-1) and [\[2\]](#re25e5648fc37-2).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html
 */
export class LatentDirichletAllocation {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LatentDirichletAllocationOptions) {
    this.id = `LatentDirichletAllocation${crypto.randomUUID().split('-')[0]}`
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
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LatentDirichletAllocation.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import LatentDirichletAllocation
try: bridgeLatentDirichletAllocation
except NameError: bridgeLatentDirichletAllocation = {}
`

    // set up constructor params
    await this._py.ex`ctor_LatentDirichletAllocation = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'doc_topic_prior': ${
      this.opts['doc_topic_prior'] ?? undefined
    }, 'topic_word_prior': ${
      this.opts['topic_word_prior'] ?? undefined
    }, 'learning_method': ${
      this.opts['learning_method'] ?? undefined
    }, 'learning_decay': ${
      this.opts['learning_decay'] ?? undefined
    }, 'learning_offset': ${
      this.opts['learning_offset'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'batch_size': ${
      this.opts['batch_size'] ?? undefined
    }, 'evaluate_every': ${
      this.opts['evaluate_every'] ?? undefined
    }, 'total_samples': ${
      this.opts['total_samples'] ?? undefined
    }, 'perp_tol': ${this.opts['perp_tol'] ?? undefined}, 'mean_change_tol': ${
      this.opts['mean_change_tol'] ?? undefined
    }, 'max_doc_update_iter': ${
      this.opts['max_doc_update_iter'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_LatentDirichletAllocation = {k: v for k, v in ctor_LatentDirichletAllocation.items() if v is not None}`

    await this._py
      .ex`bridgeLatentDirichletAllocation[${this.id}] = LatentDirichletAllocation(**ctor_LatentDirichletAllocation)`

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

    await this._py.ex`del bridgeLatentDirichletAllocation[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn model for the data X with variational Bayes method.

    When `learning\_method` is ‘online’, use mini-batch update. Otherwise, use batch update.
   */
  async fit(opts: LatentDirichletAllocationFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LatentDirichletAllocation must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LatentDirichletAllocation_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LatentDirichletAllocation_fit = {k: v for k, v in pms_LatentDirichletAllocation_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_fit = bridgeLatentDirichletAllocation[${this.id}].fit(**pms_LatentDirichletAllocation_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_fit.tolist() if hasattr(res_LatentDirichletAllocation_fit, 'tolist') else res_LatentDirichletAllocation_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: LatentDirichletAllocationFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_LatentDirichletAllocation_fit_transform = {k: v for k, v in pms_LatentDirichletAllocation_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_fit_transform = bridgeLatentDirichletAllocation[${this.id}].fit_transform(**pms_LatentDirichletAllocation_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_fit_transform.tolist() if hasattr(res_LatentDirichletAllocation_fit_transform, 'tolist') else res_LatentDirichletAllocation_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: LatentDirichletAllocationGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_LatentDirichletAllocation_get_feature_names_out = {k: v for k, v in pms_LatentDirichletAllocation_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_get_feature_names_out = bridgeLatentDirichletAllocation[${this.id}].get_feature_names_out(**pms_LatentDirichletAllocation_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_get_feature_names_out.tolist() if hasattr(res_LatentDirichletAllocation_get_feature_names_out, 'tolist') else res_LatentDirichletAllocation_get_feature_names_out`
  }

  /**
    Online VB with Mini-Batch update.
   */
  async partial_fit(
    opts: LatentDirichletAllocationPartialFitOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LatentDirichletAllocation_partial_fit = {k: v for k, v in pms_LatentDirichletAllocation_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_partial_fit = bridgeLatentDirichletAllocation[${this.id}].partial_fit(**pms_LatentDirichletAllocation_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_partial_fit.tolist() if hasattr(res_LatentDirichletAllocation_partial_fit, 'tolist') else res_LatentDirichletAllocation_partial_fit`
  }

  /**
    Calculate approximate perplexity for data X.

    Perplexity is defined as exp(-1. \* log-likelihood per word)
   */
  async perplexity(
    opts: LatentDirichletAllocationPerplexityOptions
  ): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before perplexity()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_perplexity = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'sub_sampling': ${
      opts['sub_sampling'] ?? undefined
    }}

pms_LatentDirichletAllocation_perplexity = {k: v for k, v in pms_LatentDirichletAllocation_perplexity.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_perplexity = bridgeLatentDirichletAllocation[${this.id}].perplexity(**pms_LatentDirichletAllocation_perplexity)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_perplexity.tolist() if hasattr(res_LatentDirichletAllocation_perplexity, 'tolist') else res_LatentDirichletAllocation_perplexity`
  }

  /**
    Calculate approximate log-likelihood as score.
   */
  async score(opts: LatentDirichletAllocationScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_LatentDirichletAllocation_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_LatentDirichletAllocation_score = {k: v for k, v in pms_LatentDirichletAllocation_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_score = bridgeLatentDirichletAllocation[${this.id}].score(**pms_LatentDirichletAllocation_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_score.tolist() if hasattr(res_LatentDirichletAllocation_score, 'tolist') else res_LatentDirichletAllocation_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(
    opts: LatentDirichletAllocationSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_LatentDirichletAllocation_set_output = {k: v for k, v in pms_LatentDirichletAllocation_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_set_output = bridgeLatentDirichletAllocation[${this.id}].set_output(**pms_LatentDirichletAllocation_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_set_output.tolist() if hasattr(res_LatentDirichletAllocation_set_output, 'tolist') else res_LatentDirichletAllocation_set_output`
  }

  /**
    Transform data X according to the fitted model.
   */
  async transform(
    opts: LatentDirichletAllocationTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LatentDirichletAllocation_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LatentDirichletAllocation_transform = {k: v for k, v in pms_LatentDirichletAllocation_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LatentDirichletAllocation_transform = bridgeLatentDirichletAllocation[${this.id}].transform(**pms_LatentDirichletAllocation_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LatentDirichletAllocation_transform.tolist() if hasattr(res_LatentDirichletAllocation_transform, 'tolist') else res_LatentDirichletAllocation_transform`
  }

  /**
    Variational parameters for topic word distribution. Since the complete conditional for topic word distribution is a Dirichlet, `components\_\[i, j\]` can be viewed as pseudocount that represents the number of times word `j` was assigned to topic `i`. It can also be viewed as distribution over the words for each topic after normalization: `model.components\_ / model.components\_.sum(axis=1)\[:, np.newaxis\]`.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_components_ = bridgeLatentDirichletAllocation[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_components_.tolist() if hasattr(attr_LatentDirichletAllocation_components_, 'tolist') else attr_LatentDirichletAllocation_components_`
    })()
  }

  /**
    Exponential value of expectation of log topic word distribution. In the literature, this is `exp(E\[log(beta)\])`.
   */
  get exp_dirichlet_component_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing exp_dirichlet_component_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_exp_dirichlet_component_ = bridgeLatentDirichletAllocation[${this.id}].exp_dirichlet_component_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_exp_dirichlet_component_.tolist() if hasattr(attr_LatentDirichletAllocation_exp_dirichlet_component_, 'tolist') else attr_LatentDirichletAllocation_exp_dirichlet_component_`
    })()
  }

  /**
    Number of iterations of the EM step.
   */
  get n_batch_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing n_batch_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_n_batch_iter_ = bridgeLatentDirichletAllocation[${this.id}].n_batch_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_n_batch_iter_.tolist() if hasattr(attr_LatentDirichletAllocation_n_batch_iter_, 'tolist') else attr_LatentDirichletAllocation_n_batch_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_n_features_in_ = bridgeLatentDirichletAllocation[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_n_features_in_.tolist() if hasattr(attr_LatentDirichletAllocation_n_features_in_, 'tolist') else attr_LatentDirichletAllocation_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_feature_names_in_ = bridgeLatentDirichletAllocation[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_feature_names_in_.tolist() if hasattr(attr_LatentDirichletAllocation_feature_names_in_, 'tolist') else attr_LatentDirichletAllocation_feature_names_in_`
    })()
  }

  /**
    Number of passes over the dataset.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_n_iter_ = bridgeLatentDirichletAllocation[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_n_iter_.tolist() if hasattr(attr_LatentDirichletAllocation_n_iter_, 'tolist') else attr_LatentDirichletAllocation_n_iter_`
    })()
  }

  /**
    Final perplexity score on training set.
   */
  get bound_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing bound_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_bound_ = bridgeLatentDirichletAllocation[${this.id}].bound_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_bound_.tolist() if hasattr(attr_LatentDirichletAllocation_bound_, 'tolist') else attr_LatentDirichletAllocation_bound_`
    })()
  }

  /**
    Prior of document topic distribution `theta`. If the value is None, it is `1 / n\_components`.
   */
  get doc_topic_prior_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing doc_topic_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_doc_topic_prior_ = bridgeLatentDirichletAllocation[${this.id}].doc_topic_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_doc_topic_prior_.tolist() if hasattr(attr_LatentDirichletAllocation_doc_topic_prior_, 'tolist') else attr_LatentDirichletAllocation_doc_topic_prior_`
    })()
  }

  /**
    RandomState instance that is generated either from a seed, the random number generator or by `np.random`.
   */
  get random_state_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing random_state_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_random_state_ = bridgeLatentDirichletAllocation[${this.id}].random_state_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_random_state_.tolist() if hasattr(attr_LatentDirichletAllocation_random_state_, 'tolist') else attr_LatentDirichletAllocation_random_state_`
    })()
  }

  /**
    Prior of topic word distribution `beta`. If the value is None, it is `1 / n\_components`.
   */
  get topic_word_prior_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LatentDirichletAllocation instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LatentDirichletAllocation must call init() before accessing topic_word_prior_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LatentDirichletAllocation_topic_word_prior_ = bridgeLatentDirichletAllocation[${this.id}].topic_word_prior_`

      // convert the result from python to node.js
      return this
        ._py`attr_LatentDirichletAllocation_topic_word_prior_.tolist() if hasattr(attr_LatentDirichletAllocation_topic_word_prior_, 'tolist') else attr_LatentDirichletAllocation_topic_word_prior_`
    })()
  }
}

export interface LatentDirichletAllocationOptions {
  /**
    Number of topics.

    @defaultValue `10`
   */
  n_components?: number

  /**
    Prior of document topic distribution `theta`. If the value is None, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `alpha`.
   */
  doc_topic_prior?: number

  /**
    Prior of topic word distribution `beta`. If the value is None, defaults to `1 / n\_components`. In [\[1\]](#re25e5648fc37-1), this is called `eta`.
   */
  topic_word_prior?: number

  /**
    Method used to update `\_component`. Only used in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method. In general, if the data size is large, the online update will be much faster than the batch update.

    Valid options:

    @defaultValue `'batch'`
   */
  learning_method?: 'batch' | 'online'

  /**
    It is a parameter that control learning rate in the online learning method. The value should be set between (0.5, 1.0\] to guarantee asymptotic convergence. When the value is 0.0 and batch\_size is `n\_samples`, the update method is same as batch learning. In the literature, this is called kappa.

    @defaultValue `0.7`
   */
  learning_decay?: number

  /**
    A (positive) parameter that downweights early iterations in online learning. It should be greater than 1.0. In the literature, this is called tau\_0.

    @defaultValue `10`
   */
  learning_offset?: number

  /**
    The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit") method, and not the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

    @defaultValue `10`
   */
  max_iter?: number

  /**
    Number of documents to use in each EM iteration. Only used in online learning.

    @defaultValue `128`
   */
  batch_size?: number

  /**
    How often to evaluate perplexity. Only used in `fit` method. set it to 0 or negative number to not evaluate perplexity in training at all. Evaluating perplexity can help you check convergence in training process, but it will also increase total training time. Evaluating perplexity in every iteration might increase training time up to two-fold.

    @defaultValue `-1`
   */
  evaluate_every?: number

  /**
    Total number of documents. Only used in the [`partial\_fit`](#sklearn.decomposition.LatentDirichletAllocation.partial_fit "sklearn.decomposition.LatentDirichletAllocation.partial_fit") method.

    @defaultValue `1000000`
   */
  total_samples?: number

  /**
    Perplexity tolerance in batch learning. Only used when `evaluate\_every` is greater than 0.

    @defaultValue `0.1`
   */
  perp_tol?: number

  /**
    Stopping tolerance for updating document topic distribution in E-step.

    @defaultValue `0.001`
   */
  mean_change_tol?: number

  /**
    Max number of iterations for updating document topic distribution in the E-step.

    @defaultValue `100`
   */
  max_doc_update_iter?: number

  /**
    The number of jobs to use in the E-step. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Verbosity level.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface LatentDirichletAllocationFitOptions {
  /**
    Document word matrix.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface LatentDirichletAllocationFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface LatentDirichletAllocationGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.LatentDirichletAllocation.fit "sklearn.decomposition.LatentDirichletAllocation.fit").
   */
  input_features?: any
}

export interface LatentDirichletAllocationPartialFitOptions {
  /**
    Document word matrix.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface LatentDirichletAllocationPerplexityOptions {
  /**
    Document word matrix.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Do sub-sampling or not.
   */
  sub_sampling?: boolean
}

export interface LatentDirichletAllocationScoreOptions {
  /**
    Document word matrix.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface LatentDirichletAllocationSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface LatentDirichletAllocationTransformOptions {
  /**
    Document word matrix.
   */
  X?: ArrayLike | SparseMatrix[]
}
