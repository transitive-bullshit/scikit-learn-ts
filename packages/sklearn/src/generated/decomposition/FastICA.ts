/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  FastICA: a fast algorithm for Independent Component Analysis.

  The implementation is based on [\[1\]](#r44c805292efc-1).

  Read more in the [User Guide](../decomposition.html#ica).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html)
 */
export class FastICA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of components to use. If `undefined` is passed, all are used.
     */
    n_components?: number

    /**
      Specify which algorithm to use for FastICA.

      @defaultValue `'parallel'`
     */
    algorithm?: 'parallel' | 'deflation'

    /**
      Specify the whitening strategy to use.

      @defaultValue `'warn'`
     */
    whiten?: string | boolean

    /**
      The functional form of the G function used in the approximation to neg-entropy. Could be either ‘logcosh’, ‘exp’, or ‘cube’. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:

      @defaultValue `'logcosh'`
     */
    fun?: 'logcosh' | 'exp' | 'cube'

    /**
      Arguments to send to the functional form. If empty or `undefined` and if fun=’logcosh’, fun\_args will take value {‘alpha’ : 1.0}.
     */
    fun_args?: any

    /**
      Maximum number of iterations during fit.

      @defaultValue `200`
     */
    max_iter?: number

    /**
      A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Initial un-mixing array. If `w\_init=None`, then an array of values drawn from a normal distribution is used.
     */
    w_init?: ArrayLike[]

    /**
      The solver to use for whitening.

      @defaultValue `'svd'`
     */
    whiten_solver?: 'eigh' | 'svd'

    /**
      Used to initialize `w\_init` when not specified, with a normal distribution. Pass an int, for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `FastICA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This FastICA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('FastICA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import FastICA
try: bridgeFastICA
except NameError: bridgeFastICA = {}
`

    // set up constructor params
    await this._py.ex`ctor_FastICA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'algorithm': ${this.opts['algorithm'] ?? undefined}, 'whiten': ${
      this.opts['whiten'] ?? undefined
    }, 'fun': ${this.opts['fun'] ?? undefined}, 'fun_args': ${
      this.opts['fun_args'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'w_init': np.array(${this.opts['w_init'] ?? undefined}) if ${
      this.opts['w_init'] !== undefined
    } else None, 'whiten_solver': ${
      this.opts['whiten_solver'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_FastICA = {k: v for k, v in ctor_FastICA.items() if v is not None}`

    await this._py.ex`bridgeFastICA[${this.id}] = FastICA(**ctor_FastICA)`

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

    await this._py.ex`del bridgeFastICA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to X.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FastICA_fit = {k: v for k, v in pms_FastICA_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_fit = bridgeFastICA[${this.id}].fit(**pms_FastICA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_fit.tolist() if hasattr(res_FastICA_fit, 'tolist') else res_FastICA_fit`
  }

  /**
    Fit the model and recover the sources from X.
   */
  async fit_transform(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FastICA_fit_transform = {k: v for k, v in pms_FastICA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_fit_transform = bridgeFastICA[${this.id}].fit_transform(**pms_FastICA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_fit_transform.tolist() if hasattr(res_FastICA_fit_transform, 'tolist') else res_FastICA_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.FastICA.fit "sklearn.decomposition.FastICA.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_FastICA_get_feature_names_out = {k: v for k, v in pms_FastICA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_get_feature_names_out = bridgeFastICA[${this.id}].get_feature_names_out(**pms_FastICA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_get_feature_names_out.tolist() if hasattr(res_FastICA_get_feature_names_out, 'tolist') else res_FastICA_get_feature_names_out`
  }

  /**
    Transform the sources back to the mixed data (apply mixing matrix).
   */
  async inverse_transform(opts: {
    /**
      Sources, where `n\_samples` is the number of samples and `n\_components` is the number of components.
     */
    X?: ArrayLike[]

    /**
      If `false`, data passed to fit are overwritten. Defaults to `true`.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_FastICA_inverse_transform = {k: v for k, v in pms_FastICA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_inverse_transform = bridgeFastICA[${this.id}].inverse_transform(**pms_FastICA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_inverse_transform.tolist() if hasattr(res_FastICA_inverse_transform, 'tolist') else res_FastICA_inverse_transform`
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
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_FastICA_set_output = {k: v for k, v in pms_FastICA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_set_output = bridgeFastICA[${this.id}].set_output(**pms_FastICA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_set_output.tolist() if hasattr(res_FastICA_set_output, 'tolist') else res_FastICA_set_output`
  }

  /**
    Recover the sources from X (apply the unmixing matrix).
   */
  async transform(opts: {
    /**
      Data to transform, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      If `false`, data passed to fit can be overwritten. Defaults to `true`.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_FastICA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_FastICA_transform = {k: v for k, v in pms_FastICA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FastICA_transform = bridgeFastICA[${this.id}].transform(**pms_FastICA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FastICA_transform.tolist() if hasattr(res_FastICA_transform, 'tolist') else res_FastICA_transform`
  }

  /**
    The linear operator to apply to the data to get the independent sources. This is equal to the unmixing matrix when `whiten` is `false`, and equal to `np.dot(unmixing\_matrix, self.whitening\_)` when `whiten` is `true`.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_components_ = bridgeFastICA[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_components_.tolist() if hasattr(attr_FastICA_components_, 'tolist') else attr_FastICA_components_`
    })()
  }

  /**
    The pseudo-inverse of `components\_`. It is the linear operator that maps independent sources to the data.
   */
  get mixing_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before accessing mixing_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_mixing_ = bridgeFastICA[${this.id}].mixing_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_mixing_.tolist() if hasattr(attr_FastICA_mixing_, 'tolist') else attr_FastICA_mixing_`
    })()
  }

  /**
    The mean over features. Only set if `self.whiten` is `true`.
   */
  get mean_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before accessing mean_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_FastICA_mean_ = bridgeFastICA[${this.id}].mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_mean_.tolist() if hasattr(attr_FastICA_mean_, 'tolist') else attr_FastICA_mean_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FastICA must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_n_features_in_ = bridgeFastICA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_n_features_in_.tolist() if hasattr(attr_FastICA_n_features_in_, 'tolist') else attr_FastICA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FastICA must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_feature_names_in_ = bridgeFastICA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_feature_names_in_.tolist() if hasattr(attr_FastICA_feature_names_in_, 'tolist') else attr_FastICA_feature_names_in_`
    })()
  }

  /**
    If the algorithm is “deflation”, n\_iter is the maximum number of iterations run across all components. Else they are just the number of iterations taken to converge.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_n_iter_ = bridgeFastICA[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_n_iter_.tolist() if hasattr(attr_FastICA_n_iter_, 'tolist') else attr_FastICA_n_iter_`
    })()
  }

  /**
    Only set if whiten is ‘`true`’. This is the pre-whitening matrix that projects data onto the first `n\_components` principal components.
   */
  get whitening_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This FastICA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FastICA must call init() before accessing whitening_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FastICA_whitening_ = bridgeFastICA[${this.id}].whitening_`

      // convert the result from python to node.js
      return this
        ._py`attr_FastICA_whitening_.tolist() if hasattr(attr_FastICA_whitening_, 'tolist') else attr_FastICA_whitening_`
    })()
  }
}
