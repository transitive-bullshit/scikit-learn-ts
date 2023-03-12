[sklearn](../readme.md) / [Exports](../modules.md) / BaggingClassifier

# Class: BaggingClassifier

A Bagging classifier.

A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#rb1846455d0e5-4).

Read more in the [User Guide](../ensemble.html#bagging).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html

## Table of contents

### Constructors

- [constructor](BaggingClassifier.md#constructor)

### Properties

- [\_isDisposed](BaggingClassifier.md#_isdisposed)
- [\_isInitialized](BaggingClassifier.md#_isinitialized)
- [\_py](BaggingClassifier.md#_py)
- [id](BaggingClassifier.md#id)
- [opts](BaggingClassifier.md#opts)

### Accessors

- [classes\_](BaggingClassifier.md#classes_)
- [estimator\_](BaggingClassifier.md#estimator_)
- [estimators\_](BaggingClassifier.md#estimators_)
- [estimators\_features\_](BaggingClassifier.md#estimators_features_)
- [feature\_names\_in\_](BaggingClassifier.md#feature_names_in_)
- [n\_classes\_](BaggingClassifier.md#n_classes_)
- [n\_features\_in\_](BaggingClassifier.md#n_features_in_)
- [oob\_decision\_function\_](BaggingClassifier.md#oob_decision_function_)
- [oob\_score\_](BaggingClassifier.md#oob_score_)
- [py](BaggingClassifier.md#py)

### Methods

- [decision\_function](BaggingClassifier.md#decision_function)
- [dispose](BaggingClassifier.md#dispose)
- [fit](BaggingClassifier.md#fit)
- [init](BaggingClassifier.md#init)
- [predict](BaggingClassifier.md#predict)
- [predict\_log\_proba](BaggingClassifier.md#predict_log_proba)
- [predict\_proba](BaggingClassifier.md#predict_proba)
- [score](BaggingClassifier.md#score)

## Constructors

### constructor

• **new BaggingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BaggingClassifierOptions`](../interfaces/BaggingClassifierOptions.md) |

#### Defined in

[generated/ensemble/BaggingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L465)

___

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The base estimator from which the ensemble is grown.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L330)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted base estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L411)

___

### estimators\_features\_

• `get` **estimators_features_**(): `Promise`<`any`\>

The subset of drawn features for each base estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L438)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L384)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number` \| `any`[]\>

The number of classes.

#### Returns

`Promise`<`number` \| `any`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L492)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L357)

___

### oob\_decision\_function\_

• `get` **oob_decision_function_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L546)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L519)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Average of the decision functions of the base classifiers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierDecisionFunctionOptions`](../interfaces/BaggingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L120)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a Bagging ensemble of estimators from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierFitOptions`](../interfaces/BaggingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L155)

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

[generated/ensemble/BaggingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class for X.

The predicted class of an input sample is computed as the class with the highest mean predicted probability. If base estimators do not implement a `predict\_proba` method, then it resorts to voting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierPredictOptions`](../interfaces/BaggingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L191)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the base estimators in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierPredictLogProbaOptions`](../interfaces/BaggingClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L223)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the mean predicted class probabilities of the base estimators in the ensemble. If base estimators do not implement a `predict\_proba` method, then it resorts to voting and the predicted class probabilities of an input sample represents the proportion of estimators predicting each class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierPredictProbaOptions`](../interfaces/BaggingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L260)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingClassifierScoreOptions`](../interfaces/BaggingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L296)
