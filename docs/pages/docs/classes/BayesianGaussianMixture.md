# BayesianGaussianMixture

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html)

## Constructors

## constructor()

### Signature

```ts
new BayesianGaussianMixture(opts?: object): BayesianGaussianMixture;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.covariance_prior?` | `number` \| `ArrayLike` | The prior on the covariance distribution (Wishart). If it is `undefined`, the emiprical covariance prior is initialized using the covariance of X. The shape depends on `covariance\_type`: |
| `opts.covariance_type?` | `"full"` \| `"tied"` \| `"diag"` \| `"spherical"` | String describing the type of covariance parameters to use. Must be one of:  `Default Value`  `'full'` |
| `opts.degrees_of_freedom_prior?` | `number` | The prior of the number of degrees of freedom on the covariance distributions (Wishart). If it is `undefined`, it’s set to `n\_features`. |
| `opts.init_params?` | `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"` | The method used to initialize the weights, the means and the covariances. String must be one of:  `Default Value`  `'kmeans'` |
| `opts.max_iter?` | `number` | The number of EM iterations to perform.  `Default Value`  `100` |
| `opts.mean_precision_prior?` | `number` | The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. The value of the parameter must be greater than 0. If it is `undefined`, it is set to 1. |
| `opts.mean_prior?` | `ArrayLike` | The prior on the mean distribution (Gaussian). If it is `undefined`, it is set to the mean of X. |
| `opts.n_components?` | `number` | The number of mixture components. Depending on the data and the value of the `weight\_concentration\_prior` the model can decide to not use all the components by setting some component `weights\_` to values very close to zero. The number of effective components is therefore smaller than n\_components.  `Default Value`  `1` |
| `opts.n_init?` | `number` | The number of initializations to perform. The result with the highest lower bound value on the likelihood is kept.  `Default Value`  `1` |
| `opts.random_state?` | `number` | Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.reg_covar?` | `number` | Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.  `Default Value`  `0.000001` |
| `opts.tol?` | `number` | The convergence threshold. EM iterations will stop when the lower bound average gain on the likelihood (of the training data with respect to the model) is below this threshold.  `Default Value`  `0.001` |
| `opts.verbose?` | `number` | Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.  `Default Value`  `0` |
| `opts.verbose_interval?` | `number` | Number of iteration done before the next print.  `Default Value`  `10` |
| `opts.warm_start?` | `boolean` | If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. See the Glossary.  `Default Value`  `false` |
| `opts.weight_concentration_prior?` | `number` | The dirichlet concentration of each component on the weight distribution (Dirichlet). This is commonly called gamma in the literature. The higher concentration puts more mass in the center and will lead to more components being active, while a lower concentration parameter will lead to more mass at the edge of the mixture weights simplex. The value of the parameter must be greater than 0. If it is `undefined`, it’s set to `1. / n\_components`. |
| `opts.weight_concentration_prior_type?` | `"dirichlet_process"` \| `"dirichlet_distribution"` | String describing the type of the weight concentration prior.  `Default Value`  `'dirichlet_process'` |

### Returns

[`BayesianGaussianMixture`](BayesianGaussianMixture.md)

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L21)

### id

> `string`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L18)

### opts

> `any`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L19)

## Accessors

### converged\_

True when convergence was reached in fit(), `false` otherwise.

#### Signature

```ts
converged_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:651](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L651)

### covariance\_prior\_

The prior on the covariance distribution (Wishart). The shape depends on `covariance\_type`:

#### Signature

```ts
covariance_prior_(): Promise<number | ArrayLike>;
```

#### Returns

`Promise`\<`number` \| `ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:921](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L921)

### covariances\_

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Signature

```ts
covariances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L570)

### degrees\_of\_freedom\_

The number of degrees of freedom of each components in the model.

#### Signature

```ts
degrees_of_freedom_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:894](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L894)

### degrees\_of\_freedom\_prior\_

The prior of the number of degrees of freedom on the covariance distributions (Wishart).

#### Signature

```ts
degrees_of_freedom_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:867](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L867)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:975](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L975)

### lower\_bound\_

Lower bound value on the model evidence (of the training data) of the best fit of inference.

#### Signature

```ts
lower_bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:705](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L705)

### mean\_precision\_

The precision of each components on the mean distribution (Gaussian).

#### Signature

```ts
mean_precision_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:813](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L813)

### mean\_precision\_prior\_

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. If mean\_precision\_prior is set to `undefined`, `mean\_precision\_prior\_` is set to 1.

#### Signature

```ts
mean_precision_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:786](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L786)

### mean\_prior\_

The prior on the mean distribution (Gaussian).

#### Signature

```ts
mean_prior_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:840](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L840)

### means\_

The mean of each mixture component.

#### Signature

```ts
means_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L543)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:948](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L948)

### n\_iter\_

Number of step used by the best fit of inference to reach the convergence.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L678)

### precisions\_

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L597)

### precisions\_cholesky\_

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_cholesky_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:624](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L624)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L139)

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

Defined in: [generated/mixture/BayesianGaussianMixture.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L143)

### weight\_concentration\_

The dirichlet concentration of each component on the weight distribution (Dirichlet).

#### Signature

```ts
weight_concentration_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:759](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L759)

### weight\_concentration\_prior\_

The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight\_concentration\_prior\_type`:

#### Signature

```ts
weight_concentration_prior_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L732)

### weights\_

The weights of each mixture components.

#### Signature

```ts
weights_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/BayesianGaussianMixture.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L516)

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

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L220)

### fit()

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L239)

### fit\_predict()

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Signature

```ts
fit_predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L281)

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

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L152)

### predict()

Predict the labels for the data samples in X using trained model.

#### Signature

```ts
predict(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L324)

### predict\_proba()

Evaluate the components’ density for each sample.

#### Signature

```ts
predict_proba(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L361)

### sample()

Generate random samples from the fitted Gaussian distribution.

#### Signature

```ts
sample(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.n_samples?` | `number` | Number of samples to generate.  `Default Value`  `1` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L399)

### score()

Compute the per-sample average log-likelihood of the given data X.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L438)

### score\_samples()

Compute the log-likelihood of each sample.

#### Signature

```ts
score_samples(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | List of n\_features-dimensional data points. Each row corresponds to a single data point. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/mixture/BayesianGaussianMixture.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L478)
