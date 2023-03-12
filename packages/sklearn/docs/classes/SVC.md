[sklearn](../readme.md) / [Exports](../modules.md) / SVC

# Class: SVC

C-Support Vector Classification.

The implementation is based on libsvm. The fit time scales at least quadratically with the number of samples and may be impractical beyond tens of thousands of samples. For large datasets consider using [`LinearSVC`](sklearn.svm.LinearSVC.html#sklearn.svm.LinearSVC "sklearn.svm.LinearSVC") or [`SGDClassifier`](sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier "sklearn.linear_model.SGDClassifier") instead, possibly after a [`Nystroem`](sklearn.kernel_approximation.Nystroem.html#sklearn.kernel_approximation.Nystroem "sklearn.kernel_approximation.Nystroem") transformer or other [Kernel Approximation](../kernel_approximation.html#kernel-approximation).

The multiclass support is handled according to a one-vs-one scheme.

For details on the precise mathematical formulation of the provided kernel functions and how `gamma`, `coef0` and `degree` affect each other, see the corresponding section in the narrative documentation: [Kernel functions](../svm.html#svm-kernels).

Read more in the [User Guide](../svm.html#svm-classification).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html

## Table of contents

### Constructors

- [constructor](SVC.md#constructor)

### Properties

- [\_isDisposed](SVC.md#_isdisposed)
- [\_isInitialized](SVC.md#_isinitialized)
- [\_py](SVC.md#_py)
- [id](SVC.md#id)
- [opts](SVC.md#opts)

### Accessors

- [class\_weight\_](SVC.md#class_weight_)
- [classes\_](SVC.md#classes_)
- [dual\_coef\_](SVC.md#dual_coef_)
- [feature\_names\_in\_](SVC.md#feature_names_in_)
- [fit\_status\_](SVC.md#fit_status_)
- [intercept\_](SVC.md#intercept_)
- [n\_features\_in\_](SVC.md#n_features_in_)
- [n\_iter\_](SVC.md#n_iter_)
- [py](SVC.md#py)
- [shape\_fit\_](SVC.md#shape_fit_)
- [support\_](SVC.md#support_)
- [support\_vectors\_](SVC.md#support_vectors_)

### Methods

- [decision\_function](SVC.md#decision_function)
- [dispose](SVC.md#dispose)
- [fit](SVC.md#fit)
- [init](SVC.md#init)
- [predict](SVC.md#predict)
- [predict\_log\_proba](SVC.md#predict_log_proba)
- [predict\_proba](SVC.md#predict_proba)
- [score](SVC.md#score)

## Constructors

### constructor

• **new SVC**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`SVCOptions`](../interfaces/SVCOptions.md) |

#### Defined in

[generated/svm/SVC.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/svm/SVC.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/svm/SVC.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/svm/SVC.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/svm/SVC.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/svm/SVC.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L23)

## Accessors

### class\_weight\_

• `get` **class_weight_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Multipliers of parameter C for each class. Computed based on the `class\_weight` parameter.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:304](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L304)

___

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L327)

___

### dual\_coef\_

• `get` **dual_coef_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Dual coefficients of the support vector in the decision function (see [Mathematical formulation](../sgd.html#sgd-mathematical-formulation)), multiplied by their targets. For multiclass, coefficient for all 1-vs-1 classifiers. The layout of the coefficients in the multiclass case is somewhat non-trivial. See the [multi-class section of the User Guide](../svm.html#svm-multi-class) for details.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVC.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L349)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:439](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L439)

___

### fit\_status\_

• `get` **fit_status_**(): `Promise`<`number`\>

0 if correctly fitted, 1 otherwise (will raise warning)

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVC.ts:371](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L371)

___

### intercept\_

• `get` **intercept_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Constants in decision function.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:394](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L394)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVC.ts:416](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L416)

___

### n\_iter\_

• `get` **n_iter_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Number of iterations run by the optimization routine to fit the model. The shape of this attribute depends on the number of models optimized which in turn depends on the number of classes.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L462)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/svm/SVC.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/svm/SVC.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L38)

___

### shape\_fit\_

• `get` **shape_fit_**(): `Promise`<`any`[]\>

Array dimensions of training vector `X`.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/svm/SVC.ts:529](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L529)

___

### support\_

• `get` **support_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Indices of support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:484](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L484)

___

### support\_vectors\_

• `get` **support_vectors_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Support vectors.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVC.ts:506](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L506)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Evaluate the decision function for the samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCDecisionFunctionOptions`](../interfaces/SVCDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVC.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L119)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/svm/SVC.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L102)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the SVM model according to the given training data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCFitOptions`](../interfaces/SVCFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/svm/SVC.ts:149](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L149)

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

[generated/svm/SVC.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L47)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Perform classification on samples in X.

For an one-class model, +1 or -1 is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCPredictOptions`](../interfaces/SVCPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/svm/SVC.ts:182](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L182)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute log probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCPredictLogProbaOptions`](../interfaces/SVCPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVC.ts:212](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L212)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute probabilities of possible outcomes for samples in X.

The model need to have probability information computed at training time: fit with attribute `probability` set to `true`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCPredictProbaOptions`](../interfaces/SVCPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/svm/SVC.ts:242](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L242)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SVCScoreOptions`](../interfaces/SVCScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/svm/SVC.ts:272](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/svm/SVC.ts#L272)
