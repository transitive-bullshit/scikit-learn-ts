/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transformer mixin that performs feature selection given a support mask

  This mixin provides a feature selector implementation with `transform` and `inverse\_transform` functionality given an implementation of `\_get\_support\_mask`.

  Methods

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectorMixin.html
 */
export class SelectorMixin {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SelectorMixinOptions) {
    this.id = `SelectorMixin${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SelectorMixin.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import SelectorMixin
try: bridgeSelectorMixin
except NameError: bridgeSelectorMixin = {}
`

    // set up constructor params
    await this._py.ex`ctor_SelectorMixin = {'X': np.array(${
      this.opts['X'] ?? undefined
    }) if ${this.opts['X'] !== undefined} else None, 'y': np.array(${
      this.opts['y'] ?? undefined
    }) if ${this.opts['y'] !== undefined} else None, 'fit_params': ${
      this.opts['fit_params'] ?? undefined
    }}

ctor_SelectorMixin = {k: v for k, v in ctor_SelectorMixin.items() if v is not None}`

    await this._py
      .ex`bridgeSelectorMixin[${this.id}] = SelectorMixin(**ctor_SelectorMixin)`

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

    await this._py.ex`del bridgeSelectorMixin[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: SelectorMixinFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectorMixin must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_SelectorMixin_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SelectorMixin_fit_transform = {k: v for k, v in pms_SelectorMixin_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_fit_transform = bridgeSelectorMixin[${this.id}].fit_transform(**pms_SelectorMixin_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_fit_transform.tolist() if hasattr(res_SelectorMixin_fit_transform, 'tolist') else res_SelectorMixin_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(
    opts: SelectorMixinGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectorMixin must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelectorMixin_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SelectorMixin_get_feature_names_out = {k: v for k, v in pms_SelectorMixin_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_get_feature_names_out = bridgeSelectorMixin[${this.id}].get_feature_names_out(**pms_SelectorMixin_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_get_feature_names_out.tolist() if hasattr(res_SelectorMixin_get_feature_names_out, 'tolist') else res_SelectorMixin_get_feature_names_out`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(opts: SelectorMixinGetSupportOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectorMixin must call init() before get_support()')
    }

    // set up method params
    await this._py.ex`pms_SelectorMixin_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_SelectorMixin_get_support = {k: v for k, v in pms_SelectorMixin_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_get_support = bridgeSelectorMixin[${this.id}].get_support(**pms_SelectorMixin_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_get_support.tolist() if hasattr(res_SelectorMixin_get_support, 'tolist') else res_SelectorMixin_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(
    opts: SelectorMixinInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectorMixin must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SelectorMixin_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelectorMixin_inverse_transform = {k: v for k, v in pms_SelectorMixin_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_inverse_transform = bridgeSelectorMixin[${this.id}].inverse_transform(**pms_SelectorMixin_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_inverse_transform.tolist() if hasattr(res_SelectorMixin_inverse_transform, 'tolist') else res_SelectorMixin_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SelectorMixinSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectorMixin must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SelectorMixin_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SelectorMixin_set_output = {k: v for k, v in pms_SelectorMixin_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_set_output = bridgeSelectorMixin[${this.id}].set_output(**pms_SelectorMixin_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_set_output.tolist() if hasattr(res_SelectorMixin_set_output, 'tolist') else res_SelectorMixin_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: SelectorMixinTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectorMixin must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SelectorMixin_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelectorMixin_transform = {k: v for k, v in pms_SelectorMixin_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectorMixin_transform = bridgeSelectorMixin[${this.id}].transform(**pms_SelectorMixin_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectorMixin_transform.tolist() if hasattr(res_SelectorMixin_transform, 'tolist') else res_SelectorMixin_transform`
  }

  /**
    Transformed array.
   */
  get X_new(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SelectorMixin instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectorMixin must call init() before accessing X_new')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectorMixin_X_new = bridgeSelectorMixin[${this.id}].X_new`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectorMixin_X_new.tolist() if hasattr(attr_SelectorMixin_X_new, 'tolist') else attr_SelectorMixin_X_new`
    })()
  }
}

export interface SelectorMixinOptions {
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

export interface SelectorMixinFitTransformOptions {
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

export interface SelectorMixinGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface SelectorMixinGetSupportOptions {
  /**
    If `true`, the return value will be an array of integers, rather than a boolean mask.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface SelectorMixinInverseTransformOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface SelectorMixinSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SelectorMixinTransformOptions {
  /**
    The input samples.
   */
  X?: any
}
