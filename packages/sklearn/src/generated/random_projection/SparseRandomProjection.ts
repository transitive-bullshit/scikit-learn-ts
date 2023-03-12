/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Reduce dimensionality through sparse random projection.

  Sparse random matrix is an alternative to dense random projection matrix that guarantees similar embedding quality while being much more memory efficient and allowing faster computation of the projected data.

  If we note `s \= 1 / density` the components of the random matrix are drawn from:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.random_projection.SparseRandomProjection.html
 */
export class SparseRandomProjection {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SparseRandomProjectionOptions) {
    this.id = `SparseRandomProjection${crypto.randomUUID().split('-')[0]}`
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
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'SparseRandomProjection.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.random_projection import SparseRandomProjection
try: bridgeSparseRandomProjection
except NameError: bridgeSparseRandomProjection = {}
`

    // set up constructor params
    await this._py.ex`ctor_SparseRandomProjection = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'density': ${this.opts['density'] ?? undefined}, 'eps': ${
      this.opts['eps'] ?? undefined
    }, 'dense_output': ${
      this.opts['dense_output'] ?? undefined
    }, 'compute_inverse_components': ${
      this.opts['compute_inverse_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_SparseRandomProjection = {k: v for k, v in ctor_SparseRandomProjection.items() if v is not None}`

    await this._py
      .ex`bridgeSparseRandomProjection[${this.id}] = SparseRandomProjection(**ctor_SparseRandomProjection)`

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

    await this._py.ex`del bridgeSparseRandomProjection[${this.id}]`

    this._isDisposed = true
  }

  /**
    Generate a sparse random projection matrix.
   */
  async fit(opts: SparseRandomProjectionFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('SparseRandomProjection must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SparseRandomProjection_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SparseRandomProjection_fit = {k: v for k, v in pms_SparseRandomProjection_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_fit = bridgeSparseRandomProjection[${this.id}].fit(**pms_SparseRandomProjection_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_fit.tolist() if hasattr(res_SparseRandomProjection_fit, 'tolist') else res_SparseRandomProjection_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: SparseRandomProjectionFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SparseRandomProjection_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SparseRandomProjection_fit_transform = {k: v for k, v in pms_SparseRandomProjection_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_fit_transform = bridgeSparseRandomProjection[${this.id}].fit_transform(**pms_SparseRandomProjection_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_fit_transform.tolist() if hasattr(res_SparseRandomProjection_fit_transform, 'tolist') else res_SparseRandomProjection_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: SparseRandomProjectionGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SparseRandomProjection_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SparseRandomProjection_get_feature_names_out = {k: v for k, v in pms_SparseRandomProjection_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_get_feature_names_out = bridgeSparseRandomProjection[${this.id}].get_feature_names_out(**pms_SparseRandomProjection_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_get_feature_names_out.tolist() if hasattr(res_SparseRandomProjection_get_feature_names_out, 'tolist') else res_SparseRandomProjection_get_feature_names_out`
  }

  /**
    Project data back to its original space.

    Returns an array X\_original whose transform would be X. Note that even if X is sparse, X\_original is dense: this may use a lot of RAM.

    If `compute\_inverse\_components` is False, the inverse of the components is computed during each call to `inverse\_transform` which can be costly.
   */
  async inverse_transform(
    opts: SparseRandomProjectionInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SparseRandomProjection_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SparseRandomProjection_inverse_transform = {k: v for k, v in pms_SparseRandomProjection_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_inverse_transform = bridgeSparseRandomProjection[${this.id}].inverse_transform(**pms_SparseRandomProjection_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_inverse_transform.tolist() if hasattr(res_SparseRandomProjection_inverse_transform, 'tolist') else res_SparseRandomProjection_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SparseRandomProjectionSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before set_output()'
      )
    }

    // set up method params
    await this._py.ex`pms_SparseRandomProjection_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SparseRandomProjection_set_output = {k: v for k, v in pms_SparseRandomProjection_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_set_output = bridgeSparseRandomProjection[${this.id}].set_output(**pms_SparseRandomProjection_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_set_output.tolist() if hasattr(res_SparseRandomProjection_set_output, 'tolist') else res_SparseRandomProjection_set_output`
  }

  /**
    Project the data by using matrix product with the random matrix.
   */
  async transform(
    opts: SparseRandomProjectionTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_SparseRandomProjection_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_SparseRandomProjection_transform = {k: v for k, v in pms_SparseRandomProjection_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseRandomProjection_transform = bridgeSparseRandomProjection[${this.id}].transform(**pms_SparseRandomProjection_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseRandomProjection_transform.tolist() if hasattr(res_SparseRandomProjection_transform, 'tolist') else res_SparseRandomProjection_transform`
  }

  /**
    Concrete number of components computed when n\_components=”auto”.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_n_components_ = bridgeSparseRandomProjection[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_n_components_.tolist() if hasattr(attr_SparseRandomProjection_n_components_, 'tolist') else attr_SparseRandomProjection_n_components_`
    })()
  }

  /**
    Random matrix used for the projection. Sparse matrix will be of CSR format.
   */
  get components_(): Promise<SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_components_ = bridgeSparseRandomProjection[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_components_.tolist() if hasattr(attr_SparseRandomProjection_components_, 'tolist') else attr_SparseRandomProjection_components_`
    })()
  }

  /**
    Pseudo-inverse of the components, only computed if `compute\_inverse\_components` is True.
   */
  get inverse_components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing inverse_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_inverse_components_ = bridgeSparseRandomProjection[${this.id}].inverse_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_inverse_components_.tolist() if hasattr(attr_SparseRandomProjection_inverse_components_, 'tolist') else attr_SparseRandomProjection_inverse_components_`
    })()
  }

