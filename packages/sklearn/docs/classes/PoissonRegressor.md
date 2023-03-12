[sklearn](../readme.md) / [Exports](../modules.md) / PoissonRegressor

# Class: PoissonRegressor

Generalized Linear Model with a Poisson distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.PoissonRegressor.html

## Table of contents

### Constructors

- [constructor](PoissonRegressor.md#constructor)

### Properties

- [\_isDisposed](PoissonRegressor.md#_isdisposed)
- [\_isInitialized](PoissonRegressor.md#_isinitialized)
- [\_py](PoissonRegressor.md#_py)
- [id](PoissonRegressor.md#id)
- [opts](PoissonRegressor.md#opts)

### Accessors

- [coef\_](PoissonRegressor.md#coef_)
- [feature\_names\_in\_](PoissonRegressor.md#feature_names_in_)
- [intercept\_](PoissonRegressor.md#intercept_)
- [n\_features\_in\_](PoissonRegressor.md#n_features_in_)
- [n\_iter\_](PoissonRegressor.md#n_iter_)
- [py](PoissonRegressor.md#py)

### Methods

- [dispose](PoissonRegressor.md#dispose)
- [fit](PoissonRegressor.md#fit)
- [init](PoissonRegressor.md#init)
- [predict](PoissonRegressor.md#predict)
- [score](PoissonRegressor.md#score)

## Constructors

### constructor

• **new PoissonRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PoissonRegressorOptions`](../interfaces/PoissonRegressorOptions.md) |

#### Defined in

[generated/linear_model/PoissonRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`[]\>

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L210)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L291)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Intercept (a.k.a. bias) added to linear predictor.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L237)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L264)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Actual number of iterations used in the solver.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L318)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/PoissonRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a Generalized Linear Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PoissonRegressorFitOptions`](../interfaces/PoissonRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L108)

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

[generated/linear_model/PoissonRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`[]\>

Predict using GLM with feature matrix X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PoissonRegressorPredictOptions`](../interfaces/PoissonRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L142)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PoissonRegressorScoreOptions`](../interfaces/PoissonRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/PoissonRegressor.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/PoissonRegressor.ts#L176)
