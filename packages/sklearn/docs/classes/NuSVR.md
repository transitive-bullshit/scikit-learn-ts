[sklearn](../readme.md) / [Exports](../modules.md) / NuSVR

# Class: NuSVR

Nu Support Vector Regression.

Similar to NuSVC, for regression, uses a parameter nu to control the number of support vectors. However, unlike NuSVC, where nu replaces C, here nu replaces the parameter epsilon of epsilon-SVR.

The implementation is based on libsvm.

Read more in the [User Guide](../svm.html#svm-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVR.html

## Table of contents

### Constructors

- [constructor](NuSVR.md#constructor)

### Properties

- [\_isDisposed](NuSVR.md#_isdisposed)
- [\_isInitialized](NuSVR.md#_isinitialized)
- [\_py](NuSVR.md#_py)
- [id](NuSVR.md#id)
- [opts](NuSVR.md#opts)

### Accessors

- [class\_weight\_](NuSVR.md#class_weight_)
- [dual\_coef\_](NuSVR.md#dual_coef_)
- [feature\_names\_in\_](NuSVR.md#feature_names_in_)
- [fit\_status\_](NuSVR.md#fit_status_)
- [intercept\_](NuSVR.md#intercept_)
- [n\_features\_in\_](NuSVR.md#n_features_in_)
- [n\_iter\_](NuSVR.md#n_iter_)
- [py](NuSVR.md#py)
- [shape\_fit\_](NuSVR.md#shape_fit_)
- [support\_](NuSVR.md#support_)
- [support\_vectors\_](NuSVR.md#support_vectors_)

### Methods

- [dispose](NuSVR.md#dispose)
- [fit](NuSVR.md#fit)
- [init](NuSVR.md#init)
- [predict](NuSVR.md#predict)
- [score](NuSVR.md#score)

## Constructors

### constructor

• **new NuSVR**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NuSVROptions`](../interfaces/NuSVROptions.md) |

#### Defined in

[generated/svm/NuSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/NuSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/NuSVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/NuSVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L21)

## Accessors

### class\_weight\_

• `get` **class_weight_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVR.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L207)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coefficients of the support vector in the decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVR.ts:230](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L230)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVR.ts:322](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L322)

___

### fit\_status\_

• `get` **fit_status_**(): `Promise`<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L253)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVR.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L276)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:299](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L299)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the optimization routine to fit the model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L347)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/NuSVR.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/NuSVR.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L36)

___

### shape\_fit\_

• `get` **shape_fit_**(): `Promise`<`any`[]\>

Array dimensions of training vector `X`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/svm/NuSVR.ts:369](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L369)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVR.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L392)

___

### support\_vectors\_

• `get` **support_vectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVR.ts:414](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L414)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/NuSVR.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVRFitOptions`](../interfaces/NuSVRFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/NuSVR.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L111)

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

[generated/svm/NuSVR.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform regression on samples in X.

For an one-class model, +1 (inlier) or -1 (outlier) is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVRPredictOptions`](../interfaces/NuSVRPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVR.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L145)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVRScoreOptions`](../interfaces/NuSVRScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVR.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVR.ts#L175)
