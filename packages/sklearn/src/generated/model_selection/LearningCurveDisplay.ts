/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Learning Curve visualization.

  It is recommended to use [`from\_estimator`](#sklearn.model_selection.LearningCurveDisplay.from_estimator "sklearn.model_selection.LearningCurveDisplay.from_estimator") to create a [`LearningCurveDisplay`](#sklearn.model_selection.LearningCurveDisplay "sklearn.model_selection.LearningCurveDisplay") instance. All parameters are stored as attributes.

  Read more in the [User Guide](../../visualizations.html#visualizations).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LearningCurveDisplay.html
 */
export class LearningCurveDisplay {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LearningCurveDisplayOptions) {
    this.id = `LearningCurveDisplay${crypto.randomUUID().split('-')[0]}`
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
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LearningCurveDisplay.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import LearningCurveDisplay
try: bridgeLearningCurveDisplay
except NameError: bridgeLearningCurveDisplay = {}
`

    // set up constructor params
    await this._py.ex`ctor_LearningCurveDisplay = {'train_sizes': np.array(${
      this.opts['train_sizes'] ?? undefined
    }) if ${
      this.opts['train_sizes'] !== undefined
    } else None, 'train_scores': np.array(${
      this.opts['train_scores'] ?? undefined
    }) if ${
      this.opts['train_scores'] !== undefined
    } else None, 'test_scores': np.array(${
      this.opts['test_scores'] ?? undefined
    }) if ${this.opts['test_scores'] !== undefined} else None, 'score_name': ${
      this.opts['score_name'] ?? undefined
    }}

ctor_LearningCurveDisplay = {k: v for k, v in ctor_LearningCurveDisplay.items() if v is not None}`

    await this._py
      .ex`bridgeLearningCurveDisplay[${this.id}] = LearningCurveDisplay(**ctor_LearningCurveDisplay)`

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

    await this._py.ex`del bridgeLearningCurveDisplay[${this.id}]`

    this._isDisposed = true
  }

  /**
    Create a learning curve display from an estimator.
   */
  async from_estimator(
    opts: LearningCurveDisplayFromEstimatorOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before from_estimator()'
      )
    }

    // set up method params
    await this._py.ex`pms_LearningCurveDisplay_from_estimator = {'estimator': ${
      opts['estimator'] ?? undefined
    }, 'X': np.array(${opts['X'] ?? undefined}) if ${
      opts['X'] !== undefined
    } else None, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'groups': np.array(${opts['groups'] ?? undefined}) if ${
      opts['groups'] !== undefined
    } else None, 'train_sizes': np.array(${
      opts['train_sizes'] ?? undefined
    }) if ${opts['train_sizes'] !== undefined} else None, 'cv': ${
      opts['cv'] ?? undefined
    }, 'scoring': ${
      opts['scoring'] ?? undefined
    }, 'exploit_incremental_learning': ${
      opts['exploit_incremental_learning'] ?? undefined
    }, 'n_jobs': ${opts['n_jobs'] ?? undefined}, 'pre_dispatch': ${
      opts['pre_dispatch'] ?? undefined
    }, 'verbose': ${opts['verbose'] ?? undefined}, 'shuffle': ${
      opts['shuffle'] ?? undefined
    }, 'random_state': ${opts['random_state'] ?? undefined}, 'error_score': ${
      opts['error_score'] ?? undefined
    }, 'fit_params': ${opts['fit_params'] ?? undefined}, 'ax': ${
      opts['ax'] ?? undefined
    }, 'negate_score': ${opts['negate_score'] ?? undefined}, 'score_name': ${
      opts['score_name'] ?? undefined
    }, 'score_type': ${opts['score_type'] ?? undefined}, 'log_scale': ${
      opts['log_scale'] ?? undefined
    }, 'std_display_style': ${
      opts['std_display_style'] ?? undefined
    }, 'line_kw': ${opts['line_kw'] ?? undefined}, 'fill_between_kw': ${
      opts['fill_between_kw'] ?? undefined
    }, 'errorbar_kw': ${opts['errorbar_kw'] ?? undefined}}

pms_LearningCurveDisplay_from_estimator = {k: v for k, v in pms_LearningCurveDisplay_from_estimator.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LearningCurveDisplay_from_estimator = bridgeLearningCurveDisplay[${this.id}].from_estimator(**pms_LearningCurveDisplay_from_estimator)`

    // convert the result from python to node.js
    return this
      ._py`res_LearningCurveDisplay_from_estimator.tolist() if hasattr(res_LearningCurveDisplay_from_estimator, 'tolist') else res_LearningCurveDisplay_from_estimator`
  }

  /**
    Plot visualization.
   */
  async plot(opts: LearningCurveDisplayPlotOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('LearningCurveDisplay must call init() before plot()')
    }

    // set up method params
    await this._py.ex`pms_LearningCurveDisplay_plot = {'ax': ${
      opts['ax'] ?? undefined
    }, 'negate_score': ${opts['negate_score'] ?? undefined}, 'score_name': ${
      opts['score_name'] ?? undefined
    }, 'score_type': ${opts['score_type'] ?? undefined}, 'log_scale': ${
      opts['log_scale'] ?? undefined
    }, 'std_display_style': ${
      opts['std_display_style'] ?? undefined
    }, 'line_kw': ${opts['line_kw'] ?? undefined}, 'fill_between_kw': ${
      opts['fill_between_kw'] ?? undefined
    }, 'errorbar_kw': ${opts['errorbar_kw'] ?? undefined}}

pms_LearningCurveDisplay_plot = {k: v for k, v in pms_LearningCurveDisplay_plot.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LearningCurveDisplay_plot = bridgeLearningCurveDisplay[${this.id}].plot(**pms_LearningCurveDisplay_plot)`

    // convert the result from python to node.js
    return this
      ._py`res_LearningCurveDisplay_plot.tolist() if hasattr(res_LearningCurveDisplay_plot, 'tolist') else res_LearningCurveDisplay_plot`
  }

  /**
    Axes with the learning curve.
   */
  get ax_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before accessing ax_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LearningCurveDisplay_ax_ = bridgeLearningCurveDisplay[${this.id}].ax_`

      // convert the result from python to node.js
      return this
        ._py`attr_LearningCurveDisplay_ax_.tolist() if hasattr(attr_LearningCurveDisplay_ax_, 'tolist') else attr_LearningCurveDisplay_ax_`
    })()
  }

  /**
    Figure containing the learning curve.
   */
  get figure_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before accessing figure_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LearningCurveDisplay_figure_ = bridgeLearningCurveDisplay[${this.id}].figure_`

      // convert the result from python to node.js
      return this
        ._py`attr_LearningCurveDisplay_figure_.tolist() if hasattr(attr_LearningCurveDisplay_figure_, 'tolist') else attr_LearningCurveDisplay_figure_`
    })()
  }

  /**
    When the `std\_display\_style` is `"errorbar"`, this is a list of `matplotlib.container.ErrorbarContainer` objects. If another style is used, `errorbar\_` is `undefined`.
   */
  get errorbar_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before accessing errorbar_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LearningCurveDisplay_errorbar_ = bridgeLearningCurveDisplay[${this.id}].errorbar_`

      // convert the result from python to node.js
      return this
        ._py`attr_LearningCurveDisplay_errorbar_.tolist() if hasattr(attr_LearningCurveDisplay_errorbar_, 'tolist') else attr_LearningCurveDisplay_errorbar_`
    })()
  }

  /**
    When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.lines.Line2D` objects corresponding to the mean train and test scores. If another style is used, `line\_` is `undefined`.
   */
  get lines_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before accessing lines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LearningCurveDisplay_lines_ = bridgeLearningCurveDisplay[${this.id}].lines_`

      // convert the result from python to node.js
      return this
        ._py`attr_LearningCurveDisplay_lines_.tolist() if hasattr(attr_LearningCurveDisplay_lines_, 'tolist') else attr_LearningCurveDisplay_lines_`
    })()
  }

  /**
    When the `std\_display\_style` is `"fill\_between"`, this is a list of `matplotlib.collections.PolyCollection` objects. If another style is used, `fill\_between\_` is `undefined`.
   */
  get fill_between_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LearningCurveDisplay instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LearningCurveDisplay must call init() before accessing fill_between_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LearningCurveDisplay_fill_between_ = bridgeLearningCurveDisplay[${this.id}].fill_between_`

      // convert the result from python to node.js
      return this
        ._py`attr_LearningCurveDisplay_fill_between_.tolist() if hasattr(attr_LearningCurveDisplay_fill_between_, 'tolist') else attr_LearningCurveDisplay_fill_between_`
    })()
  }
}

