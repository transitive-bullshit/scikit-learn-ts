/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Warning used to notify the user of inefficient computation.

  This warning notifies the user that the efficiency may not be optimal due to some reason which may be included as a part of the warning message. This may be subclassed into a more specific Warning class.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.EfficiencyWarning.html
 */
export class EfficiencyWarning {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: EfficiencyWarningOptions) {
    this.id = `EfficiencyWarning${crypto.randomUUID().split('-')[0]}`
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
        'This EfficiencyWarning instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('EfficiencyWarning.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.exceptions import EfficiencyWarning
try: bridgeEfficiencyWarning
except NameError: bridgeEfficiencyWarning = {}
`

    // set up constructor params
    await this._py.ex`ctor_EfficiencyWarning = {'args': ${
      this.opts['args'] ?? undefined
    }}

ctor_EfficiencyWarning = {k: v for k, v in ctor_EfficiencyWarning.items() if v is not None}`

    await this._py
      .ex`bridgeEfficiencyWarning[${this.id}] = EfficiencyWarning(**ctor_EfficiencyWarning)`

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

    await this._py.ex`del bridgeEfficiencyWarning[${this.id}]`

    this._isDisposed = true
  }

  /**
    Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.
   */
  async with_traceback(
    opts: EfficiencyWarningWithTracebackOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This EfficiencyWarning instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'EfficiencyWarning must call init() before with_traceback()'
      )
    }

    // set up method params
    await this._py.ex`pms_EfficiencyWarning_with_traceback = {}

pms_EfficiencyWarning_with_traceback = {k: v for k, v in pms_EfficiencyWarning_with_traceback.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_EfficiencyWarning_with_traceback = bridgeEfficiencyWarning[${this.id}].with_traceback(**pms_EfficiencyWarning_with_traceback)`

    // convert the result from python to node.js
    return this
      ._py`res_EfficiencyWarning_with_traceback.tolist() if hasattr(res_EfficiencyWarning_with_traceback, 'tolist') else res_EfficiencyWarning_with_traceback`
  }
}

export interface EfficiencyWarningOptions {
  args?: any
}

export interface EfficiencyWarningWithTracebackOptions {}
