[sklearn](../readme.md) / [Exports](../modules.md) / BayesianGaussianMixture

# Class: BayesianGaussianMixture

Variational Bayesian estimation of a Gaussian mixture.

This class allows to infer an approximate posterior distribution over the parameters of a Gaussian mixture distribution. The effective number of components can be inferred from the data.

This class implements two types of prior for the weights distribution: a finite mixture model with Dirichlet distribution and an infinite mixture model with the Dirichlet Process. In practice Dirichlet Process inference algorithm is approximated and uses a truncated distribution with a fixed maximum number of components (called the Stick-breaking representation). The number of components actually used almost always depends on the data.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.mixture.BayesianGaussianMixture.html

## Table of contents

### Constructors

- [constructor](BayesianGaussianMixture.md#constructor)

### Properties

- [\_isDisposed](BayesianGaussianMixture.md#_isdisposed)
- [\_isInitialized](BayesianGaussianMixture.md#_isinitialized)
- [\_py](BayesianGaussianMixture.md#_py)
- [id](BayesianGaussianMixture.md#id)
- [opts](BayesianGaussianMixture.md#opts)

### Accessors

- [converged\_](BayesianGaussianMixture.md#converged_)
- [covariance\_prior\_](BayesianGaussianMixture.md#covariance_prior_)
- [covariances\_](BayesianGaussianMixture.md#covariances_)
- [degrees\_of\_freedom\_](BayesianGaussianMixture.md#degrees_of_freedom_)
- [degrees\_of\_freedom\_prior\_](BayesianGaussianMixture.md#degrees_of_freedom_prior_)
- [feature\_names\_in\_](BayesianGaussianMixture.md#feature_names_in_)
- [lower\_bound\_](BayesianGaussianMixture.md#lower_bound_)
- [mean\_precision\_](BayesianGaussianMixture.md#mean_precision_)
- [mean\_precision\_prior\_](BayesianGaussianMixture.md#mean_precision_prior_)
- [mean\_prior\_](BayesianGaussianMixture.md#mean_prior_)
- [means\_](BayesianGaussianMixture.md#means_)
- [n\_features\_in\_](BayesianGaussianMixture.md#n_features_in_)
- [n\_iter\_](BayesianGaussianMixture.md#n_iter_)
- [precisions\_](BayesianGaussianMixture.md#precisions_)
- [precisions\_cholesky\_](BayesianGaussianMixture.md#precisions_cholesky_)
- [py](BayesianGaussianMixture.md#py)
- [weight\_concentration\_](BayesianGaussianMixture.md#weight_concentration_)
- [weight\_concentration\_prior\_](BayesianGaussianMixture.md#weight_concentration_prior_)
- [weights\_](BayesianGaussianMixture.md#weights_)

### Methods

- [dispose](BayesianGaussianMixture.md#dispose)
- [fit](BayesianGaussianMixture.md#fit)
- [fit\_predict](BayesianGaussianMixture.md#fit_predict)
- [init](BayesianGaussianMixture.md#init)
- [predict](BayesianGaussianMixture.md#predict)
- [predict\_proba](BayesianGaussianMixture.md#predict_proba)
- [sample](BayesianGaussianMixture.md#sample)
- [score](BayesianGaussianMixture.md#score)
- [score\_samples](BayesianGaussianMixture.md#score_samples)

## Constructors

### constructor

• **new BayesianGaussianMixture**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BayesianGaussianMixtureOptions`](../interfaces/BayesianGaussianMixtureOptions.md) |

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L19)

## Accessors

### converged\_

• `get` **converged_**(): `Promise`<`boolean`\>

True when convergence was reached in fit(), `false` otherwise.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L496)

___

### covariance\_prior\_

• `get` **covariance_prior_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

The prior on the covariance distribution (Wishart). The shape depends on `covariance\_type`:

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L766)

___

### covariances\_

• `get` **covariances_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L415)

___

### degrees\_of\_freedom\_

• `get` **degrees_of_freedom_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The number of degrees of freedom of each components in the model.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L739)

___

### degrees\_of\_freedom\_prior\_

• `get` **degrees_of_freedom_prior_**(): `Promise`<`number`\>

The prior of the number of degrees of freedom on the covariance distributions (Wishart).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L712)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L820)

___

### lower\_bound\_

• `get` **lower_bound_**(): `Promise`<`number`\>

Lower bound value on the model evidence (of the training data) of the best fit of inference.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L550)

___

### mean\_precision\_

• `get` **mean_precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The precision of each components on the mean distribution (Gaussian).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L658)

___

### mean\_precision\_prior\_

• `get` **mean_precision_prior_**(): `Promise`<`number`\>

The precision prior on the mean distribution (Gaussian). Controls the extent of where means can be placed. Larger values concentrate the cluster means around `mean\_prior`. If mean\_precision\_prior is set to `undefined`, `mean\_precision\_prior\_` is set to 1.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L631)

___

### mean\_prior\_

• `get` **mean_prior_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The prior on the mean distribution (Gaussian).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L685)

___

### means\_

• `get` **means_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The mean of each mixture component.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L388)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L793)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of step used by the best fit of inference to reach the convergence.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L523)

___

### precisions\_

• `get` **precisions_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L442)

___

### precisions\_cholesky\_

• `get` **precisions_cholesky_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L469)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L34)

___

### weight\_concentration\_

• `get` **weight_concentration_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The dirichlet concentration of each component on the weight distribution (Dirichlet).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L604)

___

### weight\_concentration\_prior\_

• `get` **weight_concentration_prior_**(): `Promise`<`number`\>

The dirichlet concentration of each component on the weight distribution (Dirichlet). The type depends on `weight\_concentration\_prior\_type`:

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L577)

___

### weights\_

• `get` **weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The weights of each mixture components.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L361)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixtureFitOptions`](../interfaces/BayesianGaussianMixtureFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L130)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixtureFitPredictOptions`](../interfaces/BayesianGaussianMixtureFitPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L162)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict the labels for the data samples in X using trained model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixturePredictOptions`](../interfaces/BayesianGaussianMixturePredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L197)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Evaluate the components’ density for each sample.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixturePredictProbaOptions`](../interfaces/BayesianGaussianMixturePredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L229)

___

### sample

▸ **sample**(`opts`): `Promise`<`any`\>

Generate random samples from the fitted Gaussian distribution.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixtureSampleOptions`](../interfaces/BayesianGaussianMixtureSampleOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L264)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the per-sample average log-likelihood of the given data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixtureScoreOptions`](../interfaces/BayesianGaussianMixtureScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L296)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<`any`\>

Compute the log-likelihood of each sample.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianGaussianMixtureScoreSamplesOptions`](../interfaces/BayesianGaussianMixtureScoreSamplesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/BayesianGaussianMixture.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/BayesianGaussianMixture.ts#L326)
