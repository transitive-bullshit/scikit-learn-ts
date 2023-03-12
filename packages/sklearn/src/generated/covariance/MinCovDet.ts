/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Minimum Covariance Determinant (MCD): robust estimator of covariance.

  The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

  Read more in the [User Guide](../covariance.html#robust-covariance).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html
 */
export class MinCovDet {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MinCovDetOptions) {
    this.id = `MinCovDet${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MinCovDet.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.covariance import MinCovDet
try: bridgeMinCovDet
except NameError: bridgeMinCovDet = {}
`

    // set up constructor params
    await this._py.ex`ctor_MinCovDet = {'store_precision': ${
      this.opts['store_precision'] ?? undefined
    }, 'assume_centered': ${
      this.opts['assume_centered'] ?? undefined
    }, 'support_fraction': ${
      this.opts['support_fraction'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}}

ctor_MinCovDet = {k: v for k, v in ctor_MinCovDet.items() if v is not None}`

    await this._py.ex`bridgeMinCovDet[${this.id}] = MinCovDet(**ctor_MinCovDet)`

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

    await this._py.ex`del bridgeMinCovDet[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply a correction to raw Minimum Covariance Determinant estimates.

    Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#r491365aeaa84-rvd).
   */
  async correct_covariance(
    opts: MinCovDetCorrectCovarianceOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before correct_covariance()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_correct_covariance = {'data': np.array(${
      opts['data'] ?? undefined
    }) if ${opts['data'] !== undefined} else None}

pms_MinCovDet_correct_covariance = {k: v for k, v in pms_MinCovDet_correct_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_correct_covariance = bridgeMinCovDet[${this.id}].correct_covariance(**pms_MinCovDet_correct_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_correct_covariance.tolist() if hasattr(res_MinCovDet_correct_covariance, 'tolist') else res_MinCovDet_correct_covariance`
  }

  /**
    Compute the Mean Squared Error between two covariance estimators.
   */
  async error_norm(opts: MinCovDetErrorNormOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before error_norm()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_error_norm = {'comp_cov': np.array(${
      opts['comp_cov'] ?? undefined
    }) if ${opts['comp_cov'] !== undefined} else None, 'norm': ${
      opts['norm'] ?? undefined
    }, 'scaling': ${opts['scaling'] ?? undefined}, 'squared': ${
      opts['squared'] ?? undefined
    }}

pms_MinCovDet_error_norm = {k: v for k, v in pms_MinCovDet_error_norm.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_error_norm = bridgeMinCovDet[${this.id}].error_norm(**pms_MinCovDet_error_norm)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_error_norm.tolist() if hasattr(res_MinCovDet_error_norm, 'tolist') else res_MinCovDet_error_norm`
  }

  /**
    Fit a Minimum Covariance Determinant with the FastMCD algorithm.
   */
  async fit(opts: MinCovDetFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_MinCovDet_fit = {k: v for k, v in pms_MinCovDet_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_fit = bridgeMinCovDet[${this.id}].fit(**pms_MinCovDet_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_fit.tolist() if hasattr(res_MinCovDet_fit, 'tolist') else res_MinCovDet_fit`
  }

  /**
    Getter for the precision matrix.
   */
  async get_precision(opts: MinCovDetGetPrecisionOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before get_precision()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_get_precision = {'precision_': np.array(${
      opts['precision_'] ?? undefined
    }) if ${opts['precision_'] !== undefined} else None}

pms_MinCovDet_get_precision = {k: v for k, v in pms_MinCovDet_get_precision.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_get_precision = bridgeMinCovDet[${this.id}].get_precision(**pms_MinCovDet_get_precision)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_get_precision.tolist() if hasattr(res_MinCovDet_get_precision, 'tolist') else res_MinCovDet_get_precision`
  }

  /**
    Compute the squared Mahalanobis distances of given observations.
   */
  async mahalanobis(opts: MinCovDetMahalanobisOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before mahalanobis()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_mahalanobis = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_MinCovDet_mahalanobis = {k: v for k, v in pms_MinCovDet_mahalanobis.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_mahalanobis = bridgeMinCovDet[${this.id}].mahalanobis(**pms_MinCovDet_mahalanobis)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_mahalanobis.tolist() if hasattr(res_MinCovDet_mahalanobis, 'tolist') else res_MinCovDet_mahalanobis`
  }

  /**
    Re-weight raw Minimum Covariance Determinant estimates.

    Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#r9465bad4668c-rvdriessen).
   */
  async reweight_covariance(
    opts: MinCovDetReweightCovarianceOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before reweight_covariance()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_reweight_covariance = {'data': np.array(${
      opts['data'] ?? undefined
    }) if ${opts['data'] !== undefined} else None}

pms_MinCovDet_reweight_covariance = {k: v for k, v in pms_MinCovDet_reweight_covariance.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_reweight_covariance = bridgeMinCovDet[${this.id}].reweight_covariance(**pms_MinCovDet_reweight_covariance)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_reweight_covariance.tolist() if hasattr(res_MinCovDet_reweight_covariance, 'tolist') else res_MinCovDet_reweight_covariance`
  }

  /**
    Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

    The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.
   */
  async score(opts: MinCovDetScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MinCovDet_score = {'X_test': np.array(${
      opts['X_test'] ?? undefined
    }) if ${opts['X_test'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }}

pms_MinCovDet_score = {k: v for k, v in pms_MinCovDet_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MinCovDet_score = bridgeMinCovDet[${this.id}].score(**pms_MinCovDet_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MinCovDet_score.tolist() if hasattr(res_MinCovDet_score, 'tolist') else res_MinCovDet_score`
  }

  /**
    The raw robust estimated location before correction and re-weighting.
   */
  get raw_location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinCovDet must call init() before accessing raw_location_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_raw_location_ = bridgeMinCovDet[${this.id}].raw_location_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_raw_location_.tolist() if hasattr(attr_MinCovDet_raw_location_, 'tolist') else attr_MinCovDet_raw_location_`
    })()
  }

  /**
    The raw robust estimated covariance before correction and re-weighting.
   */
  get raw_covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinCovDet must call init() before accessing raw_covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_raw_covariance_ = bridgeMinCovDet[${this.id}].raw_covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_raw_covariance_.tolist() if hasattr(attr_MinCovDet_raw_covariance_, 'tolist') else attr_MinCovDet_raw_covariance_`
    })()
  }

  /**
    A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.
   */
  get raw_support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinCovDet must call init() before accessing raw_support_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_raw_support_ = bridgeMinCovDet[${this.id}].raw_support_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_raw_support_.tolist() if hasattr(attr_MinCovDet_raw_support_, 'tolist') else attr_MinCovDet_raw_support_`
    })()
  }

  /**
    Estimated robust location.
   */
  get location_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before accessing location_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_location_ = bridgeMinCovDet[${this.id}].location_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_location_.tolist() if hasattr(attr_MinCovDet_location_, 'tolist') else attr_MinCovDet_location_`
    })()
  }

  /**
    Estimated robust covariance matrix.
   */
  get covariance_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before accessing covariance_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_covariance_ = bridgeMinCovDet[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_covariance_.tolist() if hasattr(attr_MinCovDet_covariance_, 'tolist') else attr_MinCovDet_covariance_`
    })()
  }

  /**
    Estimated pseudo inverse matrix. (stored only if store\_precision is True)
   */
  get precision_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before accessing precision_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_precision_ = bridgeMinCovDet[${this.id}].precision_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_precision_.tolist() if hasattr(attr_MinCovDet_precision_, 'tolist') else attr_MinCovDet_precision_`
    })()
  }

  /**
    A mask of the observations that have been used to compute the robust estimates of location and shape.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_support_ = bridgeMinCovDet[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_support_.tolist() if hasattr(attr_MinCovDet_support_, 'tolist') else attr_MinCovDet_support_`
    })()
  }

  /**
    Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.MinCovDet.fit "sklearn.covariance.MinCovDet.fit") is called) observations.
   */
  get dist_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MinCovDet must call init() before accessing dist_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_dist_ = bridgeMinCovDet[${this.id}].dist_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_dist_.tolist() if hasattr(attr_MinCovDet_dist_, 'tolist') else attr_MinCovDet_dist_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinCovDet must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_n_features_in_ = bridgeMinCovDet[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_n_features_in_.tolist() if hasattr(attr_MinCovDet_n_features_in_, 'tolist') else attr_MinCovDet_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MinCovDet instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MinCovDet must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MinCovDet_feature_names_in_ = bridgeMinCovDet[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MinCovDet_feature_names_in_.tolist() if hasattr(attr_MinCovDet_feature_names_in_, 'tolist') else attr_MinCovDet_feature_names_in_`
    })()
  }
}

export interface MinCovDetOptions {
  /**
    Specify if the estimated precision is stored.

    @defaultValue `true`
   */
  store_precision?: boolean

  /**
    If True, the support of the robust location and the covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If False, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.

    @defaultValue `false`
   */
  assume_centered?: boolean

  /**
    The proportion of points to be included in the support of the raw MCD estimate. Default is None, which implies that the minimum value of support\_fraction will be used within the algorithm: `(n\_sample + n\_features + 1) / 2`. The parameter must be in the range (0, 1\].
   */
  support_fraction?: number

  /**
    Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number
}

export interface MinCovDetCorrectCovarianceOptions {
  /**
    The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.
   */
  data?: ArrayLike[]
}

export interface MinCovDetErrorNormOptions {
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

export interface MinCovDetFitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface MinCovDetGetPrecisionOptions {
  /**
    The precision matrix associated to the current covariance object.
   */
  precision_?: ArrayLike[]
}

export interface MinCovDetMahalanobisOptions {
  /**
    The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.
   */
  X?: ArrayLike[]
}

export interface MinCovDetReweightCovarianceOptions {
  /**
    The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.
   */
  data?: ArrayLike[]
}

export interface MinCovDetScoreOptions {
  /**
    Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).
   */
  X_test?: ArrayLike[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
