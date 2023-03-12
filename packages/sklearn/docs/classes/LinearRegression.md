[sklearn](../readme.md) / [Exports](../modules.md) / LinearRegression

# Class: LinearRegression

Ordinary least squares Linear Regression.

LinearRegression fits a linear model with coefficients w = (w1, …, wp) to minimize the residual sum of squares between the observed targets in the dataset, and the targets predicted by the linear approximation.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html

## Table of contents

### Constructors

- [constructor](LinearRegression.md#constructor)

### Properties

- [\_isDisposed](LinearRegression.md#_isdisposed)
- [\_isInitialized](LinearRegression.md#_isinitialized)
- [\_py](LinearRegression.md#_py)
- [id](LinearRegression.md#id)
- [opts](LinearRegression.md#opts)

### Accessors

- [coef\_](LinearRegression.md#coef_)
- [feature\_names\_in\_](LinearRegression.md#feature_names_in_)
- [intercept\_](LinearRegression.md#intercept_)
- [n\_features\_in\_](LinearRegression.md#n_features_in_)
- [py](LinearRegression.md#py)
- [rank\_](LinearRegression.md#rank_)
- [singular\_](LinearRegression.md#singular_)

### Methods

- [dispose](LinearRegression.md#dispose)
- [fit](LinearRegression.md#fit)
- [init](LinearRegression.md#init)
- [predict](LinearRegression.md#predict)
- [score](LinearRegression.md#score)

## Constructors

### constructor

• **new LinearRegression**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LinearRegressionOptions`](../interfaces/LinearRegressionOptions.md) |

#### Defined in

[generated/linear_model/LinearRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LinearRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LinearRegression.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LinearRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LinearRegression.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LinearRegression.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L17)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`[]\>

Estimated coefficients for the linear regression problem. If multiple targets are passed during the fit (y 2D), this is a 2D array of shape (n\_targets, n\_features), while if only one target is passed, this is a 1D array of length n\_features.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/LinearRegression.ts:202](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L202)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LinearRegression.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L337)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| `any`[]\>

Independent term in the linear model. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number` \| `any`[]\>

#### Defined in

[generated/linear_model/LinearRegression.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L283)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:310](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L310)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LinearRegression.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LinearRegression.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L32)

___

### rank\_

• `get` **rank_**(): `Promise`<`number`\>

Rank of matrix `X`. Only available when `X` is dense.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L229)

___

### singular\_

• `get` **singular_**(): `Promise`<`any`[]\>

Singular values of `X`. Only available when `X` is dense.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/LinearRegression.ts:256](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L256)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearRegressionFitOptions`](../interfaces/LinearRegressionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L102)

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

[generated/linear_model/LinearRegression.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearRegressionPredictOptions`](../interfaces/LinearRegressionPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L136)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearRegressionScoreOptions`](../interfaces/LinearRegressionScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LinearRegression.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LinearRegression.ts#L168)
