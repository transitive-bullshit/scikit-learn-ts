/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  A Bagging classifier.

  A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

  This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#rb1846455d0e5-4).

  Read more in the [User Guide](../ensemble.html#bagging).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html)
 */
export class BaggingClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: BaggingClassifierOptions) {
    this.id = `BaggingClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('BaggingClassifier.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import BaggingClassifier
try: bridgeBaggingClassifier
except NameError: bridgeBaggingClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_BaggingClassifier = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'n_estimators': ${
      this.opts['n_estimators'] ?? undefined
    }, 'max_samples': ${
      this.opts['max_samples'] ?? undefined
    }, 'max_features': ${
      this.opts['max_features'] ?? undefined
    }, 'bootstrap': ${
      this.opts['bootstrap'] ?? undefined
    }, 'bootstrap_features': ${
      this.opts['bootstrap_features'] ?? undefined
    }, 'oob_score': ${this.opts['oob_score'] ?? undefined}, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'base_estimator': ${
      this.opts['base_estimator'] ?? undefined
    }}

ctor_BaggingClassifier = {k: v for k, v in ctor_BaggingClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeBaggingClassifier[${this.id}] = BaggingClassifier(**ctor_BaggingClassifier)`

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

    await this._py.ex`del bridgeBaggingClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Average of the decision functions of the base classifiers.
   */
  async decision_function(
    opts: BaggingClassifierDecisionFunctionOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BaggingClassifier_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BaggingClassifier_decision_function = {k: v for k, v in pms_BaggingClassifier_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_decision_function = bridgeBaggingClassifier[${this.id}].decision_function(**pms_BaggingClassifier_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_decision_function.tolist() if hasattr(res_BaggingClassifier_decision_function, 'tolist') else res_BaggingClassifier_decision_function`
  }

  /**
    Build a Bagging ensemble of estimators from the training set (X, y).
   */
  async fit(opts: BaggingClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_BaggingClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BaggingClassifier_fit = {k: v for k, v in pms_BaggingClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_fit = bridgeBaggingClassifier[${this.id}].fit(**pms_BaggingClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_fit.tolist() if hasattr(res_BaggingClassifier_fit, 'tolist') else res_BaggingClassifier_fit`
  }

  /**
    Predict class for X.

    The predicted class of an input sample is computed as the class with the highest mean predicted probability. If base estimators do not implement a `predict\_proba` method, then it resorts to voting.
   */
  async predict(opts: BaggingClassifierPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingClassifier must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_BaggingClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BaggingClassifier_predict = {k: v for k, v in pms_BaggingClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_predict = bridgeBaggingClassifier[${this.id}].predict(**pms_BaggingClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_predict.tolist() if hasattr(res_BaggingClassifier_predict, 'tolist') else res_BaggingClassifier_predict`
  }

  /**
    Predict class log-probabilities for X.

    The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the base estimators in the ensemble.
   */
  async predict_log_proba(
    opts: BaggingClassifierPredictLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BaggingClassifier_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BaggingClassifier_predict_log_proba = {k: v for k, v in pms_BaggingClassifier_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_predict_log_proba = bridgeBaggingClassifier[${this.id}].predict_log_proba(**pms_BaggingClassifier_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_predict_log_proba.tolist() if hasattr(res_BaggingClassifier_predict_log_proba, 'tolist') else res_BaggingClassifier_predict_log_proba`
  }

  /**
    Predict class probabilities for X.

    The predicted class probabilities of an input sample is computed as the mean predicted class probabilities of the base estimators in the ensemble. If base estimators do not implement a `predict\_proba` method, then it resorts to voting and the predicted class probabilities of an input sample represents the proportion of estimators predicting each class.
   */
  async predict_proba(
    opts: BaggingClassifierPredictProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py.ex`pms_BaggingClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BaggingClassifier_predict_proba = {k: v for k, v in pms_BaggingClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_predict_proba = bridgeBaggingClassifier[${this.id}].predict_proba(**pms_BaggingClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_predict_proba.tolist() if hasattr(res_BaggingClassifier_predict_proba, 'tolist') else res_BaggingClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: BaggingClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('BaggingClassifier must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_BaggingClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_BaggingClassifier_score = {k: v for k, v in pms_BaggingClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BaggingClassifier_score = bridgeBaggingClassifier[${this.id}].score(**pms_BaggingClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_BaggingClassifier_score.tolist() if hasattr(res_BaggingClassifier_score, 'tolist') else res_BaggingClassifier_score`
  }

  /**
    The base estimator from which the ensemble is grown.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_estimator_ = bridgeBaggingClassifier[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_estimator_.tolist() if hasattr(attr_BaggingClassifier_estimator_, 'tolist') else attr_BaggingClassifier_estimator_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_n_features_in_ = bridgeBaggingClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_n_features_in_.tolist() if hasattr(attr_BaggingClassifier_n_features_in_, 'tolist') else attr_BaggingClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_feature_names_in_ = bridgeBaggingClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_feature_names_in_.tolist() if hasattr(attr_BaggingClassifier_feature_names_in_, 'tolist') else attr_BaggingClassifier_feature_names_in_`
    })()
  }

  /**
    The collection of fitted base estimators.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_estimators_ = bridgeBaggingClassifier[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_estimators_.tolist() if hasattr(attr_BaggingClassifier_estimators_, 'tolist') else attr_BaggingClassifier_estimators_`
    })()
  }

  /**
    The subset of drawn features for each base estimator.
   */
  get estimators_features_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing estimators_features_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_estimators_features_ = bridgeBaggingClassifier[${this.id}].estimators_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_estimators_features_.tolist() if hasattr(attr_BaggingClassifier_estimators_features_, 'tolist') else attr_BaggingClassifier_estimators_features_`
    })()
  }

  /**
    The classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_classes_ = bridgeBaggingClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_classes_.tolist() if hasattr(attr_BaggingClassifier_classes_, 'tolist') else attr_BaggingClassifier_classes_`
    })()
  }

  /**
    The number of classes.
   */
  get n_classes_(): Promise<number | any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_n_classes_ = bridgeBaggingClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_n_classes_.tolist() if hasattr(attr_BaggingClassifier_n_classes_, 'tolist') else attr_BaggingClassifier_n_classes_`
    })()
  }

  /**
    Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.
   */
  get oob_score_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing oob_score_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_oob_score_ = bridgeBaggingClassifier[${this.id}].oob_score_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_oob_score_.tolist() if hasattr(attr_BaggingClassifier_oob_score_, 'tolist') else attr_BaggingClassifier_oob_score_`
    })()
  }

  /**
    Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.
   */
  get oob_decision_function_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This BaggingClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'BaggingClassifier must call init() before accessing oob_decision_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BaggingClassifier_oob_decision_function_ = bridgeBaggingClassifier[${this.id}].oob_decision_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_BaggingClassifier_oob_decision_function_.tolist() if hasattr(attr_BaggingClassifier_oob_decision_function_, 'tolist') else attr_BaggingClassifier_oob_decision_function_`
    })()
  }
}

