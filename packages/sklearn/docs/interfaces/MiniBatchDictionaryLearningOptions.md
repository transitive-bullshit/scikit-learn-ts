# MiniBatchDictionaryLearningOptions

## Properties

### alpha?

> `number`

Sparsity controlling parameter.

#### Default Value

`1`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:578](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L578)

### batch\_size?

> `number`

Number of samples in each mini-batch.

#### Default Value

`3`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L609)

### callback?

> `any`

A callable that gets invoked at the end of each iteration.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L683)

### dict\_init?

> [`ArrayLike`](../types/ArrayLike.md)[]

Initial value of the dictionary for warm restart scenarios.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:621](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L621)

### fit\_algorithm?

> `"cd"` \| `"lars"`

The algorithm used:

#### Default Value

`'lars'`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L597)

### max\_iter?

> `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics. If `max\_iter` is not `undefined`, `n\_iter` is ignored.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L590)

### max\_no\_improvement?

> `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. Used only if `max\_iter` is not `undefined`.

To disable convergence detection based on cost function, set `max\_no\_improvement` to `undefined`.

#### Default Value

`10`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L701)

### n\_components?

> `number`

Number of dictionary elements to extract.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L571)

### n\_iter?

> `number`

Total number of iterations over data batches to perform.

#### Default Value

`1000`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L585)

### n\_jobs?

> `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L602)

### positive\_code?

> `boolean`

Whether to enforce positivity when finding the code.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L664)

### positive\_dict?

> `boolean`

Whether to enforce positivity when finding the dictionary.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:671](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L671)

### random\_state?

> `number`

Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L657)

### shuffle?

> `boolean`

Whether to shuffle the samples before forming batches.

#### Default Value

`true`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L616)

### split\_sign?

> `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:652](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L652)

### tol?

> `number`

Control early stopping based on the norm of the differences in the dictionary between 2 steps. Used only if `max\_iter` is not `undefined`.

To disable early stopping based on changes in the dictionary, set `tol` to 0.0.

#### Default Value

`0.001`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:692](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L692)

### transform\_algorithm?

> `"threshold"` \| `"lars"` \| `"lasso_lars"` \| `"lasso_cd"` \| `"omp"`

Algorithm used to transform the data:

#### Default Value

`'omp'`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:628](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L628)

### transform\_alpha?

> `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L638)

### transform\_max\_iter?

> `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

#### Default Value

`1000`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:678](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L678)

### transform\_n\_nonzero\_coefs?

> `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L633)

### verbose?

> `number` \| `boolean`

To control the verbosity of the procedure.

#### Default Value

`false`

Defined in:  [generated/decomposition/MiniBatchDictionaryLearning.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/decomposition/MiniBatchDictionaryLearning.ts#L645)
