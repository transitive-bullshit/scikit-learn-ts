# Class: MinCovDet

Minimum Covariance Determinant (MCD): robust estimator of covariance.

The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../covariance.html#robust-covariance).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html)

## Constructors

### new MinCovDet()

> **new MinCovDet**(`opts`?): [`MinCovDet`](MinCovDet.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.assume_centered`? | `boolean` | If `true`, the support of the robust location and the covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment. |
| `opts.random_state`? | `number` | Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.store_precision`? | `boolean` | Specify if the estimated precision is stored. |
| `opts.support_fraction`? | `number` | The proportion of points to be included in the support of the raw MCD estimate. Default is `undefined`, which implies that the minimum value of support_fraction will be used within the algorithm: `(n_samples + n_features + 1) / 2 \* n_samples`. The parameter must be in the range (0, 1\]. |

#### Returns

[`MinCovDet`](MinCovDet.md)

#### Defined in

[generated/covariance/MinCovDet.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L25)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/covariance/MinCovDet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L23) |
| `_isInitialized` | `boolean` | `false` | [generated/covariance/MinCovDet.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L22) |
| `_py` | `PythonBridge` | `undefined` | [generated/covariance/MinCovDet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L21) |
| `id` | `string` | `undefined` | [generated/covariance/MinCovDet.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L18) |
| `opts` | `any` | `undefined` | [generated/covariance/MinCovDet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L19) |

## Accessors

### covariance\_

#### Get Signature

> **get** **covariance\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Estimated robust covariance matrix.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L553)

***

### dist\_

#### Get Signature

> **get** **dist\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Mahalanobis distances of the training set (on which [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.covariance.MinCovDet.fit "sklearn.covariance.MinCovDet.fit") is called) observations.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L622)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L670)

***

### location\_

#### Get Signature

> **get** **location\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Estimated robust location.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L530)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L645)

***

### precision\_

#### Get Signature

> **get** **precision\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Estimated pseudo inverse matrix. (stored only if store_precision is `true`)

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L576)

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

[generated/covariance/MinCovDet.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L54)

***

### raw\_covariance\_

#### Get Signature

> **get** **raw\_covariance\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

The raw robust estimated covariance before correction and re-weighting.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L480)

***

### raw\_location\_

#### Get Signature

> **get** **raw\_location\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

The raw robust estimated location before correction and re-weighting.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L455)

***

### raw\_support\_

#### Get Signature

> **get** **raw\_support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L505)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

A mask of the observations that have been used to compute the robust estimates of location and shape.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L599)

## Methods

### correct\_covariance()

> **correct\_covariance**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](https://scikit-learn.org/stable/modules/generated/#r491365aeaa84-rvd).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.data`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L124)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/MinCovDet.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L105)

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

[generated/covariance/MinCovDet.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L156)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a Minimum Covariance Determinant with the FastMCD algorithm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | Training data, where `n_samples` is the number of samples and `n_features` is the number of features. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L209)

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

[generated/covariance/MinCovDet.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L248)

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

[generated/covariance/MinCovDet.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L282)

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

[generated/covariance/MinCovDet.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L67)

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

[generated/covariance/MinCovDet.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L314)

***

### reweight\_covariance()

> **reweight\_covariance**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](https://scikit-learn.org/stable/modules/generated/#r9465bad4668c-rvdriessen).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.data`? | [`ArrayLike`](../type-aliases/ArrayLike.md)[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/covariance/MinCovDet.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L348)

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

[generated/covariance/MinCovDet.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L382)

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

[generated/covariance/MinCovDet.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/MinCovDet.ts#L423)
