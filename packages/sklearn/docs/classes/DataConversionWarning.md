[sklearn](../readme.md) / [Exports](../modules.md) / DataConversionWarning

# Class: DataConversionWarning

Warning used to notify implicit data conversions happening in the code.

This warning occurs when some input data needs to be converted or interpreted in a way that may not match the user’s expectations.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.DataConversionWarning.html

## Table of contents

### Constructors

- [constructor](DataConversionWarning.md#constructor)

### Properties

- [\_isDisposed](DataConversionWarning.md#_isdisposed)
- [\_isInitialized](DataConversionWarning.md#_isinitialized)
- [\_py](DataConversionWarning.md#_py)
- [id](DataConversionWarning.md#id)
- [opts](DataConversionWarning.md#opts)

### Accessors

- [py](DataConversionWarning.md#py)

### Methods

- [dispose](DataConversionWarning.md#dispose)
- [init](DataConversionWarning.md#init)
- [with\_traceback](DataConversionWarning.md#with_traceback)

## Constructors

### constructor

• **new DataConversionWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DataConversionWarningOptions`](../interfaces/DataConversionWarningOptions.md) |

#### Defined in

[generated/exceptions/DataConversionWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/DataConversionWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/DataConversionWarning.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L85)

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

[generated/exceptions/DataConversionWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L41)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DataConversionWarningWithTracebackOptions`](../interfaces/DataConversionWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/DataConversionWarning.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/DataConversionWarning.ts#L102)
