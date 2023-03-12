[sklearn](../readme.md) / [Exports](../modules.md) / MultiTaskElasticNetCV

# Class: MultiTaskElasticNetCV

Multi-task L1/L2 ElasticNet with built-in cross-validation.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

The optimization objective for MultiTaskElasticNet is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.MultiTaskElasticNetCV.html

## Table of contents

### Constructors

- [constructor](MultiTaskElasticNetCV.md#constructor)

### Properties

- [\_isDisposed](MultiTaskElasticNetCV.md#_isdisposed)
- [\_isInitialized](MultiTaskElasticNetCV.md#_isinitialized)
- [\_py](MultiTaskElasticNetCV.md#_py)
- [id](MultiTaskElasticNetCV.md#id)
- [opts](MultiTaskElasticNetCV.md#opts)

### Accessors

- [alpha\_](MultiTaskElasticNetCV.md#alpha_)
- [alphas\_](MultiTaskElasticNetCV.md#alphas_)
- [coef\_](MultiTaskElasticNetCV.md#coef_)
- [dual\_gap\_](MultiTaskElasticNetCV.md#dual_gap_)
- [feature\_names\_in\_](MultiTaskElasticNetCV.md#feature_names_in_)
- [intercept\_](MultiTaskElasticNetCV.md#intercept_)
- [l1\_ratio\_](MultiTaskElasticNetCV.md#l1_ratio_)
- [mse\_path\_](MultiTaskElasticNetCV.md#mse_path_)
- [n\_features\_in\_](MultiTaskElasticNetCV.md#n_features_in_)
- [n\_iter\_](MultiTaskElasticNetCV.md#n_iter_)
- [py](MultiTaskElasticNetCV.md#py)

### Methods

- [dispose](MultiTaskElasticNetCV.md#dispose)
- [fit](MultiTaskElasticNetCV.md#fit)
- [init](MultiTaskElasticNetCV.md#init)
- [path](MultiTaskElasticNetCV.md#path)
- [predict](MultiTaskElasticNetCV.md#predict)
- [score](MultiTaskElasticNetCV.md#score)

## Constructors

### constructor

• **new MultiTaskElasticNetCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiTaskElasticNetCVOptions`](../interfaces/MultiTaskElasticNetCVOptions.md) |

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L19)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

The amount of penalization chosen by cross validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L324)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The grid of alphas used for fitting, for each l1\_ratio.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L378)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Parameter vector (W in the cost function formula). Note that `coef\_` stores the transpose of `W`, `W.T`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:297](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L297)

___

### dual\_gap\_

• `get` **dual_gap_**(): `Promise`<`number`\>

The dual gap at the end of the optimization for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:459](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L459)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:513](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L513)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:270](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L270)

___

### l1\_ratio\_

• `get` **l1_ratio_**(): `Promise`<`number`\>

Best l1\_ratio obtained by cross-validation.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L405)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Mean square error for the test set on each fold, varying alpha.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L351)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:486](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L486)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the coordinate descent solver to reach the specified tolerance for the optimal alpha.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:432](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L432)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:99](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L99)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit MultiTaskElasticNet model with coordinate descent.

Fit is on grid of alphas and best alpha estimated by cross-validation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVFitOptions`](../interfaces/MultiTaskElasticNetCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:118](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L118)

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

[generated/linear_model/MultiTaskElasticNetCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L43)

___

### path

▸ **path**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute elastic net path with coordinate descent.

The elastic net optimization function varies for mono and multi-outputs.

For mono-output tasks it is:

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVPathOptions`](../interfaces/MultiTaskElasticNetCVPathOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:154](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L154)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVPredictOptions`](../interfaces/MultiTaskElasticNetCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L204)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiTaskElasticNetCVScoreOptions`](../interfaces/MultiTaskElasticNetCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/MultiTaskElasticNetCV.ts:236](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/MultiTaskElasticNetCV.ts#L236)
