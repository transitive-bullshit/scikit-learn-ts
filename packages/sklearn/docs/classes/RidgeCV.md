[sklearn](../readme.md) / [Exports](../modules.md) / RidgeCV

# Class: RidgeCV

Ridge regression with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

By default, it performs efficient Leave-One-Out Cross-Validation.

Read more in the [User Guide](../linear_model.html#ridge-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeCV.html

## Table of contents

### Constructors

- [constructor](RidgeCV.md#constructor)

### Properties

- [\_isDisposed](RidgeCV.md#_isdisposed)
- [\_isInitialized](RidgeCV.md#_isinitialized)
- [\_py](RidgeCV.md#_py)
- [id](RidgeCV.md#id)
- [opts](RidgeCV.md#opts)

### Accessors

- [alpha\_](RidgeCV.md#alpha_)
- [best\_score\_](RidgeCV.md#best_score_)
- [coef\_](RidgeCV.md#coef_)
- [cv\_values\_](RidgeCV.md#cv_values_)
- [feature\_names\_in\_](RidgeCV.md#feature_names_in_)
- [intercept\_](RidgeCV.md#intercept_)
- [n\_features\_in\_](RidgeCV.md#n_features_in_)
- [py](RidgeCV.md#py)

### Methods

- [dispose](RidgeCV.md#dispose)
- [fit](RidgeCV.md#fit)
- [init](RidgeCV.md#init)
- [predict](RidgeCV.md#predict)
- [score](RidgeCV.md#score)

## Constructors

### constructor

• **new RidgeCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeCVOptions`](../interfaces/RidgeCVOptions.md) |

#### Defined in

[generated/linear_model/RidgeCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/RidgeCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/RidgeCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/RidgeCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L21)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Estimated regularization parameter, or, if `alpha\_per\_target=True`, the estimated regularization parameter for each target.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeCV.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L267)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Score of base estimator with best alpha, or, if `alpha\_per\_target=True`, a score for each target.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeCV.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L289)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Weight vector(s).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeCV.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L222)

___

### cv\_values\_

• `get` **cv_values_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Cross-validation values for each alpha (only available if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/RidgeCV.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L199)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeCV.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L337)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeCV.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L244)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeCV.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L312)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/RidgeCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/RidgeCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/RidgeCV.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Ridge regression model with cv.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVFitOptions`](../interfaces/RidgeCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RidgeCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L107)

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

[generated/linear_model/RidgeCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVPredictOptions`](../interfaces/RidgeCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RidgeCV.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L139)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeCVScoreOptions`](../interfaces/RidgeCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeCV.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeCV.ts#L167)
