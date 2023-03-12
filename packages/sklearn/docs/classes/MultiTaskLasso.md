[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskLasso

# Class: MultiTaskLasso

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLasso.html

## Table of contents

### Constructors

- [constructor](MultiTaskLasso.md#constructor)

### Properties

- [\_isDisposed](MultiTaskLasso.md#_isdisposed)
- [\_isInitialized](MultiTaskLasso.md#_isinitialized)
- [\_py](MultiTaskLasso.md#_py)
- [id](MultiTaskLasso.md#id)
- [opts](MultiTaskLasso.md#opts)

### Accessors

- [coef\_](MultiTaskLasso.md#coef_)
- [dual\_gap\_](MultiTaskLasso.md#dual_gap_)
- [eps\_](MultiTaskLasso.md#eps_)
- [feature\_names\_in\_](MultiTaskLasso.md#feature_names_in_)
- [intercept\_](MultiTaskLasso.md#intercept_)
- [n\_features\_in\_](MultiTaskLasso.md#n_features_in_)
- [n\_iter\_](MultiTaskLasso.md#n_iter_)
- [py](MultiTaskLasso.md#py)

### Methods

- [dispose](MultiTaskLasso.md#dispose)
- [fit](MultiTaskLasso.md#fit)
- [init](MultiTaskLasso.md#init)
- [path](MultiTaskLasso.md#path)
- [predict](MultiTaskLasso.md#predict)
- [score](MultiTaskLasso.md#score)

## Constructors

### constructor

• **new MultiTaskLasso**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskLassoOptions`](../interfaces/MultiTaskLassoOptions.md) |

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L248)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The dual gaps at the end of the optimization for each alpha.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L321)

___

### eps\_

• `get` **eps_**(): `Promise`<`number`\>

The tolerance scaled scaled by the variance of the target `y`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L346)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L394)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L271)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L369)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L296)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit MultiTaskElasticNet model with coordinate descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoFitOptions`](../interfaces/MultiTaskLassoFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L104)

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

[generated/linear_model/MultiTaskLasso.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L41)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoPathOptions`](../interfaces/MultiTaskLassoPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L138)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoPredictOptions`](../interfaces/MultiTaskLassoPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L186)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoScoreOptions`](../interfaces/MultiTaskLassoScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLasso.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLasso.ts#L216)
