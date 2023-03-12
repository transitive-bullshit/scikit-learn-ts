/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Apply a power transform featurewise to make data more Gaussian-like.

  Power transforms are a family of parametric, monotonic transformations that are applied to make data more Gaussian-like. This is useful for modeling issues related to heteroscedasticity (non-constant variance), or other situations where normality is desired.

  Currently, PowerTransformer supports the Box-Cox transform and the Yeo-Johnson transform. The optimal parameter for stabilizing variance and minimizing skewness is estimated through maximum likelihood.

  Box-Cox requires input data to be strictly positive, while Yeo-Johnson supports both positive or negative data.

  By default, zero-mean, unit-variance normalization is applied to the transformed data.

  Read more in the [User Guide](../preprocessing.html#preprocessing-transformer).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PowerTransformer.html)
 */
export class PowerTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PowerTransformerOptions) {
    this.id = `PowerTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('PowerTransformer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import PowerTransformer
try: bridgePowerTransformer
except NameError: bridgePowerTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_PowerTransformer = {'method': ${
      this.opts['method'] ?? undefined
    }, 'standardize': ${this.opts['standardize'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_PowerTransformer = {k: v for k, v in ctor_PowerTransformer.items() if v is not None}`

    await this._py
      .ex`bridgePowerTransformer[${this.id}] = PowerTransformer(**ctor_PowerTransformer)`

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

    await this._py.ex`del bridgePowerTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Estimate the optimal parameter lambda for each feature.

    The optimal lambda parameter for minimizing skewness is estimated on each feature independently using maximum likelihood.
   */
  async fit(opts: PowerTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PowerTransformer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PowerTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PowerTransformer_fit = {k: v for k, v in pms_PowerTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_fit = bridgePowerTransformer[${this.id}].fit(**pms_PowerTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_fit.tolist() if hasattr(res_PowerTransformer_fit, 'tolist') else res_PowerTransformer_fit`
  }

  /**
    Fit `PowerTransformer` to `X`, then transform `X`.
   */
  async fit_transform(
    opts: PowerTransformerFitTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_PowerTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PowerTransformer_fit_transform = {k: v for k, v in pms_PowerTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_fit_transform = bridgePowerTransformer[${this.id}].fit_transform(**pms_PowerTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_fit_transform.tolist() if hasattr(res_PowerTransformer_fit_transform, 'tolist') else res_PowerTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: PowerTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PowerTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PowerTransformer_get_feature_names_out = {k: v for k, v in pms_PowerTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_get_feature_names_out = bridgePowerTransformer[${this.id}].get_feature_names_out(**pms_PowerTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_get_feature_names_out.tolist() if hasattr(res_PowerTransformer_get_feature_names_out, 'tolist') else res_PowerTransformer_get_feature_names_out`
  }

  /**
    Apply the inverse power transformation using the fitted lambdas.

    The inverse of the Box-Cox transformation is given by:
   */
  async inverse_transform(
    opts: PowerTransformerInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_PowerTransformer_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PowerTransformer_inverse_transform = {k: v for k, v in pms_PowerTransformer_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_inverse_transform = bridgePowerTransformer[${this.id}].inverse_transform(**pms_PowerTransformer_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_inverse_transform.tolist() if hasattr(res_PowerTransformer_inverse_transform, 'tolist') else res_PowerTransformer_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: PowerTransformerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PowerTransformer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_PowerTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PowerTransformer_set_output = {k: v for k, v in pms_PowerTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_set_output = bridgePowerTransformer[${this.id}].set_output(**pms_PowerTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_set_output.tolist() if hasattr(res_PowerTransformer_set_output, 'tolist') else res_PowerTransformer_set_output`
  }

  /**
    Apply the power transform to each feature using the fitted lambdas.
   */
  async transform(opts: PowerTransformerTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PowerTransformer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PowerTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PowerTransformer_transform = {k: v for k, v in pms_PowerTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PowerTransformer_transform = bridgePowerTransformer[${this.id}].transform(**pms_PowerTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PowerTransformer_transform.tolist() if hasattr(res_PowerTransformer_transform, 'tolist') else res_PowerTransformer_transform`
  }

  /**
    The parameters of the power transformation for the selected features.
   */
  get lambdas_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before accessing lambdas_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PowerTransformer_lambdas_ = bridgePowerTransformer[${this.id}].lambdas_`

      // convert the result from python to node.js
      return this
        ._py`attr_PowerTransformer_lambdas_.tolist() if hasattr(attr_PowerTransformer_lambdas_, 'tolist') else attr_PowerTransformer_lambdas_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PowerTransformer_n_features_in_ = bridgePowerTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PowerTransformer_n_features_in_.tolist() if hasattr(attr_PowerTransformer_n_features_in_, 'tolist') else attr_PowerTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PowerTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PowerTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PowerTransformer_feature_names_in_ = bridgePowerTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PowerTransformer_feature_names_in_.tolist() if hasattr(attr_PowerTransformer_feature_names_in_, 'tolist') else attr_PowerTransformer_feature_names_in_`
    })()
  }
}

export interface PowerTransformerOptions {
  /**
    The power transform method. Available methods are:

    @defaultValue `'yeo-johnson'`
   */
  method?: 'yeo-johnson' | 'box-cox'

  /**
    Set to `true` to apply zero-mean, unit-variance normalization to the transformed output.

    @defaultValue `true`
   */
  standardize?: boolean

  /**
    Set to `false` to perform inplace computation during transformation.

    @defaultValue `true`
   */
  copy?: boolean
}

export interface PowerTransformerFitOptions {
  /**
    The data used to estimate the optimal transformation parameters.
   */
  X?: ArrayLike[]

  /**
    Ignored.
   */
  y?: any
}

export interface PowerTransformerFitTransformOptions {
  /**
    The data used to estimate the optimal transformation parameters and to be transformed using a power transformation.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface PowerTransformerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface PowerTransformerInverseTransformOptions {
  /**
    The transformed data.
   */
  X?: ArrayLike[]
}

export interface PowerTransformerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface PowerTransformerTransformOptions {
  /**
    The data to be transformed using a power transformation.
   */
  X?: ArrayLike[]
}
