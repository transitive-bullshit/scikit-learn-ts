[sklearn](../readme.md) / [Exports](../modules.md) / ConstantKernelOptions

# Interface: ConstantKernelOptions

## Table of contents

### Properties

- [constant\_value](ConstantKernelOptions.md#constant_value)
- [constant\_value\_bounds](ConstantKernelOptions.md#constant_value_bounds)

## Properties

### constant\_value

• `Optional` **constant\_value**: `number`

The constant value which defines the covariance: k(x\_1, x\_2) = constant\_value

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/ConstantKernel.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L247)

___

### constant\_value\_bounds

• `Optional` **constant\_value\_bounds**: ``"fixed"``

The lower and upper bound on `constant\_value`. If set to “fixed”, `constant\_value` cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/ConstantKernel.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ConstantKernel.ts#L252)
