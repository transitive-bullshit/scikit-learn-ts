# Kernel

Base class for all kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Kernel.html)

## Constructors

## constructor()

### Signature

```ts
new Kernel(opts?: KernelOptions): Kernel;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `KernelOptions` |

### Returns

[`Kernel`](Kernel.md)

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L26)

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

Defined in: [generated/gaussian\_process/kernels/Kernel.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L30)

## Methods

### \_\_call\_\_()

Evaluate the kernel.

#### Signature

```ts
__call__(opts: KernelCallOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelCallOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L93)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: KernelCloneWithThetaOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelCloneWithThetaOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L119)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: KernelDiagOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelDiagOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L149)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:76](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L76)

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

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:39](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L39)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: KernelIsStationaryOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `KernelIsStationaryOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/Kernel.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/Kernel.ts#L177)