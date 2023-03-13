# Isomap

Isomap Embedding.

Non-linear dimensionality reduction through Isometric Mapping

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.Isomap.html)

## Constructors

## constructor()

### Signature

```ts
new Isomap(opts?: IsomapOptions): Isomap;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `IsomapOptions` |

### Returns

[`Isomap`](Isomap.md)

Defined in:  [generated/manifold/Isomap.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L25)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/Isomap.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L23)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/Isomap.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L22)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/Isomap.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L21)

### id

> `string`

Defined in:  [generated/manifold/Isomap.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L18)

### opts

> `any`

Defined in:  [generated/manifold/Isomap.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L19)

## Accessors

### dist\_matrix\_

Stores the geodesic distance matrix of training data.

#### Signature

```ts
dist_matrix_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/Isomap.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L356)

### embedding\_

Stores the embedding vectors.

#### Signature

```ts
embedding_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/Isomap.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L288)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/Isomap.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L402)

### kernel\_pca\_

[`KernelPCA`](sklearn.decomposition.KernelPCA.html#sklearn.decomposition.KernelPCA "sklearn.decomposition.KernelPCA") object used to implement the embedding.

#### Signature

```ts
kernel_pca_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/manifold/Isomap.ts:311](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L311)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/Isomap.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L379)

### nbrs\_

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Signature

```ts
nbrs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/manifold/Isomap.ts:334](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L334)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/Isomap.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L30)

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

Defined in: [generated/manifold/Isomap.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L34)

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

Defined in:  [generated/manifold/Isomap.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L94)

### fit()

Compute the embedding vectors for data X.

#### Signature

```ts
fit(opts: IsomapFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapFitOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L111)

### fit\_transform()

Fit the model from data in X and transform X.

#### Signature

```ts
fit_transform(opts: IsomapFitTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapFitTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/manifold/Isomap.ts:139](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L139)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: IsomapGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapGetFeatureNamesOutOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:169](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L169)

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

Defined in:  [generated/manifold/Isomap.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L43)

### reconstruction\_error()

Compute the reconstruction error for the embedding.

#### Signature

```ts
reconstruction_error(opts: IsomapReconstructionErrorOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapReconstructionErrorOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L199)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: IsomapSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapSetOutputOptions` |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/Isomap.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L232)

### transform()

Transform X.

This is implemented by linking the points X into the graph of geodesic distances of the training data. First the `n\_neighbors` nearest neighbors of X are found in the training data, and from these the shortest geodesic distances from each point in X to each point in the training data are computed in order to construct the kernel. The embedding of X is the projection of this kernel onto the embedding vectors of the training set.

#### Signature

```ts
transform(opts: IsomapTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IsomapTransformOptions` |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/manifold/Isomap.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/manifold/Isomap.ts#L262)
