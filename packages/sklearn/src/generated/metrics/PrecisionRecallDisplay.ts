/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Precision Recall visualization.

  It is recommend to use [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") to create a [`PrecisionRecallDisplay`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay "sklearn.metrics.PrecisionRecallDisplay"). All parameters are stored as attributes.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../../visualizations.html#visualizations).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PrecisionRecallDisplay.html)
 */
export class PrecisionRecallDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Precision values.
     */
    precision?: NDArray

    /**
      Recall values.
     */
    recall?: NDArray

    /**
      Average precision. If `undefined`, the average precision is not shown.
     */
    average_precision?: number

    /**
      Name of estimator. If `undefined`, then the estimator name is not shown.
     */
    estimator_name?: string

    /**
      The class considered as the positive class. If `undefined`, the class will not be shown in the legend.
     */
    pos_label?: number | boolean | string

    /**
      The prevalence of the positive label. It is used for plotting the chance level line. If `undefined`, the chance level line will not be plotted even if `plot_chance_level` is set to `true` when plotting.
     */
    prevalence_pos_label?: number
  }) {
    this.id = `PrecisionRecallDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PrecisionRecallDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import PrecisionRecallDisplay
try: bridgePrecisionRecallDisplay
except NameError: bridgePrecisionRecallDisplay = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_PrecisionRecallDisplay = {'precision': np.array(${this.opts['precision'] ?? undefined}) if ${this.opts['precision'] !== undefined} else None, 'recall': np.array(${this.opts['recall'] ?? undefined}) if ${this.opts['recall'] !== undefined} else None, 'average_precision': ${this.opts['average_precision'] ?? undefined}, 'estimator_name': ${this.opts['estimator_name'] ?? undefined}, 'pos_label': ${this.opts['pos_label'] ?? undefined}, 'prevalence_pos_label': ${this.opts['prevalence_pos_label'] ?? undefined}}

ctor_PrecisionRecallDisplay = {k: v for k, v in ctor_PrecisionRecallDisplay.items() if v is not None}`

    await this._py
      .ex`bridgePrecisionRecallDisplay[${this.id}] = PrecisionRecallDisplay(**ctor_PrecisionRecallDisplay)`

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

    await this._py.ex`del bridgePrecisionRecallDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot precision-recall curve given an estimator and some data.
   */
  async from_estimator(opts: {
    /**
      Fitted classifier or a fitted [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.
     */
    estimator?: any

    /**
      Input values.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values.
     */
    y?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike

    /**
      The class considered as the positive class when computing the precision and recall metrics. By default, `estimators.classes_\[1\]` is considered as the positive class.
     */
    pos_label?: number | boolean | string

    /**
      Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

      @defaultValue `false`
     */
    drop_intermediate?: boolean

    /**
      Specifies whether to use [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) or [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict_proba](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision_function](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-decision_function) is tried next.

      @defaultValue `'auto'`
     */
    response_method?: 'predict_proba' | 'decision_function' | 'auto'

    /**
      Name for labeling curve. If `undefined`, no name is used.
     */
    name?: string

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

      @defaultValue `false`
     */
    plot_chance_level?: boolean

    /**
      Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.
     */
    chance_level_kw?: any

    /**
      Keyword arguments to be passed to matplotlib’s `plot`.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PrecisionRecallDisplay_from_estimator = {'estimator': ${opts['estimator'] ?? undefined}, 'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'pos_label': ${opts['pos_label'] ?? undefined}, 'drop_intermediate': ${opts['drop_intermediate'] ?? undefined}, 'response_method': ${opts['response_method'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'ax': ${opts['ax'] ?? undefined}, 'plot_chance_level': ${opts['plot_chance_level'] ?? undefined}, 'chance_level_kw': ${opts['chance_level_kw'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_PrecisionRecallDisplay_from_estimator = {k: v for k, v in pms_PrecisionRecallDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PrecisionRecallDisplay_from_estimator = bridgePrecisionRecallDisplay[${this.id}].from_estimator(**pms_PrecisionRecallDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_PrecisionRecallDisplay_from_estimator.tolist() if hasattr(res_PrecisionRecallDisplay_from_estimator, 'tolist') else res_PrecisionRecallDisplay_from_estimator`
  }

  /**
    Plot precision-recall curve given binary class predictions.
   */
  async from_predictions(opts: {
    /**
      True binary labels.
     */
    y_true?: ArrayLike

    /**
      Estimated probabilities or output of decision function.
     */
    y_pred?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike

    /**
      The class considered as the positive class when computing the precision and recall metrics.
     */
    pos_label?: number | boolean | string

    /**
      Whether to drop some suboptimal thresholds which would not appear on a plotted precision-recall curve. This is useful in order to create lighter precision-recall curves.

      @defaultValue `false`
     */
    drop_intermediate?: boolean

    /**
      Name for labeling curve. If `undefined`, name will be set to `"Classifier"`.
     */
    name?: string

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

      @defaultValue `false`
     */
    plot_chance_level?: boolean

    /**
      Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.
     */
    chance_level_kw?: any

    /**
      Keyword arguments to be passed to matplotlib’s `plot`.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PrecisionRecallDisplay_from_predictions = {'y_true': np.array(${opts['y_true'] ?? undefined}) if ${opts['y_true'] !== undefined} else None, 'y_pred': np.array(${opts['y_pred'] ?? undefined}) if ${opts['y_pred'] !== undefined} else None, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${opts['sample_weight'] !== undefined} else None, 'pos_label': ${opts['pos_label'] ?? undefined}, 'drop_intermediate': ${opts['drop_intermediate'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'ax': ${opts['ax'] ?? undefined}, 'plot_chance_level': ${opts['plot_chance_level'] ?? undefined}, 'chance_level_kw': ${opts['chance_level_kw'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_PrecisionRecallDisplay_from_predictions = {k: v for k, v in pms_PrecisionRecallDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PrecisionRecallDisplay_from_predictions = bridgePrecisionRecallDisplay[${this.id}].from_predictions(**pms_PrecisionRecallDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_PrecisionRecallDisplay_from_predictions.tolist() if hasattr(res_PrecisionRecallDisplay_from_predictions, 'tolist') else res_PrecisionRecallDisplay_from_predictions`
  }

  /**
    Plot visualization.

    Extra keyword arguments will be passed to matplotlib’s `plot`.
   */
  async plot(opts: {
    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Name of precision recall curve for labeling. If `undefined`, use `estimator_name` if not `undefined`, otherwise no labeling is shown.
     */
    name?: string

    /**
      Whether to plot the chance level. The chance level is the prevalence of the positive label computed from the data passed during [`from_estimator`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_estimator "sklearn.metrics.PrecisionRecallDisplay.from_estimator") or [`from_predictions`](https://scikit-learn.org/stable/modules/generated/#sklearn.metrics.PrecisionRecallDisplay.from_predictions "sklearn.metrics.PrecisionRecallDisplay.from_predictions") call.

      @defaultValue `false`
     */
    plot_chance_level?: boolean

    /**
      Keyword arguments to be passed to matplotlib’s `plot` for rendering the chance level line.
     */
    chance_level_kw?: any

    /**
      Keyword arguments to be passed to matplotlib’s `plot`.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PrecisionRecallDisplay must call init() before plot()')
    }

    // set up method params
    await this._py
      .ex`pms_PrecisionRecallDisplay_plot = {'ax': ${opts['ax'] ?? undefined}, 'name': ${opts['name'] ?? undefined}, 'plot_chance_level': ${opts['plot_chance_level'] ?? undefined}, 'chance_level_kw': ${opts['chance_level_kw'] ?? undefined}, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_PrecisionRecallDisplay_plot = {k: v for k, v in pms_PrecisionRecallDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PrecisionRecallDisplay_plot = bridgePrecisionRecallDisplay[${this.id}].plot(**pms_PrecisionRecallDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_PrecisionRecallDisplay_plot.tolist() if hasattr(res_PrecisionRecallDisplay_plot, 'tolist') else res_PrecisionRecallDisplay_plot`
  }

  /**
    Precision recall curve.
   */
  get line_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before accessing line_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PrecisionRecallDisplay_line_ = bridgePrecisionRecallDisplay[${this.id}].line_`

      // convert the result from python to node.js
      return this
        ._py`attr_PrecisionRecallDisplay_line_.tolist() if hasattr(attr_PrecisionRecallDisplay_line_, 'tolist') else attr_PrecisionRecallDisplay_line_`
    })()
  }

  /**
    The chance level line. It is `undefined` if the chance level is not plotted.
   */
  get chance_level_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before accessing chance_level_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PrecisionRecallDisplay_chance_level_ = bridgePrecisionRecallDisplay[${this.id}].chance_level_`

      // convert the result from python to node.js
      return this
        ._py`attr_PrecisionRecallDisplay_chance_level_.tolist() if hasattr(attr_PrecisionRecallDisplay_chance_level_, 'tolist') else attr_PrecisionRecallDisplay_chance_level_`
    })()
  }

  /**
    Axes with precision recall curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PrecisionRecallDisplay_ax_ = bridgePrecisionRecallDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_PrecisionRecallDisplay_ax_.tolist() if hasattr(attr_PrecisionRecallDisplay_ax_, 'tolist') else attr_PrecisionRecallDisplay_ax_`
    })()
  }

  /**
    Figure containing the curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PrecisionRecallDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PrecisionRecallDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PrecisionRecallDisplay_figure_ = bridgePrecisionRecallDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_PrecisionRecallDisplay_figure_.tolist() if hasattr(attr_PrecisionRecallDisplay_figure_, 'tolist') else attr_PrecisionRecallDisplay_figure_`
    })()
  }
}
