/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

  See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

  Read more in the [User Guide](../covariance.html#sparse-inverse-covariance).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html
 */
export class GraphicalLassoCV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GraphicalLassoCVOptions) {
    this.id = `GraphicalLassoCV${crypto.randomUUID().split('-')[0]}`
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
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('GraphicalLassoCV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import GraphicalLassoCV
try: bridgeGraphicalLassoCV
except NameError: bridgeGraphicalLassoCV = {}
`

    // set up constructor params
    await this._py.ex`ctor_GraphicalLassoCV = {'alphas': np.array(${
      this.opts['alphas'] ?? undefined
    }) if ${this.opts['alphas'] !== undefined} else None, 'n_refinements': ${
      this.opts['n_refinements'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'enet_tol': ${this.opts['enet_tol'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'mode': ${this.opts['mode'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'assume_centered': ${
      this.opts['assume_centered'] ?? undefined
    }}

ctor_GraphicalLassoCV = {k: v for k, v in ctor_GraphicalLassoCV.items() if v is not None}`

    await this._py
      .ex`bridgeGraphicalLassoCV[${this.id}] = GraphicalLassoCV(**ctor_GraphicalLassoCV)`

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

    await this._py.ex`del bridgeGraphicalLassoCV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the Mean Squared Error between two covariance estimators.
   */
  async error_norm(opts: GraphicalLassoCVErrorNormOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLassoCV must call init() before error_norm()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLassoCV_error_norm = {'comp_cov': np.array(${
      opts['comp_cov'] ?? undefined
    }) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${
      opts['norm'] ?? undefined
    }, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${
      opts['squared'] ?? undefined
    }}

pms_GraphicalLassoCV_error_norm = {k: v for k, v in pms_GraphicalLassoCV_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLassoCV_error_norm = bridgeGraphicalLassoCV[${this.id}].error_norm(**pms_GraphicalLassoCV_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLassoCV_error_norm.tolist() if hasattr(res_GraphicalLassoCV_error_norm, 'tolist') else res_GraphicalLassoCV_error_norm`
  }

  /**
    Fit the GraphicalLasso covariance model to X.
   */
  async fit(opts: GraphicalLassoCVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLassoCV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLassoCV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_GraphicalLassoCV_fit = {k: v for k, v in pms_GraphicalLassoCV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLassoCV_fit = bridgeGraphicalLassoCV[${this.id}].fit(**pms_GraphicalLassoCV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLassoCV_fit.tolist() if hasattr(res_GraphicalLassoCV_fit, 'tolist') else res_GraphicalLassoCV_fit`
  }

  /**
    Getter for the precision matrix.
   */
  async get_precision(opts: GraphicalLassoCVGetPrecisionOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before get_precision()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GraphicalLassoCV_get_precision = {'precision_': np.array(${
      opts['precision_'] ?? undefined
    }) if ${opts['precision_'] !== undefined} else None}

pms_GraphicalLassoCV_get_precision = {k: v for k, v in pms_GraphicalLassoCV_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLassoCV_get_precision = bridgeGraphicalLassoCV[${this.id}].get_precision(**pms_GraphicalLassoCV_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLassoCV_get_precision.tolist() if hasattr(res_GraphicalLassoCV_get_precision, 'tolist') else res_GraphicalLassoCV_get_precision`
  }

  /**
    Compute the squared Mahalanobis distances of given observations.
   */
  async mahalanobis(
    opts: GraphicalLassoCVMahalanobisOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLassoCV must call init() before mahalanobis()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLassoCV_mahalanobis = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GraphicalLassoCV_mahalanobis = {k: v for k, v in pms_GraphicalLassoCV_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLassoCV_mahalanobis = bridgeGraphicalLassoCV[${this.id}].mahalanobis(**pms_GraphicalLassoCV_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLassoCV_mahalanobis.tolist() if hasattr(res_GraphicalLassoCV_mahalanobis, 'tolist') else res_GraphicalLassoCV_mahalanobis`
  }

  /**
    Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

    The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.
   */
  async score(opts: GraphicalLassoCVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GraphicalLassoCV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_GraphicalLassoCV_score = {'X_test': np.array(${
      opts['X_test'] ?? undefined
    }) if ${opts['X_test'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }}

pms_GraphicalLassoCV_score = {k: v for k, v in pms_GraphicalLassoCV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GraphicalLassoCV_score = bridgeGraphicalLassoCV[${this.id}].score(**pms_GraphicalLassoCV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GraphicalLassoCV_score.tolist() if hasattr(res_GraphicalLassoCV_score, 'tolist') else res_GraphicalLassoCV_score`
  }

  /**
    Estimated location, i.e. the estimated mean.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_location_ = bridgeGraphicalLassoCV[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_location_.tolist() if hasattr(attr_GraphicalLassoCV_location_, 'tolist') else attr_GraphicalLassoCV_location_`
    })()
  }

  /**
    Estimated covariance matrix.
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_covariance_ = bridgeGraphicalLassoCV[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_covariance_.tolist() if hasattr(attr_GraphicalLassoCV_covariance_, 'tolist') else attr_GraphicalLassoCV_covariance_`
    })()
  }

  /**
    Estimated precision matrix (inverse covariance).
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing precision_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_precision_ = bridgeGraphicalLassoCV[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_precision_.tolist() if hasattr(attr_GraphicalLassoCV_precision_, 'tolist') else attr_GraphicalLassoCV_precision_`
    })()
  }

  /**
    Penalization parameter selected.
   */
  get alpha_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing alpha_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_alpha_ = bridgeGraphicalLassoCV[${this.id}].alpha_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_alpha_.tolist() if hasattr(attr_GraphicalLassoCV_alpha_, 'tolist') else attr_GraphicalLassoCV_alpha_`
    })()
  }

  /**
    A dict with keys:
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing cv_results_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_cv_results_ = bridgeGraphicalLassoCV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_cv_results_.tolist() if hasattr(attr_GraphicalLassoCV_cv_results_, 'tolist') else attr_GraphicalLassoCV_cv_results_`
    })()
  }

  /**
    Number of iterations run for the optimal alpha.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_n_iter_ = bridgeGraphicalLassoCV[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_n_iter_.tolist() if hasattr(attr_GraphicalLassoCV_n_iter_, 'tolist') else attr_GraphicalLassoCV_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_n_features_in_ = bridgeGraphicalLassoCV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_n_features_in_.tolist() if hasattr(attr_GraphicalLassoCV_n_features_in_, 'tolist') else attr_GraphicalLassoCV_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GraphicalLassoCV instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GraphicalLassoCV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GraphicalLassoCV_feature_names_in_ = bridgeGraphicalLassoCV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GraphicalLassoCV_feature_names_in_.tolist() if hasattr(attr_GraphicalLassoCV_feature_names_in_, 'tolist') else attr_GraphicalLassoCV_feature_names_in_`
    })()
  }
}

export interface GraphicalLassoCVOptions {
  /**
    If an integer is given, it fixes the number of points on the grids of alpha to be used. If a list is given, it gives the grid to be used. See the notes in the class docstring for more details. Range is \[1, inf) for an integer. Range is (0, inf\] for an array-like of floats.

    @defaultValue `4`
   */
  alphas?: number | ArrayLike

  /**
    The number of times the grid is refined. Not used if explicit values of alphas are passed. Range is \[1, inf).

    @defaultValue `4`
   */
  n_refinements?: number

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

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
    Maximum number of iterations.

    @defaultValue `100`
   */
  max_iter?: number

  /**
    The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where number of features is greater than number of samples. Elsewhere prefer cd which is more numerically stable.

    @defaultValue `'cd'`
   */
  mode?: 'cd' | 'lars'

  /**
    Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    If verbose is `true`, the objective function and duality gap are printed at each iteration.

    @defaultValue `false`
   */
  verbose?: boolean

  /**
    If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

    @defaultValue `false`
   */
  assume_centered?: boolean
}

export interface GraphicalLassoCVErrorNormOptions {
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
    If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

    @defaultValue `true`
   */
  scaling?: boolean

  /**
    Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

    @defaultValue `true`
   */
  squared?: boolean
}

export interface GraphicalLassoCVFitOptions {
  /**
    Data from which to compute the covariance estimate.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface GraphicalLassoCVGetPrecisionOptions {
  /**
    The precision matrix associated to the current covariance object.
   */
  precision_?: ArrayLike[]
}

export interface GraphicalLassoCVMahalanobisOptions {
  /**
    The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.
   */
  X?: ArrayLike[]
}

export interface GraphicalLassoCVScoreOptions {
  /**
    Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).
   */
  X_test?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
