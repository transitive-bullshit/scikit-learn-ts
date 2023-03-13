# GaussianProcessRegressor

Gaussian process regression (GPR).

The implementation is based on Algorithm 2.1 of [\[RW2006\]](#rf75674b0f418-rw2006).

In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianProcessRegressor(opts?: GaussianProcessRegressorOptions): GaussianProcessRegressor;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianProcessRegressorOptions`](../interfaces/GaussianProcessRegressorOptions.md) |

### Returns

[`GaussianProcessRegressor`](GaussianProcessRegressor.md)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L21)

### id

> `string`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L18)

### opts

> `any`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L19)

## Accessors

### L\_

Lower-triangular Cholesky decomposition of the kernel in `X\_train\_`.

#### Signature

```ts
L_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L374)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L374)

### X\_train\_

Feature vectors or other representations of training data (also required for prediction).

#### Signature

```ts
X_train_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L293)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L293)

### alpha\_

Dual coefficients of training data points in kernel space.

#### Signature

```ts
alpha_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L401)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L401)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L482)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L482)

### kernel\_

The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.

#### Signature

```ts
kernel_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L347)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L347)

### log\_marginal\_likelihood\_value\_

The log-marginal-likelihood of `self.kernel\_.theta`.

#### Signature

```ts
log_marginal_likelihood_value_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L428)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L428)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L455)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L455)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L30)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L34)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L30) [generated/gaussian\_process/GaussianProcessRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L34)

### y\_train\_

Target values in training data (also required for prediction).

#### Signature

```ts
y_train_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L320)

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L320)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L97)

### fit()

Fit Gaussian process regression model.

#### Signature

```ts
fit(opts: GaussianProcessRegressorFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorFitOptions`](../interfaces/GaussianProcessRegressorFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L114)

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

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L43)

### log\_marginal\_likelihood()

Return log-marginal likelihood of theta for training data.

#### Signature

```ts
log_marginal_likelihood(opts: GaussianProcessRegressorLogMarginalLikelihoodOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorLogMarginalLikelihoodOptions`](../interfaces/GaussianProcessRegressorLogMarginalLikelihoodOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L146)

### predict()

Predict using the Gaussian process regression model.

We can also predict based on an unfitted model by using the GP prior. In addition to the mean of the predictive distribution, optionally also returns its standard deviation (`return\_std=True`) or covariance (`return\_cov=True`). Note that at most one of the two can be requested.

#### Signature

```ts
predict(opts: GaussianProcessRegressorPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorPredictOptions`](../interfaces/GaussianProcessRegressorPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L185)

### sample\_y()

Draw samples from Gaussian process and evaluate at X.

#### Signature

```ts
sample_y(opts: GaussianProcessRegressorSampleYOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorSampleYOptions`](../interfaces/GaussianProcessRegressorSampleYOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L221)

### score()

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Signature

```ts
score(opts: GaussianProcessRegressorScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorScoreOptions`](../interfaces/GaussianProcessRegressorScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/gaussian\_process/GaussianProcessRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L257)
