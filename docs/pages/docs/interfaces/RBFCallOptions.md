# RBFCallOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L274)

### Y?

> [`ArrayLike`](../types/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L279)

### eval\_gradient?

> `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L286)
