[sklearn](../readme.md) / [Exports](../modules.md) / ElasticNet

# Class: ElasticNet

Linear regression with combined L1 and L2 priors as regularizer.

Minimizes the objective function:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html

## Table of contents

### Constructors

- [constructor](ElasticNet.md#constructor)

### Properties

- [\_isDisposed](ElasticNet.md#_isdisposed)
- [\_isInitialized](ElasticNet.md#_isinitialized)
- [\_py](ElasticNet.md#_py)
- [id](ElasticNet.md#id)
- [opts](ElasticNet.md#opts)

### Accessors

- [coef\_](ElasticNet.md#coef_)
- [dual\_gap\_](ElasticNet.md#dual_gap_)
- [feature\_names\_in\_](ElasticNet.md#feature_names_in_)
- [intercept\_](ElasticNet.md#intercept_)
- [n\_features\_in\_](ElasticNet.md#n_features_in_)
- [n\_iter\_](ElasticNet.md#n_iter_)
- [py](ElasticNet.md#py)

### Methods

- [dispose](ElasticNet.md#dispose)
- [fit](ElasticNet.md#fit)
- [init](ElasticNet.md#init)
- [path](ElasticNet.md#path)
- [predict](ElasticNet.md#predict)
- [score](ElasticNet.md#score)

## Constructors

### constructor

• **new ElasticNet**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ElasticNetOptions`](../interfaces/ElasticNetOptions.md) |

#### Defined in

[generated/linear_model/ElasticNet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/ElasticNet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/ElasticNet.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/ElasticNet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/ElasticNet.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/ElasticNet.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the cost function formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNet.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L254)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Given param alpha, the dual gaps at the end of the optimization, same shape as each observation of y.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNet.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L323)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNet.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L371)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNet.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L277)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L346)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`any`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L300)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/ElasticNet.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/ElasticNet.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit model with coordinate descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetFitOptions`](../interfaces/ElasticNetFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L108)

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

[generated/linear_model/ElasticNet.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L41)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetPathOptions`](../interfaces/ElasticNetPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNet.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L146)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetPredictOptions`](../interfaces/ElasticNetPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L194)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetScoreOptions`](../interfaces/ElasticNetScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNet.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNet.ts#L222)
