[sklearn](../readme.md) / [Exports](../modules.md) / IsolationForest

# Class: IsolationForest

Isolation Forest Algorithm.

Return the anomaly score of each sample using the IsolationForest algorithm

The IsolationForest ‘isolates’ observations by randomly selecting a feature and then randomly selecting a split value between the maximum and minimum values of the selected feature.

Since recursive partitioning can be represented by a tree structure, the number of splittings required to isolate a sample is equivalent to the path length from the root node to the terminating node.

This path length, averaged over a forest of such random trees, is a measure of normality and our decision function.

Random partitioning produces noticeably shorter paths for anomalies. Hence, when a forest of random trees collectively produce shorter path lengths for particular samples, they are highly likely to be anomalies.

Read more in the [User Guide](../outlier_detection.html#isolation-forest).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html

## Table of contents

### Constructors

- [constructor](IsolationForest.md#constructor)

### Properties

- [\_isDisposed](IsolationForest.md#_isdisposed)
- [\_isInitialized](IsolationForest.md#_isinitialized)
- [\_py](IsolationForest.md#_py)
- [id](IsolationForest.md#id)
- [opts](IsolationForest.md#opts)

### Accessors

- [estimator\_](IsolationForest.md#estimator_)
- [estimators\_](IsolationForest.md#estimators_)
- [estimators\_features\_](IsolationForest.md#estimators_features_)
- [feature\_names\_in\_](IsolationForest.md#feature_names_in_)
- [max\_samples\_](IsolationForest.md#max_samples_)
- [n\_features\_in\_](IsolationForest.md#n_features_in_)
- [offset\_](IsolationForest.md#offset_)
- [py](IsolationForest.md#py)

### Methods

- [decision\_function](IsolationForest.md#decision_function)
- [dispose](IsolationForest.md#dispose)
- [fit](IsolationForest.md#fit)
- [fit\_predict](IsolationForest.md#fit_predict)
- [init](IsolationForest.md#init)
- [predict](IsolationForest.md#predict)
- [score\_samples](IsolationForest.md#score_samples)

## Constructors

### constructor

• **new IsolationForest**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`IsolationForestOptions`](../interfaces/IsolationForestOptions.md) |

#### Defined in

[generated/ensemble/IsolationForest.ts:33](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L33)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/IsolationForest.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L31)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/IsolationForest.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L30)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/IsolationForest.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L29)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/IsolationForest.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L26)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/IsolationForest.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L27)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L278)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L303)

___

### estimators\_features\_

• `get` **estimators_features_**(): `Promise`<`any`\>

The subset of drawn features for each base estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L328)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L428)

___

### max\_samples\_

• `get` **max_samples_**(): `Promise`<`number`\>

The actual number of samples.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L353)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L403)

___

### offset\_

• `get` **offset_**(): `Promise`<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. `offset\_` is defined as follows. When the contamination parameter is set to “auto”, the offset is equal to -0.5 as the scores of inliers are close to 0 and the scores of outliers are close to -1. When a contamination parameter different than “auto” is provided, the offset is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L378)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/IsolationForest.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L38)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/IsolationForest.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L42)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Average anomaly score of X of the base classifiers.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsolationForestDecisionFunctionOptions`](../interfaces/IsolationForestDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L122)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L101)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsolationForestFitOptions`](../interfaces/IsolationForestFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/IsolationForest.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L154)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsolationForestFitPredictOptions`](../interfaces/IsolationForestFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L188)

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

[generated/ensemble/IsolationForest.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L51)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict if a particular sample is an outlier or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsolationForestPredictOptions`](../interfaces/IsolationForestPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L216)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Opposite of the anomaly score defined in the original paper.

The anomaly score of an input sample is computed as the mean anomaly score of the trees in the forest.

The measure of normality of an observation given a tree is the depth of the leaf containing this observation, which is equivalent to the number of splittings required to isolate this point. In case of several observations n\_left in the leaf, the average path length of a n\_left samples isolation tree is added.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IsolationForestScoreSamplesOptions`](../interfaces/IsolationForestScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/IsolationForest.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/IsolationForest.ts#L248)
