/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Binarize labels in a one-vs-all fashion.

  Several regression and binary classification algorithms are available in scikit-learn. A simple way to extend these algorithms to the multi-class classification case is to use the so-called one-vs-all scheme.

  At learning time, this simply consists in learning one regressor or binary classifier per class. In doing so, one needs to convert multi-class labels to binary labels (belong or does not belong to the class). `LabelBinarizer` makes this process easy with the transform method.

  At prediction time, one assigns the class for which the corresponding model gave the greatest confidence. `LabelBinarizer` makes this easy with the [`inverse\_transform`](#sklearn.preprocessing.LabelBinarizer.inverse_transform "sklearn.preprocessing.LabelBinarizer.inverse_transform") method.

  Read more in the [User Guide](../preprocessing_targets.html#preprocessing-targets).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html)
 */
export class LabelBinarizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Value with which negative labels must be encoded.

      @defaultValue `0`
     */
    neg_label?: number

    /**
      Value with which positive labels must be encoded.

      @defaultValue `1`
     */
    pos_label?: number

    /**
      True if the returned array from transform is desired to be in sparse CSR format.

      @defaultValue `false`
     */
    sparse_output?: boolean
  }) {
    this.id = `LabelBinarizer${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LabelBinarizer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import LabelBinarizer
try: bridgeLabelBinarizer
except NameError: bridgeLabelBinarizer = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_LabelBinarizer = {'neg_label': ${this.opts['neg_label'] ?? undefined}, 'pos_label': ${this.opts['pos_label'] ?? undefined}, 'sparse_output': ${this.opts['sparse_output'] ?? undefined}}

ctor_LabelBinarizer = {k: v for k, v in ctor_LabelBinarizer.items() if v is not None}`

    await this._py
      .ex`bridgeLabelBinarizer[${this.id}] = LabelBinarizer(**ctor_LabelBinarizer)`

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

    await this._py.ex`del bridgeLabelBinarizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit label binarizer.
   */
  async fit(opts: {
    /**
      Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification.
     */
    y?: NDArray
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelBinarizer must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_fit = {'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_LabelBinarizer_fit = {k: v for k, v in pms_LabelBinarizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_fit = bridgeLabelBinarizer[${this.id}].fit(**pms_LabelBinarizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_fit.tolist() if hasattr(res_LabelBinarizer_fit, 'tolist') else res_LabelBinarizer_fit`
  }

  /**
    Fit label binarizer/transform multi-class labels to binary labels.

    The output of transform is sometimes referred to as the 1-of-K coding scheme.
   */
  async fit_transform(opts: {
    /**
      Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.
     */
    y?: NDArray | SparseMatrix
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelBinarizer must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_fit_transform = {'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_LabelBinarizer_fit_transform = {k: v for k, v in pms_LabelBinarizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_fit_transform = bridgeLabelBinarizer[${this.id}].fit_transform(**pms_LabelBinarizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_fit_transform.tolist() if hasattr(res_LabelBinarizer_fit_transform, 'tolist') else res_LabelBinarizer_fit_transform`
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
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_LabelBinarizer_get_metadata_routing = {k: v for k, v in pms_LabelBinarizer_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_get_metadata_routing = bridgeLabelBinarizer[${this.id}].get_metadata_routing(**pms_LabelBinarizer_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_get_metadata_routing.tolist() if hasattr(res_LabelBinarizer_get_metadata_routing, 'tolist') else res_LabelBinarizer_get_metadata_routing`
  }

  /**
    Transform binary labels back to multi-class labels.
   */
  async inverse_transform(opts: {
    /**
      Target values. All sparse matrices are converted to CSR before inverse transformation.
     */
    Y?: NDArray | SparseMatrix[]

    /**
      Threshold used in the binary and multi-label cases.

      Use 0 when `Y` contains the output of [decision\_function](../../glossary.html#term-decision_function) (classifier). Use 0.5 when `Y` contains the output of [predict\_proba](../../glossary.html#term-predict_proba).

      If `undefined`, the threshold is assumed to be half way between neg\_label and pos\_label.
     */
    threshold?: number
  }): Promise<NDArray | SparseMatrix> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_inverse_transform = {'Y': np.array(${opts['Y'] ?? undefined}) if ${opts['Y'] !== undefined} else None, 'threshold': ${opts['threshold'] ?? undefined}}

pms_LabelBinarizer_inverse_transform = {k: v for k, v in pms_LabelBinarizer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_inverse_transform = bridgeLabelBinarizer[${this.id}].inverse_transform(**pms_LabelBinarizer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_inverse_transform.tolist() if hasattr(res_LabelBinarizer_inverse_transform, 'tolist') else res_LabelBinarizer_inverse_transform`
  }

  /**
    Request metadata passed to the `inverse\_transform` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_inverse_transform_request(opts: {
    /**
      Metadata routing for `threshold` parameter in `inverse\_transform`.
     */
    threshold?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before set_inverse_transform_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_set_inverse_transform_request = {'threshold': ${opts['threshold'] ?? undefined}}

pms_LabelBinarizer_set_inverse_transform_request = {k: v for k, v in pms_LabelBinarizer_set_inverse_transform_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_set_inverse_transform_request = bridgeLabelBinarizer[${this.id}].set_inverse_transform_request(**pms_LabelBinarizer_set_inverse_transform_request)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_set_inverse_transform_request.tolist() if hasattr(res_LabelBinarizer_set_inverse_transform_request, 'tolist') else res_LabelBinarizer_set_inverse_transform_request`
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
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelBinarizer must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_LabelBinarizer_set_output = {k: v for k, v in pms_LabelBinarizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_set_output = bridgeLabelBinarizer[${this.id}].set_output(**pms_LabelBinarizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_set_output.tolist() if hasattr(res_LabelBinarizer_set_output, 'tolist') else res_LabelBinarizer_set_output`
  }

  /**
    Transform multi-class labels to binary labels.

    The output of transform is sometimes referred to by some authors as the 1-of-K coding scheme.
   */
  async transform(opts: {
    /**
      Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.
     */
    y?: SparseMatrix
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelBinarizer must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_LabelBinarizer_transform = {'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None}

pms_LabelBinarizer_transform = {k: v for k, v in pms_LabelBinarizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelBinarizer_transform = bridgeLabelBinarizer[${this.id}].transform(**pms_LabelBinarizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelBinarizer_transform.tolist() if hasattr(res_LabelBinarizer_transform, 'tolist') else res_LabelBinarizer_transform`
  }

  /**
    Holds the label for each class.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelBinarizer_classes_ = bridgeLabelBinarizer[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelBinarizer_classes_.tolist() if hasattr(attr_LabelBinarizer_classes_, 'tolist') else attr_LabelBinarizer_classes_`
    })()
  }

  /**
    Represents the type of the target data as evaluated by [`type\_of\_target`](sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "sklearn.utils.multiclass.type_of_target"). Possible type are ‘continuous’, ‘continuous-multioutput’, ‘binary’, ‘multiclass’, ‘multiclass-multioutput’, ‘multilabel-indicator’, and ‘unknown’.
   */
  get y_type_(): Promise<string> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before accessing y_type_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelBinarizer_y_type_ = bridgeLabelBinarizer[${this.id}].y_type_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelBinarizer_y_type_.tolist() if hasattr(attr_LabelBinarizer_y_type_, 'tolist') else attr_LabelBinarizer_y_type_`
    })()
  }

  /**
    `false` otherwise.
   */
  get sparse_input_(): Promise<boolean> {
    if (this._isDisposed) {
      throw new Error('This LabelBinarizer instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelBinarizer must call init() before accessing sparse_input_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LabelBinarizer_sparse_input_ = bridgeLabelBinarizer[${this.id}].sparse_input_`

      // convert the result from python to node.js
      return this
        ._py`attr_LabelBinarizer_sparse_input_.tolist() if hasattr(attr_LabelBinarizer_sparse_input_, 'tolist') else attr_LabelBinarizer_sparse_input_`
    })()
  }
}
