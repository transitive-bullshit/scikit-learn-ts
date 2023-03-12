[sklearn](../readme.md) / [Exports](../modules.md) / SelfTrainingClassifier

# Class: SelfTrainingClassifier

Self-training classifier.

This [metaestimator](../../glossary.html#term-metaestimator) allows a given supervised classifier to function as a semi-supervised classifier, allowing it to learn from unlabeled data. It does this by iteratively predicting pseudo-labels for the unlabeled data and adding them to the training set.

The classifier will continue iterating until either max\_iter is reached, or no pseudo-labels were added to the training set in the previous iteration.

Read more in the [User Guide](../semi_supervised.html#self-training).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.SelfTrainingClassifier.html

## Table of contents

### Constructors

- [constructor](SelfTrainingClassifier.md#constructor)

### Properties

- [\_isDisposed](SelfTrainingClassifier.md#_isdisposed)
- [\_isInitialized](SelfTrainingClassifier.md#_isinitialized)
- [\_py](SelfTrainingClassifier.md#_py)
- [id](SelfTrainingClassifier.md#id)
- [opts](SelfTrainingClassifier.md#opts)

### Accessors

- [base\_estimator\_](SelfTrainingClassifier.md#base_estimator_)
- [classes\_](SelfTrainingClassifier.md#classes_)
- [feature\_names\_in\_](SelfTrainingClassifier.md#feature_names_in_)
- [labeled\_iter\_](SelfTrainingClassifier.md#labeled_iter_)
- [n\_features\_in\_](SelfTrainingClassifier.md#n_features_in_)
- [n\_iter\_](SelfTrainingClassifier.md#n_iter_)
- [py](SelfTrainingClassifier.md#py)
- [termination\_condition\_](SelfTrainingClassifier.md#termination_condition_)
- [transduction\_](SelfTrainingClassifier.md#transduction_)

### Methods

- [decision\_function](SelfTrainingClassifier.md#decision_function)
- [dispose](SelfTrainingClassifier.md#dispose)
- [fit](SelfTrainingClassifier.md#fit)
- [init](SelfTrainingClassifier.md#init)
- [predict](SelfTrainingClassifier.md#predict)
- [predict\_log\_proba](SelfTrainingClassifier.md#predict_log_proba)
- [predict\_proba](SelfTrainingClassifier.md#predict_proba)
- [score](SelfTrainingClassifier.md#score)

## Constructors

### constructor

• **new SelfTrainingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SelfTrainingClassifierOptions`](../interfaces/SelfTrainingClassifierOptions.md) |

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L21)

## Accessors

### base\_estimator\_

• `get` **base_estimator_**(): `Promise`<`any`\>

The fitted estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L311)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels for each output. (Taken from the trained `base\_estimator\_`).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L338)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L446)

___

### labeled\_iter\_

• `get` **labeled_iter_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The iteration in which each sample was labeled. When a sample has iteration 0, the sample was already labeled in the original dataset. When a sample has iteration -1, the sample was not labeled in any iteration.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L392)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L419)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The number of rounds of self-training, that is the number of times the base estimator is fitted on relabeled variants of the training set.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L473)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L36)

___

### termination\_condition\_

• `get` **termination_condition_**(): `Promise`<``"max_iter"`` \| ``"no_change"`` \| ``"all_labeled"``\>

The reason that fitting was stopped.

#### Returns

`Promise`<``"max_iter"`` \| ``"no_change"`` \| ``"all_labeled"``\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L500)

___

### transduction\_

• `get` **transduction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The labels used for the final fit of the classifier, including pseudo-labels added during fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L365)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Call decision function of the `base\_estimator`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierDecisionFunctionOptions`](../interfaces/SelfTrainingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L110)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit self-training classifier using `X`, `y` as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierFitOptions`](../interfaces/SelfTrainingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L145)

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

[generated/semi_supervised/SelfTrainingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the classes of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictOptions`](../interfaces/SelfTrainingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L177)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict log probability for each possible outcome.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictLogProbaOptions`](../interfaces/SelfTrainingClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L209)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict probability for each possible outcome.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierPredictProbaOptions`](../interfaces/SelfTrainingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:244](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L244)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Call score on the `base\_estimator`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SelfTrainingClassifierScoreOptions`](../interfaces/SelfTrainingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/semi_supervised/SelfTrainingClassifier.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/SelfTrainingClassifier.ts#L279)
