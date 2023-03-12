[sklearn](../readme.md) / [Exports](../modules.md) / RationalQuadratic

# Class: RationalQuadratic

Rational Quadratic kernel.

The RationalQuadratic kernel can be seen as a scale mixture (an infinite sum) of RBF kernels with different characteristic length scales. It is parameterized by a length scale parameter \\(l>0\\) and a scale mixture parameter \\(\\alpha>0\\). Only the isotropic variant where length\_scale \\(l\\) is a scalar is supported at the moment. The kernel is given by:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RationalQuadratic.html

## Table of contents

### Constructors

- [constructor](RationalQuadratic.md#constructor)

### Properties

- [\_isDisposed](RationalQuadratic.md#_isdisposed)
- [\_isInitialized](RationalQuadratic.md#_isinitialized)
- [\_py](RationalQuadratic.md#_py)
- [id](RationalQuadratic.md#id)
- [opts](RationalQuadratic.md#opts)

### Accessors

- [hyperparameter\_alpha](RationalQuadratic.md#hyperparameter_alpha)
- [hyperparameter\_length\_scale](RationalQuadratic.md#hyperparameter_length_scale)
- [py](RationalQuadratic.md#py)

### Methods

- [\_\_call\_\_](RationalQuadratic.md#__call__)
- [clone\_with\_theta](RationalQuadratic.md#clone_with_theta)
- [diag](RationalQuadratic.md#diag)
- [dispose](RationalQuadratic.md#dispose)
- [init](RationalQuadratic.md#init)
- [is\_stationary](RationalQuadratic.md#is_stationary)

## Constructors

### constructor

• **new RationalQuadratic**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RationalQuadraticOptions`](../interfaces/RationalQuadraticOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L17)

## Accessors

### hyperparameter\_alpha

• `get` **hyperparameter_alpha**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L232)

___

### hyperparameter\_length\_scale

• `get` **hyperparameter_length_scale**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L256)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RationalQuadraticCallOptions`](../interfaces/RationalQuadraticCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L102)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RationalQuadraticCloneWithThetaOptions`](../interfaces/RationalQuadraticCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L136)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RationalQuadraticDiagOptions`](../interfaces/RationalQuadraticDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L173)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L85)

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

[generated/gaussian_process/kernels/RationalQuadratic.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RationalQuadraticIsStationaryOptions`](../interfaces/RationalQuadraticIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L203)
