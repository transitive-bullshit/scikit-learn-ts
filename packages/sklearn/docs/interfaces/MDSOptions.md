[sklearn](../readme.md) / [Exports](../modules.md) / MDSOptions

# Interface: MDSOptions

## Table of contents

### Properties

- [dissimilarity](MDSOptions.md#dissimilarity)
- [eps](MDSOptions.md#eps)
- [max\_iter](MDSOptions.md#max_iter)
- [metric](MDSOptions.md#metric)
- [n\_components](MDSOptions.md#n_components)
- [n\_init](MDSOptions.md#n_init)
- [n\_jobs](MDSOptions.md#n_jobs)
- [normalized\_stress](MDSOptions.md#normalized_stress)
- [random\_state](MDSOptions.md#random_state)
- [verbose](MDSOptions.md#verbose)

## Properties

### dissimilarity

• `Optional` **dissimilarity**: ``"euclidean"`` \| ``"precomputed"``

Dissimilarity measure to use:

**`Default Value`**

`'euclidean'`

#### Defined in

[generated/manifold/MDS.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L365)

___

### eps

• `Optional` **eps**: `number`

Relative tolerance with respect to stress at which to declare convergence. The value of `eps` should be tuned separately depending on whether or not `normalized\_stress` is being used.

**`Default Value`**

`0.001`

#### Defined in

[generated/manifold/MDS.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L346)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations of the SMACOF algorithm for a single run.

**`Default Value`**

`300`

#### Defined in

[generated/manifold/MDS.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L332)

___

### metric

• `Optional` **metric**: `boolean`

If `true`, perform metric MDS; otherwise, perform nonmetric MDS. When `false` (i.e. non-metric MDS), dissimilarities with 0 are considered as missing values.

**`Default Value`**

`true`

#### Defined in

[generated/manifold/MDS.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L318)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of dimensions in which to immerse the dissimilarities.

**`Default Value`**

`2`

#### Defined in

[generated/manifold/MDS.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L311)

___

### n\_init

• `Optional` **n\_init**: `number`

Number of times the SMACOF algorithm will be run with different initializations. The final results will be the best output of the runs, determined by the run with the smallest final stress.

**`Default Value`**

`4`

#### Defined in

[generated/manifold/MDS.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L325)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

The number of jobs to use for the computation. If multiple initializations are used (`n\_init`), each run of the algorithm is computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/manifold/MDS.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L353)

___

### normalized\_stress

• `Optional` **normalized\_stress**: `boolean`

Whether use and return normed stress value (Stress-1) instead of raw stress calculated by default. Only supported in non-metric MDS.

#### Defined in

[generated/manifold/MDS.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L370)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines the random number generator used to initialize the centers. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/manifold/MDS.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L358)

___

### verbose

• `Optional` **verbose**: `number`

Level of verbosity.

**`Default Value`**

`0`

#### Defined in

[generated/manifold/MDS.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/manifold/MDS.ts#L339)
