[sklearn](../readme.md) / [Exports](../modules.md) / QuantileRegressor

# Class: QuantileRegressor

Linear regression model that predicts conditional quantiles.

The linear [`QuantileRegressor`](#sklearn.linear_model.QuantileRegressor "sklearn.linear_model.QuantileRegressor") optimizes the pinball loss for a desired `quantile` and is robust to outliers.

This model uses an L1 regularization like [`Lasso`](sklearn.linear_model.Lasso.html#sklearn.linear_model.Lasso "sklearn.linear_model.Lasso").

Read more in the [User Guide](../linear_model.html#quantile-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html

## Table of contents

### Constructors

- [constructor](QuantileRegressor.md#constructor)

### Properties

- [\_isDisposed](QuantileRegressor.md#_isdisposed)
- [\_isInitialized](QuantileRegressor.md#_isinitialized)
- [\_py](QuantileRegressor.md#_py)
- [id](QuantileRegressor.md#id)
- [opts](QuantileRegressor.md#opts)

### Accessors

- [coef\_](QuantileRegressor.md#coef_)
- [feature\_names\_in\_](QuantileRegressor.md#feature_names_in_)
- [intercept\_](QuantileRegressor.md#intercept_)
- [n\_features\_in\_](QuantileRegressor.md#n_features_in_)
- [n\_iter\_](QuantileRegressor.md#n_iter_)
- [py](QuantileRegressor.md#py)

### Methods

- [dispose](QuantileRegressor.md#dispose)
- [fit](QuantileRegressor.md#fit)
- [init](QuantileRegressor.md#init)
- [predict](QuantileRegressor.md#predict)
- [score](QuantileRegressor.md#score)

## Constructors

### constructor

• **new QuantileRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`QuantileRegressorOptions`](../interfaces/QuantileRegressorOptions.md) |

#### Defined in

[generated/linear_model/QuantileRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L21)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`[]\>

Estimated coefficients for the features.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L208)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L289)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

The intercept of the model, aka bias term.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L235)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L262)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations performed by the solver.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L316)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/QuantileRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorFitOptions`](../interfaces/QuantileRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L108)

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

[generated/linear_model/QuantileRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorPredictOptions`](../interfaces/QuantileRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L142)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`QuantileRegressorScoreOptions`](../interfaces/QuantileRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/QuantileRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/QuantileRegressor.ts#L174)
