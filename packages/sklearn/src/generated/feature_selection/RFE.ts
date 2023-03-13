/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Feature ranking with recursive feature elimination.

  Given an external estimator that assigns weights to features (e.g., the coefficients of a linear model), the goal of recursive feature elimination (RFE) is to select features by recursively considering smaller and smaller sets of features. First, the estimator is trained on the initial set of features and the importance of each feature is obtained either through any specific attribute or callable. Then, the least important features are pruned from current set of features. That procedure is recursively repeated on the pruned set until the desired number of features to select is eventually reached.

  Read more in the [User Guide](../feature_selection.html#rfe).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)
 */
export class RFE {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      A supervised learning estimator with a `fit` method that provides information about feature importance (e.g. `coef\_`, `feature\_importances\_`).
     */
    estimator?: any

    /**
      The number of features to select. If `undefined`, half of the features are selected. If integer, the parameter is the absolute number of features to select. If float between 0 and 1, it is the fraction of features to select.
     */
    n_features_to_select?: number

    /**
      If greater than or equal to 1, then `step` corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then `step` corresponds to the percentage (rounded down) of features to remove at each iteration.

      @defaultValue `1`
     */
    step?: number

    /**
      Controls verbosity of output.

      @defaultValue `0`
     */
    verbose?: number

    /**
      If ‘auto’, uses the feature importance either through a `coef\_` or `feature\_importances\_` attributes of estimator.

      Also accepts a string that specifies an attribute name/path for extracting feature importance (implemented with `attrgetter`). For example, give `regressor\_.coef\_` in case of [`TransformedTargetRegressor`](sklearn.compose.TransformedTargetRegressor.html#sklearn.compose.TransformedTargetRegressor "sklearn.compose.TransformedTargetRegressor") or `named\_steps.clf.feature\_importances\_` in case of class:`~sklearn.pipeline.Pipeline` with its last step named `clf`.

      If `callable`, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

      @defaultValue `'auto'`
     */
    importance_getter?: string
  }) {
    this.id = `RFE${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RFE.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import RFE
try: bridgeRFE
except NameError: bridgeRFE = {}
`

    // set up constructor params
    await this._py.ex`ctor_RFE = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_features_to_select': ${
      this.opts['n_features_to_select'] ?? undefined
    }, 'step': ${this.opts['step'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'importance_getter': ${this.opts['importance_getter'] ?? undefined}}

ctor_RFE = {k: v for k, v in ctor_RFE.items() if v is not None}`

    await this._py.ex`bridgeRFE[${this.id}] = RFE(**ctor_RFE)`

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

    await this._py.ex`del bridgeRFE[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the decision function of `X`.
   */
  async decision_function(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: any[]
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_RFE_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_decision_function = {k: v for k, v in pms_RFE_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_decision_function = bridgeRFE[${this.id}].decision_function(**pms_RFE_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_decision_function.tolist() if hasattr(res_RFE_decision_function, 'tolist') else res_RFE_decision_function`
  }

  /**
    Fit the RFE model and then the underlying estimator on the selected features.
   */
  async fit(opts: {
    /**
      The training input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      The target values.
     */
    y?: ArrayLike

    /**
      Additional parameters passed to the `fit` method of the underlying estimator.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RFE_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RFE_fit = {k: v for k, v in pms_RFE_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_RFE_fit = bridgeRFE[${this.id}].fit(**pms_RFE_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_fit.tolist() if hasattr(res_RFE_fit, 'tolist') else res_RFE_fit`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_RFE_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RFE_fit_transform = {k: v for k, v in pms_RFE_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_fit_transform = bridgeRFE[${this.id}].fit_transform(**pms_RFE_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_fit_transform.tolist() if hasattr(res_RFE_fit_transform, 'tolist') else res_RFE_fit_transform`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_RFE_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_RFE_get_feature_names_out = {k: v for k, v in pms_RFE_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_get_feature_names_out = bridgeRFE[${this.id}].get_feature_names_out(**pms_RFE_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_get_feature_names_out.tolist() if hasattr(res_RFE_get_feature_names_out, 'tolist') else res_RFE_get_feature_names_out`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before get_support()')
    }

    // set up method params
    await this._py.ex`pms_RFE_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_RFE_get_support = {k: v for k, v in pms_RFE_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_get_support = bridgeRFE[${this.id}].get_support(**pms_RFE_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_get_support.tolist() if hasattr(res_RFE_get_support, 'tolist') else res_RFE_get_support`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_RFE_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_inverse_transform = {k: v for k, v in pms_RFE_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_inverse_transform = bridgeRFE[${this.id}].inverse_transform(**pms_RFE_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_inverse_transform.tolist() if hasattr(res_RFE_inverse_transform, 'tolist') else res_RFE_inverse_transform`
  }

  /**
    Reduce X to the selected features and predict using the estimator.
   */
  async predict(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RFE_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_predict = {k: v for k, v in pms_RFE_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_predict = bridgeRFE[${this.id}].predict(**pms_RFE_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_predict.tolist() if hasattr(res_RFE_predict, 'tolist') else res_RFE_predict`
  }

  /**
    Predict class log-probabilities for X.
   */
  async predict_log_proba(opts: {
    /**
      The input samples.
     */
    X?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py.ex`pms_RFE_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_predict_log_proba = {k: v for k, v in pms_RFE_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_predict_log_proba = bridgeRFE[${this.id}].predict_log_proba(**pms_RFE_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_predict_log_proba.tolist() if hasattr(res_RFE_predict_log_proba, 'tolist') else res_RFE_predict_log_proba`
  }

  /**
    Predict class probabilities for X.
   */
  async predict_proba(opts: {
    /**
      The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.
     */
    X?: any[]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_RFE_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_predict_proba = {k: v for k, v in pms_RFE_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_predict_proba = bridgeRFE[${this.id}].predict_proba(**pms_RFE_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_predict_proba.tolist() if hasattr(res_RFE_predict_proba, 'tolist') else res_RFE_predict_proba`
  }

  /**
    Reduce X to the selected features and return the score of the estimator.
   */
  async score(opts: {
    /**
      The input samples.
     */
    X?: any

    /**
      The target values.
     */
    y?: any

    /**
      Parameters to pass to the `score` method of the underlying estimator.
     */
    fit_params?: any
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RFE_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RFE_score = {k: v for k, v in pms_RFE_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_score = bridgeRFE[${this.id}].score(**pms_RFE_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_score.tolist() if hasattr(res_RFE_score, 'tolist') else res_RFE_score`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_RFE_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_RFE_set_output = {k: v for k, v in pms_RFE_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_set_output = bridgeRFE[${this.id}].set_output(**pms_RFE_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_set_output.tolist() if hasattr(res_RFE_set_output, 'tolist') else res_RFE_set_output`
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
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_RFE_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFE_transform = {k: v for k, v in pms_RFE_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFE_transform = bridgeRFE[${this.id}].transform(**pms_RFE_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFE_transform.tolist() if hasattr(res_RFE_transform, 'tolist') else res_RFE_transform`
  }

  /**
    The fitted estimator used to select features.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing estimator_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RFE_estimator_ = bridgeRFE[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_estimator_.tolist() if hasattr(attr_RFE_estimator_, 'tolist') else attr_RFE_estimator_`
    })()
  }

  /**
    The number of selected features.
   */
  get n_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing n_features_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFE_n_features_ = bridgeRFE[${this.id}].n_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_n_features_.tolist() if hasattr(attr_RFE_n_features_, 'tolist') else attr_RFE_n_features_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFE_n_features_in_ = bridgeRFE[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_n_features_in_.tolist() if hasattr(attr_RFE_n_features_in_, 'tolist') else attr_RFE_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFE_feature_names_in_ = bridgeRFE[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_feature_names_in_.tolist() if hasattr(attr_RFE_feature_names_in_, 'tolist') else attr_RFE_feature_names_in_`
    })()
  }

  /**
    The feature ranking, such that `ranking\_\[i\]` corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.
   */
  get ranking_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing ranking_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RFE_ranking_ = bridgeRFE[${this.id}].ranking_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_ranking_.tolist() if hasattr(attr_RFE_ranking_, 'tolist') else attr_RFE_ranking_`
    })()
  }

  /**
    The mask of selected features.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RFE instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFE must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RFE_support_ = bridgeRFE[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFE_support_.tolist() if hasattr(attr_RFE_support_, 'tolist') else attr_RFE_support_`
    })()
  }
}
