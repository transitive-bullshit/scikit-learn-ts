/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Visualization of the prediction error of a regression model.

  This tool can display “residuals vs predicted” or “actual vs predicted” using scatter plots to qualitatively assess the behavior of a regressor, preferably on held-out data points.

  See the details in the docstrings of [`from\_estimator`](#sklearn.metrics.PredictionErrorDisplay.from_estimator "sklearn.metrics.PredictionErrorDisplay.from_estimator") or [`from\_predictions`](#sklearn.metrics.PredictionErrorDisplay.from_predictions "sklearn.metrics.PredictionErrorDisplay.from_predictions") to create a visualizer. All parameters are stored as attributes.

  For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.metrics.PredictionErrorDisplay.html
 */
export class PredictionErrorDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PredictionErrorDisplayOptions) {
    this.id = `PredictionErrorDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PredictionErrorDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.metrics import PredictionErrorDisplay
try: bridgePredictionErrorDisplay
except NameError: bridgePredictionErrorDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_PredictionErrorDisplay = {'y_true': np.array(${
      this.opts['y_true'] ?? undefined
    }) if ${this.opts['y_true'] !== undefined} else None, 'y_pred': np.array(${
      this.opts['y_pred'] ?? undefined
    }) if ${this.opts['y_pred'] !== undefined} else None}

ctor_PredictionErrorDisplay = {k: v for k, v in ctor_PredictionErrorDisplay.items() if v is not None}`

    await this._py
      .ex`bridgePredictionErrorDisplay[${this.id}] = PredictionErrorDisplay(**ctor_PredictionErrorDisplay)`

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

    await this._py.ex`del bridgePredictionErrorDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot the prediction error given a regressor and some data.

    For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).
   */
  async from_estimator(
    opts: PredictionErrorDisplayFromEstimatorOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PredictionErrorDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'kind': ${opts['kind'] ?? undefined}, 'subsample': ${
      opts['subsample'] ?? undefined
    }, 'random_state': ${opts['random_state'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'scatter_kwargs': ${
      opts['scatter_kwargs'] ?? undefined
    }, 'line_kwargs': ${opts['line_kwargs'] ?? undefined}}

pms_PredictionErrorDisplay_from_estimator = {k: v for k, v in pms_PredictionErrorDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PredictionErrorDisplay_from_estimator = bridgePredictionErrorDisplay[${this.id}].from_estimator(**pms_PredictionErrorDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_PredictionErrorDisplay_from_estimator.tolist() if hasattr(res_PredictionErrorDisplay_from_estimator, 'tolist') else res_PredictionErrorDisplay_from_estimator`
  }

  /**
    Plot the prediction error given the true and predicted targets.

    For general information regarding `scikit-learn` visualization tools, read more in the [Visualization Guide](../../visualizations.html#visualizations). For details regarding interpreting these plots, refer to the [Model Evaluation Guide](../model_evaluation.html#visualization-regression-evaluation).
   */
  async from_predictions(
    opts: PredictionErrorDisplayFromPredictionsOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before from_predictions()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PredictionErrorDisplay_from_predictions = {'y_true': np.array(${
      opts['y_true'] ?? undefined
    }) if ${opts['y_true'] !== undefined} else None, 'y_pred': np.array(${
      opts['y_pred'] ?? undefined
    }) if ${opts['y_pred'] !== undefined} else None, 'kind': ${
      opts['kind'] ?? undefined
    }, 'subsample': ${opts['subsample'] ?? undefined}, 'random_state': ${
      opts['random_state'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'scatter_kwargs': ${
      opts['scatter_kwargs'] ?? undefined
    }, 'line_kwargs': ${opts['line_kwargs'] ?? undefined}}

pms_PredictionErrorDisplay_from_predictions = {k: v for k, v in pms_PredictionErrorDisplay_from_predictions.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PredictionErrorDisplay_from_predictions = bridgePredictionErrorDisplay[${this.id}].from_predictions(**pms_PredictionErrorDisplay_from_predictions)`

    // convert the result from python to node.js
    return this
      ._py`res_PredictionErrorDisplay_from_predictions.tolist() if hasattr(res_PredictionErrorDisplay_from_predictions, 'tolist') else res_PredictionErrorDisplay_from_predictions`
  }

  /**
    Plot visualization.

    Extra keyword arguments will be passed to matplotlib’s `plot`.
   */
  async plot(opts: PredictionErrorDisplayPlotOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PredictionErrorDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_PredictionErrorDisplay_plot = {'ax': ${
      opts['ax'] ?? undefined
    }, 'kind': ${opts['kind'] ?? undefined}, 'scatter_kwargs': ${
      opts['scatter_kwargs'] ?? undefined
    }, 'line_kwargs': ${opts['line_kwargs'] ?? undefined}}

pms_PredictionErrorDisplay_plot = {k: v for k, v in pms_PredictionErrorDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PredictionErrorDisplay_plot = bridgePredictionErrorDisplay[${this.id}].plot(**pms_PredictionErrorDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_PredictionErrorDisplay_plot.tolist() if hasattr(res_PredictionErrorDisplay_plot, 'tolist') else res_PredictionErrorDisplay_plot`
  }

  /**
    Optimal line representing `y\_true \== y\_pred`. Therefore, it is a diagonal line for `kind="predictions"` and a horizontal line for `kind="residuals"`.
   */
  get line_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before accessing line_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PredictionErrorDisplay_line_ = bridgePredictionErrorDisplay[${this.id}].line_`

      // convert the result from python to node.js
      return this
        ._py`attr_PredictionErrorDisplay_line_.tolist() if hasattr(attr_PredictionErrorDisplay_line_, 'tolist') else attr_PredictionErrorDisplay_line_`
    })()
  }

  /**
    Residual lines. If `with\_errors=False`, then it is set to `None`.
   */
  get errors_lines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before accessing errors_lines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PredictionErrorDisplay_errors_lines_ = bridgePredictionErrorDisplay[${this.id}].errors_lines_`

      // convert the result from python to node.js
      return this
        ._py`attr_PredictionErrorDisplay_errors_lines_.tolist() if hasattr(attr_PredictionErrorDisplay_errors_lines_, 'tolist') else attr_PredictionErrorDisplay_errors_lines_`
    })()
  }

  /**
    Scatter data points.
   */
  get scatter_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before accessing scatter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PredictionErrorDisplay_scatter_ = bridgePredictionErrorDisplay[${this.id}].scatter_`

      // convert the result from python to node.js
      return this
        ._py`attr_PredictionErrorDisplay_scatter_.tolist() if hasattr(attr_PredictionErrorDisplay_scatter_, 'tolist') else attr_PredictionErrorDisplay_scatter_`
    })()
  }

  /**
    Axes with the different matplotlib axis.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PredictionErrorDisplay_ax_ = bridgePredictionErrorDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_PredictionErrorDisplay_ax_.tolist() if hasattr(attr_PredictionErrorDisplay_ax_, 'tolist') else attr_PredictionErrorDisplay_ax_`
    })()
  }

  /**
    Figure containing the scatter and lines.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PredictionErrorDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PredictionErrorDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PredictionErrorDisplay_figure_ = bridgePredictionErrorDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_PredictionErrorDisplay_figure_.tolist() if hasattr(attr_PredictionErrorDisplay_figure_, 'tolist') else attr_PredictionErrorDisplay_figure_`
    })()
  }
}

export interface PredictionErrorDisplayOptions {
  /**
    True values.
   */
  y_true?: NDArray

  /**
    Prediction values.
   */
  y_pred?: NDArray
}

