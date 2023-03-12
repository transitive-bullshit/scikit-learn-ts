[sklearn](../readme.md) / [Exports](../modules.md) / DotProductCallOptions

# Interface: DotProductCallOptions

## Table of contents

### Properties

- [X](DotProductCallOptions.md#x)
- [Y](DotProductCallOptions.md#y)
- [eval\_gradient](DotProductCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L252)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L257)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L264)
