[sklearn](../readme.md) / [Exports](../modules.md) / GradientBoostingRegressor

# Class: GradientBoostingRegressor

Gradient Boosting for regression.

This estimator builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage a regression tree is fit on the negative gradient of the given loss function.

[`sklearn.ensemble.HistGradientBoostingRegressor`](sklearn.ensemble.HistGradientBoostingRegressor.html#sklearn.ensemble.HistGradientBoostingRegressor "sklearn.ensemble.HistGradientBoostingRegressor") is a much faster variant of this algorithm for intermediate datasets (`n\_samples >= 10\_000`).

Read more in the [User Guide](../ensemble.html#gradient-boosting).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html

## Table of contents

### Constructors

- [constructor](GradientBoostingRegressor.md#constructor)

### Properties

- [\_isDisposed](GradientBoostingRegressor.md#_isdisposed)
- [\_isInitialized](GradientBoostingRegressor.md#_isinitialized)
- [\_py](GradientBoostingRegressor.md#_py)
- [id](GradientBoostingRegressor.md#id)
- [opts](GradientBoostingRegressor.md#opts)

### Accessors

- [estimators\_](GradientBoostingRegressor.md#estimators_)
- [feature\_names\_in\_](GradientBoostingRegressor.md#feature_names_in_)
- [init\_](GradientBoostingRegressor.md#init_)
- [loss\_](GradientBoostingRegressor.md#loss_)
- [max\_features\_](GradientBoostingRegressor.md#max_features_)
- [n\_estimators\_](GradientBoostingRegressor.md#n_estimators_)
- [n\_features\_in\_](GradientBoostingRegressor.md#n_features_in_)
- [oob\_improvement\_](GradientBoostingRegressor.md#oob_improvement_)
- [py](GradientBoostingRegressor.md#py)
- [train\_score\_](GradientBoostingRegressor.md#train_score_)

### Methods

- [apply](GradientBoostingRegressor.md#apply)
- [dispose](GradientBoostingRegressor.md#dispose)
- [fit](GradientBoostingRegressor.md#fit)
- [init](GradientBoostingRegressor.md#init)
- [predict](GradientBoostingRegressor.md#predict)
- [score](GradientBoostingRegressor.md#score)
- [staged\_predict](GradientBoostingRegressor.md#staged_predict)

## Constructors

### constructor

• **new GradientBoostingRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GradientBoostingRegressorOptions`](../interfaces/GradientBoostingRegressorOptions.md) |

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L21)

## Accessors

### estimators\_

• `get` **estimators_**(): `Promise`<`any`[]\>

The collection of fitted sub-estimators.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L423)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L504)

___

### init\_

• `get` **init_**(): `Promise`<`any`\>

The estimator that provides the initial predictions. Set via the `init` argument or `loss.init\_estimator`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L396)

___

### loss\_

• `get` **loss_**(): `Promise`<`any`\>

The concrete `LossFunction` object.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L369)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:531](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L531)

___

### n\_estimators\_

• `get` **n_estimators_**(): `Promise`<`number`\>

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:450](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L450)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:477](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L477)

___

### oob\_improvement\_

• `get` **oob_improvement_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:315](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L315)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L36)

___

### train\_score\_

• `get` **train_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The i-th score `train\_score\_\[i\]` is the deviance (= loss) of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the deviance on the training data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L342)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Apply trees in the ensemble to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorApplyOptions`](../interfaces/GradientBoostingRegressorApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L136)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L119)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the gradient boosting model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorFitOptions`](../interfaces/GradientBoostingRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L170)

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

[generated/ensemble/GradientBoostingRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict regression target for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorPredictOptions`](../interfaces/GradientBoostingRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L206)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorScoreOptions`](../interfaces/GradientBoostingRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L242)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Predict regression target at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingRegressorStagedPredictOptions`](../interfaces/GradientBoostingRegressorStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingRegressor.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingRegressor.ts#L280)
