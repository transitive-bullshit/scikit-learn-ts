**sklearn** • **Docs**

***

A Bagging classifier.

A Bagging classifier is an ensemble meta-estimator that fits base classifiers each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#rb1846455d0e5-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#rb1846455d0e5-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#rb1846455d0e5-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#rb1846455d0e5-4).

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html)

## Constructors

### new BaggingClassifier()

> **new BaggingClassifier**(`opts`?): [`BaggingClassifier`](BaggingClassifier.md)

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

The base estimator to fit on random subsets of the dataset. If `undefined`, then the base estimator is a [`DecisionTreeClassifier`](sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier "sklearn.tree.DecisionTreeClassifier").

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

The number of jobs to run in parallel for both [`fit`](#sklearn.ensemble.BaggingClassifier.fit "sklearn.ensemble.BaggingClassifier.fit") and [`predict`](#sklearn.ensemble.BaggingClassifier.predict "sklearn.ensemble.BaggingClassifier.predict"). `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.oob\_score?**: `boolean`

Whether to use out-of-bag samples to estimate the generalization error. Only available if bootstrap=`true`.

**Default Value**

`false`

• **opts.random\_state?**: `number`

Controls the random resampling of the original dataset (sample wise and feature wise). If the base estimator accepts a `random\_state` attribute, a different seed is generated for each instance in the ensemble. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.verbose?**: `number`

Controls the verbosity when fitting and predicting.

**Default Value**

`0`

• **opts.warm\_start?**: `boolean`

When set to `true`, reuse the solution of the previous call to fit and add more estimators to the ensemble, otherwise, just fit a whole new ensemble. See the Glossary.

**Default Value**

`false`

#### Returns

[`BaggingClassifier`](BaggingClassifier.md)

#### Defined in

[generated/ensemble/BaggingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/ensemble/BaggingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

The classes labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:670](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L670)

***

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The base estimator from which the ensemble is grown.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L535)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

The collection of fitted base estimators.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:616](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L616)

***

### estimators\_features\_

#### Get Signature

> **get** **estimators\_features\_**(): `Promise`\<`any`\>

The subset of drawn features for each base estimator.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L643)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:589](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L589)

***

### n\_classes\_

#### Get Signature

> **get** **n\_classes\_**(): `Promise`\<`number` \| `any`[]\>

The number of classes.

##### Returns

`Promise`\<`number` \| `any`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L697)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L562)

***

### oob\_decision\_function\_

#### Get Signature

> **get** **oob\_decision\_function\_**(): `Promise`\<`ArrayLike`[]\>

Decision function computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_decision\_function\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:751](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L751)

***

### oob\_score\_

#### Get Signature

> **get** **oob\_score\_**(): `Promise`\<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L724)

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

[generated/ensemble/BaggingClassifier.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L103)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`[]\>

Average of the decision functions of the base classifiers.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L174)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:157](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L157)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Build a Bagging ensemble of estimators from the training set (X, y).

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters to pass to the underlying estimators.

• **opts.sample\_weight?**: `ArrayLike`

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if the base estimator supports sample weighting.

• **opts.X?**: `ArrayLike`

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

• **opts.y?**: `ArrayLike`

The target values (class labels in classification, real numbers in regression).

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L210)

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

[generated/ensemble/BaggingClassifier.ts:261](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L261)

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

[generated/ensemble/BaggingClassifier.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L116)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class for X.

The predicted class of an input sample is computed as the class with the highest mean predicted probability. If base estimators do not implement a `predict\_proba` method, then it resorts to voting.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L299)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class log-probabilities for X.

The predicted class log-probabilities of an input sample is computed as the log of the mean predicted class probabilities of the base estimators in the ensemble.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L335)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class probabilities for X.

The predicted class probabilities of an input sample is computed as the mean predicted class probabilities of the base estimators in the ensemble. If base estimators do not implement a `predict\_proba` method, then it resorts to voting and the predicted class probabilities of an input sample represents the proportion of estimators predicting each class.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The training input samples. Sparse matrices are accepted only if they are supported by the base estimator.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/ensemble/BaggingClassifier.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L373)

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

[generated/ensemble/BaggingClassifier.ts:411](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L411)

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

[generated/ensemble/BaggingClassifier.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L459)

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

[generated/ensemble/BaggingClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/ensemble/BaggingClassifier.ts#L499)
