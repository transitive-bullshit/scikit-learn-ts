/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Partial Dependence Plot (PDP).

  This can also display individual partial dependencies which are often referred to as: Individual Condition Expectation (ICE).

  It is recommended to use [`from\_estimator`](#sklearn.inspection.PartialDependenceDisplay.from_estimator "sklearn.inspection.PartialDependenceDisplay.from_estimator") to create a [`PartialDependenceDisplay`](#sklearn.inspection.PartialDependenceDisplay "sklearn.inspection.PartialDependenceDisplay"). All parameters are stored as attributes.

  Read more in [Advanced Plotting With Partial Dependence](../../auto_examples/miscellaneous/plot_partial_dependence_visualization_api.html#sphx-glr-auto-examples-miscellaneous-plot-partial-dependence-visualization-api-py) and the [User Guide](../partial_dependence.html#partial-dependence).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.PartialDependenceDisplay.html)
 */
export class PartialDependenceDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Results of [`partial\_dependence`](sklearn.inspection.partial_dependence.html#sklearn.inspection.partial_dependence "sklearn.inspection.partial_dependence") for `features`.
     */
    pd_results?: any

    /**
      Indices of features for a given plot. A tuple of one integer will plot a partial dependence curve of one feature. A tuple of two integers will plot a two-way partial dependence curve as a contour plot.
     */
    features?: any

    /**
      Feature names corresponding to the indices in `features`.
     */
    feature_names?: any

    /**
      In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.
     */
    target_idx?: number

    /**
      Deciles for feature indices in `features`.
     */
    deciles?: any

    /**
      Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

      @defaultValue `'average'`
     */
    kind?: 'average' | 'individual' | 'both'

    /**
      Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If float, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If int, represents the maximum absolute number of samples to use.

      Note that the full dataset is still used to calculate partial dependence when `kind='both'`.

      @defaultValue `1000`
     */
    subsample?: number

    /**
      Controls the randomness of the selected samples when subsamples is not `undefined`. See [Glossary](../../glossary.html#term-random_state) for details.
     */
    random_state?: number

    /**
      Whether each target feature in `features` is categorical or not. The list should be same size as `features`. If `undefined`, all features are assumed to be continuous.
     */
    is_categorical?: any
  }) {
    this.id = `PartialDependenceDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PartialDependenceDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.inspection import PartialDependenceDisplay
try: bridgePartialDependenceDisplay
except NameError: bridgePartialDependenceDisplay = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_PartialDependenceDisplay = {'pd_results': ${this.opts['pd_results'] ?? undefined}, 'features': ${this.opts['features'] ?? undefined}, 'feature_names': ${this.opts['feature_names'] ?? undefined}, 'target_idx': ${this.opts['target_idx'] ?? undefined}, 'deciles': ${this.opts['deciles'] ?? undefined}, 'kind': ${this.opts['kind'] ?? undefined}, 'subsample': ${this.opts['subsample'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}, 'is_categorical': ${this.opts['is_categorical'] ?? undefined}}

ctor_PartialDependenceDisplay = {k: v for k, v in ctor_PartialDependenceDisplay.items() if v is not None}`

    await this._py
      .ex`bridgePartialDependenceDisplay[${this.id}] = PartialDependenceDisplay(**ctor_PartialDependenceDisplay)`

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

    await this._py.ex`del bridgePartialDependenceDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Partial dependence (PD) and individual conditional expectation (ICE) plots.

    Partial dependence plots, individual conditional expectation plots or an overlay of both of them can be plotted by setting the `kind` parameter. The `len(features)` plots are arranged in a grid with `n\_cols` columns. Two-way partial dependence plots are plotted as contour plots. The deciles of the feature values will be shown with tick marks on the x-axes for one-way plots, and on both axes for two-way plots.

    Read more in the [User Guide](../partial_dependence.html#partial-dependence).
   */
  async from_estimator(opts: {
    /**
      A fitted estimator object implementing [predict](../../glossary.html#term-predict), [predict\_proba](../../glossary.html#term-predict_proba), or [decision\_function](../../glossary.html#term-decision_function). Multioutput-multiclass classifiers are not supported.
     */
    estimator?: any

    /**
      `X` is used to generate a grid of values for the target `features` (where the partial dependence will be evaluated), and also to generate values for the complement features when the `method` is `'brute'`.
     */
    X?: ArrayLike[]

    /**
      The target features for which to create the PDPs. If `features\[i\]` is an integer or a string, a one-way PDP is created; if `features\[i\]` is a tuple, a two-way PDP is created (only supported with `kind='average'`). Each tuple must be of size 2. If any entry is a string, then it must be in `feature\_names`.
     */
    features?: string

    /**
      Sample weights are used to calculate weighted means when averaging the model output. If `undefined`, then samples are equally weighted. If `sample\_weight` is not `undefined`, then `method` will be set to `'brute'`. Note that `sample\_weight` is ignored for `kind='individual'`.
     */
    sample_weight?: ArrayLike

    /**
      Indicates the categorical features.
     */
    categorical_features?: ArrayLike | number

    /**
      Name of each feature; `feature\_names\[i\]` holds the name of the feature with index `i`. By default, the name of the feature corresponds to their numerical index for NumPy array and their column name for pandas dataframe.
     */
    feature_names?: ArrayLike

    /**
      In a multiclass setting, specifies the class for which the PDPs should be computed. Note that for binary classification, the positive class (index 1) is always used.
     */
    target?: number

    /**
      Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. For regressors this parameter is ignored and the response is always the output of [predict](../../glossary.html#term-predict). By default, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and we revert to [decision\_function](../../glossary.html#term-decision_function) if it doesn’t exist. If `method` is `'recursion'`, the response is always the output of [decision\_function](../../glossary.html#term-decision_function).

      @defaultValue `'auto'`
     */
    response_method?: 'auto' | 'predict_proba' | 'decision_function'

    /**
      The maximum number of columns in the grid plot. Only active when `ax` is a single axis or `undefined`.

      @defaultValue `3`
     */
    n_cols?: number

    /**
      The number of equally spaced points on the axes of the plots, for each target feature.

      @defaultValue `100`
     */
    grid_resolution?: number

    /**
      The lower and upper percentile used to create the extreme values for the PDP axes. Must be in \[0, 1\].
     */
    percentiles?: any

    /**
      The method used to calculate the averaged predictions:

      @defaultValue `'auto'`
     */
    method?: string

    /**
      The number of CPUs to use to compute the partial dependences. Computation is parallelized over features specified by the `features` parameter.

      `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Verbose output during PD computations.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots. It can be used to define common properties for both `ice\_lines\_kw` and `pdp\_line\_kw`.
     */
    line_kw?: any

    /**
      Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice\_lines\_kw` takes priority over `line\_kw`.
     */
    ice_lines_kw?: any

    /**
      Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd\_line\_kw` takes priority over `line\_kw`.
     */
    pd_line_kw?: any

    /**
      Dict with keywords passed to the `matplotlib.pyplot.contourf` call. For two-way partial dependence plots.
     */
    contour_kw?: any

    /**
      If a single axis is passed in, it is treated as a bounding axes and a grid of partial dependence plots will be drawn within these bounds. The `n\_cols` parameter controls the number of columns in the grid.
     */
    ax?: any

    /**
      Whether to plot the partial dependence averaged across all the samples in the dataset or one line per sample or both.

      @defaultValue `'average'`
     */
    kind?: 'average' | 'individual' | 'both'

    /**
      If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

      @defaultValue `false`
     */
    centered?: boolean

    /**
      Sampling for ICE curves when `kind` is ‘individual’ or ‘both’. If `float`, should be between 0.0 and 1.0 and represent the proportion of the dataset to be used to plot ICE curves. If `int`, represents the absolute number samples to use.

      Note that the full dataset is still used to calculate averaged partial dependence when `kind='both'`.

      @defaultValue `1000`
     */
    subsample?: number

    /**
      Controls the randomness of the selected samples when subsamples is not `undefined` and `kind` is either `'both'` or `'individual'`. See [Glossary](../../glossary.html#term-random_state) for details.
     */
    random_state?: number
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PartialDependenceDisplay_from_estimator = {'estimator': ${opts['estimator'] ?? undefined}, 'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'features': ${opts['features'] ?? undefined}, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'categorical_features': np.array(${opts['categorical_features'] ?? undefined}) if ${opts['categorical_features'] !== undefined} else None, 'feature_names': np.array(${opts['feature_names'] ?? undefined}) if ${opts['feature_names'] !== undefined} else None, 'target': ${opts['target'] ?? undefined}, 'response_method': ${opts['response_method'] ?? undefined}, 'n_cols': ${opts['n_cols'] ?? undefined}, 'grid_resolution': ${opts['grid_resolution'] ?? undefined}, 'percentiles': ${opts['percentiles'] ?? undefined}, 'method': ${opts['method'] ?? undefined}, 'n_jobs': ${opts['n_jobs'] ?? undefined}, 'verbose': ${opts['verbose'] ?? undefined}, 'line_kw': ${opts['line_kw'] ?? undefined}, 'ice_lines_kw': ${opts['ice_lines_kw'] ?? undefined}, 'pd_line_kw': ${opts['pd_line_kw'] ?? undefined}, 'contour_kw': ${opts['contour_kw'] ?? undefined}, 'ax': ${opts['ax'] ?? undefined}, 'kind': ${opts['kind'] ?? undefined}, 'centered': ${opts['centered'] ?? undefined}, 'subsample': ${opts['subsample'] ?? undefined}, 'random_state': ${opts['random_state'] ?? undefined}}

pms_PartialDependenceDisplay_from_estimator = {k: v for k, v in pms_PartialDependenceDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PartialDependenceDisplay_from_estimator = bridgePartialDependenceDisplay[${this.id}].from_estimator(**pms_PartialDependenceDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_PartialDependenceDisplay_from_estimator.tolist() if hasattr(res_PartialDependenceDisplay_from_estimator, 'tolist') else res_PartialDependenceDisplay_from_estimator`
  }

  /**
    Plot partial dependence plots.
   */
  async plot(opts: {
    /**
      and a grid of partial dependence plots will be drawn within these bounds. The `n\_cols` parameter controls the number of columns in the grid.
     */
    ax?: any

    /**
      The maximum number of columns in the grid plot. Only active when `ax` is a single axes or `undefined`.

      @defaultValue `3`
     */
    n_cols?: number

    /**
      Dict with keywords passed to the `matplotlib.pyplot.plot` call. For one-way partial dependence plots.
     */
    line_kw?: any

    /**
      Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For ICE lines in the one-way partial dependence plots. The key value pairs defined in `ice\_lines\_kw` takes priority over `line\_kw`.
     */
    ice_lines_kw?: any

    /**
      Dictionary with keywords passed to the `matplotlib.pyplot.plot` call. For partial dependence in one-way partial dependence plots. The key value pairs defined in `pd\_line\_kw` takes priority over `line\_kw`.
     */
    pd_line_kw?: any

    /**
      Dict with keywords passed to the `matplotlib.pyplot.contourf` call for two-way partial dependence plots.
     */
    contour_kw?: any

    /**
      Dict with keywords passed to the `matplotlib.pyplot.bar` call for one-way categorical partial dependence plots.
     */
    bar_kw?: any

    /**
      Dict with keywords passed to the `matplotlib.pyplot.imshow` call for two-way categorical partial dependence plots.
     */
    heatmap_kw?: any

    /**
      Global min and max average predictions, such that all plots will have the same scale and y limits. `pdp\_lim\[1\]` is the global min and max for single partial dependence curves. `pdp\_lim\[2\]` is the global min and max for two-way partial dependence curves. If `undefined` (default), the limit will be inferred from the global minimum and maximum of all predictions.
     */
    pdp_lim?: any

    /**
      If `true`, the ICE and PD lines will start at the origin of the y-axis. By default, no centering is done.

      @defaultValue `false`
     */
    centered?: boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PartialDependenceDisplay must call init() before plot()')
    }

    // set up method params
    await this._py
      .ex`pms_PartialDependenceDisplay_plot = {'ax': ${opts['ax'] ?? undefined}, 'n_cols': ${opts['n_cols'] ?? undefined}, 'line_kw': ${opts['line_kw'] ?? undefined}, 'ice_lines_kw': ${opts['ice_lines_kw'] ?? undefined}, 'pd_line_kw': ${opts['pd_line_kw'] ?? undefined}, 'contour_kw': ${opts['contour_kw'] ?? undefined}, 'bar_kw': ${opts['bar_kw'] ?? undefined}, 'heatmap_kw': ${opts['heatmap_kw'] ?? undefined}, 'pdp_lim': ${opts['pdp_lim'] ?? undefined}, 'centered': ${opts['centered'] ?? undefined}}

pms_PartialDependenceDisplay_plot = {k: v for k, v in pms_PartialDependenceDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PartialDependenceDisplay_plot = bridgePartialDependenceDisplay[${this.id}].plot(**pms_PartialDependenceDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_PartialDependenceDisplay_plot.tolist() if hasattr(res_PartialDependenceDisplay_plot, 'tolist') else res_PartialDependenceDisplay_plot`
  }

  /**
    If `ax` is an axes or `undefined`, the `bounding\_ax\_` is the axes where the grid of partial dependence plots are drawn. If `ax` is a list of axes or a numpy array of axes, `bounding\_ax\_` is `undefined`.
   */
  get bounding_ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing bounding_ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_bounding_ax_ = bridgePartialDependenceDisplay[${this.id}].bounding_ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_bounding_ax_.tolist() if hasattr(attr_PartialDependenceDisplay_bounding_ax_, 'tolist') else attr_PartialDependenceDisplay_bounding_ax_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `axes\_\[i, j\]` is the axes on the i-th row and j-th column. If `ax` is a list of axes, `axes\_\[i\]` is the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes in that position.
   */
  get axes_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing axes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_axes_ = bridgePartialDependenceDisplay[${this.id}].axes_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_axes_.tolist() if hasattr(attr_PartialDependenceDisplay_axes_, 'tolist') else attr_PartialDependenceDisplay_axes_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `lines\_\[i, j\]` is the partial dependence curve on the i-th row and j-th column. If `ax` is a list of axes, `lines\_\[i\]` is the partial dependence curve corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a line plot.
   */
  get lines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing lines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_lines_ = bridgePartialDependenceDisplay[${this.id}].lines_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_lines_.tolist() if hasattr(attr_PartialDependenceDisplay_lines_, 'tolist') else attr_PartialDependenceDisplay_lines_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the x axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a PDP plot.
   */
  get deciles_vlines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing deciles_vlines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_deciles_vlines_ = bridgePartialDependenceDisplay[${this.id}].deciles_vlines_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_deciles_vlines_.tolist() if hasattr(attr_PartialDependenceDisplay_deciles_vlines_, 'tolist') else attr_PartialDependenceDisplay_deciles_vlines_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `vlines\_\[i, j\]` is the line collection representing the y axis deciles of the i-th row and j-th column. If `ax` is a list of axes, `vlines\_\[i\]` corresponds to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a 2-way plot.
   */
  get deciles_hlines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing deciles_hlines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_deciles_hlines_ = bridgePartialDependenceDisplay[${this.id}].deciles_hlines_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_deciles_hlines_.tolist() if hasattr(attr_PartialDependenceDisplay_deciles_hlines_, 'tolist') else attr_PartialDependenceDisplay_deciles_hlines_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `contours\_\[i, j\]` is the partial dependence plot on the i-th row and j-th column. If `ax` is a list of axes, `contours\_\[i\]` is the partial dependence plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a contour plot.
   */
  get contours_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing contours_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_contours_ = bridgePartialDependenceDisplay[${this.id}].contours_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_contours_.tolist() if hasattr(attr_PartialDependenceDisplay_contours_, 'tolist') else attr_PartialDependenceDisplay_contours_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `bars\_\[i, j\]` is the partial dependence bar plot on the i-th row and j-th column (for a categorical feature). If `ax` is a list of axes, `bars\_\[i\]` is the partial dependence bar plot corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a bar plot.
   */
  get bars_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing bars_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_bars_ = bridgePartialDependenceDisplay[${this.id}].bars_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_bars_.tolist() if hasattr(attr_PartialDependenceDisplay_bars_, 'tolist') else attr_PartialDependenceDisplay_bars_`
    })()
  }

  /**
    If `ax` is an axes or `undefined`, `heatmaps\_\[i, j\]` is the partial dependence heatmap on the i-th row and j-th column (for a pair of categorical features) . If `ax` is a list of axes, `heatmaps\_\[i\]` is the partial dependence heatmap corresponding to the i-th item in `ax`. Elements that are `undefined` correspond to a nonexisting axes or an axes that does not include a heatmap.
   */
  get heatmaps_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing heatmaps_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_heatmaps_ = bridgePartialDependenceDisplay[${this.id}].heatmaps_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_heatmaps_.tolist() if hasattr(attr_PartialDependenceDisplay_heatmaps_, 'tolist') else attr_PartialDependenceDisplay_heatmaps_`
    })()
  }

  /**
    Figure containing partial dependence plots.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PartialDependenceDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PartialDependenceDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PartialDependenceDisplay_figure_ = bridgePartialDependenceDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_PartialDependenceDisplay_figure_.tolist() if hasattr(attr_PartialDependenceDisplay_figure_, 'tolist') else attr_PartialDependenceDisplay_figure_`
    })()
  }
}
