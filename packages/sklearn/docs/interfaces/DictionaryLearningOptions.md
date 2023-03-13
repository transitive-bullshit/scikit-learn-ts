# DictionaryLearningOptions

## Properties

### alpha?

> `number`

Sparsity controlling parameter.

#### Default Value

`1`

Defined in:  [generated/decomposition/DictionaryLearning.ts:445](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L445)

### code\_init?

> [`ArrayLike`](../types/ArrayLike.md)[]

Initial value for the code, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

Defined in:  [generated/decomposition/DictionaryLearning.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L493)

### dict\_init?

> [`ArrayLike`](../types/ArrayLike.md)[]

Initial values for the dictionary, for warm restart. Only used if `code\_init` and `dict\_init` are not `undefined`.

Defined in:  [generated/decomposition/DictionaryLearning.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L498)

### fit\_algorithm?

> `"cd"` \| `"lars"`

`'lars'`: uses the least angle regression method to solve the lasso problem ([`lars\_path`](sklearn.linear_model.lars_path.html#sklearn.linear_model.lars_path "sklearn.linear_model.lars_path"));

#### Default Value

`'lars'`

Defined in:  [generated/decomposition/DictionaryLearning.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L466)

### max\_iter?

> `number`

Maximum number of iterations to perform.

#### Default Value

`1000`

Defined in:  [generated/decomposition/DictionaryLearning.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L452)

### n\_components?

> `number`

Number of dictionary elements to extract. If `undefined`, then `n\_components` is set to `n\_features`.

Defined in:  [generated/decomposition/DictionaryLearning.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L438)

### n\_jobs?

> `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/decomposition/DictionaryLearning.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L488)

### positive\_code?

> `boolean`

Whether to enforce positivity when finding the code.

#### Default Value

`false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L524)

### positive\_dict?

> `boolean`

Whether to enforce positivity when finding the dictionary.

#### Default Value

`false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L531)

### random\_state?

> `number`

Used for initializing the dictionary when `dict\_init` is not specified, randomly shuffling the data when `shuffle` is set to `true`, and updating the dictionary. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/DictionaryLearning.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L517)

### split\_sign?

> `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

#### Default Value

`false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L512)

### tol?

> `number`

Tolerance for numerical error.

#### Default Value

`1e-8`

Defined in:  [generated/decomposition/DictionaryLearning.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L459)

### transform\_algorithm?

> `"threshold"` \| `"lars"` \| `"lasso_lars"` \| `"lasso_cd"` \| `"omp"`

Algorithm used to transform the data:

#### Default Value

`'omp'`

Defined in:  [generated/decomposition/DictionaryLearning.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L473)

### transform\_alpha?

> `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `undefined`, defaults to `alpha`.

Defined in:  [generated/decomposition/DictionaryLearning.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L483)

### transform\_max\_iter?

> `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `'lasso\_lars'`.

#### Default Value

`1000`

Defined in:  [generated/decomposition/DictionaryLearning.ts:538](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L538)

### transform\_n\_nonzero\_coefs?

> `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'`. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

Defined in:  [generated/decomposition/DictionaryLearning.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L478)

### verbose?

> `boolean`

To control the verbosity of the procedure.

#### Default Value

`false`

Defined in:  [generated/decomposition/DictionaryLearning.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/DictionaryLearning.ts#L505)
