/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Decisions boundary visualization.

  It is recommended to use [`from\_estimator`](#sklearn.inspection.DecisionBoundaryDisplay.from_estimator "sklearn.inspection.DecisionBoundaryDisplay.from_estimator") to create a [`DecisionBoundaryDisplay`](#sklearn.inspection.DecisionBoundaryDisplay "sklearn.inspection.DecisionBoundaryDisplay"). All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.inspection.DecisionBoundaryDisplay.html)
 */
export class DecisionBoundaryDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      First output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v1.26)").
     */
    xx0?: NDArray[]

    /**
      Second output of [`meshgrid`](https://numpy.org/doc/stable/reference/generated/numpy.meshgrid.html#numpy.meshgrid "(in NumPy v1.26)").
     */
    xx1?: NDArray[]

    /**
      Values of the response function.
     */
    response?: NDArray[]

    /**
      Default label to place on x axis.
     */
    xlabel?: string

    /**
      Default label to place on y axis.
     */
    ylabel?: string
  }) {
    this.id = `DecisionBoundaryDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'DecisionBoundaryDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.inspection import DecisionBoundaryDisplay
try: bridgeDecisionBoundaryDisplay
except NameError: bridgeDecisionBoundaryDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_DecisionBoundaryDisplay = {'xx0': np.array(${
      this.opts['xx0'] ?? undefined
    }) if ${this.opts['xx0'] !== undefined} else None, 'xx1': np.array(${
      this.opts['xx1'] ?? undefined
    }) if ${this.opts['xx1'] !== undefined} else None, 'response': np.array(${
      this.opts['response'] ?? undefined
    }) if ${this.opts['response'] !== undefined} else None, 'xlabel': ${
      this.opts['xlabel'] ?? undefined
    }, 'ylabel': ${this.opts['ylabel'] ?? undefined}}

ctor_DecisionBoundaryDisplay = {k: v for k, v in ctor_DecisionBoundaryDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeDecisionBoundaryDisplay[${this.id}] = DecisionBoundaryDisplay(**ctor_DecisionBoundaryDisplay)`

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

    await this._py.ex`del bridgeDecisionBoundaryDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Plot decision boundary given an estimator.

    Read more in the [User Guide](../../visualizations.html#visualizations).
   */
  async from_estimator(opts: {
    /**
      Trained estimator used to plot the decision boundary.
     */
    estimator?: any

    /**
      Input data that should be only 2-dimensional.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Number of grid points to use for plotting decision boundary. Higher values will make the plot look nicer but be slower to render.

      @defaultValue `100`
     */
    grid_resolution?: number

    /**
      Extends the minimum and maximum values of X for evaluating the response function.

      @defaultValue `1`
     */
    eps?: number

    /**
      Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.8.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.8.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.8.1)").

      @defaultValue `'contourf'`
     */
    plot_method?: 'contourf' | 'contour' | 'pcolormesh'

    /**
      Specifies whether to use [predict\_proba](../../glossary.html#term-predict_proba), [decision\_function](../../glossary.html#term-decision_function), [predict](../../glossary.html#term-predict) as the target response. If set to ‘auto’, the response method is tried in the following order: [decision\_function](../../glossary.html#term-decision_function), [predict\_proba](../../glossary.html#term-predict_proba), [predict](../../glossary.html#term-predict). For multiclass problems, [predict](../../glossary.html#term-predict) is selected when `response\_method="auto"`.

      @defaultValue `'auto'`
     */
    response_method?: 'auto' | 'predict_proba' | 'decision_function' | 'predict'

    /**
      The label used for the x-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.
     */
    xlabel?: string

    /**
      The label used for the y-axis. If `undefined`, an attempt is made to extract a label from `X` if it is a dataframe, otherwise an empty string is used.
     */
    ylabel?: string

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Additional keyword arguments to be passed to the `plot\_method`.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionBoundaryDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_DecisionBoundaryDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'grid_resolution': ${
      opts['grid_resolution'] ?? undefined
    }, 'eps': ${opts['eps'] ?? undefined}, 'plot_method': ${
      opts['plot_method'] ?? undefined
    }, 'response_method': ${opts['response_method'] ?? undefined}, 'xlabel': ${
      opts['xlabel'] ?? undefined
    }, 'ylabel': ${opts['ylabel'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'kwargs': ${opts['kwargs'] ?? undefined}}

pms_DecisionBoundaryDisplay_from_estimator = {k: v for k, v in pms_DecisionBoundaryDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionBoundaryDisplay_from_estimator = bridgeDecisionBoundaryDisplay[${this.id}].from_estimator(**pms_DecisionBoundaryDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionBoundaryDisplay_from_estimator.tolist() if hasattr(res_DecisionBoundaryDisplay_from_estimator, 'tolist') else res_DecisionBoundaryDisplay_from_estimator`
  }

  /**
    Plot visualization.
   */
  async plot(opts: {
    /**
      Plotting method to call when plotting the response. Please refer to the following matplotlib documentation for details: [`contourf`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contourf.html#matplotlib.pyplot.contourf "(in Matplotlib v3.8.1)"), [`contour`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.contour.html#matplotlib.pyplot.contour "(in Matplotlib v3.8.1)"), [`pcolormesh`](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pcolormesh.html#matplotlib.pyplot.pcolormesh "(in Matplotlib v3.8.1)").

      @defaultValue `'contourf'`
     */
    plot_method?: 'contourf' | 'contour' | 'pcolormesh'

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Overwrite the x-axis label.
     */
    xlabel?: string

    /**
      Overwrite the y-axis label.
     */
    ylabel?: string

    /**
      Additional keyword arguments to be passed to the `plot\_method`.
     */
    kwargs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('DecisionBoundaryDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_DecisionBoundaryDisplay_plot = {'plot_method': ${
      opts['plot_method'] ?? undefined
    }, 'ax': ${opts['ax'] ?? undefined}, 'xlabel': ${
      opts['xlabel'] ?? undefined
    }, 'ylabel': ${opts['ylabel'] ?? undefined}, 'kwargs': ${
      opts['kwargs'] ?? undefined
    }}

pms_DecisionBoundaryDisplay_plot = {k: v for k, v in pms_DecisionBoundaryDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_DecisionBoundaryDisplay_plot = bridgeDecisionBoundaryDisplay[${this.id}].plot(**pms_DecisionBoundaryDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_DecisionBoundaryDisplay_plot.tolist() if hasattr(res_DecisionBoundaryDisplay_plot, 'tolist') else res_DecisionBoundaryDisplay_plot`
  }

  /**
    If `plot\_method` is ‘contour’ or ‘contourf’, `surface\_` is a [`QuadContourSet`](https://matplotlib.org/stable/api/contour_api.html#matplotlib.contour.QuadContourSet "(in Matplotlib v3.8.1)"). If `plot\_method` is ‘pcolormesh’, `surface\_` is a [`QuadMesh`](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.QuadMesh "(in Matplotlib v3.8.1)").
   */
  get surface_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionBoundaryDisplay must call init() before accessing surface_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionBoundaryDisplay_surface_ = bridgeDecisionBoundaryDisplay[${this.id}].surface_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionBoundaryDisplay_surface_.tolist() if hasattr(attr_DecisionBoundaryDisplay_surface_, 'tolist') else attr_DecisionBoundaryDisplay_surface_`
    })()
  }

  /**
    Axes with confusion matrix.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionBoundaryDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionBoundaryDisplay_ax_ = bridgeDecisionBoundaryDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionBoundaryDisplay_ax_.tolist() if hasattr(attr_DecisionBoundaryDisplay_ax_, 'tolist') else attr_DecisionBoundaryDisplay_ax_`
    })()
  }

  /**
    Figure containing the confusion matrix.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This DecisionBoundaryDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'DecisionBoundaryDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_DecisionBoundaryDisplay_figure_ = bridgeDecisionBoundaryDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_DecisionBoundaryDisplay_figure_.tolist() if hasattr(attr_DecisionBoundaryDisplay_figure_, 'tolist') else attr_DecisionBoundaryDisplay_figure_`
    })()
  }
}
