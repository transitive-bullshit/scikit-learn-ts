[sklearn](../readme.md) / [Exports](../modules.md) / LeaveOneOut

# Class: LeaveOneOut

Leave-One-Out cross-validator

Provides train/test indices to split data in train/test sets. Each sample is used once as a test set (singleton) while the remaining samples form the training set.

Note: `LeaveOneOut()` is equivalent to `KFold(n\_splits=n)` and `LeavePOut(p=1)` where `n` is the number of samples.

Due to the high number of test sets (which is the same as the number of samples) this cross-validation method can be very costly. For large datasets one should favor [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"), [`ShuffleSplit`](sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit "sklearn.model_selection.ShuffleSplit") or [`StratifiedKFold`](sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold "sklearn.model_selection.StratifiedKFold").

Read more in the [User Guide](../cross_validation.html#leave-one-out).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.LeaveOneOut.html

## Table of contents

### Constructors

- [constructor](LeaveOneOut.md#constructor)

### Properties

- [\_isDisposed](LeaveOneOut.md#_isdisposed)
- [\_isInitialized](LeaveOneOut.md#_isinitialized)
- [\_py](LeaveOneOut.md#_py)
- [id](LeaveOneOut.md#id)
- [opts](LeaveOneOut.md#opts)

### Accessors

- [n\_splits](LeaveOneOut.md#n_splits)
- [py](LeaveOneOut.md#py)

### Methods

- [dispose](LeaveOneOut.md#dispose)
- [get\_n\_splits](LeaveOneOut.md#get_n_splits)
- [init](LeaveOneOut.md#init)
- [split](LeaveOneOut.md#split)

## Constructors

### constructor

• **new LeaveOneOut**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LeaveOneOutOptions`](../interfaces/LeaveOneOutOptions.md) |

#### Defined in

[generated/model_selection/LeaveOneOut.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L23)

## Accessors

### n\_splits

• `get` **n_splits**(): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/LeaveOneOut.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L168)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/LeaveOneOut.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/LeaveOneOut.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L89)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneOutGetNSplitsOptions`](../interfaces/LeaveOneOutGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/LeaveOneOut.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L106)

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

[generated/model_selection/LeaveOneOut.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LeaveOneOutSplitOptions`](../interfaces/LeaveOneOutSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/LeaveOneOut.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/LeaveOneOut.ts#L136)
