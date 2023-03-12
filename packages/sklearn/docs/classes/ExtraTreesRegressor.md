[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreesRegressor

# Class: ExtraTreesRegressor

An extra-trees regressor.

This class implements a meta estimator that fits a number of randomized decision trees (a.k.a. extra-trees) on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.

Read more in the [User Guide](../ensemble.html#forest).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesRegressor.html

## Table of contents

### Constructors

- [constructor](ExtraTreesRegressor.md#constructor)

### Properties

- [\_isDisposed](ExtraTreesRegressor.md#_isdisposed)
- [\_isInitialized](ExtraTreesRegressor.md#_isinitialized)
- [\_py](ExtraTreesRegressor.md#_py)
- [id](ExtraTreesRegressor.md#id)
- [opts](ExtraTreesRegressor.md#opts)

### Accessors

- [estimator\_](ExtraTreesRegressor.md#estimator_)
- [estimators\_](ExtraTreesRegressor.md#estimators_)
- [feature\_names\_in\_](ExtraTreesRegressor.md#feature_names_in_)
- [n\_features\_in\_](ExtraTreesRegressor.md#n_features_in_)
- [n\_outputs\_](ExtraTreesRegressor.md#n_outputs_)
- [oob\_prediction\_](ExtraTreesRegressor.md#oob_prediction_)
- [oob\_score\_](ExtraTreesRegressor.md#oob_score_)
- [py](ExtraTreesRegressor.md#py)

### Methods

- [apply](ExtraTreesRegressor.md#apply)
- [decision\_path](ExtraTreesRegressor.md#decision_path)
- [dispose](ExtraTreesRegressor.md#dispose)
- [fit](ExtraTreesRegressor.md#fit)
- [init](ExtraTreesRegressor.md#init)
- [predict](ExtraTreesRegressor.md#predict)
- [score](ExtraTreesRegressor.md#score)

## Constructors

### constructor

• **new ExtraTreesRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ExtraTreesRegressorOptions`](../interfaces/ExtraTreesRegressorOptions.md) |

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L19)

## Accessors

### estimator\_

• `get` **estimator_**(): `Promise`<`any`\>

The child estimator template used to create the collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L292)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L319)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L373)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L346)

___

### n\_outputs\_

• `get` **n_outputs_**(): `Promise`<`number`\>

The number of outputs.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L400)

___

### oob\_prediction\_

• `get` **oob_prediction_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Prediction computed with out-of-bag estimate on the training set. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L454)

___

### oob\_score\_

• `get` **oob_score_**(): `Promise`<`number`\>

Score of the training dataset obtained using an out-of-bag estimate. This attribute exists only when `oob\_score` is `true`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L427)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L34)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the forest to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesRegressorApplyOptions`](../interfaces/ExtraTreesRegressorApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L126)

___

### decision\_path

▸ **decision_path**(`opts`): `Promise`<`any`[]\>

Return the decision path in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesRegressorDecisionPathOptions`](../interfaces/ExtraTreesRegressorDecisionPathOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L156)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:109](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L109)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Build a forest of trees from the training set (X, y).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesRegressorFitOptions`](../interfaces/ExtraTreesRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:190](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L190)

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

[generated/ensemble/ExtraTreesRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression target for X.

The predicted regression target of an input sample is computed as the mean predicted regression targets of the trees in the forest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesRegressorPredictOptions`](../interfaces/ExtraTreesRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L226)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ExtraTreesRegressorScoreOptions`](../interfaces/ExtraTreesRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/ExtraTreesRegressor.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/ExtraTreesRegressor.ts#L258)
