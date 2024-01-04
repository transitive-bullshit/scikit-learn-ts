# GaussianProcessRegressor

Gaussian process regression (GPR).

The implementation is based on Algorithm 2.1 of [\[RW2006\]](#rf75674b0f418-rw2006).

In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianProcessRegressor(opts?: object): GaussianProcessRegressor;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.alpha?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | Value added to the diagonal of the kernel matrix during fitting. This can prevent a potential numerical issue during fitting, by ensuring that the calculated values form a positive definite matrix. It can also be interpreted as the variance of additional Gaussian measurement noise on the training observations. Note that this is different from using a `WhiteKernel`. If an array is passed, it must have the same number of entries as the data used for fitting and is used as datapoint-dependent noise level. Allowing to specify the noise level directly as a parameter is mainly for convenience and for consistency with [`Ridge`](sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge "sklearn.linear_model.Ridge").  `Default Value`  `1e-10` |
| `opts.copy_X_train?` | `boolean` | If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.  `Default Value`  `true` |
| `opts.kernel?` | `any` | The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel `ConstantKernel(1.0, constant\_value\_bounds="fixed") \* RBF(1.0, length\_scale\_bounds="fixed")` is used as default. Note that the kernel hyperparameters are optimized during fitting unless the bounds are marked as “fixed”. |
| `opts.n_restarts_optimizer?` | `number` | The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that `n\_restarts\_optimizer \== 0` implies that one run is performed.  `Default Value`  `0` |
| `opts.n_targets?` | `number` | The number of dimensions of the target values. Used to decide the number of outputs when sampling from the prior distributions (i.e. calling [`sample\_y`](#sklearn.gaussian_process.GaussianProcessRegressor.sample_y "sklearn.gaussian_process.GaussianProcessRegressor.sample_y") before [`fit`](#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit")). This parameter is ignored once [`fit`](#sklearn.gaussian_process.GaussianProcessRegressor.fit "sklearn.gaussian_process.GaussianProcessRegressor.fit") has been called. |
| `opts.normalize_y?` | `boolean` | Whether or not to normalize the target values `y` by removing the mean and scaling to unit-variance. This is recommended for cases where zero-mean, unit-variance priors are used. Note that, in this implementation, the normalisation is reversed before the GP predictions are reported.  `Default Value`  `false` |
| `opts.optimizer?` | `"fmin_l_bfgs_b"` | Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:  `Default Value`  `'fmin_l_bfgs_b'` |
| `opts.random_state?` | `number` | Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |

### Returns

[`GaussianProcessRegressor`](GaussianProcessRegressor.md)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L149)

### fit()

Fit Gaussian process regression model.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Feature vectors or other representations of training data. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L166)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L210)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L93)

### log\_marginal\_likelihood()

Return log-marginal likelihood of theta for training data.

#### Signature

```ts
log_marginal_likelihood(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.clone_kernel?` | `boolean` | If `true`, the kernel attribute is copied. If `false`, the kernel attribute is modified, but may result in a performance improvement.  `Default Value`  `true` |
| `opts.eval_gradient?` | `boolean` | If `true`, the gradient of the log-marginal likelihood with respect to the kernel hyperparameters at position theta is returned additionally. If `true`, theta must not be `undefined`.  `Default Value`  `false` |
| `opts.theta?` | `any` | Kernel hyperparameters for which the log-marginal likelihood is evaluated. If `undefined`, the precomputed log\_marginal\_likelihood of `self.kernel\_.theta` is returned. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L248)

### predict()

Predict using the Gaussian process regression model.

We can also predict based on an unfitted model by using the GP prior. In addition to the mean of the predictive distribution, optionally also returns its standard deviation (`return\_std=True`) or covariance (`return\_cov=True`). Note that at most one of the two can be requested.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Query points where the GP is evaluated. |
| `opts.return_cov?` | `boolean` | If `true`, the covariance of the joint predictive distribution at the query points is returned along with the mean.  `Default Value`  `false` |
| `opts.return_std?` | `boolean` | If `true`, the standard-deviation of the predictive distribution at the query points is returned along with the mean.  `Default Value`  `false` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L304)

### sample\_y()

Draw samples from Gaussian process and evaluate at X.

#### Signature

```ts
sample_y(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Query points where the GP is evaluated. |
| `opts.n_samples?` | `number` | Number of samples drawn from the Gaussian process per query point.  `Default Value`  `1` |
| `opts.random_state?` | `number` | Determines random number generation to randomly draw samples. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).  `Default Value`  `0` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L357)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Sample weights. |
| `opts.y?` | [`ArrayLike`](../types/ArrayLike.md) | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L412)

### set\_predict\_request()

Request metadata passed to the `predict` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_predict_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.return_cov?` | `string` \| `boolean` | Metadata routing for `return\_cov` parameter in `predict`. |
| `opts.return_std?` | `string` \| `boolean` | Metadata routing for `return\_std` parameter in `predict`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L467)

### set\_score\_request()

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_score_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L514)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L19)

## Accessors

### L\_

Lower-triangular Cholesky decomposition of the kernel in `X\_train\_`.

#### Signature

```ts
L_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L633)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L633)

### X\_train\_

Feature vectors or other representations of training data (also required for prediction).

#### Signature

```ts
X_train_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L552)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L552)

### alpha\_

Dual coefficients of training data points in kernel space.

#### Signature

```ts
alpha_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L660)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L660)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L741)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:741](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L741)

### kernel\_

The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.

#### Signature

```ts
kernel_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L606)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L606)

### log\_marginal\_likelihood\_value\_

The log-marginal-likelihood of `self.kernel\_.theta`.

#### Signature

```ts
log_marginal_likelihood_value_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L687)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L687)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:714](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L714)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:714](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L714)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L80)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L84)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L80) [generated/gaussian\_process/GaussianProcessRegressor.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L84)

### y\_train\_

Target values in training data (also required for prediction).

#### Signature

```ts
y_train_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L579)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:579](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L579)
