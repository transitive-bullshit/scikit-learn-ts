[sklearn](../readme.md) / [Exports](../modules.md) / LeaveOneGroupOut

# Class: LeaveOneGroupOut

Leave One Group Out cross-validator

Provides train/test indices to split data such that each training set is comprised of all samples except ones belonging to one specific group. Arbitrary domain specific group information is provided an array integers that encodes the group of each sample.

For instance the groups could be the year of collection of the samples and thus allow for cross-validation against time-based splits.

Read more in the [User Guide](../cross_validation.html#leave-one-group-out).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneGroupOut.html

## Table of contents

### Constructors

- [constructor](LeaveOneGroupOut.md#constructor)

### Properties

- [\_isDisposed](LeaveOneGroupOut.md#_isdisposed)
- [\_isInitialized](LeaveOneGroupOut.md#_isinitialized)
- [\_py](LeaveOneGroupOut.md#_py)
- [id](LeaveOneGroupOut.md#id)
- [opts](LeaveOneGroupOut.md#opts)

### Accessors

- [n\_splits](LeaveOneGroupOut.md#n_splits)
- [py](LeaveOneGroupOut.md#py)

### Methods

- [dispose](LeaveOneGroupOut.md#dispose)
- [get\_n\_splits](LeaveOneGroupOut.md#get_n_splits)
- [init](LeaveOneGroupOut.md#init)
- [split](LeaveOneGroupOut.md#split)

## Constructors

### constructor

• **new LeaveOneGroupOut**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LeaveOneGroupOutOptions`](../interfaces/LeaveOneGroupOutOptions.md) |

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L21)

## Accessors

### n\_splits

• `get` **n_splits**(): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L172)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L89)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneGroupOutGetNSplitsOptions`](../interfaces/LeaveOneGroupOutGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L106)

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

[generated/model_selection/LeaveOneGroupOut.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L45)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneGroupOutSplitOptions`](../interfaces/LeaveOneGroupOutSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/LeaveOneGroupOut.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneGroupOut.ts#L138)
