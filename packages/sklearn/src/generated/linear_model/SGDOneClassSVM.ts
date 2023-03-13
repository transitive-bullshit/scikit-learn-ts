/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Solves linear One-Class SVM using Stochastic Gradient Descent.

  This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel\_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

  Read more in the [User Guide](../sgd.html#sgd-online-one-class-svm).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html)
 */
export class SGDOneClassSVM {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The nu parameter of the One Class SVM: an upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

      @defaultValue `0.5`
     */
    nu?: number

    /**
      Whether the intercept should be estimated or not. Defaults to `true`.

      @defaultValue `true`
     */
    fit_intercept?: boolean

    /**
      The maximum number of passes over the training data (aka epochs). It only impacts the behavior in the `fit` method, and not the `partial\_fit`. Defaults to 1000.

      @defaultValue `1000`
     */
    max_iter?: number

    /**
      The stopping criterion. If it is not `undefined`, the iterations will stop when (loss > previous\_loss - tol). Defaults to 1e-3.

      @defaultValue `0.001`
     */
    tol?: number

    /**
      Whether or not the training data should be shuffled after each epoch. Defaults to `true`.

      @defaultValue `true`
     */
    shuffle?: boolean

    /**
      The verbosity level.

      @defaultValue `0`
     */
    verbose?: number

    /**
      The seed of the pseudo random number generator to use when shuffling the data. If int, random\_state is the seed used by the random number generator; If RandomState instance, random\_state is the random number generator; If `undefined`, the random number generator is the RandomState instance used by `np.random`.
     */
    random_state?: number

    /**
      The learning rate schedule to use with `fit`. (If using `partial\_fit`, learning rate must be controlled directly).

      @defaultValue `'optimal'`
     */
    learning_rate?: 'constant' | 'optimal' | 'invscaling' | 'adaptive'

    /**
      The initial learning rate for the ‘constant’, ‘invscaling’ or ‘adaptive’ schedules. The default value is 0.0 as eta0 is not used by the default schedule ‘optimal’.

      @defaultValue `0`
     */
    eta0?: number

    /**
      The exponent for inverse scaling learning rate \[default 0.5\].

      @defaultValue `0.5`
     */
    power_t?: number

    /**
      When set to `true`, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution. See [the Glossary](../../glossary.html#term-warm_start).

      Repeatedly calling fit or partial\_fit when warm\_start is `true` can result in a different solution than when calling fit a single time because of the way the data is shuffled. If a dynamic learning rate is used, the learning rate is adapted depending on the number of samples already seen. Calling `fit` resets this counter, while `partial\_fit` will result in increasing the existing counter.

      @defaultValue `false`
     */
    warm_start?: boolean

    /**
      When set to `true`, computes the averaged SGD weights and stores the result in the `coef\_` attribute. If set to an int greater than 1, averaging will begin once the total number of samples seen reaches average. So `average=10` will begin averaging after seeing 10 samples.

      @defaultValue `false`
     */
    average?: boolean | number
  }) {
    this.id = `SGDOneClassSVM${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SGDOneClassSVM.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.linear_model import SGDOneClassSVM
try: bridgeSGDOneClassSVM
except NameError: bridgeSGDOneClassSVM = {}
`

    // set up constructor params
    await this._py.ex`ctor_SGDOneClassSVM = {'nu': ${
      this.opts['nu'] ?? undefined
    }, 'fit_intercept': ${
      this.opts['fit_intercept'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'shuffle': ${this.opts['shuffle'] ?? undefined}, 'verbose': ${
      this.opts['verbose'] ?? undefined
    }, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }, 'learning_rate': ${this.opts['learning_rate'] ?? undefined}, 'eta0': ${
      this.opts['eta0'] ?? undefined
    }, 'power_t': ${this.opts['power_t'] ?? undefined}, 'warm_start': ${
      this.opts['warm_start'] ?? undefined
    }, 'average': ${this.opts['average'] ?? undefined}}

ctor_SGDOneClassSVM = {k: v for k, v in ctor_SGDOneClassSVM.items() if v is not None}`

    await this._py
      .ex`bridgeSGDOneClassSVM[${this.id}] = SGDOneClassSVM(**ctor_SGDOneClassSVM)`

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

    await this._py.ex`del bridgeSGDOneClassSVM[${this.id}]`

    this._isDisposed = true
  }

  /**
    Signed distance to the separating hyperplane.

    Signed distance is positive for an inlier and negative for an outlier.
   */
  async decision_function(opts: {
    /**
      Testing data.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before decision_function()'
      )
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_decision_function = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SGDOneClassSVM_decision_function = {k: v for k, v in pms_SGDOneClassSVM_decision_function.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_decision_function = bridgeSGDOneClassSVM[${this.id}].decision_function(**pms_SGDOneClassSVM_decision_function)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_decision_function.tolist() if hasattr(res_SGDOneClassSVM_decision_function, 'tolist') else res_SGDOneClassSVM_decision_function`
  }

  /**
    Convert coefficient matrix to dense array format.

    Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.
   */
  async densify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before densify()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_densify = {}

pms_SGDOneClassSVM_densify = {k: v for k, v in pms_SGDOneClassSVM_densify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_densify = bridgeSGDOneClassSVM[${this.id}].densify(**pms_SGDOneClassSVM_densify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_densify.tolist() if hasattr(res_SGDOneClassSVM_densify, 'tolist') else res_SGDOneClassSVM_densify`
  }

  /**
    Fit linear One-Class SVM with Stochastic Gradient Descent.

    This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      The initial coefficients to warm-start the optimization.
     */
    coef_init?: any

    /**
      The initial offset to warm-start the optimization.
     */
    offset_init?: any

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed. These weights will be multiplied with class\_weight (passed through the constructor) if class\_weight is specified.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'coef_init': ${
      opts['coef_init'] ?? undefined
    }, 'offset_init': ${opts['offset_init'] ?? undefined}, 'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_SGDOneClassSVM_fit = {k: v for k, v in pms_SGDOneClassSVM_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_fit = bridgeSGDOneClassSVM[${this.id}].fit(**pms_SGDOneClassSVM_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_fit.tolist() if hasattr(res_SGDOneClassSVM_fit, 'tolist') else res_SGDOneClassSVM_fit`
  }

  /**
    Perform fit on X and returns labels for X.

    Returns -1 for outliers and 1 for inliers.
   */
  async fit_predict(opts: {
    /**
      The input samples.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Not used, present for API consistency by convention.
     */
    y?: any
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before fit_predict()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_fit_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SGDOneClassSVM_fit_predict = {k: v for k, v in pms_SGDOneClassSVM_fit_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_fit_predict = bridgeSGDOneClassSVM[${this.id}].fit_predict(**pms_SGDOneClassSVM_fit_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_fit_predict.tolist() if hasattr(res_SGDOneClassSVM_fit_predict, 'tolist') else res_SGDOneClassSVM_fit_predict`
  }

  /**
    Fit linear One-Class SVM with Stochastic Gradient Descent.
   */
  async partial_fit(opts: {
    /**
      Subset of the training data.
     */
    X?: ArrayLike | SparseMatrix

    /**
      Not used, present for API consistency by convention.
     */
    y?: any

    /**
      Weights applied to individual samples. If not provided, uniform weights are assumed.
     */
    sample_weight?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_partial_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}, 'sample_weight': ${
      opts['sample_weight'] ?? undefined
    }}

pms_SGDOneClassSVM_partial_fit = {k: v for k, v in pms_SGDOneClassSVM_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_partial_fit = bridgeSGDOneClassSVM[${this.id}].partial_fit(**pms_SGDOneClassSVM_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_partial_fit.tolist() if hasattr(res_SGDOneClassSVM_partial_fit, 'tolist') else res_SGDOneClassSVM_partial_fit`
  }

  /**
    Return labels (1 inlier, -1 outlier) of the samples.
   */
  async predict(opts: {
    /**
      Testing data.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_predict = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SGDOneClassSVM_predict = {k: v for k, v in pms_SGDOneClassSVM_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_predict = bridgeSGDOneClassSVM[${this.id}].predict(**pms_SGDOneClassSVM_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_predict.tolist() if hasattr(res_SGDOneClassSVM_predict, 'tolist') else res_SGDOneClassSVM_predict`
  }

  /**
    Raw scoring function of the samples.
   */
  async score_samples(opts: {
    /**
      Testing data.
     */
    X?: ArrayLike | SparseMatrix
  }): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_score_samples = {'X': ${
      opts['X'] ?? undefined
    }}

pms_SGDOneClassSVM_score_samples = {k: v for k, v in pms_SGDOneClassSVM_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_score_samples = bridgeSGDOneClassSVM[${this.id}].score_samples(**pms_SGDOneClassSVM_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_score_samples.tolist() if hasattr(res_SGDOneClassSVM_score_samples, 'tolist') else res_SGDOneClassSVM_score_samples`
  }

  /**
    Convert coefficient matrix to sparse format.

    Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

    The `intercept\_` member is not converted.
   */
  async sparsify(opts: {}): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before sparsify()')
    }

    // set up method params
    await this._py.ex`pms_SGDOneClassSVM_sparsify = {}

pms_SGDOneClassSVM_sparsify = {k: v for k, v in pms_SGDOneClassSVM_sparsify.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SGDOneClassSVM_sparsify = bridgeSGDOneClassSVM[${this.id}].sparsify(**pms_SGDOneClassSVM_sparsify)`

    // convert the result from python to node.js
    return this
      ._py`res_SGDOneClassSVM_sparsify.tolist() if hasattr(res_SGDOneClassSVM_sparsify, 'tolist') else res_SGDOneClassSVM_sparsify`
  }

  /**
    Weights assigned to the features.
   */
  get coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before accessing coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_coef_ = bridgeSGDOneClassSVM[${this.id}].coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_coef_.tolist() if hasattr(attr_SGDOneClassSVM_coef_, 'tolist') else attr_SGDOneClassSVM_coef_`
    })()
  }

  /**
    Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - offset.
   */
  get offset_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before accessing offset_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_offset_ = bridgeSGDOneClassSVM[${this.id}].offset_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_offset_.tolist() if hasattr(attr_SGDOneClassSVM_offset_, 'tolist') else attr_SGDOneClassSVM_offset_`
    })()
  }

  /**
    The actual number of iterations to reach the stopping criterion.
   */
  get n_iter_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before accessing n_iter_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_n_iter_ = bridgeSGDOneClassSVM[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_n_iter_.tolist() if hasattr(attr_SGDOneClassSVM_n_iter_, 'tolist') else attr_SGDOneClassSVM_n_iter_`
    })()
  }

  /**
    Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.
   */
  get t_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SGDOneClassSVM must call init() before accessing t_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_t_ = bridgeSGDOneClassSVM[${this.id}].t_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_t_.tolist() if hasattr(attr_SGDOneClassSVM_t_, 'tolist') else attr_SGDOneClassSVM_t_`
    })()
  }

  get loss_function_(): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before accessing loss_function_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_loss_function_ = bridgeSGDOneClassSVM[${this.id}].loss_function_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_loss_function_.tolist() if hasattr(attr_SGDOneClassSVM_loss_function_, 'tolist') else attr_SGDOneClassSVM_loss_function_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_n_features_in_ = bridgeSGDOneClassSVM[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_n_features_in_.tolist() if hasattr(attr_SGDOneClassSVM_n_features_in_, 'tolist') else attr_SGDOneClassSVM_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SGDOneClassSVM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SGDOneClassSVM must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SGDOneClassSVM_feature_names_in_ = bridgeSGDOneClassSVM[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SGDOneClassSVM_feature_names_in_.tolist() if hasattr(attr_SGDOneClassSVM_feature_names_in_, 'tolist') else attr_SGDOneClassSVM_feature_names_in_`
    })()
  }
}
