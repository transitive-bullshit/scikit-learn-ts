[sklearn](../readme.md) / [Exports](../modules.md) / OutputCodeClassifier

# Class: OutputCodeClassifier

(Error-Correcting) Output-Code multiclass strategy.

Output-code based strategies consist in representing each class with a binary code (an array of 0s and 1s). At fitting time, one binary classifier per bit in the code book is fitted. At prediction time, the classifiers are used to project new points in the class space and the class closest to the points is chosen. The main advantage of these strategies is that the number of classifiers used can be controlled by the user, either for compressing the model (0 < code\_size < 1) or for making the model more robust to errors (code\_size > 1). See the documentation for more details.

Read more in the [User Guide](../multiclass.html#ecoc).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multiclass.OutputCodeClassifier.html

## Table of contents

### Constructors

- [constructor](OutputCodeClassifier.md#constructor)

### Properties

- [\_isDisposed](OutputCodeClassifier.md#_isdisposed)
- [\_isInitialized](OutputCodeClassifier.md#_isinitialized)
- [\_py](OutputCodeClassifier.md#_py)
- [id](OutputCodeClassifier.md#id)
- [opts](OutputCodeClassifier.md#opts)

### Accessors

- [classes\_](OutputCodeClassifier.md#classes_)
- [code\_book\_](OutputCodeClassifier.md#code_book_)
- [estimators\_](OutputCodeClassifier.md#estimators_)
- [feature\_names\_in\_](OutputCodeClassifier.md#feature_names_in_)
- [n\_features\_in\_](OutputCodeClassifier.md#n_features_in_)
- [py](OutputCodeClassifier.md#py)

### Methods

- [dispose](OutputCodeClassifier.md#dispose)
- [fit](OutputCodeClassifier.md#fit)
- [init](OutputCodeClassifier.md#init)
- [predict](OutputCodeClassifier.md#predict)
- [score](OutputCodeClassifier.md#score)

## Constructors

### constructor

• **new OutputCodeClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`OutputCodeClassifierOptions`](../interfaces/OutputCodeClassifierOptions.md) |

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L19)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Array containing labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:231](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L231)

___

### code\_book\_

• `get` **code_book_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Binary array containing the code of each class.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L258)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

Estimators used for predictions.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:204](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L204)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L312)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimator exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:285](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L285)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit underlying estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierFitOptions`](../interfaces/OutputCodeClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L106)

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

[generated/multiclass/OutputCodeClassifier.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict multi-class targets using underlying estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierPredictOptions`](../interfaces/OutputCodeClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L138)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`OutputCodeClassifierScoreOptions`](../interfaces/OutputCodeClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multiclass/OutputCodeClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multiclass/OutputCodeClassifier.ts#L170)
