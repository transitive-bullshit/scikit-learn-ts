# SpectralBiclustering

Spectral biclustering (Kluger, 2003).

Partitions rows and columns under the assumption that the data has an underlying checkerboard structure. For instance, if there are two row partitions and three column partitions, each row will belong to three biclusters, and each column will belong to two biclusters. The outer product of the corresponding row and column label vectors gives this checkerboard structure.

Read more in the [User Guide](../biclustering.html#spectral-biclustering).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralBiclustering.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralBiclustering(opts?: SpectralBiclusteringOptions): SpectralBiclustering;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralBiclusteringOptions`](../interfaces/SpectralBiclusteringOptions.md) |

### Returns

[`SpectralBiclustering`](SpectralBiclustering.md)

Defined in:  [generated/cluster/SpectralBiclustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralBiclustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralBiclustering.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/SpectralBiclustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L21)

### id

> `string`

Defined in:  [generated/cluster/SpectralBiclustering.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L18)

### opts

> `any`

Defined in:  [generated/cluster/SpectralBiclustering.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L19)

## Accessors

### column\_labels\_

Column partition labels.

#### Signature

```ts
column_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/cluster/SpectralBiclustering.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L329)

### columns\_

Results of the clustering, like `rows`.

#### Signature

```ts
columns_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cluster/SpectralBiclustering.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L275)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/cluster/SpectralBiclustering.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L383)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/cluster/SpectralBiclustering.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L356)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/SpectralBiclustering.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L30)

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

Defined in: [generated/cluster/SpectralBiclustering.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L34)

### row\_labels\_

Row partition labels.

#### Signature

```ts
row_labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/cluster/SpectralBiclustering.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L302)

### rows\_

Results of the clustering. `rows\[i, r\]` is `true` if cluster `i` contains row `r`. Available only after calling `fit`.

#### Signature

```ts
rows_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/cluster/SpectralBiclustering.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L248)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L97)

### fit()

Create a biclustering for X.

#### Signature

```ts
fit(opts: SpectralBiclusteringFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringFitOptions`](../interfaces/SpectralBiclusteringFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L114)

### get\_indices()

Row and column indices of the `i`’th bicluster.

Only works if `rows\_` and `columns\_` attributes exist.

#### Signature

```ts
get_indices(opts: SpectralBiclusteringGetIndicesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetIndicesOptions`](../interfaces/SpectralBiclusteringGetIndicesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L146)

### get\_shape()

Shape of the `i`’th bicluster.

#### Signature

```ts
get_shape(opts: SpectralBiclusteringGetShapeOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetShapeOptions`](../interfaces/SpectralBiclusteringGetShapeOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L180)

### get\_submatrix()

Return the submatrix corresponding to bicluster `i`.

#### Signature

```ts
get_submatrix(opts: SpectralBiclusteringGetSubmatrixOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralBiclusteringGetSubmatrixOptions`](../interfaces/SpectralBiclusteringGetSubmatrixOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralBiclustering.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L212)

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

Defined in:  [generated/cluster/SpectralBiclustering.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralBiclustering.ts#L43)
