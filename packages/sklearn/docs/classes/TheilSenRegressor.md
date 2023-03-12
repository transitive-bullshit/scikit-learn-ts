[sklearn](../readme.md) / [Exports](../modules.md) / TheilSenRegressor

# Class: TheilSenRegressor

Theil-Sen Estimator: robust multivariate regression model.

The algorithm calculates least square solutions on subsets with size n\_subsamples of the samples in X. Any value of n\_subsamples between the number of features and samples leads to an estimator with a compromise between robustness and efficiency. Since the number of least square solutions is “n\_samples choose n\_subsamples”, it can be extremely large and can therefore be limited with max\_subpopulation. If this limit is reached, the subsets are chosen randomly. In a final step, the spatial median (or L1 median) is calculated of all least square solutions.

Read more in the [User Guide](../linear_model.html#theil-sen-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TheilSenRegressor.html

## Table of contents

### Constructors

- [constructor](TheilSenRegressor.md#constructor)

### Properties

- [\_isDisposed](TheilSenRegressor.md#_isdisposed)
- [\_isInitialized](TheilSenRegressor.md#_isinitialized)
- [\_py](TheilSenRegressor.md#_py)
- [id](TheilSenRegressor.md#id)
- [opts](TheilSenRegressor.md#opts)

### Accessors

- [breakdown\_](TheilSenRegressor.md#breakdown_)
- [coef\_](TheilSenRegressor.md#coef_)
- [feature\_names\_in\_](TheilSenRegressor.md#feature_names_in_)
- [intercept\_](TheilSenRegressor.md#intercept_)
- [n\_features\_in\_](TheilSenRegressor.md#n_features_in_)
- [n\_iter\_](TheilSenRegressor.md#n_iter_)
- [n\_subpopulation\_](TheilSenRegressor.md#n_subpopulation_)
- [py](TheilSenRegressor.md#py)

### Methods

- [dispose](TheilSenRegressor.md#dispose)
- [fit](TheilSenRegressor.md#fit)
- [init](TheilSenRegressor.md#init)
- [predict](TheilSenRegressor.md#predict)
- [score](TheilSenRegressor.md#score)

## Constructors

### constructor

• **new TheilSenRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TheilSenRegressorOptions`](../interfaces/TheilSenRegressorOptions.md) |

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L19)

## Accessors

### breakdown\_

• `get` **breakdown_**(): `Promise`<`number`\>

Approximated breakdown point.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L262)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Coefficients of the regression model (median of distribution).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:208](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L208)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L370)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Estimated intercept of regression model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L235)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L343)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations needed for the spatial median.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L289)

___

### n\_subpopulation\_

• `get` **n_subpopulation_**(): `Promise`<`number`\>

Number of combinations taken into account from ‘n choose k’, where n is the number of samples and k is the number of subsamples.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L316)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TheilSenRegressorFitOptions`](../interfaces/TheilSenRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L110)

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

[generated/linear_model/TheilSenRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TheilSenRegressorPredictOptions`](../interfaces/TheilSenRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L142)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TheilSenRegressorScoreOptions`](../interfaces/TheilSenRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TheilSenRegressor.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TheilSenRegressor.ts#L174)
