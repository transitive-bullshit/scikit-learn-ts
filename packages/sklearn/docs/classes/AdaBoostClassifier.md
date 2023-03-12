[sklearn](../readme.md) / [Exports](../modules.md) / AdaBoostClassifier

# Class: AdaBoostClassifier

An AdaBoost classifier.

An AdaBoost \[1\] classifier is a meta-estimator that begins by fitting a classifier on the original dataset and then fits additional copies of the classifier on the same dataset but where the weights of incorrectly classified instances are adjusted such that subsequent classifiers focus more on difficult cases.

This class implements the algorithm known as AdaBoost-SAMME \[2\].

Read more in the [User Guide](../ensemble.html#adaboost).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html

## Table of contents

### Constructors

- [constructor](AdaBoostClassifier.md#constructor)

### Properties

- [\_isDisposed](AdaBoostClassifier.md#_isdisposed)
- [\_isInitialized](AdaBoostClassifier.md#_isinitialized)
- [\_py](AdaBoostClassifier.md#_py)
- [id](AdaBoostClassifier.md#id)
- [opts](AdaBoostClassifier.md#opts)

### Accessors

- [classes\_](AdaBoostClassifier.md#classes_)
- [estimator\_](AdaBoostClassifier.md#estimator_)
- [estimator\_errors\_](AdaBoostClassifier.md#estimator_errors_)
- [estimator\_weights\_](AdaBoostClassifier.md#estimator_weights_)
- [estimators\_](AdaBoostClassifier.md#estimators_)
- [feature\_names\_in\_](AdaBoostClassifier.md#feature_names_in_)
- [n\_classes\_](AdaBoostClassifier.md#n_classes_)
- [n\_features\_in\_](AdaBoostClassifier.md#n_features_in_)
- [py](AdaBoostClassifier.md#py)

### Methods

- [decision\_function](AdaBoostClassifier.md#decision_function)
- [dispose](AdaBoostClassifier.md#dispose)
- [fit](AdaBoostClassifier.md#fit)
- [init](AdaBoostClassifier.md#init)
- [predict](AdaBoostClassifier.md#predict)
- [predict\_log\_proba](AdaBoostClassifier.md#predict_log_proba)
- [predict\_proba](AdaBoostClassifier.md#predict_proba)
- [score](AdaBoostClassifier.md#score)
- [staged\_decision\_function](AdaBoostClassifier.md#staged_decision_function)
- [staged\_predict](AdaBoostClassifier.md#staged_predict)
- [staged\_predict\_proba](AdaBoostClassifier.md#staged_predict_proba)
- [staged\_score](AdaBoostClassifier.md#staged_score)

## Constructors

### constructor

• **new AdaBoostClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AdaBoostClassifierOptions`](../interfaces/AdaBoostClassifierOptions.md) |

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L530)

___

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The base estimator from which the ensemble is grown.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L476)

___

### estimator\_errors\_

• `get` **estimator_errors_**(): `Promise`<`any`\>

Classification error for each estimator in the boosted ensemble.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:611](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L611)

___

### estimator\_weights\_

• `get` **estimator_weights_**(): `Promise`<`any`\>

Weights for each estimator in the boosted ensemble.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L584)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L503)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:665](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L665)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

The number of classes.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L557)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L638)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<`any`\>

Compute the decision function of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierDecisionFunctionOptions`](../interfaces/AdaBoostClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L112)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a boosted classifier/regressor from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierFitOptions`](../interfaces/AdaBoostClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L147)

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

[generated/ensemble/AdaBoostClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict classes for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictOptions`](../interfaces/AdaBoostClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L183)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the weighted mean predicted class log-probabilities of the classifiers in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictLogProbaOptions`](../interfaces/AdaBoostClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L215)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierPredictProbaOptions`](../interfaces/AdaBoostClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L252)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierScoreOptions`](../interfaces/AdaBoostClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L288)

___

### staged\_decision\_function

▸ **staged_decision_function**(`opts`): `Promise`<`any`[]\>

Compute decision function of `X` for each boosting iteration.

This method allows monitoring (i.e. determine error on testing set) after each boosting iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedDecisionFunctionOptions`](../interfaces/AdaBoostClassifierStagedDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L324)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Return staged predictions for X.

The predicted class of an input sample is computed as the weighted mean prediction of the classifiers in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedPredictOptions`](../interfaces/AdaBoostClassifierStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L363)

___

### staged\_predict\_proba

▸ **staged_predict_proba**(`opts`): `Promise`<`any`[]\>

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the weighted mean predicted class probabilities of the classifiers in the ensemble.

This generator method yields the ensemble predicted class probabilities after each iteration of boosting and therefore allows monitoring, such as to determine the predicted class probabilities on a test set after each boost.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedPredictProbaOptions`](../interfaces/AdaBoostClassifierStagedPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L401)

___

### staged\_score

▸ **staged_score**(`opts`): `Promise`<`number`\>

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostClassifierStagedScoreOptions`](../interfaces/AdaBoostClassifierStagedScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostClassifier.ts#L438)
