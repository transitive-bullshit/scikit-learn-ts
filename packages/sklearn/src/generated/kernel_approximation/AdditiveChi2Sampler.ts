/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Approximate feature map for additive chi2 kernel.

  Uses sampling the fourier transform of the kernel characteristic at regular intervals.

  Since the kernel that is to be approximated is additive, the components of the input vectors can be treated separately. Each entry in the original space is transformed into 2\*sample\_steps-1 features, where sample\_steps is a parameter of the method. Typical values of sample\_steps include 1, 2 and 3.

  Optimal choices for the sampling interval for certain data ranges can be computed (see the reference). The default values should be reasonable.

  Read more in the [User Guide](../kernel_approximation.html#additive-chi-kernel-approx).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.AdditiveChi2Sampler.html)
 */
export class AdditiveChi2Sampler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Gives the number of (complex) sampling points.

      @defaultValue `2`
     */
    sample_steps?: number

    /**
      Sampling interval. Must be specified when sample\_steps not in {1,2,3}.
     */
    sample_interval?: number
  }) {
    this.id = `AdditiveChi2Sampler${crypto.randomUUID().split('-')[0]}`
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
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'AdditiveChi2Sampler.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import AdditiveChi2Sampler
try: bridgeAdditiveChi2Sampler
except NameError: bridgeAdditiveChi2Sampler = {}
`

    // set up constructor params
    await this._py.ex`ctor_AdditiveChi2Sampler = {'sample_steps': ${
      this.opts['sample_steps'] ?? undefined
    }, 'sample_interval': ${this.opts['sample_interval'] ?? undefined}}

ctor_AdditiveChi2Sampler = {k: v for k, v in ctor_AdditiveChi2Sampler.items() if v is not None}`

    await this._py
      .ex`bridgeAdditiveChi2Sampler[${this.id}] = AdditiveChi2Sampler(**ctor_AdditiveChi2Sampler)`

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

    await this._py.ex`del bridgeAdditiveChi2Sampler[${this.id}]`

    this._isDisposed = true
  }

  /**
    Only validates estimator’s parameters.

    This method allows to: (i) validate the estimator’s parameters and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdditiveChi2Sampler must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_AdditiveChi2Sampler_fit = {k: v for k, v in pms_AdditiveChi2Sampler_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_fit = bridgeAdditiveChi2Sampler[${this.id}].fit(**pms_AdditiveChi2Sampler_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_fit.tolist() if hasattr(res_AdditiveChi2Sampler_fit, 'tolist') else res_AdditiveChi2Sampler_fit`
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
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_AdditiveChi2Sampler_fit_transform = {k: v for k, v in pms_AdditiveChi2Sampler_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_fit_transform = bridgeAdditiveChi2Sampler[${this.id}].fit_transform(**pms_AdditiveChi2Sampler_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_fit_transform.tolist() if hasattr(res_AdditiveChi2Sampler_fit_transform, 'tolist') else res_AdditiveChi2Sampler_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.AdditiveChi2Sampler.fit "sklearn.kernel_approximation.AdditiveChi2Sampler.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdditiveChi2Sampler_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_AdditiveChi2Sampler_get_feature_names_out = {k: v for k, v in pms_AdditiveChi2Sampler_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_get_feature_names_out = bridgeAdditiveChi2Sampler[${this.id}].get_feature_names_out(**pms_AdditiveChi2Sampler_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_get_feature_names_out.tolist() if hasattr(res_AdditiveChi2Sampler_get_feature_names_out, 'tolist') else res_AdditiveChi2Sampler_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_AdditiveChi2Sampler_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_AdditiveChi2Sampler_get_metadata_routing = {k: v for k, v in pms_AdditiveChi2Sampler_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_get_metadata_routing = bridgeAdditiveChi2Sampler[${this.id}].get_metadata_routing(**pms_AdditiveChi2Sampler_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_get_metadata_routing.tolist() if hasattr(res_AdditiveChi2Sampler_get_metadata_routing, 'tolist') else res_AdditiveChi2Sampler_get_metadata_routing`
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
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_AdditiveChi2Sampler_set_output = {k: v for k, v in pms_AdditiveChi2Sampler_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_set_output = bridgeAdditiveChi2Sampler[${this.id}].set_output(**pms_AdditiveChi2Sampler_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_set_output.tolist() if hasattr(res_AdditiveChi2Sampler_set_output, 'tolist') else res_AdditiveChi2Sampler_set_output`
  }

  /**
    Apply approximate feature map to X.
   */
  async transform(opts: {
    /**
      Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<NDArray | SparseMatrix> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('AdditiveChi2Sampler must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_AdditiveChi2Sampler_transform = {'X': ${
      opts['X'] ?? undefined
    }}

pms_AdditiveChi2Sampler_transform = {k: v for k, v in pms_AdditiveChi2Sampler_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_AdditiveChi2Sampler_transform = bridgeAdditiveChi2Sampler[${this.id}].transform(**pms_AdditiveChi2Sampler_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_AdditiveChi2Sampler_transform.tolist() if hasattr(res_AdditiveChi2Sampler_transform, 'tolist') else res_AdditiveChi2Sampler_transform`
  }

  /**
    Stored sampling interval. Specified as a parameter if `sample\_steps` not in {1,2,3}.
   */
  get sample_interval_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing sample_interval_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_sample_interval_ = bridgeAdditiveChi2Sampler[${this.id}].sample_interval_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_sample_interval_.tolist() if hasattr(attr_AdditiveChi2Sampler_sample_interval_, 'tolist') else attr_AdditiveChi2Sampler_sample_interval_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_n_features_in_ = bridgeAdditiveChi2Sampler[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_n_features_in_.tolist() if hasattr(attr_AdditiveChi2Sampler_n_features_in_, 'tolist') else attr_AdditiveChi2Sampler_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This AdditiveChi2Sampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'AdditiveChi2Sampler must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_AdditiveChi2Sampler_feature_names_in_ = bridgeAdditiveChi2Sampler[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_AdditiveChi2Sampler_feature_names_in_.tolist() if hasattr(attr_AdditiveChi2Sampler_feature_names_in_, 'tolist') else attr_AdditiveChi2Sampler_feature_names_in_`
    })()
  }
}
