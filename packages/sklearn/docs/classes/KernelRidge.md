[sklearn](../readme.md) / [Exports](../modules.md) / KernelRidge

# Class: KernelRidge

Kernel ridge regression.

Kernel ridge regression (KRR) combines ridge regression (linear least squares with l2-norm regularization) with the kernel trick. It thus learns a linear function in the space induced by the respective kernel and the data. For non-linear kernels, this corresponds to a non-linear function in the original space.

The form of the model learned by KRR is identical to support vector regression (SVR). However, different loss functions are used: KRR uses squared error loss while support vector regression uses epsilon-insensitive loss, both combined with l2 regularization. In contrast to SVR, fitting a KRR model can be done in closed-form and is typically faster for medium-sized datasets. On the other hand, the learned model is non-sparse and thus slower than SVR, which learns a sparse model for epsilon > 0, at prediction-time.

This estimator has built-in support for multi-variate regression (i.e., when y is a 2d-array of shape \[n\_samples, n\_targets\]).

Read more in the [User Guide](../kernel_ridge.html#kernel-ridge).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.kernel_ridge.KernelRidge.html

## Table of contents

### Constructors

- [constructor](KernelRidge.md#constructor)

### Properties

- [\_isDisposed](KernelRidge.md#_isdisposed)
- [\_isInitialized](KernelRidge.md#_isinitialized)
- [\_py](KernelRidge.md#_py)
- [id](KernelRidge.md#id)
- [opts](KernelRidge.md#opts)

### Accessors

- [X\_fit\_](KernelRidge.md#x_fit_)
- [dual\_coef\_](KernelRidge.md#dual_coef_)
- [feature\_names\_in\_](KernelRidge.md#feature_names_in_)
- [n\_features\_in\_](KernelRidge.md#n_features_in_)
- [py](KernelRidge.md#py)

### Methods

- [dispose](KernelRidge.md#dispose)
- [fit](KernelRidge.md#fit)
- [init](KernelRidge.md#init)
- [predict](KernelRidge.md#predict)
- [score](KernelRidge.md#score)

## Constructors

### constructor

• **new KernelRidge**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`KernelRidgeOptions`](../interfaces/KernelRidgeOptions.md) |

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L23)

## Accessors

### X\_fit\_

• `get` **X_fit_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Training data, which is also required for prediction. If kernel == “precomputed” this is instead the precomputed training matrix, of shape (n\_samples, n\_samples).

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:229](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L229)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Representation of weight vector(s) in kernel space

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L204)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L277)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:252](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L252)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L38)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit Kernel Ridge regression model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgeFitOptions`](../interfaces/KernelRidgeFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:110](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L110)

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

[generated/kernel_ridge/KernelRidge.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L47)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict using the kernel ridge model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgePredictOptions`](../interfaces/KernelRidgePredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L142)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the coefficient of determination of the prediction.

The coefficient of determination \\(R^2\\) is defined as \\((1 - \\frac{u}{v})\\), where \\(u\\) is the residual sum of squares `((y\_true \- y\_pred)\*\* 2).sum()` and \\(v\\) is the total sum of squares `((y\_true \- y\_true.mean()) \*\* 2).sum()`. The best possible score is 1.0 and it can be negative (because the model can be arbitrarily worse). A constant model that always predicts the expected value of `y`, disregarding the input features, would get a \\(R^2\\) score of 0.0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`KernelRidgeScoreOptions`](../interfaces/KernelRidgeScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/kernel_ridge/KernelRidge.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_ridge/KernelRidge.ts#L172)
