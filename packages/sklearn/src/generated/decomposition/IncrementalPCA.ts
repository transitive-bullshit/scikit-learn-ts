/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Incremental principal components analysis (IPCA).

  Linear dimensionality reduction using Singular Value Decomposition of the data, keeping only the most significant singular vectors to project the data to a lower dimensional space. The input data is centered but not scaled for each feature before applying the SVD.

  Depending on the size of the input data, this algorithm can be much more memory efficient than a PCA, and allows sparse input.

  This algorithm has constant memory complexity, on the order of `batch\_size \* n\_features`, enabling use of np.memmap files without loading the entire file into memory. For sparse matrices, the input is converted to dense in batches (in order to be able to subtract the mean) which avoids storing the entire dense matrix at any one time.

  The computational overhead of each SVD is `O(batch\_size \* n\_features \*\* 2)`, but only 2 \* batch\_size samples remain in memory at a time. There will be `n\_samples / batch\_size` SVD computations to get the principal components, versus 1 large SVD of complexity `O(n\_samples \* n\_features \*\* 2)` for PCA.

  Read more in the [User Guide](../decomposition.html#incrementalpca).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.IncrementalPCA.html
 */
export class IncrementalPCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: IncrementalPCAOptions) {
    this.id = `IncrementalPCA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('IncrementalPCA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import IncrementalPCA
try: bridgeIncrementalPCA
except NameError: bridgeIncrementalPCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_IncrementalPCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'whiten': ${this.opts['whiten'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }, 'batch_size': ${this.opts['batch_size'] ?? undefined}}

ctor_IncrementalPCA = {k: v for k, v in ctor_IncrementalPCA.items() if v is not None}`

    await this._py
      .ex`bridgeIncrementalPCA[${this.id}] = IncrementalPCA(**ctor_IncrementalPCA)`

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

