/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mini-Batch Non-Negative Matrix Factorization (NMF).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html
 */
export class MiniBatchNMF {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MiniBatchNMFOptions) {
    this.id = `MiniBatchNMF${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MiniBatchNMF.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import MiniBatchNMF
try: bridgeMiniBatchNMF
except NameError: bridgeMiniBatchNMF = {}
`

    // set up constructor params
    await this._py.ex`ctor_MiniBatchNMF = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'init': ${this.opts['init'] ?? undefined}, 'batch_size': ${
      this.opts['batch_size'] ?? undefined
    }, 'beta_loss': ${this.opts['beta_loss'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_no_improvement': ${
      this.opts['max_no_improvement'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'alpha_W': ${
      this.opts['alpha_W'] ?? undefined
    }, 'alpha_H': ${this.opts['alpha_H'] ?? undefined}, 'l1_ratio': ${
      this.opts['l1_ratio'] ?? undefined
    }, 'forget_factor': ${
      this.opts['forget_factor'] ?? undefined
    }, 'fresh_restarts': ${
      this.opts['fresh_restarts'] ?? undefined
    }, 'fresh_restarts_max_iter': ${
      this.opts['fresh_restarts_max_iter'] ?? undefined
    }, 'transform_max_iter': ${
      this.opts['transform_max_iter'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }}

ctor_MiniBatchNMF = {k: v for k, v in ctor_MiniBatchNMF.items() if v is not None}`

    await this._py
      .ex`bridgeMiniBatchNMF[${this.id}] = MiniBatchNMF(**ctor_MiniBatchNMF)`

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

    await this._py.ex`del bridgeMiniBatchNMF[${this.id}]`

    this._isDisposed = true
  }

  /**
    Learn a NMF model for the data X.
   */
  async fit(opts: MiniBatchNMFFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'params': ${opts['params'] ?? undefined}}

