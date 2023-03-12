[sklearn](../readme.md) / [Exports](../modules.md) / SparseCoderOptions

# Interface: SparseCoderOptions

## Table of contents

### Properties

- [dictionary](SparseCoderOptions.md#dictionary)
- [n\_jobs](SparseCoderOptions.md#n_jobs)
- [positive\_code](SparseCoderOptions.md#positive_code)
- [split\_sign](SparseCoderOptions.md#split_sign)
- [transform\_algorithm](SparseCoderOptions.md#transform_algorithm)
- [transform\_alpha](SparseCoderOptions.md#transform_alpha)
- [transform\_max\_iter](SparseCoderOptions.md#transform_max_iter)
- [transform\_n\_nonzero\_coefs](SparseCoderOptions.md#transform_n_nonzero_coefs)

## Properties

### dictionary

• `Optional` **dictionary**: [`ArrayLike`](../modules.md#arraylike)[]

The dictionary atoms used for sparse coding. Lines are assumed to be normalized to unit norm.

#### Defined in

[generated/decomposition/SparseCoder.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L298)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/decomposition/SparseCoder.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L327)

___

### positive\_code

• `Optional` **positive\_code**: `boolean`

Whether to enforce positivity when finding the code.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/SparseCoder.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L334)

___

### split\_sign

• `Optional` **split\_sign**: `boolean`

Whether to split the sparse feature vector into the concatenation of its negative part and its positive part. This can improve the performance of downstream classifiers.

**`Default Value`**

`false`

#### Defined in

[generated/decomposition/SparseCoder.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L322)

___

### transform\_algorithm

• `Optional` **transform\_algorithm**: ``"threshold"`` \| ``"lars"`` \| ``"lasso_lars"`` \| ``"lasso_cd"`` \| ``"omp"``

Algorithm used to transform the data:

**`Default Value`**

`'omp'`

#### Defined in

[generated/decomposition/SparseCoder.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L305)

___

### transform\_alpha

• `Optional` **transform\_alpha**: `number`

If `algorithm='lasso\_lars'` or `algorithm='lasso\_cd'`, `alpha` is the penalty applied to the L1 norm. If `algorithm='threshold'`, `alpha` is the absolute value of the threshold below which coefficients will be squashed to zero. If `algorithm='omp'`, `alpha` is the tolerance parameter: the value of the reconstruction error targeted. In this case, it overrides `n\_nonzero\_coefs`. If `undefined`, default to 1.

#### Defined in

[generated/decomposition/SparseCoder.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L315)

___

### transform\_max\_iter

• `Optional` **transform\_max\_iter**: `number`

Maximum number of iterations to perform if `algorithm='lasso\_cd'` or `lasso\_lars`.

**`Default Value`**

`1000`

#### Defined in

[generated/decomposition/SparseCoder.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L341)

___

### transform\_n\_nonzero\_coefs

• `Optional` **transform\_n\_nonzero\_coefs**: `number`

Number of nonzero coefficients to target in each column of the solution. This is only used by `algorithm='lars'` and `algorithm='omp'` and is overridden by `alpha` in the `omp` case. If `undefined`, then `transform\_n\_nonzero\_coefs=int(n\_features / 10)`.

#### Defined in

[generated/decomposition/SparseCoder.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/decomposition/SparseCoder.ts#L310)
