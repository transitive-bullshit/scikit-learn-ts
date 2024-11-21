**sklearn** • **Docs**

***

Minimum Covariance Determinant (MCD): robust estimator of covariance.

The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html)

## Constructors

### new MinCovDet()

> **new MinCovDet**(`opts`?): [`MinCovDet`](MinCovDet.md)

#### Parameters

• **opts?**

• **opts.assume\_centered?**: `boolean`

If `true`, the support of the robust location and the covariance estimates is computed, and a covariance estimate is recomputed from it, without centering the data. Useful to work with data whose mean is significantly equal to zero but is not exactly zero. If `false`, the robust location and covariance are directly computed with the FastMCD algorithm without additional treatment.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Determines the pseudo random number generator for shuffling the data. Pass an int for reproducible results across multiple function calls. See Glossary.

• **opts.store\_precision?**: `boolean`

Specify if the estimated precision is stored.

**Default Value**

`true`

• **opts.support\_fraction?**: `number`

The proportion of points to be included in the support of the raw MCD estimate. Default is `undefined`, which implies that the minimum value of support\_fraction will be used within the algorithm: `(n\_samples + n\_features + 1) / 2 \* n\_samples`. The parameter must be in the range (0, 1\].

#### Returns

[`MinCovDet`](MinCovDet.md)

#### Defined in

[generated/covariance/MinCovDet.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/MinCovDet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/MinCovDet.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/MinCovDet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/covariance/MinCovDet.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/covariance/MinCovDet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L19)

## Accessors

### covariance\_

#### Get Signature

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated robust covariance matrix.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L553)

***

### dist\_

#### Get Signature

> **get** **dist\_**(): `Promise`\<`ArrayLike`\>

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.MinCovDet.fit "sklearn.covariance.MinCovDet.fit") is called) observations.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L622)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L670)

***

### location\_

#### Get Signature

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated robust location.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L530)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L645)

***

### precision\_

#### Get Signature

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:576](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L576)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/covariance/MinCovDet.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L54)

***

### raw\_covariance\_

#### Get Signature

> **get** **raw\_covariance\_**(): `Promise`\<`ArrayLike`[]\>

The raw robust estimated covariance before correction and re-weighting.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L480)

***

### raw\_location\_

#### Get Signature

> **get** **raw\_location\_**(): `Promise`\<`ArrayLike`\>

The raw robust estimated location before correction and re-weighting.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L455)

***

### raw\_support\_

#### Get Signature

> **get** **raw\_support\_**(): `Promise`\<`ArrayLike`\>

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L505)

***

### support\_

#### Get Signature

> **get** **support\_**(): `Promise`\<`ArrayLike`\>

A mask of the observations that have been used to compute the robust estimates of location and shape.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:599](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L599)

## Methods

### correct\_covariance()

> **correct\_covariance**(`opts`): `Promise`\<`ArrayLike`[]\>

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#r491365aeaa84-rvd).

#### Parameters

• **opts**

• **opts.data?**: `ArrayLike`[]

The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L124)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/MinCovDet.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L105)

***

### error\_norm()

> **error\_norm**(`opts`): `Promise`\<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

• **opts**

• **opts.comp\_cov?**: `ArrayLike`[]

The covariance to compare with.

• **opts.norm?**: `"frobenius"` \| `"spectral"`

The type of norm used to compute the error. Available error types: - ‘frobenius’ (default): sqrt(tr(A^t.A)) - ‘spectral’: sqrt(max(eigenvalues(A^t.A)) where A is the error `(comp\_cov \- self.covariance\_)`.

**Default Value**

`'frobenius'`

• **opts.scaling?**: `boolean`

If `true` (default), the squared error norm is divided by n\_features. If `false`, the squared error norm is not rescaled.

**Default Value**

`true`

• **opts.squared?**: `boolean`

Whether to compute the squared error norm or the error norm. If `true` (default), the squared error norm is returned. If `false`, the error norm is returned.

**Default Value**

`true`

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L156)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit a Minimum Covariance Determinant with the FastMCD algorithm.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L209)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L248)

***

### get\_precision()

> **get\_precision**(`opts`): `Promise`\<`any`\>

Getter for the precision matrix.

#### Parameters

• **opts**

• **opts.precision\_?**: `ArrayLike`[]

The precision matrix associated to the current covariance object.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L282)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/MinCovDet.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L67)

***

### mahalanobis()

> **mahalanobis**(`opts`): `Promise`\<`ArrayLike`\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The observations, the Mahalanobis distances of the which we compute. Observations are assumed to be drawn from the same distribution than the data used in fit.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L314)

***

### reweight\_covariance()

> **reweight\_covariance**(`opts`): `Promise`\<`ArrayLike`\>

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#r9465bad4668c-rvdriessen).

#### Parameters

• **opts**

• **opts.data?**: `ArrayLike`[]

The data matrix, with p features and n samples. The data set must be the one which was used to compute the raw estimates.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/MinCovDet.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L348)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

• **opts**

• **opts.X\_test?**: `ArrayLike`[]

Test data of which we compute the likelihood, where `n\_samples` is the number of samples and `n\_features` is the number of features. `X\_test` is assumed to be drawn from the same distribution than the data used in fit (including centering).

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:382](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L382)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.X\_test?**: `string` \| `boolean`

Metadata routing for `X\_test` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/MinCovDet.ts#L423)
