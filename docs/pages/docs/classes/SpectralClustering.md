# Class: SpectralClustering

Apply clustering to a projection of the normalized Laplacian.

In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-1), [\[2\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-2).

When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html)

## Constructors

### new SpectralClustering()

> **new SpectralClustering**(`opts`?): [`SpectralClustering`](SpectralClustering.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.affinity`? | `string` | ‘nearest_neighbors’: construct the affinity matrix by computing a graph of nearest neighbors. |
| `opts.assign_labels`? | `"kmeans"` \| `"discretize"` \| `"cluster_qr"` | The strategy for assigning labels in the embedding space. There are two ways to assign labels after the Laplacian embedding. k-means is a popular choice, but it can be sensitive to initialization. Discretization is another approach which is less sensitive to random initialization [\[3\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-3). The cluster_qr method [\[5\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-5) directly extract clusters from eigenvectors in spectral clustering. In contrast to k-means and discretization, cluster_qr has no tuning parameters and runs no iterations, yet may outperform k-means and discretization in terms of both quality and speed. |
| `opts.coef0`? | `number` | Zero coefficient for polynomial and sigmoid kernels. Ignored by other kernels. |
| `opts.degree`? | `number` | Degree of the polynomial kernel. Ignored by other kernels. |
| `opts.eigen_solver`? | `"arpack"` \| `"lobpcg"` \| `"amg"` | The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems, but may also lead to instabilities. If `undefined`, then `'arpack'` is used. See [\[4\]](https://scikit-learn.org/stable/modules/generated/#r5f6cbeb1558e-4) for more details regarding `'lobpcg'`. |
| `opts.eigen_tol`? | `number` | Stopping criterion for eigen decomposition of the Laplacian matrix. If `eigen_tol="auto"` then the passed tolerance will depend on the `eigen_solver`: |
| `opts.gamma`? | `number` | Kernel coefficient for rbf, poly, sigmoid, laplacian and chi2 kernels. Ignored for `affinity='nearest_neighbors'`, `affinity='precomputed'` or `affinity='precomputed_nearest_neighbors'`. |
| `opts.kernel_params`? | `any` | Parameters (keyword arguments) and values for kernel passed as callable object. Ignored by other kernels. |
| `opts.n_clusters`? | `number` | The dimension of the projection subspace. |
| `opts.n_components`? | `number` | Number of eigenvectors to use for the spectral embedding. If `undefined`, defaults to `n_clusters`. |
| `opts.n_init`? | `number` | Number of time the k-means algorithm will be run with different centroid seeds. The final results will be the best output of n_init consecutive runs in terms of inertia. Only used if `assign_labels='kmeans'`. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run when `affinity='nearest_neighbors'` or `affinity='precomputed_nearest_neighbors'`. The neighbors search will be done in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors`? | `number` | Number of neighbors to use when constructing the affinity matrix using the nearest neighbors method. Ignored for `affinity='rbf'`. |
| `opts.random_state`? | `number` | A pseudo random number generator used for the initialization of the lobpcg eigenvectors decomposition when `eigen_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state)). |
| `opts.verbose`? | `boolean` | Verbosity mode. |

**Returns** [`SpectralClustering`](SpectralClustering.md)

**Defined in** [generated/cluster/SpectralClustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/SpectralClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/SpectralClustering.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/SpectralClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L23) |
| `id` | `string` | `undefined` | [generated/cluster/SpectralClustering.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L20) |
| `opts` | `any` | `undefined` | [generated/cluster/SpectralClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L21) |

## Accessors

### affinity\_matrix\_

**Get Signature**

> **get** **affinity\_matrix\_**(): `Promise`\<`ArrayLike`[]\>

Affinity matrix used for clustering. Available only after calling `fit`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/SpectralClustering.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L318)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/SpectralClustering.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L399)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Labels of each point

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/SpectralClustering.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L345)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/SpectralClustering.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L372)

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

**Defined in** [generated/cluster/SpectralClustering.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L127)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/SpectralClustering.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L183)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Perform spectral clustering from features, or affinity matrix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed_nearest_neighbors`. If a sparse matrix is provided in a format other than `csr_matrix`, `csc_matrix`, or `coo_matrix`, it will be converted into a sparse `csr_matrix`. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/cluster/SpectralClustering.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L200)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform spectral clustering on `X` and return cluster labels.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike` | Training instances to cluster, similarities / affinities between instances if `affinity='precomputed'`, or distances between instances if `affinity='precomputed_nearest_neighbors`. If a sparse matrix is provided in a format other than `csr_matrix`, `csc_matrix`, or `coo_matrix`, it will be converted into a sparse `csr_matrix`. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/SpectralClustering.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L239)

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

**Defined in** [generated/cluster/SpectralClustering.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L282)

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

**Defined in** [generated/cluster/SpectralClustering.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L140)
