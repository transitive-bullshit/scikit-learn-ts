[sklearn](../readme.md) / [Exports](../modules.md) / LassoCV

# Class: LassoCV

Lasso linear model with iterative fitting along a regularization path.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The best model is selected by cross-validation.

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoCV.html

## Table of contents

### Constructors

- [constructor](LassoCV.md#constructor)

### Properties

- [\_isDisposed](LassoCV.md#_isdisposed)
- [\_isInitialized](LassoCV.md#_isinitialized)
- [\_py](LassoCV.md#_py)
- [id](LassoCV.md#id)
- [opts](LassoCV.md#opts)

### Accessors

- [alpha\_](LassoCV.md#alpha_)
- [alphas\_](LassoCV.md#alphas_)
- [coef\_](LassoCV.md#coef_)
- [dual\_gap\_](LassoCV.md#dual_gap_)
- [feature\_names\_in\_](LassoCV.md#feature_names_in_)
- [intercept\_](LassoCV.md#intercept_)
- [mse\_path\_](LassoCV.md#mse_path_)
- [n\_features\_in\_](LassoCV.md#n_features_in_)
- [n\_iter\_](LassoCV.md#n_iter_)
- [py](LassoCV.md#py)

### Methods

- [dispose](LassoCV.md#dispose)
- [fit](LassoCV.md#fit)
- [init](LassoCV.md#init)
- [path](LassoCV.md#path)
- [predict](LassoCV.md#predict)
- [score](LassoCV.md#score)

## Constructors

### constructor

• **new LassoCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoCVOptions`](../interfaces/LassoCVOptions.md) |

#### Defined in

[generated/linear_model/LassoCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LassoCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L21)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

The amount of penalization chosen by cross validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoCV.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L259)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The grid of alphas used for fitting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L349)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the cost function formula).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L281)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

The dual gap at the end of the optimization for the optimal alpha (`alpha\_`).

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L372)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L443)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L303)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Mean square error for the test set on each fold, varying alpha.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LassoCV.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L326)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoCV.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L418)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoCV.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L395)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LassoCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LassoCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LassoCV.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L98)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoCVFitOptions`](../interfaces/LassoCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoCV.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L117)

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

[generated/linear_model/LassoCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L45)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute Lasso path with coordinate descent.

The Lasso optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoCVPathOptions`](../interfaces/LassoCVPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoCV.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L153)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoCVPredictOptions`](../interfaces/LassoCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoCV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L199)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoCVScoreOptions`](../interfaces/LassoCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoCV.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoCV.ts#L227)
