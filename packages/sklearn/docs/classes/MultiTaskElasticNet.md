[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskElasticNet

# Class: MultiTaskElasticNet

Multi-task ElasticNet model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for MultiTaskElasticNet is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNet.html

## Table of contents

### Constructors

- [constructor](MultiTaskElasticNet.md#constructor)

### Properties

- [\_isDisposed](MultiTaskElasticNet.md#_isdisposed)
- [\_isInitialized](MultiTaskElasticNet.md#_isinitialized)
- [\_py](MultiTaskElasticNet.md#_py)
- [id](MultiTaskElasticNet.md#id)
- [opts](MultiTaskElasticNet.md#opts)

### Accessors

- [coef\_](MultiTaskElasticNet.md#coef_)
- [dual\_gap\_](MultiTaskElasticNet.md#dual_gap_)
- [eps\_](MultiTaskElasticNet.md#eps_)
- [feature\_names\_in\_](MultiTaskElasticNet.md#feature_names_in_)
- [intercept\_](MultiTaskElasticNet.md#intercept_)
- [n\_features\_in\_](MultiTaskElasticNet.md#n_features_in_)
- [n\_iter\_](MultiTaskElasticNet.md#n_iter_)
- [py](MultiTaskElasticNet.md#py)

### Methods

- [dispose](MultiTaskElasticNet.md#dispose)
- [fit](MultiTaskElasticNet.md#fit)
- [init](MultiTaskElasticNet.md#init)
- [path](MultiTaskElasticNet.md#path)
- [predict](MultiTaskElasticNet.md#predict)
- [score](MultiTaskElasticNet.md#score)

## Constructors

### constructor

• **new MultiTaskElasticNet**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskElasticNetOptions`](../interfaces/MultiTaskElasticNetOptions.md) |

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Parameter vector (W in the cost function formula). If a 1D y is passed in at fit (non multi-task usage), `coef\_` is then a 1D array. Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L289)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number`\>

The dual gaps at the end of the optimization.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L343)

___

### eps\_

• `get` **eps_**(): `Promise`<`number`\>

The tolerance scaled scaled by the variance of the target `y`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L370)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L424)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L262)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L397)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L316)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit MultiTaskElasticNet model with coordinate descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetFitOptions`](../interfaces/MultiTaskElasticNetFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L110)

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

[generated/linear_model/MultiTaskElasticNet.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L41)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetPathOptions`](../interfaces/MultiTaskElasticNetPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L146)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetPredictOptions`](../interfaces/MultiTaskElasticNetPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L196)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetScoreOptions`](../interfaces/MultiTaskElasticNetScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNet.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNet.ts#L228)
