/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Linear perceptron classifier.

  Read more in the [User Guide](../linear_model.html#perceptron).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html)
 */
export class Perceptron {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The penalty (aka regularization term) to be used.
     */
    penalty?: 'l2' | 'l1' | 'elasticnet'

    /**
      Constant that multiplies the regularization term if regularization is used.

      @defaultValue `0.0001`
     */
    alpha?: number

    /**
      The Elastic Net mixing parameter, with `0 <= l1\_ratio <= 1`. `l1\_ratio=0` corresponds to L2 penalty, `l1\_ratio=1` to L1. Only used if `penalty='elasticnet'`.

      @defaultValue `0.15`
     */
    l1_ratio?: number

    /**
      Whether the intercept should be estimated or not. If `false`, the data is assumed to be already centered.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the [`partial\_fit`](#sklearn.linear_model.Perceptron.partial_fit "sklearn.linear_model.Perceptron.partial_fit") method.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol).

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Whether or not the training data should be shuffled after each epoch.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      The verbosity level.

      @defaultValue `0`
     */
    verbose?: number

    /**
      Constant by which the updates are multiplied.

      @defaultValue `1`
     */
    eta0?: number

    /**
      The number of CPUs to use to do the OVA (One Versus All, for multi-class problems) computation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
     */
    n_jobs?: number

    /**
      Used to shuffle the training data, when `shuffle` is set to `true`. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

      @defaultValue `0`
     */
    random_state?: number

    /**
      Whether to use early stopping to terminate training when validation. score is not improving. If set to `true`, it will automatically set aside a stratified fraction of training data as validation and terminate training when validation score is not improving by at least tol for n\_iter\_no\_change consecutive epochs.

      @defaultValue `false`
     */
    early_stopping?: boolean

    /**
      The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early\_stopping is `true`.

      @defaultValue `0.1`
     */
    validation_fraction?: number

    /**
      Number of iterations with no improvement to wait before early stopping.

      @defaultValue `5`
     */
    n_iter_no_change?: number

    /**
      Preset for the class\_weight fit parameter.

      Weights associated with classes. If not given, all classes are supposed to have weight one.

      The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.
     */
    class_weight?: any | 'balanced'

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

      @defaultValue `false`
     */
    warm_start?: boolean
  }) {
    this.id = `Perceptron${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Perceptron.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import Perceptron
try: bridgePerceptron
except NameError: bridgePerceptron = {}
`

    // set up constructor params
    await this._py.ex`ctor_Perceptron = {'penalty': ${
      this.opts['penalty'] ?? undefined
    }, 'alpha': ${this.opts['alpha'] ?? undefined}, 'l1_ratio': ${
      this.opts['l1_ratio'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'eta0': ${this.opts['eta0'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'early_stopping': ${
      this.opts['early_stopping'] ?? undefined
    }, 'validation_fraction': ${
      this.opts['validation_fraction'] ?? undefined
    }, 'n_iter_no_change': ${
      this.opts['n_iter_no_change'] ?? undefined
    }, 'class_weight': ${
      this.opts['class_weight'] ?? undefined
    }, 'warm_start': ${this.opts['warm_start'] ?? undefined}}

ctor_Perceptron = {k: v for k, v in ctor_Perceptron.items() if v is not None}`

    await this._py
      .ex`bridgePerceptron[${this.id}] = Perceptron(**ctor_Perceptron)`

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

    await this._py.ex`del bridgePerceptron[${this.id}]`

    this._isDisposed = true
  }

  /**
    Predict confidence scores for samples.

    The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.
   */
  async decision_function(opts: {
    /**
      The data matrix for which we want to get the confidence scores.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before decision_function()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_decision_function = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Perceptron_decision_function = {k: v for k, v in pms_Perceptron_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_decision_function = bridgePerceptron[${this.id}].decision_function(**pms_Perceptron_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_decision_function.tolist() if hasattr(res_Perceptron_decision_function, 'tolist') else res_Perceptron_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_densify = {}

pms_Perceptron_densify = {k: v for k, v in pms_Perceptron_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_densify = bridgePerceptron[${this.id}].densify(**pms_Perceptron_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_densify.tolist() if hasattr(res_Perceptron_densify, 'tolist') else res_Perceptron_densify`
  }

  /**
    Fit linear model with Stochastic Gradient Descent.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Target values.
     */
    y?: NDArray

    /**
      The initial coefficients to warm-start the optimization.
     */
    coef_init?: NDArray[]

    /**
      The initial intercept to warm-start the optimization.
     */
    intercept_init?: NDArray

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'coef_init': np.array(${opts['coef_init'] ?? undefined}) if ${
      opts['coef_init'] !== undefined
    } else None, 'intercept_init': np.array(${
      opts['intercept_init'] ?? undefined
    }) if ${opts['intercept_init'] !== undefined} else None, 'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_Perceptron_fit = {k: v for k, v in pms_Perceptron_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_fit = bridgePerceptron[${this.id}].fit(**pms_Perceptron_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_fit.tolist() if hasattr(res_Perceptron_fit, 'tolist') else res_Perceptron_fit`
  }

  /**
    Get metadata routing of this object.

    Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.
   */
  async get_metadata_routing(opts: {
    /**
      A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.
     */
    routing?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Perceptron must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_Perceptron_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_Perceptron_get_metadata_routing = {k: v for k, v in pms_Perceptron_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_get_metadata_routing = bridgePerceptron[${this.id}].get_metadata_routing(**pms_Perceptron_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_get_metadata_routing.tolist() if hasattr(res_Perceptron_get_metadata_routing, 'tolist') else res_Perceptron_get_metadata_routing`
  }

  /**
    Perform one epoch of stochastic gradient descent on given samples.

    Internally, this method uses `max\_iter \= 1`. Therefore, it is not guaranteed that a minimum of the cost function is reached after calling it once. Matters such as objective convergence, early stopping, and learning rate adjustments should be handled by the user.
   */
  async partial_fit(opts: {
    /**
      Subset of the training data.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Subset of the target values.
     */
    y?: NDArray

    /**
      Classes across all calls to partial\_fit. Can be obtained by via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is required for the first call to partial\_fit and can be omitted in the subsequent calls. Note that y doesn’t need to contain all labels in `classes`.
     */
    classes?: NDArray

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_partial_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': np.array(${opts['y'] ?? undefined}) if ${
      opts['y'] !== undefined
    } else None, 'classes': np.array(${opts['classes'] ?? undefined}) if ${
      opts['classes'] !== undefined
    } else None, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Perceptron_partial_fit = {k: v for k, v in pms_Perceptron_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_partial_fit = bridgePerceptron[${this.id}].partial_fit(**pms_Perceptron_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_partial_fit.tolist() if hasattr(res_Perceptron_partial_fit, 'tolist') else res_Perceptron_partial_fit`
  }

  /**
    Predict class labels for samples in X.
   */
  async predict(opts: {
    /**
      The data matrix for which we want to get the predictions.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Perceptron_predict = {k: v for k, v in pms_Perceptron_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_predict = bridgePerceptron[${this.id}].predict(**pms_Perceptron_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_predict.tolist() if hasattr(res_Perceptron_predict, 'tolist') else res_Perceptron_predict`
  }

  /**
    Return the mean accuracy on the given test data and labels.

    In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.
   */
  async score(opts: {
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
  }): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_Perceptron_score = {k: v for k, v in pms_Perceptron_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_score = bridgePerceptron[${this.id}].score(**pms_Perceptron_score)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_score.tolist() if hasattr(res_Perceptron_score, 'tolist') else res_Perceptron_score`
  }

  /**
    Request metadata passed to the `fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_fit_request(opts: {
    /**
      Metadata routing for `coef\_init` parameter in `fit`.
     */
    coef_init?: string | boolean

    /**
      Metadata routing for `intercept\_init` parameter in `fit`.
     */
    intercept_init?: string | boolean

    /**
      Metadata routing for `sample\_weight` parameter in `fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before set_fit_request()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_set_fit_request = {'coef_init': ${
      opts['coef_init'] ?? undefined
    }, 'intercept_init': ${
      opts['intercept_init'] ?? undefined
    }, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Perceptron_set_fit_request = {k: v for k, v in pms_Perceptron_set_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_set_fit_request = bridgePerceptron[${this.id}].set_fit_request(**pms_Perceptron_set_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_set_fit_request.tolist() if hasattr(res_Perceptron_set_fit_request, 'tolist') else res_Perceptron_set_fit_request`
  }

  /**
    Request metadata passed to the `partial\_fit` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_partial_fit_request(opts: {
    /**
      Metadata routing for `classes` parameter in `partial\_fit`.
     */
    classes?: string | boolean

    /**
      Metadata routing for `sample\_weight` parameter in `partial\_fit`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Perceptron must call init() before set_partial_fit_request()'
      )
    }

    // set up method params
    await this._py.ex`pms_Perceptron_set_partial_fit_request = {'classes': ${
      opts['classes'] ?? undefined
    }, 'sample_weight': ${opts['sample_weight'] ?? undefined}}

pms_Perceptron_set_partial_fit_request = {k: v for k, v in pms_Perceptron_set_partial_fit_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_set_partial_fit_request = bridgePerceptron[${this.id}].set_partial_fit_request(**pms_Perceptron_set_partial_fit_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_set_partial_fit_request.tolist() if hasattr(res_Perceptron_set_partial_fit_request, 'tolist') else res_Perceptron_set_partial_fit_request`
  }

  /**
    Request metadata passed to the `score` method.

    Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

    The options for each parameter are:
   */
  async set_score_request(opts: {
    /**
      Metadata routing for `sample\_weight` parameter in `score`.
     */
    sample_weight?: string | boolean
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before set_score_request()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_set_score_request = {'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_Perceptron_set_score_request = {k: v for k, v in pms_Perceptron_set_score_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_set_score_request = bridgePerceptron[${this.id}].set_score_request(**pms_Perceptron_set_score_request)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_set_score_request.tolist() if hasattr(res_Perceptron_set_score_request, 'tolist') else res_Perceptron_set_score_request`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_Perceptron_sparsify = {}

pms_Perceptron_sparsify = {k: v for k, v in pms_Perceptron_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Perceptron_sparsify = bridgePerceptron[${this.id}].sparsify(**pms_Perceptron_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_Perceptron_sparsify.tolist() if hasattr(res_Perceptron_sparsify, 'tolist') else res_Perceptron_sparsify`
  }

  /**
    The unique classes labels.
   */
  get classes_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before accessing classes_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_classes_ = bridgePerceptron[${this.id}].classes_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_classes_.tolist() if hasattr(attr_Perceptron_classes_, 'tolist') else attr_Perceptron_classes_`
    })()
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<NDArray[][]> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_coef_ = bridgePerceptron[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_coef_.tolist() if hasattr(attr_Perceptron_coef_, 'tolist') else attr_Perceptron_coef_`
    })()
  }

  /**
    Constants in decision function.
   */
  get intercept_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_intercept_ = bridgePerceptron[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_intercept_.tolist() if hasattr(attr_Perceptron_intercept_, 'tolist') else attr_Perceptron_intercept_`
    })()
  }

  /**
    The function that determines the loss, or difference between the output of the algorithm and the target values.
   */
  get loss_function_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Perceptron must call init() before accessing loss_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_loss_function_ = bridgePerceptron[${this.id}].loss_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_loss_function_.tolist() if hasattr(attr_Perceptron_loss_function_, 'tolist') else attr_Perceptron_loss_function_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Perceptron must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_n_features_in_ = bridgePerceptron[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_n_features_in_.tolist() if hasattr(attr_Perceptron_n_features_in_, 'tolist') else attr_Perceptron_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Perceptron must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_feature_names_in_ = bridgePerceptron[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_feature_names_in_.tolist() if hasattr(attr_Perceptron_feature_names_in_, 'tolist') else attr_Perceptron_feature_names_in_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion. For multiclass fits, it is the maximum over every binary fit.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Perceptron_n_iter_ = bridgePerceptron[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_n_iter_.tolist() if hasattr(attr_Perceptron_n_iter_, 'tolist') else attr_Perceptron_n_iter_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Perceptron instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Perceptron must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_Perceptron_t_ = bridgePerceptron[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_Perceptron_t_.tolist() if hasattr(attr_Perceptron_t_, 'tolist') else attr_Perceptron_t_`
    })()
  }
}
