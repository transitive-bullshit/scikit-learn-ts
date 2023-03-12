[sklearn](../readme.md) / [Exports](../modules.md) / RandomForestClassifier

# Class: RandomForestClassifier

A random forest classifier.

A random forest is a meta estimator that fits a number of decision tree classifiers on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

Read more in the [User Guide](../ensemble.html#forest).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html

## Table of contents

### Constructors

- [constructor](RandomForestClassifier.md#constructor)

### Properties

- [\_isDisposed](RandomForestClassifier.md#_isdisposed)
- [\_isInitialized](RandomForestClassifier.md#_isinitialized)
- [\_py](RandomForestClassifier.md#_py)
- [id](RandomForestClassifier.md#id)
- [opts](RandomForestClassifier.md#opts)

### Accessors

- [classes\_](RandomForestClassifier.md#classes_)
- [estimator\_](RandomForestClassifier.md#estimator_)
- [estimators\_](RandomForestClassifier.md#estimators_)
- [feature\_names\_in\_](RandomForestClassifier.md#feature_names_in_)
- [n\_classes\_](RandomForestClassifier.md#n_classes_)
- [n\_features\_in\_](RandomForestClassifier.md#n_features_in_)
- [n\_outputs\_](RandomForestClassifier.md#n_outputs_)
- [oob\_decision\_function\_](RandomForestClassifier.md#oob_decision_function_)
- [oob\_score\_](RandomForestClassifier.md#oob_score_)
- [py](RandomForestClassifier.md#py)

### Methods

- [apply](RandomForestClassifier.md#apply)
- [decision\_path](RandomForestClassifier.md#decision_path)
- [dispose](RandomForestClassifier.md#dispose)
- [fit](RandomForestClassifier.md#fit)
- [init](RandomForestClassifier.md#init)
- [predict](RandomForestClassifier.md#predict)
- [predict\_log\_proba](RandomForestClassifier.md#predict_log_proba)
- [predict\_proba](RandomForestClassifier.md#predict_proba)
- [score](RandomForestClassifier.md#score)

## Constructors

### constructor

• **new RandomForestClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomForestClassifierOptions`](../interfaces/RandomForestClassifierOptions.md) |

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L19)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels (single output problem), or a list of arrays of class labels (multi-output problem).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L425)

___

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L371)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L398)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L506)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number` \| `any`[]\>

The number of classes (single output problem), or a list containing the number of classes for each output (multi-output problem).

#### Returns

`Promise`<`number` \| `any`[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L452)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L479)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L533)

___

### oob\_decision\_function\_

• `get` **oob_decision_function_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:587](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L587)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:560](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L560)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L34)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierApplyOptions`](../interfaces/RandomForestClassifierApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L128)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierDecisionPathOptions`](../interfaces/RandomForestClassifierDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L158)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L111)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierFitOptions`](../interfaces/RandomForestClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L193)

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

[generated/ensemble/RandomForestClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class for X.

The predicted class of an input sample is a vote by the trees in the forest, weighted by their probability estimates. That is, the predicted class is the one with highest mean probability estimate across the trees.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictOptions`](../interfaces/RandomForestClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L229)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<`any`\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the trees in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictLogProbaOptions`](../interfaces/RandomForestClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L263)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Predict class probabilities for X.

The predicted class probabilities of an input sample are computed as the mean predicted class probabilities of the trees in the forest. The class probability of a single tree is the fraction of samples of the same class in a leaf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierPredictProbaOptions`](../interfaces/RandomForestClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L300)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestClassifierScoreOptions`](../interfaces/RandomForestClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestClassifier.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestClassifier.ts#L337)
