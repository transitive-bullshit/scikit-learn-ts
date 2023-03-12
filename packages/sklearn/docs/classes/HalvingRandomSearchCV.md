[sklearn](../readme.md) / [Exports](../modules.md) / HalvingRandomSearchCV

# Class: HalvingRandomSearchCV

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n\_candidates`.

Read more in the [User guide](../grid_search.html#successive-halving-user-guide).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html

## Table of contents

### Constructors

- [constructor](HalvingRandomSearchCV.md#constructor)

### Properties

- [\_isDisposed](HalvingRandomSearchCV.md#_isdisposed)
- [\_isInitialized](HalvingRandomSearchCV.md#_isinitialized)
- [\_py](HalvingRandomSearchCV.md#_py)
- [id](HalvingRandomSearchCV.md#id)
- [opts](HalvingRandomSearchCV.md#opts)

### Accessors

- [best\_estimator\_](HalvingRandomSearchCV.md#best_estimator_)
- [best\_index\_](HalvingRandomSearchCV.md#best_index_)
- [best\_params\_](HalvingRandomSearchCV.md#best_params_)
- [best\_score\_](HalvingRandomSearchCV.md#best_score_)
- [cv\_results\_](HalvingRandomSearchCV.md#cv_results_)
- [feature\_names\_in\_](HalvingRandomSearchCV.md#feature_names_in_)
- [max\_resources\_](HalvingRandomSearchCV.md#max_resources_)
- [min\_resources\_](HalvingRandomSearchCV.md#min_resources_)
- [multimetric\_](HalvingRandomSearchCV.md#multimetric_)
- [n\_candidates\_](HalvingRandomSearchCV.md#n_candidates_)
- [n\_iterations\_](HalvingRandomSearchCV.md#n_iterations_)
- [n\_possible\_iterations\_](HalvingRandomSearchCV.md#n_possible_iterations_)
- [n\_remaining\_candidates\_](HalvingRandomSearchCV.md#n_remaining_candidates_)
- [n\_required\_iterations\_](HalvingRandomSearchCV.md#n_required_iterations_)
- [n\_resources\_](HalvingRandomSearchCV.md#n_resources_)
- [n\_splits\_](HalvingRandomSearchCV.md#n_splits_)
- [py](HalvingRandomSearchCV.md#py)
- [refit\_time\_](HalvingRandomSearchCV.md#refit_time_)
- [scorer\_](HalvingRandomSearchCV.md#scorer_)

### Methods

- [decision\_function](HalvingRandomSearchCV.md#decision_function)
- [dispose](HalvingRandomSearchCV.md#dispose)
- [fit](HalvingRandomSearchCV.md#fit)
- [init](HalvingRandomSearchCV.md#init)
- [inverse\_transform](HalvingRandomSearchCV.md#inverse_transform)
- [predict](HalvingRandomSearchCV.md#predict)
- [predict\_log\_proba](HalvingRandomSearchCV.md#predict_log_proba)
- [predict\_proba](HalvingRandomSearchCV.md#predict_proba)
- [score](HalvingRandomSearchCV.md#score)
- [score\_samples](HalvingRandomSearchCV.md#score_samples)
- [transform](HalvingRandomSearchCV.md#transform)

## Constructors

### constructor

• **new HalvingRandomSearchCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HalvingRandomSearchCVOptions`](../interfaces/HalvingRandomSearchCVOptions.md) |

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L27)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L25)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L24)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L20)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L21)

## Accessors

### best\_estimator\_

• `get` **best_estimator_**(): `Promise`<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L683)

___

### best\_index\_

• `get` **best_index_**(): `Promise`<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L766)

___

### best\_params\_

• `get` **best_params_**(): `Promise`<`any`\>

Parameter setting that gave the best results on the hold out data.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L737)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number`\>

Mean cross-validated score of the best\_estimator.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L710)

___

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](../grid_search.html#successive-halving-cv-results) for details.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L656)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:903](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L903)

___

### max\_resources\_

• `get` **max_resources_**(): `Promise`<`number`\>

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L521)

___

### min\_resources\_

• `get` **min_resources_**(): `Promise`<`number`\>

The amount of resources that are allocated for each candidate at the first iteration.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L548)

___

### multimetric\_

• `get` **multimetric_**(): `Promise`<`boolean`\>

Whether or not the scorers compute several metrics.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:876](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L876)

___

### n\_candidates\_

• `get` **n_candidates_**(): `Promise`<`any`\>

The number of candidate parameters that were evaluated at each iteration.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L467)

___

### n\_iterations\_

• `get` **n_iterations_**(): `Promise`<`number`\>

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L575)

___

### n\_possible\_iterations\_

• `get` **n_possible_iterations_**(): `Promise`<`number`\>

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L602)

___

### n\_remaining\_candidates\_

• `get` **n_remaining_candidates_**(): `Promise`<`number`\>

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L494)

___

### n\_required\_iterations\_

• `get` **n_required_iterations_**(): `Promise`<`number`\>

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L629)

___

### n\_resources\_

• `get` **n_resources_**(): `Promise`<`any`\>

The amount of resources used at each iteration.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L440)

___

### n\_splits\_

• `get` **n_splits_**(): `Promise`<`number`\>

The number of cross-validation splits (folds/iterations).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L820)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L32)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L36)

___

### refit\_time\_

• `get` **refit_time_**(): `Promise`<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:849](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L849)

___

### scorer\_

• `get` **scorer_**(): `Promise`<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L793)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVDecisionFunctionOptions`](../interfaces/HalvingRandomSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L126)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L107)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run fit with all sets of parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVFitOptions`](../interfaces/HalvingRandomSearchCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L160)

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

[generated/model_selection/HalvingRandomSearchCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L45)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVInverseTransformOptions`](../interfaces/HalvingRandomSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L196)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictOptions`](../interfaces/HalvingRandomSearchCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L232)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictLogProbaOptions`](../interfaces/HalvingRandomSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L264)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictProbaOptions`](../interfaces/HalvingRandomSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L300)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVScoreOptions`](../interfaces/HalvingRandomSearchCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L336)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVScoreSamplesOptions`](../interfaces/HalvingRandomSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L370)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVTransformOptions`](../interfaces/HalvingRandomSearchCVTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L406)
