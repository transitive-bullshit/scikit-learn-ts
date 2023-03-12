[sklearn](../readme.md) / [Exports](../modules.md) / LocalOutlierFactor

# Class: LocalOutlierFactor

Unsupervised Outlier Detection using the Local Outlier Factor (LOF).

The anomaly score of each sample is called the Local Outlier Factor. It measures the local deviation of the density of a given sample with respect to its neighbors. It is local in that the anomaly score depends on how isolated the object is with respect to the surrounding neighborhood. More precisely, locality is given by k-nearest neighbors, whose distance is used to estimate the local density. By comparing the local density of a sample to the local densities of its neighbors, one can identify samples that have a substantially lower density than their neighbors. These are considered outliers.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html

## Table of contents

### Constructors

- [constructor](LocalOutlierFactor.md#constructor)

### Properties

- [\_isDisposed](LocalOutlierFactor.md#_isdisposed)
- [\_isInitialized](LocalOutlierFactor.md#_isinitialized)
- [\_py](LocalOutlierFactor.md#_py)
- [id](LocalOutlierFactor.md#id)
- [opts](LocalOutlierFactor.md#opts)

### Accessors

- [effective\_metric\_](LocalOutlierFactor.md#effective_metric_)
- [effective\_metric\_params\_](LocalOutlierFactor.md#effective_metric_params_)
- [feature\_names\_in\_](LocalOutlierFactor.md#feature_names_in_)
- [n\_features\_in\_](LocalOutlierFactor.md#n_features_in_)
- [n\_neighbors\_](LocalOutlierFactor.md#n_neighbors_)
- [n\_samples\_fit\_](LocalOutlierFactor.md#n_samples_fit_)
- [negative\_outlier\_factor\_](LocalOutlierFactor.md#negative_outlier_factor_)
- [offset\_](LocalOutlierFactor.md#offset_)
- [py](LocalOutlierFactor.md#py)

### Methods

- [decision\_function](LocalOutlierFactor.md#decision_function)
- [dispose](LocalOutlierFactor.md#dispose)
- [fit](LocalOutlierFactor.md#fit)
- [fit\_predict](LocalOutlierFactor.md#fit_predict)
- [init](LocalOutlierFactor.md#init)
- [kneighbors](LocalOutlierFactor.md#kneighbors)
- [kneighbors\_graph](LocalOutlierFactor.md#kneighbors_graph)
- [predict](LocalOutlierFactor.md#predict)
- [score\_samples](LocalOutlierFactor.md#score_samples)

## Constructors

### constructor

• **new LocalOutlierFactor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LocalOutlierFactorOptions`](../interfaces/LocalOutlierFactorOptions.md) |

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L17)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The effective metric used for the distance computation.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L443)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

The effective additional keyword arguments for the metric function.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L470)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L524)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L497)

___

### n\_neighbors\_

• `get` **n_neighbors_**(): `Promise`<`number`\>

The actual number of neighbors used for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L389)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

It is the number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L551)

___

### negative\_outlier\_factor\_

• `get` **negative_outlier_factor_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The opposite LOF of the training samples. The higher, the more normal. Inliers tend to have a LOF score close to 1 (`negative\_outlier\_factor\_` close to -1), while outliers tend to have a larger LOF score.

The local outlier factor (LOF) of a sample captures its supposed ‘degree of abnormality’. It is the average of the ratio of the local reachability density of a sample and those of its k-nearest neighbors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L362)

___

### offset\_

• `get` **offset_**(): `Promise`<`number`\>

Offset used to obtain binary labels from the raw scores. Observations having a negative\_outlier\_factor smaller than `offset\_` are detected as abnormal. The offset is set to -1.5 (inliers score around -1), except when a contamination parameter different than “auto” is provided. In that case, the offset is defined in such a way we obtain the expected number of outliers in training.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L416)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L32)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Shifted opposite of the Local Outlier Factor of X.

Bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The shift offset allows a zero threshold for being an outlier. The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorDecisionFunctionOptions`](../interfaces/LocalOutlierFactorDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L116)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the local outlier factor detector from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorFitOptions`](../interfaces/LocalOutlierFactorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L151)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit the model to the training set X and return the labels.

**Not available for novelty detection (when novelty is set to `true`).** Label is 1 for an inlier and -1 for an outlier according to the LOF score and the contamination parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorFitPredictOptions`](../interfaces/LocalOutlierFactorFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L183)

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

[generated/neighbors/LocalOutlierFactor.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L41)

___

### kneighbors

▸ **kneighbors**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorKneighborsOptions`](../interfaces/LocalOutlierFactorKneighborsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L219)

___

### kneighbors\_graph

▸ **kneighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorKneighborsGraphOptions`](../interfaces/LocalOutlierFactorKneighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L253)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the labels (1 inlier, -1 outlier) of X according to LOF.

**Only available for novelty detection (when novelty is set to `true`).** This method allows to generalize prediction to *new observations* (not in the training set). Note that the result of `clf.fit(X)` then `clf.predict(X)` with `novelty=True` may differ from the result obtained by `clf.fit\_predict(X)` with `novelty=False`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorPredictOptions`](../interfaces/LocalOutlierFactorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L292)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Opposite of the Local Outlier Factor of X.

It is the opposite as bigger is better, i.e. large values correspond to inliers.

**Only available for novelty detection (when novelty is set to `true`).** The argument X is supposed to contain *new data*: if X contains a point from training, it considers the later in its own neighborhood. Also, the samples in X are not considered in the neighborhood of any point. Because of this, the scores obtained via `score\_samples` may differ from the standard LOF scores. The standard LOF scores for the training data is available via the `negative\_outlier\_factor\_` attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LocalOutlierFactorScoreSamplesOptions`](../interfaces/LocalOutlierFactorScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/LocalOutlierFactor.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L326)
