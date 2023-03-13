# RandomizedSearchCV

Randomized search on hyper parameters.

RandomizedSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated search over parameter settings.

In contrast to GridSearchCV, not all parameter values are tried out, but rather a fixed number of parameter settings is sampled from the specified distributions. The number of parameter settings that are tried is given by n\_iter.

If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

## Constructors

## constructor()

### Signature

```ts
new RandomizedSearchCV(opts?: object): RandomizedSearchCV;
```

### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | `object` | - |
| `opts.cv?` | `number` | Determines the cross-validation splitting strategy. Possible inputs for cv are: |
| `opts.error_score?` | `"raise"` | Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. |
| `opts.estimator?` | `any` | An object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed. |
| `opts.n_iter?` | `number` | Number of parameter settings that are sampled. n\_iter trades off runtime vs quality of the solution.  `Default Value`  `10` |
| `opts.n_jobs?` | `number` | Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See Glossary for more details. |
| `opts.param_distributions?` | `any` | Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above. |
| `opts.pre_dispatch?` | `string` | Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:  `Default Value`  `'2*n_jobs'` |
| `opts.random_state?` | `number` | Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See Glossary. |
| `opts.refit?` | `boolean` | Refit an estimator using the best found parameters on the whole dataset.  For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.  Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given the `cv\_results`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.  The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `RandomizedSearchCV` instance.  Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.  See `scoring` parameter to know more about multiple metric evaluation.  `Default Value`  `true` |
| `opts.return_train_score?` | `boolean` | If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.  `Default Value`  `false` |
| `opts.scoring?` | `any` | Strategy to evaluate the performance of the cross-validated model on the test set.  If `scoring` represents a single score, one can use: |
| `opts.verbose?` | `number` | Controls the verbosity: the higher, the more messages. |

### Returns

[`RandomizedSearchCV`](RandomizedSearchCV.md)

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L31)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L29)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L28)

### \_py

> `PythonBridge`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L27)

### id

> `string`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L24)

### opts

> `any`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L25)

## Accessors

### best\_estimator\_

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

For multi-metric evaluation, this attribute is present only if `refit` is specified.

See `refit` parameter for more information on allowed values.

#### Signature

```ts
best_estimator_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:608](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L608)

### best\_index\_

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

#### Signature

```ts
best_index_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L699)

### best\_params\_

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

#### Signature

```ts
best_params_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:668](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L668)

### best\_score\_

Mean cross-validated score of the best\_estimator.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

This attribute is not available if `refit` is a function.

#### Signature

```ts
best_score_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:639](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L639)

### cv\_results\_

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

#### Signature

```ts
cv_results_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:577](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L577)

### feature\_names\_in\_

Names of features seen during fit. Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<`ArrayLike`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:838](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L838)

### multimetric\_

Whether or not the scorers compute several metrics.

#### Signature

```ts
multimetric_(): Promise<boolean>;
```

#### Returns

`Promise`\<`boolean`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:811](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L811)

### n\_splits\_

The number of cross-validation splits (folds/iterations).

#### Signature

```ts
n_splits_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:755](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L755)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L116)

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

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:120](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L120)

### refit\_time\_

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

#### Signature

```ts
refit_time_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:784](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L784)

### scorer\_

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

#### Signature

```ts
scorer_(): Promise<any>;
```

#### Returns

`Promise`\<`any`\>

Defined in: [generated/model\_selection/RandomizedSearchCV.ts:728](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L728)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:206](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L206)

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:187](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L187)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L243)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L129)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L303)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:342](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L342)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:379](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L379)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L418)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:457](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L457)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:501](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L501)

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

Defined in:  [generated/model\_selection/RandomizedSearchCV.ts:540](https://github.com/transitive-bullshit/scikit-learn-ts/blob/f6c1fce/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L540)
