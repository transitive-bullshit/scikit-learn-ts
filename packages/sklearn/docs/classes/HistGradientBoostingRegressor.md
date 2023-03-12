[sklearn](../readme.md) / [Exports](../modules.md) / HistGradientBoostingRegressor

# Class: HistGradientBoostingRegressor

Histogram-based Gradient Boosting Regression Tree.

This estimator is much faster than [`GradientBoostingRegressor`](sklearn.ensemble.GradientBoostingRegressor.html#sklearn.ensemble.GradientBoostingRegressor "sklearn.ensemble.GradientBoostingRegressor") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingRegressor.html

## Table of contents

### Constructors

- [constructor](HistGradientBoostingRegressor.md#constructor)

### Properties

- [\_isDisposed](HistGradientBoostingRegressor.md#_isdisposed)
- [\_isInitialized](HistGradientBoostingRegressor.md#_isinitialized)
- [\_py](HistGradientBoostingRegressor.md#_py)
- [id](HistGradientBoostingRegressor.md#id)
- [opts](HistGradientBoostingRegressor.md#opts)

### Accessors

- [do\_early\_stopping\_](HistGradientBoostingRegressor.md#do_early_stopping_)
- [feature\_names\_in\_](HistGradientBoostingRegressor.md#feature_names_in_)
- [is\_categorical\_](HistGradientBoostingRegressor.md#is_categorical_)
- [n\_features\_in\_](HistGradientBoostingRegressor.md#n_features_in_)
- [n\_trees\_per\_iteration\_](HistGradientBoostingRegressor.md#n_trees_per_iteration_)
- [py](HistGradientBoostingRegressor.md#py)
- [train\_score\_](HistGradientBoostingRegressor.md#train_score_)
- [validation\_score\_](HistGradientBoostingRegressor.md#validation_score_)

### Methods

- [dispose](HistGradientBoostingRegressor.md#dispose)
- [fit](HistGradientBoostingRegressor.md#fit)
- [init](HistGradientBoostingRegressor.md#init)
- [predict](HistGradientBoostingRegressor.md#predict)
- [score](HistGradientBoostingRegressor.md#score)
- [staged\_predict](HistGradientBoostingRegressor.md#staged_predict)

## Constructors

### constructor

• **new HistGradientBoostingRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HistGradientBoostingRegressorOptions`](../interfaces/HistGradientBoostingRegressorOptions.md) |

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L23)

## Accessors

### do\_early\_stopping\_

• `get` **do_early_stopping_**(): `Promise`<`boolean`\>

Indicates whether early stopping is used during training.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:292](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L292)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:454](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L454)

___

### is\_categorical\_

• `get` **is_categorical_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L400)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L427)

___

### n\_trees\_per\_iteration\_

• `get` **n_trees_per_iteration_**(): `Promise`<`number`\>

The number of tree that are built at each iteration. For regressors, this is always 1.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L319)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L40)

___

### train\_score\_

• `get` **train_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L346)

___

### validation\_score\_

• `get` **validation_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L373)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:127](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L127)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the gradient boosting model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorFitOptions`](../interfaces/HistGradientBoostingRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L144)

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

[generated/ensemble/HistGradientBoostingRegressor.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L49)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict values for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorPredictOptions`](../interfaces/HistGradientBoostingRegressorPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L180)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorScoreOptions`](../interfaces/HistGradientBoostingRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:216](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L216)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Predict regression target for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingRegressorStagedPredictOptions`](../interfaces/HistGradientBoostingRegressorStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/HistGradientBoostingRegressor.ts:257](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingRegressor.ts#L257)
