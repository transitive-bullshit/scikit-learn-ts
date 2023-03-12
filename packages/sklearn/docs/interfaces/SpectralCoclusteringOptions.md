[sklearn](../readme.md) / [Exports](../modules.md) / SpectralCoclusteringOptions

# Interface: SpectralCoclusteringOptions

## Table of contents

### Properties

- [init](SpectralCoclusteringOptions.md#init)
- [mini\_batch](SpectralCoclusteringOptions.md#mini_batch)
- [n\_clusters](SpectralCoclusteringOptions.md#n_clusters)
- [n\_init](SpectralCoclusteringOptions.md#n_init)
- [n\_svd\_vecs](SpectralCoclusteringOptions.md#n_svd_vecs)
- [random\_state](SpectralCoclusteringOptions.md#random_state)
- [svd\_method](SpectralCoclusteringOptions.md#svd_method)

## Properties

### init

• `Optional` **init**: [`ArrayLike`](../modules.md#arraylike)[]

Method for initialization of k-means algorithm; defaults to ‘k-means++’.

**`Default Value`**

`'k-means++'`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L442)

___

### mini\_batch

• `Optional` **mini\_batch**: `boolean`

Whether to use mini-batch k-means, which is faster but may get different results.

**`Default Value`**

`false`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L435)

___

### n\_clusters

• `Optional` **n\_clusters**: `number`

The number of biclusters to find.

**`Default Value`**

`3`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L416)

___

### n\_init

• `Optional` **n\_init**: `number`

Number of random initializations that are tried with the k-means algorithm.

If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L451)

___

### n\_svd\_vecs

• `Optional` **n\_svd\_vecs**: `number`

Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized`.

#### Defined in

[generated/cluster/SpectralCoclustering.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L428)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/cluster/SpectralCoclustering.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L456)

___

### svd\_method

• `Optional` **svd\_method**: ``"randomized"`` \| ``"arpack"``

Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, use [`sklearn.utils.extmath.randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, use [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.10.1)"), which is more accurate, but possibly slower in some cases.

**`Default Value`**

`'randomized'`

#### Defined in

[generated/cluster/SpectralCoclustering.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L423)
