[sklearn](../readme.md) / [Exports](../modules.md) / PairwiseKernel

# Class: PairwiseKernel

Wrapper for kernels in sklearn.metrics.pairwise.

A thin wrapper around the functionality of the kernels in sklearn.metrics.pairwise.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.PairwiseKernel.html

## Table of contents

### Constructors

- [constructor](PairwiseKernel.md#constructor)

### Properties

- [\_isDisposed](PairwiseKernel.md#_isdisposed)
- [\_isInitialized](PairwiseKernel.md#_isinitialized)
- [\_py](PairwiseKernel.md#_py)
- [id](PairwiseKernel.md#id)
- [opts](PairwiseKernel.md#opts)

### Accessors

- [hyperparameter\_gamma](PairwiseKernel.md#hyperparameter_gamma)
- [py](PairwiseKernel.md#py)

### Methods

- [\_\_call\_\_](PairwiseKernel.md#__call__)
- [clone\_with\_theta](PairwiseKernel.md#clone_with_theta)
- [diag](PairwiseKernel.md#diag)
- [dispose](PairwiseKernel.md#dispose)
- [init](PairwiseKernel.md#init)
- [is\_stationary](PairwiseKernel.md#is_stationary)

## Constructors

### constructor

• **new PairwiseKernel**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PairwiseKernelOptions`](../interfaces/PairwiseKernelOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L17)

## Accessors

### hyperparameter\_gamma

• `get` **hyperparameter_gamma**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L220)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PairwiseKernelCallOptions`](../interfaces/PairwiseKernelCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L102)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PairwiseKernelCloneWithThetaOptions`](../interfaces/PairwiseKernelCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L134)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PairwiseKernelDiagOptions`](../interfaces/PairwiseKernelDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L169)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L85)

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

[generated/gaussian_process/kernels/PairwiseKernel.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`PairwiseKernelIsStationaryOptions`](../interfaces/PairwiseKernelIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L197)
