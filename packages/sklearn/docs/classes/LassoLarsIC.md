[sklearn](../readme.md) / [Exports](../modules.md) / LassoLarsIC

# Class: LassoLarsIC

Lasso model fit with Lars using BIC or AIC for model selection.

The optimization objective for Lasso is:

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LassoLarsIC.html

## Table of contents

### Constructors

- [constructor](LassoLarsIC.md#constructor)

### Properties

- [\_isDisposed](LassoLarsIC.md#_isdisposed)
- [\_isInitialized](LassoLarsIC.md#_isinitialized)
- [\_py](LassoLarsIC.md#_py)
- [id](LassoLarsIC.md#id)
- [opts](LassoLarsIC.md#opts)

### Accessors

- [alpha\_](LassoLarsIC.md#alpha_)
- [alphas\_](LassoLarsIC.md#alphas_)
- [coef\_](LassoLarsIC.md#coef_)
- [criterion\_](LassoLarsIC.md#criterion_)
- [feature\_names\_in\_](LassoLarsIC.md#feature_names_in_)
- [intercept\_](LassoLarsIC.md#intercept_)
- [n\_features\_in\_](LassoLarsIC.md#n_features_in_)
- [n\_iter\_](LassoLarsIC.md#n_iter_)
- [noise\_variance\_](LassoLarsIC.md#noise_variance_)
- [py](LassoLarsIC.md#py)

### Methods

- [dispose](LassoLarsIC.md#dispose)
- [fit](LassoLarsIC.md#fit)
- [init](LassoLarsIC.md#init)
- [predict](LassoLarsIC.md#predict)
- [score](LassoLarsIC.md#score)

## Constructors

### constructor

• **new LassoLarsIC**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LassoLarsICOptions`](../interfaces/LassoLarsICOptions.md) |

#### Defined in

[generated/linear_model/LassoLarsIC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L17)

## Accessors

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

the alpha parameter chosen by the information criterion

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L248)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Maximum of covariances (in absolute value) at each iteration. `n\_alphas` is either `max\_iter`, `n\_features` or the number of nodes in the path with `alpha >= alpha\_min`, whichever is smaller. If a list, it will be of length `n\_targets`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:271](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L271)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

parameter vector (w in the formulation formula)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:200](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L200)

___

### criterion\_

• `get` **criterion_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The value of the information criteria (‘aic’, ‘bic’) across all alphas. The alpha which has the smallest information criterion is chosen, as specified in [\[1\]](#rde9cc43d0d41-1).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L317)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L392)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

independent term in decision function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:223](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L223)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:367](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L367)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

number of iterations run by lars\_path to find the grid of alphas.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:294](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L294)

___

### noise\_variance\_

• `get` **noise_variance_**(): `Promise`<`number`\>

The estimated noise variance from the data used to compute the criterion.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L342)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LassoLarsIC.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L91)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICFitOptions`](../interfaces/LassoLarsICFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L108)

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

[generated/linear_model/LassoLarsIC.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICPredictOptions`](../interfaces/LassoLarsICPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L140)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LassoLarsICScoreOptions`](../interfaces/LassoLarsICScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LassoLarsIC.ts:168](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LassoLarsIC.ts#L168)
