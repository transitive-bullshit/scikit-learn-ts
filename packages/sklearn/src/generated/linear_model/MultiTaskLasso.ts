/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

  The optimization objective for Lasso is:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLasso.html
 */
export class MultiTaskLasso {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: MultiTaskLassoOptions) {
    this.id = `MultiTaskLasso${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MultiTaskLasso.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import MultiTaskLasso
try: bridgeMultiTaskLasso
except NameError: bridgeMultiTaskLasso = {}
`

    // set up constructor params
    await this._py.ex`ctor_MultiTaskLasso = {'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'fit_intercept': ${this.opts['fit_intercept'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'selection': ${this.opts['selection'] ?? undefined}}

ctor_MultiTaskLasso = {k: v for k, v in ctor_MultiTaskLasso.items() if v is not None}`

    await this._py
      .ex`bridgeMultiTaskLasso[${this.id}] = MultiTaskLasso(**ctor_MultiTaskLasso)`

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

    await this._py.ex`del bridgeMultiTaskLasso[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit MultiTaskElasticNet model with coordinate descent.
   */
  async fit(opts: MultiTaskLassoFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLasso_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_MultiTaskLasso_fit = {k: v for k, v in pms_MultiTaskLasso_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLasso_fit = bridgeMultiTaskLasso[${this.id}].fit(**pms_MultiTaskLasso_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLasso_fit.tolist() if hasattr(res_MultiTaskLasso_fit, 'tolist') else res_MultiTaskLasso_fit`
  }

  /**
    Compute elastic net path with coordinate descent.

    The elastic net optimization function varies for mono and multi-outputs.

    For mono-output tasks it is:
   */
  async path(opts: MultiTaskLassoPathOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before path()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLasso_path = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'l1_ratio': ${
      opts['l1_ratio'] ?? undefined
    }, 'eps': ${opts['eps'] ?? undefined}, 'n_alphas': ${
      opts['n_alphas'] ?? undefined
    }, 'alphas': np.array(${opts['alphas'] ?? undefined}) if ${
      opts['alphas'] !== undefined
    } else None, 'precompute': np.array(${
      opts['precompute'] ?? undefined
    }) if ${opts['precompute'] !== undefined} else None, 'Xy': np.array(${
      opts['Xy'] ?? undefined
    }) if ${opts['Xy'] !== undefined} else None, 'copy_X': ${
      opts['copy_X'] ?? undefined
    }, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${
      opts['coef_init'] !== undefined
    } else None, 'verbose': ${opts['verbose'] ?? undefined}, 'return_n_iter': ${
      opts['return_n_iter'] ?? undefined
    }, 'positive': ${opts['positive'] ?? undefined}, 'check_input': ${
      opts['check_input'] ?? undefined
    }, 'params': ${opts['params'] ?? undefined}}

