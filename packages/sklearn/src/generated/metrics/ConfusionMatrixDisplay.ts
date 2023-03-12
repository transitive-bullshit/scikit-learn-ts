/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Confusion Matrix visualization.

  It is recommend to use [`from\_estimator`](#sklearn.metrics.ConfusionMatrixDisplay.from_estimator "sklearn.metrics.ConfusionMatrixDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.ConfusionMatrixDisplay.from_predictions "sklearn.metrics.ConfusionMatrixDisplay.from_predictions") to create a [`ConfusionMatrixDisplay`](#sklearn.metrics.ConfusionMatrixDisplay "sklearn.metrics.ConfusionMatrixDisplay"). All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.metrics.ConfusionMatrixDisplay.html
 */
export class ConfusionMatrixDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ConfusionMatrixDisplayOptions) {
    this.id = `ConfusionMatrixDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'ConfusionMatrixDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import ConfusionMatrixDisplay
try: bridgeConfusionMatrixDisplay
except NameError: bridgeConfusionMatrixDisplay = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_ConfusionMatrixDisplay = {'confusion_matrix': np.array(${
      this.opts['confusion_matrix'] ?? undefined
    }) if ${
      this.opts['confusion_matrix'] !== undefined
    } else None, 'display_labels': np.array(${
      this.opts['display_labels'] ?? undefined
    }) if ${this.opts['display_labels'] !== undefined} else None}

ctor_ConfusionMatrixDisplay = {k: v for k, v in ctor_ConfusionMatrixDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeConfusionMatrixDisplay[${this.id}] = ConfusionMatrixDisplay(**ctor_ConfusionMatrixDisplay)`

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

