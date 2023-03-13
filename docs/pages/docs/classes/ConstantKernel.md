# ConstantKernel

Constant kernel.

Can be used as part of a product-kernel where it scales the magnitude of the other factor (kernel) or as part of a sum-kernel, where it modifies the mean of the Gaussian process.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.ConstantKernel.html)

## Constructors

## constructor()

### Signature

```ts
new ConstantKernel(opts?: object): ConstantKernel;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.constant_value?` | `number` | The constant value which defines the covariance: k(x\_1, x\_2) = constant\_value  `Default Value`  `1` |
| `opts.constant_value_bounds?` | `"fixed"` | The lower and upper bound on `constant\_value`. If set to “fixed”, `constant\_value` cannot be changed during hyperparameter tuning. |

### Returns

[`ConstantKernel`](ConstantKernel.md)

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L17)

## Accessors

### hyperparameter\_constant\_value

#### Signature

```ts
hyperparameter_constant_value(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/ConstantKernel.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L255)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L40)

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

Defined in: [generated/gaussian\_process/kernels/ConstantKernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L44)

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
| `opts.X?` | `ArrayLike`[] | Left argument of the returned kernel k(X, Y) |
| `opts.Y?` | `ArrayLike`[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead. |
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L112)

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
| `opts.theta?` | `ArrayLike` | The hyperparameters |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:161](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L161)

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
| `opts.X?` | `ArrayLike`[] | Argument to the kernel. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L199)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L95)

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

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L53)

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

Defined in:  [generated/gaussian\_process/kernels/ConstantKernel.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L232)
