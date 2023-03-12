/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  ROC Curve visualization.

  It is recommend to use [`from\_estimator`](#sklearn.metrics.RocCurveDisplay.from_estimator "sklearn.metrics.RocCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.RocCurveDisplay.from_predictions "sklearn.metrics.RocCurveDisplay.from_predictions") to create a [`RocCurveDisplay`](#sklearn.metrics.RocCurveDisplay "sklearn.metrics.RocCurveDisplay"). All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.RocCurveDisplay.html)
 */
export class RocCurveDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RocCurveDisplayOptions) {
    this.id = `RocCurveDisplay${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RocCurveDisplay.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import RocCurveDisplay
try: bridgeRocCurveDisplay
except NameError: bridgeRocCurveDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_RocCurveDisplay = {'fpr': np.array(${
      this.opts['fpr'] ?? undefined
    }) if ${this.opts['fpr'] !== undefined} else None, 'tpr': np.array(${
      this.opts['tpr'] ?? undefined
    }) if ${this.opts['tpr'] !== undefined} else None, 'roc_auc': ${
      this.opts['roc_auc'] ?? undefined
    }, 'estimator_name': ${
      this.opts['estimator_name'] ?? undefined
    }, 'pos_label': ${this.opts['pos_label'] ?? undefined}}

ctor_RocCurveDisplay = {k: v for k, v in ctor_RocCurveDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeRocCurveDisplay[${this.id}] = RocCurveDisplay(**ctor_RocCurveDisplay)`

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

