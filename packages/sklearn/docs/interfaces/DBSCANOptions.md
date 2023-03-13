# DBSCANOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

The algorithm to be used by the NearestNeighbors module to compute pointwise distances and find nearest neighbors. See NearestNeighbors module documentation for details.

#### Default Value

`'auto'`

Defined in:  [generated/cluster/DBSCAN.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L319)

### eps?

> `number`

The maximum distance between two samples for one to be considered as in the neighborhood of the other. This is not a maximum bound on the distances of points within a cluster. This is the most important DBSCAN parameter to choose appropriately for your data set and distance function.

#### Default Value

`0.5`

Defined in:  [generated/cluster/DBSCAN.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L293)

### leaf\_size?

> `number`

Leaf size passed to BallTree or cKDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

#### Default Value

`30`

Defined in:  [generated/cluster/DBSCAN.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L326)

### metric?

> `any`

The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors for DBSCAN.

#### Default Value

`'euclidean'`

Defined in:  [generated/cluster/DBSCAN.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L307)

### metric\_params?

> `any`

Additional keyword arguments for the metric function.

Defined in:  [generated/cluster/DBSCAN.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L312)

### min\_samples?

> `number`

The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself.

#### Default Value

`5`

Defined in:  [generated/cluster/DBSCAN.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L300)

### n\_jobs?

> `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/cluster/DBSCAN.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L336)

### p?

> `number`

The power of the Minkowski metric to be used to calculate distance between points. If `undefined`, then `p=2` (equivalent to the Euclidean distance).

Defined in:  [generated/cluster/DBSCAN.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/cluster/DBSCAN.ts#L331)
