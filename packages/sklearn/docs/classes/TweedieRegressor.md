[sklearn](../readme.md) / [Exports](../modules.md) / TweedieRegressor

# Class: TweedieRegressor

Generalized Linear Model with a Tweedie distribution.

This estimator can be used to model different GLMs depending on the `power` parameter, which determines the underlying distribution.

Read more in the [User Guide](../linear_model.html#generalized-linear-models).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.TweedieRegressor.html

## Table of contents

### Constructors

- [constructor](TweedieRegressor.md#constructor)

### Properties

- [\_isDisposed](TweedieRegressor.md#_isdisposed)
- [\_isInitialized](TweedieRegressor.md#_isinitialized)
- [\_py](TweedieRegressor.md#_py)
- [id](TweedieRegressor.md#id)
- [opts](TweedieRegressor.md#opts)

### Accessors

- [coef\_](TweedieRegressor.md#coef_)
- [feature\_names\_in\_](TweedieRegressor.md#feature_names_in_)
- [intercept\_](TweedieRegressor.md#intercept_)
- [n\_features\_in\_](TweedieRegressor.md#n_features_in_)
- [n\_iter\_](TweedieRegressor.md#n_iter_)
- [py](TweedieRegressor.md#py)

### Methods

- [dispose](TweedieRegressor.md#dispose)
- [fit](TweedieRegressor.md#fit)
- [init](TweedieRegressor.md#init)
- [predict](TweedieRegressor.md#predict)
- [score](TweedieRegressor.md#score)

## Constructors

### constructor

• **new TweedieRegressor**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`TweedieRegressorOptions`](../interfaces/TweedieRegressorOptions.md) |

#### Defined in

[generated/linear_model/TweedieRegressor.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<`any`[]\>

Estimated coefficients for the linear predictor (`X @ coef\_ + intercept\_`) in the GLM.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L212)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L320)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

Intercept (a.k.a. bias) added to linear predictor.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:239](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L239)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L293)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Actual number of iterations used in the solver.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L266)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/TweedieRegressor.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit a Generalized Linear Model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorFitOptions`](../interfaces/TweedieRegressorFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L110)

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

[generated/linear_model/TweedieRegressor.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`[]\>

Predict using GLM with feature matrix X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorPredictOptions`](../interfaces/TweedieRegressorPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L144)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Compute D^2, the percentage of deviance explained.

D^2 is a generalization of the coefficient of determination R^2. R^2 uses squared error and D^2 uses the deviance of this GLM, see the [User Guide](../model_evaluation.html#regression-metrics).

D^2 is defined as \\(D^2 = 1-\\frac{D(y\_{true},y\_{pred})}{D\_{null}}\\), \\(D\_{null}\\) is the null deviance, i.e. the deviance of a model with intercept alone, which corresponds to \\(y\_{pred} = \\bar{y}\\). The mean \\(\\bar{y}\\) is averaged by sample\_weight. Best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse).

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TweedieRegressorScoreOptions`](../interfaces/TweedieRegressorScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/TweedieRegressor.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/TweedieRegressor.ts#L178)
