[sklearn](../readme.md) / [Exports](../modules.md) / GradientBoostingClassifier

# Class: GradientBoostingClassifier

Gradient Boosting for classification.

This algorithm builds an additive model in a forward stage-wise fashion; it allows for the optimization of arbitrary differentiable loss functions. In each stage `n\_classes\_` regression trees are fit on the negative gradient of the loss function, e.g. binary or multiclass log loss. Binary classification is a special case where only a single regression tree is induced.

[`sklearn.ensemble.HistGradientBoostingClassifier`](sklearn.ensemble.HistGradientBoostingClassifier.html#sklearn.ensemble.HistGradientBoostingClassifier "sklearn.ensemble.HistGradientBoostingClassifier") is a much faster variant of this algorithm for intermediate datasets (`n\_samples >= 10\_000`).

Read more in the [User Guide](../ensemble.html#gradient-boosting).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html

## Table of contents

### Constructors

- [constructor](GradientBoostingClassifier.md#constructor)

### Properties

- [\_isDisposed](GradientBoostingClassifier.md#_isdisposed)
- [\_isInitialized](GradientBoostingClassifier.md#_isinitialized)
- [\_py](GradientBoostingClassifier.md#_py)
- [id](GradientBoostingClassifier.md#id)
- [opts](GradientBoostingClassifier.md#opts)

### Accessors

- [classes\_](GradientBoostingClassifier.md#classes_)
- [estimators\_](GradientBoostingClassifier.md#estimators_)
- [feature\_names\_in\_](GradientBoostingClassifier.md#feature_names_in_)
- [init\_](GradientBoostingClassifier.md#init_)
- [loss\_](GradientBoostingClassifier.md#loss_)
- [max\_features\_](GradientBoostingClassifier.md#max_features_)
- [n\_classes\_](GradientBoostingClassifier.md#n_classes_)
- [n\_estimators\_](GradientBoostingClassifier.md#n_estimators_)
- [n\_features\_in\_](GradientBoostingClassifier.md#n_features_in_)
- [oob\_improvement\_](GradientBoostingClassifier.md#oob_improvement_)
- [py](GradientBoostingClassifier.md#py)
- [train\_score\_](GradientBoostingClassifier.md#train_score_)

### Methods

- [apply](GradientBoostingClassifier.md#apply)
- [decision\_function](GradientBoostingClassifier.md#decision_function)
- [dispose](GradientBoostingClassifier.md#dispose)
- [fit](GradientBoostingClassifier.md#fit)
- [init](GradientBoostingClassifier.md#init)
- [predict](GradientBoostingClassifier.md#predict)
- [predict\_log\_proba](GradientBoostingClassifier.md#predict_log_proba)
- [predict\_proba](GradientBoostingClassifier.md#predict_proba)
- [score](GradientBoostingClassifier.md#score)
- [staged\_decision\_function](GradientBoostingClassifier.md#staged_decision_function)
- [staged\_predict](GradientBoostingClassifier.md#staged_predict)
- [staged\_predict\_proba](GradientBoostingClassifier.md#staged_predict_proba)

## Constructors

### constructor

• **new GradientBoostingClassifier**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GradientBoostingClassifierOptions`](../interfaces/GradientBoostingClassifierOptions.md) |

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L21)

## Accessors

### classes\_

• `get` **classes_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The classes labels.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:658](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L658)

___

### estimators\_

• `get` **estimators_**(): `Promise`<`any`[]\>

The collection of fitted sub-estimators. `loss\_.K` is 1 for binary classification, otherwise n\_classes.

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L631)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:712](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L712)

___

### init\_

• `get` **init_**(): `Promise`<`any`\>

The estimator that provides the initial predictions. Set via the `init` argument or `loss.init\_estimator`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L604)

___

### loss\_

• `get` **loss_**(): `Promise`<`any`\>

The concrete `LossFunction` object.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L577)

___

### max\_features\_

• `get` **max_features_**(): `Promise`<`number`\>

The inferred value of max\_features.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L766)

___

### n\_classes\_

• `get` **n_classes_**(): `Promise`<`number`\>

The number of classes.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L739)

___

### n\_estimators\_

• `get` **n_estimators_**(): `Promise`<`number`\>

The number of estimators as selected by early stopping (if `n\_iter\_no\_change` is specified). Otherwise it is set to `n\_estimators`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:496](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L496)

___

### n\_features\_in\_

• `get` **n_features_in_**(): `Promise`<`number`\>

Number of features seen during [fit](../../glossary.html#term-fit).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:685](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L685)

___

### oob\_improvement\_

• `get` **oob_improvement_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The improvement in loss (= deviance) on the out-of-bag samples relative to the previous iteration. `oob\_improvement\_\[0\]` is the improvement in loss of the first stage over the `init` estimator. Only available if `subsample < 1.0`

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:523](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L523)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L36)

___

### train\_score\_

• `get` **train_score_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

The i-th score `train\_score\_\[i\]` is the deviance (= loss) of the model at iteration `i` on the in-bag sample. If `subsample \== 1` this is the deviance on the training data.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:550](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L550)

## Methods

### apply

▸ **apply**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

Apply trees in the ensemble to X, return leaf indices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierApplyOptions`](../interfaces/GradientBoostingClassifierApplyOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[][]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L136)

___

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Compute the decision function of `X`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierDecisionFunctionOptions`](../interfaces/GradientBoostingClassifierDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:170](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L170)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:119](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L119)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Fit the gradient boosting model.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierFitOptions`](../interfaces/GradientBoostingClassifierFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:205](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L205)

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

[generated/ensemble/GradientBoostingClassifier.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L45)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Predict class for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictOptions`](../interfaces/GradientBoostingClassifierPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L243)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class log-probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictLogProbaOptions`](../interfaces/GradientBoostingClassifierPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:277](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L277)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

Predict class probabilities for X.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierPredictProbaOptions`](../interfaces/GradientBoostingClassifierPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L312)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the mean accuracy on the given test data and labels.

In multi-label classification, this is the subset accuracy which is a harsh metric since you require for each sample that each label set be correctly predicted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierScoreOptions`](../interfaces/GradientBoostingClassifierScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:349](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L349)

___

### staged\_decision\_function

▸ **staged_decision_function**(`opts`): `Promise`<`any`[]\>

Compute decision function of `X` for each iteration.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedDecisionFunctionOptions`](../interfaces/GradientBoostingClassifierStagedDecisionFunctionOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:387](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L387)

___

### staged\_predict

▸ **staged_predict**(`opts`): `Promise`<`any`[]\>

Predict class at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedPredictOptions`](../interfaces/GradientBoostingClassifierStagedPredictOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L424)

___

### staged\_predict\_proba

▸ **staged_predict_proba**(`opts`): `Promise`<`any`[]\>

Predict class probabilities at each stage for X.

This method allows monitoring (i.e. determine error on testing set) after each stage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GradientBoostingClassifierStagedPredictProbaOptions`](../interfaces/GradientBoostingClassifierStagedPredictProbaOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Defined in

[generated/ensemble/GradientBoostingClassifier.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/GradientBoostingClassifier.ts#L461)
