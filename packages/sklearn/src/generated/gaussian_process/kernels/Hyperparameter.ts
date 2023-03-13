/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A kernel hyperparameter’s specification in form of a namedtuple.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Hyperparameter.html)
 */
export class Hyperparameter {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The name of the hyperparameter. Note that a kernel using a hyperparameter with name “x” must have the attributes self.x and self.x\_bounds
     */
    name?: string

    /**
      The type of the hyperparameter. Currently, only “numeric” hyperparameters are supported.
     */
    value_type?: string

    /**
      The lower and upper bound on the parameter. If n\_elements>1, a pair of 1d array with n\_elements each may be given alternatively. If the string “fixed” is passed as bounds, the hyperparameter’s value cannot be changed.
     */
    bounds?: 'fixed'

    /**
      The number of elements of the hyperparameter value. Defaults to 1, which corresponds to a scalar hyperparameter. n\_elements > 1 corresponds to a hyperparameter which is vector-valued, such as, e.g., anisotropic length-scales.

      @defaultValue `1`
     */
    n_elements?: number

    /**
      Whether the value of this hyperparameter is fixed, i.e., cannot be changed during hyperparameter tuning. If `undefined` is passed, the “fixed” is derived based on the given bounds.
     */
    fixed?: boolean
  }) {
    this.id = `Hyperparameter${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Hyperparameter instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Hyperparameter.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process.kernels import Hyperparameter
try: bridgeHyperparameter
except NameError: bridgeHyperparameter = {}
`

    // set up constructor params
    await this._py.ex`ctor_Hyperparameter = {'name': ${
      this.opts['name'] ?? undefined
    }, 'value_type': ${this.opts['value_type'] ?? undefined}, 'bounds': ${
      this.opts['bounds'] ?? undefined
    }, 'n_elements': ${this.opts['n_elements'] ?? undefined}, 'fixed': ${
      this.opts['fixed'] ?? undefined
    }}

ctor_Hyperparameter = {k: v for k, v in ctor_Hyperparameter.items() if v is not None}`

    await this._py
      .ex`bridgeHyperparameter[${this.id}] = Hyperparameter(**ctor_Hyperparameter)`

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

    await this._py.ex`del bridgeHyperparameter[${this.id}]`

    this._isDisposed = true
  }

  /**
    Call self as a function.
   */
  async __call__(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Hyperparameter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Hyperparameter must call init() before __call__()')
    }

    // set up method params
    await this._py.ex`pms_Hyperparameter___call__ = {}

pms_Hyperparameter___call__ = {k: v for k, v in pms_Hyperparameter___call__.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Hyperparameter___call__ = bridgeHyperparameter[${this.id}].__call__(**pms_Hyperparameter___call__)`

    // convert the result from python to node.js
    return this
      ._py`res_Hyperparameter___call__.tolist() if hasattr(res_Hyperparameter___call__, 'tolist') else res_Hyperparameter___call__`
  }

  /**
    Return number of occurrences of value.
   */
  async count(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Hyperparameter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Hyperparameter must call init() before count()')
    }

    // set up method params
    await this._py.ex`pms_Hyperparameter_count = {}

pms_Hyperparameter_count = {k: v for k, v in pms_Hyperparameter_count.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Hyperparameter_count = bridgeHyperparameter[${this.id}].count(**pms_Hyperparameter_count)`

    // convert the result from python to node.js
    return this
      ._py`res_Hyperparameter_count.tolist() if hasattr(res_Hyperparameter_count, 'tolist') else res_Hyperparameter_count`
  }

  /**
    Return first index of value.

    Raises ValueError if the value is not present.
   */
  async index(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Hyperparameter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Hyperparameter must call init() before index()')
    }

    // set up method params
    await this._py.ex`pms_Hyperparameter_index = {}

pms_Hyperparameter_index = {k: v for k, v in pms_Hyperparameter_index.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Hyperparameter_index = bridgeHyperparameter[${this.id}].index(**pms_Hyperparameter_index)`

    // convert the result from python to node.js
    return this
      ._py`res_Hyperparameter_index.tolist() if hasattr(res_Hyperparameter_index, 'tolist') else res_Hyperparameter_index`
  }
}
