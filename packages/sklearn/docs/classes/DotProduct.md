# DotProduct

Dot-Product kernel.

The DotProduct kernel is non-stationary and can be obtained from linear regression by putting \\(N(0, 1)\\) priors on the coefficients of \\(x\_d (d = 1, . . . , D)\\) and a prior of \\(N(0, \\sigma\_0^2)\\) on the bias. The DotProduct kernel is invariant to a rotation of the coordinates about the origin, but not translations. It is parameterized by a parameter sigma\_0 \\(\\sigma\\) which controls the inhomogenity of the kernel. For \\(\\sigma\_0^2 =0\\), the kernel is called the homogeneous linear kernel, otherwise it is inhomogeneous. The kernel is given by

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.DotProduct.html)

## Constructors

## constructor()

### Signature

```ts
new DotProduct(opts?: object): DotProduct;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.sigma_0?` | `any` | Parameter controlling the inhomogenity of the kernel. If sigma\_0=0, the kernel is homogeneous.  `Default Value`  `1` |
| `opts.sigma_0_bounds?` | `"fixed"` | The lower and upper bound on ‘sigma\_0’. If set to “fixed”, ‘sigma\_0’ cannot be changed during hyperparameter tuning. |

### Returns

[`DotProduct`](DotProduct.md)

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L23)

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

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L110)

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

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L159)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Left argument of the returned kernel k(X, Y). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L194)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L93)

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

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L53)

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

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L227)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L17)

## Accessors

### hyperparameter\_sigma\_0

#### Signature

```ts
hyperparameter_sigma_0(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L250)

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L250)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L40)

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

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L44)

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L40) [generated/gaussian\_process/kernels/DotProduct.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L44)
