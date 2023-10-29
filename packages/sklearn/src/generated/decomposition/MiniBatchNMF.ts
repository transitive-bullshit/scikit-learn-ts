/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Mini-Batch Non-Negative Matrix Factorization (NMF).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)
 */
export class MiniBatchNMF {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of components, if `n\_components` is not set all features are kept.
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
      Beta divergence to be minimized, measuring the distance between `X` and the dot product `WH`. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for `beta\_loss <= 0` (or ‘itakura-saito’), the input matrix `X` cannot contain zeros.

      @defaultValue `'frobenius'`
     */
    beta_loss?: number | 'frobenius' | 'kullback-leibler' | 'itakura-saito'

    /**
      Control early stopping based on the norm of the differences in `H` between 2 steps. To disable early stopping based on changes in `H`, set `tol` to 0.0.

      @defaultValue `0.0001`
     */
    tol?: number

    /**
      Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

      @defaultValue `10`
     */
    max_no_improvement?: number

    /**
      Maximum number of iterations over the complete dataset before timing out.

      @defaultValue `200`
     */
    max_iter?: number

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
      Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by `tol`.

      @defaultValue `30`
     */
    fresh_restarts_max_iter?: number

    /**
      Maximum number of iterations when solving for W at transform time. If `undefined`, it defaults to `max\_iter`.
     */
    transform_max_iter?: number

    /**
      Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
     */
    random_state?: number

    /**
      Whether to be verbose.

      @defaultValue `false`
     */
    verbose?: boolean
  }) {
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
  async fit(opts: {
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
  }): Promise<any> {
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
  async fit_transform(opts: {
    /**
      Data matrix to be decomposed.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.
     */
    W?: ArrayLike[]

    /**
      If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.
     */
    H?: ArrayLike[]
  }): Promise<NDArray[]> {
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

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
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
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_MiniBatchNMF_get_metadata_routing = {k: v for k, v in pms_MiniBatchNMF_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_get_metadata_routing = bridgeMiniBatchNMF[${this.id}].get_metadata_routing(**pms_MiniBatchNMF_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_get_metadata_routing.tolist() if hasattr(res_MiniBatchNMF_get_metadata_routing, 'tolist') else res_MiniBatchNMF_get_metadata_routing`
  }

  /**
    Transform data back to its original space.
   */
  async inverse_transform(opts: {
    /**
      Transformed data matrix.
     */
    Xt?: NDArray | SparseMatrix[]

    /**
      Use `Xt` instead.
     */
    W?: any
  }): Promise<NDArray | SparseMatrix[]> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before inverse_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_inverse_transform = {'Xt': np.array(${
      opts['Xt'] ?? undefined
    }) if ${opts['Xt'] !== undefined} else None, 'W': ${opts['W'] ?? undefined}}

pms_MiniBatchNMF_inverse_transform = {k: v for k, v in pms_MiniBatchNMF_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_inverse_transform = bridgeMiniBatchNMF[${this.id}].inverse_transform(**pms_MiniBatchNMF_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_inverse_transform.tolist() if hasattr(res_MiniBatchNMF_inverse_transform, 'tolist') else res_MiniBatchNMF_inverse_transform`
  }

  /**
    Update the model using the data in `X` as a mini-batch.

    This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

    This is especially useful when the whole dataset is too big to fit in memory at once (see [Strategies to scale computationally: bigger data](../../computing/scaling_strategies.html#scaling-strategies)).
   */
  async partial_fit(opts: {
    /**
      Data matrix to be decomposed.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present here for API consistency by convention.
     */
    y?: any

    /**
      If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial\_fit`.
     */
    W?: ArrayLike[]

    /**
      If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial\_fit`.
     */
    H?: ArrayLike[]
  }): Promise<any> {
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

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
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
    Request metadata passed to the `partial\_fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_partial_fit_request(opts: {
    /**
      Metadata routing for `H` parameter in `partial\_fit`.
     */
    H?: string | boolean

    /**
      Metadata routing for `W` parameter in `partial\_fit`.
     */
    W?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MiniBatchNMF instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MiniBatchNMF must call init() before set_partial_fit_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_MiniBatchNMF_set_partial_fit_request = {'H': ${
      opts['H'] ?? undefined
    }, 'W': ${opts['W'] ?? undefined}}

pms_MiniBatchNMF_set_partial_fit_request = {k: v for k, v in pms_MiniBatchNMF_set_partial_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MiniBatchNMF_set_partial_fit_request = bridgeMiniBatchNMF[${this.id}].set_partial_fit_request(**pms_MiniBatchNMF_set_partial_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MiniBatchNMF_set_partial_fit_request.tolist() if hasattr(res_MiniBatchNMF_set_partial_fit_request, 'tolist') else res_MiniBatchNMF_set_partial_fit_request`
  }

  /**
    Transform the data X according to the fitted MiniBatchNMF model.
   */
  async transform(opts: {
    /**
      Data matrix to be transformed by the model.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
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
    The number of components. It is same as the `n\_components` parameter if it was given. Otherwise, it will be same as the number of features.
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
    Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.
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
    Number of features seen during [fit](../../glossary.html#term-fit).
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
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
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