export interface LearningCurveDisplayOptions {
  /**
    Numbers of training examples that has been used to generate the learning curve.
   */
  train_sizes?: NDArray

  /**
    Scores on training sets.
   */
  train_scores?: NDArray[]

  /**
    Scores on test set.
   */
  test_scores?: NDArray[]

  /**
    The name of the score used in `learning\_curve`. It will be used to decorate the y-axis. If `undefined`, the generic name `"Score"` will be used.
   */
  score_name?: string
}

export interface LearningCurveDisplayFromEstimatorOptions {
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
    Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” [cv](../../glossary.html#term-cv) instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")).
   */
  groups?: ArrayLike

  /**
    Relative or absolute numbers of training examples that will be used to generate the learning curve. If the dtype is float, it is regarded as a fraction of the maximum size of the training set (that is determined by the selected validation method), i.e. it has to be within (0, 1\]. Otherwise it is interpreted as absolute sizes of the training sets. Note that for classification the number of samples usually have to be big enough to contain at least one sample from each class.
   */
  train_sizes?: ArrayLike

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    A string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a scorer callable object / function with signature `scorer(estimator, X, y)` (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)).
   */
  scoring?: string

  /**
    If the estimator supports incremental learning, this will be used to speed up fitting for different training set sizes.

    @defaultValue `false`
   */
  exploit_incremental_learning?: boolean

