# Class: LocallyLinearEmbedding

Locally Linear Embedding.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../manifold.html#locally-linear-embedding).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.manifold.LocallyLinearEmbedding.html)

## Constructors

### new LocallyLinearEmbedding()

> **new LocallyLinearEmbedding**(`opts`?): [`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

**Parameters**

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

`opts.eigen_solver`?

</td>
<td>

`"auto"` \| `"arpack"` \| `"dense"`

</td>
<td>

The solver used to compute the eigenvectors. The available options are:

</td>
</tr>
<tr>
<td>

`opts.hessian_tol`?

</td>
<td>

`number`

</td>
<td>

Tolerance for Hessian eigenmapping method. Only used if `method \== 'hessian'`.

</td>
</tr>
<tr>
<td>

`opts.max_iter`?

</td>
<td>

`number`

</td>
<td>

Maximum number of iterations for the arpack solver. Not used if eigen_solver==’dense’.

</td>
</tr>
<tr>
<td>

`opts.method`?

</td>
<td>

`"standard"` \| `"hessian"` \| `"modified"` \| `"ltsa"`

</td>
<td>

`standard`: use the standard locally linear embedding algorithm. see reference [\[1\]](https://scikit-learn.org/stable/modules/generated/#r62e36dd1b056-1)

</td>
</tr>
<tr>
<td>

`opts.modified_tol`?

</td>
<td>

`number`

</td>
<td>

Tolerance for modified LLE method. Only used if `method \== 'modified'`.

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

Number of coordinates for the manifold.

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

Number of neighbors to consider for each point.

</td>
</tr>
<tr>
<td>

`opts.neighbors_algorithm`?

</td>
<td>

`"auto"` \| `"ball_tree"` \| `"kd_tree"` \| `"brute"`

</td>
<td>

Algorithm to use for nearest neighbors search, passed to [`NearestNeighbors`](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html#sklearn.neighbors.NearestNeighbors "sklearn.neighbors.NearestNeighbors") instance.

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

Determines the random number generator when `eigen_solver` == ‘arpack’. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.reg`?

</td>
<td>

`number`

</td>
<td>

Regularization constant, multiplies the trace of the local covariance matrix of the distances.

</td>
</tr>
<tr>
<td>

`opts.tol`?

</td>
<td>

`number`

</td>
<td>

Tolerance for ‘arpack’ method Not used if eigen_solver==’dense’.

</td>
</tr>
</tbody>
</table>

**Returns** [`LocallyLinearEmbedding`](LocallyLinearEmbedding.md)

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/manifold/LocallyLinearEmbedding.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/manifold/LocallyLinearEmbedding.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L19) |
| `id` | `string` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L16) |
| `opts` | `any` | `undefined` | [generated/manifold/LocallyLinearEmbedding.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L17) |

## Accessors

### embedding\_

**Get Signature**

> **get** **embedding\_**(): `Promise`\<`ArrayLike`\>

Stores the embedding vectors

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L411)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L492)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L465)

***

### nbrs\_

**Get Signature**

> **get** **nbrs\_**(): `Promise`\<`any`\>

Stores nearest neighbors instance, including BallTree or KDtree if applicable.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L519)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

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

**Returns** `void`

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L108)

***

### reconstruction\_error\_

**Get Signature**

> **get** **reconstruction\_error\_**(): `Promise`\<`number`\>

Reconstruction error associated with `embedding_`

**Returns** `Promise`\<`number`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L438)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:164](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L164)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the embedding vectors for data X.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

Training set.

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

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L181)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Compute the embedding vectors for data X and transform X.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

Training set.

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

Not used, present here for API consistency by convention.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:220](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L220)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class_name0", "class_name1", "class_name2"\]`.

**Parameters**

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

`opts.input_features`?

</td>
<td>

`any`

</td>
<td>

Only used to validate feature names with the names seen in `fit`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L263)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L301)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

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

**Returns** `Promise`\<`void`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L121)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

**Parameters**

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

`opts.transform`?

</td>
<td>

`"default"` \| `"pandas"` \| `"polars"`

</td>
<td>

Configure output of `transform` and `fit_transform`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L339)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform new points into embedding space.

**Parameters**

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

`ArrayLike`[]

</td>
<td>

Training set.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/manifold/LocallyLinearEmbedding.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/manifold/LocallyLinearEmbedding.ts#L375)
