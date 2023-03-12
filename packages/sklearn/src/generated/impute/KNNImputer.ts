/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Imputation for completing missing values using k-Nearest Neighbors.

  Each sample’s missing values are imputed using the mean value from `n\_neighbors` nearest neighbors found in the training set. Two samples are close if the features that neither is missing are close.

  Read more in the [User Guide](../impute.html#knnimpute).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.impute.KNNImputer.html
 */
export class KNNImputer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KNNImputerOptions) {
    this.id = `KNNImputer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KNNImputer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.impute import KNNImputer
try: bridgeKNNImputer
except NameError: bridgeKNNImputer = {}
`

    // set up constructor params
    await this._py.ex`ctor_KNNImputer = {'missing_values': ${
      this.opts['missing_values'] ?? undefined
    }, 'n_neighbors': ${this.opts['n_neighbors'] ?? undefined}, 'weights': ${
      this.opts['weights'] ?? undefined
    }, 'metric': ${this.opts['metric'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }, 'add_indicator': ${
      this.opts['add_indicator'] ?? undefined
    }, 'keep_empty_features': ${this.opts['keep_empty_features'] ?? undefined}}

ctor_KNNImputer = {k: v for k, v in ctor_KNNImputer.items() if v is not None}`

    await this._py
      .ex`bridgeKNNImputer[${this.id}] = KNNImputer(**ctor_KNNImputer)`

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

    await this._py.ex`del bridgeKNNImputer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the imputer on X.
   */
  async fit(opts: KNNImputerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KNNImputer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KNNImputer_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_KNNImputer_fit = {k: v for k, v in pms_KNNImputer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNNImputer_fit = bridgeKNNImputer[${this.id}].fit(**pms_KNNImputer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KNNImputer_fit.tolist() if hasattr(res_KNNImputer_fit, 'tolist') else res_KNNImputer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: KNNImputerFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KNNImputer must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_KNNImputer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_KNNImputer_fit_transform = {k: v for k, v in pms_KNNImputer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNNImputer_fit_transform = bridgeKNNImputer[${this.id}].fit_transform(**pms_KNNImputer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KNNImputer_fit_transform.tolist() if hasattr(res_KNNImputer_fit_transform, 'tolist') else res_KNNImputer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: KNNImputerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNNImputer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KNNImputer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_KNNImputer_get_feature_names_out = {k: v for k, v in pms_KNNImputer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNNImputer_get_feature_names_out = bridgeKNNImputer[${this.id}].get_feature_names_out(**pms_KNNImputer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KNNImputer_get_feature_names_out.tolist() if hasattr(res_KNNImputer_get_feature_names_out, 'tolist') else res_KNNImputer_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: KNNImputerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KNNImputer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_KNNImputer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_KNNImputer_set_output = {k: v for k, v in pms_KNNImputer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNNImputer_set_output = bridgeKNNImputer[${this.id}].set_output(**pms_KNNImputer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KNNImputer_set_output.tolist() if hasattr(res_KNNImputer_set_output, 'tolist') else res_KNNImputer_set_output`
  }

  /**
    Impute all missing values in X.
   */
  async transform(opts: KNNImputerTransformOptions): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KNNImputer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_KNNImputer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KNNImputer_transform = {k: v for k, v in pms_KNNImputer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KNNImputer_transform = bridgeKNNImputer[${this.id}].transform(**pms_KNNImputer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KNNImputer_transform.tolist() if hasattr(res_KNNImputer_transform, 'tolist') else res_KNNImputer_transform`
  }

  /**
    Indicator used to add binary indicators for missing values. `None` if add\_indicator is False.
   */
  get indicator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KNNImputer must call init() before accessing indicator_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNNImputer_indicator_ = bridgeKNNImputer[${this.id}].indicator_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNNImputer_indicator_.tolist() if hasattr(attr_KNNImputer_indicator_, 'tolist') else attr_KNNImputer_indicator_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNNImputer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNNImputer_n_features_in_ = bridgeKNNImputer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNNImputer_n_features_in_.tolist() if hasattr(attr_KNNImputer_n_features_in_, 'tolist') else attr_KNNImputer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KNNImputer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KNNImputer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KNNImputer_feature_names_in_ = bridgeKNNImputer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KNNImputer_feature_names_in_.tolist() if hasattr(attr_KNNImputer_feature_names_in_, 'tolist') else attr_KNNImputer_feature_names_in_`
    })()
  }
}

export interface KNNImputerOptions {
  /**
    The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to np.nan, since `pd.NA` will be converted to np.nan.
   */
  missing_values?: number | string

  /**
    Number of neighboring samples to use for imputation.

    @defaultValue `5`
   */
  n_neighbors?: number

  /**
    Weight function used in prediction. Possible values:

    @defaultValue `'uniform'`
   */
  weights?: 'uniform' | 'distance'

  /**
    Distance metric for searching neighbors. Possible values:

    @defaultValue `'nan_euclidean'`
   */
  metric?: 'nan_euclidean'

  /**
    If True, a copy of X will be created. If False, imputation will be done in-place whenever possible.

    @defaultValue `true`
   */
  copy?: boolean

  /**
    If True, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto the output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

    @defaultValue `false`
   */
  add_indicator?: boolean

  /**
    If True, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0`.

    @defaultValue `false`
   */
  keep_empty_features?: boolean
}

export interface KNNImputerFitOptions {
  /**
    Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: any

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface KNNImputerFitTransformOptions {
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

export interface KNNImputerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface KNNImputerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface KNNImputerTransformOptions {
  /**
    The input data to complete.
   */
  X?: ArrayLike[]
}
