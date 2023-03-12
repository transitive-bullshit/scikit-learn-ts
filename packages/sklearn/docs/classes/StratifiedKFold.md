[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedKFold

# Class: StratifiedKFold

Stratified K-Folds cross-validator.

Provides train/test indices to split data in train/test sets.

This cross-validation object is a variation of KFold that returns stratified folds. The folds are made by preserving the percentage of samples for each class.

Read more in the [User Guide](../cross_validation.html#stratified-k-fold).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html

## Table of contents

### Constructors

- [constructor](StratifiedKFold.md#constructor)

### Properties

- [\_isDisposed](StratifiedKFold.md#_isdisposed)
- [\_isInitialized](StratifiedKFold.md#_isinitialized)
- [\_py](StratifiedKFold.md#_py)
- [id](StratifiedKFold.md#id)
- [opts](StratifiedKFold.md#opts)

### Accessors

- [py](StratifiedKFold.md#py)

### Methods

- [dispose](StratifiedKFold.md#dispose)
- [get\_n\_splits](StratifiedKFold.md#get_n_splits)
- [init](StratifiedKFold.md#init)
- [split](StratifiedKFold.md#split)

## Constructors

### constructor

• **new StratifiedKFold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StratifiedKFoldOptions`](../interfaces/StratifiedKFoldOptions.md) |

#### Defined in

[generated/model_selection/StratifiedKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L21)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/StratifiedKFold.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/StratifiedKFold.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L87)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedKFoldGetNSplitsOptions`](../interfaces/StratifiedKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/StratifiedKFold.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L104)

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

[generated/model_selection/StratifiedKFold.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L45)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedKFoldSplitOptions`](../interfaces/StratifiedKFoldSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/StratifiedKFold.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedKFold.ts#L132)
