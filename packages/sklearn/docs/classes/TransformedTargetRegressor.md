[sklearn](../readme.md) / [Exports](../modules.md) / TransformedTargetRegressor

# Class: TransformedTargetRegressor

Meta-estimator to regress on a transformed target.

Useful for applying a non-linear transformation to the target `y` in regression problems. This transformation can be given as a Transformer such as the [`QuantileTransformer`](sklearn.preprocessing.QuantileTransformer.html#sklearn.preprocessing.QuantileTransformer "sklearn.preprocessing.QuantileTransformer") or as a function and its inverse such as `np.log` and `np.exp`.

The computation during [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.compose.TransformedTargetRegressor.html

## Table of contents

### Constructors

- [constructor](TransformedTargetRegressor.md#constructor)

### Properties

- [\_isDisposed](TransformedTargetRegressor.md#_isdisposed)
- [\_isInitialized](TransformedTargetRegressor.md#_isinitialized)
- [\_py](TransformedTargetRegressor.md#_py)
- [id](TransformedTargetRegressor.md#id)
- [opts](TransformedTargetRegressor.md#opts)

### Accessors

- [feature\_names\_in\_](TransformedTargetRegressor.md#feature_names_in_)
- [py](TransformedTargetRegressor.md#py)
- [regressor\_](TransformedTargetRegressor.md#regressor_)
- [transformer\_](TransformedTargetRegressor.md#transformer_)

### Methods

- [dispose](TransformedTargetRegressor.md#dispose)
- [fit](TransformedTargetRegressor.md#fit)
- [init](TransformedTargetRegressor.md#init)
- [predict](TransformedTargetRegressor.md#predict)
- [score](TransformedTargetRegressor.md#score)

## Constructors

### constructor

• **new TransformedTargetRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TransformedTargetRegressorOptions`](../interfaces/TransformedTargetRegressorOptions.md) |

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L19)

## Accessors

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L274)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L34)

___

### regressor\_

• `get` **regressor_**(): `Promise`<`any`\>

Fitted regressor.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L220)

___

### transformer\_

• `get` **transformer_**(): `Promise`<`any`\>

Transformer used in [`fit`](#sklearn.compose.TransformedTargetRegressor.fit "sklearn.compose.TransformedTargetRegressor.fit") and [`predict`](#sklearn.compose.TransformedTargetRegressor.predict "sklearn.compose.TransformedTargetRegressor.predict").

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L247)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TransformedTargetRegressorFitOptions`](../interfaces/TransformedTargetRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L108)

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

[generated/compose/TransformedTargetRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the base regressor, applying inverse.

The regressor is used to predict and the `inverse\_func` or `inverse\_transform` is applied before returning the prediction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TransformedTargetRegressorPredictOptions`](../interfaces/TransformedTargetRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L146)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TransformedTargetRegressorScoreOptions`](../interfaces/TransformedTargetRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/compose/TransformedTargetRegressor.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/TransformedTargetRegressor.ts#L184)
