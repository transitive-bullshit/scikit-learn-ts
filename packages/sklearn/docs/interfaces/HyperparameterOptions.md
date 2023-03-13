# HyperparameterOptions

## Properties

### bounds?

> `"fixed"`

The lower and upper bound on the parameter. If n\_elements>1, a pair of 1d array with n\_elements each may be given alternatively. If the string “fixed” is passed as bounds, the hyperparameter’s value cannot be changed.

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L192)

### fixed?

> `boolean`

Whether the value of this hyperparameter is fixed, i.e., cannot be changed during hyperparameter tuning. If `undefined` is passed, the “fixed” is derived based on the given bounds.

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L204)

### n\_elements?

> `number`

The number of elements of the hyperparameter value. Defaults to 1, which corresponds to a scalar hyperparameter. n\_elements > 1 corresponds to a hyperparameter which is vector-valued, such as, e.g., anisotropic length-scales.

#### Default Value

`1`

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L199)

### name?

> `string`

The name of the hyperparameter. Note that a kernel using a hyperparameter with name “x” must have the attributes self.x and self.x\_bounds

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L182)

### value\_type?

> `string`

The type of the hyperparameter. Currently, only “numeric” hyperparameters are supported.

Defined in:  [generated/gaussian\_process/kernels/Hyperparameter.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/gaussian_process/kernels/Hyperparameter.ts#L187)
