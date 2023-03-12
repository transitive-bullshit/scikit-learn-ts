[sklearn](../readme.md) / [Exports](../modules.md) / GaussianMixture

# Class: GaussianMixture

Gaussian Mixture.

Representation of a Gaussian mixture model probability distribution. This class allows to estimate the parameters of a Gaussian mixture distribution.

Read more in the [User Guide](../mixture.html#gmm).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html

## Table of contents

### Constructors

- [constructor](GaussianMixture.md#constructor)

### Properties

- [\_isDisposed](GaussianMixture.md#_isdisposed)
- [\_isInitialized](GaussianMixture.md#_isinitialized)
- [\_py](GaussianMixture.md#_py)
- [id](GaussianMixture.md#id)
- [opts](GaussianMixture.md#opts)

### Accessors

- [converged\_](GaussianMixture.md#converged_)
- [covariances\_](GaussianMixture.md#covariances_)
- [feature\_names\_in\_](GaussianMixture.md#feature_names_in_)
- [lower\_bound\_](GaussianMixture.md#lower_bound_)
- [means\_](GaussianMixture.md#means_)
- [n\_features\_in\_](GaussianMixture.md#n_features_in_)
- [n\_iter\_](GaussianMixture.md#n_iter_)
- [precisions\_](GaussianMixture.md#precisions_)
- [precisions\_cholesky\_](GaussianMixture.md#precisions_cholesky_)
- [py](GaussianMixture.md#py)
- [weights\_](GaussianMixture.md#weights_)

### Methods

- [aic](GaussianMixture.md#aic)
- [bic](GaussianMixture.md#bic)
- [dispose](GaussianMixture.md#dispose)
- [fit](GaussianMixture.md#fit)
- [fit\_predict](GaussianMixture.md#fit_predict)
- [init](GaussianMixture.md#init)
- [predict](GaussianMixture.md#predict)
- [predict\_proba](GaussianMixture.md#predict_proba)
- [sample](GaussianMixture.md#sample)
- [score](GaussianMixture.md#score)
- [score\_samples](GaussianMixture.md#score_samples)

## Constructors

### constructor

• **new GaussianMixture**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianMixtureOptions`](../interfaces/GaussianMixtureOptions.md) |

#### Defined in

[generated/mixture/GaussianMixture.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/mixture/GaussianMixture.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/mixture/GaussianMixture.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/mixture/GaussianMixture.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/mixture/GaussianMixture.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/mixture/GaussianMixture.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L19)

## Accessors

### converged\_

• `get` **converged_**(): `Promise`<`boolean`\>

True when convergence was reached in fit(), `false` otherwise.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L505)

___

### covariances\_

• `get` **covariances_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The covariance of each mixture component. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L430)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:605](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L605)

___

### lower\_bound\_

• `get` **lower_bound_**(): `Promise`<`number`\>

Lower bound value on the log-likelihood (of the training data with respect to the model) of the best fit of EM.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L555)

___

### means\_

• `get` **means_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The mean of each mixture component.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/mixture/GaussianMixture.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L405)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L580)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of step used by the best fit of EM to reach the convergence.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L530)

___

### precisions\_

• `get` **precisions_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The precision matrices for each component in the mixture. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L455)

___

### precisions\_cholesky\_

• `get` **precisions_cholesky_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The cholesky decomposition of the precision matrices of each mixture component. A precision matrix is the inverse of a covariance matrix. A covariance matrix is symmetric positive definite so the mixture of Gaussian can be equivalently parameterized by the precision matrices. Storing the precision matrices instead of the covariance matrices makes it more efficient to compute the log-likelihood of new samples at test time. The shape depends on `covariance\_type`:

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L480)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/mixture/GaussianMixture.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/mixture/GaussianMixture.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L34)

___

### weights\_

• `get` **weights_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The weights of each mixture components.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/mixture/GaussianMixture.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L380)

## Methods

### aic

▸ **aic**(`opts`): `Promise`<`number`\>

Akaike information criterion for the current model on the input X.

You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the AIC used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureAicOptions`](../interfaces/GaussianMixtureAicOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L122)

___

### bic

▸ **bic**(`opts`): `Promise`<`number`\>

Bayesian information criterion for the current model on the input X.

You can refer to this [mathematical section](../linear_model.html#aic-bic) for more details regarding the formulation of the BIC used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureBicOptions`](../interfaces/GaussianMixtureBicOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L152)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Estimate model parameters with the EM algorithm.

The method fits the model `n\_init` times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a `ConvergenceWarning` is raised. If `warm\_start` is `true`, then `n\_init` is ignored and a single initialization is performed upon the first call. Upon consecutive calls, training starts where it left off.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureFitOptions`](../interfaces/GaussianMixtureFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L182)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<`any`\>

Estimate model parameters using X and predict the labels for X.

The method fits the model n\_init times and sets the parameters with which the model has the largest likelihood or lower bound. Within each trial, the method iterates between E-step and M-step for `max\_iter` times until the change of likelihood or lower bound is less than `tol`, otherwise, a [`ConvergenceWarning`](sklearn.exceptions.ConvergenceWarning.html#sklearn.exceptions.ConvergenceWarning "sklearn.exceptions.ConvergenceWarning") is raised. After fitting, it predicts the most probable label for the input data points.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureFitPredictOptions`](../interfaces/GaussianMixtureFitPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L212)

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

[generated/mixture/GaussianMixture.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict the labels for the data samples in X using trained model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixturePredictOptions`](../interfaces/GaussianMixturePredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L240)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Evaluate the components’ density for each sample.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixturePredictProbaOptions`](../interfaces/GaussianMixturePredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L268)

___

### sample

▸ **sample**(`opts`): `Promise`<`any`\>

Generate random samples from the fitted Gaussian distribution.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureSampleOptions`](../interfaces/GaussianMixtureSampleOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L296)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the per-sample average log-likelihood of the given data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureScoreOptions`](../interfaces/GaussianMixtureScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L324)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<`any`\>

Compute the log-likelihood of each sample.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianMixtureScoreSamplesOptions`](../interfaces/GaussianMixtureScoreSamplesOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/mixture/GaussianMixture.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/mixture/GaussianMixture.ts#L352)
