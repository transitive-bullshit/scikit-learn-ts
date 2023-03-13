# DBSCAN

Perform DBSCAN clustering from vector array or distance matrix.

DBSCAN - Density-Based Spatial Clustering of Applications with Noise. Finds core samples of high density and expands clusters from them. Good for data which contains clusters of similar density.

Read more in the User Guide.

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
| `opts.metric?` | `any` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a sparse graph, in which case only “nonzero” elements may be considered neighbors for DBSCAN.  `Default Value`  `'euclidean'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.min_samples?` | `number` | The number of samples (or total weight) in a neighborhood for a point to be considered as a core point. This includes the point itself.  `Default Value`  `5` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.p?` | `number` | The power of the Minkowski metric to be used to calculate distance between points. If `undefined`, then `p=2` (equivalent to the Euclidean distance). |

### Returns

[`DBSCAN`](DBSCAN.md)

Defined in:  [generated/cluster/DBSCAN.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L25)

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

Defined in:  [generated/cluster/DBSCAN.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L140)

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
| `opts.sample_weight?` | `ArrayLike` | Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/DBSCAN.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L157)

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
| `opts.sample_weight?` | `ArrayLike` | Weight of each sample, such that a sample with a weight of at least `min\_samples` is by itself a core sample; a sample with a negative weight may inhibit its eps-neighbor from being core. Note that weights are absolute, and default to 1. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/DBSCAN.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L204)

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

Defined in:  [generated/cluster/DBSCAN.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L93)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/DBSCAN.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/DBSCAN.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/DBSCAN.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L19)

## Accessors

### components\_

Copy of each core sample found by training.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/DBSCAN.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L276)

### core\_sample\_indices\_

Indices of core samples.

#### Signature

```ts
core_sample_indices_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/DBSCAN.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L251)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/DBSCAN.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L344)

### labels\_

Cluster labels for each point in the dataset given to fit(). Noisy samples are given the label -1.

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/DBSCAN.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L299)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/DBSCAN.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L321)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/DBSCAN.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L80)

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

Defined in: [generated/cluster/DBSCAN.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/cluster/DBSCAN.ts#L84)
