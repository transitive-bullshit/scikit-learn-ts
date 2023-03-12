[sklearn](../readme.md) / [Exports](../modules.md) / WhiteKernel

# Class: WhiteKernel

White kernel.

The main use-case of this kernel is as part of a sum-kernel where it explains the noise of the signal as independently and identically normally-distributed. The parameter noise\_level equals the variance of this noise.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.WhiteKernel.html

## Table of contents

### Constructors

- [constructor](WhiteKernel.md#constructor)

### Properties

- [\_isDisposed](WhiteKernel.md#_isdisposed)
- [\_isInitialized](WhiteKernel.md#_isinitialized)
- [\_py](WhiteKernel.md#_py)
- [id](WhiteKernel.md#id)
- [opts](WhiteKernel.md#opts)

### Accessors

- [hyperparameter\_noise\_level](WhiteKernel.md#hyperparameter_noise_level)
- [py](WhiteKernel.md#py)

### Methods

- [\_\_call\_\_](WhiteKernel.md#__call__)
- [clone\_with\_theta](WhiteKernel.md#clone_with_theta)
- [diag](WhiteKernel.md#diag)
- [dispose](WhiteKernel.md#dispose)
- [init](WhiteKernel.md#init)
- [is\_stationary](WhiteKernel.md#is_stationary)

## Constructors

### constructor

• **new WhiteKernel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`WhiteKernelOptions`](../interfaces/WhiteKernelOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L17)

## Accessors

### hyperparameter\_noise\_level

• `get` **hyperparameter_noise_level**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L211)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WhiteKernelCallOptions`](../interfaces/WhiteKernelCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L98)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WhiteKernelCloneWithThetaOptions`](../interfaces/WhiteKernelCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L130)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WhiteKernelDiagOptions`](../interfaces/WhiteKernelDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L160)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L81)

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

[generated/gaussian_process/kernels/WhiteKernel.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WhiteKernelIsStationaryOptions`](../interfaces/WhiteKernelIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L188)
