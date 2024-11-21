**sklearn** • **Docs**

***

Randomized search on hyper parameters.

The search strategy starts evaluating all the candidates with a small amount of resources and iteratively selects the best candidates, using more and more resources.

The candidates are sampled at random from the parameter space and the number of sampled candidates is determined by `n\_candidates`.

Read more in the User guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.HalvingRandomSearchCV.html)

## Constructors

### new HalvingRandomSearchCV()

> **new HalvingRandomSearchCV**(`opts`?): [`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

#### Parameters

• **opts?**

• **opts.aggressive\_elimination?**: `boolean`

This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See Aggressive elimination of candidates for more details.

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

The maximum number of resources that any candidate is allowed to use for a given iteration. By default, this is set `n\_samples` when `resource='n\_samples'` (default), else an error is raised.

**Default Value**

`'auto'`

• **opts.min\_resources?**: `number` \| `"exhaust"` \| `"smallest"`

The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

**Default Value**

`'smallest'`

• **opts.n\_candidates?**: `number` \| `"exhaust"`

The number of candidate parameters to sample, at the first iteration. Using ‘exhaust’ will sample enough candidates so that the last iteration uses as many resources as possible, based on `min\_resources`, `max\_resources` and `factor`. In this case, `min\_resources` cannot be ‘exhaust’.

**Default Value**

`'exhaust'`

• **opts.n\_jobs?**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/generated/joblib.parallel_backend.html#joblib.parallel_backend "(in joblib v1.5.dev0)") context. `\-1` means using all processors. See Glossary for more details.

• **opts.param\_distributions?**: `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

• **opts.random\_state?**: `number`

Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Also used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.refit?**: `boolean`

If `true`, refit an estimator using the best found parameters on the whole dataset.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingRandomSearchCV` instance.

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

A single string (see The scoring parameter: defining model evaluation rules) or a callable (see Defining your scoring strategy from metric functions) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.

• **opts.verbose?**: `number`

Controls the verbosity: the higher, the more messages.

#### Returns

[`HalvingRandomSearchCV`](HalvingRandomSearchCV.md)

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L27)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L25)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L24)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L23)

***

### id

> **id**: `string`

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L20)

***

### opts

> **opts**: `any`

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L21)

## Accessors

### best\_estimator\_

#### Get Signature

> **get** **best\_estimator\_**(): `Promise`\<`any`\>

Estimator that was chosen by the search, i.e. estimator which gave highest score (or smallest loss if specified) on the left out data. Not available if `refit=False`.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:845](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L845)

***

### best\_index\_

#### Get Signature

> **get** **best\_index\_**(): `Promise`\<`number`\>

The index (of the `cv\_results\_` arrays) which corresponds to the best candidate parameter setting.

The dict at `search.cv\_results\_\['params'\]\[search.best\_index\_\]` gives the parameter setting for the best model, that gives the highest mean score (`search.best\_score\_`).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:928](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L928)

***

### best\_params\_

#### Get Signature

> **get** **best\_params\_**(): `Promise`\<`any`\>

Parameter setting that gave the best results on the hold out data.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:899](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L899)

***

### best\_score\_

#### Get Signature

> **get** **best\_score\_**(): `Promise`\<`number`\>

Mean cross-validated score of the best\_estimator.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:872](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L872)

***

### cv\_results\_

#### Get Signature

> **get** **cv\_results\_**(): `Promise`\<`any`\>

A dict with keys as column headers and values as columns, that can be imported into a pandas `DataFrame`. It contains lots of information for analysing the results of a search. Please refer to the User guide for details.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:818](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L818)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Only defined if `best\_estimator\_` is defined (see the documentation for the `refit` parameter for more details) and that `best\_estimator\_` exposes `feature\_names\_in\_` when fit.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:1065](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1065)

***

### max\_resources\_

#### Get Signature

> **get** **max\_resources\_**(): `Promise`\<`number`\>

The maximum number of resources that any candidate is allowed to use for a given iteration. Note that since the number of resources used at each iteration must be a multiple of `min\_resources\_`, the actual number of resources used at the last iteration may be smaller than `max\_resources\_`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:683](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L683)

***

### min\_resources\_

#### Get Signature

> **get** **min\_resources\_**(): `Promise`\<`number`\>

The amount of resources that are allocated for each candidate at the first iteration.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:710](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L710)

***

### multimetric\_

#### Get Signature

> **get** **multimetric\_**(): `Promise`\<`boolean`\>

Whether or not the scorers compute several metrics.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:1038](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1038)

***

### n\_candidates\_

#### Get Signature

> **get** **n\_candidates\_**(): `Promise`\<`any`\>

The number of candidate parameters that were evaluated at each iteration.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:629](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L629)

***

### n\_iterations\_

#### Get Signature

> **get** **n\_iterations\_**(): `Promise`\<`number`\>

The actual number of iterations that were run. This is equal to `n\_required\_iterations\_` if `aggressive\_elimination` is `true`. Else, this is equal to `min(n\_possible\_iterations\_, n\_required\_iterations\_)`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L737)

***

### n\_possible\_iterations\_

#### Get Signature

> **get** **n\_possible\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are possible starting with `min\_resources\_` resources and without exceeding `max\_resources\_`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:764](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L764)

***

### n\_remaining\_candidates\_

#### Get Signature

> **get** **n\_remaining\_candidates\_**(): `Promise`\<`number`\>

The number of candidate parameters that are left after the last iteration. It corresponds to `ceil(n\_candidates\[-1\] / factor)`

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:656](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L656)

***

### n\_required\_iterations\_

#### Get Signature

> **get** **n\_required\_iterations\_**(): `Promise`\<`number`\>

The number of iterations that are required to end up with less than `factor` candidates at the last iteration, starting with `min\_resources\_` resources. This will be smaller than `n\_possible\_iterations\_` when there isn’t enough resources.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:791](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L791)

***

### n\_resources\_

#### Get Signature

> **get** **n\_resources\_**(): `Promise`\<`any`\>

The amount of resources used at each iteration.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:602](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L602)

***

### n\_splits\_

#### Get Signature

> **get** **n\_splits\_**(): `Promise`\<`number`\>

The number of cross-validation splits (folds/iterations).

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:982](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L982)

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

[generated/model\_selection/HalvingRandomSearchCV.ts:132](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L132)

***

### refit\_time\_

#### Get Signature

> **get** **refit\_time\_**(): `Promise`\<`number`\>

Seconds used for refitting the best model on the whole dataset.

This is present only if `refit` is not `false`.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:1011](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1011)

***

### scorer\_

#### Get Signature

> **get** **scorer\_**(): `Promise`\<`any`\>

Scorer function used on the held out data to choose the best parameters for the model.

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:955](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L955)

## Methods

### decision\_function()

> **decision\_function**(`opts`): `Promise`\<`ArrayLike`\>

Call decision\_function on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `decision\_function`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L207)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:188](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L188)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Run fit with all sets of parameters.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters passed to the `fit` method of the estimator.

• **opts.X?**: `ArrayLike`

Training vector, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:243](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L243)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRouter`](sklearn.utils.metadata_routing.MetadataRouter.html#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L289)

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

[generated/model\_selection/HalvingRandomSearchCV.ts:145](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L145)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Call inverse\_transform on the estimator with the best found params.

Only available if the underlying estimator implements `inverse\_transform` and `refit=True`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

• **opts.Xt?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:327](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L327)

