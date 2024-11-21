**sklearn** • **Docs**

***

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html)

## Constructors

### new SpectralEmbedding()

> **new SpectralEmbedding**(`opts`?): [`SpectralEmbedding`](SpectralEmbedding.md)

#### Parameters

• **opts?**

• **opts.affinity?**: `"precomputed"` \| `"rbf"` \| `"nearest_neighbors"` \| `"precomputed_nearest_neighbors"`

‘nearest\_neighbors’ : construct the affinity matrix by computing a graph of nearest neighbors.

**Default Value**

`'nearest_neighbors'`

• **opts.eigen\_solver?**: `"arpack"` \| `"lobpcg"` \| `"amg"`

The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems. If `undefined`, then `'arpack'` is used.

• **opts.eigen\_tol?**: `number`

Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen\_tol="auto"` then the passed tolerance will depend on the `eigen\_solver`:

**Default Value**

`'auto'`

• **opts.gamma?**: `number`

Kernel coefficient for rbf kernel. If `undefined`, gamma will be set to 1/n\_features.

• **opts.n\_components?**: `number`

The dimension of the projected subspace.

**Default Value**

`2`

• **opts.n\_jobs?**: `number`

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_neighbors?**: `number`

Number of nearest neighbors for nearest\_neighbors graph building. If `undefined`, n\_neighbors will be set to max(n\_samples/10, 1).

• **opts.random\_state?**: `number`

A pseudo random number generator used for the initialization of the lobpcg eigen vectors decomposition when `eigen\_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See Glossary).

#### Returns

[`SpectralEmbedding`](SpectralEmbedding.md)

#### Defined in

[generated/manifold/SpectralEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L21)

## Accessors

### affinity\_matrix\_

#### Get Signature

> **get** **affinity\_matrix\_**(): `Promise`\<`ArrayLike`[]\>

Affinity\_matrix constructed from samples or precomputed.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L302)

***

### embedding\_

#### Get Signature

> **get** **embedding\_**(): `Promise`\<`ArrayLike`[]\>

Spectral embedding of the training matrix.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L275)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L356)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L329)

***

### n\_neighbors\_

#### Get Signature

> **get** **n\_neighbors\_**(): `Promise`\<`number`\>

Number of nearest neighbors effectively used.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L383)

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

[generated/manifold/SpectralEmbedding.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L82)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

If affinity is “precomputed” X : {array-like, sparse matrix}, shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L153)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit the model from data in X and transform X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

If affinity is “precomputed” X : {array-like, sparse matrix} of shape (n\_samples, n\_samples), Interpret X as precomputed adjacency graph computed from samples.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L194)

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

[generated/manifold/SpectralEmbedding.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L239)

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

[generated/manifold/SpectralEmbedding.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L95)
