[sklearn](../readme.md) / [Exports](../modules.md) / SpectralClustering

# Class: SpectralClustering

Apply clustering to a projection of the normalized Laplacian.

In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](#r5f6cbeb1558e-1), [\[2\]](#r5f6cbeb1558e-2).

When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html

## Table of contents

### Constructors

- [constructor](SpectralClustering.md#constructor)

### Properties

- [\_isDisposed](SpectralClustering.md#_isdisposed)
- [\_isInitialized](SpectralClustering.md#_isinitialized)
- [\_py](SpectralClustering.md#_py)
- [id](SpectralClustering.md#id)
- [opts](SpectralClustering.md#opts)

### Accessors

- [affinity\_matrix\_](SpectralClustering.md#affinity_matrix_)
- [feature\_names\_in\_](SpectralClustering.md#feature_names_in_)
- [labels\_](SpectralClustering.md#labels_)
- [n\_features\_in\_](SpectralClustering.md#n_features_in_)
- [py](SpectralClustering.md#py)

### Methods

- [dispose](SpectralClustering.md#dispose)
- [fit](SpectralClustering.md#fit)
- [fit\_predict](SpectralClustering.md#fit_predict)
- [init](SpectralClustering.md#init)

## Constructors

### constructor

• **new SpectralClustering**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralClusteringOptions`](../interfaces/SpectralClusteringOptions.md) |

#### Defined in

[generated/cluster/SpectralClustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralClustering.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/SpectralClustering.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/SpectralClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L21)

## Accessors

### affinity\_matrix\_

• `get` **affinity_matrix_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Affinity matrix used for clustering. Available only after calling `fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralClustering.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L186)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L267)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Labels of each point

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L213)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L240)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/SpectralClustering.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/SpectralClustering.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L105)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Perform spectral clustering from features, or affinity matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralClusteringFitOptions`](../interfaces/SpectralClusteringFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L122)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform spectral clustering on `X` and return cluster labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralClusteringFitPredictOptions`](../interfaces/SpectralClusteringFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L152)

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

[generated/cluster/SpectralClustering.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L45)
