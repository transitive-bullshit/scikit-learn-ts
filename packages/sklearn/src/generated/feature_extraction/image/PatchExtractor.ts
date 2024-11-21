/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Extracts patches from a collection of images.

  Read more in the [User Guide](../feature_extraction.html#image-feature-extraction).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.image.PatchExtractor.html)
 */
export class PatchExtractor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The dimensions of one patch. If set to `undefined`, the patch size will be automatically set to `(img\_height // 10, img\_width // 10)`, where `img\_height` and `img\_width` are the dimensions of the input images.
     */
    patch_size?: any

    /**
      The maximum number of patches per image to extract. If `max\_patches` is a float in (0, 1), it is taken to mean a proportion of the total number of patches. If set to `undefined`, extract all possible patches.
     */
    max_patches?: number

    /**
      Determines the random number generator used for random sampling when `max\_patches is not None`. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
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
    await this._py
      .ex`ctor_PatchExtractor = {'patch_size': ${this.opts['patch_size'] ?? undefined}, 'max_patches': ${this.opts['max_patches'] ?? undefined}, 'random_state': ${this.opts['random_state'] ?? undefined}}

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
    Only validate the parameters of the estimator.

    This method allows to: (i) validate the parameters of the estimator and (ii) be consistent with the scikit-learn transformer API.
   */
  async fit(opts: {
    /**
      Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`.
     */
    X?: NDArray[][]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before fit()')
    }

    // set up method params
    await this._py
      .ex`pms_PatchExtractor_fit = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PatchExtractor_fit = {k: v for k, v in pms_PatchExtractor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_fit = bridgePatchExtractor[${this.id}].fit(**pms_PatchExtractor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_fit.tolist() if hasattr(res_PatchExtractor_fit, 'tolist') else res_PatchExtractor_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: {
    /**
      Input samples.
     */
    X?: ArrayLike[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike

    /**
      Additional fit parameters.
     */
    fit_params?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before fit_transform()')
    }

    // set up method params
    await this._py
      .ex`pms_PatchExtractor_fit_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None, 'y': np.array(${opts['y'] ?? undefined}) if ${opts['y'] !== undefined} else None, 'fit_params': ${opts['fit_params'] ?? undefined}}

pms_PatchExtractor_fit_transform = {k: v for k, v in pms_PatchExtractor_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_fit_transform = bridgePatchExtractor[${this.id}].fit_transform(**pms_PatchExtractor_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_fit_transform.tolist() if hasattr(res_PatchExtractor_fit_transform, 'tolist') else res_PatchExtractor_fit_transform`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PatchExtractor must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PatchExtractor_get_metadata_routing = {'routing': ${opts['routing'] ?? undefined}}

pms_PatchExtractor_get_metadata_routing = {k: v for k, v in pms_PatchExtractor_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_get_metadata_routing = bridgePatchExtractor[${this.id}].get_metadata_routing(**pms_PatchExtractor_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_get_metadata_routing.tolist() if hasattr(res_PatchExtractor_get_metadata_routing, 'tolist') else res_PatchExtractor_get_metadata_routing`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas' | 'polars'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before set_output()')
    }

    // set up method params
    await this._py
      .ex`pms_PatchExtractor_set_output = {'transform': ${opts['transform'] ?? undefined}}

pms_PatchExtractor_set_output = {k: v for k, v in pms_PatchExtractor_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_set_output = bridgePatchExtractor[${this.id}].set_output(**pms_PatchExtractor_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_set_output.tolist() if hasattr(res_PatchExtractor_set_output, 'tolist') else res_PatchExtractor_set_output`
  }

  /**
    Transform the image samples in `X` into a matrix of patch data.
   */
  async transform(opts: {
    /**
      Array of images from which to extract patches. For color images, the last dimension specifies the channel: a RGB image would have `n\_channels=3`.
     */
    X?: NDArray[][]
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This PatchExtractor instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PatchExtractor must call init() before transform()')
    }

    // set up method params
    await this._py
      .ex`pms_PatchExtractor_transform = {'X': np.array(${opts['X'] ?? undefined}) if ${opts['X'] !== undefined} else None}

pms_PatchExtractor_transform = {k: v for k, v in pms_PatchExtractor_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PatchExtractor_transform = bridgePatchExtractor[${this.id}].transform(**pms_PatchExtractor_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PatchExtractor_transform.tolist() if hasattr(res_PatchExtractor_transform, 'tolist') else res_PatchExtractor_transform`
  }
}
