# Class: LedoitWolf

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#shrunk-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html)

## Constructors

### new LedoitWolf()

> **new LedoitWolf**(`opts`?): [`LedoitWolf`](LedoitWolf.md)

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

`opts.assume_centered`?

</td>
<td>

`boolean`

</td>
<td>

If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.

</td>
</tr>
<tr>
<td>

`opts.block_size`?

</td>
<td>

`number`

</td>
<td>

Size of blocks into which the covariance matrix will be split during its Ledoit-Wolf estimation. This is purely a memory optimization and does not affect results.

</td>
</tr>
<tr>
<td>

`opts.store_precision`?

</td>
<td>

`boolean`

</td>
<td>

Specify if the estimated precision is stored.

</td>
</tr>
</tbody>
</table>

**Returns** [`LedoitWolf`](LedoitWolf.md)

**Defined in** [generated/covariance/LedoitWolf.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/covariance/LedoitWolf.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/covariance/LedoitWolf.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/covariance/LedoitWolf.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L21) |
| `id` | `string` | `undefined` | [generated/covariance/LedoitWolf.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L18) |
| `opts` | `any` | `undefined` | [generated/covariance/LedoitWolf.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L19) |

## Accessors

### covariance\_

**Get Signature**

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated covariance matrix.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/LedoitWolf.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L385)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/LedoitWolf.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L504)

***

### location\_

**Get Signature**

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated location, i.e. the estimated mean.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/LedoitWolf.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L410)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/LedoitWolf.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L479)

***

### precision\_

**Get Signature**

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated pseudo inverse matrix. (stored only if store_precision is `true`)

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/LedoitWolf.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L433)

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

**Defined in** [generated/covariance/LedoitWolf.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L51)

***

### shrinkage\_

**Get Signature**

> **get** **shrinkage\_**(): `Promise`\<`number`\>

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/LedoitWolf.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L456)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/covariance/LedoitWolf.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L103)

***

### error\_norm()

> **error\_norm**(`opts`): `Promise`\<`number`\>

Compute the Mean Squared Error between two covariance estimators.

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

`opts.comp_cov`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

The covariance to compare with.

</td>
</tr>
<tr>
<td>

`opts.norm`?

</td>
<td>

`"frobenius"` \| `"spectral"`

</td>
<td>

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp_cov \- self.covariance_)`.

</td>
</tr>
<tr>
<td>

`opts.scaling`?

</td>
<td>

`boolean`

</td>
<td>

If `true` (default), the squared error norm is divided by n_features. If `false`, the squared error norm is not rescaled.

</td>
</tr>
<tr>
<td>

`opts.squared`?

</td>
<td>

`boolean`

</td>
<td>

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/LedoitWolf.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the Ledoit-Wolf shrunk covariance model to X.

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

Training data, where `n_samples` is the number of samples and `n_features` is the number of features.

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

**Defined in** [generated/covariance/LedoitWolf.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L173)

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

**Defined in** [generated/covariance/LedoitWolf.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L212)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Getter for the precision matrix.

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

`opts.precision_`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

The precision matrix associated to the current covariance object.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/LedoitWolf.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L246)

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

**Defined in** [generated/covariance/LedoitWolf.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L64)

***

### mahalanobis()

> **mahalanobis**(`opts`): `Promise`\<`ArrayLike`\>

Compute the squared Mahalanobis distances of given observations.

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

The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/LedoitWolf.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L278)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the log-likelihood of `X_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location_` and `self.covariance_`.

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

`opts.X_test`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Test data of which we compute the likelihood, where `n_samples` is the number of samples and `n_features` is the number of features. `X_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).

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

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/LedoitWolf.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L312)

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

`opts.X_test`?

</td>
<td>

`string` \| `boolean`

</td>
<td>

Metadata routing for `X_test` parameter in `score`.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/LedoitWolf.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L353)
