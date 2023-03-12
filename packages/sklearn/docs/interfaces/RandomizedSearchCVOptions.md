[sklearn](../readme.md) / [Exports](../modules.md) / RandomizedSearchCVOptions

# Interface: RandomizedSearchCVOptions

## Table of contents

### Properties

- [cv](RandomizedSearchCVOptions.md#cv)
- [error\_score](RandomizedSearchCVOptions.md#error_score)
- [estimator](RandomizedSearchCVOptions.md#estimator)
- [n\_iter](RandomizedSearchCVOptions.md#n_iter)
- [n\_jobs](RandomizedSearchCVOptions.md#n_jobs)
- [param\_distributions](RandomizedSearchCVOptions.md#param_distributions)
- [pre\_dispatch](RandomizedSearchCVOptions.md#pre_dispatch)
- [random\_state](RandomizedSearchCVOptions.md#random_state)
- [refit](RandomizedSearchCVOptions.md#refit)
- [return\_train\_score](RandomizedSearchCVOptions.md#return_train_score)
- [scoring](RandomizedSearchCVOptions.md#scoring)
- [verbose](RandomizedSearchCVOptions.md#verbose)

## Properties

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:778](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L778)

___

### error\_score

• `Optional` **error\_score**: ``"raise"``

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:800](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L800)

___

### estimator

• `Optional` **estimator**: `any`

An object of that type is instantiated for each grid point. This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:732](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L732)

___

### n\_iter

• `Optional` **n\_iter**: `number`

Number of parameter settings that are sampled. n\_iter trades off runtime vs quality of the solution.

**`Default Value`**

`10`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:744](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L744)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:756](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L756)

___

### param\_distributions

• `Optional` **param\_distributions**: `any`

Dictionary with parameters names (`str`) as keys and distributions or lists of parameters to try. Distributions must provide a `rvs` method for sampling (such as those from scipy.stats.distributions). If a list is given, it is sampled uniformly. If a list of dicts is given, first a dict is sampled uniformly, and then a parameter is sampled using that dict as above.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:737](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L737)

___

### pre\_dispatch

• `Optional` **pre\_dispatch**: `string`

Controls the number of jobs that get dispatched during parallel execution. Reducing this number can be useful to avoid an explosion of memory consumption when more jobs get dispatched than CPUs can process. This parameter can be:

**`Default Value`**

`'2*n_jobs'`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:790](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L790)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo random number generator state used for random uniform sampling from lists of possible values instead of scipy.stats distributions. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:795](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L795)

___

### refit

• `Optional` **refit**: `boolean`

Refit an estimator using the best found parameters on the whole dataset.

For multiple metric evaluation, this needs to be a `str` denoting the scorer that would be used to find the best parameters for refitting the estimator at the end.

Where there are considerations other than maximum score in choosing a best estimator, `refit` can be set to a function which returns the selected `best\_index\_` given the `cv\_results`. In that case, the `best\_estimator\_` and `best\_params\_` will be set according to the returned `best\_index\_` while the `best\_score\_` attribute will not be available.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `RandomizedSearchCV` instance.

Also for multiple metric evaluation, the attributes `best\_index\_`, `best\_score\_` and `best\_params\_` will only be available if `refit` is set and all of them will be determined w.r.t this specific scorer.

See `scoring` parameter to know more about multiple metric evaluation.

**`Default Value`**

`true`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:773](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L773)

___

### return\_train\_score

• `Optional` **return\_train\_score**: `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:807](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L807)

___

### scoring

• `Optional` **scoring**: `any`

Strategy to evaluate the performance of the cross-validated model on the test set.

If `scoring` represents a single score, one can use:

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:751](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L751)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity: the higher, the more messages.

#### Defined in

[generated/model_selection/RandomizedSearchCV.ts:783](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/RandomizedSearchCV.ts#L783)
