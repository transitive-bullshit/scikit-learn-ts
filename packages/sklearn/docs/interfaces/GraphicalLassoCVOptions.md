[sklearn](../readme.md) / [Exports](../modules.md) / GraphicalLassoCVOptions

# Interface: GraphicalLassoCVOptions

## Table of contents

### Properties

- [alphas](GraphicalLassoCVOptions.md#alphas)
- [assume\_centered](GraphicalLassoCVOptions.md#assume_centered)
- [cv](GraphicalLassoCVOptions.md#cv)
- [enet\_tol](GraphicalLassoCVOptions.md#enet_tol)
- [max\_iter](GraphicalLassoCVOptions.md#max_iter)
- [mode](GraphicalLassoCVOptions.md#mode)
- [n\_jobs](GraphicalLassoCVOptions.md#n_jobs)
- [n\_refinements](GraphicalLassoCVOptions.md#n_refinements)
- [tol](GraphicalLassoCVOptions.md#tol)
- [verbose](GraphicalLassoCVOptions.md#verbose)

## Properties

### alphas

• `Optional` **alphas**: `number` \| [`ArrayLike`](../modules.md#arraylike)

If an integer is given, it fixes the number of points on the grids of alpha to be used. If a list is given, it gives the grid to be used. See the notes in the class docstring for more details. Range is \[1, inf) for an integer. Range is (0, inf\] for an array-like of floats.

**`Default Value`**

`4`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L495)

___

### assume\_centered

• `Optional` **assume\_centered**: `boolean`

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:554](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L554)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L507)

___

### enet\_tol

• `Optional` **enet\_tol**: `number`

The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

**`Default Value`**

`0.0001`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L521)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations.

**`Default Value`**

`100`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L528)

___

### mode

• `Optional` **mode**: ``"cd"`` \| ``"lars"``

The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where number of features is greater than number of samples. Elsewhere prefer cd which is more numerically stable.

**`Default Value`**

`'cd'`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L535)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L540)

___

### n\_refinements

• `Optional` **n\_refinements**: `number`

The number of times the grid is refined. Not used if explicit values of alphas are passed. Range is \[1, inf).

**`Default Value`**

`4`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L502)

___

### tol

• `Optional` **tol**: `number`

The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

**`Default Value`**

`0.0001`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L514)

___

### verbose

• `Optional` **verbose**: `boolean`

If verbose is `true`, the objective function and duality gap are printed at each iteration.

**`Default Value`**

`false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L547)
