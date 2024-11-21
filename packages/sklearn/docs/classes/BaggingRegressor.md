[**sklearn**](../README.md) • **Docs**

***

A Bagging regressor.

A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#r4d113ba76fc0-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#r4d113ba76fc0-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#r4d113ba76fc0-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#r4d113ba76fc0-4).

Read more in the [User Guide](../ensemble.html#bagging).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html)

## Constructors

### new BaggingRegressor()

> **new BaggingRegressor**(`opts`?): [`BaggingRegressor`](BaggingRegressor.md)

#### Parameters

• **opts?**

• **opts.bootstrap?**: `boolean`

Whether samples are drawn with replacement. If `false`, sampling without replacement is performed.

**Default Value**

`true`

• **opts.bootstrap\_features?**: `boolean`

Whether features are drawn with replacement.

**Default Value**

`false`

• **opts.estimator?**: `any`

The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeRegressor`](sklearn.tree.DecisionTreeRegressor.html#sklearn.tree.DecisionTreeRegressor "sklearn.tree.DecisionTreeRegressor").

• **opts.max\_features?**: `number`

The number of features to draw from X to train each base estimator ( without replacement by default, see `bootstrap\_features` for more details).

**Default Value**

`1`

• **opts.max\_samples?**: `number`

The number of samples to draw from X to train each base estimator (with replacement by default, see `bootstrap` for more details).

**Default Value**

`1`

• **opts.n\_estimators?**: `number`

The number of base estimators in the ensemble.

**Default Value**

`10`

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingRegressor.fit "sklearn.ensemble.BaggingRegressor.fit") and [`predict`](#sklearn.ensemble.BaggingRegressor.predict "sklearn.ensemble.BaggingRegressor.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.oob\_score?**: `boolean`

Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.verbose?**: `number`

Controls the verbosity when fitting and predicting.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See [the Glossary](../../glossary.html#term-warm_start).

**Default Value**

`false`

#### Returns

[`BaggingRegressor`](BaggingRegressor.md)

#### Defined in

[generated/ensemble/BaggingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L21)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the ensemble is grown.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L423)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted sub-estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L504)

***

### estimators\_features\_

#### Get Signature

> **get** **estimators\_features\_**(): `Promise`\<`any`\>

The subset of drawn features for each base estimator.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L531)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L477)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L450)

***

### oob\_prediction\_

#### Get Signature

> **get** **oob\_prediction\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Prediction computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_prediction\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:585](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L585)

***

### oob\_score\_

#### Get Signature

> **get** **oob\_score\_**(): `Promise`\<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:558](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L558)

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

[generated/ensemble/BaggingRegressor.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L103)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L157)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a Bagging ensemble of estimators from the training set (X, y).

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters to pass to the underlying estimators.

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The target values (class labels in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L174)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:225](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L225)

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

[generated/ensemble/BaggingRegressor.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L116)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Parameters

• **opts**

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L263)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

• **opts**

• **opts.sample\_weight?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Sample weights.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Test samples. For some estimators this may be a precomputed kernel matrix or a list of generic objects instead with shape `(n\_samples, n\_samples\_fitted)`, where `n\_samples\_fitted` is the number of samples used in the fitting for the estimator.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

True values for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L299)

***

### set\_fit\_request()

> **set\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L347)

***

### set\_score\_request()

> **set\_score\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `score` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.sample\_weight?**: `string` \| `boolean`

Metadata routing for `sample\_weight` parameter in `score`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L387)
