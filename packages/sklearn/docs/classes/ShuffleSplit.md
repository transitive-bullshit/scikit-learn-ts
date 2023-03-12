[sklearn](../readme.md) / [Exports](../modules.md) / ShuffleSplit

# Class: ShuffleSplit

Random permutation cross-validator

Yields indices to split data into training and test sets.

Note: contrary to other cross-validation strategies, random splits do not guarantee that all folds will be different, although this is still very likely for sizeable datasets.

Read more in the [User Guide](../cross_validation.html#shufflesplit).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html

## Table of contents

### Constructors

- [constructor](ShuffleSplit.md#constructor)

### Properties

- [\_isDisposed](ShuffleSplit.md#_isdisposed)
- [\_isInitialized](ShuffleSplit.md#_isinitialized)
- [\_py](ShuffleSplit.md#_py)
- [id](ShuffleSplit.md#id)
- [opts](ShuffleSplit.md#opts)

### Accessors

- [py](ShuffleSplit.md#py)

### Methods

- [dispose](ShuffleSplit.md#dispose)
- [get\_n\_splits](ShuffleSplit.md#get_n_splits)
- [init](ShuffleSplit.md#init)
- [split](ShuffleSplit.md#split)

## Constructors

### constructor

• **new ShuffleSplit**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ShuffleSplitOptions`](../interfaces/ShuffleSplitOptions.md) |

#### Defined in

[generated/model_selection/ShuffleSplit.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L21)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/ShuffleSplit.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/ShuffleSplit.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L87)

___

### get\_n\_splits

▸ **get_n_splits**(`opts`): `Promise`<`number`\>

Returns the number of splitting iterations in the cross-validator

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShuffleSplitGetNSplitsOptions`](../interfaces/ShuffleSplitGetNSplitsOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/ShuffleSplit.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L104)

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

[generated/model_selection/ShuffleSplit.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L45)

___

### split

▸ **split**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Generate indices to split data into training and test set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ShuffleSplitSplitOptions`](../interfaces/ShuffleSplitSplitOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/ShuffleSplit.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ShuffleSplit.ts#L132)
