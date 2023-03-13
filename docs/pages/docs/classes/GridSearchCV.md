# GridSearchCV

Exhaustive search over specified parameter values for an estimator.

Important members are fit, predict.

GridSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)

## Constructors

## constructor()

### Signature

```ts
new GridSearchCV(opts?: object): GridSearchCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.error_score?` | `"raise"` | Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. |
| `opts.estimator?` | `any` | This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed. |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.param_grid?` | `any` | Dictionary with parameters names (`str`) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings. |
| `opts.pre_dispatch?` | `string` | Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:  `Default Value`  `'2*n_jobs'` |
| `opts.refit?` | `boolean` | Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given `cv\_results\_`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.  The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `GridSearchCV` instance.  Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.  See `scoring` parameter to know more about multiple metric evaluation.  See Custom refit strategy of a grid search with cross-validation to see how to design a custom selection strategy using a callable via `refit`.  `Default Value`  `true` |
| `opts.return_train_score?` | `boolean` | If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.  `Default Value`  `false` |
| `opts.scoring?` | `any` | Strategy to evaluate the performance of the cross-validated model on the test set.  If `scoring` represents a single score, one can use: |
| `opts.verbose?` | `number` | Controls the verbosity: the higher, the more messages. |

### Returns

[`GridSearchCV`](GridSearchCV.md)

Defined in:  [generated/model\_selection/GridSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L29)

## Methods

### decision\_function()

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Signature

```ts
decision_function(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:186](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L186)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:167](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L167)

### fit()

Run fit with all sets of parameters.

#### Signature

```ts
fit(opts: object): Promise<any>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of the estimator.  If a fit parameter is an array-like whose length is equal to `num\_samples` then it will be split across CV groups along with `X` and `y`. For example, the sample\_weight parameter is split because `len(sample\_weights) \= len(X)`. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” cv instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")). |
| `opts.y?` | `ArrayLike`[] | Target relative to X for classification or regression; `undefined` for unsupervised learning. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:221](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L221)

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

Defined in:  [generated/model\_selection/GridSearchCV.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L117)

### inverse\_transform()

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Signature

```ts
inverse_transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.Xt?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:279](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L279)

### predict()

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Signature

```ts
predict(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:316](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L316)

### predict\_log\_proba()

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Signature

```ts
predict_log_proba(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L351)

### predict\_proba()

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Signature

```ts
predict_proba(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:388](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L388)

### score()

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Signature

```ts
score(opts: object): Promise<number>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `ArrayLike`[] | Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.y?` | `ArrayLike`[] | Target relative to X for classification or regression; `undefined` for unsupervised learning. |

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L423)

### score\_samples()

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Signature

```ts
score_samples(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Data to predict on. Must fulfill input requirements of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:465](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L465)

### transform()

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Signature

```ts
transform(opts: object): Promise<ArrayLike>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `object` | - |
| `opts.X?` | `any` | Must fulfill the input assumptions of the underlying estimator. |

#### Returns

`Promise`\<`ArrayLike`\>

Defined in:  [generated/model\_selection/GridSearchCV.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L500)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GridSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L27)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/GridSearchCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L26)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/GridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L25)

### id

> `string`

Defined in:  [generated/model\_selection/GridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L22)

### opts

> `any`

Defined in:  [generated/model\_selection/GridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L23)

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

Defined in: [generated/model\_selection/GridSearchCV.ts:562](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L562)

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

Defined in: [generated/model\_selection/GridSearchCV.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L647)

### best\_params\_

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is present only if `refit` is specified.

#### Signature

```ts
best_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L618)

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

Defined in: [generated/model\_selection/GridSearchCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L591)

### cv\_results\_

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:535](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L535)

### feature\_names\_in\_

Names of features seen during fit. Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:774](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L774)

### multimetric\_

Whether or not the scorers compute several metrics.

#### Signature

```ts
multimetric_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:749](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L749)

### n\_splits\_

The number of cross-validation splits (folds/iterations).

#### Signature

```ts
n_splits_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:697](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L697)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/GridSearchCV.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L104)

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

Defined in: [generated/model\_selection/GridSearchCV.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L108)

### refit\_time\_

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Signature

```ts
refit_time_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:724](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L724)

### scorer\_

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

#### Signature

```ts
scorer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/GridSearchCV.ts:674](https://github.com/transitive-bullshit/scikit-learn-ts/blob/22af0e7/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L674)
