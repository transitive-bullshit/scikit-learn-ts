# GridSearchCV

Exhaustive search over specified parameter values for an estimator.

Important members are fit, predict.

GridSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

Read more in the [User Guide](../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)

## Constructors

## constructor()

### Signature

```ts
new GridSearchCV(opts?: GridSearchCVOptions): GridSearchCV;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`GridSearchCVOptions`](../interfaces/GridSearchCVOptions.md) |

### Returns

[`GridSearchCV`](GridSearchCV.md)

Defined in:  [generated/model\_selection/GridSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L29)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GridSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GridSearchCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/GridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/GridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/GridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L23)

## Accessors

### best\_estimator\_

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

See `refit` parameter for more information on allowed values.

#### Signature

```ts
best_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L433)

Defined in:  [generated/model\_selection/GridSearchCV.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L433)

### best\_index\_

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

For multi-metric evaluation, this is present only if `refit` is specified.

#### Signature

```ts
best_index_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L518)

Defined in:  [generated/model\_selection/GridSearchCV.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L518)

### best\_params\_

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is present only if `refit` is specified.

#### Signature

```ts
best_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L489)

Defined in:  [generated/model\_selection/GridSearchCV.ts:489](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L489)

### best\_score\_

Mean cross-validated score of the best\_estimator

For multi-metric evaluation, this is present only if `refit` is specified.

This attribute is not available if `refit` is a function.

#### Signature

```ts
best_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L462)

Defined in:  [generated/model\_selection/GridSearchCV.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L462)

### cv\_results\_

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L406)

Defined in:  [generated/model\_selection/GridSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L406)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L645)

Defined in:  [generated/model\_selection/GridSearchCV.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L645)

### multimetric\_

Whether or not the scorers compute several metrics.

#### Signature

```ts
multimetric_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L620)

Defined in:  [generated/model\_selection/GridSearchCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L620)

### n\_splits\_

The number of cross-validation splits (folds/iterations).

#### Signature

```ts
n_splits_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L568)

Defined in:  [generated/model\_selection/GridSearchCV.ts:568](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L568)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/GridSearchCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L34)

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

Defined in:  [generated/model\_selection/GridSearchCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L38)

Defined in:  [generated/model\_selection/GridSearchCV.ts:34](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L34) [generated/model\_selection/GridSearchCV.ts:38](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L38)

### refit\_time\_

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Signature

```ts
refit_time_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L595)

Defined in:  [generated/model\_selection/GridSearchCV.ts:595](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L595)

### scorer\_

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

#### Signature

```ts
scorer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L545)

Defined in:  [generated/model\_selection/GridSearchCV.ts:545](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L545)

## Methods

### decision\_function()

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Signature

```ts
decision_function(opts: GridSearchCVDecisionFunctionOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVDecisionFunctionOptions`](../interfaces/GridSearchCVDecisionFunctionOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L116)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:97](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L97)

### fit()

Run fit with all sets of parameters.

#### Signature

```ts
fit(opts: GridSearchCVFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVFitOptions`](../interfaces/GridSearchCVFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:148](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L148)

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

Defined in:  [generated/model\_selection/GridSearchCV.ts:47](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L47)

### inverse\_transform()

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Signature

```ts
inverse_transform(opts: GridSearchCVInverseTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVInverseTransformOptions`](../interfaces/GridSearchCVInverseTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:184](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L184)

### predict()

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Signature

```ts
predict(opts: GridSearchCVPredictOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictOptions`](../interfaces/GridSearchCVPredictOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:218](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L218)

### predict\_log\_proba()

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Signature

```ts
predict_log_proba(opts: GridSearchCVPredictLogProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictLogProbaOptions`](../interfaces/GridSearchCVPredictLogProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:248](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L248)

### predict\_proba()

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Signature

```ts
predict_proba(opts: GridSearchCVPredictProbaOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVPredictProbaOptions`](../interfaces/GridSearchCVPredictProbaOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:282](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L282)

### score()

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Signature

```ts
score(opts: GridSearchCVScoreOptions): Promise<number>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVScoreOptions`](../interfaces/GridSearchCVScoreOptions.md) |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:312](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L312)

### score\_samples()

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Signature

```ts
score_samples(opts: GridSearchCVScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVScoreSamplesOptions`](../interfaces/GridSearchCVScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:344](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L344)

### transform()

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Signature

```ts
transform(opts: GridSearchCVTransformOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`GridSearchCVTransformOptions`](../interfaces/GridSearchCVTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:374](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L374)
