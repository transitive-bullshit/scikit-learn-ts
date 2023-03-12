[sklearn](../readme.md) / [Exports](../modules.md) / RepeatedStratifiedKFold

# Class: RepeatedStratifiedKFold

Repeated Stratified K-Fold cross validator.

Repeats Stratified K-Fold n times with different randomization in each repetition.

Read more in the [User Guide](../cross_validation.html#repeated-k-fold).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RepeatedStratifiedKFold.html

## Table of contents

### Constructors

- [constructor](RepeatedStratifiedKFold.md#constructor)

### Properties

- [\_isDisposed](RepeatedStratifiedKFold.md#_isdisposed)
- [\_isInitialized](RepeatedStratifiedKFold.md#_isinitialized)
- [\_py](RepeatedStratifiedKFold.md#_py)
- [id](RepeatedStratifiedKFold.md#id)
- [opts](RepeatedStratifiedKFold.md#opts)

### Accessors

- [py](RepeatedStratifiedKFold.md#py)

### Methods

- [dispose](RepeatedStratifiedKFold.md#dispose)
- [get\_n\_splits](RepeatedStratifiedKFold.md#get_n_splits)
- [init](RepeatedStratifiedKFold.md#init)
- [split](RepeatedStratifiedKFold.md#split)

## Constructors

### constructor

• **new RepeatedStratifiedKFold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RepeatedStratifiedKFoldOptions`](../interfaces/RepeatedStratifiedKFoldOptions.md) |

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L89)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedStratifiedKFoldGetNSplitsOptions`](../interfaces/RepeatedStratifiedKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L106)

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

[generated/model_selection/RepeatedStratifiedKFold.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L43)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generates indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RepeatedStratifiedKFoldSplitOptions`](../interfaces/RepeatedStratifiedKFoldSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RepeatedStratifiedKFold.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RepeatedStratifiedKFold.ts#L142)
