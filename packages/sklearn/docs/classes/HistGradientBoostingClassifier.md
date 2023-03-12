[sklearn](../readme.md) / [Exports](../modules.md) / HistGradientBoostingClassifier

# Class: HistGradientBoostingClassifier

Histogram-based Gradient Boosting Classification Tree.

This estimator is much faster than [`GradientBoostingClassifier`](sklearn.ensemble.GradientBoostingClassifier.html#sklearn.ensemble.GradientBoostingClassifier "sklearn.ensemble.GradientBoostingClassifier") for big datasets (n\_samples >= 10 000).

This estimator has native support for missing values (NaNs). During training, the tree grower learns at each split point whether samples with missing values should go to the left or right child, based on the potential gain. When predicting, samples with missing values are assigned to the left or right child consequently. If no missing values were encountered for a given feature during training, then samples with missing values are mapped to whichever child has the most samples.

This implementation is inspired by [LightGBM](https://github.com/Microsoft/LightGBM).

Read more in the [User Guide](../ensemble.html#histogram-based-gradient-boosting).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html

## Table of contents

### Constructors

- [constructor](HistGradientBoostingClassifier.md#constructor)

### Properties

- [\_isDisposed](HistGradientBoostingClassifier.md#_isdisposed)
- [\_isInitialized](HistGradientBoostingClassifier.md#_isinitialized)
- [\_py](HistGradientBoostingClassifier.md#_py)
- [id](HistGradientBoostingClassifier.md#id)
- [opts](HistGradientBoostingClassifier.md#opts)

### Accessors

- [classes\_](HistGradientBoostingClassifier.md#classes_)
- [do\_early\_stopping\_](HistGradientBoostingClassifier.md#do_early_stopping_)
- [feature\_names\_in\_](HistGradientBoostingClassifier.md#feature_names_in_)
- [is\_categorical\_](HistGradientBoostingClassifier.md#is_categorical_)
- [n\_features\_in\_](HistGradientBoostingClassifier.md#n_features_in_)
- [n\_trees\_per\_iteration\_](HistGradientBoostingClassifier.md#n_trees_per_iteration_)
- [py](HistGradientBoostingClassifier.md#py)
- [train\_score\_](HistGradientBoostingClassifier.md#train_score_)
- [validation\_score\_](HistGradientBoostingClassifier.md#validation_score_)

### Methods

- [decision\_function](HistGradientBoostingClassifier.md#decision_function)
- [dispose](HistGradientBoostingClassifier.md#dispose)
- [fit](HistGradientBoostingClassifier.md#fit)
- [init](HistGradientBoostingClassifier.md#init)
- [predict](HistGradientBoostingClassifier.md#predict)
- [predict\_proba](HistGradientBoostingClassifier.md#predict_proba)
- [score](HistGradientBoostingClassifier.md#score)
- [staged\_decision\_function](HistGradientBoostingClassifier.md#staged_decision_function)
- [staged\_predict](HistGradientBoostingClassifier.md#staged_predict)
- [staged\_predict\_proba](HistGradientBoostingClassifier.md#staged_predict_proba)

## Constructors

### constructor

• **new HistGradientBoostingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HistGradientBoostingClassifierOptions`](../interfaces/HistGradientBoostingClassifierOptions.md) |

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L23)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<`any`\>

Class labels.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L438)

___

### do\_early\_stopping\_

• `get` **do_early_stopping_**(): `Promise`<`boolean`\>

Indicates whether early stopping is used during training.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L465)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:627](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L627)

___

### is\_categorical\_

• `get` **is_categorical_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Boolean mask for the categorical features. `undefined` if there are no categorical features.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:573](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L573)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:600](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L600)

___

### n\_trees\_per\_iteration\_

• `get` **n_trees_per_iteration_**(): `Promise`<`number`\>

The number of tree that are built at each iteration. This is equal to 1 for binary classification, and to `n\_classes` for multiclass classification.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:492](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L492)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L40)

___

### train\_score\_

• `get` **train_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The scores at each iteration on the training data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. If `scoring` is not ‘loss’, scores are computed on a subset of at most 10 000 samples. Empty if no early stopping.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L519)

___

### validation\_score\_

• `get` **validation_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The scores at each iteration on the held-out validation data. The first entry is the score of the ensemble before the first iteration. Scores are computed according to the `scoring` parameter. Empty if no early stopping or if `validation\_fraction` is `undefined`.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:546](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L546)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Compute the decision function of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierDecisionFunctionOptions`](../interfaces/HistGradientBoostingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:146](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L146)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L129)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the gradient boosting model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierFitOptions`](../interfaces/HistGradientBoostingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:181](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L181)

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

[generated/ensemble/HistGradientBoostingClassifier.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L49)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict classes for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierPredictOptions`](../interfaces/HistGradientBoostingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L217)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierPredictProbaOptions`](../interfaces/HistGradientBoostingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:251](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L251)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierScoreOptions`](../interfaces/HistGradientBoostingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:288](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L288)

___

### staged\_decision\_function

▸ **staged_decision_function**(`opts`): `Promise`<`any`[]\>

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierStagedDecisionFunctionOptions`](../interfaces/HistGradientBoostingClassifierStagedDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:329](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L329)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Predict classes at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierStagedPredictOptions`](../interfaces/HistGradientBoostingClassifierStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L366)

___

### staged\_predict\_proba

▸ **staged_predict_proba**(`opts`): `Promise`<`any`[]\>

Predict class probabilities at each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HistGradientBoostingClassifierStagedPredictProbaOptions`](../interfaces/HistGradientBoostingClassifierStagedPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/HistGradientBoostingClassifier.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/HistGradientBoostingClassifier.ts#L403)
