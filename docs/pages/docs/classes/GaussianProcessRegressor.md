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
| `opts.alpha?` | `number` \| `ArrayLike` | Value added to the diagonal of the kernel matrix during fitting. This can prevent a potential numerical issue during fitting, by ensuring that the calculated values form a positive definite matrix. It can also be interpreted as the variance of additional Gaussian measurement noise on the training observations. Note that this is different from using a `WhiteKernel`. If an array is passed, it must have the same number of entries as the data used for fitting and is used as datapoint-dependent noise level. Allowing to specify the noise level directly as a parameter is mainly for convenience and for consistency with [`Ridge`](sklearn.linear_model.Ridge.html#sklearn.linear_model.Ridge "sklearn.linear_model.Ridge").  `Default Value`  `1e-10` |
| `opts.copy_X_train?` | `boolean` | If `true`, a persistent copy of the training data is stored in the object. Otherwise, just a reference to the training data is stored, which might cause predictions to change if the data is modified externally.  `Default Value`  `true` |
| `opts.kernel?` | `any` | The kernel specifying the covariance function of the GP. If `undefined` is passed, the kernel `ConstantKernel(1.0, constant\_value\_bounds="fixed") \* RBF(1.0, length\_scale\_bounds="fixed")` is used as default. Note that the kernel hyperparameters are optimized during fitting unless the bounds are marked as “fixed”. |
| `opts.n_restarts_optimizer?` | `number` | The number of restarts of the optimizer for finding the kernel’s parameters which maximize the log-marginal likelihood. The first run of the optimizer is performed from the kernel’s initial parameters, the remaining ones (if any) from thetas sampled log-uniform randomly from the space of allowed theta-values. If greater than 0, all bounds must be finite. Note that `n\_restarts\_optimizer \== 0` implies that one run is performed.  `Default Value`  `0` |
| `opts.normalize_y?` | `boolean` | Whether or not to normalize the target values `y` by removing the mean and scaling to unit-variance. This is recommended for cases where zero-mean, unit-variance priors are used. Note that, in this implementation, the normalisation is reversed before the GP predictions are reported.  `Default Value`  `false` |
| `opts.optimizer?` | `"fmin_l_bfgs_b"` | Can either be one of the internally supported optimizers for optimizing the kernel’s parameters, specified by a string, or an externally defined optimizer passed as a callable. If a callable is passed, it must have the signature:  `Default Value`  `'fmin_l_bfgs_b'` |
| `opts.random_state?` | `number` | Determines random number generation used to initialize the centers. Pass an int for reproducible results across multiple function calls. See Glossary. |

### Returns

[`GaussianProcessRegressor`](GaussianProcessRegressor.md)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L19)

## Accessors

### L\_

Lower-triangular Cholesky decomposition of the kernel in `X\_train\_`.

#### Signature

```ts
L_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L497)

### X\_train\_

Feature vectors or other representations of training data (also required for prediction).

#### Signature

```ts
X_train_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L416)

### alpha\_

Dual coefficients of training data points in kernel space.

#### Signature

```ts
alpha_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L524)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L605)

### kernel\_

The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.

#### Signature

```ts
kernel_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L470)

### log\_marginal\_likelihood\_value\_

The log-marginal-likelihood of `self.kernel\_.theta`.

#### Signature

```ts
log_marginal_likelihood_value_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L551)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L578)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L75)

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

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L79)

### y\_train\_

Target values in training data (also required for prediction).

#### Signature

```ts
y_train_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/gaussian\_process/GaussianProcessRegressor.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L443)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L142)

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
| `opts.X?` | `ArrayLike`[] | Feature vectors or other representations of training data. |
| `opts.y?` | `ArrayLike` | Target values. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L159)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L88)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:201](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L201)

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
| `opts.X?` | `ArrayLike`[] | Query points where the GP is evaluated. |
| `opts.return_cov?` | `boolean` | If `true`, the covariance of the joint predictive distribution at the query points is returned along with the mean.  `Default Value`  `false` |
| `opts.return_std?` | `boolean` | If `true`, the standard-deviation of the predictive distribution at the query points is returned along with the mean.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L257)

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
| `opts.X?` | `ArrayLike`[] | Query points where the GP is evaluated. |
| `opts.n_samples?` | `number` | Number of samples drawn from the Gaussian process per query point.  `Default Value`  `1` |
| `opts.random_state?` | `number` | Determines random number generation to randomly draw samples. Pass an int for reproducible results across multiple function calls. See Glossary.  `Default Value`  `0` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L310)

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
| `opts.X?` | `ArrayLike`[] | Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator. |
| `opts.sample_weight?` | `ArrayLike` | Sample weights. |
| `opts.y?` | `ArrayLike` | True values for `X`. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L365)
