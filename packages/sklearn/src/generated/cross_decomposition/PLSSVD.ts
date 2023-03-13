/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Partial Least Square SVD.

  This transformer simply performs a SVD on the cross-covariance matrix `X'Y`. It is able to project both the training data `X` and the targets `Y`. The training data `X` is projected on the left singular vectors, while the targets are projected on the right singular vectors.

  Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.PLSSVD.html)
 */
export class PLSSVD {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

      @defaultValue `2`
     */
    n_components?: number

    /**
      Whether to scale `X` and `Y`.

      @defaultValue `true`
     */
    scale?: boolean

    /**
      Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If `false`, these operations will be done inplace, modifying both arrays.

      @defaultValue `true`
     */
    copy?: boolean
  }) {
    this.id = `PLSSVD${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PLSSVD.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cross_decomposition import PLSSVD
try: bridgePLSSVD
except NameError: bridgePLSSVD = {}
`

    // set up constructor params
    await this._py.ex`ctor_PLSSVD = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'scale': ${this.opts['scale'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_PLSSVD = {k: v for k, v in ctor_PLSSVD.items() if v is not None}`

    await this._py.ex`bridgePLSSVD[${this.id}] = PLSSVD(**ctor_PLSSVD)`

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

    await this._py.ex`del bridgePLSSVD[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit model to data.
   */
  async fit(opts: {
    /**
      Training samples.
     */
    X?: ArrayLike[]

    /**
      Targets.
     */
    Y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PLSSVD_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_PLSSVD_fit = {k: v for k, v in pms_PLSSVD_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSSVD_fit = bridgePLSSVD[${this.id}].fit(**pms_PLSSVD_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSSVD_fit.tolist() if hasattr(res_PLSSVD_fit, 'tolist') else res_PLSSVD_fit`
  }

  /**
    Learn and apply the dimensionality reduction.
   */
  async fit_transform(opts: {
    /**
      Training samples.
     */
    X?: ArrayLike[]

    /**
      Targets.
     */
    y?: ArrayLike
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_PLSSVD_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_PLSSVD_fit_transform = {k: v for k, v in pms_PLSSVD_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSSVD_fit_transform = bridgePLSSVD[${this.id}].fit_transform(**pms_PLSSVD_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSSVD_fit_transform.tolist() if hasattr(res_PLSSVD_fit_transform, 'tolist') else res_PLSSVD_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.cross_decomposition.PLSSVD.fit "sklearn.cross_decomposition.PLSSVD.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_PLSSVD_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PLSSVD_get_feature_names_out = {k: v for k, v in pms_PLSSVD_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSSVD_get_feature_names_out = bridgePLSSVD[${this.id}].get_feature_names_out(**pms_PLSSVD_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSSVD_get_feature_names_out.tolist() if hasattr(res_PLSSVD_get_feature_names_out, 'tolist') else res_PLSSVD_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_PLSSVD_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PLSSVD_set_output = {k: v for k, v in pms_PLSSVD_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSSVD_set_output = bridgePLSSVD[${this.id}].set_output(**pms_PLSSVD_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSSVD_set_output.tolist() if hasattr(res_PLSSVD_set_output, 'tolist') else res_PLSSVD_set_output`
  }

  /**
    Apply the dimensionality reduction.
   */
  async transform(opts: {
    /**
      Samples to be transformed.
     */
    X?: ArrayLike[]

    /**
      Targets.
     */
    Y?: ArrayLike
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PLSSVD_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_PLSSVD_transform = {k: v for k, v in pms_PLSSVD_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PLSSVD_transform = bridgePLSSVD[${this.id}].transform(**pms_PLSSVD_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PLSSVD_transform.tolist() if hasattr(res_PLSSVD_transform, 'tolist') else res_PLSSVD_transform`
  }

  /**
    The left singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").
   */
  get x_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before accessing x_weights_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSSVD_x_weights_ = bridgePLSSVD[${this.id}].x_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSSVD_x_weights_.tolist() if hasattr(attr_PLSSVD_x_weights_, 'tolist') else attr_PLSSVD_x_weights_`
    })()
  }

  /**
    The right singular vectors of the SVD of the cross-covariance matrix. Used to project `X` in [`transform`](#sklearn.cross_decomposition.PLSSVD.transform "sklearn.cross_decomposition.PLSSVD.transform").
   */
  get y_weights_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before accessing y_weights_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSSVD_y_weights_ = bridgePLSSVD[${this.id}].y_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSSVD_y_weights_.tolist() if hasattr(attr_PLSSVD_y_weights_, 'tolist') else attr_PLSSVD_y_weights_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('PLSSVD must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSSVD_n_features_in_ = bridgePLSSVD[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSSVD_n_features_in_.tolist() if hasattr(attr_PLSSVD_n_features_in_, 'tolist') else attr_PLSSVD_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This PLSSVD instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'PLSSVD must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PLSSVD_feature_names_in_ = bridgePLSSVD[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PLSSVD_feature_names_in_.tolist() if hasattr(attr_PLSSVD_feature_names_in_, 'tolist') else attr_PLSSVD_feature_names_in_`
    })()
  }
}
