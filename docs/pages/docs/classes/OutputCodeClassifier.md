**sklearn** • **Docs**

***

(Error-Correcting) Output-Code multiclass strategy.

Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < `code\_size` < 1) or for making the model more robust to errors (`code\_size` > 1). See the documentation for more details.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html)

## Constructors

### new OutputCodeClassifier()

> **new OutputCodeClassifier**(`opts`?): [`OutputCodeClassifier`](OutputCodeClassifier.md)

#### Parameters

• **opts?**

• **opts.code\_size?**: `number`

Percentage of the number of classes to be used to create the code book. A number between 0 and 1 will require fewer classifiers than one-vs-the-rest. A number greater than 1 will require more classifiers than one-vs-the-rest.

**Default Value**

`1.5`

• **opts.estimator?**: `any`

An estimator object implementing fit and one of decision\_function or predict\_proba.

• **opts.n\_jobs?**: `number`

The number of jobs to use for the computation: the multiclass problems are computed in parallel.

`undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.random\_state?**: `number`

The generator used to initialize the codebook. Pass an int for reproducible output across multiple function calls. See Glossary.

#### Returns

[`OutputCodeClassifier`](OutputCodeClassifier.md)

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L19)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Array containing labels.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L356)

***

### code\_book\_

#### Get Signature

> **get** **code\_book\_**(): `Promise`\<`ArrayLike`[]\>

Binary array containing the code of each class.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:383](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L383)

***

### estimators\_

#### Get Signature

> **get** **estimators\_**(): `Promise`\<`any`\>

Estimators used for predictions.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L329)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:437](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L437)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:410](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L410)

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

[generated/multiclass/OutputCodeClassifier.ts:54](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L54)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L110)

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

• **opts.y?**: `ArrayLike`

Multi-class targets.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L127)

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

[generated/multiclass/OutputCodeClassifier.ts:173](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L173)

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

[generated/multiclass/OutputCodeClassifier.ts:67](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L67)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict multi-class targets using underlying estimators.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Data.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L209)

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

[generated/multiclass/OutputCodeClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L245)

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

[generated/multiclass/OutputCodeClassifier.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L293)
