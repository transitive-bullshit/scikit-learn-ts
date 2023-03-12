[sklearn](../readme.md) / [Exports](../modules.md) / TimeSeriesSplit

# Class: TimeSeriesSplit

Time Series cross-validator

Provides train/test indices to split time series data samples that are observed at fixed time intervals, in train/test sets. In each split, test indices must be higher than before, and thus shuffling in cross validator is inappropriate.

This cross-validation object is a variation of [`KFold`](sklearn.model_selection.KFold.html#sklearn.model_selection.KFold "sklearn.model_selection.KFold"). In the kth split, it returns first k folds as train set and the (k+1)th fold as test set.

Note that unlike standard cross-validation methods, successive training sets are supersets of those that come before them.

Read more in the [User Guide](../cross_validation.html#time-series-split).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html

## Table of contents

### Constructors

- [constructor](TimeSeriesSplit.md#constructor)

### Properties

- [\_isDisposed](TimeSeriesSplit.md#_isdisposed)
- [\_isInitialized](TimeSeriesSplit.md#_isinitialized)
- [\_py](TimeSeriesSplit.md#_py)
- [id](TimeSeriesSplit.md#id)
- [opts](TimeSeriesSplit.md#opts)

### Accessors

- [py](TimeSeriesSplit.md#py)

### Methods

- [dispose](TimeSeriesSplit.md#dispose)
- [get\_n\_splits](TimeSeriesSplit.md#get_n_splits)
- [init](TimeSeriesSplit.md#init)
- [split](TimeSeriesSplit.md#split)

## Constructors

### constructor

• **new TimeSeriesSplit**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TimeSeriesSplitOptions`](../interfaces/TimeSeriesSplitOptions.md) |

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L23)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L91)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TimeSeriesSplitGetNSplitsOptions`](../interfaces/TimeSeriesSplitGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L108)

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

[generated/model_selection/TimeSeriesSplit.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L47)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TimeSeriesSplitSplitOptions`](../interfaces/TimeSeriesSplitSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/TimeSeriesSplit.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/TimeSeriesSplit.ts#L136)
