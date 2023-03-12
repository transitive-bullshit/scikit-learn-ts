[sklearn](../readme.md) / [Exports](../modules.md) / DictionaryLearningOptions

# Interface: DictionaryLearningOptions

## Table of contents

### Properties

- [alpha](DictionaryLearningOptions.md#alpha)
- [code\_init](DictionaryLearningOptions.md#code_init)
- [dict\_init](DictionaryLearningOptions.md#dict_init)
- [fit\_algorithm](DictionaryLearningOptions.md#fit_algorithm)
- [max\_iter](DictionaryLearningOptions.md#max_iter)
- [n\_components](DictionaryLearningOptions.md#n_components)
- [n\_jobs](DictionaryLearningOptions.md#n_jobs)
- [positive\_code](DictionaryLearningOptions.md#positive_code)
- [positive\_dict](DictionaryLearningOptions.md#positive_dict)
- [random\_state](DictionaryLearningOptions.md#random_state)
- [split\_sign](DictionaryLearningOptions.md#split_sign)
- [tol](DictionaryLearningOptions.md#tol)
- [transform\_algorithm](DictionaryLearningOptions.md#transform_algorithm)
- [transform\_alpha](DictionaryLearningOptions.md#transform_alpha)
- [transform\_max\_iter](DictionaryLearningOptions.md#transform_max_iter)
- [transform\_n\_nonzero\_coefs](DictionaryLearningOptions.md#transform_n_nonzero_coefs)
- [verbose](DictionaryLearningOptions.md#verbose)

## Properties

### alpha

• `Optional` **alpha**: `number`

Sparsity controlling parameter.

**`Default Value`**

`1`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L445)

___

### code\_init

• `Optional` **code\_init**: [`ArrayLike`](../modules.md#arraylike)[]

Initial value for the code, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L493)

___

### dict\_init

• `Optional` **dict\_init**: [`ArrayLike`](../modules.md#arraylike)[]

Initial values for the dictionary, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L498)

___

### fit\_algorithm

• `Optional` **fit\_algorithm**: ``"cd"`` \| ``"lars"``

`'lars'`: uses the least angle regression method to solve the lasso problem ([`lars\_path`](sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path "sklearn.linear_model.lars_path"));

**`Default Value`**

`'lars'`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L466)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations to perform.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L452)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of dictionary elements to extract. If `undefined`, then `n\_components` is set to `n\_features`.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L438)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L488)

___

### positive\_code

• `Optional` **positive\_code**: `boolean`

Whether to enforce positivity when finding the code.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L524)

___

### positive\_dict

• `Optional` **positive\_dict**: `boolean`

Whether to enforce positivity when finding the dictionary.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L531)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/decomposition/DictionaryLearning.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L517)

___

### split\_sign

• `Optional` **split\_sign**: `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L512)

___

### tol

• `Optional` **tol**: `number`

Tolerance for numerical error.

**`Default Value`**

`1e-8`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L459)

___

### transform\_algorithm

• `Optional` **transform\_algorithm**: ``"threshold"`` \| ``"lars"`` \| ``"lasso_lars"`` \| ``"lasso_cd"`` \| ``"omp"``

Algorithm used to transform the data:

**`Default Value`**

`'omp'`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L473)

___

### transform\_alpha

• `Optional` **transform\_alpha**: `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L483)

___

### transform\_max\_iter

• `Optional` **transform\_max\_iter**: `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L538)

___

### transform\_n\_nonzero\_coefs

• `Optional` **transform\_n\_nonzero\_coefs**: `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

#### Defined in

[generated/decomposition/DictionaryLearning.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L478)

___

### verbose

• `Optional` **verbose**: `boolean`

To control the verbosity of the procedure.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/DictionaryLearning.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L505)