    await this._py.ex`del bridgeIncrementalPCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model with X, using minibatches of size batch\_size.
   */
  async fit(opts: IncrementalPCAFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_IncrementalPCA_fit = {k: v for k, v in pms_IncrementalPCA_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_fit = bridgeIncrementalPCA[${this.id}].fit(**pms_IncrementalPCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_fit.tolist() if hasattr(res_IncrementalPCA_fit, 'tolist') else res_IncrementalPCA_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: IncrementalPCAFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_IncrementalPCA_fit_transform = {k: v for k, v in pms_IncrementalPCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_fit_transform = bridgeIncrementalPCA[${this.id}].fit_transform(**pms_IncrementalPCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_fit_transform.tolist() if hasattr(res_IncrementalPCA_fit_transform, 'tolist') else res_IncrementalPCA_fit_transform`
  }

  /**
    Compute data covariance with the generative model.

    `cov \= components\_.T \* S\*\*2 \* components\_ + sigma2 \* eye(n\_features)` where S\*\*2 contains the explained variances, and sigma2 contains the noise variances.
   */
  async get_covariance(opts: IncrementalPCAGetCovarianceOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before get_covariance()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_get_covariance = {'cov': np.array(${
      opts['cov'] ?? undefined
    }) if ${opts['cov'] !== undefined} else None}

pms_IncrementalPCA_get_covariance = {k: v for k, v in pms_IncrementalPCA_get_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_get_covariance = bridgeIncrementalPCA[${this.id}].get_covariance(**pms_IncrementalPCA_get_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_get_covariance.tolist() if hasattr(res_IncrementalPCA_get_covariance, 'tolist') else res_IncrementalPCA_get_covariance`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: IncrementalPCAGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_IncrementalPCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_IncrementalPCA_get_feature_names_out = {k: v for k, v in pms_IncrementalPCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_get_feature_names_out = bridgeIncrementalPCA[${this.id}].get_feature_names_out(**pms_IncrementalPCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_get_feature_names_out.tolist() if hasattr(res_IncrementalPCA_get_feature_names_out, 'tolist') else res_IncrementalPCA_get_feature_names_out`
  }

  /**
    Compute data precision matrix with the generative model.

    Equals the inverse of the covariance but computed with the matrix inversion lemma for efficiency.
   */
  async get_precision(opts: IncrementalPCAGetPrecisionOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before get_precision()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_get_precision = {'precision': ${
      opts['precision'] ?? undefined
    }}

pms_IncrementalPCA_get_precision = {k: v for k, v in pms_IncrementalPCA_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_get_precision = bridgeIncrementalPCA[${this.id}].get_precision(**pms_IncrementalPCA_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_get_precision.tolist() if hasattr(res_IncrementalPCA_get_precision, 'tolist') else res_IncrementalPCA_get_precision`
  }

  /**
    Transform data back to its original space.

    In other words, return an input `X\_original` whose transform would be X.
   */
  async inverse_transform(
    opts: IncrementalPCAInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_IncrementalPCA_inverse_transform = {k: v for k, v in pms_IncrementalPCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_inverse_transform = bridgeIncrementalPCA[${this.id}].inverse_transform(**pms_IncrementalPCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_inverse_transform.tolist() if hasattr(res_IncrementalPCA_inverse_transform, 'tolist') else res_IncrementalPCA_inverse_transform`
  }

  /**
    Incremental fit with X. All of X is processed as a single batch.
   */
  async partial_fit(opts: IncrementalPCAPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'check_input': ${opts['check_input'] ?? undefined}}

pms_IncrementalPCA_partial_fit = {k: v for k, v in pms_IncrementalPCA_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_partial_fit = bridgeIncrementalPCA[${this.id}].partial_fit(**pms_IncrementalPCA_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_partial_fit.tolist() if hasattr(res_IncrementalPCA_partial_fit, 'tolist') else res_IncrementalPCA_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: IncrementalPCASetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_IncrementalPCA_set_output = {k: v for k, v in pms_IncrementalPCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_set_output = bridgeIncrementalPCA[${this.id}].set_output(**pms_IncrementalPCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_set_output.tolist() if hasattr(res_IncrementalPCA_set_output, 'tolist') else res_IncrementalPCA_set_output`
  }

  /**
    Apply dimensionality reduction to X.

    X is projected on the first principal components previously extracted from a training set, using minibatches of size batch\_size if X is sparse.
   */
  async transform(opts: IncrementalPCATransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_IncrementalPCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_IncrementalPCA_transform = {k: v for k, v in pms_IncrementalPCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IncrementalPCA_transform = bridgeIncrementalPCA[${this.id}].transform(**pms_IncrementalPCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IncrementalPCA_transform.tolist() if hasattr(res_IncrementalPCA_transform, 'tolist') else res_IncrementalPCA_transform`
  }

  /**
    Principal axes in feature space, representing the directions of maximum variance in the data. Equivalently, the right singular vectors of the centered input data, parallel to its eigenvectors. The components are sorted by decreasing `explained\_variance\_`.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_components_ = bridgeIncrementalPCA[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_components_.tolist() if hasattr(attr_IncrementalPCA_components_, 'tolist') else attr_IncrementalPCA_components_`
    })()
  }

  /**
    Variance explained by each of the selected components.
   */
  get explained_variance_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing explained_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_explained_variance_ = bridgeIncrementalPCA[${this.id}].explained_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_explained_variance_.tolist() if hasattr(attr_IncrementalPCA_explained_variance_, 'tolist') else attr_IncrementalPCA_explained_variance_`
    })()
  }

  /**
    Percentage of variance explained by each of the selected components. If all components are stored, the sum of explained variances is equal to 1.0.
   */
  get explained_variance_ratio_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing explained_variance_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_explained_variance_ratio_ = bridgeIncrementalPCA[${this.id}].explained_variance_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_explained_variance_ratio_.tolist() if hasattr(attr_IncrementalPCA_explained_variance_ratio_, 'tolist') else attr_IncrementalPCA_explained_variance_ratio_`
    })()
  }

  /**
    The singular values corresponding to each of the selected components. The singular values are equal to the 2-norms of the `n\_components` variables in the lower-dimensional space.
   */
  get singular_values_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing singular_values_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_singular_values_ = bridgeIncrementalPCA[${this.id}].singular_values_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_singular_values_.tolist() if hasattr(attr_IncrementalPCA_singular_values_, 'tolist') else attr_IncrementalPCA_singular_values_`
    })()
  }

  /**
    Per-feature empirical mean, aggregate over calls to `partial\_fit`.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_mean_ = bridgeIncrementalPCA[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_mean_.tolist() if hasattr(attr_IncrementalPCA_mean_, 'tolist') else attr_IncrementalPCA_mean_`
    })()
  }

  /**
    Per-feature empirical variance, aggregate over calls to `partial\_fit`.
   */
  get var_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('IncrementalPCA must call init() before accessing var_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_var_ = bridgeIncrementalPCA[${this.id}].var_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_var_.tolist() if hasattr(attr_IncrementalPCA_var_, 'tolist') else attr_IncrementalPCA_var_`
    })()
  }

  /**
    The estimated noise covariance following the Probabilistic PCA model from Tipping and Bishop 1999. See “Pattern Recognition and Machine Learning” by C. Bishop, 12.2.1 p. 574 or [http://www.miketipping.com/papers/met-mppca.pdf](http://www.miketipping.com/papers/met-mppca.pdf).
   */
  get noise_variance_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing noise_variance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_noise_variance_ = bridgeIncrementalPCA[${this.id}].noise_variance_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_noise_variance_.tolist() if hasattr(attr_IncrementalPCA_noise_variance_, 'tolist') else attr_IncrementalPCA_noise_variance_`
    })()
  }

  /**
    The estimated number of components. Relevant when `n\_components=None`.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_n_components_ = bridgeIncrementalPCA[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_n_components_.tolist() if hasattr(attr_IncrementalPCA_n_components_, 'tolist') else attr_IncrementalPCA_n_components_`
    })()
  }

  /**
    The number of samples processed by the estimator. Will be reset on new calls to fit, but increments across `partial\_fit` calls.
   */
  get n_samples_seen_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing n_samples_seen_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_n_samples_seen_ = bridgeIncrementalPCA[${this.id}].n_samples_seen_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_n_samples_seen_.tolist() if hasattr(attr_IncrementalPCA_n_samples_seen_, 'tolist') else attr_IncrementalPCA_n_samples_seen_`
    })()
  }

  /**
    Inferred batch size from `batch\_size`.
   */
  get batch_size_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing batch_size_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_batch_size_ = bridgeIncrementalPCA[${this.id}].batch_size_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_batch_size_.tolist() if hasattr(attr_IncrementalPCA_batch_size_, 'tolist') else attr_IncrementalPCA_batch_size_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_n_features_in_ = bridgeIncrementalPCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_n_features_in_.tolist() if hasattr(attr_IncrementalPCA_n_features_in_, 'tolist') else attr_IncrementalPCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This IncrementalPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'IncrementalPCA must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IncrementalPCA_feature_names_in_ = bridgeIncrementalPCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IncrementalPCA_feature_names_in_.tolist() if hasattr(attr_IncrementalPCA_feature_names_in_, 'tolist') else attr_IncrementalPCA_feature_names_in_`
    })()
  }
}

