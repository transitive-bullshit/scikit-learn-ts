# Class: EllipticEnvelope

An object for detecting outliers in a Gaussian distributed dataset.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../outlier_detection.html#outlier-detection).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html)

## Constructors

### new EllipticEnvelope()

> **new EllipticEnvelope**(`opts`?): [`EllipticEnvelope`](EllipticEnvelope.md)

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts`? | `object` | - |
| `opts.assume_centered`? | `boolean` | If `true`, the support of robust location and covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment. |
| `opts.contamination`? | `number` | The amount of contamination of the data set, i.e. the proportion of outliers in the data set. Range is (0, 0.5\]. |
| `opts.random_state`? | `number` | Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state). |
| `opts.store_precision`? | `boolean` | Specify if the estimated precision is stored. |
| `opts.support_fraction`? | `number` | The proportion of points to be included in the support of the raw MCD estimate. If `undefined`, the minimum value of support_fraction will be used within the algorithm: `(n_samples + n_features + 1) / 2 \* n_samples`. Range is (0, 1). |

**Returns** [`EllipticEnvelope`](EllipticEnvelope.md)

**Defined in** [generated/covariance/EllipticEnvelope.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L23)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/covariance/EllipticEnvelope.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L21) |
| `_isInitialized` | `boolean` | `false` | [generated/covariance/EllipticEnvelope.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L20) |
| `_py` | `PythonBridge` | `undefined` | [generated/covariance/EllipticEnvelope.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L19) |
| `id` | `string` | `undefined` | [generated/covariance/EllipticEnvelope.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L16) |
| `opts` | `any` | `undefined` | [generated/covariance/EllipticEnvelope.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L17) |

## Accessors

### covariance\_

**Get Signature**

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated robust covariance matrix.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:673](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L673)

***

### dist\_

**Get Signature**

> **get** **dist\_**(): `Promise`\<`ArrayLike`\>

Mahalanobis distances of the training set (on which [`fit`](https://scikit-learn.org/stable/modules/generated/#sklearn.covariance.EllipticEnvelope.fit "sklearn.covariance.EllipticEnvelope.fit") is called) observations.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:862](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L862)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:916](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L916)

***

### location\_

**Get Signature**

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated robust location.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:646](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L646)

***

### n\_features\_in\_

**Get Signature**

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:889](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L889)

***

### offset\_

**Get Signature**

> **get** **offset\_**(): `Promise`\<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: `decision_function \= score_samples \- offset_`. The offset depends on the contamination parameter and is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:754](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L754)

***

### precision\_

**Get Signature**

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated pseudo inverse matrix. (stored only if store_precision is `true`)

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:700](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L700)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `pythonBridge` | `PythonBridge` |

**Returns** `void`

**Defined in** [generated/covariance/EllipticEnvelope.ts:59](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L59)

***

### raw\_covariance\_

**Get Signature**

> **get** **raw\_covariance\_**(): `Promise`\<`ArrayLike`[]\>

The raw robust estimated covariance before correction and re-weighting.

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:808](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L808)

***

### raw\_location\_

**Get Signature**

> **get** **raw\_location\_**(): `Promise`\<`ArrayLike`\>

The raw robust estimated location before correction and re-weighting.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:781](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L781)

***

### raw\_support\_

**Get Signature**

> **get** **raw\_support\_**(): `Promise`\<`ArrayLike`\>

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:835](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L835)

***

### support\_

**Get Signature**

> **get** **support\_**(): `Promise`\<`ArrayLike`\>

A mask of the observations that have been used to compute the robust estimates of location and shape.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:727](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L727)

## Methods

### correct\_covariance()

> **correct\_covariance**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](https://scikit-learn.org/stable/modules/generated/#rbb2ba44703ed-rvd).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.data`? | `ArrayLike`[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

**Returns** `Promise`\<`ArrayLike`[]\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L132)

***

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Compute the decision function of the given observations.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data matrix. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L168)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:113](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L113)

***

### error\_norm()

> **error\_norm**(`opts`): `Promise`\<`number`\>

Compute the Mean Squared Error between two covariance estimators.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.comp_cov`? | `ArrayLike`[] | The covariance to compare with. |
| `opts.norm`? | `"frobenius"` \| `"spectral"` | The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp_cov \- self.covariance_)`. |
| `opts.scaling`? | `boolean` | If `true` (default), the squared error norm is divided by n_features. If `false`, the squared error norm is not rescaled. |
| `opts.squared`? | `boolean` | Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L204)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the EllipticEnvelope model.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | Training data. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L259)

***

### fit\_predict()

> **fit\_predict**(`opts`): `Promise`\<`ArrayLike`\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.kwargs`? | `any` | Arguments to be passed to `fit`. |
| `opts.X`? | `ArrayLike` | The input samples. |
| `opts.y`? | `any` | Not used, present for API consistency by convention. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L300)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.routing`? | `any` | A [`MetadataRequest`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L346)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Getter for the precision matrix.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.precision_`? | `ArrayLike`[] | The precision matrix associated to the current covariance object. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L382)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

| Parameter | Type |
| ------ | ------ |
| `py` | `PythonBridge` |

**Returns** `Promise`\<`void`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:72](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L72)

***

### mahalanobis()

> **mahalanobis**(`opts`): `Promise`\<`ArrayLike`\>

Compute the squared Mahalanobis distances of given observations.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L418)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict labels (1 inlier, -1 outlier) of X according to fitted model.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data matrix. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:452](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L452)

***

### reweight\_covariance()

> **reweight\_covariance**(`opts`): `Promise`\<`ArrayLike`\>

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](https://scikit-learn.org/stable/modules/generated/#rd2c89e63f1c9-rvdriessen).

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.data`? | `ArrayLike`[] | The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L488)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `ArrayLike` | Sample weights. |
| `opts.X`? | `ArrayLike`[] | Test samples. |
| `opts.y`? | `ArrayLike` | True labels for X. |

**Returns** `Promise`\<`number`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L526)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Compute the negative Mahalanobis distances.

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.X`? | `ArrayLike`[] | The data matrix. |

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:570](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L570)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable_metadata_routing=True` (see [`sklearn.set_config`](https://scikit-learn.org/stable/modules/generated/sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

**Parameters**

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `opts` | `object` | - |
| `opts.sample_weight`? | `string` \| `boolean` | Metadata routing for `sample_weight` parameter in `score`. |

**Returns** `Promise`\<`any`\>

**Defined in** [generated/covariance/EllipticEnvelope.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/bab9a6d8b9738b16b8b9ba0b3f7cea1495d968d8/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L610)
