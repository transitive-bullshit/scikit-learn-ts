[sklearn](../readme.md) / [Exports](../modules.md) / Sum

# Class: Sum

The `Sum` kernel takes two kernels \\(k\_1\\) and \\(k\_2\\) and combines them via

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Sum.html

## Table of contents

### Constructors

- [constructor](Sum.md#constructor)

### Properties

- [\_isDisposed](Sum.md#_isdisposed)
- [\_isInitialized](Sum.md#_isinitialized)
- [\_py](Sum.md#_py)
- [id](Sum.md#id)
- [opts](Sum.md#opts)

### Accessors

- [py](Sum.md#py)

### Methods

- [\_\_call\_\_](Sum.md#__call__)
- [clone\_with\_theta](Sum.md#clone_with_theta)
- [diag](Sum.md#diag)
- [dispose](Sum.md#dispose)
- [init](Sum.md#init)
- [is\_stationary](Sum.md#is_stationary)

## Constructors

### constructor

• **new Sum**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SumOptions`](../interfaces/SumOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L30)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumCallOptions`](../interfaces/SumCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L95)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumCloneWithThetaOptions`](../interfaces/SumCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L127)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumDiagOptions`](../interfaces/SumDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L157)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L78)

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

[generated/gaussian_process/kernels/Sum.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L39)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SumIsStationaryOptions`](../interfaces/SumIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L184)
