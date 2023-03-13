# BayesianGaussianMixture

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)

## Constructors

## constructor()

### Signature

```ts
new BayesianGaussianMixture(opts?: BayesianGaussianMixtureOptions): BayesianGaussianMixture;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `BayesianGaussianMixtureOptions` |

### Returns

[`BayesianGaussianMixture`](BayesianGaussianMixture.md)

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L21)

### id

> `string`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L18)

### opts

> `any`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L19)

## Accessors

### converged\_

True when convergence was reached in fit(), `false` otherwise.

#### Signature

```ts
converged_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L496)

### covariance\_prior\_

The prior on the covariance distribution (Wishart). The shape depends on `covariance\_type`:

#### Signature

```ts
covariance_prior_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L766)

### covariances\_

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Signature

```ts
covariances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L415)

### degrees\_of\_freedom\_

The number of degrees of freedom of each components in the model.

#### Signature

```ts
degrees_of_freedom_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L739)

### degrees\_of\_freedom\_prior\_

The prior of the number of degrees of freedom on the covariance distributions (Wishart).

#### Signature

```ts
degrees_of_freedom_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L712)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L820)

### lower\_bound\_

Lower bound value on the model evidence (of the training data) of the best fit of inference.

#### Signature

```ts
lower_bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L550)

### mean\_precision\_

The precision of each components on the mean distribution (Gaussian).

#### Signature

```ts
mean_precision_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L658)

### mean\_precision\_prior\_

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. If mean\_precision\_prior is set to `undefined`, `mean\_precision\_prior\_` is set to 1.

#### Signature

```ts
mean_precision_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L631)

### mean\_prior\_

The prior on the mean distribution (Gaussian).

#### Signature

```ts
mean_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L685)

### means\_

The mean of each mixture component.

#### Signature

```ts
means_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L388)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L793)

### n\_iter\_

Number of step used by the best fit of inference to reach the convergence.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L523)

### precisions\_

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L442)

### precisions\_cholesky\_

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_cholesky_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L469)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L30)

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

Defined in: [generated/mixture/BayesianGaussianMixture.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L34)

### weight\_concentration\_

The dirichlet concentration of each component on the weight distribution (Dirichlet).

#### Signature

```ts
weight_concentration_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L604)

### weight\_concentration\_prior\_

The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight\_concentration\_prior\_type`:

#### Signature

```ts
weight_concentration_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L577)

### weights\_

The weights of each mixture components.

#### Signature

```ts
weights_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L361)

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

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L111)

### fit()

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Signature

```ts
fit(opts: BayesianGaussianMixtureFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixtureFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L130)

### fit\_predict()

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Signature

```ts
fit_predict(opts: BayesianGaussianMixtureFitPredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixtureFitPredictOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L162)

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

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L43)

### predict()

Predict the labels for the data samples in X using trained model.

#### Signature

```ts
predict(opts: BayesianGaussianMixturePredictOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixturePredictOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L197)

### predict\_proba()

Evaluate the components’ density for each sample.

#### Signature

```ts
predict_proba(opts: BayesianGaussianMixturePredictProbaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixturePredictProbaOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L229)

### sample()

Generate random samples from the fitted Gaussian distribution.

#### Signature

```ts
sample(opts: BayesianGaussianMixtureSampleOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixtureSampleOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L264)

### score()

Compute the per-sample average log-likelihood of the given data X.

#### Signature

```ts
score(opts: BayesianGaussianMixtureScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixtureScoreOptions` |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L296)

### score\_samples()

Compute the log-likelihood of each sample.

#### Signature

```ts
score_samples(opts: BayesianGaussianMixtureScoreSamplesOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `BayesianGaussianMixtureScoreSamplesOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L326)
