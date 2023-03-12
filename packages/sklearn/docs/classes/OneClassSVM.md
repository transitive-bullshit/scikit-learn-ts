[sklearn](../readme.md) / [Exports](../modules.md) / OneClassSVM

# Class: OneClassSVM

Unsupervised Outlier Detection.

Estimate the support of a high-dimensional distribution.

The implementation is based on libsvm.

Read more in the [User Guide](../outlier_detection.html#outlier-detection).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html

## Table of contents

### Constructors

- [constructor](OneClassSVM.md#constructor)

### Properties

- [\_isDisposed](OneClassSVM.md#_isdisposed)
- [\_isInitialized](OneClassSVM.md#_isinitialized)
- [\_py](OneClassSVM.md#_py)
- [id](OneClassSVM.md#id)
- [opts](OneClassSVM.md#opts)

### Accessors

- [class\_weight\_](OneClassSVM.md#class_weight_)
- [dual\_coef\_](OneClassSVM.md#dual_coef_)
- [feature\_names\_in\_](OneClassSVM.md#feature_names_in_)
- [fit\_status\_](OneClassSVM.md#fit_status_)
- [intercept\_](OneClassSVM.md#intercept_)
- [n\_features\_in\_](OneClassSVM.md#n_features_in_)
- [n\_iter\_](OneClassSVM.md#n_iter_)
- [offset\_](OneClassSVM.md#offset_)
- [py](OneClassSVM.md#py)
- [shape\_fit\_](OneClassSVM.md#shape_fit_)
- [support\_](OneClassSVM.md#support_)
- [support\_vectors\_](OneClassSVM.md#support_vectors_)

### Methods

- [decision\_function](OneClassSVM.md#decision_function)
- [dispose](OneClassSVM.md#dispose)
- [fit](OneClassSVM.md#fit)
- [fit\_predict](OneClassSVM.md#fit_predict)
- [init](OneClassSVM.md#init)
- [predict](OneClassSVM.md#predict)
- [score\_samples](OneClassSVM.md#score_samples)

## Constructors

### constructor

• **new OneClassSVM**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OneClassSVMOptions`](../interfaces/OneClassSVMOptions.md) |

#### Defined in

[generated/svm/OneClassSVM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/OneClassSVM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/OneClassSVM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/OneClassSVM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/OneClassSVM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/OneClassSVM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L21)

## Accessors

### class\_weight\_

• `get` **class_weight_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:262](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L262)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Coefficients of the support vectors in the decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:287](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L287)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L387)

___

### fit\_status\_

• `get` **fit_status_**(): `Promise`<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L312)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constant in the decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:337](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L337)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L362)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Number of iterations run by the optimization routine to fit the model.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L412)

___

### offset\_

• `get` **offset_**(): `Promise`<`number`\>

Offset used to define the decision function from the raw scores. We have the relation: decision\_function = score\_samples - `offset\_`. The offset is the opposite of `intercept\_` and is provided for consistency with other outlier detection algorithms.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/OneClassSVM.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L435)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/OneClassSVM.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/OneClassSVM.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L36)

___

### shape\_fit\_

• `get` **shape_fit_**(): `Promise`<`any`[]\>

Array dimensions of training vector `X`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:458](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L458)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L483)

___

### support\_vectors\_

• `get` **support_vectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/OneClassSVM.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L506)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Signed distance to the separating hyperplane.

Signed distance is positive for an inlier and negative for an outlier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneClassSVMDecisionFunctionOptions`](../interfaces/OneClassSVMDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:112](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L112)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/OneClassSVM.ts:93](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L93)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Detect the soft boundary of the set of samples X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneClassSVMFitOptions`](../interfaces/OneClassSVMFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/OneClassSVM.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L142)

___

### fit\_predict

▸ **fit_predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform fit on X and returns labels for X.

Returns -1 for outliers and 1 for inliers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneClassSVMFitPredictOptions`](../interfaces/OneClassSVMFitPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:176](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L176)

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

[generated/svm/OneClassSVM.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on samples in X.

For a one-class model, +1 or -1 is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneClassSVMPredictOptions`](../interfaces/OneClassSVMPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L206)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Raw scoring function of the samples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OneClassSVMScoreSamplesOptions`](../interfaces/OneClassSVMScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/OneClassSVM.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/OneClassSVM.ts#L234)
