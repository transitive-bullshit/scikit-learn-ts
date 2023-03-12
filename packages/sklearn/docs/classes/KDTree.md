[sklearn](../readme.md) / [Exports](../modules.md) / KDTree

# Class: KDTree

KDTree for fast generalized N-point problems

Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html

## Table of contents

### Constructors

- [constructor](KDTree.md#constructor)

### Properties

- [\_isDisposed](KDTree.md#_isdisposed)
- [\_isInitialized](KDTree.md#_isinitialized)
- [\_py](KDTree.md#_py)
- [id](KDTree.md#id)
- [opts](KDTree.md#opts)

### Accessors

- [data](KDTree.md#data)
- [py](KDTree.md#py)

### Methods

- [dispose](KDTree.md#dispose)
- [get\_arrays](KDTree.md#get_arrays)
- [get\_n\_calls](KDTree.md#get_n_calls)
- [get\_tree\_stats](KDTree.md#get_tree_stats)
- [init](KDTree.md#init)
- [kernel\_density](KDTree.md#kernel_density)
- [query](KDTree.md#query)
- [query\_radius](KDTree.md#query_radius)
- [reset\_n\_calls](KDTree.md#reset_n_calls)
- [two\_point\_correlation](KDTree.md#two_point_correlation)

## Constructors

### constructor

• **new KDTree**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KDTreeOptions`](../interfaces/KDTreeOptions.md) |

#### Defined in

[generated/neighbors/KDTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/KDTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/KDTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/KDTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/KDTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/KDTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L17)

## Accessors

### data

• `get` **data**(): `Promise`<`any`\>

The training data

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L337)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/KDTree.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/KDTree.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/KDTree.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L82)

___

### get\_arrays

▸ **get_arrays**(`opts`): `Promise`<`any`\>

Get data and node arrays.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetArraysOptions`](../interfaces/KDTreeGetArraysOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L99)

___

### get\_n\_calls

▸ **get_n_calls**(`opts`): `Promise`<`any`\>

Get number of calls.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetNCallsOptions`](../interfaces/KDTreeGetNCallsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L125)

___

### get\_tree\_stats

▸ **get_tree_stats**(`opts`): `Promise`<`any`\>

Get tree status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeGetTreeStatsOptions`](../interfaces/KDTreeGetTreeStatsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L151)

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

[generated/neighbors/KDTree.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L41)

___

### kernel\_density

▸ **kernel_density**(`opts`): `Promise`<`any`\>

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeKernelDensityOptions`](../interfaces/KDTreeKernelDensityOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L177)

___

### query

▸ **query**(`opts`): `Promise`<`any`\>

query the tree for the k nearest neighbors

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeQueryOptions`](../interfaces/KDTreeQueryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L211)

___

### query\_radius

▸ **query_radius**(`opts`): `Promise`<`any`\>

query the tree for neighbors within a radius r

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeQueryRadiusOptions`](../interfaces/KDTreeQueryRadiusOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L245)

___

### reset\_n\_calls

▸ **reset_n_calls**(`opts`): `Promise`<`any`\>

Reset number of calls to 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeResetNCallsOptions`](../interfaces/KDTreeResetNCallsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/KDTree.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L279)

___

### two\_point\_correlation

▸ **two_point_correlation**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the two-point correlation function

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KDTreeTwoPointCorrelationOptions`](../interfaces/KDTreeTwoPointCorrelationOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/KDTree.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/KDTree.ts#L305)