export interface IncrementalPCAOptions {
  /**
    Number of components to keep. If `n\_components` is `undefined`, then `n\_components` is set to `min(n\_samples, n\_features)`.
   */
  n_components?: number

  /**
    When `true` (`false` by default) the `components\_` vectors are divided by `n\_samples` times `components\_` to ensure uncorrelated outputs with unit component-wise variances.

    Whitening will remove some information from the transformed signal (the relative variance scales of the components) but can sometimes improve the predictive accuracy of the downstream estimators by making data respect some hard-wired assumptions.

    @defaultValue `false`
   */
  whiten?: boolean

  /**
    If `false`, X will be overwritten. `copy=False` can be used to save memory but is unsafe for general use.

    @defaultValue `true`
   */
  copy?: boolean

  /**
    The number of samples to use for each batch. Only used when calling `fit`. If `batch\_size` is `undefined`, then `batch\_size` is inferred from the data and set to `5 \* n\_features`, to provide a balance between approximation accuracy and memory consumption.
   */
  batch_size?: number
}

export interface IncrementalPCAFitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface IncrementalPCAFitTransformOptions {
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

export interface IncrementalPCAGetCovarianceOptions {
  /**
    Estimated covariance of data.
   */
  cov?: any
}

export interface IncrementalPCAGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.IncrementalPCA.fit "sklearn.decomposition.IncrementalPCA.fit").
   */
  input_features?: any
}

export interface IncrementalPCAGetPrecisionOptions {
  /**
    Estimated precision of data.
   */
  precision?: any
}

export interface IncrementalPCAInverseTransformOptions {
  /**
    New data, where `n\_samples` is the number of samples and `n\_components` is the number of components.
   */
  X?: ArrayLike[]
}

export interface IncrementalPCAPartialFitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    Run check\_array on X.

    @defaultValue `true`
   */
  check_input?: boolean
}

export interface IncrementalPCASetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface IncrementalPCATransformOptions {
  /**
    New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]
}
