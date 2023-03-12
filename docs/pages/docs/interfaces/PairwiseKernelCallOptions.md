# PairwiseKernelCallOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L282)

### Y?

> [`ArrayLike`](../types/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L287)

### eval\_gradient?

> `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/kernels/PairwiseKernel.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L294)
