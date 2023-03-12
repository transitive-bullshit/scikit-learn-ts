[sklearn](../readme.md) / [Exports](../modules.md) / RidgeClassifier

# Class: RidgeClassifier

Classifier using Ridge regression.

This classifier first converts the target values into `{-1, 1}` and then treats the problem as a regression task (multi-output regression in the multiclass case).

Read more in the [User Guide](../linear_model.html#ridge-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifier.html

## Table of contents

### Constructors

- [constructor](RidgeClassifier.md#constructor)

### Properties

- [\_isDisposed](RidgeClassifier.md#_isdisposed)
- [\_isInitialized](RidgeClassifier.md#_isinitialized)
- [\_py](RidgeClassifier.md#_py)
- [id](RidgeClassifier.md#id)
- [opts](RidgeClassifier.md#opts)

### Accessors

- [coef\_](RidgeClassifier.md#coef_)
- [feature\_names\_in\_](RidgeClassifier.md#feature_names_in_)
- [intercept\_](RidgeClassifier.md#intercept_)
- [n\_features\_in\_](RidgeClassifier.md#n_features_in_)
- [n\_iter\_](RidgeClassifier.md#n_iter_)
- [py](RidgeClassifier.md#py)

### Methods

- [decision\_function](RidgeClassifier.md#decision_function)
- [dispose](RidgeClassifier.md#dispose)
- [fit](RidgeClassifier.md#fit)
- [init](RidgeClassifier.md#init)
- [predict](RidgeClassifier.md#predict)
- [score](RidgeClassifier.md#score)

## Constructors

### constructor

• **new RidgeClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RidgeClassifierOptions`](../interfaces/RidgeClassifierOptions.md) |

#### Defined in

[generated/linear_model/RidgeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L238)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L336)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L261)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L311)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Actual number of iterations for each target. Available only for sag and lsqr solvers. Other solvers will return `undefined`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L286)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/RidgeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L34)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierDecisionFunctionOptions`](../interfaces/RidgeClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L110)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Ridge classifier model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierFitOptions`](../interfaces/RidgeClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L142)

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

[generated/linear_model/RidgeClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierPredictOptions`](../interfaces/RidgeClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L174)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RidgeClassifierScoreOptions`](../interfaces/RidgeClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RidgeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RidgeClassifier.ts#L204)
