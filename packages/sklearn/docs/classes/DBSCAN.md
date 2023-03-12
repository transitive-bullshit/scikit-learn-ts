[sklearn](../readme.md) / [Exports](../modules.md) / DBSCAN

# Class: DBSCAN

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

Read more in the [User Guide](../clustering.html#dbscan).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html

## Table of contents

### Constructors

- [constructor](DBSCAN.md#constructor)

### Properties

- [\_isDisposed](DBSCAN.md#_isdisposed)
- [\_isInitialized](DBSCAN.md#_isinitialized)
- [\_py](DBSCAN.md#_py)
- [id](DBSCAN.md#id)
- [opts](DBSCAN.md#opts)

### Accessors

- [components\_](DBSCAN.md#components_)
- [core\_sample\_indices\_](DBSCAN.md#core_sample_indices_)
- [feature\_names\_in\_](DBSCAN.md#feature_names_in_)
- [labels\_](DBSCAN.md#labels_)
- [n\_features\_in\_](DBSCAN.md#n_features_in_)
- [py](DBSCAN.md#py)

### Methods

- [dispose](DBSCAN.md#dispose)
- [fit](DBSCAN.md#fit)
- [fit\_predict](DBSCAN.md#fit_predict)
- [init](DBSCAN.md#init)

## Constructors

### constructor

• **new DBSCAN**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DBSCANOptions`](../interfaces/DBSCANOptions.md) |

#### Defined in

[generated/cluster/DBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/DBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/DBSCAN.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/DBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/DBSCAN.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/DBSCAN.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L19)

## Accessors

### components\_

• `get` **components_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Copy of each core sample found by training.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/DBSCAN.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L196)

___

### core\_sample\_indices\_

• `get` **core_sample_indices_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of core samples.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/DBSCAN.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L171)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/DBSCAN.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L264)

___

### labels\_

• `get` **labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/DBSCAN.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L219)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/DBSCAN.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L241)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/DBSCAN.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/DBSCAN.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/DBSCAN.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Perform DBSCAN clustering from features, or distance matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DBSCANFitOptions`](../interfaces/DBSCANFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/DBSCAN.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L107)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute clusters from a data or distance matrix and predict labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DBSCANFitPredictOptions`](../interfaces/DBSCANFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/DBSCAN.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L139)

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

[generated/cluster/DBSCAN.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/DBSCAN.ts#L43)
