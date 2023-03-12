[sklearn](../readme.md) / [Exports](../modules.md) / FitFailedWarning

# Class: FitFailedWarning

Warning class used if there is an error while fitting the estimator.

This Warning is used in meta estimators GridSearchCV and RandomizedSearchCV and the cross-validation helper function cross\_val\_score to warn when there is an error while fitting the estimator.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.exceptions.FitFailedWarning.html

## Table of contents

### Constructors

- [constructor](FitFailedWarning.md#constructor)

### Properties

- [\_isDisposed](FitFailedWarning.md#_isdisposed)
- [\_isInitialized](FitFailedWarning.md#_isinitialized)
- [\_py](FitFailedWarning.md#_py)
- [id](FitFailedWarning.md#id)
- [opts](FitFailedWarning.md#opts)

### Accessors

- [py](FitFailedWarning.md#py)

### Methods

- [dispose](FitFailedWarning.md#dispose)
- [init](FitFailedWarning.md#init)
- [with\_traceback](FitFailedWarning.md#with_traceback)

## Constructors

### constructor

• **new FitFailedWarning**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`FitFailedWarningOptions`](../interfaces/FitFailedWarningOptions.md) |

#### Defined in

[generated/exceptions/FitFailedWarning.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L17)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/exceptions/FitFailedWarning.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/exceptions/FitFailedWarning.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L83)

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

[generated/exceptions/FitFailedWarning.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L41)

___

### with\_traceback

▸ **with_traceback**(`opts`): `Promise`<`any`\>

Exception.with\_traceback(tb) – set self.\_\_traceback\_\_ to tb and return self.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FitFailedWarningWithTracebackOptions`](../interfaces/FitFailedWarningWithTracebackOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/exceptions/FitFailedWarning.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/exceptions/FitFailedWarning.ts#L100)
