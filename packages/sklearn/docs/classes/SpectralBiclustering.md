# SpectralBiclustering

Spectral biclustering (Kluger, 2003).

Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

Read more in the [User Guide](../biclustering.html#spectral-biclustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralBiclustering(opts?: object): SpectralBiclustering;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.init?` | [`ArrayLike`](../types/ArrayLike.md)[] \| `"k-means++"` \| `"random"` | Method for initialization of k-means algorithm; defaults to ‘k-means++’.  `Default Value`  `'k-means++'` |
| `opts.method?` | `"bistochastic"` \| `"scale"` \| `"log"` | Method of normalizing and converting singular vectors into biclusters. May be one of ‘scale’, ‘bistochastic’, or ‘log’. The authors recommend using ‘log’. If the data is sparse, however, log normalization will not work, which is why the default is ‘bistochastic’.  `Default Value`  `'bistochastic'` |
| `opts.mini_batch?` | `boolean` | Whether to use mini-batch k-means, which is faster but may get different results.  `Default Value`  `false` |
| `opts.n_best?` | `number` | Number of best singular vectors to which to project the data for clustering.  `Default Value`  `3` |
| `opts.n_clusters?` | `number` | The number of row and column clusters in the checkerboard structure.  `Default Value`  `3` |
| `opts.n_components?` | `number` | Number of singular vectors to check.  `Default Value`  `6` |
| `opts.n_init?` | `number` | Number of random initializations that are tried with the k-means algorithm.  If mini-batch k-means is used, the best initialization is chosen and the algorithm runs once. Otherwise, the algorithm is run for each initialization and the best solution chosen.  `Default Value`  `10` |
| `opts.n_svd_vecs?` | `number` | Number of vectors to use in calculating the SVD. Corresponds to `ncv` when `svd\_method=arpack` and `n\_oversamples` when `svd\_method` is ‘randomized`. |
| `opts.random_state?` | `number` | Used for randomizing the singular value decomposition and the k-means initialization. Use an int to make the randomness deterministic. See [Glossary](../../glossary.html#term-random_state). |
| `opts.svd_method?` | `"randomized"` \| `"arpack"` | Selects the algorithm for finding singular vectors. May be ‘randomized’ or ‘arpack’. If ‘randomized’, uses [`randomized\_svd`](sklearn.utils.extmath.randomized_svd.html#sklearn.utils.extmath.randomized_svd "sklearn.utils.extmath.randomized_svd"), which may be faster for large matrices. If ‘arpack’, uses `scipy.sparse.linalg.svds`, which is more accurate, but possibly slower in some cases.  `Default Value`  `'randomized'` |

### Returns

[`SpectralBiclustering`](SpectralBiclustering.md)

Defined in:  [generated/cluster/SpectralBiclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralBiclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralBiclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/SpectralBiclustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/SpectralBiclustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/SpectralBiclustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L19)

## Accessors

### column\_labels\_

Column partition labels.

#### Signature

```ts
column_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L423)

Defined in:  [generated/cluster/SpectralBiclustering.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L423)

### columns\_

Results of the clustering, like `rows`.

#### Signature

```ts
columns_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L369)

Defined in:  [generated/cluster/SpectralBiclustering.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L369)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L477)

Defined in:  [generated/cluster/SpectralBiclustering.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L477)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L450)

Defined in:  [generated/cluster/SpectralBiclustering.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L450)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/SpectralBiclustering.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L98)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L102)

Defined in:  [generated/cluster/SpectralBiclustering.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L98) [generated/cluster/SpectralBiclustering.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L102)

### row\_labels\_

Row partition labels.

#### Signature

```ts
row_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L396)

Defined in:  [generated/cluster/SpectralBiclustering.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L396)

### rows\_

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Signature

```ts
rows_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L342)

Defined in:  [generated/cluster/SpectralBiclustering.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L342)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L165)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training data. |
| `opts.y?` | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L182)

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

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:224](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L224)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L261)

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
| `opts.data?` | [`ArrayLike`](../types/ArrayLike.md)[] | The data. |
| `opts.i?` | `number` | The index of the cluster. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:298](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L298)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L111)
