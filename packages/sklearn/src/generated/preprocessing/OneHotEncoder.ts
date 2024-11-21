/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Encode categorical features as a one-hot numeric array.

  The input to this transformer should be an array-like of integers or strings, denoting the values taken on by categorical (discrete) features. The features are encoded using a one-hot (aka ‘one-of-K’ or ‘dummy’) encoding scheme. This creates a binary column for each category and returns a sparse matrix or dense array (depending on the `sparse_output` parameter).

  By default, the encoder derives the categories based on the unique values in each feature. Alternatively, you can also specify the `categories` manually.

  This encoding is needed for feeding categorical data to many scikit-learn estimators, notably linear models and SVMs with the standard kernels.

  Note: a one-hot encoding of y labels should use a LabelBinarizer instead.

  Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-categorical-features). For a comparison of different encoders, refer to: [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.OneHotEncoder.html)
 */
export class OneHotEncoder {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Categories (unique values) per feature:

      @defaultValue `'auto'`
     */
    categories?: 'auto'

    /**
      Specifies a methodology to use to drop one of the categories per feature. This is useful in situations where perfectly collinear features cause problems, such as when feeding the resulting data into an unregularized linear regression model.

      However, dropping one category breaks the symmetry of the original representation and can therefore induce a bias in downstream models, for instance for penalized linear classification or regression models.
     */
    drop?: 'first' | 'if_binary' | any[]

    /**
      When `true`, it returns a [`scipy.sparse.csr_matrix`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v1.14.1)"), i.e. a sparse matrix in “Compressed Sparse Row” (CSR) format.

      @defaultValue `true`
     */
    sparse_output?: boolean

    /**
      Desired dtype of output.
     */
    dtype?: any

    /**
      Specifies the way unknown categories are handled during [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.OneHotEncoder.transform "sklearn.preprocessing.OneHotEncoder.transform").

      @defaultValue `'error'`
     */
    handle_unknown?: 'error' | 'ignore' | 'infrequent_if_exist'

    /**
      Specifies the minimum frequency below which a category will be considered infrequent.
     */
    min_frequency?: number

    /**
      Specifies an upper limit to the number of output features for each input feature when considering infrequent categories. If there are infrequent categories, `max_categories` includes the category representing the infrequent categories along with the frequent categories. If `undefined`, there is no limit to the number of output features.
     */
    max_categories?: number

