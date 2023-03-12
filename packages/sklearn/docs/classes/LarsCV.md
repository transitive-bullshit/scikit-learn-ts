[sklearn](../readme.md) / [Exports](../modules.md) / LarsCV

# Class: LarsCV

Cross-validated Least Angle Regression model.

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../linear_model.html#least-angle-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LarsCV.html

## Table of contents

### Constructors

- [constructor](LarsCV.md#constructor)

### Properties

- [\_isDisposed](LarsCV.md#_isdisposed)
- [\_isInitialized](LarsCV.md#_isinitialized)
- [\_py](LarsCV.md#_py)
- [id](LarsCV.md#id)
- [opts](LarsCV.md#opts)

### Accessors

- [active\_](LarsCV.md#active_)
- [alpha\_](LarsCV.md#alpha_)
- [alphas\_](LarsCV.md#alphas_)
- [coef\_](LarsCV.md#coef_)
- [coef\_path\_](LarsCV.md#coef_path_)
- [cv\_alphas\_](LarsCV.md#cv_alphas_)
- [feature\_names\_in\_](LarsCV.md#feature_names_in_)
- [intercept\_](LarsCV.md#intercept_)
- [mse\_path\_](LarsCV.md#mse_path_)
- [n\_features\_in\_](LarsCV.md#n_features_in_)
- [n\_iter\_](LarsCV.md#n_iter_)
- [py](LarsCV.md#py)

### Methods

- [dispose](LarsCV.md#dispose)
- [fit](LarsCV.md#fit)
- [init](LarsCV.md#init)
- [predict](LarsCV.md#predict)
- [score](LarsCV.md#score)

## Constructors

### constructor

• **new LarsCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LarsCVOptions`](../interfaces/LarsCVOptions.md) |

#### Defined in

[generated/linear_model/LarsCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/LarsCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/LarsCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/LarsCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/LarsCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/LarsCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L19)

## Accessors

### active\_

• `get` **active_**(): `Promise`<`any`\>

Indices of active variables at the end of the path. If this is a list of lists, the outer list length is `n\_targets`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LarsCV.ts:197](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L197)

___

### alpha\_

• `get` **alpha_**(): `Promise`<`number`\>

the estimated regularization parameter alpha

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LarsCV.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L287)

___

### alphas\_

• `get` **alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

the different values of alpha along the path

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LarsCV.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L309)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

parameter vector (w in the formulation formula)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LarsCV.ts:219](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L219)

___

### coef\_path\_

• `get` **coef_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

the varying values of the coefficients along the path

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LarsCV.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L264)

___

### cv\_alphas\_

• `get` **cv_alphas_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

all the values of alpha along the path for the different folds

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LarsCV.ts:331](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L331)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LarsCV.ts:422](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L422)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number`\>

independent term in decision function

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LarsCV.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L241)

___

### mse\_path\_

• `get` **mse_path_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

the mean square error on left-out for each fold along the path (alpha values given by `cv\_alphas`)

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/LarsCV.ts:354](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L354)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LarsCV.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L399)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

the number of iterations run by Lars with the optimal alpha.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/LarsCV.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L377)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/LarsCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/LarsCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/LarsCV.ts:90](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L90)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LarsCVFitOptions`](../interfaces/LarsCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LarsCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L107)

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

[generated/linear_model/LarsCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LarsCVPredictOptions`](../interfaces/LarsCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/LarsCV.ts:137](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L137)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LarsCVScoreOptions`](../interfaces/LarsCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/LarsCV.ts:165](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/LarsCV.ts#L165)