    await this._py.ex`del bridgeConfusionMatrixDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot Confusion Matrix given an estimator and some data.

    Read more in the [User Guide](../model_evaluation.html#confusion-matrix).
   */
  async from_estimator(
    opts: ConfusionMatrixDisplayFromEstimatorOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ConfusionMatrixDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'labels': np.array(${opts['labels'] ?? undefined}) if ${
      opts['labels'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'normalize': ${
      opts['normalize'] ?? undefined
    }, 'display_labels': np.array(${opts['display_labels'] ?? undefined}) if ${
      opts['display_labels'] !== undefined
    } else None, 'include_values': ${
      opts['include_values'] ?? undefined
    }, 'xticks_rotation': ${
      opts['xticks_rotation'] ?? undefined
    }, 'values_format': ${opts['values_format'] ?? undefined}, 'cmap': ${
      opts['cmap'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'colorbar': ${
      opts['colorbar'] ?? undefined
    }, 'im_kw': ${opts['im_kw'] ?? undefined}, 'text_kw': ${
      opts['text_kw'] ?? undefined
    }}

pms_ConfusionMatrixDisplay_from_estimator = {k: v for k, v in pms_ConfusionMatrixDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConfusionMatrixDisplay_from_estimator = bridgeConfusionMatrixDisplay[${this.id}].from_estimator(**pms_ConfusionMatrixDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_ConfusionMatrixDisplay_from_estimator.tolist() if hasattr(res_ConfusionMatrixDisplay_from_estimator, 'tolist') else res_ConfusionMatrixDisplay_from_estimator`
  }

  /**
    Plot Confusion Matrix given true and predicted labels.

    Read more in the [User Guide](../model_evaluation.html#confusion-matrix).
   */
  async from_predictions(
    opts: ConfusionMatrixDisplayFromPredictionsOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ConfusionMatrixDisplay_from_predictions = {'y_true': np.array(${
      opts['y_true'] ?? undefined
    }) if ${opts['y_true'] !== undefined} else None, 'y_pred': np.array(${
      opts['y_pred'] ?? undefined
    }) if ${opts['y_pred'] !== undefined} else None, 'labels': np.array(${
      opts['labels'] ?? undefined
    }) if ${
      opts['labels'] !== undefined
    } else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None, 'normalize': ${
      opts['normalize'] ?? undefined
    }, 'display_labels': np.array(${opts['display_labels'] ?? undefined}) if ${
      opts['display_labels'] !== undefined
    } else None, 'include_values': ${
      opts['include_values'] ?? undefined
    }, 'xticks_rotation': ${
      opts['xticks_rotation'] ?? undefined
    }, 'values_format': ${opts['values_format'] ?? undefined}, 'cmap': ${
      opts['cmap'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'colorbar': ${
      opts['colorbar'] ?? undefined
    }, 'im_kw': ${opts['im_kw'] ?? undefined}, 'text_kw': ${
      opts['text_kw'] ?? undefined
    }}

pms_ConfusionMatrixDisplay_from_predictions = {k: v for k, v in pms_ConfusionMatrixDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConfusionMatrixDisplay_from_predictions = bridgeConfusionMatrixDisplay[${this.id}].from_predictions(**pms_ConfusionMatrixDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_ConfusionMatrixDisplay_from_predictions.tolist() if hasattr(res_ConfusionMatrixDisplay_from_predictions, 'tolist') else res_ConfusionMatrixDisplay_from_predictions`
  }

  /**
    Plot visualization.
   */
  async plot(opts: ConfusionMatrixDisplayPlotOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ConfusionMatrixDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_ConfusionMatrixDisplay_plot = {'include_values': ${
      opts['include_values'] ?? undefined
    }, 'cmap': ${opts['cmap'] ?? undefined}, 'xticks_rotation': ${
      opts['xticks_rotation'] ?? undefined
    }, 'values_format': ${opts['values_format'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'colorbar': ${opts['colorbar'] ?? undefined}, 'im_kw': ${
      opts['im_kw'] ?? undefined
    }, 'text_kw': ${opts['text_kw'] ?? undefined}}

pms_ConfusionMatrixDisplay_plot = {k: v for k, v in pms_ConfusionMatrixDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ConfusionMatrixDisplay_plot = bridgeConfusionMatrixDisplay[${this.id}].plot(**pms_ConfusionMatrixDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_ConfusionMatrixDisplay_plot.tolist() if hasattr(res_ConfusionMatrixDisplay_plot, 'tolist') else res_ConfusionMatrixDisplay_plot`
  }

  /**
    Image representing the confusion matrix.
   */
  get im_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before accessing im_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ConfusionMatrixDisplay_im_ = bridgeConfusionMatrixDisplay[${this.id}].im_`

      // convert the result from python to node.js
      return this
        ._py`attr_ConfusionMatrixDisplay_im_.tolist() if hasattr(attr_ConfusionMatrixDisplay_im_, 'tolist') else attr_ConfusionMatrixDisplay_im_`
    })()
  }

  /**
    Array of matplotlib axes. `None` if `include\_values` is false.
   */
  get text_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before accessing text_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ConfusionMatrixDisplay_text_ = bridgeConfusionMatrixDisplay[${this.id}].text_`

      // convert the result from python to node.js
      return this
        ._py`attr_ConfusionMatrixDisplay_text_.tolist() if hasattr(attr_ConfusionMatrixDisplay_text_, 'tolist') else attr_ConfusionMatrixDisplay_text_`
    })()
  }

  /**
    Axes with confusion matrix.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ConfusionMatrixDisplay_ax_ = bridgeConfusionMatrixDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_ConfusionMatrixDisplay_ax_.tolist() if hasattr(attr_ConfusionMatrixDisplay_ax_, 'tolist') else attr_ConfusionMatrixDisplay_ax_`
    })()
  }

  /**
    Figure containing the confusion matrix.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ConfusionMatrixDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ConfusionMatrixDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ConfusionMatrixDisplay_figure_ = bridgeConfusionMatrixDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_ConfusionMatrixDisplay_figure_.tolist() if hasattr(attr_ConfusionMatrixDisplay_figure_, 'tolist') else attr_ConfusionMatrixDisplay_figure_`
    })()
  }
}

export interface ConfusionMatrixDisplayOptions {
  /**
    Confusion matrix.
   */
  confusion_matrix?: NDArray[]

  /**
    Display labels for plot. If None, display labels are set from 0 to `n\_classes \- 1`.
   */
  display_labels?: NDArray
}

