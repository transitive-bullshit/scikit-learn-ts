[sklearn](../readme.md) / [Exports](../modules.md) / OPTICS

# Class: OPTICS

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster\_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](#r2c55e37003fe-1) (cluster\_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the [User Guide](../clustering.html#optics).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html

## Table of contents

### Constructors

- [constructor](OPTICS.md#constructor)

### Properties

- [\_isDisposed](OPTICS.md#_isdisposed)
- [\_isInitialized](OPTICS.md#_isinitialized)
- [\_py](OPTICS.md#_py)
- [id](OPTICS.md#id)
- [opts](OPTICS.md#opts)

### Accessors

- [cluster\_hierarchy\_](OPTICS.md#cluster_hierarchy_)
- [core\_distances\_](OPTICS.md#core_distances_)
- [feature\_names\_in\_](OPTICS.md#feature_names_in_)
- [labels\_](OPTICS.md#labels_)
- [n\_features\_in\_](OPTICS.md#n_features_in_)
- [ordering\_](OPTICS.md#ordering_)
- [predecessor\_](OPTICS.md#predecessor_)
- [py](OPTICS.md#py)
- [reachability\_](OPTICS.md#reachability_)

### Methods

- [dispose](OPTICS.md#dispose)
- [fit](OPTICS.md#fit)
- [fit\_predict](OPTICS.md#fit_predict)
- [init](OPTICS.md#init)

## Constructors

### constructor

• **new OPTICS**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OPTICSOptions`](../interfaces/OPTICSOptions.md) |

#### Defined in

[generated/cluster/OPTICS.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/OPTICS.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/OPTICS.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/OPTICS.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/OPTICS.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/OPTICS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L23)

## Accessors

### cluster\_hierarchy\_

• `get` **cluster_hierarchy_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels\_` does not reflect the hierarchy, usually `len(cluster\_hierarchy\_) > np.unique(optics.labels\_)`. Please also note that these indices are of the `ordering\_`, i.e. `X\[ordering\_\]\[start:end + 1\]` form a cluster. Only available when `cluster\_method='xi'`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/OPTICS.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L291)

___

### core\_distances\_

• `get` **core_distances_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core\_distances\_\[clust.ordering\_\]` to access in cluster order.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L243)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L339)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster\_hierarchy\_` are labeled as -1.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L175)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/OPTICS.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L316)

___

### ordering\_

• `get` **ordering_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The cluster ordered list of sample indices.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L220)

___

### predecessor\_

• `get` **predecessor_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L268)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/OPTICS.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/OPTICS.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L38)

___

### reachability\_

• `get` **reachability_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Reachability distances per sample, indexed by object order. Use `clust.reachability\_\[clust.ordering\_\]` to access in cluster order.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L197)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/OPTICS.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L100)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Perform OPTICS clustering.

Extracts an ordered list of points and reachability distances, and performs initial clustering using `max\_eps` distance specified at OPTICS object instantiation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OPTICSFitOptions`](../interfaces/OPTICSFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/OPTICS.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L119)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform clustering on `X` and returns cluster labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OPTICSFitPredictOptions`](../interfaces/OPTICSFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/OPTICS.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L147)

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

[generated/cluster/OPTICS.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/OPTICS.ts#L47)
