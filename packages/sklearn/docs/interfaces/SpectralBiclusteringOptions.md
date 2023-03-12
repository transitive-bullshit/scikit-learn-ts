[sklearn](../readme.md) / [Exports](../modules.md) / SpectralBiclusteringOptions

# Interface: SpectralBiclusteringOptions

## Table of contents

### Properties

- [init](SpectralBiclusteringOptions.md#init)
- [method](SpectralBiclusteringOptions.md#method)
- [mini\_batch](SpectralBiclusteringOptions.md#mini_batch)
- [n\_best](SpectralBiclusteringOptions.md#n_best)
- [n\_clusters](SpectralBiclusteringOptions.md#n_clusters)
- [n\_components](SpectralBiclusteringOptions.md#n_components)
- [n\_init](SpectralBiclusteringOptions.md#n_init)
- [n\_svd\_vecs](SpectralBiclusteringOptions.md#n_svd_vecs)
- [random\_state](SpectralBiclusteringOptions.md#random_state)
- [svd\_method](SpectralBiclusteringOptions.md#svd_method)

## Properties

### init

• `Optional` **init**: [`ArrayLike`](../modules.md#arraylike)[] \| ``"k-means++"`` \| ``"random"``

Method for initialization of k-means algorithm; defaults to ‘k-means++’.

**`Default Value`**

`'k-means++'`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L461)

___

### method

• `Optional` **method**: ``"bistochastic"`` \| ``"scale"`` \| ``"log"``

Method of normalizing and converting singular vectors into biclusters. May be one of ‘scale’, ‘bistochastic’, or ‘log’. The authors recommend using ‘log’. If the data is sparse, however, log normalization will not work, which is why the default is ‘bistochastic’.

**`Default Value`**

`'bistochastic'`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L421)

___

### mini\_batch

• `Optional` **mini\_batch**: `boolean`

Whether to use mini-batch k-means, which is faster but may get different results.

**`Default Value`**

`false`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L454)

___

### n\_best

• `Optional` **n\_best**: `number`

Number of best singular vectors to which to project the data for clustering.

**`Default Value`**

`3`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L435)

___

### n\_clusters

• `Optional` **n\_clusters**: `number`

The number of row and column clusters in the checkerboard structure.

**`Default Value`**

`3`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L414)

___

### n\_components

• `Optional` **n\_components**: `number`

Number of singular vectors to check.

**`Default Value`**

`6`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L428)

___

### n\_init

• `Optional` **n\_init**: `number`

Number of random initializations that are tried with the k-means algorithm.

If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L470)

___

### n\_svd\_vecs

• `Optional` **n\_svd\_vecs**: `number`

Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized`.

#### Defined in

[generated/cluster/SpectralBiclustering.ts:447](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L447)

___

### random\_state

• `Optional` **random\_state**: `number`

Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/cluster/SpectralBiclustering.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L475)

___

### svd\_method

• `Optional` **svd\_method**: ``"randomized"`` \| ``"arpack"``

Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, uses [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, uses `scipy.sparse.linalg.svds`, which is more accurate, but possibly slower in some cases.

**`Default Value`**

`'randomized'`

#### Defined in

[generated/cluster/SpectralBiclustering.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L442)
