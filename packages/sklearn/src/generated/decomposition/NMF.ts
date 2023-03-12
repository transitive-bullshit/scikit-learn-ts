/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Non-Negative Matrix Factorization (NMF).

  Find two non-negative matrices, i.e. matrices with all non-negative elements, (W, H) whose product approximates the non-negative matrix X. This factorization can be used for example for dimensionality reduction, source separation or topic extraction.

  The objective function is:

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html)
 */
export class NMF {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NMFOptions) {
    this.id = `NMF${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This NMF instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('NMF.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import NMF
try: bridgeNMF
except NameError: bridgeNMF = {}
`

    // set up constructor params
    await this._py.ex`ctor_NMF = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'init': ${this.opts['init'] ?? undefined}, 'solver': ${
      this.opts['solver'] ?? undefined
    }, 'beta_loss': ${this.opts['beta_loss'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'alpha_W': ${this.opts['alpha_W'] ?? undefined}, 'alpha_H': ${
      this.opts['alpha_H'] ?? undefined
    }, 'l1_ratio': ${this.opts['l1_ratio'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}}

ctor_NMF = {k: v for k, v in ctor_NMF.items() if v is not None}`

    await this._py.ex`bridgeNMF[${this.id}] = NMF(**ctor_NMF)`

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

    await this._py.ex`del bridgeNMF[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn a NMF model for the data X.
   */
  async fit(opts: NMFFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_NMF_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'params': ${opts['params'] ?? undefined}}

pms_NMF_fit = {k: v for k, v in pms_NMF_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_NMF_fit = bridgeNMF[${this.id}].fit(**pms_NMF_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_fit.tolist() if hasattr(res_NMF_fit, 'tolist') else res_NMF_fit`
  }

  /**
    Learn a NMF model for the data X and returns the transformed data.

    This is more efficient than calling fit followed by transform.
   */
  async fit_transform(opts: NMFFitTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_NMF_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'W': np.array(${opts['W'] ?? undefined}) if ${
      opts['W'] !== undefined
    } else None, 'H': np.array(${opts['H'] ?? undefined}) if ${
      opts['H'] !== undefined
    } else None}

pms_NMF_fit_transform = {k: v for k, v in pms_NMF_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NMF_fit_transform = bridgeNMF[${this.id}].fit_transform(**pms_NMF_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_fit_transform.tolist() if hasattr(res_NMF_fit_transform, 'tolist') else res_NMF_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: NMFGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_NMF_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_NMF_get_feature_names_out = {k: v for k, v in pms_NMF_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NMF_get_feature_names_out = bridgeNMF[${this.id}].get_feature_names_out(**pms_NMF_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_get_feature_names_out.tolist() if hasattr(res_NMF_get_feature_names_out, 'tolist') else res_NMF_get_feature_names_out`
  }

  /**
    Transform data back to its original space.
   */
  async inverse_transform(
    opts: NMFInverseTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_NMF_inverse_transform = {'W': np.array(${
      opts['W'] ?? undefined
    }) if ${opts['W'] !== undefined} else None}

pms_NMF_inverse_transform = {k: v for k, v in pms_NMF_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NMF_inverse_transform = bridgeNMF[${this.id}].inverse_transform(**pms_NMF_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_inverse_transform.tolist() if hasattr(res_NMF_inverse_transform, 'tolist') else res_NMF_inverse_transform`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: NMFSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_NMF_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_NMF_set_output = {k: v for k, v in pms_NMF_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NMF_set_output = bridgeNMF[${this.id}].set_output(**pms_NMF_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_set_output.tolist() if hasattr(res_NMF_set_output, 'tolist') else res_NMF_set_output`
  }

  /**
    Transform the data X according to the fitted NMF model.
   */
  async transform(opts: NMFTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_NMF_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_NMF_transform = {k: v for k, v in pms_NMF_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_NMF_transform = bridgeNMF[${this.id}].transform(**pms_NMF_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_NMF_transform.tolist() if hasattr(res_NMF_transform, 'tolist') else res_NMF_transform`
  }

  /**
    Factorization matrix, sometimes called ‘dictionary’.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NMF_components_ = bridgeNMF[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_components_.tolist() if hasattr(attr_NMF_components_, 'tolist') else attr_NMF_components_`
    })()
  }

  /**
    The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before accessing n_components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NMF_n_components_ = bridgeNMF[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_n_components_.tolist() if hasattr(attr_NMF_n_components_, 'tolist') else attr_NMF_n_components_`
    })()
  }

  /**
    Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.
   */
  get reconstruction_err_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'NMF must call init() before accessing reconstruction_err_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NMF_reconstruction_err_ = bridgeNMF[${this.id}].reconstruction_err_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_reconstruction_err_.tolist() if hasattr(attr_NMF_reconstruction_err_, 'tolist') else attr_NMF_reconstruction_err_`
    })()
  }

  /**
    Actual number of iterations.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_NMF_n_iter_ = bridgeNMF[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_n_iter_.tolist() if hasattr(attr_NMF_n_iter_, 'tolist') else attr_NMF_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NMF_n_features_in_ = bridgeNMF[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_n_features_in_.tolist() if hasattr(attr_NMF_n_features_in_, 'tolist') else attr_NMF_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This NMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('NMF must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_NMF_feature_names_in_ = bridgeNMF[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_NMF_feature_names_in_.tolist() if hasattr(attr_NMF_feature_names_in_, 'tolist') else attr_NMF_feature_names_in_`
    })()
  }
}

export interface NMFOptions {
  /**
    Number of components, if n\_components is not set all features are kept.
   */
  n_components?: number

  /**
    Method used to initialize the procedure. Valid options:
   */
  init?: 'random' | 'nndsvd' | 'nndsvda' | 'nndsvdar' | 'custom'

  /**
    Numerical solver to use:

    @defaultValue `'cd'`
   */
  solver?: 'cd' | 'mu'

  /**
    Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta\_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros. Used only in ‘mu’ solver.

    @defaultValue `'frobenius'`
   */
  beta_loss?: number | 'frobenius' | 'kullback-leibler' | 'itakura-saito'

  /**
    Tolerance of the stopping condition.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Maximum number of iterations before timing out.

    @defaultValue `200`
   */
  max_iter?: number

  /**
    Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

    @defaultValue `0`
   */
  alpha_W?: number

  /**
    Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha\_W`.

    @defaultValue `'same'`
   */
  alpha_H?: number | 'same'

  /**
    The regularization mixing parameter, with 0 <= l1\_ratio <= 1. For l1\_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1\_ratio = 1 it is an elementwise L1 penalty. For 0 < l1\_ratio < 1, the penalty is a combination of L1 and L2.

    @defaultValue `0`
   */
  l1_ratio?: number

  /**
    Whether to be verbose.

    @defaultValue `0`
   */
  verbose?: number

  /**
    If true, randomize the order of coordinates in the CD solver.

    @defaultValue `false`
   */
  shuffle?: boolean
}

export interface NMFFitOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    Parameters (keyword arguments) and values passed to the fit\_transform instance.
   */
  params?: any
}

export interface NMFFitTransformOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    If init=’custom’, it is used as initial guess for the solution.
   */
  W?: ArrayLike[]

  /**
    If init=’custom’, it is used as initial guess for the solution.
   */
  H?: ArrayLike[]
}

export interface NMFGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.NMF.fit "sklearn.decomposition.NMF.fit").
   */
  input_features?: any
}

export interface NMFInverseTransformOptions {
  /**
    Transformed data matrix.
   */
  W?: NDArray | SparseMatrix[]
}

export interface NMFSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface NMFTransformOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]
}
