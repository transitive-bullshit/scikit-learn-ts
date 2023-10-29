# KDTree

KDTree for fast generalized N-point problems

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html)

## Constructors

## constructor()

### Signature

```ts
new KDTree(opts?: object): KDTree;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.X?` | `ArrayLike`[] | n\_samples is the number of points in the data set, and n\_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made. |
| `opts.leaf_size?` | `any` | Number of points at which to switch to brute-force. Changing leaf\_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n\_samples / leaf\_size. For a specified `leaf\_size`, a leaf node is guaranteed to satisfy `leaf\_size <= n\_points <= 2 \* leaf\_size`, except in the case that `n\_samples < leaf\_size`.  `Default Value`  `40` |
| `opts.metric?` | `string` | Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. A list of valid metrics for KDTree is given by `KDTree.valid\_metrics`. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance\_metrics`](sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information on any distance metric.  `Default Value`  `'minkowski'` |

### Returns

[`KDTree`](KDTree.md)

Defined in:  [generated/neighbors/KDTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L23)

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

Defined in:  [generated/neighbors/KDTree.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L101)

### get\_arrays()

Get data and node arrays.

#### Signature

```ts
get_arrays(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L118)

### get\_n\_calls()

Get number of calls.

#### Signature

```ts
get_n_calls(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L144)

### get\_tree\_stats()

Get tree status.

#### Signature

```ts
get_tree_stats(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L170)

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

Defined in:  [generated/neighbors/KDTree.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L60)

### kernel\_density()

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

#### Signature

```ts
kernel_density(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | An array of points to query. Last dimension should match dimension of training data. |
| `opts.atol?` | `number` | Specify the desired absolute tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is zero (i.e. machine precision).  `Default Value`  `0` |
| `opts.breadth_first?` | `boolean` | If `true`, use a breadth-first search. If `false` (default) use a depth-first search. Breadth-first is generally faster for compact kernels and/or high tolerances.  `Default Value`  `false` |
| `opts.h?` | `number` | the bandwidth of the kernel |
| `opts.kernel?` | `string` | specify the kernel to use. Options are - ‘gaussian’ - ‘tophat’ - ‘epanechnikov’ - ‘exponential’ - ‘linear’ - ‘cosine’ Default is kernel = ‘gaussian’  `Default Value`  `'gaussian'` |
| `opts.return_log?` | `boolean` | Return the logarithm of the result. This can be more accurate than returning the result itself for narrow kernels.  `Default Value`  `false` |
| `opts.rtol?` | `number` | Specify the desired relative tolerance of the result. If the true result is `K\_true`, then the returned result `K\_ret` satisfies `abs(K\_true \- K\_ret) < atol + rtol \* K\_ret` The default is `1e-8` (i.e. machine precision).  `Default Value`  `1e-8` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L196)

### query()

query the tree for the k nearest neighbors

#### Signature

```ts
query(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | An array of points to query |
| `opts.breadth_first?` | `boolean` | if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner.  `Default Value`  `false` |
| `opts.dualtree?` | `boolean` | if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large.  `Default Value`  `false` |
| `opts.k?` | `number` | The number of nearest neighbors to return  `Default Value`  `1` |
| `opts.return_distance?` | `boolean` | if `true`, return a tuple (d, i) of distances and indices if `false`, return array i  `Default Value`  `true` |
| `opts.sort_results?` | `boolean` | if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order.  `Default Value`  `true` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L275)

### query\_radius()

query the tree for neighbors within a radius r

#### Signature

```ts
query_radius(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | An array of points to query |
| `opts.count_only?` | `boolean` | if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return\_distance==`true`, setting count\_only=`true` will result in an error.  `Default Value`  `false` |
| `opts.r?` | `any` | r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point. |
| `opts.return_distance?` | `boolean` | if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return\_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return\_distance=`false`. Results are not sorted by default: see `sort\_results` keyword.  `Default Value`  `false` |
| `opts.sort_results?` | `boolean` | if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return\_distance == `false`, setting sort\_results = `true` will result in an error.  `Default Value`  `false` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L349)

### reset\_n\_calls()

Reset number of calls to 0.

#### Signature

```ts
reset_n_calls(opts: object): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `object` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neighbors/KDTree.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L414)

### two\_point\_correlation()

Compute the two-point correlation function

#### Signature

```ts
two_point_correlation(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | An array of points to query. Last dimension should match dimension of training data. |
| `opts.dualtree?` | `boolean` | If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N.  `Default Value`  `false` |
| `opts.r?` | `ArrayLike` | A one-dimensional array of distances |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/neighbors/KDTree.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L440)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neighbors/KDTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neighbors/KDTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/neighbors/KDTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L19)

### id

> `string`

Defined in:  [generated/neighbors/KDTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L16)

### opts

> `any`

Defined in:  [generated/neighbors/KDTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L17)

## Accessors

### data

The training data

#### Signature

```ts
data(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/neighbors/KDTree.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L487)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neighbors/KDTree.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L47)

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

Defined in: [generated/neighbors/KDTree.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0466da7/packages/sklearn/src/generated/neighbors/KDTree.ts#L51)
