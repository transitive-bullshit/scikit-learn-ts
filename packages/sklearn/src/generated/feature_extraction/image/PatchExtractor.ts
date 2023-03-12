/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Extracts patches from a collection of images.

  Read more in the [User Guide](../feature_extraction.html#image-feature-extraction).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html
 */
export class PatchExtractor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PatchExtractorOptions) {
    this.id = `PatchExtractor${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PatchExtractor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_extraction.image import PatchExtractor
try: bridgePatchExtractor
except NameError: bridgePatchExtractor = {}
`

    // set up constructor params
    await this._py.ex`ctor_PatchExtractor = {'patch_size': ${
      this.opts['patch_size'] ?? undefined
    }, 'max_patches': ${
      this.opts['max_patches'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_PatchExtractor = {k: v for k, v in ctor_PatchExtractor.items() if v is not None}`

    await this._py
      .ex`bridgePatchExtractor[${this.id}] = PatchExtractor(**ctor_PatchExtractor)`

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

    await this._py.ex`del bridgePatchExtractor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Do nothing and return the estimator unchanged.

    This method is just there to implement the usual API and hence work in pipelines.
   */
  async fit(opts: PatchExtractorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PatchExtractor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PatchExtractor_fit = {k: v for k, v in pms_PatchExtractor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_fit = bridgePatchExtractor[${this.id}].fit(**pms_PatchExtractor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_fit.tolist() if hasattr(res_PatchExtractor_fit, 'tolist') else res_PatchExtractor_fit`
  }

  /**
    Transform the image samples in `X` into a matrix of patch data.
   */
  async transform(opts: PatchExtractorTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PatchExtractor_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PatchExtractor_transform = {k: v for k, v in pms_PatchExtractor_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_transform = bridgePatchExtractor[${this.id}].transform(**pms_PatchExtractor_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_transform.tolist() if hasattr(res_PatchExtractor_transform, 'tolist') else res_PatchExtractor_transform`
  }
}

export interface PatchExtractorOptions {
  /**
    The dimensions of one patch.
   */
  patch_size?: any

  /**
    The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches.
   */
  max_patches?: number

  /**
    Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface PatchExtractorFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface PatchExtractorTransformOptions {
  /**
    Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`.
   */
  X?: NDArray[][]
}
