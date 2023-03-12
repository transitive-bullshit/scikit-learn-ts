[sklearn](../readme.md) / [Exports](../modules.md) / ConvergenceWarning

# Class: ConvergenceWarning

Custom warning to capture convergence problems

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.ConvergenceWarning.html

## Table of contents

### Constructors

- [constructor](ConvergenceWarning.md#constructor)

### Properties

- [\_isDisposed](ConvergenceWarning.md#_isdisposed)
- [\_isInitialized](ConvergenceWarning.md#_isinitialized)
- [\_py](ConvergenceWarning.md#_py)
- [id](ConvergenceWarning.md#id)
- [opts](ConvergenceWarning.md#opts)

### Accessors

- [py](ConvergenceWarning.md#py)

### Methods

- [dispose](ConvergenceWarning.md#dispose)
- [init](ConvergenceWarning.md#init)
- [with\_traceback](ConvergenceWarning.md#with_traceback)

## Constructors

### constructor

• **new ConvergenceWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ConvergenceWarningOptions`](../interfaces/ConvergenceWarningOptions.md) |

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L30)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L83)

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

[generated/exceptions/ConvergenceWarning.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L39)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConvergenceWarningWithTracebackOptions`](../interfaces/ConvergenceWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/ConvergenceWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/ConvergenceWarning.ts#L100)