export interface ConfusionMatrixDisplayFromEstimatorOptions {
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
    List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `None` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.
   */
  labels?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike

  /**
    Either to normalize the counts display in the matrix:
   */
  normalize?: 'true' | 'pred' | 'all'

  /**
    Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.
   */
  display_labels?: ArrayLike

  /**
    Includes values in confusion matrix.

    @defaultValue `true`
   */
  include_values?: boolean

  /**
    Rotation of xtick labels.

    @defaultValue `'horizontal'`
   */
  xticks_rotation?: 'vertical' | 'horizontal' | number

  /**
    Format specification for values in confusion matrix. If `None`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.
   */
  values_format?: string

  /**
    Colormap recognized by matplotlib.

    @defaultValue `'viridis'`
   */
  cmap?: string

  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    Whether or not to add a colorbar to the plot.

    @defaultValue `true`
   */
  colorbar?: boolean

  /**
    Dict with keywords passed to `matplotlib.pyplot.imshow` call.
   */
  im_kw?: any

  /**
    Dict with keywords passed to `matplotlib.pyplot.text` call.
   */
  text_kw?: any
}

export interface ConfusionMatrixDisplayFromPredictionsOptions {
  /**
    True labels.
   */
  y_true?: ArrayLike

  /**
    The predicted labels given by the method `predict` of an classifier.
   */
  y_pred?: ArrayLike

  /**
    List of labels to index the confusion matrix. This may be used to reorder or select a subset of labels. If `None` is given, those that appear at least once in `y\_true` or `y\_pred` are used in sorted order.
   */
  labels?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike

  /**
    Either to normalize the counts display in the matrix:
   */
  normalize?: 'true' | 'pred' | 'all'

  /**
    Target names used for plotting. By default, `labels` will be used if it is defined, otherwise the unique labels of `y\_true` and `y\_pred` will be used.
   */
  display_labels?: ArrayLike

  /**
    Includes values in confusion matrix.

    @defaultValue `true`
   */
  include_values?: boolean

  /**
    Rotation of xtick labels.

    @defaultValue `'horizontal'`
   */
  xticks_rotation?: 'vertical' | 'horizontal' | number

  /**
    Format specification for values in confusion matrix. If `None`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.
   */
  values_format?: string

  /**
    Colormap recognized by matplotlib.

    @defaultValue `'viridis'`
   */
  cmap?: string

  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    Whether or not to add a colorbar to the plot.

    @defaultValue `true`
   */
  colorbar?: boolean

  /**
    Dict with keywords passed to `matplotlib.pyplot.imshow` call.
   */
  im_kw?: any

  /**
    Dict with keywords passed to `matplotlib.pyplot.text` call.
   */
  text_kw?: any
}

export interface ConfusionMatrixDisplayPlotOptions {
  /**
    Includes values in confusion matrix.

    @defaultValue `true`
   */
  include_values?: boolean

  /**
    Colormap recognized by matplotlib.

    @defaultValue `'viridis'`
   */
  cmap?: string

  /**
    Rotation of xtick labels.

    @defaultValue `'horizontal'`
   */
  xticks_rotation?: 'vertical' | 'horizontal' | number

  /**
    Format specification for values in confusion matrix. If `None`, the format specification is ‘d’ or ‘.2g’ whichever is shorter.
   */
  values_format?: string

  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    Whether or not to add a colorbar to the plot.

    @defaultValue `true`
   */
  colorbar?: boolean

  /**
    Dict with keywords passed to `matplotlib.pyplot.imshow` call.
   */
  im_kw?: any

  /**
    Dict with keywords passed to `matplotlib.pyplot.text` call.
   */
  text_kw?: any
}
