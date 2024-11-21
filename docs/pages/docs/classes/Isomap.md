**sklearn** • **Docs**

***

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)

## Constructors

### new Isomap()

> **new Isomap**(`opts`?): [`Isomap`](Isomap.md)

#### Parameters

• **opts?**

• **opts.eigen\_solver?**: `"auto"` \| `"arpack"` \| `"dense"`

‘auto’ : Attempt to choose the most efficient solver for the given problem.

‘arpack’ : Use Arnoldi decomposition to find the eigenvalues and eigenvectors.

‘dense’ : Use a direct solver (i.e. LAPACK) for the eigenvalue decomposition.

**Default Value**

`'auto'`

• **opts.max\_iter?**: `number`

Maximum number of iterations for the arpack solver. not used if eigen\_solver == ‘dense’.

• **opts.metric?**: `any`

The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a Glossary.

**Default Value**

`'minkowski'`

• **opts.metric\_params?**: `any`

Additional keyword arguments for the metric function.

• **opts.n\_components?**: `number`

Number of coordinates for the manifold.

**Default Value**

`2`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_neighbors?**: `number`

Number of neighbors to consider for each point. If `n\_neighbors` is an int, then `radius` must be `undefined`.

**Default Value**

`5`

• **opts.neighbors\_algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm to use for nearest neighbors search, passed to neighbors.NearestNeighbors instance.

**Default Value**

`'auto'`

• **opts.p?**: `number`

Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.

**Default Value**

`2`

• **opts.path\_method?**: `"auto"` \| `"FW"` \| `"D"`

Method to use in finding shortest path.

‘auto’ : attempt to choose the best algorithm automatically.

‘FW’ : Floyd-Warshall algorithm.

‘D’ : Dijkstra’s algorithm.

**Default Value**

`'auto'`

• **opts.radius?**: `number`

Limiting distance of neighbors to return. If `radius` is a float, then `n\_neighbors` must be set to `undefined`.

• **opts.tol?**: `number`

Convergence tolerance passed to arpack or lobpcg. not used if eigen\_solver == ‘dense’.

**Default Value**

`0`

#### Returns

[`Isomap`](Isomap.md)

#### Defined in

[generated/manifold/Isomap.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/Isomap.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/Isomap.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/Isomap.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/manifold/Isomap.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/manifold/Isomap.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L19)

## Accessors

### dist\_matrix\_

#### Get Signature

> **get** **dist\_matrix\_**(): `Promise`\<`ArrayLike`\>

Stores the geodesic distance matrix of training data.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/Isomap.ts:493](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L493)

***

### embedding\_

#### Get Signature

> **get** **embedding\_**(): `Promise`\<`ArrayLike`\>

Stores the embedding vectors.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/Isomap.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L425)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/Isomap.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L539)

***

### kernel\_pca\_

#### Get Signature

> **get** **kernel\_pca\_**(): `Promise`\<`any`\>

[`KernelPCA`](sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L448)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/Isomap.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L516)

***

### nbrs\_

#### Get Signature

> **get** **nbrs\_**(): `Promise`\<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:471](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L471)

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

[generated/manifold/Isomap.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L116)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/Isomap.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L167)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the embedding vectors for data X.

#### Parameters

• **opts**

• **opts.X?**: `any`

Sample data, shape = (n\_samples, n\_features), in the form of a numpy array, sparse matrix, precomputed tree, or NearestNeighbors object.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L184)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Fit the model from data in X and transform X.

#### Parameters

• **opts**

• **opts.X?**: `any`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/Isomap.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L221)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L260)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L294)

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

[generated/manifold/Isomap.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L129)

***

### reconstruction\_error()

> **reconstruction\_error**(`opts`): `Promise`\<`any`\>

Compute the reconstruction error for the embedding.

#### Parameters

• **opts**

• **opts.reconstruction\_error?**: `number`

Reconstruction error.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:326](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L326)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/Isomap.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L360)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform X.

This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n\_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.

#### Parameters

• **opts**

• **opts.X?**: `any`

If neighbors\_algorithm=’precomputed’, X is assumed to be a distance matrix or a sparse graph of shape (n\_queries, n\_samples\_fit).

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/Isomap.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/Isomap.ts#L394)
