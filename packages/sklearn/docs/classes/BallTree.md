[sklearn](../readme.md) / [Exports](../modules.md) / BallTree

# Class: BallTree

BallTree for fast generalized N-point problems

Read more in the [User Guide](../neighbors.html#unsupervised-neighbors).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html

## Table of contents

### Constructors

- [constructor](BallTree.md#constructor)

### Properties

- [\_isDisposed](BallTree.md#_isdisposed)
- [\_isInitialized](BallTree.md#_isinitialized)
- [\_py](BallTree.md#_py)
- [id](BallTree.md#id)
- [opts](BallTree.md#opts)

### Accessors

- [data](BallTree.md#data)
- [py](BallTree.md#py)

### Methods

- [dispose](BallTree.md#dispose)
- [get\_arrays](BallTree.md#get_arrays)
- [get\_n\_calls](BallTree.md#get_n_calls)
- [get\_tree\_stats](BallTree.md#get_tree_stats)
- [init](BallTree.md#init)
- [kernel\_density](BallTree.md#kernel_density)
- [query](BallTree.md#query)
- [query\_radius](BallTree.md#query_radius)
- [reset\_n\_calls](BallTree.md#reset_n_calls)
- [two\_point\_correlation](BallTree.md#two_point_correlation)

## Constructors

### constructor

• **new BallTree**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BallTreeOptions`](../interfaces/BallTreeOptions.md) |

#### Defined in

[generated/neighbors/BallTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/neighbors/BallTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/neighbors/BallTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/neighbors/BallTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/neighbors/BallTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/neighbors/BallTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L17)

## Accessors

### data

• `get` **data**(): `Promise`<`any`\>

The training data

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L339)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/neighbors/BallTree.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/neighbors/BallTree.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/neighbors/BallTree.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L82)

___

### get\_arrays

▸ **get_arrays**(`opts`): `Promise`<`any`\>

Get data and node arrays.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeGetArraysOptions`](../interfaces/BallTreeGetArraysOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L99)

___

### get\_n\_calls

▸ **get_n_calls**(`opts`): `Promise`<`any`\>

Get number of calls.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeGetNCallsOptions`](../interfaces/BallTreeGetNCallsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:125](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L125)

___

### get\_tree\_stats

▸ **get_tree_stats**(`opts`): `Promise`<`any`\>

Get tree status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeGetTreeStatsOptions`](../interfaces/BallTreeGetTreeStatsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:151](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L151)

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

[generated/neighbors/BallTree.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L41)

___

### kernel\_density

▸ **kernel_density**(`opts`): `Promise`<`any`\>

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeKernelDensityOptions`](../interfaces/BallTreeKernelDensityOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L177)

___

### query

▸ **query**(`opts`): `Promise`<`any`\>

query the tree for the k nearest neighbors

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeQueryOptions`](../interfaces/BallTreeQueryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L211)

___

### query\_radius

▸ **query_radius**(`opts`): `Promise`<`any`\>

query the tree for neighbors within a radius r

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeQueryRadiusOptions`](../interfaces/BallTreeQueryRadiusOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L245)

___

### reset\_n\_calls

▸ **reset_n_calls**(`opts`): `Promise`<`any`\>

Reset number of calls to 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeResetNCallsOptions`](../interfaces/BallTreeResetNCallsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L279)

___

### two\_point\_correlation

▸ **two_point_correlation**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the two-point correlation function

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BallTreeTwoPointCorrelationOptions`](../interfaces/BallTreeTwoPointCorrelationOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/neighbors/BallTree.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/neighbors/BallTree.ts#L305)
