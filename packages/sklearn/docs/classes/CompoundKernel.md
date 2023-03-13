# CompoundKernel

Kernel which is composed of a set of other kernels.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.CompoundKernel.html)

## Constructors

## constructor()

### Signature

```ts
new CompoundKernel(opts?: object): CompoundKernel;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.kernels?` | `any` | The other kernels |

### Returns

[`CompoundKernel`](CompoundKernel.md)

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L31)

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

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L35)

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L31) [generated/gaussian\_process/kernels/CompoundKernel.ts:35](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L35)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

Note that this compound kernel returns the results of all simple kernel stacked along an additional axis.

#### Signature

```ts
__call__(opts: object): Promise<ArrayLike[][]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Left argument of the returned kernel k(X, Y) |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead. |
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.  `Default Value`  `false` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[][]\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L103)

### clone\_with\_theta()

Returns a clone of self with given hyperparameters theta.

#### Signature

```ts
clone_with_theta(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.theta?` | [`ArrayLike`](../types/ArrayLike.md) | The hyperparameters |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L152)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to `np.diag(self(X))`; however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Argument to the kernel. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L190)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L84)

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

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L44)

### is\_stationary()

Returns whether the kernel is stationary.

#### Signature

```ts
is_stationary(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L223)
