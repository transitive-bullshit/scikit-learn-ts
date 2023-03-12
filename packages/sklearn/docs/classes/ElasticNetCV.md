[sklearn](../readme.md) / [Exports](../modules.md) / ElasticNetCV

# Class: ElasticNetCV

Elastic Net model with iterative fitting along a regularization path.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../linear_model.html#elastic-net).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNetCV.html

## Table of contents

### Constructors

- [constructor](ElasticNetCV.md#constructor)

### Properties

- [\_isDisposed](ElasticNetCV.md#_isdisposed)
- [\_isInitialized](ElasticNetCV.md#_isinitialized)
- [\_py](ElasticNetCV.md#_py)
- [id](ElasticNetCV.md#id)
- [opts](ElasticNetCV.md#opts)

### Accessors

- [alpha\_](ElasticNetCV.md#alpha_)
- [alphas\_](ElasticNetCV.md#alphas_)
- [coef\_](ElasticNetCV.md#coef_)
- [dual\_gap\_](ElasticNetCV.md#dual_gap_)
- [feature\_names\_in\_](ElasticNetCV.md#feature_names_in_)
- [intercept\_](ElasticNetCV.md#intercept_)
- [l1\_ratio\_](ElasticNetCV.md#l1_ratio_)
- [mse\_path\_](ElasticNetCV.md#mse_path_)
- [n\_features\_in\_](ElasticNetCV.md#n_features_in_)
- [n\_iter\_](ElasticNetCV.md#n_iter_)
- [py](ElasticNetCV.md#py)

### Methods

- [dispose](ElasticNetCV.md#dispose)
- [fit](ElasticNetCV.md#fit)
- [init](ElasticNetCV.md#init)
- [path](ElasticNetCV.md#path)
- [predict](ElasticNetCV.md#predict)
- [score](ElasticNetCV.md#score)

## Constructors

### constructor

• **new ElasticNetCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ElasticNetCVOptions`](../interfaces/ElasticNetCVOptions.md) |

#### Defined in

[generated/linear_model/ElasticNetCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L19)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

The amount of penalization chosen by cross validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L262)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The grid of alphas used for fitting, for each l1\_ratio.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L383)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the cost function formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L310)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number`\>

The dual gaps at the end of the optimization for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L406)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L479)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)[]\>

Independent term in the decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L333)

___

### l1\_ratio\_

• `get` **l1_ratio_**(): `Promise`<`number`\>

The compromise between l1 and l2 penalization chosen by cross validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L285)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Mean square error for the test set on each fold, varying l1\_ratio and alpha.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L358)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L454)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L431)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/ElasticNetCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetCVFitOptions`](../interfaces/ElasticNetCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L116)

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

[generated/linear_model/ElasticNetCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L43)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetCVPathOptions`](../interfaces/ElasticNetCVPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L152)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetCVPredictOptions`](../interfaces/ElasticNetCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L200)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ElasticNetCVScoreOptions`](../interfaces/ElasticNetCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ElasticNetCV.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ElasticNetCV.ts#L230)
