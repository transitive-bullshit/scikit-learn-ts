/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Encode target labels with value between 0 and n\_classes-1.

  This transformer should be used to encode target values, *i.e.* `y`, and not the input `X`.

  Read more in the [User Guide](../preprocessing_targets.html#preprocessing-targets).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html
 */
export class LabelEncoder {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LabelEncoderOptions) {
    this.id = `LabelEncoder${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LabelEncoder.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import LabelEncoder
try: bridgeLabelEncoder
except NameError: bridgeLabelEncoder = {}
`

    // set up constructor params
    await this._py.ex`ctor_LabelEncoder = {'classes_': np.array(${
      this.opts['classes_'] ?? undefined
    }) if ${this.opts['classes_'] !== undefined} else None}

ctor_LabelEncoder = {k: v for k, v in ctor_LabelEncoder.items() if v is not None}`

    await this._py
      .ex`bridgeLabelEncoder[${this.id}] = LabelEncoder(**ctor_LabelEncoder)`

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

    await this._py.ex`del bridgeLabelEncoder[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit label encoder.
   */
  async fit(opts: LabelEncoderFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelEncoder must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LabelEncoder_fit = {'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LabelEncoder_fit = {k: v for k, v in pms_LabelEncoder_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelEncoder_fit = bridgeLabelEncoder[${this.id}].fit(**pms_LabelEncoder_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelEncoder_fit.tolist() if hasattr(res_LabelEncoder_fit, 'tolist') else res_LabelEncoder_fit`
  }

  /**
    Fit label encoder and return encoded labels.
   */
  async fit_transform(
    opts: LabelEncoderFitTransformOptions
  ): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelEncoder must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_LabelEncoder_fit_transform = {'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LabelEncoder_fit_transform = {k: v for k, v in pms_LabelEncoder_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelEncoder_fit_transform = bridgeLabelEncoder[${this.id}].fit_transform(**pms_LabelEncoder_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelEncoder_fit_transform.tolist() if hasattr(res_LabelEncoder_fit_transform, 'tolist') else res_LabelEncoder_fit_transform`
  }

  /**
    Transform labels back to original encoding.
   */
  async inverse_transform(
    opts: LabelEncoderInverseTransformOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LabelEncoder must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_LabelEncoder_inverse_transform = {'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LabelEncoder_inverse_transform = {k: v for k, v in pms_LabelEncoder_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelEncoder_inverse_transform = bridgeLabelEncoder[${this.id}].inverse_transform(**pms_LabelEncoder_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelEncoder_inverse_transform.tolist() if hasattr(res_LabelEncoder_inverse_transform, 'tolist') else res_LabelEncoder_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: LabelEncoderSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelEncoder must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_LabelEncoder_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_LabelEncoder_set_output = {k: v for k, v in pms_LabelEncoder_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelEncoder_set_output = bridgeLabelEncoder[${this.id}].set_output(**pms_LabelEncoder_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelEncoder_set_output.tolist() if hasattr(res_LabelEncoder_set_output, 'tolist') else res_LabelEncoder_set_output`
  }

  /**
    Transform labels to normalized encoding.
   */
  async transform(opts: LabelEncoderTransformOptions): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This LabelEncoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LabelEncoder must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_LabelEncoder_transform = {'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LabelEncoder_transform = {k: v for k, v in pms_LabelEncoder_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LabelEncoder_transform = bridgeLabelEncoder[${this.id}].transform(**pms_LabelEncoder_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LabelEncoder_transform.tolist() if hasattr(res_LabelEncoder_transform, 'tolist') else res_LabelEncoder_transform`
  }
}

export interface LabelEncoderOptions {
  /**
    Holds the label for each class.
   */
  classes_?: NDArray
}

export interface LabelEncoderFitOptions {
  /**
    Target values.
   */
  y?: ArrayLike
}

export interface LabelEncoderFitTransformOptions {
  /**
    Target values.
   */
  y?: ArrayLike
}

export interface LabelEncoderInverseTransformOptions {
  /**
    Target values.
   */
  y?: NDArray
}

export interface LabelEncoderSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface LabelEncoderTransformOptions {
  /**
    Target values.
   */
  y?: ArrayLike
}
