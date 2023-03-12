# TSNE

T-distributed Stochastic Neighbor Embedding.

t-SNE \[1\] is a tool to visualize high-dimensional data. It converts similarities between data points to joint probabilities and tries to minimize the Kullback-Leibler divergence between the joint probabilities of the low-dimensional embedding and the high-dimensional data. t-SNE has a cost function that is not convex, i.e. with different initializations we can get different results.

It is highly recommended to use another dimensionality reduction method (e.g. PCA for dense data or TruncatedSVD for sparse data) to reduce the number of dimensions to a reasonable amount (e.g. 50) if the number of features is very high. This will suppress some noise and speed up the computation of pairwise distances between samples. For more tips see Laurens van der Maaten’s FAQ \[2\].

Read more in the [User Guide](../manifold.html#t-sne).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html)

## Constructors

## constructor()

### Signature

```ts
new TSNE(opts?: TSNEOptions): TSNE;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TSNEOptions`](../interfaces/TSNEOptions.md) |

### Returns

[`TSNE`](TSNE.md)

Defined in:  [generated/manifold/TSNE.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/TSNE.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/TSNE.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/TSNE.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L23)

### id

> `string`

Defined in:  [generated/manifold/TSNE.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L20)

### opts

> `any`

Defined in:  [generated/manifold/TSNE.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L21)

## Accessors

### embedding\_

Stores the embedding vectors.

#### Signature

```ts
embedding_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in: [generated/manifold/TSNE.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L176)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in: [generated/manifold/TSNE.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L245)

### kl\_divergence\_

Kullback-Leibler divergence after optimization.

#### Signature

```ts
kl_divergence_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L199)

### learning\_rate\_

Effective learning rate.

#### Signature

```ts
learning_rate_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L270)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L222)

### n\_iter\_

Number of iterations run.

#### Signature

```ts
n_iter_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/TSNE.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L293)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/TSNE.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L32)

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

Defined in: [generated/manifold/TSNE.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L36)

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

Defined in:  [generated/manifold/TSNE.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L104)

### fit()

Fit X into an embedded space.

#### Signature

```ts
fit(opts: TSNEFitOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TSNEFitOptions`](../interfaces/TSNEFitOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/manifold/TSNE.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L121)

### fit\_transform()

Fit X into an embedded space and return that transformed output.

#### Signature

```ts
fit_transform(opts: TSNEFitTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TSNEFitTransformOptions`](../interfaces/TSNEFitTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/TSNE.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L148)

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

Defined in:  [generated/manifold/TSNE.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/manifold/TSNE.ts#L45)
