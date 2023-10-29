/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Dictionary learning.

  Finds a dictionary (a set of atoms) that performs well at sparsely encoding the fitted data.

  Solves the optimization problem:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.DictionaryLearning.html)
 */
export class DictionaryLearning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of dictionary elements to extract. If `undefined`, then `n\_components` is set to `n\_features`.
     */
    n_components?: number

    /**
      Sparsity controlling parameter.

      @defaultValue `1`
     */
    alpha?: number

    /**
      Maximum number of iterations to perform.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      Tolerance for numerical error.

      @defaultValue `1e-8`
     */
    tol?: number

    /**
      `'lars'`: uses the least angle regression method to solve the lasso problem ([`lars\_path`](sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path "sklearn.linear_model.lars_path"));

      @defaultValue `'lars'`
     */
    fit_algorithm?: 'lars' | 'cd'

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
      Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.
     */
    transform_n_nonzero_coefs?: number

    /**
      If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.
     */
    transform_alpha?: number

    /**
      Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Initial value for the code, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.
     */
    code_init?: NDArray[]

    /**
      Initial values for the dictionary, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.
     */
    dict_init?: NDArray[]

    /**
      Callable that gets invoked every five iterations.
     */
    callback?: any

    /**
      To control the verbosity of the procedure.

      @defaultValue `false`
     */
    verbose?: boolean

    /**
      Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

      @defaultValue `false`
     */
    split_sign?: boolean

    /**
      Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
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
      Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

      @defaultValue `1000`
     */
    transform_max_iter?: number
  }) {
    this.id = `DictionaryLearning${crypto.randomUUID().split('-')[0]}`
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
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DictionaryLearning.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import DictionaryLearning
try: bridgeDictionaryLearning
except NameError: bridgeDictionaryLearning = {}
`

    // set up constructor params
    await this._py.ex`ctor_DictionaryLearning = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'fit_algorithm': ${
      this.opts['fit_algorithm'] ?? undefined
    }, 'transform_algorithm': ${
      this.opts['transform_algorithm'] ?? undefined
    }, 'transform_n_nonzero_coefs': ${
      this.opts['transform_n_nonzero_coefs'] ?? undefined
    }, 'transform_alpha': ${
      this.opts['transform_alpha'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'code_init': np.array(${
      this.opts['code_init'] ?? undefined
    }) if ${
      this.opts['code_init'] !== undefined
    } else None, 'dict_init': np.array(${
      this.opts['dict_init'] ?? undefined
    }) if ${this.opts['dict_init'] !== undefined} else None, 'callback': ${
      this.opts['callback'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'split_sign': ${
      this.opts['split_sign'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'positive_code': ${
      this.opts['positive_code'] ?? undefined
    }, 'positive_dict': ${
      this.opts['positive_dict'] ?? undefined
    }, 'transform_max_iter': ${this.opts['transform_max_iter'] ?? undefined}}

ctor_DictionaryLearning = {k: v for k, v in ctor_DictionaryLearning.items() if v is not None}`

    await this._py
      .ex`bridgeDictionaryLearning[${this.id}] = DictionaryLearning(**ctor_DictionaryLearning)`

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

    await this._py.ex`del bridgeDictionaryLearning[${this.id}]`

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
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DictionaryLearning must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_DictionaryLearning_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_DictionaryLearning_fit = {k: v for k, v in pms_DictionaryLearning_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_fit = bridgeDictionaryLearning[${this.id}].fit(**pms_DictionaryLearning_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_fit.tolist() if hasattr(res_DictionaryLearning_fit, 'tolist') else res_DictionaryLearning_fit`
  }

  /**
    Fit the model from data in X and return the transformed data.
   */
  async fit_transform(opts: {
    /**
      Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_DictionaryLearning_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_DictionaryLearning_fit_transform = {k: v for k, v in pms_DictionaryLearning_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_fit_transform = bridgeDictionaryLearning[${this.id}].fit_transform(**pms_DictionaryLearning_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_fit_transform.tolist() if hasattr(res_DictionaryLearning_fit_transform, 'tolist') else res_DictionaryLearning_fit_transform`
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
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DictionaryLearning_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_DictionaryLearning_get_feature_names_out = {k: v for k, v in pms_DictionaryLearning_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_get_feature_names_out = bridgeDictionaryLearning[${this.id}].get_feature_names_out(**pms_DictionaryLearning_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_get_feature_names_out.tolist() if hasattr(res_DictionaryLearning_get_feature_names_out, 'tolist') else res_DictionaryLearning_get_feature_names_out`
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
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DictionaryLearning_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_DictionaryLearning_get_metadata_routing = {k: v for k, v in pms_DictionaryLearning_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_get_metadata_routing = bridgeDictionaryLearning[${this.id}].get_metadata_routing(**pms_DictionaryLearning_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_get_metadata_routing.tolist() if hasattr(res_DictionaryLearning_get_metadata_routing, 'tolist') else res_DictionaryLearning_get_metadata_routing`
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
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DictionaryLearning must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_DictionaryLearning_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_DictionaryLearning_set_output = {k: v for k, v in pms_DictionaryLearning_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_set_output = bridgeDictionaryLearning[${this.id}].set_output(**pms_DictionaryLearning_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_set_output.tolist() if hasattr(res_DictionaryLearning_set_output, 'tolist') else res_DictionaryLearning_set_output`
  }

  /**
    Encode the data as a sparse combination of the dictionary atoms.

    Coding method is determined by the object parameter `transform\_algorithm`.
   */
  async transform(opts: {
    /**
      Test data to be transformed, must have the same number of features as the data used to train the model.
     */
    X?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DictionaryLearning must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_DictionaryLearning_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_DictionaryLearning_transform = {k: v for k, v in pms_DictionaryLearning_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DictionaryLearning_transform = bridgeDictionaryLearning[${this.id}].transform(**pms_DictionaryLearning_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_DictionaryLearning_transform.tolist() if hasattr(res_DictionaryLearning_transform, 'tolist') else res_DictionaryLearning_transform`
  }

  /**
    dictionary atoms extracted from the data
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictionaryLearning_components_ = bridgeDictionaryLearning[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictionaryLearning_components_.tolist() if hasattr(attr_DictionaryLearning_components_, 'tolist') else attr_DictionaryLearning_components_`
    })()
  }

  /**
    vector of errors at each iteration
   */
  get error_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before accessing error_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictionaryLearning_error_ = bridgeDictionaryLearning[${this.id}].error_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictionaryLearning_error_.tolist() if hasattr(attr_DictionaryLearning_error_, 'tolist') else attr_DictionaryLearning_error_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictionaryLearning_n_features_in_ = bridgeDictionaryLearning[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictionaryLearning_n_features_in_.tolist() if hasattr(attr_DictionaryLearning_n_features_in_, 'tolist') else attr_DictionaryLearning_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictionaryLearning_feature_names_in_ = bridgeDictionaryLearning[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictionaryLearning_feature_names_in_.tolist() if hasattr(attr_DictionaryLearning_feature_names_in_, 'tolist') else attr_DictionaryLearning_feature_names_in_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This DictionaryLearning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DictionaryLearning must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DictionaryLearning_n_iter_ = bridgeDictionaryLearning[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_DictionaryLearning_n_iter_.tolist() if hasattr(attr_DictionaryLearning_n_iter_, 'tolist') else attr_DictionaryLearning_n_iter_`
    })()
  }
}
