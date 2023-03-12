# LocalOutlierFactorOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L589)

### contamination?

> `number` \| `"auto"`

The amount of contamination of the data set, i.e. the proportion of outliers in the data set. When fitting this is used to define the threshold on the scores of the samples.

#### Default Value

`'auto'`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:626](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L626)

### leaf\_size?

> `number`

Leaf is size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

#### Default Value

`30`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L596)

### metric?

> `string`

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values.

If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors.

If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string.

#### Default Value

`'minkowski'`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L607)

### metric\_params?

> `any`

Additional keyword arguments for the metric function.

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L619)

### n\_jobs?

> `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L638)

### n\_neighbors?

> `number`

Number of neighbors to use by default for [`kneighbors`](#sklearn.neighbors.LocalOutlierFactor.kneighbors "sklearn.neighbors.LocalOutlierFactor.kneighbors") queries. If n\_neighbors is larger than the number of samples provided, all samples will be used.

#### Default Value

`20`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L582)

### novelty?

> `boolean`

By default, LocalOutlierFactor is only meant to be used for outlier detection (novelty=`false`). Set novelty to `true` if you want to use LocalOutlierFactor for novelty detection. In this case be aware that you should only use predict, decision\_function and score\_samples on new unseen data and not on the training set; and note that the results obtained this way may differ from the standard LOF results.

#### Default Value

`false`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:633](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L633)

### p?

> `number`

Parameter for the Minkowski metric from `sklearn.metrics.pairwise.pairwise\_distances`. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

#### Default Value

`2`

Defined in:  [generated/neighbors/LocalOutlierFactor.ts:614](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neighbors/LocalOutlierFactor.ts#L614)
