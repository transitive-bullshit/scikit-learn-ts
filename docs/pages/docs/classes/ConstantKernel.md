# ConstantKernel

Constant kernel.

Can be used as part of a product-kernel where it scales the magnitude of the other factor (kernel) or as part of a sum-kernel, where it modifies the mean of the Gaussian process.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ConstantKernel.html)

## Constructors

## constructor()

### Signature

```ts
new ConstantKernel(opts?: ConstantKernelOptions): ConstantKernel;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ConstantKernelOptions`](../interfaces/ConstantKernelOptions.md) |

### Returns

[`ConstantKernel`](ConstantKernel.md)

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L17)

## Accessors

### hyperparameter\_constant\_value

#### Signature

```ts
hyperparameter_constant_value(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/ConstantKernel.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L218)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L28)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in: [generated/gaussian\_process/kernels/ConstantKernel.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L32)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: ConstantKernelCallOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConstantKernelCallOptions`](../interfaces/ConstantKernelCallOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L100)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: ConstantKernelCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConstantKernelCloneWithThetaOptions`](../interfaces/ConstantKernelCloneWithThetaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L132)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: ConstantKernelDiagOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConstantKernelDiagOptions`](../interfaces/ConstantKernelDiagOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L167)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:83](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L83)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L41)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: ConstantKernelIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ConstantKernelIsStationaryOptions`](../interfaces/ConstantKernelIsStationaryOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L195)
