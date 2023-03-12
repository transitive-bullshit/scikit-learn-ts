[sklearn](../readme.md) / [Exports](../modules.md) / AgglomerativeClustering

# Class: AgglomerativeClustering

Agglomerative Clustering.

Recursively merges pair of clusters of sample data; uses linkage distance.

Read more in the [User Guide](../clustering.html#hierarchical-clustering).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html

## Table of contents

### Constructors

- [constructor](AgglomerativeClustering.md#constructor)

### Properties

- [\_isDisposed](AgglomerativeClustering.md#_isdisposed)
- [\_isInitialized](AgglomerativeClustering.md#_isinitialized)
- [\_py](AgglomerativeClustering.md#_py)
- [id](AgglomerativeClustering.md#id)
- [opts](AgglomerativeClustering.md#opts)

### Accessors

- [children\_](AgglomerativeClustering.md#children_)
- [distances\_](AgglomerativeClustering.md#distances_)
- [feature\_names\_in\_](AgglomerativeClustering.md#feature_names_in_)
- [labels\_](AgglomerativeClustering.md#labels_)
- [n\_clusters\_](AgglomerativeClustering.md#n_clusters_)
- [n\_connected\_components\_](AgglomerativeClustering.md#n_connected_components_)
- [n\_features\_in\_](AgglomerativeClustering.md#n_features_in_)
- [n\_leaves\_](AgglomerativeClustering.md#n_leaves_)
- [py](AgglomerativeClustering.md#py)

### Methods

- [dispose](AgglomerativeClustering.md#dispose)
- [fit](AgglomerativeClustering.md#fit)
- [fit\_predict](AgglomerativeClustering.md#fit_predict)
- [init](AgglomerativeClustering.md#init)

## Constructors

### constructor

• **new AgglomerativeClustering**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AgglomerativeClusteringOptions`](../interfaces/AgglomerativeClusteringOptions.md) |

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L19)

## Accessors

### children\_

• `get` **children_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The children of each non-leaf node. Values less than `n\_samples` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_samples` is a non-leaf node and has children `children\_\[i \- n\_samples\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_samples + i`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L341)

___

### distances\_

• `get` **distances_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L368)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L314)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Cluster labels for each point.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L206)

___

### n\_clusters\_

• `get` **n_clusters_**(): `Promise`<`number`\>

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L179)

___

### n\_connected\_components\_

• `get` **n_connected_components_**(): `Promise`<`number`\>

The estimated number of connected components in the graph.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L260)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L287)

___

### n\_leaves\_

• `get` **n_leaves_**(): `Promise`<`number`\>

Number of leaves in the hierarchical tree.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L233)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the hierarchical clustering from features, or distance matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AgglomerativeClusteringFitOptions`](../interfaces/AgglomerativeClusteringFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L112)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Fit and return the result of each sample’s clustering assignment.

In addition to fitting, this method also return the result of the clustering assignment for each sample in the training set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AgglomerativeClusteringFitPredictOptions`](../interfaces/AgglomerativeClusteringFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L144)

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

[generated/cluster/AgglomerativeClustering.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L43)
