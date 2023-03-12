# KNeighborsTransformerOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L510)

### leaf\_size?

> `number`

Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

#### Default Value

`30`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L517)

### metric?

> `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

Distance matrices are not supported.

#### Default Value

`'minkowski'`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L528)

### metric\_params?

> `any`

Additional keyword arguments for the metric function.

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L540)

### mode?

> `"connectivity"` \| `"distance"`

Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, and ‘distance’ will return the distances between neighbors according to the given metric.

#### Default Value

`'distance'`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L496)

### n\_jobs?

> `number`

The number of parallel jobs to run for neighbors search. If `\-1`, then the number of jobs is set to the number of CPU cores.

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L545)

### n\_neighbors?

> `number`

Number of neighbors for each sample in the transformed sparse graph. For compatibility reasons, as each sample is considered as its own neighbor, one extra neighbor will be computed when mode == ‘distance’. In this case, the sparse graph contains (n\_neighbors + 1) neighbors.

#### Default Value

`5`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L503)

### p?

> `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

#### Default Value

`2`

Defined in:  [generated/neighbors/KNeighborsTransformer.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/KNeighborsTransformer.ts#L535)
