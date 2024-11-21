/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform a count matrix to a normalized tf or tf-idf representation.

  Tf means term-frequency while tf-idf means term-frequency times inverse document-frequency. This is a common term weighting scheme in information retrieval, that has also found good use in document classification.

  The goal of using tf-idf instead of the raw frequencies of occurrence of a token in a given document is to scale down the impact of tokens that occur very frequently in a given corpus and that are hence empirically less informative than features that occur in a small fraction of the training corpus.

  The formula that is used to compute the tf-idf for a term t of a document d in a document set is tf-idf(t, d) = tf(t, d) \* idf(t), and the idf is computed as idf(t) = log \[ n / df(t) \] + 1 (if `smooth\_idf=False`), where n is the total number of documents in the document set and df(t) is the document frequency of t; the document frequency is the number of documents in the document set that contain the term t. The effect of adding “1” to the idf in the equation above is that terms with zero idf, i.e., terms that occur in all documents in a training set, will not be entirely ignored. (Note that the idf formula above differs from the standard textbook notation that defines the idf as idf(t) = log \[ n / (df(t) + 1) \]).

  If `smooth\_idf=True` (the default), the constant “1” is added to the numerator and denominator of the idf as if an extra document was seen containing every term in the collection exactly once, which prevents zero divisions: idf(t) = log \[ (1 + n) / (1 + df(t)) \] + 1.

  Furthermore, the formulas used to compute tf and idf depend on parameter settings that correspond to the SMART notation used in IR as follows:

  Tf is “n” (natural) by default, “l” (logarithmic) when `sublinear\_tf=True`. Idf is “t” when use\_idf is given, “n” (none) otherwise. Normalization is “c” (cosine) when `norm='l2'`, “n” (none) when `norm=None`.

  Read more in the [User Guide](../feature_extraction.html#text-feature-extraction).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfTransformer.html)
 */
export class TfidfTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Each output row will have unit norm, either:

      @defaultValue `'l2'`
     */
    norm?: 'l1' | 'l2'

    /**
      Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

      @defaultValue `true`
     */
    use_idf?: boolean

    /**
      Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

      @defaultValue `true`
     */
    smooth_idf?: boolean

    /**
      Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

      @defaultValue `false`
     */
    sublinear_tf?: boolean
  }) {
    this.id = `TfidfTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TfidfTransformer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction.text import TfidfTransformer
try: bridgeTfidfTransformer
except NameError: bridgeTfidfTransformer = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TfidfTransformer = {'norm': ${this.opts['norm'] ?? undefined}, 'use_idf': ${this.opts['use_idf'] ?? undefined}, 'smooth_idf': ${this.opts['smooth_idf'] ?? undefined}, 'sublinear_tf': ${this.opts['sublinear_tf'] ?? undefined}}

ctor_TfidfTransformer = {k: v for k, v in ctor_TfidfTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeTfidfTransformer[${this.id}] = TfidfTransformer(**ctor_TfidfTransformer)`

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

    await this._py.ex`del bridgeTfidfTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn the idf vector (global term weights).
   */
  async fit(opts: {
    /**
      A matrix of term/token counts.
     */
    X?: SparseMatrix[]

    /**
      This parameter is not needed to compute tf-idf.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TfidfTransformer must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_TfidfTransformer_fit = {k: v for k, v in pms_TfidfTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_fit = bridgeTfidfTransformer[${this.id}].fit(**pms_TfidfTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_fit.tolist() if hasattr(res_TfidfTransformer_fit, 'tolist') else res_TfidfTransformer_fit`
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
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_TfidfTransformer_fit_transform = {k: v for k, v in pms_TfidfTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_fit_transform = bridgeTfidfTransformer[${this.id}].fit_transform(**pms_TfidfTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_fit_transform.tolist() if hasattr(res_TfidfTransformer_fit_transform, 'tolist') else res_TfidfTransformer_fit_transform`
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
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_TfidfTransformer_get_feature_names_out = {k: v for k, v in pms_TfidfTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_get_feature_names_out = bridgeTfidfTransformer[${this.id}].get_feature_names_out(**pms_TfidfTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_get_feature_names_out.tolist() if hasattr(res_TfidfTransformer_get_feature_names_out, 'tolist') else res_TfidfTransformer_get_feature_names_out`
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
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_TfidfTransformer_get_metadata_routing = {k: v for k, v in pms_TfidfTransformer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_get_metadata_routing = bridgeTfidfTransformer[${this.id}].get_metadata_routing(**pms_TfidfTransformer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_get_metadata_routing.tolist() if hasattr(res_TfidfTransformer_get_metadata_routing, 'tolist') else res_TfidfTransformer_get_metadata_routing`
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
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TfidfTransformer must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_TfidfTransformer_set_output = {k: v for k, v in pms_TfidfTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_set_output = bridgeTfidfTransformer[${this.id}].set_output(**pms_TfidfTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_set_output.tolist() if hasattr(res_TfidfTransformer_set_output, 'tolist') else res_TfidfTransformer_set_output`
  }

  /**
    Request metadata passed to the `transform` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_transform_request(opts: {
    /**
      Metadata routing for `copy` parameter in `transform`.
     */
    copy?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before set_transform_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_set_transform_request = {'copy': ${opts['copy'] ?? undefined}}

pms_TfidfTransformer_set_transform_request = {k: v for k, v in pms_TfidfTransformer_set_transform_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_set_transform_request = bridgeTfidfTransformer[${this.id}].set_transform_request(**pms_TfidfTransformer_set_transform_request)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_set_transform_request.tolist() if hasattr(res_TfidfTransformer_set_transform_request, 'tolist') else res_TfidfTransformer_set_transform_request`
  }

  /**
    Transform a count matrix to a tf or tf-idf representation.
   */
  async transform(opts: {
    /**
      A matrix of term/token counts.
     */
    X?: any

    /**
      Whether to copy X and operate on the copy or perform in-place operations. `copy=False` will only be effective with CSR sparse matrix.

      @defaultValue `true`
     */
    copy?: boolean
  }): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TfidfTransformer must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_TfidfTransformer_transform = {'X': ${opts['X'] ?? undefined}, 'copy': ${opts['copy'] ?? undefined}}

pms_TfidfTransformer_transform = {k: v for k, v in pms_TfidfTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TfidfTransformer_transform = bridgeTfidfTransformer[${this.id}].transform(**pms_TfidfTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TfidfTransformer_transform.tolist() if hasattr(res_TfidfTransformer_transform, 'tolist') else res_TfidfTransformer_transform`
  }

  /**
    The inverse document frequency (IDF) vector; only defined if `use\_idf` is `true`.
   */
  get idf_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('TfidfTransformer must call init() before accessing idf_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfTransformer_idf_ = bridgeTfidfTransformer[${this.id}].idf_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfTransformer_idf_.tolist() if hasattr(attr_TfidfTransformer_idf_, 'tolist') else attr_TfidfTransformer_idf_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfTransformer_n_features_in_ = bridgeTfidfTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfTransformer_n_features_in_.tolist() if hasattr(attr_TfidfTransformer_n_features_in_, 'tolist') else attr_TfidfTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This TfidfTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'TfidfTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TfidfTransformer_feature_names_in_ = bridgeTfidfTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TfidfTransformer_feature_names_in_.tolist() if hasattr(attr_TfidfTransformer_feature_names_in_, 'tolist') else attr_TfidfTransformer_feature_names_in_`
    })()
  }
}
