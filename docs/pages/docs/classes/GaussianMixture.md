# GaussianMixture

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the [User Guide](../mixture.html#gmm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianMixture(opts?: GaussianMixtureOptions): GaussianMixture;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianMixtureOptions`](../interfaces/GaussianMixtureOptions.md) |

### Returns

[`GaussianMixture`](GaussianMixture.md)

Defined in:  [generated/mixture/GaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/mixture/GaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/mixture/GaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/mixture/GaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L21)

### id

> `string`

Defined in:  [generated/mixture/GaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L18)

### opts

> `any`

Defined in:  [generated/mixture/GaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L19)

## Accessors

### converged\_

True when convergence was reached in fit(), `false` otherwise.

#### Signature

```ts
converged_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/mixture/GaussianMixture.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L505)

### covariances\_

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Signature

```ts
covariances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/mixture/GaussianMixture.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L430)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/mixture/GaussianMixture.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L605)

### lower\_bound\_

Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.

#### Signature

```ts
lower_bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L555)

### means\_

The mean of each mixture component.

#### Signature

```ts
means_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/mixture/GaussianMixture.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L405)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L580)

### n\_iter\_

Number of step used by the best fit of EM to reach the convergence.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L530)

### precisions\_

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/mixture/GaussianMixture.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L455)

### precisions\_cholesky\_

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_cholesky_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/mixture/GaussianMixture.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L480)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/mixture/GaussianMixture.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L30)

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

Defined in: [generated/mixture/GaussianMixture.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L34)

### weights\_

The weights of each mixture components.

#### Signature

```ts
weights_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/mixture/GaussianMixture.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L380)

## Methods

### aic()

Akaike information criterion for the current model on the input X.

You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the AIC used.

#### Signature

```ts
aic(opts: GaussianMixtureAicOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureAicOptions`](../interfaces/GaussianMixtureAicOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/GaussianMixture.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L122)

### bic()

Bayesian information criterion for the current model on the input X.

You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the BIC used.

#### Signature

```ts
bic(opts: GaussianMixtureBicOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureBicOptions`](../interfaces/GaussianMixtureBicOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/GaussianMixture.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L152)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/mixture/GaussianMixture.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L103)

### fit()

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Signature

```ts
fit(opts: GaussianMixtureFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureFitOptions`](../interfaces/GaussianMixtureFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L182)

### fit\_predict()

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Signature

```ts
fit_predict(opts: GaussianMixtureFitPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureFitPredictOptions`](../interfaces/GaussianMixtureFitPredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L212)

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

Defined in:  [generated/mixture/GaussianMixture.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L43)

### predict()

Predict the labels for the data samples in X using trained model.

#### Signature

```ts
predict(opts: GaussianMixturePredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixturePredictOptions`](../interfaces/GaussianMixturePredictOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L240)

### predict\_proba()

Evaluate the components’ density for each sample.

#### Signature

```ts
predict_proba(opts: GaussianMixturePredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixturePredictProbaOptions`](../interfaces/GaussianMixturePredictProbaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L268)

### sample()

Generate random samples from the fitted Gaussian distribution.

#### Signature

```ts
sample(opts: GaussianMixtureSampleOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureSampleOptions`](../interfaces/GaussianMixtureSampleOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L296)

### score()

Compute the per-sample average log-likelihood of the given data X.

#### Signature

```ts
score(opts: GaussianMixtureScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureScoreOptions`](../interfaces/GaussianMixtureScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/GaussianMixture.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L324)

### score\_samples()

Compute the log-likelihood of each sample.

#### Signature

```ts
score_samples(opts: GaussianMixtureScoreSamplesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureScoreSamplesOptions`](../interfaces/GaussianMixtureScoreSamplesOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/GaussianMixture.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L352)
