[sklearn](../readme.md) / [Exports](../modules.md) / LinearSVR

# Class: LinearSVR

Linear Support Vector Regression.

Similar to SVR with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

This class supports both dense and sparse input.

Read more in the [User Guide](../svm.html#svm-regression).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVR.html

## Table of contents

### Constructors

- [constructor](LinearSVR.md#constructor)

### Properties

- [\_isDisposed](LinearSVR.md#_isdisposed)
- [\_isInitialized](LinearSVR.md#_isinitialized)
- [\_py](LinearSVR.md#_py)
- [id](LinearSVR.md#id)
- [opts](LinearSVR.md#opts)

### Accessors

- [coef\_](LinearSVR.md#coef_)
- [feature\_names\_in\_](LinearSVR.md#feature_names_in_)
- [intercept\_](LinearSVR.md#intercept_)
- [n\_features\_in\_](LinearSVR.md#n_features_in_)
- [n\_iter\_](LinearSVR.md#n_iter_)
- [py](LinearSVR.md#py)

### Methods

- [dispose](LinearSVR.md#dispose)
- [fit](LinearSVR.md#fit)
- [init](LinearSVR.md#init)
- [predict](LinearSVR.md#predict)
- [score](LinearSVR.md#score)

## Constructors

### constructor

• **new LinearSVR**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LinearSVROptions`](../interfaces/LinearSVROptions.md) |

#### Defined in

[generated/svm/LinearSVR.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVR.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVR.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/LinearSVR.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/LinearSVR.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/LinearSVR.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L21)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/LinearSVR.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L205)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVR.ts:276](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L276)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVR.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L228)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVR.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L251)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Maximum number of iterations run across all classes.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVR.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L301)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/LinearSVR.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/LinearSVR.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L36)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/LinearSVR.ts:94](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L94)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRFitOptions`](../interfaces/LinearSVRFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/LinearSVR.ts:111](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L111)

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

[generated/svm/LinearSVR.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Predict using the linear model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRPredictOptions`](../interfaces/LinearSVRPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/LinearSVR.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L143)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVRScoreOptions`](../interfaces/LinearSVRScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVR.ts:171](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVR.ts#L171)
