/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Neighborhood Components Analysis.

  Neighborhood Component Analysis (NCA) is a machine learning algorithm for metric learning. It learns a linear transformation in a supervised fashion to improve the classification accuracy of a stochastic nearest neighbors rule in the transformed space.

  Read more in the [User Guide](../neighbors.html#nca).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NeighborhoodComponentsAnalysis.html
 */
export class NeighborhoodComponentsAnalysis {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NeighborhoodComponentsAnalysisOptions) {
    this.id = `NeighborhoodComponentsAnalysis${
      crypto.randomUUID().split('-')[0]
    }`
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
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'NeighborhoodComponentsAnalysis.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neighbors import NeighborhoodComponentsAnalysis
try: bridgeNeighborhoodComponentsAnalysis
except NameError: bridgeNeighborhoodComponentsAnalysis = {}
`

    // set up constructor params
    await this._py.ex`ctor_NeighborhoodComponentsAnalysis = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'init': np.array(${this.opts['init'] ?? undefined}) if ${
      this.opts['init'] !== undefined
    } else None, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'callback': ${this.opts['callback'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_NeighborhoodComponentsAnalysis = {k: v for k, v in ctor_NeighborhoodComponentsAnalysis.items() if v is not None}`

    await this._py
      .ex`bridgeNeighborhoodComponentsAnalysis[${this.id}] = NeighborhoodComponentsAnalysis(**ctor_NeighborhoodComponentsAnalysis)`

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

    await this._py.ex`del bridgeNeighborhoodComponentsAnalysis[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: NeighborhoodComponentsAnalysisFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_NeighborhoodComponentsAnalysis_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_NeighborhoodComponentsAnalysis_fit = {k: v for k, v in pms_NeighborhoodComponentsAnalysis_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NeighborhoodComponentsAnalysis_fit = bridgeNeighborhoodComponentsAnalysis[${this.id}].fit(**pms_NeighborhoodComponentsAnalysis_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_NeighborhoodComponentsAnalysis_fit.tolist() if hasattr(res_NeighborhoodComponentsAnalysis_fit, 'tolist') else res_NeighborhoodComponentsAnalysis_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: NeighborhoodComponentsAnalysisFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NeighborhoodComponentsAnalysis_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_NeighborhoodComponentsAnalysis_fit_transform = {k: v for k, v in pms_NeighborhoodComponentsAnalysis_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NeighborhoodComponentsAnalysis_fit_transform = bridgeNeighborhoodComponentsAnalysis[${this.id}].fit_transform(**pms_NeighborhoodComponentsAnalysis_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_NeighborhoodComponentsAnalysis_fit_transform.tolist() if hasattr(res_NeighborhoodComponentsAnalysis_fit_transform, 'tolist') else res_NeighborhoodComponentsAnalysis_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NeighborhoodComponentsAnalysis_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_NeighborhoodComponentsAnalysis_get_feature_names_out = {k: v for k, v in pms_NeighborhoodComponentsAnalysis_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NeighborhoodComponentsAnalysis_get_feature_names_out = bridgeNeighborhoodComponentsAnalysis[${this.id}].get_feature_names_out(**pms_NeighborhoodComponentsAnalysis_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_NeighborhoodComponentsAnalysis_get_feature_names_out.tolist() if hasattr(res_NeighborhoodComponentsAnalysis_get_feature_names_out, 'tolist') else res_NeighborhoodComponentsAnalysis_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(
    opts: NeighborhoodComponentsAnalysisSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NeighborhoodComponentsAnalysis_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_NeighborhoodComponentsAnalysis_set_output = {k: v for k, v in pms_NeighborhoodComponentsAnalysis_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NeighborhoodComponentsAnalysis_set_output = bridgeNeighborhoodComponentsAnalysis[${this.id}].set_output(**pms_NeighborhoodComponentsAnalysis_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_NeighborhoodComponentsAnalysis_set_output.tolist() if hasattr(res_NeighborhoodComponentsAnalysis_set_output, 'tolist') else res_NeighborhoodComponentsAnalysis_set_output`
  }

  /**
    Apply the learned transformation to the given data.
   */
  async transform(
    opts: NeighborhoodComponentsAnalysisTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_NeighborhoodComponentsAnalysis_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NeighborhoodComponentsAnalysis_transform = {k: v for k, v in pms_NeighborhoodComponentsAnalysis_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NeighborhoodComponentsAnalysis_transform = bridgeNeighborhoodComponentsAnalysis[${this.id}].transform(**pms_NeighborhoodComponentsAnalysis_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_NeighborhoodComponentsAnalysis_transform.tolist() if hasattr(res_NeighborhoodComponentsAnalysis_transform, 'tolist') else res_NeighborhoodComponentsAnalysis_transform`
  }

  /**
    The linear transformation learned during fitting.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NeighborhoodComponentsAnalysis_components_ = bridgeNeighborhoodComponentsAnalysis[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_NeighborhoodComponentsAnalysis_components_.tolist() if hasattr(attr_NeighborhoodComponentsAnalysis_components_, 'tolist') else attr_NeighborhoodComponentsAnalysis_components_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NeighborhoodComponentsAnalysis_n_features_in_ = bridgeNeighborhoodComponentsAnalysis[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NeighborhoodComponentsAnalysis_n_features_in_.tolist() if hasattr(attr_NeighborhoodComponentsAnalysis_n_features_in_, 'tolist') else attr_NeighborhoodComponentsAnalysis_n_features_in_`
    })()
  }

  /**
    Counts the number of iterations performed by the optimizer.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NeighborhoodComponentsAnalysis_n_iter_ = bridgeNeighborhoodComponentsAnalysis[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_NeighborhoodComponentsAnalysis_n_iter_.tolist() if hasattr(attr_NeighborhoodComponentsAnalysis_n_iter_, 'tolist') else attr_NeighborhoodComponentsAnalysis_n_iter_`
    })()
  }

  /**
    Pseudo random number generator object used during initialization.
   */
  get random_state_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before accessing random_state_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NeighborhoodComponentsAnalysis_random_state_ = bridgeNeighborhoodComponentsAnalysis[${this.id}].random_state_`

      // convert the result from python to node.js
      return this
        ._py`attr_NeighborhoodComponentsAnalysis_random_state_.tolist() if hasattr(attr_NeighborhoodComponentsAnalysis_random_state_, 'tolist') else attr_NeighborhoodComponentsAnalysis_random_state_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This NeighborhoodComponentsAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'NeighborhoodComponentsAnalysis must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NeighborhoodComponentsAnalysis_feature_names_in_ = bridgeNeighborhoodComponentsAnalysis[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NeighborhoodComponentsAnalysis_feature_names_in_.tolist() if hasattr(attr_NeighborhoodComponentsAnalysis_feature_names_in_, 'tolist') else attr_NeighborhoodComponentsAnalysis_feature_names_in_`
    })()
  }
}

export interface NeighborhoodComponentsAnalysisOptions {
  /**
    Preferred dimensionality of the projected space. If `undefined` it will be set to `n\_features`.
   */
  n_components?: number

  /**
    Initialization of the linear transformation. Possible options are `'auto'`, `'pca'`, `'lda'`, `'identity'`, `'random'`, and a numpy array of shape `(n\_features\_a, n\_features\_b)`.

    @defaultValue `'auto'`
   */
  init?: 'auto' | 'pca' | 'lda' | 'identity' | 'random' | NDArray[]

  /**
    If `true` and [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") has been called before, the solution of the previous call to [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit") is used as the initial linear transformation (`n\_components` and `init` will be ignored).

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    Maximum number of iterations in the optimization.

    @defaultValue `50`
   */
  max_iter?: number

  /**
    Convergence tolerance for the optimization.

    @defaultValue `0.00001`
   */
  tol?: number

  /**
    If not `undefined`, this function is called after every iteration of the optimizer, taking as arguments the current solution (flattened transformation matrix) and the number of iterations. This might be useful in case one wants to examine or store the transformation found after each iteration.
   */
  callback?: any

  /**
    If 0, no progress messages will be printed. If 1, progress messages will be printed to stdout. If > 1, progress messages will be printed and the `disp` parameter of [`scipy.optimize.minimize`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.minimize.html#scipy.optimize.minimize "(in SciPy v1.10.1)") will be set to `verbose \- 2`.

    @defaultValue `0`
   */
  verbose?: number

  /**
    A pseudo random number generator object or a seed for it if int. If `init='random'`, `random\_state` is used to initialize the random transformation. If `init='pca'`, `random\_state` is passed as an argument to PCA when initializing the transformation. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface NeighborhoodComponentsAnalysisFitOptions {
  /**
    The training samples.
   */
  X?: ArrayLike[]

  /**
    The corresponding training labels.
   */
  y?: ArrayLike
}

export interface NeighborhoodComponentsAnalysisFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (`undefined` for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface NeighborhoodComponentsAnalysisGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.neighbors.NeighborhoodComponentsAnalysis.fit "sklearn.neighbors.NeighborhoodComponentsAnalysis.fit").
   */
  input_features?: any
}

export interface NeighborhoodComponentsAnalysisSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface NeighborhoodComponentsAnalysisTransformOptions {
  /**
    Data samples.
   */
  X?: ArrayLike[]
}
