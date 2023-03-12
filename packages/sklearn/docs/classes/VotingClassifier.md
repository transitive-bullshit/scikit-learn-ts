[sklearn](../readme.md) / [Exports](../modules.md) / VotingClassifier

# Class: VotingClassifier

Soft Voting/Majority Rule classifier for unfitted estimators.

Read more in the [User Guide](../ensemble.html#voting-classifier).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html

## Table of contents

### Constructors

- [constructor](VotingClassifier.md#constructor)

### Properties

- [\_isDisposed](VotingClassifier.md#_isdisposed)
- [\_isInitialized](VotingClassifier.md#_isinitialized)
- [\_py](VotingClassifier.md#_py)
- [id](VotingClassifier.md#id)
- [opts](VotingClassifier.md#opts)

### Accessors

- [classes\_](VotingClassifier.md#classes_)
- [estimators\_](VotingClassifier.md#estimators_)
- [feature\_names\_in\_](VotingClassifier.md#feature_names_in_)
- [le\_](VotingClassifier.md#le_)
- [named\_estimators\_](VotingClassifier.md#named_estimators_)
- [py](VotingClassifier.md#py)

### Methods

- [dispose](VotingClassifier.md#dispose)
- [fit](VotingClassifier.md#fit)
- [fit\_transform](VotingClassifier.md#fit_transform)
- [get\_feature\_names\_out](VotingClassifier.md#get_feature_names_out)
- [init](VotingClassifier.md#init)
- [predict](VotingClassifier.md#predict)
- [predict\_proba](VotingClassifier.md#predict_proba)
- [score](VotingClassifier.md#score)
- [set\_output](VotingClassifier.md#set_output)
- [transform](VotingClassifier.md#transform)

## Constructors

### constructor

• **new VotingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`VotingClassifierOptions`](../interfaces/VotingClassifierOptions.md) |

#### Defined in

[generated/ensemble/VotingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L23)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L21)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/VotingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L20)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/VotingClassifier.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L19)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/VotingClassifier.ts:16](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L16)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/VotingClassifier.ts:17](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L17)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:456](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L456)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`\>

The collection of fitted sub-estimators as defined in `estimators` that are not ‘drop’.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:377](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L377)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if the underlying estimators expose such an attribute when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:483](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L483)

___

### le\_

• `get` **le_**(): `Promise`<`any`\>

Transformer used to encode the labels during fit and decode during prediction.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:431](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L431)

___

### named\_estimators\_

• `get` **named_estimators_**(): `Promise`<`any`\>

Attribute to access any fitted sub-estimators by name.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:404](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L404)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/VotingClassifier.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L28)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/VotingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:89](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L89)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the estimators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierFitOptions`](../interfaces/VotingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:106](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L106)

___

### fit\_transform

▸ **fit_transform**(`opts`): `Promise`<`any`[]\>

Return class labels or probabilities for each estimator.

Return predictions for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierFitTransformOptions`](../interfaces/VotingClassifierFitTransformOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:142](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L142)

___

### get\_feature\_names\_out

▸ **get_feature_names_out**(`opts`): `Promise`<`any`\>

Get output feature names for transformation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierGetFeatureNamesOutOptions`](../interfaces/VotingClassifierGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L180)

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

[generated/ensemble/VotingClassifier.ts:41](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L41)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class labels for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierPredictOptions`](../interfaces/VotingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:215](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L215)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute probabilities of possible outcomes for samples in X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierPredictProbaOptions`](../interfaces/VotingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:245](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L245)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierScoreOptions`](../interfaces/VotingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:281](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L281)

___

### set\_output

▸ **set_output**(`opts`): `Promise`<`any`\>

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierSetOutputOptions`](../interfaces/VotingClassifierSetOutputOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:317](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L317)

___

### transform

▸ **transform**(`opts`): `Promise`<`any`\>

Return class labels or probabilities for X for each estimator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`VotingClassifierTransformOptions`](../interfaces/VotingClassifierTransformOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/VotingClassifier.ts:347](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/VotingClassifier.ts#L347)
