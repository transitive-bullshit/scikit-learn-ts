/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear Support Vector Regression.

  Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

  This class supports both dense and sparse input.

  Read more in the [User Guide](../svm.html#svm-regression).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html)
 */
export class LinearSVR {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LinearSVROptions) {
    this.id = `LinearSVR${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('LinearSVR.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.svm import LinearSVR
try: bridgeLinearSVR
except NameError: bridgeLinearSVR = {}
`

    // set up constructor params
    await this._py.ex`ctor_LinearSVR = {'epsilon': ${
      this.opts['epsilon'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'C': ${
      this.opts['C'] ?? undefined
    }, 'loss': ${this.opts['loss'] ?? undefined}, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'intercept_scaling': ${
      this.opts['intercept_scaling'] ?? undefined
    }, 'dual': ${this.opts['dual'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }}

ctor_LinearSVR = {k: v for k, v in ctor_LinearSVR.items() if v is not None}`

    await this._py.ex`bridgeLinearSVR[${this.id}] = LinearSVR(**ctor_LinearSVR)`

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

    await this._py.ex`del bridgeLinearSVR[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model according to the given training data.
   */
  async fit(opts: LinearSVRFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVR_fit = {k: v for k, v in pms_LinearSVR_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_fit = bridgeLinearSVR[${this.id}].fit(**pms_LinearSVR_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_fit.tolist() if hasattr(res_LinearSVR_fit, 'tolist') else res_LinearSVR_fit`
  }

  /**
    Predict using the linear model.
   */
  async predict(opts: LinearSVRPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_predict = {'X': ${opts['X'] ?? undefined}}

pms_LinearSVR_predict = {k: v for k, v in pms_LinearSVR_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_predict = bridgeLinearSVR[${this.id}].predict(**pms_LinearSVR_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_predict.tolist() if hasattr(res_LinearSVR_predict, 'tolist') else res_LinearSVR_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: LinearSVRScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_LinearSVR_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearSVR_score = {k: v for k, v in pms_LinearSVR_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearSVR_score = bridgeLinearSVR[${this.id}].score(**pms_LinearSVR_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearSVR_score.tolist() if hasattr(res_LinearSVR_score, 'tolist') else res_LinearSVR_score`
  }

  /**
    Weights assigned to the features (coefficients in the primal problem).

    `coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_coef_ = bridgeLinearSVR[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_coef_.tolist() if hasattr(attr_LinearSVR_coef_, 'tolist') else attr_LinearSVR_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_intercept_ = bridgeLinearSVR[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_intercept_.tolist() if hasattr(attr_LinearSVR_intercept_, 'tolist') else attr_LinearSVR_intercept_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVR must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_n_features_in_ = bridgeLinearSVR[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_n_features_in_.tolist() if hasattr(attr_LinearSVR_n_features_in_, 'tolist') else attr_LinearSVR_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearSVR must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_feature_names_in_ = bridgeLinearSVR[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_feature_names_in_.tolist() if hasattr(attr_LinearSVR_feature_names_in_, 'tolist') else attr_LinearSVR_feature_names_in_`
    })()
  }

  /**
    Maximum number of iterations run across all classes.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This LinearSVR instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('LinearSVR must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearSVR_n_iter_ = bridgeLinearSVR[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearSVR_n_iter_.tolist() if hasattr(attr_LinearSVR_n_iter_, 'tolist') else attr_LinearSVR_n_iter_`
    })()
  }
}

export interface LinearSVROptions {
  /**
    Epsilon parameter in the epsilon-insensitive loss function. Note that the value of this parameter depends on the scale of the target variable y. If unsure, set `epsilon=0`.

    @defaultValue `0`
   */
  epsilon?: number

  /**
    Tolerance for stopping criteria.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.

    @defaultValue `1`
   */
  C?: number

  /**
    Specifies the loss function. The epsilon-insensitive loss (standard SVR) is the L1 loss, while the squared epsilon-insensitive loss (‘squared\_epsilon\_insensitive’) is the L2 loss.

    @defaultValue `'epsilon_insensitive'`
   */
  loss?: 'epsilon_insensitive' | 'squared_epsilon_insensitive'

  /**
    Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be already centered).

    @defaultValue `true`
   */
  fit_intercept?: boolean

  /**
    When self.fit\_intercept is `true`, instance vector x becomes \[x, self.intercept\_scaling\], i.e. a “synthetic” feature with constant value equals to intercept\_scaling is appended to the instance vector. The intercept becomes intercept\_scaling \* synthetic feature weight Note! the synthetic feature weight is subject to l1/l2 regularization as all other features. To lessen the effect of regularization on synthetic feature weight (and therefore on the intercept) intercept\_scaling has to be increased.

    @defaultValue `1`
   */
  intercept_scaling?: number

  /**
    Select the algorithm to either solve the dual or primal optimization problem. Prefer dual=`false` when n\_samples > n\_features.

    @defaultValue `true`
   */
  dual?: boolean

  /**
    Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in liblinear that, if enabled, may not work properly in a multithreaded context.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Controls the pseudo random number generation for shuffling the data. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    The maximum number of iterations to be run.

    @defaultValue `1000`
   */
  max_iter?: number
}

export interface LinearSVRFitOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target vector relative to X.
   */
  y?: ArrayLike

  /**
    Array of weights that are assigned to individual samples. If not provided, then each sample is given unit weight.
   */
  sample_weight?: ArrayLike
}

export interface LinearSVRPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike | SparseMatrix
}

export interface LinearSVRScoreOptions {
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