    /**
      Callable with signature `def callable(input_feature, category)` that returns a string. This is used to create feature names to be returned by [`get_feature_names_out`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").

      `"concat"` concatenates encoded feature name and category with `feature + "_" + str(category)`.E.g. feature X with values 1, 6, 7 create feature names `X_1, X_6, X_7`.

      @defaultValue `'concat'`
     */
    feature_name_combiner?: 'concat'
  }) {
    this.id = `OneHotEncoder${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('OneHotEncoder.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import OneHotEncoder
try: bridgeOneHotEncoder
except NameError: bridgeOneHotEncoder = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_OneHotEncoder = {'categories': ${this.opts['categories'] ?? undefined}, 'drop': np.array(${this.opts['drop'] ?? undefined}) if ${this.opts['drop'] !== undefined} else None, 'sparse_output': ${this.opts['sparse_output'] ?? undefined}, 'dtype': ${this.opts['dtype'] ?? undefined}, 'handle_unknown': ${this.opts['handle_unknown'] ?? undefined}, 'min_frequency': ${this.opts['min_frequency'] ?? undefined}, 'max_categories': ${this.opts['max_categories'] ?? undefined}, 'feature_name_combiner': ${this.opts['feature_name_combiner'] ?? undefined}}

ctor_OneHotEncoder = {k: v for k, v in ctor_OneHotEncoder.items() if v is not None}`

    await this._py
      .ex`bridgeOneHotEncoder[${this.id}] = OneHotEncoder(**ctor_OneHotEncoder)`

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

    await this._py.ex`del bridgeOneHotEncoder[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit OneHotEncoder to X.
   */
  async fit(opts: {
    /**
      The data to determine the categories of each feature.
     */
    X?: ArrayLike[]

    /**
      Ignored. This parameter exists only for compatibility with [`Pipeline`](https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html#sklearn.pipeline.Pipeline "sklearn.pipeline.Pipeline").
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneHotEncoder must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_OneHotEncoder_fit = {k: v for k, v in pms_OneHotEncoder_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_fit = bridgeOneHotEncoder[${this.id}].fit(**pms_OneHotEncoder_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_fit.tolist() if hasattr(res_OneHotEncoder_fit, 'tolist') else res_OneHotEncoder_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.
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
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneHotEncoder must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_OneHotEncoder_fit_transform = {k: v for k, v in pms_OneHotEncoder_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_fit_transform = bridgeOneHotEncoder[${this.id}].fit_transform(**pms_OneHotEncoder_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_fit_transform.tolist() if hasattr(res_OneHotEncoder_fit_transform, 'tolist') else res_OneHotEncoder_fit_transform`
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
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_OneHotEncoder_get_feature_names_out = {k: v for k, v in pms_OneHotEncoder_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_get_feature_names_out = bridgeOneHotEncoder[${this.id}].get_feature_names_out(**pms_OneHotEncoder_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_get_feature_names_out.tolist() if hasattr(res_OneHotEncoder_get_feature_names_out, 'tolist') else res_OneHotEncoder_get_feature_names_out`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_OneHotEncoder_get_metadata_routing = {k: v for k, v in pms_OneHotEncoder_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_get_metadata_routing = bridgeOneHotEncoder[${this.id}].get_metadata_routing(**pms_OneHotEncoder_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_get_metadata_routing.tolist() if hasattr(res_OneHotEncoder_get_metadata_routing, 'tolist') else res_OneHotEncoder_get_metadata_routing`
  }

  /**
    Convert the data back to the original representation.

    When unknown categories are encountered (all zeros in the one-hot encoding), `undefined` is used to represent this category. If the feature with the unknown category has a dropped category, the dropped category will be its inverse.

    For a given input feature, if there is an infrequent category, ‘infrequent_sklearn’ will be used to represent the infrequent category.
   */
  async inverse_transform(opts: {
    /**
      The transformed data.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_inverse_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OneHotEncoder_inverse_transform = {k: v for k, v in pms_OneHotEncoder_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_inverse_transform = bridgeOneHotEncoder[${this.id}].inverse_transform(**pms_OneHotEncoder_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_inverse_transform.tolist() if hasattr(res_OneHotEncoder_inverse_transform, 'tolist') else res_OneHotEncoder_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneHotEncoder must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_OneHotEncoder_set_output = {k: v for k, v in pms_OneHotEncoder_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_set_output = bridgeOneHotEncoder[${this.id}].set_output(**pms_OneHotEncoder_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_set_output.tolist() if hasattr(res_OneHotEncoder_set_output, 'tolist') else res_OneHotEncoder_set_output`
  }

  /**
    Transform X using one-hot encoding.

    If `sparse_output=True` (default), it returns an instance of [`scipy.sparse._csr.csr_matrix`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csr_matrix.html#scipy.sparse.csr_matrix "(in SciPy v1.14.1)") (CSR format).

    If there are infrequent categories for a feature, set by specifying `max_categories` or `min_frequency`, the infrequent categories are grouped into a single category.
   */
  async transform(opts: {
    /**
      The data to encode.
     */
    X?: ArrayLike[]
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('OneHotEncoder must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_OneHotEncoder_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_OneHotEncoder_transform = {k: v for k, v in pms_OneHotEncoder_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_OneHotEncoder_transform = bridgeOneHotEncoder[${this.id}].transform(**pms_OneHotEncoder_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_OneHotEncoder_transform.tolist() if hasattr(res_OneHotEncoder_transform, 'tolist') else res_OneHotEncoder_transform`
  }

  /**
    The categories of each feature determined during fitting (in order of the features in X and corresponding with the output of `transform`). This includes the category specified in `drop` (if any).
   */
  get categories_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before accessing categories_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneHotEncoder_categories_ = bridgeOneHotEncoder[${this.id}].categories_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneHotEncoder_categories_.tolist() if hasattr(attr_OneHotEncoder_categories_, 'tolist') else attr_OneHotEncoder_categories_`
    })()
  }

  /**
    `drop_idx_\[i\]` is the index in `categories_\[i\]` of the category to be dropped for each feature.
   */
  get drop_idx_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before accessing drop_idx_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneHotEncoder_drop_idx_ = bridgeOneHotEncoder[${this.id}].drop_idx_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneHotEncoder_drop_idx_.tolist() if hasattr(attr_OneHotEncoder_drop_idx_, 'tolist') else attr_OneHotEncoder_drop_idx_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneHotEncoder_n_features_in_ = bridgeOneHotEncoder[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneHotEncoder_n_features_in_.tolist() if hasattr(attr_OneHotEncoder_n_features_in_, 'tolist') else attr_OneHotEncoder_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneHotEncoder_feature_names_in_ = bridgeOneHotEncoder[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_OneHotEncoder_feature_names_in_.tolist() if hasattr(attr_OneHotEncoder_feature_names_in_, 'tolist') else attr_OneHotEncoder_feature_names_in_`
    })()
  }

  /**
    Callable with signature `def callable(input_feature, category)` that returns a string. This is used to create feature names to be returned by [`get_feature_names_out`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.OneHotEncoder.get_feature_names_out "sklearn.preprocessing.OneHotEncoder.get_feature_names_out").
   */
  get feature_name_combiner(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This OneHotEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'OneHotEncoder must call init() before accessing feature_name_combiner'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_OneHotEncoder_feature_name_combiner = bridgeOneHotEncoder[${this.id}].feature_name_combiner`

      // convert the result from python to node.js
      return this
        ._py`attr_OneHotEncoder_feature_name_combiner.tolist() if hasattr(attr_OneHotEncoder_feature_name_combiner, 'tolist') else attr_OneHotEncoder_feature_name_combiner`
    })()
  }
}
