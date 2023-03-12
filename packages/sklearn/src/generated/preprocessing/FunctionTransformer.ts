/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Constructs a transformer from an arbitrary callable.

  A FunctionTransformer forwards its X (and optionally y) arguments to a user-defined function or function object and returns the result of this function. This is useful for stateless transformations such as taking the log of frequencies, doing custom scaling, etc.

  Note: If a lambda is used as the function, then the resulting transformer will not be pickleable.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.FunctionTransformer.html
 */
export class FunctionTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: FunctionTransformerOptions) {
    this.id = `FunctionTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'FunctionTransformer.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import FunctionTransformer
try: bridgeFunctionTransformer
except NameError: bridgeFunctionTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_FunctionTransformer = {'func': ${
      this.opts['func'] ?? undefined
    }, 'inverse_func': ${this.opts['inverse_func'] ?? undefined}, 'validate': ${
      this.opts['validate'] ?? undefined
    }, 'accept_sparse': ${
      this.opts['accept_sparse'] ?? undefined
    }, 'check_inverse': ${
      this.opts['check_inverse'] ?? undefined
    }, 'feature_names_out': ${
      this.opts['feature_names_out'] ?? undefined
    }, 'kw_args': ${this.opts['kw_args'] ?? undefined}, 'inv_kw_args': ${
      this.opts['inv_kw_args'] ?? undefined
    }}

ctor_FunctionTransformer = {k: v for k, v in ctor_FunctionTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeFunctionTransformer[${this.id}] = FunctionTransformer(**ctor_FunctionTransformer)`

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

    await this._py.ex`del bridgeFunctionTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit transformer by checking X.

    If `validate` is `True`, `X` will be checked.
   */
  async fit(opts: FunctionTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('FunctionTransformer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_FunctionTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_FunctionTransformer_fit = {k: v for k, v in pms_FunctionTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_fit = bridgeFunctionTransformer[${this.id}].fit(**pms_FunctionTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_fit.tolist() if hasattr(res_FunctionTransformer_fit, 'tolist') else res_FunctionTransformer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: FunctionTransformerFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_FunctionTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_FunctionTransformer_fit_transform = {k: v for k, v in pms_FunctionTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_fit_transform = bridgeFunctionTransformer[${this.id}].fit_transform(**pms_FunctionTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_fit_transform.tolist() if hasattr(res_FunctionTransformer_fit_transform, 'tolist') else res_FunctionTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.

    This method is only defined if `feature\_names\_out` is not None.
   */
  async get_feature_names_out(
    opts: FunctionTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FunctionTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_FunctionTransformer_get_feature_names_out = {k: v for k, v in pms_FunctionTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_get_feature_names_out = bridgeFunctionTransformer[${this.id}].get_feature_names_out(**pms_FunctionTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_get_feature_names_out.tolist() if hasattr(res_FunctionTransformer_get_feature_names_out, 'tolist') else res_FunctionTransformer_get_feature_names_out`
  }

  /**
    Transform X using the inverse function.
   */
  async inverse_transform(
    opts: FunctionTransformerInverseTransformOptions
  ): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FunctionTransformer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_FunctionTransformer_inverse_transform = {k: v for k, v in pms_FunctionTransformer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_inverse_transform = bridgeFunctionTransformer[${this.id}].inverse_transform(**pms_FunctionTransformer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_inverse_transform.tolist() if hasattr(res_FunctionTransformer_inverse_transform, 'tolist') else res_FunctionTransformer_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: FunctionTransformerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_FunctionTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_FunctionTransformer_set_output = {k: v for k, v in pms_FunctionTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_set_output = bridgeFunctionTransformer[${this.id}].set_output(**pms_FunctionTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_set_output.tolist() if hasattr(res_FunctionTransformer_set_output, 'tolist') else res_FunctionTransformer_set_output`
  }

  /**
    Transform X using the forward function.
   */
  async transform(
    opts: FunctionTransformerTransformOptions
  ): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('FunctionTransformer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_FunctionTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_FunctionTransformer_transform = {k: v for k, v in pms_FunctionTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FunctionTransformer_transform = bridgeFunctionTransformer[${this.id}].transform(**pms_FunctionTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FunctionTransformer_transform.tolist() if hasattr(res_FunctionTransformer_transform, 'tolist') else res_FunctionTransformer_transform`
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FunctionTransformer_n_features_in_ = bridgeFunctionTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FunctionTransformer_n_features_in_.tolist() if hasattr(attr_FunctionTransformer_n_features_in_, 'tolist') else attr_FunctionTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This FunctionTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'FunctionTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FunctionTransformer_feature_names_in_ = bridgeFunctionTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_FunctionTransformer_feature_names_in_.tolist() if hasattr(attr_FunctionTransformer_feature_names_in_, 'tolist') else attr_FunctionTransformer_feature_names_in_`
    })()
  }
}

export interface FunctionTransformerOptions {
  /**
    The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is None, then func will be the identity function.
   */
  func?: any

  /**
    The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse\_func is None, then inverse\_func will be the identity function.
   */
  inverse_func?: any

  /**
    Indicate that the input X array should be checked before calling `func`. The possibilities are:

    @defaultValue `false`
   */
  validate?: boolean

  /**
    Indicate that func accepts a sparse matrix as input. If validate is False, this has no effect. Otherwise, if accept\_sparse is false, sparse matrix inputs will cause an exception to be raised.

    @defaultValue `false`
   */
  accept_sparse?: boolean

  /**
    Whether to check that or `func` followed by `inverse\_func` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.

    @defaultValue `true`
   */
  check_inverse?: boolean

  /**
    Determines the list of feature names that will be returned by the `get\_feature\_names\_out` method. If it is ‘one-to-one’, then the output feature names will be equal to the input feature names. If it is a callable, then it must take two positional arguments: this `FunctionTransformer` (`self`) and an array-like of input feature names (`input\_features`). It must return an array-like of output feature names. The `get\_feature\_names\_out` method is only defined if `feature\_names\_out` is not None.

    See `get\_feature\_names\_out` for more details.
   */
  feature_names_out?: 'one-to-one'

  /**
    Dictionary of additional keyword arguments to pass to func.
   */
  kw_args?: any

  /**
    Dictionary of additional keyword arguments to pass to inverse\_func.
   */
  inv_kw_args?: any
}

export interface FunctionTransformerFitOptions {
  /**
    Input array.
   */
  X?: any

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface FunctionTransformerFitTransformOptions {
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

export interface FunctionTransformerGetFeatureNamesOutOptions {
  /**
    Input feature names.
   */
  input_features?: any
}

export interface FunctionTransformerInverseTransformOptions {
  /**
    Input array.
   */
  X?: any
}

export interface FunctionTransformerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface FunctionTransformerTransformOptions {
  /**
    Input array.
   */
  X?: any
}
