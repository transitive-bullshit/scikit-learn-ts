# LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new LocallyLinearEmbedding(opts?: LocallyLinearEmbeddingOptions): LocallyLinearEmbedding;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `LocallyLinearEmbeddingOptions` |

### Returns

[`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19)

### id

> `string`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16)

### opts

> `any`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17)

## Accessors

### embedding\_

Stores the embedding vectors

#### Signature

```ts
embedding_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L286)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L367)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L340)

### nbrs\_

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Signature

```ts
nbrs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L394)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L28)

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

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L32)

### reconstruction\_error\_

Reconstruction error associated with `embedding\_`

#### Signature

```ts
reconstruction_error_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L313)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L99)

### fit()

Compute the embedding vectors for data X.

#### Signature

```ts
fit(opts: LocallyLinearEmbeddingFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocallyLinearEmbeddingFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L116)

### fit\_transform()

Compute the embedding vectors for data X and transform X.

#### Signature

```ts
fit_transform(opts: LocallyLinearEmbeddingFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocallyLinearEmbeddingFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L146)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: LocallyLinearEmbeddingGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocallyLinearEmbeddingGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L183)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L41)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: LocallyLinearEmbeddingSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocallyLinearEmbeddingSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L220)

### transform()

Transform new points into embedding space.

#### Signature

```ts
transform(opts: LocallyLinearEmbeddingTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocallyLinearEmbeddingTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L252)
