[sklearn](../readme.md) / [Exports](../modules.md) / RBFCallOptions

# Interface: RBFCallOptions

## Table of contents

### Properties

- [X](RBFCallOptions.md#x)
- [Y](RBFCallOptions.md#y)
- [eval\_gradient](RBFCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L274)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L279)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L286)
