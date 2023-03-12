[sklearn](../readme.md) / [Exports](../modules.md) / CompoundKernel

# Class: CompoundKernel

Kernel which is composed of a set of other kernels.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html

## Table of contents

### Constructors

- [constructor](CompoundKernel.md#constructor)

### Properties

- [\_isDisposed](CompoundKernel.md#_isdisposed)
- [\_isInitialized](CompoundKernel.md#_isinitialized)
- [\_py](CompoundKernel.md#_py)
- [id](CompoundKernel.md#id)
- [opts](CompoundKernel.md#opts)

### Accessors

- [py](CompoundKernel.md#py)

### Methods

- [\_\_call\_\_](CompoundKernel.md#__call__)
- [clone\_with\_theta](CompoundKernel.md#clone_with_theta)
- [diag](CompoundKernel.md#diag)
- [dispose](CompoundKernel.md#dispose)
- [init](CompoundKernel.md#init)
- [is\_stationary](CompoundKernel.md#is_stationary)

## Constructors

### constructor

• **new CompoundKernel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CompoundKernelOptions`](../interfaces/CompoundKernelOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L30)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Return the kernel k(X, Y) and optionally its gradient.

Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelCallOptions`](../interfaces/CompoundKernelCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L98)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelCloneWithThetaOptions`](../interfaces/CompoundKernelCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L130)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelDiagOptions`](../interfaces/CompoundKernelDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L165)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L79)

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

[generated/gaussian_process/kernels/CompoundKernel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L39)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelIsStationaryOptions`](../interfaces/CompoundKernelIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L193)
