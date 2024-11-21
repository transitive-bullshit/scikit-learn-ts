# Class: MiniBatchNMF

Mini-Batch Non-Negative Matrix Factorization (NMF).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.MiniBatchNMF.html)

## Constructors

### new MiniBatchNMF()

> **new MiniBatchNMF**(`opts`?): [`MiniBatchNMF`](MiniBatchNMF.md)

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

`opts.alpha_H`?

</td>
<td>

`number` \| `"same"`

</td>
<td>

Constant that multiplies the regularization terms of `H`. Set it to zero to have no regularization on `H`. If “same” (default), it takes the same value as `alpha_W`.

</td>
</tr>
<tr>
<td>

`opts.alpha_W`?

</td>
<td>

`number`

</td>
<td>

Constant that multiplies the regularization terms of `W`. Set it to zero (default) to have no regularization on `W`.

</td>
</tr>
<tr>
<td>

`opts.batch_size`?

</td>
<td>

`number`

</td>
<td>

Number of samples in each mini-batch. Large batch sizes give better long-term convergence at the cost of a slower start.

</td>
</tr>
<tr>
<td>

`opts.beta_loss`?

</td>
<td>

`number` \| `"frobenius"` \| `"kullback-leibler"` \| `"itakura-saito"`

</td>
<td>

Beta divergence to be minimized, measuring the distance between `X` and the dot product `WH`. Note that values different from ‘frobenius’ (or 2) and ‘kullback-leibler’ (or 1) lead to significantly slower fits. Note that for `beta_loss <= 0` (or ‘itakura-saito’), the input matrix `X` cannot contain zeros.

</td>
</tr>
<tr>
<td>

`opts.forget_factor`?

</td>
<td>

`number`

</td>
<td>

Amount of rescaling of past information. Its value could be 1 with finite datasets. Choosing values < 1 is recommended with online learning as more recent batches will weight more than past batches.

</td>
</tr>
<tr>
<td>

`opts.fresh_restarts`?

</td>
<td>

`boolean`

</td>
<td>

Whether to completely solve for W at each step. Doing fresh restarts will likely lead to a better solution for a same number of iterations but it is much slower.

</td>
</tr>
<tr>
<td>

`opts.fresh_restarts_max_iter`?

</td>
<td>

`number`

</td>
<td>

Maximum number of iterations when solving for W at each step. Only used when doing fresh restarts. These iterations may be stopped early based on a small change of W controlled by `tol`.

</td>
</tr>
<tr>
<td>

`opts.init`?

</td>
<td>

`"random"` \| `"nndsvd"` \| `"nndsvda"` \| `"nndsvdar"` \| `"custom"`

</td>
<td>

Method used to initialize the procedure. Valid options:

</td>
</tr>
<tr>
<td>

`opts.l1_ratio`?

</td>
<td>

`number`

</td>
<td>

The regularization mixing parameter, with 0 <= l1_ratio <= 1. For l1_ratio = 0 the penalty is an elementwise L2 penalty (aka Frobenius Norm). For l1_ratio = 1 it is an elementwise L1 penalty. For 0 < l1_ratio < 1, the penalty is a combination of L1 and L2.

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

Maximum number of iterations over the complete dataset before timing out.

</td>
</tr>
<tr>
<td>

`opts.max_no_improvement`?

</td>
<td>

`number`

</td>
<td>

Control early stopping based on the consecutive number of mini batches that does not yield an improvement on the smoothed cost function. To disable convergence detection based on cost function, set `max_no_improvement` to `undefined`.

</td>
</tr>
<tr>
<td>

`opts.n_components`?

</td>
<td>

`number` \| `"auto"`

</td>
<td>

Number of components, if `n_components` is not set all features are kept. If `n_components='auto'`, the number of components is automatically inferred from W or H shapes.

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

Used for initialisation (when `init` == ‘nndsvdar’ or ‘random’), and in Coordinate Descent. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

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

Control early stopping based on the norm of the differences in `H` between 2 steps. To disable early stopping based on changes in `H`, set `tol` to 0.0.

</td>
</tr>
<tr>
<td>

`opts.transform_max_iter`?

</td>
<td>

`number`

</td>
<td>

Maximum number of iterations when solving for W at transform time. If `undefined`, it defaults to `max_iter`.

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

**Returns** [`MiniBatchNMF`](MiniBatchNMF.md)

**Defined in** [generated/decomposition/MiniBatchNMF.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L21)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/decomposition/MiniBatchNMF.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L19) |
| `_isInitialized` | `boolean` | `false` | [generated/decomposition/MiniBatchNMF.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L18) |
| `_py` | `PythonBridge` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L17) |
| `id` | `string` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:14](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L14) |
| `opts` | `any` | `undefined` | [generated/decomposition/MiniBatchNMF.ts:15](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L15) |

## Accessors

### components\_

**Get Signature**

> **get** **components\_**(): `Promise`\<`ArrayLike`[]\>

Factorization matrix, sometimes called ‘dictionary’.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L518)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L664)

***

### n\_components\_

**Get Signature**

> **get** **n\_components\_**(): `Promise`\<`number`\>

The number of components. It is same as the `n_components` parameter if it was given. Otherwise, it will be same as the number of features.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:543](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L543)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L639)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Actual number of started iterations over the whole dataset.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L593)

***

### n\_steps\_

**Get Signature**

> **get** **n\_steps\_**(): `Promise`\<`number`\>

Number of mini-batches processed.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L616)

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L130)

***

### reconstruction\_err\_

**Get Signature**

> **get** **reconstruction\_err\_**(): `Promise`\<`number`\>

Frobenius norm of the matrix difference, or beta-divergence, between the training data `X` and the reconstructed data `WH` from the fitted model.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L568)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L182)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Learn a NMF model for the data X.

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

`opts.params`?

</td>
<td>

`any`

</td>
<td>

Parameters (keyword arguments) and values passed to the fit_transform instance.

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

Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.

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

**Returns** `Promise`\<`any`\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:199](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L199)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Learn a NMF model for the data X and returns the transformed data.

This is more efficient than calling fit followed by transform.

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

`opts.H`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.

</td>
</tr>
<tr>
<td>

`opts.W`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

If `init='custom'`, it is used as initial guess for the solution. If `undefined`, uses the initialisation method specified in `init`.

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

Data matrix to be decomposed.

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

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L243)

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L292)

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L328)

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L143)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform data back to its original space.

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

Transformed data matrix.

</td>
</tr>
<tr>
<td>

`opts.Xt`?

</td>
<td>

`ArrayLike`

</td>
<td>

Transformed data matrix.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L362)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Update the model using the data in `X` as a mini-batch.

This method is expected to be called several times consecutively on different chunks of a dataset so as to implement out-of-core or online learning.

This is especially useful when the whole dataset is too big to fit in memory at once (see [Strategies to scale computationally: bigger data](https://scikit-learn.org/stable/modules/generated/../../computing/scaling_strategies.html#scaling-strategies)).

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

`opts.H`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial_fit`.

</td>
</tr>
<tr>
<td>

`opts.W`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

If `init='custom'`, it is used as initial guess for the solution. Only used for the first call to `partial_fit`.

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

Data matrix to be decomposed.

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L405)

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

**Defined in** [generated/decomposition/MiniBatchNMF.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L454)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform the data X according to the fitted MiniBatchNMF model.

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

Data matrix to be transformed by the model.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/decomposition/MiniBatchNMF.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/decomposition/MiniBatchNMF.ts#L486)
