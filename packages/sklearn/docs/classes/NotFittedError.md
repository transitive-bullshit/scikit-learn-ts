[sklearn](../readme.md) / [Exports](../modules.md) / NotFittedError

# Class: NotFittedError

Exception class to raise if estimator is used before fitting.

This class inherits from both ValueError and AttributeError to help with exception handling and backward compatibility.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.NotFittedError.html

## Table of contents

### Constructors

- [constructor](NotFittedError.md#constructor)

### Properties

- [\_isDisposed](NotFittedError.md#_isdisposed)
- [\_isInitialized](NotFittedError.md#_isinitialized)
- [\_py](NotFittedError.md#_py)
- [id](NotFittedError.md#id)
- [opts](NotFittedError.md#opts)

### Accessors

- [py](NotFittedError.md#py)

### Methods

- [dispose](NotFittedError.md#dispose)
- [init](NotFittedError.md#init)
- [with\_traceback](NotFittedError.md#with_traceback)

## Constructors

### constructor

• **new NotFittedError**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NotFittedErrorOptions`](../interfaces/NotFittedErrorOptions.md) |

#### Defined in

[generated/exceptions/NotFittedError.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/NotFittedError.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/NotFittedError.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/NotFittedError.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/NotFittedError.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/NotFittedError.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/NotFittedError.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/NotFittedError.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/NotFittedError.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L81)

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

[generated/exceptions/NotFittedError.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L41)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NotFittedErrorWithTracebackOptions`](../interfaces/NotFittedErrorWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/NotFittedError.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/NotFittedError.ts#L98)
