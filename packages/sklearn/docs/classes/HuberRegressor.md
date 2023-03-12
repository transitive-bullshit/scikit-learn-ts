[sklearn](../readme.md) / [Exports](../modules.md) / HuberRegressor

# Class: HuberRegressor

L2-regularized linear regression model that is robust to outliers.

The Huber Regressor optimizes the squared loss for the samples where `|(y \- Xw \- c) / sigma| < epsilon` and the absolute loss for the samples where `|(y \- Xw \- c) / sigma| > epsilon`, where the model coefficients `w`, the intercept `c` and the scale `sigma` are parameters to be optimized. The parameter sigma makes sure that if y is scaled up or down by a certain factor, one does not need to rescale epsilon to achieve the same robustness. Note that this does not take into account the fact that the different features of X may be of different scales.

The Huber loss function has the advantage of not being heavily influenced by the outliers while not completely ignoring their effect.

Read more in the [User Guide](../linear_model.html#huber-regression)

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.HuberRegressor.html

## Table of contents

### Constructors

- [constructor](HuberRegressor.md#constructor)

### Properties

- [\_isDisposed](HuberRegressor.md#_isdisposed)
- [\_isInitialized](HuberRegressor.md#_isinitialized)
- [\_py](HuberRegressor.md#_py)
- [id](HuberRegressor.md#id)
- [opts](HuberRegressor.md#opts)

### Accessors

- [coef\_](HuberRegressor.md#coef_)
- [feature\_names\_in\_](HuberRegressor.md#feature_names_in_)
- [intercept\_](HuberRegressor.md#intercept_)
- [n\_features\_in\_](HuberRegressor.md#n_features_in_)
- [n\_iter\_](HuberRegressor.md#n_iter_)
- [outliers\_](HuberRegressor.md#outliers_)
- [py](HuberRegressor.md#py)
- [scale\_](HuberRegressor.md#scale_)

### Methods

- [dispose](HuberRegressor.md#dispose)
- [fit](HuberRegressor.md#fit)
- [init](HuberRegressor.md#init)
- [predict](HuberRegressor.md#predict)
- [score](HuberRegressor.md#score)

## Constructors

### constructor

• **new HuberRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HuberRegressorOptions`](../interfaces/HuberRegressorOptions.md) |

#### Defined in

[generated/linear_model/HuberRegressor.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/HuberRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/HuberRegressor.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/HuberRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/HuberRegressor.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/HuberRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L21)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`\>

Features got by optimizing the L2-regularized Huber loss.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L200)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L296)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Bias.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L223)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L271)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations that `scipy.optimize.minimize(method="L-BFGS-B")` has run for.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L321)

___

### outliers\_

• `get` **outliers_**(): `Promise`<`any`\>

A boolean mask which is set to `true` where the samples are identified as outliers.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:346](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L346)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/HuberRegressor.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/HuberRegressor.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L36)

___

### scale\_

• `get` **scale_**(): `Promise`<`number`\>

The value by which `|y \- Xw \- c|` is scaled down.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L248)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorFitOptions`](../interfaces/HuberRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L108)

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

[generated/linear_model/HuberRegressor.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorPredictOptions`](../interfaces/HuberRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L138)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HuberRegressorScoreOptions`](../interfaces/HuberRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/HuberRegressor.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/HuberRegressor.ts#L168)
