# HalvingRandomSearchCV

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n\_candidates`.

Read more in the User guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)

## Constructors

## constructor()

### Signature

```ts
new HalvingRandomSearchCV(opts?: object): HalvingRandomSearchCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.aggressive_elimination?` | `boolean` | This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See Aggressive elimination of candidates for more details.  `Default Value`  `false` |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are:  `Default Value`  `5` |
| `opts.error_score?` | `"raise"` | Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`. |
| `opts.estimator?` | `any` | This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed. |
| `opts.factor?` | `number` | The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.  `Default Value`  `3` |
| `opts.max_resources?` | `number` | The maximum number of resources that any candidate is allowed to use for a given iteration. By default, this is set `n\_samples` when `resource='n\_samples'` (default), else an error is raised.  `Default Value`  `'auto'` |
| `opts.min_resources?` | `number` \| `"exhaust"` \| `"smallest"` | The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.  `Default Value`  `'smallest'` |
| `opts.n_candidates?` | `number` | The number of candidate parameters to sample, at the first iteration. Using ‘exhaust’ will sample enough candidates so that the last iteration uses as many resources as possible, based on `min\_resources`, `max\_resources` and `factor`. In this case, `min\_resources` cannot be ‘exhaust’.  `Default Value`  `'exhaust'` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.param_distributions?` | `any` | Dictionary with parameters names (string) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. |
| `opts.random_state?` | `number` | Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Also used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.refit?` | `boolean` | If `true`, refit an estimator using the best found parameters on the whole dataset.  The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingRandomSearchCV` instance.  `Default Value`  `true` |
| `opts.resource?` | `string` | Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n\_iterations’ or ‘n\_estimators’ for a gradient boosting estimator. In this case `max\_resources` cannot be ‘auto’ and must be set explicitly.  `Default Value`  `'n_samples'` |
| `opts.return_train_score?` | `boolean` | If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.  `Default Value`  `false` |
| `opts.scoring?` | `string` | A single string (see The scoring parameter: defining model evaluation rules) or a callable (see Defining your scoring strategy from metric functions) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used. |
| `opts.verbose?` | `number` | Controls the verbosity: the higher, the more messages. |

### Returns

[`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L23)

### id

> `string`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L20)

### opts

> `any`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L21)

## Accessors

### best\_estimator\_

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

#### Signature

```ts
best_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:836](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L836)

### best\_index\_

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

#### Signature

```ts
best_index_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:919](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L919)

### best\_params\_

Parameter setting that gave the best results on the hold out data.

#### Signature

```ts
best_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:890](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L890)

### best\_score\_

Mean cross-validated score of the best\_estimator.

#### Signature

```ts
best_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:863](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L863)

### cv\_results\_

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the User guide for details.

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:809](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L809)

### feature\_names\_in\_

Names of features seen during fit. Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:1056](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1056)

### max\_resources\_

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

#### Signature

```ts
max_resources_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:674](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L674)

### min\_resources\_

The amount of resources that are allocated for each candidate at the first iteration.

#### Signature

```ts
min_resources_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:701](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L701)

### multimetric\_

Whether or not the scorers compute several metrics.

#### Signature

```ts
multimetric_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:1029](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1029)

### n\_candidates\_

The number of candidate parameters that were evaluated at each iteration.

#### Signature

```ts
n_candidates_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:620](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L620)

### n\_iterations\_

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

#### Signature

```ts
n_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L728)

### n\_possible\_iterations\_

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

#### Signature

```ts
n_possible_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:755](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L755)

### n\_remaining\_candidates\_

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

#### Signature

```ts
n_remaining_candidates_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:647](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L647)

### n\_required\_iterations\_

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

#### Signature

```ts
n_required_iterations_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:782](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L782)

### n\_resources\_

The amount of resources used at each iteration.

#### Signature

```ts
n_resources_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:593](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L593)

### n\_splits\_

The number of cross-validation splits (folds/iterations).

#### Signature

```ts
n_splits_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:973](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L973)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L132)

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

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L136)

### refit\_time\_

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Signature

```ts
refit_time_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:1002](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1002)

### scorer\_

Scorer function used on the held out data to choose the best parameters for the model.

#### Signature

```ts
scorer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/HalvingRandomSearchCV.ts:946](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L946)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L226)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L207)

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
| `opts.X?` | `ArrayLike` | Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features. |
| `opts.fit_params?` | `any` | Parameters passed to the `fit` method of the estimator. |
| `opts.groups?` | `ArrayLike` | Group labels for the samples used while splitting the dataset into train/test set. Only used in conjunction with a “Group” cv instance (e.g., [`GroupKFold`](sklearn.model_selection.GroupKFold.html#sklearn.model_selection.GroupKFold "sklearn.model_selection.GroupKFold")). |
| `opts.y?` | `ArrayLike` | Target relative to X for classification or regression; `undefined` for unsupervised learning. |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:263](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L263)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L145)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:319](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L319)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:358](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L358)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:395](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L395)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:434](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L434)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L473)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:517](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L517)

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

Defined in:  [generated/model\_selection/HalvingRandomSearchCV.ts:556](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L556)
