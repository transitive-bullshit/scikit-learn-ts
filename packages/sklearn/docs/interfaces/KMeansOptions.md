[sklearn](../readme.md) / [Exports](../modules.md) / KMeansOptions

# Interface: KMeansOptions

## Table of contents

### Properties

- [algorithm](KMeansOptions.md#algorithm)
- [copy\_x](KMeansOptions.md#copy_x)
- [init](KMeansOptions.md#init)
- [max\_iter](KMeansOptions.md#max_iter)
- [n\_clusters](KMeansOptions.md#n_clusters)
- [n\_init](KMeansOptions.md#n_init)
- [random\_state](KMeansOptions.md#random_state)
- [tol](KMeansOptions.md#tol)
- [verbose](KMeansOptions.md#verbose)

## Properties

### algorithm

• `Optional` **algorithm**: ``"auto"`` \| ``"lloyd"`` \| ``"elkan"`` \| ``"full"``

K-means algorithm to use. The classical EM-style algorithm is `"lloyd"`. The `"elkan"` variation can be more efficient on some datasets with well-defined clusters, by using the triangle inequality. However it’s more memory intensive due to the allocation of an extra array of shape `(n\_samples, n\_clusters)`.

`"auto"` and `"full"` are deprecated and they will be removed in Scikit-Learn 1.3. They are both aliases for `"lloyd"`.

**`Default Value`**

`'lloyd'`

#### Defined in

[generated/cluster/KMeans.ts:571](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L571)

___

### copy\_x

• `Optional` **copy\_x**: `boolean`

When pre-computing distances it is more numerically accurate to center the data first. If copy\_x is `true` (default), then the original data is not modified. If `false`, the original data is modified, and put back before the function returns, but small numerical differences may be introduced by subtracting and then adding the data mean. Note that if the original data is not C-contiguous, a copy will be made even if copy\_x is `false`. If the original data is sparse, but not in CSR format, a copy will be made even if copy\_x is `false`.

**`Default Value`**

`true`

#### Defined in

[generated/cluster/KMeans.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L562)

___

### init

• `Optional` **init**: [`ArrayLike`](../modules.md#arraylike)[] \| ``"k-means++"`` \| ``"random"``

Method for initialization:

‘k-means++’ : selects initial cluster centroids using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence. The algorithm implemented is “greedy k-means++”. It differs from the vanilla k-means++ by making several trials at each sampling step and choosing the best centroid among them.

‘random’: choose `n\_clusters` observations (rows) at random from data for the initial centroids.

If an array is passed, it should be of shape (n\_clusters, n\_features) and gives the initial centers.

If a callable is passed, it should take arguments X, n\_clusters and a random state and return an initialization.

**`Default Value`**

`'k-means++'`

#### Defined in

[generated/cluster/KMeans.ts:520](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L520)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations of the k-means algorithm for a single run.

**`Default Value`**

`300`

#### Defined in

[generated/cluster/KMeans.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L536)

___

### n\_clusters

• `Optional` **n\_clusters**: `number`

The number of clusters to form as well as the number of centroids to generate.

**`Default Value`**

`8`

#### Defined in

[generated/cluster/KMeans.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L505)

___

### n\_init

• `Optional` **n\_init**: `number` \| ``"auto"``

Number of times the k-means algorithm is run with different centroid seeds. The final results is the best output of `n\_init` consecutive runs in terms of inertia. Several runs are recommended for sparse high-dimensional problems (see [Clustering sparse data with k-means](../../auto_examples/text/plot_document_clustering.html#kmeans-sparse-high-dim)).

When `n\_init='auto'`, the number of runs depends on the value of init: 10 if using `init='random'`, 1 if using `init='k-means++'`.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/KMeans.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L529)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for centroid initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/cluster/KMeans.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L555)

___

### tol

• `Optional` **tol**: `number`

Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.

**`Default Value`**

`0.0001`

#### Defined in

[generated/cluster/KMeans.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L543)

___

### verbose

• `Optional` **verbose**: `number`

Verbosity mode.

**`Default Value`**

`0`

#### Defined in

[generated/cluster/KMeans.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/KMeans.ts#L550)
