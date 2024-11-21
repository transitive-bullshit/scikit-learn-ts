# Class: LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#locally-linear-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

## Constructors

### new LocallyLinearEmbedding()

> **new LocallyLinearEmbedding**(`opts`?): [`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.eigen_solver`? | `"auto"` \| `"arpack"` \| `"dense"` | The solver used to compute the eigenvectors. The available options are: |
| `opts.hessian_tol`? | `number` | Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`. |
| `opts.max_iter`? | `number` | Maximum number of iterations for the arpack solver. Not used if eigen_solver==’dense’. |
| `opts.method`? | `"standard"` \| `"hessian"` \| `"modified"` \| `"ltsa"` | `standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](https://scikit-learn.org/stable/modules/generated/#r62e36dd1b056-1) |
| `opts.modified_tol`? | `number` | Tolerance for modified LLE method. Only used if `method \== 'modified'`. |
| `opts.n_components`? | `number` | Number of coordinates for the manifold. |
| `opts.n_jobs`? | `number` | The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details. |
| `opts.n_neighbors`? | `number` | Number of neighbors to consider for each point. |
| `opts.neighbors_algorithm`? | `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"` | Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance. |
| `opts.random_state`? | `number` | Determines the random number generator when `eigen_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.reg`? | `number` | Regularization constant, multiplies the trace of the local covariance matrix of the distances. |
| `opts.tol`? | `number` | Tolerance for ‘arpack’ method Not used if eigen_solver==’dense’. |

#### Returns

[`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19) |
| `id` | `string` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16) |
| `opts` | `any` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17) |

## Accessors

### embedding\_

#### Get Signature

> **get** **embedding\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Stores the embedding vectors

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L411)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L492)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L465)

***

### nbrs\_

#### Get Signature

> **get** **nbrs\_**(): `Promise`\<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L519)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108)

***

### reconstruction\_error\_

#### Get Signature

> **get** **reconstruction\_error\_**(): `Promise`\<`number`\>

Reconstruction error associated with `embedding_`

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L438)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L164)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the embedding vectors for data X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training set. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L181)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Compute the embedding vectors for data X and transform X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training set. |
| `opts.y`? | `any` | Not used, present here for API consistency by convention. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L220)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.input_features`? | `any` | Only used to validate feature names with the names seen in `fit`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L263)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L301)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L121)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.transform`? | `"default"` \| `"pandas"` \| `"polars"` | Configure output of `transform` and `fit_transform`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L339)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Transform new points into embedding space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training set. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L375)
