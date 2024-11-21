# Class: HalvingRandomSearchCV

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n_candidates`.

Read more in the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-user-guide).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)

## Constructors

### new HalvingRandomSearchCV()

> **new HalvingRandomSearchCV**(`opts`?): [`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

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

`opts.aggressive_elimination`?

</td>
<td>

`boolean`

</td>
<td>

This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](https://scikit-learn.org/stable/modules/generated/../grid_search.html#aggressive-elimination) for more details.

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

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.

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

`opts.factor`?

</td>
<td>

`number`

</td>
<td>

The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

</td>
</tr>
<tr>
<td>

`opts.max_resources`?

</td>
<td>

`number`

</td>
<td>

The maximum number of resources that any candidate is allowed to use for a given iteration. By default, this is set `n_samples` when `resource='n_samples'` (default), else an error is raised.

</td>
</tr>
<tr>
<td>

`opts.min_resources`?

</td>
<td>

`number` \| `"exhaust"` \| `"smallest"`

</td>
<td>

The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

</td>
</tr>
<tr>
<td>

`opts.n_candidates`?

</td>
<td>

`number` \| `"exhaust"`

</td>
<td>

The number of candidate parameters to sample, at the first iteration. Using ‘exhaust’ will sample enough candidates so that the last iteration uses as many resources as possible, based on `min_resources`, `max_resources` and `factor`. In this case, `min_resources` cannot be ‘exhaust’.

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

`opts.param_distributions`?

</td>
<td>

`any`

</td>
<td>

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

</td>
</tr>
<tr>
<td>

`opts.random_state`?

</td>
<td>

`number`

</td>
<td>

Pseudo random number generator state used for subsampling the dataset when `resources != 'n_samples'`. Also used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-random_state).

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

If `true`, refit an estimator using the best found parameters on the whole dataset.

The refitted estimator is made available at the `best_estimator_` attribute and permits using `predict` directly on this `HalvingRandomSearchCV` instance.

</td>
</tr>
<tr>
<td>

`opts.resource`?

</td>
<td>

`string`

</td>
<td>

Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n_iterations’ or ‘n_estimators’ for a gradient boosting estimator. In this case `max_resources` cannot be ‘auto’ and must be set explicitly.

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

`string`

</td>
<td>

A single string (see [The scoring parameter: defining model evaluation rules](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](https://scikit-learn.org/stable/modules/generated/../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.

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

**Returns** [`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L27)

## Properties

| Property | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| `_isDisposed` | `boolean` | `false` | [generated/model\_selection/HalvingRandomSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L25) |
| `_isInitialized` | `boolean` | `false` | [generated/model\_selection/HalvingRandomSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L24) |
| `_py` | `PythonBridge` | `undefined` | [generated/model\_selection/HalvingRandomSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L23) |
| `id` | `string` | `undefined` | [generated/model\_selection/HalvingRandomSearchCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L20) |
| `opts` | `any` | `undefined` | [generated/model\_selection/HalvingRandomSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L21) |

## Accessors

### best\_estimator\_

**Get Signature**

> **get** **best\_estimator\_**(): `Promise`\<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:845](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L845)

***

### best\_index\_

**Get Signature**

> **get** **best\_index\_**(): `Promise`\<`number`\>

The index (of the `cv_results_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv_results_\['params'\]\[search.best_index_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best_score_`).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:928](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L928)

***

### best\_params\_

**Get Signature**

> **get** **best\_params\_**(): `Promise`\<`any`\>

Parameter setting that gave the best results on the hold out data.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:899](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L899)

***

### best\_score\_

**Get Signature**

> **get** **best\_score\_**(): `Promise`\<`number`\>

Mean cross-validated score of the best_estimator.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:872](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L872)

***

### cv\_results\_

**Get Signature**

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](https://scikit-learn.org/stable/modules/generated/../grid_search.html#successive-halving-cv-results) for details.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:818](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L818)

***

### feature\_names\_in\_

**Get Signature**

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during [fit](https://scikit-learn.org/stable/modules/generated/../../glossary.html#term-fit). Only defined if `best_estimator_` is defined (see the documentation for the `refit` parameter for more details) and that `best_estimator_` exposes `feature_names_in_` when fit.

**Returns** `Promise`\<`ArrayLike`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:1065](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1065)

***

### max\_resources\_

**Get Signature**

> **get** **max\_resources\_**(): `Promise`\<`number`\>

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min_resources_`, the actual number of resources used at the last iteration may be smaller than `max_resources_`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L683)

***

### min\_resources\_

**Get Signature**

> **get** **min\_resources\_**(): `Promise`\<`number`\>

The amount of resources that are allocated for each candidate at the first iteration.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L710)

***

### multimetric\_

**Get Signature**

> **get** **multimetric\_**(): `Promise`\<`boolean`\>

Whether or not the scorers compute several metrics.

**Returns** `Promise`\<`boolean`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:1038](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1038)

***

### n\_candidates\_

**Get Signature**

> **get** **n\_candidates\_**(): `Promise`\<`any`\>

The number of candidate parameters that were evaluated at each iteration.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L629)

***

### n\_iterations\_

**Get Signature**

> **get** **n\_iterations\_**(): `Promise`\<`number`\>

The actual number of iterations that were run. This is equal to `n_required_iterations_` if `aggressive_elimination` is `true`. Else, this is equal to `min(n_possible_iterations_, n_required_iterations_)`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L737)

***

### n\_possible\_iterations\_

**Get Signature**

> **get** **n\_possible\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are possible starting with `min_resources_` resources and without exceeding `max_resources_`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L764)

***

### n\_remaining\_candidates\_

**Get Signature**

> **get** **n\_remaining\_candidates\_**(): `Promise`\<`number`\>

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n_candidates\[-1\] / factor)`

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L656)

***

### n\_required\_iterations\_

**Get Signature**

> **get** **n\_required\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min_resources_` resources. This will be smaller than `n_possible_iterations_` when there isn’t enough resources.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:791](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L791)

***

### n\_resources\_

**Get Signature**

> **get** **n\_resources\_**(): `Promise`\<`any`\>

The amount of resources used at each iteration.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L602)

***

### n\_splits\_

**Get Signature**

> **get** **n\_splits\_**(): `Promise`\<`number`\>

The number of cross-validation splits (folds/iterations).

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:982](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L982)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L132)

***

### refit\_time\_

**Get Signature**

> **get** **refit\_time\_**(): `Promise`\<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

**Returns** `Promise`\<`number`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:1011](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1011)

***

### scorer\_

**Get Signature**

> **get** **scorer\_**(): `Promise`\<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:955](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L955)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L207)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

**Returns** `Promise`\<`void`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L188)

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

Parameters passed to the `fit` method of the estimator.

</td>
</tr>
<tr>
<td>

`opts.X`?

</td>
<td>

`ArrayLike`

</td>
<td>

Training vector, where `n_samples` is the number of samples and `n_features` is the number of features.

</td>
</tr>
<tr>
<td>

`opts.y`?

</td>
<td>

`ArrayLike`

</td>
<td>

Target relative to X for classification or regression; `undefined` for unsupervised learning.

</td>
</tr>
</tbody>
</table>

**Returns** `Promise`\<`any`\>

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L243)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L289)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L145)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L327)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L370)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L406)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L444)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L482)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L528)

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

**Defined in** [generated/model\_selection/HalvingRandomSearchCV.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d136d90c5cb653f22204ec450ae61706606a5b96/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L566)
