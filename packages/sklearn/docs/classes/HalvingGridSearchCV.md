[sklearn](../readme.md) / [Exports](../modules.md) / HalvingGridSearchCV

# Class: HalvingGridSearchCV

Search over specified parameter values with successive halving.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

Read more in the [User guide](../grid_search.html#successive-halving-user-guide).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingGridSearchCV.html

## Table of contents

### Constructors

- [constructor](HalvingGridSearchCV.md#constructor)

### Properties

- [\_isDisposed](HalvingGridSearchCV.md#_isdisposed)
- [\_isInitialized](HalvingGridSearchCV.md#_isinitialized)
- [\_py](HalvingGridSearchCV.md#_py)
- [id](HalvingGridSearchCV.md#id)
- [opts](HalvingGridSearchCV.md#opts)

### Accessors

- [best\_estimator\_](HalvingGridSearchCV.md#best_estimator_)
- [best\_index\_](HalvingGridSearchCV.md#best_index_)
- [best\_params\_](HalvingGridSearchCV.md#best_params_)
- [best\_score\_](HalvingGridSearchCV.md#best_score_)
- [cv\_results\_](HalvingGridSearchCV.md#cv_results_)
- [feature\_names\_in\_](HalvingGridSearchCV.md#feature_names_in_)
- [max\_resources\_](HalvingGridSearchCV.md#max_resources_)
- [min\_resources\_](HalvingGridSearchCV.md#min_resources_)
- [multimetric\_](HalvingGridSearchCV.md#multimetric_)
- [n\_candidates\_](HalvingGridSearchCV.md#n_candidates_)
- [n\_iterations\_](HalvingGridSearchCV.md#n_iterations_)
- [n\_possible\_iterations\_](HalvingGridSearchCV.md#n_possible_iterations_)
- [n\_remaining\_candidates\_](HalvingGridSearchCV.md#n_remaining_candidates_)
- [n\_required\_iterations\_](HalvingGridSearchCV.md#n_required_iterations_)
- [n\_resources\_](HalvingGridSearchCV.md#n_resources_)
- [n\_splits\_](HalvingGridSearchCV.md#n_splits_)
- [py](HalvingGridSearchCV.md#py)
- [refit\_time\_](HalvingGridSearchCV.md#refit_time_)
- [scorer\_](HalvingGridSearchCV.md#scorer_)

### Methods

- [decision\_function](HalvingGridSearchCV.md#decision_function)
- [dispose](HalvingGridSearchCV.md#dispose)
- [fit](HalvingGridSearchCV.md#fit)
- [init](HalvingGridSearchCV.md#init)
- [inverse\_transform](HalvingGridSearchCV.md#inverse_transform)
- [predict](HalvingGridSearchCV.md#predict)
- [predict\_log\_proba](HalvingGridSearchCV.md#predict_log_proba)
- [predict\_proba](HalvingGridSearchCV.md#predict_proba)
- [score](HalvingGridSearchCV.md#score)
- [score\_samples](HalvingGridSearchCV.md#score_samples)
- [transform](HalvingGridSearchCV.md#transform)

## Constructors

### constructor

• **new HalvingGridSearchCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HalvingGridSearchCVOptions`](../interfaces/HalvingGridSearchCVOptions.md) |

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L25)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L23)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L22)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L21)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L18)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L19)

## Accessors

### best\_estimator\_

• `get` **best_estimator_**(): `Promise`<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L677)

___

### best\_index\_

• `get` **best_index_**(): `Promise`<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:760](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L760)

___

### best\_params\_

• `get` **best_params_**(): `Promise`<`any`\>

Parameter setting that gave the best results on the hold out data.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:731](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L731)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number`\>

Mean cross-validated score of the best\_estimator.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:704](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L704)

___

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](../grid_search.html#successive-halving-cv-results) for details.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L650)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:897](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L897)

___

### max\_resources\_

• `get` **max_resources_**(): `Promise`<`number`\>

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:515](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L515)

___

### min\_resources\_

• `get` **min_resources_**(): `Promise`<`number`\>

The amount of resources that are allocated for each candidate at the first iteration.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:542](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L542)

___

### multimetric\_

• `get` **multimetric_**(): `Promise`<`boolean`\>

Whether or not the scorers compute several metrics.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:870](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L870)

___

### n\_candidates\_

• `get` **n_candidates_**(): `Promise`<`any`\>

The number of candidate parameters that were evaluated at each iteration.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:461](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L461)

___

### n\_iterations\_

• `get` **n_iterations_**(): `Promise`<`number`\>

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:569](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L569)

___

### n\_possible\_iterations\_

• `get` **n_possible_iterations_**(): `Promise`<`number`\>

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:596](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L596)

___

### n\_remaining\_candidates\_

• `get` **n_remaining_candidates_**(): `Promise`<`number`\>

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L488)

___

### n\_required\_iterations\_

• `get` **n_required_iterations_**(): `Promise`<`number`\>

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:623](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L623)

___

### n\_resources\_

• `get` **n_resources_**(): `Promise`<`any`\>

The amount of resources used at each iteration.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L434)

___

### n\_splits\_

• `get` **n_splits_**(): `Promise`<`number`\>

The number of cross-validation splits (folds/iterations).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:814](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L814)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:30](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L30)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L34)

___

### refit\_time\_

• `get` **refit_time_**(): `Promise`<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:843](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L843)

___

### scorer\_

• `get` **scorer_**(): `Promise`<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L787)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVDecisionFunctionOptions`](../interfaces/HalvingGridSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:122](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L122)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:103](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L103)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run fit with all sets of parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVFitOptions`](../interfaces/HalvingGridSearchCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L156)

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

[generated/model_selection/HalvingGridSearchCV.ts:43](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L43)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVInverseTransformOptions`](../interfaces/HalvingGridSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L192)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVPredictOptions`](../interfaces/HalvingGridSearchCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:228](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L228)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVPredictLogProbaOptions`](../interfaces/HalvingGridSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:260](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L260)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVPredictProbaOptions`](../interfaces/HalvingGridSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L296)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVScoreOptions`](../interfaces/HalvingGridSearchCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L332)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVScoreSamplesOptions`](../interfaces/HalvingGridSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L366)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingGridSearchCVTransformOptions`](../interfaces/HalvingGridSearchCVTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L402)
