# PairwiseKernel

Wrapper for kernels in sklearn.metrics.pairwise.

A thin wrapper around the functionality of the kernels in sklearn.metrics.pairwise.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.PairwiseKernel.html)

## Constructors

## constructor()

### Signature

```ts
new PairwiseKernel(opts?: object): PairwiseKernel;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.gamma?` | `number` | Parameter gamma of the pairwise kernel specified by metric. It should be positive.  `Default Value`  `1` |
| `opts.gamma_bounds?` | `"fixed"` | The lower and upper bound on ‘gamma’. If set to “fixed”, ‘gamma’ cannot be changed during hyperparameter tuning. |
| `opts.metric?` | `"sigmoid"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"` \| `"additive_chi2"` \| `"chi2"` \| `"polynomial"` \| `"laplacian"` | The metric to use when calculating kernel between instances in a feature array. If metric is a string, it must be one of the metrics in pairwise.PAIRWISE\_KERNEL\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them.  `Default Value`  `'linear'` |
| `opts.pairwise_kernels_kwargs?` | `any` | All entries of this dict (if any) are passed as keyword arguments to the pairwise kernel function. |

### Returns

[`PairwiseKernel`](PairwiseKernel.md)

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L23)

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
| `opts.Y?` | `ArrayLike`[] | Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead. |
| `opts.eval_gradient?` | `boolean` | Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.  `Default Value`  `false` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L135)

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

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L184)

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
| `opts.X?` | `ArrayLike`[] | Left argument of the returned kernel k(X, Y) |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L222)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L118)

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

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L74)

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

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L255)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L19)

### id

> `string`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L16)

### opts

> `any`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L17)

## Accessors

### hyperparameter\_gamma

#### Signature

```ts
hyperparameter_gamma(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/gaussian\_process/kernels/PairwiseKernel.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L278)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L61)

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

Defined in: [generated/gaussian\_process/kernels/PairwiseKernel.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L65)
