[sklearn](../readme.md) / [Exports](../modules.md) / LinearSVC

# Class: LinearSVC

Linear Support Vector Classification.

Similar to SVC with parameter kernel=’linear’, but implemented in terms of liblinear rather than libsvm, so it has more flexibility in the choice of penalties and loss functions and should scale better to large numbers of samples.

This class supports both dense and sparse input and the multiclass support is handled according to a one-vs-the-rest scheme.

Read more in the [User Guide](../svm.html#svm-classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.LinearSVC.html

## Table of contents

### Constructors

- [constructor](LinearSVC.md#constructor)

### Properties

- [\_isDisposed](LinearSVC.md#_isdisposed)
- [\_isInitialized](LinearSVC.md#_isinitialized)
- [\_py](LinearSVC.md#_py)
- [id](LinearSVC.md#id)
- [opts](LinearSVC.md#opts)

### Accessors

- [classes\_](LinearSVC.md#classes_)
- [coef\_](LinearSVC.md#coef_)
- [feature\_names\_in\_](LinearSVC.md#feature_names_in_)
- [intercept\_](LinearSVC.md#intercept_)
- [n\_features\_in\_](LinearSVC.md#n_features_in_)
- [n\_iter\_](LinearSVC.md#n_iter_)
- [py](LinearSVC.md#py)

### Methods

- [decision\_function](LinearSVC.md#decision_function)
- [densify](LinearSVC.md#densify)
- [dispose](LinearSVC.md#dispose)
- [fit](LinearSVC.md#fit)
- [init](LinearSVC.md#init)
- [predict](LinearSVC.md#predict)
- [score](LinearSVC.md#score)
- [sparsify](LinearSVC.md#sparsify)

## Constructors

### constructor

• **new LinearSVC**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`LinearSVCOptions`](../interfaces/LinearSVCOptions.md) |

#### Defined in

[generated/svm/LinearSVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/LinearSVC.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/LinearSVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/LinearSVC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/LinearSVC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The unique classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVC.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L347)

___

### coef\_

• `get` **coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Weights assigned to the features (coefficients in the primal problem).

`coef\_` is a readonly property derived from `raw\_coef\_` that follows the internal memory layout of liblinear.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/svm/LinearSVC.ts:301](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L301)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVC.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L395)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/LinearSVC.ts:324](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L324)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L370)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<`number`\>

Maximum number of iterations run across all classes.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L420)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/LinearSVC.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/LinearSVC.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L36)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict confidence scores for samples.

The confidence score for a sample is proportional to the signed distance of that sample to the hyperplane.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCDecisionFunctionOptions`](../interfaces/LinearSVCDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVC.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L117)

___

### densify

▸ **densify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to dense array format.

Converts the `coef\_` member (back) to a numpy.ndarray. This is the default format of `coef\_` and is required for fitting, so calling this method is only required on models that have previously been sparsified; otherwise, it is a no-op.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCDensifyOptions`](../interfaces/LinearSVCDensifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L149)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/LinearSVC.ts:98](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L98)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCFitOptions`](../interfaces/LinearSVCFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L175)

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

[generated/svm/LinearSVC.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCPredictOptions`](../interfaces/LinearSVCPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/LinearSVC.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L207)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCScoreOptions`](../interfaces/LinearSVCScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/LinearSVC.ts:237](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L237)

___

### sparsify

▸ **sparsify**(`opts`): `Promise`<`any`\>

Convert coefficient matrix to sparse format.

Converts the `coef\_` member to a scipy.sparse matrix, which for L1-regularized models can be much more memory- and storage-efficient than the usual numpy.ndarray representation.

The `intercept\_` member is not converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`LinearSVCSparsifyOptions`](../interfaces/LinearSVCSparsifyOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/LinearSVC.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/LinearSVC.ts#L273)
