**sklearn** • **Docs**

***

Estimate clustering structure from vector array.

OPTICS (Ordering Points To Identify the Clustering Structure), closely related to DBSCAN, finds core sample of high density and expands clusters from them [\[1\]](#r2c55e37003fe-1). Unlike DBSCAN, keeps cluster hierarchy for a variable neighborhood radius. Better suited for usage on large datasets than the current sklearn implementation of DBSCAN.

Clusters are then extracted using a DBSCAN-like method (cluster\_method = ‘dbscan’) or an automatic technique proposed in [\[1\]](#r2c55e37003fe-1) (cluster\_method = ‘xi’).

This implementation deviates from the original OPTICS by first performing k-nearest-neighborhood searches on all points to identify core sizes, then computing only the distances to unprocessed points when constructing the cluster order. Note that we do not employ a heap to manage the expansion candidates, so the time complexity will be O(n^2).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html)

## Constructors

### new OPTICS()

> **new OPTICS**(`opts`?): [`OPTICS`](OPTICS.md)

#### Parameters

• **opts?**

• **opts.algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm used to compute the nearest neighbors:

**Default Value**

`'auto'`

• **opts.cluster\_method?**: `string`

The extraction method used to extract clusters using the calculated reachability and ordering. Possible values are “xi” and “dbscan”.

**Default Value**

`'xi'`

• **opts.eps?**: `number`

The maximum distance between two samples for one to be considered as in the neighborhood of the other. By default it assumes the same value as `max\_eps`. Used only when `cluster\_method='dbscan'`.

• **opts.leaf\_size?**: `number`

Leaf size passed to [`BallTree`](sklearn.neighbors.BallTree.html#sklearn.neighbors.BallTree "sklearn.neighbors.BallTree") or [`KDTree`](sklearn.neighbors.KDTree.html#sklearn.neighbors.KDTree "sklearn.neighbors.KDTree"). This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.

**Default Value**

`30`

• **opts.max\_eps?**: `number`

The maximum distance between two samples for one to be considered as in the neighborhood of the other. Default value of `np.inf` will identify clusters across all scales; reducing `max\_eps` will result in shorter run times.

• **opts.memory?**: `string`

Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.

• **opts.metric?**: `string`

Metric to use for distance computation. Any metric from scikit-learn or scipy.spatial.distance can be used.

If metric is a callable function, it is called on each pair of instances (rows) and the resulting value recorded. The callable should take two arrays as input and return one value indicating the distance between them. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. If metric is “precomputed”, `X` is assumed to be a distance matrix and must be square.

Valid values for metric are:

**Default Value**

`'minkowski'`

• **opts.metric\_params?**: `any`

Additional keyword arguments for the metric function.

• **opts.min\_cluster\_size?**: `any`

Minimum number of samples in an OPTICS cluster, expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2). If `undefined`, the value of `min\_samples` is used instead. Used only when `cluster\_method='xi'`.

• **opts.min\_samples?**: `any`

The number of samples in a neighborhood for a point to be considered as a core point. Also, up and down steep regions can’t have more than `min\_samples` consecutive non-steep points. Expressed as an absolute number or a fraction of the number of samples (rounded to be at least 2).

**Default Value**

`5`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.p?**: `number`

Parameter for the Minkowski metric from [`pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances"). When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**Default Value**

`2`

• **opts.predecessor\_correction?**: `boolean`

Correct clusters according to the predecessors calculated by OPTICS [\[2\]](#r2c55e37003fe-2). This parameter has minimal effect on most datasets. Used only when `cluster\_method='xi'`.

**Default Value**

`true`

• **opts.xi?**: `any`

Determines the minimum steepness on the reachability plot that constitutes a cluster boundary. For example, an upwards point in the reachability plot is defined by the ratio from one point to its successor being at most 1-xi. Used only when `cluster\_method='xi'`.

**Default Value**

`0.05`

#### Returns

[`OPTICS`](OPTICS.md)

#### Defined in

[generated/cluster/OPTICS.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/OPTICS.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/OPTICS.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/OPTICS.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/OPTICS.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/OPTICS.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L23)

## Accessors

### cluster\_hierarchy\_

#### Get Signature

> **get** **cluster\_hierarchy\_**(): `Promise`\<`ArrayLike`[]\>

The list of clusters in the form of `\[start, end\]` in each row, with all indices inclusive. The clusters are ordered according to `(end, \-start)` (ascending) so that larger clusters encompassing smaller clusters come after those smaller ones. Since `labels\_` does not reflect the hierarchy, usually `len(cluster\_hierarchy\_) > np.unique(optics.labels\_)`. Please also note that these indices are of the `ordering\_`, i.e. `X\[ordering\_\]\[start:end + 1\]` form a cluster. Only available when `cluster\_method='xi'`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/cluster/OPTICS.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L423)

***

### core\_distances\_

#### Get Signature

> **get** **core\_distances\_**(): `Promise`\<`ArrayLike`\>

Distance at which each sample becomes a core point, indexed by object order. Points which will never be core have a distance of inf. Use `clust.core\_distances\_\[clust.ordering\_\]` to access in cluster order.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L375)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L471)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Cluster labels for each point in the dataset given to fit(). Noisy samples and points which are not included in a leaf cluster of `cluster\_hierarchy\_` are labeled as -1.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:307](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L307)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/OPTICS.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L448)

***

### ordering\_

#### Get Signature

> **get** **ordering\_**(): `Promise`\<`ArrayLike`\>

The cluster ordered list of sample indices.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:352](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L352)

***

### predecessor\_

#### Get Signature

> **get** **predecessor\_**(): `Promise`\<`ArrayLike`\>

Point that a sample was reached from, indexed by object order. Seed points have a predecessor of -1.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L400)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/cluster/OPTICS.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L124)

***

### reachability\_

#### Get Signature

> **get** **reachability\_**(): `Promise`\<`ArrayLike`\>

Reachability distances per sample, indexed by object order. Use `clust.reachability\_\[clust.ordering\_\]` to access in cluster order.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L329)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/OPTICS.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L175)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform OPTICS clustering.

Extracts an ordered list of points and reachability distances, and performs initial clustering using `max\_eps` distance specified at OPTICS object instantiation.

#### Parameters

• **opts**

• **opts.X?**: `any`

A feature array, or array of distances between samples if metric=’precomputed’. If a sparse matrix is provided, it will be converted into CSR format.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/OPTICS.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L194)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform clustering on `X` and returns cluster labels.

#### Parameters

• **opts**

• **opts.kwargs?**: `any`

Arguments to be passed to `fit`.

• **opts.X?**: `ArrayLike`[]

Input data.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/cluster/OPTICS.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L231)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/OPTICS.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L275)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/OPTICS.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/cluster/OPTICS.ts#L137)
