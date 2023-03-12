[sklearn](../readme.md) / [Exports](../modules.md) / RBF

# Class: RBF

Radial basis function kernel (aka squared-exponential kernel).

The RBF kernel is a stationary kernel. It is also known as the “squared exponential” kernel. It is parameterized by a length scale parameter \\(l>0\\), which can either be a scalar (isotropic variant of the kernel) or a vector with the same number of dimensions as the inputs X (anisotropic variant of the kernel). The kernel is given by:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html

## Table of contents

### Constructors

- [constructor](RBF.md#constructor)

### Properties

- [\_isDisposed](RBF.md#_isdisposed)
- [\_isInitialized](RBF.md#_isinitialized)
- [\_py](RBF.md#_py)
- [id](RBF.md#id)
- [opts](RBF.md#opts)

### Accessors

- [anisotropic](RBF.md#anisotropic)
- [hyperparameter\_length\_scale](RBF.md#hyperparameter_length_scale)
- [py](RBF.md#py)

### Methods

- [\_\_call\_\_](RBF.md#__call__)
- [clone\_with\_theta](RBF.md#clone_with_theta)
- [diag](RBF.md#diag)
- [dispose](RBF.md#dispose)
- [init](RBF.md#init)
- [is\_stationary](RBF.md#is_stationary)

## Constructors

### constructor

• **new RBF**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RBFOptions`](../interfaces/RBFOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L17)

## Accessors

### anisotropic

• `get` **anisotropic**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L213)

___

### hyperparameter\_length\_scale

• `get` **hyperparameter_length_scale**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L233)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFCallOptions`](../interfaces/RBFCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L101)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFCloneWithThetaOptions`](../interfaces/RBFCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L133)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFDiagOptions`](../interfaces/RBFDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L163)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L84)

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

[generated/gaussian_process/kernels/RBF.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RBFIsStationaryOptions`](../interfaces/RBFIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L190)
