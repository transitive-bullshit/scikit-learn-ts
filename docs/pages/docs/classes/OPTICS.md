# Class: OPTICS

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](https://scikit-learn.org/stable/modules/generated/#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](https://scikit-learn.org/stable/modules/generated/#r2c55e37003fe-1) (cluster_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#optics).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html)

## Constructors

### new OPTICS()

> **new OPTICS**(`opts`?): [`OPTICS`](OPTICS.md)

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.algorithm`?

</td>
<td>

`"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

</td>
<td>

Algorithm used to compute the nearest neighbors:

</td>
</tr>
<tr>
<td>

`opts.cluster_method`?

</td>
<td>

`string`

</td>
<td>

The extraction method used to extract clusters using the calculated reachability and ordering. Possible values are “xi” and “dbscan”.

</td>
</tr>
<tr>
<td>

`opts.eps`?

</td>
<td>

`number`

</td>
<td>

The maximum distance between two samples for one to be considered as in the neighborhood of the other. By default it assumes the same value as `max_eps`. Used only when `cluster_method='dbscan'`.

</td>
</tr>
<tr>
<td>

`opts.leaf_size`?

</td>
<td>

`number`

</td>
<td>

Leaf size passed to [`BallTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

</td>
</tr>
<tr>
<td>

`opts.max_eps`?

</td>
<td>

`number`

</td>
<td>

The maximum distance between two samples for one to be considered as in the neighborhood of the other. Default value of `np.inf` will identify clusters across all scales; reducing `max_eps` will result in shorter run times.

</td>
</tr>
<tr>
<td>

`opts.memory`?

</td>
<td>

`string`

</td>
<td>

Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.

</td>
</tr>
<tr>
<td>

`opts.metric`?

</td>
<td>

`string`

</td>
<td>

Metric to use for distance computation. Any metric from scikit-learn or scipy.spatial.distance can be used.

If metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays as input and return one value indicating the distance between them. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. If metric is “precomputed”, `X` is assumed to be a distance matrix and must be square.

Valid values for metric are:

</td>
</tr>
<tr>
<td>

`opts.metric_params`?

</td>
<td>

`any`

</td>
<td>

Additional keyword arguments for the metric function.

</td>
</tr>
<tr>
<td>

`opts.min_cluster_size`?

</td>
<td>

`any`

</td>
<td>

Minimum number of samples in an OPTICS cluster, expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2). If `undefined`, the value of `min_samples` is used instead. Used only when `cluster_method='xi'`.

</td>
</tr>
<tr>
<td>

`opts.min_samples`?

</td>
<td>

`any`

</td>
<td>

The number of samples in a neighborhood for a point to be considered as a core point. Also, up and down steep regions can’t have more than `min_samples` consecutive non-steep points. Expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2).

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.p`?

</td>
<td>

`number`

</td>
<td>

Parameter for the Minkowski metric from [`pairwise_distances`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used.

</td>
</tr>
<tr>
<td>

`opts.predecessor_correction`?

</td>
<td>

`boolean`

</td>
<td>

Correct clusters according to the predecessors calculated by OPTICS [\[2\]](https://scikit-learn.org/stable/modules/generated/#r2c55e37003fe-2). This parameter has minimal effect on most datasets. Used only when `cluster_method='xi'`.

</td>
</tr>
<tr>
<td>

`opts.xi`?

</td>
<td>

`any`

</td>
<td>

Determines the minimum steepness on the reachability plot that constitutes a cluster boundary. For example, an upwards point in the reachability plot is defined by the ratio from one point to its successor being at most 1-xi. Used only when `cluster_method='xi'`.

</td>
</tr>
</tbody>
</table>

**Returns** [`OPTICS`](OPTICS.md)

**Defined in** [generated/cluster/OPTICS.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/OPTICS.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/OPTICS.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/OPTICS.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L25) |
| `id` | `string` | `undefined` | [generated/cluster/OPTICS.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L22) |
| `opts` | `any` | `undefined` | [generated/cluster/OPTICS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L23) |

## Accessors

### cluster\_hierarchy\_

**Get Signature**

> **get** **cluster\_hierarchy\_**(): `Promise`\<`ArrayLike`[]\>

The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels_` does not reflect the hierarchy, usually `len(cluster_hierarchy_) > np.unique(optics.labels_)`. Please also note that these indices are of the `ordering_`, i.e. `X\[ordering_\]\[start:end + 1\]` form a cluster. Only available when `cluster_method='xi'`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/OPTICS.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L423)

***

### core\_distances\_

**Get Signature**

> **get** **core\_distances\_**(): `Promise`\<`ArrayLike`\>

Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core_distances_\[clust.ordering_\]` to access in cluster order.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L375)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L471)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster_hierarchy_` are labeled as -1.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L307)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/OPTICS.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L448)

***

### ordering\_

**Get Signature**

> **get** **ordering\_**(): `Promise`\<`ArrayLike`\>

The cluster ordered list of sample indices.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L352)

***

### predecessor\_

**Get Signature**

> **get** **predecessor\_**(): `Promise`\<`ArrayLike`\>

Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L400)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `void`

**Defined in** [generated/cluster/OPTICS.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L124)

***

### reachability\_

**Get Signature**

> **get** **reachability\_**(): `Promise`\<`ArrayLike`\>

Reachability distances per sample, indexed by object order. Use `clust.reachability_\[clust.ordering_\]` to access in cluster order.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L329)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/OPTICS.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L175)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform OPTICS clustering.

Extracts an ordered list of points and reachability distances, and performs initial clustering using `max_eps` distance specified at OPTICS object instantiation.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

A feature array, or array of distances between samples if metric=’precomputed’. If a sparse matrix is provided, it will be converted into CSR format.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/OPTICS.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L194)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform clustering on `X` and returns cluster labels.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.kwargs`?

</td>
<td>

`any`

</td>
<td>

Arguments to be passed to `fit`.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Input data.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/OPTICS.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L231)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/OPTICS.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L275)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/OPTICS.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/OPTICS.ts#L137)