  /**
    Number of jobs to run in parallel. Training the estimator and computing the score are parallelized over the different training and test sets. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
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
    Whether to shuffle training data before taking prefixes of it based on\`train\_sizes\`.

    @defaultValue `false`
   */
  shuffle?: boolean

  /**
    Used when `shuffle` is `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

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
    Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

    @defaultValue `false`
   */
  negate_score?: boolean

  /**
    The name of the score used to decorate the y-axis of the plot. If `undefined`, the generic `"Score"` name will be used.
   */
  score_name?: string

  /**
    The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

    @defaultValue `'test'`
   */
  score_type?: 'test' | 'train' | 'both'

  /**
    Whether or not to use a logarithmic scale for the x-axis.

    @defaultValue `false`
   */
  log_scale?: boolean

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
}

export interface LearningCurveDisplayPlotOptions {
  /**
    Axes object to plot on. If `undefined`, a new figure and axes is created.
   */
  ax?: any

  /**
    Whether or not to negate the scores obtained through [`learning\_curve`](sklearn.model_selection.learning_curve.html#sklearn.model_selection.learning_curve "sklearn.model_selection.learning_curve"). This is particularly useful when using the error denoted by `neg\_\*` in `scikit-learn`.

    @defaultValue `false`
   */
  negate_score?: boolean

  /**
    The name of the score used to decorate the y-axis of the plot. If `undefined`, the generic name “Score” will be used.
   */
  score_name?: string

  /**
    The type of score to plot. Can be one of `"test"`, `"train"`, or `"both"`.

    @defaultValue `'test'`
   */
  score_type?: 'test' | 'train' | 'both'

  /**
    Whether or not to use a logarithmic scale for the x-axis.

    @defaultValue `false`
   */
  log_scale?: boolean

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
}
