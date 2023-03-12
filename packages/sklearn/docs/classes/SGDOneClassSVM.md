[sklearn](../readme.md) / [Exports](../modules.md) / SGDOneClassSVM

# Class: SGDOneClassSVM

Solves linear One-Class SVM using Stochastic Gradient Descent.

This implementation is meant to be used with a kernel approximation technique (e.g. `sklearn.kernel\_approximation.Nystroem`) to obtain results similar to `sklearn.svm.OneClassSVM` which uses a Gaussian kernel by default.

Read more in the [User Guide](../sgd.html#sgd-online-one-class-svm).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDOneClassSVM.html

## Table of contents

### Constructors

- [constructor](SGDOneClassSVM.md#constructor)

### Properties

- [\_isDisposed](SGDOneClassSVM.md#_isdisposed)
- [\_isInitialized](SGDOneClassSVM.md#_isinitialized)
- [\_py](SGDOneClassSVM.md#_py)
- [id](SGDOneClassSVM.md#id)
- [opts](SGDOneClassSVM.md#opts)

### Accessors

- [coef\_](SGDOneClassSVM.md#coef_)
- [feature\_names\_in\_](SGDOneClassSVM.md#feature_names_in_)
- [loss\_function\_](SGDOneClassSVM.md#loss_function_)
- [n\_features\_in\_](SGDOneClassSVM.md#n_features_in_)
- [n\_iter\_](SGDOneClassSVM.md#n_iter_)
- [offset\_](SGDOneClassSVM.md#offset_)
- [py](SGDOneClassSVM.md#py)
- [t\_](SGDOneClassSVM.md#t_)

### Methods

- [decision\_function](SGDOneClassSVM.md#decision_function)
- [densify](SGDOneClassSVM.md#densify)
- [dispose](SGDOneClassSVM.md#dispose)
- [fit](SGDOneClassSVM.md#fit)
- [fit\_predict](SGDOneClassSVM.md#fit_predict)
- [init](SGDOneClassSVM.md#init)
- [partial\_fit](SGDOneClassSVM.md#partial_fit)
- [predict](SGDOneClassSVM.md#predict)
- [score\_samples](SGDOneClassSVM.md#score_samples)
- [sparsify](SGDOneClassSVM.md#sparsify)

## Constructors

### constructor

• **new SGDOneClassSVM**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SGDOneClassSVMOptions`](../interfaces/SGDOneClassSVMOptions.md) |

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L19)

## Accessors

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Weights assigned to the features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L356)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:499](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L499)

___

### loss\_function\_

• `get` **loss_function_**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:449](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L449)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:474](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L474)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

The actual number of iterations to reach the stopping criterion.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L404)

___

### offset\_

• `get` **offset_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - offset.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L379)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L34)

___

### t\_

• `get` **t_**(): `Promise`<`number`\>

Number of weight updates performed during training. Same as `(n\_iter\_ \* n\_samples + 1)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:429](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L429)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMDecisionFunctionOptions`](../interfaces/SGDOneClassSVMDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:114](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L114)

___

### densify

▸ **densify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMDensifyOptions`](../interfaces/SGDOneClassSVMDensifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L148)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:95](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L95)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

This solves an equivalent optimization problem of the One-Class SVM primal optimization problem and returns a weight vector w and an offset rho such that the decision function is given by <w, x> - rho.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMFitOptions`](../interfaces/SGDOneClassSVMFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L176)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMFitPredictOptions`](../interfaces/SGDOneClassSVMFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:210](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L210)

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

[generated/linear_model/SGDOneClassSVM.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L43)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Fit linear One-Class SVM with Stochastic Gradient Descent.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMPartialFitOptions`](../interfaces/SGDOneClassSVMPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:238](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L238)

___

### predict

▸ **predict**(`opts`): `Promise`<`any`\>

Return labels (1 inlier, -1 outlier) of the samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMPredictOptions`](../interfaces/SGDOneClassSVMPredictOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:268](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L268)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Raw scoring function of the samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMScoreSamplesOptions`](../interfaces/SGDOneClassSVMScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L296)

___

### sparsify

▸ **sparsify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SGDOneClassSVMSparsifyOptions`](../interfaces/SGDOneClassSVMSparsifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/linear_model/SGDOneClassSVM.ts:330](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/linear_model/SGDOneClassSVM.ts#L330)
