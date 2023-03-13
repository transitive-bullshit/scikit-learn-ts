# SpectralCoclustering

Spectral Co-Clustering algorithm (Dhillon, 2001).

Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

Supports sparse matrices, as long as they are nonnegative.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralCoclustering(opts?: object): SpectralCoclustering;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.init?` | `ArrayLike`[] | Method for initialization of k-means algorithm; defaults to ‘k-means++’.  `Default Value`  `'k-means++'` |
| `opts.mini_batch?` | `boolean` | Whether to use mini-batch k-means, which is faster but may get different results.  `Default Value`  `false` |
| `opts.n_clusters?` | `number` | The number of biclusters to find.  `Default Value`  `3` |
| `opts.n_init?` | `number` | Number of random initializations that are tried with the k-means algorithm.  If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.  `Default Value`  `10` |
| `opts.n_svd_vecs?` | `number` | Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized`. |
| `opts.random_state?` | `number` | Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See Glossary. |
| `opts.svd_method?` | `"randomized"` \| `"arpack"` | Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, use [`sklearn.utils.extmath.randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, use [`scipy.sparse.linalg.svds`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.linalg.svds.html#scipy.sparse.linalg.svds "(in SciPy v1.10.1)"), which is more accurate, but possibly slower in some cases.  `Default Value`  `'randomized'` |

### Returns

[`SpectralCoclustering`](SpectralCoclustering.md)

Defined in:  [generated/cluster/SpectralCoclustering.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralCoclustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralCoclustering.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/SpectralCoclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L25)

### id

> `string`

Defined in:  [generated/cluster/SpectralCoclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L22)

### opts

> `any`

Defined in:  [generated/cluster/SpectralCoclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L23)

## Accessors

### column\_labels\_

The bicluster label of each column.

#### Signature

```ts
column_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/SpectralCoclustering.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L404)

### columns\_

Results of the clustering, like `rows`.

#### Signature

```ts
columns_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/SpectralCoclustering.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L350)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/SpectralCoclustering.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L458)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/SpectralCoclustering.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L431)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/SpectralCoclustering.ts:81](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L81)

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

Defined in: [generated/cluster/SpectralCoclustering.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L85)

### row\_labels\_

The bicluster label of each row.

#### Signature

```ts
row_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/cluster/SpectralCoclustering.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L377)

### rows\_

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Signature

```ts
rows_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in: [generated/cluster/SpectralCoclustering.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L323)

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

Defined in:  [generated/cluster/SpectralCoclustering.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L146)

### fit()

Create a biclustering for X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:163](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L163)

### get\_indices()

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Signature

```ts
get_indices(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.i?` | `number` | The index of the cluster. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L205)

### get\_shape()

Shape of the `i`’th bicluster.

#### Signature

```ts
get_shape(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.i?` | `number` | The index of the cluster. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L242)

### get\_submatrix()

Return the submatrix corresponding to bicluster `i`.

#### Signature

```ts
get_submatrix(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.data?` | `ArrayLike`[] | The data. |
| `opts.i?` | `number` | The index of the cluster. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L279)

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

Defined in:  [generated/cluster/SpectralCoclustering.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/2fdf83f/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L94)
