# DotProductCallOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L252)

### Y?

> [`ArrayLike`](../types/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L257)

### eval\_gradient?

> `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/kernels/DotProduct.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L264)