export interface PredictionErrorDisplayFromEstimatorOptions {
  /**
    Fitted regressor or a fitted [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline") in which the last estimator is a regressor.
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
    The type of plot to draw:

    @defaultValue `'residual_vs_predicted'`
   */
  kind?: 'actual_vs_predicted' | 'residual_vs_predicted'

  /**
    Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `None`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.

    @defaultValue `1`
   */
  subsample?: number

  /**
    Controls the randomness when `subsample` is not `None`. See [Glossary](../../glossary.html#term-random_state) for details.
   */
  random_state?: number

  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.
   */
  scatter_kwargs?: any

  /**
    Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.
   */
  line_kwargs?: any
}

export interface PredictionErrorDisplayFromPredictionsOptions {
  /**
    True target values.
   */
  y_true?: ArrayLike

  /**
    Predicted target values.
   */
  y_pred?: ArrayLike

  /**
    The type of plot to draw:

    @defaultValue `'residual_vs_predicted'`
   */
  kind?: 'actual_vs_predicted' | 'residual_vs_predicted'

  /**
    Sampling the samples to be shown on the scatter plot. If `float`, it should be between 0 and 1 and represents the proportion of the original dataset. If `int`, it represents the number of samples display on the scatter plot. If `None`, no subsampling will be applied. by default, a 1000 samples or less will be displayed.

    @defaultValue `1`
   */
  subsample?: number

  /**
    Controls the randomness when `subsample` is not `None`. See [Glossary](../../glossary.html#term-random_state) for details.
   */
  random_state?: number

  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.
   */
  scatter_kwargs?: any

  /**
    Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.
   */
  line_kwargs?: any
}

export interface PredictionErrorDisplayPlotOptions {
  /**
    Axes object to plot on. If `None`, a new figure and axes is created.
   */
  ax?: any

  /**
    The type of plot to draw:

    @defaultValue `'residual_vs_predicted'`
   */
  kind?: 'actual_vs_predicted' | 'residual_vs_predicted'

  /**
    Dictionary with keywords passed to the `matplotlib.pyplot.scatter` call.
   */
  scatter_kwargs?: any

  /**
    Dictionary with keyword passed to the `matplotlib.pyplot.plot` call to draw the optimal line.
   */
  line_kwargs?: any
}
