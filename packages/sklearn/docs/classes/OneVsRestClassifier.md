[sklearn](../readme.md) / [Exports](../modules.md) / OneVsRestClassifier

# Class: OneVsRestClassifier

One-vs-the-rest (OvR) multiclass strategy.

Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n\_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

Read more in the [User Guide](../multiclass.html#ovr-classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html

## Table of contents

### Constructors

- [constructor](OneVsRestClassifier.md#constructor)

### Properties

- [\_isDisposed](OneVsRestClassifier.md#_isdisposed)
- [\_isInitialized](OneVsRestClassifier.md#_isinitialized)
- [\_py](OneVsRestClassifier.md#_py)
- [id](OneVsRestClassifier.md#id)
- [opts](OneVsRestClassifier.md#opts)

### Accessors

- [classes\_](OneVsRestClassifier.md#classes_)
- [estimators\_](OneVsRestClassifier.md#estimators_)
- [feature\_names\_in\_](OneVsRestClassifier.md#feature_names_in_)
- [label\_binarizer\_](OneVsRestClassifier.md#label_binarizer_)
- [n\_features\_in\_](OneVsRestClassifier.md#n_features_in_)
- [py](OneVsRestClassifier.md#py)

### Methods

- [decision\_function](OneVsRestClassifier.md#decision_function)
- [dispose](OneVsRestClassifier.md#dispose)
- [fit](OneVsRestClassifier.md#fit)
- [init](OneVsRestClassifier.md#init)
- [partial\_fit](OneVsRestClassifier.md#partial_fit)
- [predict](OneVsRestClassifier.md#predict)
- [predict\_proba](OneVsRestClassifier.md#predict_proba)
- [score](OneVsRestClassifier.md#score)

## Constructors

### constructor

• **new OneVsRestClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneVsRestClassifierOptions`](../interfaces/OneVsRestClassifierOptions.md) |

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<`any`\>

Class labels.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L350)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

Estimators used for predictions.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L323)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L431)

___

### label\_binarizer\_

• `get` **label_binarizer_**(): `Promise`<`any`\>

Object used to transform multiclass labels to binary labels and vice-versa.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L377)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L404)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Decision function for the OneVsRestClassifier.

Return the distance of each sample from the decision boundary for each class. This can only be used with estimators which implement the `decision\_function` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierDecisionFunctionOptions`](../interfaces/OneVsRestClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L110)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit underlying estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierFitOptions`](../interfaces/OneVsRestClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L145)

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

[generated/multiclass/OneVsRestClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L45)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPartialFitOptions`](../interfaces/OneVsRestClassifierPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L179)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict multi-class targets using underlying estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPredictOptions`](../interfaces/OneVsRestClassifierPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L215)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Probability estimates.

The returned estimates for all classes are ordered by label of classes.

Note that in the multilabel case, each sample can have any number of labels. This returns the marginal probability that the given sample has the label in question. For example, it is entirely consistent that two labels both have a 90% probability of applying to a given sample.

In the single label multiclass case, the rows of the returned matrix sum to 1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierPredictProbaOptions`](../interfaces/OneVsRestClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L253)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneVsRestClassifierScoreOptions`](../interfaces/OneVsRestClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L289)
