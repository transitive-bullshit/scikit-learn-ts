# Product

The `Product` kernel takes two kernels \\(k\_1\\) and \\(k\_2\\) and combines them via

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.Product.html)

## Constructors

## constructor()

### Signature

```ts
new Product(opts?: object): Product;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.k1?` | `any` | The first base-kernel of the product-kernel |
| `opts.k2?` | `any` | The second base-kernel of the product-kernel |

### Returns

[`Product`](Product.md)

Defined in:  [generated/gaussian\_process/kernels/Product.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L21)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L19)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L18)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L17)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L14)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L15)

## Accessors

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/Product.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L36)

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

Defined in: [generated/gaussian\_process/kernels/Product.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L40)

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
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/gaussian\_process/kernels/Product.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L105)

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

Defined in:  [generated/gaussian\_process/kernels/Product.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L154)

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

Defined in:  [generated/gaussian\_process/kernels/Product.ts:189](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L189)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/Product.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L88)

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

Defined in:  [generated/gaussian\_process/kernels/Product.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L49)

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

Defined in:  [generated/gaussian\_process/kernels/Product.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L222)
