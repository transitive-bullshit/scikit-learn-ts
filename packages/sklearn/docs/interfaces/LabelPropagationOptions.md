[sklearn](../readme.md) / [Exports](../modules.md) / LabelPropagationOptions

# Interface: LabelPropagationOptions

## Table of contents

### Properties

- [gamma](LabelPropagationOptions.md#gamma)
- [kernel](LabelPropagationOptions.md#kernel)
- [max\_iter](LabelPropagationOptions.md#max_iter)
- [n\_jobs](LabelPropagationOptions.md#n_jobs)
- [n\_neighbors](LabelPropagationOptions.md#n_neighbors)
- [tol](LabelPropagationOptions.md#tol)

## Properties

### gamma

• `Optional` **gamma**: `number`

Parameter for rbf kernel.

**`Default Value`**

`20`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L436)

___

### kernel

• `Optional` **kernel**: ``"rbf"`` \| ``"knn"``

String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n\_samples, n\_features), and return a (n\_samples, n\_samples) shaped weight matrix.

**`Default Value`**

`'rbf'`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L429)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Change maximum number of iterations allowed.

**`Default Value`**

`1000`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L450)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L460)

___

### n\_neighbors

• `Optional` **n\_neighbors**: `number`

Parameter for knn kernel which need to be strictly positive.

**`Default Value`**

`7`

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L443)

___

### tol

• `Optional` **tol**: `number`

Convergence tolerance: threshold to consider the system at steady state.

#### Defined in

[generated/semi_supervised/LabelPropagation.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L455)
