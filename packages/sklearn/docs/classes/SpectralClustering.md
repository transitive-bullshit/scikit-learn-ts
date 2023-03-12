# SpectralClustering

Apply clustering to a projection of the normalized Laplacian.

In practice Spectral Clustering is very useful when the structure of the individual clusters is highly non-convex, or more generally when a measure of the center and spread of the cluster is not a suitable description of the complete cluster, such as when clusters are nested circles on the 2D plane.

If the affinity matrix is the adjacency matrix of a graph, this method can be used to find normalized graph cuts [\[1\]](#r5f6cbeb1558e-1), [\[2\]](#r5f6cbeb1558e-2).

When calling `fit`, an affinity matrix is constructed using either a kernel function such the Gaussian (aka RBF) kernel with Euclidean distance `d(X, X)`:

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralClustering(opts?: SpectralClusteringOptions): SpectralClustering;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralClusteringOptions`](../interfaces/SpectralClusteringOptions.md) |

### Returns

[`SpectralClustering`](SpectralClustering.md)

Defined in:  [generated/cluster/SpectralClustering.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralClustering.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/cluster/SpectralClustering.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/cluster/SpectralClustering.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L23)

### id

> `string`

Defined in:  [generated/cluster/SpectralClustering.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L20)

### opts

> `any`

Defined in:  [generated/cluster/SpectralClustering.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L21)

## Accessors

### affinity\_matrix\_

Affinity matrix used for clustering. Available only after calling `fit`.

#### Signature

```ts
affinity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/cluster/SpectralClustering.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L186)

Defined in:  [generated/cluster/SpectralClustering.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L186)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralClustering.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L267)

Defined in:  [generated/cluster/SpectralClustering.ts:267](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L267)

### labels\_

Labels of each point

#### Signature

```ts
labels_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralClustering.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L213)

Defined in:  [generated/cluster/SpectralClustering.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L213)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/cluster/SpectralClustering.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L240)

Defined in:  [generated/cluster/SpectralClustering.ts:240](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L240)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/cluster/SpectralClustering.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L32)

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

Defined in:  [generated/cluster/SpectralClustering.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L36)

Defined in:  [generated/cluster/SpectralClustering.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L32) [generated/cluster/SpectralClustering.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L36)

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

Defined in:  [generated/cluster/SpectralClustering.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L105)

### fit()

Perform spectral clustering from features, or affinity matrix.

#### Signature

```ts
fit(opts: SpectralClusteringFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralClusteringFitOptions`](../interfaces/SpectralClusteringFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/cluster/SpectralClustering.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L122)

### fit\_predict()

Perform spectral clustering on `X` and return cluster labels.

#### Signature

```ts
fit_predict(opts: SpectralClusteringFitPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralClusteringFitPredictOptions`](../interfaces/SpectralClusteringFitPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/cluster/SpectralClustering.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L152)

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

Defined in:  [generated/cluster/SpectralClustering.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/cluster/SpectralClustering.ts#L45)
