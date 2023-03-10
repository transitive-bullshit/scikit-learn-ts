/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Transform between iterable of iterables and a multilabel format.

  Although a list of sets or tuples is a very intuitive format for multilabel data, it is unwieldy to process. This transformer converts between this intuitive format and the supported multilabel format: a (samples x classes) binary matrix indicating the presence of a class label.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MultiLabelBinarizer.html
 */
export class MultiLabelBinarizer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MultiLabelBinarizerOptions) {
    this.id = `MultiLabelBinarizer${crypto.randomUUID().split('-')[0]}`
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
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'MultiLabelBinarizer.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import MultiLabelBinarizer
try: bridgeMultiLabelBinarizer
except NameError: bridgeMultiLabelBinarizer = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultiLabelBinarizer = {'classes': np.array(${
      this.opts['classes'] ?? undefined
    }) if ${this.opts['classes'] !== undefined} else None, 'sparse_output': ${
      this.opts['sparse_output'] ?? undefined
    }}

ctor_MultiLabelBinarizer = {k: v for k, v in ctor_MultiLabelBinarizer.items() if v is not None}`

    await this._py
      .ex`bridgeMultiLabelBinarizer[${this.id}] = MultiLabelBinarizer(**ctor_MultiLabelBinarizer)`

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

    await this._py.ex`del bridgeMultiLabelBinarizer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the label sets binarizer, storing classes_.
   */
  async fit(opts: MultiLabelBinarizerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiLabelBinarizer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultiLabelBinarizer_fit = {'y': ${
      opts['y'] ?? undefined
    }}

pms_MultiLabelBinarizer_fit = {k: v for k, v in pms_MultiLabelBinarizer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiLabelBinarizer_fit = bridgeMultiLabelBinarizer[${this.id}].fit(**pms_MultiLabelBinarizer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiLabelBinarizer_fit.tolist() if hasattr(res_MultiLabelBinarizer_fit, 'tolist') else res_MultiLabelBinarizer_fit`
  }

  /**
    Fit the label sets binarizer and transform the given label sets.
   */
  async fit_transform(
    opts: MultiLabelBinarizerFitTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiLabelBinarizer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MultiLabelBinarizer_fit_transform = {'y': ${
      opts['y'] ?? undefined
    }}

pms_MultiLabelBinarizer_fit_transform = {k: v for k, v in pms_MultiLabelBinarizer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiLabelBinarizer_fit_transform = bridgeMultiLabelBinarizer[${this.id}].fit_transform(**pms_MultiLabelBinarizer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiLabelBinarizer_fit_transform.tolist() if hasattr(res_MultiLabelBinarizer_fit_transform, 'tolist') else res_MultiLabelBinarizer_fit_transform`
  }

  /**
    Transform the given indicator matrix into label sets.
   */
  async inverse_transform(
    opts: MultiLabelBinarizerInverseTransformOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiLabelBinarizer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MultiLabelBinarizer_inverse_transform = {'yt': np.array(${
      opts['yt'] ?? undefined
    }) if ${opts['yt'] !== undefined} else None}

pms_MultiLabelBinarizer_inverse_transform = {k: v for k, v in pms_MultiLabelBinarizer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiLabelBinarizer_inverse_transform = bridgeMultiLabelBinarizer[${this.id}].inverse_transform(**pms_MultiLabelBinarizer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiLabelBinarizer_inverse_transform.tolist() if hasattr(res_MultiLabelBinarizer_inverse_transform, 'tolist') else res_MultiLabelBinarizer_inverse_transform`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: MultiLabelBinarizerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiLabelBinarizer must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_MultiLabelBinarizer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MultiLabelBinarizer_set_output = {k: v for k, v in pms_MultiLabelBinarizer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiLabelBinarizer_set_output = bridgeMultiLabelBinarizer[${this.id}].set_output(**pms_MultiLabelBinarizer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiLabelBinarizer_set_output.tolist() if hasattr(res_MultiLabelBinarizer_set_output, 'tolist') else res_MultiLabelBinarizer_set_output`
  }

  /**
    Transform the given label sets.
   */
  async transform(opts: MultiLabelBinarizerTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('MultiLabelBinarizer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MultiLabelBinarizer_transform = {'y': ${
      opts['y'] ?? undefined
    }}

pms_MultiLabelBinarizer_transform = {k: v for k, v in pms_MultiLabelBinarizer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiLabelBinarizer_transform = bridgeMultiLabelBinarizer[${this.id}].transform(**pms_MultiLabelBinarizer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiLabelBinarizer_transform.tolist() if hasattr(res_MultiLabelBinarizer_transform, 'tolist') else res_MultiLabelBinarizer_transform`
  }

  /**
    A copy of the classes parameter when provided. Otherwise it corresponds to the sorted set of classes found when fitting.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This MultiLabelBinarizer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiLabelBinarizer must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiLabelBinarizer_classes_ = bridgeMultiLabelBinarizer[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiLabelBinarizer_classes_.tolist() if hasattr(attr_MultiLabelBinarizer_classes_, 'tolist') else attr_MultiLabelBinarizer_classes_`
    })()
  }
}

export interface MultiLabelBinarizerOptions {
  /**
    Indicates an ordering for the class labels. All entries should be unique (cannot contain duplicate classes).
   */
  classes?: ArrayLike

  /**
    Set to True if output binary array is desired in CSR sparse format.

    @defaultValue `false`
   */
  sparse_output?: boolean
}

export interface MultiLabelBinarizerFitOptions {
  /**
    A set of labels (any orderable and hashable object) for each sample. If the classes parameter is set, y will not be iterated.
   */
  y?: any
}

export interface MultiLabelBinarizerFitTransformOptions {
  /**
    A set of labels (any orderable and hashable object) for each sample. If the classes parameter is set, y will not be iterated.
   */
  y?: any
}

export interface MultiLabelBinarizerInverseTransformOptions {
  /**
    A matrix containing only 1s ands 0s.
   */
  yt?: NDArray | SparseMatrix[]
}

export interface MultiLabelBinarizerSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface MultiLabelBinarizerTransformOptions {
  /**
    A set of labels (any orderable and hashable object) for each sample. If the classes parameter is set, y will not be iterated.
   */
  y?: any
}
