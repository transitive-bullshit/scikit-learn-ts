[sklearn](../readme.md) / [Exports](../modules.md) / GammaRegressor

# Class: GammaRegressor

Generalized Linear Model with a Gamma distribution.

This regressor uses the ‘log’ link function.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.GammaRegressor.html

## Table of contents

### Constructors

- [constructor](GammaRegressor.md#constructor)

### Properties

- [\_isDisposed](GammaRegressor.md#_isdisposed)
- [\_isInitialized](GammaRegressor.md#_isinitialized)
- [\_py](GammaRegressor.md#_py)
- [id](GammaRegressor.md#id)
- [opts](GammaRegressor.md#opts)

### Accessors

- [coef\_](GammaRegressor.md#coef_)
- [feature\_names\_in\_](GammaRegressor.md#feature_names_in_)
- [intercept\_](GammaRegressor.md#intercept_)
- [n\_features\_in\_](GammaRegressor.md#n_features_in_)
- [n\_iter\_](GammaRegressor.md#n_iter_)
- [py](GammaRegressor.md#py)

### Methods

- [dispose](GammaRegressor.md#dispose)
- [fit](GammaRegressor.md#fit)
- [init](GammaRegressor.md#init)
- [predict](GammaRegressor.md#predict)
- [score](GammaRegressor.md#score)

## Constructors

### constructor

• **new GammaRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GammaRegressorOptions`](../interfaces/GammaRegressorOptions.md) |

#### Defined in

[generated/linear_model/GammaRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/GammaRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/GammaRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/GammaRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/GammaRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/GammaRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`[]\>

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L202)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L300)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Intercept (a.k.a. bias) added to linear predictor.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L225)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L250)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Actual number of iterations used in the solver.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L275)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/GammaRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/GammaRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a Generalized Linear Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GammaRegressorFitOptions`](../interfaces/GammaRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L106)

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

[generated/linear_model/GammaRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`[]\>

Predict using GLM with feature matrix X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GammaRegressorPredictOptions`](../interfaces/GammaRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L138)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GammaRegressorScoreOptions`](../interfaces/GammaRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/GammaRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/GammaRegressor.ts#L170)
