# Class: DBSCAN

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

This implementation has a worst case memory complexity of \\(O({n}^2)\\), which can occur when the `eps` param is large and `min_samples` is low, while the original DBSCAN only uses linear memory. For further details, see the Notes below.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#dbscan).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)

## Constructors

### new DBSCAN()

> **new DBSCAN**(`opts`?): [`DBSCAN`](DBSCAN.md)

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

The algorithm to be used by the NearestNeighbors module to compute pointwise distances and find nearest neighbors. See NearestNeighbors module documentation for details.

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

The maximum distance between two samples for one to be considered as in the neighborhood of the other. This is not a maximum bound on the distances of points within a cluster. This is the most important DBSCAN parameter to choose appropriately for your data set and distance function.

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

Leaf size passed to BallTree or cKDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

</td>
</tr>
<tr>
<td>

`opts.metric`?

</td>
<td>

`any`

</td>
<td>

The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise_distances`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [sparse graph](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors for DBSCAN.

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

`opts.min_samples`?

</td>
<td>

`number`

</td>
<td>

The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself. If `min_samples` is set to a higher value, DBSCAN will find denser clusters, whereas if it is set to a lower value, the found clusters will be more sparse.

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

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

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

The power of the Minkowski metric to be used to calculate distance between points. If `undefined`, then `p=2` (equivalent to the Euclidean distance).

</td>
</tr>
</tbody>
</table>

**Returns** [`DBSCAN`](DBSCAN.md)

**Defined in** [generated/cluster/DBSCAN.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/DBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/DBSCAN.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/DBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L23) |
| `id` | `string` | `undefined` | [generated/cluster/DBSCAN.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L20) |
| `opts` | `any` | `undefined` | [generated/cluster/DBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L21) |

## Accessors

### components\_

**Get Signature**

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Copy of each core sample found by training.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/DBSCAN.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L329)

***

### core\_sample\_indices\_

**Get Signature**

> **get** **core\_sample\_indices\_**(): `Promise`\<`ArrayLike`\>

Indices of core samples.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/DBSCAN.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L304)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/DBSCAN.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L397)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/DBSCAN.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L352)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/DBSCAN.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L374)

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

**Defined in** [generated/cluster/DBSCAN.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L82)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/DBSCAN.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L133)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform DBSCAN clustering from features, or distance matrix.

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

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Weight of each sample, such that a sample with a weight of at least `min_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1.

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

Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`.

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

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/DBSCAN.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L150)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Compute clusters from a data or distance matrix and predict labels.

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

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Weight of each sample, such that a sample with a weight of at least `min_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1.

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

Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`.

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

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/DBSCAN.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L192)

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

**Defined in** [generated/cluster/DBSCAN.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L236)

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

**Defined in** [generated/cluster/DBSCAN.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L95)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

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

`opts.sample_weight`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `sample_weight` parameter in `fit`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/DBSCAN.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/DBSCAN.ts#L272)
