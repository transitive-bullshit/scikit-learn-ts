[sklearn](../readme.md) / [Exports](../modules.md) / RBFOptions

# Interface: RBFOptions

## Table of contents

### Properties

- [length\_scale](RBFOptions.md#length_scale)
- [length\_scale\_bounds](RBFOptions.md#length_scale_bounds)

## Properties

### length\_scale

• `Optional` **length\_scale**: `number` \| [`ArrayLike`](../modules.md#arraylike)

The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L262)

___

### length\_scale\_bounds

• `Optional` **length\_scale\_bounds**: ``"fixed"``

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/RBF.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L267)
