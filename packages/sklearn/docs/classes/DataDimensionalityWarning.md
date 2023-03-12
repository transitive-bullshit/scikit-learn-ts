[sklearn](../readme.md) / [Exports](../modules.md) / DataDimensionalityWarning

# Class: DataDimensionalityWarning

Custom warning to notify potential issues with data dimensionality.

For example, in random projection, this warning is raised when the number of components, which quantifies the dimensionality of the target projection space, is higher than the number of features, which quantifies the dimensionality of the original source space, to imply that the dimensionality of the problem will not be reduced.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataDimensionalityWarning.html

## Table of contents

### Constructors

- [constructor](DataDimensionalityWarning.md#constructor)

### Properties

- [\_isDisposed](DataDimensionalityWarning.md#_isdisposed)
- [\_isInitialized](DataDimensionalityWarning.md#_isinitialized)
- [\_py](DataDimensionalityWarning.md#_py)
- [id](DataDimensionalityWarning.md#id)
- [opts](DataDimensionalityWarning.md#opts)

### Accessors

- [py](DataDimensionalityWarning.md#py)

### Methods

- [dispose](DataDimensionalityWarning.md#dispose)
- [init](DataDimensionalityWarning.md#init)
- [with\_traceback](DataDimensionalityWarning.md#with_traceback)

## Constructors

### constructor

• **new DataDimensionalityWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DataDimensionalityWarningOptions`](../interfaces/DataDimensionalityWarningOptions.md) |

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L85)

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

[generated/exceptions/DataDimensionalityWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L41)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DataDimensionalityWarningWithTracebackOptions`](../interfaces/DataDimensionalityWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/DataDimensionalityWarning.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataDimensionalityWarning.ts#L102)
