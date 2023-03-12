[sklearn](../readme.md) / [Exports](../modules.md) / RationalQuadraticCallOptions

# Interface: RationalQuadraticCallOptions

## Table of contents

### Properties

- [X](RationalQuadraticCallOptions.md#x)
- [Y](RationalQuadraticCallOptions.md#y)
- [eval\_gradient](RationalQuadraticCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L311)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) if evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L316)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/RationalQuadratic.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RationalQuadratic.ts#L323)
