# LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

## Constructors

## constructor()

### Signature

```ts
new LocallyLinearEmbedding(opts?: object): LocallyLinearEmbedding;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.eigen_solver?` | `"auto"` \| `"arpack"` \| `"dense"` | The solver used to compute the eigenvectors. The available options are:  `Default Value`  `'auto'` |
| `opts.hessian_tol?` | `number` | Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.  `Default Value`  `0.0001` |
| `opts.max_iter?` | `number` | Maximum number of iterations for the arpack solver. Not used if eigen\_solver==’dense’.  `Default Value`  `100` |
| `opts.method?` | `"standard"` \| `"hessian"` \| `"modified"` \| `"ltsa"` | `standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](#r62e36dd1b056-1)  `Default Value`  `'standard'` |
| `opts.modified_tol?` | `number` | Tolerance for modified LLE method. Only used if `method \== 'modified'`.  `Default Value`  `1e-12` |
| `opts.n_components?` | `number` | Number of coordinates for the manifold.  `Default Value`  `2` |
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.n_neighbors?` | `number` | Number of neighbors to consider for each point.  `Default Value`  `5` |
| `opts.neighbors_algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See Glossary. |
| `opts.reg?` | `number` | Regularization constant, multiplies the trace of the local covariance matrix of the distances.  `Default Value`  `0.001` |
| `opts.tol?` | `number` | Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.  `Default Value`  `0.000001` |

### Returns

[`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19)

### id

> `string`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16)

### opts

> `any`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17)

## Accessors

### embedding\_

Stores the embedding vectors

#### Signature

```ts
embedding_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L395)

### feature\_names\_in\_

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L476)

### n\_features\_in\_

Number of features seen during fit.

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L449)

### nbrs\_

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Signature

```ts
nbrs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L503)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108)

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

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L112)

### reconstruction\_error\_

Reconstruction error associated with `embedding\_`

#### Signature

```ts
reconstruction_error_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/manifold/LocallyLinearEmbedding.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L422)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L179)

### fit()

Compute the embedding vectors for data X.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training set. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L196)

### fit\_transform()

Compute the embedding vectors for data X and transform X.

#### Signature

```ts
fit_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training set. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L236)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in [`fit`](#sklearn.manifold.LocallyLinearEmbedding.fit "sklearn.manifold.LocallyLinearEmbedding.fit"). |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L281)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L121)

### set\_output()

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Signature

```ts
set_output(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.transform?` | `"default"` \| `"pandas"` | Configure output of `transform` and `fit\_transform`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L321)

### transform()

Transform new points into embedding space.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training set. |

#### Returns

`Promise`\<`ArrayLike`[]\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L358)
