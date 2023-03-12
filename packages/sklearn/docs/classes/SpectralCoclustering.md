# SpectralCoclustering

Spectral Co-Clustering algorithm (Dhillon, 2001).

Clusters rows and columns of an array `X` to solve the relaxed normalized cut of the bipartite graph created from `X` as follows: the edge between row vertex `i` and column vertex `j` has weight `X\[i, j\]`.

The resulting bicluster structure is block-diagonal, since each row and each column belongs to exactly one bicluster.

Supports sparse matrices, as long as they are nonnegative.

Read more in the [User Guide](../biclustering.html#spectral-coclustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralCoclustering.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralCoclustering(opts?: SpectralCoclusteringOptions): SpectralCoclustering;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralCoclusteringOptions`](../interfaces/SpectralCoclusteringOptions.md) |

### Returns

[`SpectralCoclustering`](SpectralCoclustering.md)

Defined in:  [generated/cluster/SpectralCoclustering.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralCoclustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralCoclustering.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/SpectralCoclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L25)

### id

> `string`

Defined in:  [generated/cluster/SpectralCoclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L22)

### opts

> `any`

Defined in:  [generated/cluster/SpectralCoclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L23)

## Accessors

### column\_labels\_

The bicluster label of each column.

#### Signature

```ts
column_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L331)

Defined in:  [generated/cluster/SpectralCoclustering.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L331)

### columns\_

Results of the clustering, like `rows`.

#### Signature

```ts
columns_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L277)

Defined in:  [generated/cluster/SpectralCoclustering.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L277)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L385)

Defined in:  [generated/cluster/SpectralCoclustering.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L385)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L358)

Defined in:  [generated/cluster/SpectralCoclustering.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L358)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/SpectralCoclustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L34)

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

Defined in:  [generated/cluster/SpectralCoclustering.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L38)

Defined in:  [generated/cluster/SpectralCoclustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L34) [generated/cluster/SpectralCoclustering.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L38)

### row\_labels\_

The bicluster label of each row.

#### Signature

```ts
row_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L304)

Defined in:  [generated/cluster/SpectralCoclustering.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L304)

### rows\_

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Signature

```ts
rows_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L250)

Defined in:  [generated/cluster/SpectralCoclustering.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L250)

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

Defined in:  [generated/cluster/SpectralCoclustering.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L99)

### fit()

Create a biclustering for X.

#### Signature

```ts
fit(opts: SpectralCoclusteringFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringFitOptions`](../interfaces/SpectralCoclusteringFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L116)

### get\_indices()

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Signature

```ts
get_indices(opts: SpectralCoclusteringGetIndicesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetIndicesOptions`](../interfaces/SpectralCoclusteringGetIndicesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L148)

### get\_shape()

Shape of the `i`’th bicluster.

#### Signature

```ts
get_shape(opts: SpectralCoclusteringGetShapeOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetShapeOptions`](../interfaces/SpectralCoclusteringGetShapeOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L182)

### get\_submatrix()

Return the submatrix corresponding to bicluster `i`.

#### Signature

```ts
get_submatrix(opts: SpectralCoclusteringGetSubmatrixOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralCoclusteringGetSubmatrixOptions`](../interfaces/SpectralCoclusteringGetSubmatrixOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralCoclustering.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L214)

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

Defined in:  [generated/cluster/SpectralCoclustering.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralCoclustering.ts#L47)
