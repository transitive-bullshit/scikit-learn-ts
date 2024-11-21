/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Target Encoder for regression and classification targets.

  Each category is encoded based on a shrunk estimate of the average target values for observations belonging to the category. The encoding scheme mixes the global target mean with the target mean conditioned on the value of the category (see [\[MIC\]](https://scikit-learn.org/stable/modules/generated/#rf862141e5a0c-mic)).

  When the target type is “multiclass”, encodings are based on the conditional probability estimate for each class. The target is first binarized using the “one-vs-all” scheme via [`LabelBinarizer`](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "sklearn.preprocessing.LabelBinarizer"), then the average target value for each class and each category is used for encoding, resulting in `n_features` \* `n_classes` encoded output features.

  [`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") considers missing values, such as `np.nan` or `undefined`, as another category and encodes them like any other category. Categories that are not seen during [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit "sklearn.preprocessing.TargetEncoder.fit") are encoded with the target mean, i.e. `target_mean_`.

  For a demo on the importance of the `TargetEncoder` internal cross-fitting, see [Target Encoder’s Internal Cross fitting](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder_cross_val.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-cross-val-py). For a comparison of different encoders, refer to [Comparing Target Encoder with Other Encoders](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_target_encoder.html#sphx-glr-auto-examples-preprocessing-plot-target-encoder-py). Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#target-encoder).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)
 */
export class TargetEncoder {
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
      Type of target.

      @defaultValue `'auto'`
     */
    target_type?: 'auto' | 'continuous' | 'binary' | 'multiclass'

    /**
      The amount of mixing of the target mean conditioned on the value of the category with the global target mean. A larger `smooth` value will put more weight on the global target mean. If `"auto"`, then `smooth` is set to an empirical Bayes estimate.

      @defaultValue `'auto'`
     */
    smooth?: 'auto' | number

    /**
      Determines the number of folds in the [cross fitting](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-0) strategy used in [`fit_transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform"). For classification targets, `StratifiedKFold` is used and for continuous targets, `KFold` is used.

      @defaultValue `5`
     */
    cv?: number

    /**
      Whether to shuffle the data in [`fit_transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform") before splitting into folds. Note that the samples within each split will not be shuffled.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      When `shuffle` is `true`, `random_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `TargetEncoder${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('TargetEncoder.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import TargetEncoder
try: bridgeTargetEncoder
except NameError: bridgeTargetEncoder = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_TargetEncoder = {'categories': np.array(${this.opts['categories'] ?? undefined}) if ${this.opts['categories'] !== undefined} else None, 'target_type': ${this.opts['target_type'] ?? undefined}, 'smooth': ${this.opts['smooth'] ?? undefined}, 'cv': ${this.opts['cv'] ?? undefined}, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_TargetEncoder = {k: v for k, v in ctor_TargetEncoder.items() if v is not None}`

    await this._py
      .ex`bridgeTargetEncoder[${this.id}] = TargetEncoder(**ctor_TargetEncoder)`

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

    await this._py.ex`del bridgeTargetEncoder[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the [`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") to X and y.
   */
  async fit(opts: {
    /**
      The data to determine the categories of each feature.
     */
    X?: ArrayLike[]

    /**
      The target data used to encode the categories.
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TargetEncoder must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_TargetEncoder_fit = {k: v for k, v in pms_TargetEncoder_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_fit = bridgeTargetEncoder[${this.id}].fit(**pms_TargetEncoder_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_fit.tolist() if hasattr(res_TargetEncoder_fit, 'tolist') else res_TargetEncoder_fit`
  }

  /**
    Fit [`TargetEncoder`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") and transform X with the target encoding.
   */
  async fit_transform(opts: {
    /**
      The data to determine the categories of each feature.
     */
    X?: ArrayLike[]

    /**
      The target data used to encode the categories.
     */
    y?: ArrayLike
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TargetEncoder must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_TargetEncoder_fit_transform = {k: v for k, v in pms_TargetEncoder_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_fit_transform = bridgeTargetEncoder[${this.id}].fit_transform(**pms_TargetEncoder_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_fit_transform.tolist() if hasattr(res_TargetEncoder_fit_transform, 'tolist') else res_TargetEncoder_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(opts: {
    /**
      Not used, present here for API consistency by convention.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_get_feature_names_out = {'input_features': ${opts['input_features'] ?? undefined}}

pms_TargetEncoder_get_feature_names_out = {k: v for k, v in pms_TargetEncoder_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_get_feature_names_out = bridgeTargetEncoder[${this.id}].get_feature_names_out(**pms_TargetEncoder_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_get_feature_names_out.tolist() if hasattr(res_TargetEncoder_get_feature_names_out, 'tolist') else res_TargetEncoder_get_feature_names_out`
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
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_TargetEncoder_get_metadata_routing = {k: v for k, v in pms_TargetEncoder_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_get_metadata_routing = bridgeTargetEncoder[${this.id}].get_metadata_routing(**pms_TargetEncoder_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_get_metadata_routing.tolist() if hasattr(res_TargetEncoder_get_metadata_routing, 'tolist') else res_TargetEncoder_get_metadata_routing`
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
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TargetEncoder must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_TargetEncoder_set_output = {k: v for k, v in pms_TargetEncoder_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_set_output = bridgeTargetEncoder[${this.id}].set_output(**pms_TargetEncoder_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_set_output.tolist() if hasattr(res_TargetEncoder_set_output, 'tolist') else res_TargetEncoder_set_output`
  }

  /**
    Transform X with the target encoding.
   */
  async transform(opts: {
    /**
      The data to determine the categories of each feature.
     */
    X?: ArrayLike[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('TargetEncoder must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_TargetEncoder_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_TargetEncoder_transform = {k: v for k, v in pms_TargetEncoder_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_TargetEncoder_transform = bridgeTargetEncoder[${this.id}].transform(**pms_TargetEncoder_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_TargetEncoder_transform.tolist() if hasattr(res_TargetEncoder_transform, 'tolist') else res_TargetEncoder_transform`
  }

  /**
    Encodings learnt on all of `X`. For feature `i`, `encodings_\[i\]` are the encodings matching the categories listed in `categories_\[i\]`. When `target_type_` is “multiclass”, the encoding for feature `i` and class `j` is stored in `encodings_\[j + (i \* len(classes_))\]`. E.g., for 2 features (f) and 3 classes (c), encodings are ordered: f0_c0, f0_c1, f0_c2, f1_c0, f1_c1, f1_c2,
   */
  get encodings_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing encodings_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_encodings_ = bridgeTargetEncoder[${this.id}].encodings_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_encodings_.tolist() if hasattr(attr_TargetEncoder_encodings_, 'tolist') else attr_TargetEncoder_encodings_`
    })()
  }

  /**
    The categories of each input feature determined during fitting or specified in `categories` (in order of the features in `X` and corresponding with the output of [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform")).
   */
  get categories_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing categories_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_categories_ = bridgeTargetEncoder[${this.id}].categories_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_categories_.tolist() if hasattr(attr_TargetEncoder_categories_, 'tolist') else attr_TargetEncoder_categories_`
    })()
  }

  /**
    Type of target.
   */
  get target_type_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing target_type_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_target_type_ = bridgeTargetEncoder[${this.id}].target_type_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_target_type_.tolist() if hasattr(attr_TargetEncoder_target_type_, 'tolist') else attr_TargetEncoder_target_type_`
    })()
  }

  /**
    The overall mean of the target. This value is only used in [`transform`](https://scikit-learn.org/stable/modules/generated/#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform") to encode categories.
   */
  get target_mean_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing target_mean_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_target_mean_ = bridgeTargetEncoder[${this.id}].target_mean_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_target_mean_.tolist() if hasattr(attr_TargetEncoder_target_mean_, 'tolist') else attr_TargetEncoder_target_mean_`
    })()
  }

  /**
    Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_n_features_in_ = bridgeTargetEncoder[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_n_features_in_.tolist() if hasattr(attr_TargetEncoder_n_features_in_, 'tolist') else attr_TargetEncoder_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_feature_names_in_ = bridgeTargetEncoder[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_feature_names_in_.tolist() if hasattr(attr_TargetEncoder_feature_names_in_, 'tolist') else attr_TargetEncoder_feature_names_in_`
    })()
  }

  /**
    If `target_type_` is ‘binary’ or ‘multiclass’, holds the label for each class, otherwise `undefined`.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This TargetEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'TargetEncoder must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_TargetEncoder_classes_ = bridgeTargetEncoder[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_TargetEncoder_classes_.tolist() if hasattr(attr_TargetEncoder_classes_, 'tolist') else attr_TargetEncoder_classes_`
    })()
  }
}
