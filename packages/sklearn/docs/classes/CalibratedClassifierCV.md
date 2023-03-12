[sklearn](../readme.md) / [Exports](../modules.md) / CalibratedClassifierCV

# Class: CalibratedClassifierCV

Probability calibration with isotonic regression or logistic regression.

This class uses cross-validation to both estimate the parameters of a classifier and subsequently calibrate a classifier. With default `ensemble=True`, for each cv split it fits a copy of the base estimator to the training subset, and calibrates it using the testing subset. For prediction, predicted probabilities are averaged across these individual calibrated classifiers. When `ensemble=False`, cross-validation is used to obtain unbiased predictions, via [`cross\_val\_predict`](sklearn.model_selection.cross_val_predict.html#sklearn.model_selection.cross_val_predict "sklearn.model_selection.cross_val_predict"), which are then used for calibration. For prediction, the base estimator, trained using all the data, is used. This is the method implemented when `probabilities=True` for [`sklearn.svm`](../classes.html#module-sklearn.svm "sklearn.svm") estimators.

Already fitted classifiers can be calibrated via the parameter `cv="prefit"`. In this case, no cross-validation is used and all provided data is used for calibration. The user has to take care manually that data for model fitting and calibration are disjoint.

The calibration is based on the [decision\_function](../../glossary.html#term-decision_function) method of the `estimator` if it exists, else on [predict\_proba](../../glossary.html#term-predict_proba).

Read more in the [User Guide](../calibration.html#calibration).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.calibration.CalibratedClassifierCV.html

## Table of contents

### Constructors

- [constructor](CalibratedClassifierCV.md#constructor)

### Properties

- [\_isDisposed](CalibratedClassifierCV.md#_isdisposed)
- [\_isInitialized](CalibratedClassifierCV.md#_isinitialized)
- [\_py](CalibratedClassifierCV.md#_py)
- [id](CalibratedClassifierCV.md#id)
- [opts](CalibratedClassifierCV.md#opts)

### Accessors

- [calibrated\_classifiers\_](CalibratedClassifierCV.md#calibrated_classifiers_)
- [classes\_](CalibratedClassifierCV.md#classes_)
- [feature\_names\_in\_](CalibratedClassifierCV.md#feature_names_in_)
- [n\_features\_in\_](CalibratedClassifierCV.md#n_features_in_)
- [py](CalibratedClassifierCV.md#py)

### Methods

- [dispose](CalibratedClassifierCV.md#dispose)
- [fit](CalibratedClassifierCV.md#fit)
- [init](CalibratedClassifierCV.md#init)
- [predict](CalibratedClassifierCV.md#predict)
- [predict\_proba](CalibratedClassifierCV.md#predict_proba)
- [score](CalibratedClassifierCV.md#score)

## Constructors

### constructor

• **new CalibratedClassifierCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CalibratedClassifierCVOptions`](../interfaces/CalibratedClassifierCVOptions.md) |

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L23)

## Accessors

### calibrated\_classifiers\_

• `get` **calibrated_classifiers_**(): `Promise`<`number`\>

The list of classifier and calibrator pairs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L336)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The class labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L255)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L309)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L282)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the calibrated model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVFitOptions`](../interfaces/CalibratedClassifierCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L112)

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

[generated/calibration/CalibratedClassifierCV.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L47)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict the target of new samples.

The predicted class is the class that has the highest probability, and can thus be different from the prediction of the uncalibrated classifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVPredictOptions`](../interfaces/CalibratedClassifierCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:150](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L150)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Calibrated probabilities of classification.

This function returns calibrated probabilities of classification according to each class on an array of test vectors X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVPredictProbaOptions`](../interfaces/CalibratedClassifierCVPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L184)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CalibratedClassifierCVScoreOptions`](../interfaces/CalibratedClassifierCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/calibration/CalibratedClassifierCV.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/calibration/CalibratedClassifierCV.ts#L221)
