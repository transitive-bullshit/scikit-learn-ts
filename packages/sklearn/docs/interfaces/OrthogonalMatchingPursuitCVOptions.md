[sklearn](../readme.md) / [Exports](../modules.md) / OrthogonalMatchingPursuitCVOptions

# Interface: OrthogonalMatchingPursuitCVOptions

## Table of contents

### Properties

- [copy](OrthogonalMatchingPursuitCVOptions.md#copy)
- [cv](OrthogonalMatchingPursuitCVOptions.md#cv)
- [fit\_intercept](OrthogonalMatchingPursuitCVOptions.md#fit_intercept)
- [max\_iter](OrthogonalMatchingPursuitCVOptions.md#max_iter)
- [n\_jobs](OrthogonalMatchingPursuitCVOptions.md#n_jobs)
- [normalize](OrthogonalMatchingPursuitCVOptions.md#normalize)
- [verbose](OrthogonalMatchingPursuitCVOptions.md#verbose)

## Properties

### copy

• `Optional` **copy**: `boolean`

Whether the design matrix X must be copied by the algorithm. A false value is only helpful if X is already Fortran-ordered, otherwise a copy is made anyway.

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L380)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L404)

___

### fit\_intercept

• `Optional` **fit\_intercept**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**`Default Value`**

`true`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L387)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum numbers of iterations to perform, therefore maximum features to include. 10% of `n\_features` but at least 5 if available.

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L399)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of CPUs to use during the cross validation. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:409](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L409)

___

### normalize

• `Optional` **normalize**: `boolean`

This parameter is ignored when `fit\_intercept` is set to `false`. If `true`, the regressors X will be normalized before regression by subtracting the mean and dividing by the l2-norm. If you wish to standardize, please use [`StandardScaler`](sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler "sklearn.preprocessing.StandardScaler") before calling `fit` on an estimator with `normalize=False`.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L394)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

Sets the verbosity amount.

**`Default Value`**

`false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L416)
