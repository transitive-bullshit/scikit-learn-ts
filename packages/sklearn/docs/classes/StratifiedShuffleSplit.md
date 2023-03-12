[sklearn](../readme.md) / [Exports](../modules.md) / StratifiedShuffleSplit

# Class: StratifiedShuffleSplit

Stratified ShuffleSplit cross-validator

Provides train/test indices to split data in train/test sets.

This cross-validation object is a merge of StratifiedKFold and ShuffleSplit, which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.

Note: like the ShuffleSplit strategy, stratified random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

Read more in the [User Guide](../cross_validation.html#stratified-shuffle-split).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html

## Table of contents

### Constructors

- [constructor](StratifiedShuffleSplit.md#constructor)

### Properties

- [\_isDisposed](StratifiedShuffleSplit.md#_isdisposed)
- [\_isInitialized](StratifiedShuffleSplit.md#_isinitialized)
- [\_py](StratifiedShuffleSplit.md#_py)
- [id](StratifiedShuffleSplit.md#id)
- [opts](StratifiedShuffleSplit.md#opts)

### Accessors

- [py](StratifiedShuffleSplit.md#py)

### Methods

- [dispose](StratifiedShuffleSplit.md#dispose)
- [get\_n\_splits](StratifiedShuffleSplit.md#get_n_splits)
- [init](StratifiedShuffleSplit.md#init)
- [split](StratifiedShuffleSplit.md#split)

## Constructors

### constructor

• **new StratifiedShuffleSplit**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StratifiedShuffleSplitOptions`](../interfaces/StratifiedShuffleSplitOptions.md) |

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L93)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedShuffleSplitGetNSplitsOptions`](../interfaces/StratifiedShuffleSplitGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L110)

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

[generated/model_selection/StratifiedShuffleSplit.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StratifiedShuffleSplitSplitOptions`](../interfaces/StratifiedShuffleSplitSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/StratifiedShuffleSplit.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/StratifiedShuffleSplit.ts#L144)
