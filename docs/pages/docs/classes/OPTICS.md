# OPTICS

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster\_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](#r2c55e37003fe-1) (cluster\_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html)

## Constructors

## constructor()

### Signature

```ts
new OPTICS(opts?: object): OPTICS;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors:  `Default Value`  `'auto'` |
| `opts.cluster_method?` | `string` | The extraction method used to extract clusters using the calculated reachability and ordering. Possible values are “xi” and “dbscan”.  `Default Value`  `'xi'` |
| `opts.eps?` | `number` | The maximum distance between two samples for one to be considered as in the neighborhood of the other. By default it assumes the same value as `max\_eps`. Used only when `cluster\_method='dbscan'`. |
| `opts.leaf_size?` | `number` | Leaf size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.max_eps?` | `number` | The maximum distance between two samples for one to be considered as in the neighborhood of the other. Default value of `np.inf` will identify clusters across all scales; reducing `max\_eps` will result in shorter run times. |
| `opts.memory?` | `string` | Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory. |
| `opts.metric?` | `string` | Metric to use for distance computation. Any metric from scikit-learn or scipy.spatial.distance can be used.  If metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays as input and return one value indicating the distance between them. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. If metric is “precomputed”, `X` is assumed to be a distance matrix and must be square.  Valid values for metric are:  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.min_cluster_size?` | `any` | Minimum number of samples in an OPTICS cluster, expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2). If `undefined`, the value of `min\_samples` is used instead. Used only when `cluster\_method='xi'`. |
| `opts.min_samples?` | `any` | The number of samples in a neighborhood for a point to be considered as a core point. Also, up and down steep regions can’t have more than `min\_samples` consecutive non-steep points. Expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2).  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.p?` | `number` | Parameter for the Minkowski metric from [`pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |
| `opts.predecessor_correction?` | `boolean` | Correct clusters according to the predecessors calculated by OPTICS [\[2\]](#r2c55e37003fe-2). This parameter has minimal effect on most datasets. Used only when `cluster\_method='xi'`.  `Default Value`  `true` |
| `opts.xi?` | `any` | Determines the minimum steepness on the reachability plot that constitutes a cluster boundary. For example, an upwards point in the reachability plot is defined by the ratio from one point to its successor being at most 1-xi. Used only when `cluster\_method='xi'`.  `Default Value`  `0.05` |

### Returns

[`OPTICS`](OPTICS.md)

Defined in:  [generated/cluster/OPTICS.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L29)

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

Defined in:  [generated/cluster/OPTICS.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L190)

### fit()

Perform OPTICS clustering.

Extracts an ordered list of points and reachability distances, and performs initial clustering using `max\_eps` distance specified at OPTICS object instantiation.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | A feature array, or array of distances between samples if metric=’precomputed’. If a sparse matrix is provided, it will be converted into CSR format. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/OPTICS.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L209)

### fit\_predict()

Perform clustering on `X` and returns cluster labels.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/OPTICS.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L247)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/OPTICS.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L287)

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

Defined in:  [generated/cluster/OPTICS.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L137)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/OPTICS.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/OPTICS.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/OPTICS.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L25)

### id

> `string`

Defined in:  [generated/cluster/OPTICS.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L22)

### opts

> `any`

Defined in:  [generated/cluster/OPTICS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L23)

## Accessors

### cluster\_hierarchy\_

The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels\_` does not reflect the hierarchy, usually `len(cluster\_hierarchy\_) > np.unique(optics.labels\_)`. Please also note that these indices are of the `ordering\_`, i.e. `X\[ordering\_\]\[start:end + 1\]` form a cluster. Only available when `cluster\_method='xi'`.

#### Signature

```ts
cluster_hierarchy_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/OPTICS.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L436)

### core\_distances\_

Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core\_distances\_\[clust.ordering\_\]` to access in cluster order.

#### Signature

```ts
core_distances_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L388)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L484)

### labels\_

Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster\_hierarchy\_` are labeled as -1.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L320)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/OPTICS.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L461)

### ordering\_

The cluster ordered list of sample indices.

#### Signature

```ts
ordering_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L365)

### predecessor\_

Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.

#### Signature

```ts
predecessor_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L413)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/OPTICS.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L124)

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

Defined in: [generated/cluster/OPTICS.ts:128](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L128)

### reachability\_

Reachability distances per sample, indexed by object order. Use `clust.reachability\_\[clust.ordering\_\]` to access in cluster order.

#### Signature

```ts
reachability_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/OPTICS.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/OPTICS.ts#L342)
