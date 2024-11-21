**sklearn** • **Docs**

***

Stack of estimators with a final classifier.

Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html)

## Constructors

### new StackingClassifier()

> **new StackingClassifier**(`opts`?): [`StackingClassifier`](StackingClassifier.md)

#### Parameters

• **opts?**

• **opts.cv?**: `number` \| `"prefit"`

Determines the cross-validation splitting strategy used in `cross\_val\_predict` to train `final\_estimator`. Possible inputs for cv are:

• **opts.estimators?**: `any`

Base estimators which will be stacked together. Each element of the list is defined as a tuple of string (i.e. name) and an estimator instance. An estimator can be set to ‘drop’ using `set\_params`.

The type of estimator is generally expected to be a classifier. However, one can pass a regressor for some use case (e.g. ordinal regression).

• **opts.final\_estimator?**: `any`

A classifier which will be used to combine the base estimators. The default classifier is a [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression").

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel all `estimators` `fit`. `undefined` means 1 unless in a `joblib.parallel\_backend` context. -1 means using all processors. See Glossary for more details.

• **opts.passthrough?**: `boolean`

When `false`, only the predictions of estimators will be used as training data for `final\_estimator`. When `true`, the `final\_estimator` is trained on the predictions as well as the original training data.

**Default Value**

`false`

• **opts.stack\_method?**: `"auto"` \| `"predict_proba"` \| `"decision_function"` \| `"predict"`

Methods called for each base estimator. It can be:

**Default Value**

`'auto'`

• **opts.verbose?**: `number`

Verbosity level.

**Default Value**

`0`

#### Returns

[`StackingClassifier`](StackingClassifier.md)

#### Defined in

[generated/ensemble/StackingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/StackingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/StackingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/StackingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Class labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:615](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L615)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:642](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L642)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimators expose such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:696](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L696)

***

### final\_estimator\_

#### Get Signature

> **get** **final\_estimator\_**(): `Promise`\<`any`\>

The classifier which predicts given the output of `estimators\_`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:723](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L723)

***

### named\_estimators\_

#### Get Signature

> **get** **named\_estimators\_**(): `Promise`\<`any`\>

Attribute to access any fitted sub-estimators by name.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:669](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L669)

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

[generated/ensemble/StackingClassifier.ts:75](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L75)

***

### stack\_method\_

#### Get Signature

> **get** **stack\_method\_**(): `Promise`\<`any`\>

The method used by each base estimator.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:750](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L750)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Decision function for samples in `X` using the final estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L148)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:131](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L131)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the estimators.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target values. Note that `y` will be internally encoded in numerically increasing order or lexicographic order. If the order matter (e.g. for ordinal regression), one should numerically encode the target `y` before calling fit.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L184)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Additional fit parameters.

• **opts.X?**: `ArrayLike`[]

Input samples.

• **opts.y?**: `ArrayLike`

Target values (`undefined` for unsupervised transformations).

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L230)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Input features. The input feature names are only used when `passthrough` is `true`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L276)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Raise `NotImplementedError`.

This estimator does not support metadata routing yet.

#### Parameters

• **opts**

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L314)

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

[generated/ensemble/StackingClassifier.ts:88](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L88)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict target for X.

#### Parameters

• **opts**

• **opts.predict\_params?**: `any`

Parameters to the `predict` called by the `final\_estimator`. Note that this may be used to return uncertainties from some estimators with `return\_std` or `return\_cov`. Be aware that it will only accounts for uncertainty in the final estimator.

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L344)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`any`[] \| `ArrayLike`[]\>

Predict class probabilities for `X` using the final estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`any`[] \| `ArrayLike`[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L383)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

• **opts**

• **opts.sample\_weight?**: `ArrayLike`

Sample weights.

• **opts.X?**: `ArrayLike`[]

Test samples.

• **opts.y?**: `ArrayLike`

True labels for `X`.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:421](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L421)

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

[generated/ensemble/StackingClassifier.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L469)

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

[generated/ensemble/StackingClassifier.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L507)

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

[generated/ensemble/StackingClassifier.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L545)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Return class labels or probabilities for X for each estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:581](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L581)
