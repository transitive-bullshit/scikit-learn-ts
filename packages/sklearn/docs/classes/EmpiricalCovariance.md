# Class: EmpiricalCovariance

Maximum likelihood covariance estimator.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EmpiricalCovariance.html)

## Constructors

### new EmpiricalCovariance()

> **new EmpiricalCovariance**(`opts`?): [`EmpiricalCovariance`](EmpiricalCovariance.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.assume_centered`? | `boolean` | If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data are centered before computation. |
| `opts.store_precision`? | `boolean` | Specifies if the estimated precision is stored. |

#### Returns

[`EmpiricalCovariance`](EmpiricalCovariance.md)

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/covariance/EmpiricalCovariance.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/covariance/EmpiricalCovariance.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/covariance/EmpiricalCovariance.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L19) |
| `id` | `string` | `undefined` | [generated/covariance/EmpiricalCovariance.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L16) |
| `opts` | `any` | `undefined` | [generated/covariance/EmpiricalCovariance.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L17) |

## Accessors

### covariance\_

#### Get Signature

> **get** **covariance\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Estimated covariance matrix

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L429)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:510](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L510)

***

### location\_

#### Get Signature

> **get** **location\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Estimated location, i.e. the estimated mean.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L402)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L483)

***

### precision\_

#### Get Signature

> **get** **precision\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Estimated pseudo-inverse matrix. (stored only if store_precision is `true`)

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L456)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

##### Returns

`void`

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L42)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L98)

***

### error\_norm()

> **error\_norm**(`opts`): `Promise`\<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.comp_cov`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The covariance to compare with. |
| `opts.norm`? | `"frobenius"` \| `"spectral"` | The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp_cov \- self.covariance_)`. |
| `opts.scaling`? | `boolean` | If `true` (default), the squared error norm is divided by n_features. If `false`, the squared error norm is not rescaled. |
| `opts.squared`? | `boolean` | Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L115)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the maximum likelihood covariance estimator to X.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L172)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:213](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L213)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Getter for the precision matrix.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.precision_`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The precision matrix associated to the current covariance object. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L249)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L55)

***

### mahalanobis()

> **mahalanobis**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L285)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the log-likelihood of `X_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location_` and `self.covariance_`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X_test`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Test data of which we compute the likelihood, where `n_samples` is the number of samples and `n_features` is the number of features. `X_test` is assumed to be drawn from the same distribution than the data used in fit (including centering). |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L323)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X_test`? | `string` \| `boolean` | Metadata routing for `X_test` parameter in `score`. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/EmpiricalCovariance.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EmpiricalCovariance.ts#L366)
