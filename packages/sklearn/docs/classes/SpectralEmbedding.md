# Class: SpectralEmbedding

Spectral embedding for non-linear dimensionality reduction.

Forms an affinity matrix given by the specified function and applies spectral decomposition to the corresponding graph laplacian. The resulting transformation is given by the value of the eigenvectors for each data point.

Note : Laplacian Eigenmaps is the actual algorithm implemented here.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#spectral-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.SpectralEmbedding.html)

## Constructors

### new SpectralEmbedding()

> **new SpectralEmbedding**(`opts`?): [`SpectralEmbedding`](SpectralEmbedding.md)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.affinity`?

</td>
<td>

`"precomputed"` \| `"rbf"` \| `"nearest_neighbors"` \| `"precomputed_nearest_neighbors"`

</td>
<td>

‘nearest_neighbors’ : construct the affinity matrix by computing a graph of nearest neighbors.

</td>
</tr>
<tr>
<td>

`opts.eigen_solver`?

</td>
<td>

`"arpack"` \| `"lobpcg"` \| `"amg"`

</td>
<td>

The eigenvalue decomposition strategy to use. AMG requires pyamg to be installed. It can be faster on very large, sparse problems. If `undefined`, then `'arpack'` is used.

</td>
</tr>
<tr>
<td>

`opts.eigen_tol`?

</td>
<td>

`number`

</td>
<td>

Stopping criterion for eigendecomposition of the Laplacian matrix. If `eigen_tol="auto"` then the passed tolerance will depend on the `eigen_solver`:

</td>
</tr>
<tr>
<td>

`opts.gamma`?

</td>
<td>

`number`

</td>
<td>

Kernel coefficient for rbf kernel. If `undefined`, gamma will be set to 1/n_features.

</td>
</tr>
<tr>
<td>

`opts.n_components`?

</td>
<td>

`number`

</td>
<td>

The dimension of the projected subspace.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

The number of parallel jobs to run. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.n_neighbors`?

</td>
<td>

`number`

</td>
<td>

Number of nearest neighbors for nearest_neighbors graph building. If `undefined`, n_neighbors will be set to max(n_samples/10, 1).

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

A pseudo random number generator used for the initialization of the lobpcg eigen vectors decomposition when `eigen_solver \== 'amg'`, and for the K-Means initialization. Use an int to make the results deterministic across calls (See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state)).

</td>
</tr>
</tbody>
</table>

#### Returns

[`SpectralEmbedding`](SpectralEmbedding.md)

#### Defined in

[generated/manifold/SpectralEmbedding.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/manifold/SpectralEmbedding.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/manifold/SpectralEmbedding.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/manifold/SpectralEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L23) |
| `id` | `string` | `undefined` | [generated/manifold/SpectralEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L20) |
| `opts` | `any` | `undefined` | [generated/manifold/SpectralEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L21) |

## Accessors

### affinity\_matrix\_

#### Get Signature

> **get** **affinity\_matrix\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Affinity_matrix constructed from samples or precomputed.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L302)

***

### embedding\_

#### Get Signature

> **get** **embedding\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Spectral embedding of the training matrix.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L275)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L356)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L329)

***

### n\_neighbors\_

#### Get Signature

> **get** **n\_neighbors\_**(): `Promise`\<`number`\>

Number of nearest neighbors effectively used.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L383)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Defined in

[generated/manifold/SpectralEmbedding.ts:82](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L82)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model from data in X.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.

If affinity is “precomputed” X : {array-like, sparse matrix}, shape (n_samples, n_samples), Interpret X as precomputed adjacency graph computed from samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L153)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Fit the model from data in X and transform X.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.

If affinity is “precomputed” X : {array-like, sparse matrix} of shape (n_samples, n_samples), Interpret X as precomputed adjacency graph computed from samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`any`

</td>
<td>

Not used, present for API consistency by convention.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L194)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L239)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/manifold/SpectralEmbedding.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/SpectralEmbedding.ts#L95)
