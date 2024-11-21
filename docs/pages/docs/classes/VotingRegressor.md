**sklearn** • **Docs**

***

Prediction voting regressor for unfitted estimators.

A voting regressor is an ensemble meta-estimator that fits several base regressors, each on the whole dataset. Then it averages the individual predictions to form a final prediction.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingRegressor.html)

## Constructors

### new VotingRegressor()

> **new VotingRegressor**(`opts`?): [`VotingRegressor`](VotingRegressor.md)

#### Parameters

• **opts?**

• **opts.estimators?**: `any`

Invoking the `fit` method on the `VotingRegressor` will fit clones of those original estimators that will be stored in the class attribute `self.estimators\_`. An estimator can be set to `'drop'` using [`set\_params`](#sklearn.ensemble.VotingRegressor.set_params "sklearn.ensemble.VotingRegressor.set_params").

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel for `fit`. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.verbose?**: `boolean`

If `true`, the time elapsed while fitting will be printed as it is completed.

**Default Value**

`false`

• **opts.weights?**: `ArrayLike`

Sequence of weights (`float` or `int`) to weight the occurrences of predicted values before averaging. Uses uniform weights if `undefined`.

#### Returns

[`VotingRegressor`](VotingRegressor.md)

#### Defined in

[generated/ensemble/VotingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/VotingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/VotingRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/VotingRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L19)

## Accessors

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L502)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L552)

***

### named\_estimators\_

#### Get Signature

> **get** **named\_estimators\_**(): `Promise`\<`any`\>

Attribute to access any fitted sub-estimators by name.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:527](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L527)

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

[generated/ensemble/VotingRegressor.ts:52](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L52)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L104)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the estimators.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters to pass to the underlying estimators.

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:121](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L121)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L170)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L212)

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

[generated/ensemble/VotingRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L248)

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

[generated/ensemble/VotingRegressor.ts:65](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L65)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input samples.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:284](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L284)

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

[generated/ensemble/VotingRegressor.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L318)

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

[generated/ensemble/VotingRegressor.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L364)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L400)

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

[generated/ensemble/VotingRegressor.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L436)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Return predictions for X for each estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The input samples.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/VotingRegressor.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/VotingRegressor.ts#L470)
