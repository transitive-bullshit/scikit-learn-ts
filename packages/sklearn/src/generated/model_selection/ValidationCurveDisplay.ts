/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Validation Curve visualization.

  It is recommended to use [`from\_estimator`](#sklearn.model_selection.ValidationCurveDisplay.from_estimator "sklearn.model_selection.ValidationCurveDisplay.from_estimator") to create a [`ValidationCurveDisplay`](#sklearn.model_selection.ValidationCurveDisplay "sklearn.model_selection.ValidationCurveDisplay") instance. All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](../learning_curve.html#validation-curve) regarding the validation curve visualization.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ValidationCurveDisplay.html)
 */
export class ValidationCurveDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Name of the parameter that has been varied.
     */
    param_name?: string

    /**
      The values of the parameter that have been evaluated.
     */
    param_range?: ArrayLike

    /**
      Scores on training sets.
     */
    train_scores?: NDArray[]

    /**
      Scores on test set.
     */
    test_scores?: NDArray[]

    /**
      The name of the score used in `validation\_curve`. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise.
     */
    score_name?: string
  }) {
    this.id = `ValidationCurveDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'ValidationCurveDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import ValidationCurveDisplay
try: bridgeValidationCurveDisplay
except NameError: bridgeValidationCurveDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_ValidationCurveDisplay = {'param_name': ${
      this.opts['param_name'] ?? undefined
    }, 'param_range': np.array(${this.opts['param_range'] ?? undefined}) if ${
      this.opts['param_range'] !== undefined
    } else None, 'train_scores': np.array(${
      this.opts['train_scores'] ?? undefined
    }) if ${
      this.opts['train_scores'] !== undefined
    } else None, 'test_scores': np.array(${
      this.opts['test_scores'] ?? undefined
    }) if ${this.opts['test_scores'] !== undefined} else None, 'score_name': ${
      this.opts['score_name'] ?? undefined
    }}

ctor_ValidationCurveDisplay = {k: v for k, v in ctor_ValidationCurveDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeValidationCurveDisplay[${this.id}] = ValidationCurveDisplay(**ctor_ValidationCurveDisplay)`

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

    await this._py.ex`del bridgeValidationCurveDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Create a validation curve display from an estimator.

    Read more in the [User Guide](../../visualizations.html#visualizations) for general information about the visualization API and [detailed documentation](../learning_curve.html#validation-curve) regarding the validation curve visualization.
   */
  async from_estimator(opts: {
    /**
      An object of that type which is cloned for each validation.
     */
    estimator?: any

    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike[]

    /**
      Target relative to X for classification or regression; `undefined` for unsupervised learning.
     */
    y?: ArrayLike

    /**
      Name of the parameter that will be varied.
     */
    param_name?: string

    /**
      The values of the parameter that will be evaluated.
     */
    param_range?: ArrayLike

    /**
      Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).
     */
    groups?: ArrayLike

    /**
      Determines the cross-validation splitting strategy. Possible inputs for cv are:
     */
    cv?: number

    /**
      A string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)).
     */
    scoring?: string

    /**
      Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Number of predispatched jobs for parallel execution (default is all). The option can reduce the allocated memory. The str can be an expression like ‘2\*n\_jobs’.

      @defaultValue `'all'`
     */
    pre_dispatch?: number | string

    /**
      Controls the verbosity: the higher, the more messages.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised.
     */
    error_score?: 'raise'

    /**
      Parameters to pass to the fit method of the estimator.
     */
    fit_params?: any

    /**
      Axes object to plot on. If `undefined`, a new figure and axes is created.
     */
    ax?: any

    /**
      Whether or not to negate the scores obtained through [`validation\_curve`](sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

      @defaultValue `false`
     */
    negate_score?: boolean

    /**
      The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise.
     */
    score_name?: string

    /**
      The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

      @defaultValue `'both'`
     */
    score_type?: 'test' | 'train' | 'both'

    /**
      The style used to display the score standard deviation around the mean score. If `undefined`, no representation of the standard deviation is displayed.

      @defaultValue `'fill_between'`
     */
    std_display_style?: 'errorbar' | 'fill_between'

    /**
      Additional keyword arguments passed to the `plt.plot` used to draw the mean score.
     */
    line_kw?: any

    /**
      Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation.
     */
    fill_between_kw?: any

    /**
      Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.
     */
    errorbar_kw?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_ValidationCurveDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'param_name': ${
      opts['param_name'] ?? undefined
    }, 'param_range': np.array(${opts['param_range'] ?? undefined}) if ${
      opts['param_range'] !== undefined
    } else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${
      opts['groups'] !== undefined
    } else None, 'cv': ${opts['cv'] ?? undefined}, 'scoring': ${
      opts['scoring'] ?? undefined
    }, 'n_jobs': ${opts['n_jobs'] ?? undefined}, 'pre_dispatch': ${
      opts['pre_dispatch'] ?? undefined
    }, 'verbose': ${opts['verbose'] ?? undefined}, 'error_score': ${
      opts['error_score'] ?? undefined
    }, 'fit_params': ${opts['fit_params'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'negate_score': ${opts['negate_score'] ?? undefined}, 'score_name': ${
      opts['score_name'] ?? undefined
    }, 'score_type': ${opts['score_type'] ?? undefined}, 'std_display_style': ${
      opts['std_display_style'] ?? undefined
    }, 'line_kw': ${opts['line_kw'] ?? undefined}, 'fill_between_kw': ${
      opts['fill_between_kw'] ?? undefined
    }, 'errorbar_kw': ${opts['errorbar_kw'] ?? undefined}}

pms_ValidationCurveDisplay_from_estimator = {k: v for k, v in pms_ValidationCurveDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ValidationCurveDisplay_from_estimator = bridgeValidationCurveDisplay[${this.id}].from_estimator(**pms_ValidationCurveDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_ValidationCurveDisplay_from_estimator.tolist() if hasattr(res_ValidationCurveDisplay_from_estimator, 'tolist') else res_ValidationCurveDisplay_from_estimator`
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
      Whether or not to negate the scores obtained through [`validation\_curve`](sklearn.model_selection.validation_curve.html#sklearn.model_selection.validation_curve "sklearn.model_selection.validation_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

      @defaultValue `false`
     */
    negate_score?: boolean

    /**
      The name of the score used to decorate the y-axis of the plot. It will override the name inferred from the `scoring` parameter. If `score` is `undefined`, we use `"Score"` if `negate\_score` is `false` and `"Negative score"` otherwise. If `scoring` is a string or a callable, we infer the name. We replace `\_` by spaces and capitalize the first letter. We remove `neg\_` and replace it by `"Negative"` if `negate\_score` is `false` or just remove it otherwise.
     */
    score_name?: string

    /**
      The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

      @defaultValue `'both'`
     */
    score_type?: 'test' | 'train' | 'both'

    /**
      The style used to display the score standard deviation around the mean score. If `undefined`, no standard deviation representation is displayed.

      @defaultValue `'fill_between'`
     */
    std_display_style?: 'errorbar' | 'fill_between'

    /**
      Additional keyword arguments passed to the `plt.plot` used to draw the mean score.
     */
    line_kw?: any

    /**
      Additional keyword arguments passed to the `plt.fill\_between` used to draw the score standard deviation.
     */
    fill_between_kw?: any

    /**
      Additional keyword arguments passed to the `plt.errorbar` used to draw mean score and standard deviation score.
     */
    errorbar_kw?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('ValidationCurveDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_ValidationCurveDisplay_plot = {'ax': ${
      opts['ax'] ?? undefined
    }, 'negate_score': ${opts['negate_score'] ?? undefined}, 'score_name': ${
      opts['score_name'] ?? undefined
    }, 'score_type': ${opts['score_type'] ?? undefined}, 'std_display_style': ${
      opts['std_display_style'] ?? undefined
    }, 'line_kw': ${opts['line_kw'] ?? undefined}, 'fill_between_kw': ${
      opts['fill_between_kw'] ?? undefined
    }, 'errorbar_kw': ${opts['errorbar_kw'] ?? undefined}}

pms_ValidationCurveDisplay_plot = {k: v for k, v in pms_ValidationCurveDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_ValidationCurveDisplay_plot = bridgeValidationCurveDisplay[${this.id}].plot(**pms_ValidationCurveDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_ValidationCurveDisplay_plot.tolist() if hasattr(res_ValidationCurveDisplay_plot, 'tolist') else res_ValidationCurveDisplay_plot`
  }

  /**
    Axes with the validation curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ValidationCurveDisplay_ax_ = bridgeValidationCurveDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_ValidationCurveDisplay_ax_.tolist() if hasattr(attr_ValidationCurveDisplay_ax_, 'tolist') else attr_ValidationCurveDisplay_ax_`
    })()
  }

  /**
    Figure containing the validation curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ValidationCurveDisplay_figure_ = bridgeValidationCurveDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_ValidationCurveDisplay_figure_.tolist() if hasattr(attr_ValidationCurveDisplay_figure_, 'tolist') else attr_ValidationCurveDisplay_figure_`
    })()
  }

  /**
    When the `std\_display\_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar\_` is `undefined`.
   */
  get errorbar_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before accessing errorbar_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ValidationCurveDisplay_errorbar_ = bridgeValidationCurveDisplay[${this.id}].errorbar_`

      // convert the result from python to node.js
      return this
        ._py`attr_ValidationCurveDisplay_errorbar_.tolist() if hasattr(attr_ValidationCurveDisplay_errorbar_, 'tolist') else attr_ValidationCurveDisplay_errorbar_`
    })()
  }

  /**
    When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line\_` is `undefined`.
   */
  get lines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before accessing lines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ValidationCurveDisplay_lines_ = bridgeValidationCurveDisplay[${this.id}].lines_`

      // convert the result from python to node.js
      return this
        ._py`attr_ValidationCurveDisplay_lines_.tolist() if hasattr(attr_ValidationCurveDisplay_lines_, 'tolist') else attr_ValidationCurveDisplay_lines_`
    })()
  }

  /**
    When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill\_between\_` is `undefined`.
   */
  get fill_between_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ValidationCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ValidationCurveDisplay must call init() before accessing fill_between_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ValidationCurveDisplay_fill_between_ = bridgeValidationCurveDisplay[${this.id}].fill_between_`

      // convert the result from python to node.js
      return this
        ._py`attr_ValidationCurveDisplay_fill_between_.tolist() if hasattr(attr_ValidationCurveDisplay_fill_between_, 'tolist') else attr_ValidationCurveDisplay_fill_between_`
    })()
  }
}
