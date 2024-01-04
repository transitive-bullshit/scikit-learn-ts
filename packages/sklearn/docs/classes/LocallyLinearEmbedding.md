# LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the [User Guide](../manifold.html#locally-linear-embedding).

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
| `opts.n_jobs?` | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.4.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors?` | `number` | Number of neighbors to consider for each point.  `Default Value`  `5` |
| `opts.neighbors_algorithm?` | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.  `Default Value`  `'auto'` |
| `opts.random_state?` | `number` | Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state). |
| `opts.reg?` | `number` | Regularization constant, multiplies the trace of the local covariance matrix of the distances.  `Default Value`  `0.001` |
| `opts.tol?` | `number` | Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.  `Default Value`  `0.000001` |

### Returns

[`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L179)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training set. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L196)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training set. |
| `opts.y?` | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L236)

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
| `opts.input_features?` | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L281)

### get\_metadata\_routing()

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Signature

```ts
get_metadata_routing(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.routing?` | `any` | A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L321)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L121)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L361)

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
| `opts.X?` | [`ArrayLike`](../types/ArrayLike.md)[] | Training set. |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L398)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20)

### \_py

> `PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19)

### id

> `string`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16)

### opts

> `any`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17)

## Accessors

### embedding\_

Stores the embedding vectors

#### Signature

```ts
embedding_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L435)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L435)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L516)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:516](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L516)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L489)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L489)

### nbrs\_

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

#### Signature

```ts
nbrs_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L543)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L543)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108)

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

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L112)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108) [generated/manifold/LocallyLinearEmbedding.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L112)

### reconstruction\_error\_

Reconstruction error associated with `embedding\_`

#### Signature

```ts
reconstruction_error_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L462)

Defined in:  [generated/manifold/LocallyLinearEmbedding.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f3d7d2d/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L462)
