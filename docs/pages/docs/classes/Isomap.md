# Class: Isomap

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#isomap).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)

## Constructors

### new Isomap()

> **new Isomap**(`opts`?): [`Isomap`](Isomap.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.eigen_solver`? | `"auto"` \| `"arpack"` \| `"dense"` | ‘auto’ : Attempt to choose the most efficient solver for the given problem. ‘arpack’ : Use Arnoldi decomposition to find the eigenvalues and eigenvectors. ‘dense’ : Use a direct solver (i.e. LAPACK) for the eigenvalue decomposition. |
| `opts.max_iter`? | `number` | Maximum number of iterations for the arpack solver. not used if eigen_solver == ‘dense’. |
| `opts.metric`? | `any` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise_distances`](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sparse-graph). |
| `opts.metric_params`? | `any` | Additional keyword arguments for the metric function. |
| `opts.n_components`? | `number` | Number of coordinates for the manifold. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors`? | `number` | Number of neighbors to consider for each point. If `n_neighbors` is an int, then `radius` must be `undefined`. |
| `opts.neighbors_algorithm`? | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm to use for nearest neighbors search, passed to neighbors.NearestNeighbors instance. |
| `opts.p`? | `number` | Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise_distances. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used. |
| `opts.path_method`? | `"auto"` \| `"FW"` \| `"D"` | Method to use in finding shortest path. ‘auto’ : attempt to choose the best algorithm automatically. ‘FW’ : Floyd-Warshall algorithm. ‘D’ : Dijkstra’s algorithm. |
| `opts.radius`? | `number` | Limiting distance of neighbors to return. If `radius` is a float, then `n_neighbors` must be set to `undefined`. |
| `opts.tol`? | `number` | Convergence tolerance passed to arpack or lobpcg. not used if eigen_solver == ‘dense’. |

**Returns** [`Isomap`](Isomap.md)

**Defined in** [generated/manifold/Isomap.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/manifold/Isomap.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/manifold/Isomap.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/manifold/Isomap.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L21) |
| `id` | `string` | `undefined` | [generated/manifold/Isomap.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L18) |
| `opts` | `any` | `undefined` | [generated/manifold/Isomap.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L19) |

## Accessors

### dist\_matrix\_

**Get Signature**

> **get** **dist\_matrix\_**(): `Promise`\<`ArrayLike`\>

Stores the geodesic distance matrix of training data.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/Isomap.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L493)

***

### embedding\_

**Get Signature**

> **get** **embedding\_**(): `Promise`\<`ArrayLike`\>

Stores the embedding vectors.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/Isomap.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L425)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/Isomap.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L539)

***

### kernel\_pca\_

**Get Signature**

> **get** **kernel\_pca\_**(): `Promise`\<`any`\>

[`KernelPCA`](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L448)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/Isomap.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L516)

***

### nbrs\_

**Get Signature**

> **get** **nbrs\_**(): `Promise`\<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L471)

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

**Defined in** [generated/manifold/Isomap.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L116)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/manifold/Isomap.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L167)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the embedding vectors for data X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Sample data, shape = (n_samples, n_features), in the form of a numpy array, sparse matrix, precomputed tree, or NearestNeighbors object. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L184)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Fit the model from data in X and transform X.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | Training vector, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/Isomap.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L221)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L260)

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

**Defined in** [generated/manifold/Isomap.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L294)

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

**Defined in** [generated/manifold/Isomap.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L129)

***

### reconstruction\_error()

> **reconstruction\_error**(`opts`): `Promise`\<`any`\>

Compute the reconstruction error for the embedding.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.reconstruction_error`? | `number` | Reconstruction error. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L326)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/Isomap.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L360)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X.

This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `any` | If neighbors_algorithm=’precomputed’, X is assumed to be a distance matrix or a sparse graph of shape (n_queries, n_samples_fit). |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/Isomap.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/Isomap.ts#L394)
