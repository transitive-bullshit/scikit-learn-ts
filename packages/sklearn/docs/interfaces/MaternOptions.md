[sklearn](../readme.md) / [Exports](../modules.md) / MaternOptions

# Interface: MaternOptions

## Table of contents

### Properties

- [length\_scale](MaternOptions.md#length_scale)
- [length\_scale\_bounds](MaternOptions.md#length_scale_bounds)
- [nu](MaternOptions.md#nu)

## Properties

### length\_scale

• `Optional` **length\_scale**: `number` \| [`ArrayLike`](../modules.md#arraylike)

The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

**`Default Value`**

`1`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L265)

___

### length\_scale\_bounds

• `Optional` **length\_scale\_bounds**: ``"fixed"``

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L270)

___

### nu

• `Optional` **nu**: `number`

The parameter nu controlling the smoothness of the learned function. The smaller nu, the less smooth the approximated function is. For nu=inf, the kernel becomes equivalent to the RBF kernel and for nu=0.5 to the absolute exponential kernel. Important intermediate values are nu=1.5 (once differentiable functions) and nu=2.5 (twice differentiable functions). Note that values of nu not in \[0.5, 1.5, 2.5, inf\] incur a considerably higher computational cost (appr. 10 times higher) since they require to evaluate the modified Bessel function. Furthermore, in contrast to l, nu is kept fixed to its initial value and not optimized.

**`Default Value`**

`1.5`

#### Defined in

[generated/gaussian_process/kernels/Matern.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/gaussian_process/kernels/Matern.ts#L277)