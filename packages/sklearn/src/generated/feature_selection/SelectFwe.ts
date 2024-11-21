/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Filter: Select the p-values corresponding to Family-wise error rate.

  Read more in the [User Guide](../feature_selection.html#univariate-feature-selection).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFwe.html)
 */
export class SelectFwe {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Function taking two arrays X and y, and returning a pair of arrays (scores, pvalues). Default is f\_classif (see below “See Also”). The default function only works with classification tasks.
     */
    score_func?: any

    /**
      The highest uncorrected p-value for features to keep.

      @defaultValue `0.05`
     */
    alpha?: number
  }) {
    this.id = `SelectFwe${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SelectFwe.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import SelectFwe
try: bridgeSelectFwe
except NameError: bridgeSelectFwe = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_SelectFwe = {'score_func': ${this.opts['score_func'] ?? undefined}, 'alpha': ${this.opts['alpha'] ?? undefined}}

ctor_SelectFwe = {k: v for k, v in ctor_SelectFwe.items() if v is not None}`

    await this._py.ex`bridgeSelectFwe[${this.id}] = SelectFwe(**ctor_SelectFwe)`

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

    await this._py.ex`del bridgeSelectFwe[${this.id}]`

    this._isDisposed = true
  }

  /**
    Run score function on (X, y) and get the appropriate features.
   */
  async fit(opts: {
    /**
      The training input samples.
     */
    X?: ArrayLike[]

    /**
      The target values (class labels in classification, real numbers in regression). If the selector is unsupervised then `y` can be set to `undefined`.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_SelectFwe_fit = {k: v for k, v in pms_SelectFwe_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_fit = bridgeSelectFwe[${this.id}].fit(**pms_SelectFwe_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_fit.tolist() if hasattr(res_SelectFwe_fit, 'tolist') else res_SelectFwe_fit`
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
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_SelectFwe_fit_transform = {k: v for k, v in pms_SelectFwe_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_fit_transform = bridgeSelectFwe[${this.id}].fit_transform(**pms_SelectFwe_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_fit_transform.tolist() if hasattr(res_SelectFwe_fit_transform, 'tolist') else res_SelectFwe_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFwe must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_SelectFwe_get_feature_names_out = {k: v for k, v in pms_SelectFwe_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_get_feature_names_out = bridgeSelectFwe[${this.id}].get_feature_names_out(**pms_SelectFwe_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_get_feature_names_out.tolist() if hasattr(res_SelectFwe_get_feature_names_out, 'tolist') else res_SelectFwe_get_feature_names_out`
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
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFwe must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_SelectFwe_get_metadata_routing = {k: v for k, v in pms_SelectFwe_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_get_metadata_routing = bridgeSelectFwe[${this.id}].get_metadata_routing(**pms_SelectFwe_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_get_metadata_routing.tolist() if hasattr(res_SelectFwe_get_metadata_routing, 'tolist') else res_SelectFwe_get_metadata_routing`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(opts: {
    /**
      If `true`, the return value will be an array of integers, rather than a boolean mask.

      @defaultValue `false`
     */
    indices?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before get_support()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_get_support = {'indices': ${opts['indices'] ?? undefined}}

pms_SelectFwe_get_support = {k: v for k, v in pms_SelectFwe_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_get_support = bridgeSelectFwe[${this.id}].get_support(**pms_SelectFwe_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_get_support.tolist() if hasattr(res_SelectFwe_get_support, 'tolist') else res_SelectFwe_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before inverse_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_SelectFwe_inverse_transform = {k: v for k, v in pms_SelectFwe_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_inverse_transform = bridgeSelectFwe[${this.id}].inverse_transform(**pms_SelectFwe_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_inverse_transform.tolist() if hasattr(res_SelectFwe_inverse_transform, 'tolist') else res_SelectFwe_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_SelectFwe_set_output = {k: v for k, v in pms_SelectFwe_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_set_output = bridgeSelectFwe[${this.id}].set_output(**pms_SelectFwe_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_set_output.tolist() if hasattr(res_SelectFwe_set_output, 'tolist') else res_SelectFwe_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_SelectFwe_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_SelectFwe_transform = {k: v for k, v in pms_SelectFwe_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFwe_transform = bridgeSelectFwe[${this.id}].transform(**pms_SelectFwe_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFwe_transform.tolist() if hasattr(res_SelectFwe_transform, 'tolist') else res_SelectFwe_transform`
  }

  /**
    Scores of features.
   */
  get scores_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before accessing scores_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFwe_scores_ = bridgeSelectFwe[${this.id}].scores_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFwe_scores_.tolist() if hasattr(attr_SelectFwe_scores_, 'tolist') else attr_SelectFwe_scores_`
    })()
  }

  /**
    p-values of feature scores.
   */
  get pvalues_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFwe must call init() before accessing pvalues_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFwe_pvalues_ = bridgeSelectFwe[${this.id}].pvalues_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFwe_pvalues_.tolist() if hasattr(attr_SelectFwe_pvalues_, 'tolist') else attr_SelectFwe_pvalues_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFwe must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFwe_n_features_in_ = bridgeSelectFwe[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFwe_n_features_in_.tolist() if hasattr(attr_SelectFwe_n_features_in_, 'tolist') else attr_SelectFwe_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SelectFwe instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFwe must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFwe_feature_names_in_ = bridgeSelectFwe[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFwe_feature_names_in_.tolist() if hasattr(attr_SelectFwe_feature_names_in_, 'tolist') else attr_SelectFwe_feature_names_in_`
    })()
  }
}
