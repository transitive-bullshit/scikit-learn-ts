/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Center an arbitrary kernel matrix \\(K\\).

  Let define a kernel \\(K\\) such that:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KernelCenterer.html)
 */
export class KernelCenterer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Average of each column of kernel matrix.
     */
    K_fit_rows_?: NDArray

    /**
      Average of kernel matrix.
     */
    K_fit_all_?: number

    /**
      Number of features seen during [fit](../../glossary.html#term-fit).
     */
    n_features_in_?: number

    /**
      Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
     */
    feature_names_in_?: NDArray
  }) {
    this.id = `KernelCenterer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KernelCenterer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import KernelCenterer
try: bridgeKernelCenterer
except NameError: bridgeKernelCenterer = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_KernelCenterer = {'K_fit_rows_': np.array(${this.opts['K_fit_rows_'] ?? undefined}) if ${this.opts['K_fit_rows_'] !== undefined} else None, 'K_fit_all_': ${this.opts['K_fit_all_'] ?? undefined}, 'n_features_in_': ${this.opts['n_features_in_'] ?? undefined}, 'feature_names_in_': np.array(${this.opts['feature_names_in_'] ?? undefined}) if ${this.opts['feature_names_in_'] !== undefined} else None}

ctor_KernelCenterer = {k: v for k, v in ctor_KernelCenterer.items() if v is not None}`

    await this._py
      .ex`bridgeKernelCenterer[${this.id}] = KernelCenterer(**ctor_KernelCenterer)`

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

    await this._py.ex`del bridgeKernelCenterer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit KernelCenterer.
   */
  async fit(opts: {
    /**
      Kernel matrix.
     */
    K?: NDArray[]

    /**
      Ignored.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelCenterer must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_fit = {'K': np.array(${opts['K'] ?? undefined}) if ${opts['K'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_KernelCenterer_fit = {k: v for k, v in pms_KernelCenterer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_fit = bridgeKernelCenterer[${this.id}].fit(**pms_KernelCenterer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_fit.tolist() if hasattr(res_KernelCenterer_fit, 'tolist') else res_KernelCenterer_fit`
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
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelCenterer must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_KernelCenterer_fit_transform = {k: v for k, v in pms_KernelCenterer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_fit_transform = bridgeKernelCenterer[${this.id}].fit_transform(**pms_KernelCenterer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_fit_transform.tolist() if hasattr(res_KernelCenterer_fit_transform, 'tolist') else res_KernelCenterer_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelCenterer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_KernelCenterer_get_feature_names_out = {k: v for k, v in pms_KernelCenterer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_get_feature_names_out = bridgeKernelCenterer[${this.id}].get_feature_names_out(**pms_KernelCenterer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_get_feature_names_out.tolist() if hasattr(res_KernelCenterer_get_feature_names_out, 'tolist') else res_KernelCenterer_get_feature_names_out`
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
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelCenterer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_KernelCenterer_get_metadata_routing = {k: v for k, v in pms_KernelCenterer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_get_metadata_routing = bridgeKernelCenterer[${this.id}].get_metadata_routing(**pms_KernelCenterer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_get_metadata_routing.tolist() if hasattr(res_KernelCenterer_get_metadata_routing, 'tolist') else res_KernelCenterer_get_metadata_routing`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `K` parameter in `fit`.
     */
    K?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelCenterer must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_set_fit_request = {'K': ${opts['K'] ?? undefined}}

pms_KernelCenterer_set_fit_request = {k: v for k, v in pms_KernelCenterer_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_set_fit_request = bridgeKernelCenterer[${this.id}].set_fit_request(**pms_KernelCenterer_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_set_fit_request.tolist() if hasattr(res_KernelCenterer_set_fit_request, 'tolist') else res_KernelCenterer_set_fit_request`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelCenterer must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_KernelCenterer_set_output = {k: v for k, v in pms_KernelCenterer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_set_output = bridgeKernelCenterer[${this.id}].set_output(**pms_KernelCenterer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_set_output.tolist() if hasattr(res_KernelCenterer_set_output, 'tolist') else res_KernelCenterer_set_output`
  }

  /**
    Request metadata passed to the `transform` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_transform_request(opts: {
    /**
      Metadata routing for `K` parameter in `transform`.
     */
    K?: string | boolean

    /**
      Metadata routing for `copy` parameter in `transform`.
     */
    copy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelCenterer must call init() before set_transform_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_set_transform_request = {'K': ${opts['K'] ?? undefined}, 'copy': ${opts['copy'] ?? undefined}}

pms_KernelCenterer_set_transform_request = {k: v for k, v in pms_KernelCenterer_set_transform_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_set_transform_request = bridgeKernelCenterer[${this.id}].set_transform_request(**pms_KernelCenterer_set_transform_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_set_transform_request.tolist() if hasattr(res_KernelCenterer_set_transform_request, 'tolist') else res_KernelCenterer_set_transform_request`
  }

  /**
    Center kernel matrix.
   */
  async transform(opts: {
    /**
      Kernel matrix.
     */
    K?: NDArray[]

    /**
      Set to `false` to perform inplace computation.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelCenterer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelCenterer must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_KernelCenterer_transform = {'K': np.array(${opts['K'] ?? undefined}) if ${opts['K'] !== undefined} else None, 'copy': ${opts['copy'] ?? undefined}}

pms_KernelCenterer_transform = {k: v for k, v in pms_KernelCenterer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelCenterer_transform = bridgeKernelCenterer[${this.id}].transform(**pms_KernelCenterer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelCenterer_transform.tolist() if hasattr(res_KernelCenterer_transform, 'tolist') else res_KernelCenterer_transform`
  }
}
