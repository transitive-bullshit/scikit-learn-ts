[sklearn](../readme.md) / [Exports](../modules.md) / HalvingGridSearchCVOptions

# Interface: HalvingGridSearchCVOptions

## Table of contents

### Properties

- [aggressive\_elimination](HalvingGridSearchCVOptions.md#aggressive_elimination)
- [cv](HalvingGridSearchCVOptions.md#cv)
- [error\_score](HalvingGridSearchCVOptions.md#error_score)
- [estimator](HalvingGridSearchCVOptions.md#estimator)
- [factor](HalvingGridSearchCVOptions.md#factor)
- [max\_resources](HalvingGridSearchCVOptions.md#max_resources)
- [min\_resources](HalvingGridSearchCVOptions.md#min_resources)
- [n\_jobs](HalvingGridSearchCVOptions.md#n_jobs)
- [param\_grid](HalvingGridSearchCVOptions.md#param_grid)
- [random\_state](HalvingGridSearchCVOptions.md#random_state)
- [refit](HalvingGridSearchCVOptions.md#refit)
- [resource](HalvingGridSearchCVOptions.md#resource)
- [return\_train\_score](HalvingGridSearchCVOptions.md#return_train_score)
- [scoring](HalvingGridSearchCVOptions.md#scoring)
- [verbose](HalvingGridSearchCVOptions.md#verbose)

## Properties

### aggressive\_elimination

• `Optional` **aggressive\_elimination**: `boolean`

This is only relevant in cases where there isn’t enough resources to reduce the remaining candidates to at most `factor` after the last iteration. If `true`, then the search process will ‘replay’ the first iteration for as long as needed until the number of candidates is small enough. This is `false` by default, which means that the last iteration may evaluate more than `factor` candidates. See [Aggressive elimination of candidates](../grid_search.html#aggressive-elimination) for more details.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:966](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L966)

___

### cv

• `Optional` **cv**: `number`

Determines the cross-validation splitting strategy. Possible inputs for cv are:

**`Default Value`**

`5`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:973](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L973)

___

### error\_score

• `Optional` **error\_score**: ``"raise"``

Value to assign to the score if an error occurs in estimator fitting. If set to ‘raise’, the error is raised. If a numeric value is given, FitFailedWarning is raised. This parameter does not affect the refit step, which will always raise the error. Default is `np.nan`.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:992](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L992)

___

### estimator

• `Optional` **estimator**: `any`

This is assumed to implement the scikit-learn estimator interface. Either estimator needs to provide a `score` function, or `scoring` must be passed.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:926](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L926)

___

### factor

• `Optional` **factor**: `number`

The ‘halving’ parameter, which determines the proportion of candidates that are selected for each subsequent iteration. For example, `factor=3` means that only one third of the candidates are selected.

**`Default Value`**

`3`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:938](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L938)

___

### max\_resources

• `Optional` **max\_resources**: `number`

The maximum amount of resource that any candidate is allowed to use for a given iteration. By default, this is set to `n\_samples` when `resource='n\_samples'` (default), else an error is raised.

**`Default Value`**

`'auto'`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:952](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L952)

___

### min\_resources

• `Optional` **min\_resources**: `number` \| ``"exhaust"`` \| ``"smallest"``

The minimum amount of resource that any candidate is allowed to use for a given iteration. Equivalently, this defines the amount of resources `r0` that are allocated for each candidate at the first iteration.

**`Default Value`**

`'exhaust'`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:959](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L959)

___

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:1009](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1009)

___

### param\_grid

• `Optional` **param\_grid**: `any`

Dictionary with parameters names (string) as keys and lists of parameter settings to try as values, or a list of such dictionaries, in which case the grids spanned by each dictionary in the list are explored. This enables searching over any sequence of parameter settings.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:931](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L931)

___

### random\_state

• `Optional` **random\_state**: `number`

Pseudo random number generator state used for subsampling the dataset when `resources != 'n\_samples'`. Ignored otherwise. Pass an int for reproducible output across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:1004](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1004)

___

### refit

• `Optional` **refit**: `boolean`

If `true`, refit an estimator using the best found parameters on the whole dataset.

The refitted estimator is made available at the `best\_estimator\_` attribute and permits using `predict` directly on this `HalvingGridSearchCV` instance.

**`Default Value`**

`true`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:987](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L987)

___

### resource

• `Optional` **resource**: `string`

Defines the resource that increases with each iteration. By default, the resource is the number of samples. It can also be set to any parameter of the base estimator that accepts positive integer values, e.g. ‘n\_iterations’ or ‘n\_estimators’ for a gradient boosting estimator. In this case `max\_resources` cannot be ‘auto’ and must be set explicitly.

**`Default Value`**

`'n_samples'`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:945](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L945)

___

### return\_train\_score

• `Optional` **return\_train\_score**: `boolean`

If `false`, the `cv\_results\_` attribute will not include training scores. Computing training scores is used to get insights on how different parameter settings impact the overfitting/underfitting trade-off. However computing the scores on the training set can be computationally expensive and is not strictly required to select the parameters that yield the best generalization performance.

**`Default Value`**

`false`

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:999](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L999)

___

### scoring

• `Optional` **scoring**: `string`

A single string (see [The scoring parameter: defining model evaluation rules](../model_evaluation.html#scoring-parameter)) or a callable (see [Defining your scoring strategy from metric functions](../model_evaluation.html#scoring)) to evaluate the predictions on the test set. If `undefined`, the estimator’s score method is used.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:978](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L978)

___

### verbose

• `Optional` **verbose**: `number`

Controls the verbosity: the higher, the more messages.

#### Defined in

[generated/model_selection/HalvingGridSearchCV.ts:1014](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/model_selection/HalvingGridSearchCV.ts#L1014)
