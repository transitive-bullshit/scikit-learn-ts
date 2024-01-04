# RBF

Radial basis function kernel (aka squared-exponential kernel).

The RBF kernel is a stationary kernel. It is also known as the “squared exponential” kernel. It is parameterized by a length scale parameter \\(l>0\\), which can either be a scalar (isotropic variant of the kernel) or a vector with the same number of dimensions as the inputs X (anisotropic variant of the kernel). The kernel is given by:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.RBF.html)

## Constructors

## constructor()

### Signature

```ts
new RBF(opts?: object): RBF;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.length_scale?` | `number` \| [`ArrayLike`](../types/ArrayLike.md) | The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.  `Default Value`  `1` |
| `opts.length_scale_bounds?` | `"fixed"` | The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning. |

### Returns

[`RBF`](RBF.md)

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L23)

## Methods

### \_\_call\_\_()

Return the kernel k(X, Y) and optionally its gradient.

#### Signature

```ts
__call__(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Left argument of the returned kernel k(X, Y) |
| `opts.Y?` | [`ArrayLike`](../types/ArrayLike.md)[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead. |
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.  `Default Value`  `false` |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L113)

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

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L162)

### diag()

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Signature

```ts
diag(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Left argument of the returned kernel k(X, Y) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L197)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:96](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L96)

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

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L53)

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

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L229)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L17)

## Accessors

### anisotropic

#### Signature

```ts
anisotropic(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L252)

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L252)

### hyperparameter\_length\_scale

#### Signature

```ts
hyperparameter_length_scale(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L272)

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L272)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L40)

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

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L44)

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L40) [generated/gaussian\_process/kernels/RBF.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L44)
