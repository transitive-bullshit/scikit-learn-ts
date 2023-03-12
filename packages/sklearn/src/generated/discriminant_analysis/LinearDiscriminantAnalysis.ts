/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear Discriminant Analysis.

  A classifier with a linear decision boundary, generated by fitting class conditional densities to the data and using Bayes’ rule.

  The model fits a Gaussian density to each class, assuming that all classes share the same covariance matrix.

  The fitted model can also be used to reduce the dimensionality of the input by projecting it to the most discriminative directions, using the `transform` method.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.discriminant_analysis.LinearDiscriminantAnalysis.html
 */
export class LinearDiscriminantAnalysis {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: LinearDiscriminantAnalysisOptions) {
    this.id = `LinearDiscriminantAnalysis${crypto.randomUUID().split('-')[0]}`
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
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'LinearDiscriminantAnalysis.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
try: bridgeLinearDiscriminantAnalysis
except NameError: bridgeLinearDiscriminantAnalysis = {}
`

    // set up constructor params
    await this._py.ex`ctor_LinearDiscriminantAnalysis = {'solver': ${
      this.opts['solver'] ?? undefined
    }, 'shrinkage': ${
      this.opts['shrinkage'] ?? undefined
    }, 'priors': np.array(${this.opts['priors'] ?? undefined}) if ${
      this.opts['priors'] !== undefined
    } else None, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'store_covariance': ${
      this.opts['store_covariance'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'covariance_estimator': ${
      this.opts['covariance_estimator'] ?? undefined
    }}

ctor_LinearDiscriminantAnalysis = {k: v for k, v in ctor_LinearDiscriminantAnalysis.items() if v is not None}`

    await this._py
      .ex`bridgeLinearDiscriminantAnalysis[${this.id}] = LinearDiscriminantAnalysis(**ctor_LinearDiscriminantAnalysis)`

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

    await this._py.ex`del bridgeLinearDiscriminantAnalysis[${this.id}]`

    this._isDisposed = true
  }

  /**
    Apply decision function to an array of samples.

    The decision function is equal (up to a constant factor) to the log-posterior of the model, i.e. `log p(y \= k | x)`. In a binary classification setting this instead corresponds to the difference `log p(y \= 1 | x) \- log p(y \= 0 | x)`. See [Mathematical formulation of the LDA and QDA classifiers](../lda_qda.html#lda-qda-math).
   */
  async decision_function(
    opts: LinearDiscriminantAnalysisDecisionFunctionOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_decision_function = {k: v for k, v in pms_LinearDiscriminantAnalysis_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_decision_function = bridgeLinearDiscriminantAnalysis[${this.id}].decision_function(**pms_LinearDiscriminantAnalysis_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_decision_function.tolist() if hasattr(res_LinearDiscriminantAnalysis_decision_function, 'tolist') else res_LinearDiscriminantAnalysis_decision_function`
  }

  /**
    Fit the Linear Discriminant Analysis model.
   */
  async fit(opts: LinearDiscriminantAnalysisFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before fit()'
      )
    }

