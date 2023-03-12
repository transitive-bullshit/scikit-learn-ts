[sklearn](../readme.md) / [Exports](../modules.md) / EllipticEnvelope

# Class: EllipticEnvelope

An object for detecting outliers in a Gaussian distributed dataset.

Read more in the [User Guide](../outlier_detection.html#outlier-detection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.EllipticEnvelope.html

## Table of contents

### Constructors

- [constructor](EllipticEnvelope.md#constructor)

### Properties

- [\_isDisposed](EllipticEnvelope.md#_isdisposed)
- [\_isInitialized](EllipticEnvelope.md#_isinitialized)
- [\_py](EllipticEnvelope.md#_py)
- [id](EllipticEnvelope.md#id)
- [opts](EllipticEnvelope.md#opts)

### Accessors

- [covariance\_](EllipticEnvelope.md#covariance_)
- [dist\_](EllipticEnvelope.md#dist_)
- [feature\_names\_in\_](EllipticEnvelope.md#feature_names_in_)
- [location\_](EllipticEnvelope.md#location_)
- [n\_features\_in\_](EllipticEnvelope.md#n_features_in_)
- [offset\_](EllipticEnvelope.md#offset_)
- [precision\_](EllipticEnvelope.md#precision_)
- [py](EllipticEnvelope.md#py)
- [raw\_covariance\_](EllipticEnvelope.md#raw_covariance_)
- [raw\_location\_](EllipticEnvelope.md#raw_location_)
- [raw\_support\_](EllipticEnvelope.md#raw_support_)
- [support\_](EllipticEnvelope.md#support_)

### Methods

- [correct\_covariance](EllipticEnvelope.md#correct_covariance)
- [decision\_function](EllipticEnvelope.md#decision_function)
- [dispose](EllipticEnvelope.md#dispose)
- [error\_norm](EllipticEnvelope.md#error_norm)
- [fit](EllipticEnvelope.md#fit)
- [fit\_predict](EllipticEnvelope.md#fit_predict)
- [get\_precision](EllipticEnvelope.md#get_precision)
- [init](EllipticEnvelope.md#init)
- [mahalanobis](EllipticEnvelope.md#mahalanobis)
- [predict](EllipticEnvelope.md#predict)
- [reweight\_covariance](EllipticEnvelope.md#reweight_covariance)
- [score](EllipticEnvelope.md#score)
- [score\_samples](EllipticEnvelope.md#score_samples)

## Constructors

### constructor

• **new EllipticEnvelope**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`EllipticEnvelopeOptions`](../interfaces/EllipticEnvelopeOptions.md) |

#### Defined in

[generated/covariance/EllipticEnvelope.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L17)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated robust covariance matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:502](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L502)

___

### dist\_

• `get` **dist_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.EllipticEnvelope.fit "sklearn.covariance.EllipticEnvelope.fit") is called) observations.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:691](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L691)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:745](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L745)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated robust location.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:475](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L475)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L718)

___

### offset\_

• `get` **offset_**(): `Promise`<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: `decision\_function \= score\_samples \- offset\_`. The offset depends on the contamination parameter and is defined in such a way we obtain the expected number of outliers (samples with decision function < 0) in training.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:583](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L583)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L529)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/EllipticEnvelope.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L32)

___

### raw\_covariance\_

• `get` **raw_covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The raw robust estimated covariance before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:637](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L637)

___

### raw\_location\_

• `get` **raw_location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The raw robust estimated location before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:610](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L610)

___

### raw\_support\_

• `get` **raw_support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:664](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L664)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

A mask of the observations that have been used to compute the robust estimates of location and shape.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L556)

## Methods

### correct\_covariance

▸ **correct_covariance**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#rbb2ba44703ed-rvd).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeCorrectCovarianceOptions`](../interfaces/EllipticEnvelopeCorrectCovarianceOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L108)

___

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the decision function of the given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeDecisionFunctionOptions`](../interfaces/EllipticEnvelopeDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L143)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L89)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeErrorNormOptions`](../interfaces/EllipticEnvelopeErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:177](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L177)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the EllipticEnvelope model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeFitOptions`](../interfaces/EllipticEnvelopeFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L211)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeFitPredictOptions`](../interfaces/EllipticEnvelopeFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L243)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeGetPrecisionOptions`](../interfaces/EllipticEnvelopeGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L273)

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

[generated/covariance/EllipticEnvelope.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L41)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeMahalanobisOptions`](../interfaces/EllipticEnvelopeMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:306](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L306)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict labels (1 inlier, -1 outlier) of X according to fitted model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopePredictOptions`](../interfaces/EllipticEnvelopePredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L338)

___

### reweight\_covariance

▸ **reweight_covariance**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#rd2c89e63f1c9-rvdriessen).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeReweightCovarianceOptions`](../interfaces/EllipticEnvelopeReweightCovarianceOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L370)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeScoreOptions`](../interfaces/EllipticEnvelopeScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:407](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L407)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the negative Mahalanobis distances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EllipticEnvelopeScoreSamplesOptions`](../interfaces/EllipticEnvelopeScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/EllipticEnvelope.ts:441](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/EllipticEnvelope.ts#L441)
