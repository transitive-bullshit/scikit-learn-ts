[sklearn](../readme.md) / [Exports](../modules.md) / LeavePGroupsOut

# Class: LeavePGroupsOut

Leave P Group(s) Out cross-validator

Provides train/test indices to split data according to a third-party provided group. This group information can be used to encode arbitrary domain specific stratifications of the samples as integers.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

The difference between LeavePGroupsOut and LeaveOneGroupOut is that the former builds the test sets with all the samples assigned to `p` different values of the groups while the latter uses samples all assigned the same groups.

Read more in the [User Guide](../cross_validation.html#leave-p-groups-out).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePGroupsOut.html

## Table of contents

### Constructors

- [constructor](LeavePGroupsOut.md#constructor)

### Properties

- [\_isDisposed](LeavePGroupsOut.md#_isdisposed)
- [\_isInitialized](LeavePGroupsOut.md#_isinitialized)
- [\_py](LeavePGroupsOut.md#_py)
- [id](LeavePGroupsOut.md#id)
- [opts](LeavePGroupsOut.md#opts)

### Accessors

- [py](LeavePGroupsOut.md#py)

### Methods

- [dispose](LeavePGroupsOut.md#dispose)
- [get\_n\_splits](LeavePGroupsOut.md#get_n_splits)
- [init](LeavePGroupsOut.md#init)
- [split](LeavePGroupsOut.md#split)

## Constructors

### constructor

• **new LeavePGroupsOut**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LeavePGroupsOutOptions`](../interfaces/LeavePGroupsOutOptions.md) |

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L87)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeavePGroupsOutGetNSplitsOptions`](../interfaces/LeavePGroupsOutGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L104)

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

[generated/model_selection/LeavePGroupsOut.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeavePGroupsOutSplitOptions`](../interfaces/LeavePGroupsOutSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/LeavePGroupsOut.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePGroupsOut.ts#L134)
