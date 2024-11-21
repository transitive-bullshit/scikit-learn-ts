# Class: QuantileTransformer

Transform features using quantiles information.

This method transforms the features to follow a uniform or a normal distribution. Therefore, for a given feature, this transformation tends to spread out the most frequent values. It also reduces the impact of (marginal) outliers: this is therefore a robust preprocessing scheme.

The transformation is applied on each feature independently. First an estimate of the cumulative distribution function of a feature is used to map the original values to a uniform distribution. The obtained values are then mapped to the desired output distribution using the associated quantile function. Features values of new/unseen data that fall below or above the fitted range will be mapped to the bounds of the output distribution. Note that this transform is non-linear. It may distort linear correlations between variables measured at the same scale but renders variables measured at different scales more directly comparable.

For example visualizations, refer to [Compare QuantileTransformer with other scalers](https://scikit-learn.org/stable/modules/generated/../../auto_examples/preprocessing/plot_all_scaling.html#plot-all-scaling-quantile-transformer-section).

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../preprocessing.html#preprocessing-transformer).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.QuantileTransformer.html)

## Constructors

### new QuantileTransformer()

> **new QuantileTransformer**(`opts`?): [`QuantileTransformer`](QuantileTransformer.md)

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

`opts.copy`?

</td>
<td>

`boolean`

</td>
<td>

Set to `false` to perform inplace transformation and avoid a copy (if the input is already a numpy array).

</td>
</tr>
<tr>
<td>

`opts.ignore_implicit_zeros`?

</td>
<td>

`boolean`

</td>
<td>

Only applies to sparse matrices. If `true`, the sparse entries of the matrix are discarded to compute the quantile statistics. If `false`, these entries are treated as zeros.

</td>
</tr>
<tr>
<td>

`opts.n_quantiles`?

</td>
<td>

`number`

</td>
<td>

Number of quantiles to be computed. It corresponds to the number of landmarks used to discretize the cumulative distribution function. If n_quantiles is larger than the number of samples, n_quantiles is set to the number of samples as a larger number of quantiles does not give a better approximation of the cumulative distribution function estimator.

</td>
</tr>
<tr>
<td>

`opts.output_distribution`?

</td>
<td>

`"uniform"` \| `"normal"`

</td>
<td>

Marginal distribution for the transformed data. The choices are ‘uniform’ (default) or ‘normal’.

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

Determines random number generation for subsampling and smoothing noise. Please see `subsample` for more details. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

</td>
</tr>
<tr>
<td>

`opts.subsample`?

</td>
<td>

`number`

</td>
<td>

Maximum number of samples used to estimate the quantiles for computational efficiency. Note that the subsampling procedure may differ for value-identical sparse and dense matrices. Disable subsampling by setting `subsample=None`.

</td>
</tr>
</tbody>
</table>

#### Returns

[`QuantileTransformer`](QuantileTransformer.md)

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/preprocessing/QuantileTransformer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/preprocessing/QuantileTransformer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/preprocessing/QuantileTransformer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L25) |
| `id` | `string` | `undefined` | [generated/preprocessing/QuantileTransformer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L22) |
| `opts` | `any` | `undefined` | [generated/preprocessing/QuantileTransformer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L23) |

## Accessors

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:524](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L524)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L497)

***

### n\_quantiles\_

#### Get Signature

> **get** **n\_quantiles\_**(): `Promise`\<`number`\>

The actual number of quantiles used to discretize the cumulative distribution function.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L416)

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

[generated/preprocessing/QuantileTransformer.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L74)

***

### quantiles\_

#### Get Signature

> **get** **quantiles\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The values corresponding the quantiles of reference.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L443)

***

### references\_

#### Get Signature

> **get** **references\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Quantiles of references.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L470)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:130](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L130)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Compute the quantiles used for transforming.

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

The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is `false`.

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

Ignored.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L147)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit_params` and returns a transformed version of `X`.

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

`opts.fit_params`?

</td>
<td>

`any`

</td>
<td>

Additional fit parameters.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)[]

</td>
<td>

Input samples.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

[`ArrayLike`](../type-aliases/ArrayLike.md)

</td>
<td>

Target values (`undefined` for unsupervised transformations).

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L188)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

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

`opts.input_features`?

</td>
<td>

`any`

</td>
<td>

Input features.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L234)

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

[generated/preprocessing/QuantileTransformer.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L272)

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

[generated/preprocessing/QuantileTransformer.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L87)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Back-projection to the original space.

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

The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is `false`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L308)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See [Introducing the set_output API](https://scikit-learn.org/stable/modules/generated/../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

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

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L346)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Feature-wise transformation of the data.

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

The data used to scale along the features axis. If a sparse matrix is provided, it will be converted into a sparse `csc_matrix`. Additionally, the sparse matrix needs to be nonnegative if `ignore_implicit_zeros` is `false`.

</td>
</tr>
</tbody>
</table>

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/preprocessing/QuantileTransformer.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/preprocessing/QuantileTransformer.ts#L382)
