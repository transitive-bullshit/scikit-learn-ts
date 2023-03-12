/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Grid of parameters with a discrete number of values for each.

  Can be used to iterate over parameter value combinations with the Python built-in function iter. The order of the generated parameter combinations is deterministic.

  Read more in the [User Guide](../grid_search.html#grid-search).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterGrid.html
 */
export class ParameterGrid {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ParameterGridOptions) {
    this.id = `ParameterGrid${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This ParameterGrid instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ParameterGrid.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import ParameterGrid
try: bridgeParameterGrid
except NameError: bridgeParameterGrid = {}
`

    // set up constructor params
    await this._py.ex`ctor_ParameterGrid = {'param_grid': ${
      this.opts['param_grid'] ?? undefined
    }}

ctor_ParameterGrid = {k: v for k, v in ctor_ParameterGrid.items() if v is not None}`

    await this._py
      .ex`bridgeParameterGrid[${this.id}] = ParameterGrid(**ctor_ParameterGrid)`

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

    await this._py.ex`del bridgeParameterGrid[${this.id}]`

    this._isDisposed = true
  }
}

export interface ParameterGridOptions {
  /**
    The parameter grid to explore, as a dictionary mapping estimator parameters to sequences of allowed values.

    An empty dict signifies default parameters.

    A sequence of dicts signifies a sequence of grids to search, and is useful to avoid exploring parameter combinations that make no sense or have no effect. See the examples below.
   */
  param_grid?: any
}
