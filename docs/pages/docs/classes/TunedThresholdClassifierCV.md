**sklearn** • **Docs**

***

Classifier that post-tunes the decision threshold using cross-validation.

This estimator post-tunes the decision threshold (cut-off point) that is used for converting posterior probability estimates (i.e. output of `predict\_proba`) or decision scores (i.e. output of `decision\_function`) into a class label. The tuning is done by optimizing a binary metric, potentially constrained by a another metric.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TunedThresholdClassifierCV.html)

## Constructors

### new TunedThresholdClassifierCV()

> **new TunedThresholdClassifierCV**(`opts`?): [`TunedThresholdClassifierCV`](TunedThresholdClassifierCV.md)

#### Parameters

• **opts?**

• **opts.cv?**: `number` \| `"prefit"`

Determines the cross-validation splitting strategy to train classifier. Possible inputs for cv are:

• **opts.estimator?**: `any`

The classifier, fitted or not, for which we want to optimize the decision threshold used during `predict`.

• **opts.n\_jobs?**: `number`

The number of jobs to run in parallel. When `cv` represents a cross-validation strategy, the fitting and scoring on each data split is done in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.random\_state?**: `number`

Controls the randomness of cross-validation when `cv` is a float. See Glossary.

• **opts.refit?**: `boolean`

Whether or not to refit the classifier on the entire training set once the decision threshold has been found. Note that forcing `refit=False` on cross-validation having more than a single split will raise an error. Similarly, `refit=True` in conjunction with `cv="prefit"` will raise an error.

**Default Value**

`true`

• **opts.response\_method?**: `"auto"` \| `"predict_proba"` \| `"decision_function"`

Methods by the classifier `estimator` corresponding to the decision function for which we want to find a threshold. It can be:

**Default Value**

`'auto'`

• **opts.scoring?**: `string`

The objective metric to be optimized. Can be one of:

**Default Value**

`'balanced_accuracy'`

• **opts.store\_cv\_results?**: `boolean`

Whether to store all scores and thresholds computed during the cross-validation process.

**Default Value**

`false`

• **opts.thresholds?**: `number` \| `ArrayLike`

The number of decision threshold to use when discretizing the output of the classifier `method`. Pass an array-like to manually specify the thresholds to use.

**Default Value**

`100`

#### Returns

[`TunedThresholdClassifierCV`](TunedThresholdClassifierCV.md)

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L19)

## Accessors

### best\_score\_

#### Get Signature

> **get** **best\_score\_**(): `Promise`\<`number`\>

The optimal score of the objective metric, evaluated at `best\_threshold\_`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L528)

***

### best\_threshold\_

#### Get Signature

> **get** **best\_threshold\_**(): `Promise`\<`number`\>

The new decision threshold.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L501)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dictionary containing the scores and thresholds computed during the cross-validation process. Only exist if `store\_cv\_results=True`. The keys are `"thresholds"` and `"scores"`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:555](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L555)

***

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The fitted classifier used when predicting.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L474)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:609](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L609)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:582](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L582)

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

[generated/model\_selection/TunedThresholdClassifierCV.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L85)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Decision function for samples in `X` using the fitted estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L158)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:141](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L141)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the classifier.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to pass to the `fit` method of the underlying classifier.

• **opts.X?**: `ArrayLike`

Training data.

• **opts.y?**: `ArrayLike`

Target values.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L194)

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

[generated/model\_selection/TunedThresholdClassifierCV.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L242)

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

[generated/model\_selection/TunedThresholdClassifierCV.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L98)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict the target of new samples.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The samples, as accepted by `estimator.predict`.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:278](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L278)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict logarithm class probabilities for `X` using the fitted estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:314](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L314)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`[]\>

Predict class probabilities for `X` using the fitted estimator.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/model\_selection/TunedThresholdClassifierCV.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L350)

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

[generated/model\_selection/TunedThresholdClassifierCV.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L388)

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

[generated/model\_selection/TunedThresholdClassifierCV.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/model_selection/TunedThresholdClassifierCV.ts#L438)
