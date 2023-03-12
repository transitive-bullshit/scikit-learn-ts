[sklearn](../readme.md) / [Exports](../modules.md) / RepeatedKFold

# Class: RepeatedKFold

Repeated K-Fold cross validator.

Repeats K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedKFold.html

## Table of contents

### Constructors

- [constructor](RepeatedKFold.md#constructor)

### Properties

- [\_isDisposed](RepeatedKFold.md#_isdisposed)
- [\_isInitialized](RepeatedKFold.md#_isinitialized)
- [\_py](RepeatedKFold.md#_py)
- [id](RepeatedKFold.md#id)
- [opts](RepeatedKFold.md#opts)

### Accessors

- [py](RepeatedKFold.md#py)

### Methods

- [dispose](RepeatedKFold.md#dispose)
- [get\_n\_splits](RepeatedKFold.md#get_n_splits)
- [init](RepeatedKFold.md#init)
- [split](RepeatedKFold.md#split)

## Constructors

### constructor

• **new RepeatedKFold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RepeatedKFoldOptions`](../interfaces/RepeatedKFoldOptions.md) |

#### Defined in

[generated/model_selection/RepeatedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/RepeatedKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/RepeatedKFold.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L85)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedKFoldGetNSplitsOptions`](../interfaces/RepeatedKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RepeatedKFold.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L102)

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

[generated/model_selection/RepeatedKFold.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L43)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generates indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedKFoldSplitOptions`](../interfaces/RepeatedKFoldSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RepeatedKFold.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedKFold.ts#L132)
