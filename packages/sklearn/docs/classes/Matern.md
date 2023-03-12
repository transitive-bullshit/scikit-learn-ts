[sklearn](../readme.md) / [Exports](../modules.md) / Matern

# Class: Matern

Matern kernel.

The class of Matern kernels is a generalization of the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF"). It has an additional parameter \\(\\nu\\) which controls the smoothness of the resulting function. The smaller \\(\\nu\\), the less smooth the approximated function is. As \\(\\nu\\rightarrow\\infty\\), the kernel becomes equivalent to the [`RBF`](sklearn.gaussian_process.kernels.RBF.html#sklearn.gaussian_process.kernels.RBF "sklearn.gaussian_process.kernels.RBF") kernel. When \\(\\nu = 1/2\\), the Matérn kernel becomes identical to the absolute exponential kernel. Important intermediate values are \\(\\nu=1.5\\) (once differentiable functions) and \\(\\nu=2.5\\) (twice differentiable functions).

The kernel is given by:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Matern.html

## Table of contents

### Constructors

- [constructor](Matern.md#constructor)

### Properties

- [\_isDisposed](Matern.md#_isdisposed)
- [\_isInitialized](Matern.md#_isinitialized)
- [\_py](Matern.md#_py)
- [id](Matern.md#id)
- [opts](Matern.md#opts)

### Accessors

- [anisotropic](Matern.md#anisotropic)
- [hyperparameter\_length\_scale](Matern.md#hyperparameter_length_scale)
- [py](Matern.md#py)

### Methods

- [\_\_call\_\_](Matern.md#__call__)
- [clone\_with\_theta](Matern.md#clone_with_theta)
- [diag](Matern.md#diag)
- [dispose](Matern.md#dispose)
- [init](Matern.md#init)
- [is\_stationary](Matern.md#is_stationary)

## Constructors

### constructor

• **new Matern**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MaternOptions`](../interfaces/MaternOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L19)

## Accessors

### anisotropic

• `get` **anisotropic**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L216)

___

### hyperparameter\_length\_scale

• `get` **hyperparameter_length_scale**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L236)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L34)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaternCallOptions`](../interfaces/MaternCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L103)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaternCloneWithThetaOptions`](../interfaces/MaternCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L135)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaternDiagOptions`](../interfaces/MaternDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L165)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L86)

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

[generated/gaussian_process/kernels/Matern.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L43)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaternIsStationaryOptions`](../interfaces/MaternIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L193)
