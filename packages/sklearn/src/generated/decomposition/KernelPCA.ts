/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Kernel Principal component analysis (KPCA) [1].

  Non-linear dimensionality reduction through the use of kernels (see Pairwise metrics, Affinities and Kernels).

  It uses the scipy.linalg.eigh LAPACK implementation of the full SVD or the scipy.sparse.linalg.eigsh ARPACK implementation of the truncated SVD, depending on the shape of the input data and the number of components to extract. It can also use a randomized truncated SVD by the method proposed in [3], see eigen_solver.

  @see https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html
 */
export class KernelPCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: KernelPCAOptions) {
    this.id = `KernelPCA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('KernelPCA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.decomposition import KernelPCA
try: bridgeKernelPCA
except NameError: bridgeKernelPCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_KernelPCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'kernel': ${this.opts['kernel'] ?? undefined}, 'gamma': ${
      this.opts['gamma'] ?? undefined
    }, 'degree': ${this.opts['degree'] ?? undefined}, 'coef0': ${
      this.opts['coef0'] ?? undefined
    }, 'kernel_params': ${this.opts['kernel_params'] ?? undefined}, 'alpha': ${
      this.opts['alpha'] ?? undefined
    }, 'fit_inverse_transform': ${
      this.opts['fit_inverse_transform'] ?? undefined
    }, 'eigen_solver': ${this.opts['eigen_solver'] ?? undefined}, 'tol': ${
      this.opts['tol'] ?? undefined
    }, 'max_iter': ${this.opts['max_iter'] ?? undefined}, 'iterated_power': ${
      this.opts['iterated_power'] ?? undefined
    }, 'remove_zero_eig': ${
      this.opts['remove_zero_eig'] ?? undefined
    }, 'random_state': ${this.opts['random_state'] ?? undefined}, 'copy_X': ${
      this.opts['copy_X'] ?? undefined
    }, 'n_jobs': ${this.opts['n_jobs'] ?? undefined}}

ctor_KernelPCA = {k: v for k, v in ctor_KernelPCA.items() if v is not None}`

    await this._py.ex`bridgeKernelPCA[${this.id}] = KernelPCA(**ctor_KernelPCA)`

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

    await this._py.ex`del bridgeKernelPCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit the model from data in X.
   */
  async fit(opts: KernelPCAFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_KernelPCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${opts['y'] ?? undefined}}

pms_KernelPCA_fit = {k: v for k, v in pms_KernelPCA_fit.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_fit = bridgeKernelPCA[${this.id}].fit(**pms_KernelPCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_fit.tolist() if hasattr(res_KernelPCA_fit, 'tolist') else res_KernelPCA_fit`
  }

  /**
    Fit the model from data in X and transform X.
   */
  async fit_transform(opts: KernelPCAFitTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_KernelPCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': ${
      opts['y'] ?? undefined
    }, 'params': ${opts['params'] ?? undefined}}

