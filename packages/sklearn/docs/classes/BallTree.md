# Class: BallTree

BallTree for fast generalized N-point problems

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.BallTree.html)

## Constructors

### new BallTree()

> **new BallTree**(`opts`?): [`BallTree`](BallTree.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.leaf_size`? | `any` | Number of points at which to switch to brute-force. Changing leaf_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n_samples / leaf_size. For a specified `leaf_size`, a leaf node is guaranteed to satisfy `leaf_size <= n_points <= 2 \* leaf_size`, except in the case that `n_samples < leaf_size`. |
| `opts.metric`? | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. A list of valid metrics for BallTree is given by the attribute `valid_metrics`. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance_metrics`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information on any distance metric. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | n_samples is the number of points in the data set, and n_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made. |

#### Returns

[`BallTree`](BallTree.md)

#### Defined in

[generated/neighbors/BallTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neighbors/BallTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neighbors/BallTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neighbors/BallTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L19) |
| `id` | `string` | `undefined` | [generated/neighbors/BallTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neighbors/BallTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L17) |

## Accessors

### data

#### Get Signature

> **get** **data**(): `Promise`\<`any`\>

The training data

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L462)

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

[generated/neighbors/BallTree.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L47)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/neighbors/BallTree.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L98)

***

### get\_arrays()

> **get\_arrays**(`opts`): `Promise`\<`any`\>

Get data and node arrays.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L115)

***

### get\_n\_calls()

> **get\_n\_calls**(`opts`): `Promise`\<`any`\>

Get number of calls.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L141)

***

### get\_tree\_stats()

> **get\_tree\_stats**(`opts`): `Promise`\<`any`\>

Get tree status.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L167)

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

[generated/neighbors/BallTree.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L60)

***

### kernel\_density()

> **kernel\_density**(`opts`): `Promise`\<`any`\>

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.atol`? | `number` | Specify the desired absolute tolerance of the result. If the true result is `K_true`, then the returned result `K_ret` satisfies `abs(K_true \- K_ret) < atol + rtol \* K_ret` The default is zero (i.e. machine precision). |
| `opts.breadth_first`? | `boolean` | If `true`, use a breadth-first search. If `false` (default) use a depth-first search. Breadth-first is generally faster for compact kernels and/or high tolerances. |
| `opts.h`? | `number` | the bandwidth of the kernel |
| `opts.kernel`? | `string` | specify the kernel to use. Options are - ‘gaussian’ - ‘tophat’ - ‘epanechnikov’ - ‘exponential’ - ‘linear’ - ‘cosine’ Default is kernel = ‘gaussian’ |
| `opts.return_log`? | `boolean` | Return the logarithm of the result. This can be more accurate than returning the result itself for narrow kernels. |
| `opts.rtol`? | `number` | Specify the desired relative tolerance of the result. If the true result is `K_true`, then the returned result `K_ret` satisfies `abs(K_true \- K_ret) < atol + rtol \* K_ret` The default is `1e-8` (i.e. machine precision). |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | An array of points to query. Last dimension should match dimension of training data. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L193)

***

### query()

> **query**(`opts`): `Promise`\<`any`\>

query the tree for the k nearest neighbors

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.breadth_first`? | `boolean` | if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner. |
| `opts.dualtree`? | `boolean` | if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large. |
| `opts.k`? | `number` | The number of nearest neighbors to return |
| `opts.return_distance`? | `boolean` | if `true`, return a tuple (d, i) of distances and indices if `false`, return array i |
| `opts.sort_results`? | `boolean` | if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | An array of points to query |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L265)

***

### query\_radius()

> **query\_radius**(`opts`): `Promise`\<`any`\>

query the tree for neighbors within a radius r

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.count_only`? | `boolean` | if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return_distance==`true`, setting count_only=`true` will result in an error. |
| `opts.r`? | `any` | r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point. |
| `opts.return_distance`? | `boolean` | if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return_distance=`false`. Results are not sorted by default: see `sort_results` keyword. |
| `opts.sort_results`? | `boolean` | if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return_distance == `false`, setting sort_results = `true` will result in an error. |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | An array of points to query |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L332)

***

### reset\_n\_calls()

> **reset\_n\_calls**(`opts`): `Promise`\<`any`\>

Reset number of calls to 0.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/neighbors/BallTree.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L390)

***

### two\_point\_correlation()

> **two\_point\_correlation**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Compute the two-point correlation function

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.dualtree`? | `boolean` | If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N. |
| `opts.r`? | [`ArrayLike`](../type-aliases/ArrayLike.md) | A one-dimensional array of distances |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | An array of points to query. Last dimension should match dimension of training data. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/neighbors/BallTree.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/neighbors/BallTree.ts#L416)
