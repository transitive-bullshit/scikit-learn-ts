[sklearn](../readme.md) / [Exports](../modules.md) / ConstantKernelCallOptions

# Interface: ConstantKernelCallOptions

## Table of contents

### Properties

- [X](ConstantKernelCallOptions.md#x)
- [Y](ConstantKernelCallOptions.md#y)
- [eval\_gradient](ConstantKernelCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/ConstantKernel.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L259)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/ConstantKernel.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L264)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed. Only supported when Y is `undefined`.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/ConstantKernel.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L271)
