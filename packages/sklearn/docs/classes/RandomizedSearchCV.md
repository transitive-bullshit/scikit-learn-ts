[sklearn](../readme.md) / [Exports](../modules.md) / RandomizedSearchCV

# Class: RandomizedSearchCV

Randomized search on hyper parameters.

RandomizedSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated search over parameter settings.

In contrast to GridSearchCV, not all parameter values are tried out, but rather a fixed number of parameter settings is sampled from the specified distributions. The number of parameter settings that are tried is given by n\_iter.

If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](../grid_search.html#randomized-parameter-search).

**`See`**

https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html

## Table of contents

### Constructors

- [constructor](RandomizedSearchCV.md#constructor)

### Properties

- [\_isDisposed](RandomizedSearchCV.md#_isdisposed)
- [\_isInitialized](RandomizedSearchCV.md#_isinitialized)
- [\_py](RandomizedSearchCV.md#_py)
- [id](RandomizedSearchCV.md#id)
- [opts](RandomizedSearchCV.md#opts)

### Accessors

- [best\_estimator\_](RandomizedSearchCV.md#best_estimator_)
- [best\_index\_](RandomizedSearchCV.md#best_index_)
- [best\_params\_](RandomizedSearchCV.md#best_params_)
- [best\_score\_](RandomizedSearchCV.md#best_score_)
- [cv\_results\_](RandomizedSearchCV.md#cv_results_)
- [feature\_names\_in\_](RandomizedSearchCV.md#feature_names_in_)
- [multimetric\_](RandomizedSearchCV.md#multimetric_)
- [n\_splits\_](RandomizedSearchCV.md#n_splits_)
- [py](RandomizedSearchCV.md#py)
- [refit\_time\_](RandomizedSearchCV.md#refit_time_)
- [scorer\_](RandomizedSearchCV.md#scorer_)

### Methods

- [decision\_function](RandomizedSearchCV.md#decision_function)
- [dispose](RandomizedSearchCV.md#dispose)
- [fit](RandomizedSearchCV.md#fit)
- [init](RandomizedSearchCV.md#init)
- [inverse\_transform](RandomizedSearchCV.md#inverse_transform)
- [predict](RandomizedSearchCV.md#predict)
- [predict\_log\_proba](RandomizedSearchCV.md#predict_log_proba)
- [predict\_proba](RandomizedSearchCV.md#predict_proba)
- [score](RandomizedSearchCV.md#score)
- [score\_samples](RandomizedSearchCV.md#score_samples)
- [transform](RandomizedSearchCV.md#transform)

## Constructors

### constructor

• **new RandomizedSearchCV**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RandomizedSearchCVOptions`](../interfaces/RandomizedSearchCVOptions.md) |

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L31)

## Properties

### \_isDisposed

• **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L29)

___

### \_isInitialized

• **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L28)

___

### \_py

• **\_py**: `PythonBridge`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L24)

___

### opts

• **opts**: `any`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L25)

## Accessors

### best\_estimator\_

• `get` **best_estimator_**(): `Promise`<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

For multi-metric evaluation, this attribute is present only if `refit` is specified.

See `refit` parameter for more information on allowed values.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L473)

___

### best\_index\_

• `get` **best_index_**(): `Promise`<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:564](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L564)

___

### best\_params\_

• `get` **best_params_**(): `Promise`<`any`\>

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:533](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L533)

___

### best\_score\_

• `get` **best_score_**(): `Promise`<`number`\>

Mean cross-validated score of the best\_estimator.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

This attribute is not available if `refit` is a function.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:504](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L504)

___

### cv\_results\_

• `get` **cv_results_**(): `Promise`<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:442](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L442)

___

### feature\_names\_in\_

• `get` **feature_names_in_**(): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:703](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L703)

___

### multimetric\_

• `get` **multimetric_**(): `Promise`<`boolean`\>

Whether or not the scorers compute several metrics.

#### Returns

`Promise`<`boolean`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:676](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L676)

___

### n\_splits\_

• `get` **n_splits_**(): `Promise`<`number`\>

The number of cross-validation splits (folds/iterations).

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L620)

___

### py

• `get` **py**(): `PythonBridge`

#### Returns

`PythonBridge`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L36)

• `set` **py**(`pythonBridge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:40](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L40)

___

### refit\_time\_

• `get` **refit_time_**(): `Promise`<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:649](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L649)

___

### scorer\_

• `get` **scorer_**(): `Promise`<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L593)

## Methods

### decision\_function

▸ **decision_function**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVDecisionFunctionOptions`](../interfaces/RandomizedSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L126)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`<`void`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L107)

___

### fit

▸ **fit**(`opts`): `Promise`<`any`\>

Run fit with all sets of parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVFitOptions`](../interfaces/RandomizedSearchCVFitOptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L160)

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

[generated/model_selection/RandomizedSearchCV.ts:49](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L49)

___

### inverse\_transform

▸ **inverse_transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVInverseTransformOptions`](../interfaces/RandomizedSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L198)

___

### predict

▸ **predict**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVPredictOptions`](../interfaces/RandomizedSearchCVPredictOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L234)

___

### predict\_log\_proba

▸ **predict_log_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVPredictLogProbaOptions`](../interfaces/RandomizedSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:266](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L266)

___

### predict\_proba

▸ **predict_proba**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVPredictProbaOptions`](../interfaces/RandomizedSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:302](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L302)

___

### score

▸ **score**(`opts`): `Promise`<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVScoreOptions`](../interfaces/RandomizedSearchCVScoreOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:338](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L338)

___

### score\_samples

▸ **score_samples**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVScoreSamplesOptions`](../interfaces/RandomizedSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:372](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L372)

___

### transform

▸ **transform**(`opts`): `Promise`<[`ArrayLike`](../modules.md#arraylike)\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`RandomizedSearchCVTransformOptions`](../interfaces/RandomizedSearchCVTransformOptions.md) |

#### Returns

`Promise`<[`ArrayLike`](../modules.md#arraylike)\>

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L408)
