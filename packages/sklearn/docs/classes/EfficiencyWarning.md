[sklearn](../readme.md) / [Exports](../modules.md) / EfficiencyWarning

# Class: EfficiencyWarning

Warning used to notify the user of inefficient computation.

This warning notifies the user that the efficiency may not be optimal due to some reason which may be included as a part of the warning message. This may be subclassed into a more specific Warning class.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.EfficiencyWarning.html

## Table of contents

### Constructors

- [constructor](EfficiencyWarning.md#constructor)

### Properties

- [\_isDisposed](EfficiencyWarning.md#_isdisposed)
- [\_isInitialized](EfficiencyWarning.md#_isinitialized)
- [\_py](EfficiencyWarning.md#_py)
- [id](EfficiencyWarning.md#id)
- [opts](EfficiencyWarning.md#opts)

### Accessors

- [py](EfficiencyWarning.md#py)

### Methods

- [dispose](EfficiencyWarning.md#dispose)
- [init](EfficiencyWarning.md#init)
- [with\_traceback](EfficiencyWarning.md#with_traceback)

## Constructors

### constructor

• **new EfficiencyWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`EfficiencyWarningOptions`](../interfaces/EfficiencyWarningOptions.md) |

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L83)

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

[generated/exceptions/EfficiencyWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L41)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EfficiencyWarningWithTracebackOptions`](../interfaces/EfficiencyWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/EfficiencyWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/EfficiencyWarning.ts#L100)
