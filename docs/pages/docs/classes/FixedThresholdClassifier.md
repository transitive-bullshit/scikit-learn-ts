**sklearn** • **Docs**

***

Binary classifier that manually sets the decision threshold.

This classifier allows to change the default decision threshold used for converting posterior probability estimates (i.e. output of `predict\_proba`) or decision scores (i.e. output of `decision\_function`) into a class label.

Here, the threshold is not optimized and is set to a constant value.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.FixedThresholdClassifier.html)

## Constructors

### new FixedThresholdClassifier()

> **new FixedThresholdClassifier**(`opts`?): [`FixedThresholdClassifier`](FixedThresholdClassifier.md)

#### Parameters

• **opts?**

• **opts.estimator?**: `any`

The binary classifier, fitted or not, for which we want to optimize the decision threshold used during `predict`.

• **opts.pos\_label?**: `string` \| `number` \| `boolean`

The label of the positive class. Used to process the output of the `response\_method` method. When `pos\_label=None`, if `y\_true` is in `{-1, 1}` or `{0, 1}`, `pos\_label` is set to 1, otherwise an error will be raised.

• **opts.response\_method?**: `"auto"` \| `"predict_proba"` \| `"decision_function"`

Methods by the classifier `estimator` corresponding to the decision function for which we want to find a threshold. It can be:

**Default Value**

`'auto'`

• **opts.threshold?**: `number` \| `"auto"`

The decision threshold to use when converting posterior probability estimates (i.e. output of `predict\_proba`) or decision scores (i.e. output of `decision\_function`) into a class label. When `"auto"`, the threshold is set to 0.5 if `predict\_proba` is used as `response\_method`, otherwise it is set to 0 (i.e. the default threshold for `decision\_function`).

**Default Value**

`'auto'`

#### Returns

[`FixedThresholdClassifier`](FixedThresholdClassifier.md)

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L21)

## Accessors

### estimator\_

#### Get Signature

> **get** **estimator\_**(): `Promise`\<`any`\>

The fitted classifier used when predicting.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L443)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:497](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L497)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit. Only defined if the underlying estimator exposes such an attribute when fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:470](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L470)

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

[generated/model\_selection/FixedThresholdClassifier.ts:56](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L56)

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

[generated/model\_selection/FixedThresholdClassifier.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L129)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/FixedThresholdClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L112)

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

[generated/model\_selection/FixedThresholdClassifier.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L165)

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

[generated/model\_selection/FixedThresholdClassifier.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L211)

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

[generated/model\_selection/FixedThresholdClassifier.ts:69](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L69)

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

[generated/model\_selection/FixedThresholdClassifier.ts:247](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L247)

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

[generated/model\_selection/FixedThresholdClassifier.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L283)

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

[generated/model\_selection/FixedThresholdClassifier.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L319)

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

[generated/model\_selection/FixedThresholdClassifier.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L357)

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

[generated/model\_selection/FixedThresholdClassifier.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/model_selection/FixedThresholdClassifier.ts#L407)
