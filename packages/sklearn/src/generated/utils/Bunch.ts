/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Container object exposing keys as attributes.

  Bunch objects are sometimes used as an output for functions and methods. They extend dictionaries by enabling values to be accessed by key, `bunch\["value\_key"\]`, or by an attribute, `bunch.value\_key`.

  Examples

  @see https://scikit-learn.org/stable/modules/generated/sklearn.utils.Bunch.html
 */
export class Bunch {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: BunchOptions) {
    this.id = `Bunch${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Bunch instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Bunch.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.utils import Bunch
try: bridgeBunch
except NameError: bridgeBunch = {}
`

    // set up constructor params
    await this._py.ex`ctor_Bunch = {}

ctor_Bunch = {k: v for k, v in ctor_Bunch.items() if v is not None}`

    await this._py.ex`bridgeBunch[${this.id}] = Bunch(**ctor_Bunch)`

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

    await this._py.ex`del bridgeBunch[${this.id}]`

    this._isDisposed = true
  }

  async clear(opts: BunchClearOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before clear()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_clear = {}

pms_Bunch_clear = {k: v for k, v in pms_Bunch_clear.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_clear = bridgeBunch[${this.id}].clear(**pms_Bunch_clear)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_clear.tolist() if hasattr(res_Bunch_clear, 'tolist') else res_Bunch_clear`
  }

  async copy(opts: BunchCopyOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before copy()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_copy = {}

pms_Bunch_copy = {k: v for k, v in pms_Bunch_copy.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_copy = bridgeBunch[${this.id}].copy(**pms_Bunch_copy)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_copy.tolist() if hasattr(res_Bunch_copy, 'tolist') else res_Bunch_copy`
  }

  /**
    Create a new dictionary with keys from iterable and values set to value.
   */
  async fromkeys(opts: BunchFromkeysOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before fromkeys()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_fromkeys = {}

pms_Bunch_fromkeys = {k: v for k, v in pms_Bunch_fromkeys.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_fromkeys = bridgeBunch[${this.id}].fromkeys(**pms_Bunch_fromkeys)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_fromkeys.tolist() if hasattr(res_Bunch_fromkeys, 'tolist') else res_Bunch_fromkeys`
  }

  /**
    Return the value for key if key is in the dictionary, else default.
   */
  async get(opts: BunchGetOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before get()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_get = {}

pms_Bunch_get = {k: v for k, v in pms_Bunch_get.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_get = bridgeBunch[${this.id}].get(**pms_Bunch_get)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_get.tolist() if hasattr(res_Bunch_get, 'tolist') else res_Bunch_get`
  }

  async items(opts: BunchItemsOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before items()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_items = {}

pms_Bunch_items = {k: v for k, v in pms_Bunch_items.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_items = bridgeBunch[${this.id}].items(**pms_Bunch_items)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_items.tolist() if hasattr(res_Bunch_items, 'tolist') else res_Bunch_items`
  }

  async keys(opts: BunchKeysOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before keys()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_keys = {}

pms_Bunch_keys = {k: v for k, v in pms_Bunch_keys.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_keys = bridgeBunch[${this.id}].keys(**pms_Bunch_keys)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_keys.tolist() if hasattr(res_Bunch_keys, 'tolist') else res_Bunch_keys`
  }

  /**
    If key is not found, default is returned if given, otherwise KeyError is raised
   */
  async pop(opts: BunchPopOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before pop()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_pop = {}

pms_Bunch_pop = {k: v for k, v in pms_Bunch_pop.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_pop = bridgeBunch[${this.id}].pop(**pms_Bunch_pop)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_pop.tolist() if hasattr(res_Bunch_pop, 'tolist') else res_Bunch_pop`
  }

  /**
    Remove and return a (key, value) pair as a 2-tuple.

    Pairs are returned in LIFO (last-in, first-out) order. Raises KeyError if the dict is empty.
   */
  async popitem(opts: BunchPopitemOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before popitem()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_popitem = {}

pms_Bunch_popitem = {k: v for k, v in pms_Bunch_popitem.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_popitem = bridgeBunch[${this.id}].popitem(**pms_Bunch_popitem)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_popitem.tolist() if hasattr(res_Bunch_popitem, 'tolist') else res_Bunch_popitem`
  }

  /**
    Insert key with a value of default if key is not in the dictionary.

    Return the value for key if key is in the dictionary, else default.
   */
  async setdefault(opts: BunchSetdefaultOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before setdefault()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_setdefault = {}

pms_Bunch_setdefault = {k: v for k, v in pms_Bunch_setdefault.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_setdefault = bridgeBunch[${this.id}].setdefault(**pms_Bunch_setdefault)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_setdefault.tolist() if hasattr(res_Bunch_setdefault, 'tolist') else res_Bunch_setdefault`
  }

  /**
    If E is present and has a .keys() method, then does: for k in E: D\[k\] = E\[k\] If E is present and lacks a .keys() method, then does: for k, v in E: D\[k\] = v In either case, this is followed by: for k in F: D\[k\] = F\[k\]
   */
  async update(opts: BunchUpdateOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before update()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_update = {}

pms_Bunch_update = {k: v for k, v in pms_Bunch_update.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_update = bridgeBunch[${this.id}].update(**pms_Bunch_update)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_update.tolist() if hasattr(res_Bunch_update, 'tolist') else res_Bunch_update`
  }

  async values(opts: BunchValuesOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Bunch instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Bunch must call init() before values()')
    }

    // set up method params
    await this._py.ex`pms_Bunch_values = {}

pms_Bunch_values = {k: v for k, v in pms_Bunch_values.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Bunch_values = bridgeBunch[${this.id}].values(**pms_Bunch_values)`

    // convert the result from python to node.js
    return this
      ._py`res_Bunch_values.tolist() if hasattr(res_Bunch_values, 'tolist') else res_Bunch_values`
  }
}

export interface BunchOptions {}

export interface BunchClearOptions {}

export interface BunchCopyOptions {}

export interface BunchFromkeysOptions {}

export interface BunchGetOptions {}

export interface BunchItemsOptions {}

export interface BunchKeysOptions {}

export interface BunchPopOptions {}

export interface BunchPopitemOptions {}

export interface BunchSetdefaultOptions {}

export interface BunchUpdateOptions {}

export interface BunchValuesOptions {}
