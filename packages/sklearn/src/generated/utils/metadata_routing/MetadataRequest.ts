/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Contains the metadata request info of a consumer.

  Instances of `MethodMetadataRequest` are used in this class for each available method under `metadatarequest.{method}`.

  Consumer-only classes such as simple estimators return a serialized version of this class as the output of `get_metadata_routing()`.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html)
 */
export class MetadataRequest {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The name of the object to which these requests belong.
     */
    owner?: string
  }) {
    this.id = `MetadataRequest${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MetadataRequest instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MetadataRequest.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.utils.metadata_routing import MetadataRequest
try: bridgeMetadataRequest
except NameError: bridgeMetadataRequest = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MetadataRequest = {'owner': ${this.opts['owner'] ?? undefined}}

ctor_MetadataRequest = {k: v for k, v in ctor_MetadataRequest.items() if v is not None}`

    await this._py
      .ex`bridgeMetadataRequest[${this.id}] = MetadataRequest(**ctor_MetadataRequest)`

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

    await this._py.ex`del bridgeMetadataRequest[${this.id}]`

    this._isDisposed = true
  }

  /**
    Check whether the given parameters are consumed by the given method.
   */
  async consumes(opts: {
    /**
      The name of the method to check.
     */
    method?: string

    /**
      An iterable of parameters to check.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRequest instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MetadataRequest must call init() before consumes()')
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRequest_consumes = {'method': ${opts['method'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_MetadataRequest_consumes = {k: v for k, v in pms_MetadataRequest_consumes.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRequest_consumes = bridgeMetadataRequest[${this.id}].consumes(**pms_MetadataRequest_consumes)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRequest_consumes.tolist() if hasattr(res_MetadataRequest_consumes, 'tolist') else res_MetadataRequest_consumes`
  }
}