    await this._py.ex`del bridgeRocCurveDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Create a ROC Curve display from an estimator.
   */
  async from_estimator(
    opts: RocCurveDisplayFromEstimatorOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RocCurveDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py.ex`pms_RocCurveDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${
      opts['sample_weight'] !== undefined
    } else None, 'drop_intermediate': ${
      opts['drop_intermediate'] ?? undefined
    }, 'response_method': ${
      opts['response_method'] ?? undefined
    }, 'pos_label': ${opts['pos_label'] ?? undefined}, 'name': ${
      opts['name'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_RocCurveDisplay_from_estimator = {k: v for k, v in pms_RocCurveDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RocCurveDisplay_from_estimator = bridgeRocCurveDisplay[${this.id}].from_estimator(**pms_RocCurveDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_RocCurveDisplay_from_estimator.tolist() if hasattr(res_RocCurveDisplay_from_estimator, 'tolist') else res_RocCurveDisplay_from_estimator`
  }

  /**
    Plot ROC curve given the true and predicted values.

    Read more in the [User Guide](../../visualizations.html#visualizations).
   */
  async from_predictions(
    opts: RocCurveDisplayFromPredictionsOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RocCurveDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RocCurveDisplay_from_predictions = {'y_true': np.array(${
      opts['y_true'] ?? undefined
    }) if ${opts['y_true'] !== undefined} else None, 'y_pred': np.array(${
      opts['y_pred'] ?? undefined
    }) if ${
      opts['y_pred'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${
      opts['sample_weight'] !== undefined
    } else None, 'drop_intermediate': ${
      opts['drop_intermediate'] ?? undefined
    }, 'pos_label': ${opts['pos_label'] ?? undefined}, 'name': ${
      opts['name'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_RocCurveDisplay_from_predictions = {k: v for k, v in pms_RocCurveDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RocCurveDisplay_from_predictions = bridgeRocCurveDisplay[${this.id}].from_predictions(**pms_RocCurveDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_RocCurveDisplay_from_predictions.tolist() if hasattr(res_RocCurveDisplay_from_predictions, 'tolist') else res_RocCurveDisplay_from_predictions`
  }

  /**
    Plot visualization.

    Extra keyword arguments will be passed to matplotlib’s `plot`.
   */
  async plot(opts: RocCurveDisplayPlotOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RocCurveDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_RocCurveDisplay_plot = {'ax': ${
      opts['ax'] ?? undefined
    }, 'name': ${opts['name'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_RocCurveDisplay_plot = {k: v for k, v in pms_RocCurveDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RocCurveDisplay_plot = bridgeRocCurveDisplay[${this.id}].plot(**pms_RocCurveDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_RocCurveDisplay_plot.tolist() if hasattr(res_RocCurveDisplay_plot, 'tolist') else res_RocCurveDisplay_plot`
  }

  /**
    ROC Curve.
   */
  get line_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RocCurveDisplay must call init() before accessing line_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RocCurveDisplay_line_ = bridgeRocCurveDisplay[${this.id}].line_`

      // convert the result from python to node.js
      return this
        ._py`attr_RocCurveDisplay_line_.tolist() if hasattr(attr_RocCurveDisplay_line_, 'tolist') else attr_RocCurveDisplay_line_`
    })()
  }

  /**
    Axes with ROC Curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RocCurveDisplay must call init() before accessing ax_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RocCurveDisplay_ax_ = bridgeRocCurveDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_RocCurveDisplay_ax_.tolist() if hasattr(attr_RocCurveDisplay_ax_, 'tolist') else attr_RocCurveDisplay_ax_`
    })()
  }

  /**
    Figure containing the curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RocCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RocCurveDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RocCurveDisplay_figure_ = bridgeRocCurveDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_RocCurveDisplay_figure_.tolist() if hasattr(attr_RocCurveDisplay_figure_, 'tolist') else attr_RocCurveDisplay_figure_`
    })()
  }
}

export interface RocCurveDisplayOptions {
  /**
    False positive rate.
   */
  fpr?: NDArray

  /**
    True positive rate.
   */
  tpr?: NDArray

  /**
    Area under ROC curve. If `undefined`, the roc\_auc score is not shown.
   */
  roc_auc?: number

  /**
    Name of estimator. If `undefined`, the estimator name is not shown.
   */
  estimator_name?: string

  /**
    The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.
   */
  pos_label?: string | number
}

export interface RocCurveDisplayFromEstimatorOptions {
  /**
    Fitted classifier or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a classifier.
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
    Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

    @defaultValue `true`
   */
  drop_intermediate?: boolean

  /**
    Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.
   */
  response_method?: 'decision_function' | 'auto’} default=’auto'

  /**
    The class considered as the positive class when computing the roc auc metrics. By default, `estimators.classes\_\[1\]` is considered as the positive class.
   */
  pos_label?: string | number

  /**
    Name of ROC Curve for labeling. If `undefined`, use the name of the estimator.
   */
  name?: string

  /**
    Axes object to plot on. If `undefined`, a new figure and axes is created.
   */
  ax?: any

  /**
    Keyword arguments to be passed to matplotlib’s `plot`.
   */
  kwargs?: any
}

export interface RocCurveDisplayFromPredictionsOptions {
  /**
    True labels.
   */
  y_true?: ArrayLike

  /**
    Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by “decision\_function” on some classifiers).
   */
  y_pred?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike

  /**
    Whether to drop some suboptimal thresholds which would not appear on a plotted ROC curve. This is useful in order to create lighter ROC curves.

    @defaultValue `true`
   */
  drop_intermediate?: boolean

  /**
    The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.
   */
  pos_label?: string | number

  /**
    Name of ROC curve for labeling. If `undefined`, name will be set to `"Classifier"`.
   */
  name?: string

  /**
    Axes object to plot on. If `undefined`, a new figure and axes is created.
   */
  ax?: any

  /**
    Additional keywords arguments passed to matplotlib `plot` function.
   */
  kwargs?: any
}

export interface RocCurveDisplayPlotOptions {
  /**
    Axes object to plot on. If `undefined`, a new figure and axes is created.
   */
  ax?: any

  /**
    Name of ROC Curve for labeling. If `undefined`, use `estimator\_name` if not `undefined`, otherwise no labeling is shown.
   */
  name?: string

  /**
    Keyword arguments to be passed to matplotlib’s `plot`.
   */
  kwargs?: any
}