pms_MultiTaskLasso_path = {k: v for k, v in pms_MultiTaskLasso_path.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLasso_path = bridgeMultiTaskLasso[${this.id}].path(**pms_MultiTaskLasso_path)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLasso_path.tolist() if hasattr(res_MultiTaskLasso_path, 'tolist') else res_MultiTaskLasso_path`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: MultiTaskLassoPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLasso_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_MultiTaskLasso_predict = {k: v for k, v in pms_MultiTaskLasso_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLasso_predict = bridgeMultiTaskLasso[${this.id}].predict(**pms_MultiTaskLasso_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLasso_predict.tolist() if hasattr(res_MultiTaskLasso_predict, 'tolist') else res_MultiTaskLasso_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: MultiTaskLassoScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_MultiTaskLasso_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_MultiTaskLasso_score = {k: v for k, v in pms_MultiTaskLasso_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MultiTaskLasso_score = bridgeMultiTaskLasso[${this.id}].score(**pms_MultiTaskLasso_score)`

    // convert the result from python to node.js
    return this
      ._py`res_MultiTaskLasso_score.tolist() if hasattr(res_MultiTaskLasso_score, 'tolist') else res_MultiTaskLasso_score`
  }

  /**
    Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_coef_ = bridgeMultiTaskLasso[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_coef_.tolist() if hasattr(attr_MultiTaskLasso_coef_, 'tolist') else attr_MultiTaskLasso_coef_`
    })()
  }

  /**
    Independent term in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLasso must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_intercept_ = bridgeMultiTaskLasso[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_intercept_.tolist() if hasattr(attr_MultiTaskLasso_intercept_, 'tolist') else attr_MultiTaskLasso_intercept_`
    })()
  }

  /**
    Number of iterations run by the coordinate descent solver to reach the specified tolerance.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLasso must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_n_iter_ = bridgeMultiTaskLasso[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_n_iter_.tolist() if hasattr(attr_MultiTaskLasso_n_iter_, 'tolist') else attr_MultiTaskLasso_n_iter_`
    })()
  }

  /**
    The dual gaps at the end of the optimization for each alpha.
   */
  get dual_gap_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLasso must call init() before accessing dual_gap_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_dual_gap_ = bridgeMultiTaskLasso[${this.id}].dual_gap_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_dual_gap_.tolist() if hasattr(attr_MultiTaskLasso_dual_gap_, 'tolist') else attr_MultiTaskLasso_dual_gap_`
    })()
  }

  /**
    The tolerance scaled scaled by the variance of the target `y`.
   */
  get eps_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MultiTaskLasso must call init() before accessing eps_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_eps_ = bridgeMultiTaskLasso[${this.id}].eps_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_eps_.tolist() if hasattr(attr_MultiTaskLasso_eps_, 'tolist') else attr_MultiTaskLasso_eps_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLasso must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_n_features_in_ = bridgeMultiTaskLasso[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_n_features_in_.tolist() if hasattr(attr_MultiTaskLasso_n_features_in_, 'tolist') else attr_MultiTaskLasso_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This MultiTaskLasso instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MultiTaskLasso must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_MultiTaskLasso_feature_names_in_ = bridgeMultiTaskLasso[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_MultiTaskLasso_feature_names_in_.tolist() if hasattr(attr_MultiTaskLasso_feature_names_in_, 'tolist') else attr_MultiTaskLasso_feature_names_in_`
    })()
  }
}

export interface MultiTaskLassoOptions {
  /**
    Constant that multiplies the L1/L2 term. Defaults to 1.0.

    @defaultValue `1`
   */
  alpha?: number

  /**
    Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    If `True`, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    The maximum number of iterations.

    @defaultValue `1000`
   */
  max_iter?: number

  /**
    The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    When set to `True`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4.

    @defaultValue `'cyclic'`
   */
  selection?: 'cyclic' | 'random'
}

export interface MultiTaskLassoFitOptions {
  /**
    Data.
   */
  X?: NDArray[]

  /**
    Target. Will be cast to X’s dtype if necessary.
   */
  y?: NDArray[]
}

export interface MultiTaskLassoPathOptions {
  /**
    Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike | SparseMatrix

  /**
    Number between 0 and 1 passed to elastic net (scaling between l1 and l2 penalties). `l1\_ratio=1` corresponds to the Lasso.

    @defaultValue `0.5`
   */
  l1_ratio?: number

  /**
    Length of the path. `eps=1e-3` means that `alpha\_min / alpha\_max \= 1e-3`.

    @defaultValue `0.001`
   */
  eps?: number

  /**
    Number of alphas along the regularization path.

    @defaultValue `100`
   */
  n_alphas?: number

  /**
    List of alphas where to compute the models. If None alphas are set automatically.
   */
  alphas?: NDArray

  /**
    Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument.

    @defaultValue `'auto'`
   */
  precompute?: 'auto' | boolean | ArrayLike[]

  /**
    Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed.
   */
  Xy?: ArrayLike

  /**
    If `True`, X will be copied; else, it may be overwritten.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    The initial values of the coefficients.
   */
  coef_init?: NDArray

  /**
    Amount of verbosity.

    @defaultValue `false`
   */
  verbose?: boolean | number

  /**
    Whether to return the number of iterations or not.

    @defaultValue `false`
   */
  return_n_iter?: boolean

  /**
    If set to True, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`).

    @defaultValue `false`
   */
  positive?: boolean

  /**
    If set to False, the input validation checks are skipped (including the Gram matrix when provided). It is assumed that they are handled by the caller.

    @defaultValue `true`
   */
  check_input?: boolean

  /**
    Keyword arguments passed to the coordinate descent solver.
   */
  params?: any
}

export interface MultiTaskLassoPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface MultiTaskLassoScoreOptions {
  /**
    Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.
   */
  X?: ArrayLike[]

  /**
    True values for `X`.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
