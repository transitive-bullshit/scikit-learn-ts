[sklearn](../readme.md) / [Exports](../modules.md) / OrthogonalMatchingPursuitCV

# Class: OrthogonalMatchingPursuitCV

Cross-validated Orthogonal Matching Pursuit model (OMP).

See glossary entry for [cross-validation estimator](../../glossary.html#term-cross-validation-estimator).

Read more in the [User Guide](../linear_model.html#omp).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.OrthogonalMatchingPursuitCV.html

## Table of contents

### Constructors

- [constructor](OrthogonalMatchingPursuitCV.md#constructor)

### Properties

- [\_isDisposed](OrthogonalMatchingPursuitCV.md#_isdisposed)
- [\_isInitialized](OrthogonalMatchingPursuitCV.md#_isinitialized)
- [\_py](OrthogonalMatchingPursuitCV.md#_py)
- [id](OrthogonalMatchingPursuitCV.md#id)
- [opts](OrthogonalMatchingPursuitCV.md#opts)

### Accessors

- [coef\_](OrthogonalMatchingPursuitCV.md#coef_)
- [feature\_names\_in\_](OrthogonalMatchingPursuitCV.md#feature_names_in_)
- [intercept\_](OrthogonalMatchingPursuitCV.md#intercept_)
- [n\_features\_in\_](OrthogonalMatchingPursuitCV.md#n_features_in_)
- [n\_iter\_](OrthogonalMatchingPursuitCV.md#n_iter_)
- [n\_nonzero\_coefs\_](OrthogonalMatchingPursuitCV.md#n_nonzero_coefs_)
- [py](OrthogonalMatchingPursuitCV.md#py)

### Methods

- [dispose](OrthogonalMatchingPursuitCV.md#dispose)
- [fit](OrthogonalMatchingPursuitCV.md#fit)
- [init](OrthogonalMatchingPursuitCV.md#init)
- [predict](OrthogonalMatchingPursuitCV.md#predict)
- [score](OrthogonalMatchingPursuitCV.md#score)

## Constructors

### constructor

• **new OrthogonalMatchingPursuitCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OrthogonalMatchingPursuitCVOptions`](../interfaces/OrthogonalMatchingPursuitCVOptions.md) |

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Parameter vector (w in the problem formulation).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:241](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L241)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L349)

___

### intercept\_

• `get` **intercept_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Independent term in decision function.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L214)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L322)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

Number of active features across every target for the model refit with the best hyperparameters got by cross-validating across all folds.

#### Returns

`Promise`<`number` \| [`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L295)

___

### n\_nonzero\_coefs\_

• `get` **n_nonzero_coefs_**(): `Promise`<`number`\>

Estimated number of non-zero coefficients giving the best mean squared error over the cross-validation folds.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L268)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model using X, y as training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitCVFitOptions`](../interfaces/OrthogonalMatchingPursuitCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L110)

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

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitCVPredictOptions`](../interfaces/OrthogonalMatchingPursuitCVPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L144)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OrthogonalMatchingPursuitCVScoreOptions`](../interfaces/OrthogonalMatchingPursuitCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/OrthogonalMatchingPursuitCV.ts:178](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/OrthogonalMatchingPursuitCV.ts#L178)