export interface BaggingClassifierOptions {
  /**
    The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier").
   */
  estimator?: any

  /**
    The number of base estimators in the ensemble.

    @defaultValue `10`
   */
  n_estimators?: number

  /**
    The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).

    @defaultValue `1`
   */
  max_samples?: number

  /**
    The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).

    @defaultValue `1`
   */
  max_features?: number

  /**
    Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.

    @defaultValue `true`
   */
  bootstrap?: boolean

  /**
    Whether features are drawn with replacement.

    @defaultValue `false`
   */
  bootstrap_features?: boolean

  /**
    Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

    @defaultValue `false`
   */
  oob_score?: boolean

  /**
    When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingClassifier.fit "sklearn.ensemble.BaggingClassifier.fit") and [`predict`](#sklearn.ensemble.BaggingClassifier.predict "sklearn.ensemble.BaggingClassifier.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    Controls the verbosity when fitting and predicting.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Use `estimator` instead.

    @defaultValue `'deprecated'`
   */
  base_estimator?: any
}

export interface BaggingClassifierDecisionFunctionOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface BaggingClassifierFitOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    The target values (class labels in classification, real numbers in regression).
   */
  y?: ArrayLike

  /**
    Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.
   */
  sample_weight?: ArrayLike
}

export interface BaggingClassifierPredictOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface BaggingClassifierPredictLogProbaOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface BaggingClassifierPredictProbaOptions {
  /**
    The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface BaggingClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for `X`.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