pms_MiniBatchNMF_fit = {k: v for k, v in pms_MiniBatchNMF_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_fit = bridgeMiniBatchNMF[${this.id}].fit(**pms_MiniBatchNMF_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_fit.tolist() if hasattr(res_MiniBatchNMF_fit, 'tolist') else res_MiniBatchNMF_fit`
  }

  /**
    Learn a NMF model for the data X and returns the transformed data.

    This is more efficient than calling fit followed by transform.
   */
  async fit_transform(
    opts: MiniBatchNMFFitTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'W': np.array(${opts['W'] ?? undefined}) if ${
      opts['W'] !== undefined
    } else None, 'H': np.array(${opts['H'] ?? undefined}) if ${
      opts['H'] !== undefined
    } else None}

pms_MiniBatchNMF_fit_transform = {k: v for k, v in pms_MiniBatchNMF_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_fit_transform = bridgeMiniBatchNMF[${this.id}].fit_transform(**pms_MiniBatchNMF_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_fit_transform.tolist() if hasattr(res_MiniBatchNMF_fit_transform, 'tolist') else res_MiniBatchNMF_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: MiniBatchNMFGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MiniBatchNMF_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_MiniBatchNMF_get_feature_names_out = {k: v for k, v in pms_MiniBatchNMF_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_get_feature_names_out = bridgeMiniBatchNMF[${this.id}].get_feature_names_out(**pms_MiniBatchNMF_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_get_feature_names_out.tolist() if hasattr(res_MiniBatchNMF_get_feature_names_out, 'tolist') else res_MiniBatchNMF_get_feature_names_out`
  }

  /**
    Transform data back to its original space.
   */
  async inverse_transform(
    opts: MiniBatchNMFInverseTransformOptions
  ): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_inverse_transform = {'W': np.array(${
      opts['W'] ?? undefined
    }) if ${opts['W'] !== undefined} else None}

pms_MiniBatchNMF_inverse_transform = {k: v for k, v in pms_MiniBatchNMF_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_inverse_transform = bridgeMiniBatchNMF[${this.id}].inverse_transform(**pms_MiniBatchNMF_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_inverse_transform.tolist() if hasattr(res_MiniBatchNMF_inverse_transform, 'tolist') else res_MiniBatchNMF_inverse_transform`
  }

  /**
    Update the model using the data in X as a mini-batch.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once (see Strategies to scale computationally: bigger data).
   */
  async partial_fit(opts: MiniBatchNMFPartialFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'W': np.array(${opts['W'] ?? undefined}) if ${
      opts['W'] !== undefined
    } else None, 'H': np.array(${opts['H'] ?? undefined}) if ${
      opts['H'] !== undefined
    } else None}

pms_MiniBatchNMF_partial_fit = {k: v for k, v in pms_MiniBatchNMF_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_partial_fit = bridgeMiniBatchNMF[${this.id}].partial_fit(**pms_MiniBatchNMF_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_partial_fit.tolist() if hasattr(res_MiniBatchNMF_partial_fit, 'tolist') else res_MiniBatchNMF_partial_fit`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: MiniBatchNMFSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_MiniBatchNMF_set_output = {k: v for k, v in pms_MiniBatchNMF_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_set_output = bridgeMiniBatchNMF[${this.id}].set_output(**pms_MiniBatchNMF_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_set_output.tolist() if hasattr(res_MiniBatchNMF_set_output, 'tolist') else res_MiniBatchNMF_set_output`
  }

  /**
    Transform the data X according to the fitted MiniBatchNMF model.
   */
  async transform(opts: MiniBatchNMFTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MiniBatchNMF_transform = {k: v for k, v in pms_MiniBatchNMF_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_transform = bridgeMiniBatchNMF[${this.id}].transform(**pms_MiniBatchNMF_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_transform.tolist() if hasattr(res_MiniBatchNMF_transform, 'tolist') else res_MiniBatchNMF_transform`
  }

  /**
    Factorization matrix, sometimes called ‘dictionary’.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_components_ = bridgeMiniBatchNMF[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_components_.tolist() if hasattr(attr_MiniBatchNMF_components_, 'tolist') else attr_MiniBatchNMF_components_`
    })()
  }

  /**
    The number of components. It is same as the n_components parameter if it was given. Otherwise, it will be same as the number of features.
   */
  get n_components_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before accessing n_components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_n_components_ = bridgeMiniBatchNMF[${this.id}].n_components_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_n_components_.tolist() if hasattr(attr_MiniBatchNMF_n_components_, 'tolist') else attr_MiniBatchNMF_n_components_`
    })()
  }

  /**
    Frobenius norm of the matrix difference, or beta-divergence, between the training data X and the reconstructed data WH from the fitted model.
   */
  get reconstruction_err_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before accessing reconstruction_err_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_reconstruction_err_ = bridgeMiniBatchNMF[${this.id}].reconstruction_err_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_reconstruction_err_.tolist() if hasattr(attr_MiniBatchNMF_reconstruction_err_, 'tolist') else attr_MiniBatchNMF_reconstruction_err_`
    })()
  }

  /**
    Actual number of started iterations over the whole dataset.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_n_iter_ = bridgeMiniBatchNMF[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_n_iter_.tolist() if hasattr(attr_MiniBatchNMF_n_iter_, 'tolist') else attr_MiniBatchNMF_n_iter_`
    })()
  }

  /**
    Number of mini-batches processed.
   */
  get n_steps_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MiniBatchNMF must call init() before accessing n_steps_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_n_steps_ = bridgeMiniBatchNMF[${this.id}].n_steps_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_n_steps_.tolist() if hasattr(attr_MiniBatchNMF_n_steps_, 'tolist') else attr_MiniBatchNMF_n_steps_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_n_features_in_ = bridgeMiniBatchNMF[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_n_features_in_.tolist() if hasattr(attr_MiniBatchNMF_n_features_in_, 'tolist') else attr_MiniBatchNMF_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MiniBatchNMF_feature_names_in_ = bridgeMiniBatchNMF[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MiniBatchNMF_feature_names_in_.tolist() if hasattr(attr_MiniBatchNMF_feature_names_in_, 'tolist') else attr_MiniBatchNMF_feature_names_in_`
    })()
  }
}

export interface MiniBatchNMFOptions {
  /**
    Number of components, if n_components is not set all features are kept.
   */
  n_components?: number

  /**
    Method used to initialize the procedure. Valid options:
   */
  init?: 'random' | 'nndsvd' | 'nndsvda' | 'nndsvdar' | 'custom'

  /**
    Number of samples in each mini-batch. Large batch sizes give better long-term convergence at the cost of a slower start.

    @defaultValue `1024`
   */
  batch_size?: number

  /**
    Beta divergence to be minimized, measuring the distance between X and the dot product WH. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for beta_loss <= 0 (or ‘itakura-saito’), the input matrix X cannot contain zeros.

    @defaultValue `'frobenius'`
   */
  beta_loss?: number | 'frobenius' | 'kullback-leibler' | 'itakura-saito'

  /**
    Control early stopping based on the norm of the differences in H between 2 steps. To disable early stopping based on changes in H, set tol to 0.0.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set max_no_improvement to None.

    @defaultValue `10`
   */
  max_no_improvement?: number

  /**
    Maximum number of iterations over the complete dataset before timing out.

    @defaultValue `200`
   */
  max_iter?: number

  /**
    Constant that multiplies the regularization terms of W. Set it to zero (default) to have no regularization on W.

    @defaultValue `0`
   */
  alpha_W?: number

  /**
    Constant that multiplies the regularization terms of H. Set it to zero to have no regularization on H. If “same” (default), it takes the same value as alpha_W.

    @defaultValue `'same'`
   */
  alpha_H?: number | 'same'

  /**
    The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.

    @defaultValue `0`
   */
  l1_ratio?: number

  /**
    Amount of rescaling of past information. Its value could be 1 with finite datasets. Choosing values < 1 is recommended with online learning as more recent batches will weight more than past batches.

    @defaultValue `0.7`
   */
  forget_factor?: number

  /**
    Whether to completely solve for W at each step. Doing fresh restarts will likely lead to a better solution for a same number of iterations but it is much slower.

    @defaultValue `false`
   */
  fresh_restarts?: boolean

  /**
    Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by tol.

    @defaultValue `30`
   */
  fresh_restarts_max_iter?: number

  /**
    Maximum number of iterations when solving for W at transform time. If None, it defaults to max_iter.
   */
  transform_max_iter?: number

  /**
    Used for initialisation (when init == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    Whether to be verbose.

    @defaultValue `false`
   */
  verbose?: boolean
}

export interface MiniBatchNMFFitOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    Parameters (keyword arguments) and values passed to the fit_transform instance.
   */
  params?: any
}

export interface MiniBatchNMFFitTransformOptions {
  /**
    Data matrix to be decomposed.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    If init='custom', it is used as initial guess for the solution.
   */
  W?: ArrayLike[]

  /**
    If init='custom', it is used as initial guess for the solution.
   */
  H?: ArrayLike[]
}

export interface MiniBatchNMFGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface MiniBatchNMFInverseTransformOptions {
  /**
    Transformed data matrix.
   */
  W?: NDArray | SparseMatrix[]
}

export interface MiniBatchNMFPartialFitOptions {
  /**
    Data matrix to be decomposed.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present here for API consistency by convention.
   */
  y?: any

  /**
    If init='custom', it is used as initial guess for the solution. Only used for the first call to partial_fit.
   */
  W?: ArrayLike[]

  /**
    If init='custom', it is used as initial guess for the solution. Only used for the first call to partial_fit.
   */
  H?: ArrayLike[]
}

export interface MiniBatchNMFSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface MiniBatchNMFTransformOptions {
  /**
    Data matrix to be transformed by the model.
   */
  X?: ArrayLike | SparseMatrix[]
}
