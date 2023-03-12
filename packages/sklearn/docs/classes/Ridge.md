[sklearn](../readme.md) / [Exports](../modules.md) / Ridge

# Class: Ridge

Linear least squares with l2 regularization.

Minimizes the objective function:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html

## Table of contents

### Constructors

- [constructor](Ridge.md#constructor)

### Properties

- [\_isDisposed](Ridge.md#_isdisposed)
- [\_isInitialized](Ridge.md#_isinitialized)
- [\_py](Ridge.md#_py)
- [id](Ridge.md#id)
- [opts](Ridge.md#opts)

### Accessors

- [coef\_](Ridge.md#coef_)
- [feature\_names\_in\_](Ridge.md#feature_names_in_)
- [intercept\_](Ridge.md#intercept_)
- [n\_features\_in\_](Ridge.md#n_features_in_)
- [n\_iter\_](Ridge.md#n_iter_)
- [py](Ridge.md#py)

### Methods

- [dispose](Ridge.md#dispose)
- [fit](Ridge.md#fit)
- [init](Ridge.md#init)
- [predict](Ridge.md#predict)
- [score](Ridge.md#score)

## Constructors

### constructor

• **new Ridge**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeOptions`](../interfaces/RidgeOptions.md) |

#### Defined in

[generated/linear_model/Ridge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/Ridge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/Ridge.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/Ridge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/Ridge.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/Ridge.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Weight vector(s).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Ridge.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L197)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Ridge.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L287)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Ridge.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L219)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Ridge.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L264)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Ridge.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L242)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/Ridge.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/Ridge.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/Ridge.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L88)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Ridge regression model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeFitOptions`](../interfaces/RidgeFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Ridge.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L105)

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

[generated/linear_model/Ridge.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgePredictOptions`](../interfaces/RidgePredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Ridge.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L137)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeScoreOptions`](../interfaces/RidgeScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Ridge.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Ridge.ts#L165)
