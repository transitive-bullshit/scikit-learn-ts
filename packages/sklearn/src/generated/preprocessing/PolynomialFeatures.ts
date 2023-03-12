/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Generate polynomial and interaction features.

  Generate a new feature matrix consisting of all polynomial combinations of the features with degree less than or equal to the specified degree. For example, if an input sample is two dimensional and of the form \[a, b\], the degree-2 polynomial features are \[1, a, b, a^2, ab, b^2\].

  Read more in the [User Guide](../preprocessing.html#polynomial-features).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html)
 */
export class PolynomialFeatures {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: PolynomialFeaturesOptions) {
    this.id = `PolynomialFeatures${crypto.randomUUID().split('-')[0]}`
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
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'PolynomialFeatures.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import PolynomialFeatures
try: bridgePolynomialFeatures
except NameError: bridgePolynomialFeatures = {}
`

    // set up constructor params
    await this._py.ex`ctor_PolynomialFeatures = {'degree': ${
      this.opts['degree'] ?? undefined
    }, 'interaction_only': ${
      this.opts['interaction_only'] ?? undefined
    }, 'include_bias': ${this.opts['include_bias'] ?? undefined}, 'order': ${
      this.opts['order'] ?? undefined
    }}

ctor_PolynomialFeatures = {k: v for k, v in ctor_PolynomialFeatures.items() if v is not None}`

    await this._py
      .ex`bridgePolynomialFeatures[${this.id}] = PolynomialFeatures(**ctor_PolynomialFeatures)`

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

    await this._py.ex`del bridgePolynomialFeatures[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute number of output features.
   */
  async fit(opts: PolynomialFeaturesFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PolynomialFeatures must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_PolynomialFeatures_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_PolynomialFeatures_fit = {k: v for k, v in pms_PolynomialFeatures_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialFeatures_fit = bridgePolynomialFeatures[${this.id}].fit(**pms_PolynomialFeatures_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialFeatures_fit.tolist() if hasattr(res_PolynomialFeatures_fit, 'tolist') else res_PolynomialFeatures_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: PolynomialFeaturesFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialFeatures must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_PolynomialFeatures_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_PolynomialFeatures_fit_transform = {k: v for k, v in pms_PolynomialFeatures_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialFeatures_fit_transform = bridgePolynomialFeatures[${this.id}].fit_transform(**pms_PolynomialFeatures_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialFeatures_fit_transform.tolist() if hasattr(res_PolynomialFeatures_fit_transform, 'tolist') else res_PolynomialFeatures_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: PolynomialFeaturesGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialFeatures must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_PolynomialFeatures_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_PolynomialFeatures_get_feature_names_out = {k: v for k, v in pms_PolynomialFeatures_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialFeatures_get_feature_names_out = bridgePolynomialFeatures[${this.id}].get_feature_names_out(**pms_PolynomialFeatures_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialFeatures_get_feature_names_out.tolist() if hasattr(res_PolynomialFeatures_get_feature_names_out, 'tolist') else res_PolynomialFeatures_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: PolynomialFeaturesSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PolynomialFeatures must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_PolynomialFeatures_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_PolynomialFeatures_set_output = {k: v for k, v in pms_PolynomialFeatures_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialFeatures_set_output = bridgePolynomialFeatures[${this.id}].set_output(**pms_PolynomialFeatures_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialFeatures_set_output.tolist() if hasattr(res_PolynomialFeatures_set_output, 'tolist') else res_PolynomialFeatures_set_output`
  }

  /**
    Transform data to polynomial features.
   */
  async transform(
    opts: PolynomialFeaturesTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('PolynomialFeatures must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_PolynomialFeatures_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_PolynomialFeatures_transform = {k: v for k, v in pms_PolynomialFeatures_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_PolynomialFeatures_transform = bridgePolynomialFeatures[${this.id}].transform(**pms_PolynomialFeatures_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_PolynomialFeatures_transform.tolist() if hasattr(res_PolynomialFeatures_transform, 'tolist') else res_PolynomialFeatures_transform`
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialFeatures must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialFeatures_n_features_in_ = bridgePolynomialFeatures[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialFeatures_n_features_in_.tolist() if hasattr(attr_PolynomialFeatures_n_features_in_, 'tolist') else attr_PolynomialFeatures_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialFeatures must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialFeatures_feature_names_in_ = bridgePolynomialFeatures[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialFeatures_feature_names_in_.tolist() if hasattr(attr_PolynomialFeatures_feature_names_in_, 'tolist') else attr_PolynomialFeatures_feature_names_in_`
    })()
  }

  /**
    The total number of polynomial output features. The number of output features is computed by iterating over all suitably sized combinations of input features.
   */
  get n_output_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This PolynomialFeatures instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'PolynomialFeatures must call init() before accessing n_output_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_PolynomialFeatures_n_output_features_ = bridgePolynomialFeatures[${this.id}].n_output_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_PolynomialFeatures_n_output_features_.tolist() if hasattr(attr_PolynomialFeatures_n_output_features_, 'tolist') else attr_PolynomialFeatures_n_output_features_`
    })()
  }
}

export interface PolynomialFeaturesOptions {
  /**
    If a single int is given, it specifies the maximal degree of the polynomial features. If a tuple `(min\_degree, max\_degree)` is passed, then `min\_degree` is the minimum and `max\_degree` is the maximum polynomial degree of the generated features. Note that `min\_degree=0` and `min\_degree=1` are equivalent as outputting the degree zero term is determined by `include\_bias`.

    @defaultValue `2`
   */
  degree?: number

  /**
    If `true`, only interaction features are produced: features that are products of at most `degree` *distinct* input features, i.e. terms with power of 2 or higher of the same input feature are excluded:

    @defaultValue `false`
   */
  interaction_only?: boolean

  /**
    If `true` (default), then include a bias column, the feature in which all polynomial powers are zero (i.e. a column of ones - acts as an intercept term in a linear model).

    @defaultValue `true`
   */
  include_bias?: boolean

  /**
    Order of output array in the dense case. `'F'` order is faster to compute, but may slow down subsequent estimators.

    @defaultValue `'C'`
   */
  order?: 'C' | 'F'
}

export interface PolynomialFeaturesFitOptions {
  /**
    The data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface PolynomialFeaturesFitTransformOptions {
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
}

export interface PolynomialFeaturesGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface PolynomialFeaturesSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface PolynomialFeaturesTransformOptions {
  /**
    The data to transform, row by row.

    Prefer CSR over CSC for sparse input (for speed), but CSC is required if the degree is 4 or higher. If the degree is less than 4 and the input format is CSC, it will be converted to CSR, have its polynomial features generated, then converted back to CSC.

    If the degree is 2 or 3, the method described in “Leveraging Sparsity to Speed Up Polynomial Feature Expansions of CSR Matrices Using K-Simplex Numbers” by Andrew Nystrom and John Hughes is used, which is much faster than the method used on CSC input. For this reason, a CSC input will be converted to CSR, and the output will be converted back to CSC prior to being returned, hence the preference of CSR.
   */
  X?: ArrayLike | SparseMatrix[]
}
