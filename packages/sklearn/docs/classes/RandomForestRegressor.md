[sklearn](../readme.md) / [Exports](../modules.md) / RandomForestRegressor

# Class: RandomForestRegressor

A random forest regressor.

A random forest is a meta estimator that fits a number of classifying decision trees on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting. The sub-sample size is controlled with the `max\_samples` parameter if `bootstrap=True` (default), otherwise the whole dataset is used to build each tree.

Read more in the [User Guide](../ensemble.html#forest).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html

## Table of contents

### Constructors

- [constructor](RandomForestRegressor.md#constructor)

### Properties

- [\_isDisposed](RandomForestRegressor.md#_isdisposed)
- [\_isInitialized](RandomForestRegressor.md#_isinitialized)
- [\_py](RandomForestRegressor.md#_py)
- [id](RandomForestRegressor.md#id)
- [opts](RandomForestRegressor.md#opts)

### Accessors

- [estimator\_](RandomForestRegressor.md#estimator_)
- [estimators\_](RandomForestRegressor.md#estimators_)
- [feature\_names\_in\_](RandomForestRegressor.md#feature_names_in_)
- [n\_features\_in\_](RandomForestRegressor.md#n_features_in_)
- [n\_outputs\_](RandomForestRegressor.md#n_outputs_)
- [oob\_prediction\_](RandomForestRegressor.md#oob_prediction_)
- [oob\_score\_](RandomForestRegressor.md#oob_score_)
- [py](RandomForestRegressor.md#py)

### Methods

- [apply](RandomForestRegressor.md#apply)
- [decision\_path](RandomForestRegressor.md#decision_path)
- [dispose](RandomForestRegressor.md#dispose)
- [fit](RandomForestRegressor.md#fit)
- [init](RandomForestRegressor.md#init)
- [predict](RandomForestRegressor.md#predict)
- [score](RandomForestRegressor.md#score)

## Constructors

### constructor

• **new RandomForestRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomForestRegressorOptions`](../interfaces/RandomForestRegressorOptions.md) |

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L19)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L293)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L320)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L374)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L347)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs when `fit` is performed.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L401)

___

### oob\_prediction\_

• `get` **oob_prediction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L455)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L428)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L34)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorApplyOptions`](../interfaces/RandomForestRegressorApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L126)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorDecisionPathOptions`](../interfaces/RandomForestRegressorDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L156)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L109)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorFitOptions`](../interfaces/RandomForestRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L191)

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

[generated/ensemble/RandomForestRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the trees in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorPredictOptions`](../interfaces/RandomForestRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L227)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomForestRegressorScoreOptions`](../interfaces/RandomForestRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/RandomForestRegressor.ts:259](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/RandomForestRegressor.ts#L259)
