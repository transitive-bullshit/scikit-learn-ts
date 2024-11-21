**sklearn** • **Docs**

***

Multi target regression.

This strategy consists of fitting one regressor per target. This is a simple strategy for extending regressors that do not natively support multi-target regression.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputRegressor.html)

## Constructors

### new MultiOutputRegressor()

> **new MultiOutputRegressor**(`opts`?): [`MultiOutputRegressor`](MultiOutputRegressor.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

An estimator object implementing fit and predict.

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel. [`fit`](#sklearn.multioutput.MultiOutputRegressor.fit "sklearn.multioutput.MultiOutputRegressor.fit"), [`predict`](#sklearn.multioutput.MultiOutputRegressor.predict "sklearn.multioutput.MultiOutputRegressor.predict") and [`partial\_fit`](#sklearn.multioutput.MultiOutputRegressor.partial_fit "sklearn.multioutput.MultiOutputRegressor.partial_fit") (if supported by the passed estimator) will be parallelized for each target.

When individual estimators are fast to train or predict, using `n\_jobs > 1` can result in slower performance due to the parallelism overhead.

`undefined` means `1` unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all available processes / threads. See Glossary for more details.

#### Returns

[`MultiOutputRegressor`](MultiOutputRegressor.md)

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L23)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L21)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L20)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L19)

***

### id

> **id**: `string`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L16)

***

### opts

> **opts**: `any`

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L17)

## Accessors

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

Estimators used for predictions.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L455)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:509](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L509)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit. Only defined if the underlying `estimator` exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L482)

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

[generated/multioutput/MultiOutputRegressor.ts:42](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L42)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L98)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the model to data, separately for each output variable.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters passed to the `estimator.fit` method of each step.

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.

• **opts.X?**: `ArrayLike`

The input data.

• **opts.y?**: `ArrayLike`

Multi-output targets. An indicator matrix turns on multilabel estimation.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:115](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L115)

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

[generated/multioutput/MultiOutputRegressor.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L166)

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

[generated/multioutput/MultiOutputRegressor.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L55)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Incrementally fit the model to data, for each output variable.

#### Parameters

• **opts**

• **opts.partial\_fit\_params?**: `any`

Parameters passed to the `estimator.partial\_fit` method of each sub-estimator.

Only available if `enable\_metadata\_routing=True`. See the User Guide.

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Only supported if the underlying regressor supports sample weights.

• **opts.X?**: `ArrayLike`

The input data.

• **opts.y?**: `ArrayLike`

Multi-output targets.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L202)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict multi-output variable using model for each target variable.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L255)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: `ArrayLike`

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L291)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:339](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L339)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L379)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multioutput/MultiOutputRegressor.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/multioutput/MultiOutputRegressor.ts#L419)
