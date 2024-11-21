# Class: GraphicalLasso

Sparse inverse covariance estimation with an l1-penalized estimator.

For a usage example see [Visualizing the stock market structure](https://scikit-learn.org/stable/modules/generated/../../auto_examples/applications/plot_stock_market.html#sphx-glr-auto-examples-applications-plot-stock-market-py).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#sparse-inverse-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLasso.html)

## Constructors

### new GraphicalLasso()

> **new GraphicalLasso**(`opts`?): [`GraphicalLasso`](GraphicalLasso.md)

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

`opts.alpha`?

</td>
<td>

`number`

</td>
<td>

The regularization parameter: the higher alpha, the more regularization, the sparser the inverse covariance. Range is (0, inf\].

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

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

</td>
</tr>
<tr>
<td>

`opts.covariance`?

</td>
<td>

`"precomputed"`

</td>
<td>

If covariance is “precomputed”, the input data in `fit` is assumed to be the covariance matrix. If `undefined`, the empirical covariance is estimated from the data `X`.

</td>
</tr>
<tr>
<td>

`opts.enet_tol`?

</td>
<td>

`number`

</td>
<td>

The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

</td>
</tr>
<tr>
<td>

`opts.eps`?

</td>
<td>

`number`

</td>
<td>

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Default is `np.finfo(np.float64).eps`.

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

The maximum number of iterations.

</td>
</tr>
<tr>
<td>

`opts.mode`?

</td>
<td>

`"cd"` \| `"lars"`

</td>
<td>

The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where p > n. Elsewhere prefer cd which is more numerically stable.

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

The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

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

If verbose is `true`, the objective function and dual gap are plotted at each iteration.

</td>
</tr>
</tbody>
</table>

**Returns** [`GraphicalLasso`](GraphicalLasso.md)

**Defined in** [generated/covariance/GraphicalLasso.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/covariance/GraphicalLasso.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/covariance/GraphicalLasso.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/covariance/GraphicalLasso.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L21) |
| `id` | `string` | `undefined` | [generated/covariance/GraphicalLasso.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L18) |
| `opts` | `any` | `undefined` | [generated/covariance/GraphicalLasso.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L19) |

## Accessors

### costs\_

**Get Signature**

> **get** **costs\_**(): `Promise`\<`any`\>

The list of values of the objective function and the dual gap at each iteration. Returned only if return_costs is `true`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L525)

***

### covariance\_

**Get Signature**

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated covariance matrix

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/GraphicalLasso.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L450)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L573)

***

### location\_

**Get Signature**

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated location, i.e. the estimated mean.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L425)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L548)

***

### n\_iter\_

**Get Signature**

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L500)

***

### precision\_

**Get Signature**

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated pseudo inverse matrix.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/GraphicalLasso.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L475)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L89)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/covariance/GraphicalLasso.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L141)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L158)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the GraphicalLasso model to X.

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

Data from which to compute the covariance estimate.

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

**Defined in** [generated/covariance/GraphicalLasso.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L211)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:250](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L250)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L284)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L102)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L316)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L350)

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

**Defined in** [generated/covariance/GraphicalLasso.ts:391](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/covariance/GraphicalLasso.ts#L391)
