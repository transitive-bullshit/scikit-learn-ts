# Class: GaussianProcessRegressor

Gaussian process regression (GPR).

The implementation is based on Algorithm 2.1 of [\[RW2006\]](https://scikit-learn.org/stable/modules/generated/#rf75674b0f418-rw2006).

In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](https://scikit-learn.org/stable/modules/generated/#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html)

## Constructors

### new GaussianProcessRegressor()

> **new GaussianProcessRegressor**(`opts`?): [`GaussianProcessRegressor`](GaussianProcessRegressor.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.alpha`? | `number` \| [`ArrayLike`](../type-aliases/ArrayLike.md) | Value added to the diagonal of the kernel matrix during fitting. This can prevent a potential numerical issue during fitting, by ensuring that the calculated values form a positive definite matrix. It can also be interpreted as the variance of additional Gaussian measurement noise on the training observations. Note that this is different from using a `WhiteKernel`. If an array is passed, it must have the same number of entries as the data used for fitting and is used as datapoint-dependent noise level. Allowing to specify the noise level directly as a parameter is mainly for convenience and for consistency with [`Ridge`](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge "sklearn.linear_model.Ridge"). |
| `opts.copy_X_train`? | `boolean` | If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally. |
| `opts.kernel`? | `any` | The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel `ConstantKernel(1.0, constant_value_bounds="fixed") \* RBF(1.0, length_scale_bounds="fixed")` is used as default. Note that the kernel hyperparameters are optimized during fitting unless the bounds are marked as “fixed”. |
| `opts.n_restarts_optimizer`? | `number` | The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that `n_restarts_optimizer \== 0` implies that one run is performed. |
| `opts.n_targets`? | `number` | The number of dimensions of the target values. Used to decide the number of outputs when sampling from the prior distributions (i.e. calling [`sample_y`](https://scikit-learn.org/stable/modules/generated/#sklearn.gaussian_process.GaussianProcessRegressor.sample_y "sklearn.gaussian_process.GaussianProcessRegressor.sample_y") before [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit")). This parameter is ignored once [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit") has been called. |
| `opts.normalize_y`? | `boolean` | Whether or not to normalize the target values `y` by removing the mean and scaling to unit-variance. This is recommended for cases where zero-mean, unit-variance priors are used. Note that, in this implementation, the normalisation is reversed before the GP predictions are reported. |
| `opts.optimizer`? | `"fmin_l_bfgs_b"` | Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature: |
| `opts.random_state`? | `number` | Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |

#### Returns

[`GaussianProcessRegressor`](GaussianProcessRegressor.md)

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/gaussian\_process/GaussianProcessRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/gaussian\_process/GaussianProcessRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/gaussian\_process/GaussianProcessRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L21) |
| `id` | `string` | `undefined` | [generated/gaussian\_process/GaussianProcessRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L18) |
| `opts` | `any` | `undefined` | [generated/gaussian\_process/GaussianProcessRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L19) |

## Accessors

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Dual coefficients of training data points in kernel space.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L623)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L704)

***

### kernel\_

#### Get Signature

> **get** **kernel\_**(): `Promise`\<`any`\>

The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L569)

***

### L\_

#### Get Signature

> **get** **L\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Lower-triangular Cholesky decomposition of the kernel in `X_train_`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L596)

***

### log\_marginal\_likelihood\_value\_

#### Get Signature

> **get** **log\_marginal\_likelihood\_value\_**(): `Promise`\<`number`\>

The log-marginal-likelihood of `self.kernel_.theta`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L650)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L677)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L80)

***

### X\_train\_

#### Get Signature

> **get** **X\_train\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Feature vectors or other representations of training data (also required for prediction).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L515)

***

### y\_train\_

#### Get Signature

> **get** **y\_train\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Target values in training data (also required for prediction).

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L542)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Gaussian process regression model.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Feature vectors or other representations of training data. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L153)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L194)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L93)

***

### log\_marginal\_likelihood()

> **log\_marginal\_likelihood**(`opts`): `Promise`\<`number`\>

Return log-marginal likelihood of theta for training data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.clone_kernel`? | `boolean` | If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement. |
| `opts.eval_gradient`? | `boolean` | If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. If `true`, theta must not be `undefined`. |
| `opts.theta`? | `any` | Kernel hyperparameters for which the log-marginal likelihood is evaluated. If `undefined`, the precomputed log_marginal_likelihood of `self.kernel_.theta` is returned. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L230)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict using the Gaussian process regression model.

We can also predict based on an unfitted model by using the GP prior. In addition to the mean of the predictive distribution, optionally also returns its standard deviation (`return_std=True`) or covariance (`return_cov=True`). Note that at most one of the two can be requested.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.return_cov`? | `boolean` | If `true`, the covariance of the joint predictive distribution at the query points is returned along with the mean. |
| `opts.return_std`? | `boolean` | If `true`, the standard-deviation of the predictive distribution at the query points is returned along with the mean. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Query points where the GP is evaluated. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L282)

***

### sample\_y()

> **sample\_y**(`opts`): `Promise`\<`any`\>

Draw samples from Gaussian process and evaluate at X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.n_samples`? | `number` | Number of samples drawn from the Gaussian process per query point. |
| `opts.random_state`? | `number` | Determines random number generation to randomly draw samples. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Query points where the GP is evaluated. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L332)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y_true \- y_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y_true \- y_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Sample weights. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n_samples, n_samples_fitted)`, where `n_samples_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.y`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L384)

***

### set\_predict\_request()

> **set\_predict\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.return_cov`? | `string` \| `boolean` | Metadata routing for `return_cov` parameter in `predict`. |
| `opts.return_std`? | `string` \| `boolean` | Metadata routing for `return_std` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L434)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/GaussianProcessRegressor.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L479)
