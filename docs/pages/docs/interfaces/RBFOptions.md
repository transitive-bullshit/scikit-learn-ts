# RBFOptions

## Properties

### length\_scale?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

The length scale of the kernel. If a float, an isotropic kernel is used. If an array, an anisotropic kernel is used where each dimension of l defines the length-scale of the respective feature dimension.

#### Default Value

`1`

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L262)

### length\_scale\_bounds?

> `"fixed"`

The lower and upper bound on ‘length\_scale’. If set to “fixed”, ‘length\_scale’ cannot be changed during hyperparameter tuning.

Defined in:  [generated/gaussian\_process/kernels/RBF.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/gaussian_process/kernels/RBF.ts#L267)
