/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Univariate feature selector with configurable strategy.

  Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.GenericUnivariateSelect.html
 */
export class GenericUnivariateSelect {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GenericUnivariateSelectOptions) {
    this.id = `GenericUnivariateSelect${crypto.randomUUID().split('-')[0]}`
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
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'GenericUnivariateSelect.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import GenericUnivariateSelect
try: bridgeGenericUnivariateSelect
except NameError: bridgeGenericUnivariateSelect = {}
`

    // set up constructor params
    await this._py.ex`ctor_GenericUnivariateSelect = {'score_func': ${
      this.opts['score_func'] ?? undefined
    }, 'mode': ${this.opts['mode'] ?? undefined}, 'param': ${
      this.opts['param'] ?? undefined
    }}

ctor_GenericUnivariateSelect = {k: v for k, v in ctor_GenericUnivariateSelect.items() if v is not None}`

    await this._py
      .ex`bridgeGenericUnivariateSelect[${this.id}] = GenericUnivariateSelect(**ctor_GenericUnivariateSelect)`

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

    await this._py.ex`del bridgeGenericUnivariateSelect[${this.id}]`

    this._isDisposed = true
  }

  /**
    Run score function on (X, y) and get the appropriate features.
   */
  async fit(opts: GenericUnivariateSelectFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GenericUnivariateSelect must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GenericUnivariateSelect_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_GenericUnivariateSelect_fit = {k: v for k, v in pms_GenericUnivariateSelect_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_fit = bridgeGenericUnivariateSelect[${this.id}].fit(**pms_GenericUnivariateSelect_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_fit.tolist() if hasattr(res_GenericUnivariateSelect_fit, 'tolist') else res_GenericUnivariateSelect_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: GenericUnivariateSelectFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GenericUnivariateSelect_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_GenericUnivariateSelect_fit_transform = {k: v for k, v in pms_GenericUnivariateSelect_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_fit_transform = bridgeGenericUnivariateSelect[${this.id}].fit_transform(**pms_GenericUnivariateSelect_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_fit_transform.tolist() if hasattr(res_GenericUnivariateSelect_fit_transform, 'tolist') else res_GenericUnivariateSelect_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(
    opts: GenericUnivariateSelectGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GenericUnivariateSelect_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_GenericUnivariateSelect_get_feature_names_out = {k: v for k, v in pms_GenericUnivariateSelect_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_get_feature_names_out = bridgeGenericUnivariateSelect[${this.id}].get_feature_names_out(**pms_GenericUnivariateSelect_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_get_feature_names_out.tolist() if hasattr(res_GenericUnivariateSelect_get_feature_names_out, 'tolist') else res_GenericUnivariateSelect_get_feature_names_out`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(
    opts: GenericUnivariateSelectGetSupportOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before get_support()'
      )
    }

    // set up method params
    await this._py.ex`pms_GenericUnivariateSelect_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_GenericUnivariateSelect_get_support = {k: v for k, v in pms_GenericUnivariateSelect_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_get_support = bridgeGenericUnivariateSelect[${this.id}].get_support(**pms_GenericUnivariateSelect_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_get_support.tolist() if hasattr(res_GenericUnivariateSelect_get_support, 'tolist') else res_GenericUnivariateSelect_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(
    opts: GenericUnivariateSelectInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GenericUnivariateSelect_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GenericUnivariateSelect_inverse_transform = {k: v for k, v in pms_GenericUnivariateSelect_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_inverse_transform = bridgeGenericUnivariateSelect[${this.id}].inverse_transform(**pms_GenericUnivariateSelect_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_inverse_transform.tolist() if hasattr(res_GenericUnivariateSelect_inverse_transform, 'tolist') else res_GenericUnivariateSelect_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(
    opts: GenericUnivariateSelectSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_GenericUnivariateSelect_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_GenericUnivariateSelect_set_output = {k: v for k, v in pms_GenericUnivariateSelect_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_set_output = bridgeGenericUnivariateSelect[${this.id}].set_output(**pms_GenericUnivariateSelect_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_set_output.tolist() if hasattr(res_GenericUnivariateSelect_set_output, 'tolist') else res_GenericUnivariateSelect_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: GenericUnivariateSelectTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_GenericUnivariateSelect_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GenericUnivariateSelect_transform = {k: v for k, v in pms_GenericUnivariateSelect_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GenericUnivariateSelect_transform = bridgeGenericUnivariateSelect[${this.id}].transform(**pms_GenericUnivariateSelect_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GenericUnivariateSelect_transform.tolist() if hasattr(res_GenericUnivariateSelect_transform, 'tolist') else res_GenericUnivariateSelect_transform`
  }

  /**
    Scores of features.
   */
  get scores_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before accessing scores_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GenericUnivariateSelect_scores_ = bridgeGenericUnivariateSelect[${this.id}].scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_GenericUnivariateSelect_scores_.tolist() if hasattr(attr_GenericUnivariateSelect_scores_, 'tolist') else attr_GenericUnivariateSelect_scores_`
    })()
  }

  /**
    p-values of feature scores, `undefined` if `score\_func` returned scores only.
   */
  get pvalues_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before accessing pvalues_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GenericUnivariateSelect_pvalues_ = bridgeGenericUnivariateSelect[${this.id}].pvalues_`

      // convert the result from python to node.js
      return this
        ._py`attr_GenericUnivariateSelect_pvalues_.tolist() if hasattr(attr_GenericUnivariateSelect_pvalues_, 'tolist') else attr_GenericUnivariateSelect_pvalues_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GenericUnivariateSelect_n_features_in_ = bridgeGenericUnivariateSelect[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GenericUnivariateSelect_n_features_in_.tolist() if hasattr(attr_GenericUnivariateSelect_n_features_in_, 'tolist') else attr_GenericUnivariateSelect_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GenericUnivariateSelect instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GenericUnivariateSelect must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GenericUnivariateSelect_feature_names_in_ = bridgeGenericUnivariateSelect[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GenericUnivariateSelect_feature_names_in_.tolist() if hasattr(attr_GenericUnivariateSelect_feature_names_in_, 'tolist') else attr_GenericUnivariateSelect_feature_names_in_`
    })()
  }
}

export interface GenericUnivariateSelectOptions {
  /**
    Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). For modes ‘percentile’ or ‘kbest’ it can return a single array scores.
   */
  score_func?: any

  /**
    Feature selection mode.

    @defaultValue `'percentile'`
   */
  mode?: 'percentile' | 'k_best' | 'fpr' | 'fdr' | 'fwe'

  /**
    Parameter of the corresponding mode.

    @defaultValue `0.00001`
   */
  param?: 'all' | number | number
}

export interface GenericUnivariateSelectFitOptions {
  /**
    The training input samples.
   */
  X?: ArrayLike[]

  /**
    The target values (class labels in classification, real numbers in regression).
   */
  y?: ArrayLike
}

export interface GenericUnivariateSelectFitTransformOptions {
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

export interface GenericUnivariateSelectGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface GenericUnivariateSelectGetSupportOptions {
  /**
    If `true`, the return value will be an array of integers, rather than a boolean mask.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface GenericUnivariateSelectInverseTransformOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface GenericUnivariateSelectSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface GenericUnivariateSelectTransformOptions {
  /**
    The input samples.
   */
  X?: any
}
