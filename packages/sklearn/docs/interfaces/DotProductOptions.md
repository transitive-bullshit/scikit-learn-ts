[sklearn](../readme.md) / [Exports](../modules.md) / DotProductOptions

# Interface: DotProductOptions

## Table of contents

### Properties

- [sigma\_0](DotProductOptions.md#sigma_0)
- [sigma\_0\_bounds](DotProductOptions.md#sigma_0_bounds)

## Properties

### sigma\_0

• `Optional` **sigma\_0**: `any`

Parameter controlling the inhomogenity of the kernel. If sigma\_0=0, the kernel is homogeneous.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L240)

___

### sigma\_0\_bounds

• `Optional` **sigma\_0\_bounds**: ``"fixed"``

The lower and upper bound on ‘sigma\_0’. If set to “fixed”, ‘sigma\_0’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/DotProduct.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/DotProduct.ts#L245)
