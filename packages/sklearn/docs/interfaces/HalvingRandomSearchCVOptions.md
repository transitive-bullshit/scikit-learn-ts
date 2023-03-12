[sklearn](../readme.md) / [Exports](../modules.md) / HalvingRandomSearchCVOptions

# Interface: HalvingRandomSearchCVOptions

## Table of contents

### Properties

- [aggressive\_elimination](HalvingRandomSearchCVOptions.md#aggressive_elimination)
- [cv](HalvingRandomSearchCVOptions.md#cv)
- [error\_score](HalvingRandomSearchCVOptions.md#error_score)
- [estimator](HalvingRandomSearchCVOptions.md#estimator)
- [factor](HalvingRandomSearchCVOptions.md#factor)
- [max\_resources](HalvingRandomSearchCVOptions.md#max_resources)
- [min\_resources](HalvingRandomSearchCVOptions.md#min_resources)
- [n\_candidates](HalvingRandomSearchCVOptions.md#n_candidates)
- [n\_jobs](HalvingRandomSearchCVOptions.md#n_jobs)
- [param\_distributions](HalvingRandomSearchCVOptions.md#param_distributions)
- [random\_state](HalvingRandomSearchCVOptions.md#random_state)
- [refit](HalvingRandomSearchCVOptions.md#refit)
- [resource](HalvingRandomSearchCVOptions.md#resource)
- [return\_train\_score](HalvingRandomSearchCVOptions.md#return_train_score)
- [scoring](HalvingRandomSearchCVOptions.md#scoring)
- [verbose](HalvingRandomSearchCVOptions.md#verbose)

## Properties

### aggressive\_elimination

• `Optional` **aggressive\_elimination**: `boolean`

This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](../grid_search.html#aggressive-elimination) for more details.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:979](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L979)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:986](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L986)

___

### error\_score

• `Optional` **error\_score**: ``"raise"``

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1005](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1005)

___

### estimator

• `Optional` **estimator**: `any`

This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:932](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L932)

___

### factor

• `Optional` **factor**: `number`

The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

**`Default Value`**

`3`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:951](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L951)

___

### max\_resources

• `Optional` **max\_resources**: `number`

The maximum number of resources that any candidate is allowed to use for a given iteration. By default, this is set `n\_samples` when `resource='n\_samples'` (default), else an error is raised.

**`Default Value`**

`'auto'`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:965](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L965)

___

### min\_resources

• `Optional` **min\_resources**: `number` \| ``"exhaust"`` \| ``"smallest"``

The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

**`Default Value`**

`'smallest'`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:972](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L972)

___

### n\_candidates

• `Optional` **n\_candidates**: `number`

The number of candidate parameters to sample, at the first iteration. Using ‘exhaust’ will sample enough candidates so that the last iteration uses as many resources as possible, based on `min\_resources`, `max\_resources` and `factor`. In this case, `min\_resources` cannot be ‘exhaust’.

**`Default Value`**

`'exhaust'`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:944](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L944)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1022](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1022)

___

### param\_distributions

• `Optional` **param\_distributions**: `any`

Dictionary with parameters names (string) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:937](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L937)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Also used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1017](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1017)

___

### refit

• `Optional` **refit**: `boolean`

If `true`, refit an estimator using the best found parameters on the whole dataset.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingRandomSearchCV` instance.

**`Default Value`**

`true`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1000](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1000)

___

### resource

• `Optional` **resource**: `string`

Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n\_iterations’ or ‘n\_estimators’ for a gradient boosting estimator. In this case `max\_resources` cannot be ‘auto’ and must be set explicitly.

**`Default Value`**

`'n_samples'`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:958](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L958)

___

### return\_train\_score

• `Optional` **return\_train\_score**: `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1012](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1012)

___

### scoring

• `Optional` **scoring**: `string`

A single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:991](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L991)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity: the higher, the more messages.

#### Defined in

[generated/model_selection/HalvingRandomSearchCV.ts:1027](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingRandomSearchCV.ts#L1027)
