**sklearn** • **Docs**

***

LedoitWolf Estimator.

Ledoit-Wolf is a particular form of shrinkage, where the shrinkage coefficient is computed using O. Ledoit and M. Wolf’s formula as described in “A Well-Conditioned Estimator for Large-Dimensional Covariance Matrices”, Ledoit and Wolf, Journal of Multivariate Analysis, Volume 88, Issue 2, February 2004, pages 365-411.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.LedoitWolf.html)

## Constructors

### new LedoitWolf()

> **new LedoitWolf**(`opts`?): [`LedoitWolf`](LedoitWolf.md)

#### Parameters

• **opts?**

• **opts.assume\_centered?**: `boolean`

If `true`, data will not be centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false` (default), data will be centered before computation.

**Default Value**

`false`

• **opts.block\_size?**: `number`

Size of blocks into which the covariance matrix will be split during its Ledoit-Wolf estimation. This is purely a memory optimization and does not affect results.

**Default Value**

`1000`

• **opts.store\_precision?**: `boolean`

Specify if the estimated precision is stored.

**Default Value**

`true`

#### Returns

[`LedoitWolf`](LedoitWolf.md)

#### Defined in

[generated/covariance/LedoitWolf.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/LedoitWolf.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/LedoitWolf.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/LedoitWolf.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/covariance/LedoitWolf.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/covariance/LedoitWolf.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L19)

## Accessors

### covariance\_

#### Get Signature

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated covariance matrix.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/LedoitWolf.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L385)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L504)

***

### location\_

#### Get Signature

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated location, i.e. the estimated mean.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L410)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:479](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L479)

***

### precision\_

#### Get Signature

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/LedoitWolf.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L433)

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

[generated/covariance/LedoitWolf.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L51)

***

### shrinkage\_

#### Get Signature

> **get** **shrinkage\_**(): `Promise`\<`number`\>

Coefficient in the convex combination used for the computation of the shrunk estimate. Range is \[0, 1\].

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L456)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L103)

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

[generated/covariance/LedoitWolf.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L120)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the Ledoit-Wolf shrunk covariance model to X.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Training data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/LedoitWolf.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L173)

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

[generated/covariance/LedoitWolf.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L212)

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

[generated/covariance/LedoitWolf.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L246)

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

[generated/covariance/LedoitWolf.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L64)

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

[generated/covariance/LedoitWolf.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L278)

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

[generated/covariance/LedoitWolf.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L312)

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

[generated/covariance/LedoitWolf.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/covariance/LedoitWolf.ts#L353)
