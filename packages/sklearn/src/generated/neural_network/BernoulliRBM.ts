/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Bernoulli Restricted Boltzmann Machine (RBM).

  A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

  The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n\_features ~ n\_components.

  Read more in the [User Guide](../neural_networks_unsupervised.html#rbm).

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html)
 */
export class BernoulliRBM {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      Number of binary hidden units.

      @defaultValue `256`
     */
    n_components?: number

    /**
      The learning rate for weight updates. It is *highly* recommended to tune this hyper-parameter. Reasonable values are in the 10\*\*\[0., -3.\] range.

      @defaultValue `0.1`
     */
    learning_rate?: number

    /**
      Number of examples per minibatch.

      @defaultValue `10`
     */
    batch_size?: number

    /**
      Number of iterations/sweeps over the training dataset to perform during training.

      @defaultValue `10`
     */
    n_iter?: number

    /**
      The verbosity level. The default, zero, means silent mode. Range of values is \[0, inf\].

      @defaultValue `0`
     */
    verbose?: number

    /**
      Determines random number generation for:
     */
    random_state?: number
  }) {
    this.id = `BernoulliRBM${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('BernoulliRBM.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.neural_network import BernoulliRBM
try: bridgeBernoulliRBM
except NameError: bridgeBernoulliRBM = {}
`

    // set up constructor params
    await this._py.ex`ctor_BernoulliRBM = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'learning_rate': ${
      this.opts['learning_rate'] ?? undefined
    }, 'batch_size': ${this.opts['batch_size'] ?? undefined}, 'n_iter': ${
      this.opts['n_iter'] ?? undefined
    }, 'verbose': ${this.opts['verbose'] ?? undefined}, 'random_state': ${
      this.opts['random_state'] ?? undefined
    }}

ctor_BernoulliRBM = {k: v for k, v in ctor_BernoulliRBM.items() if v is not None}`

    await this._py
      .ex`bridgeBernoulliRBM[${this.id}] = BernoulliRBM(**ctor_BernoulliRBM)`

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

    await this._py.ex`del bridgeBernoulliRBM[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model to the data X.
   */
  async fit(opts: {
    /**
      Training data.
     */
    X?: ArrayLike | SparseMatrix[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_BernoulliRBM_fit = {k: v for k, v in pms_BernoulliRBM_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_fit = bridgeBernoulliRBM[${this.id}].fit(**pms_BernoulliRBM_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_fit.tolist() if hasattr(res_BernoulliRBM_fit, 'tolist') else res_BernoulliRBM_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: {
    /**
      Input samples.
     */
    X?: ArrayLike[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike

    /**
      Additional fit parameters.
     */
    fit_params?: any
  }): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_BernoulliRBM_fit_transform = {k: v for k, v in pms_BernoulliRBM_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_fit_transform = bridgeBernoulliRBM[${this.id}].fit_transform(**pms_BernoulliRBM_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_fit_transform.tolist() if hasattr(res_BernoulliRBM_fit_transform, 'tolist') else res_BernoulliRBM_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(opts: {
    /**
      Only used to validate feature names with the names seen in `fit`.
     */
    input_features?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_BernoulliRBM_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_BernoulliRBM_get_feature_names_out = {k: v for k, v in pms_BernoulliRBM_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_get_feature_names_out = bridgeBernoulliRBM[${this.id}].get_feature_names_out(**pms_BernoulliRBM_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_get_feature_names_out.tolist() if hasattr(res_BernoulliRBM_get_feature_names_out, 'tolist') else res_BernoulliRBM_get_feature_names_out`
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
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before get_metadata_routing()'
      )
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_get_metadata_routing = {'routing': ${
      opts['routing'] ?? undefined
    }}

