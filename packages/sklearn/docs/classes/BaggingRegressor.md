[sklearn](../readme.md) / [Exports](../modules.md) / BaggingRegressor

# Class: BaggingRegressor

A Bagging regressor.

A Bagging regressor is an ensemble meta-estimator that fits base regressors each on random subsets of the original dataset and then aggregate their individual predictions (either by voting or by averaging) to form a final prediction. Such a meta-estimator can typically be used as a way to reduce the variance of a black-box estimator (e.g., a decision tree), by introducing randomization into its construction procedure and then making an ensemble out of it.

This algorithm encompasses several works from the literature. When random subsets of the dataset are drawn as random subsets of the samples, then this algorithm is known as Pasting [\[1\]](#r4d113ba76fc0-1). If samples are drawn with replacement, then the method is known as Bagging [\[2\]](#r4d113ba76fc0-2). When random subsets of the dataset are drawn as random subsets of the features, then the method is known as Random Subspaces [\[3\]](#r4d113ba76fc0-3). Finally, when base estimators are built on subsets of both samples and features, then the method is known as Random Patches [\[4\]](#r4d113ba76fc0-4).

Read more in the [User Guide](../ensemble.html#bagging).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingRegressor.html

## Table of contents

### Constructors

- [constructor](BaggingRegressor.md#constructor)

### Properties

- [\_isDisposed](BaggingRegressor.md#_isdisposed)
- [\_isInitialized](BaggingRegressor.md#_isinitialized)
- [\_py](BaggingRegressor.md#_py)
- [id](BaggingRegressor.md#id)
- [opts](BaggingRegressor.md#opts)

### Accessors

- [estimator\_](BaggingRegressor.md#estimator_)
- [estimators\_](BaggingRegressor.md#estimators_)
- [estimators\_features\_](BaggingRegressor.md#estimators_features_)
- [feature\_names\_in\_](BaggingRegressor.md#feature_names_in_)
- [n\_features\_in\_](BaggingRegressor.md#n_features_in_)
- [oob\_prediction\_](BaggingRegressor.md#oob_prediction_)
- [oob\_score\_](BaggingRegressor.md#oob_score_)
- [py](BaggingRegressor.md#py)

### Methods

- [dispose](BaggingRegressor.md#dispose)
- [fit](BaggingRegressor.md#fit)
- [init](BaggingRegressor.md#init)
- [predict](BaggingRegressor.md#predict)
- [score](BaggingRegressor.md#score)

## Constructors

### constructor

• **new BaggingRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BaggingRegressorOptions`](../interfaces/BaggingRegressorOptions.md) |

#### Defined in

[generated/ensemble/BaggingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L21)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The base estimator from which the ensemble is grown.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:222](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L222)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L303)

___

### estimators\_features\_

• `get` **estimators_features_**(): `Promise`<`any`\>

The subset of drawn features for each base estimator.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L330)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L276)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L249)

___

### oob\_prediction\_

• `get` **oob_prediction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Prediction computed with out-of-bag estimate on the training set. If n\_estimators is small it might be possible that a data point was never left out during the bootstrap. In this case, `oob\_prediction\_` might contain NaN. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:384](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L384)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:357](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L357)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/BaggingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a Bagging ensemble of estimators from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorFitOptions`](../interfaces/BaggingRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L120)

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

[generated/ensemble/BaggingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the estimators in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorPredictOptions`](../interfaces/BaggingRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L156)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BaggingRegressorScoreOptions`](../interfaces/BaggingRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/BaggingRegressor.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/BaggingRegressor.ts#L188)
