[sklearn](../readme.md) / [Exports](../modules.md) / CompoundKernelCallOptions

# Interface: CompoundKernelCallOptions

## Table of contents

### Properties

- [X](CompoundKernelCallOptions.md#x)
- [Y](CompoundKernelCallOptions.md#y)
- [eval\_gradient](CompoundKernelCallOptions.md#eval_gradient)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

Left argument of the returned kernel k(X, Y)

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L228)

___

### Y

• `Optional` **Y**: [`ArrayLike`](../modules.md#arraylike)[]

Right argument of the returned kernel k(X, Y). If `undefined`, k(X, X) is evaluated instead.

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L233)

___

### eval\_gradient

• `Optional` **eval\_gradient**: `boolean`

Determines whether the gradient with respect to the log of the kernel hyperparameter is computed.

**`Default Value`**

`false`

#### Defined in

[generated/gaussian_process/kernels/CompoundKernel.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/CompoundKernel.ts#L240)
