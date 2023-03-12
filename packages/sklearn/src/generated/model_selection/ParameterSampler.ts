/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Generator on parameters sampled from given distributions.

  Non-deterministic iterable over random candidate combinations for hyper- parameter search. If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

  Read more in the [User Guide](../grid_search.html#grid-search).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterSampler.html
 */
export class ParameterSampler {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: ParameterSamplerOptions) {
    this.id = `ParameterSampler${crypto.randomUUID().split('-')[0]}`
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
        'This ParameterSampler instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('ParameterSampler.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.model_selection import ParameterSampler
try: bridgeParameterSampler
except NameError: bridgeParameterSampler = {}
`

    // set up constructor params
    await this._py.ex`ctor_ParameterSampler = {'param_distributions': ${
      this.opts['param_distributions'] ?? undefined
    }, 'n_iter': ${this.opts['n_iter'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_ParameterSampler = {k: v for k, v in ctor_ParameterSampler.items() if v is not None}`

    await this._py
      .ex`bridgeParameterSampler[${this.id}] = ParameterSampler(**ctor_ParameterSampler)`

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

    await this._py.ex`del bridgeParameterSampler[${this.id}]`

    this._isDisposed = true
  }

  /**
   **Yields** dictionaries mapping each estimator parameter to as sampled value.
   */
  get params(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This ParameterSampler instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'ParameterSampler must call init() before accessing params'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_ParameterSampler_params = bridgeParameterSampler[${this.id}].params`

      // convert the result from python to node.js
      return this
        ._py`attr_ParameterSampler_params.tolist() if hasattr(attr_ParameterSampler_params, 'tolist') else attr_ParameterSampler_params`
    })()
  }
}

export interface ParameterSamplerOptions {
  /**
    Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.
   */
  param_distributions?: any

  /**
    Number of parameter settings that are produced.
   */
  n_iter?: number

  /**
    Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}
