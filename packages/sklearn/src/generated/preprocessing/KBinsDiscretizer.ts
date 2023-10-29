/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Bin continuous data into intervals.

  Read more in the [User Guide](../preprocessing.html#preprocessing-discretization).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.KBinsDiscretizer.html)
 */
export class KBinsDiscretizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of bins to produce. Raises ValueError if `n\_bins < 2`.

      @defaultValue `5`
     */
    n_bins?: number | ArrayLike

    /**
      Method used to encode the transformed result.

      @defaultValue `'onehot'`
     */
    encode?: 'onehot' | 'onehot-dense' | 'ordinal'

    /**
      Strategy used to define the widths of the bins.

      @defaultValue `'quantile'`
     */
    strategy?: 'uniform' | 'quantile' | 'kmeans'

    /**
      The desired data-type for the output. If `undefined`, output dtype is consistent with input dtype. Only np.float32 and np.float64 are supported.
     */
    dtype?: any

    /**
      Maximum number of samples, used to fit the model, for computational efficiency. Defaults to 200\_000 when `strategy='quantile'` and to `undefined` when `strategy='uniform'` or `strategy='kmeans'`. `subsample=None` means that all the training samples are used when computing the quantiles that determine the binning thresholds. Since quantile computation relies on sorting each column of `X` and that sorting has an `n log(n)` time complexity, it is recommended to use subsampling on datasets with a very large number of samples.

      @defaultValue `'warn'`
     */
    subsample?: number

    /**
      Determines random number generation for subsampling. Pass an int for reproducible results across multiple function calls. See the `subsample` parameter for more details. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `KBinsDiscretizer${crypto.randomUUID().split('-')[0]}`
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
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KBinsDiscretizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import KBinsDiscretizer
try: bridgeKBinsDiscretizer
except NameError: bridgeKBinsDiscretizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_KBinsDiscretizer = {'n_bins': np.array(${
      this.opts['n_bins'] ?? undefined
    }) if ${this.opts['n_bins'] !== undefined} else None, 'encode': ${
      this.opts['encode'] ?? undefined
    }, 'strategy': ${this.opts['strategy'] ?? undefined}, 'dtype': ${
      this.opts['dtype'] ?? undefined
    }, 'subsample': ${this.opts['subsample'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_KBinsDiscretizer = {k: v for k, v in ctor_KBinsDiscretizer.items() if v is not None}`

    await this._py
      .ex`bridgeKBinsDiscretizer[${this.id}] = KBinsDiscretizer(**ctor_KBinsDiscretizer)`

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

    await this._py.ex`del bridgeKBinsDiscretizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the estimator.
   */
  async fit(opts: {
    /**
      Data to be discretized.
     */
    X?: ArrayLike[]

    /**
      Ignored. This parameter exists only for compatibility with [`Pipeline`](sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").
     */
    y?: any

    /**
      Contains weight values to be associated with each sample. Only possible when `strategy` is set to `"quantile"`.
     */
    sample_weight?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KBinsDiscretizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KBinsDiscretizer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_KBinsDiscretizer_fit = {k: v for k, v in pms_KBinsDiscretizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_fit = bridgeKBinsDiscretizer[${this.id}].fit(**pms_KBinsDiscretizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_fit.tolist() if hasattr(res_KBinsDiscretizer_fit, 'tolist') else res_KBinsDiscretizer_fit`
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
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_KBinsDiscretizer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_KBinsDiscretizer_fit_transform = {k: v for k, v in pms_KBinsDiscretizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_fit_transform = bridgeKBinsDiscretizer[${this.id}].fit_transform(**pms_KBinsDiscretizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_fit_transform.tolist() if hasattr(res_KBinsDiscretizer_fit_transform, 'tolist') else res_KBinsDiscretizer_fit_transform`
  }

  /**
    Get output feature names.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KBinsDiscretizer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_KBinsDiscretizer_get_feature_names_out = {k: v for k, v in pms_KBinsDiscretizer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_get_feature_names_out = bridgeKBinsDiscretizer[${this.id}].get_feature_names_out(**pms_KBinsDiscretizer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_get_feature_names_out.tolist() if hasattr(res_KBinsDiscretizer_get_feature_names_out, 'tolist') else res_KBinsDiscretizer_get_feature_names_out`
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
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_KBinsDiscretizer_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_KBinsDiscretizer_get_metadata_routing = {k: v for k, v in pms_KBinsDiscretizer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_get_metadata_routing = bridgeKBinsDiscretizer[${this.id}].get_metadata_routing(**pms_KBinsDiscretizer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_get_metadata_routing.tolist() if hasattr(res_KBinsDiscretizer_get_metadata_routing, 'tolist') else res_KBinsDiscretizer_get_metadata_routing`
  }

  /**
    Transform discretized data back to original feature space.

    Note that this function does not regenerate the original data due to discretization rounding.
   */
  async inverse_transform(opts: {
    /**
      Transformed data in the binned space.
     */
    Xt?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KBinsDiscretizer_inverse_transform = {'Xt': np.array(${
      opts['Xt'] ?? undefined
    }) if ${opts['Xt'] !== undefined} else None}

pms_KBinsDiscretizer_inverse_transform = {k: v for k, v in pms_KBinsDiscretizer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_inverse_transform = bridgeKBinsDiscretizer[${this.id}].inverse_transform(**pms_KBinsDiscretizer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_inverse_transform.tolist() if hasattr(res_KBinsDiscretizer_inverse_transform, 'tolist') else res_KBinsDiscretizer_inverse_transform`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before set_fit_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KBinsDiscretizer_set_fit_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_KBinsDiscretizer_set_fit_request = {k: v for k, v in pms_KBinsDiscretizer_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_set_fit_request = bridgeKBinsDiscretizer[${this.id}].set_fit_request(**pms_KBinsDiscretizer_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_set_fit_request.tolist() if hasattr(res_KBinsDiscretizer_set_fit_request, 'tolist') else res_KBinsDiscretizer_set_fit_request`
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
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KBinsDiscretizer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_KBinsDiscretizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_KBinsDiscretizer_set_output = {k: v for k, v in pms_KBinsDiscretizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_set_output = bridgeKBinsDiscretizer[${this.id}].set_output(**pms_KBinsDiscretizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_set_output.tolist() if hasattr(res_KBinsDiscretizer_set_output, 'tolist') else res_KBinsDiscretizer_set_output`
  }

  /**
    Discretize the data.
   */
  async transform(opts: {
    /**
      Data to be discretized.
     */
    X?: ArrayLike[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('KBinsDiscretizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_KBinsDiscretizer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KBinsDiscretizer_transform = {k: v for k, v in pms_KBinsDiscretizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KBinsDiscretizer_transform = bridgeKBinsDiscretizer[${this.id}].transform(**pms_KBinsDiscretizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KBinsDiscretizer_transform.tolist() if hasattr(res_KBinsDiscretizer_transform, 'tolist') else res_KBinsDiscretizer_transform`
  }

  /**
    The edges of each bin. Contain arrays of varying shapes `(n\_bins\_, )` Ignored features will have empty arrays.
   */
  get bin_edges_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before accessing bin_edges_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KBinsDiscretizer_bin_edges_ = bridgeKBinsDiscretizer[${this.id}].bin_edges_`

      // convert the result from python to node.js
      return this
        ._py`attr_KBinsDiscretizer_bin_edges_.tolist() if hasattr(attr_KBinsDiscretizer_bin_edges_, 'tolist') else attr_KBinsDiscretizer_bin_edges_`
    })()
  }

  /**
    Number of bins per feature. Bins whose width are too small (i.e., <= 1e-8) are removed with a warning.
   */
  get n_bins_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before accessing n_bins_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KBinsDiscretizer_n_bins_ = bridgeKBinsDiscretizer[${this.id}].n_bins_`

      // convert the result from python to node.js
      return this
        ._py`attr_KBinsDiscretizer_n_bins_.tolist() if hasattr(attr_KBinsDiscretizer_n_bins_, 'tolist') else attr_KBinsDiscretizer_n_bins_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KBinsDiscretizer_n_features_in_ = bridgeKBinsDiscretizer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KBinsDiscretizer_n_features_in_.tolist() if hasattr(attr_KBinsDiscretizer_n_features_in_, 'tolist') else attr_KBinsDiscretizer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This KBinsDiscretizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'KBinsDiscretizer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KBinsDiscretizer_feature_names_in_ = bridgeKBinsDiscretizer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KBinsDiscretizer_feature_names_in_.tolist() if hasattr(attr_KBinsDiscretizer_feature_names_in_, 'tolist') else attr_KBinsDiscretizer_feature_names_in_`
    })()
  }
}
