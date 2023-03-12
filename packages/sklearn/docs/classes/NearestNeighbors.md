[sklearn](../readme.md) / [Exports](../modules.md) / NearestNeighbors

# Class: NearestNeighbors

Unsupervised learner for implementing neighbor searches.

Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html

## Table of contents

### Constructors

- [constructor](NearestNeighbors.md#constructor)

### Properties

- [\_isDisposed](NearestNeighbors.md#_isdisposed)
- [\_isInitialized](NearestNeighbors.md#_isinitialized)
- [\_py](NearestNeighbors.md#_py)
- [id](NearestNeighbors.md#id)
- [opts](NearestNeighbors.md#opts)

### Accessors

- [effective\_metric\_](NearestNeighbors.md#effective_metric_)
- [effective\_metric\_params\_](NearestNeighbors.md#effective_metric_params_)
- [feature\_names\_in\_](NearestNeighbors.md#feature_names_in_)
- [n\_features\_in\_](NearestNeighbors.md#n_features_in_)
- [n\_samples\_fit\_](NearestNeighbors.md#n_samples_fit_)
- [py](NearestNeighbors.md#py)

### Methods

- [dispose](NearestNeighbors.md#dispose)
- [fit](NearestNeighbors.md#fit)
- [init](NearestNeighbors.md#init)
- [kneighbors](NearestNeighbors.md#kneighbors)
- [kneighbors\_graph](NearestNeighbors.md#kneighbors_graph)
- [radius\_neighbors](NearestNeighbors.md#radius_neighbors)
- [radius\_neighbors\_graph](NearestNeighbors.md#radius_neighbors_graph)

## Constructors

### constructor

• **new NearestNeighbors**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NearestNeighborsOptions`](../interfaces/NearestNeighborsOptions.md) |

#### Defined in

[generated/neighbors/NearestNeighbors.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L17)

## Accessors

### effective\_metric\_

• `get` **effective_metric_**(): `Promise`<`string`\>

Metric used to compute distances to neighbors.

#### Returns

`Promise`<`string`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L289)

___

### effective\_metric\_params\_

• `get` **effective_metric_params_**(): `Promise`<`any`\>

Parameters for the metric used to compute distances to neighbors.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L316)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L370)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L343)

___

### n\_samples\_fit\_

• `get` **n_samples_fit_**(): `Promise`<`number`\>

Number of samples in the fitted data.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L397)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the nearest neighbors estimator from the training dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestNeighborsFitOptions`](../interfaces/NearestNeighborsFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L106)

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

[generated/neighbors/NearestNeighbors.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L41)

___

### kneighbors

▸ **kneighbors**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestNeighborsKneighborsOptions`](../interfaces/NearestNeighborsKneighborsOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L138)

___

### kneighbors\_graph

▸ **kneighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestNeighborsKneighborsGraphOptions`](../interfaces/NearestNeighborsKneighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L172)

___

### radius\_neighbors

▸ **radius_neighbors**(`opts`): `Promise`<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestNeighborsRadiusNeighborsOptions`](../interfaces/NearestNeighborsRadiusNeighborsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L212)

___

### radius\_neighbors\_graph

▸ **radius_neighbors_graph**(`opts`): `Promise`<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NearestNeighborsRadiusNeighborsGraphOptions`](../interfaces/NearestNeighborsRadiusNeighborsGraphOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L250)
