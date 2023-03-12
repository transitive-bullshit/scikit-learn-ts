/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Sparse inverse covariance estimation with an l1-penalized estimator.

  Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html
 */
export class GraphicalLasso {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GraphicalLassoOptions) {
    this.id = `GraphicalLasso${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GraphicalLasso.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import GraphicalLasso
try: bridgeGraphicalLasso
except NameError: bridgeGraphicalLasso = {}
`

    // set up constructor params
    await this._py.ex`ctor_GraphicalLasso = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'mode': ${this.opts['mode'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'enet_tol': ${this.opts['enet_tol'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'assume_centered': ${
      this.opts['assume_centered'] ?? undefined
    }}

ctor_GraphicalLasso = {k: v for k, v in ctor_GraphicalLasso.items() if v is not None}`

    await this._py
      .ex`bridgeGraphicalLasso[${this.id}] = GraphicalLasso(**ctor_GraphicalLasso)`

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

    await this._py.ex`del bridgeGraphicalLasso[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the Mean Squared Error between two covariance estimators.
   */
  async error_norm(opts: GraphicalLassoErrorNormOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before error_norm()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLasso_error_norm = {'comp_cov': np.array(${
      opts['comp_cov'] ?? undefined
    }) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${
      opts['norm'] ?? undefined
    }, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${
      opts['squared'] ?? undefined
    }}

pms_GraphicalLasso_error_norm = {k: v for k, v in pms_GraphicalLasso_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_error_norm = bridgeGraphicalLasso[${this.id}].error_norm(**pms_GraphicalLasso_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_error_norm.tolist() if hasattr(res_GraphicalLasso_error_norm, 'tolist') else res_GraphicalLasso_error_norm`
  }

  /**
    Fit the GraphicalLasso model to X.
   */
  async fit(opts: GraphicalLassoFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLasso_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GraphicalLasso_fit = {k: v for k, v in pms_GraphicalLasso_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_fit = bridgeGraphicalLasso[${this.id}].fit(**pms_GraphicalLasso_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_fit.tolist() if hasattr(res_GraphicalLasso_fit, 'tolist') else res_GraphicalLasso_fit`
  }

  /**
    Getter for the precision matrix.
   */
  async get_precision(opts: GraphicalLassoGetPrecisionOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before get_precision()')
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLasso_get_precision = {'precision_': np.array(${
      opts['precision_'] ?? undefined
    }) if ${opts['precision_'] !== undefined} else None}

pms_GraphicalLasso_get_precision = {k: v for k, v in pms_GraphicalLasso_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_get_precision = bridgeGraphicalLasso[${this.id}].get_precision(**pms_GraphicalLasso_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_get_precision.tolist() if hasattr(res_GraphicalLasso_get_precision, 'tolist') else res_GraphicalLasso_get_precision`
  }

  /**
    Compute the squared Mahalanobis distances of given observations.
   */
  async mahalanobis(opts: GraphicalLassoMahalanobisOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before mahalanobis()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLasso_mahalanobis = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GraphicalLasso_mahalanobis = {k: v for k, v in pms_GraphicalLasso_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_mahalanobis = bridgeGraphicalLasso[${this.id}].mahalanobis(**pms_GraphicalLasso_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_mahalanobis.tolist() if hasattr(res_GraphicalLasso_mahalanobis, 'tolist') else res_GraphicalLasso_mahalanobis`
  }

  /**
    Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

    The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.
   */
  async score(opts: GraphicalLassoScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLasso must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLasso_score = {'X_test': np.array(${
      opts['X_test'] ?? undefined
    }) if ${opts['X_test'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }}

pms_GraphicalLasso_score = {k: v for k, v in pms_GraphicalLasso_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLasso_score = bridgeGraphicalLasso[${this.id}].score(**pms_GraphicalLasso_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLasso_score.tolist() if hasattr(res_GraphicalLasso_score, 'tolist') else res_GraphicalLasso_score`
  }

  /**
    Estimated location, i.e. the estimated mean.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_location_ = bridgeGraphicalLasso[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_location_.tolist() if hasattr(attr_GraphicalLasso_location_, 'tolist') else attr_GraphicalLasso_location_`
    })()
  }

  /**
    Estimated covariance matrix
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_covariance_ = bridgeGraphicalLasso[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_covariance_.tolist() if hasattr(attr_GraphicalLasso_covariance_, 'tolist') else attr_GraphicalLasso_covariance_`
    })()
  }

  /**
    Estimated pseudo inverse matrix.
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_precision_ = bridgeGraphicalLasso[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_precision_.tolist() if hasattr(attr_GraphicalLasso_precision_, 'tolist') else attr_GraphicalLasso_precision_`
    })()
  }

  /**
    Number of iterations run.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_n_iter_ = bridgeGraphicalLasso[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_n_iter_.tolist() if hasattr(attr_GraphicalLasso_n_iter_, 'tolist') else attr_GraphicalLasso_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_n_features_in_ = bridgeGraphicalLasso[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_n_features_in_.tolist() if hasattr(attr_GraphicalLasso_n_features_in_, 'tolist') else attr_GraphicalLasso_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This GraphicalLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLasso must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLasso_feature_names_in_ = bridgeGraphicalLasso[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLasso_feature_names_in_.tolist() if hasattr(attr_GraphicalLasso_feature_names_in_, 'tolist') else attr_GraphicalLasso_feature_names_in_`
    })()
  }
}

export interface GraphicalLassoOptions {
  /**
    The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].

    @defaultValue `0.01`
   */
  alpha?: number

  /**
    The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.

    @defaultValue `'cd'`
   */
  mode?: 'cd' | 'lars'

  /**
    The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

    @defaultValue `0.0001`
   */
  enet_tol?: number

  /**
    The maximum number of iterations.

    @defaultValue `100`
   */
  max_iter?: number

  /**
    If verbose is True, the objective function and dual gap are plotted at each iteration.

    @defaultValue `false`
   */
  verbose?: boolean

  /**
    If True, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If False, data are centered before computation.

    @defaultValue `false`
   */
  assume_centered?: boolean
}

export interface GraphicalLassoErrorNormOptions {
  /**
    The covariance to compare with.
   */
  comp_cov?: ArrayLike[]

  /**
    The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

    @defaultValue `'frobenius'`
   */
  norm?: 'frobenius' | 'spectral'

  /**
    If True (default), the squared error norm is divided by n\_features. If False, the squared error norm is not rescaled.

    @defaultValue `true`
   */
  scaling?: boolean

  /**
    Whether to compute the squared error norm or the error norm. If True (default), the squared error norm is returned. If False, the error norm is returned.

    @defaultValue `true`
   */
  squared?: boolean
}

export interface GraphicalLassoFitOptions {
  /**
    Data from which to compute the covariance estimate.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface GraphicalLassoGetPrecisionOptions {
  /**
    The precision matrix associated to the current covariance object.
   */
  precision_?: ArrayLike[]
}

export interface GraphicalLassoMahalanobisOptions {
  /**
    The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.
   */
  X?: ArrayLike[]
}

export interface GraphicalLassoScoreOptions {
  /**
    Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).
   */
  X_test?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
