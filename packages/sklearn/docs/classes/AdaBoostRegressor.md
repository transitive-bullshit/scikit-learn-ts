[sklearn](../readme.md) / [Exports](../modules.md) / AdaBoostRegressor

# Class: AdaBoostRegressor

An AdaBoost regressor.

An AdaBoost \[1\] regressor is a meta-estimator that begins by fitting a regressor on the original dataset and then fits additional copies of the regressor on the same dataset but where the weights of instances are adjusted according to the error of the current prediction. As such, subsequent regressors focus more on difficult cases.

This class implements the algorithm known as AdaBoost.R2 \[2\].

Read more in the [User Guide](../ensemble.html#adaboost).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostRegressor.html

## Table of contents

### Constructors

- [constructor](AdaBoostRegressor.md#constructor)

### Properties

- [\_isDisposed](AdaBoostRegressor.md#_isdisposed)
- [\_isInitialized](AdaBoostRegressor.md#_isinitialized)
- [\_py](AdaBoostRegressor.md#_py)
- [id](AdaBoostRegressor.md#id)
- [opts](AdaBoostRegressor.md#opts)

### Accessors

- [estimator\_](AdaBoostRegressor.md#estimator_)
- [estimator\_errors\_](AdaBoostRegressor.md#estimator_errors_)
- [estimator\_weights\_](AdaBoostRegressor.md#estimator_weights_)
- [estimators\_](AdaBoostRegressor.md#estimators_)
- [feature\_names\_in\_](AdaBoostRegressor.md#feature_names_in_)
- [n\_features\_in\_](AdaBoostRegressor.md#n_features_in_)
- [py](AdaBoostRegressor.md#py)

### Methods

- [dispose](AdaBoostRegressor.md#dispose)
- [fit](AdaBoostRegressor.md#fit)
- [init](AdaBoostRegressor.md#init)
- [predict](AdaBoostRegressor.md#predict)
- [score](AdaBoostRegressor.md#score)
- [staged\_predict](AdaBoostRegressor.md#staged_predict)
- [staged\_score](AdaBoostRegressor.md#staged_score)

## Constructors

### constructor

• **new AdaBoostRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AdaBoostRegressorOptions`](../interfaces/AdaBoostRegressorOptions.md) |

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L21)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The base estimator from which the ensemble is grown.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:290](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L290)

___

### estimator\_errors\_

• `get` **estimator_errors_**(): `Promise`<`any`\>

Regression error for each estimator in the boosted ensemble.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L371)

___

### estimator\_weights\_

• `get` **estimator_weights_**(): `Promise`<`any`\>

Weights for each estimator in the boosted ensemble.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L344)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L317)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L425)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L398)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a boosted classifier/regressor from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostRegressorFitOptions`](../interfaces/AdaBoostRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L110)

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

[generated/ensemble/AdaBoostRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression value for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostRegressorPredictOptions`](../interfaces/AdaBoostRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L146)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostRegressorScoreOptions`](../interfaces/AdaBoostRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L178)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Return staged predictions for X.

The predicted regression value of an input sample is computed as the weighted median prediction of the regressors in the ensemble.

This generator method yields the ensemble prediction after each iteration of boosting and therefore allows monitoring, such as to determine the prediction on a test set after each boost.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostRegressorStagedPredictOptions`](../interfaces/AdaBoostRegressorStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L216)

___

### staged\_score

▸ **staged_score**(`opts`): `Promise`<`number`\>

Return staged scores for X, y.

This generator method yields the ensemble score after each iteration of boosting and therefore allows monitoring, such as to determine the score on a test set after each boost.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AdaBoostRegressorStagedScoreOptions`](../interfaces/AdaBoostRegressorStagedScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/AdaBoostRegressor.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/AdaBoostRegressor.ts#L252)
