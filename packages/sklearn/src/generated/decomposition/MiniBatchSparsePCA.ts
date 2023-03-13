/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mini-batch Sparse Principal Components Analysis.

  Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

  Read more in the [User Guide](../decomposition.html#sparsepca).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchSparsePCA.html)
 */
export class MiniBatchSparsePCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of sparse atoms to extract. If `undefined`, then `n\_components` is set to `n\_features`.
     */
    n_components?: number

    /**
      Sparsity controlling parameter. Higher values lead to sparser components.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Amount of ridge shrinkage to apply in order to improve conditioning when calling the transform method.

      @defaultValue `0.01`
     */
    ridge_alpha?: number

    /**
      Number of iterations to perform for each mini batch.

      @defaultValue `100`
     */
    n_iter?: number

    /**
      Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored.
     */
    max_iter?: number

    /**
      Callable that gets invoked every five iterations.
     */
    callback?: any

    /**
      The number of features to take in each mini batch.

      @defaultValue `3`
     */
    batch_size?: number

    /**
      Controls the verbosity; the higher, the more messages. Defaults to 0.

      @defaultValue `false`
     */
    verbose?: number | boolean

    /**
      Whether to shuffle the data before splitting it in batches.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.

      @defaultValue `'lars'`
     */
    method?: 'lars' | 'cd'

    /**
      Used for random shuffling when `shuffle` is set to `true`, during online dictionary learning. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.

      To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.

      To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

      @defaultValue `10`
     */
    max_no_improvement?: number
  }) {
    this.id = `MiniBatchSparsePCA${crypto.randomUUID().split('-')[0]}`
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
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MiniBatchSparsePCA.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import MiniBatchSparsePCA
try: bridgeMiniBatchSparsePCA
except NameError: bridgeMiniBatchSparsePCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_MiniBatchSparsePCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'ridge_alpha': ${
      this.opts['ridge_alpha'] ?? undefined
    }, 'n_iter': ${this.opts['n_iter'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'callback': ${this.opts['callback'] ?? undefined}, 'batch_size': ${
      this.opts['batch_size'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'shuffle': ${
      this.opts['shuffle'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'method': ${
      this.opts['method'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_no_improvement': ${this.opts['max_no_improvement'] ?? undefined}}

ctor_MiniBatchSparsePCA = {k: v for k, v in ctor_MiniBatchSparsePCA.items() if v is not None}`

    await this._py
      .ex`bridgeMiniBatchSparsePCA[${this.id}] = MiniBatchSparsePCA(**ctor_MiniBatchSparsePCA)`

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

    await this._py.ex`del bridgeMiniBatchSparsePCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model from data in X.
   */
  async fit(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchSparsePCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchSparsePCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MiniBatchSparsePCA_fit = {k: v for k, v in pms_MiniBatchSparsePCA_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_fit = bridgeMiniBatchSparsePCA[${this.id}].fit(**pms_MiniBatchSparsePCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_fit.tolist() if hasattr(res_MiniBatchSparsePCA_fit, 'tolist') else res_MiniBatchSparsePCA_fit`
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
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MiniBatchSparsePCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_MiniBatchSparsePCA_fit_transform = {k: v for k, v in pms_MiniBatchSparsePCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_fit_transform = bridgeMiniBatchSparsePCA[${this.id}].fit_transform(**pms_MiniBatchSparsePCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_fit_transform.tolist() if hasattr(res_MiniBatchSparsePCA_fit_transform, 'tolist') else res_MiniBatchSparsePCA_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.MiniBatchSparsePCA.fit "sklearn.decomposition.MiniBatchSparsePCA.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchSparsePCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MiniBatchSparsePCA_get_feature_names_out = {k: v for k, v in pms_MiniBatchSparsePCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_get_feature_names_out = bridgeMiniBatchSparsePCA[${this.id}].get_feature_names_out(**pms_MiniBatchSparsePCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_get_feature_names_out.tolist() if hasattr(res_MiniBatchSparsePCA_get_feature_names_out, 'tolist') else res_MiniBatchSparsePCA_get_feature_names_out`
  }

  /**
    Transform data from the latent space to the original space.

    This inversion is an approximation due to the loss of information induced by the forward decomposition.
   */
  async inverse_transform(opts: {
    /**
      Data in the latent space.
     */
    X?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchSparsePCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MiniBatchSparsePCA_inverse_transform = {k: v for k, v in pms_MiniBatchSparsePCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_inverse_transform = bridgeMiniBatchSparsePCA[${this.id}].inverse_transform(**pms_MiniBatchSparsePCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_inverse_transform.tolist() if hasattr(res_MiniBatchSparsePCA_inverse_transform, 'tolist') else res_MiniBatchSparsePCA_inverse_transform`
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
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchSparsePCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchSparsePCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MiniBatchSparsePCA_set_output = {k: v for k, v in pms_MiniBatchSparsePCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_set_output = bridgeMiniBatchSparsePCA[${this.id}].set_output(**pms_MiniBatchSparsePCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_set_output.tolist() if hasattr(res_MiniBatchSparsePCA_set_output, 'tolist') else res_MiniBatchSparsePCA_set_output`
  }

  /**
    Least Squares projection of the data onto the sparse components.

    To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

    Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.
   */
  async transform(opts: {
    /**
      Test data to be transformed, must have the same number of features as the data used to train the model.
     */
    X?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchSparsePCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchSparsePCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MiniBatchSparsePCA_transform = {k: v for k, v in pms_MiniBatchSparsePCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchSparsePCA_transform = bridgeMiniBatchSparsePCA[${this.id}].transform(**pms_MiniBatchSparsePCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchSparsePCA_transform.tolist() if hasattr(res_MiniBatchSparsePCA_transform, 'tolist') else res_MiniBatchSparsePCA_transform`
  }

  /**
    Sparse components extracted from the data.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_components_ = bridgeMiniBatchSparsePCA[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_components_.tolist() if hasattr(attr_MiniBatchSparsePCA_components_, 'tolist') else attr_MiniBatchSparsePCA_components_`
    })()
  }

  /**
    Estimated number of components.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_n_components_ = bridgeMiniBatchSparsePCA[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_n_components_.tolist() if hasattr(attr_MiniBatchSparsePCA_n_components_, 'tolist') else attr_MiniBatchSparsePCA_n_components_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_n_iter_ = bridgeMiniBatchSparsePCA[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_n_iter_.tolist() if hasattr(attr_MiniBatchSparsePCA_n_iter_, 'tolist') else attr_MiniBatchSparsePCA_n_iter_`
    })()
  }

  /**
    Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing mean_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_mean_ = bridgeMiniBatchSparsePCA[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_mean_.tolist() if hasattr(attr_MiniBatchSparsePCA_mean_, 'tolist') else attr_MiniBatchSparsePCA_mean_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_n_features_in_ = bridgeMiniBatchSparsePCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_n_features_in_.tolist() if hasattr(attr_MiniBatchSparsePCA_n_features_in_, 'tolist') else attr_MiniBatchSparsePCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchSparsePCA instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchSparsePCA must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchSparsePCA_feature_names_in_ = bridgeMiniBatchSparsePCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchSparsePCA_feature_names_in_.tolist() if hasattr(attr_MiniBatchSparsePCA_feature_names_in_, 'tolist') else attr_MiniBatchSparsePCA_feature_names_in_`
    })()
  }
}
