[sklearn](../readme.md) / [Exports](../modules.md) / SpectralCoclustering

# Class: SpectralCoclustering

Spectral Co-Clustering algorithm (Dhillon, 2001).

Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

Supports sparse matrices, as long as they are nonnegative.

Read more in the [User Guide](../biclustering.html#spectral-coclustering).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html

## Table of contents

### Constructors

- [constructor](SpectralCoclustering.md#constructor)

### Properties

- [\_isDisposed](SpectralCoclustering.md#_isdisposed)
- [\_isInitialized](SpectralCoclustering.md#_isinitialized)
- [\_py](SpectralCoclustering.md#_py)
- [id](SpectralCoclustering.md#id)
- [opts](SpectralCoclustering.md#opts)

### Accessors

- [column\_labels\_](SpectralCoclustering.md#column_labels_)
- [columns\_](SpectralCoclustering.md#columns_)
- [feature\_names\_in\_](SpectralCoclustering.md#feature_names_in_)
- [n\_features\_in\_](SpectralCoclustering.md#n_features_in_)
- [py](SpectralCoclustering.md#py)
- [row\_labels\_](SpectralCoclustering.md#row_labels_)
- [rows\_](SpectralCoclustering.md#rows_)

### Methods

- [dispose](SpectralCoclustering.md#dispose)
- [fit](SpectralCoclustering.md#fit)
- [get\_indices](SpectralCoclustering.md#get_indices)
- [get\_shape](SpectralCoclustering.md#get_shape)
- [get\_submatrix](SpectralCoclustering.md#get_submatrix)
- [init](SpectralCoclustering.md#init)

## Constructors

### constructor

• **new SpectralCoclustering**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralCoclusteringOptions`](../interfaces/SpectralCoclusteringOptions.md) |

#### Defined in

[generated/cluster/SpectralCoclustering.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L23)

## Accessors

### column\_labels\_

• `get` **column_labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The bicluster label of each column.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L331)

___

### columns\_

• `get` **columns_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Results of the clustering, like `rows`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L277)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L385)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L358)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L38)

___

### row\_labels\_

• `get` **row_labels_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The bicluster label of each row.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L304)

___

### rows\_

• `get` **rows_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L250)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Create a biclustering for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringFitOptions`](../interfaces/SpectralCoclusteringFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L116)

___

### get\_indices

▸ **get_indices**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetIndicesOptions`](../interfaces/SpectralCoclusteringGetIndicesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L148)

___

### get\_shape

▸ **get_shape**(`opts`): `Promise`<`number`\>

Shape of the `i`’th bicluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetShapeOptions`](../interfaces/SpectralCoclusteringGetShapeOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L182)

___

### get\_submatrix

▸ **get_submatrix**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the submatrix corresponding to bicluster `i`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetSubmatrixOptions`](../interfaces/SpectralCoclusteringGetSubmatrixOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/cluster/SpectralCoclustering.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L214)

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

[generated/cluster/SpectralCoclustering.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L47)
