[sklearn](../readme.md) / [Exports](../modules.md) / ClassifierChain

# Class: ClassifierChain

A multi-label model that arranges binary classifiers into a chain.

Each model makes a prediction in the order specified by the chain using all of the available features provided to the model plus the predictions of models that are earlier in the chain.

Read more in the [User Guide](../multiclass.html#classifierchain).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.multioutput.ClassifierChain.html

## Table of contents

### Constructors

- [constructor](ClassifierChain.md#constructor)

### Properties

- [\_isDisposed](ClassifierChain.md#_isdisposed)
- [\_isInitialized](ClassifierChain.md#_isinitialized)
- [\_py](ClassifierChain.md#_py)
- [id](ClassifierChain.md#id)
- [opts](ClassifierChain.md#opts)

### Accessors

- [classes\_](ClassifierChain.md#classes_)
- [estimators\_](ClassifierChain.md#estimators_)
- [feature\_names\_in\_](ClassifierChain.md#feature_names_in_)
- [n\_features\_in\_](ClassifierChain.md#n_features_in_)
- [order\_](ClassifierChain.md#order_)
- [py](ClassifierChain.md#py)

### Methods

- [decision\_function](ClassifierChain.md#decision_function)
- [dispose](ClassifierChain.md#dispose)
- [fit](ClassifierChain.md#fit)
- [init](ClassifierChain.md#init)
- [predict](ClassifierChain.md#predict)
- [predict\_proba](ClassifierChain.md#predict_proba)
- [score](ClassifierChain.md#score)

## Constructors

### constructor

• **new ClassifierChain**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ClassifierChainOptions`](../interfaces/ClassifierChainOptions.md) |

#### Defined in

[generated/multioutput/ClassifierChain.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/multioutput/ClassifierChain.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/multioutput/ClassifierChain.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/multioutput/ClassifierChain.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/multioutput/ClassifierChain.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/multioutput/ClassifierChain.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L19)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<`any`[]\>

A list of arrays of length `len(estimators\_)` containing the class labels for each estimator in the chain.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:258](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L258)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`[]\>

A list of clones of base\_estimator.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:283](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L283)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L358)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying `base\_estimator` exposes such an attribute when fit.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:333](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L333)

___

### order\_

• `get` **order_**(): `Promise`<`any`[]\>

The order of labels in the classifier chain.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:308](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L308)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/multioutput/ClassifierChain.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/multioutput/ClassifierChain.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L34)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Evaluate the decision\_function of the models in the chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainDecisionFunctionOptions`](../interfaces/ClassifierChainDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L104)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L87)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the model to data matrix X and targets Y.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainFitOptions`](../interfaces/ClassifierChainFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L136)

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

[generated/multioutput/ClassifierChain.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L43)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict on the data matrix X using the ClassifierChain model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainPredictOptions`](../interfaces/ClassifierChainPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:166](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L166)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict probability estimates.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainPredictProbaOptions`](../interfaces/ClassifierChainPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:194](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L194)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ClassifierChainScoreOptions`](../interfaces/ClassifierChainScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/multioutput/ClassifierChain.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/multioutput/ClassifierChain.ts#L226)
