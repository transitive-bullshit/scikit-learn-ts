/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Polynomial kernel approximation via Tensor Sketch.

  Implements Tensor Sketch, which approximates the feature map of the polynomial kernel:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.PolynomialCountSketch.html)
 */
export class PolynomialCountSketch {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PolynomialCountSketchOptions) {
    this.id = `PolynomialCountSketch${crypto.randomUUID().split('-')[0]}`
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
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PolynomialCountSketch.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import PolynomialCountSketch
try: bridgePolynomialCountSketch
except NameError: bridgePolynomialCountSketch = {}
`

    // set up constructor params
    await this._py.ex`ctor_PolynomialCountSketch = {'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'degree': ${this.opts['degree'] ?? undefined}, 'coef0': ${
      this.opts['coef0'] ?? undefined
    }, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_PolynomialCountSketch = {k: v for k, v in ctor_PolynomialCountSketch.items() if v is not None}`

    await this._py
      .ex`bridgePolynomialCountSketch[${this.id}] = PolynomialCountSketch(**ctor_PolynomialCountSketch)`

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

    await this._py.ex`del bridgePolynomialCountSketch[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model with X.

    Initializes the internal variables. The method needs no information about the distribution of data, so we only care about n\_features in X.
   */
  async fit(opts: PolynomialCountSketchFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PolynomialCountSketch must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PolynomialCountSketch_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_PolynomialCountSketch_fit = {k: v for k, v in pms_PolynomialCountSketch_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialCountSketch_fit = bridgePolynomialCountSketch[${this.id}].fit(**pms_PolynomialCountSketch_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialCountSketch_fit.tolist() if hasattr(res_PolynomialCountSketch_fit, 'tolist') else res_PolynomialCountSketch_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: PolynomialCountSketchFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PolynomialCountSketch_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_PolynomialCountSketch_fit_transform = {k: v for k, v in pms_PolynomialCountSketch_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialCountSketch_fit_transform = bridgePolynomialCountSketch[${this.id}].fit_transform(**pms_PolynomialCountSketch_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialCountSketch_fit_transform.tolist() if hasattr(res_PolynomialCountSketch_fit_transform, 'tolist') else res_PolynomialCountSketch_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: PolynomialCountSketchGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PolynomialCountSketch_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PolynomialCountSketch_get_feature_names_out = {k: v for k, v in pms_PolynomialCountSketch_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialCountSketch_get_feature_names_out = bridgePolynomialCountSketch[${this.id}].get_feature_names_out(**pms_PolynomialCountSketch_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialCountSketch_get_feature_names_out.tolist() if hasattr(res_PolynomialCountSketch_get_feature_names_out, 'tolist') else res_PolynomialCountSketch_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: PolynomialCountSketchSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_PolynomialCountSketch_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PolynomialCountSketch_set_output = {k: v for k, v in pms_PolynomialCountSketch_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialCountSketch_set_output = bridgePolynomialCountSketch[${this.id}].set_output(**pms_PolynomialCountSketch_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialCountSketch_set_output.tolist() if hasattr(res_PolynomialCountSketch_set_output, 'tolist') else res_PolynomialCountSketch_set_output`
  }

  /**
    Generate the feature map approximation for X.
   */
  async transform(
    opts: PolynomialCountSketchTransformOptions
  ): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_PolynomialCountSketch_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_PolynomialCountSketch_transform = {k: v for k, v in pms_PolynomialCountSketch_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialCountSketch_transform = bridgePolynomialCountSketch[${this.id}].transform(**pms_PolynomialCountSketch_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialCountSketch_transform.tolist() if hasattr(res_PolynomialCountSketch_transform, 'tolist') else res_PolynomialCountSketch_transform`
  }

  /**
    Array of indexes in range \[0, n\_components) used to represent the 2-wise independent hash functions for Count Sketch computation.
   */
  get indexHash_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before accessing indexHash_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialCountSketch_indexHash_ = bridgePolynomialCountSketch[${this.id}].indexHash_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialCountSketch_indexHash_.tolist() if hasattr(attr_PolynomialCountSketch_indexHash_, 'tolist') else attr_PolynomialCountSketch_indexHash_`
    })()
  }

  /**
    Array with random entries in {+1, -1}, used to represent the 2-wise independent hash functions for Count Sketch computation.
   */
  get bitHash_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before accessing bitHash_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialCountSketch_bitHash_ = bridgePolynomialCountSketch[${this.id}].bitHash_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialCountSketch_bitHash_.tolist() if hasattr(attr_PolynomialCountSketch_bitHash_, 'tolist') else attr_PolynomialCountSketch_bitHash_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialCountSketch_n_features_in_ = bridgePolynomialCountSketch[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialCountSketch_n_features_in_.tolist() if hasattr(attr_PolynomialCountSketch_n_features_in_, 'tolist') else attr_PolynomialCountSketch_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialCountSketch instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialCountSketch must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialCountSketch_feature_names_in_ = bridgePolynomialCountSketch[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialCountSketch_feature_names_in_.tolist() if hasattr(attr_PolynomialCountSketch_feature_names_in_, 'tolist') else attr_PolynomialCountSketch_feature_names_in_`
    })()
  }
}

export interface PolynomialCountSketchOptions {
  /**
    Parameter of the polynomial kernel whose feature map will be approximated.

    @defaultValue `1`
   */
  gamma?: number

  /**
    Degree of the polynomial kernel whose feature map will be approximated.

    @defaultValue `2`
   */
  degree?: number

  /**
    Constant term of the polynomial kernel whose feature map will be approximated.

    @defaultValue `0`
   */
  coef0?: number

  /**
    Dimensionality of the output feature space. Usually, `n\_components` should be greater than the number of features in input samples in order to achieve good performance. The optimal score / run time balance is typically achieved around `n\_components` = 10 \* `n\_features`, but this depends on the specific dataset being used.

    @defaultValue `100`
   */
  n_components?: number

  /**
    Determines random number generation for indexHash and bitHash initialization. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface PolynomialCountSketchFitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values (`undefined` for unsupervised transformations).
   */
  y?: ArrayLike
}

export interface PolynomialCountSketchFitTransformOptions {
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

export interface PolynomialCountSketchGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.PolynomialCountSketch.fit "sklearn.kernel_approximation.PolynomialCountSketch.fit").
   */
  input_features?: any
}

export interface PolynomialCountSketchSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface PolynomialCountSketchTransformOptions {
  /**
    New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike
}
