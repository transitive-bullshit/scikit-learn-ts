[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchDictionaryLearningOptions

# Interface: MiniBatchDictionaryLearningOptions

## Table of contents

### Properties

- [alpha](MiniBatchDictionaryLearningOptions.md#alpha)
- [batch\_size](MiniBatchDictionaryLearningOptions.md#batch_size)
- [callback](MiniBatchDictionaryLearningOptions.md#callback)
- [dict\_init](MiniBatchDictionaryLearningOptions.md#dict_init)
- [fit\_algorithm](MiniBatchDictionaryLearningOptions.md#fit_algorithm)
- [max\_iter](MiniBatchDictionaryLearningOptions.md#max_iter)
- [max\_no\_improvement](MiniBatchDictionaryLearningOptions.md#max_no_improvement)
- [n\_components](MiniBatchDictionaryLearningOptions.md#n_components)
- [n\_iter](MiniBatchDictionaryLearningOptions.md#n_iter)
- [n\_jobs](MiniBatchDictionaryLearningOptions.md#n_jobs)
- [positive\_code](MiniBatchDictionaryLearningOptions.md#positive_code)
- [positive\_dict](MiniBatchDictionaryLearningOptions.md#positive_dict)
- [random\_state](MiniBatchDictionaryLearningOptions.md#random_state)
- [shuffle](MiniBatchDictionaryLearningOptions.md#shuffle)
- [split\_sign](MiniBatchDictionaryLearningOptions.md#split_sign)
- [tol](MiniBatchDictionaryLearningOptions.md#tol)
- [transform\_algorithm](MiniBatchDictionaryLearningOptions.md#transform_algorithm)
- [transform\_alpha](MiniBatchDictionaryLearningOptions.md#transform_alpha)
- [transform\_max\_iter](MiniBatchDictionaryLearningOptions.md#transform_max_iter)
- [transform\_n\_nonzero\_coefs](MiniBatchDictionaryLearningOptions.md#transform_n_nonzero_coefs)
- [verbose](MiniBatchDictionaryLearningOptions.md#verbose)

## Properties

### alpha

• `Optional` **alpha**: `number`

Sparsity controlling parameter.

**`Default Value`**

`1`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L578)

___

### batch\_size

• `Optional` **batch\_size**: `number`

Number of samples in each mini-batch.

**`Default Value`**

`3`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L609)

___

### callback

• `Optional` **callback**: `any`

A callable that gets invoked at the end of each iteration.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L683)

___

### dict\_init

• `Optional` **dict\_init**: [`ArrayLike`](../modules.md#arraylike)[]

Initial value of the dictionary for warm restart scenarios.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L621)

___

### fit\_algorithm

• `Optional` **fit\_algorithm**: ``"cd"`` \| ``"lars"``

The algorithm used:

**`Default Value`**

`'lars'`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L597)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L590)

___

### max\_no\_improvement

• `Optional` **max\_no\_improvement**: `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.

To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

**`Default Value`**

`10`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L701)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of dictionary elements to extract.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L571)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Total number of iterations over data batches to perform.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L585)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L602)

___

### positive\_code

• `Optional` **positive\_code**: `boolean`

Whether to enforce positivity when finding the code.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L664)

___

### positive\_dict

• `Optional` **positive\_dict**: `boolean`

Whether to enforce positivity when finding the dictionary.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:671](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L671)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L657)

___

### shuffle

• `Optional` **shuffle**: `boolean`

Whether to shuffle the samples before forming batches.

**`Default Value`**

`true`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L616)

___

### split\_sign

• `Optional` **split\_sign**: `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L652)

___

### tol

• `Optional` **tol**: `number`

Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.

To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

**`Default Value`**

`0.001`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L692)

___

### transform\_algorithm

• `Optional` **transform\_algorithm**: ``"threshold"`` \| ``"lars"`` \| ``"lasso_lars"`` \| ``"lasso_cd"`` \| ``"omp"``

Algorithm used to transform the data:

**`Default Value`**

`'omp'`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L628)

___

### transform\_alpha

• `Optional` **transform\_alpha**: `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L638)

___

### transform\_max\_iter

• `Optional` **transform\_max\_iter**: `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L678)

___

### transform\_n\_nonzero\_coefs

• `Optional` **transform\_n\_nonzero\_coefs**: `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L633)

___

### verbose

• `Optional` **verbose**: `number` \| `boolean`

To control the verbosity of the procedure.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/MiniBatchDictionaryLearning.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L645)
