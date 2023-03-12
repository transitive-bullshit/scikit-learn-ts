[sklearn](../readme.md) / [Exports](../modules.md) / Product

# Class: Product

The `Product` kernel takes two kernels \\(k\_1\\) and \\(k\_2\\) and combines them via

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Product.html

## Table of contents

### Constructors

- [constructor](Product.md#constructor)

### Properties

- [\_isDisposed](Product.md#_isdisposed)
- [\_isInitialized](Product.md#_isinitialized)
- [\_py](Product.md#_py)
- [id](Product.md#id)
- [opts](Product.md#opts)

### Accessors

- [py](Product.md#py)

### Methods

- [\_\_call\_\_](Product.md#__call__)
- [clone\_with\_theta](Product.md#clone_with_theta)
- [diag](Product.md#diag)
- [dispose](Product.md#dispose)
- [init](Product.md#init)
- [is\_stationary](Product.md#is_stationary)

## Constructors

### constructor

• **new Product**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ProductOptions`](../interfaces/ProductOptions.md) |

#### Defined in

[generated/gaussian_process/kernels/Product.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L21)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L19)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L18)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L14)

___

### opts

• **opts**: `any`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L15)

## Accessors

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L26)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L30)

## Methods

### \_\_call\_\_

▸ **__call__**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProductCallOptions`](../interfaces/ProductCallOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/gaussian_process/kernels/Product.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L95)

___

### clone\_with\_theta

▸ **clone_with_theta**(`opts`): `Promise`<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProductCloneWithThetaOptions`](../interfaces/ProductCloneWithThetaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Product.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L127)

___

### diag

▸ **diag**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProductDiagOptions`](../interfaces/ProductDiagOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/gaussian_process/kernels/Product.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L157)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/gaussian_process/kernels/Product.ts:78](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L78)

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

[generated/gaussian_process/kernels/Product.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L39)

___

### is\_stationary

▸ **is_stationary**(`opts`): `Promise`<`any`\>

Returns whether the kernel is stationary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ProductIsStationaryOptions`](../interfaces/ProductIsStationaryOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/gaussian_process/kernels/Product.ts:185](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L185)
