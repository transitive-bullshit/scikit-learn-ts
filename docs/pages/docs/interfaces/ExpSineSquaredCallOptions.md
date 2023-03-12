# ExpSineSquaredCallOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

Left argument of the returned kernel k(X, Y)

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L273)

### Y?

> [`ArrayLike`](../types/ArrayLike.md)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L278)

### eval\_gradient?

> `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

#### Default Value

`false`

Defined in:  [generated/gaussian\_process/kernels/ExpSineSquared.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L285)
