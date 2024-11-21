[**sklearn**](../README.md) • **Docs**

***

Agglomerative Clustering.

Recursively merges pair of clusters of sample data; uses linkage distance.

Read more in the [User Guide](../clustering.html#hierarchical-clustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AgglomerativeClustering.html)

## Constructors

### new AgglomerativeClustering()

> **new AgglomerativeClustering**(`opts`?): [`AgglomerativeClustering`](AgglomerativeClustering.md)

#### Parameters

• **opts?**

• **opts.compute\_distances?**: `boolean`

Computes distances between clusters even if `distance\_threshold` is not used. This can be used to make dendrogram visualization, but introduces a computational and memory overhead.

**Default Value**

`false`

• **opts.compute\_full\_tree?**: `boolean` \| `"auto"`

Stop early the construction of the tree at `n\_clusters`. This is useful to decrease computation time if the number of clusters is not small compared to the number of samples. This option is useful only when specifying a connectivity matrix. Note also that when varying the number of clusters and using caching, it may be advantageous to compute the full tree. It must be `true` if `distance\_threshold` is not `undefined`. By default `compute\_full\_tree` is “auto”, which is equivalent to `true` when `distance\_threshold` is not `undefined` or that `n\_clusters` is inferior to the maximum between 100 or `0.02 \* n\_samples`. Otherwise, “auto” is equivalent to `false`.

**Default Value**

`'auto'`

• **opts.connectivity?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Connectivity matrix. Defines for each sample the neighboring samples following a given structure of the data. This can be a connectivity matrix itself or a callable that transforms the data into a connectivity matrix, such as derived from `kneighbors\_graph`. Default is `undefined`, i.e, the hierarchical clustering algorithm is unstructured.

For an example of connectivity matrix using [`kneighbors\_graph`](sklearn.neighbors.kneighbors_graph.html#sklearn.neighbors.kneighbors_graph "sklearn.neighbors.kneighbors_graph"), see [Agglomerative clustering with and without structure](../../auto_examples/cluster/plot_agglomerative_clustering.html#sphx-glr-auto-examples-cluster-plot-agglomerative-clustering-py).

• **opts.distance\_threshold?**: `number`

The linkage distance threshold at or above which clusters will not be merged. If not `undefined`, `n\_clusters` must be `undefined` and `compute\_full\_tree` must be `true`.

• **opts.linkage?**: `"ward"` \| `"complete"` \| `"average"` \| `"single"`

Which linkage criterion to use. The linkage criterion determines which distance to use between sets of observation. The algorithm will merge the pairs of cluster that minimize this criterion.

**Default Value**

`'ward'`

• **opts.memory?**: `string`

Used to cache the output of the computation of the tree. By default, no caching is done. If a string is given, it is the path to the caching directory.

• **opts.metric?**: `string`

Metric used to compute the linkage. Can be “euclidean”, “l1”, “l2”, “manhattan”, “cosine”, or “precomputed”. If linkage is “ward”, only “euclidean” is accepted. If “precomputed”, a distance matrix is needed as input for the fit method.

**Default Value**

`'euclidean'`

• **opts.n\_clusters?**: `number`

The number of clusters to find. It must be `undefined` if `distance\_threshold` is not `undefined`.

**Default Value**

`2`

#### Returns

[`AgglomerativeClustering`](AgglomerativeClustering.md)

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L19)

## Accessors

### children\_

#### Get Signature

> **get** **children\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The children of each non-leaf node. Values less than `n\_samples` correspond to leaves of the tree which are the original samples. A node `i` greater than or equal to `n\_samples` is a non-leaf node and has children `children\_\[i \- n\_samples\]`. Alternatively at the i-th iteration, children\[i\]\[0\] and children\[i\]\[1\] are merged to form node `n\_samples + i`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L437)

***

### distances\_

#### Get Signature

> **get** **distances\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Distances between nodes in the corresponding place in `children\_`. Only computed if `distance\_threshold` is used or `compute\_distances` is set to `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:464](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L464)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L410)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Cluster labels for each point.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L302)

***

### n\_clusters\_

#### Get Signature

> **get** **n\_clusters\_**(): `Promise`\<`number`\>

The number of clusters found by the algorithm. If `distance\_threshold=None`, it will be equal to the given `n\_clusters`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L275)

***

### n\_connected\_components\_

#### Get Signature

> **get** **n\_connected\_components\_**(): `Promise`\<`number`\>

The estimated number of connected components in the graph.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L356)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L383)

***

### n\_leaves\_

#### Get Signature

> **get** **n\_leaves\_**(): `Promise`\<`number`\>

Number of leaves in the hierarchical tree.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L329)

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

[generated/cluster/AgglomerativeClustering.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L82)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L138)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the hierarchical clustering from features, or distance matrix.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training instances to cluster, or distances between instances if `metric='precomputed'`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L155)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Fit and return the result of each sample’s clustering assignment.

In addition to fitting, this method also return the result of the clustering assignment for each sample in the training set.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training instances to cluster, or distances between instances if `affinity='precomputed'`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L196)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/AgglomerativeClustering.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L239)

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

[generated/cluster/AgglomerativeClustering.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/cluster/AgglomerativeClustering.ts#L95)
