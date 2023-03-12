[sklearn](../readme.md) / [Exports](../modules.md) / LeavePOut

# Class: LeavePOut

Leave-P-Out cross-validator

Provides train/test indices to split data in train/test sets. This results in testing on all distinct samples of size p, while the remaining n - p samples form the training set in each iteration.

Note: `LeavePOut(p)` is NOT equivalent to `KFold(n\_splits=n\_samples // p)` which creates non-overlapping test sets.

Due to the high number of iterations which grows combinatorically with the number of samples this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold") or [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit").

Read more in the [User Guide](../cross_validation.html#leave-p-out).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeavePOut.html

## Table of contents

### Constructors

- [constructor](LeavePOut.md#constructor)

### Properties

- [\_isDisposed](LeavePOut.md#_isdisposed)
- [\_isInitialized](LeavePOut.md#_isinitialized)
- [\_py](LeavePOut.md#_py)
- [id](LeavePOut.md#id)
- [opts](LeavePOut.md#opts)

### Accessors

- [py](LeavePOut.md#py)

### Methods

- [dispose](LeavePOut.md#dispose)
- [get\_n\_splits](LeavePOut.md#get_n_splits)
- [init](LeavePOut.md#init)
- [split](LeavePOut.md#split)

## Constructors

### constructor

• **new LeavePOut**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LeavePOutOptions`](../interfaces/LeavePOutOptions.md) |

#### Defined in

[generated/model_selection/LeavePOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeavePOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeavePOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/LeavePOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/LeavePOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/LeavePOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/LeavePOut.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/LeavePOut.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/LeavePOut.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L84)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`any`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeavePOutGetNSplitsOptions`](../interfaces/LeavePOutGetNSplitsOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/LeavePOut.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L101)

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

[generated/model_selection/LeavePOut.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeavePOutSplitOptions`](../interfaces/LeavePOutSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/LeavePOut.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeavePOut.ts#L131)
