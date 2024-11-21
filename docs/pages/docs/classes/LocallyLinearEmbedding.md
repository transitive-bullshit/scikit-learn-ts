**sklearn** • **Docs**

***

Locally Linear Embedding.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

## Constructors

### new LocallyLinearEmbedding()

> **new LocallyLinearEmbedding**(`opts`?): [`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

#### Parameters

• **opts?**

• **opts.eigen\_solver?**: `"auto"` \| `"arpack"` \| `"dense"`

The solver used to compute the eigenvectors. The available options are:

**Default Value**

`'auto'`

• **opts.hessian\_tol?**: `number`

Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.

**Default Value**

`0.0001`

• **opts.max\_iter?**: `number`

Maximum number of iterations for the arpack solver. Not used if eigen\_solver==’dense’.

**Default Value**

`100`

• **opts.method?**: `"standard"` \| `"hessian"` \| `"modified"` \| `"ltsa"`

`standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](#r62e36dd1b056-1)

**Default Value**

`'standard'`

• **opts.modified\_tol?**: `number`

Tolerance for modified LLE method. Only used if `method \== 'modified'`.

**Default Value**

`1e-12`

• **opts.n\_components?**: `number`

Number of coordinates for the manifold.

**Default Value**

`2`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_neighbors?**: `number`

Number of neighbors to consider for each point.

**Default Value**

`5`

• **opts.neighbors\_algorithm?**: `"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.

**Default Value**

`'auto'`

• **opts.random\_state?**: `number`

Determines the random number generator when `eigen\_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.reg?**: `number`

Regularization constant, multiplies the trace of the local covariance matrix of the distances.

**Default Value**

`0.001`

• **opts.tol?**: `number`

Tolerance for ‘arpack’ method Not used if eigen\_solver==’dense’.

**Default Value**

`0.000001`

#### Returns

[`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17)

## Accessors

### embedding\_

#### Get Signature

> **get** **embedding\_**(): `Promise`\<`ArrayLike`\>

Stores the embedding vectors

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L411)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L492)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L465)

***

### nbrs\_

#### Get Signature

> **get** **nbrs\_**(): `Promise`\<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L519)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108)

***

### reconstruction\_error\_

#### Get Signature

> **get** **reconstruction\_error\_**(): `Promise`\<`number`\>

Reconstruction error associated with `embedding\_`

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L438)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L164)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the embedding vectors for data X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training set.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L181)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Compute the embedding vectors for data X and transform X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training set.

• **opts.y?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L220)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Only used to validate feature names with the names seen in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L263)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L301)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L121)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L339)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform new points into embedding space.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training set.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/manifold/LocallyLinearEmbedding.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/e59c23d4803055797e663e330d0a58f2245dd145/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L375)
