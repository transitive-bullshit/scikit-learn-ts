[sklearn](../readme.md) / [Exports](../modules.md) / NuSVROptions

# Interface: NuSVROptions

## Table of contents

### Properties

- [C](NuSVROptions.md#c)
- [cache\_size](NuSVROptions.md#cache_size)
- [coef0](NuSVROptions.md#coef0)
- [degree](NuSVROptions.md#degree)
- [gamma](NuSVROptions.md#gamma)
- [kernel](NuSVROptions.md#kernel)
- [max\_iter](NuSVROptions.md#max_iter)
- [nu](NuSVROptions.md#nu)
- [shrinking](NuSVROptions.md#shrinking)
- [tol](NuSVROptions.md#tol)
- [verbose](NuSVROptions.md#verbose)

## Properties

### C

• `Optional` **C**: `number`

Penalty parameter C of the error term.

**`Default Value`**

`1`

#### Defined in

[generated/svm/NuSVR.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L450)

___

### cache\_size

• `Optional` **cache\_size**: `number`

Specify the size of the kernel cache (in MB).

**`Default Value`**

`200`

#### Defined in

[generated/svm/NuSVR.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L499)

___

### coef0

• `Optional` **coef0**: `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

**`Default Value`**

`0`

#### Defined in

[generated/svm/NuSVR.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L478)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

**`Default Value`**

`3`

#### Defined in

[generated/svm/NuSVR.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L464)

___

### gamma

• `Optional` **gamma**: `number` \| ``"auto"`` \| ``"scale"``

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

**`Default Value`**

`'scale'`

#### Defined in

[generated/svm/NuSVR.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L471)

___

### kernel

• `Optional` **kernel**: ``"sigmoid"`` \| ``"precomputed"`` \| ``"linear"`` \| ``"poly"`` \| ``"rbf"``

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/svm/NuSVR.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L457)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Hard limit on iterations within solver, or -1 for no limit.

**`Default Value`**

`-1`

#### Defined in

[generated/svm/NuSVR.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L513)

___

### nu

• `Optional` **nu**: `number`

An upper bound on the fraction of training errors and a lower bound of the fraction of support vectors. Should be in the interval (0, 1\]. By default 0.5 will be taken.

**`Default Value`**

`0.5`

#### Defined in

[generated/svm/NuSVR.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L443)

___

### shrinking

• `Optional` **shrinking**: `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

**`Default Value`**

`true`

#### Defined in

[generated/svm/NuSVR.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L485)

___

### tol

• `Optional` **tol**: `number`

Tolerance for stopping criterion.

**`Default Value`**

`0.001`

#### Defined in

[generated/svm/NuSVR.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L492)

___

### verbose

• `Optional` **verbose**: `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

**`Default Value`**

`false`

#### Defined in

[generated/svm/NuSVR.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L506)
