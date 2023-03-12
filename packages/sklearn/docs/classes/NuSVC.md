[sklearn](../readme.md) / [Exports](../modules.md) / NuSVC

# Class: NuSVC

Nu-Support Vector Classification.

Similar to SVC but uses a parameter to control the number of support vectors.

The implementation is based on libsvm.

Read more in the [User Guide](../svm.html#svm-classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.NuSVC.html

## Table of contents

### Constructors

- [constructor](NuSVC.md#constructor)

### Properties

- [\_isDisposed](NuSVC.md#_isdisposed)
- [\_isInitialized](NuSVC.md#_isinitialized)
- [\_py](NuSVC.md#_py)
- [id](NuSVC.md#id)
- [opts](NuSVC.md#opts)

### Accessors

- [class\_weight\_](NuSVC.md#class_weight_)
- [classes\_](NuSVC.md#classes_)
- [dual\_coef\_](NuSVC.md#dual_coef_)
- [feature\_names\_in\_](NuSVC.md#feature_names_in_)
- [fit\_status\_](NuSVC.md#fit_status_)
- [intercept\_](NuSVC.md#intercept_)
- [n\_features\_in\_](NuSVC.md#n_features_in_)
- [n\_iter\_](NuSVC.md#n_iter_)
- [py](NuSVC.md#py)
- [shape\_fit\_](NuSVC.md#shape_fit_)
- [support\_](NuSVC.md#support_)
- [support\_vectors\_](NuSVC.md#support_vectors_)

### Methods

- [decision\_function](NuSVC.md#decision_function)
- [dispose](NuSVC.md#dispose)
- [fit](NuSVC.md#fit)
- [init](NuSVC.md#init)
- [predict](NuSVC.md#predict)
- [predict\_log\_proba](NuSVC.md#predict_log_proba)
- [predict\_proba](NuSVC.md#predict_proba)
- [score](NuSVC.md#score)

## Constructors

### constructor

• **new NuSVC**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`NuSVCOptions`](../interfaces/NuSVCOptions.md) |

#### Defined in

[generated/svm/NuSVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/NuSVC.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/NuSVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/NuSVC.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/NuSVC.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L21)

## Accessors

### class\_weight\_

• `get` **class_weight_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Multipliers of parameter C of each class. Computed based on the `class\_weight` parameter.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:305](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L305)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The unique classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:328](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L328)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Dual coefficients of the support vector in the decision function (see [Mathematical formulation](../sgd.html#sgd-mathematical-formulation)), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the [multi-class section of the User Guide](../svm.html#svm-multi-class) for details.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVC.ts:350](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L350)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L442)

___

### fit\_status\_

• `get` **fit_status_**(): `Promise`<`number`\>

0 if correctly fitted, 1 if the algorithm did not converge.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:373](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L373)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L396)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L419)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L467)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/NuSVC.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/NuSVC.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L36)

___

### shape\_fit\_

• `get` **shape_fit_**(): `Promise`<`any`[]\>

Array dimensions of training vector `X`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/svm/NuSVC.ts:536](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L536)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L489)

___

### support\_vectors\_

• `get` **support_vectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVC.ts:511](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L511)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Evaluate the decision function for the samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCDecisionFunctionOptions`](../interfaces/NuSVCDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVC.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L117)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/NuSVC.ts:100](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L100)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCFitOptions`](../interfaces/NuSVCFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/NuSVC.ts:147](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L147)

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

[generated/svm/NuSVC.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on samples in X.

For an one-class model, +1 or -1 is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCPredictOptions`](../interfaces/NuSVCPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/NuSVC.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L181)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute log probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCPredictLogProbaOptions`](../interfaces/NuSVCPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVC.ts:211](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L211)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCPredictProbaOptions`](../interfaces/NuSVCPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/NuSVC.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L243)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`NuSVCScoreOptions`](../interfaces/NuSVCScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/NuSVC.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/NuSVC.ts#L273)
