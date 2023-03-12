/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Binary indicators for missing values.

  Note that this component typically should not be used in a vanilla `Pipeline` consisting of transformers and a classifier, but rather could be added using a `FeatureUnion` or `ColumnTransformer`.

  Read more in the [User Guide](../impute.html#impute).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.impute.MissingIndicator.html
 */
export class MissingIndicator {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MissingIndicatorOptions) {
    this.id = `MissingIndicator${crypto.randomUUID().split('-')[0]}`
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
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MissingIndicator.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.impute import MissingIndicator
try: bridgeMissingIndicator
except NameError: bridgeMissingIndicator = {}
`

    // set up constructor params
    await this._py.ex`ctor_MissingIndicator = {'missing_values': ${
      this.opts['missing_values'] ?? undefined
    }, 'features': ${this.opts['features'] ?? undefined}, 'sparse': ${
      this.opts['sparse'] ?? undefined
    }, 'error_on_new': ${this.opts['error_on_new'] ?? undefined}}

ctor_MissingIndicator = {k: v for k, v in ctor_MissingIndicator.items() if v is not None}`

    await this._py
      .ex`bridgeMissingIndicator[${this.id}] = MissingIndicator(**ctor_MissingIndicator)`

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

    await this._py.ex`del bridgeMissingIndicator[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the transformer on `X`.
   */
  async fit(opts: MissingIndicatorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MissingIndicator must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MissingIndicator_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MissingIndicator_fit = {k: v for k, v in pms_MissingIndicator_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MissingIndicator_fit = bridgeMissingIndicator[${this.id}].fit(**pms_MissingIndicator_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MissingIndicator_fit.tolist() if hasattr(res_MissingIndicator_fit, 'tolist') else res_MissingIndicator_fit`
  }

  /**
    Generate missing values indicator for `X`.
   */
  async fit_transform(
    opts: MissingIndicatorFitTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MissingIndicator must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MissingIndicator_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MissingIndicator_fit_transform = {k: v for k, v in pms_MissingIndicator_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MissingIndicator_fit_transform = bridgeMissingIndicator[${this.id}].fit_transform(**pms_MissingIndicator_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MissingIndicator_fit_transform.tolist() if hasattr(res_MissingIndicator_fit_transform, 'tolist') else res_MissingIndicator_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: MissingIndicatorGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MissingIndicator must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MissingIndicator_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MissingIndicator_get_feature_names_out = {k: v for k, v in pms_MissingIndicator_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MissingIndicator_get_feature_names_out = bridgeMissingIndicator[${this.id}].get_feature_names_out(**pms_MissingIndicator_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MissingIndicator_get_feature_names_out.tolist() if hasattr(res_MissingIndicator_get_feature_names_out, 'tolist') else res_MissingIndicator_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: MissingIndicatorSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MissingIndicator must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MissingIndicator_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MissingIndicator_set_output = {k: v for k, v in pms_MissingIndicator_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MissingIndicator_set_output = bridgeMissingIndicator[${this.id}].set_output(**pms_MissingIndicator_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MissingIndicator_set_output.tolist() if hasattr(res_MissingIndicator_set_output, 'tolist') else res_MissingIndicator_set_output`
  }

  /**
    Generate missing values indicator for `X`.
   */
  async transform(
    opts: MissingIndicatorTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MissingIndicator must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MissingIndicator_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MissingIndicator_transform = {k: v for k, v in pms_MissingIndicator_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MissingIndicator_transform = bridgeMissingIndicator[${this.id}].transform(**pms_MissingIndicator_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MissingIndicator_transform.tolist() if hasattr(res_MissingIndicator_transform, 'tolist') else res_MissingIndicator_transform`
  }

  /**
    The features indices which will be returned when calling [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform"). They are computed during [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). If `features='all'`, `features\_` is equal to `range(n\_features)`.
   */
  get features_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MissingIndicator must call init() before accessing features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MissingIndicator_features_ = bridgeMissingIndicator[${this.id}].features_`

      // convert the result from python to node.js
      return this
        ._py`attr_MissingIndicator_features_.tolist() if hasattr(attr_MissingIndicator_features_, 'tolist') else attr_MissingIndicator_features_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MissingIndicator must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MissingIndicator_n_features_in_ = bridgeMissingIndicator[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MissingIndicator_n_features_in_.tolist() if hasattr(attr_MissingIndicator_n_features_in_, 'tolist') else attr_MissingIndicator_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MissingIndicator instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MissingIndicator must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MissingIndicator_feature_names_in_ = bridgeMissingIndicator[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MissingIndicator_feature_names_in_.tolist() if hasattr(attr_MissingIndicator_feature_names_in_, 'tolist') else attr_MissingIndicator_feature_names_in_`
    })()
  }
}

export interface MissingIndicatorOptions {
  /**
    The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`.
   */
  missing_values?: number | string

  /**
    Whether the imputer mask should represent all or a subset of features.

    @defaultValue `'missing-only'`
   */
  features?: 'missing-only' | 'all'

  /**
    Whether the imputer mask format should be sparse or dense.

    @defaultValue `'auto'`
   */
  sparse?: boolean | 'auto'

  /**
    If `True`, [`transform`](#sklearn.impute.MissingIndicator.transform "sklearn.impute.MissingIndicator.transform") will raise an error when there are features with missing values that have no missing values in [`fit`](#sklearn.impute.MissingIndicator.fit "sklearn.impute.MissingIndicator.fit"). This is applicable only when `features='missing-only'`.

    @defaultValue `true`
   */
  error_on_new?: boolean
}

export interface MissingIndicatorFitOptions {
  /**
    Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface MissingIndicatorFitTransformOptions {
  /**
    The input data to complete.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface MissingIndicatorGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface MissingIndicatorSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface MissingIndicatorTransformOptions {
  /**
    The input data to complete.
   */
  X?: ArrayLike | SparseMatrix[]
}
