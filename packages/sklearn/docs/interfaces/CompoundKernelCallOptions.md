# CompoundKernelCallOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L228)

### Y?

> [`ArrayLike`](../types/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L233)

### eval\_gradient?

> `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/kernels/CompoundKernel.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L240)
