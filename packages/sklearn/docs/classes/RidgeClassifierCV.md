[sklearn](../readme.md) / [Exports](../modules.md) / RidgeClassifierCV

# Class: RidgeClassifierCV

Ridge classifier with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

By default, it performs Leave-One-Out Cross-Validation. Currently, only the n\_features > n\_samples case is handled efficiently.

Read more in the [User Guide](../linear_model.html#ridge-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifierCV.html

## Table of contents

### Constructors

- [constructor](RidgeClassifierCV.md#constructor)

### Properties

- [\_isDisposed](RidgeClassifierCV.md#_isdisposed)
- [\_isInitialized](RidgeClassifierCV.md#_isinitialized)
- [\_py](RidgeClassifierCV.md#_py)
- [id](RidgeClassifierCV.md#id)
- [opts](RidgeClassifierCV.md#opts)

### Accessors

- [alpha\_](RidgeClassifierCV.md#alpha_)
- [best\_score\_](RidgeClassifierCV.md#best_score_)
- [coef\_](RidgeClassifierCV.md#coef_)
- [cv\_values\_](RidgeClassifierCV.md#cv_values_)
- [feature\_names\_in\_](RidgeClassifierCV.md#feature_names_in_)
- [intercept\_](RidgeClassifierCV.md#intercept_)
- [n\_features\_in\_](RidgeClassifierCV.md#n_features_in_)
- [py](RidgeClassifierCV.md#py)

### Methods

- [decision\_function](RidgeClassifierCV.md#decision_function)
- [dispose](RidgeClassifierCV.md#dispose)
- [fit](RidgeClassifierCV.md#fit)
- [init](RidgeClassifierCV.md#init)
- [predict](RidgeClassifierCV.md#predict)
- [score](RidgeClassifierCV.md#score)

## Constructors

### constructor

• **new RidgeClassifierCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeClassifierCVOptions`](../interfaces/RidgeClassifierCVOptions.md) |

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L21)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

Estimated regularization parameter.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L330)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number`\>

Score of base estimator with best alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L357)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L276)

___

### cv\_values\_

• `get` **cv_values_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Cross-validation values for each alpha (only if `store\_cv\_values=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L247)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L411)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L303)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L384)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVDecisionFunctionOptions`](../interfaces/RidgeClassifierCVDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L112)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Ridge classifier with cv.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVFitOptions`](../interfaces/RidgeClassifierCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L147)

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

[generated/linear_model/RidgeClassifierCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVPredictOptions`](../interfaces/RidgeClassifierCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L181)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierCVScoreOptions`](../interfaces/RidgeClassifierCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifierCV.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L213)
