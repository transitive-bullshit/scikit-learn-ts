# FeatureAgglomerationOptions

## Properties

### affinity?

> `string`

The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix (instead of a similarity matrix) is needed as input for the fit method.

#### Default Value

`'euclidean'`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:551](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L551)

### compute\_distances?

> `boolean`

Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.

#### Default Value

`false`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:597](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L597)

### compute\_full\_tree?

> `boolean` \| `"auto"`

Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of features. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance\_threshold` is not `undefined`. By default `compute\_full\_tree` is “auto”, which is equivalent to `true` when `distance\_threshold` is not `undefined` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `false`.

#### Default Value

`'auto'`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L573)

### connectivity?

> [`ArrayLike`](../types/ArrayLike.md)

Connectivity matrix. Defines for each feature the neighboring features following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured.

Defined in:  [generated/cluster/FeatureAgglomeration.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L566)

### distance\_threshold?

> `number`

The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n\_clusters` must be `undefined` and `compute\_full\_tree` must be `true`.

Defined in:  [generated/cluster/FeatureAgglomeration.ts:590](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L590)

### linkage?

> `"ward"` \| `"complete"` \| `"average"` \| `"single"`

Which linkage criterion to use. The linkage criterion determines which distance to use between sets of features. The algorithm will merge the pairs of cluster that minimize this criterion.

#### Default Value

`'ward'`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L580)

### memory?

> `string`

Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.

Defined in:  [generated/cluster/FeatureAgglomeration.ts:561](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L561)

### metric?

> `string`

Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If set to `undefined` then “euclidean” is used. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method.

Defined in:  [generated/cluster/FeatureAgglomeration.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L556)

### n\_clusters?

> `number`

The number of clusters to find. It must be `undefined` if `distance\_threshold` is not `undefined`.

#### Default Value

`2`

Defined in:  [generated/cluster/FeatureAgglomeration.ts:544](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L544)

### pooling\_func?

> `any`

This combines the values of agglomerated features into a single value, and should accept an array of shape \[M, N\] and the keyword argument `axis=1`, and reduce it to an array of size \[M\].

Defined in:  [generated/cluster/FeatureAgglomeration.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/cluster/FeatureAgglomeration.ts#L585)
