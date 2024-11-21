**sklearn** • **Docs**

***

Sparse inverse covariance w/ cross-validated choice of the l1 penalty.

See glossary entry for cross-validation estimator.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.covariance.GraphicalLassoCV.html)

## Constructors

### new GraphicalLassoCV()

> **new GraphicalLassoCV**(`opts`?): [`GraphicalLassoCV`](GraphicalLassoCV.md)

#### Parameters

• **opts?**

• **opts.alphas?**: `number` \| `ArrayLike`

If an integer is given, it fixes the number of points on the grids of alpha to be used. If a list is given, it gives the grid to be used. See the notes in the class docstring for more details. Range is \[1, inf) for an integer. Range is (0, inf\] for an array-like of floats.

**Default Value**

`4`

• **opts.assume\_centered?**: `boolean`

If `true`, data are not centered before computation. Useful when working with data whose mean is almost, but not exactly zero. If `false`, data are centered before computation.

**Default Value**

`false`

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.enet\_tol?**: `number`

The tolerance for the elastic net solver used to calculate the descent direction. This parameter controls the accuracy of the search direction for a given column update, not of the overall parameter estimate. Only used for mode=’cd’. Range is (0, inf\].

**Default Value**

`0.0001`

• **opts.eps?**: `number`

The machine-precision regularization in the computation of the Cholesky diagonal factors. Increase this for very ill-conditioned systems. Default is `np.finfo(np.float64).eps`.

• **opts.max\_iter?**: `number`

Maximum number of iterations.

**Default Value**

`100`

• **opts.mode?**: `"cd"` \| `"lars"`

The Lasso solver to use: coordinate descent or LARS. Use LARS for very sparse underlying graphs, where number of features is greater than number of samples. Elsewhere prefer cd which is more numerically stable.

**Default Value**

`'cd'`

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.n\_refinements?**: `number`

The number of times the grid is refined. Not used if explicit values of alphas are passed. Range is \[1, inf).

**Default Value**

`4`

• **opts.tol?**: `number`

The tolerance to declare convergence: if the dual gap goes below this value, iterations are stopped. Range is (0, inf\].

**Default Value**

`0.0001`

• **opts.verbose?**: `boolean`

If verbose is `true`, the objective function and duality gap are printed at each iteration.

**Default Value**

`false`

#### Returns

[`GraphicalLassoCV`](GraphicalLassoCV.md)

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L19)

## Accessors

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

Penalization parameter selected.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L568)

***

### costs\_

#### Get Signature

> **get** **costs\_**(): `Promise`\<`any`\>

The list of values of the objective function and the dual gap at each iteration. Returned only if return\_costs is `true`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:541](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L541)

***

### covariance\_

#### Get Signature

> **get** **covariance\_**(): `Promise`\<`ArrayLike`[]\>

Estimated covariance matrix.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:487](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L487)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys:

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L595)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L676)

***

### location\_

#### Get Signature

> **get** **location\_**(): `Promise`\<`ArrayLike`\>

Estimated location, i.e. the estimated mean.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:460](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L460)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L649)

***

### n\_iter\_

#### Get Signature

> **get** **n\_iter\_**(): `Promise`\<`number`\>

Number of iterations run for the optimal alpha.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:622](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L622)

***

### precision\_

#### Get Signature

> **get** **precision\_**(): `Promise`\<`ArrayLike`[]\>

Estimated precision matrix (inverse covariance).

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L514)

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

[generated/covariance/GraphicalLassoCV.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L101)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:155](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L155)

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

[generated/covariance/GraphicalLassoCV.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L172)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the GraphicalLasso covariance model to X.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the CV splitter and the cross\_val\_score function.

• **opts.X?**: `ArrayLike`[]

Data from which to compute the covariance estimate.

• **opts.y?**: `any`

Not used, present for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L227)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/covariance/GraphicalLassoCV.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L273)

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

[generated/covariance/GraphicalLassoCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L309)

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

[generated/covariance/GraphicalLassoCV.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L114)

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

[generated/covariance/GraphicalLassoCV.ts:345](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L345)

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

[generated/covariance/GraphicalLassoCV.ts:381](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L381)

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

[generated/covariance/GraphicalLassoCV.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/covariance/GraphicalLassoCV.ts#L424)
