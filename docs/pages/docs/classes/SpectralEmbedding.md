# SpectralEmbedding

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralEmbedding(opts?: object): SpectralEmbedding;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.affinity?` | `"precomputed"` \| `"rbf"` \| `"nearest_neighbors"` \| `"precomputed_nearest_neighbors"` | ‘nearest\_neighbors’ : construct the affinity matrix by computing a graph of nearest neighbors.  `Default Value`  `'nearest_neighbors'` |
| `opts.eigen_solver?` | `"arpack"` \| `"lobpcg"` \| `"amg"` | The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems. If `undefined`, then `'arpack'` is used. |
| `opts.eigen_tol?` | `number` | Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:  `Default Value`  `'auto'` |
| `opts.gamma?` | `number` | Kernel coefficient for rbf kernel. If `undefined`, gamma will be set to 1/n\_features. |
| `opts.n_components?` | `number` | The dimension of the projected subspace.  `Default Value`  `2` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.n_neighbors?` | `number` | Number of nearest neighbors for nearest\_neighbors graph building. If `undefined`, n\_neighbors will be set to max(n\_samples/10, 1). |
| `opts.random_state?` | `number` | A pseudo random number generator used for the initialization of the lobpcg eigen vectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See Glossary). |

### Returns

[`SpectralEmbedding`](SpectralEmbedding.md)

Defined in:  [generated/manifold/SpectralEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/SpectralEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/SpectralEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/SpectralEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L23)

### id

> `string`

Defined in:  [generated/manifold/SpectralEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L20)

### opts

> `any`

Defined in:  [generated/manifold/SpectralEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L21)

## Accessors

### affinity\_matrix\_

Affinity\_matrix constructed from samples or precomputed.

#### Signature

```ts
affinity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/manifold/SpectralEmbedding.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L275)

### embedding\_

Spectral embedding of the training matrix.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/manifold/SpectralEmbedding.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L248)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/SpectralEmbedding.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L329)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/SpectralEmbedding.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L302)

### n\_neighbors\_

Number of nearest neighbors effectively used.

#### Signature

```ts
n_neighbors_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/SpectralEmbedding.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L356)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/SpectralEmbedding.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L82)

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

Defined in: [generated/manifold/SpectralEmbedding.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L86)

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

Defined in:  [generated/manifold/SpectralEmbedding.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L145)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.  If affinity is “precomputed” X : {array-like, sparse matrix}, shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/SpectralEmbedding.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L162)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.  If affinity is “precomputed” X : {array-like, sparse matrix} of shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/manifold/SpectralEmbedding.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L204)

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

Defined in:  [generated/manifold/SpectralEmbedding.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L95)
