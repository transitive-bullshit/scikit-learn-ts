[sklearn](../readme.md) / [Exports](../modules.md) / ExpSineSquared

# Class: ExpSineSquared

Exp-Sine-Squared kernel (aka periodic kernel).

The ExpSineSquared kernel allows one to model functions which repeat themselves exactly. It is parameterized by a length scale parameter \\(l>0\\) and a periodicity parameter \\(p>0\\). Only the isotropic variant where \\(l\\) is a scalar is supported at the moment. The kernel is given by:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ExpSineSquared.html

## Table of contents

### Constructors

- [constructor](ExpSineSquared.md#constructor)

### Properties

- [\_isDisposed](ExpSineSquared.md#_isdisposed)
- [\_isInitialized](ExpSineSquared.md#_isinitialized)
- [\_py](ExpSineSquared.md#_py)
- [id](ExpSineSquared.md#id)
- [opts](ExpSineSquared.md#opts)

### Accessors

- [hyperparameter\_periodicity](ExpSineSquared.md#hyperparameter_periodicity)
- [py](ExpSineSquared.md#py)

### Methods

- [\_\_call\_\_](ExpSineSquared.md#__call__)
- [clone\_with\_theta](ExpSineSquared.md#clone_with_theta)
- [diag](ExpSineSquared.md#diag)
- [dispose](ExpSineSquared.md#dispose)
- [init](ExpSineSquared.md#init)
- [is\_stationary](ExpSineSquared.md#is_stationary)

## Constructors

### constructor

• **new ExpSineSquared**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExpSineSquaredOptions`](../interfaces/ExpSineSquaredOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L17)

## Accessors

### hyperparameter\_periodicity

• `get` **hyperparameter_periodicity**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L220)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L32)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredCallOptions`](../interfaces/ExpSineSquaredCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L102)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredCloneWithThetaOptions`](../interfaces/ExpSineSquaredCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:134](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L134)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredDiagOptions`](../interfaces/ExpSineSquaredDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L169)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L85)

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

[generated/gaussian_process/kernels/ExpSineSquared.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L41)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExpSineSquaredIsStationaryOptions`](../interfaces/ExpSineSquaredIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L197)
