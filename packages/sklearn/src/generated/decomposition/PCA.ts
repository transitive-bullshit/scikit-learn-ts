/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Principal component analysis (PCA).

  Linear dimensionality reduction using Singular Value Decomposition of the data to project it to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

  It uses the LAPACK implementation of the full SVD or a randomized truncated SVD by the method of Halko et al. 2009, depending on the shape of the input data and the number of components to extract.

  It can also use the scipy.sparse.linalg ARPACK implementation of the truncated SVD.

  Notice that this class does not support sparse input. See [`TruncatedSVD`](sklearn.decomposition.TruncatedSVD.html#sklearn.decomposition.TruncatedSVD "sklearn.decomposition.TruncatedSVD") for an alternative with sparse data.

  Read more in the [User Guide](../decomposition.html#pca).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html)
 */
export class PCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of components to keep. if n\_components is not set all components are kept:
     */
    n_components?: number | 'mle'

    /**
      If `false`, data passed to fit are overwritten and running fit(X).transform(X) will not yield the expected results, use fit\_transform(X) instead.

      @defaultValue `true`
     */
    copy?: boolean

    /**
      When `true` (`false` by default) the `components\_` vectors are multiplied by the square root of n\_samples and then divided by the singular values to ensure uncorrelated outputs with unit component-wise variances.

      Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometime improve the predictive accuracy of the downstream estimators by making their data respect some hard-wired assumptions.

      @defaultValue `false`
     */
    whiten?: boolean

    /**
      The solver is selected by a default policy based on `X.shape` and `n\_components`: if the input data is larger than 500x500 and the number of components to extract is lower than 80% of the smallest dimension of the data, then the more efficient ‘randomized’ method is enabled. Otherwise the exact full SVD is computed and optionally truncated afterwards.

      @defaultValue `'auto'`
     */
    svd_solver?: 'auto' | 'full' | 'arpack' | 'randomized'

    /**
      Tolerance for singular values computed by svd\_solver == ‘arpack’. Must be of range \[0.0, infinity).

      @defaultValue `0`
     */
    tol?: number

    /**
      Number of iterations for the power method computed by svd\_solver == ‘randomized’. Must be of range \[0, infinity).

      @defaultValue `'auto'`
     */
    iterated_power?: number | 'auto'

    /**
      This parameter is only relevant when `svd\_solver="randomized"`. It corresponds to the additional number of random vectors to sample the range of `X` so as to ensure proper conditioning. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

      @defaultValue `10`
     */
    n_oversamples?: number

    /**
      Power iteration normalizer for randomized SVD solver. Not used by ARPACK. See [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd") for more details.

      @defaultValue `'auto'`
     */
    power_iteration_normalizer?: 'auto' | 'QR' | 'LU' | 'none'

    /**
      Used when the ‘arpack’ or ‘randomized’ solvers are used. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `PCA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PCA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PCA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import PCA
try: bridgePCA
except NameError: bridgePCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_PCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}, 'whiten': ${
      this.opts['whiten'] ?? undefined
    }, 'svd_solver': ${this.opts['svd_solver'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'iterated_power': ${
      this.opts['iterated_power'] ?? undefined
    }, 'n_oversamples': ${
      this.opts['n_oversamples'] ?? undefined
    }, 'power_iteration_normalizer': ${
      this.opts['power_iteration_normalizer'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_PCA = {k: v for k, v in ctor_PCA.items() if v is not None}`

    await this._py.ex`bridgePCA[${this.id}] = PCA(**ctor_PCA)`

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

    await this._py.ex`del bridgePCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model with X.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PCA_fit = {k: v for k, v in pms_PCA_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_PCA_fit = bridgePCA[${this.id}].fit(**pms_PCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_fit.tolist() if hasattr(res_PCA_fit, 'tolist') else res_PCA_fit`
  }

  /**
    Fit the model with X and apply the dimensionality reduction on X.
   */
  async fit_transform(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_PCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PCA_fit_transform = {k: v for k, v in pms_PCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_fit_transform = bridgePCA[${this.id}].fit_transform(**pms_PCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_fit_transform.tolist() if hasattr(res_PCA_fit_transform, 'tolist') else res_PCA_fit_transform`
  }

  /**
    Compute data covariance with the generative model.

    `cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.
   */
  async get_covariance(opts: {
    /**
      Estimated covariance of data.
     */
    cov?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before get_covariance()')
    }

    // set up method params
    await this._py.ex`pms_PCA_get_covariance = {'cov': np.array(${
      opts['cov'] ?? undefined
    }) if ${opts['cov'] !== undefined} else None}

pms_PCA_get_covariance = {k: v for k, v in pms_PCA_get_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_get_covariance = bridgePCA[${this.id}].get_covariance(**pms_PCA_get_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_get_covariance.tolist() if hasattr(res_PCA_get_covariance, 'tolist') else res_PCA_get_covariance`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.PCA.fit "sklearn.decomposition.PCA.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_PCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PCA_get_feature_names_out = {k: v for k, v in pms_PCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_get_feature_names_out = bridgePCA[${this.id}].get_feature_names_out(**pms_PCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_get_feature_names_out.tolist() if hasattr(res_PCA_get_feature_names_out, 'tolist') else res_PCA_get_feature_names_out`
  }

  /**
    Compute data precision matrix with the generative model.

    Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.
   */
  async get_precision(opts: {
    /**
      Estimated precision of data.
     */
    precision?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before get_precision()')
    }

    // set up method params
    await this._py.ex`pms_PCA_get_precision = {'precision': ${
      opts['precision'] ?? undefined
    }}

pms_PCA_get_precision = {k: v for k, v in pms_PCA_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_get_precision = bridgePCA[${this.id}].get_precision(**pms_PCA_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_get_precision.tolist() if hasattr(res_PCA_get_precision, 'tolist') else res_PCA_get_precision`
  }

  /**
    Transform data back to its original space.

    In other words, return an input `X\_original` whose transform would be X.
   */
  async inverse_transform(opts: {
    /**
      New data, where `n\_samples` is the number of samples and `n\_components` is the number of components.
     */
    X?: ArrayLike[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_PCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PCA_inverse_transform = {k: v for k, v in pms_PCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_inverse_transform = bridgePCA[${this.id}].inverse_transform(**pms_PCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_inverse_transform.tolist() if hasattr(res_PCA_inverse_transform, 'tolist') else res_PCA_inverse_transform`
  }

  /**
    Return the average log-likelihood of all samples.

    See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)
   */
  async score(opts: {
    /**
      The data.
     */
    X?: ArrayLike[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_PCA_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PCA_score = {k: v for k, v in pms_PCA_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_score = bridgePCA[${this.id}].score(**pms_PCA_score)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_score.tolist() if hasattr(res_PCA_score, 'tolist') else res_PCA_score`
  }

  /**
    Return the log-likelihood of each sample.

    See. “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf)
   */
  async score_samples(opts: {
    /**
      The data.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_PCA_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PCA_score_samples = {k: v for k, v in pms_PCA_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_score_samples = bridgePCA[${this.id}].score_samples(**pms_PCA_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_score_samples.tolist() if hasattr(res_PCA_score_samples, 'tolist') else res_PCA_score_samples`
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
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_PCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PCA_set_output = {k: v for k, v in pms_PCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_set_output = bridgePCA[${this.id}].set_output(**pms_PCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_set_output.tolist() if hasattr(res_PCA_set_output, 'tolist') else res_PCA_set_output`
  }

  /**
    Apply dimensionality reduction to X.

    X is projected on the first principal components previously extracted from a training set.
   */
  async transform(opts: {
    /**
      New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PCA_transform = {k: v for k, v in pms_PCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PCA_transform = bridgePCA[${this.id}].transform(**pms_PCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PCA_transform.tolist() if hasattr(res_PCA_transform, 'tolist') else res_PCA_transform`
  }

  /**
    Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_components_ = bridgePCA[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_components_.tolist() if hasattr(attr_PCA_components_, 'tolist') else attr_PCA_components_`
    })()
  }

  /**
    The amount of variance explained by each of the selected components. The variance estimation uses `n\_samples \- 1` degrees of freedom.

    Equal to n\_components largest eigenvalues of the covariance matrix of X.
   */
  get explained_variance_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PCA must call init() before accessing explained_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_explained_variance_ = bridgePCA[${this.id}].explained_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_explained_variance_.tolist() if hasattr(attr_PCA_explained_variance_, 'tolist') else attr_PCA_explained_variance_`
    })()
  }

  /**
    Percentage of variance explained by each of the selected components.

    If `n\_components` is not set then all components are stored and the sum of the ratios is equal to 1.0.
   */
  get explained_variance_ratio_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PCA must call init() before accessing explained_variance_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_explained_variance_ratio_ = bridgePCA[${this.id}].explained_variance_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_explained_variance_ratio_.tolist() if hasattr(attr_PCA_explained_variance_ratio_, 'tolist') else attr_PCA_explained_variance_ratio_`
    })()
  }

  /**
    The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.
   */
  get singular_values_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing singular_values_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_singular_values_ = bridgePCA[${this.id}].singular_values_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_singular_values_.tolist() if hasattr(attr_PCA_singular_values_, 'tolist') else attr_PCA_singular_values_`
    })()
  }

  /**
    Per-feature empirical mean, estimated from the training set.

    Equal to `X.mean(axis=0)`.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_PCA_mean_ = bridgePCA[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_mean_.tolist() if hasattr(attr_PCA_mean_, 'tolist') else attr_PCA_mean_`
    })()
  }

  /**
    The estimated number of components. When n\_components is set to ‘mle’ or a number between 0 and 1 (with svd\_solver == ‘full’) this number is estimated from input data. Otherwise it equals the parameter n\_components, or the lesser value of n\_features and n\_samples if n\_components is `undefined`.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing n_components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_n_components_ = bridgePCA[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_n_components_.tolist() if hasattr(attr_PCA_n_components_, 'tolist') else attr_PCA_n_components_`
    })()
  }

  /**
    Number of features in the training data.
   */
  get n_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing n_features_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_n_features_ = bridgePCA[${this.id}].n_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_n_features_.tolist() if hasattr(attr_PCA_n_features_, 'tolist') else attr_PCA_n_features_`
    })()
  }

  /**
    Number of samples in the training data.
   */
  get n_samples_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing n_samples_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_PCA_n_samples_ = bridgePCA[${this.id}].n_samples_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_n_samples_.tolist() if hasattr(attr_PCA_n_samples_, 'tolist') else attr_PCA_n_samples_`
    })()
  }

  /**
    The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf). It is required to compute the estimated data covariance and score samples.

    Equal to the average of (min(n\_features, n\_samples) - n\_components) smallest eigenvalues of the covariance matrix of X.
   */
  get noise_variance_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing noise_variance_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_noise_variance_ = bridgePCA[${this.id}].noise_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_noise_variance_.tolist() if hasattr(attr_PCA_noise_variance_, 'tolist') else attr_PCA_noise_variance_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_n_features_in_ = bridgePCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_n_features_in_.tolist() if hasattr(attr_PCA_n_features_in_, 'tolist') else attr_PCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PCA must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PCA_feature_names_in_ = bridgePCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PCA_feature_names_in_.tolist() if hasattr(attr_PCA_feature_names_in_, 'tolist') else attr_PCA_feature_names_in_`
    })()
  }
}
