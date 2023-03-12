/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Meta-transformer for selecting features based on importance weights.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SelectFromModel.html
 */
export class SelectFromModel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SelectFromModelOptions) {
    this.id = `SelectFromModel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SelectFromModel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import SelectFromModel
try: bridgeSelectFromModel
except NameError: bridgeSelectFromModel = {}
`

    // set up constructor params
    await this._py.ex`ctor_SelectFromModel = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'threshold': ${this.opts['threshold'] ?? undefined}, 'prefit': ${
      this.opts['prefit'] ?? undefined
    }, 'norm_order': ${this.opts['norm_order'] ?? undefined}, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'importance_getter': ${this.opts['importance_getter'] ?? undefined}}

ctor_SelectFromModel = {k: v for k, v in ctor_SelectFromModel.items() if v is not None}`

    await this._py
      .ex`bridgeSelectFromModel[${this.id}] = SelectFromModel(**ctor_SelectFromModel)`

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

    await this._py.ex`del bridgeSelectFromModel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the SelectFromModel meta-transformer.
   */
  async fit(opts: SelectFromModelFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SelectFromModel_fit = {k: v for k, v in pms_SelectFromModel_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_fit = bridgeSelectFromModel[${this.id}].fit(**pms_SelectFromModel_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_fit.tolist() if hasattr(res_SelectFromModel_fit, 'tolist') else res_SelectFromModel_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: SelectFromModelFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SelectFromModel_fit_transform = {k: v for k, v in pms_SelectFromModel_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_fit_transform = bridgeSelectFromModel[${this.id}].fit_transform(**pms_SelectFromModel_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_fit_transform.tolist() if hasattr(res_SelectFromModel_fit_transform, 'tolist') else res_SelectFromModel_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(
    opts: SelectFromModelGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFromModel must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SelectFromModel_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SelectFromModel_get_feature_names_out = {k: v for k, v in pms_SelectFromModel_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_get_feature_names_out = bridgeSelectFromModel[${this.id}].get_feature_names_out(**pms_SelectFromModel_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_get_feature_names_out.tolist() if hasattr(res_SelectFromModel_get_feature_names_out, 'tolist') else res_SelectFromModel_get_feature_names_out`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(opts: SelectFromModelGetSupportOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before get_support()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_SelectFromModel_get_support = {k: v for k, v in pms_SelectFromModel_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_get_support = bridgeSelectFromModel[${this.id}].get_support(**pms_SelectFromModel_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_get_support.tolist() if hasattr(res_SelectFromModel_get_support, 'tolist') else res_SelectFromModel_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(
    opts: SelectFromModelInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFromModel must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelectFromModel_inverse_transform = {k: v for k, v in pms_SelectFromModel_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_inverse_transform = bridgeSelectFromModel[${this.id}].inverse_transform(**pms_SelectFromModel_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_inverse_transform.tolist() if hasattr(res_SelectFromModel_inverse_transform, 'tolist') else res_SelectFromModel_inverse_transform`
  }

  /**
    Fit the SelectFromModel meta-transformer only once.
   */
  async partial_fit(opts: SelectFromModelPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SelectFromModel_partial_fit = {k: v for k, v in pms_SelectFromModel_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_partial_fit = bridgeSelectFromModel[${this.id}].partial_fit(**pms_SelectFromModel_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_partial_fit.tolist() if hasattr(res_SelectFromModel_partial_fit, 'tolist') else res_SelectFromModel_partial_fit`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SelectFromModelSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SelectFromModel_set_output = {k: v for k, v in pms_SelectFromModel_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_set_output = bridgeSelectFromModel[${this.id}].set_output(**pms_SelectFromModel_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_set_output.tolist() if hasattr(res_SelectFromModel_set_output, 'tolist') else res_SelectFromModel_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: SelectFromModelTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SelectFromModel must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SelectFromModel_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SelectFromModel_transform = {k: v for k, v in pms_SelectFromModel_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SelectFromModel_transform = bridgeSelectFromModel[${this.id}].transform(**pms_SelectFromModel_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SelectFromModel_transform.tolist() if hasattr(res_SelectFromModel_transform, 'tolist') else res_SelectFromModel_transform`
  }

  /**
    The base estimator from which the transformer is built. This attribute exist only when `fit` has been called.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFromModel must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFromModel_estimator_ = bridgeSelectFromModel[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFromModel_estimator_.tolist() if hasattr(attr_SelectFromModel_estimator_, 'tolist') else attr_SelectFromModel_estimator_`
    })()
  }

  /**
    Maximum number of features calculated during [fit](../../glossary.html#term-fit). Only defined if the `max\_features` is not `undefined`.
   */
  get max_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFromModel must call init() before accessing max_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFromModel_max_features_ = bridgeSelectFromModel[${this.id}].max_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFromModel_max_features_.tolist() if hasattr(attr_SelectFromModel_max_features_, 'tolist') else attr_SelectFromModel_max_features_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SelectFromModel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SelectFromModel must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SelectFromModel_feature_names_in_ = bridgeSelectFromModel[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SelectFromModel_feature_names_in_.tolist() if hasattr(attr_SelectFromModel_feature_names_in_, 'tolist') else attr_SelectFromModel_feature_names_in_`
    })()
  }
}

export interface SelectFromModelOptions {
  /**
    The base estimator from which the transformer is built. This can be both a fitted (if `prefit` is set to `true`) or a non-fitted estimator. The estimator should have a `feature\_importances\_` or `coef\_` attribute after fitting. Otherwise, the `importance\_getter` parameter should be used.
   */
  estimator?: any

  /**
    The threshold value to use for feature selection. Features whose absolute importance value is greater or equal are kept while the others are discarded. If “median” (resp. “mean”), then the `threshold` value is the median (resp. the mean) of the feature importances. A scaling factor (e.g., “1.25\*mean”) may also be used. If `undefined` and if the estimator has a parameter penalty set to l1, either explicitly or implicitly (e.g, Lasso), the threshold used is 1e-5. Otherwise, “mean” is used by default.
   */
  threshold?: string | number

  /**
    Whether a prefit model is expected to be passed into the constructor directly or not. If `true`, `estimator` must be a fitted estimator. If `false`, `estimator` is fitted and updated by calling `fit` and `partial\_fit`, respectively.

    @defaultValue `false`
   */
  prefit?: boolean

  /**
    Order of the norm used to filter the vectors of coefficients below `threshold` in the case where the `coef\_` attribute of the estimator is of dimension 2.

    @defaultValue `1`
   */
  norm_order?: any

  /**
    The maximum number of features to select.
   */
  max_features?: number

  /**
    If ‘auto’, uses the feature importance either through a `coef\_` attribute or `feature\_importances\_` attribute of estimator.

    Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") with its last step named `clf`.

    If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

    @defaultValue `'auto'`
   */
  importance_getter?: string
}

export interface SelectFromModelFitOptions {
  /**
    The training input samples.
   */
  X?: ArrayLike[]

  /**
    The target values (integers that correspond to classes in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Other estimator specific parameters.
   */
  fit_params?: any
}

export interface SelectFromModelFitTransformOptions {
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

export interface SelectFromModelGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface SelectFromModelGetSupportOptions {
  /**
    If `true`, the return value will be an array of integers, rather than a boolean mask.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface SelectFromModelInverseTransformOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface SelectFromModelPartialFitOptions {
  /**
    The training input samples.
   */
  X?: ArrayLike[]

  /**
    The target values (integers that correspond to classes in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Other estimator specific parameters.
   */
  fit_params?: any
}

export interface SelectFromModelSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SelectFromModelTransformOptions {
  /**
    The input samples.
   */
  X?: any
}
