/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multivariate imputer that estimates each feature from all the others.

  A strategy for imputing missing values by modeling each feature with missing values as a function of other features in a round-robin fashion.

  Read more in the [User Guide](../impute.html#iterative-imputer).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.impute.IterativeImputer.html)
 */
export class IterativeImputer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The estimator to use at each step of the round-robin imputation. If `sample\_posterior=True`, the estimator must support `return\_std` in its `predict` method.
     */
    estimator?: any

    /**
      The placeholder for the missing values. All occurrences of `missing\_values` will be imputed. For pandas’ dataframes with nullable integer dtypes with missing values, `missing\_values` should be set to `np.nan`, since `pd.NA` will be converted to `np.nan`.
     */
    missing_values?: number

    /**
      Whether to sample from the (Gaussian) predictive posterior of the fitted estimator for each imputation. Estimator must support `return\_std` in its `predict` method if set to `true`. Set to `true` if using `IterativeImputer` for multiple imputations.

      @defaultValue `false`
     */
    sample_posterior?: boolean

    /**
      Maximum number of imputation rounds to perform before returning the imputations computed during the final round. A round is a single imputation of each feature with missing values. The stopping criterion is met once `max(abs(X\_t \- X\_{t-1}))/max(abs(X\[known\_vals\])) < tol`, where `X\_t` is `X` at iteration `t`. Note that early stopping is only applied if `sample\_posterior=False`.

      @defaultValue `10`
     */
    max_iter?: number

    /**
      Tolerance of the stopping condition.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Number of other features to use to estimate the missing values of each feature column. Nearness between features is measured using the absolute correlation coefficient between each feature pair (after initial imputation). To ensure coverage of features throughout the imputation process, the neighbor features are not necessarily nearest, but are drawn with probability proportional to correlation for each imputed target feature. Can provide significant speed-up when the number of features is huge. If `undefined`, all features will be used.
     */
    n_nearest_features?: number

    /**
      Which strategy to use to initialize the missing values. Same as the `strategy` parameter in [`SimpleImputer`](sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer "sklearn.impute.SimpleImputer").

      @defaultValue `'mean'`
     */
    initial_strategy?: 'mean' | 'median' | 'most_frequent' | 'constant'

    /**
      When `strategy="constant"`, `fill\_value` is used to replace all occurrences of missing\_values. For string or object data types, `fill\_value` must be a string. If `undefined`, `fill\_value` will be 0 when imputing numerical data and “missing\_value” for strings or object data types.
     */
    fill_value?: string

    /**
      The order in which the features will be imputed. Possible values:

      @defaultValue `'ascending'`
     */
    imputation_order?:
      | 'ascending'
      | 'descending'
      | 'roman'
      | 'arabic'
      | 'random'

    /**
      If `true` then features with missing values during [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") which did not have any missing values during [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") will be imputed with the initial imputation method only. Set to `true` if you have many features with no missing values at both [`fit`](#sklearn.impute.IterativeImputer.fit "sklearn.impute.IterativeImputer.fit") and [`transform`](#sklearn.impute.IterativeImputer.transform "sklearn.impute.IterativeImputer.transform") time to save compute.

      @defaultValue `false`
     */
    skip_complete?: boolean

    /**
      Minimum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one min value for each feature. The default is `\-np.inf`.
     */
    min_value?: number | ArrayLike

    /**
      Maximum possible imputed value. Broadcast to shape `(n\_features,)` if scalar. If array-like, expects shape `(n\_features,)`, one max value for each feature. The default is `np.inf`.
     */
    max_value?: number | ArrayLike

    /**
      Verbosity flag, controls the debug messages that are issued as functions are evaluated. The higher, the more verbose. Can be 0, 1, or 2.

      @defaultValue `0`
     */
    verbose?: number

    /**
      The seed of the pseudo random number generator to use. Randomizes selection of estimator features if `n\_nearest\_features` is not `undefined`, the `imputation\_order` if `random`, and the sampling from posterior if `sample\_posterior=True`. Use an integer for determinism. See [the Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      If `true`, a [`MissingIndicator`](sklearn.impute.MissingIndicator.html#sklearn.impute.MissingIndicator "sklearn.impute.MissingIndicator") transform will stack onto output of the imputer’s transform. This allows a predictive estimator to account for missingness despite imputation. If a feature has no missing values at fit/train time, the feature won’t appear on the missing indicator even if there are missing values at transform/test time.

      @defaultValue `false`
     */
    add_indicator?: boolean

    /**
      If `true`, features that consist exclusively of missing values when `fit` is called are returned in results when `transform` is called. The imputed value is always `0` except when `initial\_strategy="constant"` in which case `fill\_value` will be used instead.

      @defaultValue `false`
     */
    keep_empty_features?: boolean
  }) {
    this.id = `IterativeImputer${crypto.randomUUID().split('-')[0]}`
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
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('IterativeImputer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.impute import IterativeImputer
try: bridgeIterativeImputer
except NameError: bridgeIterativeImputer = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_IterativeImputer = {'estimator': ${this.opts['estimator'] ?? undefined}, 'missing_values': ${this.opts['missing_values'] ?? undefined}, 'sample_posterior': ${this.opts['sample_posterior'] ?? undefined}, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${this.opts['tol'] ?? undefined}, 'n_nearest_features': ${this.opts['n_nearest_features'] ?? undefined}, 'initial_strategy': ${this.opts['initial_strategy'] ?? undefined}, 'fill_value': ${this.opts['fill_value'] ?? undefined}, 'imputation_order': ${this.opts['imputation_order'] ?? undefined}, 'skip_complete': ${this.opts['skip_complete'] ?? undefined}, 'min_value': np.array(${this.opts['min_value'] ?? undefined}) if ${this.opts['min_value'] !== undefined} else None, 'max_value': np.array(${this.opts['max_value'] ?? undefined}) if ${this.opts['max_value'] !== undefined} else None, 'verbose': ${this.opts['verbose'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'add_indicator': ${this.opts['add_indicator'] ?? undefined}, 'keep_empty_features': ${this.opts['keep_empty_features'] ?? undefined}}

ctor_IterativeImputer = {k: v for k, v in ctor_IterativeImputer.items() if v is not None}`

    await this._py
      .ex`bridgeIterativeImputer[${this.id}] = IterativeImputer(**ctor_IterativeImputer)`

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

    await this._py.ex`del bridgeIterativeImputer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the imputer on `X` and return self.
   */
  async fit(opts: {
    /**
      Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Parameters routed to the `fit` method of the sub-estimator via the metadata routing API.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IterativeImputer must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_fit = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_IterativeImputer_fit = {k: v for k, v in pms_IterativeImputer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_fit = bridgeIterativeImputer[${this.id}].fit(**pms_IterativeImputer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_fit.tolist() if hasattr(res_IterativeImputer_fit, 'tolist') else res_IterativeImputer_fit`
  }

  /**
    Fit the imputer on `X` and return the transformed `X`.
   */
  async fit_transform(opts: {
    /**
      Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Parameters routed to the `fit` method of the sub-estimator via the metadata routing API.
     */
    params?: any
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_fit_transform = {'X': ${opts['X'] ?? undefined}, 'y': ${opts['y'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_IterativeImputer_fit_transform = {k: v for k, v in pms_IterativeImputer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_fit_transform = bridgeIterativeImputer[${this.id}].fit_transform(**pms_IterativeImputer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_fit_transform.tolist() if hasattr(res_IterativeImputer_fit_transform, 'tolist') else res_IterativeImputer_fit_transform`
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
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_IterativeImputer_get_feature_names_out = {k: v for k, v in pms_IterativeImputer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_get_feature_names_out = bridgeIterativeImputer[${this.id}].get_feature_names_out(**pms_IterativeImputer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_get_feature_names_out.tolist() if hasattr(res_IterativeImputer_get_feature_names_out, 'tolist') else res_IterativeImputer_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_IterativeImputer_get_metadata_routing = {k: v for k, v in pms_IterativeImputer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_get_metadata_routing = bridgeIterativeImputer[${this.id}].get_metadata_routing(**pms_IterativeImputer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_get_metadata_routing.tolist() if hasattr(res_IterativeImputer_get_metadata_routing, 'tolist') else res_IterativeImputer_get_metadata_routing`
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
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IterativeImputer must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_IterativeImputer_set_output = {k: v for k, v in pms_IterativeImputer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_set_output = bridgeIterativeImputer[${this.id}].set_output(**pms_IterativeImputer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_set_output.tolist() if hasattr(res_IterativeImputer_set_output, 'tolist') else res_IterativeImputer_set_output`
  }

  /**
    Impute all missing values in `X`.

    Note that this is stochastic, and that if `random\_state` is not fixed, repeated calls, or permuted input, results will differ.
   */
  async transform(opts: {
    /**
      The input data to complete.
     */
    X?: ArrayLike[]
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('IterativeImputer must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_IterativeImputer_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_IterativeImputer_transform = {k: v for k, v in pms_IterativeImputer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_IterativeImputer_transform = bridgeIterativeImputer[${this.id}].transform(**pms_IterativeImputer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_IterativeImputer_transform.tolist() if hasattr(res_IterativeImputer_transform, 'tolist') else res_IterativeImputer_transform`
  }

  /**
    Imputer used to initialize the missing values.
   */
  get initial_imputer_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing initial_imputer_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_initial_imputer_ = bridgeIterativeImputer[${this.id}].initial_imputer_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_initial_imputer_.tolist() if hasattr(attr_IterativeImputer_initial_imputer_, 'tolist') else attr_IterativeImputer_initial_imputer_`
    })()
  }

  /**
    Each tuple has `(feat\_idx, neighbor\_feat\_idx, estimator)`, where `feat\_idx` is the current feature to be imputed, `neighbor\_feat\_idx` is the array of other features used to impute the current feature, and `estimator` is the trained estimator used for the imputation. Length is `self.n\_features\_with\_missing\_ \* self.n\_iter\_`.
   */
  get imputation_sequence_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing imputation_sequence_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_imputation_sequence_ = bridgeIterativeImputer[${this.id}].imputation_sequence_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_imputation_sequence_.tolist() if hasattr(attr_IterativeImputer_imputation_sequence_, 'tolist') else attr_IterativeImputer_imputation_sequence_`
    })()
  }

  /**
    Number of iteration rounds that occurred. Will be less than `self.max\_iter` if early stopping criterion was reached.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_n_iter_ = bridgeIterativeImputer[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_n_iter_.tolist() if hasattr(attr_IterativeImputer_n_iter_, 'tolist') else attr_IterativeImputer_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_n_features_in_ = bridgeIterativeImputer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_n_features_in_.tolist() if hasattr(attr_IterativeImputer_n_features_in_, 'tolist') else attr_IterativeImputer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_feature_names_in_ = bridgeIterativeImputer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_feature_names_in_.tolist() if hasattr(attr_IterativeImputer_feature_names_in_, 'tolist') else attr_IterativeImputer_feature_names_in_`
    })()
  }

  /**
    Number of features with missing values.
   */
  get n_features_with_missing_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing n_features_with_missing_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_n_features_with_missing_ = bridgeIterativeImputer[${this.id}].n_features_with_missing_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_n_features_with_missing_.tolist() if hasattr(attr_IterativeImputer_n_features_with_missing_, 'tolist') else attr_IterativeImputer_n_features_with_missing_`
    })()
  }

  /**
    Indicator used to add binary indicators for missing values. `undefined` if `add\_indicator=False`.
   */
  get indicator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing indicator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_indicator_ = bridgeIterativeImputer[${this.id}].indicator_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_indicator_.tolist() if hasattr(attr_IterativeImputer_indicator_, 'tolist') else attr_IterativeImputer_indicator_`
    })()
  }

  /**
    RandomState instance that is generated either from a seed, the random number generator or by `np.random`.
   */
  get random_state_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This IterativeImputer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'IterativeImputer must call init() before accessing random_state_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_IterativeImputer_random_state_ = bridgeIterativeImputer[${this.id}].random_state_`

      // convert the result from python to node.js
      return this
        ._py`attr_IterativeImputer_random_state_.tolist() if hasattr(attr_IterativeImputer_random_state_, 'tolist') else attr_IterativeImputer_random_state_`
    })()
  }
}
