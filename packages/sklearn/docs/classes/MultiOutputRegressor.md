[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputRegressor

# Class: MultiOutputRegressor

Multi target regression.

This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html

## Table of contents

### Constructors

- [constructor](MultiOutputRegressor.md#constructor)

### Properties

- [\_isDisposed](MultiOutputRegressor.md#_isdisposed)
- [\_isInitialized](MultiOutputRegressor.md#_isinitialized)
- [\_py](MultiOutputRegressor.md#_py)
- [id](MultiOutputRegressor.md#id)
- [opts](MultiOutputRegressor.md#opts)

### Accessors

- [estimators\_](MultiOutputRegressor.md#estimators_)
- [feature\_names\_in\_](MultiOutputRegressor.md#feature_names_in_)
- [n\_features\_in\_](MultiOutputRegressor.md#n_features_in_)
- [py](MultiOutputRegressor.md#py)

### Methods

- [dispose](MultiOutputRegressor.md#dispose)
- [fit](MultiOutputRegressor.md#fit)
- [init](MultiOutputRegressor.md#init)
- [partial\_fit](MultiOutputRegressor.md#partial_fit)
- [predict](MultiOutputRegressor.md#predict)
- [score](MultiOutputRegressor.md#score)

## Constructors

### constructor

• **new MultiOutputRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiOutputRegressorOptions`](../interfaces/MultiOutputRegressorOptions.md) |

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L17)

## Accessors

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

Estimators used for predictions.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L242)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L296)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L269)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data, separately for each output variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorFitOptions`](../interfaces/MultiOutputRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L102)

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

[generated/multioutput/MultiOutputRegressor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Incrementally fit the model to data, for each output variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorPartialFitOptions`](../interfaces/MultiOutputRegressorPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L138)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict multi-output variable using model for each target variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorPredictOptions`](../interfaces/MultiOutputRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L174)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputRegressorScoreOptions`](../interfaces/MultiOutputRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L208)
