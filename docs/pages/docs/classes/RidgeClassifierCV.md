**sklearn** • **Docs**

***

Ridge classifier with built-in cross-validation.

See glossary entry for cross-validation estimator.

By default, it performs Leave-One-Out Cross-Validation. Currently, only the n\_features > n\_samples case is handled efficiently.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RidgeClassifierCV.html)

## Constructors

### new RidgeClassifierCV()

> **new RidgeClassifierCV**(`opts`?): [`RidgeClassifierCV`](RidgeClassifierCV.md)

#### Parameters

• **opts?**

• **opts.alphas?**: `ArrayLike`

Array of alpha values to try. Regularization strength; must be a positive float. Regularization improves the conditioning of the problem and reduces the variance of the estimates. Larger values specify stronger regularization. Alpha corresponds to `1 / (2C)` in other linear models such as [`LogisticRegression`](sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression "sklearn.linear_model.LogisticRegression") or [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC"). If using Leave-One-Out cross-validation, alphas must be strictly positive.

• **opts.class\_weight?**: `any`

Weights associated with classes in the form `{class\_label: weight}`. If not given, all classes are supposed to have weight one.

The “balanced” mode uses the values of y to automatically adjust weights inversely proportional to class frequencies in the input data as `n\_samples / (n\_classes \* np.bincount(y))`.

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.fit\_intercept?**: `boolean`

Whether to calculate the intercept for this model. If set to false, no intercept will be used in calculations (i.e. data is expected to be centered).

**Default Value**

`true`

• **opts.scoring?**: `string`

A string (see The scoring parameter: defining model evaluation rules) or a scorer callable object / function with signature `scorer(estimator, X, y)`.

• **opts.store\_cv\_results?**: `boolean`

Flag indicating if the cross-validation results corresponding to each alpha should be stored in the `cv\_results\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

**Default Value**

`false`

• **opts.store\_cv\_values?**: `boolean`

Flag indicating if the cross-validation values corresponding to each alpha should be stored in the `cv\_values\_` attribute (see below). This flag is only compatible with `cv=None` (i.e. using Leave-One-Out Cross-Validation).

#### Returns

[`RidgeClassifierCV`](RidgeClassifierCV.md)

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L21)

## Accessors

### alpha\_

#### Get Signature

> **get** **alpha\_**(): `Promise`\<`number`\>

Estimated regularization parameter.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L512)

***

### best\_score\_

#### Get Signature

> **get** **best\_score\_**(): `Promise`\<`number`\>

Score of base estimator with best alpha.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:539](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L539)

***

### coef\_

#### Get Signature

> **get** **coef\_**(): `Promise`\<`ArrayLike`[]\>

Coefficient of the features in the decision function.

`coef\_` is of shape (1, n\_features) when the given problem is binary.

##### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L458)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`ArrayLike`[][]\>

Cross-validation results for each alpha (only if `store\_cv\_results=True` and `cv=None`). After `fit()` has been called, this attribute will contain the mean squared errors if `scoring is None` otherwise it will contain standardized per point prediction values.

##### Returns

`Promise`\<`ArrayLike`[][]\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L429)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L593)

***

### intercept\_

#### Get Signature

> **get** **intercept\_**(): `Promise`\<`number` \| `ArrayLike`\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

##### Returns

`Promise`\<`number` \| `ArrayLike`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:485](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L485)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L566)

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

[generated/linear\_model/RidgeClassifierCV.ts:73](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L73)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`

The data matrix for which we want to get the confidence scores.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L146)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L127)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit Ridge classifier with cv.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the underlying scorer.

• **opts.sample\_weight?**: `number` \| `ArrayLike`

Individual weights for each sample. If given a float, every sample will have the same weight.

• **opts.X?**: `ArrayLike`[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. When using GCV, will be cast to float64 if necessary.

• **opts.y?**: `ArrayLike`

Target values. Will be cast to X’s dtype if necessary.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L182)

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

[generated/linear\_model/RidgeClassifierCV.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L233)

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

[generated/linear\_model/RidgeClassifierCV.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L86)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Predict class labels for samples in `X`.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data matrix for which we want to predict the targets.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/linear\_model/RidgeClassifierCV.ts:269](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L269)

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

[generated/linear\_model/RidgeClassifierCV.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L305)

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

[generated/linear\_model/RidgeClassifierCV.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L353)

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

[generated/linear\_model/RidgeClassifierCV.ts:393](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/linear_model/RidgeClassifierCV.ts#L393)
