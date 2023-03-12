[sklearn](../readme.md) / [Exports](../modules.md) / GridSearchCV

# Class: GridSearchCV

Exhaustive search over specified parameter values for an estimator.

Important members are fit, predict.

GridSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

Read more in the [User Guide](../grid_search.html#grid-search).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html

## Table of contents

### Constructors

- [constructor](GridSearchCV.md#constructor)

### Properties

- [\_isDisposed](GridSearchCV.md#_isdisposed)
- [\_isInitialized](GridSearchCV.md#_isinitialized)
- [\_py](GridSearchCV.md#_py)
- [id](GridSearchCV.md#id)
- [opts](GridSearchCV.md#opts)

### Accessors

- [best\_estimator\_](GridSearchCV.md#best_estimator_)
- [best\_index\_](GridSearchCV.md#best_index_)
- [best\_params\_](GridSearchCV.md#best_params_)
- [best\_score\_](GridSearchCV.md#best_score_)
- [cv\_results\_](GridSearchCV.md#cv_results_)
- [feature\_names\_in\_](GridSearchCV.md#feature_names_in_)
- [multimetric\_](GridSearchCV.md#multimetric_)
- [n\_splits\_](GridSearchCV.md#n_splits_)
- [py](GridSearchCV.md#py)
- [refit\_time\_](GridSearchCV.md#refit_time_)
- [scorer\_](GridSearchCV.md#scorer_)

### Methods

- [decision\_function](GridSearchCV.md#decision_function)
- [dispose](GridSearchCV.md#dispose)
- [fit](GridSearchCV.md#fit)
- [init](GridSearchCV.md#init)
- [inverse\_transform](GridSearchCV.md#inverse_transform)
- [predict](GridSearchCV.md#predict)
- [predict\_log\_proba](GridSearchCV.md#predict_log_proba)
- [predict\_proba](GridSearchCV.md#predict_proba)
- [score](GridSearchCV.md#score)
- [score\_samples](GridSearchCV.md#score_samples)
- [transform](GridSearchCV.md#transform)

## Constructors

### constructor

• **new GridSearchCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GridSearchCVOptions`](../interfaces/GridSearchCVOptions.md) |

#### Defined in

[generated/model_selection/GridSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L29)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/GridSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L27)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/GridSearchCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L26)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/GridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L25)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/GridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L22)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/GridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L23)

## Accessors

### best\_estimator\_

• `get` **best_estimator_**(): `Promise`<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

See `refit` parameter for more information on allowed values.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L433)

___

### best\_index\_

• `get` **best_index_**(): `Promise`<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

For multi-metric evaluation, this is present only if `refit` is specified.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L518)

___

### best\_params\_

• `get` **best_params_**(): `Promise`<`any`\>

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is present only if `refit` is specified.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L489)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number`\>

Mean cross-validated score of the best\_estimator

For multi-metric evaluation, this is present only if `refit` is specified.

This attribute is not available if `refit` is a function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L462)

___

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L406)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L645)

___

### multimetric\_

• `get` **multimetric_**(): `Promise`<`boolean`\>

Whether or not the scorers compute several metrics.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L620)

___

### n\_splits\_

• `get` **n_splits_**(): `Promise`<`number`\>

The number of cross-validation splits (folds/iterations).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L568)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/GridSearchCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L34)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/GridSearchCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L38)

___

### refit\_time\_

• `get` **refit_time_**(): `Promise`<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L595)

___

### scorer\_

• `get` **scorer_**(): `Promise`<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L545)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVDecisionFunctionOptions`](../interfaces/GridSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L116)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L97)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run fit with all sets of parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVFitOptions`](../interfaces/GridSearchCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L148)

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

[generated/model_selection/GridSearchCV.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L47)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVInverseTransformOptions`](../interfaces/GridSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L184)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictOptions`](../interfaces/GridSearchCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L218)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictLogProbaOptions`](../interfaces/GridSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L248)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictProbaOptions`](../interfaces/GridSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L282)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVScoreOptions`](../interfaces/GridSearchCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L312)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVScoreSamplesOptions`](../interfaces/GridSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L344)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVTransformOptions`](../interfaces/GridSearchCVTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/GridSearchCV.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L374)
