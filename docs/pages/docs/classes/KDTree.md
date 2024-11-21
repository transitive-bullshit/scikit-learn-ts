# Class: KDTree

KDTree for fast generalized N-point problems

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../neighbors.html#unsupervised-neighbors).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KDTree.html)

## Constructors

### new KDTree()

> **new KDTree**(`opts`?): [`KDTree`](KDTree.md)

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

`opts.leaf_size`?

</td>
<td>

`any`

</td>
<td>

Number of points at which to switch to brute-force. Changing leaf_size will not affect the results of a query, but can significantly impact the speed of a query and the memory required to store the constructed tree. The amount of memory needed to store the tree scales as approximately n_samples / leaf_size. For a specified `leaf_size`, a leaf node is guaranteed to satisfy `leaf_size <= n_points <= 2 \* leaf_size`, except in the case that `n_samples < leaf_size`.

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

Metric to use for distance computation. Default is “minkowski”, which results in the standard Euclidean distance when p = 2. A list of valid metrics for KDTree is given by the attribute `valid_metrics`. See the documentation of [scipy.spatial.distance](https://docs.scipy.org/doc/scipy/reference/spatial.distance.html) and the metrics listed in [`distance_metrics`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.distance_metrics.html#sklearn.metrics.pairwise.distance_metrics "sklearn.metrics.pairwise.distance_metrics") for more information on any distance metric.

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

n_samples is the number of points in the data set, and n_features is the dimension of the parameter space. Note: if X is a C-contiguous array of doubles then data will not be copied. Otherwise, an internal copy will be made.

</td>
</tr>
</tbody>
</table>

**Returns** [`KDTree`](KDTree.md)

**Defined in** [generated/neighbors/KDTree.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/neighbors/KDTree.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/neighbors/KDTree.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/neighbors/KDTree.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L19) |
| `id` | `string` | `undefined` | [generated/neighbors/KDTree.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L16) |
| `opts` | `any` | `undefined` | [generated/neighbors/KDTree.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L17) |

## Accessors

### data

**Get Signature**

> **get** **data**(): `Promise`\<`any`\>

The training data

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L460)

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

**Defined in** [generated/neighbors/KDTree.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L47)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/neighbors/KDTree.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L98)

***

### get\_arrays()

> **get\_arrays**(`opts`): `Promise`\<`any`\>

Get data and node arrays.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L115)

***

### get\_n\_calls()

> **get\_n\_calls**(`opts`): `Promise`\<`any`\>

Get number of calls.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L141)

***

### get\_tree\_stats()

> **get\_tree\_stats**(`opts`): `Promise`\<`any`\>

Get tree status.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L167)

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

**Defined in** [generated/neighbors/KDTree.ts:60](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L60)

***

### kernel\_density()

> **kernel\_density**(`opts`): `Promise`\<`any`\>

Compute the kernel density estimate at points X with the given kernel, using the distance metric specified at tree creation.

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

`opts.atol`?

</td>
<td>

`number`

</td>
<td>

Specify the desired absolute tolerance of the result. If the true result is `K_true`, then the returned result `K_ret` satisfies `abs(K_true \- K_ret) < atol + rtol \* K_ret` The default is zero (i.e. machine precision).

</td>
</tr>
<tr>
<td>

`opts.breadth_first`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, use a breadth-first search. If `false` (default) use a depth-first search. Breadth-first is generally faster for compact kernels and/or high tolerances.

</td>
</tr>
<tr>
<td>

`opts.h`?

</td>
<td>

`number`

</td>
<td>

the bandwidth of the kernel

</td>
</tr>
<tr>
<td>

`opts.kernel`?

</td>
<td>

`string`

</td>
<td>

specify the kernel to use. Options are - ‘gaussian’ - ‘tophat’ - ‘epanechnikov’ - ‘exponential’ - ‘linear’ - ‘cosine’ Default is kernel = ‘gaussian’

</td>
</tr>
<tr>
<td>

`opts.return_log`?

</td>
<td>

`boolean`

</td>
<td>

Return the logarithm of the result. This can be more accurate than returning the result itself for narrow kernels.

</td>
</tr>
<tr>
<td>

`opts.rtol`?

</td>
<td>

`number`

</td>
<td>

Specify the desired relative tolerance of the result. If the true result is `K_true`, then the returned result `K_ret` satisfies `abs(K_true \- K_ret) < atol + rtol \* K_ret` The default is `1e-8` (i.e. machine precision).

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

An array of points to query. Last dimension should match dimension of training data.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:193](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L193)

***

### query()

> **query**(`opts`): `Promise`\<`any`\>

query the tree for the k nearest neighbors

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

`opts.breadth_first`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, then query the nodes in a breadth-first manner. Otherwise, query the nodes in a depth-first manner.

</td>
</tr>
<tr>
<td>

`opts.dualtree`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, use the dual tree formalism for the query: a tree is built for the query points, and the pair of trees is used to efficiently search this space. This can lead to better performance as the number of points grows large.

</td>
</tr>
<tr>
<td>

`opts.k`?

</td>
<td>

`number`

</td>
<td>

The number of nearest neighbors to return

</td>
</tr>
<tr>
<td>

`opts.return_distance`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, return a tuple (d, i) of distances and indices if `false`, return array i

</td>
</tr>
<tr>
<td>

`opts.sort_results`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, then distances and indices of each point are sorted on return, so that the first column contains the closest points. Otherwise, neighbors are returned in an arbitrary order.

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

An array of points to query

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L265)

***

### query\_radius()

> **query\_radius**(`opts`): `Promise`\<`any`\>

query the tree for neighbors within a radius r

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

`opts.count_only`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, return only the count of points within distance r if `false`, return the indices of all points within distance r If return_distance==`true`, setting count_only=`true` will result in an error.

</td>
</tr>
<tr>
<td>

`opts.r`?

</td>
<td>

`any`

</td>
<td>

r can be a single value, or an array of values of shape x.shape\[:-1\] if different radii are desired for each point.

</td>
</tr>
<tr>
<td>

`opts.return_distance`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, return distances to neighbors of each point if `false`, return only neighbors Note that unlike the query() method, setting return_distance=`true` here adds to the computation time. Not all distances need to be calculated explicitly for return_distance=`false`. Results are not sorted by default: see `sort_results` keyword.

</td>
</tr>
<tr>
<td>

`opts.sort_results`?

</td>
<td>

`boolean`

</td>
<td>

if `true`, the distances and indices will be sorted before being returned. If `false`, the results will not be sorted. If return_distance == `false`, setting sort_results = `true` will result in an error.

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

An array of points to query

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L332)

***

### reset\_n\_calls()

> **reset\_n\_calls**(`opts`): `Promise`\<`any`\>

Reset number of calls to 0.

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

`opts`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/neighbors/KDTree.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L390)

***

### two\_point\_correlation()

> **two\_point\_correlation**(`opts`): `Promise`\<`ArrayLike`\>

Compute the two-point correlation function

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

`opts.dualtree`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, use a dualtree algorithm. Otherwise, use a single-tree algorithm. Dual tree algorithms can have better scaling for large N.

</td>
</tr>
<tr>
<td>

`opts.r`?

</td>
<td>

`ArrayLike`

</td>
<td>

A one-dimensional array of distances

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

An array of points to query. Last dimension should match dimension of training data.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/neighbors/KDTree.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/neighbors/KDTree.ts#L416)
