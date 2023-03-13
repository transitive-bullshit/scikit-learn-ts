# KNeighborsClassifierOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:522](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L522)

### leaf\_size?

> `number`

Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

#### Default Value

`30`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L529)

### metric?

> `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

#### Default Value

`'minkowski'`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:547](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L547)

### metric\_params?

> `any`

Additional keyword arguments for the metric function.

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L552)

### n\_jobs?

> `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. Doesn’t affect [`fit`](#sklearn.neighbors.KNeighborsClassifier.fit "sklearn.neighbors.KNeighborsClassifier.fit") method.

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L557)

### n\_neighbors?

> `number`

Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.KNeighborsClassifier.kneighbors "sklearn.neighbors.KNeighborsClassifier.kneighbors") queries.

#### Default Value

`5`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:508](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L508)

### p?

> `number`

Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

#### Default Value

`2`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L536)

### weights?

> `"uniform"` \| `"distance"`

Weight function used in prediction. Possible values:

#### Default Value

`'uniform'`

Defined in:  [generated/neighbors/KNeighborsClassifier.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/neighbors/KNeighborsClassifier.ts#L515)
