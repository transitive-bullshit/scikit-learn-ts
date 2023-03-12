[sklearn](../readme.md) / [Exports](../modules.md) / SVR

# Class: SVR

Epsilon-Support Vector Regression.

The free parameters in the model are C and epsilon.

The implementation is based on libsvm. The fit time complexity is more than quadratic with the number of samples which makes it hard to scale to datasets with more than a couple of 10000 samples. For large datasets consider using [`LinearSVR`](sklearn.svm.LinearSVR.html#sklearn.svm.LinearSVR "sklearn.svm.LinearSVR") or [`SGDRegressor`](sklearn.linear_model.SGDRegressor.html#sklearn.linear_model.SGDRegressor "sklearn.linear_model.SGDRegressor") instead, possibly after a [`Nystroem`](sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](../kernel_approximation.html#kernel-approximation).

Read more in the [User Guide](../svm.html#svm-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html

## Table of contents

### Constructors

- [constructor](SVR.md#constructor)

### Properties

- [\_isDisposed](SVR.md#_isdisposed)
- [\_isInitialized](SVR.md#_isinitialized)
- [\_py](SVR.md#_py)
- [id](SVR.md#id)
- [opts](SVR.md#opts)

### Accessors

- [class\_weight\_](SVR.md#class_weight_)
- [dual\_coef\_](SVR.md#dual_coef_)
- [feature\_names\_in\_](SVR.md#feature_names_in_)
- [fit\_status\_](SVR.md#fit_status_)
- [intercept\_](SVR.md#intercept_)
- [n\_features\_in\_](SVR.md#n_features_in_)
- [n\_iter\_](SVR.md#n_iter_)
- [py](SVR.md#py)
- [shape\_fit\_](SVR.md#shape_fit_)
- [support\_](SVR.md#support_)
- [support\_vectors\_](SVR.md#support_vectors_)

### Methods

- [dispose](SVR.md#dispose)
- [fit](SVR.md#fit)
- [init](SVR.md#init)
- [predict](SVR.md#predict)
- [score](SVR.md#score)

## Constructors

### constructor

• **new SVR**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SVROptions`](../interfaces/SVROptions.md) |

#### Defined in

[generated/svm/SVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/SVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/SVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/SVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/SVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/SVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L21)

## Accessors

### class\_weight\_

• `get` **class_weight_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVR.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L206)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coefficients of the support vector in the decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVR.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L229)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVR.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L319)

___

### fit\_status\_

• `get` **fit_status_**(): `Promise`<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVR.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L251)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVR.ts:274](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L274)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVR.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L296)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the optimization routine to fit the model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVR.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L342)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/SVR.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/SVR.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L36)

___

### shape\_fit\_

• `get` **shape_fit_**(): `Promise`<`any`[]\>

Array dimensions of training vector `X`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/svm/SVR.ts:364](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L364)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVR.ts:386](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L386)

___

### support\_vectors\_

• `get` **support_vectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVR.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L408)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/SVR.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVRFitOptions`](../interfaces/SVRFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/SVR.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L111)

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

[generated/svm/SVR.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform regression on samples in X.

For an one-class model, +1 (inlier) or -1 (outlier) is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVRPredictOptions`](../interfaces/SVRPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVR.ts:144](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L144)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVRScoreOptions`](../interfaces/SVRScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVR.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVR.ts#L174)
