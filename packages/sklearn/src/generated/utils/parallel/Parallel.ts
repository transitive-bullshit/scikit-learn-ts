/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Tweak of joblib.Parallel that propagates the scikit-learn configuration.

  This subclass of joblib.Parallel ensures that the active configuration (thread-local) of scikit-learn is propagated to the parallel workers for the duration of the execution of the parallel tasks.

  The API does not change and you can refer to joblib.Parallel documentation for more details.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.utils.parallel.Parallel.html
 */
export class Parallel {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ParallelOptions) {
    this.id = `Parallel${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Parallel instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Parallel.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.utils.parallel import Parallel
try: bridgeParallel
except NameError: bridgeParallel = {}
`

    // set up constructor params
    await this._py.ex`ctor_Parallel = {}

ctor_Parallel = {k: v for k, v in ctor_Parallel.items() if v is not None}`

    await this._py.ex`bridgeParallel[${this.id}] = Parallel(**ctor_Parallel)`

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

    await this._py.ex`del bridgeParallel[${this.id}]`

    this._isDisposed = true
  }

  /**
    Dispatch more data for parallel processing

    This method is meant to be called concurrently by the multiprocessing callback. We rely on the thread-safety of dispatch_one_batch to protect against concurrent consumption of the unprotected iterator.
   */
  async dispatch_next(opts: ParallelDispatchNextOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Parallel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Parallel must call init() before dispatch_next()')
    }

    // set up method params
    await this._py.ex`pms_Parallel_dispatch_next = {}

pms_Parallel_dispatch_next = {k: v for k, v in pms_Parallel_dispatch_next.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Parallel_dispatch_next = bridgeParallel[${this.id}].dispatch_next(**pms_Parallel_dispatch_next)`

    // convert the result from python to node.js
    return this
      ._py`res_Parallel_dispatch_next.tolist() if hasattr(res_Parallel_dispatch_next, 'tolist') else res_Parallel_dispatch_next`
  }

  /**
    Prefetch the tasks for the next batch and dispatch them.

    The effective size of the batch is computed here. If there are no more jobs to dispatch, return False, else return True.

    The iterator consumption and dispatching is protected by the same lock so calling this function should be thread safe.
   */
  async dispatch_one_batch(
    opts: ParallelDispatchOneBatchOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Parallel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Parallel must call init() before dispatch_one_batch()')
    }

    // set up method params
    await this._py.ex`pms_Parallel_dispatch_one_batch = {}

pms_Parallel_dispatch_one_batch = {k: v for k, v in pms_Parallel_dispatch_one_batch.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Parallel_dispatch_one_batch = bridgeParallel[${this.id}].dispatch_one_batch(**pms_Parallel_dispatch_one_batch)`

    // convert the result from python to node.js
    return this
      ._py`res_Parallel_dispatch_one_batch.tolist() if hasattr(res_Parallel_dispatch_one_batch, 'tolist') else res_Parallel_dispatch_one_batch`
  }

  /**
    Return the formatted representation of the object.
   */
  async format(opts: ParallelFormatOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Parallel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Parallel must call init() before format()')
    }

    // set up method params
    await this._py.ex`pms_Parallel_format = {}

pms_Parallel_format = {k: v for k, v in pms_Parallel_format.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Parallel_format = bridgeParallel[${this.id}].format(**pms_Parallel_format)`

    // convert the result from python to node.js
    return this
      ._py`res_Parallel_format.tolist() if hasattr(res_Parallel_format, 'tolist') else res_Parallel_format`
  }

  /**
    Display the process of the parallel execution only a fraction of time, controlled by self.verbose.
   */
  async print_progress(opts: ParallelPrintProgressOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Parallel instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Parallel must call init() before print_progress()')
    }

    // set up method params
    await this._py.ex`pms_Parallel_print_progress = {}

pms_Parallel_print_progress = {k: v for k, v in pms_Parallel_print_progress.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Parallel_print_progress = bridgeParallel[${this.id}].print_progress(**pms_Parallel_print_progress)`

    // convert the result from python to node.js
    return this
      ._py`res_Parallel_print_progress.tolist() if hasattr(res_Parallel_print_progress, 'tolist') else res_Parallel_print_progress`
  }
}

export interface ParallelOptions {}

export interface ParallelDispatchNextOptions {}

export interface ParallelDispatchOneBatchOptions {}

export interface ParallelFormatOptions {}

export interface ParallelPrintProgressOptions {}
