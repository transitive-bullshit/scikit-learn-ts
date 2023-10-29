# DBSCAN

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

The worst case memory complexity of DBSCAN is \\(O({n}^2)\\), which can occur when the `eps` param is large and `min\_samples` is low.

Read more in the [User Guide](../clustering.html#dbscan).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html)

## Constructors

## constructor()

### Signature

```ts
new DBSCAN(opts?: object): DBSCAN;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | The algorithm to be used by the NearestNeighbors module to compute pointwise distances and find nearest neighbors. See NearestNeighbors module documentation for details.  `Default Value`  `'auto'` |
| `opts.eps?` | `number` | The maximum distance between two samples for one to be considered as in the neighborhood of the other. This is not a maximum bound on the distances of points within a cluster. This is the most important DBSCAN parameter to choose appropriately for your data set and distance function.  `Default Value`  `0.5` |
| `opts.leaf_size?` | `number` | Leaf size passed to BallTree or cKDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem.  `Default Value`  `30` |
| `opts.metric?` | `any` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [sparse graph](../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors for DBSCAN.  `Default Value`  `'euclidean'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.min_samples?` | `number` | The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself. If `min\_samples` is set to a higher value, DBSCAN will find denser clusters, whereas if it is set to a lower value, the found clusters will be more sparse.  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.p?` | `number` | The power of the Minkowski metric to be used to calculate distance between points. If `undefined`, then `p=2` (equivalent to the Euclidean distance). |

### Returns

[`DBSCAN`](DBSCAN.md)

Defined in:  [generated/cluster/DBSCAN.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L27)

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

Defined in:  [generated/cluster/DBSCAN.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L142)

### fit()

Perform DBSCAN clustering from features, or distance matrix.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/DBSCAN.ts:159](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L159)

### fit\_predict()

Compute clusters from a data or distance matrix and predict labels.

#### Signature

```ts
fit_predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training instances to cluster, or distances between instances if `metric='precomputed'`. If a sparse matrix is provided, it will be converted into a sparse `csr\_matrix`. |
| `opts.sample_weight?` | [`ArrayLike`](../types/ArrayLike.md) | Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L206)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

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

Defined in:  [generated/cluster/DBSCAN.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L255)

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

Defined in:  [generated/cluster/DBSCAN.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L95)

### set\_fit\_request()

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Signature

```ts
set_fit_request(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.sample_weight?` | `string` \| `boolean` | Metadata routing for `sample\_weight` parameter in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/DBSCAN.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L292)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L23)

### id

> `string`

Defined in:  [generated/cluster/DBSCAN.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L20)

### opts

> `any`

Defined in:  [generated/cluster/DBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L21)

## Accessors

### components\_

Copy of each core sample found by training.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/DBSCAN.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L350)

Defined in:  [generated/cluster/DBSCAN.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L350)

### core\_sample\_indices\_

Indices of core samples.

#### Signature

```ts
core_sample_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L325)

Defined in:  [generated/cluster/DBSCAN.ts:325](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L325)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L418)

Defined in:  [generated/cluster/DBSCAN.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L418)

### labels\_

Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/DBSCAN.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L373)

Defined in:  [generated/cluster/DBSCAN.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L373)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/DBSCAN.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L395)

Defined in:  [generated/cluster/DBSCAN.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L395)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L82)

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

Defined in:  [generated/cluster/DBSCAN.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L86)

Defined in:  [generated/cluster/DBSCAN.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L82) [generated/cluster/DBSCAN.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L86)
