# OPTICSOptions

## Properties

### algorithm?

> `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

#### Default Value

`'auto'`

Defined in:  [generated/cluster/OPTICS.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L434)

### cluster\_method?

> `string`

The extraction method used to extract clusters using the calculated reachability and ordering. Possible values are “xi” and “dbscan”.

#### Default Value

`'xi'`

Defined in:  [generated/cluster/OPTICS.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L403)

### eps?

> `number`

The maximum distance between two samples for one to be considered as in the neighborhood of the other. By default it assumes the same value as `max\_eps`. Used only when `cluster\_method='dbscan'`.

Defined in:  [generated/cluster/OPTICS.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L408)

### leaf\_size?

> `number`

Leaf size passed to `BallTree` or `KDTree`. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

#### Default Value

`30`

Defined in:  [generated/cluster/OPTICS.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L441)

### max\_eps?

> `number`

The maximum distance between two samples for one to be considered as in the neighborhood of the other. Default value of `np.inf` will identify clusters across all scales; reducing `max\_eps` will result in shorter run times.

Defined in:  [generated/cluster/OPTICS.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L373)

### memory?

> `string`

Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.

Defined in:  [generated/cluster/OPTICS.ts:446](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L446)

### metric?

> `string`

Metric to use for distance computation. Any metric from scikit-learn or scipy.spatial.distance can be used.

If metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays as input and return one value indicating the distance between them. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. If metric is “precomputed”, `X` is assumed to be a distance matrix and must be square.

Valid values for metric are:

#### Default Value

`'minkowski'`

Defined in:  [generated/cluster/OPTICS.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L384)

### metric\_params?

> `any`

Additional keyword arguments for the metric function.

Defined in:  [generated/cluster/OPTICS.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L396)

### min\_cluster\_size?

> `any`

Minimum number of samples in an OPTICS cluster, expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2). If `undefined`, the value of `min\_samples` is used instead. Used only when `cluster\_method='xi'`.

Defined in:  [generated/cluster/OPTICS.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L427)

### min\_samples?

> `any`

The number of samples in a neighborhood for a point to be considered as a core point. Also, up and down steep regions can’t have more than `min\_samples` consecutive non-steep points. Expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2).

#### Default Value

`5`

Defined in:  [generated/cluster/OPTICS.ts:368](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L368)

### n\_jobs?

> `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/cluster/OPTICS.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L451)

### p?

> `number`

Parameter for the Minkowski metric from [`pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

#### Default Value

`2`

Defined in:  [generated/cluster/OPTICS.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L391)

### predecessor\_correction?

> `boolean`

Correct clusters according to the predecessors calculated by OPTICS [\[2\]](#r2c55e37003fe-2). This parameter has minimal effect on most datasets. Used only when `cluster\_method='xi'`.

#### Default Value

`true`

Defined in:  [generated/cluster/OPTICS.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L422)

### xi?

> `any`

Determines the minimum steepness on the reachability plot that constitutes a cluster boundary. For example, an upwards point in the reachability plot is defined by the ratio from one point to its successor being at most 1-xi. Used only when `cluster\_method='xi'`.

#### Default Value

`0.05`

Defined in:  [generated/cluster/OPTICS.ts:415](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/OPTICS.ts#L415)
