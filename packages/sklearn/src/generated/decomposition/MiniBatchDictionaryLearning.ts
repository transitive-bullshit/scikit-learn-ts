/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mini-batch dictionary learning.

  Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

  Solves the optimization problem:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchDictionaryLearning.html)
 */
export class MiniBatchDictionaryLearning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of dictionary elements to extract.
     */
    n_components?: number

    /**
      Sparsity controlling parameter.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.

      @defaultValue `1`
     */
    max_iter?: number

    /**
      The algorithm used:

      @defaultValue `'lars'`
     */
    fit_algorithm?: 'lars' | 'cd'

    /**
      Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Number of samples in each mini-batch.

      @defaultValue `256`
     */
    batch_size?: number

    /**
      Whether to shuffle the samples before forming batches.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      Initial value of the dictionary for warm restart scenarios.
     */
    dict_init?: NDArray[]

    /**
      Algorithm used to transform the data:

      @defaultValue `'omp'`
     */
    transform_algorithm?:
      | 'lasso_lars'
      | 'lasso_cd'
      | 'lars'
      | 'omp'
      | 'threshold'

    /**
      Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform_n_nonzero_coefs=int(n_features / 10)`.
     */
    transform_n_nonzero_coefs?: number

    /**
      If `algorithm='lasso_lars'` or `algorithm='lasso_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.
     */
    transform_alpha?: number

    /**
      To control the verbosity of the procedure.

      @defaultValue `false`
     */
    verbose?: boolean | number

    /**
      Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

      @defaultValue `false`
     */
    split_sign?: boolean

    /**
      Used for initializing the dictionary when `dict_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Whether to enforce positivity when finding the code.

      @defaultValue `false`
     */
    positive_code?: boolean

    /**
      Whether to enforce positivity when finding the dictionary.

      @defaultValue `false`
     */
    positive_dict?: boolean

    /**
      Maximum number of iterations to perform if `algorithm='lasso_cd'` or `'lasso_lars'`.

      @defaultValue `1000`
     */
    transform_max_iter?: number

    /**
      A callable that gets invoked at the end of each iteration.
     */
    callback?: any

    /**
      Control early stopping based on the norm of the differences in the dictionary between 2 steps.

      To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function.

      To disable convergence detection based on cost function, set `max_no_improvement` to `undefined`.

      @defaultValue `10`
     */
    max_no_improvement?: number
  }) {
    this.id = `MiniBatchDictionaryLearning${crypto.randomUUID().split('-')[0]}`
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
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MiniBatchDictionaryLearning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import MiniBatchDictionaryLearning
try: bridgeMiniBatchDictionaryLearning
except NameError: bridgeMiniBatchDictionaryLearning = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MiniBatchDictionaryLearning = {'n_components': ${this.opts['n_components'] ?? undefined}, 'alpha': ${this.opts['alpha'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'fit_algorithm': ${this.opts['fit_algorithm'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'batch_size': ${this.opts['batch_size'] ?? undefined}, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'dict_init': np.array(${this.opts['dict_init'] ?? undefined}) if ${this.opts['dict_init'] !== undefined} else None, 'transform_algorithm': ${this.opts['transform_algorithm'] ?? undefined}, 'transform_n_nonzero_coefs': ${this.opts['transform_n_nonzero_coefs'] ?? undefined}, 'transform_alpha': ${this.opts['transform_alpha'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'split_sign': ${this.opts['split_sign'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'positive_code': ${this.opts['positive_code'] ?? undefined}, 'positive_dict': ${this.opts['positive_dict'] ?? undefined}, 'transform_max_iter': ${this.opts['transform_max_iter'] ?? undefined}, 'callback': ${this.opts['callback'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'max_no_improvement': ${this.opts['max_no_improvement'] ?? undefined}}

ctor_MiniBatchDictionaryLearning = {k: v for k, v in ctor_MiniBatchDictionaryLearning.items() if v is not None}`

    await this._py
      .ex`bridgeMiniBatchDictionaryLearning[${this.id}] = MiniBatchDictionaryLearning(**ctor_MiniBatchDictionaryLearning)`

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

    await this._py.ex`del bridgeMiniBatchDictionaryLearning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model from data in X.
   */
  async fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MiniBatchDictionaryLearning_fit = {k: v for k, v in pms_MiniBatchDictionaryLearning_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_fit = bridgeMiniBatchDictionaryLearning[${this.id}].fit(**pms_MiniBatchDictionaryLearning_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_fit.tolist() if hasattr(res_MiniBatchDictionaryLearning_fit, 'tolist') else res_MiniBatchDictionaryLearning_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.
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
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_MiniBatchDictionaryLearning_fit_transform = {k: v for k, v in pms_MiniBatchDictionaryLearning_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_fit_transform = bridgeMiniBatchDictionaryLearning[${this.id}].fit_transform(**pms_MiniBatchDictionaryLearning_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_fit_transform.tolist() if hasattr(res_MiniBatchDictionaryLearning_fit_transform, 'tolist') else res_MiniBatchDictionaryLearning_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_MiniBatchDictionaryLearning_get_feature_names_out = {k: v for k, v in pms_MiniBatchDictionaryLearning_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_get_feature_names_out = bridgeMiniBatchDictionaryLearning[${this.id}].get_feature_names_out(**pms_MiniBatchDictionaryLearning_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_get_feature_names_out.tolist() if hasattr(res_MiniBatchDictionaryLearning_get_feature_names_out, 'tolist') else res_MiniBatchDictionaryLearning_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_MiniBatchDictionaryLearning_get_metadata_routing = {k: v for k, v in pms_MiniBatchDictionaryLearning_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_get_metadata_routing = bridgeMiniBatchDictionaryLearning[${this.id}].get_metadata_routing(**pms_MiniBatchDictionaryLearning_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_get_metadata_routing.tolist() if hasattr(res_MiniBatchDictionaryLearning_get_metadata_routing, 'tolist') else res_MiniBatchDictionaryLearning_get_metadata_routing`
  }

  /**
    Update the model using the data in X as a mini-batch.
   */
  async partial_fit(opts: {
    /**
      Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before partial_fit()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_partial_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MiniBatchDictionaryLearning_partial_fit = {k: v for k, v in pms_MiniBatchDictionaryLearning_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_partial_fit = bridgeMiniBatchDictionaryLearning[${this.id}].partial_fit(**pms_MiniBatchDictionaryLearning_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_partial_fit.tolist() if hasattr(res_MiniBatchDictionaryLearning_partial_fit, 'tolist') else res_MiniBatchDictionaryLearning_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_MiniBatchDictionaryLearning_set_output = {k: v for k, v in pms_MiniBatchDictionaryLearning_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_set_output = bridgeMiniBatchDictionaryLearning[${this.id}].set_output(**pms_MiniBatchDictionaryLearning_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_set_output.tolist() if hasattr(res_MiniBatchDictionaryLearning_set_output, 'tolist') else res_MiniBatchDictionaryLearning_set_output`
  }

  /**
    Encode the data as a sparse combination of the dictionary atoms.

    Coding method is determined by the object parameter `transform_algorithm`.
   */
  async transform(opts: {
    /**
      Test data to be transformed, must have the same number of features as the data used to train the model.
     */
    X?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchDictionaryLearning_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_MiniBatchDictionaryLearning_transform = {k: v for k, v in pms_MiniBatchDictionaryLearning_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchDictionaryLearning_transform = bridgeMiniBatchDictionaryLearning[${this.id}].transform(**pms_MiniBatchDictionaryLearning_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchDictionaryLearning_transform.tolist() if hasattr(res_MiniBatchDictionaryLearning_transform, 'tolist') else res_MiniBatchDictionaryLearning_transform`
  }

  /**
    Components extracted from the data.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchDictionaryLearning_components_ = bridgeMiniBatchDictionaryLearning[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchDictionaryLearning_components_.tolist() if hasattr(attr_MiniBatchDictionaryLearning_components_, 'tolist') else attr_MiniBatchDictionaryLearning_components_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchDictionaryLearning_n_features_in_ = bridgeMiniBatchDictionaryLearning[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchDictionaryLearning_n_features_in_.tolist() if hasattr(attr_MiniBatchDictionaryLearning_n_features_in_, 'tolist') else attr_MiniBatchDictionaryLearning_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchDictionaryLearning_feature_names_in_ = bridgeMiniBatchDictionaryLearning[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchDictionaryLearning_feature_names_in_.tolist() if hasattr(attr_MiniBatchDictionaryLearning_feature_names_in_, 'tolist') else attr_MiniBatchDictionaryLearning_feature_names_in_`
    })()
  }

  /**
    Number of iterations over the full dataset.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchDictionaryLearning_n_iter_ = bridgeMiniBatchDictionaryLearning[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchDictionaryLearning_n_iter_.tolist() if hasattr(attr_MiniBatchDictionaryLearning_n_iter_, 'tolist') else attr_MiniBatchDictionaryLearning_n_iter_`
    })()
  }

  /**
    Number of mini-batches processed.
   */
  get n_steps_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MiniBatchDictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchDictionaryLearning must call init() before accessing n_steps_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchDictionaryLearning_n_steps_ = bridgeMiniBatchDictionaryLearning[${this.id}].n_steps_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchDictionaryLearning_n_steps_.tolist() if hasattr(attr_MiniBatchDictionaryLearning_n_steps_, 'tolist') else attr_MiniBatchDictionaryLearning_n_steps_`
    })()
  }
}
