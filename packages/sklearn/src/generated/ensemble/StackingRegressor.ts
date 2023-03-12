/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stack of estimators with a final regressor.

  Stacked generalization consists in stacking the output of individual estimator and use a regressor to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

  Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

  Read more in the [User Guide](../ensemble.html#stacking).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingRegressor.html)
 */
export class StackingRegressor {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: StackingRegressorOptions) {
    this.id = `StackingRegressor${crypto.randomUUID().split('-')[0]}`
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
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('StackingRegressor.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.ensemble import StackingRegressor
try: bridgeStackingRegressor
except NameError: bridgeStackingRegressor = {}
`

    // set up constructor params
    await this._py.ex`ctor_StackingRegressor = {'estimators': ${
      this.opts['estimators'] ?? undefined
    }, 'final_estimator': ${this.opts['final_estimator'] ?? undefined}, 'cv': ${
      this.opts['cv'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}, 'passthrough': ${
      this.opts['passthrough'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}}

ctor_StackingRegressor = {k: v for k, v in ctor_StackingRegressor.items() if v is not None}`

    await this._py
      .ex`bridgeStackingRegressor[${this.id}] = StackingRegressor(**ctor_StackingRegressor)`

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

    await this._py.ex`del bridgeStackingRegressor[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the estimators.
   */
  async fit(opts: StackingRegressorFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingRegressor must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_StackingRegressor_fit = {k: v for k, v in pms_StackingRegressor_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_fit = bridgeStackingRegressor[${this.id}].fit(**pms_StackingRegressor_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_fit.tolist() if hasattr(res_StackingRegressor_fit, 'tolist') else res_StackingRegressor_fit`
  }

  /**
    Fit the estimators and return the predictions for X for each estimator.
   */
  async fit_transform(
    opts: StackingRegressorFitTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_StackingRegressor_fit_transform = {k: v for k, v in pms_StackingRegressor_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_fit_transform = bridgeStackingRegressor[${this.id}].fit_transform(**pms_StackingRegressor_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_fit_transform.tolist() if hasattr(res_StackingRegressor_fit_transform, 'tolist') else res_StackingRegressor_fit_transform`
  }

  /**
    Get output feature names for transformation.
   */
  async get_feature_names_out(
    opts: StackingRegressorGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_StackingRegressor_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_StackingRegressor_get_feature_names_out = {k: v for k, v in pms_StackingRegressor_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_get_feature_names_out = bridgeStackingRegressor[${this.id}].get_feature_names_out(**pms_StackingRegressor_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_get_feature_names_out.tolist() if hasattr(res_StackingRegressor_get_feature_names_out, 'tolist') else res_StackingRegressor_get_feature_names_out`
  }

  /**
    Predict target for X.
   */
  async predict(opts: StackingRegressorPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingRegressor must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'predict_params': ${
      opts['predict_params'] ?? undefined
    }}

pms_StackingRegressor_predict = {k: v for k, v in pms_StackingRegressor_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_predict = bridgeStackingRegressor[${this.id}].predict(**pms_StackingRegressor_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_predict.tolist() if hasattr(res_StackingRegressor_predict, 'tolist') else res_StackingRegressor_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: StackingRegressorScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingRegressor must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_StackingRegressor_score = {k: v for k, v in pms_StackingRegressor_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_score = bridgeStackingRegressor[${this.id}].score(**pms_StackingRegressor_score)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_score.tolist() if hasattr(res_StackingRegressor_score, 'tolist') else res_StackingRegressor_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: StackingRegressorSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingRegressor must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_StackingRegressor_set_output = {k: v for k, v in pms_StackingRegressor_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_set_output = bridgeStackingRegressor[${this.id}].set_output(**pms_StackingRegressor_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_set_output.tolist() if hasattr(res_StackingRegressor_set_output, 'tolist') else res_StackingRegressor_set_output`
  }

  /**
    Return the predictions for X for each estimator.
   */
  async transform(opts: StackingRegressorTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('StackingRegressor must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_StackingRegressor_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_StackingRegressor_transform = {k: v for k, v in pms_StackingRegressor_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_StackingRegressor_transform = bridgeStackingRegressor[${this.id}].transform(**pms_StackingRegressor_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_StackingRegressor_transform.tolist() if hasattr(res_StackingRegressor_transform, 'tolist') else res_StackingRegressor_transform`
  }

  /**
    The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.
   */
  get estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before accessing estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingRegressor_estimators_ = bridgeStackingRegressor[${this.id}].estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingRegressor_estimators_.tolist() if hasattr(attr_StackingRegressor_estimators_, 'tolist') else attr_StackingRegressor_estimators_`
    })()
  }

  /**
    Attribute to access any fitted sub-estimators by name.
   */
  get named_estimators_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before accessing named_estimators_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingRegressor_named_estimators_ = bridgeStackingRegressor[${this.id}].named_estimators_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingRegressor_named_estimators_.tolist() if hasattr(attr_StackingRegressor_named_estimators_, 'tolist') else attr_StackingRegressor_named_estimators_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingRegressor_feature_names_in_ = bridgeStackingRegressor[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingRegressor_feature_names_in_.tolist() if hasattr(attr_StackingRegressor_feature_names_in_, 'tolist') else attr_StackingRegressor_feature_names_in_`
    })()
  }

  /**
    The regressor to stacked the base estimators fitted.
   */
  get final_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before accessing final_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingRegressor_final_estimator_ = bridgeStackingRegressor[${this.id}].final_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingRegressor_final_estimator_.tolist() if hasattr(attr_StackingRegressor_final_estimator_, 'tolist') else attr_StackingRegressor_final_estimator_`
    })()
  }

  /**
    The method used by each base estimator.
   */
  get stack_method_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This StackingRegressor instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'StackingRegressor must call init() before accessing stack_method_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_StackingRegressor_stack_method_ = bridgeStackingRegressor[${this.id}].stack_method_`

      // convert the result from python to node.js
      return this
        ._py`attr_StackingRegressor_stack_method_.tolist() if hasattr(attr_StackingRegressor_stack_method_, 'tolist') else attr_StackingRegressor_stack_method_`
    })()
  }
}

export interface StackingRegressorOptions {
  /**
    Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.
   */
  estimators?: any

  /**
    A regressor which will be used to combine the base estimators. The default regressor is a [`RidgeCV`](sklearn.linear_model.RidgeCV.html#sklearn.linear_model.RidgeCV "sklearn.linear_model.RidgeCV").
   */
  final_estimator?: any

  /**
    Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are:
   */
  cv?: number | 'prefit'

  /**
    The number of jobs to run in parallel for `fit` of all `estimators`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number

  /**
    When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.

    @defaultValue `false`
   */
  passthrough?: boolean

  /**
    Verbosity level.

    @defaultValue `0`
   */
  verbose?: number
}

export interface StackingRegressorFitOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.
   */
  sample_weight?: ArrayLike
}

export interface StackingRegressorFitTransformOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Target values.
   */
  y?: ArrayLike

  /**
    Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.
   */
  sample_weight?: ArrayLike
}

export interface StackingRegressorGetFeatureNamesOutOptions {
  /**
    Input features. The input feature names are only used when `passthrough` is `true`.
   */
  input_features?: any
}

export interface StackingRegressorPredictOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.
   */
  predict_params?: any
}

export interface StackingRegressorScoreOptions {
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

export interface StackingRegressorSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface StackingRegressorTransformOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]
}
