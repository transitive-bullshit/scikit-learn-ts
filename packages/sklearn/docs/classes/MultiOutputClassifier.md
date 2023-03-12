[sklearn](../readme.md) / [Exports](../modules.md) / MultiOutputClassifier

# Class: MultiOutputClassifier

Multi target classification.

This strategy consists of fitting one classifier per target. This is a simple strategy for extending classifiers that do not natively support multi-target classification.

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.MultiOutputClassifier.html

## Table of contents

### Constructors

- [constructor](MultiOutputClassifier.md#constructor)

### Properties

- [\_isDisposed](MultiOutputClassifier.md#_isdisposed)
- [\_isInitialized](MultiOutputClassifier.md#_isinitialized)
- [\_py](MultiOutputClassifier.md#_py)
- [id](MultiOutputClassifier.md#id)
- [opts](MultiOutputClassifier.md#opts)

### Accessors

- [classes\_](MultiOutputClassifier.md#classes_)
- [estimators\_](MultiOutputClassifier.md#estimators_)
- [feature\_names\_in\_](MultiOutputClassifier.md#feature_names_in_)
- [n\_features\_in\_](MultiOutputClassifier.md#n_features_in_)
- [py](MultiOutputClassifier.md#py)

### Methods

- [dispose](MultiOutputClassifier.md#dispose)
- [fit](MultiOutputClassifier.md#fit)
- [init](MultiOutputClassifier.md#init)
- [partial\_fit](MultiOutputClassifier.md#partial_fit)
- [predict](MultiOutputClassifier.md#predict)
- [predict\_proba](MultiOutputClassifier.md#predict_proba)
- [score](MultiOutputClassifier.md#score)

## Constructors

### constructor

• **new MultiOutputClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`MultiOutputClassifierOptions`](../interfaces/MultiOutputClassifierOptions.md) |

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Class labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L281)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

Estimators used for predictions.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L308)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L362)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `estimator` exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:335](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L335)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:85](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L85)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data matrix X and targets Y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputClassifierFitOptions`](../interfaces/MultiOutputClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:102](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L102)

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

[generated/multioutput/MultiOutputClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L41)

___

### partial\_fit

▸ **partial_fit**(`opts`): `Promise`<`any`\>

Incrementally fit a separate model for each class output.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputClassifierPartialFitOptions`](../interfaces/MultiOutputClassifierPartialFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:138](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L138)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict multi-output variable using model for each target variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputClassifierPredictOptions`](../interfaces/MultiOutputClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L180)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<`any`\>

Return prediction probabilities for each class of each output.

This method will raise a `ValueError` if any of the estimators do not have `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputClassifierPredictProbaOptions`](../interfaces/MultiOutputClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:214](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L214)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MultiOutputClassifierScoreOptions`](../interfaces/MultiOutputClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/MultiOutputClassifier.ts:249](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/MultiOutputClassifier.ts#L249)
