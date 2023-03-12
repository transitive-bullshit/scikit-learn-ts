[sklearn](../readme.md) / [Exports](../modules.md) / StackingClassifier

# Class: StackingClassifier

Stack of estimators with a final classifier.

Stacked generalization consists in stacking the output of individual estimator and use a classifier to compute the final prediction. Stacking allows to use the strength of each individual estimator by using their output as input of a final estimator.

Note that `estimators\_` are fitted on the full `X` while `final\_estimator\_` is trained using cross-validated predictions of the base estimators using `cross\_val\_predict`.

Read more in the [User Guide](../ensemble.html#stacking).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.StackingClassifier.html

## Table of contents

### Constructors

- [constructor](StackingClassifier.md#constructor)

### Properties

- [\_isDisposed](StackingClassifier.md#_isdisposed)
- [\_isInitialized](StackingClassifier.md#_isinitialized)
- [\_py](StackingClassifier.md#_py)
- [id](StackingClassifier.md#id)
- [opts](StackingClassifier.md#opts)

### Accessors

- [classes\_](StackingClassifier.md#classes_)
- [estimators\_](StackingClassifier.md#estimators_)
- [feature\_names\_in\_](StackingClassifier.md#feature_names_in_)
- [final\_estimator\_](StackingClassifier.md#final_estimator_)
- [named\_estimators\_](StackingClassifier.md#named_estimators_)
- [py](StackingClassifier.md#py)
- [stack\_method\_](StackingClassifier.md#stack_method_)

### Methods

- [decision\_function](StackingClassifier.md#decision_function)
- [dispose](StackingClassifier.md#dispose)
- [fit](StackingClassifier.md#fit)
- [fit\_transform](StackingClassifier.md#fit_transform)
- [get\_feature\_names\_out](StackingClassifier.md#get_feature_names_out)
- [init](StackingClassifier.md#init)
- [predict](StackingClassifier.md#predict)
- [predict\_proba](StackingClassifier.md#predict_proba)
- [score](StackingClassifier.md#score)
- [set\_output](StackingClassifier.md#set_output)
- [transform](StackingClassifier.md#transform)

## Constructors

### constructor

• **new StackingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StackingClassifierOptions`](../interfaces/StackingClassifierOptions.md) |

#### Defined in

[generated/ensemble/StackingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/StackingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/StackingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/StackingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/StackingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L422)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The elements of the `estimators` parameter, having been fitted on the training data. If an estimator has been set to `'drop'`, it will not appear in `estimators\_`. When `cv="prefit"`, `estimators\_` is set to `estimators` and is not fitted again.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L449)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L503)

___

### final\_estimator\_

• `get` **final_estimator_**(): `Promise`<`any`\>

The classifier which predicts given the output of `estimators\_`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L530)

___

### named\_estimators\_

• `get` **named_estimators_**(): `Promise`<`any`\>

Attribute to access any fitted sub-estimators by name.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L476)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/StackingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/StackingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L36)

___

### stack\_method\_

• `get` **stack_method_**(): `Promise`<`any`\>

The method used by each base estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L557)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Decision function for samples in `X` using the final estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierDecisionFunctionOptions`](../interfaces/StackingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L112)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierFitOptions`](../interfaces/StackingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L147)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierFitTransformOptions`](../interfaces/StackingClassifierFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:183](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L183)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierGetFeatureNamesOutOptions`](../interfaces/StackingClassifierGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L221)

___

### init

▸ **init**(`py`): `Promise`<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict target for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierPredictOptions`](../interfaces/StackingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L256)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`[] \| [`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities for `X` using the final estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierPredictProbaOptions`](../interfaces/StackingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[] \| [`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L288)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierScoreOptions`](../interfaces/StackingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L324)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierSetOutputOptions`](../interfaces/StackingClassifierSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:360](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L360)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Return class labels or probabilities for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StackingClassifierTransformOptions`](../interfaces/StackingClassifierTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/StackingClassifier.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L390)
