[sklearn](../readme.md) / [Exports](../modules.md) / DummyRegressor

# Class: DummyRegressor

Regressor that makes predictions using simple rules.

This regressor is useful as a simple baseline to compare with other (real) regressors. Do not use it for real problems.

Read more in the [User Guide](../model_evaluation.html#dummy-estimators).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html

## Table of contents

### Constructors

- [constructor](DummyRegressor.md#constructor)

### Properties

- [\_isDisposed](DummyRegressor.md#_isdisposed)
- [\_isInitialized](DummyRegressor.md#_isinitialized)
- [\_py](DummyRegressor.md#_py)
- [id](DummyRegressor.md#id)
- [opts](DummyRegressor.md#opts)

### Accessors

- [constant\_](DummyRegressor.md#constant_)
- [n\_outputs\_](DummyRegressor.md#n_outputs_)
- [py](DummyRegressor.md#py)

### Methods

- [dispose](DummyRegressor.md#dispose)
- [fit](DummyRegressor.md#fit)
- [init](DummyRegressor.md#init)
- [predict](DummyRegressor.md#predict)
- [score](DummyRegressor.md#score)

## Constructors

### constructor

• **new DummyRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DummyRegressorOptions`](../interfaces/DummyRegressorOptions.md) |

#### Defined in

[generated/dummy/DummyRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/dummy/DummyRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/dummy/DummyRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/dummy/DummyRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/dummy/DummyRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L19)

## Accessors

### constant\_

• `get` **constant_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Mean or median or quantile of the training targets or constant value given by the user.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/dummy/DummyRegressor.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L198)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

Number of outputs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/dummy/DummyRegressor.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L223)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/dummy/DummyRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/dummy/DummyRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/dummy/DummyRegressor.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the random regressor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyRegressorFitOptions`](../interfaces/DummyRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/dummy/DummyRegressor.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L102)

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

[generated/dummy/DummyRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyRegressorPredictOptions`](../interfaces/DummyRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/dummy/DummyRegressor.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L134)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination R^2 of the prediction.

The coefficient R^2 is defined as `(1 \- u/v)`, where `u` is the residual sum of squares `((y\_true \- y\_pred) \*\* 2).sum()` and `v` is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of y, disregarding the input features, would get a R^2 score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DummyRegressorScoreOptions`](../interfaces/DummyRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/dummy/DummyRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/dummy/DummyRegressor.ts#L166)
