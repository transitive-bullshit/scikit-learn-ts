# WhiteKernel

White kernel.

The main use-case of this kernel is as part of a sum-kernel where it explains the noise of the signal as independently and identically normally-distributed. The parameter noise\_level equals the variance of this noise.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.WhiteKernel.html)

## Constructors

## constructor()

### Signature

```ts
new WhiteKernel(opts?: object): WhiteKernel;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.noise_level?` | `number` | Parameter controlling the noise level (variance)  `Default Value`  `1` |
| `opts.noise_level_bounds?` | `"fixed"` | The lower and upper bound on ‘noise\_level’. If set to “fixed”, ‘noise\_level’ cannot be changed during hyperparameter tuning. |

### Returns

[`WhiteKernel`](WhiteKernel.md)

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L23)

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

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L110)

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

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L159)

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

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L194)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L93)

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

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:53](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L53)

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

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L227)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L17)

## Accessors

### hyperparameter\_noise\_level

#### Signature

```ts
hyperparameter_noise_level(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/WhiteKernel.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L250)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/WhiteKernel.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L40)

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

Defined in: [generated/gaussian\_process/kernels/WhiteKernel.ts:44](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L44)
