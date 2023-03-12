[sklearn](../readme.md) / [Exports](../modules.md) / ARDRegression

# Class: ARDRegression

Bayesian ARD regression.

Fit the weights of a regression model, using an ARD prior. The weights of the regression model are assumed to be in Gaussian distributions. Also estimate the parameters lambda (precisions of the distributions of the weights) and alpha (precision of the distribution of the noise). The estimation is done by an iterative procedures (Evidence Maximization)

Read more in the [User Guide](../linear_model.html#bayesian-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ARDRegression.html

## Table of contents

### Constructors

- [constructor](ARDRegression.md#constructor)

### Properties

- [\_isDisposed](ARDRegression.md#_isdisposed)
- [\_isInitialized](ARDRegression.md#_isinitialized)
- [\_py](ARDRegression.md#_py)
- [id](ARDRegression.md#id)
- [opts](ARDRegression.md#opts)

### Accessors

- [X\_offset\_](ARDRegression.md#x_offset_)
- [X\_scale\_](ARDRegression.md#x_scale_)
- [alpha\_](ARDRegression.md#alpha_)
- [coef\_](ARDRegression.md#coef_)
- [feature\_names\_in\_](ARDRegression.md#feature_names_in_)
- [intercept\_](ARDRegression.md#intercept_)
- [lambda\_](ARDRegression.md#lambda_)
- [n\_features\_in\_](ARDRegression.md#n_features_in_)
- [py](ARDRegression.md#py)
- [scores\_](ARDRegression.md#scores_)
- [sigma\_](ARDRegression.md#sigma_)

### Methods

- [dispose](ARDRegression.md#dispose)
- [fit](ARDRegression.md#fit)
- [init](ARDRegression.md#init)
- [predict](ARDRegression.md#predict)
- [score](ARDRegression.md#score)

## Constructors

### constructor

• **new ARDRegression**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ARDRegressionOptions`](../interfaces/ARDRegressionOptions.md) |

#### Defined in

[generated/linear_model/ARDRegression.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/ARDRegression.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/ARDRegression.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/ARDRegression.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/ARDRegression.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/ARDRegression.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L19)

## Accessors

### X\_offset\_

• `get` **X_offset_**(): `Promise`<`number`\>

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L348)

___

### X\_scale\_

• `get` **X_scale_**(): `Promise`<`number`\>

Set to np.ones(n\_features).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L373)

___

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

estimated precision of the noise.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L231)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Coefficients of the regression model (mean of distribution)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ARDRegression.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L208)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ARDRegression.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L423)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L323)

___

### lambda\_

• `get` **lambda_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

estimated precisions of the weights.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ARDRegression.ts:254](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L254)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L398)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/ARDRegression.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/ARDRegression.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L34)

___

### scores\_

• `get` **scores_**(): `Promise`<`number`\>

if computed, value of the objective function (to be maximized)

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L300)

___

### sigma\_

• `get` **sigma_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

estimated variance-covariance matrix of the weights

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/ARDRegression.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L277)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data and parameters.

Iterative procedure to maximize the evidence

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ARDRegressionFitOptions`](../interfaces/ARDRegressionFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L112)

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

[generated/linear_model/ARDRegression.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ARDRegressionPredictOptions`](../interfaces/ARDRegressionPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/ARDRegression.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L144)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ARDRegressionScoreOptions`](../interfaces/ARDRegressionScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/ARDRegression.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/ARDRegression.ts#L176)