    // set up method params
    await this._py.ex`pms_LinearDiscriminantAnalysis_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_fit = {k: v for k, v in pms_LinearDiscriminantAnalysis_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_fit = bridgeLinearDiscriminantAnalysis[${this.id}].fit(**pms_LinearDiscriminantAnalysis_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_fit.tolist() if hasattr(res_LinearDiscriminantAnalysis_fit, 'tolist') else res_LinearDiscriminantAnalysis_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(
    opts: LinearDiscriminantAnalysisFitTransformOptions
  ): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before fit_transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_LinearDiscriminantAnalysis_fit_transform = {k: v for k, v in pms_LinearDiscriminantAnalysis_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_fit_transform = bridgeLinearDiscriminantAnalysis[${this.id}].fit_transform(**pms_LinearDiscriminantAnalysis_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_fit_transform.tolist() if hasattr(res_LinearDiscriminantAnalysis_fit_transform, 'tolist') else res_LinearDiscriminantAnalysis_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: LinearDiscriminantAnalysisGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_LinearDiscriminantAnalysis_get_feature_names_out = {k: v for k, v in pms_LinearDiscriminantAnalysis_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_get_feature_names_out = bridgeLinearDiscriminantAnalysis[${this.id}].get_feature_names_out(**pms_LinearDiscriminantAnalysis_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_get_feature_names_out.tolist() if hasattr(res_LinearDiscriminantAnalysis_get_feature_names_out, 'tolist') else res_LinearDiscriminantAnalysis_get_feature_names_out`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(
    opts: LinearDiscriminantAnalysisPredictOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_LinearDiscriminantAnalysis_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_predict = {k: v for k, v in pms_LinearDiscriminantAnalysis_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_predict = bridgeLinearDiscriminantAnalysis[${this.id}].predict(**pms_LinearDiscriminantAnalysis_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_predict.tolist() if hasattr(res_LinearDiscriminantAnalysis_predict, 'tolist') else res_LinearDiscriminantAnalysis_predict`
  }

  /**
    Estimate log probability.
   */
  async predict_log_proba(
    opts: LinearDiscriminantAnalysisPredictLogProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before predict_log_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_predict_log_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_predict_log_proba = {k: v for k, v in pms_LinearDiscriminantAnalysis_predict_log_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_predict_log_proba = bridgeLinearDiscriminantAnalysis[${this.id}].predict_log_proba(**pms_LinearDiscriminantAnalysis_predict_log_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_predict_log_proba.tolist() if hasattr(res_LinearDiscriminantAnalysis_predict_log_proba, 'tolist') else res_LinearDiscriminantAnalysis_predict_log_proba`
  }

  /**
    Estimate probability.
   */
  async predict_proba(
    opts: LinearDiscriminantAnalysisPredictProbaOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_predict_proba = {k: v for k, v in pms_LinearDiscriminantAnalysis_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_predict_proba = bridgeLinearDiscriminantAnalysis[${this.id}].predict_proba(**pms_LinearDiscriminantAnalysis_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_predict_proba.tolist() if hasattr(res_LinearDiscriminantAnalysis_predict_proba, 'tolist') else res_LinearDiscriminantAnalysis_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: LinearDiscriminantAnalysisScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_LinearDiscriminantAnalysis_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_score = {k: v for k, v in pms_LinearDiscriminantAnalysis_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_score = bridgeLinearDiscriminantAnalysis[${this.id}].score(**pms_LinearDiscriminantAnalysis_score)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_score.tolist() if hasattr(res_LinearDiscriminantAnalysis_score, 'tolist') else res_LinearDiscriminantAnalysis_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(
    opts: LinearDiscriminantAnalysisSetOutputOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before set_output()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_LinearDiscriminantAnalysis_set_output = {k: v for k, v in pms_LinearDiscriminantAnalysis_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_set_output = bridgeLinearDiscriminantAnalysis[${this.id}].set_output(**pms_LinearDiscriminantAnalysis_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_set_output.tolist() if hasattr(res_LinearDiscriminantAnalysis_set_output, 'tolist') else res_LinearDiscriminantAnalysis_set_output`
  }

  /**
    Project data to maximize class separation.
   */
  async transform(
    opts: LinearDiscriminantAnalysisTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before transform()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_LinearDiscriminantAnalysis_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_LinearDiscriminantAnalysis_transform = {k: v for k, v in pms_LinearDiscriminantAnalysis_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_LinearDiscriminantAnalysis_transform = bridgeLinearDiscriminantAnalysis[${this.id}].transform(**pms_LinearDiscriminantAnalysis_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_LinearDiscriminantAnalysis_transform.tolist() if hasattr(res_LinearDiscriminantAnalysis_transform, 'tolist') else res_LinearDiscriminantAnalysis_transform`
  }

  /**
    Weight vector(s).
   */
  get coef_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing coef_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_coef_ = bridgeLinearDiscriminantAnalysis[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_coef_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_coef_, 'tolist') else attr_LinearDiscriminantAnalysis_coef_`
    })()
  }

  /**
    Intercept term.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing intercept_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_intercept_ = bridgeLinearDiscriminantAnalysis[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_intercept_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_intercept_, 'tolist') else attr_LinearDiscriminantAnalysis_intercept_`
    })()
  }

  /**
    Weighted within-class covariance matrix. It corresponds to `sum\_k prior\_k \* C\_k` where `C\_k` is the covariance matrix of the samples in class `k`. The `C\_k` are estimated using the (potentially shrunk) biased estimator of covariance. If solver is ‘svd’, only exists when `store\_covariance` is True.
   */
  get covariance_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing covariance_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_covariance_ = bridgeLinearDiscriminantAnalysis[${this.id}].covariance_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_covariance_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_covariance_, 'tolist') else attr_LinearDiscriminantAnalysis_covariance_`
    })()
  }

  /**
    Percentage of variance explained by each of the selected components. If `n\_components` is not set then all components are stored and the sum of explained variances is equal to 1.0. Only available when eigen or svd solver is used.
   */
  get explained_variance_ratio_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing explained_variance_ratio_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_explained_variance_ratio_ = bridgeLinearDiscriminantAnalysis[${this.id}].explained_variance_ratio_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_explained_variance_ratio_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_explained_variance_ratio_, 'tolist') else attr_LinearDiscriminantAnalysis_explained_variance_ratio_`
    })()
  }

  /**
    Class-wise means.
   */
  get means_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing means_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_means_ = bridgeLinearDiscriminantAnalysis[${this.id}].means_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_means_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_means_, 'tolist') else attr_LinearDiscriminantAnalysis_means_`
    })()
  }

  /**
    Class priors (sum to 1).
   */
  get priors_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing priors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_priors_ = bridgeLinearDiscriminantAnalysis[${this.id}].priors_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_priors_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_priors_, 'tolist') else attr_LinearDiscriminantAnalysis_priors_`
    })()
  }

  /**
    Scaling of the features in the space spanned by the class centroids. Only available for ‘svd’ and ‘eigen’ solvers.
   */
  get scalings_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing scalings_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_scalings_ = bridgeLinearDiscriminantAnalysis[${this.id}].scalings_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_scalings_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_scalings_, 'tolist') else attr_LinearDiscriminantAnalysis_scalings_`
    })()
  }

  /**
    Overall mean. Only present if solver is ‘svd’.
   */
  get xbar_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing xbar_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_xbar_ = bridgeLinearDiscriminantAnalysis[${this.id}].xbar_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_xbar_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_xbar_, 'tolist') else attr_LinearDiscriminantAnalysis_xbar_`
    })()
  }

  /**
    Unique class labels.
   */
  get classes_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_classes_ = bridgeLinearDiscriminantAnalysis[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_classes_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_classes_, 'tolist') else attr_LinearDiscriminantAnalysis_classes_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_n_features_in_ = bridgeLinearDiscriminantAnalysis[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_n_features_in_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_n_features_in_, 'tolist') else attr_LinearDiscriminantAnalysis_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This LinearDiscriminantAnalysis instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'LinearDiscriminantAnalysis must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_LinearDiscriminantAnalysis_feature_names_in_ = bridgeLinearDiscriminantAnalysis[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_LinearDiscriminantAnalysis_feature_names_in_.tolist() if hasattr(attr_LinearDiscriminantAnalysis_feature_names_in_, 'tolist') else attr_LinearDiscriminantAnalysis_feature_names_in_`
    })()
  }
}

