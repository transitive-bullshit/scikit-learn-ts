[sklearn](../readme.md) / [Exports](../modules.md) / NystroemOptions

# Interface: NystroemOptions

## Table of contents

### Properties

- [coef0](NystroemOptions.md#coef0)
- [degree](NystroemOptions.md#degree)
- [gamma](NystroemOptions.md#gamma)
- [kernel](NystroemOptions.md#kernel)
- [kernel\_params](NystroemOptions.md#kernel_params)
- [n\_components](NystroemOptions.md#n_components)
- [n\_jobs](NystroemOptions.md#n_jobs)
- [random\_state](NystroemOptions.md#random_state)

## Properties

### coef0

• `Optional` **coef0**: `number`

Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

#### Defined in

[generated/kernel_approximation/Nystroem.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L402)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel. Ignored by other kernels.

#### Defined in

[generated/kernel_approximation/Nystroem.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L407)

___

### gamma

• `Optional` **gamma**: `number`

Gamma parameter for the RBF, laplacian, polynomial, exponential chi2 and sigmoid kernels. Interpretation of the default value is left to the kernel; see the documentation for sklearn.metrics.pairwise. Ignored by other kernels.

#### Defined in

[generated/kernel_approximation/Nystroem.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L397)

___

### kernel

• `Optional` **kernel**: `string`

Kernel map to be approximated. A callable should accept two arguments and the keyword arguments passed to this object as `kernel\_params`, and should return a floating point number.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L392)

___

### kernel\_params

• `Optional` **kernel\_params**: `any`

Additional parameters (keyword arguments) for kernel function passed as callable object.

#### Defined in

[generated/kernel_approximation/Nystroem.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L412)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of features to construct. How many data points will be used to construct the mapping.

**`Default Value`**

`100`

#### Defined in

[generated/kernel_approximation/Nystroem.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L419)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation. This works by breaking down the kernel matrix into `n\_jobs` even slices and computing them in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/kernel_approximation/Nystroem.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L431)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo-random number generator to control the uniform sampling without replacement of `n\_components` of the training data to construct the basis kernel. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/kernel_approximation/Nystroem.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/Nystroem.ts#L424)