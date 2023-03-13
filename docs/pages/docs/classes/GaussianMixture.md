# GaussianMixture

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html)

## Constructors

## constructor()

### Signature

```ts
new GaussianMixture(opts?: object): GaussianMixture;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.covariance_type?` | `"full"` \| `"tied"` \| `"diag"` \| `"spherical"` | String describing the type of covariance parameters to use. Must be one of:  `Default Value`  `'full'` |
| `opts.init_params?` | `"k-means++"` \| `"random"` \| `"kmeans"` \| `"random_from_data"` | The method used to initialize the weights, the means and the precisions. String must be one of:  `Default Value`  `'kmeans'` |
| `opts.max_iter?` | `number` | The number of EM iterations to perform.  `Default Value`  `100` |
| `opts.means_init?` | `ArrayLike`[] | The user-provided initial means, If it is `undefined`, means are initialized using the `init\_params` method. |
| `opts.n_components?` | `number` | The number of mixture components.  `Default Value`  `1` |
| `opts.n_init?` | `number` | The number of initializations to perform. The best results are kept.  `Default Value`  `1` |
| `opts.precisions_init?` | `ArrayLike` | The user-provided initial precisions (inverse of the covariance matrices). If it is `undefined`, precisions are initialized using the ‘init\_params’ method. The shape depends on ‘covariance\_type’: |
| `opts.random_state?` | `number` | Controls the random seed given to the method chosen to initialize the parameters (see `init\_params`). In addition, it controls the generation of random samples from the fitted distribution (see the method `sample`). Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.reg_covar?` | `number` | Non-negative regularization added to the diagonal of covariance. Allows to assure that the covariance matrices are all positive.  `Default Value`  `0.000001` |
| `opts.tol?` | `number` | The convergence threshold. EM iterations will stop when the lower bound average gain is below this threshold.  `Default Value`  `0.001` |
| `opts.verbose?` | `number` | Enable verbose output. If 1 then it prints the current initialization and each iteration step. If greater than 1 then it prints also the log probability and the time needed for each step.  `Default Value`  `0` |
| `opts.verbose_interval?` | `number` | Number of iteration done before the next print.  `Default Value`  `10` |
| `opts.warm_start?` | `boolean` | If ‘warm\_start’ is `true`, the solution of the last fitting is used as initialization for the next call of fit(). This can speed up convergence when fit is called several times on similar problems. In that case, ‘n\_init’ is ignored and only a single initialization occurs upon the first call. See the Glossary.  `Default Value`  `false` |
| `opts.weights_init?` | `ArrayLike` | The user-provided initial weights. If it is `undefined`, weights are initialized using the `init\_params` method. |

### Returns

[`GaussianMixture`](GaussianMixture.md)

Defined in:  [generated/mixture/GaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L25)

## Methods

### aic()

Akaike information criterion for the current model on the input X.

You can refer to this mathematical section for more details regarding the formulation of the AIC used.

#### Signature

```ts
aic(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | The input samples. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/GaussianMixture.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L212)

### bic()

Bayesian information criterion for the current model on the input X.

You can refer to this mathematical section for more details regarding the formulation of the BIC used.

#### Signature

```ts
bic(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any`[] | The input samples. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/mixture/GaussianMixture.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L247)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/mixture/GaussianMixture.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L193)

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

Defined in:  [generated/mixture/GaussianMixture.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L282)

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

Defined in:  [generated/mixture/GaussianMixture.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L322)

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

Defined in:  [generated/mixture/GaussianMixture.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L133)

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

Defined in:  [generated/mixture/GaussianMixture.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L360)

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

Defined in:  [generated/mixture/GaussianMixture.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L393)

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

Defined in:  [generated/mixture/GaussianMixture.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L426)

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

Defined in:  [generated/mixture/GaussianMixture.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L461)

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

Defined in:  [generated/mixture/GaussianMixture.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L499)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/mixture/GaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/mixture/GaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/mixture/GaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L21)

### id

> `string`

Defined in:  [generated/mixture/GaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L18)

### opts

> `any`

Defined in:  [generated/mixture/GaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L19)

## Accessors

### converged\_

True when convergence was reached in fit(), `false` otherwise.

#### Signature

```ts
converged_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/mixture/GaussianMixture.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L657)

### covariances\_

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Signature

```ts
covariances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/GaussianMixture.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L582)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/GaussianMixture.ts:757](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L757)

### lower\_bound\_

Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.

#### Signature

```ts
lower_bound_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:707](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L707)

### means\_

The mean of each mixture component.

#### Signature

```ts
means_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/mixture/GaussianMixture.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L557)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L732)

### n\_iter\_

Number of step used by the best fit of EM to reach the convergence.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/mixture/GaussianMixture.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L682)

### precisions\_

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/GaussianMixture.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L607)

### precisions\_cholesky\_

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Signature

```ts
precisions_cholesky_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/GaussianMixture.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L632)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/mixture/GaussianMixture.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L120)

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

Defined in: [generated/mixture/GaussianMixture.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L124)

### weights\_

The weights of each mixture components.

#### Signature

```ts
weights_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/mixture/GaussianMixture.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L532)