pms_KernelPCA_fit_transform = {k: v for k, v in pms_KernelPCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_fit_transform = bridgeKernelPCA[${this.id}].fit_transform(**pms_KernelPCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_fit_transform.tolist() if hasattr(res_KernelPCA_fit_transform, 'tolist') else res_KernelPCA_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: ["class_name0", "class_name1", "class_name2"].
   */
  async get_feature_names_out(
    opts: KernelPCAGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before get_feature_names_out()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_KernelPCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_KernelPCA_get_feature_names_out = {k: v for k, v in pms_KernelPCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_get_feature_names_out = bridgeKernelPCA[${this.id}].get_feature_names_out(**pms_KernelPCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_get_feature_names_out.tolist() if hasattr(res_KernelPCA_get_feature_names_out, 'tolist') else res_KernelPCA_get_feature_names_out`
  }

  /**
    Transform X back to original space.

    inverse_transform approximates the inverse transformation using a learned pre-image. The pre-image is learned by kernel ridge regression of the original data on their low-dimensional representation vectors.
   */
  async inverse_transform(
    opts: KernelPCAInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_KernelPCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KernelPCA_inverse_transform = {k: v for k, v in pms_KernelPCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_inverse_transform = bridgeKernelPCA[${this.id}].inverse_transform(**pms_KernelPCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_inverse_transform.tolist() if hasattr(res_KernelPCA_inverse_transform, 'tolist') else res_KernelPCA_inverse_transform`
  }

  /**
    Set output container.

    See Introducing the set_output API for an example on how to use the API.
   */
  async set_output(opts: KernelPCASetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_KernelPCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_KernelPCA_set_output = {k: v for k, v in pms_KernelPCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_set_output = bridgeKernelPCA[${this.id}].set_output(**pms_KernelPCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_set_output.tolist() if hasattr(res_KernelPCA_set_output, 'tolist') else res_KernelPCA_set_output`
  }

  /**
    Transform X.
   */
  async transform(opts: KernelPCATransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_KernelPCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None}

pms_KernelPCA_transform = {k: v for k, v in pms_KernelPCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_KernelPCA_transform = bridgeKernelPCA[${this.id}].transform(**pms_KernelPCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_KernelPCA_transform.tolist() if hasattr(res_KernelPCA_transform, 'tolist') else res_KernelPCA_transform`
  }

  /**
    Eigenvalues of the centered kernel matrix in decreasing order. If n_components and remove_zero_eig are not set, then all values are stored.
   */
  get eigenvalues_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before accessing eigenvalues_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_eigenvalues_ = bridgeKernelPCA[${this.id}].eigenvalues_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_eigenvalues_.tolist() if hasattr(attr_KernelPCA_eigenvalues_, 'tolist') else attr_KernelPCA_eigenvalues_`
    })()
  }

  /**
    Eigenvectors of the centered kernel matrix. If n_components and remove_zero_eig are not set, then all components are stored.
   */
  get eigenvectors_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before accessing eigenvectors_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_eigenvectors_ = bridgeKernelPCA[${this.id}].eigenvectors_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_eigenvectors_.tolist() if hasattr(attr_KernelPCA_eigenvectors_, 'tolist') else attr_KernelPCA_eigenvectors_`
    })()
  }

  /**
    Inverse transform matrix. Only available when fit_inverse_transform is True.
   */
  get dual_coef_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before accessing dual_coef_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_dual_coef_ = bridgeKernelPCA[${this.id}].dual_coef_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_dual_coef_.tolist() if hasattr(attr_KernelPCA_dual_coef_, 'tolist') else attr_KernelPCA_dual_coef_`
    })()
  }

  /**
    Projection of the fitted data on the kernel principal components. Only available when fit_inverse_transform is True.
   */
  get X_transformed_fit_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before accessing X_transformed_fit_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_X_transformed_fit_ = bridgeKernelPCA[${this.id}].X_transformed_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_X_transformed_fit_.tolist() if hasattr(attr_KernelPCA_X_transformed_fit_, 'tolist') else attr_KernelPCA_X_transformed_fit_`
    })()
  }

  /**
    The data used to fit the model. If copy_X=False, then X_fit_ is a reference. This attribute is used for the calls to transform.
   */
  get X_fit_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('KernelPCA must call init() before accessing X_fit_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_X_fit_ = bridgeKernelPCA[${this.id}].X_fit_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_X_fit_.tolist() if hasattr(attr_KernelPCA_X_fit_, 'tolist') else attr_KernelPCA_X_fit_`
    })()
  }

  /**
    Number of features seen during fit.
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before accessing n_features_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_n_features_in_ = bridgeKernelPCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_n_features_in_.tolist() if hasattr(attr_KernelPCA_n_features_in_, 'tolist') else attr_KernelPCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during fit. Defined only when X has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This KernelPCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'KernelPCA must call init() before accessing feature_names_in_'
      )
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_KernelPCA_feature_names_in_ = bridgeKernelPCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_KernelPCA_feature_names_in_.tolist() if hasattr(attr_KernelPCA_feature_names_in_, 'tolist') else attr_KernelPCA_feature_names_in_`
    })()
  }
}

export interface KernelPCAOptions {
  /**
    Number of components. If None, all non-zero components are kept.
   */
  n_components?: number

  /**
    Kernel used for PCA.

    @defaultValue `'linear'`
   */
  kernel?: 'linear' | 'poly' | 'rbf' | 'sigmoid' | 'cosine' | 'precomputed'

  /**
    Kernel coefficient for rbf, poly and sigmoid kernels. Ignored by other kernels. If gamma is None, then it is set to 1/n_features.
   */
  gamma?: number

  /**
    Degree for poly kernels. Ignored by other kernels.

    @defaultValue `3`
   */
  degree?: number

  /**
    Independent term in poly and sigmoid kernels. Ignored by other kernels.

    @defaultValue `1`
   */
  coef0?: number

  /**
    Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.
   */
  kernel_params?: any

  /**
    Hyperparameter of the ridge regression that learns the inverse transform (when fit_inverse_transform=True).

    @defaultValue `1`
   */
  alpha?: number

  /**
    Learn the inverse transform for non-precomputed kernels (i.e. learn to find the pre-image of a point). This method is based on [2].

    @defaultValue `false`
   */
  fit_inverse_transform?: boolean

  /**
    Select eigensolver to use. If n_components is much less than the number of training samples, randomized (or arpack to a smaller extent) may be more efficient than the dense eigensolver. Randomized SVD is performed according to the method of Halko et al [3].

    @defaultValue `'auto'`
   */
  eigen_solver?: 'auto' | 'dense' | 'arpack' | 'randomized'

  /**
    Convergence tolerance for arpack. If 0, optimal value will be chosen by arpack.

    @defaultValue `0`
   */
  tol?: number

  /**
    Maximum number of iterations for arpack. If None, optimal value will be chosen by arpack.
   */
  max_iter?: number

  /**
    Number of iterations for the power method computed by svd_solver == ‘randomized’. When ‘auto’, it is set to 7 when n_components < 0.1 * min(X.shape), other it is set to 4.

    @defaultValue `'auto'`
   */
  iterated_power?: 'auto'

  /**
    If True, then all components with zero eigenvalues are removed, so that the number of components in the output may be < n_components (and sometimes even zero due to numerical instability). When n_components is None, this parameter is ignored and components with zero eigenvalues are removed regardless.

    @defaultValue `false`
   */
  remove_zero_eig?: boolean

  /**
    Used when eigen_solver == ‘arpack’ or ‘randomized’. Pass an int for reproducible results across multiple function calls. See Glossary.
   */
  random_state?: number

  /**
    If True, input X is copied and stored by the model in the X_fit_ attribute. If no further changes will be done to X, setting copy_X=False saves memory by storing a reference.

    @defaultValue `true`
   */
  copy_X?: boolean

  /**
    The number of parallel jobs to run. None means 1 unless in a joblib.parallel_backend context. -1 means using all processors. See Glossary for more details.
   */
  n_jobs?: number
}

export interface KernelPCAFitOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any
}

export interface KernelPCAFitTransformOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]

  /**
    Not used, present for API consistency by convention.
   */
  y?: any

  /**
    Parameters (keyword arguments) and values passed to the fit_transform instance.
   */
  params?: any
}

export interface KernelPCAGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in fit.
   */
  input_features?: any
}

export interface KernelPCAInverseTransformOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]
}

export interface KernelPCASetOutputOptions {
  /**
    Configure output of transform and fit_transform.
   */
  transform?: 'default' | 'pandas'
}

export interface KernelPCATransformOptions {
  /**
    Training vector, where n_samples is the number of samples and n_features is the number of features.
   */
  X?: ArrayLike | SparseMatrix[]
}
