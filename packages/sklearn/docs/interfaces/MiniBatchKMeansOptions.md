[sklearn](../readme.md) / [Exports](../modules.md) / MiniBatchKMeansOptions

# Interface: MiniBatchKMeansOptions

## Table of contents

### Properties

- [batch\_size](MiniBatchKMeansOptions.md#batch_size)
- [compute\_labels](MiniBatchKMeansOptions.md#compute_labels)
- [init](MiniBatchKMeansOptions.md#init)
- [init\_size](MiniBatchKMeansOptions.md#init_size)
- [max\_iter](MiniBatchKMeansOptions.md#max_iter)
- [max\_no\_improvement](MiniBatchKMeansOptions.md#max_no_improvement)
- [n\_clusters](MiniBatchKMeansOptions.md#n_clusters)
- [n\_init](MiniBatchKMeansOptions.md#n_init)
- [random\_state](MiniBatchKMeansOptions.md#random_state)
- [reassignment\_ratio](MiniBatchKMeansOptions.md#reassignment_ratio)
- [tol](MiniBatchKMeansOptions.md#tol)
- [verbose](MiniBatchKMeansOptions.md#verbose)

## Properties

### batch\_size

• `Optional` **batch\_size**: `number`

Size of the mini batches. For faster computations, you can set the `batch\_size` greater than 256 \* number of cores to enable parallelism on all cores.

**`Default Value`**

`1024`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:613](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L613)

___

### compute\_labels

• `Optional` **compute\_labels**: `boolean`

Compute label assignment and inertia for the complete dataset once the minibatch optimization has converged in fit.

**`Default Value`**

`true`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L627)

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

[generated/cluster/MiniBatchKMeans.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L599)

___

### init\_size

• `Optional` **init\_size**: `number`

Number of samples to randomly sample for speeding up the initialization (sometimes at the expense of accuracy): the only algorithm is initialized by running a batch KMeans on a random subset of the data. This needs to be larger than n\_clusters.

If `undefined`, the heuristic is `init\_size \= 3 \* batch\_size` if `3 \* batch\_size < n\_clusters`, else `init\_size \= 3 \* n\_clusters`.

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:657](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L657)

___

### max\_iter

• `Optional` **max\_iter**: `number`

Maximum number of iterations over the complete dataset before stopping independently of any early stopping criterion heuristics.

**`Default Value`**

`100`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:606](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L606)

___

### max\_no\_improvement

• `Optional` **max\_no\_improvement**: `number`

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed inertia.

To disable convergence detection based on inertia, set max\_no\_improvement to `undefined`.

**`Default Value`**

`10`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L650)

___

### n\_clusters

• `Optional` **n\_clusters**: `number`

The number of clusters to form as well as the number of centroids to generate.

**`Default Value`**

`8`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:584](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L584)

___

### n\_init

• `Optional` **n\_init**: `number` \| ``"auto"``

Number of random initializations that are tried. In contrast to KMeans, the algorithm is only run once, using the best of the `n\_init` initializations as measured by inertia. Several runs are recommended for sparse high-dimensional problems (see [Clustering sparse data with k-means](../../auto_examples/text/plot_document_clustering.html#kmeans-sparse-high-dim)).

When `n\_init='auto'`, the number of runs depends on the value of init: 3 if using `init='random'`, 1 if using `init='k-means++'`.

**`Default Value`**

`3`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:666](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L666)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for centroid initialization and random reassignment. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:632](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L632)

___

### reassignment\_ratio

• `Optional` **reassignment\_ratio**: `number`

Control the fraction of the maximum number of counts for a center to be reassigned. A higher value means that low count centers are more easily reassigned, which means that the model will take longer to converge, but should converge in a better clustering. However, too high a value may cause convergence issues, especially with a small batch size.

**`Default Value`**

`0.01`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L673)

___

### tol

• `Optional` **tol**: `number`

Control early stopping based on the relative center changes as measured by a smoothed, variance-normalized of the mean center squared position changes. This early stopping heuristics is closer to the one used for the batch variant of the algorithms but induces a slight computational and memory overhead over the inertia heuristic.

To disable convergence detection based on normalized center change, set tol to 0.0 (default).

**`Default Value`**

`0`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:641](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L641)

___

### verbose

• `Optional` **verbose**: `number`

Verbosity mode.

**`Default Value`**

`0`

#### Defined in

[generated/cluster/MiniBatchKMeans.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/cluster/MiniBatchKMeans.ts#L620)
