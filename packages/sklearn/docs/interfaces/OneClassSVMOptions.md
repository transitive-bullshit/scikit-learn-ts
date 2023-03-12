[sklearn](../readme.md) / [Exports](../modules.md) / OneClassSVMOptions

# Interface: OneClassSVMOptions

## Table of contents

### Properties

- [cache\_size](OneClassSVMOptions.md#cache_size)
- [coef0](OneClassSVMOptions.md#coef0)
- [degree](OneClassSVMOptions.md#degree)
- [gamma](OneClassSVMOptions.md#gamma)
- [kernel](OneClassSVMOptions.md#kernel)
- [max\_iter](OneClassSVMOptions.md#max_iter)
- [nu](OneClassSVMOptions.md#nu)
- [shrinking](OneClassSVMOptions.md#shrinking)
- [tol](OneClassSVMOptions.md#tol)
- [verbose](OneClassSVMOptions.md#verbose)

## Properties

### cache\_size

• `Optional` **cache\_size**: `number`

Specify the size of the kernel cache (in MB).

**`Default Value`**

`200`

#### Defined in

[generated/svm/OneClassSVM.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L584)

___

### coef0

• `Optional` **coef0**: `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

**`Default Value`**

`0`

#### Defined in

[generated/svm/OneClassSVM.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L556)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

**`Default Value`**

`3`

#### Defined in

[generated/svm/OneClassSVM.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L542)

___

### gamma

• `Optional` **gamma**: `number` \| ``"auto"`` \| ``"scale"``

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

**`Default Value`**

`'scale'`

#### Defined in

[generated/svm/OneClassSVM.ts:549](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L549)

___

### kernel

• `Optional` **kernel**: ``"sigmoid"`` \| ``"precomputed"`` \| ``"linear"`` \| ``"poly"`` \| ``"rbf"``

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/svm/OneClassSVM.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L535)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Hard limit on iterations within solver, or -1 for no limit.

**`Default Value`**

`-1`

#### Defined in

[generated/svm/OneClassSVM.ts:598](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L598)

___

### nu

• `Optional` **nu**: `number`

An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**`Default Value`**

`0.5`

#### Defined in

[generated/svm/OneClassSVM.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L570)

___

### shrinking

• `Optional` **shrinking**: `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

**`Default Value`**

`true`

#### Defined in

[generated/svm/OneClassSVM.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L577)

___

### tol

• `Optional` **tol**: `number`

Tolerance for stopping criterion.

**`Default Value`**

`0.001`

#### Defined in

[generated/svm/OneClassSVM.ts:563](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L563)

___

### verbose

• `Optional` **verbose**: `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

**`Default Value`**

`false`

#### Defined in

[generated/svm/OneClassSVM.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L591)
