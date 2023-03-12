[sklearn](../readme.md) / [Exports](../modules.md) / MaternCallOptions

# Interface: MaternCallOptions

## Table of contents

### Properties

- [X](MaternCallOptions.md#x)
- [Y](MaternCallOptions.md#y)
- [eval\_gradient](MaternCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L284)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L289)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L296)
