/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Gaussian process classification (GPC) based on Laplace approximation.

  The implementation is based on Algorithm 3.1, 3.2, and 5.1 from [RW2006].

  Internally, the Laplace approximation is used for approximating the non-Gaussian posterior by a Gaussian.

  Currently, the implementation is restricted to using the logistic link function. For multi-class classification, several binary one-versus rest classifiers are fitted. Note that this class thus does not implement a true multi-class Laplace approximation.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessClassifier.html
 */
export class GaussianProcessClassifier {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: GaussianProcessClassifierOptions) {
    this.id = `GaussianProcessClassifier${crypto.randomUUID().split('-')[0]}`
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
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error(
        'GaussianProcessClassifier.init requires a PythonBridge instance'
      )
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.gaussian_process import GaussianProcessClassifier
try: bridgeGaussianProcessClassifier
except NameError: bridgeGaussianProcessClassifier = {}
`

    // set up constructor params
    await this._py.ex`ctor_GaussianProcessClassifier = {'kernel': ${
      this.opts['kernel'] ?? undefined
    }, 'optimizer': ${
      this.opts['optimizer'] ?? undefined
    }, 'n_restarts_optimizer': ${
      this.opts['n_restarts_optimizer'] ?? undefined
    }, 'max_iter_predict': ${
      this.opts['max_iter_predict'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}, 'copy_X_train': ${
      this.opts['copy_X_train'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'multi_class': ${this.opts['multi_class'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_GaussianProcessClassifier = {k: v for k, v in ctor_GaussianProcessClassifier.items() if v is not None}`

    await this._py
      .ex`bridgeGaussianProcessClassifier[${this.id}] = GaussianProcessClassifier(**ctor_GaussianProcessClassifier)`

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

    await this._py.ex`del bridgeGaussianProcessClassifier[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit Gaussian process classification model.
   */
  async fit(opts: GaussianProcessClassifierFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error('GaussianProcessClassifier must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_GaussianProcessClassifier_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_GaussianProcessClassifier_fit = {k: v for k, v in pms_GaussianProcessClassifier_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessClassifier_fit = bridgeGaussianProcessClassifier[${this.id}].fit(**pms_GaussianProcessClassifier_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessClassifier_fit.tolist() if hasattr(res_GaussianProcessClassifier_fit, 'tolist') else res_GaussianProcessClassifier_fit`
  }

  /**
    Return log-marginal likelihood of theta for training data.

    In the case of multi-class classification, the mean log-marginal likelihood of the one-versus-rest classifiers are returned.
   */
  async log_marginal_likelihood(
    opts: GaussianProcessClassifierLogMarginalLikelihoodOptions
  ): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before log_marginal_likelihood()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessClassifier_log_marginal_likelihood = {'theta': np.array(${
      opts['theta'] ?? undefined
    }) if ${opts['theta'] !== undefined} else None, 'eval_gradient': ${
      opts['eval_gradient'] ?? undefined
    }, 'clone_kernel': ${opts['clone_kernel'] ?? undefined}}

pms_GaussianProcessClassifier_log_marginal_likelihood = {k: v for k, v in pms_GaussianProcessClassifier_log_marginal_likelihood.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessClassifier_log_marginal_likelihood = bridgeGaussianProcessClassifier[${this.id}].log_marginal_likelihood(**pms_GaussianProcessClassifier_log_marginal_likelihood)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessClassifier_log_marginal_likelihood.tolist() if hasattr(res_GaussianProcessClassifier_log_marginal_likelihood, 'tolist') else res_GaussianProcessClassifier_log_marginal_likelihood`
  }

  /**
    Perform classification on an array of test vectors X.
   */
  async predict(
    opts: GaussianProcessClassifierPredictOptions
  ): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before predict()'
      )
    }

    // set up method params
    await this._py.ex`pms_GaussianProcessClassifier_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianProcessClassifier_predict = {k: v for k, v in pms_GaussianProcessClassifier_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessClassifier_predict = bridgeGaussianProcessClassifier[${this.id}].predict(**pms_GaussianProcessClassifier_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessClassifier_predict.tolist() if hasattr(res_GaussianProcessClassifier_predict, 'tolist') else res_GaussianProcessClassifier_predict`
  }

  /**
    Return probability estimates for the test vector X.
   */
  async predict_proba(
    opts: GaussianProcessClassifierPredictProbaOptions
  ): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before predict_proba()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_GaussianProcessClassifier_predict_proba = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_GaussianProcessClassifier_predict_proba = {k: v for k, v in pms_GaussianProcessClassifier_predict_proba.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessClassifier_predict_proba = bridgeGaussianProcessClassifier[${this.id}].predict_proba(**pms_GaussianProcessClassifier_predict_proba)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessClassifier_predict_proba.tolist() if hasattr(res_GaussianProcessClassifier_predict_proba, 'tolist') else res_GaussianProcessClassifier_predict_proba`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: GaussianProcessClassifierScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before score()'
      )
    }

    // set up method params
    await this._py.ex`pms_GaussianProcessClassifier_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_GaussianProcessClassifier_score = {k: v for k, v in pms_GaussianProcessClassifier_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_GaussianProcessClassifier_score = bridgeGaussianProcessClassifier[${this.id}].score(**pms_GaussianProcessClassifier_score)`

    // convert the result from python to node.js
    return this
      ._py`res_GaussianProcessClassifier_score.tolist() if hasattr(res_GaussianProcessClassifier_score, 'tolist') else res_GaussianProcessClassifier_score`
  }

  /**
    The estimator instance that defines the likelihood function using the observed data.
   */
  get base_estimator_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing base_estimator_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_base_estimator_ = bridgeGaussianProcessClassifier[${this.id}].base_estimator_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_base_estimator_.tolist() if hasattr(attr_GaussianProcessClassifier_base_estimator_, 'tolist') else attr_GaussianProcessClassifier_base_estimator_`
    })()
  }

  /**
    The log-marginal-likelihood of self.kernel_.theta
   */
  get log_marginal_likelihood_value_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing log_marginal_likelihood_value_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_log_marginal_likelihood_value_ = bridgeGaussianProcessClassifier[${this.id}].log_marginal_likelihood_value_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_log_marginal_likelihood_value_.tolist() if hasattr(attr_GaussianProcessClassifier_log_marginal_likelihood_value_, 'tolist') else attr_GaussianProcessClassifier_log_marginal_likelihood_value_`
    })()
  }

  /**
    Unique class labels.
   */
  get classes_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_classes_ = bridgeGaussianProcessClassifier[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_classes_.tolist() if hasattr(attr_GaussianProcessClassifier_classes_, 'tolist') else attr_GaussianProcessClassifier_classes_`
    })()
  }

  /**
    The number of classes in the training data
   */
  get n_classes_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing n_classes_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_n_classes_ = bridgeGaussianProcessClassifier[${this.id}].n_classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_n_classes_.tolist() if hasattr(attr_GaussianProcessClassifier_n_classes_, 'tolist') else attr_GaussianProcessClassifier_n_classes_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_n_features_in_ = bridgeGaussianProcessClassifier[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_n_features_in_.tolist() if hasattr(attr_GaussianProcessClassifier_n_features_in_, 'tolist') else attr_GaussianProcessClassifier_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error(
        'This GaussianProcessClassifier instance has already been disposed'
      )
    }

    if (!this._isInitialized) {
      throw new Error(
        'GaussianProcessClassifier must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_GaussianProcessClassifier_feature_names_in_ = bridgeGaussianProcessClassifier[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_GaussianProcessClassifier_feature_names_in_.tolist() if hasattr(attr_GaussianProcessClassifier_feature_names_in_, 'tolist') else attr_GaussianProcessClassifier_feature_names_in_`
    })()
  }
}

export interface GaussianProcessClassifierOptions {
  /**
    The kernel specifying the covariance function of the GP. If None is passed, the kernel “1.0 * RBF(1.0)” is used as default. Note that the kernel’s hyperparameters are optimized during fitting. Also kernel cannot be a CompoundKernel.
   */
  kernel?: any

  /**
    Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the  signature:

    @defaultValue `'fmin_l_bfgs_b'`
   */
  optimizer?: 'fmin_l_bfgs_b'

  /**
    The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that n_restarts_optimizer=0 implies that one run is performed.

    @defaultValue `0`
   */
  n_restarts_optimizer?: number

  /**
    The maximum number of iterations in Newton’s method for approximating the posterior during predict. Smaller values will reduce computation time at the cost of worse results.

    @defaultValue `100`
   */
  max_iter_predict?: number

  /**
    If warm-starts are enabled, the solution of the last Newton iteration on the Laplace approximation of the posterior mode is used as initialization for the next call of _posterior_mode(). This can speed up convergence when _posterior_mode is called several times on similar problems as in hyperparameter optimization. See the Glossary.

    @defaultValue `false`
   */
  warm_start?: boolean

  /**
    If True, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.

    @defaultValue `true`
   */
  copy_X_train?: boolean

  /**
    Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    Specifies how multi-class classification problems are handled. Supported are ‘one_vs_rest’ and ‘one_vs_one’. In ‘one_vs_rest’, one binary Gaussian process classifier is fitted for each class, which is trained to separate this class from the rest. In ‘one_vs_one’, one binary Gaussian process classifier is fitted for each pair of classes, which is trained to separate these two classes. The predictions of these binary predictors are combined into multi-class predictions. Note that ‘one_vs_one’ does not support predicting probability estimates.

    @defaultValue `'one_vs_rest'`
   */
  multi_class?: 'one_vs_rest' | 'one_vs_one'

  /**
    The number of jobs to use for the computation: the specified multiclass problems are computed in parallel. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number
}

export interface GaussianProcessClassifierFitOptions {
  /**
    Feature vectors or other representations of training data.
   */
  X?: ArrayLike[]

  /**
    Target values, must be binary.
   */
  y?: ArrayLike
}

export interface GaussianProcessClassifierLogMarginalLikelihoodOptions {
  /**
    Kernel hyperparameters for which the log-marginal likelihood is evaluated. In the case of multi-class classification, theta may be the  hyperparameters of the compound kernel or of an individual kernel. In the latter case, all individual kernel get assigned the same theta values. If None, the precomputed log_marginal_likelihood of self.kernel_.theta is returned.
   */
  theta?: ArrayLike

  /**
    If True, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. Note that gradient computation is not supported for non-binary classification. If True, theta must not be None.

    @defaultValue `false`
   */
  eval_gradient?: boolean

  /**
    If True, the kernel attribute is copied. If False, the kernel attribute is modified, but may result in a performance improvement.

    @defaultValue `true`
   */
  clone_kernel?: boolean
}

export interface GaussianProcessClassifierPredictOptions {
  /**
    Query points where the GP is evaluated for classification.
   */
  X?: ArrayLike[]
}

export interface GaussianProcessClassifierPredictProbaOptions {
  /**
    Query points where the GP is evaluated for classification.
   */
  X?: ArrayLike[]
}

export interface GaussianProcessClassifierScoreOptions {
  /**
    Test samples.
   */
  X?: ArrayLike[]

  /**
    True labels for X.
   */
  y?: ArrayLike

  /**
    Sample weights.
   */
  sample_weight?: ArrayLike
}
