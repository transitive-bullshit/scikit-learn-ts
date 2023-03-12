[sklearn](../readme.md) / [Exports](../modules.md) / MeanShift

# Class: MeanShift

Mean shift clustering using a flat kernel.

Mean shift clustering aims to discover “blobs” in a smooth density of samples. It is a centroid-based algorithm, which works by updating candidates for centroids to be the mean of the points within a given region. These candidates are then filtered in a post-processing stage to eliminate near-duplicates to form the final set of centroids.

Seeding is performed using a binning technique for scalability.

Read more in the [User Guide](../clustering.html#mean-shift).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html

## Table of contents

### Constructors

- [constructor](MeanShift.md#constructor)

### Properties

- [\_isDisposed](MeanShift.md#_isdisposed)
- [\_isInitialized](MeanShift.md#_isinitialized)
- [\_py](MeanShift.md#_py)
- [id](MeanShift.md#id)
- [opts](MeanShift.md#opts)

### Accessors

- [cluster\_centers\_](MeanShift.md#cluster_centers_)
- [feature\_names\_in\_](MeanShift.md#feature_names_in_)
- [labels\_](MeanShift.md#labels_)
- [n\_features\_in\_](MeanShift.md#n_features_in_)
- [n\_iter\_](MeanShift.md#n_iter_)
- [py](MeanShift.md#py)

### Methods

- [dispose](MeanShift.md#dispose)
- [fit](MeanShift.md#fit)
- [fit\_predict](MeanShift.md#fit_predict)
- [init](MeanShift.md#init)
- [predict](MeanShift.md#predict)

## Constructors

### constructor

• **new MeanShift**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MeanShiftOptions`](../interfaces/MeanShiftOptions.md) |

#### Defined in

[generated/cluster/MeanShift.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/MeanShift.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/MeanShift.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/MeanShift.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/MeanShift.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/MeanShift.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L21)

## Accessors

### cluster\_centers\_

• `get` **cluster_centers_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coordinates of cluster centers.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/MeanShift.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L193)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MeanShift.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L289)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MeanShift.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L218)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MeanShift.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L264)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Maximum number of iterations performed on each seed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/MeanShift.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L241)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/MeanShift.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/MeanShift.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/MeanShift.ts:92](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L92)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Perform clustering.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MeanShiftFitOptions`](../interfaces/MeanShiftFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/MeanShift.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L109)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform clustering on `X` and returns cluster labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MeanShiftFitPredictOptions`](../interfaces/MeanShiftFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MeanShift.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L137)

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

[generated/cluster/MeanShift.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the closest cluster each sample in X belongs to.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MeanShiftPredictOptions`](../interfaces/MeanShiftPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/MeanShift.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MeanShift.ts#L165)
