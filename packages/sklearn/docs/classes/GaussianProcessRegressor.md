[sklearn](../readme.md) / [Exports](../modules.md) / GaussianProcessRegressor

# Class: GaussianProcessRegressor

Gaussian process regression (GPR).

The implementation is based on Algorithm 2.1 of [\[RW2006\]](#rf75674b0f418-rw2006).

In addition to standard scikit-learn estimator API, [`GaussianProcessRegressor`](#sklearn.gaussian_process.GaussianProcessRegressor "sklearn.gaussian_process.GaussianProcessRegressor"):

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.GaussianProcessRegressor.html

## Table of contents

### Constructors

- [constructor](GaussianProcessRegressor.md#constructor)

### Properties

- [\_isDisposed](GaussianProcessRegressor.md#_isdisposed)
- [\_isInitialized](GaussianProcessRegressor.md#_isinitialized)
- [\_py](GaussianProcessRegressor.md#_py)
- [id](GaussianProcessRegressor.md#id)
- [opts](GaussianProcessRegressor.md#opts)

### Accessors

- [L\_](GaussianProcessRegressor.md#l_)
- [X\_train\_](GaussianProcessRegressor.md#x_train_)
- [alpha\_](GaussianProcessRegressor.md#alpha_)
- [feature\_names\_in\_](GaussianProcessRegressor.md#feature_names_in_)
- [kernel\_](GaussianProcessRegressor.md#kernel_)
- [log\_marginal\_likelihood\_value\_](GaussianProcessRegressor.md#log_marginal_likelihood_value_)
- [n\_features\_in\_](GaussianProcessRegressor.md#n_features_in_)
- [py](GaussianProcessRegressor.md#py)
- [y\_train\_](GaussianProcessRegressor.md#y_train_)

### Methods

- [dispose](GaussianProcessRegressor.md#dispose)
- [fit](GaussianProcessRegressor.md#fit)
- [init](GaussianProcessRegressor.md#init)
- [log\_marginal\_likelihood](GaussianProcessRegressor.md#log_marginal_likelihood)
- [predict](GaussianProcessRegressor.md#predict)
- [sample\_y](GaussianProcessRegressor.md#sample_y)
- [score](GaussianProcessRegressor.md#score)

## Constructors

### constructor

• **new GaussianProcessRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GaussianProcessRegressorOptions`](../interfaces/GaussianProcessRegressorOptions.md) |

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L19)

## Accessors

### L\_

• `get` **L_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Lower-triangular Cholesky decomposition of the kernel in `X\_train\_`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L374)

___

### X\_train\_

• `get` **X_train_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Feature vectors or other representations of training data (also required for prediction).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L293)

___

### alpha\_

• `get` **alpha_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Dual coefficients of training data points in kernel space.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L401)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L482)

___

### kernel\_

• `get` **kernel_**(): `Promise`<`any`\>

The kernel used for prediction. The structure of the kernel is the same as the one passed as parameter but with optimized hyperparameters.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L347)

___

### log\_marginal\_likelihood\_value\_

• `get` **log_marginal_likelihood_value_**(): `Promise`<`number`\>

The log-marginal-likelihood of `self.kernel\_.theta`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L428)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L455)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L34)

___

### y\_train\_

• `get` **y_train_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Target values in training data (also required for prediction).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L320)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Gaussian process regression model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorFitOptions`](../interfaces/GaussianProcessRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L114)

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

[generated/gaussian_process/GaussianProcessRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L43)

___

### log\_marginal\_likelihood

▸ **log_marginal_likelihood**(`opts`): `Promise`<`number`\>

Return log-marginal likelihood of theta for training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorLogMarginalLikelihoodOptions`](../interfaces/GaussianProcessRegressorLogMarginalLikelihoodOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L146)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the Gaussian process regression model.

We can also predict based on an unfitted model by using the GP prior. In addition to the mean of the predictive distribution, optionally also returns its standard deviation (`return\_std=True`) or covariance (`return\_cov=True`). Note that at most one of the two can be requested.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorPredictOptions`](../interfaces/GaussianProcessRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L185)

___

### sample\_y

▸ **sample_y**(`opts`): `Promise`<`any`\>

Draw samples from Gaussian process and evaluate at X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorSampleYOptions`](../interfaces/GaussianProcessRegressorSampleYOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L221)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GaussianProcessRegressorScoreOptions`](../interfaces/GaussianProcessRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/gaussian_process/GaussianProcessRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/GaussianProcessRegressor.ts#L257)
