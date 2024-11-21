/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Calibration curve (also known as reliability diagram) visualization.

  It is recommended to use [`from\_estimator`](#sklearn.calibration.CalibrationDisplay.from_estimator "sklearn.calibration.CalibrationDisplay.from_estimator") or [`from\_predictions`](#sklearn.calibration.CalibrationDisplay.from_predictions "sklearn.calibration.CalibrationDisplay.from_predictions") to create a `CalibrationDisplay`. All parameters are stored as attributes.

  Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).

  For an example on how to use the visualization, see [Probability Calibration curves](../../auto_examples/calibration/plot_calibration_curve.html#sphx-glr-auto-examples-calibration-plot-calibration-curve-py).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibrationDisplay.html)
 */
export class CalibrationDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The proportion of samples whose class is the positive class (fraction of positives), in each bin.
     */
    prob_true?: NDArray

    /**
      The mean predicted probability in each bin.
     */
    prob_pred?: NDArray

    /**
      Probability estimates for the positive class, for each sample.
     */
    y_prob?: NDArray

    /**
      Name of estimator. If `undefined`, the estimator name is not shown.
     */
    estimator_name?: string

    /**
      The positive class when computing the calibration curve. By default, `pos\_label` is set to `estimators.classes\_\[1\]` when using `from\_estimator` and set to 1 when using `from\_predictions`.
     */
    pos_label?: number | boolean | string
  }) {
    this.id = `CalibrationDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'CalibrationDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.calibration import CalibrationDisplay
try: bridgeCalibrationDisplay
except NameError: bridgeCalibrationDisplay = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_CalibrationDisplay = {'prob_true': np.array(${this.opts['prob_true'] ?? undefined}) if ${this.opts['prob_true'] !== undefined} else None, 'prob_pred': np.array(${this.opts['prob_pred'] ?? undefined}) if ${this.opts['prob_pred'] !== undefined} else None, 'y_prob': np.array(${this.opts['y_prob'] ?? undefined}) if ${this.opts['y_prob'] !== undefined} else None, 'estimator_name': ${this.opts['estimator_name'] ?? undefined}, 'pos_label': ${this.opts['pos_label'] ?? undefined}}

ctor_CalibrationDisplay = {k: v for k, v in ctor_CalibrationDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeCalibrationDisplay[${this.id}] = CalibrationDisplay(**ctor_CalibrationDisplay)`

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

    await this._py.ex`del bridgeCalibrationDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot calibration curve using a binary classifier and data.

    A calibration curve, also known as a reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

    Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

    Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).
   */
  async from_estimator(opts: {
    /**
      Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier. The classifier must have a [predict\_proba](../../glossary.html#term-predict_proba) method.
     */
    estimator?: any

    /**
      Input values.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Binary target values.
     */
    y?: ArrayLike

    /**
      Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

      @defaultValue `5`
     */
    n_bins?: number

    /**
      Strategy used to define the widths of the bins.

      @defaultValue `'uniform'`
     */
    strategy?: 'uniform' | 'quantile'

    /**
      The positive class when computing the calibration curve. By default, `estimators.classes\_\[1\]` is considered as the positive class.
     */
    pos_label?: number | boolean | string

    /**
      Name for labeling curve. If `undefined`, the name of the estimator is used.
     */
    name?: string

    /**
      If `true`, plots a reference line representing a perfectly calibrated classifier.

      @defaultValue `true`
     */
    ref_line?: boolean

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibrationDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibrationDisplay_from_estimator = {'estimator': ${opts['estimator'] ?? undefined}, 'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'n_bins': ${opts['n_bins'] ?? undefined}, 'strategy': ${opts['strategy'] ?? undefined}, 'pos_label': ${opts['pos_label'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'ref_line': ${opts['ref_line'] ?? undefined}, 'ax': ${opts['ax'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_CalibrationDisplay_from_estimator = {k: v for k, v in pms_CalibrationDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibrationDisplay_from_estimator = bridgeCalibrationDisplay[${this.id}].from_estimator(**pms_CalibrationDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibrationDisplay_from_estimator.tolist() if hasattr(res_CalibrationDisplay_from_estimator, 'tolist') else res_CalibrationDisplay_from_estimator`
  }

  /**
    Plot calibration curve using true labels and predicted probabilities.

    Calibration curve, also known as reliability diagram, uses inputs from a binary classifier and plots the average predicted probability for each bin against the fraction of positive classes, on the y-axis.

    Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").

    Read more about calibration in the [User Guide](../calibration.html#calibration) and more about the scikit-learn visualization API in [Visualizations](../../visualizations.html#visualizations).
   */
  async from_predictions(opts: {
    /**
      True labels.
     */
    y_true?: ArrayLike

    /**
      The predicted probabilities of the positive class.
     */
    y_prob?: ArrayLike

    /**
      Number of bins to discretize the \[0, 1\] interval into when calculating the calibration curve. A bigger number requires more data.

      @defaultValue `5`
     */
    n_bins?: number

    /**
      Strategy used to define the widths of the bins.

      @defaultValue `'uniform'`
     */
    strategy?: 'uniform' | 'quantile'

    /**
      The positive class when computing the calibration curve. By default `pos\_label` is set to 1.
     */
    pos_label?: number | boolean | string

    /**
      Name for labeling curve.
     */
    name?: string

    /**
      If `true`, plots a reference line representing a perfectly calibrated classifier.

      @defaultValue `true`
     */
    ref_line?: boolean

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibrationDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_CalibrationDisplay_from_predictions = {'y_true': np.array(${opts['y_true'] ?? undefined}) if ${opts['y_true'] !== undefined} else None, 'y_prob': np.array(${opts['y_prob'] ?? undefined}) if ${opts['y_prob'] !== undefined} else None, 'n_bins': ${opts['n_bins'] ?? undefined}, 'strategy': ${opts['strategy'] ?? undefined}, 'pos_label': ${opts['pos_label'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'ref_line': ${opts['ref_line'] ?? undefined}, 'ax': ${opts['ax'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_CalibrationDisplay_from_predictions = {k: v for k, v in pms_CalibrationDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibrationDisplay_from_predictions = bridgeCalibrationDisplay[${this.id}].from_predictions(**pms_CalibrationDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibrationDisplay_from_predictions.tolist() if hasattr(res_CalibrationDisplay_from_predictions, 'tolist') else res_CalibrationDisplay_from_predictions`
  }

  /**
    Plot visualization.

    Extra keyword arguments will be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").
   */
  async plot(opts: {
    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Name for labeling curve. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown.
     */
    name?: string

    /**
      If `true`, plots a reference line representing a perfectly calibrated classifier.

      @defaultValue `true`
     */
    ref_line?: boolean

    /**
      Keyword arguments to be passed to [`matplotlib.pyplot.plot`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot "(in Matplotlib v3.9.2)").
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('CalibrationDisplay must call init() before plot()')
    }

    // set up method params
    await this._py
      .ex`pms_CalibrationDisplay_plot = {'ax': ${opts['ax'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'ref_line': ${opts['ref_line'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_CalibrationDisplay_plot = {k: v for k, v in pms_CalibrationDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CalibrationDisplay_plot = bridgeCalibrationDisplay[${this.id}].plot(**pms_CalibrationDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_CalibrationDisplay_plot.tolist() if hasattr(res_CalibrationDisplay_plot, 'tolist') else res_CalibrationDisplay_plot`
  }

  /**
    Calibration curve.
   */
  get line_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibrationDisplay must call init() before accessing line_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibrationDisplay_line_ = bridgeCalibrationDisplay[${this.id}].line_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibrationDisplay_line_.tolist() if hasattr(attr_CalibrationDisplay_line_, 'tolist') else attr_CalibrationDisplay_line_`
    })()
  }

  /**
    Axes with calibration curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibrationDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibrationDisplay_ax_ = bridgeCalibrationDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibrationDisplay_ax_.tolist() if hasattr(attr_CalibrationDisplay_ax_, 'tolist') else attr_CalibrationDisplay_ax_`
    })()
  }

  /**
    Figure containing the curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This CalibrationDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'CalibrationDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CalibrationDisplay_figure_ = bridgeCalibrationDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_CalibrationDisplay_figure_.tolist() if hasattr(attr_CalibrationDisplay_figure_, 'tolist') else attr_CalibrationDisplay_figure_`
    })()
  }
}
