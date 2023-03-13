/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Approximate a RBF kernel feature map using random Fourier features.

  It implements a variant of Random Kitchen Sinks.\[1\]

  Read more in the [User Guide](../kernel_approximation.html#rbf-kernel-approx).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.RBFSampler.html)
 */
export class RBFSampler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Parameter of RBF kernel: exp(-gamma \* x^2). If `gamma='scale'` is passed then it uses 1 / (n\_features \* X.var()) as value of gamma.

      @defaultValue `1`
     */
    gamma?: 'scale' | number

    /**
      Number of Monte Carlo samples per original feature. Equals the dimensionality of the computed feature space.

      @defaultValue `100`
     */
    n_components?: number

    /**
      Pseudo-random number generator to control the generation of the random weights and random offset when fitting the training data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `RBFSampler${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RBFSampler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import RBFSampler
try: bridgeRBFSampler
except NameError: bridgeRBFSampler = {}
`

    // set up constructor params
    await this._py.ex`ctor_RBFSampler = {'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_RBFSampler = {k: v for k, v in ctor_RBFSampler.items() if v is not None}`

    await this._py
      .ex`bridgeRBFSampler[${this.id}] = RBFSampler(**ctor_RBFSampler)`

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

    await this._py.ex`del bridgeRBFSampler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model with X.

    Samples random projection according to n\_features.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBFSampler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RBFSampler_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_RBFSampler_fit = {k: v for k, v in pms_RBFSampler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBFSampler_fit = bridgeRBFSampler[${this.id}].fit(**pms_RBFSampler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RBFSampler_fit.tolist() if hasattr(res_RBFSampler_fit, 'tolist') else res_RBFSampler_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: {
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
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBFSampler must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_RBFSampler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RBFSampler_fit_transform = {k: v for k, v in pms_RBFSampler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBFSampler_fit_transform = bridgeRBFSampler[${this.id}].fit_transform(**pms_RBFSampler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RBFSampler_fit_transform.tolist() if hasattr(res_RBFSampler_fit_transform, 'tolist') else res_RBFSampler_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.RBFSampler.fit "sklearn.kernel_approximation.RBFSampler.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBFSampler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_RBFSampler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_RBFSampler_get_feature_names_out = {k: v for k, v in pms_RBFSampler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBFSampler_get_feature_names_out = bridgeRBFSampler[${this.id}].get_feature_names_out(**pms_RBFSampler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RBFSampler_get_feature_names_out.tolist() if hasattr(res_RBFSampler_get_feature_names_out, 'tolist') else res_RBFSampler_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBFSampler must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_RBFSampler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_RBFSampler_set_output = {k: v for k, v in pms_RBFSampler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBFSampler_set_output = bridgeRBFSampler[${this.id}].set_output(**pms_RBFSampler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RBFSampler_set_output.tolist() if hasattr(res_RBFSampler_set_output, 'tolist') else res_RBFSampler_set_output`
  }

  /**
    Apply the approximate feature map to X.
   */
  async transform(opts: {
    /**
      New data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RBFSampler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_RBFSampler_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_RBFSampler_transform = {k: v for k, v in pms_RBFSampler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RBFSampler_transform = bridgeRBFSampler[${this.id}].transform(**pms_RBFSampler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RBFSampler_transform.tolist() if hasattr(res_RBFSampler_transform, 'tolist') else res_RBFSampler_transform`
  }

  /**
    Random offset used to compute the projection in the `n\_components` dimensions of the feature space.
   */
  get random_offset_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBFSampler must call init() before accessing random_offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBFSampler_random_offset_ = bridgeRBFSampler[${this.id}].random_offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_RBFSampler_random_offset_.tolist() if hasattr(attr_RBFSampler_random_offset_, 'tolist') else attr_RBFSampler_random_offset_`
    })()
  }

  /**
    Random projection directions drawn from the Fourier transform of the RBF kernel.
   */
  get random_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBFSampler must call init() before accessing random_weights_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBFSampler_random_weights_ = bridgeRBFSampler[${this.id}].random_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_RBFSampler_random_weights_.tolist() if hasattr(attr_RBFSampler_random_weights_, 'tolist') else attr_RBFSampler_random_weights_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBFSampler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBFSampler_n_features_in_ = bridgeRBFSampler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RBFSampler_n_features_in_.tolist() if hasattr(attr_RBFSampler_n_features_in_, 'tolist') else attr_RBFSampler_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RBFSampler instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RBFSampler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RBFSampler_feature_names_in_ = bridgeRBFSampler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RBFSampler_feature_names_in_.tolist() if hasattr(attr_RBFSampler_feature_names_in_, 'tolist') else attr_RBFSampler_feature_names_in_`
    })()
  }
}
