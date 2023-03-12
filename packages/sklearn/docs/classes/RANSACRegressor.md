[sklearn](../readme.md) / [Exports](../modules.md) / RANSACRegressor

# Class: RANSACRegressor

RANSAC (RANdom SAmple Consensus) algorithm.

RANSAC is an iterative algorithm for the robust estimation of parameters from a subset of inliers from the complete data set.

Read more in the [User Guide](../linear_model.html#ransac-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.RANSACRegressor.html

## Table of contents

### Constructors

- [constructor](RANSACRegressor.md#constructor)

### Properties

- [\_isDisposed](RANSACRegressor.md#_isdisposed)
- [\_isInitialized](RANSACRegressor.md#_isinitialized)
- [\_py](RANSACRegressor.md#_py)
- [id](RANSACRegressor.md#id)
- [opts](RANSACRegressor.md#opts)

### Accessors

- [estimator\_](RANSACRegressor.md#estimator_)
- [feature\_names\_in\_](RANSACRegressor.md#feature_names_in_)
- [inlier\_mask\_](RANSACRegressor.md#inlier_mask_)
- [n\_features\_in\_](RANSACRegressor.md#n_features_in_)
- [n\_skips\_invalid\_data\_](RANSACRegressor.md#n_skips_invalid_data_)
- [n\_skips\_invalid\_model\_](RANSACRegressor.md#n_skips_invalid_model_)
- [n\_skips\_no\_inliers\_](RANSACRegressor.md#n_skips_no_inliers_)
- [n\_trials\_](RANSACRegressor.md#n_trials_)
- [py](RANSACRegressor.md#py)

### Methods

- [dispose](RANSACRegressor.md#dispose)
- [fit](RANSACRegressor.md#fit)
- [init](RANSACRegressor.md#init)
- [predict](RANSACRegressor.md#predict)
- [score](RANSACRegressor.md#score)

## Constructors

### constructor

• **new RANSACRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RANSACRegressorOptions`](../interfaces/RANSACRegressorOptions.md) |

#### Defined in

[generated/linear_model/RANSACRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L19)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

Best fitted model (copy of the `estimator` object).

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L212)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L387)

___

### inlier\_mask\_

• `get` **inlier_mask_**(): `Promise`<`any`\>

Boolean mask of inliers classified as `true`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L262)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L362)

___

### n\_skips\_invalid\_data\_

• `get` **n_skips_invalid_data_**(): `Promise`<`number`\>

Number of iterations skipped due to invalid data defined by `is\_data\_valid`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L312)

___

### n\_skips\_invalid\_model\_

• `get` **n_skips_invalid_model_**(): `Promise`<`number`\>

Number of iterations skipped due to an invalid model defined by `is\_model\_valid`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L337)

___

### n\_skips\_no\_inliers\_

• `get` **n_skips_no_inliers_**(): `Promise`<`number`\>

Number of iterations skipped due to finding zero inliers.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L287)

___

### n\_trials\_

• `get` **n_trials_**(): `Promise`<`number`\>

Number of random selection trials until one of the stop criteria is met. It is always `<= max\_trials`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L237)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/RANSACRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:101](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L101)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit estimator using RANSAC algorithm.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorFitOptions`](../interfaces/RANSACRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L118)

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

[generated/linear_model/RANSACRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the estimated model.

This is a wrapper for `estimator\_.predict(X)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorPredictOptions`](../interfaces/RANSACRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L152)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the score of the prediction.

This is a wrapper for `estimator\_.score(X, y)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RANSACRegressorScoreOptions`](../interfaces/RANSACRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/RANSACRegressor.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/RANSACRegressor.ts#L182)
