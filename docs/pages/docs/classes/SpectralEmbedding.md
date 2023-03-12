# SpectralEmbedding

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the [User Guide](../manifold.html#spectral-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new SpectralEmbedding(opts?: SpectralEmbeddingOptions): SpectralEmbedding;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SpectralEmbeddingOptions`](../interfaces/SpectralEmbeddingOptions.md) |

### Returns

[`SpectralEmbedding`](SpectralEmbedding.md)

Defined in:  [generated/manifold/SpectralEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/SpectralEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/SpectralEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/SpectralEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L23)

### id

> `string`

Defined in:  [generated/manifold/SpectralEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L20)

### opts

> `any`

Defined in:  [generated/manifold/SpectralEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L21)

## Accessors

### affinity\_matrix\_

Affinity\_matrix constructed from samples or precomputed.

#### Signature

```ts
affinity_matrix_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/manifold/SpectralEmbedding.ts:203](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L203)

### embedding\_

Spectral embedding of the training matrix.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/manifold/SpectralEmbedding.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L176)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/manifold/SpectralEmbedding.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L257)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/SpectralEmbedding.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L230)

### n\_neighbors\_

Number of nearest neighbors effectively used.

#### Signature

```ts
n_neighbors_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/SpectralEmbedding.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L284)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/SpectralEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L32)

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

Defined in: [generated/manifold/SpectralEmbedding.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L36)

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

Defined in:  [generated/manifold/SpectralEmbedding.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L95)

### fit()

Fit the model from data in X.

#### Signature

```ts
fit(opts: SpectralEmbeddingFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralEmbeddingFitOptions`](../interfaces/SpectralEmbeddingFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/SpectralEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L112)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: SpectralEmbeddingFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SpectralEmbeddingFitTransformOptions`](../interfaces/SpectralEmbeddingFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/SpectralEmbedding.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L142)

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

Defined in:  [generated/manifold/SpectralEmbedding.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L45)
