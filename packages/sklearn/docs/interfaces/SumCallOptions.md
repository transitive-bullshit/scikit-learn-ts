[sklearn](../readme.md) / [Exports](../modules.md) / SumCallOptions

# Interface: SumCallOptions

## Table of contents

### Properties

- [X](SumCallOptions.md#x)
- [Y](SumCallOptions.md#y)
- [eval\_gradient](SumCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L224)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L229)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/Sum.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Sum.ts#L236)
