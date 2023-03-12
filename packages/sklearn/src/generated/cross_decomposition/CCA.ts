/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Canonical Correlation Analysis, also known as “Mode B” PLS.

  Read more in the [User Guide](../cross_decomposition.html#cross-decomposition).

  @see https://scikit-learn.org/stable/modules/generated/sklearn.cross_decomposition.CCA.html
 */
export class CCA {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: CCAOptions) {
    this.id = `CCA${crypto.randomUUID().split('-')[0]}`
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
      throw new Error('This CCA instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('CCA.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.cross_decomposition import CCA
try: bridgeCCA
except NameError: bridgeCCA = {}
`

    // set up constructor params
    await this._py.ex`ctor_CCA = {'n_components': ${
      this.opts['n_components'] ?? undefined
    }, 'scale': ${this.opts['scale'] ?? undefined}, 'max_iter': ${
      this.opts['max_iter'] ?? undefined
    }, 'tol': ${this.opts['tol'] ?? undefined}, 'copy': ${
      this.opts['copy'] ?? undefined
    }}

ctor_CCA = {k: v for k, v in ctor_CCA.items() if v is not None}`

    await this._py.ex`bridgeCCA[${this.id}] = CCA(**ctor_CCA)`

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

    await this._py.ex`del bridgeCCA[${this.id}]`

    this._isDisposed = true
  }

  /**
    Fit model to data.
   */
  async fit(opts: CCAFitOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before fit()')
    }

    // set up method params
    await this._py.ex`pms_CCA_fit = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_CCA_fit = {k: v for k, v in pms_CCA_fit.items() if v is not None}`

    // invoke method
    await this._py.ex`res_CCA_fit = bridgeCCA[${this.id}].fit(**pms_CCA_fit)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_fit.tolist() if hasattr(res_CCA_fit, 'tolist') else res_CCA_fit`
  }

  /**
    Learn and apply the dimension reduction on the train data.
   */
  async fit_transform(opts: CCAFitTransformOptions): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before fit_transform()')
    }

    // set up method params
    await this._py.ex`pms_CCA_fit_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None}

pms_CCA_fit_transform = {k: v for k, v in pms_CCA_fit_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_fit_transform = bridgeCCA[${this.id}].fit_transform(**pms_CCA_fit_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_fit_transform.tolist() if hasattr(res_CCA_fit_transform, 'tolist') else res_CCA_fit_transform`
  }

  /**
    Get output feature names for transformation.

    The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.
   */
  async get_feature_names_out(
    opts: CCAGetFeatureNamesOutOptions
  ): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before get_feature_names_out()')
    }

    // set up method params
    await this._py.ex`pms_CCA_get_feature_names_out = {'input_features': ${
      opts['input_features'] ?? undefined
    }}

pms_CCA_get_feature_names_out = {k: v for k, v in pms_CCA_get_feature_names_out.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_get_feature_names_out = bridgeCCA[${this.id}].get_feature_names_out(**pms_CCA_get_feature_names_out)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_get_feature_names_out.tolist() if hasattr(res_CCA_get_feature_names_out, 'tolist') else res_CCA_get_feature_names_out`
  }

  /**
    Transform data back to its original space.
   */
  async inverse_transform(
    opts: CCAInverseTransformOptions
  ): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before inverse_transform()')
    }

    // set up method params
    await this._py.ex`pms_CCA_inverse_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None}

pms_CCA_inverse_transform = {k: v for k, v in pms_CCA_inverse_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_inverse_transform = bridgeCCA[${this.id}].inverse_transform(**pms_CCA_inverse_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_inverse_transform.tolist() if hasattr(res_CCA_inverse_transform, 'tolist') else res_CCA_inverse_transform`
  }

  /**
    Predict targets of given samples.
   */
  async predict(opts: CCAPredictOptions): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before predict()')
    }

    // set up method params
    await this._py.ex`pms_CCA_predict = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_CCA_predict = {k: v for k, v in pms_CCA_predict.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_predict = bridgeCCA[${this.id}].predict(**pms_CCA_predict)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_predict.tolist() if hasattr(res_CCA_predict, 'tolist') else res_CCA_predict`
  }

  /**
    Return the coefficient of determination of the prediction.

    The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.
   */
  async score(opts: CCAScoreOptions): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before score()')
    }

    // set up method params
    await this._py.ex`pms_CCA_score = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'y': np.array(${
      opts['y'] ?? undefined
    }) if ${opts['y'] !== undefined} else None, 'sample_weight': np.array(${
      opts['sample_weight'] ?? undefined
    }) if ${opts['sample_weight'] !== undefined} else None}

pms_CCA_score = {k: v for k, v in pms_CCA_score.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_score = bridgeCCA[${this.id}].score(**pms_CCA_score)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_score.tolist() if hasattr(res_CCA_score, 'tolist') else res_CCA_score`
  }

  /**
    Set output container.

    See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.
   */
  async set_output(opts: CCASetOutputOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before set_output()')
    }

    // set up method params
    await this._py.ex`pms_CCA_set_output = {'transform': ${
      opts['transform'] ?? undefined
    }}

pms_CCA_set_output = {k: v for k, v in pms_CCA_set_output.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_set_output = bridgeCCA[${this.id}].set_output(**pms_CCA_set_output)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_set_output.tolist() if hasattr(res_CCA_set_output, 'tolist') else res_CCA_set_output`
  }

  /**
    Apply the dimension reduction.
   */
  async transform(opts: CCATransformOptions): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before transform()')
    }

    // set up method params
    await this._py.ex`pms_CCA_transform = {'X': np.array(${
      opts['X'] ?? undefined
    }) if ${opts['X'] !== undefined} else None, 'Y': np.array(${
      opts['Y'] ?? undefined
    }) if ${opts['Y'] !== undefined} else None, 'copy': ${
      opts['copy'] ?? undefined
    }}

pms_CCA_transform = {k: v for k, v in pms_CCA_transform.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_CCA_transform = bridgeCCA[${this.id}].transform(**pms_CCA_transform)`

    // convert the result from python to node.js
    return this
      ._py`res_CCA_transform.tolist() if hasattr(res_CCA_transform, 'tolist') else res_CCA_transform`
  }

  /**
    The left singular vectors of the cross-covariance matrices of each iteration.
   */
  get x_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing x_weights_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_CCA_x_weights_ = bridgeCCA[${this.id}].x_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_x_weights_.tolist() if hasattr(attr_CCA_x_weights_, 'tolist') else attr_CCA_x_weights_`
    })()
  }

  /**
    The right singular vectors of the cross-covariance matrices of each iteration.
   */
  get y_weights_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing y_weights_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_CCA_y_weights_ = bridgeCCA[${this.id}].y_weights_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_y_weights_.tolist() if hasattr(attr_CCA_y_weights_, 'tolist') else attr_CCA_y_weights_`
    })()
  }

  /**
    The loadings of `X`.
   */
  get x_loadings_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing x_loadings_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_x_loadings_ = bridgeCCA[${this.id}].x_loadings_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_x_loadings_.tolist() if hasattr(attr_CCA_x_loadings_, 'tolist') else attr_CCA_x_loadings_`
    })()
  }

  /**
    The loadings of `Y`.
   */
  get y_loadings_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing y_loadings_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_y_loadings_ = bridgeCCA[${this.id}].y_loadings_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_y_loadings_.tolist() if hasattr(attr_CCA_y_loadings_, 'tolist') else attr_CCA_y_loadings_`
    })()
  }

  /**
    The projection matrix used to transform `X`.
   */
  get x_rotations_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing x_rotations_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_x_rotations_ = bridgeCCA[${this.id}].x_rotations_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_x_rotations_.tolist() if hasattr(attr_CCA_x_rotations_, 'tolist') else attr_CCA_x_rotations_`
    })()
  }

  /**
    The projection matrix used to transform `Y`.
   */
  get y_rotations_(): Promise<NDArray[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing y_rotations_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_y_rotations_ = bridgeCCA[${this.id}].y_rotations_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_y_rotations_.tolist() if hasattr(attr_CCA_y_rotations_, 'tolist') else attr_CCA_y_rotations_`
    })()
  }

  /**
    The intercepts of the linear model such that `Y` is approximated as `Y \= X @ coef\_ + intercept\_`.
   */
  get intercept_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing intercept_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_CCA_intercept_ = bridgeCCA[${this.id}].intercept_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_intercept_.tolist() if hasattr(attr_CCA_intercept_, 'tolist') else attr_CCA_intercept_`
    })()
  }

  /**
    Number of iterations of the power method, for each component.
   */
  get n_iter_(): Promise<any[]> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing n_iter_')
    }

    return (async () => {
      // invoke accessor
      await this._py.ex`attr_CCA_n_iter_ = bridgeCCA[${this.id}].n_iter_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_n_iter_.tolist() if hasattr(attr_CCA_n_iter_, 'tolist') else attr_CCA_n_iter_`
    })()
  }

  /**
    Number of features seen during [fit](../../glossary.html#term-fit).
   */
  get n_features_in_(): Promise<number> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing n_features_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_n_features_in_ = bridgeCCA[${this.id}].n_features_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_n_features_in_.tolist() if hasattr(attr_CCA_n_features_in_, 'tolist') else attr_CCA_n_features_in_`
    })()
  }

  /**
    Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.
   */
  get feature_names_in_(): Promise<NDArray> {
    if (this._isDisposed) {
      throw new Error('This CCA instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('CCA must call init() before accessing feature_names_in_')
    }

    return (async () => {
      // invoke accessor
      await this._py
        .ex`attr_CCA_feature_names_in_ = bridgeCCA[${this.id}].feature_names_in_`

      // convert the result from python to node.js
      return this
        ._py`attr_CCA_feature_names_in_.tolist() if hasattr(attr_CCA_feature_names_in_, 'tolist') else attr_CCA_feature_names_in_`
    })()
  }
}

export interface CCAOptions {
  /**
    Number of components to keep. Should be in `\[1, min(n\_samples, n\_features, n\_targets)\]`.

    @defaultValue `2`
   */
  n_components?: number

  /**
    Whether to scale `X` and `Y`.

    @defaultValue `true`
   */
  scale?: boolean

  /**
    The maximum number of iterations of the power method.

    @defaultValue `500`
   */
  max_iter?: number

  /**
    The tolerance used as convergence criteria in the power method: the algorithm stops whenever the squared norm of `u\_i \- u\_{i-1}` is less than `tol`, where `u` corresponds to the left singular vector.

    @defaultValue `0.000001`
   */
  tol?: number

  /**
    Whether to copy `X` and `Y` in fit before applying centering, and potentially scaling. If False, these operations will be done inplace, modifying both arrays.

    @defaultValue `true`
   */
  copy?: boolean
}

export interface CCAFitOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.
   */
  X?: ArrayLike[]

  /**
    Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.
   */
  Y?: ArrayLike
}

export interface CCAFitTransformOptions {
  /**
    Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of predictors.
   */
  X?: ArrayLike[]

  /**
    Target vectors, where `n\_samples` is the number of samples and `n\_targets` is the number of response variables.
   */
  y?: ArrayLike[]
}

export interface CCAGetFeatureNamesOutOptions {
  /**
    Only used to validate feature names with the names seen in [`fit`](#sklearn.cross_decomposition.CCA.fit "sklearn.cross_decomposition.CCA.fit").
   */
  input_features?: any
}

export interface CCAInverseTransformOptions {
  /**
    New data, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.
   */
  X?: ArrayLike[]

  /**
    New target, where `n\_samples` is the number of samples and `n\_components` is the number of pls components.
   */
  Y?: ArrayLike[]
}

export interface CCAPredictOptions {
  /**
    Samples.
   */
  X?: ArrayLike[]

  /**
    Whether to copy `X` and `Y`, or perform in-place normalization.

    @defaultValue `true`
   */
  copy?: boolean
}

export interface CCAScoreOptions {
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

export interface CCASetOutputOptions {
  /**
    Configure output of `transform` and `fit\_transform`.
   */
  transform?: 'default' | 'pandas'
}

export interface CCATransformOptions {
  /**
    Samples to transform.
   */
  X?: ArrayLike[]

  /**
    Target vectors.
   */
  Y?: ArrayLike[]

  /**
    Whether to copy `X` and `Y`, or perform in-place normalization.

    @defaultValue `true`
   */
  copy?: boolean
}
