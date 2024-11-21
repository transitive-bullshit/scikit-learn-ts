# Class: AffinityPropagation

Perform Affinity Propagation Clustering of data.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../clustering.html#affinity-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.AffinityPropagation.html)

## Constructors

### new AffinityPropagation()

> **new AffinityPropagation**(`opts`?): [`AffinityPropagation`](AffinityPropagation.md)

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

`opts.affinity`?

</td>
<td>

`"euclidean"` \| `"precomputed"`

</td>
<td>

Which affinity to use. At the moment ‘precomputed’ and `euclidean` are supported. ‘euclidean’ uses the negative squared euclidean distance between points.

</td>
</tr>
<tr>
<td>

`opts.convergence_iter`?

</td>
<td>

`number`

</td>
<td>

Number of iterations with no change in the number of estimated clusters that stops the convergence.

</td>
</tr>
<tr>
<td>

`opts.copy`?

</td>
<td>

`boolean`

</td>
<td>

Make a copy of input data.

</td>
</tr>
<tr>
<td>

`opts.damping`?

</td>
<td>

`number`

</td>
<td>

Damping factor in the range `\0.5, 1.0)` is the extent to which the current value is maintained relative to incoming values (weighted 1 - damping). This in order to avoid numerical oscillations when updating these values (messages).

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

Maximum number of iterations.

</td>
</tr>
<tr>
<td>

`opts.preference`?

</td>
<td>

`number` \| [`ArrayLike`

</td>
<td>

Preferences for each point - points with larger values of preferences are more likely to be chosen as exemplars. The number of exemplars, ie of clusters, is influenced by the input preferences value. If the preferences are not passed as arguments, they will be set to the median of the input similarities.

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

Pseudo-random number generator to control the starting state. Use an int for reproducible results across function calls. See the [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`boolean`

</td>
<td>

Whether to be verbose.

</td>
</tr>
</tbody>
</table>

**Returns** [`AffinityPropagation`](AffinityPropagation.md)

**Defined in** [generated/cluster/AffinityPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/cluster/AffinityPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/cluster/AffinityPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/cluster/AffinityPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L19) |
| `id` | `string` | `undefined` | [generated/cluster/AffinityPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L16) |
| `opts` | `any` | `undefined` | [generated/cluster/AffinityPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L17) |

## Accessors

### affinity\_matrix\_

**Get Signature**

> **get** **affinity\_matrix\_**(): `Promise`\<`ArrayLike`[]\>

Stores the affinity matrix used in `fit`.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/AffinityPropagation.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L386)

***

### cluster\_centers\_

**Get Signature**

> **get** **cluster\_centers\_**(): `Promise`\<`ArrayLike`[]\>

Cluster centers (if affinity != `precomputed`).

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/cluster/AffinityPropagation.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L332)

***

### cluster\_centers\_indices\_

**Get Signature**

> **get** **cluster\_centers\_indices\_**(): `Promise`\<`ArrayLike`\>

Indices of cluster centers.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L305)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L467)

***

### labels\_

**Get Signature**

> **get** **labels\_**(): `Promise`\<`ArrayLike`\>

Labels of each point.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:359](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L359)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L440)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations taken to converge.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L413)

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

**Defined in** [generated/cluster/AffinityPropagation.ts:80](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L80)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L136)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the clustering from features, or affinity matrix.

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

Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr_matrix`.

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

**Defined in** [generated/cluster/AffinityPropagation.ts:153](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L153)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Fit clustering from features/affinity matrix; return cluster labels.

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

Training instances to cluster, or similarities / affinities between instances if `affinity='precomputed'`. If a sparse feature matrix is provided, it will be converted into a sparse `csr_matrix`.

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

**Defined in** [generated/cluster/AffinityPropagation.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L192)

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

**Defined in** [generated/cluster/AffinityPropagation.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L235)

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

**Defined in** [generated/cluster/AffinityPropagation.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L93)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the closest cluster each sample in X belongs to.

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

`ArrayLike`

</td>
<td>

New data to predict. If a sparse matrix is provided, it will be converted into a sparse `csr_matrix`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/cluster/AffinityPropagation.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/cluster/AffinityPropagation.ts#L271)
