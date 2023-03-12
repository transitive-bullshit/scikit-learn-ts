[sklearn](../readme.md) / [Exports](../modules.md) / Kernel

# Class: Kernel

Base class for all kernels.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Kernel.html

## Table of contents

### Constructors

- [constructor](Kernel.md#constructor)

### Properties

- [\_isDisposed](Kernel.md#_isdisposed)
- [\_isInitialized](Kernel.md#_isinitialized)
- [\_py](Kernel.md#_py)
- [id](Kernel.md#id)
- [opts](Kernel.md#opts)

### Accessors

- [py](Kernel.md#py)

### Methods

- [\_\_call\_\_](Kernel.md#__call__)
- [clone\_with\_theta](Kernel.md#clone_with_theta)
- [diag](Kernel.md#diag)
- [dispose](Kernel.md#dispose)
- [init](Kernel.md#init)
- [is\_stationary](Kernel.md#is_stationary)

## Constructors

### constructor

• **new Kernel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelOptions`](../interfaces/KernelOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L30)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<`any`\>

Evaluate the kernel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCallOptions`](../interfaces/KernelCallOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L93)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelCloneWithThetaOptions`](../interfaces/KernelCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L119)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelDiagOptions`](../interfaces/KernelDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L149)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L76)

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

[generated/gaussian_process/kernels/Kernel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L39)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelIsStationaryOptions`](../interfaces/KernelIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Kernel.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L177)
