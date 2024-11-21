[**sklearn**](../README.md) • **Docs**

***

Wrapper for kernels in sklearn.metrics.pairwise.

A thin wrapper around the functionality of the kernels in sklearn.metrics.pairwise.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.gaussian_process.kernels.PairwiseKernel.html)

## Constructors

### new PairwiseKernel()

> **new PairwiseKernel**(`opts`?): [`PairwiseKernel`](PairwiseKernel.md)

#### Parameters

• **opts?**

• **opts.gamma?**: `number`

Parameter gamma of the pairwise kernel specified by metric. It should be positive.

**Default Value**

`1`

• **opts.gamma\_bounds?**: `"fixed"`

The lower and upper bound on ‘gamma’. If set to “fixed”, ‘gamma’ cannot be changed during hyperparameter tuning.

• **opts.metric?**: `"sigmoid"` \| `"linear"` \| `"poly"` \| `"rbf"` \| `"cosine"` \| `"additive_chi2"` \| `"chi2"` \| `"polynomial"` \| `"laplacian"`

The metric to use when calculating kernel between instances in a feature array. If metric is a string, it must be one of the metrics in pairwise.PAIRWISE\_KERNEL\_FUNCTIONS. If metric is “precomputed”, X is assumed to be a kernel matrix. Alternatively, if metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays from X as input and return a value indicating the distance between them.

**Default Value**

`'linear'`

• **opts.pairwise\_kernels\_kwargs?**: `any`

All entries of this dict (if any) are passed as keyword arguments to the pairwise kernel function.

#### Returns

[`PairwiseKernel`](PairwiseKernel.md)

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L17)

## Accessors

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:61](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L61)

## Methods

### \_\_call\_\_()

> **\_\_call\_\_**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Return the kernel k(X, Y) and optionally its gradient.

#### Parameters

• **opts**

• **opts.eval\_gradient?**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**Default Value**

`false`

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

• **opts.Y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L130)

***

### clone\_with\_theta()

> **clone\_with\_theta**(`opts`): `Promise`\<`any`\>

Returns a clone of self with given hyperparameters theta.

#### Parameters

• **opts**

• **opts.theta?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The hyperparameters

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L174)

***

### diag()

> **diag**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Returns the diagonal of the kernel k(X, X).

The result of this method is identical to np.diag(self(X)); however, it can be evaluated more efficiently since only the diagonal is evaluated.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L210)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L113)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L74)

***

### is\_stationary()

> **is\_stationary**(`opts`): `Promise`\<`any`\>

Returns whether the kernel is stationary.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/gaussian\_process/kernels/PairwiseKernel.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L242)
