[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreesClassifier

# Class: ExtraTreesClassifier

An extra-trees classifier.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the [User Guide](../ensemble.html#forest).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html

## Table of contents

### Constructors

- [constructor](ExtraTreesClassifier.md#constructor)

### Properties

- [\_isDisposed](ExtraTreesClassifier.md#_isdisposed)
- [\_isInitialized](ExtraTreesClassifier.md#_isinitialized)
- [\_py](ExtraTreesClassifier.md#_py)
- [id](ExtraTreesClassifier.md#id)
- [opts](ExtraTreesClassifier.md#opts)

### Accessors

- [classes\_](ExtraTreesClassifier.md#classes_)
- [estimator\_](ExtraTreesClassifier.md#estimator_)
- [estimators\_](ExtraTreesClassifier.md#estimators_)
- [feature\_names\_in\_](ExtraTreesClassifier.md#feature_names_in_)
- [n\_classes\_](ExtraTreesClassifier.md#n_classes_)
- [n\_features\_in\_](ExtraTreesClassifier.md#n_features_in_)
- [n\_outputs\_](ExtraTreesClassifier.md#n_outputs_)
- [oob\_decision\_function\_](ExtraTreesClassifier.md#oob_decision_function_)
- [oob\_score\_](ExtraTreesClassifier.md#oob_score_)
- [py](ExtraTreesClassifier.md#py)

### Methods

- [apply](ExtraTreesClassifier.md#apply)
- [decision\_path](ExtraTreesClassifier.md#decision_path)
- [dispose](ExtraTreesClassifier.md#dispose)
- [fit](ExtraTreesClassifier.md#fit)
- [init](ExtraTreesClassifier.md#init)
- [predict](ExtraTreesClassifier.md#predict)
- [predict\_log\_proba](ExtraTreesClassifier.md#predict_log_proba)
- [predict\_proba](ExtraTreesClassifier.md#predict_proba)
- [score](ExtraTreesClassifier.md#score)

## Constructors

### constructor

• **new ExtraTreesClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreesClassifierOptions`](../interfaces/ExtraTreesClassifierOptions.md) |

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L19)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L421)

___

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L367)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L394)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L502)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number` \| `any`[]\>

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

#### Returns

`Promise`<`number` \| `any`[]\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L448)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L475)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L529)

___

### oob\_decision\_function\_

• `get` **oob_decision_function_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L583)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L556)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L34)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierApplyOptions`](../interfaces/ExtraTreesClassifierApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L128)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierDecisionPathOptions`](../interfaces/ExtraTreesClassifierDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L158)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierFitOptions`](../interfaces/ExtraTreesClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L192)

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

[generated/ensemble/ExtraTreesClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictOptions`](../interfaces/ExtraTreesClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L228)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<`any`\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictLogProbaOptions`](../interfaces/ExtraTreesClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L260)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierPredictProbaOptions`](../interfaces/ExtraTreesClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L297)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesClassifierScoreOptions`](../interfaces/ExtraTreesClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesClassifier.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesClassifier.ts#L333)
