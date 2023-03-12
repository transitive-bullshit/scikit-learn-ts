[sklearn](../readme.md) / [Exports](../modules.md) / RadiusNeighborsClassifier

# Class: RadiusNeighborsClassifier

Classifier implementing a vote among neighbors within a given radius.

Read more in the [User Guide](../neighbors.html#classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.RadiusNeighborsClassifier.html

## Table of contents

### Constructors

- [constructor](RadiusNeighborsClassifier.md#constructor)

### Properties

- [\_isDisposed](RadiusNeighborsClassifier.md#_isdisposed)
- [\_isInitialized](RadiusNeighborsClassifier.md#_isinitialized)
- [\_py](RadiusNeighborsClassifier.md#_py)
- [id](RadiusNeighborsClassifier.md#id)
- [opts](RadiusNeighborsClassifier.md#opts)

### Accessors

- [classes\_](RadiusNeighborsClassifier.md#classes_)
- [effective\_metric\_](RadiusNeighborsClassifier.md#effective_metric_)
- [effective\_metric\_params\_](RadiusNeighborsClassifier.md#effective_metric_params_)
- [feature\_names\_in\_](RadiusNeighborsClassifier.md#feature_names_in_)
- [n\_features\_in\_](RadiusNeighborsClassifier.md#n_features_in_)
- [n\_samples\_fit\_](RadiusNeighborsClassifier.md#n_samples_fit_)
- [outlier\_label\_](RadiusNeighborsClassifier.md#outlier_label_)
- [outputs\_2d\_](RadiusNeighborsClassifier.md#outputs_2d_)
- [py](RadiusNeighborsClassifier.md#py)

### Methods

- [dispose](RadiusNeighborsClassifier.md#dispose)
- [fit](RadiusNeighborsClassifier.md#fit)
- [init](RadiusNeighborsClassifier.md#init)
- [predict](RadiusNeighborsClassifier.md#predict)
- [predict\_proba](RadiusNeighborsClassifier.md#predict_proba)
- [radius\_neighbors](RadiusNeighborsClassifier.md#radius_neighbors)
- [radius\_neighbors\_graph](RadiusNeighborsClassifier.md#radius_neighbors_graph)
- [score](RadiusNeighborsClassifier.md#score)

## Constructors

### constructor

• **new RadiusNeighborsClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RadiusNeighborsClassifierOptions`](../interfaces/RadiusNeighborsClassifierOptions.md) |

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels known to the classifier.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L330)

___

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

The distance metric used. It will be same as the `metric` parameter or a synonym of it, e.g. ‘euclidean’ if the `metric` parameter set to ‘minkowski’ and `p` parameter set to 2.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L357)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Additional keyword arguments for the metric function. For most metrics will be same with `metric\_params` parameter, but may also contain the `p` parameter value if the `effective\_metric\_` attribute is set to ‘minkowski’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L384)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L438)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L411)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L465)

___

### outlier\_label\_

• `get` **outlier_label_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Label which is given for outlier samples (samples with no neighbors on given radius).

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L492)

___

### outputs\_2d\_

• `get` **outputs_2d_**(): `Promise`<`boolean`\>

False when `y`’s shape is (n\_samples, ) or (n\_samples, 1) during fit otherwise `true`.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L519)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the radius neighbors classifier from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierFitOptions`](../interfaces/RadiusNeighborsClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L110)

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

[generated/neighbors/RadiusNeighborsClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the class labels for the provided data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierPredictOptions`](../interfaces/RadiusNeighborsClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L142)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Return probability estimates for the test data X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierPredictProbaOptions`](../interfaces/RadiusNeighborsClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L176)

___

### radius\_neighbors

▸ **radius_neighbors**(`opts`): `Promise`<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierRadiusNeighborsOptions`](../interfaces/RadiusNeighborsClassifierRadiusNeighborsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L215)

___

### radius\_neighbors\_graph

▸ **radius_neighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierRadiusNeighborsGraphOptions`](../interfaces/RadiusNeighborsClassifierRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L253)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RadiusNeighborsClassifierScoreOptions`](../interfaces/RadiusNeighborsClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/RadiusNeighborsClassifier.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/RadiusNeighborsClassifier.ts#L294)
