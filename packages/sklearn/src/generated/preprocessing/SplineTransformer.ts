/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Generate univariate B-spline bases for features.

  Generate a new feature matrix consisting of `n\_splines=n\_knots + degree \- 1` (`n\_knots \- 1` for `extrapolation="periodic"`) spline basis functions (B-splines) of polynomial order=\`degree\` for each feature.

  Read more in the [User Guide](../preprocessing.html#spline-transformer).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.SplineTransformer.html
 */
export class SplineTransformer {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SplineTransformerOptions) {
    this.id = `SplineTransformer${crypto.randomUUID().split('-')[0]}`
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
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SplineTransformer.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.preprocessing import SplineTransformer
try: bridgeSplineTransformer
except NameError: bridgeSplineTransformer = {}
`

    // set up constructor params
    await this._py.ex`ctor_SplineTransformer = {'n_knots': ${
      this.opts['n_knots'] ?? undefined
    }, 'degree': ${this.opts['degree'] ?? undefined}, 'knots': np.array(${
      this.opts['knots'] ?? undefined
    }) if ${this.opts['knots'] !== undefined} else None, 'extrapolation': ${
      this.opts['extrapolation'] ?? undefined
    }, 'include_bias': ${this.opts['include_bias'] ?? undefined}, 'order': ${
      this.opts['order'] ?? undefined
    }}

ctor_SplineTransformer = {k: v for k, v in ctor_SplineTransformer.items() if v is not None}`

    await this._py
      .ex`bridgeSplineTransformer[${this.id}] = SplineTransformer(**ctor_SplineTransformer)`

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

    await this._py.ex`del bridgeSplineTransformer[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute knot positions of splines.
   */
  async fit(opts: SplineTransformerFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SplineTransformer must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SplineTransformer_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'sample_weight': np.array(${opts['sample_weight'] ?? undefined}) if ${
      opts['sample_weight'] !== undefined
    } else None}

pms_SplineTransformer_fit = {k: v for k, v in pms_SplineTransformer_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SplineTransformer_fit = bridgeSplineTransformer[${this.id}].fit(**pms_SplineTransformer_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SplineTransformer_fit.tolist() if hasattr(res_SplineTransformer_fit, 'tolist') else res_SplineTransformer_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: SplineTransformerFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SplineTransformer_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SplineTransformer_fit_transform = {k: v for k, v in pms_SplineTransformer_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SplineTransformer_fit_transform = bridgeSplineTransformer[${this.id}].fit_transform(**pms_SplineTransformer_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SplineTransformer_fit_transform.tolist() if hasattr(res_SplineTransformer_fit_transform, 'tolist') else res_SplineTransformer_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: SplineTransformerGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SplineTransformer_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SplineTransformer_get_feature_names_out = {k: v for k, v in pms_SplineTransformer_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SplineTransformer_get_feature_names_out = bridgeSplineTransformer[${this.id}].get_feature_names_out(**pms_SplineTransformer_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SplineTransformer_get_feature_names_out.tolist() if hasattr(res_SplineTransformer_get_feature_names_out, 'tolist') else res_SplineTransformer_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SplineTransformerSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SplineTransformer must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SplineTransformer_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SplineTransformer_set_output = {k: v for k, v in pms_SplineTransformer_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SplineTransformer_set_output = bridgeSplineTransformer[${this.id}].set_output(**pms_SplineTransformer_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SplineTransformer_set_output.tolist() if hasattr(res_SplineTransformer_set_output, 'tolist') else res_SplineTransformer_set_output`
  }

  /**
    Transform each feature data to B-splines.
   */
  async transform(opts: SplineTransformerTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SplineTransformer must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SplineTransformer_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SplineTransformer_transform = {k: v for k, v in pms_SplineTransformer_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SplineTransformer_transform = bridgeSplineTransformer[${this.id}].transform(**pms_SplineTransformer_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SplineTransformer_transform.tolist() if hasattr(res_SplineTransformer_transform, 'tolist') else res_SplineTransformer_transform`
  }

  /**
    List of BSplines objects, one for each feature.
   */
  get bsplines_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before accessing bsplines_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SplineTransformer_bsplines_ = bridgeSplineTransformer[${this.id}].bsplines_`

      // convert the result from python to node.js
      return this
        ._py`attr_SplineTransformer_bsplines_.tolist() if hasattr(attr_SplineTransformer_bsplines_, 'tolist') else attr_SplineTransformer_bsplines_`
    })()
  }

  /**
    The total number of input features.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SplineTransformer_n_features_in_ = bridgeSplineTransformer[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SplineTransformer_n_features_in_.tolist() if hasattr(attr_SplineTransformer_n_features_in_, 'tolist') else attr_SplineTransformer_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SplineTransformer_feature_names_in_ = bridgeSplineTransformer[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SplineTransformer_feature_names_in_.tolist() if hasattr(attr_SplineTransformer_feature_names_in_, 'tolist') else attr_SplineTransformer_feature_names_in_`
    })()
  }

  /**
    The total number of output features, which is computed as `n\_features \* n\_splines`, where `n\_splines` is the number of bases elements of the B-splines, `n\_knots + degree \- 1` for non-periodic splines and `n\_knots \- 1` for periodic ones. If `include\_bias=False`, then it is only `n\_features \* (n\_splines \- 1)`.
   */
  get n_features_out_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SplineTransformer instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SplineTransformer must call init() before accessing n_features_out_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SplineTransformer_n_features_out_ = bridgeSplineTransformer[${this.id}].n_features_out_`

      // convert the result from python to node.js
      return this
        ._py`attr_SplineTransformer_n_features_out_.tolist() if hasattr(attr_SplineTransformer_n_features_out_, 'tolist') else attr_SplineTransformer_n_features_out_`
    })()
  }
}

export interface SplineTransformerOptions {
  /**
    Number of knots of the splines if `knots` equals one of {‘uniform’, ‘quantile’}. Must be larger or equal 2. Ignored if `knots` is array-like.

    @defaultValue `5`
   */
  n_knots?: number

  /**
    The polynomial degree of the spline basis. Must be a non-negative integer.

    @defaultValue `3`
   */
  degree?: number

  /**
    Set knot positions such that first knot <= features <= last knot.

    @defaultValue `'uniform'`
   */
  knots?: 'uniform' | 'quantile' | ArrayLike[]

  /**
    If ‘error’, values outside the min and max values of the training features raises a `ValueError`. If ‘constant’, the value of the splines at minimum and maximum value of the features is used as constant extrapolation. If ‘linear’, a linear extrapolation is used. If ‘continue’, the splines are extrapolated as is, i.e. option `extrapolate=True` in [`scipy.interpolate.BSpline`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.BSpline.html#scipy.interpolate.BSpline "(in SciPy v1.10.1)"). If ‘periodic’, periodic splines with a periodicity equal to the distance between the first and last knot are used. Periodic splines enforce equal function values and derivatives at the first and last knot. For example, this makes it possible to avoid introducing an arbitrary jump between Dec 31st and Jan 1st in spline features derived from a naturally periodic “day-of-year” input feature. In this case it is recommended to manually set the knot values to control the period.

    @defaultValue `'constant'`
   */
  extrapolation?: 'error' | 'constant' | 'linear' | 'continue' | 'periodic'

  /**
    If `true` (default), then the last spline element inside the data range of a feature is dropped. As B-splines sum to one over the spline basis functions for each data point, they implicitly include a bias term, i.e. a column of ones. It acts as an intercept term in a linear models.

    @defaultValue `true`
   */
  include_bias?: boolean

  /**
    Order of output array. ‘F’ order is faster to compute, but may slow down subsequent estimators.

    @defaultValue `'C'`
   */
  order?: 'C' | 'F'
}

export interface SplineTransformerFitOptions {
  /**
    The data.
   */
  X?: ArrayLike[]

  /**
    Ignored.
   */
  y?: any

  /**
    Individual weights for each sample. Used to calculate quantiles if `knots="quantile"`. For `knots="uniform"`, zero weighted observations are ignored for finding the min and max of `X`.
   */
  sample_weight?: ArrayLike
}

export interface SplineTransformerFitTransformOptions {
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

export interface SplineTransformerGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface SplineTransformerSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SplineTransformerTransformOptions {
  /**
    The data to transform.
   */
  X?: ArrayLike[]
}
