# Class: GridSearchCV

Exhaustive search over specified parameter values for an estimator.

Important members are fit, predict.

GridSearchCV implements a “fit” and a “score” method. It also implements “score_samples”, “predict”, “predict_proba”, “decision_function”, “transform” and “inverse_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated grid-search over a parameter grid.

Read more in the [User Guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#grid-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)

## Constructors

### new GridSearchCV()

> **new GridSearchCV**(`opts`?): [`GridSearchCV`](GridSearchCV.md)

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`?

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.cv`?

</td>
<td>

`number`

</td>
<td>

Determines the cross-validation splitting strategy. Possible inputs for cv are:

</td>
</tr>
<tr>
<td>

`opts.error_score`?

</td>
<td>

`"raise"`

</td>
<td>

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error.

</td>
</tr>
<tr>
<td>

`opts.estimator`?

</td>
<td>

`any`

</td>
<td>

This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

</td>
</tr>
<tr>
<td>

`opts.n_jobs`?

</td>
<td>

`number`

</td>
<td>

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-n_jobs) for more details.

</td>
</tr>
<tr>
<td>

`opts.param_grid`?

</td>
<td>

`any`

</td>
<td>

Dictionary with parameters names (`str`) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.

</td>
</tr>
<tr>
<td>

`opts.pre_dispatch`?

</td>
<td>

`string`

</td>
<td>

Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:

</td>
</tr>
<tr>
<td>

`opts.refit`?

</td>
<td>

`boolean`

</td>
<td>

Refit an estimator using the best found parameters on the whole dataset.

For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best_index_` given `cv_results_`. In that case, the `best_estimator_` and `best_params_` will be set according to the returned `best_index_` while the `best_score_` attribute will not be available.

The refitted estimator is made available at the `best_estimator_` attribute and permits using `predict` directly on this `GridSearchCV` instance.

Also for multiple metric evaluation, the attributes `best_index_`, `best_score_` and `best_params_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

See `scoring` parameter to know more about multiple metric evaluation.

See [Custom refit strategy of a grid search with cross-validation](https://scikit-learn.org/stable/modules/generated/../../auto_examples/model_selection/plot_grid_search_digits.html#sphx-glr-auto-examples-model-selection-plot-grid-search-digits-py) to see how to design a custom selection strategy using a callable via `refit`.

</td>
</tr>
<tr>
<td>

`opts.return_train_score`?

</td>
<td>

`boolean`

</td>
<td>

If `false`, the `cv_results_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

</td>
</tr>
<tr>
<td>

`opts.scoring`?

</td>
<td>

`any`

</td>
<td>

Strategy to evaluate the performance of the cross-validated model on the test set.

If `scoring` represents a single score, one can use:

</td>
</tr>
<tr>
<td>

`opts.verbose`?

</td>
<td>

`number`

</td>
<td>

Controls the verbosity: the higher, the more messages.

</td>
</tr>
</tbody>
</table>

**Returns** [`GridSearchCV`](GridSearchCV.md)

**Defined in** [generated/model\_selection/GridSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L29)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/GridSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L27) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/GridSearchCV.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L26) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/GridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L25) |
| `id` | `string` | `undefined` | [generated/model\_selection/GridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L22) |
| `opts` | `any` | `undefined` | [generated/model\_selection/GridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L23) |

## Accessors

### best\_estimator\_

**Get Signature**

> **get** **best\_estimator\_**(): `Promise`\<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

See `refit` parameter for more information on allowed values.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:575](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L575)

***

### best\_index\_

**Get Signature**

> **get** **best\_index\_**(): `Promise`\<`number`\>

The index (of the `cv_results_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv_results_\['params'\]\[search.best_index_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best_score_`).

For multi-metric evaluation, this is present only if `refit` is specified.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:660](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L660)

***

### best\_params\_

**Get Signature**

> **get** **best\_params\_**(): `Promise`\<`any`\>

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is present only if `refit` is specified.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:631](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L631)

***

### best\_score\_

**Get Signature**

> **get** **best\_score\_**(): `Promise`\<`number`\>

Mean cross-validated score of the best_estimator

For multi-metric evaluation, this is present only if `refit` is specified.

This attribute is not available if `refit` is a function.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:604](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L604)

***

### cv\_results\_

**Get Signature**

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:548](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L548)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if `best_estimator_` is defined (see the documentation for the `refit` parameter for more details) and that `best_estimator_` exposes `feature_names_in_` when fit.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:787](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L787)

***

### multimetric\_

**Get Signature**

> **get** **multimetric\_**(): `Promise`\<`boolean`\>

Whether or not the scorers compute several metrics.

**Returns** `Promise`\<`boolean`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:762](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L762)

***

### n\_splits\_

**Get Signature**

> **get** **n\_splits\_**(): `Promise`\<`number`\>

The number of cross-validation splits (folds/iterations).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L710)

***

### py

**Get Signature**

> **get** **py**(): `PythonBridge`

**Returns** `PythonBridge`

**Set Signature**

> **set** **py**(`pythonBridge`): `void`

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`pythonBridge`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `void`

**Defined in** [generated/model\_selection/GridSearchCV.ts:104](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L104)

***

### refit\_time\_

**Get Signature**

> **get** **refit\_time\_**(): `Promise`\<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L737)

***

### scorer\_

**Get Signature**

> **get** **scorer\_**(): `Promise`\<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:687](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L687)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Call decision_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision_function`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:175](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L175)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:156](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L156)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run fit with all sets of parameters.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.params`?

</td>
<td>

`any`

</td>
<td>

Parameters passed to the `fit` method of the estimator, the scorer, and the CV splitter.

If a fit parameter is an array-like whose length is equal to `num_samples` then it will be split across CV groups along with `X` and `y`. For example, the [sample_weight](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-sample_weight) parameter is split because `len(sample_weights) \= len(X)`.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Training vectors, where `n_samples` is the number of samples and `n_features` is the number of features. For precomputed kernel or distance matrix, the expected shape of X is (n_samples, n_samples).

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Target relative to X for classification or regression; `undefined` for unsupervised learning.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:209](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L209)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](https://scikit-learn.org/stable/modules/generated/../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.routing`?

</td>
<td>

`any`

</td>
<td>

A [`MetadataRouter`](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:255](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L255)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`py`

</td>
<td>

`PythonBridge`

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:117](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L117)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Call inverse_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse_transform` and `refit=True`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
<tr>
<td>

`opts.Xt`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L291)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:332](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L332)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`\>

Call predict_log_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict_log_proba`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:366](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L366)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`\>

Call predict_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict_proba`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:402](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L402)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best_estimator_.score` method otherwise.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.params`?

</td>
<td>

`any`

</td>
<td>

Parameters to be passed to the underlying scorer(s).

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Input data, where `n_samples` is the number of samples and `n_features` is the number of features.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`[]

</td>
<td>

Target relative to X for classification or regression; `undefined` for unsupervised learning.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:436](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L436)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Call score_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score_samples`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Data to predict on. Must fulfill input requirements of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:480](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L480)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

**Parameters**

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

`object`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`any`

</td>
<td>

Must fulfill the input assumptions of the underlying estimator.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/GridSearchCV.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/GridSearchCV.ts#L514)
