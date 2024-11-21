[**sklearn**](../README.md) • **Docs**

***

Apply clustering to a projection of the normalized Laplacian.

In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](#r5f6cbeb1558e-1), [\[2\]](#r5f6cbeb1558e-2).

When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html)

## Constructors

### new SpectralClustering()

> **new SpectralClustering**(`opts`?): [`SpectralClustering`](SpectralClustering.md)

#### Parameters

• **opts?**

• **opts.affinity?**: `string`

‘nearest\_neighbors’: construct the affinity matrix by computing a graph of nearest neighbors.

**Default Value**

`'rbf'`

• **opts.assign\_labels?**: `"kmeans"` \| `"discretize"` \| `"cluster_qr"`

The strategy for assigning labels in the embedding space. There are two ways to assign labels after the Laplacian embedding. k-means is a popular choice, but it can be sensitive to initialization. Discretization is another approach which is less sensitive to random initialization [\[3\]](#r5f6cbeb1558e-3). The cluster\_qr method [\[5\]](#r5f6cbeb1558e-5) directly extract clusters from eigenvectors in spectral clustering. In contrast to k-means and discretization, cluster\_qr has no tuning parameters and runs no iterations, yet may outperform k-means and discretization in terms of both quality and speed.

**Default Value**

`'kmeans'`

• **opts.coef0?**: `number`

Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels.

**Default Value**

`1`

• **opts.degree?**: `number`

Degree of the polynomial kernel. Ignored by other kernels.

**Default Value**

`3`

• **opts.eigen\_solver?**: `"arpack"` \| `"lobpcg"` \| `"amg"`

The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems, but may also lead to instabilities. If `undefined`, then `'arpack'` is used. See [\[4\]](#r5f6cbeb1558e-4) for more details regarding `'lobpcg'`.

• **opts.eigen\_tol?**: `number`

Stopping criterion for eigen decomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

**Default Value**

`'auto'`

• **opts.gamma?**: `number`

Kernel coefficient for rbf, poly, sigmoid, laplacian and chi2 kernels. Ignored for `affinity='nearest\_neighbors'`, `affinity='precomputed'` or `affinity='precomputed\_nearest\_neighbors'`.

**Default Value**

`1`

• **opts.kernel\_params?**: `any`

Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels.

• **opts.n\_clusters?**: `number`

The dimension of the projection subspace.

**Default Value**

`8`

• **opts.n\_components?**: `number`

Number of eigenvectors to use for the spectral embedding. If `undefined`, defaults to `n\_clusters`.

• **opts.n\_init?**: `number`

Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n\_init consecutive runs in terms of inertia. Only used if `assign\_labels='kmeans'`.

**Default Value**

`10`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run when `affinity='nearest\_neighbors'` or `affinity='precomputed\_nearest\_neighbors'`. The neighbors search will be done in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.n\_neighbors?**: `number`

Number of neighbors to use when constructing the affinity matrix using the nearest neighbors method. Ignored for `affinity='rbf'`.

**Default Value**

`10`

• **opts.random\_state?**: `number`

A pseudo random number generator used for the initialization of the lobpcg eigenvectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](../../glossary.html#term-random_state)).

• **opts.verbose?**: `boolean`

Verbosity mode.

**Default Value**

`false`

#### Returns

[`SpectralClustering`](SpectralClustering.md)

#### Defined in

[generated/cluster/SpectralClustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/cluster/SpectralClustering.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/cluster/SpectralClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/cluster/SpectralClustering.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/cluster/SpectralClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L21)

## Accessors

### affinity\_matrix\_

#### Get Signature

> **get** **affinity\_matrix\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Affinity matrix used for clustering. Available only after calling `fit`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/cluster/SpectralClustering.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L318)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L399)

***

### labels\_

#### Get Signature

> **get** **labels\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Labels of each point

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L345)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L372)

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

[generated/cluster/SpectralClustering.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L127)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L183)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform spectral clustering from features, or affinity matrix.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed\_nearest\_neighbors`. If a sparse matrix is provided in a format other than `csr\_matrix`, `csc\_matrix`, or `coo\_matrix`, it will be converted into a sparse `csr\_matrix`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/cluster/SpectralClustering.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L200)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Perform spectral clustering on `X` and return cluster labels.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed\_nearest\_neighbors`. If a sparse matrix is provided in a format other than `csr\_matrix`, `csc\_matrix`, or `coo\_matrix`, it will be converted into a sparse `csr\_matrix`.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/cluster/SpectralClustering.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L239)

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

[generated/cluster/SpectralClustering.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L282)

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

[generated/cluster/SpectralClustering.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L140)
