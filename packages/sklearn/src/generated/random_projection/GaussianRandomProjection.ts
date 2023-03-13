/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Reduce dimensionality through Gaussian random projection.

  The components of the random matrix are drawn from N(0, 1 / n\_components).

  Read more in the [User Guide](../random_projection.html#gaussian-random-matrix).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.GaussianRandomProjection.html)
 */
export class GaussianRandomProjection {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Dimensionality of the target projection space.

      n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.

      It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.

      @defaultValue `'auto'`
     */
    n_components?: number | 'auto'

    /**
      Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when `n\_components` is set to ‘auto’. The value should be strictly positive.

      Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.

      @defaultValue `0.1`
     */
    eps?: number

    /**
      Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that computing the pseudo-inverse does not scale well to large matrices.

      @defaultValue `false`
     */
    compute_inverse_components?: boolean

    /**
      Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number
  }) {
    this.id = `GaussianRandomProjection${crypto.randomUUID().split('-')[0]}`
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
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'GaussianRandomProjection.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.random_projection import GaussianRandomProjection
try: bridgeGaussianRandomProjection
except NameError: bridgeGaussianRandomProjection = {}
`

    // set up constructor params
    await this._py.ex`ctor_GaussianRandomProjection = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'eps': ${this.opts['eps'] ?? undefined}, 'compute_inverse_components': ${
      this.opts['compute_inverse_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_GaussianRandomProjection = {k: v for k, v in ctor_GaussianRandomProjection.items() if v is not None}`

    await this._py
      .ex`bridgeGaussianRandomProjection[${this.id}] = GaussianRandomProjection(**ctor_GaussianRandomProjection)`

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

    await this._py.ex`del bridgeGaussianRandomProjection[${this.id}]`

    this._isDisposed = true
  }

  /**
    Generate a sparse random projection matrix.
   */
  async fit(opts: {
    /**
      Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers.
     */
    X?: NDArray | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GaussianRandomProjection must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GaussianRandomProjection_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GaussianRandomProjection_fit = {k: v for k, v in pms_GaussianRandomProjection_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_fit = bridgeGaussianRandomProjection[${this.id}].fit(**pms_GaussianRandomProjection_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_fit.tolist() if hasattr(res_GaussianRandomProjection_fit, 'tolist') else res_GaussianRandomProjection_fit`
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
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianRandomProjection_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_GaussianRandomProjection_fit_transform = {k: v for k, v in pms_GaussianRandomProjection_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_fit_transform = bridgeGaussianRandomProjection[${this.id}].fit_transform(**pms_GaussianRandomProjection_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_fit_transform.tolist() if hasattr(res_GaussianRandomProjection_fit_transform, 'tolist') else res_GaussianRandomProjection_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in [`fit`](#sklearn.random_projection.GaussianRandomProjection.fit "sklearn.random_projection.GaussianRandomProjection.fit").
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianRandomProjection_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_GaussianRandomProjection_get_feature_names_out = {k: v for k, v in pms_GaussianRandomProjection_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_get_feature_names_out = bridgeGaussianRandomProjection[${this.id}].get_feature_names_out(**pms_GaussianRandomProjection_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_get_feature_names_out.tolist() if hasattr(res_GaussianRandomProjection_get_feature_names_out, 'tolist') else res_GaussianRandomProjection_get_feature_names_out`
  }

  /**
    Project data back to its original space.

    Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

    If `compute\_inverse\_components` is `false`, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.
   */
  async inverse_transform(opts: {
    /**
      Data to be transformed back.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianRandomProjection_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianRandomProjection_inverse_transform = {k: v for k, v in pms_GaussianRandomProjection_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_inverse_transform = bridgeGaussianRandomProjection[${this.id}].inverse_transform(**pms_GaussianRandomProjection_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_inverse_transform.tolist() if hasattr(res_GaussianRandomProjection_inverse_transform, 'tolist') else res_GaussianRandomProjection_inverse_transform`
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
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_GaussianRandomProjection_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_GaussianRandomProjection_set_output = {k: v for k, v in pms_GaussianRandomProjection_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_set_output = bridgeGaussianRandomProjection[${this.id}].set_output(**pms_GaussianRandomProjection_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_set_output.tolist() if hasattr(res_GaussianRandomProjection_set_output, 'tolist') else res_GaussianRandomProjection_set_output`
  }

  /**
    Project the data by using matrix product with the random matrix.
   */
  async transform(opts: {
    /**
      The input data to project into a smaller dimensional space.
     */
    X?: NDArray | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_GaussianRandomProjection_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianRandomProjection_transform = {k: v for k, v in pms_GaussianRandomProjection_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianRandomProjection_transform = bridgeGaussianRandomProjection[${this.id}].transform(**pms_GaussianRandomProjection_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianRandomProjection_transform.tolist() if hasattr(res_GaussianRandomProjection_transform, 'tolist') else res_GaussianRandomProjection_transform`
  }

  /**
    Concrete number of components computed when n\_components=”auto”.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianRandomProjection_n_components_ = bridgeGaussianRandomProjection[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianRandomProjection_n_components_.tolist() if hasattr(attr_GaussianRandomProjection_n_components_, 'tolist') else attr_GaussianRandomProjection_n_components_`
    })()
  }

  /**
    Random matrix used for the projection.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianRandomProjection_components_ = bridgeGaussianRandomProjection[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianRandomProjection_components_.tolist() if hasattr(attr_GaussianRandomProjection_components_, 'tolist') else attr_GaussianRandomProjection_components_`
    })()
  }

  /**
    Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is `true`.
   */
  get inverse_components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before accessing inverse_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianRandomProjection_inverse_components_ = bridgeGaussianRandomProjection[${this.id}].inverse_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianRandomProjection_inverse_components_.tolist() if hasattr(attr_GaussianRandomProjection_inverse_components_, 'tolist') else attr_GaussianRandomProjection_inverse_components_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianRandomProjection_n_features_in_ = bridgeGaussianRandomProjection[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianRandomProjection_n_features_in_.tolist() if hasattr(attr_GaussianRandomProjection_n_features_in_, 'tolist') else attr_GaussianRandomProjection_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianRandomProjection must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianRandomProjection_feature_names_in_ = bridgeGaussianRandomProjection[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianRandomProjection_feature_names_in_.tolist() if hasattr(attr_GaussianRandomProjection_feature_names_in_, 'tolist') else attr_GaussianRandomProjection_feature_names_in_`
    })()
  }
}