export interface LinearDiscriminantAnalysisOptions {
  /**
    ‘svd’: Singular value decomposition (default). Does not compute the covariance matrix, therefore this solver is recommended for data with a large number of features.

    @defaultValue `'svd'`
   */
  solver?: 'svd' | 'lsqr' | 'eigen'

  /**
    None: no shrinkage (default).
   */
  shrinkage?: 'auto' | number

  /**
    The class prior probabilities. By default, the class proportions are inferred from the training data.
   */
  priors?: ArrayLike

  /**
    Number of components (<= min(n\_classes - 1, n\_features)) for dimensionality reduction. If None, will be set to min(n\_classes - 1, n\_features). This parameter only affects the `transform` method.
   */
  n_components?: number

  /**
    If True, explicitly compute the weighted within-class covariance matrix when solver is ‘svd’. The matrix is always computed and stored for the other solvers.

    @defaultValue `false`
   */
  store_covariance?: boolean

  /**
    Absolute threshold for a singular value of X to be considered significant, used to estimate the rank of X. Dimensions whose singular values are non-significant are discarded. Only used if solver is ‘svd’.

    @defaultValue `0.0001`
   */
  tol?: number

  /**
    If not None, `covariance\_estimator` is used to estimate the covariance matrices instead of relying on the empirical covariance estimator (with potential shrinkage). The object should have a fit method and a `covariance\_` attribute like the estimators in [`sklearn.covariance`](../classes.html#module-sklearn.covariance "sklearn.covariance"). if None the shrinkage parameter drives the estimate.

    This should be left to None if `shrinkage` is used. Note that `covariance\_estimator` works only with ‘lsqr’ and ‘eigen’ solvers.
   */
  covariance_estimator?: any
}

export interface LinearDiscriminantAnalysisDecisionFunctionOptions {
  /**
    Array of samples (test vectors).
   */
  X?: ArrayLike[]
}

export interface LinearDiscriminantAnalysisFitOptions {
  /**
    Training data.
   */
  X?: ArrayLike[]

  /**
    Target values.
   */
  y?: ArrayLike
}

export interface LinearDiscriminantAnalysisFitTransformOptions {
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

export interface LinearDiscriminantAnalysisGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.discriminant_analysis.LinearDiscriminantAnalysis.fit "sklearn.discriminant_analysis.LinearDiscriminantAnalysis.fit").
   */
  input_features?: any
}

export interface LinearDiscriminantAnalysisPredictOptions {
  /**
    The data matrix for which we want to get the predictions.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface LinearDiscriminantAnalysisPredictLogProbaOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]
}

export interface LinearDiscriminantAnalysisPredictProbaOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]
}

export interface LinearDiscriminantAnalysisScoreOptions {
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

export interface LinearDiscriminantAnalysisSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface LinearDiscriminantAnalysisTransformOptions {
  /**
    Input data.
   */
  X?: ArrayLike[]
}
