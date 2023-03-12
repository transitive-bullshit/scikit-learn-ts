[sklearn](../readme.md) / [Exports](../modules.md) / ExpSineSquaredOptions

# Interface: ExpSineSquaredOptions

## Table of contents

### Properties

- [length\_scale](ExpSineSquaredOptions.md#length_scale)
- [length\_scale\_bounds](ExpSineSquaredOptions.md#length_scale_bounds)
- [periodicity](ExpSineSquaredOptions.md#periodicity)
- [periodicity\_bounds](ExpSineSquaredOptions.md#periodicity_bounds)

## Properties

### length\_scale

• `Optional` **length\_scale**: `any`

The length scale of the kernel.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L249)

___

### length\_scale\_bounds

• `Optional` **length\_scale\_bounds**: ``"fixed"``

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L261)

___

### periodicity

• `Optional` **periodicity**: `any`

The periodicity of the kernel.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L256)

___

### periodicity\_bounds

• `Optional` **periodicity\_bounds**: ``"fixed"``

The lower and upper bound on ‘periodicity’. If set to “fixed”, ‘periodicity’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/ExpSineSquared.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/ExpSineSquared.ts#L266)
