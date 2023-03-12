/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Approximate a kernel map using a subset of the training data.

  Constructs an approximate feature map for an arbitrary kernel using a subset of the data as basis.

  Read more in the [User Guide](../kernel_approximation.html#nystroem-kernel-approx).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.kernel_approximation.Nystroem.html
 */
export class Nystroem {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: NystroemOptions) {
    this.id = `Nystroem${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('Nystroem.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.kernel_approximation import Nystroem
try: bridgeNystroem
except NameError: bridgeNystroem = {}
`

    // set up constructor params
    await this._py.ex`ctor_Nystroem = {'kernel': ${
      this.opts['kernel'] ?? undefined
    }, 'gamma': ${this.opts['gamma'] ?? undefined}, 'coef0': ${
      this.opts['coef0'] ?? undefined
    }, 'degree': ${this.opts['degree'] ?? undefined}, 'kernel_params': ${
      this.opts['kernel_params'] ?? undefined
    }, 'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }}

ctor_Nystroem = {k: v for k, v in ctor_Nystroem.items() if v is not None}`

    await this._py.ex`bridgeNystroem[${this.id}] = Nystroem(**ctor_Nystroem)`

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

    await this._py.ex`del bridgeNystroem[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit estimator to data.

    Samples a subset of training points, computes kernel on these and computes normalization matrix.
   */
  async fit(opts: NystroemFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Nystroem must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_Nystroem_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_Nystroem_fit = {k: v for k, v in pms_Nystroem_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Nystroem_fit = bridgeNystroem[${this.id}].fit(**pms_Nystroem_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_Nystroem_fit.tolist() if hasattr(res_Nystroem_fit, 'tolist') else res_Nystroem_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: NystroemFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Nystroem must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_Nystroem_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_Nystroem_fit_transform = {k: v for k, v in pms_Nystroem_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Nystroem_fit_transform = bridgeNystroem[${this.id}].fit_transform(**pms_Nystroem_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Nystroem_fit_transform.tolist() if hasattr(res_Nystroem_fit_transform, 'tolist') else res_Nystroem_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: NystroemGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Nystroem must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py.ex`pms_Nystroem_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_Nystroem_get_feature_names_out = {k: v for k, v in pms_Nystroem_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Nystroem_get_feature_names_out = bridgeNystroem[${this.id}].get_feature_names_out(**pms_Nystroem_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_Nystroem_get_feature_names_out.tolist() if hasattr(res_Nystroem_get_feature_names_out, 'tolist') else res_Nystroem_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: NystroemSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Nystroem must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_Nystroem_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_Nystroem_set_output = {k: v for k, v in pms_Nystroem_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Nystroem_set_output = bridgeNystroem[${this.id}].set_output(**pms_Nystroem_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_Nystroem_set_output.tolist() if hasattr(res_Nystroem_set_output, 'tolist') else res_Nystroem_set_output`
  }

  /**
    Apply feature map to X.

    Computes an approximate feature map using the kernel between some training points and X.
   */
  async transform(opts: NystroemTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Nystroem must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_Nystroem_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_Nystroem_transform = {k: v for k, v in pms_Nystroem_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_Nystroem_transform = bridgeNystroem[${this.id}].transform(**pms_Nystroem_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_Nystroem_transform.tolist() if hasattr(res_Nystroem_transform, 'tolist') else res_Nystroem_transform`
  }

  /**
    Subset of training points used to construct the feature map.
   */
  get components_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('Nystroem must call init() before accessing components_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Nystroem_components_ = bridgeNystroem[${this.id}].components_`

      // convert the result from python to node.js
      return this
        ._py`attr_Nystroem_components_.tolist() if hasattr(attr_Nystroem_components_, 'tolist') else attr_Nystroem_components_`
    })()
  }

  /**
    Indices of `components\_` in the training set.
   */
  get component_indices_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Nystroem must call init() before accessing component_indices_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Nystroem_component_indices_ = bridgeNystroem[${this.id}].component_indices_`

      // convert the result from python to node.js
      return this
        ._py`attr_Nystroem_component_indices_.tolist() if hasattr(attr_Nystroem_component_indices_, 'tolist') else attr_Nystroem_component_indices_`
    })()
  }

  /**
    Normalization matrix needed for embedding. Square root of the kernel matrix on `components\_`.
   */
  get normalization_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Nystroem must call init() before accessing normalization_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Nystroem_normalization_ = bridgeNystroem[${this.id}].normalization_`

      // convert the result from python to node.js
      return this
        ._py`attr_Nystroem_normalization_.tolist() if hasattr(attr_Nystroem_normalization_, 'tolist') else attr_Nystroem_normalization_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Nystroem must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Nystroem_n_features_in_ = bridgeNystroem[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Nystroem_n_features_in_.tolist() if hasattr(attr_Nystroem_n_features_in_, 'tolist') else attr_Nystroem_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This Nystroem instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'Nystroem must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_Nystroem_feature_names_in_ = bridgeNystroem[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_Nystroem_feature_names_in_.tolist() if hasattr(attr_Nystroem_feature_names_in_, 'tolist') else attr_Nystroem_feature_names_in_`
    })()
  }
}

export interface NystroemOptions {
  /**
    Kernel map to be approximated. A callable should accept two arguments and the keyword arguments passed to this object as `kernel\_params`, and should return a floating point number.

    @defaultValue `'rbf'`
   */
  kernel?: string

  /**
    Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels.
   */
  gamma?: number

  /**
    Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.
   */
  coef0?: number

  /**
    Degree of the polynomial kernel. Ignored by other kernels.
   */
  degree?: number

  /**
    Additional parameters (keyword arguments) for kernel function passed as callable object.
   */
  kernel_params?: any

  /**
    Number of features to construct. How many data points will be used to construct the mapping.

    @defaultValue `100`
   */
  n_components?: number

  /**
    Pseudo-random number generator to control the uniform sampling without replacement of `n\_components` of the training data to construct the basis kernel. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).
   */
  random_state?: number

  /**
    The number of jobs to use for the computation. This works by breaking down the kernel matrix into `n\_jobs` even slices and computing them in parallel.

    `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number
}

export interface NystroemFitOptions {
  /**
    Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: ArrayLike

  /**
    Target values (None for unsupervised transformations).
   */
  y?: ArrayLike
}

export interface NystroemFitTransformOptions {
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

export interface NystroemGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.kernel_approximation.Nystroem.fit "sklearn.kernel_approximation.Nystroem.fit").
   */
  input_features?: any
}

export interface NystroemSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface NystroemTransformOptions {
  /**
    Data to transform.
   */
  X?: ArrayLike[]
}
