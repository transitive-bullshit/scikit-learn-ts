[sklearn](../readme.md) / [Exports](../modules.md) / LassoLars

# Class: LassoLars

Lasso model fit with Least Angle Regression a.k.a. Lars.

It is a Linear Model trained with an L1 prior as regularizer.

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLars.html

## Table of contents

### Constructors

- [constructor](LassoLars.md#constructor)

### Properties

- [\_isDisposed](LassoLars.md#_isdisposed)
- [\_isInitialized](LassoLars.md#_isinitialized)
- [\_py](LassoLars.md#_py)
- [id](LassoLars.md#id)
- [opts](LassoLars.md#opts)

### Accessors

- [active\_](LassoLars.md#active_)
- [alphas\_](LassoLars.md#alphas_)
- [coef\_](LassoLars.md#coef_)
- [coef\_path\_](LassoLars.md#coef_path_)
- [feature\_names\_in\_](LassoLars.md#feature_names_in_)
- [intercept\_](LassoLars.md#intercept_)
- [n\_features\_in\_](LassoLars.md#n_features_in_)
- [n\_iter\_](LassoLars.md#n_iter_)
- [py](LassoLars.md#py)

### Methods

- [dispose](LassoLars.md#dispose)
- [fit](LassoLars.md#fit)
- [init](LassoLars.md#init)
- [predict](LassoLars.md#predict)
- [score](LassoLars.md#score)

## Constructors

### constructor

• **new LassoLars**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsOptions`](../interfaces/LassoLarsOptions.md) |

#### Defined in

[generated/linear_model/LassoLars.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLars.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLars.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LassoLars.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LassoLars.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LassoLars.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L19)

## Accessors

### active\_

• `get` **active_**(): `Promise`<`any`\>

Indices of active variables at the end of the path. If this is a list of list, the length of the outer list is `n\_targets`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLars.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L226)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLars.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L203)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the formulation formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLars.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L272)

___

### coef\_path\_

• `get` **coef_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

If a list is passed it’s expected to be one of n\_targets such arrays. The varying values of the coefficients along the path. It is not present if the `fit\_path` parameter is `false`. If this is a list of array-like, the length of the outer list is `n\_targets`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LassoLars.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L249)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLars.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L366)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLars.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L295)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLars.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L341)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

The number of iterations taken by lars\_path to find the grid of alphas for each target.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLars.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L318)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LassoLars.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LassoLars.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LassoLars.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsFitOptions`](../interfaces/LassoLarsFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLars.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L111)

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

[generated/linear_model/LassoLars.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsPredictOptions`](../interfaces/LassoLarsPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLars.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L143)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsScoreOptions`](../interfaces/LassoLarsScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLars.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLars.ts#L171)
