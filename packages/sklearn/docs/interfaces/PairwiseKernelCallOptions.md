[sklearn](../readme.md) / [Exports](../modules.md) / PairwiseKernelCallOptions

# Interface: PairwiseKernelCallOptions

## Table of contents

### Properties

- [X](PairwiseKernelCallOptions.md#x)
- [Y](PairwiseKernelCallOptions.md#y)
- [eval\_gradient](PairwiseKernelCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L282)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L287)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/PairwiseKernel.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/PairwiseKernel.ts#L294)
