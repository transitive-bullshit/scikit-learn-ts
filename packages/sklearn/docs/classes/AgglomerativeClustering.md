# AgglomerativeClustering

Agglomerative Clustering.

Recursively merges pair of clusters of sample data; uses linkage distance.

Read more in the [User Guide](../clustering.html#hierarchical-clustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html)

## Constructors

## constructor()

### Signature

```ts
new AgglomerativeClustering(opts?: object): AgglomerativeClustering;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.affinity?` | `string` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix (instead of a similarity matrix) is needed as input for the fit method.  `Default Value`  `'euclidean'` |
| `opts.compute_distances?` | `boolean` | Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.  `Default Value`  `false` |
| `opts.compute_full_tree?` | `boolean` \| `"auto"` | Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of samples. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance\_threshold` is not `undefined`. By default `compute\_full\_tree` is “auto”, which is equivalent to `true` when `distance\_threshold` is not `undefined` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `false`.  `Default Value`  `'auto'` |
| `opts.connectivity?` | [`ArrayLike`](../types/ArrayLike.md) | Connectivity matrix. Defines for each sample the neighboring samples following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured. |
| `opts.distance_threshold?` | `number` | The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n\_clusters` must be `undefined` and `compute\_full\_tree` must be `true`. |
| `opts.linkage?` | `"ward"` \| `"complete"` \| `"average"` \| `"single"` | Which linkage criterion to use. The linkage criterion determines which distance to use between sets of observation. The algorithm will merge the pairs of cluster that minimize this criterion.  `Default Value`  `'ward'` |
| `opts.memory?` | `string` | Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory. |
| `opts.metric?` | `string` | Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If set to `undefined` then “euclidean” is used. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method. |
| `opts.n_clusters?` | `number` | The number of clusters to find. It must be `undefined` if `distance\_threshold` is not `undefined`.  `Default Value`  `2` |

### Returns

[`AgglomerativeClustering`](AgglomerativeClustering.md)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L25)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L150)

### fit()

Fit the hierarchical clustering from features, or distance matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md) | Training instances to cluster, or distances between instances if `metric='precomputed'`. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L167)

### fit\_predict()

Fit and return the result of each sample’s clustering assignment.

In addition to fitting, this method also return the result of the clustering assignment for each sample in the training set.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training instances to cluster, or distances between instances if `affinity='precomputed'`. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L209)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L98)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L19)

## Accessors

### children\_

The children of each non-leaf node. Values less than `n\_samples` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_samples` is a non-leaf node and has children `children\_\[i \- n\_samples\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_samples + i`.

#### Signature

```ts
children_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L414)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L414)

### distances\_

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

#### Signature

```ts
distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L441)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L441)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L387)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L387)

### labels\_

Cluster labels for each point.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L279)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L279)

### n\_clusters\_

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

#### Signature

```ts
n_clusters_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L252)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L252)

### n\_connected\_components\_

The estimated number of connected components in the graph.

#### Signature

```ts
n_connected_components_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L333)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L333)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L360)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L360)

### n\_leaves\_

Number of leaves in the hierarchical tree.

#### Signature

```ts
n_leaves_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/AgglomerativeClustering.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L306)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L306)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L85)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/cluster/AgglomerativeClustering.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L89)

Defined in:  [generated/cluster/AgglomerativeClustering.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L85) [generated/cluster/AgglomerativeClustering.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L89)
