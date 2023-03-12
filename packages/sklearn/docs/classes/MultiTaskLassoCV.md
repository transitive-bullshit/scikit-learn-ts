[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskLassoCV

# Class: MultiTaskLassoCV

Multi-task Lasso model trained with L1/L2 mixed-norm as regularizer.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskLasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskLassoCV.html

## Table of contents

### Constructors

- [constructor](MultiTaskLassoCV.md#constructor)

### Properties

- [\_isDisposed](MultiTaskLassoCV.md#_isdisposed)
- [\_isInitialized](MultiTaskLassoCV.md#_isinitialized)
- [\_py](MultiTaskLassoCV.md#_py)
- [id](MultiTaskLassoCV.md#id)
- [opts](MultiTaskLassoCV.md#opts)

### Accessors

- [alpha\_](MultiTaskLassoCV.md#alpha_)
- [alphas\_](MultiTaskLassoCV.md#alphas_)
- [coef\_](MultiTaskLassoCV.md#coef_)
- [dual\_gap\_](MultiTaskLassoCV.md#dual_gap_)
- [feature\_names\_in\_](MultiTaskLassoCV.md#feature_names_in_)
- [intercept\_](MultiTaskLassoCV.md#intercept_)
- [mse\_path\_](MultiTaskLassoCV.md#mse_path_)
- [n\_features\_in\_](MultiTaskLassoCV.md#n_features_in_)
- [n\_iter\_](MultiTaskLassoCV.md#n_iter_)
- [py](MultiTaskLassoCV.md#py)

### Methods

- [dispose](MultiTaskLassoCV.md#dispose)
- [fit](MultiTaskLassoCV.md#fit)
- [init](MultiTaskLassoCV.md#init)
- [path](MultiTaskLassoCV.md#path)
- [predict](MultiTaskLassoCV.md#predict)
- [score](MultiTaskLassoCV.md#score)

## Constructors

### constructor

• **new MultiTaskLassoCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskLassoCVOptions`](../interfaces/MultiTaskLassoCVOptions.md) |

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L19)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

The amount of penalization chosen by cross validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:320](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L320)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The grid of alphas used for fitting.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L374)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:293](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L293)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number`\>

The dual gap at the end of the optimization for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L428)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L482)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L266)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Mean square error for the test set on each fold, varying alpha.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L347)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L455)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L401)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit MultiTaskLasso model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoCVFitOptions`](../interfaces/MultiTaskLassoCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L116)

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

[generated/linear_model/MultiTaskLassoCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L43)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute Lasso path with coordinate descent.

The Lasso optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoCVPathOptions`](../interfaces/MultiTaskLassoCVPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:152](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L152)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoCVPredictOptions`](../interfaces/MultiTaskLassoCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L200)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskLassoCVScoreOptions`](../interfaces/MultiTaskLassoCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskLassoCV.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskLassoCV.ts#L232)
