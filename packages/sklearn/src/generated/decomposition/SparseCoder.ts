/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Sparse coding.

  Finds a sparse representation of data against a fixed, precomputed dictionary.

  Each row of the result is the solution to a sparse coding problem. The goal is to find a sparse array `code` such that:

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparseCoder.html
 */
export class SparseCoder {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: SparseCoderOptions) {
    this.id = `SparseCoder${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('SparseCoder.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import SparseCoder
try: bridgeSparseCoder
except NameError: bridgeSparseCoder = {}
`

    // set up constructor params
    await this._py.ex`ctor_SparseCoder = {'dictionary': np.array(${
      this.opts['dictionary'] ?? undefined
    }) if ${
      this.opts['dictionary'] !== undefined
    } else None, 'transform_algorithm': ${
      this.opts['transform_algorithm'] ?? undefined
    }, 'transform_n_nonzero_coefs': ${
      this.opts['transform_n_nonzero_coefs'] ?? undefined
    }, 'transform_alpha': ${
      this.opts['transform_alpha'] ?? undefined
    }, 'split_sign': ${this.opts['split_sign'] ?? undefined}, 'n_jobs': ${
      this.opts['n_jobs'] ?? undefined
    }, 'positive_code': ${
      this.opts['positive_code'] ?? undefined
    }, 'transform_max_iter': ${this.opts['transform_max_iter'] ?? undefined}}

ctor_SparseCoder = {k: v for k, v in ctor_SparseCoder.items() if v is not None}`

    await this._py
      .ex`bridgeSparseCoder[${this.id}] = SparseCoder(**ctor_SparseCoder)`

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

    await this._py.ex`del bridgeSparseCoder[${this.id}]`

    this._isDisposed = true
  }

  /**
    Do nothing and return the estimator unchanged.

    This method is just there to implement the usual API and hence work in pipelines.
   */
  async fit(opts: SparseCoderFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparseCoder must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_SparseCoder_fit = {'X': ${
      opts['X'] ?? undefined
    }, 'y': ${opts['y'] ?? undefined}}

pms_SparseCoder_fit = {k: v for k, v in pms_SparseCoder_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseCoder_fit = bridgeSparseCoder[${this.id}].fit(**pms_SparseCoder_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseCoder_fit.tolist() if hasattr(res_SparseCoder_fit, 'tolist') else res_SparseCoder_fit`
  }

  /**
    Fit to data, then transform it.

    Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.
   */
  async fit_transform(opts: SparseCoderFitTransformOptions): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparseCoder must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_SparseCoder_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'fit_params': ${
      opts['fit_params'] ?? undefined
    }}

pms_SparseCoder_fit_transform = {k: v for k, v in pms_SparseCoder_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseCoder_fit_transform = bridgeSparseCoder[${this.id}].fit_transform(**pms_SparseCoder_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseCoder_fit_transform.tolist() if hasattr(res_SparseCoder_fit_transform, 'tolist') else res_SparseCoder_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: SparseCoderGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseCoder must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_SparseCoder_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_SparseCoder_get_feature_names_out = {k: v for k, v in pms_SparseCoder_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseCoder_get_feature_names_out = bridgeSparseCoder[${this.id}].get_feature_names_out(**pms_SparseCoder_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseCoder_get_feature_names_out.tolist() if hasattr(res_SparseCoder_get_feature_names_out, 'tolist') else res_SparseCoder_get_feature_names_out`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: SparseCoderSetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparseCoder must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_SparseCoder_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_SparseCoder_set_output = {k: v for k, v in pms_SparseCoder_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseCoder_set_output = bridgeSparseCoder[${this.id}].set_output(**pms_SparseCoder_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseCoder_set_output.tolist() if hasattr(res_SparseCoder_set_output, 'tolist') else res_SparseCoder_set_output`
  }

  /**
    Encode the data as a sparse combination of the dictionary atoms.

    Coding method is determined by the object parameter `transform\_algorithm`.
   */
  async transform(opts: SparseCoderTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('SparseCoder must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_SparseCoder_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_SparseCoder_transform = {k: v for k, v in pms_SparseCoder_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_SparseCoder_transform = bridgeSparseCoder[${this.id}].transform(**pms_SparseCoder_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_SparseCoder_transform.tolist() if hasattr(res_SparseCoder_transform, 'tolist') else res_SparseCoder_transform`
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This SparseCoder instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'SparseCoder must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_SparseCoder_feature_names_in_ = bridgeSparseCoder[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_SparseCoder_feature_names_in_.tolist() if hasattr(attr_SparseCoder_feature_names_in_, 'tolist') else attr_SparseCoder_feature_names_in_`
    })()
  }
}

export interface SparseCoderOptions {
  /**
    The dictionary atoms used for sparse coding. Lines are assumed to be normalized to unit norm.
   */
  dictionary?: NDArray[]

  /**
    Algorithm used to transform the data:

    @defaultValue `'omp'`
   */
  transform_algorithm?: 'lasso_lars' | 'lasso_cd' | 'lars' | 'omp' | 'threshold'

  /**
    Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case. If `None`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.
   */
  transform_n_nonzero_coefs?: number

  /**
    If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n\_nonzero\_coefs`. If `None`, default to 1.
   */
  transform_alpha?: number

  /**
    Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

    @defaultValue `false`
   */
  split_sign?: boolean

  /**
    Number of parallel jobs to run. `None` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.
   */
  n_jobs?: number

  /**
    Whether to enforce positivity when finding the code.

    @defaultValue `false`
   */
  positive_code?: boolean

  /**
    Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `lasso\_lars`.

    @defaultValue `1000`
   */
  transform_max_iter?: number
}

export interface SparseCoderFitOptions {
  /**
    Not used, present for API consistency by convention.
   */
  X?: any

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface SparseCoderFitTransformOptions {
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

export interface SparseCoderGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.decomposition.SparseCoder.fit "sklearn.decomposition.SparseCoder.fit").
   */
  input_features?: any
}

export interface SparseCoderSetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface SparseCoderTransformOptions {
  /**
    Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.
   */
  X?: NDArray[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}
