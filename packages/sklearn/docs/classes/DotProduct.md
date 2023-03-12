[sklearn](../readme.md) / [Exports](../modules.md) / DotProduct

# Class: DotProduct

Dot-Product kernel.

The DotProduct kernel is non-stationary and can be obtained from linear regression by putting \\(N(0, 1)\\) priors on the coefficients of \\(x\_d (d = 1, . . . , D)\\) and a prior of \\(N(0, \\sigma\_0^2)\\) on the bias. The DotProduct kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter sigma\_0 \\(\\sigma\\) which controls the inhomogenity of the kernel. For \\(\\sigma\_0^2 =0\\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.DotProduct.html

## Table of contents

### Constructors

- [constructor](DotProduct.md#constructor)

### Properties

- [\_isDisposed](DotProduct.md#_isdisposed)
- [\_isInitialized](DotProduct.md#_isinitialized)
- [\_py](DotProduct.md#_py)
- [id](DotProduct.md#id)
- [opts](DotProduct.md#opts)

### Accessors

- [hyperparameter\_sigma\_0](DotProduct.md#hyperparameter_sigma_0)
- [py](DotProduct.md#py)

### Methods

- [\_\_call\_\_](DotProduct.md#__call__)
- [clone\_with\_theta](DotProduct.md#clone_with_theta)
- [diag](DotProduct.md#diag)
- [dispose](DotProduct.md#dispose)
- [init](DotProduct.md#init)
- [is\_stationary](DotProduct.md#is_stationary)

## Constructors

### constructor

• **new DotProduct**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DotProductOptions`](../interfaces/DotProductOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L17)

## Accessors

### hyperparameter\_sigma\_0

• `get` **hyperparameter_sigma_0**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L211)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DotProductCallOptions`](../interfaces/DotProductCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L98)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DotProductCloneWithThetaOptions`](../interfaces/DotProductCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L130)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DotProductDiagOptions`](../interfaces/DotProductDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L160)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L81)

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

[generated/gaussian_process/kernels/DotProduct.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DotProductIsStationaryOptions`](../interfaces/DotProductIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L188)
