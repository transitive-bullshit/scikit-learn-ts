**sklearn** • **Docs**

***

One-vs-the-rest (OvR) multiclass strategy.

Also known as one-vs-all, this strategy consists in fitting one classifier per class. For each classifier, the class is fitted against all the other classes. In addition to its computational efficiency (only `n\_classes` classifiers are needed), one advantage of this approach is its interpretability. Since each class is represented by one and one classifier only, it is possible to gain knowledge about the class by inspecting its corresponding classifier. This is the most commonly used strategy for multiclass classification and is a fair default choice.

OneVsRestClassifier can also be used for multilabel classification. To use this feature, provide an indicator matrix for the target `y` when calling `.fit`. In other words, the target labels should be formatted as a 2D binary (0/1) matrix, where \[i, j\] == 1 indicates the presence of label j in sample i. This estimator uses the binary relevance method to perform multilabel classification, which involves training one binary classifier independently for each label.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OneVsRestClassifier.html)

## Constructors

### new OneVsRestClassifier()

> **new OneVsRestClassifier**(`opts`?): [`OneVsRestClassifier`](OneVsRestClassifier.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

A regressor or a classifier that implements fit. When a classifier is passed, decision\_function will be used in priority and it will fallback to predict\_proba if it is not available. When a regressor is passed, predict is used.

• **opts.n\_jobs?**: `number`

The number of jobs to use for the computation: the `n\_classes` one-vs-rest problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.verbose?**: `number`

The verbosity level, if non zero, progress messages are printed. Below 50, the output is sent to stderr. Otherwise, the output is sent to stdout. The frequency of the messages increases with the verbosity level, reporting all iterations at 10. See [`joblib.Parallel`](https://joblib.readthedocs.io/en/latest/generated/joblib.Parallel.html#joblib.Parallel "(in joblib v1.5.dev0)") for more details.

**Default Value**

`0`

#### Returns

[`OneVsRestClassifier`](OneVsRestClassifier.md)

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L21)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`any`\>

Class labels.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:526](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L526)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

Estimators used for predictions.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L499)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:607](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L607)

***

### label\_binarizer\_

#### Get Signature

> **get** **label\_binarizer\_**(): `Promise`\<`any`\>

Object used to transform multiclass labels to binary labels and vice-versa.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:553](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L553)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:580](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L580)

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

[generated/multiclass/OneVsRestClassifier.ts:51](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L51)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`[]\>

Decision function for the OneVsRestClassifier.

Return the distance of each sample from the decision boundary for each class. This can only be used with estimators which implement the `decision\_function` method.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

Input data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L126)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L107)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit underlying estimators.

#### Parameters

• **opts**

• **opts.fit\_params?**: `any`

Parameters passed to the `estimator.fit` method of each sub-estimator.

• **opts.X?**: `ArrayLike`

Data.

• **opts.y?**: `any`

Multi-class targets. An indicator matrix turns on multilabel classification.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:162](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L162)

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

[generated/multiclass/OneVsRestClassifier.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L208)

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

[generated/multiclass/OneVsRestClassifier.ts:64](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L64)

***

### partial\_fit()

> **partial\_fit**(`opts`): `Promise`\<`any`\>

Partially fit underlying estimators.

Should be used when memory is inefficient to train all data. Chunks of data can be passed in several iterations.

#### Parameters

• **opts**

• **opts.classes?**: `any`

Classes across all calls to partial\_fit. Can be obtained via `np.unique(y\_all)`, where y\_all is the target vector of the entire dataset. This argument is only required in the first call of partial\_fit and can be omitted in the subsequent calls.

• **opts.partial\_fit\_params?**: `any`

Parameters passed to the `estimator.partial\_fit` method of each sub-estimator.

• **opts.X?**: `ArrayLike`

Data.

• **opts.y?**: `any`

Multi-class targets. An indicator matrix turns on multilabel classification.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:246](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L246)

***

### predict()

> **predict**(`opts`): `Promise`\<`any`\>

Predict multi-class targets using underlying estimators.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Data.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L297)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Probability estimates.

The returned estimates for all classes are ordered by label of classes.

Note that in the multilabel case, each sample can have any number of labels. This returns the marginal probability that the given sample has the label in question. For example, it is entirely consistent that two labels both have a 90% probability of applying to a given sample.

In the single label multiclass case, the rows of the returned matrix sum to 1.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Input data.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L337)

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

[generated/multiclass/OneVsRestClassifier.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L375)

***

### set\_partial\_fit\_request()

> **set\_partial\_fit\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `partial\_fit` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.classes?**: `string` \| `boolean`

Metadata routing for `classes` parameter in `partial\_fit`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OneVsRestClassifier.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L423)

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

[generated/multiclass/OneVsRestClassifier.ts:463](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OneVsRestClassifier.ts#L463)
