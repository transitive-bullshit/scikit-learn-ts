/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Recursive feature elimination with cross-validation to select features.

  See glossary entry for cross-validation estimator.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html
 */
export class RFECV {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: RFECVOptions) {
    this.id = `RFECV${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This RFECV instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('RFECV.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.feature_selection import RFECV
try: bridgeRFECV
except NameError: bridgeRFECV = {}
`

    // set up constructor params
    await this._py.ex`ctor_RFECV = {'estimator': ${
      this.opts['estimator'] ?? undefined
    }, 'step': ${this.opts['step'] ?? undefined}, 'min_features_to_select': ${
      this.opts['min_features_to_select'] ?? undefined
    }, 'cv': ${this.opts['cv'] ?? undefined}, 'scoring': ${
      this.opts['scoring'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'importance_getter': ${this.opts['importance_getter'] ?? undefined}}

ctor_RFECV = {k: v for k, v in ctor_RFECV.items() if v is not None}`

    await this._py.ex`bridgeRFECV[${this.id}] = RFECV(**ctor_RFECV)`

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

    await this._py.ex`del bridgeRFECV[${this.id}]`

    this._isDisposed = true
  }

  /**
    Compute the decision function of X.
   */
  async decision_function(opts: RFECVDecisionFunctionOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_decision_function = {k: v for k, v in pms_RFECV_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_decision_function = bridgeRFECV[${this.id}].decision_function(**pms_RFECV_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_decision_function.tolist() if hasattr(res_RFECV_decision_function, 'tolist') else res_RFECV_decision_function`
  }

  /**
    Fit the RFE model and automatically tune the number of selected features.
   */
  async fit(opts: RFECVFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'groups': np.array(${
      opts['groups'] ?? undefined
    }) if ${opts['groups'] !== undefined} else None}

pms_RFECV_fit = {k: v for k, v in pms_RFECV_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_fit = bridgeRFECV[${this.id}].fit(**pms_RFECV_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_fit.tolist() if hasattr(res_RFECV_fit, 'tolist') else res_RFECV_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to X and y with optional parameters fit_params and returns a transformed version of X.
   */
  async fit_transform(opts: RFECVFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RFECV_fit_transform = {k: v for k, v in pms_RFECV_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_fit_transform = bridgeRFECV[${this.id}].fit_transform(**pms_RFECV_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_fit_transform.tolist() if hasattr(res_RFECV_fit_transform, 'tolist') else res_RFECV_fit_transform`
  }

  /**
    Mask feature names according to selected features.
   */
  async get_feature_names_out(
    opts: RFECVGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_RFECV_get_feature_names_out = {k: v for k, v in pms_RFECV_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_get_feature_names_out = bridgeRFECV[${this.id}].get_feature_names_out(**pms_RFECV_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_get_feature_names_out.tolist() if hasattr(res_RFECV_get_feature_names_out, 'tolist') else res_RFECV_get_feature_names_out`
  }

  /**
    Get a mask, or integer index, of the features selected.
   */
  async get_support(opts: RFECVGetSupportOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before get_support()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_get_support = {'indices': ${
      opts['indices'] ?? undefined
    }}

pms_RFECV_get_support = {k: v for k, v in pms_RFECV_get_support.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_get_support = bridgeRFECV[${this.id}].get_support(**pms_RFECV_get_support)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_get_support.tolist() if hasattr(res_RFECV_get_support, 'tolist') else res_RFECV_get_support`
  }

  /**
    Reverse the transformation operation.
   */
  async inverse_transform(opts: RFECVInverseTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_inverse_transform = {k: v for k, v in pms_RFECV_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_inverse_transform = bridgeRFECV[${this.id}].inverse_transform(**pms_RFECV_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_inverse_transform.tolist() if hasattr(res_RFECV_inverse_transform, 'tolist') else res_RFECV_inverse_transform`
  }

  /**
    Reduce X to the selected features and predict using the estimator.
   */
  async predict(opts: RFECVPredictOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_predict = {k: v for k, v in pms_RFECV_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_predict = bridgeRFECV[${this.id}].predict(**pms_RFECV_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_predict.tolist() if hasattr(res_RFECV_predict, 'tolist') else res_RFECV_predict`
  }

  /**
    Predict class log-probabilities for X.
   */
  async predict_log_proba(opts: RFECVPredictLogProbaOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before predict_log_proba()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_predict_log_proba = {k: v for k, v in pms_RFECV_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_predict_log_proba = bridgeRFECV[${this.id}].predict_log_proba(**pms_RFECV_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_predict_log_proba.tolist() if hasattr(res_RFECV_predict_log_proba, 'tolist') else res_RFECV_predict_log_proba`
  }

  /**
    Predict class probabilities for X.
   */
  async predict_proba(opts: RFECVPredictProbaOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before predict_proba()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_predict_proba = {k: v for k, v in pms_RFECV_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_predict_proba = bridgeRFECV[${this.id}].predict_proba(**pms_RFECV_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_predict_proba.tolist() if hasattr(res_RFECV_predict_proba, 'tolist') else res_RFECV_predict_proba`
  }

  /**
    Reduce X to the selected features and return the score of the estimator.
   */
  async score(opts: RFECVScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_RFECV_score = {k: v for k, v in pms_RFECV_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_score = bridgeRFECV[${this.id}].score(**pms_RFECV_score)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_score.tolist() if hasattr(res_RFECV_score, 'tolist') else res_RFECV_score`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: RFECVSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_RFECV_set_output = {k: v for k, v in pms_RFECV_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_set_output = bridgeRFECV[${this.id}].set_output(**pms_RFECV_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_set_output.tolist() if hasattr(res_RFECV_set_output, 'tolist') else res_RFECV_set_output`
  }

  /**
    Reduce X to the selected features.
   */
  async transform(opts: RFECVTransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_RFECV_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_RFECV_transform = {k: v for k, v in pms_RFECV_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_RFECV_transform = bridgeRFECV[${this.id}].transform(**pms_RFECV_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_RFECV_transform.tolist() if hasattr(res_RFECV_transform, 'tolist') else res_RFECV_transform`
  }

  /**
    The fitted estimator used to select features.
   */
  get estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing estimator_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFECV_estimator_ = bridgeRFECV[${this.id}].estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_estimator_.tolist() if hasattr(attr_RFECV_estimator_, 'tolist') else attr_RFECV_estimator_`
    })()
  }

  /**
    A dict with keys:
   */
  get cv_results_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing cv_results_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFECV_cv_results_ = bridgeRFECV[${this.id}].cv_results_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_cv_results_.tolist() if hasattr(attr_RFECV_cv_results_, 'tolist') else attr_RFECV_cv_results_`
    })()
  }

  /**
    The number of selected features with cross-validation.
   */
  get n_features_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing n_features_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFECV_n_features_ = bridgeRFECV[${this.id}].n_features_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_n_features_.tolist() if hasattr(attr_RFECV_n_features_, 'tolist') else attr_RFECV_n_features_`
    })()
  }

  /**
    Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFECV_n_features_in_ = bridgeRFECV[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_n_features_in_.tolist() if hasattr(attr_RFECV_n_features_in_, 'tolist') else attr_RFECV_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'RFECV must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_RFECV_feature_names_in_ = bridgeRFECV[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_feature_names_in_.tolist() if hasattr(attr_RFECV_feature_names_in_, 'tolist') else attr_RFECV_feature_names_in_`
    })()
  }

  /**
    The feature ranking, such that ranking_[i] corresponds to the ranking position of the i-th feature. Selected (i.e., estimated best) features are assigned rank 1.
   */
  get ranking_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing ranking_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RFECV_ranking_ = bridgeRFECV[${this.id}].ranking_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_ranking_.tolist() if hasattr(attr_RFECV_ranking_, 'tolist') else attr_RFECV_ranking_`
    })()
  }

  /**
    The mask of selected features.
   */
  get support_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This RFECV instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('RFECV must call init() before accessing support_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_RFECV_support_ = bridgeRFECV[${this.id}].support_`

      // convert the result from python to node.js
      return this
        ._py`attr_RFECV_support_.tolist() if hasattr(attr_RFECV_support_, 'tolist') else attr_RFECV_support_`
    })()
  }
}

export interface RFECVOptions {
  /**
    A supervised learning estimator with a fit method that provides information about feature importance either through a coef_ attribute or through a feature_importances_ attribute.
   */
  estimator?: any

  /**
    If greater than or equal to 1, then step corresponds to the (integer) number of features to remove at each iteration. If within (0.0, 1.0), then step corresponds to the percentage (rounded down) of features to remove at each iteration. Note that the last iteration may remove fewer than step features in order to reach min_features_to_select.

    @defaultValue `1`
   */
  step?: number

  /**
    The minimum number of features to be selected. This number of features will always be scored, even if the difference between the original feature count and min_features_to_select isn’t divisible by step.

    @defaultValue `1`
   */
  min_features_to_select?: number

  /**
    Determines the cross-validation splitting strategy. Possible inputs for cv are:
   */
  cv?: number

  /**
    A string (see model evaluation documentation) or a scorer callable object / function with signature scorer(estimator, X, y).
   */
  scoring?: string

  /**
    Controls verbosity of output.

    @defaultValue `0`
   */
  verbose?: number

  /**
    Number of cores to run in parallel while fitting across folds. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number

  /**
    If ‘auto’, uses the feature importance either through a coef_ or feature_importances_ attributes of estimator.

    Also accepts a string that specifies an attribute name/path for extracting feature importance. For example, give regressor_.coef_ in case of TransformedTargetRegressor  or named_steps.clf.feature_importances_ in case of Pipeline with its last step named clf.

    If callable, overrides the default feature importance getter. The callable is passed with the fitted estimator and it should return importance for each feature.

    @defaultValue `'auto'`
   */
  importance_getter?: string
}

export interface RFECVDecisionFunctionOptions {
  /**
    The input samples. Internally, it will be converted to dtype=np.float32 and if a sparse matrix is provided to a sparse csr_matrix.
   */
  X?: any[]
}

export interface RFECVFitOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the total number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values (integers for classification, real numbers for regression).
   */
  y?: ArrayLike

  /**
    Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” cv instance (e.g., GroupKFold).
   */
  groups?: ArrayLike
}

export interface RFECVFitTransformOptions {
  /**
    Input samples.
   */
  X?: ArrayLike[]

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike

  /**
    Additional fit parameters.
   */
  fit_params?: any
}

export interface RFECVGetFeatureNamesOutOptions {
  /**
    Input features.
   */
  input_features?: any
}

export interface RFECVGetSupportOptions {
  /**
    If True, the return value will be an array of integers, rather than a boolean mask.

    @defaultValue `false`
   */
  indices?: boolean
}

export interface RFECVInverseTransformOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface RFECVPredictOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface RFECVPredictLogProbaOptions {
  /**
    The input samples.
   */
  X?: any
}

export interface RFECVPredictProbaOptions {
  /**
    The input samples. Internally, it will be converted to dtype=np.float32 and if a sparse matrix is provided to a sparse csr_matrix.
   */
  X?: any[]
}

export interface RFECVScoreOptions {
  /**
    The input samples.
   */
  X?: any

  /**
    The target values.
   */
  y?: any

  /**
    Parameters to pass to the score method of the underlying estimator.
   */
  fit_params?: any
}

export interface RFECVSetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface RFECVTransformOptions {
  /**
    The input samples.
   */
  X?: any
}
