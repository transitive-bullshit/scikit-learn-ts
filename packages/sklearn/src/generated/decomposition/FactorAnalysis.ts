/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Factor Analysis (FA).

  A simple linear generative model with Gaussian latent variables.

  The observations are assumed to be caused by a linear transformation of lower dimensional latent factors and added Gaussian noise. Without loss of generality the factors are distributed according to a Gaussian with zero mean and unit covariance. The noise is also zero mean and has an arbitrary diagonal covariance matrix.

  If we would restrict the model further, by assuming that the Gaussian noise is even isotropic (all diagonal entries are the same) we would obtain [`PCA`](sklearn.decomposition.PCA.html#sklearn.decomposition.PCA "sklearn.decomposition.PCA").

  FactorAnalysis performs a maximum likelihood estimate of the so-called `loading` matrix, the transformation of the latent variables to the observed ones, using SVD based approach.

  Read more in the [User Guide](../decomposition.html#fa).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FactorAnalysis.html)
 */
export class FactorAnalysis {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Dimensionality of latent space, the number of components of `X` that are obtained after `transform`. If `undefined`, n\_components is set to the number of features.
     */
    n_components?: number

    /**
      Stopping tolerance for log-likelihood increase.

      @defaultValue `0.01`
     */
    tol?: number

    /**
      Whether to make a copy of X. If `false`, the input X gets overwritten during fitting.

      @defaultValue `true`
     */
    copy?: boolean

    /**
      Maximum number of iterations.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The initial guess of the noise variance for each feature. If `undefined`, it defaults to np.ones(n\_features).
     */
    noise_variance_init?: ArrayLike

    /**
      Which SVD method to use. If ‘lapack’ use standard SVD from scipy.linalg, if ‘randomized’ use fast `randomized\_svd` function. Defaults to ‘randomized’. For most applications ‘randomized’ will be sufficiently precise while providing significant speed gains. Accuracy can also be improved by setting higher values for `iterated\_power`. If this is not sufficient, for maximum precision you should choose ‘lapack’.

      @defaultValue `'randomized'`
     */
    svd_method?: 'lapack' | 'randomized'

    /**
      Number of iterations for the power method. 3 by default. Only used if `svd\_method` equals ‘randomized’.

      @defaultValue `3`
     */
    iterated_power?: number

    /**
      If not `undefined`, apply the indicated rotation. Currently, varimax and quartimax are implemented. See [“The varimax criterion for analytic rotation in factor analysis”](https://link.springer.com/article/10.1007%2FBF02289233) H. F. Kaiser, 1958.
     */
    rotation?: 'varimax' | 'quartimax'

    /**
      Only used when `svd\_method` equals ‘randomized’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

      @defaultValue `0`
     */
    random_state?: number
  }) {
    this.id = `FactorAnalysis${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('FactorAnalysis.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import FactorAnalysis
try: bridgeFactorAnalysis
except NameError: bridgeFactorAnalysis = {}
`

    // set up constructor params
    await this._py.ex`ctor_FactorAnalysis = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'noise_variance_init': np.array(${
      this.opts['noise_variance_init'] ?? undefined
    }) if ${
      this.opts['noise_variance_init'] !== undefined
    } else None, 'svd_method': ${
      this.opts['svd_method'] ?? undefined
    }, 'iterated_power': ${
      this.opts['iterated_power'] ?? undefined
    }, 'rotation': ${this.opts['rotation'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_FactorAnalysis = {k: v for k, v in ctor_FactorAnalysis.items() if v is not None}`

    await this._py
      .ex`bridgeFactorAnalysis[${this.id}] = FactorAnalysis(**ctor_FactorAnalysis)`

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

    await this._py.ex`del bridgeFactorAnalysis[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the FactorAnalysis model to X using SVD based approach.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]

    /**
      Ignored parameter.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FactorAnalysis_fit = {k: v for k, v in pms_FactorAnalysis_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_fit = bridgeFactorAnalysis[${this.id}].fit(**pms_FactorAnalysis_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_fit.tolist() if hasattr(res_FactorAnalysis_fit, 'tolist') else res_FactorAnalysis_fit`
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
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_FactorAnalysis_fit_transform = {k: v for k, v in pms_FactorAnalysis_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_fit_transform = bridgeFactorAnalysis[${this.id}].fit_transform(**pms_FactorAnalysis_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_fit_transform.tolist() if hasattr(res_FactorAnalysis_fit_transform, 'tolist') else res_FactorAnalysis_fit_transform`
  }

  /**
    Compute data covariance with the FactorAnalysis model.

    `cov \= components\_.T \* components\_ + diag(noise\_variance)`
   */
  async get_covariance(opts: {
    /**
      Estimated covariance of data.
     */
    cov?: NDArray[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before get_covariance()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_get_covariance = {'cov': np.array(${
      opts['cov'] ?? undefined
    }) if ${opts['cov'] !== undefined} else None}

pms_FactorAnalysis_get_covariance = {k: v for k, v in pms_FactorAnalysis_get_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_get_covariance = bridgeFactorAnalysis[${this.id}].get_covariance(**pms_FactorAnalysis_get_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_get_covariance.tolist() if hasattr(res_FactorAnalysis_get_covariance, 'tolist') else res_FactorAnalysis_get_covariance`
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
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FactorAnalysis_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_FactorAnalysis_get_feature_names_out = {k: v for k, v in pms_FactorAnalysis_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_get_feature_names_out = bridgeFactorAnalysis[${this.id}].get_feature_names_out(**pms_FactorAnalysis_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_get_feature_names_out.tolist() if hasattr(res_FactorAnalysis_get_feature_names_out, 'tolist') else res_FactorAnalysis_get_feature_names_out`
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
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_FactorAnalysis_get_metadata_routing = {k: v for k, v in pms_FactorAnalysis_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_get_metadata_routing = bridgeFactorAnalysis[${this.id}].get_metadata_routing(**pms_FactorAnalysis_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_get_metadata_routing.tolist() if hasattr(res_FactorAnalysis_get_metadata_routing, 'tolist') else res_FactorAnalysis_get_metadata_routing`
  }

  /**
    Compute data precision matrix with the FactorAnalysis model.
   */
  async get_precision(opts: {
    /**
      Estimated precision of data.
     */
    precision?: NDArray[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before get_precision()')
    }

    // set up method params
    await this._py
      .ex`pms_FactorAnalysis_get_precision = {'precision': np.array(${
      opts['precision'] ?? undefined
    }) if ${opts['precision'] !== undefined} else None}

pms_FactorAnalysis_get_precision = {k: v for k, v in pms_FactorAnalysis_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_get_precision = bridgeFactorAnalysis[${this.id}].get_precision(**pms_FactorAnalysis_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_get_precision.tolist() if hasattr(res_FactorAnalysis_get_precision, 'tolist') else res_FactorAnalysis_get_precision`
  }

  /**
    Compute the average log-likelihood of the samples.
   */
  async score(opts: {
    /**
      The data.
     */
    X?: NDArray[]

    /**
      Ignored parameter.
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FactorAnalysis_score = {k: v for k, v in pms_FactorAnalysis_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_score = bridgeFactorAnalysis[${this.id}].score(**pms_FactorAnalysis_score)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_score.tolist() if hasattr(res_FactorAnalysis_score, 'tolist') else res_FactorAnalysis_score`
  }

  /**
    Compute the log-likelihood of each sample.
   */
  async score_samples(opts: {
    /**
      The data.
     */
    X?: NDArray[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_FactorAnalysis_score_samples = {k: v for k, v in pms_FactorAnalysis_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_score_samples = bridgeFactorAnalysis[${this.id}].score_samples(**pms_FactorAnalysis_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_score_samples.tolist() if hasattr(res_FactorAnalysis_score_samples, 'tolist') else res_FactorAnalysis_score_samples`
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
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_FactorAnalysis_set_output = {k: v for k, v in pms_FactorAnalysis_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_set_output = bridgeFactorAnalysis[${this.id}].set_output(**pms_FactorAnalysis_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_set_output.tolist() if hasattr(res_FactorAnalysis_set_output, 'tolist') else res_FactorAnalysis_set_output`
  }

  /**
    Apply dimensionality reduction to X using the model.

    Compute the expected mean of the latent variables. See Barber, 21.2.33 (or Bishop, 12.66).
   */
  async transform(opts: {
    /**
      Training data.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_FactorAnalysis_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_FactorAnalysis_transform = {k: v for k, v in pms_FactorAnalysis_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FactorAnalysis_transform = bridgeFactorAnalysis[${this.id}].transform(**pms_FactorAnalysis_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FactorAnalysis_transform.tolist() if hasattr(res_FactorAnalysis_transform, 'tolist') else res_FactorAnalysis_transform`
  }

  /**
    Components with maximum variance.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_components_ = bridgeFactorAnalysis[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_components_.tolist() if hasattr(attr_FactorAnalysis_components_, 'tolist') else attr_FactorAnalysis_components_`
    })()
  }

  /**
    The log likelihood at each iteration.
   */
  get loglike_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing loglike_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_loglike_ = bridgeFactorAnalysis[${this.id}].loglike_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_loglike_.tolist() if hasattr(attr_FactorAnalysis_loglike_, 'tolist') else attr_FactorAnalysis_loglike_`
    })()
  }

  /**
    The estimated noise variance for each feature.
   */
  get noise_variance_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing noise_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_noise_variance_ = bridgeFactorAnalysis[${this.id}].noise_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_noise_variance_.tolist() if hasattr(attr_FactorAnalysis_noise_variance_, 'tolist') else attr_FactorAnalysis_noise_variance_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_n_iter_ = bridgeFactorAnalysis[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_n_iter_.tolist() if hasattr(attr_FactorAnalysis_n_iter_, 'tolist') else attr_FactorAnalysis_n_iter_`
    })()
  }

  /**
    Per-feature empirical mean, estimated from the training set.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FactorAnalysis must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_mean_ = bridgeFactorAnalysis[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_mean_.tolist() if hasattr(attr_FactorAnalysis_mean_, 'tolist') else attr_FactorAnalysis_mean_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_n_features_in_ = bridgeFactorAnalysis[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_n_features_in_.tolist() if hasattr(attr_FactorAnalysis_n_features_in_, 'tolist') else attr_FactorAnalysis_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This FactorAnalysis instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FactorAnalysis must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FactorAnalysis_feature_names_in_ = bridgeFactorAnalysis[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FactorAnalysis_feature_names_in_.tolist() if hasattr(attr_FactorAnalysis_feature_names_in_, 'tolist') else attr_FactorAnalysis_feature_names_in_`
    })()
  }
}
