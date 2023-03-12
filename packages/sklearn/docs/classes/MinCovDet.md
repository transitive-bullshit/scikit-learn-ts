[sklearn](../readme.md) / [Exports](../modules.md) / MinCovDet

# Class: MinCovDet

Minimum Covariance Determinant (MCD): robust estimator of covariance.

The Minimum Covariance Determinant covariance estimator is to be applied on Gaussian-distributed data, but could still be relevant on data drawn from a unimodal, symmetric distribution. It is not meant to be used with multi-modal data (the algorithm used to fit a MinCovDet object is likely to fail in such a case). One should consider projection pursuit methods to deal with multi-modal datasets.

Read more in the [User Guide](../covariance.html#robust-covariance).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.covariance.MinCovDet.html

## Table of contents

### Constructors

- [constructor](MinCovDet.md#constructor)

### Properties

- [\_isDisposed](MinCovDet.md#_isdisposed)
- [\_isInitialized](MinCovDet.md#_isinitialized)
- [\_py](MinCovDet.md#_py)
- [id](MinCovDet.md#id)
- [opts](MinCovDet.md#opts)

### Accessors

- [covariance\_](MinCovDet.md#covariance_)
- [dist\_](MinCovDet.md#dist_)
- [feature\_names\_in\_](MinCovDet.md#feature_names_in_)
- [location\_](MinCovDet.md#location_)
- [n\_features\_in\_](MinCovDet.md#n_features_in_)
- [precision\_](MinCovDet.md#precision_)
- [py](MinCovDet.md#py)
- [raw\_covariance\_](MinCovDet.md#raw_covariance_)
- [raw\_location\_](MinCovDet.md#raw_location_)
- [raw\_support\_](MinCovDet.md#raw_support_)
- [support\_](MinCovDet.md#support_)

### Methods

- [correct\_covariance](MinCovDet.md#correct_covariance)
- [dispose](MinCovDet.md#dispose)
- [error\_norm](MinCovDet.md#error_norm)
- [fit](MinCovDet.md#fit)
- [get\_precision](MinCovDet.md#get_precision)
- [init](MinCovDet.md#init)
- [mahalanobis](MinCovDet.md#mahalanobis)
- [reweight\_covariance](MinCovDet.md#reweight_covariance)
- [score](MinCovDet.md#score)

## Constructors

### constructor

• **new MinCovDet**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MinCovDetOptions`](../interfaces/MinCovDetOptions.md) |

#### Defined in

[generated/covariance/MinCovDet.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/covariance/MinCovDet.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/covariance/MinCovDet.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/covariance/MinCovDet.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/covariance/MinCovDet.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/covariance/MinCovDet.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L19)

## Accessors

### covariance\_

• `get` **covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated robust covariance matrix.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L413)

___

### dist\_

• `get` **dist_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Mahalanobis distances of the training set (on which [`fit`](#sklearn.covariance.MinCovDet.fit "sklearn.covariance.MinCovDet.fit") is called) observations.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L482)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:530](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L530)

___

### location\_

• `get` **location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Estimated robust location.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L390)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:505](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L505)

___

### precision\_

• `get` **precision_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated pseudo inverse matrix. (stored only if store\_precision is `true`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L436)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/covariance/MinCovDet.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/covariance/MinCovDet.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L34)

___

### raw\_covariance\_

• `get` **raw_covariance_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

The raw robust estimated covariance before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:340](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L340)

___

### raw\_location\_

• `get` **raw_location_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The raw robust estimated location before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L315)

___

### raw\_support\_

• `get` **raw_support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

A mask of the observations that have been used to compute the raw robust estimates of location and shape, before correction and re-weighting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:365](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L365)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

A mask of the observations that have been used to compute the robust estimates of location and shape.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L459)

## Methods

### correct\_covariance

▸ **correct_covariance**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply a correction to raw Minimum Covariance Determinant estimates.

Correction using the empirical correction factor suggested by Rousseeuw and Van Driessen in [\[RVD\]](#r491365aeaa84-rvd).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetCorrectCovarianceOptions`](../interfaces/MinCovDetCorrectCovarianceOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/covariance/MinCovDet.ts:105](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L105)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/covariance/MinCovDet.ts:86](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L86)

___

### error\_norm

▸ **error_norm**(`opts`): `Promise`<`number`\>

Compute the Mean Squared Error between two covariance estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetErrorNormOptions`](../interfaces/MinCovDetErrorNormOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:135](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L135)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a Minimum Covariance Determinant with the FastMCD algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetFitOptions`](../interfaces/MinCovDetFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L167)

___

### get\_precision

▸ **get_precision**(`opts`): `Promise`<`any`\>

Getter for the precision matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetGetPrecisionOptions`](../interfaces/MinCovDetGetPrecisionOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/covariance/MinCovDet.ts:195](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L195)

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

[generated/covariance/MinCovDet.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L43)

___

### mahalanobis

▸ **mahalanobis**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the squared Mahalanobis distances of given observations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetMahalanobisOptions`](../interfaces/MinCovDetMahalanobisOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L223)

___

### reweight\_covariance

▸ **reweight_covariance**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Re-weight raw Minimum Covariance Determinant estimates.

Re-weight observations using Rousseeuw’s method (equivalent to deleting outlying observations from the data set before computing location and covariance estimates) described in [\[RVDriessen\]](#r9465bad4668c-rvdriessen).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetReweightCovarianceOptions`](../interfaces/MinCovDetReweightCovarianceOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/covariance/MinCovDet.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L253)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute the log-likelihood of `X\_test` under the estimated Gaussian model.

The Gaussian model is defined by its mean and covariance matrix which are represented respectively by `self.location\_` and `self.covariance\_`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MinCovDetScoreOptions`](../interfaces/MinCovDetScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/covariance/MinCovDet.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/covariance/MinCovDet.ts#L285)