***

### predict()

> **predict**(`opts`): `Promise`\<`ArrayLike`\>

Call predict on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:370](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L370)

***

### predict\_log\_proba()

> **predict\_log\_proba**(`opts`): `Promise`\<`ArrayLike`\>

Call predict\_log\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_log\_proba`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L406)

***

### predict\_proba()

> **predict\_proba**(`opts`): `Promise`\<`ArrayLike`\>

Call predict\_proba on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `predict\_proba`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:444](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L444)

***

### score()

> **score**(`opts`): `Promise`\<`number`\>

Return the score on the given data, if the estimator has been refit.

This uses the score defined by `scoring` where provided, and the `best\_estimator\_.score` method otherwise.

#### Parameters

• **opts**

• **opts.params?**: `any`

Parameters to be passed to the underlying scorer(s).

• **opts.X?**: `ArrayLike`[]

Input data, where `n\_samples` is the number of samples and `n\_features` is the number of features.

• **opts.y?**: `ArrayLike`[]

Target relative to X for classification or regression; `undefined` for unsupervised learning.

#### Returns

`Promise`\<`number`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:482](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L482)

***

### score\_samples()

> **score\_samples**(`opts`): `Promise`\<`ArrayLike`\>

Call score\_samples on the estimator with the best found parameters.

Only available if `refit=True` and the underlying estimator supports `score\_samples`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Data to predict on. Must fulfill input requirements of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:528](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L528)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Call transform on the estimator with the best found parameters.

Only available if the underlying estimator supports `transform` and `refit=True`.

#### Parameters

• **opts**

• **opts.X?**: `any`

Must fulfill the input assumptions of the underlying estimator.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/model\_selection/HalvingRandomSearchCV.ts:566](https://github.com/transitive-bullshit/scikit-learn-ts/blob/5e663e21c4853c8fe2b9bcb1cb98c79fc27bba08/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L566)
