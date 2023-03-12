[sklearn](../readme.md) / [Exports](../modules.md) / LassoLarsCV

# Class: LassoLarsCV

Cross-validated Lasso, using the LARS algorithm.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsCV.html

## Table of contents

### Constructors

- [constructor](LassoLarsCV.md#constructor)

### Properties

- [\_isDisposed](LassoLarsCV.md#_isdisposed)
- [\_isInitialized](LassoLarsCV.md#_isinitialized)
- [\_py](LassoLarsCV.md#_py)
- [id](LassoLarsCV.md#id)
- [opts](LassoLarsCV.md#opts)

### Accessors

- [active\_](LassoLarsCV.md#active_)
- [alpha\_](LassoLarsCV.md#alpha_)
- [alphas\_](LassoLarsCV.md#alphas_)
- [coef\_](LassoLarsCV.md#coef_)
- [coef\_path\_](LassoLarsCV.md#coef_path_)
- [cv\_alphas\_](LassoLarsCV.md#cv_alphas_)
- [feature\_names\_in\_](LassoLarsCV.md#feature_names_in_)
- [intercept\_](LassoLarsCV.md#intercept_)
- [mse\_path\_](LassoLarsCV.md#mse_path_)
- [n\_features\_in\_](LassoLarsCV.md#n_features_in_)
- [n\_iter\_](LassoLarsCV.md#n_iter_)
- [py](LassoLarsCV.md#py)

### Methods

- [dispose](LassoLarsCV.md#dispose)
- [fit](LassoLarsCV.md#fit)
- [init](LassoLarsCV.md#init)
- [predict](LassoLarsCV.md#predict)
- [score](LassoLarsCV.md#score)

## Constructors

### constructor

• **new LassoLarsCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsCVOptions`](../interfaces/LassoLarsCVOptions.md) |

#### Defined in

[generated/linear_model/LassoLarsCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L19)

## Accessors

### active\_

• `get` **active_**(): `Promise`<`any`\>

Indices of active variables at the end of the path.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:390](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L390)

___

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

the estimated regularization parameter alpha

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L273)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

the different values of alpha along the path

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L296)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

parameter vector (w in the formulation formula)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L200)

___

### coef\_path\_

• `get` **coef_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

the varying values of the coefficients along the path

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L248)

___

### cv\_alphas\_

• `get` **cv_alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

all the values of alpha along the path for the different folds

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L319)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L438)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

independent term in decision function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L223)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L344)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L413)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

the number of iterations run by Lars with the optimal alpha.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L367)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LassoLarsCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVFitOptions`](../interfaces/LassoLarsCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L110)

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

[generated/linear_model/LassoLarsCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVPredictOptions`](../interfaces/LassoLarsCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L140)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsCVScoreOptions`](../interfaces/LassoLarsCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsCV.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsCV.ts#L168)
