# BallTreeOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)[]

n\_samples is the number of points in the data set, and n\_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made.

Defined in:  [generated/neighbors/BallTree.ts:363](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L363)

### leaf\_size?

> `any`

Number of points at which to switch to brute-force. Changing leaf\_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n\_samples / leaf\_size. For a specified `leaf\_size`, a leaf node is guaranteed to satisfy `leaf\_size <= n\_points <= 2 \* leaf\_size`, except in the case that `n\_samples < leaf\_size`.

#### Default Value

`40`

Defined in:  [generated/neighbors/BallTree.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L370)

### metric?

> `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. ball\_tree.valid\_metrics gives a list of the metrics which are valid for BallTree. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information.

#### Default Value

`'minkowski'`

Defined in:  [generated/neighbors/BallTree.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/neighbors/BallTree.ts#L377)
