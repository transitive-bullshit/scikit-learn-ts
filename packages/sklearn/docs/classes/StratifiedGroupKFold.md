[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedGroupKFold

# Class: StratifiedGroupKFold

Stratified K-Folds iterator variant with non-overlapping groups.

This cross-validation object is a variation of StratifiedKFold attempts to return stratified folds with non-overlapping groups. The folds are made by preserving the percentage of samples for each class.

Each group will appear exactly once in the test set across all folds (the number of distinct groups has to be at least equal to the number of folds).

The difference between [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold") and [`StratifiedGroupKFold`](#sklearn.model_selection.StratifiedGroupKFold "sklearn.model_selection.StratifiedGroupKFold") is that the former attempts to create balanced folds such that the number of distinct groups is approximately the same in each fold, whereas StratifiedGroupKFold attempts to create folds which preserve the percentage of samples for each class as much as possible given the constraint of non-overlapping groups between splits.

Read more in the [User Guide](../cross_validation.html#cross-validation).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedGroupKFold.html

## Table of contents

### Constructors

- [constructor](StratifiedGroupKFold.md#constructor)

### Properties

- [\_isDisposed](StratifiedGroupKFold.md#_isdisposed)
- [\_isInitialized](StratifiedGroupKFold.md#_isinitialized)
- [\_py](StratifiedGroupKFold.md#_py)
- [id](StratifiedGroupKFold.md#id)
- [opts](StratifiedGroupKFold.md#opts)

### Accessors

- [py](StratifiedGroupKFold.md#py)

### Methods

- [dispose](StratifiedGroupKFold.md#dispose)
- [get\_n\_splits](StratifiedGroupKFold.md#get_n_splits)
- [init](StratifiedGroupKFold.md#init)
- [split](StratifiedGroupKFold.md#split)

## Constructors

### constructor

• **new StratifiedGroupKFold**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StratifiedGroupKFoldOptions`](../interfaces/StratifiedGroupKFoldOptions.md) |

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L93)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedGroupKFoldGetNSplitsOptions`](../interfaces/StratifiedGroupKFoldGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L110)

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

[generated/model_selection/StratifiedGroupKFold.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedGroupKFoldSplitOptions`](../interfaces/StratifiedGroupKFoldSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/StratifiedGroupKFold.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedGroupKFold.ts#L144)
