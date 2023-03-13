# GridSearchCVOptions

## Properties

### cv?

> `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

Defined in:  [generated/model\_selection/GridSearchCV.ts:713](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L713)

### error\_score?

> `"raise"`

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error.

Defined in:  [generated/model\_selection/GridSearchCV.ts:730](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L730)

### estimator?

> `any`

This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

Defined in:  [generated/model\_selection/GridSearchCV.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L672)

### n\_jobs?

> `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/model\_selection/GridSearchCV.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L689)

### param\_grid?

> `any`

Dictionary with parameters names (`str`) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.

Defined in:  [generated/model\_selection/GridSearchCV.ts:677](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L677)

### pre\_dispatch?

> `string`

Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:

#### Default Value

`'2*n_jobs'`

Defined in:  [generated/model\_selection/GridSearchCV.ts:725](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L725)

### refit?

> `boolean`

Refit an estimator using the best found parameters on the whole dataset.

For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given `cv\_results\_`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `GridSearchCV` instance.

Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

See `scoring` parameter to know more about multiple metric evaluation.

See [Custom refit strategy of a grid search with cross-validation](../../auto_examples/model_selection/plot_grid_search_digits.html#sphx-glr-auto-examples-model-selection-plot-grid-search-digits-py) to see how to design a custom selection strategy using a callable via `refit`.

#### Default Value

`true`

Defined in:  [generated/model\_selection/GridSearchCV.ts:708](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L708)

### return\_train\_score?

> `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

#### Default Value

`false`

Defined in:  [generated/model\_selection/GridSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L737)

### scoring?

> `any`

Strategy to evaluate the performance of the cross-validated model on the test set.

If `scoring` represents a single score, one can use:

Defined in:  [generated/model\_selection/GridSearchCV.ts:684](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L684)

### verbose?

> `number`

Controls the verbosity: the higher, the more messages.

Defined in:  [generated/model\_selection/GridSearchCV.ts:718](https://github.com/transitive-bullshit/scikit-learn-ts/blob/b59c1ff/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L718)
