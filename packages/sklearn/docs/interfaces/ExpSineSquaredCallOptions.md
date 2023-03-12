[sklearn](../readme.md) / [Exports](../modules.md) / ExpSineSquaredCallOptions

# Interface: ExpSineSquaredCallOptions

## Table of contents

### Properties

- [X](ExpSineSquaredCallOptions.md#x)
- [Y](ExpSineSquaredCallOptions.md#y)
- [eval\_gradient](ExpSineSquaredCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L273)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L278)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L285)
