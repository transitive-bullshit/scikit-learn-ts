/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Concatenates results of multiple transformer objects.

  This estimator applies a list of transformer objects in parallel to the input data, then concatenates the results. This is useful to combine several feature extraction mechanisms into a single transformer.

  Parameters of the transformers may be set using its name and the parameter name separated by a ‘__’. A transformer may be replaced entirely by setting the parameter with its name to another transformer, removed by setting to ‘drop’ or disabled by setting to ‘passthrough’ (features are passed without transformation).

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../compose.html#feature-union).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.FeatureUnion.html)
 */
export class FeatureUnion {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      List of transformer objects to be applied to the data. The first half of each tuple is the name of the transformer. The transformer can be ‘drop’ for it to be ignored or can be ‘passthrough’ for features to be passed unchanged.
     */
    transformer_list?: any

    /**
      Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Multiplicative weights for features per transformer. Keys are transformer names, values the weights. Raises ValueError if key not present in `transformer_list`.
     */
    transformer_weights?: any

    /**
      If `true`, the time elapsed while fitting each transformer will be printed as it is completed.

      @defaultValue `false`
     */
    verbose?: boolean

    /**
      If `true`, [`get_feature_names_out`](https://scikit-learn.org/stable/modules/generated/#sklearn.pipeline.FeatureUnion.get_feature_names_out "sklearn.pipeline.FeatureUnion.get_feature_names_out") will prefix all feature names with the name of the transformer that generated that feature. If `false`, [`get_feature_names_out`](https://scikit-learn.org/stable/modules/generated/#sklearn.pipeline.FeatureUnion.get_feature_names_out "sklearn.pipeline.FeatureUnion.get_feature_names_out") will not prefix any feature names and will error if feature names are not unique.

      @defaultValue `true`
     */
    verbose_feature_names_out?: boolean
  }) {
    this.id = `FeatureUnion${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('FeatureUnion.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.pipeline import FeatureUnion
try: bridgeFeatureUnion
except NameError: bridgeFeatureUnion = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_FeatureUnion = {'transformer_list': ${this.opts['transformer_list'] ?? undefined}, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'transformer_weights': ${this.opts['transformer_weights'] ?? undefined}, 'verbose': ${this.opts['verbose'] ?? undefined}, 'verbose_feature_names_out': ${this.opts['verbose_feature_names_out'] ?? undefined}}

ctor_FeatureUnion = {k: v for k, v in ctor_FeatureUnion.items() if v is not None}`

    await this._py
      .ex`bridgeFeatureUnion[${this.id}] = FeatureUnion(**ctor_FeatureUnion)`

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

    await this._py.ex`del bridgeFeatureUnion[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit all transformers using X.
   */
  async fit(opts: {
    /**
      Input data, used to fit transformers.
     */
    X?: ArrayLike

    /**
      Targets for supervised learning.
     */
    y?: ArrayLike[]

    /**
      If `enable_metadata_routing=False` (default): Parameters directly passed to the `fit` methods of the sub-transformers.
     */
    fit_params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureUnion must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_fit = {'X': ${opts['X'] ?? undefined}, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_FeatureUnion_fit = {k: v for k, v in pms_FeatureUnion_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_fit = bridgeFeatureUnion[${this.id}].fit(**pms_FeatureUnion_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_fit.tolist() if hasattr(res_FeatureUnion_fit, 'tolist') else res_FeatureUnion_fit`
  }

  /**
    Fit all transformers, transform the data and concatenate results.
   */
  async fit_transform(opts: {
    /**
      Input data to be transformed.
     */
    X?: ArrayLike

    /**
      Targets for supervised learning.
     */
    y?: ArrayLike[]

    /**
      If `enable_metadata_routing=False` (default): Parameters directly passed to the `fit` methods of the sub-transformers.
     */
    params?: any
  }): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureUnion must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_fit_transform = {'X': ${opts['X'] ?? undefined}, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'params': ${opts['params'] ?? undefined}}

pms_FeatureUnion_fit_transform = {k: v for k, v in pms_FeatureUnion_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_fit_transform = bridgeFeatureUnion[${this.id}].fit_transform(**pms_FeatureUnion_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_fit_transform.tolist() if hasattr(res_FeatureUnion_fit_transform, 'tolist') else res_FeatureUnion_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Input features.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureUnion must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_FeatureUnion_get_feature_names_out = {k: v for k, v in pms_FeatureUnion_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_get_feature_names_out = bridgeFeatureUnion[${this.id}].get_feature_names_out(**pms_FeatureUnion_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_get_feature_names_out.tolist() if hasattr(res_FeatureUnion_get_feature_names_out, 'tolist') else res_FeatureUnion_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureUnion must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_FeatureUnion_get_metadata_routing = {k: v for k, v in pms_FeatureUnion_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_get_metadata_routing = bridgeFeatureUnion[${this.id}].get_metadata_routing(**pms_FeatureUnion_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_get_metadata_routing.tolist() if hasattr(res_FeatureUnion_get_metadata_routing, 'tolist') else res_FeatureUnion_get_metadata_routing`
  }

  /**
    Set the output container when `"transform"` and `"fit_transform"` are called.

    `set_output` will set the output of all estimators in `transformer_list`.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureUnion must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_FeatureUnion_set_output = {k: v for k, v in pms_FeatureUnion_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_set_output = bridgeFeatureUnion[${this.id}].set_output(**pms_FeatureUnion_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_set_output.tolist() if hasattr(res_FeatureUnion_set_output, 'tolist') else res_FeatureUnion_set_output`
  }

  /**
    Transform X separately by each transformer, concatenate results.
   */
  async transform(opts: {
    /**
      Input data to be transformed.
     */
    X?: ArrayLike

    /**
      Parameters routed to the `transform` method of the sub-transformers via the metadata routing API. See [Metadata Routing User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) for more details.
     */
    params?: any
  }): Promise<ArrayLike | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('FeatureUnion must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_FeatureUnion_transform = {'X': ${opts['X'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_FeatureUnion_transform = {k: v for k, v in pms_FeatureUnion_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_FeatureUnion_transform = bridgeFeatureUnion[${this.id}].transform(**pms_FeatureUnion_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_FeatureUnion_transform.tolist() if hasattr(res_FeatureUnion_transform, 'tolist') else res_FeatureUnion_transform`
  }

  /**
    Dictionary-like object, with the following attributes. Read-only attribute to access any transformer parameter by user given name. Keys are transformer names and values are transformer parameters.
   */
  get named_transformers(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This FeatureUnion instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'FeatureUnion must call init() before accessing named_transformers'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_FeatureUnion_named_transformers = bridgeFeatureUnion[${this.id}].named_transformers`

      // convert the result from python to node.js
      return this
        ._py`attr_FeatureUnion_named_transformers.tolist() if hasattr(attr_FeatureUnion_named_transformers, 'tolist') else attr_FeatureUnion_named_transformers`
    })()
  }
}