pms_BernoulliRBM_get_metadata_routing = {k: v for k, v in pms_BernoulliRBM_get_metadata_routing.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_get_metadata_routing = bridgeBernoulliRBM[${this.id}].get_metadata_routing(**pms_BernoulliRBM_get_metadata_routing)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_get_metadata_routing.tolist() if hasattr(res_BernoulliRBM_get_metadata_routing, 'tolist') else res_BernoulliRBM_get_metadata_routing`
  }

  /**
    Perform one Gibbs sampling step.
   */
  async gibbs(opts: {
    /**
      Values of the visible layer to start from.
     */
    v?: NDArray[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before gibbs()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_gibbs = {'v': np.array(${
      opts['v'] ?? undefined
    }) if ${opts['v'] !== undefined} else None}

pms_BernoulliRBM_gibbs = {k: v for k, v in pms_BernoulliRBM_gibbs.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_gibbs = bridgeBernoulliRBM[${this.id}].gibbs(**pms_BernoulliRBM_gibbs)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_gibbs.tolist() if hasattr(res_BernoulliRBM_gibbs, 'tolist') else res_BernoulliRBM_gibbs`
  }

  /**
    Fit the model to the partial segment of the data X.
   */
  async partial_fit(opts: {
    /**
      Training data.
     */
    X?: NDArray[]

    /**
      Target values (`undefined` for unsupervised transformations).
     */
    y?: ArrayLike
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before partial_fit()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_partial_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_BernoulliRBM_partial_fit = {k: v for k, v in pms_BernoulliRBM_partial_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_partial_fit = bridgeBernoulliRBM[${this.id}].partial_fit(**pms_BernoulliRBM_partial_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_partial_fit.tolist() if hasattr(res_BernoulliRBM_partial_fit, 'tolist') else res_BernoulliRBM_partial_fit`
  }

  /**
    Compute the pseudo-likelihood of X.
   */
  async score_samples(opts: {
    /**
      Values of the visible layer. Must be all-boolean (not checked).
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before score_samples()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_score_samples = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BernoulliRBM_score_samples = {k: v for k, v in pms_BernoulliRBM_score_samples.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_score_samples = bridgeBernoulliRBM[${this.id}].score_samples(**pms_BernoulliRBM_score_samples)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_score_samples.tolist() if hasattr(res_BernoulliRBM_score_samples, 'tolist') else res_BernoulliRBM_score_samples`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: {
    /**
      Configure output of `transform` and `fit\_transform`.
     */
    transform?: 'default' | 'pandas'
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_BernoulliRBM_set_output = {k: v for k, v in pms_BernoulliRBM_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_set_output = bridgeBernoulliRBM[${this.id}].set_output(**pms_BernoulliRBM_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_set_output.tolist() if hasattr(res_BernoulliRBM_set_output, 'tolist') else res_BernoulliRBM_set_output`
  }

  /**
    Compute the hidden layer activation probabilities, P(h=1|v=X).
   */
  async transform(opts: {
    /**
      The data to be transformed.
     */
    X?: ArrayLike | SparseMatrix[]
  }): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('BernoulliRBM must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_BernoulliRBM_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_BernoulliRBM_transform = {k: v for k, v in pms_BernoulliRBM_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_BernoulliRBM_transform = bridgeBernoulliRBM[${this.id}].transform(**pms_BernoulliRBM_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_BernoulliRBM_transform.tolist() if hasattr(res_BernoulliRBM_transform, 'tolist') else res_BernoulliRBM_transform`
  }

  /**
    Biases of the hidden units.
   */
  get intercept_hidden_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing intercept_hidden_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_intercept_hidden_ = bridgeBernoulliRBM[${this.id}].intercept_hidden_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_intercept_hidden_.tolist() if hasattr(attr_BernoulliRBM_intercept_hidden_, 'tolist') else attr_BernoulliRBM_intercept_hidden_`
    })()
  }

  /**
    Biases of the visible units.
   */
  get intercept_visible_(): Promise<ArrayLike> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing intercept_visible_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_intercept_visible_ = bridgeBernoulliRBM[${this.id}].intercept_visible_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_intercept_visible_.tolist() if hasattr(attr_BernoulliRBM_intercept_visible_, 'tolist') else attr_BernoulliRBM_intercept_visible_`
    })()
  }

  /**
    Weight matrix, where `n\_features` is the number of visible units and `n\_components` is the number of hidden units.
   */
  get components_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing components_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_components_ = bridgeBernoulliRBM[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_components_.tolist() if hasattr(attr_BernoulliRBM_components_, 'tolist') else attr_BernoulliRBM_components_`
    })()
  }

  /**
    Hidden Activation sampled from the model distribution, where `batch\_size` is the number of examples per minibatch and `n\_components` is the number of hidden units.
   */
  get h_samples_(): Promise<ArrayLike[]> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing h_samples_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_h_samples_ = bridgeBernoulliRBM[${this.id}].h_samples_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_h_samples_.tolist() if hasattr(attr_BernoulliRBM_h_samples_, 'tolist') else attr_BernoulliRBM_h_samples_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_n_features_in_ = bridgeBernoulliRBM[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_n_features_in_.tolist() if hasattr(attr_BernoulliRBM_n_features_in_, 'tolist') else attr_BernoulliRBM_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This BernoulliRBM instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'BernoulliRBM must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_BernoulliRBM_feature_names_in_ = bridgeBernoulliRBM[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_BernoulliRBM_feature_names_in_.tolist() if hasattr(attr_BernoulliRBM_feature_names_in_, 'tolist') else attr_BernoulliRBM_feature_names_in_`
    })()
  }
}
