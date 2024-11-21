# Class: HDBSCAN

Cluster data using hierarchical density-based clustering.

HDBSCAN - Hierarchical Density-Based Spatial Clustering of Applications with Noise. Performs [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN") over varying epsilon values and integrates the result to find a clustering that gives the best stability over epsilon. This allows HDBSCAN to find clusters of varying densities (unlike [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN")), and be more robust to parameter selection. Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#hdbscan).

For an example of how to use HDBSCAN, as well as a comparison to [`DBSCAN`](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html#sklearn.cluster.DBSCAN "sklearn.cluster.DBSCAN"), please see the [plotting demo](https://scikit-learn.org/stable/modules/generated/../../auto_examples/cluster/plot_hdbscan.html#sphx-glr-auto-examples-cluster-plot-hdbscan-py).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.HDBSCAN.html)

## Constructors

### new HDBSCAN()

> **new HDBSCAN**(`opts`?): [`HDBSCAN`](HDBSCAN.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Exactly which algorithm to use for computing core distances; By default this is set to `"auto"` which attempts to use a [`KDTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") tree if possible, otherwise it uses a [`BallTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") tree. Both `"kd_tree"` and `"ball_tree"` algorithms use the [`NearestNeighbors`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") estimator. If the `X` passed during `fit` is sparse or `metric` is invalid for both [`KDTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree") and [`BallTree`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree"), then it resolves to use the `"brute"` algorithm. |
| `opts.allow_single_cluster`? | `boolean` | By default HDBSCAN\* will not produce a single cluster, setting this to `true` will override this and allow single cluster results in the case that you feel this is a valid result for your dataset. |
| `opts.alpha`? | `number` | A distance scaling parameter as used in robust single linkage. See [\[3\]](https://scikit-learn.org/stable/modules/generated/#r6f313792b2b7-3) for more information. |
| `opts.cluster_selection_epsilon`? | `number` | A distance threshold. Clusters below this value will be merged. See [\[5\]](https://scikit-learn.org/stable/modules/generated/#r6f313792b2b7-5) for more information. |
| `opts.cluster_selection_method`? | `"eom"` \| `"leaf"` | The method used to select clusters from the condensed tree. The standard approach for HDBSCAN\* is to use an Excess of Mass (`"eom"`) algorithm to find the most persistent clusters. Alternatively you can instead select the clusters at the leaves of the tree – this provides the most fine grained and homogeneous clusters. |
| `opts.copy`? | `boolean` | If `copy=True` then any time an in-place modifications would be made that would overwrite data passed to [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit), a copy will first be made, guaranteeing that the original data will be unchanged. Currently, it only applies when `metric="precomputed"`, when passing a dense array or a CSR sparse matrix and when `algorithm="brute"`. |
| `opts.leaf_size`? | `number` | Leaf size for trees responsible for fast nearest neighbour queries when a KDTree or a BallTree are used as core-distance algorithms. A large dataset size and small `leaf_size` may induce excessive memory usage. If you are running out of memory consider increasing the `leaf_size` parameter. Ignored for `algorithm="brute"`. |
| `opts.max_cluster_size`? | `number` | A limit to the size of clusters returned by the `"eom"` cluster selection algorithm. There is no limit when `max_cluster_size=None`. Has no effect if `cluster_selection_method="leaf"`. |
| `opts.metric`? | `string` | The metric to use when calculating distance between instances in a feature array. |
| `opts.metric_params`? | `any` | Arguments passed to the distance metric. |
| `opts.min_cluster_size`? | `number` | The minimum number of samples in a group for that group to be considered a cluster; groupings smaller than this size will be left as noise. |
| `opts.min_samples`? | `number` | The parameter `k` used to calculate the distance between a point `x_p` and its k-th nearest neighbor. When `undefined`, defaults to `min_cluster_size`. |
| `opts.n_jobs`? | `number` | Number of jobs to run in parallel to calculate distances. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.store_centers`? | `string` | Which, if any, cluster centers to compute and store. The options are: |

**Returns** [`HDBSCAN`](HDBSCAN.md)

**Defined in** [generated/cluster/HDBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/HDBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/HDBSCAN.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/HDBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L21) |
| `id` | `string` | `undefined` | [generated/cluster/HDBSCAN.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L18) |
| `opts` | `any` | `undefined` | [generated/cluster/HDBSCAN.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L19) |

## Accessors

### centroids\_

**Get Signature**

> **get** **centroids\_**(): `Promise`\<`ArrayLike`[]\>

A collection containing the centroid of each cluster calculated under the standard euclidean metric. The centroids may fall “outside” their respective clusters if the clusters themselves are non-convex.

Note that `n_clusters` only counts non-outlier clusters. That is to say, the `\-1, \-2, \-3` labels for the outlier clusters are excluded.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/HDBSCAN.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L441)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/HDBSCAN.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L414)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Cluster labels for each point in the dataset given to [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Outliers are labeled as follows:

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/HDBSCAN.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L341)

***

### medoids\_

**Get Signature**

> **get** **medoids\_**(): `Promise`\<`ArrayLike`[]\>

A collection containing the medoid of each cluster calculated under the whichever metric was passed to the `metric` parameter. The medoids are points in the original cluster which minimize the average distance to all other points in that cluster under the chosen metric. These can be thought of as the result of projecting the `metric`\-based centroid back onto the cluster.

Note that `n_clusters` only counts non-outlier clusters. That is to say, the `\-1, \-2, \-3` labels for the outlier clusters are excluded.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/HDBSCAN.ts:466](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L466)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/HDBSCAN.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L389)

***

### probabilities\_

**Get Signature**

> **get** **probabilities\_**(): `Promise`\<`ArrayLike`\>

The strength with which each sample is a member of its assigned cluster.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/HDBSCAN.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L364)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/cluster/HDBSCAN.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L120)

## Methods

### dbscan\_clustering()

> **dbscan\_clustering**(`opts`): `Promise`\<`ArrayLike`\>

Return clustering given by DBSCAN without border points.

Return clustering that would be equivalent to running DBSCAN\* for a particular cut_distance (or epsilon) DBSCAN\* can be thought of as DBSCAN without the border points. As such these results may differ slightly from `cluster.DBSCAN` due to the difference in implementation over the non-core points.

This can also be thought of as a flat clustering derived from constant height cut through the single linkage tree.

This represents the result of selecting a cut value for robust single linkage clustering. The `min_cluster_size` allows the flat clustering to declare noise points (and cluster smaller than `min_cluster_size`).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.cut_distance`? | `number` | The mutual reachability distance cut value to use to generate a flat clustering. |
| `opts.min_cluster_size`? | `number` | Clusters smaller than this value with be called ‘noise’ and remain unclustered in the resulting flat clustering. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/HDBSCAN.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L194)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/HDBSCAN.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L171)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Find clusters based on hierarchical density-based clustering.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | A feature array, or array of distances between samples if `metric='precomputed'`. |
| `opts.y`? | `any` | Ignored. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/HDBSCAN.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L233)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Cluster X and return the associated cluster labels.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | A feature array, or array of distances between samples if `metric='precomputed'`. |
| `opts.y`? | `any` | Ignored. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/HDBSCAN.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L270)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/HDBSCAN.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L309)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/HDBSCAN.ts:133](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/HDBSCAN.ts#L133)
