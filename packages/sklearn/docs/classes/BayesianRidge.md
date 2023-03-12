[sklearn](../readme.md) / [Exports](../modules.md) / BayesianRidge

# Class: BayesianRidge

Bayesian ridge regression.

Fit a Bayesian ridge model. See the Notes section for details on this implementation and the optimization of the regularization parameters lambda (precision of the weights) and alpha (precision of the noise).

Read more in the [User Guide](../linear_model.html#bayesian-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.BayesianRidge.html

## Table of contents

### Constructors

- [constructor](BayesianRidge.md#constructor)

### Properties

- [\_isDisposed](BayesianRidge.md#_isdisposed)
- [\_isInitialized](BayesianRidge.md#_isinitialized)
- [\_py](BayesianRidge.md#_py)
- [id](BayesianRidge.md#id)
- [opts](BayesianRidge.md#opts)

### Accessors

- [X\_offset\_](BayesianRidge.md#x_offset_)
- [X\_scale\_](BayesianRidge.md#x_scale_)
- [alpha\_](BayesianRidge.md#alpha_)
- [coef\_](BayesianRidge.md#coef_)
- [feature\_names\_in\_](BayesianRidge.md#feature_names_in_)
- [intercept\_](BayesianRidge.md#intercept_)
- [lambda\_](BayesianRidge.md#lambda_)
- [n\_features\_in\_](BayesianRidge.md#n_features_in_)
- [n\_iter\_](BayesianRidge.md#n_iter_)
- [py](BayesianRidge.md#py)
- [scores\_](BayesianRidge.md#scores_)
- [sigma\_](BayesianRidge.md#sigma_)

### Methods

- [dispose](BayesianRidge.md#dispose)
- [fit](BayesianRidge.md#fit)
- [init](BayesianRidge.md#init)
- [predict](BayesianRidge.md#predict)
- [score](BayesianRidge.md#score)

## Constructors

### constructor

• **new BayesianRidge**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BayesianRidgeOptions`](../interfaces/BayesianRidgeOptions.md) |

#### Defined in

[generated/linear_model/BayesianRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/BayesianRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/BayesianRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/BayesianRidge.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/BayesianRidge.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/BayesianRidge.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L19)

## Accessors

### X\_offset\_

• `get` **X_offset_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

If `fit\_intercept=True`, offset subtracted for centering data to a zero mean. Set to np.zeros(n\_features) otherwise.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L373)

___

### X\_scale\_

• `get` **X_scale_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Set to np.ones(n\_features).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L398)

___

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

Estimated precision of the noise.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L258)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Coefficients of the regression model (mean of distribution)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L210)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:448](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L448)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Independent term in decision function. Set to 0.0 if `fit\_intercept \= False`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:233](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L233)

___

### lambda\_

• `get` **lambda_**(): `Promise`<`number`\>

Estimated precision of the weights.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L281)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L423)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations to reach the stopping criterion.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L350)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/BayesianRidge.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/BayesianRidge.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L34)

___

### scores\_

• `get` **scores_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

If computed\_score is `true`, value of the log marginal likelihood (to be maximized) at each iteration of the optimization. The array starts with the value of the log marginal likelihood obtained for the initial values of alpha and lambda and ends with the value obtained for the estimated alpha and lambda.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L327)

___

### sigma\_

• `get` **sigma_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Estimated variance-covariance matrix of the weights

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L304)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgeFitOptions`](../interfaces/BayesianRidgeFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L112)

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

[generated/linear_model/BayesianRidge.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the linear model.

In addition to the mean of the predictive distribution, also its standard deviation can be returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgePredictOptions`](../interfaces/BayesianRidgePredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L146)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BayesianRidgeScoreOptions`](../interfaces/BayesianRidgeScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/BayesianRidge.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/BayesianRidge.ts#L178)
