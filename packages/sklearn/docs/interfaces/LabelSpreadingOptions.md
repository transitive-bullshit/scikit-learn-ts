[sklearn](../readme.md) / [Exports](../modules.md) / LabelSpreadingOptions

# Interface: LabelSpreadingOptions

## Table of contents

### Properties

- [alpha](LabelSpreadingOptions.md#alpha)
- [gamma](LabelSpreadingOptions.md#gamma)
- [kernel](LabelSpreadingOptions.md#kernel)
- [max\_iter](LabelSpreadingOptions.md#max_iter)
- [n\_jobs](LabelSpreadingOptions.md#n_jobs)
- [n\_neighbors](LabelSpreadingOptions.md#n_neighbors)
- [tol](LabelSpreadingOptions.md#tol)

## Properties

### alpha

• `Optional` **alpha**: `number`

Clamping factor. A value in (0, 1) that specifies the relative amount that an instance should adopt the information from its neighbors as opposed to its initial label. alpha=0 means keeping the initial label information; alpha=1 means replacing all initial information.

**`Default Value`**

`0.2`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L430)

___

### gamma

• `Optional` **gamma**: `number`

Parameter for rbf kernel.

**`Default Value`**

`20`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L416)

___

### kernel

• `Optional` **kernel**: ``"rbf"`` \| ``"knn"``

String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L409)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations allowed.

**`Default Value`**

`30`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L437)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L449)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Parameter for knn kernel which is a strictly positive integer.

**`Default Value`**

`7`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L423)

___

### tol

• `Optional` **tol**: `number`

Convergence tolerance: threshold to consider the system at steady state.

**`Default Value`**

`0.001`

#### Defined in

[generated/semi_supervised/LabelSpreading.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelSpreading.ts#L444)
