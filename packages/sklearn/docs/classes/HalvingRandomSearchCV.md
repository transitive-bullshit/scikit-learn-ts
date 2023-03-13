# HalvingRandomSearchCV

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n\_candidates`.

Read more in the [User guide](../grid_search.html#successive-halving-user-guide).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)

## Constructors

## constructor()

### Signature

```ts
new HalvingRandomSearchCV(opts?: HalvingRandomSearchCVOptions): HalvingRandomSearchCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`HalvingRandomSearchCVOptions`](../interfaces/HalvingRandomSearchCVOptions.md) |

### Returns

[`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L21)

## Accessors

### best\_estimator\_

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

#### Signature

```ts
best_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L683)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L683)

### best\_index\_

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

#### Signature

```ts
best_index_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L766)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L766)

### best\_params\_

Parameter setting that gave the best results on the hold out data.

#### Signature

```ts
best_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L737)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L737)

### best\_score\_

Mean cross-validated score of the best\_estimator.

#### Signature

```ts
best_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L710)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L710)

### cv\_results\_

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](../grid_search.html#successive-halving-cv-results) for details.

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L656)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L656)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:903](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L903)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:903](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L903)

### max\_resources\_

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

#### Signature

```ts
max_resources_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L521)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:521](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L521)

### min\_resources\_

The amount of resources that are allocated for each candidate at the first iteration.

#### Signature

```ts
min_resources_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L548)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L548)

### multimetric\_

Whether or not the scorers compute several metrics.

#### Signature

```ts
multimetric_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:876](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L876)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:876](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L876)

### n\_candidates\_

The number of candidate parameters that were evaluated at each iteration.

#### Signature

```ts
n_candidates_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L467)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:467](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L467)

### n\_iterations\_

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

#### Signature

```ts
n_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L575)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L575)

### n\_possible\_iterations\_

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

#### Signature

```ts
n_possible_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L602)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L602)

### n\_remaining\_candidates\_

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

#### Signature

```ts
n_remaining_candidates_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L494)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:494](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L494)

### n\_required\_iterations\_

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

#### Signature

```ts
n_required_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L629)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L629)

### n\_resources\_

The amount of resources used at each iteration.

#### Signature

```ts
n_resources_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L440)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:440](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L440)

### n\_splits\_

The number of cross-validation splits (folds/iterations).

#### Signature

```ts
n_splits_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L820)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:820](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L820)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L32)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L36)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L32) [generated/model\_selection/HalvingRandomSearchCV.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L36)

### refit\_time\_

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Signature

```ts
refit_time_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:849](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L849)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:849](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L849)

### scorer\_

Scorer function used on the held out data to choose the best parameters for the model.

#### Signature

```ts
scorer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L793)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:793](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L793)

## Methods

### decision\_function()

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Signature

```ts
decision_function(opts: HalvingRandomSearchCVDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVDecisionFunctionOptions`](../interfaces/HalvingRandomSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L126)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L107)

### fit()

Run fit with all sets of parameters.

#### Signature

```ts
fit(opts: HalvingRandomSearchCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVFitOptions`](../interfaces/HalvingRandomSearchCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:160](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L160)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L45)

### inverse\_transform()

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Signature

```ts
inverse_transform(opts: HalvingRandomSearchCVInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVInverseTransformOptions`](../interfaces/HalvingRandomSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:196](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L196)

### predict()

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Signature

```ts
predict(opts: HalvingRandomSearchCVPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictOptions`](../interfaces/HalvingRandomSearchCVPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:232](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L232)

### predict\_log\_proba()

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Signature

```ts
predict_log_proba(opts: HalvingRandomSearchCVPredictLogProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictLogProbaOptions`](../interfaces/HalvingRandomSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:264](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L264)

### predict\_proba()

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Signature

```ts
predict_proba(opts: HalvingRandomSearchCVPredictProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVPredictProbaOptions`](../interfaces/HalvingRandomSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:300](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L300)

### score()

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Signature

```ts
score(opts: HalvingRandomSearchCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVScoreOptions`](../interfaces/HalvingRandomSearchCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:336](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L336)

### score\_samples()

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Signature

```ts
score_samples(opts: HalvingRandomSearchCVScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVScoreSamplesOptions`](../interfaces/HalvingRandomSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L370)

### transform()

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Signature

```ts
transform(opts: HalvingRandomSearchCVTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`HalvingRandomSearchCVTransformOptions`](../interfaces/HalvingRandomSearchCVTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L406)
