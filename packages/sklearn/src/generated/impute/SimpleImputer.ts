/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Univariate imputer for completing missing values with simple strategies.

  Replace missing values using a descriptive statistic (e.g. mean, median, or most frequent) along each column, or using a constant value.

  Read more in the [User Guide](../impute.html#impute).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html)
 */
export class SimpleImputer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` can be set to either `np.nan` or `pd.NA`.
     */
    missing_values?: number | string

    /**
      The imputation strategy.

      @defaultValue `'mean'`
     */
    strategy?: string

    /**
      When strategy == “constant”, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types.
     */
    fill_value?: string

    /**
      If `true`, a copy of X will be created. If `false`, imputation will be done in-place whenever possible. Note that, in the following cases, a new copy will always be made, even if `copy=False`:

      @defaultValue `true`
     */
    copy?: boolean

    /**
      If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

      @defaultValue `false`
     */
    add_indicator?: boolean

    /**
      If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `strategy="constant"` in which case `fill\_value` will be used instead.

      @defaultValue `false`
     */
    keep_empty_features?: boolean
  }) {
    this.id = `SimpleImputer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SimpleImputer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.impute import SimpleImputer
try: bridgeSimpleImputer
except NameError: bridgeSimpleImputer = {}
`

    // set up constructor params
    await this._py.ex`ctor_SimpleImputer = {'missing_values': ${
      this.opts['missing_values'] ?? undefined
    }, 'strategy': ${this.opts['strategy'] ?? undefined}, 'fill_value': ${
      this.opts['fill_value'] ?? undefined
    }, 'copy': ${this.opts['copy'] ?? undefined}, 'add_indicator': ${
      this.opts['add_indicator'] ?? undefined
    }, 'keep_empty_features': ${this.opts['keep_empty_features'] ?? undefined}}

ctor_SimpleImputer = {k: v for k, v in ctor_SimpleImputer.items() if v is not None}`

    await this._py
      .ex`bridgeSimpleImputer[${this.id}] = SimpleImputer(**ctor_SimpleImputer)`

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

    await this._py.ex`del bridgeSimpleImputer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the imputer on `X`.
   */
  async fit(opts: {
    /**
      Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SimpleImputer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_SimpleImputer_fit = {k: v for k, v in pms_SimpleImputer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_fit = bridgeSimpleImputer[${this.id}].fit(**pms_SimpleImputer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_fit.tolist() if hasattr(res_SimpleImputer_fit, 'tolist') else res_SimpleImputer_fit`
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
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SimpleImputer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SimpleImputer_fit_transform = {k: v for k, v in pms_SimpleImputer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_fit_transform = bridgeSimpleImputer[${this.id}].fit_transform(**pms_SimpleImputer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_fit_transform.tolist() if hasattr(res_SimpleImputer_fit_transform, 'tolist') else res_SimpleImputer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SimpleImputer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SimpleImputer_get_feature_names_out = {k: v for k, v in pms_SimpleImputer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_get_feature_names_out = bridgeSimpleImputer[${this.id}].get_feature_names_out(**pms_SimpleImputer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_get_feature_names_out.tolist() if hasattr(res_SimpleImputer_get_feature_names_out, 'tolist') else res_SimpleImputer_get_feature_names_out`
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
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_SimpleImputer_get_metadata_routing = {k: v for k, v in pms_SimpleImputer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_get_metadata_routing = bridgeSimpleImputer[${this.id}].get_metadata_routing(**pms_SimpleImputer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_get_metadata_routing.tolist() if hasattr(res_SimpleImputer_get_metadata_routing, 'tolist') else res_SimpleImputer_get_metadata_routing`
  }

  /**
    Convert the data back to the original representation.

    Inverts the `transform` operation performed on an array. This operation can only be performed after [`SimpleImputer`](#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer") is instantiated with `add\_indicator=True`.

    Note that `inverse\_transform` can only invert the transform in features that have binary indicators for missing values. If a feature has no missing values at `fit` time, the feature won’t have a binary indicator, and the imputation done at `transform` time won’t be inverted.
   */
  async inverse_transform(opts: {
    /**
      The imputed data to be reverted to original data. It has to be an augmented array of imputed data and the missing indicator mask.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SimpleImputer_inverse_transform = {k: v for k, v in pms_SimpleImputer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_inverse_transform = bridgeSimpleImputer[${this.id}].inverse_transform(**pms_SimpleImputer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_inverse_transform.tolist() if hasattr(res_SimpleImputer_inverse_transform, 'tolist') else res_SimpleImputer_inverse_transform`
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
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SimpleImputer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SimpleImputer_set_output = {k: v for k, v in pms_SimpleImputer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_set_output = bridgeSimpleImputer[${this.id}].set_output(**pms_SimpleImputer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_set_output.tolist() if hasattr(res_SimpleImputer_set_output, 'tolist') else res_SimpleImputer_set_output`
  }

  /**
    Impute all missing values in `X`.
   */
  async transform(opts: {
    /**
      The input data to complete.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SimpleImputer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SimpleImputer_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SimpleImputer_transform = {k: v for k, v in pms_SimpleImputer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SimpleImputer_transform = bridgeSimpleImputer[${this.id}].transform(**pms_SimpleImputer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SimpleImputer_transform.tolist() if hasattr(res_SimpleImputer_transform, 'tolist') else res_SimpleImputer_transform`
  }

  /**
    The imputation fill value for each feature. Computing statistics can result in `np.nan` values. During [`transform`](#sklearn.impute.SimpleImputer.transform "sklearn.impute.SimpleImputer.transform"), features corresponding to `np.nan` statistics will be discarded.
   */
  get statistics_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before accessing statistics_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SimpleImputer_statistics_ = bridgeSimpleImputer[${this.id}].statistics_`

      // convert the result from python to node.js
      return this
        ._py`attr_SimpleImputer_statistics_.tolist() if hasattr(attr_SimpleImputer_statistics_, 'tolist') else attr_SimpleImputer_statistics_`
    })()
  }

  /**
    Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.
   */
  get indicator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before accessing indicator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SimpleImputer_indicator_ = bridgeSimpleImputer[${this.id}].indicator_`

      // convert the result from python to node.js
      return this
        ._py`attr_SimpleImputer_indicator_.tolist() if hasattr(attr_SimpleImputer_indicator_, 'tolist') else attr_SimpleImputer_indicator_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SimpleImputer_n_features_in_ = bridgeSimpleImputer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SimpleImputer_n_features_in_.tolist() if hasattr(attr_SimpleImputer_n_features_in_, 'tolist') else attr_SimpleImputer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SimpleImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SimpleImputer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SimpleImputer_feature_names_in_ = bridgeSimpleImputer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SimpleImputer_feature_names_in_.tolist() if hasattr(attr_SimpleImputer_feature_names_in_, 'tolist') else attr_SimpleImputer_feature_names_in_`
    })()
  }
}
