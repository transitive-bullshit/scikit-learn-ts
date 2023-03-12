[sklearn](../readme.md) / [Exports](../modules.md) / Lasso

# Class: Lasso

Linear Model trained with L1 prior as regularizer (aka the Lasso).

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html

## Table of contents

### Constructors

- [constructor](Lasso.md#constructor)

### Properties

- [\_isDisposed](Lasso.md#_isdisposed)
- [\_isInitialized](Lasso.md#_isinitialized)
- [\_py](Lasso.md#_py)
- [id](Lasso.md#id)
- [opts](Lasso.md#opts)

### Accessors

- [coef\_](Lasso.md#coef_)
- [dual\_gap\_](Lasso.md#dual_gap_)
- [feature\_names\_in\_](Lasso.md#feature_names_in_)
- [intercept\_](Lasso.md#intercept_)
- [n\_features\_in\_](Lasso.md#n_features_in_)
- [n\_iter\_](Lasso.md#n_iter_)
- [py](Lasso.md#py)

### Methods

- [dispose](Lasso.md#dispose)
- [fit](Lasso.md#fit)
- [init](Lasso.md#init)
- [path](Lasso.md#path)
- [predict](Lasso.md#predict)
- [score](Lasso.md#score)

## Constructors

### constructor

• **new Lasso**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoOptions`](../interfaces/LassoOptions.md) |

#### Defined in

[generated/linear_model/Lasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/Lasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/Lasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/Lasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/Lasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/Lasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the cost function formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Lasso.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L253)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Given param alpha, the dual gaps at the end of the optimization, same shape as each observation of y.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Lasso.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L275)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Lasso.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L366)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Lasso.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L298)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Lasso.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L343)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Lasso.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L321)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/Lasso.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/Lasso.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/Lasso.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model with coordinate descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoFitOptions`](../interfaces/LassoFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Lasso.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L107)

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

[generated/linear_model/Lasso.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L41)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoPathOptions`](../interfaces/LassoPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/Lasso.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L145)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoPredictOptions`](../interfaces/LassoPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/Lasso.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L193)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoScoreOptions`](../interfaces/LassoScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/Lasso.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/Lasso.ts#L221)
