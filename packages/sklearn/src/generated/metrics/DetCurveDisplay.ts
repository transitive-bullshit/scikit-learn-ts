/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  DET curve visualization.

  It is recommend to use [`from\_estimator`](#sklearn.metrics.DetCurveDisplay.from_estimator "sklearn.metrics.DetCurveDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.DetCurveDisplay.from_predictions "sklearn.metrics.DetCurveDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.DetCurveDisplay.html)
 */
export class DetCurveDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      False positive rate.
     */
    fpr?: NDArray

    /**
      False negative rate.
     */
    fnr?: NDArray

    /**
      Name of estimator. If `undefined`, the estimator name is not shown.
     */
    estimator_name?: string

    /**
      The label of the positive class.
     */
    pos_label?: number | boolean | string
  }) {
    this.id = `DetCurveDisplay${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('DetCurveDisplay.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import DetCurveDisplay
try: bridgeDetCurveDisplay
except NameError: bridgeDetCurveDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_DetCurveDisplay = {'fpr': np.array(${
      this.opts['fpr'] ?? undefined
    }) if ${this.opts['fpr'] !== undefined} else None, 'fnr': np.array(${
      this.opts['fnr'] ?? undefined
    }) if ${this.opts['fnr'] !== undefined} else None, 'estimator_name': ${
      this.opts['estimator_name'] ?? undefined
    }, 'pos_label': ${this.opts['pos_label'] ?? undefined}}

ctor_DetCurveDisplay = {k: v for k, v in ctor_DetCurveDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeDetCurveDisplay[${this.id}] = DetCurveDisplay(**ctor_DetCurveDisplay)`

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

    await this._py.ex`del bridgeDetCurveDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot DET curve given an estimator and data.

    Read more in the [User Guide](../../visualizations.html#visualizations).
   */
  async from_estimator(opts: {
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
      Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba) or [decision\_function](../../glossary.html#term-decision_function) as the predicted target response. If set to ‘auto’, [predict\_proba](../../glossary.html#term-predict_proba) is tried first and if it does not exist [decision\_function](../../glossary.html#term-decision_function) is tried next.
     */
    response_method?: 'decision_function' | 'auto’} default=’auto'

    /**
      The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.
     */
    pos_label?: number | boolean | string

    /**
      Name of DET curve for labeling. If `undefined`, use the name of the estimator.
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
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DetCurveDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py.ex`pms_DetCurveDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${
      opts['sample_weight'] !== undefined
    } else None, 'response_method': ${
      opts['response_method'] ?? undefined
    }, 'pos_label': ${opts['pos_label'] ?? undefined}, 'name': ${
      opts['name'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_DetCurveDisplay_from_estimator = {k: v for k, v in pms_DetCurveDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DetCurveDisplay_from_estimator = bridgeDetCurveDisplay[${this.id}].from_estimator(**pms_DetCurveDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_DetCurveDisplay_from_estimator.tolist() if hasattr(res_DetCurveDisplay_from_estimator, 'tolist') else res_DetCurveDisplay_from_estimator`
  }

  /**
    Plot the DET curve given the true and predicted labels.

    Read more in the [User Guide](../../visualizations.html#visualizations).
   */
  async from_predictions(opts: {
    /**
      True labels.
     */
    y_true?: ArrayLike

    /**
      Target scores, can either be probability estimates of the positive class, confidence values, or non-thresholded measure of decisions (as returned by `decision\_function` on some classifiers).
     */
    y_pred?: ArrayLike

    /**
      Sample weights.
     */
    sample_weight?: ArrayLike

    /**
      The label of the positive class. When `pos\_label=None`, if `y\_true` is in {-1, 1} or {0, 1}, `pos\_label` is set to 1, otherwise an error will be raised.
     */
    pos_label?: number | boolean | string

    /**
      Name of DET curve for labeling. If `undefined`, name will be set to `"Classifier"`.
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
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DetCurveDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DetCurveDisplay_from_predictions = {'y_true': np.array(${
      opts['y_true'] ?? undefined
    }) if ${opts['y_true'] !== undefined} else None, 'y_pred': np.array(${
      opts['y_pred'] ?? undefined
    }) if ${
      opts['y_pred'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'pos_label': ${
      opts['pos_label'] ?? undefined
    }, 'name': ${opts['name'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_DetCurveDisplay_from_predictions = {k: v for k, v in pms_DetCurveDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DetCurveDisplay_from_predictions = bridgeDetCurveDisplay[${this.id}].from_predictions(**pms_DetCurveDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_DetCurveDisplay_from_predictions.tolist() if hasattr(res_DetCurveDisplay_from_predictions, 'tolist') else res_DetCurveDisplay_from_predictions`
  }

  /**
    Plot visualization.
   */
  async plot(opts: {
    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Name of DET curve for labeling. If `undefined`, use `estimator\_name` if it is not `undefined`, otherwise no labeling is shown.
     */
    name?: string

    /**
      Additional keywords arguments passed to matplotlib `plot` function.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DetCurveDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_DetCurveDisplay_plot = {'ax': ${
      opts['ax'] ?? undefined
    }, 'name': ${opts['name'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_DetCurveDisplay_plot = {k: v for k, v in pms_DetCurveDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DetCurveDisplay_plot = bridgeDetCurveDisplay[${this.id}].plot(**pms_DetCurveDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_DetCurveDisplay_plot.tolist() if hasattr(res_DetCurveDisplay_plot, 'tolist') else res_DetCurveDisplay_plot`
  }

  /**
    DET Curve.
   */
  get line_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DetCurveDisplay must call init() before accessing line_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DetCurveDisplay_line_ = bridgeDetCurveDisplay[${this.id}].line_`

      // convert the result from python to node.js
      return this
        ._py`attr_DetCurveDisplay_line_.tolist() if hasattr(attr_DetCurveDisplay_line_, 'tolist') else attr_DetCurveDisplay_line_`
    })()
  }

  /**
    Axes with DET Curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('DetCurveDisplay must call init() before accessing ax_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DetCurveDisplay_ax_ = bridgeDetCurveDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_DetCurveDisplay_ax_.tolist() if hasattr(attr_DetCurveDisplay_ax_, 'tolist') else attr_DetCurveDisplay_ax_`
    })()
  }

  /**
    Figure containing the curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This DetCurveDisplay instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'DetCurveDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DetCurveDisplay_figure_ = bridgeDetCurveDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_DetCurveDisplay_figure_.tolist() if hasattr(attr_DetCurveDisplay_figure_, 'tolist') else attr_DetCurveDisplay_figure_`
    })()
  }
}
