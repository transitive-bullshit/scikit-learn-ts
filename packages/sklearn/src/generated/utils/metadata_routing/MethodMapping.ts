/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stores the mapping between caller and callee methods for a router.

  This class is primarily used in a `get\_metadata\_routing()` of a router object when defining the mapping between the router’s methods and a sub-object (a sub-estimator or a scorer).

  Iterating through an instance of this class yields `MethodPair(caller, callee)` instances.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MethodMapping.html)
 */
export class MethodMapping {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Parent estimator’s method name in which the `callee` is called.
     */
    caller?: string

    /**
      Child object’s method name. This method is called in `caller`.
     */
    callee?: string
  }) {
    this.id = `MethodMapping${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MethodMapping instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MethodMapping.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.utils.metadata_routing import MethodMapping
try: bridgeMethodMapping
except NameError: bridgeMethodMapping = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MethodMapping = {'caller': ${this.opts['caller'] ?? undefined}, 'callee': ${this.opts['callee'] ?? undefined}}

ctor_MethodMapping = {k: v for k, v in ctor_MethodMapping.items() if v is not None}`

    await this._py
      .ex`bridgeMethodMapping[${this.id}] = MethodMapping(**ctor_MethodMapping)`

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

    await this._py.ex`del bridgeMethodMapping[${this.id}]`

    this._isDisposed = true
  }

  /**
    Add a method mapping.
   */
  async add(opts: {
    /**
      Parent estimator’s method name in which the `callee` is called.
     */
    caller?: string

    /**
      Child object’s method name. This method is called in `caller`.
     */
    callee?: string
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MethodMapping instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MethodMapping must call init() before add()')
    }

    // set up method params
    await this._py
      .ex`pms_MethodMapping_add = {'caller': ${opts['caller'] ?? undefined}, 'callee': ${opts['callee'] ?? undefined}}

pms_MethodMapping_add = {k: v for k, v in pms_MethodMapping_add.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MethodMapping_add = bridgeMethodMapping[${this.id}].add(**pms_MethodMapping_add)`

    // convert the result from python to node.js
    return this
      ._py`res_MethodMapping_add.tolist() if hasattr(res_MethodMapping_add, 'tolist') else res_MethodMapping_add`
  }

  /**
    Returns self.
   */
  get self(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MethodMapping instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MethodMapping must call init() before accessing self')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MethodMapping_self = bridgeMethodMapping[${this.id}].self`

      // convert the result from python to node.js
      return this
        ._py`attr_MethodMapping_self.tolist() if hasattr(attr_MethodMapping_self, 'tolist') else attr_MethodMapping_self`
    })()
  }
}
