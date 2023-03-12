[sklearn](../readme.md) / [Exports](../modules.md) / GroupKFold

# Class: GroupKFold

K-fold iterator variant with non-overlapping groups.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The folds are approximately balanced in the sense that the number of distinct groups is approximately the same in each fold.

Read more in the [User Guide](../cross_validation.html#group-k-fold).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GroupKFold.html

## Table of contents

### Constructors

- [constructor](GroupKFold.md#constructor)

### Properties

- [\_isDisposed](GroupKFold.md#_isdisposed)
- [\_isInitialized](GroupKFold.md#_isinitialized)
- [\_py](GroupKFold.md#_py)
- [id](GroupKFold.md#id)
- [opts](GroupKFold.md#opts)

### Accessors

- [py](GroupKFold.md#py)

### Methods

- [dispose](GroupKFold.md#dispose)
- [get\_n\_splits](GroupKFold.md#get_n_splits)
- [init](GroupKFold.md#init)
- [split](GroupKFold.md#split)

## Constructors

### constructor

• **new GroupKFold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GroupKFoldOptions`](../interfaces/GroupKFoldOptions.md) |

#### Defined in

[generated/model_selection/GroupKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/GroupKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/GroupKFold.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/GroupKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/GroupKFold.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/GroupKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L21)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/GroupKFold.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/GroupKFold.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/GroupKFold.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L85)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GroupKFoldGetNSplitsOptions`](../interfaces/GroupKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GroupKFold.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L102)

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

[generated/model_selection/GroupKFold.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L45)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GroupKFoldSplitOptions`](../interfaces/GroupKFoldSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GroupKFold.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GroupKFold.ts#L130)