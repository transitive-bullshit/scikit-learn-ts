[**sklearn**](../README.md) • **Docs**

***

Randomized search on hyper parameters.

RandomizedSearchCV implements a “fit” and a “score” method. It also implements “score\_samples”, “predict”, “predict\_proba”, “decision\_function”, “transform” and “inverse\_transform” if they are implemented in the estimator used.

The parameters of the estimator used to apply these methods are optimized by cross-validated search over parameter settings.

In contrast to GridSearchCV, not all parameter values are tried out, but rather a fixed number of parameter settings is sampled from the specified distributions. The number of parameter settings that are tried is given by n\_iter.

If all parameters are presented as a list, sampling without replacement is performed. If at least one parameter is given as a distribution, sampling with replacement is used. It is highly recommended to use continuous distributions for continuous parameters.

Read more in the [User Guide](../grid_search.html#randomized-parameter-search).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

## Constructors

### new RandomizedSearchCV()

> **new RandomizedSearchCV**(`opts`?): [`RandomizedSearchCV`](RandomizedSearchCV.md)

#### Parameters

• **opts?**

• **opts.cv?**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

• **opts.error\_score?**: `"raise"`

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error.

• **opts.estimator?**: `any`

An object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

• **opts.n\_iter?**: `number`

Number of parameter settings that are sampled. n\_iter trades off runtime vs quality of the solution.

**Default Value**

`10`

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

• **opts.param\_distributions?**: `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

• **opts.pre\_dispatch?**: `string`

Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:

**Default Value**

`'2*n_jobs'`

• **opts.random\_state?**: `number`

Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

• **opts.refit?**: `boolean`

Refit an estimator using the best found parameters on the whole dataset.

For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given the `cv\_results`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `RandomizedSearchCV` instance.

Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

See `scoring` parameter to know more about multiple metric evaluation.

**Default Value**

`true`

• **opts.return\_train\_score?**: `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

**Default Value**

`false`

• **opts.scoring?**: `any`

Strategy to evaluate the performance of the cross-validated model on the test set.

If `scoring` represents a single score, one can use:

• **opts.verbose?**: `number`

Controls the verbosity: the higher, the more messages.

#### Returns

[`RandomizedSearchCV`](RandomizedSearchCV.md)

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:31](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L31)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L29)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:28](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L28)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L27)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L24)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L25)

## Accessors

### best\_estimator\_

#### Get Signature

> **get** **best\_estimator\_**(): `Promise`\<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

For multi-metric evaluation, this attribute is present only if `refit` is specified.

See `refit` parameter for more information on allowed values.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:619](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L619)

***

### best\_index\_

#### Get Signature

> **get** **best\_index\_**(): `Promise`\<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L710)

***

### best\_params\_

#### Get Signature

> **get** **best\_params\_**(): `Promise`\<`any`\>

Parameter setting that gave the best results on the hold out data.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:679](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L679)

***

### best\_score\_

#### Get Signature

> **get** **best\_score\_**(): `Promise`\<`number`\>

Mean cross-validated score of the best\_estimator.

For multi-metric evaluation, this is not available if `refit` is `false`. See `refit` parameter for more information.

This attribute is not available if `refit` is a function.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:650](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L650)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`.

For instance the below given table

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:588](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L588)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

Names of features seen during [fit](../../glossary.html#term-fit). Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

##### Returns

`Promise`\<[`ArrayLike`](../type-aliases/ArrayLike.md)\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:849](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L849)

***

### multimetric\_

#### Get Signature

> **get** **multimetric\_**(): `Promise`\<`boolean`\>

Whether or not the scorers compute several metrics.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:822](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L822)

***

### n\_splits\_

#### Get Signature

> **get** **n\_splits\_**(): `Promise`\<`number`\>

The number of cross-validation splits (folds/iterations).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:766](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L766)

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

[generated/model\_selection/RandomizedSearchCV.ts:116](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L116)

***

### refit\_time\_

#### Get Signature

> **get** **refit\_time\_**(): `Promise`\<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L795)

***

### scorer\_

#### Get Signature

> **get** **scorer\_**(): `Promise`\<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

For multi-metric evaluation, this attribute holds the validated `scoring` dict which maps the scorer key to the scorer callable.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:739](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L739)

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

[generated/model\_selection/RandomizedSearchCV.ts:191](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L191)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:172](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L172)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run fit with all sets of parameters.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters passed to the `fit` method of the estimator, the scorer, and the CV splitter.

If a fit parameter is an array-like whose length is equal to `num\_samples` then it will be split across CV groups along with `X` and `y`. For example, the [sample\_weight](../../glossary.html#term-sample_weight) parameter is split because `len(sample\_weights) \= len(X)`.

• **opts.X?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features. For precomputed kernel or distance matrix, the expected shape of X is (n\_samples, n\_samples).

• **opts.y?**: [`ArrayLike`](../type-aliases/ArrayLike.md)[]

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/RandomizedSearchCV.ts:227](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L227)

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

[generated/model\_selection/RandomizedSearchCV.ts:275](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L275)

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

[generated/model\_selection/RandomizedSearchCV.ts:129](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L129)

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

[generated/model\_selection/RandomizedSearchCV.ts:313](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L313)

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

[generated/model\_selection/RandomizedSearchCV.ts:356](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L356)

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

[generated/model\_selection/RandomizedSearchCV.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L392)

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

[generated/model\_selection/RandomizedSearchCV.ts:430](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L430)

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

[generated/model\_selection/RandomizedSearchCV.ts:468](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L468)

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

[generated/model\_selection/RandomizedSearchCV.ts:514](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L514)

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

[generated/model\_selection/RandomizedSearchCV.ts:552](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L552)
