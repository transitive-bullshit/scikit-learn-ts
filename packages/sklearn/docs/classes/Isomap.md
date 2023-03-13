# Isomap

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the [User Guide](../manifold.html#isomap).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)

## Constructors

## constructor()

### Signature

```ts
new Isomap(opts?: object): Isomap;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.eigen_solver?` | `"auto"` \| `"arpack"` \| `"dense"` | ‘auto’ : Attempt to choose the most efficient solver for the given problem.  ‘arpack’ : Use Arnoldi decomposition to find the eigenvalues and eigenvectors.  ‘dense’ : Use a direct solver (i.e. LAPACK) for the eigenvalue decomposition.  `Default Value`  `'auto'` |
| `opts.max_iter?` | `number` | Maximum number of iterations for the arpack solver. not used if eigen\_solver == ‘dense’. |
| `opts.metric?` | `any` | The metric to use when calculating distance between instances in a feature array. If metric is a string or callable, it must be one of the options allowed by [`sklearn.metrics.pairwise\_distances`](sklearn.metrics.pairwise_distances.html#sklearn.metrics.pairwise_distances "sklearn.metrics.pairwise_distances") for its metric parameter. If metric is “precomputed”, X is assumed to be a distance matrix and must be square. X may be a [Glossary](../../glossary.html#term-sparse-graph).  `Default Value`  `'minkowski'` |
| `opts.metric_params?` | `any` | Additional keyword arguments for the metric function. |
| `opts.n_components?` | `number` | Number of coordinates for the manifold.  `Default Value`  `2` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors?` | `number` | Number of neighbors to consider for each point. If `n\_neighbors` is an int, then `radius` must be `undefined`.  `Default Value`  `5` |
| `opts.neighbors_algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm to use for nearest neighbors search, passed to neighbors.NearestNeighbors instance.  `Default Value`  `'auto'` |
| `opts.p?` | `number` | Parameter for the Minkowski metric from sklearn.metrics.pairwise.pairwise\_distances. When p = 1, this is equivalent to using manhattan\_distance (l1), and euclidean\_distance (l2) for p = 2. For arbitrary p, minkowski\_distance (l\_p) is used.  `Default Value`  `2` |
| `opts.path_method?` | `"auto"` \| `"FW"` \| `"D"` | Method to use in finding shortest path.  ‘auto’ : attempt to choose the best algorithm automatically.  ‘FW’ : Floyd-Warshall algorithm.  ‘D’ : Dijkstra’s algorithm.  `Default Value`  `'auto'` |
| `opts.radius?` | `number` | Limiting distance of neighbors to return. If `radius` is a float, then `n\_neighbors` must be set to `undefined`. |
| `opts.tol?` | `number` | Convergence tolerance passed to arpack or lobpcg. not used if eigen\_solver == ‘dense’.  `Default Value`  `0` |

### Returns

[`Isomap`](Isomap.md)

Defined in:  [generated/manifold/Isomap.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/Isomap.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/Isomap.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/Isomap.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L21)

### id

> `string`

Defined in:  [generated/manifold/Isomap.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L18)

### opts

> `any`

Defined in:  [generated/manifold/Isomap.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L19)

## Accessors

### dist\_matrix\_

Stores the geodesic distance matrix of training data.

#### Signature

```ts
dist_matrix_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/Isomap.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L478)

Defined in:  [generated/manifold/Isomap.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L478)

### embedding\_

Stores the embedding vectors.

#### Signature

```ts
embedding_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/Isomap.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L410)

Defined in:  [generated/manifold/Isomap.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L410)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/Isomap.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L524)

Defined in:  [generated/manifold/Isomap.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L524)

### kernel\_pca\_

[`KernelPCA`](sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.

#### Signature

```ts
kernel_pca_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L433)

Defined in:  [generated/manifold/Isomap.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L433)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/Isomap.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L501)

Defined in:  [generated/manifold/Isomap.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L501)

### nbrs\_

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Signature

```ts
nbrs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L456)

Defined in:  [generated/manifold/Isomap.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L456)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/Isomap.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L116)

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

Defined in:  [generated/manifold/Isomap.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L120)

Defined in:  [generated/manifold/Isomap.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L116) [generated/manifold/Isomap.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L120)

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

Defined in:  [generated/manifold/Isomap.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L180)

### fit()

Compute the embedding vectors for data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Sample data, shape = (n\_samples, n\_features), in the form of a numpy array, sparse matrix, precomputed tree, or NearestNeighbors object. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L197)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/Isomap.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L235)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.manifold.Isomap.fit "sklearn.manifold.Isomap.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L275)

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

Defined in:  [generated/manifold/Isomap.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L129)

### reconstruction\_error()

Compute the reconstruction error for the embedding.

#### Signature

```ts
reconstruction_error(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.reconstruction_error?` | `number` | Reconstruction error. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L308)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L344)

### transform()

Transform X.

This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n\_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | If neighbors\_algorithm=’precomputed’, X is assumed to be a distance matrix or a sparse graph of shape (n\_queries, n\_samples\_fit). |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/Isomap.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/Isomap.ts#L379)
