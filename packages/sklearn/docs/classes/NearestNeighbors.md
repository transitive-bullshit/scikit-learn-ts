# Class: NearestNeighbors

Unsupervised learner for implementing neighbor searches.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html)

## Constructors

### new NearestNeighbors()

> **new NearestNeighbors**(`opts`?): [`NearestNeighbors`](NearestNeighbors.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.algorithm`? | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm used to compute the nearest neighbors: |
| `opts.leaf_size`? | `number` | Leaf size passed to BallTree or KDTree. This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem. |
| `opts.metric`? | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance_metrics`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for valid metric values. If metric is “precomputed”, X is assumed to be a distance matrix and must be square during fit. X may be a [sparse graph](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sparse-graph), in which case only “nonzero” elements may be considered neighbors. If metric is a callable function, it takes two arrays representing 1D vectors as inputs and must return one value indicating the distance between those vectors. This works for Scipy’s metrics, but is less efficient than passing the metric name as a string. |
| `opts.metric_params`? | `any` | Additional keyword arguments for the metric function. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run for neighbors search. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors`? | `number` | Number of neighbors to use by default for [`kneighbors`](https://scikit-learn.org/stable/modules/generated/#sklearn.neighbors.NearestNeighbors.kneighbors "sklearn.neighbors.NearestNeighbors.kneighbors") queries. |
| `opts.p`? | `any` | Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise_distances. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used. |
| `opts.radius`? | `number` | Range of parameter space to use by default for [`radius_neighbors`](https://scikit-learn.org/stable/modules/generated/#sklearn.neighbors.NearestNeighbors.radius_neighbors "sklearn.neighbors.NearestNeighbors.radius_neighbors") queries. |

#### Returns

[`NearestNeighbors`](NearestNeighbors.md)

#### Defined in

[generated/neighbors/NearestNeighbors.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neighbors/NearestNeighbors.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neighbors/NearestNeighbors.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neighbors/NearestNeighbors.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L19) |
| `id` | `string` | `undefined` | [generated/neighbors/NearestNeighbors.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neighbors/NearestNeighbors.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L17) |

## Accessors

### effective\_metric\_

#### Get Signature

> **get** **effective\_metric\_**(): `Promise`\<`string`\>

Metric used to compute distances to neighbors.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L444)

***

### effective\_metric\_params\_

#### Get Signature

> **get** **effective\_metric\_params\_**(): `Promise`\<`any`\>

Parameters for the metric used to compute distances to neighbors.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L471)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L525)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:498](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L498)

***

### n\_samples\_fit\_

#### Get Signature

> **get** **n\_samples\_fit\_**(): `Promise`\<`number`\>

Number of samples in the fitted data.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L552)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/neighbors/NearestNeighbors.ts:84](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L84)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L138)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the nearest neighbors estimator from the training dataset.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | Training data. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L155)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L196)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L97)

***

### kneighbors()

> **kneighbors**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Find the K-neighbors of a point.

Returns indices of and distances to the neighbors of each point.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.n_neighbors`? | `number` | Number of neighbors required for each sample. The default is the value passed to the constructor. |
| `opts.return_distance`? | `boolean` | Whether or not to return the distances. |
| `opts.X`? | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L234)

***

### kneighbors\_graph()

> **kneighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of k-Neighbors for points in X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.mode`? | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class. |
| `opts.n_neighbors`? | `number` | Number of neighbors for each sample. The default is the value passed to the constructor. |
| `opts.X`? | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. For `metric='precomputed'` the shape should be (n_queries, n_indexed). Otherwise the shape should be (n_queries, n_features). |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L280)

***

### radius\_neighbors()

> **radius\_neighbors**(`opts`): `Promise`\<`any`\>

Find the neighbors within a given radius of a point or points.

Return the indices and distances of each point from the dataset lying in a ball with size `radius` around the points of the query array. Points lying on the boundary are included in the results.

The result points are *not* necessarily sorted by distance to their query point.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.radius`? | `number` | Limiting distance of neighbors to return. The default is the value passed to the constructor. |
| `opts.return_distance`? | `boolean` | Whether or not to return the distances. |
| `opts.sort_results`? | `boolean` | If `true`, the distances and indices will be sorted by increasing distances before being returned. If `false`, the results may not be sorted. If `return_distance=False`, setting `sort_results=True` will result in an error. |
| `opts.X`? | `any` | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L332)

***

### radius\_neighbors\_graph()

> **radius\_neighbors\_graph**(`opts`): `Promise`\<`any`[]\>

Compute the (weighted) graph of Neighbors for points in X.

Neighborhoods are restricted the points at a distance lower than radius.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.mode`? | `"connectivity"` \| `"distance"` | Type of returned matrix: ‘connectivity’ will return the connectivity matrix with ones and zeros, in ‘distance’ the edges are distances between points, type of distance depends on the selected metric parameter in NearestNeighbors class. |
| `opts.radius`? | `number` | Radius of neighborhoods. The default is the value passed to the constructor. |
| `opts.sort_results`? | `boolean` | If `true`, in each row of the result, the non-zero entries will be sorted by increasing distances. If `false`, the non-zero entries may not be sorted. Only used with mode=’distance’. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | The query point or points. If not provided, neighbors of each indexed point are returned. In this case, the query point is not considered its own neighbor. |

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/neighbors/NearestNeighbors.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/NearestNeighbors.ts#L389)