  /**
    Concrete density computed from when density = “auto”.
   */
  get density_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing density_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_density_ = bridgeSparseRandomProjection[${this.id}].density_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_density_.tolist() if hasattr(attr_SparseRandomProjection_density_, 'tolist') else attr_SparseRandomProjection_density_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_n_features_in_ = bridgeSparseRandomProjection[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_n_features_in_.tolist() if hasattr(attr_SparseRandomProjection_n_features_in_, 'tolist') else attr_SparseRandomProjection_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This SparseRandomProjection instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseRandomProjection must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseRandomProjection_feature_names_in_ = bridgeSparseRandomProjection[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseRandomProjection_feature_names_in_.tolist() if hasattr(attr_SparseRandomProjection_feature_names_in_, 'tolist') else attr_SparseRandomProjection_feature_names_in_`
    })()
  }
}

export interface SparseRandomProjectionOptions {
  /**
    Dimensionality of the target projection space.

    n\_components can be automatically adjusted according to the number of samples in the dataset and the bound given by the Johnson-Lindenstrauss lemma. In that case the quality of the embedding is controlled by the `eps` parameter.

    It should be noted that Johnson-Lindenstrauss lemma can yield very conservative estimated of the required number of components as it makes no assumption on the structure of the dataset.

    @defaultValue `'auto'`
   */
  n_components?: number | 'auto'

  /**
    Ratio in the range (0, 1\] of non-zero component in the random projection matrix.

    If density = ‘auto’, the value is set to the minimum density as recommended by Ping Li et al.: 1 / sqrt(n\_features).

    Use density = 1 / 3.0 if you want to reproduce the results from Achlioptas, 2001.

    @defaultValue `'auto'`
   */
  density?: number | 'auto'

  /**
    Parameter to control the quality of the embedding according to the Johnson-Lindenstrauss lemma when n\_components is set to ‘auto’. This value should be strictly positive.

    Smaller values lead to better embedding and higher number of dimensions (n\_components) in the target projection space.

    @defaultValue `0.1`
   */
  eps?: number

  /**
    If True, ensure that the output of the random projection is a dense numpy array even if the input and random projection matrix are both sparse. In practice, if the number of components is small the number of zero components in the projected data will be very small and it will be more CPU and memory efficient to use a dense representation.

    If False, the projected data uses a sparse representation if the input is sparse.

    @defaultValue `false`
   */
  dense_output?: boolean

  /**
    Learn the inverse transform by computing the pseudo-inverse of the components during fit. Note that the pseudo-inverse is always a dense array, even if the training data was sparse. This means that it might be necessary to call `inverse\_transform` on a small batch of samples at a time to avoid exhausting the available memory on the host. Moreover, computing the pseudo-inverse does not scale well to large matrices.

    @defaultValue `false`
   */
  compute_inverse_components?: boolean

  /**
    Controls the pseudo random number generator used to generate the projection matrix at fit time. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface SparseRandomProjectionFitOptions {
  /**
    Training set: only the shape is used to find optimal random matrix dimensions based on the theory referenced in the afore mentioned papers.
   */
  X?: NDArray | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any
}

export interface SparseRandomProjectionFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface SparseRandomProjectionGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.random_projection.SparseRandomProjection.fit "sklearn.random_projection.SparseRandomProjection.fit").
   */
  input_features?: any
}

export interface SparseRandomProjectionInverseTransformOptions {
  /**
    Data to be transformed back.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface SparseRandomProjectionSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SparseRandomProjectionTransformOptions {
  /**
    The input data to project into a smaller dimensional space.
   */
  X?: NDArray | SparseMatrix[]
}
