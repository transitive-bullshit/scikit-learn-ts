[**sklearn**](../README.md) • **Docs**

***

Search over specified parameter values with successive halving.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

Read more in the [User guide](../grid_search.html#successive-halving-user-guide).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingGridSearchCV.html)

## Constructors

### new HalvingGridSearchCV()

> **new HalvingGridSearchCV**(`opts`?): [`HalvingGridSearchCV`](HalvingGridSearchCV.md)

#### Parameters

• **opts?**

• **opts.aggressive\_elimination?**: `boolean`

This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](../grid_search.html#aggressive-elimination) for more details.

**Default Value**

`false`

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

**Default Value**

`5`

• **opts.error\_score?**: `"raise"`

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.

• **opts.estimator?**: `any`

This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

• **opts.factor?**: `number`

The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

**Default Value**

`3`

• **opts.max\_resources?**: `number`

The maximum amount of resource that any candidate is allowed to use for a given iteration. By default, this is set to `n\_samples` when `resource='n\_samples'` (default), else an error is raised.

**Default Value**

`'auto'`

• **opts.min\_resources?**: `number` \| `"exhaust"` \| `"smallest"`

The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

**Default Value**

`'exhaust'`

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.param\_grid?**: `any`

Dictionary with parameters names (string) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.

• **opts.random\_state?**: `number`

Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Ignored otherwise. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.refit?**: `boolean`

If `true`, refit an estimator using the best found parameters on the whole dataset.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingGridSearchCV` instance.

**Default Value**

`true`

• **opts.resource?**: `string`

Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n\_iterations’ or ‘n\_estimators’ for a gradient boosting estimator. In this case `max\_resources` cannot be ‘auto’ and must be set explicitly.

**Default Value**

`'n_samples'`

• **opts.return\_train\_score?**: `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

**Default Value**

`false`

• **opts.scoring?**: `string`

A single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.

• **opts.verbose?**: `number`

Controls the verbosity: the higher, the more messages.

#### Returns

[`HalvingGridSearchCV`](HalvingGridSearchCV.md)

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L25)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L23)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L22)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L21)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:18](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L18)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:19](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L19)

## Accessors

### best\_estimator\_

#### Get Signature

> **get** **best\_estimator\_**(): `Promise`\<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:834](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L834)

***

### best\_index\_

#### Get Signature

> **get** **best\_index\_**(): `Promise`\<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:917](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L917)

***

### best\_params\_

#### Get Signature

> **get** **best\_params\_**(): `Promise`\<`any`\>

Parameter setting that gave the best results on the hold out data.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:888](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L888)

***

### best\_score\_

#### Get Signature

> **get** **best\_score\_**(): `Promise`\<`number`\>

Mean cross-validated score of the best\_estimator.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:861](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L861)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the [User guide](../grid_search.html#successive-halving-cv-results) for details.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:807](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L807)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:1054](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1054)

***

### max\_resources\_

#### Get Signature

> **get** **max\_resources\_**(): `Promise`\<`number`\>

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:672](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L672)

***

### min\_resources\_

#### Get Signature

> **get** **min\_resources\_**(): `Promise`\<`number`\>

The amount of resources that are allocated for each candidate at the first iteration.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:699](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L699)

***

### multimetric\_

#### Get Signature

> **get** **multimetric\_**(): `Promise`\<`boolean`\>

Whether or not the scorers compute several metrics.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:1027](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1027)

***

### n\_candidates\_

#### Get Signature

> **get** **n\_candidates\_**(): `Promise`\<`any`\>

The number of candidate parameters that were evaluated at each iteration.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:618](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L618)

***

### n\_iterations\_

#### Get Signature

> **get** **n\_iterations\_**(): `Promise`\<`number`\>

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:726](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L726)

***

### n\_possible\_iterations\_

#### Get Signature

> **get** **n\_possible\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:753](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L753)

***

### n\_remaining\_candidates\_

#### Get Signature

> **get** **n\_remaining\_candidates\_**(): `Promise`\<`number`\>

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:645](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L645)

***

### n\_required\_iterations\_

#### Get Signature

> **get** **n\_required\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:780](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L780)

***

### n\_resources\_

#### Get Signature

> **get** **n\_resources\_**(): `Promise`\<`any`\>

The amount of resources used at each iteration.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:591](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L591)

***

### n\_splits\_

#### Get Signature

> **get** **n\_splits\_**(): `Promise`\<`number`\>

The number of cross-validation splits (folds/iterations).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:971](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L971)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:123](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L123)

***

### refit\_time\_

#### Get Signature

> **get** **refit\_time\_**(): `Promise`\<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:1000](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1000)

***

### scorer\_

#### Get Signature

> **get** **scorer\_**(): `Promise`\<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:944](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L944)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:198](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L198)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:179](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L179)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run fit with all sets of parameters.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters passed to the `fit` method of the estimator.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:234](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L234)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check [User Guide](../../metadata_routing.html#metadata-routing) on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:280](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L280)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:136](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L136)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

• **opts.Xt?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:318](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L318)

***

### predict()

> **predict**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:361](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L361)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:397](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L397)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:435](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L435)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the underlying scorer(s).

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:473](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L473)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:519](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L519)

***

### transform()

> **transform**(`opts`): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/HalvingGridSearchCV.ts:557](https://github.com/transitive-bullshit/scikit-learn-ts/blob/ac44cfe4514273f037328d5b7cee92242da76b0c/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L557)
