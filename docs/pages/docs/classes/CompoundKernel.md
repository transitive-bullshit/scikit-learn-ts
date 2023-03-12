# CompoundKernel

Kernel which is composed of a set of other kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)

## Constructors

## constructor()

### Signature

```ts
new CompoundKernel(opts?: CompoundKernelOptions): CompoundKernel;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CompoundKernelOptions`](../interfaces/CompoundKernelOptions.md) |

### Returns

[`CompoundKernel`](CompoundKernel.md)

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L26)

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

Defined in: [generated/gaussian\_process/kernels/CompoundKernel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L30)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.

#### Signature

```ts
__call__(opts: CompoundKernelCallOptions): Promise<ArrayLike[][]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelCallOptions`](../interfaces/CompoundKernelCallOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L98)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: CompoundKernelCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelCloneWithThetaOptions`](../interfaces/CompoundKernelCloneWithThetaOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L130)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: CompoundKernelDiagOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelDiagOptions`](../interfaces/CompoundKernelDiagOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L165)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L79)

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

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L39)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: CompoundKernelIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CompoundKernelIsStationaryOptions`](../interfaces/CompoundKernelIsStationaryOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L193)
