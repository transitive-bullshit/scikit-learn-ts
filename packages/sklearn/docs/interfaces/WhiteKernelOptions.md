[sklearn](../readme.md) / [Exports](../modules.md) / WhiteKernelOptions

# Interface: WhiteKernelOptions

## Table of contents

### Properties

- [noise\_level](WhiteKernelOptions.md#noise_level)
- [noise\_level\_bounds](WhiteKernelOptions.md#noise_level_bounds)

## Properties

### noise\_level

• `Optional` **noise\_level**: `number`

Parameter controlling the noise level (variance)

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L240)

___

### noise\_level\_bounds

• `Optional` **noise\_level\_bounds**: ``"fixed"``

The lower and upper bound on ‘noise\_level’. If set to “fixed”, ‘noise\_level’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/WhiteKernel.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/WhiteKernel.ts#L245)
