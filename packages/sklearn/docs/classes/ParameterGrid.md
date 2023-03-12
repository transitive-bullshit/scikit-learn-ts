[sklearn](../readme.md) / [Exports](../modules.md) / ParameterGrid

# Class: ParameterGrid

Grid of parameters with a discrete number of values for each.

Can be used to iterate over parameter value combinations with the Python built-in function iter. The order of the generated parameter combinations is deterministic.

Read more in the [User Guide](../grid_search.html#grid-search).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ParameterGrid.html

## Table of contents

### Constructors

- [constructor](ParameterGrid.md#constructor)

### Properties

- [\_isDisposed](ParameterGrid.md#_isdisposed)
- [\_isInitialized](ParameterGrid.md#_isinitialized)
- [\_py](ParameterGrid.md#_py)
- [id](ParameterGrid.md#id)
- [opts](ParameterGrid.md#opts)

### Accessors

- [py](ParameterGrid.md#py)

### Methods

- [dispose](ParameterGrid.md#dispose)
- [init](ParameterGrid.md#init)

## Constructors

### constructor

• **new ParameterGrid**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ParameterGridOptions`](../interfaces/ParameterGridOptions.md) |

#### Defined in

[generated/model_selection/ParameterGrid.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/ParameterGrid.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/ParameterGrid.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/ParameterGrid.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/ParameterGrid.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/ParameterGrid.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L19)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/ParameterGrid.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/ParameterGrid.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/ParameterGrid.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L83)

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

[generated/model_selection/ParameterGrid.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/ParameterGrid.ts#L43)
