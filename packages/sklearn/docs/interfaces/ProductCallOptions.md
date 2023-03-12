[sklearn](../readme.md) / [Exports](../modules.md) / ProductCallOptions

# Interface: ProductCallOptions

## Table of contents

### Properties

- [X](ProductCallOptions.md#x)
- [Y](ProductCallOptions.md#y)
- [eval\_gradient](ProductCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/Product.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L225)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/Product.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L230)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/Product.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Product.ts#L237)
