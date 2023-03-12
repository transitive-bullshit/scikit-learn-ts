/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Sparse Principal Components Analysis (SparsePCA).

  Finds the set of sparse components that can optimally reconstruct the data. The amount of sparseness is controllable by the coefficient of the L1 penalty, given by the parameter alpha.

  Read more in the [User Guide](../decomposition.html#sparsepca).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparsePCA.html)
 */
export class SparsePCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SparsePCAOptions) {
    this.id = `SparsePCA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SparsePCA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import SparsePCA
try: bridgeSparsePCA
except NameError: bridgeSparsePCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_SparsePCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'ridge_alpha': ${
      this.opts['ridge_alpha'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'method': ${this.opts['method'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'U_init': np.array(${this.opts['U_init'] ?? undefined}) if ${
      this.opts['U_init'] !== undefined
    } else None, 'V_init': np.array(${this.opts['V_init'] ?? undefined}) if ${
      this.opts['V_init'] !== undefined
    } else None, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_SparsePCA = {k: v for k, v in ctor_SparsePCA.items() if v is not None}`

    await this._py.ex`bridgeSparsePCA[${this.id}] = SparsePCA(**ctor_SparsePCA)`

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

    await this._py.ex`del bridgeSparsePCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model from data in X.
   */
  async fit(opts: SparsePCAFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SparsePCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SparsePCA_fit = {k: v for k, v in pms_SparsePCA_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_fit = bridgeSparsePCA[${this.id}].fit(**pms_SparsePCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_fit.tolist() if hasattr(res_SparsePCA_fit, 'tolist') else res_SparsePCA_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: SparsePCAFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_SparsePCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SparsePCA_fit_transform = {k: v for k, v in pms_SparsePCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_fit_transform = bridgeSparsePCA[${this.id}].fit_transform(**pms_SparsePCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_fit_transform.tolist() if hasattr(res_SparsePCA_fit_transform, 'tolist') else res_SparsePCA_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: SparsePCAGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparsePCA must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SparsePCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SparsePCA_get_feature_names_out = {k: v for k, v in pms_SparsePCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_get_feature_names_out = bridgeSparsePCA[${this.id}].get_feature_names_out(**pms_SparsePCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_get_feature_names_out.tolist() if hasattr(res_SparsePCA_get_feature_names_out, 'tolist') else res_SparsePCA_get_feature_names_out`
  }

  /**
    Transform data from the latent space to the original space.

    This inversion is an approximation due to the loss of information induced by the forward decomposition.
   */
  async inverse_transform(
    opts: SparsePCAInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_SparsePCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SparsePCA_inverse_transform = {k: v for k, v in pms_SparsePCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_inverse_transform = bridgeSparsePCA[${this.id}].inverse_transform(**pms_SparsePCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_inverse_transform.tolist() if hasattr(res_SparsePCA_inverse_transform, 'tolist') else res_SparsePCA_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SparsePCASetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SparsePCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SparsePCA_set_output = {k: v for k, v in pms_SparsePCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_set_output = bridgeSparsePCA[${this.id}].set_output(**pms_SparsePCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_set_output.tolist() if hasattr(res_SparsePCA_set_output, 'tolist') else res_SparsePCA_set_output`
  }

  /**
    Least Squares projection of the data onto the sparse components.

    To avoid instability issues in case the system is under-determined, regularization can be applied (Ridge regression) via the `ridge\_alpha` parameter.

    Note that Sparse PCA components orthogonality is not enforced as in PCA hence one cannot use a simple linear projection.
   */
  async transform(opts: SparsePCATransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SparsePCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SparsePCA_transform = {k: v for k, v in pms_SparsePCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparsePCA_transform = bridgeSparsePCA[${this.id}].transform(**pms_SparsePCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparsePCA_transform.tolist() if hasattr(res_SparsePCA_transform, 'tolist') else res_SparsePCA_transform`
  }

  /**
    Sparse components extracted from the data.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_components_ = bridgeSparsePCA[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_components_.tolist() if hasattr(attr_SparsePCA_components_, 'tolist') else attr_SparsePCA_components_`
    })()
  }

  /**
    Vector of errors at each iteration.
   */
  get error_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before accessing error_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_error_ = bridgeSparsePCA[${this.id}].error_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_error_.tolist() if hasattr(attr_SparsePCA_error_, 'tolist') else attr_SparsePCA_error_`
    })()
  }

  /**
    Estimated number of components.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparsePCA must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_n_components_ = bridgeSparsePCA[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_n_components_.tolist() if hasattr(attr_SparsePCA_n_components_, 'tolist') else attr_SparsePCA_n_components_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_n_iter_ = bridgeSparsePCA[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_n_iter_.tolist() if hasattr(attr_SparsePCA_n_iter_, 'tolist') else attr_SparsePCA_n_iter_`
    })()
  }

  /**
    Per-feature empirical mean, estimated from the training set. Equal to `X.mean(axis=0)`.
   */
  get mean_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparsePCA must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_mean_ = bridgeSparsePCA[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_mean_.tolist() if hasattr(attr_SparsePCA_mean_, 'tolist') else attr_SparsePCA_mean_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparsePCA must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_n_features_in_ = bridgeSparsePCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_n_features_in_.tolist() if hasattr(attr_SparsePCA_n_features_in_, 'tolist') else attr_SparsePCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SparsePCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparsePCA must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparsePCA_feature_names_in_ = bridgeSparsePCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparsePCA_feature_names_in_.tolist() if hasattr(attr_SparsePCA_feature_names_in_, 'tolist') else attr_SparsePCA_feature_names_in_`
    })()
  }
}

export interface SparsePCAOptions {
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
    Maximum number of iterations to perform.

    @defaultValue `1000`
   */
  max_iter?: number

  /**
    Tolerance for the stopping condition.

    @defaultValue `1e-8`
   */
  tol?: number

  /**
    Method to be used for optimization. lars: uses the least angle regression method to solve the lasso problem (linear\_model.lars\_path) cd: uses the coordinate descent method to compute the Lasso solution (linear\_model.Lasso). Lars will be faster if the estimated components are sparse.

    @defaultValue `'lars'`
   */
  method?: 'lars' | 'cd'

  /**
    Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Initial values for the loadings for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`.
   */
  U_init?: NDArray[]

  /**
    Initial values for the components for warm restart scenarios. Only used if `U\_init` and `V\_init` are not `undefined`.
   */
  V_init?: NDArray[]

  /**
    Controls the verbosity; the higher, the more messages. Defaults to 0.

    @defaultValue `false`
   */
  verbose?: number | boolean

  /**
    Used during dictionary learning. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface SparsePCAFitOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface SparsePCAFitTransformOptions {
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

export interface SparsePCAGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.SparsePCA.fit "sklearn.decomposition.SparsePCA.fit").
   */
  input_features?: any
}

export interface SparsePCAInverseTransformOptions {
  /**
    Data in the latent space.
   */
  X?: NDArray[]
}

export interface SparsePCASetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SparsePCATransformOptions {
  /**
    Test data to be transformed, must have the same number of features as the data used to train the model.
   */
  X?: NDArray[]
}
