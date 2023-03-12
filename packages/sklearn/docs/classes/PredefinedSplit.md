[sklearn](../readme.md) / [Exports](../modules.md) / PredefinedSplit

# Class: PredefinedSplit

Predefined split cross-validator

Provides train/test indices to split data into train/test sets using a predefined scheme specified by the user with the `test\_fold` parameter.

Read more in the [User Guide](../cross_validation.html#predefined-split).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.PredefinedSplit.html

## Table of contents

### Constructors

- [constructor](PredefinedSplit.md#constructor)

### Properties

- [\_isDisposed](PredefinedSplit.md#_isdisposed)
- [\_isInitialized](PredefinedSplit.md#_isinitialized)
- [\_py](PredefinedSplit.md#_py)
- [id](PredefinedSplit.md#id)
- [opts](PredefinedSplit.md#opts)

### Accessors

- [py](PredefinedSplit.md#py)

### Methods

- [dispose](PredefinedSplit.md#dispose)
- [get\_n\_splits](PredefinedSplit.md#get_n_splits)
- [init](PredefinedSplit.md#init)
- [split](PredefinedSplit.md#split)

## Constructors

### constructor

• **new PredefinedSplit**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PredefinedSplitOptions`](../interfaces/PredefinedSplitOptions.md) |

#### Defined in

[generated/model_selection/PredefinedSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/PredefinedSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/PredefinedSplit.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L83)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredefinedSplitGetNSplitsOptions`](../interfaces/PredefinedSplitGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/PredefinedSplit.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L100)

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

[generated/model_selection/PredefinedSplit.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L43)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PredefinedSplitSplitOptions`](../interfaces/PredefinedSplitSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/PredefinedSplit.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/PredefinedSplit.ts#L128)
