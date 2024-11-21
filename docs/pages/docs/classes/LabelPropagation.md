# Class: LabelPropagation

Label Propagation classifier.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../semi_supervised.html#label-propagation).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.semi_supervised.LabelPropagation.html)

## Constructors

### new LabelPropagation()

> **new LabelPropagation**(`opts`?): [`LabelPropagation`](LabelPropagation.md)

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

`opts.gamma`?

</td>
<td>

`number`

</td>
<td>

Parameter for rbf kernel.

</td>
</tr>
<tr>
<td>

`opts.kernel`?

</td>
<td>

`"rbf"` \| `"knn"`

</td>
<td>

String identifier for kernel function to use or the kernel function itself. Only ‘rbf’ and ‘knn’ strings are valid inputs. The function passed should take two inputs, each of shape (n_samples, n_features), and return a (n_samples, n_samples) shaped weight matrix.

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

Change maximum number of iterations allowed.

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

Parameter for knn kernel which need to be strictly positive.

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

Convergence tolerance: threshold to consider the system at steady state.

</td>
</tr>
</tbody>
</table>

**Returns** [`LabelPropagation`](LabelPropagation.md)

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/semi\_supervised/LabelPropagation.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/semi\_supervised/LabelPropagation.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/semi\_supervised/LabelPropagation.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L19) |
| `id` | `string` | `undefined` | [generated/semi\_supervised/LabelPropagation.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L16) |
| `opts` | `any` | `undefined` | [generated/semi\_supervised/LabelPropagation.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L17) |

## Accessors

### classes\_

**Get Signature**

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The distinct labels used in classifying instances.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L397)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L505)

***

### label\_distributions\_

**Get Signature**

> **get** **label\_distributions\_**(): `Promise`\<`ArrayLike`[]\>

Categorical distribution for each item.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L424)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L478)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L532)

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

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:66](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L66)

***

### transduction\_

**Get Signature**

> **get** **transduction\_**(): `Promise`\<`ArrayLike`\>

Label assigned to each item during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L451)

***

### X\_

**Get Signature**

> **get** **X\_**(): `Promise`\<`ArrayLike`\>

Input array.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L372)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a semi-supervised label propagation model to X.

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

Training data, where `n_samples` is the number of samples and `n_features` is the number of features.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

Target class values with unlabeled points marked as -1. All unlabeled samples will be transductively assigned labels internally, which are stored in `transduction_`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L137)

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

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L178)

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

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:79](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L79)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform inductive inference across the model.

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

The data matrix.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L214)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict probability for each possible outcome.

Compute the probability estimates for each single sample in X and each possible outcome seen during training (categorical distribution).

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

The data matrix.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L250)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

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

`opts.sample_weight`?

</td>
<td>

`ArrayLike`

</td>
<td>

Sample weights.

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

Test samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

True labels for `X`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L288)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

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

`opts.sample_weight`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `sample_weight` parameter in `score`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/semi\_supervised/LabelPropagation.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/semi_supervised/LabelPropagation.ts#L336)
