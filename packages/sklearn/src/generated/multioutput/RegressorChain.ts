/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A multi-label model that arranges regressions into a chain.

  Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

  Read more in the [User Guide](../multiclass.html#regressorchain).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.RegressorChain.html)
 */
export class RegressorChain {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RegressorChainOptions) {
    this.id = `RegressorChain${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RegressorChain.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.multioutput import RegressorChain
try: bridgeRegressorChain
except NameError: bridgeRegressorChain = {}
`

    // set up constructor params
    await this._py.ex`ctor_RegressorChain = {'base_estimator': ${
      this.opts['base_estimator'] ?? undefined
    }, 'order': np.array(${this.opts['order'] ?? undefined}) if ${
      this.opts['order'] !== undefined
    } else None, 'cv': ${this.opts['cv'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_RegressorChain = {k: v for k, v in ctor_RegressorChain.items() if v is not None}`

    await this._py
      .ex`bridgeRegressorChain[${this.id}] = RegressorChain(**ctor_RegressorChain)`

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

    await this._py.ex`del bridgeRegressorChain[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to data matrix X and targets Y.
   */
  async fit(opts: RegressorChainFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RegressorChain_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RegressorChain_fit = {k: v for k, v in pms_RegressorChain_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_fit = bridgeRegressorChain[${this.id}].fit(**pms_RegressorChain_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_fit.tolist() if hasattr(res_RegressorChain_fit, 'tolist') else res_RegressorChain_fit`
  }

  /**
    Predict on the data matrix X using the ClassifierChain model.
   */
  async predict(opts: RegressorChainPredictOptions): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RegressorChain_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RegressorChain_predict = {k: v for k, v in pms_RegressorChain_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_predict = bridgeRegressorChain[${this.id}].predict(**pms_RegressorChain_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_predict.tolist() if hasattr(res_RegressorChain_predict, 'tolist') else res_RegressorChain_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: RegressorChainScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RegressorChain_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_RegressorChain_score = {k: v for k, v in pms_RegressorChain_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RegressorChain_score = bridgeRegressorChain[${this.id}].score(**pms_RegressorChain_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RegressorChain_score.tolist() if hasattr(res_RegressorChain_score, 'tolist') else res_RegressorChain_score`
  }

  /**
    A list of clones of base\_estimator.
   */
  get estimators_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_estimators_ = bridgeRegressorChain[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_estimators_.tolist() if hasattr(attr_RegressorChain_estimators_, 'tolist') else attr_RegressorChain_estimators_`
    })()
  }

  /**
    The order of labels in the classifier chain.
   */
  get order_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RegressorChain must call init() before accessing order_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_order_ = bridgeRegressorChain[${this.id}].order_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_order_.tolist() if hasattr(attr_RegressorChain_order_, 'tolist') else attr_RegressorChain_order_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_n_features_in_ = bridgeRegressorChain[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_n_features_in_.tolist() if hasattr(attr_RegressorChain_n_features_in_, 'tolist') else attr_RegressorChain_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RegressorChain instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RegressorChain must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RegressorChain_feature_names_in_ = bridgeRegressorChain[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RegressorChain_feature_names_in_.tolist() if hasattr(attr_RegressorChain_feature_names_in_, 'tolist') else attr_RegressorChain_feature_names_in_`
    })()
  }
}

export interface RegressorChainOptions {
  /**
    The base estimator from which the regressor chain is built.
   */
  base_estimator?: any

  /**
    If `undefined`, the order will be determined by the order of columns in the label matrix Y.:
   */
  order?: ArrayLike | 'random'

  /**
    Determines whether to use cross validated predictions or true labels for the results of previous estimators in the chain. Possible inputs for cv are:
   */
  cv?: number

  /**
    If `order='random'`, determines random number generation for the chain order. In addition, it controls the random seed given at each `base\_estimator` at each chaining iteration. Thus, it is only used when `base\_estimator` exposes a `random\_state`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    If `true`, chain progress is output as each model is completed.

    @defaultValue `false`
   */
  verbose?: boolean
}

export interface RegressorChainFitOptions {
  /**
    The input data.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values.
   */
  Y?: ArrayLike[]

  /**
    Parameters passed to the `fit` method at each step of the regressor chain.
   */
  fit_params?: any
}

export interface RegressorChainPredictOptions {
  /**
    The input data.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface RegressorChainScoreOptions {
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
