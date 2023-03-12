[sklearn](../readme.md) / [Exports](../modules.md) / SpectralBiclustering

# Class: SpectralBiclustering

Spectral biclustering (Kluger, 2003).

Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

Read more in the [User Guide](../biclustering.html#spectral-biclustering).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html

## Table of contents

### Constructors

- [constructor](SpectralBiclustering.md#constructor)

### Properties

- [\_isDisposed](SpectralBiclustering.md#_isdisposed)
- [\_isInitialized](SpectralBiclustering.md#_isinitialized)
- [\_py](SpectralBiclustering.md#_py)
- [id](SpectralBiclustering.md#id)
- [opts](SpectralBiclustering.md#opts)

### Accessors

- [column\_labels\_](SpectralBiclustering.md#column_labels_)
- [columns\_](SpectralBiclustering.md#columns_)
- [feature\_names\_in\_](SpectralBiclustering.md#feature_names_in_)
- [n\_features\_in\_](SpectralBiclustering.md#n_features_in_)
- [py](SpectralBiclustering.md#py)
- [row\_labels\_](SpectralBiclustering.md#row_labels_)
- [rows\_](SpectralBiclustering.md#rows_)

### Methods

- [dispose](SpectralBiclustering.md#dispose)
- [fit](SpectralBiclustering.md#fit)
- [get\_indices](SpectralBiclustering.md#get_indices)
- [get\_shape](SpectralBiclustering.md#get_shape)
- [get\_submatrix](SpectralBiclustering.md#get_submatrix)
- [init](SpectralBiclustering.md#init)

## Constructors

### constructor

• **new SpectralBiclustering**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralBiclusteringOptions`](../interfaces/SpectralBiclusteringOptions.md) |

#### Defined in

[generated/cluster/SpectralBiclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L19)

## Accessors

### column\_labels\_

• `get` **column_labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Column partition labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L329)

___

### columns\_

• `get` **columns_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Results of the clustering, like `rows`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L275)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L383)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L356)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L34)

___

### row\_labels\_

• `get` **row_labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Row partition labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L302)

___

### rows\_

• `get` **rows_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L248)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Create a biclustering for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringFitOptions`](../interfaces/SpectralBiclusteringFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L114)

___

### get\_indices

▸ **get_indices**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetIndicesOptions`](../interfaces/SpectralBiclusteringGetIndicesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L146)

___

### get\_shape

▸ **get_shape**(`opts`): `Promise`<`number`\>

Shape of the `i`’th bicluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetShapeOptions`](../interfaces/SpectralBiclusteringGetShapeOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L180)

___

### get\_submatrix

▸ **get_submatrix**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the submatrix corresponding to bicluster `i`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetSubmatrixOptions`](../interfaces/SpectralBiclusteringGetSubmatrixOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralBiclustering.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L212)

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

[generated/cluster/SpectralBiclustering.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L43)
