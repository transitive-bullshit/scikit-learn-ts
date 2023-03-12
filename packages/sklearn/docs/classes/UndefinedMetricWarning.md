[sklearn](../readme.md) / [Exports](../modules.md) / UndefinedMetricWarning

# Class: UndefinedMetricWarning

Warning used when the metric is invalid

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.UndefinedMetricWarning.html

## Table of contents

### Constructors

- [constructor](UndefinedMetricWarning.md#constructor)

### Properties

- [\_isDisposed](UndefinedMetricWarning.md#_isdisposed)
- [\_isInitialized](UndefinedMetricWarning.md#_isinitialized)
- [\_py](UndefinedMetricWarning.md#_py)
- [id](UndefinedMetricWarning.md#id)
- [opts](UndefinedMetricWarning.md#opts)

### Accessors

- [py](UndefinedMetricWarning.md#py)

### Methods

- [dispose](UndefinedMetricWarning.md#dispose)
- [init](UndefinedMetricWarning.md#init)
- [with\_traceback](UndefinedMetricWarning.md#with_traceback)

## Constructors

### constructor

• **new UndefinedMetricWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`UndefinedMetricWarningOptions`](../interfaces/UndefinedMetricWarningOptions.md) |

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L30)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L83)

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

[generated/exceptions/UndefinedMetricWarning.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L39)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`UndefinedMetricWarningWithTracebackOptions`](../interfaces/UndefinedMetricWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/UndefinedMetricWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/UndefinedMetricWarning.ts#L100)
