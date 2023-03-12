/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transformer that performs Sequential Feature Selection.

  This Sequential Feature Selector adds (forward selection) or removes (backward selection) features to form a feature subset in a greedy fashion. At each stage, this estimator chooses the best feature to add or remove based on the cross-validation score of an estimator. In the case of unsupervised learning, this Sequential Feature Selector looks only at the features (X), not the desired outputs (y).

  Read more in the [User Guide](../feature_selection.html#sequential-feature-selection).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.SequentialFeatureSelector.html)
 */
export class SequentialFeatureSelector {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SequentialFeatureSelectorOptions) {
    this.id = `SequentialFeatureSelector${crypto.randomUUID().split('-')[0]}`
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
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SequentialFeatureSelector.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import SequentialFeatureSelector
try: bridgeSequentialFeatureSelector
except NameError: bridgeSequentialFeatureSelector = {}
`

    // set up constructor params
    await this._py.ex`ctor_SequentialFeatureSelector = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_features_to_select': ${
      this.opts['n_features_to_select'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'direction': ${
      this.opts['direction'] ?? undefined
    }, 'scoring': ${this.opts['scoring'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_SequentialFeatureSelector = {k: v for k, v in ctor_SequentialFeatureSelector.items() if v is not None}`

    await this._py
      .ex`bridgeSequentialFeatureSelector[${this.id}] = SequentialFeatureSelector(**ctor_SequentialFeatureSelector)`

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

    await this._py.ex`del bridgeSequentialFeatureSelector[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn the features to select from X.
   */
  async fit(opts: SequentialFeatureSelectorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SequentialFeatureSelector must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SequentialFeatureSelector_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_SequentialFeatureSelector_fit = {k: v for k, v in pms_SequentialFeatureSelector_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_fit = bridgeSequentialFeatureSelector[${this.id}].fit(**pms_SequentialFeatureSelector_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_fit.tolist() if hasattr(res_SequentialFeatureSelector_fit, 'tolist') else res_SequentialFeatureSelector_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: SequentialFeatureSelectorFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SequentialFeatureSelector_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SequentialFeatureSelector_fit_transform = {k: v for k, v in pms_SequentialFeatureSelector_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_fit_transform = bridgeSequentialFeatureSelector[${this.id}].fit_transform(**pms_SequentialFeatureSelector_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_fit_transform.tolist() if hasattr(res_SequentialFeatureSelector_fit_transform, 'tolist') else res_SequentialFeatureSelector_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(
    opts: SequentialFeatureSelectorGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SequentialFeatureSelector_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SequentialFeatureSelector_get_feature_names_out = {k: v for k, v in pms_SequentialFeatureSelector_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_get_feature_names_out = bridgeSequentialFeatureSelector[${this.id}].get_feature_names_out(**pms_SequentialFeatureSelector_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_get_feature_names_out.tolist() if hasattr(res_SequentialFeatureSelector_get_feature_names_out, 'tolist') else res_SequentialFeatureSelector_get_feature_names_out`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(
    opts: SequentialFeatureSelectorGetSupportOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before get_support()'
      )
    }

    // set up method params
    await this._py.ex`pms_SequentialFeatureSelector_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_SequentialFeatureSelector_get_support = {k: v for k, v in pms_SequentialFeatureSelector_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_get_support = bridgeSequentialFeatureSelector[${this.id}].get_support(**pms_SequentialFeatureSelector_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_get_support.tolist() if hasattr(res_SequentialFeatureSelector_get_support, 'tolist') else res_SequentialFeatureSelector_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(
    opts: SequentialFeatureSelectorInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SequentialFeatureSelector_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SequentialFeatureSelector_inverse_transform = {k: v for k, v in pms_SequentialFeatureSelector_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_inverse_transform = bridgeSequentialFeatureSelector[${this.id}].inverse_transform(**pms_SequentialFeatureSelector_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_inverse_transform.tolist() if hasattr(res_SequentialFeatureSelector_inverse_transform, 'tolist') else res_SequentialFeatureSelector_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(
    opts: SequentialFeatureSelectorSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SequentialFeatureSelector_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SequentialFeatureSelector_set_output = {k: v for k, v in pms_SequentialFeatureSelector_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_set_output = bridgeSequentialFeatureSelector[${this.id}].set_output(**pms_SequentialFeatureSelector_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_set_output.tolist() if hasattr(res_SequentialFeatureSelector_set_output, 'tolist') else res_SequentialFeatureSelector_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(
    opts: SequentialFeatureSelectorTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SequentialFeatureSelector_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SequentialFeatureSelector_transform = {k: v for k, v in pms_SequentialFeatureSelector_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SequentialFeatureSelector_transform = bridgeSequentialFeatureSelector[${this.id}].transform(**pms_SequentialFeatureSelector_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SequentialFeatureSelector_transform.tolist() if hasattr(res_SequentialFeatureSelector_transform, 'tolist') else res_SequentialFeatureSelector_transform`
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SequentialFeatureSelector_n_features_in_ = bridgeSequentialFeatureSelector[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SequentialFeatureSelector_n_features_in_.tolist() if hasattr(attr_SequentialFeatureSelector_n_features_in_, 'tolist') else attr_SequentialFeatureSelector_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SequentialFeatureSelector_feature_names_in_ = bridgeSequentialFeatureSelector[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SequentialFeatureSelector_feature_names_in_.tolist() if hasattr(attr_SequentialFeatureSelector_feature_names_in_, 'tolist') else attr_SequentialFeatureSelector_feature_names_in_`
    })()
  }

  /**
    The number of features that were selected.
   */
  get n_features_to_select_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before accessing n_features_to_select_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SequentialFeatureSelector_n_features_to_select_ = bridgeSequentialFeatureSelector[${this.id}].n_features_to_select_`

      // convert the result from python to node.js
      return this
        ._py`attr_SequentialFeatureSelector_n_features_to_select_.tolist() if hasattr(attr_SequentialFeatureSelector_n_features_to_select_, 'tolist') else attr_SequentialFeatureSelector_n_features_to_select_`
    })()
  }

  /**
    The mask of selected features.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SequentialFeatureSelector instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SequentialFeatureSelector must call init() before accessing support_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SequentialFeatureSelector_support_ = bridgeSequentialFeatureSelector[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_SequentialFeatureSelector_support_.tolist() if hasattr(attr_SequentialFeatureSelector_support_, 'tolist') else attr_SequentialFeatureSelector_support_`
    })()
  }
}

export interface SequentialFeatureSelectorOptions {
  /**
    An unfitted estimator.
   */
  estimator?: any

  /**
    If `"auto"`, the behaviour depends on the `tol` parameter:

    @defaultValue `'warn'`
   */
  n_features_to_select?: 'auto' | number | number

  /**
    If the score is not incremented by at least `tol` between two consecutive feature additions or removals, stop adding or removing.

    `tol` can be negative when removing features using `direction="backward"`. It can be useful to reduce the number of features at the cost of a small decrease in the score.

    `tol` is enabled only when `n\_features\_to\_select` is `"auto"`.
   */
  tol?: number

  /**
    Whether to perform forward selection or backward selection.

    @defaultValue `'forward'`
   */
  direction?: 'forward' | 'backward'

  /**
    A single str (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set.

    NOTE that when using a custom scorer, it should return a single value.

    If `undefined`, the estimator’s score method is used.
   */
  scoring?: string

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    Number of jobs to run in parallel. When evaluating a new feature to add or remove, the cross-validation procedure is parallel over the folds. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface SequentialFeatureSelectorFitOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.
   */
  X?: ArrayLike[]

  /**
    Target values. This parameter may be ignored for unsupervised learning.
   */
  y?: ArrayLike
}

export interface SequentialFeatureSelectorFitTransformOptions {
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

export interface SequentialFeatureSelectorGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface SequentialFeatureSelectorGetSupportOptions {
  /**
    If `true`, the return value will be an array of integers, rather than a boolean mask.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface SequentialFeatureSelectorInverseTransformOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface SequentialFeatureSelectorSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SequentialFeatureSelectorTransformOptions {
  /**
    The input samples.
   */
  X?: any
}
