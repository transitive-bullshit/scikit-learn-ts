# Class: MultiTaskLassoCV

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

See glossary entry for [cross-validation estimator](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskLasso is:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLassoCV.html)

## Constructors

### new MultiTaskLassoCV()

> **new MultiTaskLassoCV**(`opts`?): [`MultiTaskLassoCV`](MultiTaskLassoCV.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alphas`? | `ArrayLike` | List of alphas where to compute the models. If not provided, set automatically. |
| `opts.copy_X`? | `boolean` | If `true`, X will be copied; else, it may be overwritten. |
| `opts.cv`? | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.eps`? | `number` | Length of the path. `eps=1e-3` means that `alpha_min / alpha_max \= 1e-3`. |
| `opts.fit_intercept`? | `boolean` | Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered). |
| `opts.max_iter`? | `number` | The maximum number of iterations. |
| `opts.n_alphas`? | `number` | Number of alphas along the regularization path. |
| `opts.n_jobs`? | `number` | Number of CPUs to use during the cross validation. Note that this is used only if multiple values for l1_ratio are given. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.random_state`? | `number` | The seed of the pseudo random number generator that selects a random feature to update. Used when `selection` == ‘random’. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.selection`? | `"random"` \| `"cyclic"` | If set to ‘random’, a random coefficient is updated every iteration rather than looping over features sequentially by default. This (setting to ‘random’) often leads to significantly faster convergence especially when tol is higher than 1e-4. |
| `opts.tol`? | `number` | The tolerance for the optimization: if the updates are smaller than `tol`, the optimization code checks the dual gap for optimality and continues until it is smaller than `tol`. |
| `opts.verbose`? | `number` \| `boolean` | Amount of verbosity. |

**Returns** [`MultiTaskLassoCV`](MultiTaskLassoCV.md)

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/linear\_model/MultiTaskLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/linear\_model/MultiTaskLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/linear\_model/MultiTaskLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L21) |
| `id` | `string` | `undefined` | [generated/linear\_model/MultiTaskLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L18) |
| `opts` | `any` | `undefined` | [generated/linear\_model/MultiTaskLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L19) |

## Accessors

### alpha\_

**Get Signature**

> **get** **alpha\_**(): `Promise`\<`number`\>

The amount of penalization chosen by cross validation.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L587)

***

### alphas\_

**Get Signature**

> **get** **alphas\_**(): `Promise`\<`ArrayLike`\>

The grid of alphas used for fitting.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L641)

***

### coef\_

**Get Signature**

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Parameter vector (W in the cost function formula). Note that `coef_` stores the transpose of `W`, `W.T`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L560)

***

### dual\_gap\_

**Get Signature**

> **get** **dual\_gap\_**(): `Promise`\<`number`\>

The dual gap at the end of the optimization for the optimal alpha.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:695](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L695)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L749)

***

### intercept\_

**Get Signature**

> **get** **intercept\_**(): `Promise`\<`ArrayLike`\>

Independent term in decision function.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L533)

***

### mse\_path\_

**Get Signature**

> **get** **mse\_path\_**(): `Promise`\<`ArrayLike`[]\>

Mean square error for the test set on each fold, varying alpha.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L614)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:722](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L722)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L668)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L106)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L160)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit MultiTaskLasso model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.params`? | `any` | Parameters to be passed to the CV splitter. |
| `opts.X`? | `ArrayLike`[] | Data. |
| `opts.y`? | `ArrayLike`[] | Target. Will be cast to X’s dtype if necessary. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L179)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L225)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L119)

***

### path()

> **path**(`opts`): `Promise`\<`ArrayLike`\>

Compute Lasso path with coordinate descent.

The Lasso optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.alphas`? | `ArrayLike` | List of alphas where to compute the models. If `undefined` alphas are set automatically. |
| `opts.coef_init`? | `ArrayLike` | The initial values of the coefficients. |
| `opts.copy_X`? | `boolean` | If `true`, X will be copied; else, it may be overwritten. |
| `opts.eps`? | `number` | Length of the path. `eps=1e-3` means that `alpha_min / alpha_max \= 1e-3`. |
| `opts.n_alphas`? | `number` | Number of alphas along the regularization path. |
| `opts.params`? | `any` | Keyword arguments passed to the coordinate descent solver. |
| `opts.positive`? | `boolean` | If set to `true`, forces coefficients to be positive. (Only allowed when `y.ndim \== 1`). |
| `opts.precompute`? | `boolean` \| `ArrayLike`[] \| `"auto"` | Whether to use a precomputed Gram matrix to speed up calculations. If set to `'auto'` let us decide. The Gram matrix can also be passed as argument. |
| `opts.return_n_iter`? | `boolean` | Whether to return the number of iterations or not. |
| `opts.verbose`? | `number` \| `boolean` | Amount of verbosity. |
| `opts.X`? | `ArrayLike` | Training data. Pass directly as Fortran-contiguous data to avoid unnecessary memory duplication. If `y` is mono-output then `X` can be sparse. |
| `opts.Xy`? | `ArrayLike` | Xy = np.dot(X.T, y) that can be precomputed. It is useful only when the Gram matrix is precomputed. |
| `opts.y`? | `any` | Target values. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L265)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict using the linear model.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Samples. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L373)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | `ArrayLike` | True values for `X`. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L409)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L457)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/linear\_model/MultiTaskLassoCV.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L497)
