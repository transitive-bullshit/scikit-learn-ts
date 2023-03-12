[sklearn](../readme.md) / [Exports](../modules.md) / SVROptions

# Interface: SVROptions

## Table of contents

### Properties

- [C](SVROptions.md#c)
- [cache\_size](SVROptions.md#cache_size)
- [coef0](SVROptions.md#coef0)
- [degree](SVROptions.md#degree)
- [epsilon](SVROptions.md#epsilon)
- [gamma](SVROptions.md#gamma)
- [kernel](SVROptions.md#kernel)
- [max\_iter](SVROptions.md#max_iter)
- [shrinking](SVROptions.md#shrinking)
- [tol](SVROptions.md#tol)
- [verbose](SVROptions.md#verbose)

## Properties

### C

• `Optional` **C**: `number`

Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty.

**`Default Value`**

`1`

#### Defined in

[generated/svm/SVR.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L470)

___

### cache\_size

• `Optional` **cache\_size**: `number`

Specify the size of the kernel cache (in MB).

**`Default Value`**

`200`

#### Defined in

[generated/svm/SVR.ts:491](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L491)

___

### coef0

• `Optional` **coef0**: `number`

Independent term in kernel function. It is only significant in ‘poly’ and ‘sigmoid’.

**`Default Value`**

`0`

#### Defined in

[generated/svm/SVR.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L456)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel function (‘poly’). Must be non-negative. Ignored by all other kernels.

**`Default Value`**

`3`

#### Defined in

[generated/svm/SVR.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L442)

___

### epsilon

• `Optional` **epsilon**: `number`

Epsilon in the epsilon-SVR model. It specifies the epsilon-tube within which no penalty is associated in the training loss function with points predicted within a distance epsilon from the actual value. Must be non-negative.

**`Default Value`**

`0.1`

#### Defined in

[generated/svm/SVR.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L477)

___

### gamma

• `Optional` **gamma**: `number` \| ``"auto"`` \| ``"scale"``

Kernel coefficient for ‘rbf’, ‘poly’ and ‘sigmoid’.

**`Default Value`**

`'scale'`

#### Defined in

[generated/svm/SVR.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L449)

___

### kernel

• `Optional` **kernel**: ``"sigmoid"`` \| ``"precomputed"`` \| ``"linear"`` \| ``"poly"`` \| ``"rbf"``

Specifies the kernel type to be used in the algorithm. If none is given, ‘rbf’ will be used. If a callable is given it is used to precompute the kernel matrix.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/svm/SVR.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L435)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Hard limit on iterations within solver, or -1 for no limit.

**`Default Value`**

`-1`

#### Defined in

[generated/svm/SVR.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L505)

___

### shrinking

• `Optional` **shrinking**: `boolean`

Whether to use the shrinking heuristic. See the [User Guide](../svm.html#shrinking-svm).

**`Default Value`**

`true`

#### Defined in

[generated/svm/SVR.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L484)

___

### tol

• `Optional` **tol**: `number`

Tolerance for stopping criterion.

**`Default Value`**

`0.001`

#### Defined in

[generated/svm/SVR.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L463)

___

### verbose

• `Optional` **verbose**: `boolean`

Enable verbose output. Note that this setting takes advantage of a per-process runtime setting in libsvm that, if enabled, may not work properly in a multithreaded context.

**`Default Value`**

`false`

#### Defined in

[generated/svm/SVR.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L498)
